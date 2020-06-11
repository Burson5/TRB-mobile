const Validator = {
  regExps: {
    // 不需要验证
    noValidate: new RegExp(undefined),

  },

  validate: (value, regExp) => {
    if (regExp) {
      return regExp.test(value);
    } else {
      return true;
    }
  },
};
export { Validator };
