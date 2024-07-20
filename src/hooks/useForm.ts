import { useState, ChangeEvent } from "react";

export const useForm = (initialState: any) => {
    
    const [values, setValues] = useState(initialState);

    const reset = (st: any) => {
        setValues(st);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return [values, handleInputChange, reset];
};