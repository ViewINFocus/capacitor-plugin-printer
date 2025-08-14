'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const Printer = core.registerPlugin('Printer', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.PrinterWeb()),
});

class PrinterWeb extends core.WebPlugin {
    async print() {
        console.log('Not supported web browsers!');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PrinterWeb: PrinterWeb
});

exports.Printer = Printer;
//# sourceMappingURL=plugin.cjs.js.map
