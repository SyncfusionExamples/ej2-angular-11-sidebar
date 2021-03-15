import { Component, ViewChild } from '@angular/core';
import { SidebarComponent} from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular11Sidebar-app';
  @ViewChild('sidebar') sidebar: SidebarComponent;
public onCreated(args: any) {
     this.sidebar.element.style.visibility = '';
}
}
