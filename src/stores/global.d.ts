interface CompanyValidateData {
  errorMsg?: string;
  isValidate?: boolean;
  // 验证类型 ： 提前弹框或者禁止登陆弹框
  type?: number;
  phone?: string;
  // 手机号取*号
  formatedPhone?: string;
  // 时间格式是 xxxx-xx-xx
  endTime?: string;
  // 时间格式化 xxxx年xx月xx日
  formatedEndTime?: string;

  // 是否显示弹框
  visible?: boolean;

  // 是否是老板
  isBoss?: boolean;
  // 公司名称
  company?: string;

  // 是否来自于登陆
  fromLogin?: boolean;
  // 服务器时间
  serverTime?: number;
  // 错误次数
  requestErrorTimes: number;
}

interface LocalValidateStatus {
  // 是否显示弹框
  visible: false;
  // 存入时间
  outTime: number;
}

interface LogoutManager {
  // 是否是被踢出
  passive: false;

  // 踢出类型
  type: -1;

  // 踢出后显示弹框提示
  modalVisible: false;
}


/**
 * user/info接口下发下来的用户信息
 */
interface ExtractUserInfo {
  expired?: number;
  willExpiry?: number;
  common_store_count?: number;
  storeCount?: number;
  storecount?: number;
  commonStoreCount?: number;
  outtimeipcount?: number;
  outtime?: {
    expiring: number;
  }
}

/**
 * 用户基础信息
 */
interface UserInfo {
  is_store_box?: number;
  ret: number;
  comId: number;
  id: number;
  company: number;
  oauth_string: string;
  machine_string: string;
  name: string;
  username: string;
  is_boss: number;
  company_name: string;
  extraInfo: ExtractUserInfo;
}

interface LoginResult {
  id?: number;
  isSuccess: boolean;
  data: any;
  response?: true;
  isNeedValidate?: boolean;
  message?: string;
}

interface LoginParams {
  name: string;
  username: string;
  password: string;
  isValidated?: boolean;
  isRememberPassword?: boolean
}
