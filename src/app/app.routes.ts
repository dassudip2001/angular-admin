import type { Routes } from "@angular/router"

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/dashboard/dashboard.component").then((m) => m.DashboardComponent),
  },
  {
    path: "products",
    loadComponent: () => import("./pages/products/products.component").then((m) => m.ProductsComponent),
  },
  {
    path: "orders",
    loadComponent: () => import("./pages/orders/orders.component").then((m) => m.OrdersComponent),
  },
  {
    path: "customers",
    loadComponent: () => import("./pages/customers/customers.component").then((m) => m.ContactComponent),
  },
  {
    path: "posts",
    loadComponent: () => import("./pages/posts/posts.component").then((m) => m.PostsComponent),
  },
  {
    path: "categories",
    loadComponent: () => import("./pages/categories/categories.component").then((m) => m.CategoriesComponent),
  },
  {
    path: "categories/new",
    loadComponent: () => import("./pages/categories/new-category.component").then((m) => m.NewCategoryComponent),
  },
  {
    path: "authors",
    loadComponent: () => import("./pages/authors/authors.component").then((m) => m.AuthorsComponent),
  },
  {
    path: "links",
    loadComponent: () => import("./pages/links/links.component").then((m) => m.LinksComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
]
