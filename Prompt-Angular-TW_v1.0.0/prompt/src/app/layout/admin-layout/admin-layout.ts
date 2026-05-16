import { Component } from '@angular/core';
import { AdminHeader } from "@app/components/admin-header/admin-header";
import { RouterOutlet } from '@angular/router';
import { AdminFooter } from '@app/components/admin-footer/admin-footer';
import { BackToTop } from "@app/components/back-to-top/back-to-top";

@Component({
  selector: 'app-admin-layout',
  imports: [AdminHeader, RouterOutlet, AdminFooter, BackToTop],
  templateUrl: './admin-layout.html',
  styles: ``,
})
  
export class AdminLayout {}
