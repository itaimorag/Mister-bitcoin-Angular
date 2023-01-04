import { Component, OnInit,OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { map } from 'rxjs/operators';
import { Observable, Subscription,lastValueFrom } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Transaction } from 'src/app/models/transaction.model'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private BitcoinService: BitcoinService,private UserService: UserService  ) { }
  user: User = {
    name: "",
    coins: 0,
    transactions: []
  }
  transactions!: Transaction[]
  // user$!: Observable<User>
  subscription!: Subscription
  bitcoinRate!:Observable<Object>
  title!:string

  async ngOnInit(): Promise<void> {
    // this.UserService.getUser()
    // this.user$ =this.UserService.user$
    this.subscription = this.UserService.user$.subscribe(user => {
            this.user = user
        })
        this.transactions=this.user.transactions.slice(0,3)
        this.title=`Your last ${this.transactions.length} transactions`
   const bitcoinRate = this.BitcoinService.getBitcoinRate(this.user.coins)
    this.bitcoinRate = bitcoinRate
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
}

}
