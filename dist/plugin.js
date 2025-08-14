var capacitorPrinter = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
