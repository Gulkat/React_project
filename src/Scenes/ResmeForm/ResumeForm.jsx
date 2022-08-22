import React from 'react';
import styled from 'styled-components';
import {Form, Formik} from 'formik';
import { useFormik } from 'formik';

import PersonalDetails from 'Components/PersonalDetails';
import Header from 'Scenes/ResmeForm/Components/Header';
import Employment from 'Components/Employment';
import Education from 'Components/Education'
import DropdownMenu from 'Components/Dropdown/DropdownMenu';
import Skills from 'Components/Skills';
import Summary from 'Components/Summary';
import ButtonToSaveResume from '../../Components/ButtonToSaveResume';
import FormikField from "../../Components/FormikFields/FormikField";

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

const ResumeForm = ({handleName, handleSurname, handleJobTitle, handleUserEmail, handleTelephone, setColor, setFont}) => {

    const setValueName = text => {
        handleName(text)
    };
    const setValueSurname = text => {
        handleSurname(text)
    };
    const setValueJobTitle = text => {
        handleJobTitle(text)
    };
    const setValueUserEmail = text => {
        handleUserEmail(text)
    };
    const setValueTelephone = text => {
        handleTelephone(text)
    };

    const initialFormValues = {
        personalDetails: [
            {
                userName: "",
                userSurname: "",
                email: "",
                phone: "",
                city: "",
                jobTitle: ""
            }
        ],
        employment: [
            {
                positionHeld: "",
                employer: "",
                startDate: "",
                endDate: "",
                workLocation: "",
                responsibilities: ""
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
        ]
    };

    const validateForm = (formValues) => {
        let isValid = true;
        let errorsObject = {};

        if(!formValues.userName) {
            isValid = false;
            errorsObject.userName = "Обязательно для заполнения!";
        }
        if(!formValues.userSurname) {
            isValid = false;
            errorsObject.userSurname = "Обязательно для заполнения!";
        }
        if(!formValues.email) {
            isValid = false;
            errorsObject.email = "Обязательно для заполнения!";
        }
        if(!formValues.phone) {
            isValid = false;
            errorsObject.phone = "Обязательно для заполнения!";
        }
        if(!formValues.city) {
            isValid = false;
            errorsObject.city = "Обязательно для заполнения!";
        }
        if(!formValues.jobTitle) {
            isValid = false;
            errorsObject.jobTitle = "Обязательно для заполнения!";
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
                <Formik initialValues={initialFormValues}
                        validate={(formValues) => {
                        const errors = validateForm(formValues);
                        if(!errors) RenderNewResume(dispatch({type:'updateResumeData', payload: formValues}))
                        }}
                        onSubmit={(formValues) => {console.log('form values', formValues)}}>

                    <Form>
                        <FormikField name={'personalDetails'}>
                            <PersonalDetails setValueName={setValueName} setValueSurname={setValueSurname} setValueJobTitle={setValueJobTitle} setValueUserEmail={setValueUserEmail} setValueTelephone={setValueTelephone}/>
                        </FormikField>
                        <FormikField name={'employment'}><Employment/></FormikField>
                        <FormikField name={'education'}><Education/></FormikField>
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
