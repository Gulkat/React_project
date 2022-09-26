import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 47%;
  background-color: #f7f7fc;
  margin: 0;
  padding: 0;
  position: fixed;
  align-items: center;
  z-index: 9;

  
  .headerNav {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .headerMenu {
    display: flex;
    justify-content: space-around;
    padding: 10px 0 10px 10px;
    margin: 0;
    width: 100%;

  }
  .headerItem {
    list-style-type: none;
  }
  .headerLink {
    font-family: ${props => props.theme.baseFont};
    text-decoration: none;
    color: ${props => props.theme.accentColor};
    font-size: 16px;
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
    };

    render() {
        return (
            <StyledHeader>
                <nav className={'headerNav'}>
                    <ul className={'headerMenu'}>
                        <li className={'headerItem'}><a href={'#personalDetails'} className={'headerLink'}>Контакты</a></li>
                        <li className={'headerItem'}><a href={'#employment'} className={'headerLink'}>Опыт</a></li>
                        <li className={'headerItem'}><a href={'#education'} className={'headerLink'}>Образование</a></li>
                        <li className={'headerItem'}><a href={'#skills'} className={'headerLink'}>Навыки</a></li>
                        <li className={'headerItem'}><a href={'#summary'} className={'headerLink'}>Обо мне</a></li>
                    </ul>
                </nav>
            </StyledHeader>
        );
    };
}

export default Header;

