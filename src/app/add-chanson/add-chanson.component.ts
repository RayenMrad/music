import { Component, OnInit } from '@angular/core';
import { chanson } from '../model/chanson.model';
import { chansonService } from '../services/chanson.service';

@Component({
  selector: 'app-add-chanson',
  templateUrl: './add-chanson.component.html',
})
export class AddChansonComponent implements OnInit {
  newchanson = new chanson();
  message: string = '';

  constructor(private chansonService: chansonService) {}

  ngOnInit(): void {}

  addchanson() {
    // console.log(this.newchanson);
    this.chansonService.ajouterchanson(this.newchanson);
    this.message =
      'chanson ' + this.newchanson.nomChanson + ' ajouté avec succès !'; // Added spaces for readability
  }
}
