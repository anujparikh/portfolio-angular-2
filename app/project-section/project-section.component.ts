import {Component, ViewEncapsulation, OnInit} from "@angular/core";

import {CompanyModalComponent} from "../company-modal/company-modal.component";
import {CompanyInfoService} from "../company-info/compony-info.service";
import {CompanyInfo} from "../company-info/company-info";

@Component({
    selector: 'project-section',
    templateUrl: 'app/project-section/project-section.component.html',
    styleUrls: ['app/project-section/project-section.component.css'],
    directives: [CompanyModalComponent],
    encapsulation: ViewEncapsulation.None,
    providers: [CompanyInfoService]
})

export class ProjectSectionComponent implements OnInit {

    constructor(private companyInfoService:CompanyInfoService) {
    }

    private companyInfos:CompanyInfo[]

    ngOnInit() {
        this.getCompanyInfos();
    }

    getCompanyInfos() {
        this.companyInfos = CompanyInfoService.getAllCompanyInfos();
    }
}