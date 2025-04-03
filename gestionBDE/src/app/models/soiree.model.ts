export class Soiree {
    idSoiree!:number;
    nomSoiree!: string;
    lieu!: string;
    dateHeure!: Date;
    prix!:number;
    capaciteMax!:number;
    theme!:string;

    constructor(idSoiree:number,nomSoiree:string,lieu: string,dateHeure: Date,prix:number,capaciteMax:number,theme:string){
        this.idSoiree=idSoiree;
        this.nomSoiree=nomSoiree;
        this.lieu=lieu;
        this.dateHeure=dateHeure;
        this.prix=prix;
        this.capaciteMax=capaciteMax;
        this.theme=theme;
    }
}