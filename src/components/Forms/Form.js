import React from 'react';
import {Formik} from 'formik';

const AppForm = ({className ,initialValues, onSubmit, validationSchema, children, autoComplete}) => {
  const Class = className ? className : "form"
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <><form
              className={Class}
              role="form"
              autoComplete={autoComplete}
            >{children}</form></>}
    </Formik>
  );
};

export default AppForm;