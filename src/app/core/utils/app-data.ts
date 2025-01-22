import {Select} from '../../interfaces/core/select';


export const defaultUploadImage = '/assets/images/avatar/image-upload.jpg';

export const DATA_BOOLEAN: Select[] = [
  {value: true, viewValue: 'Yes'},
  {value: false, viewValue: 'No'},
];

export const ADMIN_ROLES: Select[] = [
  {value: 'super_admin', viewValue: 'Admin'},
  {value: 'admin', viewValue: 'Manager'},
  {value: 'editor', viewValue: 'User'},
];

export const DATA_STATUS: Select[] = [
  {value: 'publish', viewValue: 'Publish'},
  {value: 'draft', viewValue: 'Draft'},
];

export const REPLY_STATUS: Select[] = [
  {value: 'Mail Sent', viewValue: 'Mail Sent'},
  {value: 'Negotiation', viewValue: 'Negotiation'},
  {value: 'Positive', viewValue: 'Positive'},
  {value: 'Negative', viewValue: 'Negative'},
  {value: 'Others', viewValue: 'Others'},
  {value: 'Wrong Email', viewValue: 'Wrong Email'},
  {value: 'Late Respond', viewValue: 'Late Respond'},
];


export const MONTHS: Select[] = [
  {value: 1, viewValue: 'January'},
  {value: 2, viewValue: 'February'},
  {value: 3, viewValue: 'March'},
  {value: 4, viewValue: 'April'},
  {value: 5, viewValue: 'May'},
  {value: 6, viewValue: 'June'},
  {value: 7, viewValue: 'July'},
  {value: 8, viewValue: 'August'},
  {value: 9, viewValue: 'September'},
  {value: 10, viewValue: 'October'},
  {value: 11, viewValue: 'November'},
  {value: 12, viewValue: 'December'},
];



export const YEARS: Select[] = [
  {value: 2024, viewValue: '2024'},
  {value: 2023, viewValue: '2023'},
  {value: 2022, viewValue: '2022'},
];

export const GENDERS: Select[] = [
  {value: 'Male', viewValue: 'Male'},
  {value: 'Female', viewValue: 'Female'},
  {value: 'Others', viewValue: 'Others'},
];

