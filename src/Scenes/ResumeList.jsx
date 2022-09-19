import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import { fetchResumeList } from '../api/ResumeApi/resumeApi';
import ResumeTable from './ResumeTable';
import Loading from '../Components/Loading';
import EmptyList from '../Components/EmptyList';
import { PATHS } from "../constants/routes";
import { dateToShowToUser } from "../scripts/date";

const StyledResumeList = styled.div`
    width: 80vh;
    max-width: 900px;
    margin: 50px auto;
  
    .nameTable{
      font-size: 40px;
      font-family: ${props => props.theme.baseFont};
      text-align: center;
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
        {name:'Дата обновления', dataKey: 'updateDate'}
    ];

    const getResumeList = () => {
        fetchResumeList().then(({data}) => {
            const preparedDate = data.map ((entry, index) => {
                return ({...entry, id: index})
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
                            rowClickHandler={(rowData) => {navigate(PATHS.preview(rowData.id))}} />
    };

    return (
        <StyledResumeList>
            <div className={'nameTable'}>Список сохраненных резюме</div>

            {getResumeTable()};
        </StyledResumeList>
    );
};

export default ResumeList;