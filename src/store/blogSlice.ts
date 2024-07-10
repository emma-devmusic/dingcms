import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface BlogState {
    html:string;
    id:string;
    img: [{link: string}];
    title:string;
}
interface CompanyState {
    blogs: BlogState[],
    name: string
}
interface CompaniesState {
    pages: CompanyState[];
    pageSelected: CompanyState | null;
}

const initialState: CompaniesState = {
    pages: [],
    pageSelected: null
}

const pageSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        getPages(state, action: PayloadAction<string>) {
            //middleware
        },
        setPages(state, action:PayloadAction<CompanyState[]>){
            state.pages = action.payload
        },
        setPageSelected(state, action: PayloadAction<CompanyState>){
            state.pageSelected = action.payload
        }
    },
})

export const { getPages, setPages, setPageSelected } = pageSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default pageSlice.reducer