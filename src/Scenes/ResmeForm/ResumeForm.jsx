import React from 'react';
import styled from 'styled-components';
import {Form, Formik} from 'formik';

import PersonalDetails from 'Components/PersonalDetails';
import Header from 'Scenes/ResmeForm/Components/Header';
import Employment from 'Components/Employment';
import Education from 'Components/Education'
import DropdownMenu from 'Components/Dropdown/DropdownMenu';
import Skills from 'Components/Skills';
import Summary from 'Components/Summary';
import ButtonToSaveResume from '../../Components/ButtonToSaveResume';
import {useDispatch, useSelector} from "react-redux";
import {saveResumeAction} from "../../store/actions/CVReducer";
import {getRenderedResumeData} from "../../store/selectors/CVSelector";

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

const ResumeForm = ({setColor, setFont}) => {
    const dispatch = useDispatch();
    const renderedResumeData = useSelector(getRenderedResumeData);

    const initialFormValues = {
        personalDetails: [
            {
                userName: "",
                userSurname: "",
                email: "",
                phone: "",
                city: "",
                jobTitle: "",
            }
        ],
        employment: [
            {
                positionHeld: "",
                employer: "",
                startDate: "",
                endDate: "",
                workLocation: "",
                responsibilities: "",
            }
        ],
        education: [
            {
                institution: "",
                degree: "",
                graduationDate: "",
                locationOfTheInstitution: "",
                description: "",
            }
        ],
        skills: [
            {
                skill: "",
            }
        ],
    };

    const validateForm = (formValues) => {
        let isValid = true;
        let errorsObject = {};

         return null

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
            errorsObject.personalDetails = "Обязательно для заполнения!";
        }
        if(!formValues.personalDetails.phone) {
            isValid = false;
            errorsObject.personalDetails = "Обязательно для заполнения!";
        }
        if(!formValues.personalDetails.city) {
            isValid = false;
            errorsObject.personalDetails = "Обязательно для заполнения!";
        }
        if(!formValues.personalDetails.jobTitle) {
            isValid = false;
            errorsObject.personalDetails = "Обязательно для заполнения!";
        }

        if (!isValid) return errorsObject
    }

    return (
        <StyledResumeForm>
            <header>
                <Header/>
            </header>
            <main>
                <DropdownMenu setColor={setColor} setFont={setFont}/>
                <Formik initialValues={renderedResumeData}
                        validate={(formValues) => {
                        const errors = validateForm(formValues);
                        if(!errors) dispatch(saveResumeAction(formValues))
                        }}
                        onSubmit={(formValues) => {console.log('form values', formValues)}}>
                    <Form>
                        <PersonalDetails/>
                        <Employment/>
                        <Education/>
                        <Skills/>
                        <Summary/>
                        <ButtonToSaveResume/>
                    </Form>
                </Formik>
            </main>
        </StyledResumeForm>
    )
}

export default ResumeForm;
