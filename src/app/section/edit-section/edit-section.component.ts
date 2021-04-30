import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TagModel} from '../../models/tag.model';
import {SectionModel} from '../../models/section.model';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.css']
})
export class EditSectionComponent implements OnInit {

  form: FormGroup;
  section: string;

  constructor( private fb: FormBuilder,
               private dialogRef: MatDialogRef<EditSectionComponent>,
               @Inject(MAT_DIALOG_DATA) sectionModel: SectionModel) {

    console.log(sectionModel['section']);
    this.form = fb.group({
      nomsection: [sectionModel['section'].nomsection, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
