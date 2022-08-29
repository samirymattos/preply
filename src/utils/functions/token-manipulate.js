export const tokenAddValue = (token,value) => {
    return token ? token + value : value;
}

export const tokenRemoveLastValue = (token) =>{
    return token.slice(0,-1);
}