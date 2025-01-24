import { Component } from '@angular/core';
import { FirebaseService } from '../../services/core/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public depts: any;
  public selectedDept: string;
  // public state: boolean = false;
  public dept_content: any[] = [];
  constructor(
    private firebaseService: FirebaseService,
  ) { }


  /**ngOnInit() */

  ngOnInit() {
    this.getAllDept();
    this.getAllLogsByDept(this.selectedDept);
    // console.log(this.dept_content);
  }

  public onDeptClick(dept: string) {
    this.selectedDept = dept;
    this.getAllLogsByDept(dept);
  }

  public getDeskKeys() {
    return Object.keys(this.dept_content[0] ? this.dept_content[0] : this.dept_content);
  }

  public getDateKeys(desk: string) {
    return Object.keys(this.dept_content[0][desk]);
  }

  public getLiveState(desk: string): Object {
    let Arr: string[] = this.getDateKeys(desk); // Arr means array of date keys
    let lastDate: string = Arr[Arr.length - 1];
    Arr = Object.keys(this.dept_content[0][desk][lastDate])
    return this.dept_content[0][desk][lastDate][Arr[Arr.length - 1]];

  }


  public getEventKeys(desk: string, date: string) {
    return Object.keys(this.dept_content[desk][date]);
  }


  /**FIREBASE HANDLING
   * getAllDepartment()
   */

  private getAllDept() {
    this.firebaseService.getAllDepartments().then((res: any) => {
      this.depts = res;
      this.selectedDept = res[0];
      // console.log('res', res);
    })
  }



  private getAllLogsByDept(dept: string) {
    this.firebaseService.getLogsArrByDept(dept).then(res => {
      this.dept_content = res;
      // console.log(this.dept_content);
      // console.log(this.getDeskKeys());



    })
  }












  ngOnDestroy() {
    console.log('page destroy');

  }




}