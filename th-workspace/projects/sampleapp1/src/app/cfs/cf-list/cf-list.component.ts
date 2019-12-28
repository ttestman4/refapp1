import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CF } from '../cf';
import { CFService } from '../cf.service';

@Component({
  selector: 'app-cf-list',
  templateUrl: './cf-list.component.html',
  styleUrls: ['./cf-list.component.scss']
})
export class CfListComponent implements OnInit {

  cfs$: Observable<CF[]>;
  selectedId: number;

  //selectedCF: CF;
  //cfs: CF[];

  //constructor(private cfService: CFService) { }

  constructor(
    private service: CFService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cfs$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getCfs();
      })
    );
  }
}

