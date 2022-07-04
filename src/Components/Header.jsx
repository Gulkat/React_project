import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: #f7f7fc;
  margin: 0;
  padding: 0;
  
  .headerMenu {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 15px;
  }
  .headerItem {
    list-style-type: none;
  }
  .headerLink {
    text-decoration: none;
    color: #7e8bc4;
    font-size: 20px;
    text-transform: uppercase;
  }
  .headerLink:hover {
     color: #2392fe;
   }
`

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledHeader>
                <nav className={'headerNav'}>
                    <ul className={'headerMenu'}>
                        <li className={'headerItem'}><a href={''} className={'headerLink'}>Контакты</a></li>
                        <li className={'headerItem'}><a href={''} className={'headerLink'}>Опыт</a></li>
                        <li className={'headerItem'}><a href={''} className={'headerLink'}>Образование</a></li>
                        <li className={'headerItem'}><a href={''} className={'headerLink'}>Навыки</a></li>
                        <li className={'headerItem'}><a href={''} className={'headerLink'}>Об</a></li>
                        <li className={'headerItem'}><a href={''} className={'headerLink'}>Закончить</a></li>
                    </ul>
                </nav>
            </StyledHeader>
        );
    }
}

export default Header;

