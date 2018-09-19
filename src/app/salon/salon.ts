import {User} from '../user/user';
import {Message} from '../message/message';

export class Salon{
  public id: number;
  private nom: string;
  private description: string;
  private dateCreation: Date;
  private createur: User;
  private messages: Array<Message> = new Array<Message>();


  constructor(id?: number, nom?: string, description?: string, dateCreation?: Date, createur?: User, messages?: Array<Message>) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dateCreation = dateCreation;
    this.createur = createur;
    this.messages = messages;
  }
}
