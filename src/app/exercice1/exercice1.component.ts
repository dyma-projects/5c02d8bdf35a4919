import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  afficherText: String;
  prenom: String;
  constructor() {
    this.afficherText = 'any';
    this.prenom = 'any';
  }
  afficherAction() {
    this.afficherText = 'Action';
  }

  ngOnInit() {
  }

}
