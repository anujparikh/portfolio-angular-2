import {Component, ViewEncapsulation} from "@angular/core";

import {CompanyModalComponent} from "../company-modal/company-modal.component";

@Component({
    selector: 'project-section',
    templateUrl: 'app/project-section/project-section.component.html',
    styleUrls: ['app/project-section/project-section.component.css'],
    directives: [CompanyModalComponent],
    encapsulation: ViewEncapsulation.None
})

export class ProjectSectionComponent {

}