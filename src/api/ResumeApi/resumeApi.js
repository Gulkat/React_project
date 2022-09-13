import fakeServerInstance from './instance';

export const addResumeList = ({jobTitle, dateOfCreation, updateDate}) => fakeServerInstance.post('/resumeList', {jobTitle, dateOfCreation, updateDate})
export const fetchResumeList = () => fakeServerInstance.get('/resumeList');

export const addResumeData = (resumeData) => fakeServerInstance.post('/resumeData', resumeData);
export const updateResumeData = () => fakeServerInstance.patch('/resumeData/id', {updateDate:"dateToSendToServer"});
export const fetchResumeData = (id) => fakeServerInstance.get(`/resumeList/${id}`);

export const loginUser = ({email, password}) => fakeServerInstance.post('/users', {email, password});