import {Component, OnInit} from '@angular/core';
import * as Muuri from 'muuri';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FicheComponent} from '../fiche/fiche.component';
import {FicheService} from '../services/fiche.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  weeks = [];
  connectedTo = [];
  fiches;

  constructor(private ficheService: FicheService, private router: Router) {
    this.weeks = [
      {
        id: 'week-1',
        weeklist: [
          'item 1',
          'item 2',
          'item 3',
          'item 4',
          'item 5'
        ]
      }, {
        id: 'week-2',
        weeklist: [
          'item 1',
          'item 2',
          'item 3',
          'item 4',
          'item 5'
        ]
      }, {
        id: 'week-3',
        weeklist: [
          'item 1',
          'item 2',
          'item 3',
          'item 4',
          'item 5'
        ]
      }
    ];
    for (const week of this.weeks) {
      this.connectedTo.push(week.id);
    }
  }

  drop = (event: CdkDragDrop<string[]>) => {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log(event.container.id);
    }
  }

  ngOnInit(): void {
    this.getFiches();
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
