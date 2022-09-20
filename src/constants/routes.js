export const ROUTES = {
    initialPage: `/`,
    login: `/login`,
    startPage: `/start`,
    newResume: `/new`,
    resumeList: `/resumeList`,
    resumeID: `:id`,
    preview:`/preview/:id`
}

export const PATHS = {
    preview: (id) => (`/preview/${id}`),
}