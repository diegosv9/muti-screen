import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  bc = new BroadcastChannel('dualScreen');
  messages$ = signal<string[]>([]);

  constructor() {
    this.bc.onmessage = (ev) => {
      console.log('Message received:', ev.data);
      this.messages$.update(messages => [...messages, ev.data]);
    };

    window.open('http://localhost:4200/secondary', '_blank', 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no');
  }

  onButtonClicked() {
    this.bc.postMessage('Sended from main screen');
  }
}
