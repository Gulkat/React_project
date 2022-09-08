const CVReducer = (state= {resumeColor:"", resumeFont:"", personalDetails: [], employment: [], education: [], skills: []}, action) => {
    switch (action.type) {
        case 'updateResume':
            return {...action.payload}
        default:
            return {...state}
    }
};

export default CVReducer;