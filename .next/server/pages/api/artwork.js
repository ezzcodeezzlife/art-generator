"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/artwork";
exports.ids = ["pages/api/artwork"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./src/pages/api/artwork.js":
/*!**********************************!*\
  !*** ./src/pages/api/artwork.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { connectToDatabase  } = __webpack_require__(/*! ../../../utils/connectMongo */ \"(api)/./utils/connectMongo.js\");\nconst { ObjectId  } = (__webpack_require__(/*! mongodb */ \"mongodb\").ObjectId);\nasync function handler(req, res) {\n    // switch the methods\n    switch(req.method){\n        case \"GET\":\n            {\n                return getArt(req, res);\n            }\n        case \"POST\":\n            {\n                return addArt(req, res);\n            }\n    }\n};\n//create a new art in the database\nasync function addArt(req, res) {\n    try {\n        // connect to the database\n        let { db  } = await connectToDatabase();\n        // add the art\n        await db.collection(\"art\").insertOne(JSON.parse(req.body));\n        // return a message\n        return res.json({\n            message: \"Art added successfully\",\n            success: true\n        });\n    } catch (error) {\n        return res.json({\n            message: new Error(error).message,\n            success: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FydHdvcmsuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sRUFBRUEsaUJBQWlCLEdBQUUsR0FBR0MsbUJBQU8sQ0FBQyxrRUFBNkIsQ0FBQztBQUNwRSxNQUFNLEVBQUVDLFFBQVEsR0FBRSxHQUFHRCx3REFBMkI7QUFFakMsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMzQyxxQkFBcUI7SUFDckIsT0FBUUQsR0FBRyxDQUFDRSxNQUFNO1FBQ2YsS0FBSyxLQUFLO1lBQUU7Z0JBQ1IsT0FBT0MsTUFBTSxDQUFDSCxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1FBRUQsS0FBSyxNQUFNO1lBQUU7Z0JBQ1QsT0FBT0csTUFBTSxDQUFDSixHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO0tBQ0o7Q0FDSjtBQUVELGtDQUFrQztBQUNsQyxlQUFlRyxNQUFNLENBQUNKLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVCLElBQUk7UUFDQSwwQkFBMEI7UUFDMUIsSUFBSSxFQUFFSSxFQUFFLEdBQUUsR0FBRyxNQUFNVCxpQkFBaUIsRUFBRTtRQUN0QyxjQUFjO1FBQ2QsTUFBTVMsRUFBRSxDQUFDQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNULEdBQUcsQ0FBQ1UsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzRCxtQkFBbUI7UUFDbkIsT0FBT1QsR0FBRyxDQUFDVSxJQUFJLENBQUM7WUFDWkMsT0FBTyxFQUFFLHdCQUF3QjtZQUNqQ0MsT0FBTyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxPQUFPQyxLQUFLLEVBQUU7UUFDWixPQUFPYixHQUFHLENBQUNVLElBQUksQ0FBQztZQUNaQyxPQUFPLEVBQUUsSUFBSUcsS0FBSyxDQUFDRCxLQUFLLENBQUMsQ0FBQ0YsT0FBTztZQUNqQ0MsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDO0tBQ047Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2FydC1nZW5lcmF0b3IvLi9zcmMvcGFnZXMvYXBpL2FydHdvcmsuanM/ZGFlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy9jb25uZWN0TW9uZ28nKTtcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoJ21vbmdvZGInKS5PYmplY3RJZDtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgICAvLyBzd2l0Y2ggdGhlIG1ldGhvZHNcbiAgICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ0dFVCc6IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRBcnQocmVxLCByZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnUE9TVCc6IHtcbiAgICAgICAgICAgIHJldHVybiBhZGRBcnQocmVxLCByZXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vL2NyZWF0ZSBhIG5ldyBhcnQgaW4gdGhlIGRhdGFiYXNlXG5hc3luYyBmdW5jdGlvbiBhZGRBcnQocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxuICAgICAgICBsZXQgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAgICAgLy8gYWRkIHRoZSBhcnRcbiAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignYXJ0JykuaW5zZXJ0T25lKEpTT04ucGFyc2UocmVxLmJvZHkpKTtcbiAgICAgICAgLy8gcmV0dXJuIGEgbWVzc2FnZVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogJ0FydCBhZGRlZCBzdWNjZXNzZnVsbHknLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG5ldyBFcnJvcihlcnJvcikubWVzc2FnZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwicmVxdWlyZSIsIk9iamVjdElkIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImdldEFydCIsImFkZEFydCIsImRiIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJqc29uIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJlcnJvciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/artwork.js\n");

/***/ }),

