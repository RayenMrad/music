import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { chansonService } from '../services/chanson.service';
import { chanson } from '../model/chanson.model';

@Component({
  selector: 'app-update-chanson',
  templateUrl: './update-chanson.component.html',
  styles: [],
})
export class UpdateChansonComponent implements OnInit {
  currentChanson = new chanson();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private chansonService: chansonService
  ) {}
  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.currentChanson = this.chansonService.consulterChanson(
      this.activatedRoute.snapshot.params['id']
    );
    console.log(this.currentChanson);
  }
  updateChanson() {
    //console.log(this.currentChanson);
    this.chansonService.updateChanson(this.currentChanson);
    this.router.navigate(['chansons']);
  }
}
