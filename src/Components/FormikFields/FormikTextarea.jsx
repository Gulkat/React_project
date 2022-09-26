import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

import { useField } from 'formik';

const StyledErrorForm = styled.p`
  margin-top: 0;
  color: red;
  font-family: ${props => props.theme.baseFont};
`

const FormikTextarea = (props) => {
    const [field, meta] = useField(props.name);
    const ref = useRef();

    useEffect(() => {
        if (meta.touched && meta.error) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }, [meta.touched, meta.error]);

    return (
        <React.Fragment>
            <textarea ref={ref} {...field} {...props} value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
            {(meta.touched && meta.error) &&
                <StyledErrorForm>{meta.error}</StyledErrorForm>
            }
        </React.Fragment>
    );
};

export default FormikTextarea;