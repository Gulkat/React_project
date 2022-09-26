const CVReducer = (state= {personalDetails: {}, employment: [], education: [], skills: []}, action) => {
    switch (action.type) {
        case 'updateResume':
            return {...action.payload}
        case 'clearResumeData':
            return null
        default:
            return {...state}
    }
};

export default CVReducer;