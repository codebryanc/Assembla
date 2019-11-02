/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../../Types","../../Disposable/DisposableBase","../../Disposable/ObjectPool","./IteratorResult","../../../extends"],function(e,t,r,n,i,o,s){"use strict";function u(e){return l||(l=new i.ObjectPool(40,function(){return new d},function(e){return e.yieldBreak()})),e?void l.add(e):l.take()}var l,a,c=s["default"],p=void 0,d=function(){function e(){this._current=p}return Object.defineProperty(e.prototype,"current",{get:function(){return this._current},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"index",{get:function(){return this._index},enumerable:!0,configurable:!0}),e.prototype.yieldReturn=function(e){return this._current=e,this._index===p?this._index=0:this._index++,!0},e.prototype.yieldBreak=function(){return this._current=p,this._index=p,!1},e.prototype.dispose=function(){this.yieldBreak()},e}();!function(e){e[e.Before=0]="Before",e[e.Running=1]="Running",e[e.After=2]="After"}(a||(a={}));var f=function(e){function t(t,n,i,o){e.call(this),this._initializer=t,this._tryGetNext=n,this.reset(),r.Type.isBoolean(o)?this._isEndless=o:r.Type.isBoolean(i)&&(this._isEndless=i),r.Type.isFunction(i)&&(this._disposer=i)}return c(t,e),Object.defineProperty(t.prototype,"current",{get:function(){var e=this._yielder;return e&&e.current},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"index",{get:function(){var e=this._yielder;return e&&e.index},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isEndless",{get:function(){return this._isEndless},enumerable:!0,configurable:!0}),t.prototype.reset=function(){var e=this;e.throwIfDisposed();var t=e._yielder;e._yielder=null,e._state=a.Before,t&&u(t)},t.prototype.moveNext=function(){var e=this;try{switch(e._state){case a.Before:e._yielder=e._yielder||u(),e._state=a.Running;var t=e._initializer;t&&t();case a.Running:return e._tryGetNext(e._yielder)?!0:(this.dispose(),!1);case a.After:return!1}}catch(r){throw this.dispose(),r}},t.prototype.nextValue=function(){return this.moveNext()?this.current:p},t.prototype.next=function(){return this.moveNext()?new o.IteratorResult(this.current,this.index):o.IteratorResult.Done},t.prototype["return"]=function(e){try{return e===p||this._state===a.After?o.IteratorResult.Done:new o.IteratorResult(e,p,!0)}finally{this.dispose()}},t.prototype._onDispose=function(){var e=this,t=e._disposer;e._initializer=null,e._disposer=null;var r=e._yielder;e._yielder=null,this._state=a.After,r&&u(r),t&&t()},t}(n.DisposableBase);t.EnumeratorBase=f,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=f});
//# sourceMappingURL=EnumeratorBase.js.map