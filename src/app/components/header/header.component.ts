import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CartState } from 'src/app/state/reducers/cart.reducer';
import { selectCartAmount } from 'src/app/state/selectors/cart.selectors';

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

  amountFromStore$: Observable<number>;
 

  constructor(private dataService: DataService, 
        private store: Store<{ cartState: CartState }>) {
      console.log("Header created");

      // this amount#$ subcribe caleld only if amount is changed
      this.amountFromStore$ = this.store.select(selectCartAmount)

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
