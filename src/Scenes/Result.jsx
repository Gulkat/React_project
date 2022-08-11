import React from 'react';
import styled from 'styled-components';


const StyledResult = styled.div`
  padding-top: 20px;
  background-color: #e5e4ea;
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  right: 0;
  color: ${props => props.color};
  font-family: ${props => props.font};
  
  .result {
    display: table;
    background-color: #fff;
    margin: 30px auto ;
    width: 800px;
    height: 100%;
  }
  .resultLeft {
    width: 210px;
    background-color: #f7f7fc;
    max-width: 210px;
    display: table-cell;
    padding: 50px 30px 20px;
}
  .resultBox {
    display: flex;
    justify-content: center;
  }
  .space {
    opacity: 0;
  }
  .resultSpeciality {
    text-align: center;
    margin: 0;
  }
  .contact {
    display: flex;
    gap: 10px;
  }
  
  .resultRight {
    padding: 50px 30px 20px;
  }

  
`

const Result = ({color, font, userName, userSurname, jobTitle, userEmail}) => {
    return (
        <StyledResult color={color} font={font}>
            <div className={'result'}>
                <div className={'resultLeft'}>
                    <div className={'profile'}>
                        <div className={'profileBox'}>
                            <h2 className={'titleBox'}>Контакты</h2>
                            <div className={'contact'}>
                                <div className={'contactIcon'}>ико</div>
                                <div className={'contactText'}>{userEmail}</div>
                            </div>
                            <div className={'contact'}>
                                <div className={'contactIcon'}>ико</div>
                                <div className={'contactText'}>данные</div>
                            </div>
                            <div className={'contact'}>
                                <div className={'contactIcon'}>ико</div>
                                <div className={'contactText'}>данные</div>
                            </div>
                        </div>
                        <div className={'profileBox'}>
                            <h2 className={'titleBox'}>Навыки</h2>
                            <div className={'skill'}></div>
                        </div>
                    </div>
                </div>
                <div className={'resultRight'}>
                    <div className={'resultBox'}>
                        <h1 className={'resultName'}>{userName}<span className={'space'}>f</span></h1>
                        <h1 className={'resultName'}>{userSurname}</h1>
                    </div>
                    <p className={'resultSpeciality'}>{jobTitle}</p>
                    <div className={'work'}>
                        <div className={'workBox'}>
                            <h2 className={'titleBox'}>Обо мне</h2>
                            <div className={'summery'}></div>
                        </div>
                        <div className={'workBox'}>
                            <h2 className={'titleBox'}>Опыт работы</h2>
                            <div className={'experience'}></div>
                        </div>
                        <div className={'workBox'}>
                            <h2 className={'titleBox'}>Образование</h2>
                            <div className={'education'}></div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledResult>
    )
}
export default Result