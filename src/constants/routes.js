export const ROUTES = {
    initialPage: `/`,
    startPage: `/start`,
    newResume: `/new`,
    resumeList: `/resumeList`,
    resumeID: `:id`,
    preview:`/preview/:id`
}

export const PATHS = {
    preview: (id) => (`/preview/${id}`),
}