lib = {};
(ns => {
  "use strict;"

  toFixExp = (n, scale, f) => {
    var lg, precision;

    if (n === 0) {
      return f(0, scale);
    }

    lg = Math.log10(Math.abs(n));
    lg = lg < 0 ? 0 : lg;
    precision = 1/Math.pow(10, 14 - lg);

    if (n > 0) {
      return f(n + precision, scale);
    }
    return f(n - precision, scale);
  }

  /// num - num - str
  ns.toFixed = (n, scale) => {
    var f;

    f = (nm, sc) => {
      return nm.toFixed(scale);
    }
    return toFixExp(n, scale, f);
  }

  /// num - num - str
  ns.toExponential = (n, scale) => {
    var f;

    f = (nm, sc) => {
      return nm.toExponential(scale);
    }
    return toFixExp(n, scale, f);
  }

})(lib);
