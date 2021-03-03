import React from 'react';
import { Formik } from "formik";
import * as Yup from 'yup';

import SocialButton from "../../components/SocialButton";
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
        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // console.log(values)
            handleSignIn(values);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors, 
            touched, 
            isSubmitting,
          }) => (
            // eslint-disable-next-line jsx-a11y/no-redundant-roles
            <form
              className="form"
              role="form"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <h2 className="text-center">Sign In</h2>
              <div>
                <SocialButton />
              </div>
              <div className="form-group">
                <input
                  onChange={handleChange}
                  // value={values.ingredient1}
                  onBlur={handleBlur}
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required="required"
                  id="username"
                  required
                />
                {errors.username && touched.username ? <div style={{color: 'red'}}>{errors.username}</div> : null}
              </div>
              <div className="form-group">
                <input
                  onChange={handleChange}
                  // value={values.ingredient1}
                  onBlur={handleBlur}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required="required"
                  id="password"
                  required
                />
               {errors.password && touched.password ? <div>{errors.password}</div> : null}
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Log in
                </button>
              </div>
            </form>
          )}
        </Formik>
        <p className="text-center">
          <a href="#">Create an Account</a>
        </p>
      </div>
    );
}

export default SignIn

