import { Serializer } from '@angular/compiler';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-res',
  templateUrl: './add-edit-res.component.html',
  styleUrls: ['./add-edit-res.component.css']
})
export class AddEditResComponent implements OnInit {

  // constructor(private service:SharedService) { }
  // ngOnInit(): void {
    
  // }
  @Input() res:any;
  SNo:number|any;
  Hotel!:string;
  Arrival!:string;
  Departure!:string;
  Type!: string;
  Guests!:number;
  Price!:number;
  reserveForm: any
  onSubmit() {
    console.warn(this.reserveForm.value);
  }
  constructor(private matDialogref:MatDialogRef<AddEditResComponent[]>,private service:SharedService
    ,@Inject (MAT_DIALOG_DATA) public data:any) { }
  onClose(){
    this.matDialogref.close()
  }
  ngOnInit(): void {
    this.reserveForm = new FormGroup({
      SNo: new FormControl(''),
      Hotel: new FormControl(''),
      Arrival:new FormControl(''),
      Departure:new FormControl(''),
      Type: new FormControl(''),
      Guests:new FormControl(''),
      Price:new FormControl('')
    });
    if(this.data)
    {
    let Adate = this.data.Arrival.split('T');
    let Ddate = this.data.Departure.split('T');
    this.reserveForm.patchValue({
      SNo: this.data.SNo,
      Hotel: this.data.Hotel,
      Arrival: Adate[0],
      Departure: Ddate[0],
      Type: this.data.Type,
      Guests: this.data.Guests,
      Price: this.data.Price,
    });
    }
 
  }
  addList(){
    console.log(Serializer);
    let ser=JSON.stringify(this.reserveForm.value);
    this.service.addList(ser);
    
   // window.location.reload();
   setTimeout(
    function()
    {
      location.reload();
    },1000);
  }
 
  clear(){
    console.log("ok")
  }
 

}
