

const ValidationUser = (values) => {
    const errors = {};

    if(!values.username){
        errors.username="Name is requird."
    }
    if(!values.email){
        errors.email="Email is requird."
    }else if(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(values.email)){
        errors.email="Email is not valid."
    }
    if(!values.password){
        errors.password="Password is requird."
    }else if(values.password.length < 5 ){
        errors.password="invalid password."
    }
    console.log(errors)

    return errors;
}
export default ValidationUser;