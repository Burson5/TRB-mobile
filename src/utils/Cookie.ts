export const Cookie = {
  setCookie: (name, value) => {
    const Days = 30;
    const exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + escape(value) + ';expires=' + exp.toUTCString();
  },

  getCookie: name => {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    const arr = document.cookie.match(reg);
    if (arr != null) return unescape(arr[2]);
    else return null;
  },

  clearCookie: () => {
    var keys = document.cookie.match(/[^ =;]+(?==)/g);
    if (keys) {
      for (var i = keys.length; i--;) {
        document.cookie =
          keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString(); // 清除当前域名下的,例如：m.ratingdog.cn
        document.cookie =
          keys[i] +
          '=0;path=/;domain=' +
          document.domain +
          ';expires=' +
          new Date(0).toUTCString(); // 清除当前域名下的，例如 .m.ratingdog.cn
        document.cookie =
          keys[i] +
          '=0;path=/;domain=ratingdog.cn;expires=' +
          new Date(0).toUTCString(); // 清除一级域名下的或指定的，例如 .ratingdog.cn
      }
    }
  }
};
