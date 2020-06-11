declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.less" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.conf" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.png" {
  const content: any;
  export default content;
}
declare module "*.gif" {
  const content: any;
  export default content;
}
declare module "*.svg" {
  const content: any;
  export default content;
}

// 路由配置
type IRoute = {
  key: string;
  // 是否绝对匹配
  isExact?: boolean;
  // 所使用的路由路径
  path?: string;
  component?: any;
  children?: IRoute[];
  // 额外显示信息
  extraInfo?: string | any;
  // 其他参数
  params?: {

  };
};

interface InitWSData {
  bid: string;
  pid: string;
  sid: string;
  cookie_white_list: string[];
  cheatString: string;
}

interface Window {
  __BROWSER_INIT_DATA__: {
    bid: () => string;
    // 端口id
    pid: () => string;
    // 加密
    sid: () => string;
    // api前缀
    apiid: () => string;
  }
}



/**
 * 机器码数据对象
 */
interface MachineData {
  machine_name: string;
  machine_string: string;
  // 固定秘钥
  pan_gu_epoch: string;
}
interface CodecKeys {
  originStr: string;
  key: string;
  deKey: string;
  iv?: string;
  deIv?: string
}

// http请求默认相应体
interface HttpResponseData {
  ret: number;
  data: any;
  msg?: string;
}

