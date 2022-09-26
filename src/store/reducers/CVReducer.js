const initialFormData = {
    personalDetails: {},
    employment: [],
    education: [],
    skills: []
}

const CVReducer = (state= initialFormData, action) => {
    switch (action.type) {
        case 'updateResume':
            return {...action.payload}
        case 'clearResumeData':
            return initialFormData
        default:
            return {...state}
    }
};

export default CVReducer;