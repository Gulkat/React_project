import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {fetchResumeList} from '../api/resumeApi';
import ResumeTable from './ResumeTable';

const StyledResumeList = styled.div`
    
    `

const ResumeList = () => {
    const [resumeList, setResumeList] = useState(undefined);

    const getResumeList = () => {
        fetchResumeList().then(({data}) => {
            setResumeList(data);
        }).catch(() => {});
    }

    useEffect(() => {
        getResumeList()
    }, []);


    const getResumeTable = () => {
        if(resumeList === undefined) return <div>list loading</div>
        if (!resumeList.length) return <div>No resume create yet</div>
        return <ResumeTable/>
    }

    return (
        <StyledResumeList>
            <div>Список</div>

            {getResumeTable()}
        </StyledResumeList>
    )
}

export default ResumeList