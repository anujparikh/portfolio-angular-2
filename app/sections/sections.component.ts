import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import {IntroSectionComponent} from '../intro-section/intro-section.component';

@Component({
    selector: 'app-section',
    templateUrl: 'app/sections/sections.component.html',
    styleUrls: ['app/sections/sections.component.css'],
    directives: [NavigationBarComponent, IntroSectionComponent],
    encapsulation: ViewEncapsulation.None
})

export class SectionsComponent {

}