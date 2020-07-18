import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './contact.interface';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  
  transform(value: Array<IContact>, seacrhParam: string): Array<any> {
    if (!seacrhParam){
      return value;
    }
    if (!value){
      return null;
    }
    return value.filter(contact =>contact.firstName.toLowerCase().includes(seacrhParam.toLowerCase()) || 
    contact.lastName.toLowerCase().includes(seacrhParam.toLowerCase()) ||
    contact.phoneNumber.toString().includes(seacrhParam.toLowerCase())
    );
  }

}
