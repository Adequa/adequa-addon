let lbcPort = null;
let call_id = 0;
const requestBuffer = {};

const eventHandler = function (msg, port) {
  if (msg.what === "response") {
    const data = msg.data;

    if (msg.call_id) {
      console.log(data)
      requestBuffer[msg.call_id].callback(data.ads);
      requestBuffer[msg.call_id] = null;
    }
  }
};

Adequa.API.runtime.onConnect.addListener(function (port) {
  if (port.name === "leboncoin") {
    port.onMessage.addListener(function (msg) {
      eventHandler(msg, port);
    });

    if (!lbcPort) lbcPort = port;

    port.onDisconnect.addListener(function () {
      lbcPort = null;
    });
  }
});


Adequa.process.requests.leboncoin = function (parameters, callback) {
  if (Object.keys(parameters).length === 0) return callback([]);
  console.log(parameters)
  call_id = call_id + 1;
  requestBuffer[call_id] = {
    callback: callback || console.log
  };

  lbcPort.postMessage({what: "query", call_id, body: parameters});
};
