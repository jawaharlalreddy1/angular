import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Items: any, itemid?: any): any {
    //check if itemid is undefined
    if (itemid === undefined){
      return Items;
    }else{
      //send updated array
      return Items.filter(function(Item){
        return Item.enterpriseItemId.toLowerCase().includes(itemid.toLowerCase())
      })
    }
  }

}
