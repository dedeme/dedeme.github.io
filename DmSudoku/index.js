(function (console) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Big = function(data) {
	this.cells = [];
	var _g = this;
	this.data = data;
	this.element = dm_Ui.Q("table").klass("sudoku").addIt(dm_It.range(9).map(function(row) {
		_g.cells[row] = [];
		return dm_Ui.Q("tr").addIt(dm_It.range(9).map(function(col) {
			var n = data.user[row][col];
			var td = dm_Ui.Q("td").klass("bsudoku").html(n == -1?"&nbsp;":n == null?"null":"" + n);
			if(data.base[row][col] == -1) td.on(dm_ActionType.CLICK,function(ev) {
				Main.sudokuClick(row,col);
			});
			_g.cells[row][col] = td;
			return td;
		}));
	}));
};
Big.__name__ = true;
Big.findBorder = function(row,col) {
	var top = "border-top : 2px solid rgb(110,130,150);";
	var bottom = "border-bottom : 2px solid rgb(110,130,150);";
	var left = "border-left : 2px solid rgb(110,130,150);";
	var right = "border-right : 2px solid rgb(110,130,150);";
	var row3 = row - Math.floor(row / 3) * 3;
	var col3 = col - Math.floor(col / 3) * 3;
	if(row3 == 0) {
		if(col3 == 0) return top + left; else if(col == 8) return top + right; else return top;
	} else if(row == 8) {
		if(col3 == 0) return bottom + left; else if(col == 8) return bottom + right; else return bottom;
	} else if(col3 == 0) return left; else if(col == 8) return right; else return "";
};
Big.prototype = {
	select: function(row,col) {
		var _g = 0;
		while(_g < 9) {
			var r = _g++;
			var _g1 = 0;
			while(_g1 < 9) {
				var c = _g1++;
				if(this.data.base[r][c] == -1) {
					if(r == row && c == col) this.cells[r][c].style(Big.findBorder(r,c) + "background-color : rgb(230, 240, 250);" + "color:" + (this.data.pencil[r][c]?"#a08000":"#000000")); else this.cells[r][c].style(Big.findBorder(r,c) + "background-color : rgb(250, 250, 250);" + "color:" + (this.data.pencil[r][c]?"#a08000":"#000000"));
				} else this.cells[r][c].style(Big.findBorder(r,c) + "background-color : rgb(230, 230, 230);");
			}
		}
	}
	,cursor: function(dir,row,col) {
		var _g = this;
		var move = function(go,r,c) {
			if(go) dm_Ui.beep(); else if(_g.data.base[r][c] == -1) Main.sudokuClick(r,c); else _g.cursor(dir,r,c);
		};
		switch(dir[1]) {
		case 0:
			move(row == 0,row - 1,col);
			break;
		case 1:
			move(row == 8,row + 1,col);
			break;
		case 2:
			move(col == 0,row,col - 1);
			break;
		case 3:
			move(col == 8,row,col + 1);
			break;
		}
	}
	,set: function(row,col,n) {
		Model.last.pencil[row][col] = Model.data.pencil;
		this.data.user[row][col] = n;
		Main.sudokuClick(row,col);
	}
	,clear: function() {
		var _g = 0;
		while(_g < 9) {
			var r = _g++;
			var _g1 = 0;
			while(_g1 < 9) {
				var c = _g1++;
				var del;
				del = this.data.base[r][c] == -1 && (Model.data.pencil?Model.last.pencil[r][c]:true);
				if(del) {
					this.data.user[r][c] = -1;
					this.cells[r][c].html("&nbsp;");
				}
			}
		}
	}
	,markErrors: function() {
		var _g = this;
		dm_It.from(new Sudoku(this.data.user).errors()).each(function(coor) {
			var r = coor[0];
			var c = coor[1];
			_g.cells[r][c].style(Big.findBorder(r,c) + "background-color : rgb(250, 250, 250);" + "color: rgb(120, 0, 0);");
		});
	}
	,markSolved: function() {
		var _g = 0;
		while(_g < 9) {
			var r = _g++;
			var _g1 = 0;
			while(_g1 < 9) {
				var c = _g1++;
				if(this.data.base[r][c] != -1) this.cells[r][c].style(Big.findBorder(r,c) + "background-color : rgb(230, 230, 230);"); else {
					if(this.data.user[r][c] == this.data.sudoku[r][c]) this.cells[r][c].style(Big.findBorder(r,c) + "background-color : rgb(250, 250, 250);"); else this.cells[r][c].style(Big.findBorder(r,c) + "background-color : rgb(250, 250, 250);" + "color: rgb(120, 0, 0);");
					this.cells[r][c].html(Std.string(this.data.sudoku[r][c]));
				}
			}
		}
	}
	,__class__: Big
};
var Dom = function() { };
Dom.__name__ = true;
Dom.show = function(o) {
	dm_Ui.QQ("body").next().removeAll().add(dm_Ui.Q("div").add(o).add(dm_Ui.Q("p").html("&nbsp;")).add(dm_Ui.Q("hr")).add(dm_Ui.Q("table").klass("main").add(dm_Ui.Q("tr").add(dm_Ui.Q("td").add(dm_Ui.Q("a").att("href","../doc/about.html").att("target","blank").html("<small>Help & Credits</small>"))).add(dm_Ui.Q("td").style("text-align: right;font-size: 10px;" + "color:#808080;font-size:x-small;").html("- © ºDeme. DmSudoku (" + Main.version + ") -")))));
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var I18nData = function() { };
I18nData.__name__ = true;
I18nData.en = function() {
	return ["<br>View-mkEndMenu.%0%1%2<br> = <br>Congratulations!!!<br>Sudoku successfully solved in<br>%0h, %1m and %2s.<br><br>","Accept = Accept","Cancel = Cancel","Change language = Change language","Change to pen = Change to pen","Change to pencil = Change to pencil","Clear all = Clear all","Clear all.\nContinue? = Clear all.\nContinue?","Clear pencil = Clear pencil","Clear pencil.\nContinue? = Clear pencil.\nContinue?","Continue = Continue","Copy = Copy","Copy external sudoku = Copy an external sudoku","Down level = Down level","New = New","New sudoku = New sudoku","Open = Load","Open sudoku = Load sudoku","Save = Save","Search mistakes = Search mistakes","Solve = Solve","Solve sudoku.\nContinue? = Solve sudoku.\nContinue?","Solved sudoku = Solved sudoku","Sudoku has %0 numbers and the (minimun-maximun) allowed is (25-50) = Sudoku has %0 numbers and the (minimun-maximun) allowed is (25-50)","Sudoku has been saved = Sudoku has been saved","Sudoku has more than one solution.\nContinue? = Sudoku has more than one solution.\nContinue?","Sudoku has no sulution = Sudoku has no sulution","There are %0 errors in data = There are %0 errors in data","Up level = Up level","Without records = Without records",""];
};
I18nData.es = function() {
	return ["<br>View-mkEndMenu.%0%1%2<br> = <br>¡¡¡Felicidades!!!<br>Sudoku correctamente resuelto en<br>%0h, %1m y %2s.<br><br>","Accept = Aceptar","Cancel = Cancelar","Change language = Cambiar el lenguaje","Change to pen = Cambiar a bolígrafo","Change to pencil = Cambiar a lápiz","Clear all = Limpiar todo","Clear all.\nContinue? = Limplar todo.\n¿Continuar?","Clear pencil = Borrar el lapiz","Clear pencil.\nContinue? = Borrar el lápiz.\n¿Continuar?","Continue = Continuar","Copy = Copiar","Copy external sudoku = Copiar un sudoku externo","Down level = Bajar un nivel","New = Nuevo","New sudoku = Nuevo sudoku","Open = Recuperar","Open sudoku = Recuperar sudoku","Save = Guardar","Search mistakes = Buscar errores","Solve = Soluccionar","Solve sudoku.\nContinue? = Soluccionar el sudoku.\n¿Continuar?","Solved sudoku = Sudoky resuelto","Sudoku has %0 numbers and the (minimun-maximun) allowed is (25-50) = El sudoku tiene %0 números y el (mínimo-máximo) permitido es (25-50)","Sudoku has been saved = El sudoku ha sido guardado","Sudoku has more than one solution.\nContinue? = El sudoku tiene más de una solucción.\n¿Continuar?","Sudoku has no sulution = El sudoku no tiene solución","There are %0 errors in data = Hay %0 errores en los datos","Up level = Subir un nivel","Without records = Sin registros",""];
};
var Little = function(data) {
	var board = data.user;
	this.element = dm_Ui.Q("table").klass("sudoku").addIt(dm_It.range(9).map(function(row) {
		return dm_Ui.Q("tr").addIt(dm_It.range(9).map(function(col) {
			var n = board[row][col];
			return dm_Ui.Q("td").klass("lsudoku").style(Little.findBorder(row,col)).html(n == -1?"&nbsp;":n == null?"null":"" + n);
		}));
	}));
};
Little.__name__ = true;
Little.findBorder = function(row,col) {
	var top = "border-top : 2px solid rgb(110,130,150);";
	var bottom = "border-bottom : 2px solid rgb(110,130,150);";
	var left = "border-left : 2px solid rgb(110,130,150);";
	var right = "border-right : 2px solid rgb(110,130,150);";
	var row3 = row - Math.floor(row / 3) * 3;
	var col3 = col - Math.floor(col / 3) * 3;
	if(row3 == 0) {
		if(col3 == 0) return top + left; else if(col == 8) return top + right; else return top;
	} else if(row == 8) {
		if(col3 == 0) return bottom + left; else if(col == 8) return bottom + right; else return bottom;
	} else if(col3 == 0) return left; else if(col == 8) return right; else return "";
};
Little.prototype = {
	__class__: Little
};
var dm_Ui = function() { };
dm_Ui.__name__ = true;
dm_Ui.Q = function(str,el) {
	if(str == null) return new dm_DomObject(el);
	var _g = str.charAt(0);
	switch(_g) {
	case "#":
		return new dm_DomObject(window.document.getElementById(str.substring(1)));
	case "@":
		return new dm_DomObject(window.document.querySelector(str.substring(1)));
	default:
		return new dm_DomObject(window.document.createElement(str));
	}
};
dm_Ui.QQ = function(str) {
	var toIt = function(list) {
		var c = 0;
		var len = list.length;
		return new dm_It(function() {
			return c < len;
		},function() {
			return new dm_DomObject(list.item(c++));
		});
	};
	if(str == "") return toIt(window.document.getElementsByTagName("*"));
	if(str.charAt(0) == "%") return toIt(window.document.getElementsByName(str.substring(1)));
	if(str.charAt(0) == ".") return toIt(window.document.getElementsByClassName(str.substring(1)));
	return toIt(window.document.getElementsByTagName(str));
};
dm_Ui.alert = function(msg) {
	alert(Std.string(msg));
};
dm_Ui.confirm = function(msg) {
	return confirm(Std.string(msg));
};
dm_Ui.img = function(name) {
	return dm_Ui.Q("img").att("src","img/" + name + ".png");
};
dm_Ui.link = function(f) {
	return dm_Ui.Q("span").att("style","cursor:pointer").on(dm_ActionType.CLICK,f);
};
dm_Ui.beep = function() {
	var au = new AudioContext();
	var o = au.createOscillator();
	o.frequency.value = 990;
	o.connect(au.destination);
	o.start(0);
	haxe_Timer.delay(function() {
		o.stop(0);
	},80);
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	if(typeof window != "undefined") return window[name]; else return global[name];
};
var Main = function() { };
Main.__name__ = true;
Main.saveData = function() {
	dm_Store.put(Main.dataId,dm_Json.from(Model.data));
};
Main.saveLast = function() {
	dm_Store.put(Main.lastId,dm_Json.from(Model.last));
};
Main.main = function() {
	var storeVersion = dm_Store.get(Main.versionId);
	var versionOk = true;
	if(storeVersion == null || storeVersion != Main.version) {
		dm_Store.put(Main.versionId,Main.version);
		versionOk = false;
	}
	var jdata = dm_Store.get(Main.dataId);
	if(!versionOk || jdata == null) {
		Model.data = { cache : [null,null,null,null,null], memo : [], lang : "es", level : 5, pencil : false};
		Main.saveData();
	} else Model.data = dm_Json.to(jdata);
	var jlast = dm_Store.get(Main.lastId);
	if(!versionOk || jlast == null) {
		var sudoku = [[2,8,5,6,3,9,1,4,7],[9,1,7,4,2,8,6,3,5],[3,6,4,5,1,7,8,2,9],[8,9,6,2,4,5,3,7,1],[1,4,2,7,8,3,9,5,6],[5,7,3,1,9,6,2,8,4],[4,3,8,9,7,1,5,6,2],[6,2,9,8,5,4,7,1,3],[7,5,1,3,6,2,4,9,8]];
		var base = [[-1,-1,-1,-1,3,-1,-1,-1,7],[9,-1,-1,4,-1,-1,6,-1,-1],[-1,-1,-1,-1,-1,7,-1,-1,-1],[8,-1,-1,-1,-1,5,3,-1,1],[1,-1,-1,-1,8,-1,9,5,-1],[5,7,-1,1,-1,-1,-1,8,-1],[-1,3,-1,9,-1,-1,5,6,-1],[6,-1,9,8,-1,-1,-1,-1,3],[-1,5,1,3,-1,2,-1,-1,-1]];
		Model.last = Sudoku.mkDef({ sudoku : sudoku, base : base});
		Main.saveLast();
	} else Model.last = dm_Json.to(jlast);
	var dic;
	if(Model.data.lang == "es") dic = I18nData.es(); else dic = I18nData.en();
	dm_I18n.init(dic);
	View.newLink.removeAll().add(dm_Ui.link(Main.newSudoku).add(View.imgMenu("filenew",dm_I18n._("New"))));
	View.dom();
	Main.sudokuMaker = new dm_Worker("sudokuMaker.js");
	Main.sudokuMaker.onResponse(function(e) {
		var rp = e.data;
		if(rp.isCache) {
			Model.data.cache[rp.level - 1] = rp.sudokuData;
			Main.saveData();
			View.newLink.removeAll().add(dm_Ui.link(Main.newSudoku).add(View.imgMenu("filenew",dm_I18n._("New"))));
		} else {
			Model.last = rp.sudokuData;
			Main.saveLast();
			View.mainShow();
		}
	});
	window.document.addEventListener("keydown",function(event) {
		var sData;
		var _g = Model.page;
		switch(_g[1]) {
		case 0:
			sData = Model.last;
			break;
		case 1:
			sData = Model.copy;
			break;
		default:
			sData = null;
		}
		if(sData != null) {
			var board = View.board;
			var _g1 = event.keyCode;
			var k = _g1;
			var k1 = _g1;
			switch(_g1) {
			case 37:
				board.cursor(CursorMove.CursorLeft,sData.cell[0],sData.cell[1]);
				break;
			case 38:
				board.cursor(CursorMove.CursorUp,sData.cell[0],sData.cell[1]);
				break;
			case 39:
				board.cursor(CursorMove.CursorRight,sData.cell[0],sData.cell[1]);
				break;
			case 40:
				board.cursor(CursorMove.CursorDown,sData.cell[0],sData.cell[1]);
				break;
			case 8:case 32:case 46:
				board.set(sData.cell[0],sData.cell[1],-1);
				break;
			default:
				if(k > 96 && k < 106) board.set(sData.cell[0],sData.cell[1],k - 96); else if(k1 > 48 && k1 < 58) board.set(sData.cell[0],sData.cell[1],k1 - 48); else return;
			}
			event.preventDefault();
		}
	});
	View.mainShow();
	var timer = new haxe_Timer(1000);
	timer.run = function() {
		++Model.last.time;
		Main.saveLast();
		View.timeCell.html(Model.formatScs(Model.last.time));
	};
	var cache = Model.data.cache;
	var _g2 = 0;
	while(_g2 < 5) {
		var i = _g2++;
		if(cache[i] == null) {
			if(i == Model.data.level - 1) View.newLink.removeAll().add(View.imgMenu("filenew",dm_I18n._("New"),true));
			var rq = { isCache : true, level : i + 1};
			Main.sudokuMaker.sendRequest(rq);
		}
	}
};
Main.newSudoku = function(ev) {
	var cache = Model.data.cache[Model.data.level - 1];
	if(cache == null) {
		var rq = { isCache : false, level : Model.data.level};
		Main.sudokuMaker.sendRequest(rq);
		View.newShow();
	} else {
		Model.last = Sudoku.mkDef(cache);
		Main.saveLast();
		Model.data.cache[Model.data.level - 1] = null;
		Main.saveData();
		Main.main();
	}
};
Main.copySudoku = function(ev) {
	Model.copy = { id : 0, date : [], time : 0, cell : [0,0], sudoku : Sudoku.mkEmpty().board, base : Sudoku.mkEmpty().board, user : Sudoku.mkEmpty().board, pencil : dm_It.range(9).map(function(_1) {
		return dm_It.range(9).map(function(_11) {
			return false;
		}).to();
	}).to()};
	View.copyShow();
};
Main.readSudoku = function(ev) {
	View.loadShow();
};
Main.saveSudoku = function(ev) {
	var data = dm_Json.to(dm_Json.from(Model.last));
	Model.data.memo = dm_It.from(Model.data.memo).filter(function(_1) {
		return data.id != _1.id;
	}).add0(data).take(9).to();
	Main.saveData();
	Main.alert(dm_I18n._("Sudoku has been saved"));
};
Main.upLevel = function(ev) {
	if(Model.data.level < 5) ++Model.data.level;
	Main.saveData();
	View.mkMainMenu();
};
Main.downLevel = function(ev) {
	if(Model.data.level > 1) --Model.data.level;
	Main.saveData();
	View.mkMainMenu();
};
Main.changeDevice = function(ev) {
	Model.data.pencil = !Model.data.pencil;
	Main.saveData();
	View.mkMainMenu();
};
Main.clearSudoku = function(ev) {
	var tx;
	if(Model.data.pencil) tx = dm_I18n._("Clear pencil.\nContinue?"); else tx = dm_I18n._("Clear all.\nContinue?");
	if(dm_Ui.confirm(tx)) {
		View.board.clear();
		Main.saveLast();
	}
};
Main.helpSudoku = function(ev) {
	if(Model.correction) {
		Model.correction = false;
		View.mainShow();
	} else {
		Model.correction = true;
		View.board.markErrors();
	}
};
Main.solveSudoku = function(ev) {
	if(dm_Ui.confirm(dm_I18n._("Solve sudoku.\nContinue?"))) View.solveShow();
};
Main.changeLang = function(ev) {
	if(Model.data.lang == "en") Model.data.lang = "es"; else Model.data.lang = "en";
	Main.saveData();
	Main.main();
};
Main.copyAccept = function(ev) {
	var s = Model.copy.user;
	var sudoku = new Sudoku(s);
	if(sudoku.errors().length > 0) {
		Main.alert(dm_I18n.format(dm_I18n._("There are %0 errors in data"),[Std.string(sudoku.errors().length)]));
		View.board.markErrors();
		return;
	}
	var cells = sudoku.cellsSet();
	if(cells < 25 || cells > 50) {
		Main.alert(dm_I18n.format(dm_I18n._("Sudoku has %0 numbers and the (minimun-maximun) allowed is (25-50)"),[Std.string(sudoku.cellsSet())]));
		return;
	}
	var sols = sudoku.solutions();
	if(sols == 0) {
		Main.alert(dm_I18n._("Sudoku has no sulution"));
		return;
	}
	if(sols == 2) {
		if(!dm_Ui.confirm(dm_I18n._("Sudoku has more than one solution.\nContinue?"))) return;
	}
	var ix = 0;
	while(s[0][ix] != -1) ++ix;
	Model.last = { id : new Date().getTime(), date : dm_DateDm.fromDate(new Date()).serialize(), time : 0, cell : [0,ix], sudoku : sudoku.solve().board, base : dm_It.from(s).map(function(_1) {
		return dm_It.from(_1).map(function(_11) {
			return _11;
		}).to();
	}).to(), user : s, pencil : dm_It.range(9).map(function(_12) {
		return dm_It.range(9).map(function(_13) {
			return false;
		}).to();
	}).to()};
	Main.saveLast();
	View.mainShow();
};
Main.copyCancel = function(ev) {
	View.mainShow();
};
Main.loadSelect = function(data) {
	Model.last = dm_Json.to(dm_Json.from(data));
	Model.data.memo = dm_It.from(Model.data.memo).filter(function(_1) {
		return _1.id != data.id;
	}).add0(data).to();
	Main.saveLast();
	Main.saveData();
	View.mainShow();
};
Main.loadCancel = function(ev) {
	View.mainShow();
};
Main.solveAccept = function(ev) {
	View.mainShow();
};
Main.sudokuClick = function(row,col) {
	var _g = Model.page;
	switch(_g[1]) {
	case 0:
		Model.last.cell = [row,col];
		Main.saveLast();
		View.mainShow();
		break;
	case 1:
		Model.copy.cell = [row,col];
		View.copyShow();
		break;
	default:
	}
};
Main.controlEnd = function() {
	var finished = dm_It.zip(dm_It.from(Model.last.sudoku),dm_It.from(Model.last.user)).all(function(_1) {
		return dm_It.from(_1._1).eq(dm_It.from(_1._2));
	});
	if(finished) View.endShow();
};
Main.typeNumber = function(n) {
	var sData;
	var _g = Model.page;
	switch(_g[1]) {
	case 0:
		sData = Model.last;
		break;
	case 1:
		sData = Model.copy;
		break;
	default:
		sData = null;
	}
	if(sData != null) {
		var board = View.board;
		switch(n) {
		case 0:
			board.set(sData.cell[0],sData.cell[1],-1);
			break;
		default:
			board.set(sData.cell[0],sData.cell[1],n);
		}
	}
};
Math.__name__ = true;
var PageType = { __ename__ : true, __constructs__ : ["MainPage","CopyPage","LoadPage","SolvePage","WinPage"] };
PageType.MainPage = ["MainPage",0];
PageType.MainPage.toString = $estr;
PageType.MainPage.__enum__ = PageType;
PageType.CopyPage = ["CopyPage",1];
PageType.CopyPage.toString = $estr;
PageType.CopyPage.__enum__ = PageType;
PageType.LoadPage = ["LoadPage",2];
PageType.LoadPage.toString = $estr;
PageType.LoadPage.__enum__ = PageType;
PageType.SolvePage = ["SolvePage",3];
PageType.SolvePage.toString = $estr;
PageType.SolvePage.__enum__ = PageType;
PageType.WinPage = ["WinPage",4];
PageType.WinPage.toString = $estr;
PageType.WinPage.__enum__ = PageType;
var Model = function() { };
Model.__name__ = true;
Model.linearGame = function(backward,next,forward) {
	while(true) if(next()) {
		if(!forward()) return true;
	} else if(!backward()) return false;
};
Model.linearGameSingle = function(backward,next,forward) {
	var r = 0;
	while(true) if(next()) {
		if(!forward()) {
			++r;
			if(r > 1 || !backward()) return r;
		}
	} else if(!backward()) return r;
};
Model.mkDate = function(lang,d) {
	if(lang == "es") return d.format("%D-%b-%Y");
	var months = dm_DateDm.months;
	dm_DateDm.months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var r = d.format("%D-%b-%Y");
	dm_DateDm.months = months;
	return r;
};
Model.formatScs = function(s) {
	var arr = Model.convertScs(s);
	return arr[0] + ":" + arr[1] + ":" + arr[2];
};
Model.convertScs = function(s) {
	var n2 = function(n) {
		var r;
		if(n == null) r = "null"; else r = "" + n;
		if(r.length < 2) return "0" + r;
		return r;
	};
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	return [h == null?"null":"" + h,n2(m - h * 60),n2(s - m * 60)];
};
var CursorMove = { __ename__ : true, __constructs__ : ["CursorUp","CursorDown","CursorLeft","CursorRight"] };
CursorMove.CursorUp = ["CursorUp",0];
CursorMove.CursorUp.toString = $estr;
CursorMove.CursorUp.__enum__ = CursorMove;
CursorMove.CursorDown = ["CursorDown",1];
CursorMove.CursorDown.toString = $estr;
CursorMove.CursorDown.__enum__ = CursorMove;
CursorMove.CursorLeft = ["CursorLeft",2];
CursorMove.CursorLeft.toString = $estr;
CursorMove.CursorLeft.__enum__ = CursorMove;
CursorMove.CursorRight = ["CursorRight",3];
CursorMove.CursorRight.toString = $estr;
CursorMove.CursorRight.__enum__ = CursorMove;
var BiCounter = function(rowSize,colSize) {
	this.rowSize = rowSize;
	this.colSize = colSize;
	this.rowLimit = rowSize - 1;
	this.colLimit = colSize - 1;
	this.row = 0;
	this.col = 0;
};
BiCounter.__name__ = true;
BiCounter.prototype = {
	inc: function() {
		++this.col;
		if(this.col == this.colSize) {
			if(this.row == this.rowLimit) return false;
			this.col = 0;
			++this.row;
		}
		return true;
	}
	,dec: function() {
		--this.col;
		if(this.col == -1) {
			if(this.row == 0) return false;
			this.col = this.colLimit;
			--this.row;
		}
		return true;
	}
	,__class__: BiCounter
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var Sudoku = function(board) {
	this.board = board;
};
Sudoku.__name__ = true;
Sudoku.mkEmpty = function() {
	return new Sudoku(dm_It.range(9).map(function(_1) {
		return dm_It.range(9).map(function(_11) {
			return -1;
		}).to();
	}).to());
};
Sudoku.mkDef = function(def) {
	var user = dm_It.from(def.base).map(function(_1) {
		return dm_It.from(_1).to();
	}).to();
	var ix = 0;
	while(user[0][ix] != -1) ++ix;
	return { id : new Date().getTime(), date : dm_DateDm.fromDate(new Date()).serialize(), time : 0, cell : [0,ix], sudoku : def.sudoku, base : def.base, user : user, pencil : dm_It.range(9).map(function(_11) {
		return dm_It.range(9).map(function(_12) {
			return false;
		}).to();
	}).to()};
};
Sudoku.prototype = {
	isRightValue: function(row,col,value) {
		var row2 = Math.floor(row / 3) * 3;
		var col2 = Math.floor(col / 3) * 3;
		var _g = 0;
		while(_g < 9) {
			var r = _g++;
			if(r != row && this.board[r][col] == value) return false;
		}
		var _g1 = 0;
		while(_g1 < 9) {
			var c = _g1++;
			if(c != col && this.board[row][c] == value) return false;
		}
		var _g11 = row2;
		var _g2 = row2 + 3;
		while(_g11 < _g2) {
			var r1 = _g11++;
			var _g3 = col2;
			var _g21 = col2 + 3;
			while(_g3 < _g21) {
				var c1 = _g3++;
				if((r1 != row || c1 != col) && this.board[r1][c1] == value) return false;
			}
		}
		return true;
	}
	,solve: function() {
		var _g = this;
		var c = new BiCounter(9,9);
		var su = Sudoku.mkEmpty();
		var boxes = dm_It.range(9).map(function(row) {
			return dm_It.range(9).map(function(col) {
				var n = _g.board[row][col];
				if(n == -1) return dm_It.from([1,2,3,4,5,6,7,8,9]); else {
					su.board[row][col] = n;
					return dm_It.from([n]);
				}
			}).to();
		}).to();
		var backward = function() {
			var n1 = _g.board[c.row][c.col];
			su.board[c.row][c.col] = n1;
			if(n1 == -1) boxes[c.row][c.col] = dm_It.from([1,2,3,4,5,6,7,8,9]); else boxes[c.row][c.col] = dm_It.from([n1]);
			return c.dec();
		};
		var next = function() {
			var it = boxes[c.row][c.col];
			while(it.hasNext()) {
				var nx = it.next();
				var r = su.isRightValue(c.row,c.col,nx);
				if(r) {
					su.board[c.row][c.col] = nx;
					return true;
				}
			}
			return false;
		};
		var forward = function() {
			return c.inc();
		};
		if(Model.linearGame(backward,next,forward)) return su;
		return null;
	}
	,solutions: function() {
		var _g = this;
		var c = new BiCounter(9,9);
		var su = Sudoku.mkEmpty();
		var boxes = dm_It.range(9).map(function(row) {
			return dm_It.range(9).map(function(col) {
				var n = _g.board[row][col];
				if(n == -1) return dm_It.from([1,2,3,4,5,6,7,8,9]); else {
					su.board[row][col] = n;
					return dm_It.from([n]);
				}
			}).to();
		}).to();
		var backward = function() {
			var n1 = _g.board[c.row][c.col];
			su.board[c.row][c.col] = n1;
			if(n1 == -1) boxes[c.row][c.col] = dm_It.from([1,2,3,4,5,6,7,8,9]); else boxes[c.row][c.col] = dm_It.from([n1]);
			return c.dec();
		};
		var next = function() {
			var it = boxes[c.row][c.col];
			while(it.hasNext()) {
				var nx = it.next();
				var r = su.isRightValue(c.row,c.col,nx);
				if(r) {
					su.board[c.row][c.col] = nx;
					return true;
				}
			}
			return false;
		};
		var forward = function() {
			return c.inc();
		};
		return Model.linearGameSingle(backward,next,forward);
	}
	,errors: function() {
		var rs = [];
		var _g = 0;
		while(_g < 9) {
			var r = _g++;
			var _g1 = 0;
			while(_g1 < 9) {
				var c = _g1++;
				var v = this.board[r][c];
				if(v != -1 && !this.isRightValue(r,c,v)) rs.push([r,c]);
			}
		}
		return rs;
	}
	,cellsSet: function() {
		return dm_It.from(this.board).reduce(0,function(seed,row) {
			return seed + dm_It.from(row).reduce(0,function(seed1,v) {
				if(v == -1) return seed1; else return seed1 + 1;
			});
		});
	}
	,__class__: Sudoku
};
var dm_DomObject = function(e) {
	this.e = e;
};
dm_DomObject.__name__ = true;
dm_DomObject.prototype = {
	html: function(tx) {
		this.e.innerHTML = tx;
		return this;
	}
	,text: function(tx) {
		this.e.textContent = tx;
		return this;
	}
	,klass: function(tx) {
		this.e.className = tx;
		return this;
	}
	,getStyle: function() {
		return this.e.getAttribute("style");
	}
	,style: function(tx) {
		this.e.setAttribute("style",tx);
		return this;
	}
	,addStyle: function(tx) {
		this.e.setAttribute("style",this.getStyle() + ";" + tx);
		return this;
	}
	,att: function(key,value) {
		this.e.setAttribute(key,value);
		return this;
	}
	,add: function(o) {
		this.e.appendChild(o.e);
		return this;
	}
	,addIt: function(obs) {
		var _g = this;
		obs.each(function(ob) {
			_g.e.appendChild(ob.e);
		});
		return this;
	}
	,removeAll: function() {
		this.e.innerHTML = "";
		return this;
	}
	,on: function(type,action) {
		var act;
		switch(type[1]) {
		case 0:
			act = "blur";
			break;
		case 1:
			act = "change";
			break;
		case 2:
			act = "click";
			break;
		case 3:
			act = "dblclick";
			break;
		case 4:
			act = "focus";
			break;
		case 5:
			act = "keydown";
			break;
		case 6:
			act = "keypress";
			break;
		case 7:
			act = "keyup";
			break;
		case 8:
			act = "load";
			break;
		case 9:
			act = "mousedown";
			break;
		case 10:
			act = "mousemove";
			break;
		case 11:
			act = "mouseout";
			break;
		case 12:
			act = "mouseover";
			break;
		case 13:
			act = "mouseup";
			break;
		case 14:
			act = "mouseweel";
			break;
		case 15:
			act = "select";
			break;
		case 16:
			act = "selectstart";
			break;
		case 17:
			act = "submit";
			break;
		}
		this.e.addEventListener(act,action,false);
		return this;
	}
	,__class__: dm_DomObject
};
var dm_Tracker = function(dir,imgs) {
	if(dir == null) dir = "img";
	dir = dir + "/";
	this.imgs = dm_It.from(imgs).map(function(name) {
		var ix = name.indexOf(".");
		if(ix == -1) return { id : name, img : new dm_DomObject(new Image()).att("src",dir + name + ".png")}; else return { id : name.substring(0,ix), img : new dm_DomObject(new Image()).att("src",dir + name)};
	}).to();
};
dm_Tracker.__name__ = true;
dm_Tracker.prototype = {
	get: function(id) {
		var r = dm_It.from(this.imgs).find(function(_1) {
			return _1.id == id;
		});
		if(r == null) return null; else return r.img;
	}
	,grey: function(id) {
		var r = dm_It.from(this.imgs).find(function(_1) {
			return _1.id == id;
		});
		if(r == null) return null; else return r.img.style("filter: grayscale(100%)");
	}
	,__class__: dm_Tracker
};
var dm_It = function(hasNext,next) {
	this.fhasNext = hasNext;
	this.fnext = next;
};
dm_It.__name__ = true;
dm_It.empty = function() {
	return new dm_It(function() {
		return false;
	},function() {
		return null;
	});
};
dm_It.from = function(it) {
	return dm_It.fromIterator($iterator(it)());
};
dm_It.fromIterator = function(it) {
	return new dm_It($bind(it,it.hasNext),$bind(it,it.next));
};
dm_It.range = function(begin,end,step) {
	if(end == null) {
		var count1 = 0;
		return new dm_It(function() {
			return count1 < begin;
		},function() {
			return count1++;
		});
	}
	if(step == null) {
		var count2 = begin;
		return new dm_It(function() {
			return count2 < end;
		},function() {
			return count2++;
		});
	}
	if(step == 0) return dm_It.empty();
	var count = begin;
	return new dm_It(function() {
		if(step > 0) return count < end; else return count > end;
	},function() {
		var r = count;
		count += step;
		return r;
	});
};
dm_It.zip = function(it1,it2) {
	return new dm_It(function() {
		return it1.hasNext() && it2.hasNext();
	},function() {
		return new dm_Tp2(it1.next(),it2.next());
	});
};
dm_It.prototype = {
	add0: function(element) {
		var _g = this;
		var isNotAdded = true;
		return new dm_It(function() {
			return _g.hasNext() || isNotAdded;
		},function() {
			if(isNotAdded) {
				isNotAdded = false;
				return element;
			}
			return _g.next();
		});
	}
	,each: function(f) {
		while(this.fhasNext()) f(this.fnext());
	}
	,eq: function(it) {
		var r = true;
		this.each(function(e) {
			if(!it.hasNext() || e != it.next()) {
				r = false;
				return;
			}
		});
		if(it.hasNext()) return false;
		return r;
	}
	,filter: function(f) {
		var _g = this;
		var lastValue;
		var nx = true;
		var nextValue = function() {
			while(true) if(_g.hasNext()) {
				lastValue = _g.next();
				if(f(lastValue)) break;
			} else {
				nx = false;
				break;
			}
		};
		nextValue();
		return new dm_It(function() {
			return nx;
		},function() {
			var r = lastValue;
			nextValue();
			return r;
		});
	}
	,find: function(f) {
		var r;
		while(this.hasNext()) {
			r = this.next();
			if(f(r)) return r;
		}
		return null;
	}
	,all: function(f) {
		while(this.hasNext()) if(!f(this.next())) return false;
		return true;
	}
	,hasNext: function() {
		return this.fhasNext();
	}
	,map: function(f) {
		var _g = this;
		return new dm_It(function() {
			return _g.hasNext();
		},function() {
			return f(_g.next());
		});
	}
	,next: function() {
		return this.fnext();
	}
	,reduce: function(seed,f) {
		while(this.hasNext()) seed = f(seed,this.next());
		return seed;
	}
	,take: function(n) {
		var _g = this;
		return new dm_It(function() {
			return n > 0 && _g.hasNext();
		},function() {
			--n;
			return _g.next();
		});
	}
	,to: function() {
		return this.reduce([],function(r,e) {
			r.push(e);
			return r;
		});
	}
	,__class__: dm_It
};
var View = function() { };
View.__name__ = true;
View.imgMenu = function(img,tooltip,isGrey) {
	if(isGrey == null) isGrey = false;
	var r;
	if(isGrey) r = View.tracker.grey(img).addStyle("vertical-align:bottom;"); else r = View.tracker.get(img).style("vertical-align:bottom;");
	if(tooltip != "") r.att("title",tooltip);
	return r;
};
View.mkMainMenu = function() {
	View.menu.removeAll().add(dm_Ui.Q("table").att("align","center").add(dm_Ui.Q("tr").add(dm_Ui.Q("td").klass("menu").add(View.newLink).add(dm_Ui.link(Main.copySudoku).add(View.imgMenu("edit-copy",dm_I18n._("Copy")))).add(dm_Ui.link(Main.readSudoku).add(View.imgMenu("fileopen",dm_I18n._("Open")))).add(dm_Ui.link(Main.saveSudoku).add(View.imgMenu("filesave",dm_I18n._("Save"))))).add(dm_Ui.Q("td").klass("menu").style("vertical-align:middle").add(dm_Ui.link(Main.changeLang).add(View.imgMenu("level" + Model.data.lang,dm_I18n._("Change language")))).add(dm_Ui.link(Main.downLevel).add(View.imgMenu("gtk-remove",dm_I18n._("Down level"),Model.data.level == 1))).add(View.imgMenu(Std.string(Model.data.level),"")).add(dm_Ui.link(Main.upLevel).add(View.imgMenu("gtk-add",dm_I18n._("Up level"),Model.data.level == 5)))).add(dm_Ui.Q("td").klass("menu").add(dm_Ui.link(Main.changeDevice).add(Model.data.pencil?View.imgMenu("pencil",dm_I18n._("Change to pen")):View.imgMenu("pen",dm_I18n._("Change to pencil")))).add(dm_Ui.link(Main.clearSudoku).add(Model.data.pencil?View.imgMenu("gtk-clear",dm_I18n._("Clear pencil"),true):View.imgMenu("gtk-clear",dm_I18n._("Clear all")))).add(dm_Ui.link(Main.helpSudoku).add(View.imgMenu("emblem-important",dm_I18n._("Search mistakes")))).add(dm_Ui.link(Main.solveSudoku).add(View.imgMenu("gtk-execute",dm_I18n._("Solve")))))));
};
View.mkNewMenu = function() {
	View.menu.removeAll().add(dm_Ui.Q("table").att("align","center").add(dm_Ui.Q("tr").add(dm_Ui.Q("td").klass("menu").add(View.imgMenu("filenew","").style("vertical-align:middle")).add(dm_Ui.Q("span").klass("menu").html(dm_I18n._("New sudoku"))).add(dm_Ui.Q("span").style("padding-right:5px;")))));
};
View.mkCopyMenu = function() {
	View.menu.removeAll().add(dm_Ui.Q("table").att("align","center").add(dm_Ui.Q("tr").add(dm_Ui.Q("td").klass("menu").add(dm_Ui.img("edit-copy").style("vertical-align:middle")).add(dm_Ui.Q("span").klass("menu").html(dm_I18n._("Copy external sudoku"))).add(dm_Ui.Q("button").text(dm_I18n._("Accept")).on(dm_ActionType.CLICK,Main.copyAccept)).add(dm_Ui.Q("span").klass("menu").html("")).add(dm_Ui.Q("button").text(dm_I18n._("Cancel")).on(dm_ActionType.CLICK,Main.copyCancel)).add(dm_Ui.Q("span").style("padding-right:5px;")))));
};
View.mkLoadMenu = function() {
	View.menu.removeAll().add(dm_Ui.Q("table").att("align","center").add(dm_Ui.Q("tr").add(dm_Ui.Q("td").klass("menu").add(dm_Ui.img("fileopen").style("vertical-align:middle")).add(dm_Ui.Q("span").klass("menu").html(dm_I18n._("Open sudoku"))).add(dm_Ui.Q("button").text(dm_I18n._("Cancel")).on(dm_ActionType.CLICK,Main.loadCancel)).add(dm_Ui.Q("span").style("padding-right:5px;")))));
};
View.mkSolveMenu = function() {
	View.menu.removeAll().add(dm_Ui.Q("table").att("align","center").add(dm_Ui.Q("tr").add(dm_Ui.Q("td").klass("menu").add(dm_Ui.img("gtk-execute").style("vertical-align:middle")).add(dm_Ui.Q("span").klass("menu").html(dm_I18n._("Solved sudoku"))).add(dm_Ui.Q("button").text(dm_I18n._("Accept")).on(dm_ActionType.CLICK,Main.solveAccept)).add(dm_Ui.Q("span").style("padding-right:5px;")))));
};
View.mkEndMenu = function() {
	View.menu.removeAll().add(dm_Ui.Q("table").att("align","center").add(dm_Ui.Q("tr").add(dm_Ui.Q("td").klass("menu").style("white-space: nowrap;padding:10px;").add(dm_Ui.img("win" + dm_Rnd.i(5)).style("vertical-align:middle")).add(dm_Ui.Q("span").klass("menu").html(dm_I18n.format(dm_I18n._("<br>View-mkEndMenu.%0%1%2<br>"),Model.convertScs(Model.last.time)))).add(dm_Ui.Q("button").text(dm_I18n._("Continue")).on(dm_ActionType.CLICK,Main.newSudoku)).add(dm_Ui.Q("span").style("padding-right:5px;")))));
};
View.mkNumberKeys = function() {
	var mkf = function(n) {
		return function(ev) {
			Main.typeNumber(n);
		};
	};
	return dm_Ui.Q("table").att("align","center").add(dm_Ui.Q("tr").addIt(dm_It.range(1,6).map(function(n1) {
		return dm_Ui.Q("td").add(dm_Ui.link(mkf(n1)).add(View.tracker.get("k" + n1).klass("frame")));
	}))).add(dm_Ui.Q("tr").addIt(dm_It.range(6,10).map(function(n2) {
		return dm_Ui.Q("td").add(dm_Ui.link(mkf(n2)).add(View.tracker.get("k" + n2).klass("frame")));
	})).add(dm_Ui.Q("td").add(dm_Ui.link(mkf(0)).add(View.tracker.get("k0").klass("frame")))));
};
View.mkBody = function(o) {
	View.body.removeAll().add(o);
};
View.dom = function() {
	Dom.show(dm_Ui.Q("div").style("text-align:center").add(dm_Ui.Q("p").klass("title").html("DmSudoku")).add(View.menu).add(dm_Ui.Q("p")).add(View.body));
};
View.mainShow = function() {
	Model.page = PageType.MainPage;
	View.board = new Big(Model.last);
	View.board.select(Model.last.cell[0],Model.last.cell[1]);
	View.mkMainMenu();
	View.mkBody(dm_Ui.Q("table").att("align","center").style("border-collapse : collapse;").add(dm_Ui.Q("tr").add(dm_Ui.Q("td").att("colspan",2).add(View.board.element))).add(dm_Ui.Q("tr").add(dm_Ui.Q("td").att("colspan",2).html("<hr>"))).add(dm_Ui.Q("tr").add(dm_Ui.Q("td").klass("lastL").html(Model.mkDate(Model.data.lang,dm_DateDm.restore(Model.last.date)))).add(View.timeCell.html(Model.formatScs(Model.last.time)))).add(dm_Ui.Q("tr").add(dm_Ui.Q("td").att("colspan",2).html("<hr>"))).add(dm_Ui.Q("tr").add(dm_Ui.Q("td").att("colspan",2).add(View.mkNumberKeys()))));
	Main.controlEnd();
};
View.newShow = function() {
	View.mkNewMenu();
	View.mkBody(dm_Ui.Q("table").att("align","center").add(dm_Ui.Q("tr").add(dm_Ui.Q("td").klass("frame").add(View.imgMenu("thinking","")))));
};
View.copyShow = function() {
	Model.page = PageType.CopyPage;
	View.board = new Big(Model.copy);
	View.board.select(Model.copy.cell[0],Model.copy.cell[1]);
	View.mkCopyMenu();
	View.mkBody(dm_Ui.Q("table").att("align","center").style("border-collapse : collapse;").add(dm_Ui.Q("tr").add(dm_Ui.Q("td").add(View.board.element))).add(dm_Ui.Q("tr").add(dm_Ui.Q("td").html("<hr>"))).add(dm_Ui.Q("tr").add(dm_Ui.Q("td").add(View.mkNumberKeys()))));
};
View.loadShow = function() {
	View.mkLoadMenu();
	if(Model.data.memo.length == 0) {
		View.mkBody(dm_Ui.Q("table").att("align","center").add(dm_Ui.Q("tr").add(dm_Ui.Q("td").klass("frame").html(dm_I18n._("Without records")))));
		return;
	}
	var ix = 0;
	View.mkBody(dm_Ui.Q("table").att("align","center").addIt(dm_It.range(3).map(function(i) {
		return dm_Ui.Q("tr").addIt(dm_It.range(3).map(function(i1) {
			var ix2 = ix;
			var data = Model.data.memo[ix++];
			if(data != null) return dm_Ui.Q("td").add(new Little(data).element.on(dm_ActionType.CLICK,function(ev) {
				Main.loadSelect(data);
			})); else return dm_Ui.Q("td");
		}));
	})));
};
View.showBoard = function() {
	View.mkBody(dm_Ui.Q("table").att("align","center").style("border-collapse : collapse;").add(dm_Ui.Q("tr").add(dm_Ui.Q("td").att("colspan",2).add(View.board.element))).add(dm_Ui.Q("tr").add(dm_Ui.Q("td").att("colspan",2).html("<hr>"))).add(dm_Ui.Q("tr").add(dm_Ui.Q("td").klass("lastL").html(Model.mkDate(Model.data.lang,dm_DateDm.restore(Model.last.date)))).add(dm_Ui.Q("td").klass("lastR").html(Model.formatScs(Model.last.time)))));
};
View.solveShow = function() {
	Model.page = PageType.SolvePage;
	View.board = new Big(Model.last);
	View.mkSolveMenu();
	View.showBoard();
	View.board.markSolved();
};
View.endShow = function() {
	View.mkEndMenu();
	View.showBoard();
};
var dm_DateDm = function(day,month,year) {
	this.date = new Date(year,month - 1,day,12,0,0);
};
dm_DateDm.__name__ = true;
dm_DateDm.fromDate = function(date) {
	return new dm_DateDm(date.getDate(),date.getMonth() + 1,date.getFullYear());
};
dm_DateDm.restore = function(serial) {
	return new dm_DateDm(serial[0],serial[1],serial[2]);
};
dm_DateDm.prototype = {
	format: function(template) {
		var r = function(code,value) {
			template = StringTools.replace(template,code,value);
		};
		var d = Std.string(this.date.getDate());
		var dw = this.date.getDay();
		var w = dm_DateDm.week[dw];
		var mn = this.date.getMonth();
		var m = Std.string(mn + 1);
		var ms = dm_DateDm.months[mn];
		var y = "0000" + Std.string(this.date.getFullYear());
		r("%d",d);
		r("%D",d.length == 1?"0" + d:d);
		r("%m",m);
		r("%M",m.length == 1?"0" + m:m);
		r("%y",dm_Str.sub(y,-2));
		r("%Y",dm_Str.sub(y,-4));
		r("%b",ms.substring(0,3));
		r("%B",ms);
		r("%1",dm_DateDm.week1.charAt(dw));
		r("%a",w.substring(0,3));
		r("%A",w);
		r("%%","%");
		return template;
	}
	,serialize: function() {
		return [this.date.getDate(),this.date.getMonth() + 1,this.date.getFullYear()];
	}
	,__class__: dm_DateDm
};
var dm_ActionType = { __ename__ : true, __constructs__ : ["BLUR","CHANGE","CLICK","DBLCLICK","FOCUS","KEYDOWN","KEYPRESS","KEYUP","LOAD","MOUSEDOWN","MOUSEMOVE","MOUSEOUT","MOUSEOVER","MOUSEUP","MOUSEWHEEL","SELECT","SELECTSTART","SUBMIT"] };
dm_ActionType.BLUR = ["BLUR",0];
dm_ActionType.BLUR.toString = $estr;
dm_ActionType.BLUR.__enum__ = dm_ActionType;
dm_ActionType.CHANGE = ["CHANGE",1];
dm_ActionType.CHANGE.toString = $estr;
dm_ActionType.CHANGE.__enum__ = dm_ActionType;
dm_ActionType.CLICK = ["CLICK",2];
dm_ActionType.CLICK.toString = $estr;
dm_ActionType.CLICK.__enum__ = dm_ActionType;
dm_ActionType.DBLCLICK = ["DBLCLICK",3];
dm_ActionType.DBLCLICK.toString = $estr;
dm_ActionType.DBLCLICK.__enum__ = dm_ActionType;
dm_ActionType.FOCUS = ["FOCUS",4];
dm_ActionType.FOCUS.toString = $estr;
dm_ActionType.FOCUS.__enum__ = dm_ActionType;
dm_ActionType.KEYDOWN = ["KEYDOWN",5];
dm_ActionType.KEYDOWN.toString = $estr;
dm_ActionType.KEYDOWN.__enum__ = dm_ActionType;
dm_ActionType.KEYPRESS = ["KEYPRESS",6];
dm_ActionType.KEYPRESS.toString = $estr;
dm_ActionType.KEYPRESS.__enum__ = dm_ActionType;
dm_ActionType.KEYUP = ["KEYUP",7];
dm_ActionType.KEYUP.toString = $estr;
dm_ActionType.KEYUP.__enum__ = dm_ActionType;
dm_ActionType.LOAD = ["LOAD",8];
dm_ActionType.LOAD.toString = $estr;
dm_ActionType.LOAD.__enum__ = dm_ActionType;
dm_ActionType.MOUSEDOWN = ["MOUSEDOWN",9];
dm_ActionType.MOUSEDOWN.toString = $estr;
dm_ActionType.MOUSEDOWN.__enum__ = dm_ActionType;
dm_ActionType.MOUSEMOVE = ["MOUSEMOVE",10];
dm_ActionType.MOUSEMOVE.toString = $estr;
dm_ActionType.MOUSEMOVE.__enum__ = dm_ActionType;
dm_ActionType.MOUSEOUT = ["MOUSEOUT",11];
dm_ActionType.MOUSEOUT.toString = $estr;
dm_ActionType.MOUSEOUT.__enum__ = dm_ActionType;
dm_ActionType.MOUSEOVER = ["MOUSEOVER",12];
dm_ActionType.MOUSEOVER.toString = $estr;
dm_ActionType.MOUSEOVER.__enum__ = dm_ActionType;
dm_ActionType.MOUSEUP = ["MOUSEUP",13];
dm_ActionType.MOUSEUP.toString = $estr;
dm_ActionType.MOUSEUP.__enum__ = dm_ActionType;
dm_ActionType.MOUSEWHEEL = ["MOUSEWHEEL",14];
dm_ActionType.MOUSEWHEEL.toString = $estr;
dm_ActionType.MOUSEWHEEL.__enum__ = dm_ActionType;
dm_ActionType.SELECT = ["SELECT",15];
dm_ActionType.SELECT.toString = $estr;
dm_ActionType.SELECT.__enum__ = dm_ActionType;
dm_ActionType.SELECTSTART = ["SELECTSTART",16];
dm_ActionType.SELECTSTART.toString = $estr;
dm_ActionType.SELECTSTART.__enum__ = dm_ActionType;
dm_ActionType.SUBMIT = ["SUBMIT",17];
dm_ActionType.SUBMIT.toString = $estr;
dm_ActionType.SUBMIT.__enum__ = dm_ActionType;
var dm_I18n = function() { };
dm_I18n.__name__ = true;
dm_I18n.init = function(text) {
	dm_I18n.dic = new haxe_ds_StringMap();
	dm_It.from(text).each(function(l) {
		l = StringTools.ltrim(l);
		if(l == "" || l.charAt(0) == "#") return;
		var ix = l.indexOf("=");
		if(ix == -1) return;
		var key = StringTools.rtrim(l.substring(0,ix));
		var value = StringTools.ltrim(l.substring(ix + 1));
		dm_I18n.dic.set(key,value);
	});
};
dm_I18n.format = function(template,args) {
	var bf_b = "";
	var isCode = false;
	var c = 0;
	var _g1 = 0;
	var _g = template.length;
	while(_g1 < _g) {
		var ix = _g1++;
		var ch = template.charAt(ix);
		if(isCode) {
			switch(ch) {
			case "0":
				bf_b += Std.string(args[0]);
				break;
			case "1":
				bf_b += Std.string(args[1]);
				break;
			case "2":
				bf_b += Std.string(args[2]);
				break;
			case "3":
				bf_b += Std.string(args[3]);
				break;
			case "4":
				bf_b += Std.string(args[4]);
				break;
			case "5":
				bf_b += Std.string(args[5]);
				break;
			case "6":
				bf_b += Std.string(args[6]);
				break;
			case "7":
				bf_b += Std.string(args[7]);
				break;
			case "8":
				bf_b += Std.string(args[8]);
				break;
			case "9":
				bf_b += Std.string(args[9]);
				break;
			case "%":
				bf_b += "%";
				break;
			default:
				bf_b += Std.string("%" + ch);
			}
			isCode = false;
		} else if(ch == "%") isCode = true; else if(ch == null) bf_b += "null"; else bf_b += "" + ch;
	}
	return bf_b;
};
dm_I18n._ = function(key) {
	var v = dm_I18n.dic.get(key);
	if(v == null) return key; else return v;
};
var dm_Json = function() { };
dm_Json.__name__ = true;
dm_Json.from = function(s) {
	return JSON.stringify(s);
};
dm_Json.to = function(j) {
	return JSON.parse(j);
};
var dm_Rnd = function() { };
dm_Rnd.__name__ = true;
dm_Rnd.i = function(n) {
	if(n < 0) n = 0;
	return Math.floor(Math.random() * n);
};
var dm_Store = function() { };
dm_Store.__name__ = true;
dm_Store.get = function(key) {
	return localStorage.getItem(key);
};
dm_Store.put = function(key,value) {
	localStorage.setItem(key, value);
};
var dm_Str = function() { };
dm_Str.__name__ = true;
dm_Str.sub = function(s,begin,end) {
	if(end == null) end = s.length;
	var lg = s.length;
	if(begin < 0) begin += lg;
	if(end < 0) end += lg;
	if(begin < 0) begin = 0;
	if(end > lg) end = lg;
	if(end <= begin) return "";
	return s.substring(begin,end);
};
var dm_Tp1 = function(a) {
	this._1 = a;
};
dm_Tp1.__name__ = true;
dm_Tp1.prototype = {
	__class__: dm_Tp1
};
var dm_Tp2 = function(a,b) {
	dm_Tp1.call(this,a);
	this._2 = b;
};
dm_Tp2.__name__ = true;
dm_Tp2.__super__ = dm_Tp1;
dm_Tp2.prototype = $extend(dm_Tp1.prototype,{
	__class__: dm_Tp2
});
var dm_Worker = function(js) {
	this.jsWorker = new Worker(js);
};
dm_Worker.__name__ = true;
dm_Worker.prototype = {
	onResponse: function(f) {
		this.jsWorker.onmessage = f;
	}
	,sendRequest: function(rp) {
		this.jsWorker.postMessage(rp);
	}
	,__class__: dm_Worker
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
haxe__$Int64__$_$_$Int64.__name__ = true;
haxe__$Int64__$_$_$Int64.prototype = {
	__class__: haxe__$Int64__$_$_$Int64
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_Error = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
var haxe_io_FPHelper = function() { };
haxe_io_FPHelper.__name__ = true;
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) return 0.0;
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) return 0;
	var af;
	if(f < 0) af = -f; else af = f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) exp = -127; else if(exp > 128) exp = 128;
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608) & 8388607;
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	var sign = 1 - (high >>> 31 << 1);
	var exp = (high >> 20 & 2047) - 1023;
	var sig = (high & 1048575) * 4294967296. + (low >>> 31) * 2147483648. + (low & 2147483647);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	if(v == 0) {
		i64.low = 0;
		i64.high = 0;
	} else {
		var av;
		if(v < 0) av = -v; else av = v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var sig;
		var v1 = (av / Math.pow(2,exp) - 1) * 4503599627370496.;
		sig = Math.round(v1);
		var sig_l = sig | 0;
		var sig_h = sig / 4294967296.0 | 0;
		i64.low = sig_l;
		i64.high = (v < 0?-2147483648:0) | exp + 1023 << 20 | sig_h;
	}
	return i64;
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
js_html_compat_ArrayBuffer.__name__ = true;
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_DataView = function(buffer,byteOffset,byteLength) {
	this.buf = buffer;
	if(byteOffset == null) this.offset = 0; else this.offset = byteOffset;
	if(byteLength == null) this.length = buffer.byteLength - this.offset; else this.length = byteLength;
	if(this.offset < 0 || this.length < 0 || this.offset + this.length > buffer.byteLength) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
};
js_html_compat_DataView.__name__ = true;
js_html_compat_DataView.prototype = {
	getInt8: function(byteOffset) {
		var v = this.buf.a[this.offset + byteOffset];
		if(v >= 128) return v - 256; else return v;
	}
	,getUint8: function(byteOffset) {
		return this.buf.a[this.offset + byteOffset];
	}
	,getInt16: function(byteOffset,littleEndian) {
		var v = this.getUint16(byteOffset,littleEndian);
		if(v >= 32768) return v - 65536; else return v;
	}
	,getUint16: function(byteOffset,littleEndian) {
		if(littleEndian) return this.buf.a[this.offset + byteOffset] | this.buf.a[this.offset + byteOffset + 1] << 8; else return this.buf.a[this.offset + byteOffset] << 8 | this.buf.a[this.offset + byteOffset + 1];
	}
	,getInt32: function(byteOffset,littleEndian) {
		var p = this.offset + byteOffset;
		var a = this.buf.a[p++];
		var b = this.buf.a[p++];
		var c = this.buf.a[p++];
		var d = this.buf.a[p++];
		if(littleEndian) return a | b << 8 | c << 16 | d << 24; else return d | c << 8 | b << 16 | a << 24;
	}
	,getUint32: function(byteOffset,littleEndian) {
		var v = this.getInt32(byteOffset,littleEndian);
		if(v < 0) return v + 4294967296.; else return v;
	}
	,getFloat32: function(byteOffset,littleEndian) {
		return haxe_io_FPHelper.i32ToFloat(this.getInt32(byteOffset,littleEndian));
	}
	,getFloat64: function(byteOffset,littleEndian) {
		var a = this.getInt32(byteOffset,littleEndian);
		var b = this.getInt32(byteOffset + 4,littleEndian);
		return haxe_io_FPHelper.i64ToDouble(littleEndian?a:b,littleEndian?b:a);
	}
	,setInt8: function(byteOffset,value) {
		if(value < 0) this.buf.a[byteOffset + this.offset] = value + 128 & 255; else this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setUint8: function(byteOffset,value) {
		this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setInt16: function(byteOffset,value,littleEndian) {
		this.setUint16(byteOffset,value < 0?value + 65536:value,littleEndian);
	}
	,setUint16: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
		} else {
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p] = value & 255;
		}
	}
	,setInt32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,value,littleEndian);
	}
	,setUint32: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p++] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >>> 24;
		} else {
			this.buf.a[p++] = value >>> 24;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value & 255;
		}
	}
	,setFloat32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,haxe_io_FPHelper.floatToI32(value),littleEndian);
	}
	,setFloat64: function(byteOffset,value,littleEndian) {
		var i64 = haxe_io_FPHelper.doubleToI64(value);
		if(littleEndian) {
			this.setUint32(byteOffset,i64.low);
			this.setUint32(byteOffset,i64.high);
		} else {
			this.setUint32(byteOffset,i64.high);
			this.setUint32(byteOffset,i64.low);
		}
	}
	,__class__: js_html_compat_DataView
};
var js_html_compat_Uint8Array = function() { };
js_html_compat_Uint8Array.__name__ = true;
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g = 0;
		while(_g < arg1) {
			var i = _g++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) offset = 0;
		if(length == null) length = buffer.byteLength - offset;
		if(offset == 0) arr = buffer.a; else arr = buffer.a.slice(offset,offset + length);
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	var t = this;
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			t[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			t[i1 + offset] = a1[i1];
		}
	} else throw new js__$Boot_HaxeError("TODO");
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var t = this;
	var a = js_html_compat_Uint8Array._new(t.slice(start,end));
	a.byteOffset = start;
	return a;
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = ["Date"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
var __map_reserved = {}
var ArrayBuffer = typeof(window) != "undefined" && window.ArrayBuffer || typeof(global) != "undefined" && global.ArrayBuffer || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
var DataView = typeof(window) != "undefined" && window.DataView || typeof(global) != "undefined" && global.DataView || js_html_compat_DataView;
var Uint8Array = typeof(window) != "undefined" && window.Uint8Array || typeof(global) != "undefined" && global.Uint8Array || js_html_compat_Uint8Array._new;
js_Boot.__toStr = {}.toString;
Main.version = "0.0.1";
Main.alert = dm_Ui.alert;
Main.versionId = "__Sudoku_store_version";
Main.lastId = "__Sudoku_store_last";
Main.dataId = "__Sudoku_store_data";
Model.page = PageType.MainPage;
Model.correction = false;
View.tracker = new dm_Tracker(null,["1","2","3","4","5","k0","k1","k2","k3","k4","k5","k6","k7","k8","k9","edit-copy","emblem-important","en","es","filenew","fileopen","filesave","gtk-add","gtk-clear","gtk-execute","gtk-help","gtk-remove","levelen","leveles","pen","pencil","thinking.gif","win0","win1","win2","win3","win4"]);
View.timeCell = dm_Ui.Q("td").klass("lastR");
View.newLink = dm_Ui.Q("span");
View.menu = dm_Ui.Q("div");
View.body = dm_Ui.Q("div");
dm_DateDm.months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
dm_DateDm.week = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
dm_DateDm.week1 = "DLMXJVS";
haxe_io_FPHelper.i64tmp = (function($this) {
	var $r;
	var x = new haxe__$Int64__$_$_$Int64(0,0);
	$r = x;
	return $r;
}(this));
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
