/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","./Promise","../Threading/defer","../Exceptions/ArgumentNullException","../../extends"],e)}(function(e,t){"use strict";var n=e("./Promise"),o=e("../Threading/defer"),r=e("../Exceptions/ArgumentNullException"),i=e("../../extends"),s=i["default"],u=void 0,l=function(e){function t(t){if(e.call(this),this._resolver=t,!t)throw new r.ArgumentNullException("resolver");this._resolvedCalled=!0}return s(t,e),t.prototype._onDispose=function(){e.prototype._onDispose.call(this),this._resolver=u},t.prototype._onThen=function(){var e=this._resolver;e&&(this._resolver=u,this._resolvedCalled=!1,this.resolveUsing(e))},t.prototype.thenSynchronous=function(t,n){return this._onThen(),e.prototype.thenSynchronous.call(this,t,n)},t.prototype.thenThis=function(t,n){return this._onThen(),e.prototype.thenThis.call(this,t,n)},t.prototype.delayFromNow=function(n){var r=this;if(void 0===n&&(n=0),this.throwIfDisposed(),!this._resolver||this.isSettled)return e.prototype.delayFromNow.call(this,n);var i,s=!1,u=o.defer(function(){s=!0,i&&i()},n);return new t(function(e,t){i=function(){r.thenThis(function(t){return e(t)},function(e){return t(e)}),u.dispose(),u=null,i=null},s&&i()})},t.prototype.delayAfterResolve=function(n){var r=this;if(void 0===n&&(n=0),this.throwIfDisposed(),!this._resolver||this.isSettled)return e.prototype.delayAfterResolve.call(this,n);var i,s,u=function(){s&&(s.dispose(),s=null),i&&i(),u=null},l=function(){u&&(s=o.defer(u,n))};return e.prototype.thenThis.call(this,l,l),l=null,new t(function(e,t){r.isPending?(r.thenThis(function(t){return o.defer(function(){return e(t)},n)},function(e){return o.defer(function(){return t(e)},n)}),u()):(i=function(){r.thenThis(function(t){return e(t)},function(e){return t(e)})},u||i())})},t}(n.Promise);t.LazyPromise=l,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=l});
//# sourceMappingURL=LazyPromise.js.map
