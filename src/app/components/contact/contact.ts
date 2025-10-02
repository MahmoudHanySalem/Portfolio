import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl , Validators, ReactiveFormsModule} from '@angular/forms';
import emailjs from 'emailjs-com';

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
  
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Form submitted successfully!');
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

 sendEmail() {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;

      emailjs.send(
        'service_nfpcf5e',   // from EmailJS
        'template_fm8gfvj',  // from EmailJS 
        {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          service:formValues.service,
          email: formValues.email,
          message: formValues.message
        },
        'kFhWmxl2OPYDWFVqH'    // from EmailJS
      )
      .then(() => {
        alert('Message sent successfully ✅');
        this.contactForm.reset();
      })
      .catch((err) => {
        alert('❌ Failed to send message: ' + JSON.stringify(err));
      });
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
