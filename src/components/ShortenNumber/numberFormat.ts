const numberFormat = {
  formatLargeNumberForCJKLocale(num: number) {
    const o = Math.floor(Math.log10(num));
    let f = num / Math.pow(Math.pow(10, 4), Math.floor(o / 4));
    return (
      (f = f >= Math.pow(10, 3) ? Math.floor(f) : Math.floor(10 * f) / 10),
      String(f)
    );
  },
  getSuffixForCJKLocale(num: number) {
    if (num > 99999999) {
      return '亿';
    } else if (num > 9999) {
      return '万';
    }
    return '';
  },
  withThousandDelimiters(num: number) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  },
};

export default numberFormat;
