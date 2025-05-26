import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-navbar",
  imports: [RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent { }
