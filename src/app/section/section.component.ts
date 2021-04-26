import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TagModel} from '../models/tag.model';
import {SectionService} from '../services/section.service';

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
  }

  // @ts-ignore
  getSections(): Array<TagModel> {
    this.sectionService.getSections()
      .subscribe(value => {
        console.log(value);
        return value;
      }, error => {
        console.log(error);
      });
  }

}
