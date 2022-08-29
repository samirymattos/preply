export const validateIsEmail = (email) => {
    return email.match(/^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/)
}



export default {
    validateIsEmail
}