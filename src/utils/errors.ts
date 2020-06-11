import { Toast } from 'antd-mobile';

const showError = Toast.fail;

export class Errors {
  showError = (msg: string, noClose?: boolean) => {
    showError(msg, noClose ? 0 : 2);
  };

  getCatchError = (e) => {
    if (typeof e === 'string') {
      return e;
    } else if (e.message) {
      return e.message;
    } else if (e.returnObj) {
      return e.returnObj.message;
    }
  };
}
export const errorHandler = new Errors();
