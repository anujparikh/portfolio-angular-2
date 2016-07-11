import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

bootstrap(NavigationBarComponent)

@Component({
    selector: 'app-display',
    templateUrl: 'app/home/home-page.component.html',
    styleUrls: ['app/home/home-page.component.css'],
    directives: [NavigationBarComponent]
})

export class HomePageComponent {
    brandImagePath: string = '../images/brand-image.png';
    backgroundImagePath: string = '../images/home-background.png';
}