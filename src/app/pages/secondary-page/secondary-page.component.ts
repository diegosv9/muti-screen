import { Component, OnDestroy, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-secondary-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './secondary-page.component.html',
  styleUrl: './secondary-page.component.scss'
})
export class SecondaryPageComponent {

  bc = new BroadcastChannel('dualScreen');
  messages$ = signal<string[]>([]);


  constructor() {
    this.bc.onmessage = (ev) => {
      console.log('Message received:', ev.data);
      this.messages$.update(messages => [...messages, ev.data]);

    };

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.bc.postMessage('Secondary screen hidden');
      } else {
        this.bc.postMessage('Secondary screen is visible again');
      }
    });
  }

  onButtonClicked() {
    this.bc.postMessage('Sended from secondary screen');
  }

}
