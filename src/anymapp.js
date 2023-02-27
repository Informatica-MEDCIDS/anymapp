// client-side script
"use strict";

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
          value: document.querySelector("#" + data.elementID).lastElementChild
            .value,
          window: data.eventInfo.window,
        },
        pageTitle: document.querySelector("body > title").textContent,
        eventType: data.eventType,
        path: data.path,
        timeStamp: data.timeStamp,
      };
      $.ajax({
        type: "PUT",
        url: "/api/v1?api-key=foo",
        data: JSON.stringify({ message: message, data: newdata }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
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
