import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  constructor(
    private UserService: UserService,
    private router: Router,
    private route: ActivatedRoute,
) {}


onSignup(form: NgForm) {
    this.UserService.signup(form.value.name)
    this.router.navigateByUrl('/')
    // form.reset()
}
}
