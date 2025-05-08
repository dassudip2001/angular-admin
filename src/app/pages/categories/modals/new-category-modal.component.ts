import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-category-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-[#171717] rounded-lg p-6 w-full max-w-md">
        <h2 class="text-xl font-bold text-white mb-4">New Category</h2>
        
        <form (ngSubmit)="onSubmit()" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              [(ngModel)]="category.name"
              name="name"
              class="w-full bg-[#242426] text-white rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
              required
            >
          </div>
          
          <div>
            <label for="slug" class="block text-sm font-medium text-gray-300 mb-1">Slug</label>
            <input
              type="text"
              id="slug"
              [(ngModel)]="category.slug"
              name="slug"
              class="w-full bg-[#242426] text-white rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
              required
            >
          </div>
          
          <div class="flex items-center">
            <input
              type="checkbox"
              id="visible"
              [(ngModel)]="category.visible"
              name="visible"
              class="rounded bg-[#242426] border-[#242426] text-orange-500 focus:ring-amber-500"
            >
            <label for="visible" class="ml-2 text-sm text-gray-300">Visible</label>
          </div>
          
          <div class="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              (click)="onClose()"
              class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class NewCategoryModalComponent {
  @Output() close = new EventEmitter<void>();
  
  category = {
    name: '',
    slug: '',
    visible: true
  };

  constructor(private router: Router) {}

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    // Here you would typically save the category to your service
    // For now, we'll just redirect to a new page
    this.router.navigate(['/categories/new'], { 
      state: { category: this.category }
    });
    this.close.emit();
  }
} 