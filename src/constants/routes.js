export const ROUTES = {
    register: `/register`,
    initialPage: `/`,
    login: `/login`,
    startPage: `/start`,
    resumeConstructor: `/constructor/:id`,
    resumeList: `/resumeList`,
    resumeID: `:id`,
    preview:`/preview/:id`,
};
export const PATHS = {
    constructor: (id) => (`/constructor/${id}`),
    preview: (id) => (`/preview/${id}`),
    login: `/login`,
};