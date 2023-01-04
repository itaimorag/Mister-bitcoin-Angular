import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { UserMsgService } from 'src/app/services/user-msg.service';
import { ContactService } from 'src/app/services/contact.service';



@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit{
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private userMsgService: UserMsgService
) { }

contact!: Contact
subscription!: Subscription

ngOnInit(): void {

  this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact = contact || this.contactService.getEmptyContact() as Contact
  })
}

  onBack() {
    this.router.navigateByUrl('/contactIndex')
}

async onSaveContact() {
   this.contactService.save(this.contact)
  this.router.navigateByUrl('/contactIndex')
}

onRemoveContact(contactId: string) {
  this.contactService.remove(contactId)
  this.router.navigateByUrl('/contactIndex')
  this.userMsgService.setMsg(`Contact (${contactId}) removed!`)
}

ngOnDestroy(): void {
  this.subscription.unsubscribe()
}
}
