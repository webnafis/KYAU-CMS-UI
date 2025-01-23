import { Injectable } from "@angular/core";
import { Database, ref, get } from '@angular/fire/database';


@Injectable({
    providedIn: 'root'
})

export class FirebaseService {
    public REF_URL = this.database+ `KYAU-CMS`;

    constructor(
        private database: Database
    ) { };

    /**FIREBASE
     * getAllLogs()
     * getLogsByDept()
     */


    async getAllLogs() {
        const snapshot = await get(ref(this.database, `KYAU-CMS`));
        return snapshot.val();;
    }

    async getLogsByDept(dept: string) {
        const snapshot = await get(ref(this.database, `KYAU-CMS/${dept}`))
        return snapshot.val();
    }

}