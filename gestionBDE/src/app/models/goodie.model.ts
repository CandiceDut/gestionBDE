export class Goodie {
    idGoodie!:number;
    nomGoodie!: string;
    quantite!: number;
    description!: string;
    coutUnitaire!:number;

    constructor(idGoodie:number,nomGoodie:string,quantite: number,description: string,coutUnitaire:number){
        this.idGoodie=idGoodie;
        this.nomGoodie=nomGoodie;
        this.quantite=quantite;
        this.description=description;
        this.coutUnitaire=coutUnitaire;
    }
}