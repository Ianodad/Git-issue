import React from 'react';
import * as Yup from 'yup';

import SocialButton from "../../components/SocialButton";
import {Form, FormField, SubmitButton} from '../../components/Forms';
import './SignIn.css'

function SignIn() {
  const validationSchema = Yup.object().shape({
  username : Yup.string()
    .required()
    .label('Password'),
  password: Yup.string().required().min(3, 'pretty sure this will be hacked').label('Password'),
  
});

  const handleSignIn=({username, password})=>{
      console.log(username)
      console.log(password)
  }
    return (
      <div className="signup-form">
        <Form
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSignIn(values)}
        >
          <h2 className="text-center">Sign In</h2>
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

          />
          <FormField
            // value={values.ingredient1}
            type="password"
            className="form-control"
            placeholder="Password"
            required="required"
            id="password"
          />
          <SubmitButton title="Sign In" />
        </Form>

        <div className="text-center">
          <p>Create an Account</p>
        </div>
      </div>
    );
}

export default SignIn

