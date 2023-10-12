import { useEffect, useState } from "react";
import ValidationUser from "../componets/ValidationUser";

const useForm = (handlingFormSubmit) => {
    const [values,setValues] = useState({
        username:"",
        email:"",
        password:""
    })

    const [errors,setErrors]=useState({});
    const [dataCorrect,setDataCorrect]=useState(false);

    const handleChange = (e) => {
        e.preventDefault();

        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const fomHandler = (e) => {
        e.preventDefault();
        setErrors(ValidationUser(values))
        setDataCorrect(true);
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataCorrect ){
            handlingFormSubmit(true)
        }
    },[errors,dataCorrect,handlingFormSubmit])


    return {handleChange,fomHandler,errors,values}
}

export default useForm;