import React from 'react'
import {useFormikContext} from 'formik';

const SubmitButton = ({title, submitStyle, buttonColor, width, buttonType}) => {
  const [textColor, setTextButton] = useState('');

  useEffect(() => {
    if (buttonColor == 'white') {
      setTextButton('primary');
    }
  }, [buttonColor]);

  const {handleSubmit} = useFormikContext();
  return (
    <Button
      style={styles.button}
      title={title}
      color={buttonColor}
      textStyle={styles[textColor]}
      // width={width}
      buttonType
      onPress={handleSubmit}
    />
  );
};

export default SubmitButton
