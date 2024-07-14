import { configureStore, Middleware } from '@reduxjs/toolkit'
import { useDispatch, useSelector} from 'react-redux'
import blogsReducer from './slice/blogsSlice'
import authReducer from './slice/authSlice'
import { authMiddleware } from './middlewares/auth-middleware'
import uiReducer from './slice/uiSlice'

const middlewares = [
    authMiddleware
] as Middleware[]

export const store = configureStore({
    reducer: {
        auth: authReducer,
        blogs: blogsReducer,
        ui: uiReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(middlewares),

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
// export const useAppStore = useStore.withTypes<AppStore>()