/***/ "(api)/./utils/connectMongo.js":
/*!*******************************!*\
  !*** ./utils/connectMongo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst MONGODB_DB = process.env.DB_NAME;\n// check the MongoDB URI\nif (!MONGODB_URI) {\n    throw new Error(\"Define the MONGODB_URI environmental variable\");\n}\n// check the MongoDB DB\nif (!MONGODB_DB) {\n    throw new Error(\"Define the MONGODB_DB environmental variable\");\n}\nlet cachedClient = null;\nlet cachedDb = null;\nasync function connectToDatabase() {\n    // check the cached.\n    if (cachedClient && cachedDb) {\n        // load from cache\n        return {\n            client: cachedClient,\n            db: cachedDb\n        };\n    }\n    // set the connection options\n    const opts = {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    };\n    // Connect to cluster\n    let client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(MONGODB_URI, opts);\n    await client.connect();\n    let db = client.db(MONGODB_DB);\n    // set cache\n    cachedClient = client;\n    cachedDb = db;\n    return {\n        client: cachedClient,\n        db: cachedDb\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0TW9uZ28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLFdBQVcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFdBQVc7QUFDM0MsTUFBTUcsVUFBVSxHQUFHRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsT0FBTztBQUV0Qyx3QkFBd0I7QUFDeEIsSUFBSSxDQUFDSixXQUFXLEVBQUU7SUFDZCxNQUFNLElBQUlLLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0NBQ3BFO0FBRUQsdUJBQXVCO0FBQ3ZCLElBQUksQ0FBQ0YsVUFBVSxFQUFFO0lBQ2IsTUFBTSxJQUFJRSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztDQUNuRTtBQUVELElBQUlDLFlBQVksR0FBRyxJQUFJO0FBQ3ZCLElBQUlDLFFBQVEsR0FBRyxJQUFJO0FBRVosZUFBZUMsaUJBQWlCLEdBQUc7SUFDdEMsb0JBQW9CO0lBQ3BCLElBQUlGLFlBQVksSUFBSUMsUUFBUSxFQUFFO1FBQzFCLGtCQUFrQjtRQUNsQixPQUFPO1lBQ0hFLE1BQU0sRUFBRUgsWUFBWTtZQUNwQkksRUFBRSxFQUFFSCxRQUFRO1NBQ2YsQ0FBQztLQUNMO0lBRUQsNkJBQTZCO0lBQzdCLE1BQU1JLElBQUksR0FBRztRQUNUQyxlQUFlLEVBQUUsSUFBSTtRQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtLQUMzQjtJQUVELHFCQUFxQjtJQUNyQixJQUFJSixNQUFNLEdBQUcsSUFBSVYsZ0RBQVcsQ0FBQ0MsV0FBVyxFQUFFVyxJQUFJLENBQUM7SUFDL0MsTUFBTUYsTUFBTSxDQUFDSyxPQUFPLEVBQUUsQ0FBQztJQUN2QixJQUFJSixFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBRSxDQUFDUCxVQUFVLENBQUM7SUFFOUIsWUFBWTtJQUNaRyxZQUFZLEdBQUdHLE1BQU0sQ0FBQztJQUN0QkYsUUFBUSxHQUFHRyxFQUFFLENBQUM7SUFFZCxPQUFPO1FBQ0hELE1BQU0sRUFBRUgsWUFBWTtRQUNwQkksRUFBRSxFQUFFSCxRQUFRO0tBQ2YsQ0FBQztDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJ0LWdlbmVyYXRvci8uL3V0aWxzL2Nvbm5lY3RNb25nby5qcz84NjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBNT05HT0RCX0RCID0gcHJvY2Vzcy5lbnYuREJfTkFNRTtcblxuLy8gY2hlY2sgdGhlIE1vbmdvREIgVVJJXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50YWwgdmFyaWFibGUnKTtcbn1cblxuLy8gY2hlY2sgdGhlIE1vbmdvREIgREJcbmlmICghTU9OR09EQl9EQikge1xuICAgIHRocm93IG5ldyBFcnJvcignRGVmaW5lIHRoZSBNT05HT0RCX0RCIGVudmlyb25tZW50YWwgdmFyaWFibGUnKTtcbn1cblxubGV0IGNhY2hlZENsaWVudCA9IG51bGw7XG5sZXQgY2FjaGVkRGIgPSBudWxsO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gICAgLy8gY2hlY2sgdGhlIGNhY2hlZC5cbiAgICBpZiAoY2FjaGVkQ2xpZW50ICYmIGNhY2hlZERiKSB7XG4gICAgICAgIC8vIGxvYWQgZnJvbSBjYWNoZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xpZW50OiBjYWNoZWRDbGllbnQsXG4gICAgICAgICAgICBkYjogY2FjaGVkRGIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBjb25uZWN0aW9uIG9wdGlvbnNcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgLy8gQ29ubmVjdCB0byBjbHVzdGVyXG4gICAgbGV0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChNT05HT0RCX1VSSSwgb3B0cyk7XG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICBsZXQgZGIgPSBjbGllbnQuZGIoTU9OR09EQl9EQik7XG5cbiAgICAvLyBzZXQgY2FjaGVcbiAgICBjYWNoZWRDbGllbnQgPSBjbGllbnQ7XG4gICAgY2FjaGVkRGIgPSBkYjtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNsaWVudDogY2FjaGVkQ2xpZW50LFxuICAgICAgICBkYjogY2FjaGVkRGIsXG4gICAgfTtcbn0iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX0RCIiwiREJfTkFNRSIsIkVycm9yIiwiY2FjaGVkQ2xpZW50IiwiY2FjaGVkRGIiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImRiIiwib3B0cyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/connectMongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/artwork.js"));
module.exports = __webpack_exports__;

})();