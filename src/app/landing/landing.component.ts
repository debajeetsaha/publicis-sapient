import { LandingService } from './landing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  public itemData: any = [];
  public years = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];
  public launchData = ['True', 'False'];
  public activeYrBtnId = -1;
  public activeSLBtnId = -1;
  public activeSDBtnId = -1;

  constructor(private service: LandingService) { }
  ngOnInit() {
    this.getAlldata();
  }
  getAlldata() {
    this.service.getAllData().subscribe(res => {
      this.itemData = res;
    }, error => {
        console.log(error);
    })
  }
  getYearData(year, index) {
    this.activeSLBtnId = -1;
    this.activeSDBtnId = -1;
    this.activeYrBtnId = index;
    this.service.getYearData(year).subscribe(res => {
      this.itemData = res;
    }, error => {
        console.log(error);
    })
  }
  getLaunchData(id,index) {
    this.activeYrBtnId = -1;
    this.activeSDBtnId = -1;
    this.activeSLBtnId = index;
    const param = id == 'True' ? true : false;
    this.service.getLaunchdata(param).subscribe(res => {
      this.itemData = res;
    }, error => {
        console.log(error);
    })
  }
  getLandData(id,index) {
    this.activeYrBtnId = -1;
    this.activeSLBtnId = -1;
    this.activeSDBtnId = index;
    const param = id == 'True' ? true : false;
    this.service.getLandData(param).subscribe(res => {
      this.itemData = res;
    }, error => {
        console.log(error);
    })
  }
  resetFilter() {
    this.activeYrBtnId = -1;
    this.activeSLBtnId = -1;
    this.activeSDBtnId = -1;
    this.getAlldata();
  }
}
