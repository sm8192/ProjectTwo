import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-testzone',
  templateUrl: './testzone.component.html',
  styleUrls: ['./testzone.component.css']
})
export class TestzoneComponent implements OnInit {

  users:any[] = []

  constructor(private data : DataService) {
    this.data.getUsers().subscribe(data => {this.users = data});

  }
  ngOnInit(): void {
  }
}
