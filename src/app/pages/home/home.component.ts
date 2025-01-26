import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../services/core/firebase.service';
import { ManipulateDataService } from '../../services/core/manipulateData.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public depts: any;
  public selectedDept: string = 'CSE';
  // public state: boolean = false;
  public dept_content: any[] = [];
  public time: number = 0;


  private readonly router = inject(ActivatedRoute);

  constructor(
    private firebaseService: FirebaseService,
    private manipulateDataService: ManipulateDataService,
  ) { }

  public intervalo = setInterval(() => {
    if (this.selectedDept != null) {
      this.getAllLogsByDept(this.selectedDept);
    }
  }, 1000);


  /**ngOnInit() */

  ngOnInit() {
    this.router.paramMap.subscribe((m) => {
      let dept = m.get('dept');
      if (dept) {
        this.selectedDept = dept;
        this.getAllLogsByDept(dept);
      }
    });

    this.getAllDept();
    this.getAllLogsByDept(this.selectedDept);
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

  public totalTimePerDay(dept_content: any[], desk: string) {
    let Arr: string[] = this.getDateKeys(desk); // Arr means array of date keys
    let lastDateObj: Object = this.dept_content[0][desk][Arr[Arr.length - 1]];
    return this.manipulateDataService.calculateOccupiedDurationPerDayInMinutes(lastDateObj);


  }



  /**FIREBASE HANDLING
   * getAllDepartment()
   */



  private getAllDept() {
    this.firebaseService.getAllDepartments().then((res: any) => {
      this.depts = res;
      // this.selectedDept = res[0];
      // this.getAllLogsByDept(this.selectedDept);
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
    clearInterval(this.intervalo);
  }




}