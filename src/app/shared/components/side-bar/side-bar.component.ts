import { Component, OnInit } from '@angular/core';
import { Database, ref, onValue } from '@angular/fire/database';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone:true,
})
export class SideBarComponent implements OnInit {
  users: any[] = [];

  constructor(private database: Database) {}

  ngOnInit(): void {
    const desk1Ref = ref(this.database, 'KYAU-CMS');
    console.log('desk1Ref', desk1Ref);
    
    onValue(desk1Ref, (snapshot) => {
      const data = snapshot.val();
      console.log('data:', data);
      this.users = data ? Object.values(data) : [];
      console.log('users',this.users);
      
    });
  }
}
