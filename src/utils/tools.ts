export class Tool {
  isUndefined = data => {
    return data === undefined;
  };

  isDefined = data => {
    return !this.isUndefined(data);
  };

  // 节流
  throttle = (fn: Function, interval: number) => {
    let canRun = true;
    return () => {
      if (!canRun) {
        return;
      }
      canRun = false;
      setTimeout(() => {
        fn();
        canRun = true;
      }, interval);
    };
  };

  // 防抖
  deBounce = (fn: Function, interval: number) => {
    let timer = null;
    return (e) => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        fn(e);
      }, interval);
    };
  };

  /**
    * 获取hash地址的某一个url参数
    * @param name
    */
  getHashString = (name: string) => {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'); // 匹配目标参数
    let searchString = window.location.hash.split(`?`)[1];
    let result = searchString ? searchString.match(reg) : null; // 对querystring匹配目标参数
    if (result != null) {
      return result[2];
    } else {
      return '';
    }
  }

  /**
   * 传入一个可执行字符串，并且运行
   * @param string
   * @param needReturn
   */
  evalString = (string: string, needReturn?: boolean) => {
    let newString = string;
    if (needReturn) {
      newString = `return ${string}`;
    }
    let evalFunction = new Function(newString);
    return evalFunction();
  };

  /**
   * 四舍五入保留n位小数
   * @param num
   * @param digits
   */
  roundNumber = (num: number, digits?: number): number => {
    if (!digits) {
      return Math.round(num);
    } else {
      let digitsPow = Math.pow(10, digits);
      return Math.round(num * digitsPow) / digitsPow;
    }
  };

}
export const tools = new Tool();
