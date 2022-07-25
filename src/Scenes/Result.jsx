import React from 'react';
import styled from 'styled-components';


const StyledResult = styled.div`
  background-color: #e5e4ea;
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
  right: 0;
  
  .result {
    background-color: #fff;
    margin: 30px auto ;
    width: 70%;
    height: 100%;
  }
  .resultHeader {
    display: flex;
    gap: 100px;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    padding-top: 50px;
  }
  .contact {
    display: flex;
    gap: 10px;
  }
  .resultContent {
    display: flex;
    margin: 30px 0 0 50px;
  }
  .profile {
    margin-right: 100px;
    flex-shrink: 0;
  }
  
  .workBox {
    
  }
  
`

function Result({userName}) {
    return (
        <StyledResult>
            <div className={'result'}>
                <div className={'resultHeader'}>
                    <div className={'userPhoto'}>Photo</div>
                    <div className={'resultBox'}>
                        <h1 className={'resultName'}>{userName}</h1>
                        <p className={'resultSpeciality'}>Front-end developer</p>
                    </div>
                </div>
                <div className={'resultContent'}>
                    <div className={'profile'}>
                        <div className={'profileBox'}>
                            <h2 className={'titleBox'}>Контакты</h2>
                            <div className={'contact'}>
                                <div className={'contactIcon'}>иконка</div>
                                <div className={'contactText'}>данные</div>
                            </div>
                            <div className={'contact'}>
                                <div className={'contactIcon'}>иконка</div>
                                <div className={'contactText'}>данные</div>
                            </div>
                            <div className={'contact'}>
                                <div className={'contactIcon'}>иконка</div>
                                <div className={'contactText'}>данные</div>
                            </div>
                        </div>
                        <div className={'profileBox'}>
                            <h2 className={'titleBox'}>Навыки</h2>
                            <div className={'skill'}></div>
                        </div>
                    </div>
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