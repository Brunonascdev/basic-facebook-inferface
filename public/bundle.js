/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\src\\\\index.js: Unexpected token (4:7)\\n\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\u001b[36mimport\\u001b[39m { render } from \\u001b[32m\\\"react-dom\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 4 | \\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39ma\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m\\\"root\\\"\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[0m\\n    at Parser._raise (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:745:17)\\n    at Parser.raiseWithData (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:738:17)\\n    at Parser.raise (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:732:17)\\n    at Parser.unexpected (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8806:16)\\n    at Parser.parseExprAtom (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10129:20)\\n    at Parser.parseExprSubscripts (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9655:23)\\n    at Parser.parseMaybeUnary (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9635:21)\\n    at Parser.parseExprOps (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9505:23)\\n    at Parser.parseMaybeConditional (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9478:23)\\n    at Parser.parseMaybeAssign (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9433:21)\\n    at Parser.parseExprListItem (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10791:18)\\n    at Parser.parseCallExpressionArguments (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9849:22)\\n    at Parser.parseSubscript (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9749:31)\\n    at Parser.parseSubscripts (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9678:19)\\n    at Parser.parseExprSubscripts (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9661:17)\\n    at Parser.parseMaybeUnary (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9635:21)\\n    at Parser.parseExprOps (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9505:23)\\n    at Parser.parseMaybeConditional (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9478:23)\\n    at Parser.parseMaybeAssign (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9433:21)\\n    at Parser.parseExpression (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9385:23)\\n    at Parser.parseStatementContent (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11284:23)\\n    at Parser.parseStatement (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11155:17)\\n    at Parser.parseBlockOrModuleBlockBody (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11730:25)\\n    at Parser.parseBlockBody (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11716:10)\\n    at Parser.parseTopLevel (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11086:10)\\n    at Parser.parse (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12767:10)\\n    at parse (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12820:38)\\n    at parser (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (D:\\\\my_projects\\\\GoStack_09\\\\desafio_02_reactjs\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:93:38)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });