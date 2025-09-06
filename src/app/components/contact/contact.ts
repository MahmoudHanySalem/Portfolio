import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl , Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

   contactForm: FormGroup = new FormGroup({
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  phone: new FormControl(''), // optional
  service: new FormControl('', Validators.required),
  message: new FormControl('', Validators.required)
});

  services = ['Frontend Development', 'Backend Development', 'Full-stack Development', 'Technical Consultation'];


inputHasError(controlName: string, errorType: string): boolean {
  const control = this.contactForm.get(controlName);

  if (!control) return false;

  return control.hasError(errorType) && (control.dirty || control.touched);
}
  
  // onSubmit() {
  //   if (this.contactForm.valid) {
  //     console.log(this.contactForm.value);
  //     alert('Form submitted successfully!');
  //   } else {
  //     this.contactForm.markAllAsTouched();
  //   }
  // }




  private encode(data: Record<string, any>) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key] ?? ''))
      .join('&');
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // build body (must include form-name)
    const bodyObj = { 'form-name': 'contact', ...this.contactForm.value };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode(bodyObj)
    })
      .then(() => {
        // success UI (toast, clear form, etc.)
        alert('Message sent — thank you!');
        this.contactForm.reset();
      })
      .catch(err => {
        console.error(err);
        alert('Error sending message. Try again later.');
      });
  }
}
