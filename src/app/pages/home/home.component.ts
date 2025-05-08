import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { DataService } from "../../services/data.service"

interface Post {
  id: number
  title: string
  body: string
}

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to Angular App</h1>
        <p class="text-xl text-gray-600">A modern Angular application with standalone components</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let feature of features" class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-blue-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="feature.icon"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{feature.title}}</h3>
          <p class="text-gray-600">{{feature.description}}</p>
        </div>
      </div>

      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Latest Posts</h2>
        <div *ngIf="loading" class="text-center py-8">
          <p>Loading posts...</p>
        </div>
        <div *ngIf="error" class="text-center py-8 text-red-500">
          <p>{{error}}</p>
        </div>
        <div *ngIf="!loading && !error" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div *ngFor="let post of posts" class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">{{post.title}}</h3>
            <p class="text-gray-600">{{post.body}}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  features = [
    {
      title: "Standalone Components",
      description: "Built with Angular's modern standalone components approach for better modularity.",
      icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    },
    {
      title: "Lazy Loading",
      description: "Routes are lazy loaded for better performance and faster initial load times.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "Responsive Design",
      description: "Fully responsive layout that works great on desktop, tablet, and mobile devices.",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
  ]

  posts: Post[] = []
  loading = true
  error: string | null = null

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe({
      next: (data) => {
        this.posts = data.slice(0, 4)
        this.loading = false
      },
      error: (err) => {
        this.error = "Failed to load posts. Please try again later."
        this.loading = false
        console.error("Error fetching posts:", err)
      },
    })
  }
}
