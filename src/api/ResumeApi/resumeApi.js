import fakeServerInstance from './instance';

export const fetchResumeList = () => fakeServerInstance.get('/resumeList');

export const fetchResumeData = () => fakeServerInstance.get('/resumeList/:resumeID');

export const postResumeData = () => fakeServerInstance.post('/resumeList/:resumeID', {}, {})