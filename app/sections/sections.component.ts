import {Component, ViewEncapsulation} from '@angular/core';

import {NavigationBarComponent} from '../navigation-bar/navigation-bar.component';
import {IntroSectionComponent} from '../intro-section/intro-section.component';
import {ProjectSectionComponent} from '../project-section/project-section.component';
import {SkillsetSectionComponent} from "../skillset-section/skillset-section.component";

@Component({
    selector: 'app-section',
    templateUrl: 'app/sections/sections.component.html',
    styleUrls: ['app/sections/sections.component.css'],
    directives: [NavigationBarComponent, IntroSectionComponent, ProjectSectionComponent, SkillsetSectionComponent],
    encapsulation: ViewEncapsulation.None
})

export class SectionsComponent {

}