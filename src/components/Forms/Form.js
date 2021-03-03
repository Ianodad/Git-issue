import React from 'react';
import {Formik} from 'formik';

const AppForm = ({initialValues, onSubmit, validationSchema, children, autoComplete}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <><form
              className="form"
              role="form"
              autoComplete={autoComplete}
            >{children}</form></>}
    </Formik>
  );
};

export default AppForm;