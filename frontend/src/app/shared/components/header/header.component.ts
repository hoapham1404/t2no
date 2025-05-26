import { Component, Input } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDrawer, MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";

@Component({
  standalone: true,
  selector: "app-header",
  imports: [
    NavbarComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  @Input() sidenav!: MatDrawer;

  toggleSideNav() {
    this.sidenav.toggle();
  }
}
