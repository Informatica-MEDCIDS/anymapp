/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/anymapp.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
// client-side script


(function () {
  $axure.messageCenter.addMessageListener(function (message, data) {
    if (message == "logEvent") {
      var newdata = {
        elementID: data.elementID,
        eventInfo: {
          cursor: data.eventInfo.cusor,
          dragInfo: data.eventInfo.dragInfo,
          item: data.eventInfo.item,
          keyInfo: data.eventInfo.keyInfo,
          pageX: data.eventInfo.pageX,
          pageY: data.eventInfo.pageY,
          srcElement: data.eventInfo.srcElement,
          name: data.eventInfo.thiswidget.name,
          value: document.querySelector("#" + data.elementID).lastElementChild.value,
          window: data.eventInfo.window
        },
        pageTitle: document.querySelector("body > title").textContent,
        eventType: data.eventType,
        path: data.path,
        timeStamp: data.timeStamp
      };
      $.ajax({
        type: "PUT",
        url: "/api/v1?api-key=foo",
        data: JSON.stringify({
          message: message,
          data: newdata
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
      });
      console.log(message, data);
      console.log(message, newdata);
      // eventInfo.thiswidget.elementQuery[0].ownerDocument.activeElement.value
      // eventInfo.thiswidget.elementQuery[0].lastElementChild.value
      // #u47 document.querySelector("#u47").lastElementChild.value
    }
  });
})();

console.log("anymapp.js loaded");

// window.onbeforeunload = function () {
//   $.ajax({
//     type: "PUT",
//     url: "/api/v1/logout?api-key=foo",
//     data: {},
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//   });
// };
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55bWFwcC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNhOztBQUViLENBQUMsWUFBWTtFQUNYQSxNQUFNLENBQUNDLGFBQWEsQ0FBQ0Msa0JBQWtCLENBQUMsVUFBVUMsT0FBTyxFQUFFQyxJQUFJLEVBQUU7SUFDL0QsSUFBSUQsT0FBTyxJQUFJLFVBQVUsRUFBRTtNQUN6QixJQUFJRSxPQUFPLEdBQUc7UUFDWkMsU0FBUyxFQUFFRixJQUFJLENBQUNFLFNBQVM7UUFDekJDLFNBQVMsRUFBRTtVQUNUQyxNQUFNLEVBQUVKLElBQUksQ0FBQ0csU0FBUyxDQUFDRSxLQUFLO1VBQzVCQyxRQUFRLEVBQUVOLElBQUksQ0FBQ0csU0FBUyxDQUFDRyxRQUFRO1VBQ2pDQyxJQUFJLEVBQUVQLElBQUksQ0FBQ0csU0FBUyxDQUFDSSxJQUFJO1VBQ3pCQyxPQUFPLEVBQUVSLElBQUksQ0FBQ0csU0FBUyxDQUFDSyxPQUFPO1VBQy9CQyxLQUFLLEVBQUVULElBQUksQ0FBQ0csU0FBUyxDQUFDTSxLQUFLO1VBQzNCQyxLQUFLLEVBQUVWLElBQUksQ0FBQ0csU0FBUyxDQUFDTyxLQUFLO1VBQzNCQyxVQUFVLEVBQUVYLElBQUksQ0FBQ0csU0FBUyxDQUFDUSxVQUFVO1VBQ3JDQyxJQUFJLEVBQUVaLElBQUksQ0FBQ0csU0FBUyxDQUFDVSxVQUFVLENBQUNELElBQUk7VUFDcENFLEtBQUssRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxHQUFHaEIsSUFBSSxDQUFDRSxTQUFTLENBQUMsQ0FBQ2UsZ0JBQWdCLENBQ2pFSCxLQUFLO1VBQ1JJLE1BQU0sRUFBRWxCLElBQUksQ0FBQ0csU0FBUyxDQUFDZTtRQUN6QixDQUFDO1FBQ0RDLFNBQVMsRUFBRUosUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUNJLFdBQVc7UUFDN0RDLFNBQVMsRUFBRXJCLElBQUksQ0FBQ3FCLFNBQVM7UUFDekJDLElBQUksRUFBRXRCLElBQUksQ0FBQ3NCLElBQUk7UUFDZkMsU0FBUyxFQUFFdkIsSUFBSSxDQUFDdUI7TUFDbEIsQ0FBQztNQUNEQyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUNMQyxJQUFJLEVBQUUsS0FBSztRQUNYQyxHQUFHLEVBQUUscUJBQXFCO1FBQzFCM0IsSUFBSSxFQUFFNEIsSUFBSSxDQUFDQyxTQUFTLENBQUM7VUFBRTlCLE9BQU8sRUFBRUEsT0FBTztVQUFFQyxJQUFJLEVBQUVDO1FBQVEsQ0FBQyxDQUFDO1FBQ3pENkIsV0FBVyxFQUFFLGlDQUFpQztRQUM5Q0MsUUFBUSxFQUFFO01BQ1osQ0FBQyxDQUFDO01BQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbEMsT0FBTyxFQUFFQyxJQUFJLENBQUM7TUFDMUJnQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2xDLE9BQU8sRUFBRUUsT0FBTyxDQUFDO01BQzdCO01BQ0E7TUFDQTtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxHQUFHOztBQUVKK0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW55bWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbnltYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW55bWFwcC8uL3NyYy9hbnltYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBjbGllbnQtc2lkZSBzY3JpcHRcblwidXNlIHN0cmljdFwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAkYXh1cmUubWVzc2FnZUNlbnRlci5hZGRNZXNzYWdlTGlzdGVuZXIoZnVuY3Rpb24gKG1lc3NhZ2UsIGRhdGEpIHtcbiAgICBpZiAobWVzc2FnZSA9PSBcImxvZ0V2ZW50XCIpIHtcbiAgICAgIHZhciBuZXdkYXRhID0ge1xuICAgICAgICBlbGVtZW50SUQ6IGRhdGEuZWxlbWVudElELFxuICAgICAgICBldmVudEluZm86IHtcbiAgICAgICAgICBjdXJzb3I6IGRhdGEuZXZlbnRJbmZvLmN1c29yLFxuICAgICAgICAgIGRyYWdJbmZvOiBkYXRhLmV2ZW50SW5mby5kcmFnSW5mbyxcbiAgICAgICAgICBpdGVtOiBkYXRhLmV2ZW50SW5mby5pdGVtLFxuICAgICAgICAgIGtleUluZm86IGRhdGEuZXZlbnRJbmZvLmtleUluZm8sXG4gICAgICAgICAgcGFnZVg6IGRhdGEuZXZlbnRJbmZvLnBhZ2VYLFxuICAgICAgICAgIHBhZ2VZOiBkYXRhLmV2ZW50SW5mby5wYWdlWSxcbiAgICAgICAgICBzcmNFbGVtZW50OiBkYXRhLmV2ZW50SW5mby5zcmNFbGVtZW50LFxuICAgICAgICAgIG5hbWU6IGRhdGEuZXZlbnRJbmZvLnRoaXN3aWRnZXQubmFtZSxcbiAgICAgICAgICB2YWx1ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGRhdGEuZWxlbWVudElEKS5sYXN0RWxlbWVudENoaWxkXG4gICAgICAgICAgICAudmFsdWUsXG4gICAgICAgICAgd2luZG93OiBkYXRhLmV2ZW50SW5mby53aW5kb3csXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2VUaXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiB0aXRsZVwiKS50ZXh0Q29udGVudCxcbiAgICAgICAgZXZlbnRUeXBlOiBkYXRhLmV2ZW50VHlwZSxcbiAgICAgICAgcGF0aDogZGF0YS5wYXRoLFxuICAgICAgICB0aW1lU3RhbXA6IGRhdGEudGltZVN0YW1wLFxuICAgICAgfTtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUFVUXCIsXG4gICAgICAgIHVybDogXCIvYXBpL3YxP2FwaS1rZXk9Zm9vXCIsXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogbWVzc2FnZSwgZGF0YTogbmV3ZGF0YSB9KSxcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UsIGRhdGEpO1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSwgbmV3ZGF0YSk7XG4gICAgICAvLyBldmVudEluZm8udGhpc3dpZGdldC5lbGVtZW50UXVlcnlbMF0ub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50LnZhbHVlXG4gICAgICAvLyBldmVudEluZm8udGhpc3dpZGdldC5lbGVtZW50UXVlcnlbMF0ubGFzdEVsZW1lbnRDaGlsZC52YWx1ZVxuICAgICAgLy8gI3U0NyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3U0N1wiKS5sYXN0RWxlbWVudENoaWxkLnZhbHVlXG4gICAgfVxuICB9KTtcbn0pKCk7XG5cbmNvbnNvbGUubG9nKFwiYW55bWFwcC5qcyBsb2FkZWRcIik7XG5cbi8vIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgJC5hamF4KHtcbi8vICAgICB0eXBlOiBcIlBVVFwiLFxuLy8gICAgIHVybDogXCIvYXBpL3YxL2xvZ291dD9hcGkta2V5PWZvb1wiLFxuLy8gICAgIGRhdGE6IHt9LFxuLy8gICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbi8vICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4vLyAgIH0pO1xuLy8gfTtcbiJdLCJuYW1lcyI6WyIkYXh1cmUiLCJtZXNzYWdlQ2VudGVyIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwibWVzc2FnZSIsImRhdGEiLCJuZXdkYXRhIiwiZWxlbWVudElEIiwiZXZlbnRJbmZvIiwiY3Vyc29yIiwiY3Vzb3IiLCJkcmFnSW5mbyIsIml0ZW0iLCJrZXlJbmZvIiwicGFnZVgiLCJwYWdlWSIsInNyY0VsZW1lbnQiLCJuYW1lIiwidGhpc3dpZGdldCIsInZhbHVlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGFzdEVsZW1lbnRDaGlsZCIsIndpbmRvdyIsInBhZ2VUaXRsZSIsInRleHRDb250ZW50IiwiZXZlbnRUeXBlIiwicGF0aCIsInRpbWVTdGFtcCIsIiQiLCJhamF4IiwidHlwZSIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50VHlwZSIsImRhdGFUeXBlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=