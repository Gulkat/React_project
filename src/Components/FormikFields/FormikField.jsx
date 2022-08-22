import React from 'react';
import styled from 'styled-components';

import { useField } from 'formik';

const StyledErrorForm = styled.p`
  margin-top: 0;
  color: red;
  font-family: "Century Gothic";
`

const FormikField = ({props}) => {
    const [field, meta] = useField(props.name);
    return (
        <React.Fragment>
            <div {...field} {...props}  />
            {(meta.touched && meta.error) &&
                <StyledErrorForm>{meta.error}</StyledErrorForm>
            }
        </React.Fragment>
    )
}

export default FormikField