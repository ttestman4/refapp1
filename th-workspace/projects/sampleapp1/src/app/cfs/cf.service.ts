import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { CF } from './cf';
import { CFS } from './mock-cfs';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CFService {

  constructor(private messageService: MessageService) { }

  getCfs(): Observable<CF[]> {
    // TODO: send the message _after_ fetching the cfs
    this.messageService.add('CFService: fetched cfs');
    return of(CFS);
  }
  
  
  getCf(id: number | string){
  
    return this.getCfs().pipe(
    // (+) before `id` turns the string into a number
      map((cfs: CF[]) => cfs.find(cf => cf.id === +id))
    );
  }
}
