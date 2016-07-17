import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';

import {companyInfos} from "./mock-companies-info";
import {CompanyInfo} from "./company-info";

@Injectable()
export class CompanyInfoService {

    static getAllCompanyInfos(): CompanyInfo[] {
        return companyInfos;
    }

    getCompanyInfoById(id:number):CompanyInfo {
        return CompanyInfoService.getAllCompanyInfos().find(companyInfo => companyInfo.id === id);
    }
}