export function Error (code){
    switch (code){
        case 400:
            return "E-mail ou senha inválidos";
        case 403:
            return "E-mail já cadastrado!";    
        case 404:
            return "Usuário não encontrado";   
        case 407:
                return "teste";      
        default:
            return "Ops, ocorreu algum erro";

    }

}