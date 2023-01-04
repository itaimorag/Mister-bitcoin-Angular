import { Component,EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent {

  @Input() contact!: Contact
  @Output() onTransfer = new EventEmitter<number>()

  onTransferEnter(form: NgForm) {
    // console.log(`form = `, form)
    const amount =form.value.amount
    this.onTransfer.emit(amount)
    form.reset()
}
}
