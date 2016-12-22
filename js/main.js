main = {};
(function (ns) {
  "use strict";

  ns.load = function (paths, action) {
    var scripts, load, loads;

    scripts = [];

    load = function (path, action) {
      var head, path, element;

      head = document.getElementsByTagName("head")[0];

      for (path in scripts) {
        return;
      }

      if (path.substring(path.length - 3) === ".js") {
        element = document.createElement('script');
        element.setAttribute("type", "text/javascript");
        element.setAttribute("src", path);
      } else if (path.substring(path.length - 4) === ".css") {
        element = document.createElement('link');
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", path);
      } else {
        throw path + " is not a .js or .css file";
      }

      head.appendChild(element);
      scripts.push(path)
      element.onload = function () {
        action();
      }
    };

    loads = function () {
      if (paths.length === 0) {
        action();
      } else {
        load(paths.shift(), loads);
      }
    }
    loads();
  }

  ns.init = function () {
    main.load([
        "css/main.css",
        "js/lib.js"
      ], function () {
        lib.alert();
      }
    );
  }
})(main);
