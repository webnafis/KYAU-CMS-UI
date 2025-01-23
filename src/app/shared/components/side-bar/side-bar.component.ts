import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/core/firebase.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  styleUrls: ['./side-bar.component.scss'],
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit {
  public deptLogs: any[] = [];


  constructor(
    private firebaseService: FirebaseService,
  ) { }

  /**
   * ngOninit();
   */

  ngOnInit(): void {
    this.getAllLogsByDept('CSE');
  }


  /** DATABASE HANDLING
   * getAllLogs()
   * getLogsArr()
   * getDataByDept()
   */

  private getAllLogs(){
    this.firebaseService.getAllLogs().then(res => {
      console.log('AllLogs', res);
    })
  }

  private getAllLogsByDept(dept: string){
    this.firebaseService.getLogsArrByDept(dept).then(res => {
      console.log('dept arr', res);
      this.deptLogs = res;
    })
  }

  private getDataByDept(dept: string){
    this.firebaseService.getLogsByDept('CSE').then(res => {
      console.log(dept, res);
    }); 
  }
}
