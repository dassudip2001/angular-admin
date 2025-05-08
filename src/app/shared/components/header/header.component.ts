import { Component, Output, EventEmitter } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-[#171717] border-b border-gray-700">
      <div class="flex items-center justify-between px-4 p-[14.6px]">
        <div class="flex items-center">
          <div class="flex items-center space-x-2">
            <button
              (click)="toggleSidebar()"
              class="text-gray-400 hover:text-[#f59f0a] lg:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
            <!-- <button class="text-gray-400 hover:text-[#f59f0a] hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="text-gray-400 hover:text-[#f59f0a] hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="text-gray-400 hover:text-[#f59f0a] hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
              </svg>
            </button> -->
          </div>
          <!-- <h1 class="text-white text-base font-semibold ml-4">
            <a routerLink="/">{{ currentPath }}</a>
          </h1> -->
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative hidden md:block">
            <!-- <input
              type="text"
              placeholder="Search"
              class="bg-[#242426] text-white text-sm rounded-md px-3 py-2 pl-8 w-48 lg:w-64 focus:outline-none focus:ring-1 focus:ring-gray-500"
            >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg> -->
          </div>
          <div class="relative">
            <button class="text-gray-400 hover:text-[#f59f0a] relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-8 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="absolute -top-1 -right-1 bg-amber-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">6</span>
            </button>
          </div>
          <div class="flex items-center space-x-2">
            <div class="bg-black h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium">
              DU
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  @Output() sidebarToggle = new EventEmitter<void>();
  currentPath = "Dashboard";

  toggleSidebar() {
    this.sidebarToggle.emit();
  }
}
