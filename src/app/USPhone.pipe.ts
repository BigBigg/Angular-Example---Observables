import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'Phone' })
export class PhonePipe implements PipeTransform {
  transform(phoneNo: string){
    var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phoneRegex.test(phoneNo)) 
  {
      var formattedPhoneNumber =
          phoneNo.replace(phoneRegex, "($1) $2-$3");
  } else {
      // Invalid phone number
      formattedPhoneNumber = phoneNo;
  }
    return formattedPhoneNumber;
  }
}