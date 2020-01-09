import { Component, OnInit } from '@angular/core';
import { ListActiviteService } from '../../shared/services/home/list-activite.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-list-activite',
  templateUrl: './list-activite.component.html',
  styleUrls: ['./list-activite.component.scss']
})
export class ListActiviteComponent implements OnInit {
  activites: Array<any>;

  constructor(private listActiviteService: ListActiviteService) { }

  ngOnInit() {
    this.listActiviteService.getAll().subscribe(data => {
      this.activites = data;
      console.log(this.activites);
    });
  }

}
