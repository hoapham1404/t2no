import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { FirstComponent } from "./pages/first/first.component";
import { SecondComponent } from "./pages/second/second.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "first", component: FirstComponent },
  { path: "second", component: SecondComponent },
  { path: "**", component: NotFoundComponent },
];
