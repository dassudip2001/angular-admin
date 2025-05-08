import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { ProductService } from "../../services/product.service"

interface Product {
  id: string
  image: string
  name: string
  brand: string
  visible: boolean
  price: number
  sku: string
}

@Component({
  selector: "app-products",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-4 sm:p-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div class="flex items-center space-x-3">
          <h1 class="text-2xl font-bold text-white">Products</h1>
          <div class="text-sm text-gray-400 bg-[#242426] rounded-full px-2 py-0.5">23</div>
        </div>
        <button class="bg-[#f59f0a] hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium w-full sm:w-auto">
          New product
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <div class="bg-[#171717] rounded-lg p-6">
          <div class="flex items-center space-x-3 text-amber-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 class="font-medium">Total Products</h3>
          </div>
          <div class="text-3xl font-bold">{{ totalProducts }}</div>
        </div>

        <div class="bg-[#171717] rounded-lg p-6">
          <div class="flex items-center space-x-3 text-amber-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h3 class="font-medium">Product Inventory</h3>
          </div>
          <div class="text-3xl font-bold">{{ totalInventory }}</div>
        </div>

        <div class="bg-[#171717] rounded-lg p-6">
          <div class="flex items-center space-x-3 text-amber-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="font-medium">Average price</h3>
          </div>
          <div class="text-3xl font-bold">{{ averagePrice.toFixed(2) }}</div>
        </div>
      </div>

      <div class="bg-[#171717] rounded-lg">
        <div class="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-center space-x-3 w-full sm:w-auto">
            <div class="flex items-center space-x-2">
              <input type="checkbox" [(ngModel)]="selectAll" (change)="toggleAll()" class="rounded bg-[#242426] border-gray-600 text-amber-500 focus:ring-amber-500">
            </div>
            <div class="flex-1 sm:flex-none w-full sm:w-auto">
              <select [(ngModel)]="sortBy" (change)="sortProducts()" class="bg-[#242426] border-0 text-white rounded-md px-3 py-2 w-full focus:ring-1 focus:ring-gray-500">
                <option value="">Sort by</option>
                <option value="name">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
              </select>
            </div>
          </div>

          <div class="relative w-full sm:w-64">
            <input
              type="text"
              [(ngModel)]="searchQuery"
              (input)="filterProducts()"
              placeholder="Search"
              class="bg-[#242426] text-white text-sm rounded-md px-3 py-2 pl-8 w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
            >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                <th class="p-4 w-8">
                  <input type="checkbox" [(ngModel)]="selectAll" (change)="toggleAll()" class="rounded bg-[#242426] border-gray-600 text-amber-500 focus:ring-amber-500">
                </th>
                <th class="p-4 w-16">Image</th>
                <th class="p-4">
                  <button (click)="sort('name')" class="flex items-center space-x-1 hover:text-white">
                    <span>Name</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">
                  <button (click)="sort('brand')" class="flex items-center space-x-1 hover:text-white">
                    <span>Brand</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">
                  <button (click)="sort('visible')" class="flex items-center space-x-1 hover:text-white">
                    <span>Visibility</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">
                  <button (click)="sort('price')" class="flex items-center space-x-1 hover:text-white">
                    <span>Price</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">
                  <button (click)="sort('sku')" class="flex items-center space-x-1 hover:text-white">
                    <span>SKU</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr *ngFor="let product of paginatedProducts" class="hover:bg-[#242426]">
                <td class="p-4">
                  <input type="checkbox" [(ngModel)]="product.selected" (change)="updateSelectAll()" class="rounded bg-[#242426] border-gray-600 text-amber-500 focus:ring-amber-500">
                </td>
                <td class="p-4">
                  <img [src]="product.image" alt="Product" class="h-10 w-10 rounded object-cover">

                </td>
                <td class="p-4 font-medium">{{ product.name }}</td>
                <td class="p-4 text-gray-400">{{ product.brand }}</td>
                <td class="p-4">
                  <span *ngIf="product.visible" class="text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span *ngIf="!product.visible" class="text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </td>
                <td class="p-4">{{ product.price.toFixed(2) }}</td>
                <td class="p-4 text-gray-400">{{ product.sku }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="p-4 flex flex-col gap-4 border-t border-gray-700">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="text-sm text-gray-400 order-2 sm:order-1">
              Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ filteredProducts.length }} results
            </div>
            <div class="flex items-center space-x-2 order-1 sm:order-2">
              <select
                [(ngModel)]="itemsPerPage"
                (change)="updatePagination()"
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
                [class.bg-amber-500]="currentPage === page"
                [class.text-white]="currentPage === page"
                [class.bg-[#242426]]="currentPage !== page"
                class="px-3 py-2 rounded-md text-sm min-w-[40px]"
              >
                {{ page }}
              </button>
            </div>
            <button
              [disabled]="currentPage === totalPages"
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
export class ProductsComponent implements OnInit {
  products: (Product & { selected?: boolean })[] = []
  filteredProducts: (Product & { selected?: boolean })[] = []
  paginatedProducts: (Product & { selected?: boolean })[] = []

  // Stats
  totalProducts = 49
  totalInventory = 254
  averagePrice = 245.61

  // Search and Sort
  searchQuery = ""
  sortBy = ""
  sortDirection: "asc" | "desc" = "asc"
  selectAll = false

  // Pagination
  currentPage = 1
  itemsPerPage = 10
  totalPages = 1
  startIndex = 0
  endIndex = 0
  visiblePages: number[] = []

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    this.filteredProducts = [...this.products]
    this.updatePagination()
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(this.searchQuery.toLowerCase())
    )
    this.currentPage = 1
    this.updatePagination()
  }

  sort(column: string): void {
    if (this.sortBy === column) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc"
    } else {
      this.sortBy = column
      this.sortDirection = "asc"
    }

    this.filteredProducts.sort((a, b) => {
      const aValue = a[column as keyof Product]
      const bValue = b[column as keyof Product]

      if (typeof aValue === "string" && typeof bValue === "string") {
        return this.sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return this.sortDirection === "asc"
          ? aValue - bValue
          : bValue - aValue
      }

      if (typeof aValue === "boolean" && typeof bValue === "boolean") {
        return this.sortDirection === "asc"
          ? (aValue === bValue ? 0 : aValue ? -1 : 1)
          : (aValue === bValue ? 0 : aValue ? 1 : -1)
      }

      return 0
    })

    this.updatePagination()
  }

  toggleAll(): void {
    this.paginatedProducts.forEach(product => product.selected = this.selectAll)
  }

  updateSelectAll(): void {
    this.selectAll = this.paginatedProducts.every(product => product.selected)
  }

  sortProducts(): void {
    const [column, direction] = this.sortBy.split('-')
    this.sortDirection = (direction === 'desc') ? 'desc' : 'asc'
    if (column) this.sort(column)
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage)
    this.currentPage = Math.min(this.currentPage, this.totalPages)

    this.startIndex = (this.currentPage - 1) * this.itemsPerPage
    this.endIndex = Math.min(this.startIndex + this.itemsPerPage, this.filteredProducts.length)

    this.paginatedProducts = this.filteredProducts.slice(this.startIndex, this.endIndex)

    // Calculate visible page numbers
    const totalPagesToShow = 5
    let startPage = Math.max(1, this.currentPage - Math.floor(totalPagesToShow / 2))
    let endPage = Math.min(this.totalPages, startPage + totalPagesToShow - 1)

    if (endPage - startPage + 1 < totalPagesToShow) {
      startPage = Math.max(1, endPage - totalPagesToShow + 1)
    }

    this.visiblePages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    )
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--
      this.updatePagination()
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++
      this.updatePagination()
    }
  }

  goToPage(page: number): void {
    this.currentPage = page
    this.updatePagination()
  }
}
