import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ShowResComponent } from './reservations/show-res/show-res.component';
import { AddEditResComponent } from './reservations/add-edit-res/add-edit-res.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DeleteComponent } from './reservations/delete/delete.component';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import{MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    ReservationsComponent,
    ShowResComponent,
    AddEditResComponent,
    DeleteComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     FormsModule,
   ReactiveFormsModule,
   HttpClientModule,
   MatTableModule,
   MatDialogModule,
   MatFormFieldModule,
   CommonModule,
   MatPaginatorModule,
   MatSortModule,
   MatInputModule
  
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
