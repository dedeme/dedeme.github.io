dfvals = {};
(ns => {
  "use strict";

  ns.replace = (vals, tx) => {
    var rp, id;

    rp = (tx, oldtx, newtx) => {
      var old, len, r, rest, ix;
      old = "!!" + oldtx + "!";
      len = old.length;
      r = "";
      rest = tx;
      ix = rest.indexOf(old);
      while (ix !== -1) {
        r += rest.substring(0, ix) + newtx;
        rest = rest.substring(ix + len);
        ix = rest.indexOf(old);
      }
      return r + rest;
    }

    for (id in vals) {
      tx = rp(tx, id, vals[id]);
    }

    return tx;
  }

  ns.generate = (vals, dftype, df) => {
    var number, equals, nequals;

    number = () => {
      var vs, mul, dif, r;

      vs = df.split(";");
      mul = Math.pow(10, vs[2]);
      dif = (vs[1] * mul - vs[0] * mul) / mul;
      r = +vs[0] + Math.random() * dif;
      return lib.toFixed(r, vs[2]);
    }

    equals = () => {
      return eval(ns.replace(vals, df));
    }

    nequals = () => {
      var vs, r;

      vs = df.split(";");
      r = eval(ns.replace(vals, vs[0]));
      return lib.toFixed(r, vs[1]);
    }

    try {
      switch (dftype) {
        case "n" : return number();
        case "=" : return equals();
        case "n=" : return nequals();
        default  : return null;
      }
    } catch (r) {
      return null;
    }
  }
})(dfvals);
