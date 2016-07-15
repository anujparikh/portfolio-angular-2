import {Injectable} from "@angular/core";

import {companyInfos} from "./mock-companies-info";

@Injectable()
export class CompanyInfoService {
    getCompanyInfos() {
        return Promise.resolve(companyInfos);
    }
}