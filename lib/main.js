(function() {
    'use strict';
    var nintendo64SoftList = require('../data/soft_list');

    if (typeof define === 'function' && define.amd) {
        define(function() { return nintendo64SoftList; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = nintendo64SoftList;
    } else {
        window.gameSoft = {
            N64: nintendo64SoftList
        };
    }
})();