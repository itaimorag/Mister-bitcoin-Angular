import { Component,Input,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Transaction} from 'src/app/models/transaction.model'

@Component({
  selector: 'transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent{

@Input() transactions!:Transaction[]
@Input() title!:string

isHome:boolean=true

  constructor(private userService: UserService) { }

   ngOnInit() {
    //the word last appears in home page title
    if(this.title.includes('last')) this.isHome=true
    else this.isHome=false

}


}
