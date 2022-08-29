import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {fetchResumeList} from '../api/ResumeApi/resumeApi';
import ResumeTable from './ResumeTable';
import Loading from '../Components/Loading';
import EmptyList from '../Components/EmptyList';

const StyledResumeList = styled.div`
    width: 80vh;
    max-width: 900px;
    margin: 50px auto;
  
    .nameTable{
      font-size: 40px;
      font-family: "Century Gothic";
      text-align: center;
  }
    `

const ResumeList = () => {
    const [resumeList, setResumeList] = useState(undefined);
    // const { resumeID } = useParams();

    const columns = [
        {name:"Должность", datakey:"jobTitle"},
        {name:"Дата создания", datakey:"dateOfCreation"},
        {name:"Дата обновления", datakey: "updateDate"}
    ]

    const getResumeList = () => {
        fetchResumeList().then(({data}) => {
            console.log(data)
            setResumeList(data);
        }).catch(() => {});
    }

    useEffect(() => {
        getResumeList();
    }, []);


    const getResumeTable = () => {
        if(resumeList === undefined) return <Loading/>
        if (!resumeList.length) return <EmptyList/>
        return <ResumeTable columnsFromProps={columns} tableDataFromProps={resumeList} isPaginable pageSize={3}/>
    }

    return (
        <StyledResumeList>
            <div className={'nameTable'}>Список сохраненных резюме</div>

            {getResumeTable()}
        </StyledResumeList>
    )
}

export default ResumeList