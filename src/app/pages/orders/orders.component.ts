import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-orders",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class=" sm:m-4 lg:m-6">
      <h1 class="text-2xl font-bold mb-6">Orders</h1>

      <div class="bg-[#171717] rounded-lg  p-6 flex items-center justify-center">
        <div class="text-center">
          <h2 class="text-xl font-medium mb-2">Orders Management</h2>
          <p class="text-gray-400 mb-4">This page is under construction</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 mx-auto text-amber-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <p class="text-gray-400">Order management functionality will be available soon.</p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class OrdersComponent {}
