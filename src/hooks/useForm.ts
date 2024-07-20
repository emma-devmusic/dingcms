import { useState, ChangeEvent } from "react";

type FormState<T> = {
    [K in keyof T]: string;
}

type ReturnTypes<T> = [FormState<T>, (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void, () => void];

export const useForm = <T extends Record<string, any>>(initialState: T): ReturnTypes<T> => {
    const [values, setValues] = useState<FormState<T>>(initialState);

    const reset = () => {
        setValues(initialState);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return [values, handleInputChange, reset];
};