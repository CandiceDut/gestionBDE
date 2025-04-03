export class Reservation {
    idReserv!:number;
    idEtud!: number;
    idSoiree!: number;
    dateReserv!: Date;
    statusReserv!:string;

    constructor(idReserv:number,idEtud:number,idSoiree: number,dateReserv: Date,statusReserv:string){
        this.idReserv=idReserv;
        this.idEtud=idEtud;
        this.idSoiree=idSoiree;
        this.dateReserv=dateReserv;
        this.statusReserv=statusReserv;
    }
}