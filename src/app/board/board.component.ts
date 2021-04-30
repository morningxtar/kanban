import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FicheService} from '../services/fiche.service';
import {Router} from '@angular/router';
import {SectionService} from '../services/section.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EditFicheComponent} from './edit-fiche/edit-fiche.component';
import {TagModel} from '../models/tag.model';
import {FicheModel} from '../models/fiche.model';
import {AddFicheComponent} from './add-fiche/add-fiche.component';

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

  constructor(private ficheService: FicheService, private sectionService: SectionService,
              private router: Router,
              public dialog: MatDialog) {
  }


  drop = (event: CdkDragDrop<string[]>, fiche: FicheModel) => {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      this.sectionService.getSections().subscribe(value => {
        const index = this.Section.findIndex(fruit => fruit.id === event.container.id);
        fiche[event.currentIndex]['Section'] = value[index];
        console.log(fiche[event.currentIndex].tag);
        this.onEdit(fiche[event.currentIndex]);
      });
    }

  };

  ngOnInit(): void {
    this.getFiches();
  }

  onAddFiche = (data: TagModel) => {
    this.ficheService.saveFiche(data)
      .subscribe(value => {
          this.router.navigateByUrl('/board').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  };

  openAddDialog = () => {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    const dialogRef = this.dialog.open(AddFicheComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => {
        console.log('Dialog output:', val);

        if (val !== undefined) {
          this.onAddFiche(val);
        }
      }
    );
  };

  openEditDialog = (fiche: FicheModel) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      fiche
    };

    const dialogRef = this.dialog.open(EditFicheComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => {
        console.log('Dialog output:', val);
        if (val !== undefined) {
          fiche.Libelle = val.libelle;
          fiche.Datebutoire = val.dateButoire;
          fiche.Time = val.time;
          fiche.Lieu = val.lieu;
          fiche.Section = val.section;
          fiche.note = val.note;
          fiche.Url = val.url;
          fiche.user = val.user;
          fiche.tag = val.tags;
          console.log(fiche);
          this.onEdit(fiche);
        }
      }
    );
  };

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
              if (value[i].Section !== null) {
                const index = this.Section.findIndex(fruit => fruit.id === value[i].Section.nomsection);
                this.Section[index].sectionlist.push(value[i]);
              }
            }
          }, error => {
            console.log(error);
          });
      }, error => {
        console.log(error);
      });
  };

  onDeleteFiche = (data: FicheModel) => {
    this.ficheService.deleteFiche(data.id)
      .subscribe(value => {
          this.router.navigateByUrl('/tags');
        },
        error => {
          console.log(error);
        });
  };

  onUpdateFiche = (data: FicheModel) => {
    this.ficheService.updateFiche(data)
      .subscribe(value => {
          console.log(value);
          this.router.navigateByUrl('/board');
        },
        error => {
          console.log(error);
        });
  };

  onDelete = (data: FicheModel) => {
    this.onDeleteFiche(data);
    this.getFiches();
  };

  onEdit = (data: FicheModel) => {
    this.onUpdateFiche(data);
  };
}
