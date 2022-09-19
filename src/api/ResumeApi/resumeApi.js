import fakeServerInstance from './instance';

export const addResumeList = ({jobTitle, dateOfCreation, updateDate}) => fakeServerInstance.post('/resumeList', {jobTitle, dateOfCreation, updateDate})
export const updateResumeList = ({jobTitle, updateDate, id}) => fakeServerInstance.patch(`/resumeList/${id}`, {jobTitle, updateDate});
export const fetchResumeList = () => fakeServerInstance.get('/resumeList');

export const addResumeData = (resumeData) => fakeServerInstance.post('/resumeData', resumeData);
export const updateResumeData = (dateToSendToServer, id) => fakeServerInstance.patch(`/resumeData/${id}`, {updateDate:dateToSendToServer});
export const fetchResumeData = (id) => fakeServerInstance.get(`/resumeData/${id}`);

export const loginUser = ({email, password}) => fakeServerInstance.post('/users', {email, password});