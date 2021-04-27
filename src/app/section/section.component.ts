import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TagModel} from '../models/tag.model';
import {SectionService} from '../services/section.service';
import {SectionModel} from '../models/section.model';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor(private sectionService: SectionService, private router: Router) {
  }

  ngOnInit(): void {
    this.getSections();

    // const section = new SectionModel();
    // section.setNomsection = 're';
    // this.onAddSection(section);
    // console.log(section);
  }


  getSections = (): Subscription => {
    return this.sectionService.getSections()
      .subscribe(value => {
        console.log(value);
        return value;
      }, error => {
        console.log(error);
      });
  }

  onAddSection = (data: SectionModel) => {
    console.log(data);
    this.sectionService.saveSection(data)
      .subscribe(value => {
          alert('Utilisateur ajouté avec succès');
          this.router.navigateByUrl('/sections').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  }

}
