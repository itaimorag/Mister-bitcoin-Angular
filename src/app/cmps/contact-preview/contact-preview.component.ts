import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Router } from '@angular/router';

@Component({
    selector: 'contact-preview',
    templateUrl: './contact-preview.component.html',
    styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
    @Input() contact!: Contact
    @Output() onSelect = new EventEmitter<string>()
    @Output() onRemove = new EventEmitter<string>()

    constructor(private router: Router){}

    onSelectContactId() {
        this.onSelect.emit(this.contact._id)
    }

    onRemoveContact(ev: MouseEvent) {
        ev.stopPropagation()
        this.onRemove.emit(this.contact._id)
    }

    onEditContact(ev: MouseEvent) {
        ev.stopPropagation()
        this.router.navigate(['/edit', this.contact._id])
    }
}
