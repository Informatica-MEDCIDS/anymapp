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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55bWFwcC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNhOztBQUViLENBQUMsWUFBWTtFQUNYQSxNQUFNLENBQUNDLGFBQWEsQ0FBQ0Msa0JBQWtCLENBQUMsVUFBVUMsT0FBTyxFQUFFQyxJQUFJLEVBQUU7SUFDL0QsSUFBSUQsT0FBTyxJQUFJLFVBQVUsRUFBRTtNQUN6QixJQUFJRSxPQUFPLEdBQUc7UUFDWkMsU0FBUyxFQUFFRixJQUFJLENBQUNFLFNBQVM7UUFDekJDLFNBQVMsRUFBRTtVQUNUQyxNQUFNLEVBQUVKLElBQUksQ0FBQ0csU0FBUyxDQUFDRSxLQUFLO1VBQzVCQyxRQUFRLEVBQUVOLElBQUksQ0FBQ0csU0FBUyxDQUFDRyxRQUFRO1VBQ2pDQyxJQUFJLEVBQUVQLElBQUksQ0FBQ0csU0FBUyxDQUFDSSxJQUFJO1VBQ3pCQyxPQUFPLEVBQUVSLElBQUksQ0FBQ0csU0FBUyxDQUFDSyxPQUFPO1VBQy9CQyxLQUFLLEVBQUVULElBQUksQ0FBQ0csU0FBUyxDQUFDTSxLQUFLO1VBQzNCQyxLQUFLLEVBQUVWLElBQUksQ0FBQ0csU0FBUyxDQUFDTyxLQUFLO1VBQzNCQyxVQUFVLEVBQUVYLElBQUksQ0FBQ0csU0FBUyxDQUFDUSxVQUFVO1VBQ3JDQyxJQUFJLEVBQUVaLElBQUksQ0FBQ0csU0FBUyxDQUFDVSxVQUFVLENBQUNELElBQUk7VUFDcENFLEtBQUssRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxHQUFHaEIsSUFBSSxDQUFDRSxTQUFTLENBQUMsQ0FBQ2UsZ0JBQWdCLENBQ2pFSCxLQUFLO1VBQ1JJLE1BQU0sRUFBRWxCLElBQUksQ0FBQ0csU0FBUyxDQUFDZTtRQUN6QixDQUFDO1FBQ0RDLFNBQVMsRUFBRUosUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUNJLFdBQVc7UUFDN0RDLFNBQVMsRUFBRXJCLElBQUksQ0FBQ3FCLFNBQVM7UUFDekJDLElBQUksRUFBRXRCLElBQUksQ0FBQ3NCLElBQUk7UUFDZkMsU0FBUyxFQUFFdkIsSUFBSSxDQUFDdUI7TUFDbEIsQ0FBQztNQUNEQyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUNMQyxJQUFJLEVBQUUsS0FBSztRQUNYQyxHQUFHLEVBQUUscUJBQXFCO1FBQzFCM0IsSUFBSSxFQUFFNEIsSUFBSSxDQUFDQyxTQUFTLENBQUM7VUFBRTlCLE9BQU8sRUFBRUEsT0FBTztVQUFFQyxJQUFJLEVBQUVDO1FBQVEsQ0FBQyxDQUFDO1FBQ3pENkIsV0FBVyxFQUFFLGlDQUFpQztRQUM5Q0MsUUFBUSxFQUFFO01BQ1osQ0FBQyxDQUFDO01BQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbEMsT0FBTyxFQUFFQyxJQUFJLENBQUM7TUFDMUJnQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2xDLE9BQU8sRUFBRUUsT0FBTyxDQUFDO01BQzdCO01BQ0E7TUFDQTtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxFQUFFLENBQUM7O0FBRUorQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbnltYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FueW1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbnltYXBwLy4vc3JjL2FueW1hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGNsaWVudC1zaWRlIHNjcmlwdFxuXCJ1c2Ugc3RyaWN0XCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gICRheHVyZS5tZXNzYWdlQ2VudGVyLmFkZE1lc3NhZ2VMaXN0ZW5lcihmdW5jdGlvbiAobWVzc2FnZSwgZGF0YSkge1xuICAgIGlmIChtZXNzYWdlID09IFwibG9nRXZlbnRcIikge1xuICAgICAgdmFyIG5ld2RhdGEgPSB7XG4gICAgICAgIGVsZW1lbnRJRDogZGF0YS5lbGVtZW50SUQsXG4gICAgICAgIGV2ZW50SW5mbzoge1xuICAgICAgICAgIGN1cnNvcjogZGF0YS5ldmVudEluZm8uY3Vzb3IsXG4gICAgICAgICAgZHJhZ0luZm86IGRhdGEuZXZlbnRJbmZvLmRyYWdJbmZvLFxuICAgICAgICAgIGl0ZW06IGRhdGEuZXZlbnRJbmZvLml0ZW0sXG4gICAgICAgICAga2V5SW5mbzogZGF0YS5ldmVudEluZm8ua2V5SW5mbyxcbiAgICAgICAgICBwYWdlWDogZGF0YS5ldmVudEluZm8ucGFnZVgsXG4gICAgICAgICAgcGFnZVk6IGRhdGEuZXZlbnRJbmZvLnBhZ2VZLFxuICAgICAgICAgIHNyY0VsZW1lbnQ6IGRhdGEuZXZlbnRJbmZvLnNyY0VsZW1lbnQsXG4gICAgICAgICAgbmFtZTogZGF0YS5ldmVudEluZm8udGhpc3dpZGdldC5uYW1lLFxuICAgICAgICAgIHZhbHVlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgZGF0YS5lbGVtZW50SUQpLmxhc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgICB3aW5kb3c6IGRhdGEuZXZlbnRJbmZvLndpbmRvdyxcbiAgICAgICAgfSxcbiAgICAgICAgcGFnZVRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IHRpdGxlXCIpLnRleHRDb250ZW50LFxuICAgICAgICBldmVudFR5cGU6IGRhdGEuZXZlbnRUeXBlLFxuICAgICAgICBwYXRoOiBkYXRhLnBhdGgsXG4gICAgICAgIHRpbWVTdGFtcDogZGF0YS50aW1lU3RhbXAsXG4gICAgICB9O1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQVVRcIixcbiAgICAgICAgdXJsOiBcIi9hcGkvdjE/YXBpLWtleT1mb29cIixcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBtZXNzYWdlLCBkYXRhOiBuZXdkYXRhIH0pLFxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSwgZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCBuZXdkYXRhKTtcbiAgICAgIC8vIGV2ZW50SW5mby50aGlzd2lkZ2V0LmVsZW1lbnRRdWVyeVswXS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudmFsdWVcbiAgICAgIC8vIGV2ZW50SW5mby50aGlzd2lkZ2V0LmVsZW1lbnRRdWVyeVswXS5sYXN0RWxlbWVudENoaWxkLnZhbHVlXG4gICAgICAvLyAjdTQ3IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdTQ3XCIpLmxhc3RFbGVtZW50Q2hpbGQudmFsdWVcbiAgICB9XG4gIH0pO1xufSkoKTtcblxuY29uc29sZS5sb2coXCJhbnltYXBwLmpzIGxvYWRlZFwiKTtcblxuLy8gd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuLy8gICAkLmFqYXgoe1xuLy8gICAgIHR5cGU6IFwiUFVUXCIsXG4vLyAgICAgdXJsOiBcIi9hcGkvdjEvbG9nb3V0P2FwaS1rZXk9Zm9vXCIsXG4vLyAgICAgZGF0YToge30sXG4vLyAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuLy8gICAgIGRhdGFUeXBlOiBcImpzb25cIixcbi8vICAgfSk7XG4vLyB9O1xuIl0sIm5hbWVzIjpbIiRheHVyZSIsIm1lc3NhZ2VDZW50ZXIiLCJhZGRNZXNzYWdlTGlzdGVuZXIiLCJtZXNzYWdlIiwiZGF0YSIsIm5ld2RhdGEiLCJlbGVtZW50SUQiLCJldmVudEluZm8iLCJjdXJzb3IiLCJjdXNvciIsImRyYWdJbmZvIiwiaXRlbSIsImtleUluZm8iLCJwYWdlWCIsInBhZ2VZIiwic3JjRWxlbWVudCIsIm5hbWUiLCJ0aGlzd2lkZ2V0IiwidmFsdWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsYXN0RWxlbWVudENoaWxkIiwid2luZG93IiwicGFnZVRpdGxlIiwidGV4dENvbnRlbnQiLCJldmVudFR5cGUiLCJwYXRoIiwidGltZVN0YW1wIiwiJCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnRUeXBlIiwiZGF0YVR5cGUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==