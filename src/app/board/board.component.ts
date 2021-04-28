import {Component, OnInit} from '@angular/core';
import * as Muuri from 'muuri';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FicheComponent} from '../fiche/fiche.component';
import {FicheService} from '../services/fiche.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Subscription} from 'rxjs';
import {SectionService} from '../services/section.service';
import {log} from 'util';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  dir: 'ltr' | 'rtl' = 'ltr';
  Section = [];
  connectedTo = [];
  fiches;

  lists: any = {
    'a-title-todo': [],
    'b-title-progress': [],
    'c-title-testing': [],
    'd-title-done': []
  };


  constructor(private ficheService: FicheService, private sectionService: SectionService, private router: Router, private formBuilder: FormBuilder,
              private snackbar: MatSnackBar/*, private translocoService: TranslocoService*/) {
    this.buildForm();
    // this.dir = this.translocoService.getActiveLang() === 'he' ? 'rtl' : 'ltr';

  }

  taskForm: FormGroup;

  buildForm = () => {
    this.taskForm = this.formBuilder.group({
      task: [null, [Validators.required, Validators.maxLength(80)]]
    });
  };


  drop = (event: CdkDragDrop<string[]>) => {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  };

  ngOnInit(): void {
    this.getFiches();
  }

  getFiches = (): void => {
    this.sectionService.getSections()
      .subscribe(value1 => {
        this.ficheService.getFiches()
          .subscribe(value => {
            this.fiches = value;
            this.Section = [];
            this.connectedTo = [];
            for (let i = 0; i < value1.length; i++) {
              this.connectedTo.push(value1[i]['nomsection']);
              this.Section.push({
                id: value1[i]['nomsection'],
                sectionlist: []
              });
            }

            for (let i = 0; i < value.length; i++) {
              const index = this.Section.findIndex( fruit => fruit.id === value[i]['Section'].nomsection);
              this.Section[index].sectionlist.push(value[i]);
            }
            console.log(this.Section[0].sectionlist);
          }, error => {
            console.log(error);
          });
      }, error => {
        console.log(error);
      });
  };

}
