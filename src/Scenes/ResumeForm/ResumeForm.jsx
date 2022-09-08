import React from 'react';
import styled from 'styled-components';
import {Form, Formik} from 'formik';

import PersonalDetails from 'Components/PersonalDetails';
import Header from 'Scenes/ResumeForm/Components/Header';
import Employment from 'Components/Employment';
import Education from 'Components/Education'
import DropdownMenu from 'Components/Dropdown/DropdownMenu';
import Skills from 'Components/Skills';
import Summary from 'Components/Summary';
import BtnToSaveAndViewResume from '../../Components/BtnToSaveAndViewResume';
import { useDispatch, useSelector } from "react-redux";
import {saveResumeAction} from "../../store/actions/CVReducer";
import { getRenderedResumeData } from "../../store/selectors/CVSelector";
import {addResumeData, addResumeList} from "../../api/ResumeApi/resumeApi";
import {dateToSendToServer} from '../../scripts/date';

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

    const validateForm = (formValues) => {
        let isValid = true;
        let errorsObject = {};

        if(!formValues.userName) {
            isValid = false;
            errorsObject.personalDetails = "Обязательно для заполнения!";
        }
        if(!formValues.userSurname) {
            isValid = false;
            errorsObject.personalDetails = "Обязательно для заполнения!";
        }
        if(!formValues.email) {
            isValid = false;
            errorsObject.personalDetails = "Обязательно для заполнения!";
        }
        if(!formValues.phone) {
            isValid = false;
            errorsObject.personalDetails = "Обязательно для заполнения!";
        }
        if(!formValues.city) {
            isValid = false;
            errorsObject.personalDetails = "Обязательно для заполнения!";
        }
        if(!formValues.jobTitle) {
            isValid = false;
            errorsObject.personalDetails = "Обязательно для заполнения!";
        }

        if (!isValid) return errorsObject;
    };

    const handleSubmit = (formValues) => {
        addResumeData({
            // userName: formValues.userName,
            // userSurname: formValues.userSurname,
            // email: formValues.email,
            // phone: formValues.phone,
            // city: formValues.city,
            // jobTitle: formValues.jobTitle,
            // positionHeld: formValues.positionHeld,
            // employer: formValues.employer,
            // startDate: formValues.startDate,
            // endDate: formValues.endDate,
            // workLocation: formValues.workLocation,
            // responsibilities: formValues.responsibilities,
            // institution: formValues.institution,
            // degree: formValues.degree,
            // graduationDate: formValues.graduationDate,
            // locationOfTheInstitution: formValues.locationOfTheInstitution,
            // description: formValues.description,
            // skill: formValues.skill
        }).then(() => {
            dispatch(saveResumeAction({
                // userName: formValues.userName,
                // userSurname: formValues.userSurname,
                // email: formValues.email,
                // phone: formValues.phone,
                // city: formValues.city,
                // jobTitle: formValues.jobTitle,
                // positionHeld: formValues.positionHeld,
                // employer: formValues.employer,
                // startDate: formValues.startDate,
                // endDate: formValues.endDate,
                // workLocation: formValues.workLocation,
                // responsibilities: formValues.responsibilities,
                // institution: formValues.institution,
                // degree: formValues.degree,
                // graduationDate: formValues.graduationDate,
                // locationOfTheInstitution: formValues.locationOfTheInstitution,
                // description: formValues.description,
                // skill: formValues.skill
            }))

        });
        addResumeList({
            jobTitle: formValues.jobTitle,
            dateOfCreation: dateToSendToServer,
            // updateDate: formValues.updateDate
        }).then()
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
                        if(!errors) dispatch(saveResumeAction(formValues));
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
