import { LiveService } from './../../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {

  public liveForm: FormGroup;


  constructor(
    private liveService: LiveService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LiveFormDialogComponent>
  ) { }

  ngOnInit(): void {
    //iniciando formulario vazio
    this.liveForm = this.formBuilder.group({
      liveName: ['', [Validators.required]],
      channelName: ['', [Validators.required]],
      liveLink: ['', [Validators.required]],
      liveDate: ['', [Validators.required]],
      liveTime: ['', [Validators.required]],

    });
  }

  createLive() {
    //Passando valores do formulario via metodo post
    this.liveService.postlives(this.liveForm.value).subscribe( result => {})
    //fechando a caixa de dialogo
    this.dialogRef.close();
    //resetando o liveform
    this.liveForm.reset()

    //Reload da page
    window.location.reload();

  }

  cancel(): void {
    this.dialogRef.close();
    this.liveForm.reset()
  }

}
