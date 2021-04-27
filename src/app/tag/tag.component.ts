import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TagService} from '../services/tag.service';
import {TagModel} from '../models/tag.model';
import {SectionModel} from '../models/section.model';
import {Subscription} from 'rxjs';

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

    // const tag = new TagModel();
    // tag.setId = 37;
    // tag.setLibelle = 'en juin';
    // // this.onAddTag(section);
    // console.log(tag.getId);
    // this.onUpdateTag(tag);
  }

  getTags = (): Subscription => {
    return this.tagService.getTags()
      .subscribe(value => {
        console.log(value);
      }, error => {
        console.log(error);
      });
  }

  onAddTag = (data: TagModel) => {
    console.log(data);
    this.tagService.saveTag(data)
      .subscribe(value => {
          alert('tag ajouté avec succès');
          this.router.navigateByUrl('/tags').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  }

  onUpdateTag = (data: TagModel) => {
    console.log(data);
    this.tagService.updateTag(data)
      .subscribe(value => {
          alert('tag ajouté avec succès');
          this.router.navigateByUrl('/tags').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  }

  onDeleteTag = (data: TagModel) => {
    console.log(data);
    this.tagService.deleteTag(data.getId)
      .subscribe(value => {
          alert('tag supprimé avec succès');
          this.router.navigateByUrl('/tags').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  }

}
