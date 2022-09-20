import React from 'react';
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
import {addResumeData, addResumeList, updateResumeList} from "../../api/ResumeApi/resumeApi";
import { dateToSendToServer } from '../../scripts/date';
import { DateTime } from "luxon";

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

    // const ValidateEmail = (email) => {
    //     return ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    // }

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
        addResumeData(formValues).then(() => {
            dispatch(saveResumeAction(formValues))
        });
        addResumeList({
            jobTitle: formValues.jobTitle,
            dateOfCreation: dateToSendToServer,
            updateDate: dateToSendToServer
        }).then();
        updateResumeList({
            jobTitle: formValues.jobTitle,
            updateDate: dateToSendToServer
        }).then();
    };

    return (
        <StyledResumeForm>
            <header>
                <Header/>
            </header>
            <main>
                <Formik initialValues={renderedResumeData}
                        validate={(formValues) => {
                        const errors = validateForm(formValues);
                        if (!errors) dispatch(saveResumeAction(formValues));
                        console.log('dispatch', saveResumeAction(formValues))
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
                        <BtnToSaveAndViewResume/>
                    </Form>
                </Formik>
            </main>
        </StyledResumeForm>
    )
}

export default ResumeForm;
