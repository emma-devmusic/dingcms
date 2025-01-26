import Swal from "sweetalert2";
import { Dispatch, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { setIsLoading } from "../slice/uiSlice";
import { getterEntities } from "../../services/entity";
import { setEntities } from "../slice/entitySlice";
import { setBlogType } from "../slice/blogsSlice";

export const entityMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: PayloadAction<any>) => {

        next(action);

        if (action.type === 'entity/getEntities') {
            state.dispatch(setIsLoading(true))
            try {
                const entities = await getterEntities()
                state.dispatch(setEntities(entities))
            } catch (err) {
                Swal.fire('Error', 'Ocurrió un Error!', 'error');
            }
            state.dispatch(setIsLoading(false))
        }

        if (action.type === 'entity/setSelectedEntity') {
            state.dispatch(setBlogType('blogs'));
            localStorage.setItem('entity-selected', JSON.stringify(action.payload))
        }
    }
}