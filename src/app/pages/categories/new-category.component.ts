import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-category',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sm:p-4 lg:p-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h1 class="text-2xl font-bold text-white">New Category Details</h1>
      </div>

      <div class="bg-[#171717] rounded-lg p-6">
        <div class="space-y-4">
          <div>
            <h2 class="text-lg font-medium text-white mb-2">Category Information</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-400">Name</p>
                <p class="text-white">{{ category?.name }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-400">Slug</p>
                <p class="text-white">{{ category?.slug }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-400">Visibility</p>
                <p class="text-white">{{ category?.visible ? 'Visible' : 'Hidden' }}</p>
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button
              (click)="goBack()"
              class="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600"
            >
              Back to Categories
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class NewCategoryComponent implements OnInit {
  category: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.category = navigation?.extras.state?.['category'];
  }

  ngOnInit(): void {
    if (!this.category) {
      this.router.navigate(['/categories']);
    }
  }

  goBack() {
    this.router.navigate(['/categories']);
  }
} 