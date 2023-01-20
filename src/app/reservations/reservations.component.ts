import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  // loginForm!: FormGroup;

  // constructor(private formBuilder: FormBuilder, private _route: Router) {}
  // ngOnInit(): void {}
  // onFormSubmission(referenceForForm: NgForm) {
  //   if (
  //     referenceForForm.value.username === 'shravani' &&
  //     referenceForForm.value.password === 'Abc@123'
  //   ) {
  //     this._route.navigate(['home']);
  //   }
  // }
  // onFormLogin() {}
  loginForm!:FormGroup;
  refernceForForm:any;
  constructor(private fb:FormBuilder,private route:Router) { }
  ngOnInit(): void {
    console.log(this.fb);
    this.loginForm=this.fb.group({
      Username:["shravani",[Validators.required,Validators.email,Validators.minLength(3)]],
      password:["Abc@123",[Validators.required,Validators.minLength(3)]]
    });
  }
  onFormSubmit(){
  this.route.navigate(['home']);
}

}
