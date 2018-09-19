export class Salon{
  private id: number;
  private nom: string;
  private description: string;
  private dtCreation: Date;
  private createur: User;


  constructor(id?: number, nom?: string, description?: string, dtCreation?: Date, createur?: User) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dtCreation = dtCreation;
    this.createur = createur;
  }
}
