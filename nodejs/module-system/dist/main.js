(() => {
  var r = {
    899: (r, o, e) => {
      e(964);
    },
    964: r => {
      r.exports = "CCCC";
    },
    935: (r, o, e) => {
      e(189);
      e(622);
    },
    189: r => {
      r.exports = "x";
    },
    622: r => {
      r.exports = "y";
    }
  };

  var o = {};

  function e(t) {
    var s = o[t];
    if (void 0 !== s) return s.exports;

    var x = o[t] = { exports: {} };
    r[t](x, x.exports, e);
    return x.exports;
  }

  e(899);
  e(935);
  console.log("a");
})();
