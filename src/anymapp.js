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
          window: data.eventInfo.window,
        },
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
