import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private categories = [
    {
      id: "1",
      name: "doloribus quo qui",
      slug: "doloribus-quo-qui",
      visible: true,
      lastUpdated: "Apr 9, 2025",
    },
    {
      id: "2",
      name: "ut voluptates hic",
      slug: "ut-voluptates-hic",
      visible: true,
      lastUpdated: "Mar 29, 2025",
    },
    {
      id: "3",
      name: "optio consectetur natus",
      slug: "optio-consectetur-natus",
      visible: true,
      lastUpdated: "Mar 31, 2025",
    },
    {
      id: "4",
      name: "unde aliquid est",
      slug: "unde-aliquid-est",
      visible: true,
      lastUpdated: "Nov 13, 2024",
    },
    {
      id: "5",
      name: "enim voluptates ab",
      slug: "enim-voluptates-ab",
      visible: false,
      lastUpdated: "Jan 26, 2025",
    },
    {
      id: "6",
      name: "maiores minima quis",
      slug: "maiores-minima-quis",
      visible: false,
      lastUpdated: "Apr 1, 2025",
    },
    {
      id: "7",
      name: "quia sequi id",
      slug: "quia-sequi-id",
      visible: false,
      lastUpdated: "Dec 2, 2024",
    },
    {
      id: "8",
      name: "maiores voluptas ea",
      slug: "maiores-voluptas-ea",
      visible: false,
      lastUpdated: "Dec 23, 2024",
    },
    {
      id: "9",
      name: "quis velit alias",
      slug: "quis-velit-alias",
      visible: true,
      lastUpdated: "Feb 20, 2025",
    },
    {
      id: "10",
      name: "incidunt exercitationem modi",
      slug: "incidunt-exercitationem-modi",
      visible: false,
      lastUpdated: "Feb 20, 2025",
    },
  ]

  constructor() {}

  getCategories() {
    return this.categories
  }

  getCategory(id: string) {
    return this.categories.find((category) => category.id === id)
  }
}
