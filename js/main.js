main = {};
(ns => {
  "use strict";

  ns.load = (paths, action) => {
    var scripts, load, loads;

    scripts = [];

    load = (path, action) => {
      var head, path, element;

      head = document.getElementsByTagName("head")[0];

      scripts.forEach(item =>  {
        if (item === path) {
          return;
        }
      });

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
      scripts.push(path);
      element.onload = () => {
        action();
      };
    };

    loads = () => {
      if (paths.length === 0) {
        action();
      } else {
        load(paths.shift(), loads);
      }
    }
    loads();
  }

  ns.init = (root, action) => {
    var libs;

    libs = [
      "css/main.css",
      "js/lib.js"
    ];
    libs.forEach((item, ix) => {
      libs[ix] = root + item;
    });
    main.load(libs, action);
  }
})(main);
