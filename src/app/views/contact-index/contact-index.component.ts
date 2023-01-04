import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserMsgService } from 'src/app/services/user-msg.service';

@Component({
    selector: 'contact-index',
    templateUrl: './contact-index.component.html',
    styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent implements OnInit, OnDestroy {

    constructor(private contactService: ContactService, private userMsgService: UserMsgService) { }

    contacts!: Contact[]
    contacts$!: Observable<Contact[]>
    selectedContactId = ''

    subscription!: Subscription

    onSelectContactId(contactId: string) {
        this.selectedContactId = contactId
    }

    onRemoveContact(contactId: string) {
        this.contactService.remove(contactId)
        this.userMsgService.setMsg(`Contact (${contactId}) removed!`)
    }

    ngOnInit(): void {

        this.contactService.query()
        this.contacts$ = this.contactService.contacts$
        // this.subscription = this.contactService.contacts$.subscribe(contacts => {
        //     this.contacts = contacts
        // })

    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe()
    }


}
