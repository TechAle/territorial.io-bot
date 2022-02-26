// ==UserScript==
// @name         Territorial.io bot
// @version      0.1
// @description  Trying to create a bot for the game territorial.io
// @author       TechAle
// @match        https://territorial.io/
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    GM_xmlhttpRequest({
        method: "GET",
        url: document.location.origin,
        onload: res => {
            const toChange = {
                "w && Math.floor(kQ[cJ] * x) !== B && (F = !0)": "x = Math.random(); w && Math.floor(kQ[cJ] * x) !== B && (F = !0)"
            };

            let html = res.responseText;
            for (const [before, after] of Object.entries(toChange)) {
                debugger;
                html = html.replace(before.replaceAll(" ", ""), after)
            }
            document.open();
            document.write(html);
            document.close();
        }
    })
})();