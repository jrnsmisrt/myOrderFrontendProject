import { Pipe, PipeTransform } from '@angular/core';
import {Item} from '../model/Item';
@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: Item[], searchText: string): any[] {
    let lowerCaseSearchName = searchText.toLowerCase();

    return items.filter(item=>{
      return item.name.toLowerCase().startsWith(lowerCaseSearchName);
    });
  }

}
