import { axios } from "axios";

export default class Funcoes{
    
    consultarDados(){

        axios.get('http://professornilson.com/testeservico/clientes')
        
        .then(function (response) {
        console.log(response);
        }).catch(function (error) {
        console.log(error);
        
        });
    }
}
