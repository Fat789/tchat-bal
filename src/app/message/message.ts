export class Message {
  id: number;
  version: number;
  texte: string;
  dtExpedition: Date;
  expediteur: any ;

  constructor(id: number, version: number, texte: string, dtExpedition: Date, expediteur: any) {
    this.id = id;
    this.version = version;
    this.texte = texte;
    this.dtExpedition = dtExpedition;
    this.expediteur = expediteur;
  }
}
