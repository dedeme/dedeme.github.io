var e="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function f(a){var b=this;this.a=a;this.b=[];this.g=k(l("table"),"sudoku").i(p(q(9),function(c){b.b[c]=[];return l("tr").i(p(q(9),function(d){var g=a.b[c][d];g=r(k(l("td"),"bsudoku"),-1===g?"&nbsp;":""+g);-1===a.c[c][d]&&t(g,function(){return aa(c,d)});return b.b[c][d]=g}))}))}
function ba(a,b){for(var c=u,d=0;9>d;++d)for(var g=0;9>g;++g)-1===c.a.c[d][g]?d===a&&g===b?c.b[d][g].style(v(d,g)+"background-color : rgb(230, 240, 250);color:"+(c.a.h[d][g]?"#a08000":"#000000")):c.b[d][g].style(v(d,g)+"background-color : rgb(250, 250, 250);color:"+(c.a.h[d][g]?"#a08000":"#000000")):c.b[d][g].style(v(d,g)+"background-color : rgb(230, 230, 230);")}
function w(a,b,c,d){function g(c,d,g){c?ca():-1==a.a.c[d][g]?aa(d,g):w(a,b,d,g)}switch(b){case da:g(0===c,c-1,d);break;case ea:g(8===c,c+1,d);break;case fa:g(0===d,c,d-1);break;case ha:g(8===d,c,d+1)}}function x(a,b,c,d){y.h[b][c]=z.b;a.a.b[b][c]=d;aa(b,c)}
function ia(){var a=A.h();B(C(ja(new D(a.a.b))),function(b){var c=b[0];b=b[1];a.b[c][b].style(-1!==a.a.c[c][b]?v(c,b)+"background-color : rgb(230, 230, 230);color: rgb(120, 0, 0);":v(c,b)+"background-color : rgb(250, 250, 250);color: rgb(120, 0, 0);")})}e.Object.defineProperties(f.prototype,{c:{configurable:!0,enumerable:!0,get:function(){return this.g}}});
function v(a,b){var c=b-3*Math.floor(b/3);return 0===a-3*Math.floor(a/3)?0===c?"border-top : 2px solid rgb(110,130,150);border-left : 2px solid rgb(110,130,150);":8===b?"border-top : 2px solid rgb(110,130,150);border-right : 2px solid rgb(110,130,150);":"border-top : 2px solid rgb(110,130,150);":8===a?0===c?"border-bottom : 2px solid rgb(110,130,150);border-left : 2px solid rgb(110,130,150);":8===b?"border-bottom : 2px solid rgb(110,130,150);border-right : 2px solid rgb(110,130,150);":"border-bottom : 2px solid rgb(110,130,150);":
0===c?"border-left : 2px solid rgb(110,130,150);":8===b?"border-right : 2px solid rgb(110,130,150);":""};var ka={"<br>View-mkEndMenu.%0%1%2<br>":"<br>Congratulations!!!<br>Sudoku successfully solved in<br>%0h, %1m and %2s.<br><br>",Accept:"Accept",Cancel:"Cancel","Change language":"Change language","Change to pen":"Change to pen","Change to pencil":"Change to pencil","Clear all":"Clear all","Clear all.\nContinue?":"Clear all.\nContinue?","Clear pencil":"Clear pencil","Clear pencil.\nContinue?":"Clear pencil.\nContinue?",Continue:"Continue",Copy:"Copy","Copy external sudoku":"Copy an external sudoku",
"Down level":"Down level","Help & Credits":"Help & Credits",New:"New","New sudoku":"New sudoku",Open:"Load","Open sudoku":"Load sudoku",Save:"Save","Search mistakes":"Search mistakes",Solve:"Solve","Solve sudoku.\nContinue?":"Solve sudoku.\nContinue?","Solved sudoku":"Solved sudoku","Sudoku has been saved":"Sudoku has been saved","Sudoku has more than one solution.\nContinue?":"Sudoku has more than one solution.\nContinue?","Sudoku has no sulution":"Sudoku has no sulution","There are %0 errors in data":"There are %0 errors in data",
"Up level":"Up level","Without records":"Without records"},la={"<br>View-mkEndMenu.%0%1%2<br>":"<br>\u00a1\u00a1\u00a1Felicidades!!!<br>Sudoku correctamente resuelto en<br>%0h, %1m y %2s.<br><br>",Accept:"Aceptar",Cancel:"Cancelar","Change language":"Cambiar el lenguaje","Change to pen":"Cambiar a bol\u00edgrafo","Change to pencil":"Cambiar a l\u00e1piz","Clear all":"Limpiar todo","Clear all.\nContinue?":"Limplar todo.\n\u00bfContinuar?","Clear pencil":"Borrar el lapiz","Clear pencil.\nContinue?":"Borrar el l\u00e1piz.\n\u00bfContinuar?",
Continue:"Continuar",Copy:"Copiar","Copy external sudoku":"Copiar un sudoku externo","Down level":"Bajar un nivel","Help & Credits":"Ayuda & Cr\u00e9ditos",New:"Nuevo","New sudoku":"Nuevo sudoku",Open:"Recuperar","Open sudoku":"Recuperar sudoku",Save:"Guardar","Search mistakes":"Buscar errores",Solve:"Soluccionar","Solve sudoku.\nContinue?":"Soluccionar el sudoku.\n\u00bfContinuar?","Solved sudoku":"Sudoky resuelto","Sudoku has been saved":"El sudoku ha sido guardado","Sudoku has more than one solution.\nContinue?":"El sudoku tiene m\u00e1s de una solucci\u00f3n.\n\u00bfContinuar?",
"Sudoku has no sulution":"El sudoku no tiene soluci\u00f3n","There are %0 errors in data":"Hay %0 errores en los datos","Up level":"Subir un nivel","Without records":"Sin registros"},ma={};function E(a){var b=ma[a];return void 0!==b?b:a}
function na(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d="";for(var g=E(a),m=!1,h=0;h<g.length;++h){var n=g.charAt(h);m?(d+="0"===n?c[0]:"1"===n?c[1]:"2"===n?c[2]:"3"===n?c[3]:"4"===n?c[4]:"5"===n?c[5]:"6"===n?c[6]:"7"===n?c[7]:"8"===n?c[8]:"9"===n?c[9]:"%"===n?"%":"%"+n,m=!1):"%"===n?m=!0:d+=n}return d};function oa(a){var b=a.b;this.a=k(l("table"),"sudoku").i(p(q(9),function(a){return l("tr").i(p(q(9),function(c){var d=b[a][c];return r(k(l("td"),"lsudoku").style(pa(a,c)),-1===d?"&nbsp;":""+d)}))}))}
function pa(a,b){var c=b-3*Math.floor(b/3);return 0==a-3*Math.floor(a/3)?0==c?"border-top : 2px solid rgb(110,130,150);border-left : 2px solid rgb(110,130,150);":8==b?"border-top : 2px solid rgb(110,130,150);border-right : 2px solid rgb(110,130,150);":"border-top : 2px solid rgb(110,130,150);":8==a?0==c?"border-bottom : 2px solid rgb(110,130,150);border-left : 2px solid rgb(110,130,150);":8==b?"border-bottom : 2px solid rgb(110,130,150);border-right : 2px solid rgb(110,130,150);":"border-bottom : 2px solid rgb(110,130,150);":
0==c?"border-left : 2px solid rgb(110,130,150);":8==b?"border-right : 2px solid rgb(110,130,150);":""}e.Object.defineProperties(oa.prototype,{b:{configurable:!0,enumerable:!0,get:function(){return this.a}}});function qa(a,b){this.a=a;this.b=b};function ra(){this.a={}}ra.prototype.keys=function(){return Object.keys(this.a)};e.Object.defineProperties(ra.prototype,{length:{configurable:!0,enumerable:!0,get:function(){return Object.keys(this.a).length}}});function F(a,b){this.f=a;this.a=b}F.prototype.next=function(){return this.a()};F.prototype.add=function(a,b){var c=this,d=0;return b?new F(function(){return c.f()||d<b},function(){if(d<=b){if(c.f()&&d<b)return++d,c.next();d=b+1;return a}return c.next()}):new F(function(){return 0===d},function(){if(c.f())return c.next();++d;return a})};function sa(a,b){var c=!0;return new F(function(){return a.f()||c},function(){return c?(c=!1,b):a.next()})}
F.prototype.i=function(a,b){var c=this,d=0;return new F(function(){return c.f()||a.f()},function(){if(!b)return c.f()?c.next():a.next();if(d<b){if(c.f())return++d,c.next();d=b}return a.f()?a.next():c.next()})};function ta(a){for(var b=ua();b.f();)if(!a(b.next()))return!1;return!0}function B(a,b){for(;a.f();)b(a.next())}
function va(a){function b(){for(;;)if(c.f()){if(d=c.next(),a(d))break}else{g=!1;break}}var c=C(z.g),d=null,g=!0;b();return new F(function(){return g},function(){var a=d;b();return a})}function p(a,b){return new F(function(){return a.f()},function(){return b(a.next())})}function wa(a,b){for(var c=0;a.f();)c=b(c,a.next());return c}F.prototype.reverse=function(){return C(G(this).reverse())};function xa(a){var b=9;return new F(function(){return a.f()&&0<b},function(){--b;return a.next()})}
function G(a){var b=[];B(a,function(a){b.push(a)});return b}F.prototype.toString=function(){return"["+ya(this)+"]"};function C(a){var b=a.length,c=0;return new F(function(){return c<b},function(){return a[c++]})}function ya(a){var b=", ";if(!a.f())return"";b=b||"";var c=a.next();B(a,function(a){c+=b+a});return c}function q(a,b){b||(b=a,a=0);return new F(function(){return a<b},function(){return a++})}
function ua(){var a=C(y.g),b=C(y.b);return new F(function(){return a.f()&&b.f()},function(){return new qa(a.next(),b.next())})};function H(a,b,c){this.b=new Date(c,b-1,a,12,0,0)}H.prototype.add=function(a){return I(new Date(this.a.getTime()+864E5*a))};
function za(a){function b(a,b){c=c.split(a).join(b)}var c="%D-%b-%Y",d=""+a.day,g=a.a.getDay(),m=H.b[g],h=a.a.getMonth(),n=""+(h+1);h=H.a[h];a="0000"+a.year;b("%d",d);b("%D",1===d.length?"0"+d:d);b("%m",n);b("%M",1===n.length?"0"+n:n);b("%y",a.substring(a.length-2));b("%Y",a.substring(a.length-4));b("%b",h.substring(0,3));b("%B",h);b("%1",H.c.charAt(g));b("%a",m.substring(0,3));b("%A",m);b("%%","%");return c}
H.prototype.toString=function(){var a="0000"+this.year,b="00"+this.month,c="00"+this.day;return c.substring(c.length-2)+"/"+b.substring(b.length-2)+"/"+a.substring(a.length-4)};function Aa(){var a=I(new Date(Date.now()));return[a.day,a.month,a.year]}function I(a){return new H(a.getDate(),a.getMonth()+1,a.getFullYear())}
e.Object.defineProperties(H.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return this.b}},day:{configurable:!0,enumerable:!0,get:function(){return this.b.getDate()}},month:{configurable:!0,enumerable:!0,get:function(){return this.b.getMonth()+1}},year:{configurable:!0,enumerable:!0,get:function(){return this.b.getFullYear()}}});
e.Object.defineProperties(H,{a:{configurable:!0,enumerable:!0,get:function(){return"enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(" ")}},b:{configurable:!0,enumerable:!0,get:function(){return"domingo lunes martes mi\u00e9rcoles jueves viernes s\u00e1bado".split(" ")}},c:{configurable:!0,enumerable:!0,get:function(){return"DLMXJVS"}}});function Ba(a){a=window.localStorage.getItem(a);return"null"===a?null:a};function J(a){this.a=a}function r(a,b){if(void 0===b)return a.a.innerHTML;a.a.innerHTML=b;return a}function K(a,b){if(void 0===b)return a.a.textContent;a.a.textContent=b;return a}function k(a,b){if(void 0===b)return a.a.className;a.a.className=b;return a}J.prototype.style=function(a){if(void 0===a)return this.a.getAttribute("style");this.a.setAttribute("style",a);return this};function L(a,b,c){if(void 0===c)return a.a.getAttribute(b);a.a.setAttribute(b,c);return a}
J.prototype.disabled=function(a){if(void 0===a)return this.a.disabled;this.a.disabled=a;return this};J.prototype.checked=function(a){if(void 0===a)return this.a.checked;this.a.checked=a;return this};J.prototype.value=function(a){if(void 0===a)return this.a.value;this.a.value=a;return this};J.prototype.add=function(a){this.a.appendChild(a.a);return this};J.prototype.i=function(a){var b=this;B(a,function(a){b.a.appendChild(a.b)});return this};function M(a){a.a.innerHTML="";return a}
function t(a,b){a.a.addEventListener("click",b,!1);return a}e.Object.defineProperties(J.prototype,{b:{configurable:!0,enumerable:!0,get:function(){return this.a}}});function l(a){if(""===a)throw"'s' is empty";return"#"===a.charAt(0)?new J(document.getElementById(a.substring(1))):"@"===a.charAt(0)?new J(document.querySelector(a.substring(1))):new J(document.createElement(a))}function Ca(){return function(){var a=document.getElementsByTagName("body"),b=0,c=a.length;return new F(function(){return b<c},function(){return new J(a[b++])})}()}function N(a){return L(l("img"),"src","img/"+a+".png")}function O(a){return t(L(l("span"),"style","cursor:pointer"),a)}
function ca(){var a=new AudioContext,b=a.createOscillator();b.frequency.value=990;b.connect(a.destination);b.start(0);setTimeout(function(){b.stop(0)},80)};function P(a){return A.s().a.a[a]};function D(a){this.a=a}function Da(a,b,c,d){for(var g=3*Math.floor(b/3),m=3*Math.floor(c/3),h=0;9>h;++h)if(h!=b&&a.a[h][c]===d)return!1;for(h=0;9>h;++h)if(h!=c&&a.a[b][h]===d)return!1;for(h=g;h<g+3;++h)for(var n=m;n<m+3;++n)if((h!=b||n!=c)&&a.a[h][n]===d)return!1;return!0}
function Ea(a){var b=new Fa,c=Q(),d=G(p(q(9),function(b){return G(p(q(9),function(d){var g=a.a[b][d];if(-1==g)return C([1,2,3,4,5,6,7,8,9]);c.b[b][d]=g;return C([g])}))}));return Ga(function(){var g=b.b,m=b.a,h=a.a[g][m];c.b[g][m]=h;d[g][m]=-1===h?C([1,2,3,4,5,6,7,8,9]):C([h]);return Ha(b)},function(){for(var a=b.b,m=b.a,h=d[a][m];h.f();){var n=h.next();if(Da(c,a,m,n))return c.b[a][m]=n,!0}return!1},function(){return Ia(b)})?c:null}
function Ja(a){var b=new Fa,c=Q(),d=G(p(q(9),function(b){return G(p(q(9),function(d){var g=a.a[b][d];if(-1==g)return C([1,2,3,4,5,6,7,8,9]);c.b[b][d]=g;return C([g])}))}));return Ka(function(){var g=b.b,m=b.a,h=a.a[g][m];c.b[g][m]=h;d[g][m]=-1===h?C([1,2,3,4,5,6,7,8,9]):C([h]);return Ha(b)},function(){for(var a=b.b,m=b.a,h=d[a][m];h.f();){var n=h.next();if(Da(c,a,m,n))return c.b[a][m]=n,!0}return!1},function(){return Ia(b)})}
function ja(a){for(var b=[],c=0;9>c;++c)for(var d=0;9>d;++d){var g=a.a[c][d];-1==g||Da(a,c,d,g)||b.push([c,d])}return b}function La(a){wa(C(a.a),function(a,c){return a+wa(C(c),function(a,b){return-1==b?a:a+1})})}D.prototype.toString=function(){for(var a="",b=0;9>b;++b){for(var c=0;9>c;++c){var d=this.a[b][c];a+=-1==d?"-":""+d}a+="\n"}return a};function Q(){return new D(G(p(q(9),function(){return G(p(q(9),function(){return-1}))})))}
function Ma(a){for(var b=G(p(C(a.a),function(a){return G(C(a))})),c=0;-1!==b[0][c];)++c;return new R(I(new Date(Date.now())).a.getTime(),Aa(),0,[0,c],a.b,a.a,b,G(p(q(9),function(){return G(p(q(9),function(){return!1}))})))}e.Object.defineProperties(D.prototype,{b:{configurable:!0,enumerable:!0,get:function(){return this.a}}});function Na(a,b){this.b=a;this.a=b}function R(a,b,c,d,g,m,h,n){this.m=a;this.l=b;this.time=c;this.a=d;this.g=g;this.c=m;this.b=h;this.h=n}R.prototype.j=function(){return this.m};function S(a){return[a.m,a.l,a.time,a.a,a.g,a.c,a.b,a.h]}function T(a){return new R(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7])}function Oa(a,b,c,d,g){this.cache=a;this.g=b;this.c=c;this.a=d;this.b=g}
function Pa(){var a=z;return[G(p(C(a.cache),function(a){return null===a?a:[a.b,a.a]})),G(p(C(a.g),function(a){return S(a)})),a.c,a.a,a.b]}function Qa(a){return new Oa(G(p(C(a[0]),function(a){return null===a?a:new Na(a[0],a[1])})),G(p(C(a[1]),function(a){return T(a)})),a[2],a[3],a[4])}function Ra(a,b){this.a=a;this.b=b}function Sa(a){return[a.a,a.b]}function Ta(a,b,c){this.b=a;this.c=b;this.a=c}var U,Ua;function Ga(a,b,c){for(;;)if(b()){if(!c())return!0}else if(!a())return!1}
function Ka(a,b,c){for(var d=0;;)if(b()){if(!c()&&(++d,1<d||!a()))return d}else if(!a())return d}function Va(){var a=z.c;var b=y.l;b=new H(b[0],b[1],b[2]);if("es"===a)return za(b);a=H.a;H.a="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");b=za(b);H.a=a;return b}function Wa(){var a=Xa();return a[0]+":"+a[1]+":"+a[2]}function Xa(){function a(a){a=""+a;return 2>a.length?"0"+a:a}var b=y.time,c=Math.floor(b/60),d=Math.floor(c/60);return[""+d,a(c-60*d),a(b-60*c)]}
var da=0,ea=1,fa=2,ha=3,z=new Oa([null,null,null,null,null],[],"es",5,!1),y=Ma(new Na([[2,8,5,6,3,9,1,4,7],[9,1,7,4,2,8,6,3,5],[3,6,4,5,1,7,8,2,9],[8,9,6,2,4,5,3,7,1],[1,4,2,7,8,3,9,5,6],[5,7,3,1,9,6,2,8,4],[4,3,8,9,7,1,5,6,2],[6,2,9,8,5,4,7,1,3],[7,5,1,3,6,2,4,9,8]],[[-1,-1,-1,-1,3,-1,-1,-1,7],[9,-1,-1,4,-1,-1,6,-1,-1],[-1,-1,-1,-1,-1,7,-1,-1,-1],[8,-1,-1,-1,-1,5,3,-1,1],[1,-1,-1,-1,8,-1,9,5,-1],[5,7,-1,1,-1,-1,-1,8,-1],[-1,3,-1,9,-1,-1,5,6,-1],[6,-1,9,8,-1,-1,-1,-1,3],[-1,5,1,3,-1,2,-1,-1,-1]])),
V=T(S(y));function Fa(){this.c=8;this.a=this.b=0}function Ia(a){++a.a;if(9===a.a){if(8===a.b)return!1;a.a=0;++a.b}return!0}function Ha(a){--a.a;if(-1==a.a){if(0==a.b)return!1;a.a=a.c;--a.b}return!0};var A,u=new f(y),Ya=new function(){var a=this;var b=b||"img";b+="/";this.a=new ra;B(C("1 2 3 4 5 k0 k1 k2 k3 k4 k5 k6 k7 k8 k9 edit-copy emblem-important en es filenew fileopen filesave gtk-add gtk-clear gtk-execute gtk-help gtk-remove levelen leveles pen pencil thinking.gif win0 win1 win2 win3 win4".split(" ")),function(c){var d=c.indexOf(".");if(-1==d)d=L(new J(new Image),"src",b+c+".png"),a.a.a[c]=d;else{var g=L(new J(new Image),"src",b+c);a.a.a[c.substring(0,d)]=g}})},Za=k(l("td"),"lastR"),$a=
l("span"),W=l("div"),ab=l("div");A=function(){};A.s=function(){return Ya};A.h=function(){return u};A.C=function(){return Za};A.c=function(){return $a};A.a=function(a,b,c){c?(a=A.s().a.a[a],a=null===a?null:a.style("filter: grayscale(100%)"),a.a.setAttribute("style",a.style()+";vertical-align:bottom;")):a=P(a).style("vertical-align:bottom;");""!==b&&L(a,"title",b);return a};
A.j=function(){M(W).add(L(l("table"),"align","center").add(l("tr").add(k(l("td"),"menu").add($a).add(O(bb).add(A.a("edit-copy",E("Copy")))).add(O(cb).add(A.a("fileopen",E("Open")))).add(O(db).add(A.a("filesave",E("Save"))))).add(k(l("td"),"menu").style("vertical-align:middle").add(O(eb).add(A.a("level"+z.c,E("Change language")))).add(O(fb).add(A.a("gtk-remove",E("Down level"),1===z.a))).add(A.a(""+z.a,"")).add(O(gb).add(A.a("gtk-add",E("Up level"),5===z.a)))).add(k(l("td"),"menu").add(O(hb).add(z.b?
A.a("pencil",E("Change to pen")):A.a("pen",E("Change to pencil")))).add(O(ib).add(z.b?A.a("gtk-clear",E("Clear pencil"),!0):A.a("gtk-clear",E("Clear all")))).add(O(jb).add(A.a("emblem-important",E("Search mistakes")))).add(O(kb).add(A.a("gtk-execute",E("Solve")))))))};A.v=function(){M(W).add(L(l("table"),"align","center").add(l("tr").add(k(l("td"),"menu").add(A.a("filenew","").style("vertical-align:middle")).add(r(k(l("span"),"menu"),E("New sudoku"))).add(l("span").style("padding-right:5px;")))))};
A.H=function(){M(W).add(L(l("table"),"align","center").add(l("tr").add(k(l("td"),"menu").add(N("edit-copy").style("vertical-align:middle")).add(r(k(l("span"),"menu"),E("Copy external sudoku"))).add(t(K(l("button"),E("Accept")),lb)).add(r(k(l("span"),"menu"),"")).add(t(K(l("button"),E("Cancel")),mb)).add(l("span").style("padding-right:5px;")))))};
A.u=function(){M(W).add(L(l("table"),"align","center").add(l("tr").add(k(l("td"),"menu").add(N("fileopen").style("vertical-align:middle")).add(r(k(l("span"),"menu"),E("Open sudoku"))).add(t(K(l("button"),E("Cancel")),nb)).add(l("span").style("padding-right:5px;")))))};A.w=function(){M(W).add(L(l("table"),"align","center").add(l("tr").add(k(l("td"),"menu").add(N("gtk-execute").style("vertical-align:middle")).add(r(k(l("span"),"menu"),E("Solved sudoku"))).add(t(K(l("button"),E("Accept")),ob)).add(l("span").style("padding-right:5px;")))))};
A.I=function(){var a=Xa();M(W).add(L(l("table"),"align","center").add(l("tr").add(k(l("td"),"menu").style("white-space: nowrap;padding:10px;").add(N("win"+Math.floor(5*Math.random())).style("vertical-align:middle")).add(r(k(l("span"),"menu"),na(E("<br>View-mkEndMenu.%0%1%2<br>"),a[0],a[1],a[2]))).add(t(K(l("button"),E("Continue")),X)).add(l("span").style("padding-right:5px;")))))};
A.m=function(){function a(a){return function(){var b=0===U?y:1===U?V:null;if(null!==b){b=b.a;var d=A.h();0===a?x(d,b[0],b[1],-1):x(d,b[0],b[1],a)}}}return L(l("table"),"align","center").add(l("tr").i(p(q(1,6),function(b){return l("td").add(O(a(b)).add(k(P("k"+b),"frame")))}))).add(l("tr").i(p(q(6,10),function(b){return l("td").add(O(a(b)).add(k(P("k"+b),"frame")))})).add(l("td").add(O(a(0)).add(k(P("k0"),"frame")))))};A.g=function(a){M(ab).add(a)};
A.D=function(){var a=l("div").style("text-align:center").add(r(k(l("p"),"title"),"DmSudoku")).add(W).add(l("p")).add(ab);M(Ca().next()).add(l("div").add(a).add(r(l("p"),"&nbsp;")).add(l("hr")).add(k(l("table"),"main").add(l("tr").add(l("td").add(r(L(l("a"),"href","doc_"+z.c+"/about.html"),"<small>"+E("Help & Credits")+"</small>"))).add(r(l("td").style("text-align: right;font-size: 10px;color:#808080;font-size:x-small;"),"- \u00a9 \u00baDeme. DmSudoku (v. 201709) -")))))};
A.b=function(){U=0;u=new f(y);ba(y.a[0],y.a[1]);A.j();A.g(L(l("table"),"align","center").style("border-collapse : collapse;").add(l("tr").add(L(l("td"),"colspan",2).add(u.c))).add(l("tr").add(r(L(l("td"),"colspan",2),"<hr>"))).add(l("tr").add(r(k(l("td"),"lastL"),Va())).add(r(Za,Wa()))).add(l("tr").add(r(L(l("td"),"colspan",2),"<hr>"))).add(l("tr").add(L(l("td"),"colspan",2).add(A.m()))));pb()};
A.A=function(){A.v();A.g(L(l("table"),"align","center").add(l("tr").add(k(l("td"),"frame").add(A.a("thinking","")))))};A.l=function(){U=1;u=new f(V);ba(V.a[0],V.a[1]);A.H();A.g(L(l("table"),"align","center").style("border-collapse : collapse;").add(l("tr").add(l("td").add(u.c))).add(l("tr").add(r(l("td"),"<hr>"))).add(l("tr").add(l("td").add(A.m()))))};
A.G=function(){A.u();if(0===z.g.length)A.g(L(l("table"),"align","center").add(l("tr").add(r(k(l("td"),"frame"),E("Without records")))));else{var a=0;A.g(L(l("table"),"align","center").i(p(q(3),function(){return l("tr").i(p(q(3),function(){var b=z.g[a++];return b?l("td").add(O(function(){qb(b)}).add((new oa(b)).b)):l("td")}))})))}};
A.o=function(){A.g(L(l("table"),"align","center").style("border-collapse : collapse;").add(l("tr").add(L(l("td"),"colspan",2).add(u.c))).add(l("tr").add(r(L(l("td"),"colspan",2),"<hr>"))).add(l("tr").add(r(k(l("td"),"lastL"),Va())).add(r(k(l("td"),"lastR"),Wa()))))};
A.B=function(){U=3;u=new f(y);A.w();A.o();for(var a=u,b=0;9>b;++b)for(var c=0;9>c;++c)-1!=a.a.c[b][c]?a.b[b][c].style(v(b,c)+"background-color : rgb(230, 230, 230);"):(a.a.b[b][c]===a.a.g[b][c]?a.b[b][c].style(v(b,c)+"background-color : rgb(250, 250, 250);"):a.b[b][c].style(v(b,c)+"background-color : rgb(250, 250, 250);color: rgb(120, 0, 0);"),r(a.b[b][c],""+a.a.g[b][c]))};A.F=function(){A.I();A.o()};var rb=null;function Y(){var a=JSON.stringify(Pa());window.localStorage.setItem("__Sudoku_store_data",a)}function Z(){var a=JSON.stringify(S(y));window.localStorage.setItem("__Sudoku_store_last",a)}var sb=new Worker("sudokuMaker.js");
function tb(){var a=Ba("__Sudoku_store_version"),b=!0;if(null===a||"v. 201709"!==a)window.localStorage.setItem("__Sudoku_store_version","v. 201709"),b=!1;a=Ba("__Sudoku_store_data");b&&null!=a?z=Qa(JSON.parse(a)):Y();a=Ba("__Sudoku_store_last");b&&null!=a?y=T(JSON.parse(a)):Z();window.localStorage.removeItem("__Sudoku_store_last");window.localStorage.removeItem("__Sudoku_store_data");ma="es"===z.c?la:ka;M(A.c()).add(O(X).add(A.a("filenew",E("New"))));A.D();sb.onmessage=function(a){a=a.data;a=new Ta(a[0],
a[1],T(a[2]));a.b?(z.cache[a.c-1]=new Na(a.a.g,a.a.c),Y(),M(A.c()).add(O(X).add(A.a("filenew",E("New"))))):(y=a.a,Z(),A.b())};window.document.addEventListener("keydown",function(a){var b=0===U?y:1===U?V:null;if(b){b=b.a;var c=A.h();switch(a.keyCode){case 37:w(c,fa,b[0],b[1]);break;case 38:w(c,da,b[0],b[1]);break;case 39:w(c,ha,b[0],b[1]);break;case 40:w(c,ea,b[0],b[1]);break;case 46:x(c,b[0],b[1],-1);break;default:var m=a.keyCode;if(96<m&&106>m)x(c,b[0],b[1],m-96);else if(48<m&&58>m)x(c,b[0],b[1],
m-48);else return}a.preventDefault()}});A.b();null!==rb&&clearInterval(rb);rb=setInterval(function(){++y.time;Z();r(A.C(),Wa())},1E3);b=z.cache;for(a=0;5>a;++a)null===b[a]&&(a==z.a-1&&M(A.c()).add(A.a("filenew",E("New"),!0)),sb.postMessage(Sa(new Ra(!0,a+1))))}function X(){var a=z.cache[z.a-1];null===a?(sb.postMessage(Sa(new Ra(!1,z.a))),A.A()):(y=Ma(a),Z(),z.cache[z.a-1]=null,Y(),tb())}
function bb(){V=new R(0,[],0,[0,0],Q().b,Q().b,Q().b,G(p(q(9),function(){return G(p(q(9),function(){return!1}))})));A.l()}function cb(){A.G()}function db(){var a=T(S(y));z.g=G(xa(sa(va(function(b){return a.j!=b.j}),a)));Y();alert(E("Sudoku has been saved"))}function gb(){5>z.a&&++z.a;Y();z.cache[z.a-1]?M(A.c()).add(O(X).add(A.a("filenew",E("New")))):M(A.c()).add(A.a("filenew",E("New"),!0));A.j()}
function fb(){1<z.a&&--z.a;Y();z.cache[z.a-1]?M(A.c()).add(O(X).add(A.a("filenew",E("New")))):M(A.c()).add(A.a("filenew",E("New"),!0));A.j()}function hb(){z.b=!z.b;Y();A.j()}function ib(){if(confirm(z.b?E("Clear pencil.\nContinue?"):E("Clear all.\nContinue?"))){for(var a=A.h(),b=0;9>b;++b)for(var c=0;9>c;++c){var d;if(d=-1===a.a.c[b][c])d=z.b?y.h[b][c]:1;d&&(a.a.b[b][c]=-1,r(a.b[b][c],"&nbsp;"))}Z()}}function jb(){Ua?(Ua=!1,A.b()):(Ua=!0,ia())}
function kb(){confirm(E("Solve sudoku.\nContinue?"))&&A.B()}function eb(){z.c="en"===z.c?"es":"en";Y();tb()}
function lb(){var a=V.b,b=new D(a);if(0<ja(b).length)alert(na(E("There are %0 errors in data"),""+ja(b).length)),ia();else{La(b);var c=Ja(b);if(0===c)alert(E("Sudoku has no sulution"));else if(2!==c||confirm(E("Sudoku has more than one solution.\nContinue?"))){for(c=0;-1!==a[0][c];)++c;y=new R(I(new Date(Date.now())).a.getTime(),Aa(),0,[0,c],Ea(b).b,G(p(C(a),function(a){return G(p(C(a),function(a){return a}))})),a,G(p(q(9),function(){return G(p(q(9),function(){return!1}))})));Z();A.b()}}}
function mb(){A.b()}function qb(a){y=T(S(a));z.g=G(sa(va(function(b){return b.j!=a.j}),a));Z();Y();A.b()}function nb(){return A.b()}function ob(){A.b()}function aa(a,b){0===U?(y.a[0]=a,y.a[1]=b,Z(),A.b()):1===U&&(V.a[0]=a,V.a[1]=b,A.l())}function pb(){ta(function(a){a:{var b=C(a.a);for(a=C(a.b);b.f()&&a.f();)if(b.next()!==a.next()){b=!1;break a}b=b.f()||a.f()?!1:!0}return b})&&A.F()}tb();