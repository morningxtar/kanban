import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TagService} from '../services/tag.service';
import {TagModel} from '../models/tag.model';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  constructor(private tagService: TagService, private router: Router) {
  }

  ngOnInit(): void {
    this.getTags();
  }

  // @ts-ignore
  getTags(): Array<TagModel> {
    this.tagService.getTags()
      .subscribe(value => {
        console.log(value);
        return value;
      }, error => {
        console.log(error);
      });
  }

}
