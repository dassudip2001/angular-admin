import { Component, Input, type OnInit, type AfterViewInit, type ElementRef, ViewChild, OnDestroy } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Chart, ChartConfiguration, registerables } from 'chart.js'

// Register all Chart.js components
Chart.register(...registerables)

@Component({
  selector: "app-chart",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full h-full relative">
      <canvas #chartCanvas></canvas>
    </div>
  `,
  styles: [],
})
export class ChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("chartCanvas") chartCanvas!: ElementRef<HTMLCanvasElement>
  @Input() chartData: any
  @Input() chartType = "line"
  private chart: Chart | null = null

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.renderChart()
    // Add resize observer to handle window resizing
    window.addEventListener('resize', this.handleResize)
  }

  ngOnDestroy(): void {
    // Clean up chart and event listener
    if (this.chart) {
      this.chart.destroy()
    }
    window.removeEventListener('resize', this.handleResize)
  }

  private handleResize = () => {
    if (this.chart) {
      this.chart.resize()
    }
  }

  renderChart(): void {
    const canvas = this.chartCanvas.nativeElement
    const ctx = canvas.getContext("2d")

    if (!ctx) return

    // Destroy existing chart if it exists
    if (this.chart) {
      this.chart.destroy()
    }

    const config: ChartConfiguration = {
      type: this.chartType as any,
      data: {
        labels: this.chartData.labels,
        datasets: [{
          ...this.chartData.datasets[0],
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
            padding: 10,
            displayColors: false,
            callbacks: {
              label: (context: any) => {
                const value = context.raw as number;
                return `${value.toFixed(2)}%`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#9ca3af',
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 6
            }
          },
          y: {
            grid: {
              color: 'rgba(75, 85, 99, 0.2)'
            },
            ticks: {
              color: '#9ca3af',
              callback: (value) => {
                if (typeof value === 'number') {
                  if (value >= 1000) {
                    return (value / 1000).toFixed(1) + 'k'
                  }
                  return value
                }
                return value
              }
            }
          }
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        }
      }
    }

    this.chart = new Chart(ctx, config)
  }
}
