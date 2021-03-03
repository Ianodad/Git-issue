import React from 'react';
import { Formik } from "formik";
import * as Yup from 'yup';

import SocialButton from "../../components/SocialButton";
import {Form, FormField, SubmitButton} from '../../components/Forms';
import './SignUp.css'

function SignUp() {
    const validationSchema = Yup.object().shape({
  username : Yup.string()
    .required()
    .label('Password'),
  email: Yup.string().required().label("Email"),
  password: Yup.string().required().min(3, 'pretty sure this will be hacked').label('Password'),
  
});

  const handleSignUp=({username, password})=>{
      console.log(username)
      console.log(password)
  }
    return (
          <div className="signup-form">
            <Form
          initialValues={{ username: "", email:"", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSignUp(values)}
        >
          <h2 className="text-center">Sign Up</h2>
          <div>
            <SocialButton />
          </div>
          <FormField
            // value={values.ingredient1}
            type="text"
            className="form-control"
            placeholder="Username"
            required="required"
            id="username"
            required
          />
           <FormField
            // value={values.ingredient1}
            type="email"
            className="form-control"
            placeholder="Email"
            required="required"
            id="email"
            required
          />
           <FormField
            // value={values.ingredient1}
            type="password"
            className="form-control"
            placeholder="Password"
            required="required"
            id="password"
            required
          />
          <FormField
            // value={values.ingredient1}
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            required="required"
            id="password"
            required
          />
          <SubmitButton title="Sign Up" />
        </Form>
      </div>
    )
}

export default SignUp
