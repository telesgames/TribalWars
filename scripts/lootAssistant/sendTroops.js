/**
 * Created by rafael on 21/03/17.
 */
(function () {
    "use strict";

    var lootAssistant = require("../../common/lootAssistant/lootAssistant.js");
    
    var from = Number(sessionStorage.getItem("sendTroops.from")) || 5,
        to = Number(sessionStorage.getItem("sendTroops.to")) || 30,
        type = Number(sessionStorage.getItem("sendTroops.type")) || "b",
        sender = null;

    if (type === "a") {
        sender = function (row) {
            row.sendA();
        }
    } else if (type === "b") {
        sender = function (row) {
            row.sendB();
        }
    } else {
        sender = function (row) {
            if (row.hasC) {
                row.sendC();
            }
        }
    }

    lootAssistant.rows.forEach(function (row) {
       if (row.distance > from && row.distance < to) {
            sender(row);
       }
    });
    

})();