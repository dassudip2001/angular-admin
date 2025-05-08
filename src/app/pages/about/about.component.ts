import { Component } from "@angular/core"

@Component({
  selector: "app-about",
  standalone: true,
  template: `
    <section class="py-8">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
        
        <div class="prose prose-lg">
          <p class="mb-4">
            Welcome to our Angular application! This is a modern web application built with Angular's
            standalone components approach, providing a fast and responsive user experience.
          </p>
          
          <p class="mb-4">
            Our team is dedicated to creating high-quality web applications using the latest
            technologies and best practices in web development.
          </p>
          
          <h2 class="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          
          <p class="mb-4">
            Our mission is to deliver exceptional user experiences through innovative web solutions
            that are fast, reliable, and easy to use.
          </p>
          
          <h2 class="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
          
          <p class="mb-4">
            Our team consists of passionate developers, designers, and product managers who work
            together to create amazing web applications.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class AboutComponent {}
