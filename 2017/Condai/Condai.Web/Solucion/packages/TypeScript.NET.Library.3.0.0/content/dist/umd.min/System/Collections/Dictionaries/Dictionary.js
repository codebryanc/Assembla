/*!
 * @author electricessence / https://github.com/electricessence/
 * Original: http://linqjs.codeplex.com/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../../Compare","../../Types","../../Functions","../Enumeration/EnumeratorBase","../LinkedNodeList","../../Disposable/ObjectPool","./DictionaryBase","../../../extends"],e)}(function(e,t){"use strict";function n(e){return u||(u=new f.ObjectPool(20,function(){return new c.LinkedNodeList},function(e){return e.clear()})),e?void u.add(e):u.take()}function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e){return null===e?_:e===v?a.Type.UNDEFINED:a.Type.hasMemberOfType(e,k,a.Type.FUNCTION)?e.getHashCode():typeof e.toString==a.Type.FUNCTION?e.toString():Object.prototype.toString.call(e)}var u,i=e("../../Compare"),a=e("../../Types"),s=e("../../Functions"),l=e("../Enumeration/EnumeratorBase"),c=e("../LinkedNodeList"),f=e("../../Disposable/ObjectPool"),p=e("./DictionaryBase"),y=e("../../../extends"),d=y["default"],v=void 0,h=function(){function e(e,t,n,r){this.key=e,this.value=t,this.previous=n,this.next=r}return e}(),_="null",k="getHashCode",g=function(e){function t(t){void 0===t&&(t=s.Functions.Identity),e.call(this),this._keyComparer=t,this._entries=n(),this._buckets={}}return d(t,e),t.prototype.getCount=function(){return this._entries.unsafeCount},t.prototype._getBucket=function(e,t){if(null===e||e===v||!t&&!this.getCount())return null;var o=this._buckets,u=r(o,e)?o[e]:v;return t&&!u&&(o[e]=u=n()),u},t.prototype._getBucketEntry=function(e,t,n){if(null===e||e===v||!this.getCount())return null;var r=this,u=r._keyComparer,i=u(e);return n||(n=r._getBucket(t||o(i))),n&&n.find(function(e){return u(e.key)===i})},t.prototype._getEntry=function(e){var t=this._getBucketEntry(e);return t&&t.value},t.prototype.getValue=function(e){var t=this._getEntry(e);return t?t.value:v},t.prototype._setValueInternal=function(e,t){var r=this,u=r._buckets,a=r._entries,s=r._keyComparer,l=s(e),c=o(l),f=r._getBucket(c),p=f&&r._getBucketEntry(e,c,f);if(p){if(t!==v){var y=p.value.value;return p.value.value=t,!i.areEqual(t,y)}var d=f.removeNode(p),_=a.removeNode(p.value);if(d&&!f.count&&(delete u[c],n(f),f=null),d!==_)throw"Entries and buckets are out of sync.";if(d)return!0}else if(t!==v){f||(f=r._getBucket(c,!0));var k=new h(e,t);return a.addNode(k),f.addNode(new h(e,k)),!0}return!1},t.prototype._clearInternal=function(){var e=this,t=e._buckets;for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];delete t[r],n(o)}return e._entries.clear()},t.prototype.getEnumerator=function(){var e,t,n=this;return new l.EnumeratorBase(function(){e=n._version,t=n._entries.first},function(r){if(null!=t){n.assertVersion(e);var o={key:t.key,value:t.value};return t=t.next,r.yieldReturn(o)}return r.yieldBreak()})},t.prototype.getKeys=function(){for(var e=this,t=[],n=e._entries.first;n;)t.push(n.key),n=n.next;return t},t.prototype.getValues=function(){for(var e=this,t=[],n=e._entries.first;n;)t.push(n.value),n=n.next;return t},t}(p["default"]);t.Dictionary=g,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=g});
//# sourceMappingURL=Dictionary.js.map
