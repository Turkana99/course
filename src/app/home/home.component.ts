import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface Image {
  id: number;
  path: string;
  width: number;
  height: number;
  top: number;
  left: number;
  backgroundColor: string;
  lineFrom: string;
  lineTo: string;
  curve: string;
  linePath: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('curvedLinesDiv')
  images: Image[] = [
    {
      id: 1,
      path: '../../../../assets/images/1.png',
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      backgroundColor: '#B2E2C6',
      lineFrom: '',
      lineTo: '',
      curve: '',
      linePath: '',
    },
    {
      id: 2,
      path: '../../../../assets/images/2.png',
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      backgroundColor: '#FFEDB5',
      lineFrom: '',
      lineTo: '',
      curve: '',
      linePath: '',
    },
    {
      id: 3,
      path: '../../../../assets/images/3.png',
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      backgroundColor: '#FDCCC4',
      lineFrom: '',
      lineTo: '',
      curve: '',
      linePath: '',
    },
    {
      id: 4,
      path: '../../../../assets/images/4.png',
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      backgroundColor: '#C6CAF9',
      lineFrom: '',
      lineTo: '',
      curve: '',
      linePath: '',
    },
  ];
  lines: any[] = [];

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(VideoDialogComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}

