import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';

import PersonalDetails from 'Components/PersonalDetails';
import Header from 'Scenes/ResumeForm/Components/Header';
import Employment from 'Components/Employment';
import Education from 'Components/Education'
import DropdownMenu from 'Components/Dropdown/DropdownMenu';
import Skills from 'Components/Skills';
import Summary from 'Components/Summary';
import BtnToSaveAndViewResume from '../../Components/BtnToSaveAndViewResume';
import { useDispatch, useSelector } from "react-redux";
import { saveResumeAction } from "../../store/actions/CVReducer";
import { getRenderedResumeData } from "../../store/selectors/CVSelector";
import {addResumeData, addResumeList, fetchResumeData, updateResumeList, updateResumeData} from "../../api/ResumeApi/resumeApi";
import { dateToSendToServer } from '../../scripts/date';
import { useNavigate, useParams } from "react-router-dom";
import { PATHS } from "../../constants/routes";

const StyledResumeForm = styled.div`
  padding: 0;
  background-color: ${props => props.theme.baseBackgroundColor};
  height: calc(100vh - 80px);
  width: 50%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  left: 0;
`

const ResumeForm = () => {
    const dispatch = useDispatch();
    const renderedResumeData = useSelector(getRenderedResumeData);
    const {id} = useParams();
    const [editMode, setEditMode] = useState(id !== 'new');
    const [initialFormData, setInitialFormData] = useState(id !== 'new' ? null : renderedResumeData);
    const navigate = useNavigate();

    useEffect(() => {
        if (id !== 'new') setEditMode(true);
    }, [id]);


    useEffect(() => {
        if (editMode) {
            fetchResumeData(id).then(({data}) => {
                setInitialFormData(data);
            })
        }
    }, []);

    const validateForm = (formValues) => {
        let isValid = true;
        let errorsObject = {};

        if(!formValues.personalDetails.userName) {
            isValid = false;
            errorsObject.personalDetails = "Обязательно для заполнения!";
        }
        if(!formValues.personalDetails.userSurname) {
            isValid = false;
            errorsObject.personalDetails = "Обязательно для заполнения!";
        }
        if(!formValues.personalDetails.email) {
            isValid = false;
            errorsObject.personalDetails = "Поле заполнено некорректно!";
        }

        if (!isValid) return errorsObject;
    };

    const handleSubmit = (formValues) => {
        if (editMode) {
            updateResume(formValues)
        } else {
            createNewResume(formValues)
        }
    };

    const createNewResume = (formValues) => {
        addResumeData(formValues).then(({data}) => {
            navigate(PATHS.constructor(data.id));
            dispatch(saveResumeAction(formValues))
        });
        addResumeList({
            jobTitle: formValues.personalDetails.jobTitle,
            dateOfCreation: dateToSendToServer,
            updateDate: dateToSendToServer
        }).then();
    }

    const updateResume = (formValues) => {
        updateResumeData(formValues, id).then(() => {
            dispatch(saveResumeAction(formValues))
        });
        updateResumeList({
            jobTitle: formValues.personalDetails.jobTitle,
            updateDate: dateToSendToServer,
            id: id
        }).then();
    }

    return (
        <StyledResumeForm>
            <header>
                <Header/>
            </header>
            <main>
                {(!editMode || initialFormData) &&
                    <Formik initialValues={initialFormData}
                            validate={(formValues) => {
                                const errors = validateForm(formValues);
                                if (!errors) dispatch(saveResumeAction(formValues));
                            }}
                            onSubmit={(formValues) =>{
                                handleSubmit(formValues)
                            }}>
                        <Form>
                            <DropdownMenu/>
                            <PersonalDetails/>
                            <Employment/>
                            <Education/>
                            <Skills/>
                            <Summary/>
                            <BtnToSaveAndViewResume editMode={editMode} id={id}/>
                        </Form>
                    </Formik>
                }
            </main>
        </StyledResumeForm>
    )
}

export default ResumeForm;
