import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <!-- Overlay -->
    <div
      *ngIf="isOpen"
      (click)="closeSidebar()"
      class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
    ></div>

    <!-- Sidebar -->
    <aside
      [class.translate-x-0]="isOpen"
      [class.-translate-x-full]="!isOpen"
      class="fixed md:relative w-64 h-full bg-[#08080a] border-r border-[#171717] flex flex-col transform transition-transform duration-300 ease-in-out z-50 md:translate-x-0"
    >
      <div
        class="p-[14.6px] bg-[#171717] flex justify-between border-b border-gray-700"
      >
        <a routerLink="/" class="text-2xl font-bold text-white">
          Admin Console
        </a>
        <!-- Close button for mobile -->
        <div class="flex justify-end  md:hidden">
          <button
            (click)="closeSidebar()"
            class="text-gray-400 hover:text-[#f59f0a]"
          >
            X
          </button>
        </div>
      </div>

      <div class="flex-1 px-4 overflow-y-auto">
        <nav class="py-4">
          <a
            routerLink="/"
            routerLinkActive="active"
            (click)="closeSidebar()"
            [routerLinkActiveOptions]="{ exact: true }"
            class="flex items-center px-4 py-2 mx-2 text-gray-300 hover:bg-[#171717] hover:text-[#f59f0a] transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Dashboard
          </a>

          <div
            class="mt-6 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider"
          >
            Shop
          </div>

          <a
            routerLink="/products"
            routerLinkActive="active"
            (click)="closeSidebar()"
            class="flex items-center px-4 py-2 mx-2 text-gray-300 hover:bg-[#171717] hover:text-[#f59f0a] rounded-md transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            Products
          </a>

          <a
            routerLink="/orders"
            routerLinkActive="active"
            (click)="closeSidebar()"
            class="flex items-center px-4 py-2 mx-2 text-gray-300 hover:bg-[#171717] hover:text-[#f59f0a] rounded-md transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Orders
            <span class="ml-auto bg-gray-600 text-xs rounded-full px-2 py-0.5"
              >191</span
            >
          </a>

          <a
            routerLink="/customers"
            routerLinkActive="active"
            (click)="closeSidebar()"
            class="flex items-center px-4 py-2 mx-2 text-gray-300 hover:bg-[#171717] hover:text-[#f59f0a] rounded-md transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Customers
          </a>

          <div
            class="mt-6 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider"
          >
            Blog
          </div>

          <a
            routerLink="/posts"
            routerLinkActive="active"
            (click)="closeSidebar()"
            class="flex items-center px-4 py-2 mx-2 text-gray-300 hover:bg-[#171717] hover:text-[#f59f0a] rounded-md transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            Posts
          </a>

          <a
            routerLink="/categories"
            routerLinkActive="active"
            (click)="closeSidebar()"
            class="flex items-center px-4 py-2 mx-2 text-gray-300 hover:bg-[#171717] hover:text-[#f59f0a] rounded-md transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            Categories
          </a>

          <a
            routerLink="/authors"
            routerLinkActive="active"
            (click)="closeSidebar()"
            class="flex items-center px-4 py-2 mx-2 text-gray-300 hover:bg-[#171717] hover:text-[#f59f0a] rounded-md transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Authors
          </a>

          <a
            routerLink="/links"
            routerLinkActive="active"
            (click)="closeSidebar()"
            class="flex items-center px-4 py-2 mx-2 text-gray-300 hover:bg-[#171717] hover:text-[#f59f0a] rounded-md transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            Links
          </a>
        </nav>
      </div>
    </aside>
  `,
  styles: [
    `
      :host {
        .active {
          @apply bg-[#171717] rounded-md text-[#f59f0a];
        }
      }
    `,
  ],
})
export class SidebarComponent {
  @Input() isOpen = false;

  closeSidebar() {
    this.isOpen = false;
  }
}
