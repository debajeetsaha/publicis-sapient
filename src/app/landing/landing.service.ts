import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100`);
  }
  getLaunchdata(param) {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${param}`);
  }
  getLandData(param) {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&land_success=${param}`);
  }
  getYearData(param) {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${param}`);
  }
}
