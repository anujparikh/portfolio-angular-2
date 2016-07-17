import {Component, OnInit, Input} from "@angular/core";

import {CompanyInfoService} from "../company-info/compony-info.service";
import {CompanyInfo} from "../company-info/company-info";

@Component({
    selector: 'company-modal',
    templateUrl: 'app/company-modal/company-modal.component.html',
    styleUrls: ['app/company-modal/company-modal.component.css'],
    providers: [CompanyInfoService]
})

export class CompanyModalComponent implements OnInit {
    error:any;
    companyInfos:CompanyInfo[];
    @Input() companyInfo:CompanyInfo;

    constructor(private companyInfoService:CompanyInfoService) {
    }

    ngOnInit() {
        this.getCompanyInfos();
        this.getCompanyInfo();
    }

    getCompanyInfos() {
        this.companyInfos = CompanyInfoService.getAllCompanyInfos();
    }

    getCompanyInfo() {
        this.companyInfo = this.companyInfoService.getCompanyInfoById(1);
    }
}