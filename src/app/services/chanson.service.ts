import { Injectable } from '@angular/core';
import { chanson } from '../model/chanson.model';
@Injectable({
  providedIn: 'root',
})
export class chansonService {
  chansons: chanson[]; //un tableau de chanson
  constructor() {
    this.chansons = [
      {
        idChanson: 1,
        nomChanson: 'UZI',
        nomArtiste: 'A.L.A',
        genre: 'HipHop',
        duree: 4.36,
        vues: '6.7 M',
        dateSortie: new Date('08/20/2017'),
      },
      {
        idChanson: 2,
        nomChanson: 'S.A.F.E',
        nomArtiste: 'A.L.A',
        genre: 'HipHop',
        duree: 5.22,
        vues: '22 M',
        dateSortie: new Date('07/27/2017'),
      },
      {
        idChanson: 3,
        nomChanson: 'AADHEBI',
        nomArtiste: 'A.L.A',
        genre: 'HipHop',
        duree: 4.04,
        vues: '2.8 M',
        dateSortie: new Date('07/29/2024'),
      },
      {
        idChanson: 4,
        nomChanson: 'Feu Rouge',
        nomArtiste: 'Samara',
        genre: 'HipHop',
        duree: 4.18,
        vues: '9.3 M',
        dateSortie: new Date('06/24/2024'),
      },
      {
        idChanson: 5,
        nomChanson: 'Pour Les Gang',
        nomArtiste: 'Samara',
        genre: 'HipHop',
        duree: 5.08,
        vues: '46 M',
        dateSortie: new Date('05/14/2023'),
      },
    ];
  }
  listeChansons(): chanson[] {
    return this.chansons;
  }
  ajouterchanson(ch: chanson) {
    this.chansons.push(ch);
  }

  supprimerChanson(ch: chanson) {
    //supprimer le produit prod du tableau produits
    const index = this.chansons.indexOf(ch, 0);
    if (index > -1) {
      this.chansons.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) {
      this.produits.splice(index, 1);
      }
      }); */
  }

  consulterChanson(id: number): chanson {
    return this.chansons.find((p) => p.idChanson == id)!;
  }

  trierChansons() {
    this.chansons = this.chansons.sort((n1, n2) => {
      if (n1.idChanson! > n2.idChanson!) {
        return 1;
      }
      if (n1.idChanson! < n2.idChanson!) {
        return -1;
      }
      return 0;
    });
  }

  updateChanson(ch: chanson) {
    // console.log(ch);
    this.supprimerChanson(ch);
    this.ajouterchanson(ch);
    this.trierChansons();
  }
}
