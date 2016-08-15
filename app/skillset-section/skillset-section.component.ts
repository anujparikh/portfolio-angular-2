import {Component} from "@angular/core";

import {SkillsetCanvasComponent} from "../skillset-canvas/skillset-canvas.component";

@Component({
    selector: 'skillset-section',
    templateUrl: 'app/skillset-section/skillset-section.component.html',
    styleUrls: ['app/skillset-section/skillset-section.component.css'],
    directives: [SkillsetCanvasComponent]
})

export class SkillsetSectionComponent {

}