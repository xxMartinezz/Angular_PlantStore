import { Component, OnInit } from '@angular/core';
import { StuffService } from 'src/app/stuff.service';
import { Stuff } from 'src/app/stuff';

@Component({
  selector: 'app-stuff-list',
  templateUrl: './stuff-list.component.html',
  styleUrls: ['./stuff-list.component.css']
})
export class StuffListComponent implements OnInit {

  private stuff: Stuff[];

  constructor(private stuffService: StuffService) { }

  ngOnInit() {
    this.stuff = this.stuffService.getStuffList();
  }

}
