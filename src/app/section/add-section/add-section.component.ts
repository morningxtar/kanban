import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TagModel} from '../../models/tag.model';
import {SectionModel} from '../../models/section.model';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {

  form: FormGroup;
  section: string;


  constructor( private fb: FormBuilder,
               private dialogRef: MatDialogRef<AddSectionComponent>,
               @Inject(MAT_DIALOG_DATA) sectionModel: SectionModel ) {
    this.form = fb.group({
      nomsection: [this.section, Validators.required],
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
