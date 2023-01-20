import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditResComponent } from '../add-edit-res/add-edit-res.component';
import { DeleteComponent } from '../delete/delete.component';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-show-res',
  templateUrl: './show-res.component.html',
  styleUrls: ['./show-res.component.css']
})
export class ShowResComponent implements OnInit {
  DepartmentList:any=[];
  displayedColumns=['SNo','Hotel','Arrival','Departure','Type','Guests','Price','Manage'];
  dataSource!:MatTableDataSource<any>;
  
  @ViewChild('paginator')  paginator !:MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private service:SharedService,private dialog:MatDialog,private route:Router) { }

  ngOnInit(): void {
    this.refreshDepList();
    this.service.getDepList().subscribe((x:any)=>{
        console.log(x);
        this.dataSource=new MatTableDataSource(x);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.matSort;
    })
  }
  filterData($event :any)
  {
    this.dataSource.filter=$event.target.value;
  }
  refreshDepList()
  {
    this.service.getDepList().subscribe(data=>
      {
     this.DepartmentList=data ;
      });
  }
  openDialog()
  {
    this.dialog.open(AddEditResComponent,{
      height:'50%',
      width:'50%'
    })
  }
  openEdit(value:number)
  {
    this.dialog.open(AddEditResComponent,{
      height:'50%',
      width:'50%',
      data:value
    })
  }
  openDelete(value:any)
  {
    this.dialog.open(DeleteComponent,
    {
      height:'50%',
      width:'50%',
      data:value
    })
  }
  logDialog()
  {
    this.route.navigate(['']);
    
  }

  
}
