import {Component, OnInit} from '@angular/core';
import {SectionService} from '../services/section.service';
import {Router} from '@angular/router';
import {TagModel} from '../models/tag.model';
import {FicheService} from '../services/fiche.service';
import {FicheModel} from '../models/fiche.model';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  fiches;

  constructor(private ficheService: FicheService, private router: Router) {
  }

  ngOnInit(): void {
    this.getFiches();
    console.log(this.fiches);
  }

  getFiches = (): void => {
    this.ficheService.getFiches()
      .subscribe(value => {
        console.log(value);
        this.fiches = value;
      }, error => {
        console.log(error);
      });
  }

}
