/**
 * Created by rafael on 21/03/17.
 */
(function () {
    "use strict";

    var lootAssistant = require("../../common/lootAssistant/lootAssistant.js");

    var from = Number(localStorage.getItem("sendTroops.from")) || 5,
        to = Number(localStorage.getItem("sendTroops.to")) || 30,
        type = Number(localStorage.getItem("sendTroops.type")) || "b",
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

    lootAssistant.rows = lootAssistant.rows.filter(function (row) {
        return row.distance > from && row.distance <= to;
    });

    var count = 0;
    function run() {
        if (count === lootAssistant.rows.length) {
            return;
        }

        sender(lootAssistant.rows[count++]);
        setTimeout(run, 210 + Math.random() * 20)
    }
    run();

})();