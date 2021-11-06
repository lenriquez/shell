import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkedCollection } from '../dtos/LinkedCollection';
import { Patient } from '../dtos/Patient';
import { ApiUrls } from "../shared/constants/api-urls.model";

@Injectable()
export class PatientSearchService {
  constructor(private http: HttpClient) {}

  patientQuickSearch(
    searchText: string
  ): Observable<LinkedCollection<Patient>> {
    let url = `${ApiUrls.PatientsUrl}?PageSize=6`;

    if (!!searchText) {
      if (!isNaN(+searchText)) {
        url += `&mrno=${searchText}`;
      } else {
        url += `&displayName=${searchText}`;
      }
    }

    return this.http.get<LinkedCollection<Patient>>(url);
  }

  patientSearchById(patientId: string): Observable<LinkedCollection<Patient>> {
    return this.http.get<LinkedCollection<Patient>>(
      `${ApiUrls.PatientsUrl}?patientIds=${patientId}`
    );
  }
}
