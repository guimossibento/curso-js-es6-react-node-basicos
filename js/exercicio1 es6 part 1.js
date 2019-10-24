
class Usuario{
    
    constructor(emailPar,senhaPar){
        this.email=emailPar;
        this.senha=senhaPar;
        this.typeUser=false;
    }

    isAdmin(){
        return this.typeUser;
    }
}

class Admin extends Usuario{
    constructor(email,senha){
        super(email,senha);

        this.typeUser=true;
        
    }    

}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('emailadmin@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
console.log(Adm1.email) // true