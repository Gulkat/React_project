import React from 'react';
import styled from 'styled-components';

import { useField } from 'formik';

const StyledErrorLoginForm = styled.p`
  margin-top: 0;
  color: red;
  font-family: "Century Gothic";
`


const FormikInput = (props) => {
    const [field, meta, helpers] = useField(props.name);
    return (
        <React.Fragment>
            <input {...props} value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
            {(meta.touched && meta.error) &&
                <StyledErrorLoginForm>{meta.error}</StyledErrorLoginForm>
            }
        </React.Fragment>
    )
}

export default FormikInput