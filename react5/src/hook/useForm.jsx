import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const onInputChange = ({ target }) => {
        const { username, value } = target;
        setFormState({
            ...formState,
            [ username ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}