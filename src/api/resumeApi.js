import fakeServerInstance from './instance';

export const fetchResumeList = () => fakeServerInstance.get("/resumeData");

