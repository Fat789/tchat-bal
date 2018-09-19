import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


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
