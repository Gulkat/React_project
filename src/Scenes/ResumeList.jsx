import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Link, useNavigate, useParams} from 'react-router-dom';

import { fetchResumeList } from '../api/ResumeApi/resumeApi';
import ResumeTable from './ResumeTable';
import Loading from '../Components/Loading';
import EmptyList from './Errors/EmptyList';
import { PATHS } from "../constants/routes";
import { dateToShowToUser } from "../scripts/date";
import {ROUTES} from "../constants/routes";

const StyledResumeList = styled.div`
  background-color: #f7f7fc;
  width: 100%;
  margin: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  text-align: center;
  align-items: center;

  
  .nameTable{
    font-size: 40px;
    font-family: ${props => props.theme.baseFont};
    text-align: center;
  }
  .btnWrapper {
    margin: 100px auto;
  }
  .btnToStart{
    width: 250px;
    padding: 15px 20px;
    font-weight: 900;
    background-color:${props => props.theme.accentColor};
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 4px;
    cursor: pointer;

  }
  .linkToView {
    font-family: ${props => props.theme.baseFont};
    font-size: 20px;
    text-decoration: none;
    color: #fff;
  }
    `

const ResumeList = () => {
    const [resumeList, setResumeList] = useState(undefined);
    const navigate = useNavigate();

    const columns = [
        {name:'Должность', dataKey: 'jobTitle'},
        {name:'Дата создания', dataKey: 'dateOfCreation', cellRenderer: (cellData, rowData) => {
            return dateToShowToUser(cellData)
            }},
        {name:'Дата обновления', dataKey: 'updateDate', cellRenderer: (cellData, rowData) => {
                return dateToShowToUser(cellData)
            }},
    ];

    const getResumeList = () => {
        fetchResumeList().then(({data}) => {
            const preparedDate = data.map ((entry, index) => {
                return ({...entry, id: index + 1})
            })
            setResumeList(preparedDate);
        }).catch(error => console.log(error));
    };

    useEffect(() => {
        getResumeList();
    }, []);


    const getResumeTable = () => {
        if(resumeList === undefined) return <Loading/>;
        if (!resumeList.length) return <EmptyList/>;
        return <ResumeTable columnsFromProps={columns}
                            tableDataFromProps={resumeList}
                            isPaginable pageSize={5}
                            rowClickHandler={(rowData) => {navigate(PATHS.constructor(rowData.id))}} />
    };

    return (
        <StyledResumeList>
            <React.Fragment>
                <div className={'nameTable'}>Список сохраненных резюме</div>
                {getResumeTable()}
            </React.Fragment>
            {/*<div className={'btnWrapper'}>*/}
            {/*    <button type={'button'} className={'btnToStart'}>*/}
            {/*        <Link to={ROUTES.startPage} className={'linkToView'}>На главную</Link>*/}
            {/*    </button>*/}
            {/*</div>*/}
        </StyledResumeList>
    );
};

export default ResumeList;