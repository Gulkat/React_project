import React from 'react';
import styled from 'styled-components';

import { useField } from 'formik';

const StyledErrorForm = styled.p`
  margin-top: 0;
  color: red;
  font-family: "Century Gothic";
`

const FormikInput = ({props}) => {
    const [field, meta] = useField(props.name);
    return (
        <React.Fragment>
            <input {...field} {...props} value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
            {(meta.touched && meta.error) &&
                <StyledErrorForm>{meta.error}</StyledErrorForm>
            }
        </React.Fragment>
    )
}

export default FormikInput