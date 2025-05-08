import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { PostService } from "../../services/post.service"

interface Post {
  id: string
  image: string
  title: string
  author: string
  status: "draft" | "published"
  date: string
  commentAuthors: string[]
}

@Component({
  selector: "app-posts",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="sm:p-4 lg:p-6">
      <!-- Title and New Post Button -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-2">
          <h1 class="text-2xl font-bold text-white">Posts</h1>
        </div>
        <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          New post
        </button>
      </div>

      <div class="bg-[#171717] rounded-lg mb-6">
        <!-- Search Bar - Moved to top right -->
        <div class="p-4 flex justify-end">
          <div class="flex items-center space-x-3 w-64">
            <div class="relative flex-1">
              <input
                type="text"
                [(ngModel)]="searchQuery"
                (ngModelChange)="filterPosts()"
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
                <th class="p-4 w-16">Image</th>
                <th class="p-4">
                  <button class="flex items-center space-x-1" (click)="sortBy('title')">
                    <span>Title</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">
                  <button class="flex items-center space-x-1" (click)="sortBy('author')">
                    <span>Author</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">Status</th>
                <th class="p-4">Published Date</th>
                <th class="p-4">Comment Authors</th>
                <th class="p-4">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr *ngFor="let post of paginatedPosts" class="hover:bg-[#242426] text-white">
                <td class="p-4">
                  <input type="checkbox" class="rounded bg-[#242426] border-gray-600 text-orange-500 focus:ring-orange-500">
                </td>
                <td class="p-4">
                  <div class="h-10 w-10 rounded bg-gray-700 overflow-hidden">
                    <img [src]="post.image" [alt]="post.title" class="h-full w-full object-cover">
                  </div>
                </td>
                <td class="p-4">{{ post.title }}</td>
                <td class="p-4">{{ post.author }}</td>
                <td class="p-4">
                  <span
                    [ngClass]="{
                      'bg-orange-500/20 text-orange-500': post.status === 'draft',
                      'bg-green-500/20 text-green-500': post.status === 'published'
                    }"
                    class="px-2 py-1 rounded text-xs font-medium"
                  >
                    {{ post.status }}
                  </span>
                </td>
                <td class="p-4">{{ post.date }}</td>
                <td class="p-4">
                  <div>
                    <div>{{ post.commentAuthors[0] }}</div>
                    <div class="text-xs text-gray-400">Show 5 more</div>
                  </div>
                </td>
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
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Pagination -->
      <div class="bg-[#171717] rounded-lg mt-6">
        <div class="p-4 flex flex-col gap-4 border-t border-gray-700">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="text-sm text-gray-400 order-2 sm:order-1">
              Showing {{ getStartIndex() }} to {{ getEndIndex() }} of {{ filteredPosts.length }} results
            </div>
            <div class="flex items-center space-x-2 order-1 sm:order-2">
              <select
                [(ngModel)]="itemsPerPage"
                (change)="updatePaginatedPosts()"
                class="bg-[#242426] border-0 text-white rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-gray-500 w-full sm:w-auto"
              >
                <option [value]="10">10 per page</option>
                <option [value]="25">25 per page</option>
                <option [value]="50">50 per page</option>
                <option [value]="100">100 per page</option>
              </select>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-center sm:justify-end gap-2">
            <button
              [disabled]="currentPage === 1"
              (click)="previousPage()"
              class="bg-[#242426] text-white px-3 py-2 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed min-w-[80px]"
            >
              Previous
            </button>
            <div class="flex flex-wrap items-center gap-1">
              <button
                *ngFor="let page of visiblePages"
                (click)="goToPage(page)"
                [class.bg-orange-500]="currentPage === page"
                [class.text-white]="currentPage === page"
                [class.bg-[#242426]]="currentPage !== page"
                class="px-3 py-2 rounded-md text-sm min-w-[40px]"
              >
                {{ page }}
              </button>
            </div>
            <button
              [disabled]="currentPage * itemsPerPage >= filteredPosts.length"
              (click)="nextPage()"
              class="bg-[#242426] text-white px-3 py-2 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed min-w-[80px]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PostsComponent implements OnInit {
  posts: Post[] = []
  filteredPosts: Post[] = []
  paginatedPosts: Post[] = []
  searchQuery: string = ''
  currentPage: number = 1
  itemsPerPage: number = 10
  sortDirection: 'asc' | 'desc' = 'asc'
  sortField: string = ''
  visiblePages: number[] = []

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts()
    this.filteredPosts = [...this.posts]
    this.updatePaginatedPosts()
  }

  filterPosts(): void {
    this.filteredPosts = this.posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                          post.author.toLowerCase().includes(this.searchQuery.toLowerCase())
      return matchesSearch
    })
    this.currentPage = 1
    this.updatePaginatedPosts()
  }

  sortBy(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
    } else {
      this.sortField = field
      this.sortDirection = 'asc'
    }

    this.filteredPosts.sort((a, b) => {
      const aValue = a[field as keyof Post]
      const bValue = b[field as keyof Post]
      if (this.sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    this.updatePaginatedPosts()
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredPosts.length)
  }

  updatePaginatedPosts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage
    const endIndex = startIndex + this.itemsPerPage
    this.paginatedPosts = this.filteredPosts.slice(startIndex, endIndex)
    this.updateVisiblePages()
  }

  updateVisiblePages(): void {
    const totalPages = Math.ceil(this.filteredPosts.length / this.itemsPerPage)
    const totalPagesToShow = 5
    let startPage = Math.max(1, this.currentPage - Math.floor(totalPagesToShow / 2))
    let endPage = Math.min(totalPages, startPage + totalPagesToShow - 1)

    if (endPage - startPage + 1 < totalPagesToShow) {
      startPage = Math.max(1, endPage - totalPagesToShow + 1)
    }

    this.visiblePages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    )
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.filteredPosts.length) {
      this.currentPage++
      this.updatePaginatedPosts()
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--
      this.updatePaginatedPosts()
    }
  }

  goToPage(page: number): void {
    this.currentPage = page
    this.updatePaginatedPosts()
  }
}
