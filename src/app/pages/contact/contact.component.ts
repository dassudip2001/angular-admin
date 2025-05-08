import { Component } from "@angular/core"
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <section class="py-8">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                formControlName="name"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                [ngClass]="{'border-red-500': submitted && f['name'].errors}"
              >
              <div *ngIf="submitted && f['name'].errors" class="text-red-500 mt-1">
                <div *ngIf="f['name'].errors['required']">Name is required</div>
              </div>
            </div>

            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                formControlName="email"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                [ngClass]="{'border-red-500': submitted && f['email'].errors}"
              >
              <div *ngIf="submitted && f['email'].errors" class="text-red-500 mt-1">
                <div *ngIf="f['email'].errors['required']">Email is required</div>
                <div *ngIf="f['email'].errors['email']">Please enter a valid email address</div>
              </div>
            </div>

            <div class="mb-4">
              <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                formControlName="message"
                rows="5"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                [ngClass]="{'border-red-500': submitted && f['message'].errors}"
              ></textarea>
              <div *ngIf="submitted && f['message'].errors" class="text-red-500 mt-1">
                <div *ngIf="f['message'].errors['required']">Message is required</div>
                <div *ngIf="f['message'].errors['minlength']">Message must be at least 20 characters</div>
              </div>
            </div>

            <div class="flex justify-end">
              <button
                type="submit"
                class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                [disabled]="loading"
              >
                <span *ngIf="loading">Sending...</span>
                <span *ngIf="!loading">Send Message</span>
              </button>
            </div>

            <div *ngIf="success" class="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
              Your message has been sent successfully! We'll get back to you soon.
            </div>
          </form>
        </div>

        <div class="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Contact Information</h2>

          <div class="space-y-4">
            <div class="flex items-start">
              <div class="text-blue-500 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="font-medium">Address</p>
                <p class="text-gray-600">123 Angular Street, Web City, 12345</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-blue-500 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="font-medium">Email</p>
                <p class="text-gray-600">info&#64;angularapp.com</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-blue-500 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="font-medium">Phone</p>
                <p class="text-gray-600">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ContactComponent {
  contactForm: FormGroup
  submitted = false
  loading = false
  success = false

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required, Validators.minLength(20)]],
    })
  }

  get f() {
    return this.contactForm.controls
  }

  onSubmit() {
    this.submitted = true

    if (this.contactForm.invalid) {
      return
    }

    this.loading = true

    // Simulate API call
    setTimeout(() => {
      this.loading = false
      this.success = true
      this.contactForm.reset()
      this.submitted = false

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.success = false
      }, 5000)
    }, 1500)
  }
}
