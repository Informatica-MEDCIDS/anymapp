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
    }
  });
})();
console.log("anymapp.js loadead");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55bWFwcC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNhOztBQUViLENBQUMsWUFBWTtFQUNYQSxNQUFNLENBQUNDLGFBQWEsQ0FBQ0Msa0JBQWtCLENBQUMsVUFBVUMsT0FBTyxFQUFFQyxJQUFJLEVBQUU7SUFDL0QsSUFBSUQsT0FBTyxJQUFJLFVBQVUsRUFBRTtNQUN6QixJQUFJRSxPQUFPLEdBQUc7UUFDWkMsU0FBUyxFQUFFRixJQUFJLENBQUNFLFNBQVM7UUFDekJDLFNBQVMsRUFBRTtVQUNUQyxNQUFNLEVBQUVKLElBQUksQ0FBQ0csU0FBUyxDQUFDRSxLQUFLO1VBQzVCQyxRQUFRLEVBQUVOLElBQUksQ0FBQ0csU0FBUyxDQUFDRyxRQUFRO1VBQ2pDQyxJQUFJLEVBQUVQLElBQUksQ0FBQ0csU0FBUyxDQUFDSSxJQUFJO1VBQ3pCQyxPQUFPLEVBQUVSLElBQUksQ0FBQ0csU0FBUyxDQUFDSyxPQUFPO1VBQy9CQyxLQUFLLEVBQUVULElBQUksQ0FBQ0csU0FBUyxDQUFDTSxLQUFLO1VBQzNCQyxLQUFLLEVBQUVWLElBQUksQ0FBQ0csU0FBUyxDQUFDTyxLQUFLO1VBQzNCQyxVQUFVLEVBQUVYLElBQUksQ0FBQ0csU0FBUyxDQUFDUSxVQUFVO1VBQ3JDQyxJQUFJLEVBQUVaLElBQUksQ0FBQ0csU0FBUyxDQUFDVSxVQUFVLENBQUNELElBQUk7VUFDcENFLE1BQU0sRUFBRWQsSUFBSSxDQUFDRyxTQUFTLENBQUNXO1FBQ3pCLENBQUM7UUFDREMsU0FBUyxFQUFFQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsV0FBVztRQUM3REMsU0FBUyxFQUFFbkIsSUFBSSxDQUFDbUIsU0FBUztRQUN6QkMsSUFBSSxFQUFFcEIsSUFBSSxDQUFDb0IsSUFBSTtRQUNmQyxTQUFTLEVBQUVyQixJQUFJLENBQUNxQjtNQUNsQixDQUFDO01BQ0RDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQ0xDLElBQUksRUFBRSxLQUFLO1FBQ1hDLEdBQUcsRUFBRSxxQkFBcUI7UUFDMUJ6QixJQUFJLEVBQUUwQixJQUFJLENBQUNDLFNBQVMsQ0FBQztVQUFFNUIsT0FBTyxFQUFFQSxPQUFPO1VBQUVDLElBQUksRUFBRUM7UUFBUSxDQUFDLENBQUM7UUFDekQyQixXQUFXLEVBQUUsaUNBQWlDO1FBQzlDQyxRQUFRLEVBQUU7TUFDWixDQUFDLENBQUM7TUFDRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNoQyxPQUFPLEVBQUVDLElBQUksQ0FBQztNQUMxQjhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaEMsT0FBTyxFQUFFRSxPQUFPLENBQUM7SUFDL0I7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLEdBQUc7QUFFSjZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSyIsInNvdXJjZXMiOlsid2VicGFjazovL2FueW1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYW55bWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FueW1hcHAvLi9zcmMvYW55bWFwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gY2xpZW50LXNpZGUgc2NyaXB0XG5cInVzZSBzdHJpY3RcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgJGF4dXJlLm1lc3NhZ2VDZW50ZXIuYWRkTWVzc2FnZUxpc3RlbmVyKGZ1bmN0aW9uIChtZXNzYWdlLCBkYXRhKSB7XG4gICAgaWYgKG1lc3NhZ2UgPT0gXCJsb2dFdmVudFwiKSB7XG4gICAgICB2YXIgbmV3ZGF0YSA9IHtcbiAgICAgICAgZWxlbWVudElEOiBkYXRhLmVsZW1lbnRJRCxcbiAgICAgICAgZXZlbnRJbmZvOiB7XG4gICAgICAgICAgY3Vyc29yOiBkYXRhLmV2ZW50SW5mby5jdXNvcixcbiAgICAgICAgICBkcmFnSW5mbzogZGF0YS5ldmVudEluZm8uZHJhZ0luZm8sXG4gICAgICAgICAgaXRlbTogZGF0YS5ldmVudEluZm8uaXRlbSxcbiAgICAgICAgICBrZXlJbmZvOiBkYXRhLmV2ZW50SW5mby5rZXlJbmZvLFxuICAgICAgICAgIHBhZ2VYOiBkYXRhLmV2ZW50SW5mby5wYWdlWCxcbiAgICAgICAgICBwYWdlWTogZGF0YS5ldmVudEluZm8ucGFnZVksXG4gICAgICAgICAgc3JjRWxlbWVudDogZGF0YS5ldmVudEluZm8uc3JjRWxlbWVudCxcbiAgICAgICAgICBuYW1lOiBkYXRhLmV2ZW50SW5mby50aGlzd2lkZ2V0Lm5hbWUsXG4gICAgICAgICAgd2luZG93OiBkYXRhLmV2ZW50SW5mby53aW5kb3csXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2VUaXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiB0aXRsZVwiKS50ZXh0Q29udGVudCxcbiAgICAgICAgZXZlbnRUeXBlOiBkYXRhLmV2ZW50VHlwZSxcbiAgICAgICAgcGF0aDogZGF0YS5wYXRoLFxuICAgICAgICB0aW1lU3RhbXA6IGRhdGEudGltZVN0YW1wLFxuICAgICAgfTtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUFVUXCIsXG4gICAgICAgIHVybDogXCIvYXBpL3YxP2FwaS1rZXk9Zm9vXCIsXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogbWVzc2FnZSwgZGF0YTogbmV3ZGF0YSB9KSxcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UsIGRhdGEpO1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSwgbmV3ZGF0YSk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5cbmNvbnNvbGUubG9nKFwiYW55bWFwcC5qcyBsb2FkZWFkXCIpO1xuXG4vLyB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICQuYWpheCh7XG4vLyAgICAgdHlwZTogXCJQVVRcIixcbi8vICAgICB1cmw6IFwiL2FwaS92MS9sb2dvdXQ/YXBpLWtleT1mb29cIixcbi8vICAgICBkYXRhOiB7fSxcbi8vICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4vLyAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuLy8gICB9KTtcbi8vIH07XG4iXSwibmFtZXMiOlsiJGF4dXJlIiwibWVzc2FnZUNlbnRlciIsImFkZE1lc3NhZ2VMaXN0ZW5lciIsIm1lc3NhZ2UiLCJkYXRhIiwibmV3ZGF0YSIsImVsZW1lbnRJRCIsImV2ZW50SW5mbyIsImN1cnNvciIsImN1c29yIiwiZHJhZ0luZm8iLCJpdGVtIiwia2V5SW5mbyIsInBhZ2VYIiwicGFnZVkiLCJzcmNFbGVtZW50IiwibmFtZSIsInRoaXN3aWRnZXQiLCJ3aW5kb3ciLCJwYWdlVGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImV2ZW50VHlwZSIsInBhdGgiLCJ0aW1lU3RhbXAiLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudFR5cGUiLCJkYXRhVHlwZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9