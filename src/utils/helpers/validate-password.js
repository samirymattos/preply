export const validateMediumPassword = (password) => {
    return password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$ %^&*-]).{6,}$/)
}

export const validateStrongPassword = (password) => {
    return password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=(.*?[#?!@$ %^&*-])).{6,}$/)
}

export default {
    validateMediumPassword,
    validateStrongPassword
}