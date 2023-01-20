import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private dialog:MatDialog,
    private res:SharedService,@Inject ( MAT_DIALOG_DATA) public data:any) { }
   // gets:any;
  ngOnInit(): void {
    // console.log(this.data);
    // this.res.getDepList().subscribe(
    //   (x:any)=>{
    //     this.gets.push(...x)
    //   }
    // )
  }
onNo()
{

}
onOk()
  {
    this.res.deleteList(this.data.SNo).subscribe();
   // window.location.reload();
   setTimeout(
    function()
    {
      location.reload();
    },1000);
  }

}
