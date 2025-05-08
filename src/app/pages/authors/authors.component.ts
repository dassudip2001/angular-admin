import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { AuthorService } from "../../services/author.service"

interface Author {
  id: string
  name: string
  email: string
  github: string
  twitter: string
}

@Component({
  selector: "app-authors",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="sm:p-4 lg:p-6">
      <!-- Title and New Author Button -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h1 class="text-2xl font-bold text-white">Authors</h1>
        <div class="flex flex-col sm:flex-row gap-3">
          <button class="bg-[#242426] hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium w-full sm:w-auto">
            Export authors
          </button>
          <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium w-full sm:w-auto">
            New author
          </button>
        </div>
      </div>

      <div class="bg-[#171717] rounded-lg mb-6">
        <!-- Search and Sort -->
        <div class="p-4  flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-center space-x-3 w-full sm:w-auto">
            <div class="flex items-center space-x-2">
            <input type="checkbox" class="rounded bg-[#242426] border-[#242426] text-[#242426] focus:ring-[#242426]">
            </div>
            <div class="flex-1 sm:flex-none">
              <select class="bg-[#242426] border-0 text-white rounded-md px-3 py-2 w-full sm:w-auto focus:ring-1 focus:ring-gray-500">
                <option>Sort by</option>
                <option>Name (A-Z)</option>
                <option>Name (Z-A)</option>
                <option>Email</option>
              </select>
            </div>
          </div>

          <div class="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search"
              class="bg-[#242426] text-white text-sm rounded-md px-3 py-2 pl-8 w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
            >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div class="divide-y divide-gray-700">
          <div *ngFor="let author of authors" class="p-4 hover:bg-[#242426]">
            <div class="flex flex-col sm:flex-row sm:items-center gap-4">
              <div class="flex items-center">
                <div class="pr-4">
                  <input type="checkbox" class="rounded bg-[#242426] border-[#242426] text-[#242426] focus:ring-[#242426]">
                </div>
                <div class="flex-1">
                  <div class="font-medium text-white">{{ author.name }}</div>
                  <div class="text-gray-400 text-sm">{{ author.email }}</div>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:ml-auto gap-4">
                <div class="flex flex-col sm:items-end space-y-2 sm:space-y-1 w-full sm:w-auto">
                  <div class="flex items-center space-x-1 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>{{ author.github }}</span>
                  </div>
                  <div class="flex items-center space-x-1 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    <span>{{ author.twitter }}</span>
                  </div>
                </div>
                <div class="flex space-x-2">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = []

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.authors = this.authorService.getAuthors()
  }
}