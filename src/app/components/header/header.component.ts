import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // amount: number;
  amount$: Observable<number>;

  total$: Observable<number>;
  total: number;


  constructor(private dataService: DataService) {
      console.log("Header created");

      // this.amount = dataService.amount;
      this.amount$ = dataService.amount$;
      // total is assigned once, it can be bind to view
      // however any updates to total won't be reflected
      //this.total = dataService.total; // primitive / value / no reference

      this.total$ = dataService.total$
   }

  ngOnInit() {

    this.total$.subscribe ( (n) => {
      console.log("***total", n)
      this.total = n;
    })

    // this.dataService
    //     .amount$
    //     .subscribe ( n => {
    //       console.log("SUBSCRIBE ", n);
    //       this.amount = n;
    //     })
  }

}
