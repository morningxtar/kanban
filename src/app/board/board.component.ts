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

  Section = [];
  connectedTo = [];
  fiches;

  constructor(private ficheService: FicheService, private router: Router) {
    this.Section = [
      {
        id: 'To Do',
        sectionlist: [
          'item 1',
          'item 2',
          'item 3',
          'item 4',
          'item 5'
        ]
      }, {
        id: 'Doing',
        sectionlist: [
          'item 1',
          'item 2',
          'item 3',
          'item 4',
          'item 5'
        ]
      }, {
        id: 'Done',
        sectionlist: [
          'item 1',
          'item 2',
          'item 3',
          'item 4',
          'item 5'
        ]
      }
    ];
    for (const section of this.Section) {
      this.connectedTo.push(section.id);
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
