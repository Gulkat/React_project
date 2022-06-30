import React from 'react';
import { MyContext } from '../Scenes/ResumeForm';
import styled from 'styled-components'

const StyledPersonalDetails = styled.h1`
  color: darkred;
  font-size: 16px;
`

class PersonalDetails extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'header'}>
                <h1>Введите вашу контактную информацию</h1>
                <h2>Это позволит работодатель узнать, как с вами можно связаться</h2>
                <input type={'text'} placeholder={'Name'}/>
            </div>
            // <div className={'body'}>
            //     <MyContext.Consumer>
            //         {/*{value => <div>{value}</div>}*/}
            //     </MyContext.Consumer>
            // </div>
        )
    }
}

export default PersonalDetails