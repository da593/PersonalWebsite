
import {useForm} from 'react-hook-form'

function ContactForm() {

    const {register, handleSubmit,formState:{errors}} = useForm();

    const validSubmission = (values) =>  {
        if (process.env.NODE_ENV !== "production") {
            console.log(process.env.NODE_ENV)
            alert("Thank you, I will respond as soon as possible!");
            window.location.reload(true);
        } 
    }

    return (
        <div className="page-wrapper">
            <div className="header-section">
                <h1>What interests you?</h1>
                <p>Tell me about yourself, your reason, and availability and I will respond as as soon as possible!</p>
            </div>
            <form className="form-section" onSubmit={handleSubmit(validSubmission)} name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p>Complete the form below to reach out to me.</p>
                <div className="form-grid">
                    <div className="input-grid">
                        <p className="mark-red" style={errors.name ? {visibility: "visible"} : {visibility:"hidden"}}>{errors.name && errors.name.message}</p>
                        <label>Name<span className="mark-red">*</span></label>
                        <input type="text" name="name" className="label-input"  {...register("name",{
                            required: "A name is required",
                            minLength: {
                                value: 3,
                                message: "A minimum of 3 characters are needed"
                            },
                            pattern: {
                                value: /^[a-zA-Z]*$/,
                                message: "Invalid name: No numbers or special characters"
                            },
                        })}/>
                    </div>
                    <div className="input-grid">
                        <p className="mark-red" >{ errors.email && errors.email.message}</p>
                        <label>Email<span className="mark-red">*</span></label>
                        <input type="text" name="email" className="label-input" {...register("email", {
                            required: "An email is required",
                            pattern: {
                                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: "Invalid Email"
                            }
                        })}/>
                    </div>
                    <div className="input-grid">
                        <label>Company</label>
                        <input type="text" name="company" className="label-input"/>
                    </div>
                    <div className="input-grid">
                        <label>Job title</label>
                        <input type="text" name="job" className="label-input"/>
                    </div>
                </div>
                <div>
                    <p className="mark-red">{errors.reason && errors.reason.message}</p>
                    <label>Reason for reaching out<span className="mark-red">*</span></label>
                    <textarea className="full-row" {...register("reason", {
                        required: "A reason is required",
                        minLength: {
                            value: 10,
                            message: "At least 10 characters must be entered",
                        },
                        maxLength: {
                            value: 500,
                            message: "Exceeded maximum characters of 500",
                        },
                    })}/>
                </div>
                <input type="submit" value="Submit" className="submit-button"/>
            </form>
        </div>
    )
}

export default ContactForm;