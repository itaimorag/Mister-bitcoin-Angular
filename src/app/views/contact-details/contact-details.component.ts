import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, mergeMap, Observable, Subscription, switchMap, tap } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';
import { Transaction } from 'src/app/models/transaction.model'
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

    constructor(
        private contactService: ContactService,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
    ) { 
       
        }
    contact!: Contact
    user!: User
    title!:string
    transactions!: Transaction[]

    contactSubscription!: Subscription
    userSubscription!: Subscription
    async ngOnInit(): Promise<void> {
        this.contactSubscription = this.route.data.subscribe(data => {
                this.contact = data['contact']
            })
        this.userSubscription = this.userService.user$.subscribe(user => {
            this.user = user
            this.transactions=this.user.transactions.filter(transaction=>transaction.to===this.contact.name)
        })
        this.title=`Your transactions`
    }
    onBack() {
        this.router.navigateByUrl('/contactIndex')
    }


    onEditContact(ev: MouseEvent) {
        ev.stopPropagation()
        this.router.navigate(['/edit', this.contact._id])
    }

    onTransfer(amount: number) {
        this.userService.addMove(this.contact, amount)
    }

    ngOnDestroy(): void {
        this.contactSubscription.unsubscribe()
    }

}
