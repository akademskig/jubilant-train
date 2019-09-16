import React from "react";


import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "m.susek@gmail.com",
            password: "biserka"
        }
    }

    handleSubmit = event => {
        this.setState({
            name: "",
            email: ""
        })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2 >I already have an account.</h2>
                <span className="title">Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        label="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn