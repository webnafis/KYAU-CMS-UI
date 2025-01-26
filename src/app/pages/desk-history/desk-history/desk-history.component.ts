import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../../../services/core/firebase.service';
import { ManipulateDataService } from '../../../services/core/manipulateData.service';

@Component({
  selector: 'app-desk-history',
  templateUrl: './desk-history.component.html',
  styleUrl: './desk-history.component.scss'
})
export class DeskHistoryComponent {

  private readonly router = inject(ActivatedRoute);
  public department: string = null;
  public desk: string = null;
  private readonly route = inject(Router);
  public dept_content: any[] = [];
  public DaysArr: string[] = [];
 


  constructor(
    private firebaseService: FirebaseService,
    private manipulateDataService: ManipulateDataService,
  ) { }




  ngOnInit(): void {
    this.router.paramMap.subscribe((m) => {
      this.desk = m.get('desk');
      this.department = m.get('department');
    });

    this.getAllLogsByDept(this.department);

    // console.log(this.dept_content);

  }
  public getDateKeys(desk: string) {
    return Object.keys(this.dept_content[0][desk]);
  }

  public totalTimePerDay(dept_content:any[], desk:string, date:string){
    
    let lastDateObj: Object = this.dept_content[0][desk][date];
    return this.manipulateDataService.calculateOccupiedDurationPerDayInMinutes(lastDateObj);
    
    
  }


  private getAllLogsByDept(dept: string) {
    this.firebaseService.getLogsArrByDept(dept).then(res => {
      this.dept_content = res;
      console.log(this.dept_content);
      // console.log(this.getDeskKeys());
      // this.createObjForDay(this.dept_content, this.desk, '2025-01-24');  
    })
  }

  public createDaysArr(): string[] {
    if (this.dept_content.length > 0) {
      return Object.keys(this.dept_content[0][this.desk]);
    } else {
      return [];
    }

  }

  public createObjArrForDay(date: string): { time: string, status: 'Occupied' | 'Vacant' }[] {

    if (this.dept_content.length > 0) {
      let arr: any[] = Object.values(this.dept_content[0][this.desk][date])
      return arr.map(entry => ({
        status: entry?.status,
        time: entry?.time
      }));

    } else {
      return []
    }
  }
}
