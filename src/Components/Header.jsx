import React from 'react';
import styled from 'styled-components';
import PersonalDetails from "./PersonalDetails";

const StyledHeader = styled.div`
  background-color: #f7f7fc;
  margin: 0;
  padding: 0;
  
  .headerMenu {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px 0 0 0;
    margin: 0;
    width: 100%;
  }
  .headerItem {
    list-style-type: none;
  }
  .headerLink {
    font-family: "Century Gothic";
    text-decoration: none;
    color: #7e8bc4;
    font-size: 18px;
    text-transform: uppercase;
  }
  .headerLink:hover {
     color: #2392fe;
   }
`

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            RenderComponentState: false
        }
    }

    addComponent = () => {
        this.setState({RenderComponentState: true})
    }

    render() {
        return (
            <StyledHeader>
                <nav className={'headerNav'}>
                    <ul className={'headerMenu'}>
                        <li className={'headerItem'}><a href={''} className={'headerLink'} onClick={this.addComponent}>Контакты</a></li>
                        <li className={'headerItem'}><a href={''} className={'headerLink'}>Опыт</a></li>
                        <li className={'headerItem'}><a href={''} className={'headerLink'}>Образование</a></li>
                        <li className={'headerItem'}><a href={''} className={'headerLink'}>Навыки</a></li>
                        <li className={'headerItem'}><a href={''} className={'headerLink'}>Обо мне</a></li>
                    </ul>
                </nav>
                {this.state.RenderComponentState && <PersonalDetails/>}
            </StyledHeader>

        );
    }
}

export default Header;

