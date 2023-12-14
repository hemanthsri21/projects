
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  myform: FormGroup;
  data: any[] = [];
  curindex: any;
  whenedit: boolean = false
  // fdata: any;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    //  this.http.get('https://workfreaks.xyz/App/api.php?gofor=vendorslist').subscribe((fdata:any)=>{
    //   this.data=this.fdata
    //  });

    this.myform = this.fb.group({
      name: ['', [Validators.required, this.namevalid]],
      phone: ['', [Validators.required, this.phvalid]],
      email: ['', [Validators.required, this.emailvalid]],
      age: ['', [Validators.required, this.agevalid]]

    });

  }

  namevalid(control: FormControl) {
    const nameregex = /^[a-zA-Z ]+$/;
    if (nameregex.test(control.value)) {
      return null; // Valid name
    } else {
      return { invalidName: true }; // Invalid name
    }

  }

  phvalid(control: FormControl) {
    const phregex = /^[0-9]+$/;
    if (phregex.test(control.value)) {
      return null
    } else {
      return { invalidPh: true }
    }
  }

  emailvalid(control: FormControl) {
    const emailregex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}$/

    if (emailregex.test(control.value)) {
      return null
    } else {
      return { invalidEmail: true }
    }
  }

  agevalid(control: FormControl) {
    const ageregex = /^[0-9]{1}[0-9]{1}/;
    if(ageregex.test(control.value)){
      return null
    }
    else{
      return {invalidage : true}
    }

  }

  add() {

    if (this.myform.valid) {
      this.data.push(this.myform.value)
      this.myform.reset();
    }

    // this.data.push(this.myform.value)
  }

  edit(user: any, index: any) {
    this.curindex = index
    this.myform.setValue(user)
    this.whenedit = true;
  }

  delet(index: any) {
    this.data.splice(index, 1)
  }

  update() {
    this.data[this.curindex] = this.myform.value;
    this.myform.reset();
    this.whenedit = false
  }


}