export const ErrorHandler = (error) => {
  switch (error?.type) {
    case "duplicate_key_error":
      return "Email já está cadastrado, tente efetuar o login!";
    case "duplicate cpf":
      return "Cpf já cadastrado";
    case "unauthenticated":
      return "Email ou senha incorretos, verifique os campos e tente de novo!";
    case "bad_request":
      switch (error?.message) {
        case "The rne must be valid":
          return "RNE inválido";
        case "The phone must be valid":
          return "Telefone inválido"
        case "The cpf must be valid":
          return "CPF inválido"
        default:
          return "Verifique os campos novamente";
      }
    default:
      return "Algo deu errado contate o suporte. E-mail: ajuda@regera.vc";
  }
};
