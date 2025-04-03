export class Etudiant {
    idEtud!:number;
    nomEtud!: string;
    prenomEtud!: string;
    email!: string;
    numTel!:number;

    constructor(idEtud:number,nomEtud:string,prenomEtud: string,email: string,numTel:number){
        this.idEtud=idEtud;
        this.nomEtud=nomEtud;
        this.prenomEtud=prenomEtud;
        this.email=email;
        this.numTel=numTel;
    }
}