import React, {} from 'react'
import {useFormikContext} from 'formik';

const SubmitButton = ({title, style}) => {



  const {handleSubmit} = useFormikContext();
  return (
    <div className="form-group">
      <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block" style={{...style}}>
                  {title}
       </button>
    {/* <Button
      style={styles.button}
      title={title}
      color={buttonColor}
      textStyle={styles[textColor]}
      // width={width}
      buttonType
      onPress={handleSubmit}
    /> */}
    </div>
  );
};

export default SubmitButton
