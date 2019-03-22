import { Component, OnInit } from '@angular/core';
import { CrService } from '../Services/cr.service';

@Component({
  selector: 'app-crlist',
  templateUrl: './crlist.component.html',
  styleUrls: ['./crlist.component.scss']
})
export class CrlistComponent implements OnInit {

  constructor(crservice:CrService) { }

  ngOnInit() {
  }

}
