import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import Result from 'Scenes/Result';
import { useParams } from "react-router-dom";
import { saveResumeAction } from "../store/actions/CVReducer";
import { fetchResumeData } from "../api/ResumeApi/resumeApi";
import { useDispatch } from "react-redux";

const StyledResumePreview = styled.div`
  height: calc(100vh - 150px);
  .resultWrapper {
    width: 100%;
  }
 
  .result {
    height: 800px;
    width: 100%;
  }

`

const ResumePreview = () => {
    let {id} = useParams();
    const [loadingState, setLoadingState] = useState(!!id);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            fetchResumeData(id).then(({data}) => {
                dispatch(saveResumeAction(data));
                setLoadingState(false);
            });
        }
    }, []);

    return (
        <StyledResumePreview>
            <div className={'preview'}>
                <Result/>
            </div>
        </StyledResumePreview>

    );
};

export default ResumePreview;