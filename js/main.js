main = {};
(ns => {
  "use strict";

  var heading, loading;

  heading = root => {
    var head, element;

    head = document.getElementsByTagName("head")[0];

    element = document.createElement("link");
    element.setAttribute("rel", "icon");
    element.setAttribute("type", "image/png");
    element.setAttribute("href", root + "img/favicon.png");
    head.appendChild(element);
  }

  loading = (paths, action) => {
    var scripts, load, loads;

    action = action ? action : () => { return; };
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

  ns.ex = () => {
    ex.init();
  }

  ns.init = (root, action) => {
    var libs;

    heading(root);

    libs = [
      "css/main.css",
      "js/lib.js",
      "js/dfvals.js",
      "js/ex.js"
    ];
    libs.forEach((item, ix) => {
      libs[ix] = root + item;
    });
    loading(libs, action);
  }
})(main);
