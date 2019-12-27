import {AppConstant} from '../bean/AppConstant';
import {TransitionCallback} from '../interface/CommonInterfaces';

export class AppUtils{
  static contains(str: string, containStr: string) {
    return str.lastIndexOf(AppConstant.typeVIPOrder) > 0;
  }

  static removeElement(array: any[], element: any) {
    const index = array.indexOf(element, 0);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  static arrayContains(array: any[], element: any) {
    return array.indexOf(element) > -1;
  }
}
