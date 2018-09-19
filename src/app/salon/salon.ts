import {User} from '../user/user';

export class Salon{
  public id: number;
  private nom: string;
  private description: string;
  private dateCreation: Date;
  private createur: User;


  constructor(id?: number, nom?: string, description?: string, dateCreation?: Date, createur?: User) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dateCreation = dateCreation;
    this.createur = createur;
  }
}
