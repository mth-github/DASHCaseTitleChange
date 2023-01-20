// ==UserScript==
// @name         DASH Case Title Change
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Updates page title to include short description, company name, and case number.
// @run-at       document-idle
// @author       Matt Hall
// @match        https://dash.rsmus.com/sn_customerservice_case.do?*
// @match        https://dash.rsmus.com/nav_to.do?uri=%252Fsn_customerservice_case.do*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

'use strict';
var newTitle = document.getElementById('sn_customerservice_case.short_description').value +" | "+ document.getElementById('sn_customerservice_case.account_label').value +" | "+ document.getElementById('sys_readonly.sn_customerservice_case.number').value
document.title = newTitle;
