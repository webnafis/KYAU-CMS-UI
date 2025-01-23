import {Inject, Injectable} from '@angular/core';
import moment from 'moment';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
  }


  /**
   * UTILS
   */

  getDateString(date: Date, format?: string): string {
    const fm = format ? format : 'YYYY-MM-DD';
    return moment(date).format(fm);
  }

  getDateWithCurrentTime(date: Date): Date {
    const _ = moment();
    // const newDate = moment(date).add({hours: _.hour(), minutes:_.minute() , seconds:_.second()});
    const newDate = moment(date).add({hours: _.hour(), minutes: _.minute()});
    return newDate.toDate();
  }

  getNextDateString(date: Date, day) {
    return moment(date).add(day,'days').toDate();
  }



  getNextDateStringForProject(date: Date, day) {
    return moment(date).add(day,'days').format('YYYY-MM-DD');
  }

  getDateMonth(fromZero: boolean, date?: any): number {
    let d;
    if (date) {
      d = new Date(date)
    } else {
      d = new Date();
    }
    const month = d.getMonth();
    return  fromZero ? month : month + 1;
  }

  /**
   * GET RANDOM NUMBER
   */
  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getImageName(originalName: string): string {
    const array = originalName.split('.');
    array.pop();
    return array.join('');
  }

  mergeArrayString(array1: string[], array2: string[]): string[] {
    const c = array1.concat(array2);
    return c.filter((item, pos) => c.indexOf(item) === pos);
  }

  /**
   * URL
   */

  getHostnameFromUrl(url: string): string {
    const urlObject = new URL(url);
    const hostname = urlObject.hostname;
    if (hostname.startsWith('www.')) {
      return hostname.substring(4);
    }
    return urlObject.hostname;
  }

  /**
   * SEARCH
   */
  searchWithRegex = (collection: any[], term: string, opts: { caseSensitive: boolean, includedKeys: string[] }) => {
    const filterBy = () => {
      const searchTerms = (!opts.caseSensitive) ? new RegExp(term, 'i') : new RegExp(term)
      return (obj: any) => {
        for (const key of Object.keys(obj)) {
          if (searchTerms.test(obj[key]) &&
            opts.includedKeys.includes(key)) return true
        }
        return false
      }
    }
    return collection.filter(filterBy())
  }


}
