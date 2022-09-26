import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';

const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 30px 0;
  width: calc(50% - 20px);
  
  .labelText {
    font-family: ${props => props.theme.baseFont};
    color: ${props => props.theme.accentColor};
    font-size: 16px;
    min-width: 240px;
    text-align: center;
  }

  .selectValue {
    font-size: 18px;
    font-family: ${props => props.theme.baseFont};
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 rgba(255, 255, 255, .9) inset, 0 1px 3px rgba(0, 0, 0, .1);
    border-radius: 3px;
    min-width: 190px;
    width: 65%;
  }
`

function FormikDropdown({options, nameKey, idKey, label, name}) {
    const [field, meta, helpers] = useField(name);

    return <StyledDropdown>
        <p className={'labelText'}>{label}</p>
        <select value={field.value} onChange={(event) => helpers.setValue(event.target.value)} className={'selectValue'}>
            {options.map(option => {
                return <option key={option[idKey]} value={option[idKey]}>{option[nameKey]}</option>;
            })};
        </select>
    </StyledDropdown>;
}

export default FormikDropdown;