import fakeServerInstance from './instance';

export const fetchResumeList = () => fakeServerInstance.get('/resumeList');
export const fetchResumeId = () => fakeServerInstance.get('/resumeList/id');
export const addResumeData = () => fakeServerInstance.post('/resumeList', {});
export const updateResumeData = () => fakeServerInstance.patch('/resumeList/id', {});

export const loginUser = ({email, password}) => fakeServerInstance.post('/users', {email, password});