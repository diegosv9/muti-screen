import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-secondary-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './secondary-page.component.html',
  styleUrl: './secondary-page.component.scss'
})
export class SecondaryPageComponent {

}
