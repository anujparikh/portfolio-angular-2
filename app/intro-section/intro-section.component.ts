import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
    selector: 'intro-section',
    templateUrl: 'app/intro-section/intro-section.component.html',
    styleUrls: ['app/intro-section/intro-section.component.css'],
    directives: [NavigationBarComponent]
})

export class IntroSectionComponent {
    brandImagePath: string = '../images/brand-image.png';
    backgroundImagePath: string = '../images/sections-background.png';
}