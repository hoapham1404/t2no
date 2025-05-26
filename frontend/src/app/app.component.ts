import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatSidenavModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  template: `
    <app-header [sidenav]="sidenav" />
    <mat-drawer-container class="container">
      <mat-drawer #sidenav mode="side" opened>
        <app-sidebar class="sidebar" />
      </mat-drawer>
      <mat-drawer-content>
        <main class="content">
          <router-outlet />
        </main>
        <app-footer class="footer" />
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [
    `
      .container {
        height: 100%;
      }
    `,
  ],

})
export class AppComponent {
	title = "frontend";
}
