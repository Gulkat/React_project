import React from 'react';
import styled from 'styled-components'

const StyledPersonalDetails = styled.div`
 
  .sectionName {
    color: black;
    font-size: 50px;
  }
  .description {
    color: #7e8bc4;
    font-size: 18px;
    
  }
`

class PersonalDetails extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledPersonalDetails>
                <h1 className={'sectionName'}>Введите вашу контактную информацию</h1>
                <h2 className={'description'}>Это позволит работодателю узнать, как с вами можно связаться</h2>
                <input type={'text'} placeholder={'Name'}/>
            </StyledPersonalDetails>

        )
    }
}

export default PersonalDetails;
