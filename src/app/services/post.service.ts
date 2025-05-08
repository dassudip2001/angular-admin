import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class PostService {
  private posts = [
    {
      id: "1",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Quos eaque et sequi aspernatur ad.",
      author: "Otha Dicki",
      status: "draft" as const,
      date: "May 2, 2025",
      commentAuthors: ["Miss Albina Beer", "Dr. Jordane Heathcote DDS", "John Doe", "Jane Smith", "Alex Johnson"],
    },
    {
      id: "2",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Necessitatibus saepe laudantium eum impedit.",
      author: "Otha Dicki",
      status: "published" as const,
      date: "Oct 21, 2024",
      commentAuthors: ["Chandler Rohan", "Danika Shanahan", "John Doe", "Jane Smith", "Alex Johnson"],
    },
    {
      id: "3",
      image: "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Eum quae dolore.",
      author: "Otha Dicki",
      status: "published" as const,
      date: "Jan 29, 2025",
      commentAuthors: ["Maverick Cronin", "Mr. Tyreek Padberg Sr.", "John Doe", "Jane Smith", "Alex Johnson"],
    },
    {
      id: "4",
      image: "https://images.pexels.com/photos/4050296/pexels-photo-4050296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Quae sequi quia et illum.",
      author: "Otha Dicki",
      status: "draft" as const,
      date: "Apr 30, 2025",
      commentAuthors: ["Jevon Romaguera MD", "Miss Josianne Bayer Jr.", "John Doe", "Jane Smith", "Alex Johnson"],
    },
    {
      id: "5",
      image: "https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Itaque cumque dolor earum.",
      author: "Otha Dicki",
      status: "published" as const,
      date: "Nov 24, 2024",
      commentAuthors: ["Mr. Gus Greenfelder", "Mr. Henderson Reichert", "John Doe", "Jane Smith", "Alex Johnson"],
    },
    {
      id: "6",
      image: "https://images.pexels.com/photos/4050437/pexels-photo-4050437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Adipisci laboriosam delectus voluptas alias incidunt.",
      author: "Camila Schinner DVM",
      status: "published" as const,
      date: "Nov 25, 2024",
      commentAuthors: ["Orville Hoeger", "Rosemary Klein", "John Doe"],
    },
  ]

  constructor() {}

  getPosts() {
    return this.posts
  }

  getPost(id: string) {
    return this.posts.find((post) => post.id === id)
  }
}
