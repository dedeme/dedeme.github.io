ex = {};
(ns => {
  "use strict";

  var exs, values, text, solution, exercise;

  exs = {};

  values = tx => {
    var vals, defs;
    vals = {};

    defs = tx.split("<br>");
    defs.forEach(item => {
      var tmp, sp, fid, ftype, fdef, fv;

      sp = tx => {
        var ix = tx.indexOf(";");
        return ix === -1 ? [tx] : [tx.substring(0, ix), tx.substring(ix + 1)];
      }

      item = item.trim().replace(/&gt;/g, ">").replace(/&lt;/g, "<");
      if (item === "" || item.charAt(0) == "#") {
        return;
      }
      tmp = sp(item);
      if (tmp.length === 1) {
        vals["syntax-error"] = item;
      } else {
        fid = tmp[0].trim();
        tmp = sp(tmp[1]);
        if (tmp.length === 1) {
          vals["syntax-error"] = item;
        } else {
          ftype = tmp[0].trim();
          fdef = tmp[1];
          fv = dfvals.generate(vals, ftype, fdef);
          if (fv !== null) {
            vals[fid] = fv;
          } else {
            vals["syntax-error"] = item;
          }
        }
      }
    });

    return vals;
  }

  text = (vals, tx) => {
    return dfvals.replace(vals, tx);
  }

  exercise = (div, id) => {
    var sub;
    sub = html => {
      var parts, vals, html1;
      var bt1;

      parts = html.split("####");
      vals = values(parts[0]);

      if (vals["syntax-error"]) {
          div.innerHTML = "<span style='color:#A00000'>" +
          vals["syntax-error"] + "</span>";
        return;
      }

      html1 = "<i>Exercise " + id + "</i> . " +
        "<a href='#top'><small>Top</small></a> ." +
        "<p><i><u>Question</u></i></p>" +
        text(vals, parts[1]);

      div.setAttribute("class", "frame0");
      div.innerHTML = html1;

      bt1 = document.createElement("button");
      bt1.innerHTML = "See Answer";
      bt1.onclick = () => {
        div.innerHTML = html1 +
          "<p><i><u>Answer</u></i></p>" +
          text(vals, parts[2]);
        bt1.innerHTML = "New Exercise";
        bt1.onclick = () => {
          sub(html);
        }
        div.appendChild(bt1);
      }

      div.appendChild(bt1);
    }
    sub(exs[id]);
  }

  ns.init = () => {
    var divs;

    divs = Array.from(document.getElementsByTagName("div"));
    divs.forEach(item => {
      var id;

      id = item.getAttribute("id");
      if (id && id.startsWith("dfex-")) {
        exs[id.substring(2)] = item.innerHTML;
        item.innerHTML = "";
      }
    });
    divs.forEach(item => {
      var id;

      id = item.getAttribute("id");
      if (id && id.startsWith("ex-")) {
        exercise(item, id);
      }
    });
  }
})(ex);
