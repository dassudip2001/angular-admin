import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { ChartComponent } from "../../components/chart/chart.component"

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule, FormsModule, ChartComponent],
  template: `
    <div class=" sm:p-4 lg:p-6 min-h-screen ">
      <h1 class="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6">Dashboard</h1>

      <div class="bg-[#171717] rounded-lg p-3 sm:p-4 lg:p-6 mb-3 sm:mb-4 lg:mb-6">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
          <div class="w-full lg:w-64">
            <label class="block text-sm font-medium text-gray-400 mb-1">Business customers only</label>
            <select class="w-full bg-[#242426] border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>-</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div class="w-full sm:w-auto">
              <label class="block text-sm font-medium text-gray-400 mb-1">Start date</label>
              <input type="date" class="w-full sm:w-40 bg-[#242426] border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
            </div>
            <div class="w-full sm:w-auto">
              <label class="block text-sm font-medium text-gray-400 mb-1">End date</label>
              <input type="date" class="w-full sm:w-40 bg-[#242426] border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-3 sm:mb-4 lg:mb-6">
        <div class="bg-[#171717] rounded-lg p-3 sm:p-4 lg:p-6">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-3">
            <div class="flex items-center space-x-3 sm:space-x-4">
              <div class="bg-amber-500/10 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-400">Revenue</p>
                <p class="text-lg sm:text-xl lg:text-2xl font-bold">$192.10k</p>
                <p class="text-sm text-green-500">+32k increase</p>
              </div>
            </div>
          </div>
          <div class="h-12 sm:h-16">
            <app-chart [chartData]="revenueChartData" [chartType]="'line'"></app-chart>
          </div>
        </div>

        <div class="bg-[#171717] rounded-lg p-3 sm:p-4 lg:p-6">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-3">
            <div class="flex items-center space-x-3 sm:space-x-4">
              <div class="bg-amber-500/10 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-400">New customers</p>
                <p class="text-lg sm:text-xl lg:text-2xl font-bold">1.34k</p>
                <p class="text-sm text-red-500">-3% decrease</p>
              </div>
            </div>
          </div>
          <div class="h-12 sm:h-16">
            <app-chart [chartData]="newCustomersChartData" [chartType]="'line'"></app-chart>
          </div>
        </div>

        <div class="bg-[#171717] rounded-lg p-3 sm:p-4 lg:p-6">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-3">
            <div class="flex items-center space-x-3 sm:space-x-4">
              <div class="bg-amber-500/10 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-400">New orders</p>
                <p class="text-lg sm:text-xl lg:text-2xl font-bold">3.54k</p>
                <p class="text-sm text-green-500">+7% increase</p>
              </div>
            </div>
          </div>
          <div class="h-12 sm:h-16">
            <app-chart [chartData]="newOrdersChartData" [chartType]="'line'"></app-chart>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
        <div class="bg-[#171717] rounded-lg p-3 sm:p-4 lg:p-6">
          <h3 class="text-base sm:text-lg font-medium mb-3 sm:mb-4">Orders per month</h3>
          <div class="h-48 sm:h-56 lg:h-64">
            <app-chart [chartData]="ordersChartData" [chartType]="'line'"></app-chart>
          </div>
        </div>

        <div class="bg-[#171717] rounded-lg p-3 sm:p-4 lg:p-6">
          <h3 class="text-base sm:text-lg font-medium mb-3 sm:mb-4">Total customers</h3>
          <div class="h-48 sm:h-56 lg:h-64">
            <app-chart [chartData]="customersChartData" [chartType]="'line'"></app-chart>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class DashboardComponent implements OnInit {
  ordersChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Orders",
        data: [2000, 3000, 4500, 3500, 4800, 5500, 6500, 7500, 8800, 7500, 9000, 8500],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        tension: 0.4,
      },
    ],
  }

  customersChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Customers",
        data: [4000, 5500, 6500, 7500, 8500, 9000, 9500, 10000, 11000, 13000, 14500, 17000],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        tension: 0.4,
      },
    ],
  }

  revenueChartData = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Revenue",
        data: [150, 170, 160, 180, 175, 185, 190, 185, 190, 195, 190, 195],
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.4,
      },
    ],
  }

  newCustomersChartData = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "New Customers",
        data: [140, 135, 130, 125, 120, 115, 110, 115, 120, 115, 110, 105],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        tension: 0.4,
      },
    ],
  }

  newOrdersChartData = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "New Orders",
        data: [320, 330, 340, 335, 345, 350, 355, 350, 360, 365, 370, 375],
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.4,
      },
    ],
  }

  ngOnInit(): void {}
}
