
import React from 'react';


const ErrorMessage = ({error, visible}) => {
  if (!visible || !error) {
    return null;
  }

  return <p style={{color:"red"}}>{error}</p>;
};


export default ErrorMessage;