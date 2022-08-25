import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getRenderedResumeData } from '../store/selectors/CVSelector';


const StyledResult = styled.div`
  background-color: #e5e4ea;
  height: calc(100vh - 80px);
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
    margin-top: 10px;
  }
  
  .resultRight {
    padding: 50px 30px 20px;
  }

  
`

const Result = ({color, font}) => {
    const renderedResumeData = useSelector(getRenderedResumeData);

    return (
        <StyledResult color={color} font={font}>
            <div className={'result'}>
                <div className={'resultLeft'}>
                    <div className={'profile'}>
                        <div className={'profileBox'}>
                            <h2 className={'titleBox'}>Контакты</h2>
                            <div className={'contact'}>
                                <div className={'contactIcon'}><FontAwesomeIcon icon={faEnvelope} /></div>
                                <div className={'contactText'}>{renderedResumeData.email}</div>
                            </div>
                            <div className={'contact'}>
                                <div className={'contactIcon'}><FontAwesomeIcon icon={faPhone} /></div>
                                <div className={'contactText'}>{renderedResumeData.phone}</div>
                            </div>
                            <div className={'contact'}>
                                <div className={'contactIcon'}><FontAwesomeIcon icon={faLocationDot} /></div>
                                <div className={'contactText'}>{renderedResumeData.city}</div>
                            </div>
                        </div>
                        <div className={'profileBox'}>
                            <h2 className={'titleBox'}>Навыки</h2>
                            <div className={'skill'}>{renderedResumeData.skill}</div>
                        </div>
                    </div>
                </div>
                <div className={'resultRight'}>
                    <div className={'resultBox'}>
                        <h1 className={'resultName'}>{renderedResumeData.userName}<span className={'space'}>f</span></h1>
                        <h1 className={'resultName'}>{renderedResumeData.userSurname}</h1>
                    </div>
                    <p className={'resultSpeciality'}>{renderedResumeData.jobTitle}</p>
                    <div className={'work'}>
                        <div className={'workBox'}>
                            <h2 className={'titleBox'}>Обо мне</h2>
                            <div className={'summary'}>{renderedResumeData.summary}</div>
                        </div>
                        <div className={'workBox'}>
                            <h2 className={'titleBox'}>Опыт работы</h2>

                            <div>Должность </div>
                            <div>Работодатель </div>
                            <div>Дата начала </div>
                            <div>Дата окончания </div>
                            <div>Город </div>
                            <div>Описание</div>

                        </div>
                         <div className={'workBox'}>
                            <h2 className={'titleBox'}>Образование</h2>

                                <div>Учебное заведение {renderedResumeData.institution}</div>
                                <div>Степень {renderedResumeData.degree}</div>
                                <div>Дата окончания {renderedResumeData.graduationDate}</div>
                                <div>Город {renderedResumeData.locationOfTheInstitution}</div>
                                <div>Описание {renderedResumeData.description}</div>

                        </div>
                    </div>
                </div>
            </div>
        </StyledResult>
    )
}
export default Result;