/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var r=e(require,exports);void 0!==r&&(module.exports=r)}else"function"==typeof define&&define.amd&&define(["require","exports","./Types"],e)}(function(e,r){"use strict";function t(e,r,t){return void 0===t&&(t=!0),e===r||!t&&e==r||u(e)&&u(r)}function n(e,r,n){return void 0===n&&(n=!0),t(e,r,n)?0:e&&i.Type.hasMember(e,f)?e.compareTo(r):r&&i.Type.hasMember(r,f)?-r.compareTo(e):e>r||n&&(0===e&&0==r||null===e&&r===l)?1:r>e||n&&(0===r&&0==e||null===r&&e===l)?-1:NaN}function o(e,r,n,u){if(void 0===n&&(n=!0),void 0===u&&(u=0),t(e,r,!0))return!0;if(null===e||e===l||null==r||r===l)return n?i.Type.isObject(e)?!Object.keys(e).length:i.Type.isObject(r)?!Object.keys(r).length:!(null!==e&&e!==l||null!=r&&r!==l):!1;if(i.Type.isObject(e)&&i.Type.isObject(r)){var f=Object.keys(e),s=Object.keys(r),a=f.length;if(a!=s.length)return!1;f.sort(),s.sort();for(var c=0;a>c;c++){var p=f[c];if(p!==s[c]||!t(e[p],r[p],!0))return!1}if(u>0)for(var y=0,v=f;y<v.length;y++){var p=v[y];if(!o(e[p],r[p],n,u-1))return!1}return!0}return!1}var i=e("./Types"),u=i.Type.isTrueNaN,l=void 0;r.areEqual=t;var f="compareTo";r.compare=n,r.areEquivalent=o});
//# sourceMappingURL=Compare.js.map
