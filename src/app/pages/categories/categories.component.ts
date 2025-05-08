import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
// Change from:
// import type { CategoryService } from "../../services/category.service"
// to:
import { CategoryService } from "../../services/category.service"
import { NewCategoryModalComponent } from "./modals/new-category-modal.component"

interface Category {
  id: string
  name: string
  slug: string
  visible: boolean
  lastUpdated: string
}

@Component({
  selector: "app-categories",
  standalone: true,
  imports: [CommonModule, FormsModule, NewCategoryModalComponent],
  template: `
    <div class="sm:p-4 lg:p-6">
      <!-- Title and New Post Button -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h1 class="text-2xl font-bold text-white">Categories</h1>
        <div class="flex flex-col sm:flex-row gap-3">
          <button class="bg-[#242426] hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium w-full sm:w-auto">
            Import categories
          </button>
          <button 
            (click)="showNewCategoryModal = true"
            class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium w-full sm:w-auto">
            New category
          </button>
        </div>
      </div>

      <div class="bg-[#171717] rounded-lg mb-6">
        <!-- Search Bar - Moved to top right -->
        <div class="p-4 flex justify-end">
          <div class="flex items-center space-x-3 w-full sm:w-64">
            <div class="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                class="bg-[#242426] text-white text-sm rounded-md px-3 py-2 pl-8 w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
              >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button class="bg-[#242426] hover:bg-gray-600 text-white p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-left text-xs font-medium text-gray-400 bg-[#242426] uppercase tracking-wider">
                <th class="p-4 w-8">
                  <input type="checkbox" class="rounded bg-[#242426] border-[#242426] text-[#242426] focus:ring-[#242426]">
                </th>
                <th class="p-4">
                  <button class="flex items-center space-x-1">
                    <span>Name</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4 hidden sm:table-cell">
                  <button class="flex items-center space-x-1">
                    <span>Slug</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">Visibility</th>
                <th class="p-4 hidden sm:table-cell">Last Updated</th>
                <th class="p-4">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr *ngFor="let category of categories" class="hover:bg-[#242426] text-white">
                <td class="p-4">
                  <input type="checkbox" class="rounded bg-[#242426] border-[#242426] text-[#242426] focus:ring-[#242426]">
                </td>
                <td class="p-4">{{ category.name }}</td>
                <td class="p-4 hidden sm:table-cell">{{ category.slug }}</td>
                <td class="p-4">
                  <span *ngIf="category.visible" class="text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span *ngIf="!category.visible" class="text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </td>
                <td class="p-4 hidden sm:table-cell">{{ category.lastUpdated }}</td>
                <td class="p-4">
                  <div class="flex space-x-2">
                    <button class="text-gray-400 hover:text-orange-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button class="text-gray-400 hover:text-orange-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button class="text-gray-400 hover:text-orange-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-4 flex flex-col sm:flex-row items-center justify-between text-sm text-white gap-4">
          <div class="text-gray-400 order-2 sm:order-1">
            Showing 1 to 10 of 397 results
          </div>
          <div class="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 order-1 sm:order-2 w-full sm:w-auto">
            <div class="flex items-center space-x-2 w-full sm:w-auto">
              <div class="text-gray-400">Per page</div>
              <select class="bg-[#242426] border-0 text-white rounded-md px-2 py-1 focus:ring-1 focus:ring-gray-500">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>

            <div class="flex w-full sm:w-auto justify-center">
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1 rounded-l-md">1</button>
              <button class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1">2</button>
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1">3</button>
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1 hidden sm:block">4</button>
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1 hidden sm:block">...</button>
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1 hidden sm:block">39</button>
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1 hidden sm:block">40</button>
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1 rounded-r-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- New Category Modal -->
      <app-new-category-modal 
        *ngIf="showNewCategoryModal"
        (close)="showNewCategoryModal = false">
      </app-new-category-modal>
    </div>
  `,
  styles: [],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = []
  showNewCategoryModal = false

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories()
  }
}
