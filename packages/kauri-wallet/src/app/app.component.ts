import { Component } from '@angular/core';
import lernaImportTest from 'temp-test-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kauri Wallet';
  lernaTest = lernaImportTest;
}
