import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class AuthorService {
  private authors = [
    {
      id: "1",
      name: "Otha Dicki",
      email: "wilfredo.sanford@example.net",
      github: "ogreenfelder",
      twitter: "nicolas.nina",
    },
    {
      id: "2",
      name: "Camila Schinner DVM",
      email: "nitzsche.paul@example.com",
      github: "vada28",
      twitter: "hkub",
    },
    {
      id: "3",
      name: "Roxane Heidenreich",
      email: "ona.kunde@example.org",
      github: "mariana99",
      twitter: "guiseppe11",
    },
    {
      id: "4",
      name: "Amari Cormier",
      email: "jast.justice@example.org",
      github: "roselyn03",
      twitter: "medhurst.fannie",
    },
    {
      id: "5",
      name: "Dr. Tessie Johnston",
      email: "meredith04@example.com",
      github: "lesch.theresa",
      twitter: "orpha.price",
    },
    {
      id: "6",
      name: "Dr. Leann Brown",
      email: "volkman.jonathan@example.com",
      github: "jspinka",
      twitter: "ada32",
    },
    {
      id: "7",
      name: "Mr. Alexys McGlynn DVM",
      email: "verla.considine@example.org",
      github: "nicolas86",
      twitter: "obruen",
    },
  ]

  constructor() {}

  getAuthors() {
    return this.authors
  }

  getAuthor(id: string) {
    return this.authors.find((author) => author.id === id)
  }
}
