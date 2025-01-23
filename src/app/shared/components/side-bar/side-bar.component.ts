import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/core/firebase.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  styleUrls: ['./side-bar.component.scss'],
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit {
  public Departments: any[] = [];
  public DepartmentsObj: {} = {};
  public Desks: any[] = [];
  public DesksObj: {} = {};
  public exm: 'yes' | 'no';

  constructor(
    private firebaseService: FirebaseService,
  ) { }

  /**
   * ngOninit();
   */

  ngOnInit(): void {
    this.getDataByDept('CSE');
    this.getAllLogs();
  }


  /** DATABASE HANDLING
   * getAllLogs()
   * getDataByDept()
   */

  private getAllLogs(){
    this.firebaseService.getAllLogs().then(res => {
      console.log('AllLogs', res);
    })
  }

  private getDataByDept(dept: string){
    this.firebaseService.getLogsByDept('CSE').then(res => {
      console.log(dept, res);
    }); 
  }
}
