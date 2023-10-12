import useForm from "../utils/useForm";

const SignupForm = ({handlingFormSubmit}) => {

    const {handleChange,fomHandler,errors,values} =useForm(handlingFormSubmit)
    return(
        <>
        <div className="container">
            <div className="innerContainer">
                <form className="form-container">

                    <div className="form-input-container">
                        <label htmlFor="username">FullName</label>
                        <input id="username" type="text" name="username" value={values.username} onChange={handleChange}/>
                        {errors.username && <p className="error-message">{errors.username}</p>}
                    </div>

                    <div className="form-input-container">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" value={values.email} onChange={handleChange}/>
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>

                    <div className="form-input-container">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" value={values.password} onChange={handleChange}/>
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>

                    <div className="form-input-container">
                        <button onClick={fomHandler} type="submit">Submit</button>
                    </div>

                </form>
            </div>
        </div>
        </>
    )
}
export default SignupForm;