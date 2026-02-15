var ve,w,ct,dt,N,je,ut,ft,pt,Me,Ce,Ee,Q={},ht=[],Wt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ge=Array.isArray;function U(e,t){for(var r in t)e[r]=t[r];return e}function Ae(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Nt(e,t,r){var n,o,i,s={};for(i in t)i=="key"?n=t[i]:i=="ref"?o=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?ve.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return le(e,s,n,o,null)}function le(e,t,r,n,o){var i={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++ct,__i:-1,__u:0};return o==null&&w.vnode!=null&&w.vnode(i),i}function B(e){return e.children}function G(e,t){this.props=e,this.context=t}function q(e,t){if(t==null)return e.__?q(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?q(e):null}function _t(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return _t(e)}}function Fe(e){(!e.__d&&(e.__d=!0)&&N.push(e)&&!de.__r++||je!=w.debounceRendering)&&((je=w.debounceRendering)||ut)(de)}function de(){for(var e,t,r,n,o,i,s,c=1;N.length;)N.length>c&&N.sort(ft),e=N.shift(),c=N.length,e.__d&&(r=void 0,n=void 0,o=(n=(t=e).__v).__e,i=[],s=[],t.__P&&((r=U({},n)).__v=n.__v+1,w.vnode&&w.vnode(r),Oe(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,i,o??q(n),!!(32&n.__u),s),r.__v=n.__v,r.__.__k[r.__i]=r,mt(i,r,s),n.__e=n.__=null,r.__e!=o&&_t(r)));de.__r=0}function vt(e,t,r,n,o,i,s,c,u,d,p){var a,h,f,v,k,S,y,m=n&&n.__k||ht,A=t.length;for(u=Bt(r,t,m,u,A),a=0;a<A;a++)(f=r.__k[a])!=null&&(h=f.__i==-1?Q:m[f.__i]||Q,f.__i=a,S=Oe(e,f,h,o,i,s,c,u,d,p),v=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&Re(h.ref,null,f),p.push(f.ref,f.__c||v,f)),k==null&&v!=null&&(k=v),(y=!!(4&f.__u))||h.__k===f.__k?u=gt(f,u,e,y):typeof f.type=="function"&&S!==void 0?u=S:v&&(u=v.nextSibling),f.__u&=-7);return r.__e=k,u}function Bt(e,t,r,n,o){var i,s,c,u,d,p=r.length,a=p,h=0;for(e.__k=new Array(o),i=0;i<o;i++)(s=t[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[i]=le(null,s,null,null,null):ge(s)?s=e.__k[i]=le(B,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[i]=le(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[i]=s,u=i+h,s.__=e,s.__b=e.__b+1,c=null,(d=s.__i=It(s,r,u,a))!=-1&&(a--,(c=r[d])&&(c.__u|=2)),c==null||c.__v==null?(d==-1&&(o>p?h--:o<p&&h++),typeof s.type!="function"&&(s.__u|=4)):d!=u&&(d==u-1?h--:d==u+1?h++:(d>u?h--:h++,s.__u|=4))):e.__k[i]=null;if(a)for(i=0;i<p;i++)(c=r[i])!=null&&!(2&c.__u)&&(c.__e==n&&(n=q(c)),bt(c,c));return n}function gt(e,t,r,n){var o,i;if(typeof e.type=="function"){for(o=e.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=e,t=gt(o[i],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=q(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function It(e,t,r,n){var o,i,s,c=e.key,u=e.type,d=t[r],p=d!=null&&(2&d.__u)==0;if(d===null&&c==null||p&&c==d.key&&u==d.type)return r;if(n>(p?1:0)){for(o=r-1,i=r+1;o>=0||i<t.length;)if((d=t[s=o>=0?o--:i++])!=null&&!(2&d.__u)&&c==d.key&&u==d.type)return s}return-1}function Ye(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Wt.test(t)?r:r+"px"}function oe(e,t,r,n,o){var i,s;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Ye(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||Ye(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(pt,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=r,r?n?r.u=n.u:(r.u=Me,e.addEventListener(t,i?Ee:Ce,i)):e.removeEventListener(t,i?Ee:Ce,i);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Xe(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Me++;else if(t.t<r.u)return;return r(w.event?w.event(t):t)}}}function Oe(e,t,r,n,o,i,s,c,u,d){var p,a,h,f,v,k,S,y,m,A,_,g,x,L,R,H,F,E=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(u=!!(32&r.__u),i=[c=t.__e=r.__e]),(p=w.__b)&&p(t);e:if(typeof E=="function")try{if(y=t.props,m="prototype"in E&&E.prototype.render,A=(p=E.contextType)&&n[p.__c],_=p?A?A.props.value:p.__:n,r.__c?S=(a=t.__c=r.__c).__=a.__E:(m?t.__c=a=new E(y,_):(t.__c=a=new G(y,_),a.constructor=E,a.render=Ft),A&&A.sub(a),a.state||(a.state={}),a.__n=n,h=a.__d=!0,a.__h=[],a._sb=[]),m&&a.__s==null&&(a.__s=a.state),m&&E.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=U({},a.__s)),U(a.__s,E.getDerivedStateFromProps(y,a.__s))),f=a.props,v=a.state,a.__v=t,h)m&&E.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),m&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(m&&E.getDerivedStateFromProps==null&&y!==f&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(y,_),t.__v==r.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(y,a.__s,_)===!1){for(t.__v!=r.__v&&(a.props=y,a.state=a.__s,a.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(z){z&&(z.__=t)}),g=0;g<a._sb.length;g++)a.__h.push(a._sb[g]);a._sb=[],a.__h.length&&s.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(y,a.__s,_),m&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(f,v,k)})}if(a.context=_,a.props=y,a.__P=e,a.__e=!1,x=w.__r,L=0,m){for(a.state=a.__s,a.__d=!1,x&&x(t),p=a.render(a.props,a.state,a.context),R=0;R<a._sb.length;R++)a.__h.push(a._sb[R]);a._sb=[]}else do a.__d=!1,x&&x(t),p=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++L<25);a.state=a.__s,a.getChildContext!=null&&(n=U(U({},n),a.getChildContext())),m&&!h&&a.getSnapshotBeforeUpdate!=null&&(k=a.getSnapshotBeforeUpdate(f,v)),H=p,p!=null&&p.type===B&&p.key==null&&(H=yt(p.props.children)),c=vt(e,ge(H)?H:[H],t,r,n,o,i,s,c,u,d),a.base=t.__e,t.__u&=-161,a.__h.length&&s.push(a),S&&(a.__E=a.__=null)}catch(z){if(t.__v=null,u||i!=null)if(z.then){for(t.__u|=u?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i[i.indexOf(c)]=null,t.__e=c}else{for(F=i.length;F--;)Ae(i[F]);Pe(t)}else t.__e=r.__e,t.__k=r.__k,z.then||Pe(t);w.__e(z,t,r)}else i==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):c=t.__e=jt(r.__e,t,r,n,o,i,s,u,d);return(p=w.diffed)&&p(t),128&t.__u?void 0:c}function Pe(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Pe)}function mt(e,t,r){for(var n=0;n<r.length;n++)Re(r[n],r[++n],r[++n]);w.__c&&w.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){w.__e(i,o.__v)}})}function yt(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:ge(e)?e.map(yt):U({},e)}function jt(e,t,r,n,o,i,s,c,u){var d,p,a,h,f,v,k,S=r.props||Q,y=t.props,m=t.type;if(m=="svg"?o="http://www.w3.org/2000/svg":m=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((f=i[d])&&"setAttribute"in f==!!m&&(m?f.localName==m:f.nodeType==3)){e=f,i[d]=null;break}}if(e==null){if(m==null)return document.createTextNode(y);e=document.createElementNS(o,m,y.is&&y),c&&(w.__m&&w.__m(t,i),c=!1),i=null}if(m==null)S===y||c&&e.data==y||(e.data=y);else{if(i=i&&ve.call(e.childNodes),!c&&i!=null)for(S={},d=0;d<e.attributes.length;d++)S[(f=e.attributes[d]).name]=f.value;for(d in S)if(f=S[d],d!="children"){if(d=="dangerouslySetInnerHTML")a=f;else if(!(d in y)){if(d=="value"&&"defaultValue"in y||d=="checked"&&"defaultChecked"in y)continue;oe(e,d,null,f,o)}}for(d in y)f=y[d],d=="children"?h=f:d=="dangerouslySetInnerHTML"?p=f:d=="value"?v=f:d=="checked"?k=f:c&&typeof f!="function"||S[d]===f||oe(e,d,f,S[d],o);if(p)c||a&&(p.__html==a.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(a&&(e.innerHTML=""),vt(t.type=="template"?e.content:e,ge(h)?h:[h],t,r,n,m=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:r.__k&&q(r,0),c,u),i!=null)for(d=i.length;d--;)Ae(i[d]);c||(d="value",m=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[d]||m=="progress"&&!v||m=="option"&&v!=S[d])&&oe(e,d,v,S[d],o),d="checked",k!=null&&k!=e[d]&&oe(e,d,k,S[d],o))}return e}function Re(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){w.__e(o,r)}}function bt(e,t,r){var n,o;if(w.unmount&&w.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||Re(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){w.__e(i,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&bt(n[o],t,r||typeof e.type!="function");r||Ae(e.__e),e.__c=e.__=e.__e=void 0}function Ft(e,t,r){return this.constructor(e,r)}function Yt(e,t,r){var n,o,i,s;t==document&&(t=document.documentElement),w.__&&w.__(e,t),o=(n=!1)?null:t.__k,i=[],s=[],Oe(t,e=t.__k=Nt(B,null,[e]),o||Q,Q,t.namespaceURI,o?null:t.firstChild?ve.call(t.childNodes):null,i,o?o.__e:t.firstChild,n,s),mt(i,e,s)}ve=ht.slice,w={__e:function(e,t,r,n){for(var o,i,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),s=o.__d),s)return o.__E=o}catch(c){e=c}throw e}},ct=0,dt=function(e){return e!=null&&e.constructor===void 0},G.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=U({},this.state),typeof e=="function"&&(e=e(U({},r),this.props)),e&&U(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Fe(this))},G.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Fe(this))},G.prototype.render=B,N=[],ut=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ft=function(e,t){return e.__v.__b-t.__v.__b},de.__r=0,pt=/(PointerCapture)$|Capture$/i,Me=0,Ce=Xe(!1),Ee=Xe(!0);var ee,$,be,qe,te=0,wt=[],C=w,Ke=C.__b,Ve=C.__r,Ge=C.diffed,Je=C.__c,Ze=C.unmount,Qe=C.__;function Ue(e,t){C.__h&&C.__h($,e,te||t),te=0;var r=$.__H||($.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function ue(e){return te=1,Xt(xt,e)}function Xt(e,t,r){var n=Ue(ee++,2);if(n.t=e,!n.__c&&(n.__=[xt(void 0,t),function(c){var u=n.__N?n.__N[0]:n.__[0],d=n.t(u,c);u!==d&&(n.__N=[d,n.__[1]],n.__c.setState({}))}],n.__c=$,!$.__f)){var o=function(c,u,d){if(!n.__c.__H)return!0;var p=n.__c.__H.__.filter(function(h){return!!h.__c});if(p.every(function(h){return!h.__N}))return!i||i.call(this,c,u,d);var a=n.__c.props!==c;return p.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(a=!0)}}),i&&i.call(this,c,u,d)||a};$.__f=!0;var i=$.shouldComponentUpdate,s=$.componentWillUpdate;$.componentWillUpdate=function(c,u,d){if(this.__e){var p=i;i=void 0,o(c,u,d),i=p}s&&s.call(this,c,u,d)},$.shouldComponentUpdate=o}return n.__N||n.__}function T(e,t){var r=Ue(ee++,3);!C.__s&&kt(r.__H,t)&&(r.__=e,r.u=t,$.__H.__h.push(r))}function Y(e){return te=5,me(function(){return{current:e}},[])}function me(e,t){var r=Ue(ee++,7);return kt(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function ie(e,t){return te=8,me(function(){return e},t)}function qt(){for(var e;e=wt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ce),e.__H.__h.forEach(Le),e.__H.__h=[]}catch(t){e.__H.__h=[],C.__e(t,e.__v)}}C.__b=function(e){$=null,Ke&&Ke(e)},C.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Qe&&Qe(e,t)},C.__r=function(e){Ve&&Ve(e),ee=0;var t=($=e.__c).__H;t&&(be===$?(t.__h=[],$.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(ce),t.__h.forEach(Le),t.__h=[],ee=0)),be=$},C.diffed=function(e){Ge&&Ge(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(wt.push(t)!==1&&qe===C.requestAnimationFrame||((qe=C.requestAnimationFrame)||Kt)(qt)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),be=$=null},C.__c=function(e,t){t.some(function(r){try{r.__h.forEach(ce),r.__h=r.__h.filter(function(n){return!n.__||Le(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],C.__e(n,r.__v)}}),Je&&Je(e,t)},C.unmount=function(e){Ze&&Ze(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{ce(n)}catch(o){t=o}}),r.__H=void 0,t&&C.__e(t,r.__v))};var et=typeof requestAnimationFrame=="function";function Kt(e){var t,r=function(){clearTimeout(n),et&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);et&&(t=requestAnimationFrame(r))}function ce(e){var t=$,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),$=t}function Le(e){var t=$;e.__c=e.__(),$=t}function kt(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function xt(e,t){return typeof t=="function"?t(e):t}var Vt=Symbol.for("preact-signals");function De(){if(X>1)X--;else{for(var e,t=!1;J!==void 0;){var r=J;for(J=void 0,Te++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&Ct(r))try{r.c()}catch(o){t||(e=o,t=!0)}r=n}}if(Te=0,X--,t)throw e}}var b=void 0;function St(e){var t=b;b=void 0;try{return e()}finally{b=t}}var J=void 0,X=0,Te=0,fe=0;function $t(e){if(b!==void 0){var t=e.n;if(t===void 0||t.t!==b)return t={i:0,S:e,p:b.s,n:void 0,t:b,e:void 0,x:void 0,r:t},b.s!==void 0&&(b.s.n=t),b.s=t,e.n=t,32&b.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=b.s,t.n=void 0,b.s.n=t,b.s=t),t}}function P(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}P.prototype.brand=Vt;P.prototype.h=function(){return!0};P.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:St(function(){var n;(n=t.W)==null||n.call(t)}))};P.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&St(function(){var o;(o=t.Z)==null||o.call(t)}))}};P.prototype.subscribe=function(e){var t=this;return We(function(){var r=t.value,n=b;b=void 0;try{e(r)}finally{b=n}},{name:"sub"})};P.prototype.valueOf=function(){return this.value};P.prototype.toString=function(){return this.value+""};P.prototype.toJSON=function(){return this.value};P.prototype.peek=function(){var e=b;b=void 0;try{return this.value}finally{b=e}};Object.defineProperty(P.prototype,"value",{get:function(){var e=$t(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Te>100)throw new Error("Cycle detected");this.v=e,this.i++,fe++,X++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{De()}}}});function D(e,t){return new P(e,t)}function Ct(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Et(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Pt(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function j(e,t){P.call(this,void 0),this.x=e,this.s=void 0,this.g=fe-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}j.prototype=new P;j.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===fe))return!0;if(this.g=fe,this.f|=1,this.i>0&&!Ct(this))return this.f&=-2,!0;var e=b;try{Et(this),b=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return b=e,Pt(this),this.f&=-2,!0};j.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}P.prototype.S.call(this,e)};j.prototype.U=function(e){if(this.t!==void 0&&(P.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};j.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(j.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=$t(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Gt(e,t){return new j(e,t)}function Lt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){X++;var r=b;b=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,He(e),n}finally{b=r,De()}}}function He(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Lt(e)}function Jt(e){if(b!==this)throw new Error("Out-of-order effect");Pt(this),b=e,this.f&=-2,8&this.f&&He(this),De()}function K(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}K.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};K.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Lt(this),Et(this),X++;var e=b;return b=this,Jt.bind(this,e)};K.prototype.N=function(){2&this.f||(this.f|=2,this.o=J,J=this)};K.prototype.d=function(){this.f|=8,1&this.f||He(this)};K.prototype.dispose=function(){this.d()};function We(e,t){var r=new K(e,t);try{r.c()}catch(o){throw r.d(),o}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var se;function V(e,t){w[e]=t.bind(null,w[e]||function(){})}function pe(e){if(se){var t=se;se=void 0,t()}se=e&&e.S()}function Tt(e){var t=this,r=e.data,n=O(r);n.value=r;var o=me(function(){for(var i=t.__v;i=i.__;)if(i.__c){i.__c.__$f|=4;break}return t.__$u.c=function(){var s,c=t.__$u.S(),u=o.value;c(),dt(u)||((s=t.base)==null?void 0:s.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=u},Gt(function(){var s=n.value.value;return s===0?0:s===!0?"":s||""})},[]);return o.value}Tt.displayName="_st";Object.defineProperties(P.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Tt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});V("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var o in n)if(o!=="children"){var i=n[o];i instanceof P&&(r||(t.__np=r={}),r[o]=i,n[o]=i.peek())}}e(t)});V("__r",function(e,t){e(t),pe();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(o){var i;return We(function(){i=this}),i.c=function(){n.__$f|=1,n.setState({})},i}())),pe(r)});V("__e",function(e,t,r,n){pe(),e(t,r,n)});V("diffed",function(e,t){pe();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,o=t.props;if(n){var i=r.U;if(i)for(var s in i){var c=i[s];c!==void 0&&!(s in n)&&(c.d(),i[s]=void 0)}else r.U=i={};for(var u in n){var d=i[u],p=n[u];d===void 0?(d=Zt(r,u,p,o),i[u]=d):d.o(p,o)}}}e(t)});function Zt(e,t,r,n){var o=t in e&&e.ownerSVGElement===void 0,i=D(r);return{o:function(s,c){i.value=s,n=c},d:We(function(){var s=i.value.value;n[t]!==s&&(n[t]=s,o?e[t]=s:s?e.setAttribute(t,s):e.removeAttribute(t))})}}V("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var o in n){var i=n[o];i&&i.d()}}}}else{var s=t.__c;if(s){var c=s.__$u;c&&(s.__$u=void 0,c.d())}}e(t)});V("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});G.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var o in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var i in e)if(i!=="__source"&&e[i]!==this.props[i])return!0;for(var s in this.props)if(!(s in e))return!0;return!1};function O(e){return me(function(){return D(e)},[])}function Ne(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function Qt(e,t){let r;const n=()=>{if(r)return r;const o=indexedDB.open(e);return o.onupgradeneeded=()=>o.result.createObjectStore(t),r=Ne(o),r.then(i=>{i.onclose=()=>r=void 0},()=>{}),r};return(o,i)=>n().then(s=>i(s.transaction(t,o).objectStore(t)))}let we;function zt(){return we||(we=Qt("keyval-store","keyval")),we}function Mt(e,t=zt()){return t("readonly",r=>Ne(r.get(e)))}function er(e,t,r=zt()){return r("readwrite",n=>(n.put(t,e),Ne(n.transaction)))}var tr=0;function l(e,t,r,n,o,i){t||(t={});var s,c,u=t;if("ref"in u)for(c in u={},t)c=="ref"?s=t[c]:u[c]=t[c];var d={type:e,props:u,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--tr,__i:-1,__u:0,__source:o,__self:i};if(typeof e=="function"&&(s=e.defaultProps))for(c in s)u[c]===void 0&&(u[c]=s[c]);return w.vnode&&w.vnode(d),d}var rr=Object.defineProperty,nr=(e,t)=>{for(var r in t)rr(e,r,{get:t[r],enumerable:!0})};function or(e){return he=new At(e),he}function ir(){if(!he)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return he}var At,he;async function sr(e,t){const r=ir(),n=await r.getProduct(e);if(!n.variants.edges.length)throw new Error("Product has no variants");const i=[{variantId:n.variants.edges[0].node.id,quantity:1}],s=await r.createCheckout(i);if(t&&typeof localStorage<"u"){const c={checkoutId:s.id,bookSlug:t,createdAt:Date.now()};localStorage.setItem(lr,JSON.stringify(c))}return s.webUrl}function ar(e){return e.webUrl}var lr;async function cr(e,t){const r={bookSlug:e,orderId:t==null?void 0:t.orderId,email:t==null?void 0:t.email,unlockedAt:Date.now()};await er(`${re}${e}`,r),typeof localStorage<"u"&&localStorage.setItem(`${re}${e}`,JSON.stringify(r))}async function dr(e){if(typeof localStorage<"u"&&localStorage.getItem(`${re}${e}`))return!0;try{return!!await Mt(`${re}${e}`)}catch{return!1}}async function ur(e){try{return await Mt(`${re}${e}`)||null}catch{return null}}async function fr(e,t){const r=await ur(e);return!r||!r.orderId?!1:r.orderId===t}var re,pr={};nr(pr,{ShopifyClient:()=>At,createCheckout:()=>sr,createShopifyClient:()=>or,getCheckoutUrl:()=>ar,isContentUnlocked:()=>dr,unlockContent:()=>cr,verifyPurchase:()=>fr});function hr({prev:e,next:t}){return!e&&!t?null:l("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[l("div",{class:"pressy-nav-inner",children:[e?l("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[l("span",{class:"pressy-nav-direction",children:"Previous"}),l("span",{class:"pressy-nav-title",children:e.title})]}):l("div",{class:"pressy-nav-placeholder"}),t?l("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[l("span",{class:"pressy-nav-direction",children:"Next"}),l("span",{class:"pressy-nav-title",children:t.title})]}):l("div",{class:"pressy-nav-placeholder"})]}),l("style",{children:`
        .pressy-navigation {
          border-top: 1px solid var(--color-border);
          padding: 2rem 1.5rem;
          margin-top: 3rem;
        }

        .pressy-nav-inner {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          max-width: 65ch;
          margin: 0 auto;
        }

        .pressy-nav-link {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          text-decoration: none;
          padding: 1rem;
          border-radius: 0.5rem;
          transition: background 0.15s;
          max-width: 45%;
        }

        .pressy-nav-link:hover {
          background: var(--color-bg-subtle);
        }

        .pressy-nav-prev {
          align-items: flex-start;
        }

        .pressy-nav-next {
          align-items: flex-end;
          text-align: right;
        }

        .pressy-nav-direction {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .pressy-nav-title {
          color: var(--color-text);
          font-weight: 500;
        }

        .pressy-nav-placeholder {
          flex: 1;
        }

        @media (max-width: 640px) {
          .pressy-nav-inner {
            flex-direction: column;
            gap: 1rem;
          }

          .pressy-nav-link {
            max-width: 100%;
          }

          .pressy-nav-next {
            align-items: flex-start;
            text-align: left;
          }
        }
      `})]})}function Ot(){const e=O(!1),t=O({x:0,y:0}),r=O(""),n=Y(null);T(()=>{const c=()=>{const u=window.getSelection();if(!u||u.isCollapsed){e.value=!1;return}const d=u.toString().trim();if(d.length<5){e.value=!1;return}r.value=d;const a=u.getRangeAt(0).getBoundingClientRect();t.value={x:a.left+a.width/2,y:a.top-10},e.value=!0};return document.addEventListener("selectionchange",c),document.addEventListener("mouseup",c),()=>{document.removeEventListener("selectionchange",c),document.removeEventListener("mouseup",c)}},[]);const o=()=>{const c=encodeURIComponent(r.value),u=new URL(window.location.href);return u.hash=`:~:text=${c}`,u.toString()},i=async()=>{const c=o(),u=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:u,url:c}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${u}

${c}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var d;(d=n.current)==null||d.classList.remove("copied")},2e3))}catch(d){console.error("Failed to copy to clipboard:",d)}},s=async()=>{const c=o();try{await navigator.clipboard.writeText(c),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var u;(u=n.current)==null||u.classList.remove("copied")},2e3))}catch(u){console.error("Failed to copy link:",u)}};return e.value?l("div",{ref:n,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[l("button",{class:"pressy-share-btn",onClick:i,"aria-label":"Share selected text",title:"Share quote",children:l("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:l("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),l("button",{class:"pressy-copy-link-btn",onClick:s,"aria-label":"Copy link to selected text",title:"Copy link",children:l("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:l("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),l("style",{children:`
        .pressy-text-share {
          position: fixed;
          transform: translate(-50%, -100%);
          display: flex;
          gap: 0.25rem;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 0.5rem;
          padding: 0.25rem;
          box-shadow: var(--shadow-md);
          z-index: 1000;
        }

        .pressy-text-share::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid var(--color-bg);
        }

        .pressy-share-btn,
        .pressy-copy-link-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border: none;
          background: transparent;
          color: var(--color-text-muted);
          cursor: pointer;
          border-radius: 0.25rem;
          transition: background 0.15s, color 0.15s;
        }

        .pressy-share-btn:hover,
        .pressy-copy-link-btn:hover {
          background: var(--color-bg-muted);
          color: var(--color-text);
        }

        .pressy-text-share.copied .pressy-copy-link-btn {
          color: var(--color-accent);
        }
      `})]}):null}function Rt(){const e=O(!navigator.onLine),t=O(!1);return T(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?l("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?l(B,{children:[l("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:l("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),l("span",{children:"You're offline"})]}):l(B,{children:[l("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:l("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),l("span",{children:"Back online"})]}),l("style",{children:`
        .pressy-offline-indicator {
          position: fixed;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 2rem;
          font-size: var(--font-size-sm);
          font-weight: 500;
          z-index: 1000;
          animation: slideUp 0.3s ease;
        }

        .pressy-offline-indicator.offline {
          background: #fef2f2;
          color: #dc2626;
          border: 1px solid #fecaca;
        }

        .pressy-offline-indicator.online {
          background: #f0fdf4;
          color: #16a34a;
          border: 1px solid #bbf7d0;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @media (prefers-color-scheme: dark) {
          .pressy-offline-indicator.offline {
            background: #450a0a;
            color: #fca5a5;
            border-color: #7f1d1d;
          }

          .pressy-offline-indicator.online {
            background: #052e16;
            color: #86efac;
            border-color: #166534;
          }
        }
      `})]}):null}function Be({children:e,prevChapter:t,nextChapter:r,showDropCap:n=!0,paginationMode:o="scroll",onSaveProgress:i,onRestoreProgress:s,bookProgressPercent:c}){return o==="paginated"?l(vr,{prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:i,onRestoreProgress:s,bookProgressPercent:c,children:e}):l(_r,{prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:i,onRestoreProgress:s,children:e})}function _r({children:e,prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:o,onRestoreProgress:i}){const s=Y(null);return T(()=>{i&&i().then(c=>{c&&c.scrollPosition>0&&window.scrollTo(0,c.scrollPosition)})},[]),T(()=>{if(!o)return;const c=()=>{s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{o({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",c,{passive:!0}),()=>{window.removeEventListener("scroll",c),s.current&&clearTimeout(s.current)}},[o]),T(()=>{if(!o)return;const c=()=>{o({page:0,totalPages:0,scrollPosition:window.scrollY})};return window.addEventListener("beforeunload",c),()=>window.removeEventListener("beforeunload",c)},[o]),l("div",{class:"pressy-reader",children:[l("main",{class:"pressy-reader-main",children:l("article",{class:`pressy-prose ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),l(Ot,{}),l(hr,{prev:t,next:r}),l(Rt,{}),l("style",{children:gr})]})}function vr({children:e,prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:o,onRestoreProgress:i,bookProgressPercent:s}){const c=Y(null),u=Y(null),[d,p]=ue(0),[a,h]=ue(1),f=Y(!1),v=Y(null),k=ie(()=>{const _=u.current,g=c.current;if(!_||!g)return;const x=g.clientWidth;if(x===0)return;_.style.columnWidth=`${x}px`,_.scrollWidth;const L=Math.max(1,Math.round(_.scrollWidth/x));h(L),p(R=>Math.min(R,L-1))},[]);T(()=>{const _=c.current;if(!_)return;const g=setTimeout(k,50),x=new ResizeObserver(()=>{k()});return x.observe(_),()=>{clearTimeout(g),x.disconnect()}},[k]),T(()=>{const _=u.current;if(!_)return;const g=_.querySelectorAll("img");if(g.length===0)return;const x=()=>k();return g.forEach(L=>{L.complete||(L.addEventListener("load",x),L.addEventListener("error",x))}),()=>{g.forEach(L=>{L.removeEventListener("load",x),L.removeEventListener("error",x)})}},[k]),T(()=>{f.current||!i||a<=1||(f.current=!0,i().then(_=>{if(_&&_.page>0){const g=Math.min(_.page,a-1);p(g)}}))},[a,i]),T(()=>{const _=u.current,g=c.current;if(!_||!g)return;const x=d*g.clientWidth;_.style.transform=`translateX(-${x}px)`},[d]),T(()=>{if(!(!o||!f.current))return v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{o({page:d,totalPages:a,scrollPosition:0})},300),()=>{v.current&&clearTimeout(v.current)}},[d,a,o]),T(()=>{if(!o)return;const _=()=>{o({page:d,totalPages:a,scrollPosition:0})};return window.addEventListener("beforeunload",_),()=>window.removeEventListener("beforeunload",_)},[d,a,o]);const S=ie(_=>{const g=Math.max(0,Math.min(_,a-1));p(g)},[a]),y=ie(()=>{if(d>=a-1){r&&(window.location.href=r.slug);return}S(d+1)},[d,a,r,S]),m=ie(()=>{if(d<=0){t&&(window.location.href=t.slug);return}S(d-1)},[d,t,S]);T(()=>{const _=g=>{const x=g.target.tagName;x==="INPUT"||x==="TEXTAREA"||x==="SELECT"||(g.key==="ArrowRight"||g.key===" "?(g.preventDefault(),y()):g.key==="ArrowLeft"?(g.preventDefault(),m()):g.key==="Home"?(g.preventDefault(),S(0)):g.key==="End"&&(g.preventDefault(),S(a-1)))};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[y,m,S,a]),T(()=>{const _=c.current;if(!_)return;let g=0,x=0,L=!1;const R=E=>{g=E.touches[0].clientX,x=E.touches[0].clientY,L=!1},H=E=>{const z=E.touches[0].clientX-g,ne=E.touches[0].clientY-x;Math.abs(z)>Math.abs(ne)&&Math.abs(z)>10&&(L=!0,E.preventDefault())},F=E=>{if(!L)return;const z=E.changedTouches[0].clientX-g,ne=50;z<-ne?y():z>ne&&m()};return _.addEventListener("touchstart",R,{passive:!0}),_.addEventListener("touchmove",H,{passive:!1}),_.addEventListener("touchend",F,{passive:!0}),()=>{_.removeEventListener("touchstart",R),_.removeEventListener("touchmove",H),_.removeEventListener("touchend",F)}},[y,m]);const A=a>1?(d+1)/a*100:100;return l("div",{class:"pressy-reader pressy-reader--paginated",children:[l("div",{class:"pressy-paginated-viewport",ref:c,children:l("article",{ref:u,class:`pressy-prose pressy-prose--paginated ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),l("div",{class:"pressy-tap-zone pressy-tap-prev",onClick:m,"aria-label":"Previous page"}),l("div",{class:"pressy-tap-zone pressy-tap-next",onClick:y,"aria-label":"Next page"}),l("div",{class:"pressy-page-footer",children:[l("div",{class:"pressy-progress-bar",children:l("div",{class:"pressy-progress-fill",style:{width:`${A}%`}})}),l("div",{class:"pressy-page-indicator",children:[l("span",{children:["Page ",d+1," of ",a]}),s!=null&&l("span",{class:"pressy-book-progress",children:[Math.round(s),"% of book"]})]})]}),l(Ot,{}),l(Rt,{}),l("style",{children:mr})]})}var gr=`
  .pressy-reader {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .pressy-reader-main {
    flex: 1;
    padding: 2rem 0;
  }
`,mr=`
  .pressy-reader--paginated {
    height: 100vh;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }

  /* Viewport clips overflow and shows one page at a time.
     Vertical padding gives consistent top/bottom margins on every page. */
  .pressy-paginated-viewport {
    flex: 1;
    overflow: hidden;
    position: relative;
    min-height: 0;
    padding-block: 2rem;
    box-sizing: border-box;
  }

  /* Article uses CSS multi-column layout for pagination.
     column-width is set dynamically via JS to match viewport width.
     Each column = one "page". Content overflows horizontally into new columns.
     We use translateX to show the current page. */
  .pressy-prose--paginated {
    max-width: none;
    height: 100%;
    column-fill: auto;
    column-gap: 0;
    overflow: visible;
    box-sizing: border-box;
    padding: 0;
    will-change: transform;
    transition: transform 0.3s ease;
  }

  /* Center content elements within each column/page at a readable width */
  .pressy-prose--paginated > * {
    max-width: min(65ch, calc(100% - 3rem));
    margin-left: auto;
    margin-right: auto;
  }

  /* Preserve vertical margins from prose styles */
  .pressy-prose--paginated > h1,
  .pressy-prose--paginated > h2,
  .pressy-prose--paginated > h3,
  .pressy-prose--paginated > h4 {
    max-width: min(65ch, calc(100% - 3rem));
    margin-left: auto;
    margin-right: auto;
  }

  /* Tap zones — invisible overlays on left/right thirds of screen */
  .pressy-tap-zone {
    position: absolute;
    top: 0;
    bottom: 60px;
    z-index: 10;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .pressy-tap-prev {
    left: 0;
    width: 33%;
  }

  .pressy-tap-next {
    right: 0;
    width: 33%;
  }

  /* Page footer */
  .pressy-page-footer {
    flex-shrink: 0;
    padding: 0.5rem 1.5rem 1rem;
    text-align: center;
    user-select: none;
  }

  /* Progress bar */
  .pressy-progress-bar {
    height: 3px;
    background: var(--color-border, #dee2e6);
    border-radius: 1.5px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .pressy-progress-fill {
    height: 100%;
    background: var(--color-accent, #212529);
    border-radius: 1.5px;
    transition: width 0.3s ease;
  }

  /* Page indicator */
  .pressy-page-indicator {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-muted, #6c757d);
    letter-spacing: 0.02em;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }

  .pressy-book-progress {
    opacity: 0.7;
  }
`,yr="pressy-cached-books";function tt(){try{const e=localStorage.getItem(yr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function br({bookSlug:e,chapterUrls:t,cachedBooks:r,cacheProgress:n,onDownload:o,onRemove:i}){var d;const s=O(tt().has(e)||r.value.has(e)),c=O(((d=n.value)==null?void 0:d.bookSlug)===e),u=O(null);return T(()=>{const p=()=>{var f;s.value=tt().has(e)||r.value.has(e),c.value=((f=n.value)==null?void 0:f.bookSlug)===e;const h=n.value;u.value=h&&h.bookSlug===e?Math.round(h.current/h.total*100):null},a=setInterval(p,500);return p(),()=>clearInterval(a)},[e]),s.value?l("div",{class:"pressy-download-book",children:[l("div",{class:"pressy-download-status",children:[l("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:l("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),l("span",{children:"Available offline"})]}),l("button",{class:"pressy-download-remove",onClick:()=>i(e),"aria-label":"Remove offline copy",children:"Remove"}),l("style",{children:ke})]}):c.value?l("div",{class:"pressy-download-book",children:[l("div",{class:"pressy-download-progress",children:[l("div",{class:"pressy-download-bar",children:l("div",{class:"pressy-download-bar-fill",style:{width:`${u.value||0}%`}})}),l("span",{class:"pressy-download-percent",children:[u.value||0,"%"]})]}),l("style",{children:ke})]}):l("div",{class:"pressy-download-book",children:[l("button",{class:"pressy-download-btn",onClick:()=>o(e,t),"aria-label":"Download for offline reading",children:[l("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:l("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),l("span",{children:"Download for offline"})]}),l("style",{children:ke})]})}var ke=`
  .pressy-download-book {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
  }

  .pressy-download-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    font-family: inherit;
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text, #1a1a1a);
    background: var(--color-bg-muted, #f5f5f5);
    border: 1px solid var(--color-border, #e5e5e5);
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
  }

  .pressy-download-btn:hover {
    background: var(--color-bg-subtle, #eee);
    border-color: var(--color-text-muted, #999);
  }

  .pressy-download-status {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--font-size-sm, 0.875rem);
    color: #16a34a;
  }

  .pressy-download-remove {
    font-family: inherit;
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-muted, #666);
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
    padding: 0;
  }

  .pressy-download-remove:hover {
    color: var(--color-text, #1a1a1a);
  }

  .pressy-download-progress {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
    max-width: 300px;
  }

  .pressy-download-bar {
    flex: 1;
    height: 6px;
    background: var(--color-bg-muted, #f5f5f5);
    border-radius: 3px;
    overflow: hidden;
  }

  .pressy-download-bar-fill {
    height: 100%;
    background: var(--color-text, #1a1a1a);
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  .pressy-download-percent {
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-muted, #666);
    min-width: 3ch;
    text-align: right;
  }

  @media (prefers-color-scheme: dark) {
    .pressy-download-status {
      color: #86efac;
    }
  }
`;function wr({chapters:e,basePath:t,bookSlug:r,loadAllProgress:n}){const[o,i]=ue(new Map);T(()=>{n().then(h=>{const f=new Set(e.map(k=>k.slug)),v=new Map;for(const k of h)f.has(k.chapterSlug)&&v.set(k.chapterSlug,{page:k.page,totalPages:k.totalPages});i(v)})},[e,n]);const s=e.reduce((h,f)=>h+(f.wordCount||0),0);let c=0,u=0,d=0;for(const h of e){const f=o.get(h.slug);if(!f)continue;const v=h.wordCount||0;f.totalPages>0&&f.page>=f.totalPages-1?(c+=v,u++,d++):f.page>0&&f.totalPages>0&&(c+=f.page/f.totalPages*v,d++)}const p=s>0?c/s*100:0,a=d>0;return l("div",{class:"pressy-book-progress-section",children:[a&&l("div",{class:"pressy-overall-progress",children:[l("div",{class:"pressy-overall-progress-bar",children:l("div",{class:"pressy-overall-progress-fill",style:{width:`${p}%`}})}),l("div",{class:"pressy-overall-progress-text",children:[Math.round(p),"% complete",l("span",{class:"pressy-overall-progress-detail",children:[u," of ",e.length," chapters"]})]})]}),l("nav",{class:"pressy-chapter-list",children:e.map(h=>{const f=o.get(h.slug),v=f&&f.totalPages>0&&f.page>=f.totalPages-1,k=f&&f.page>0&&!v;return l("a",{href:`${t}/books/${r}/${h.slug}`,class:`pressy-chapter-link ${v?"pressy-chapter--completed":""} ${k?"pressy-chapter--started":""}`,children:[l("span",{class:"pressy-chapter-order",children:[h.order,"."]}),l("span",{class:"pressy-chapter-title",children:h.title}),v&&l("span",{class:"pressy-chapter-badge pressy-chapter-badge--done",children:"Done"}),k&&f&&l("span",{class:"pressy-chapter-badge pressy-chapter-badge--reading",children:["p.",f.page+1,"/",f.totalPages]})]})})}),l("style",{children:kr})]})}var kr=`
  .pressy-overall-progress {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: var(--color-bg-subtle, #f5f5f5);
    border-radius: 0.5rem;
  }

  .pressy-overall-progress-bar {
    height: 4px;
    background: var(--color-border, #dee2e6);
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .pressy-overall-progress-fill {
    height: 100%;
    background: var(--color-accent, #212529);
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  .pressy-overall-progress-text {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-muted, #6c757d);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pressy-overall-progress-detail {
    opacity: 0.7;
  }

  .pressy-chapter-link {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: var(--color-text, #1a1a1a);
    border-radius: 0.5rem;
    transition: background 0.15s;
  }

  .pressy-chapter-link:hover {
    background: var(--color-bg-subtle, #f5f5f5);
  }

  .pressy-chapter--completed {
    opacity: 0.7;
  }

  .pressy-chapter-title {
    flex: 1;
  }

  .pressy-chapter-badge {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.75rem;
    padding: 0.15rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;
  }

  .pressy-chapter-badge--done {
    background: var(--color-accent, #212529);
    color: var(--color-bg, #fff);
  }

  .pressy-chapter-badge--reading {
    background: var(--color-bg-subtle, #f5f5f5);
    color: var(--color-text-muted, #6c757d);
    border: 1px solid var(--color-border, #dee2e6);
  }
`;function xr({id:e,children:t}){const r=O(!1);return l(B,{children:[l("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&l("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,l("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),l("style",{children:`
        .pressy-footnote-ref {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 1.25em;
          height: 1.25em;
          padding: 0 0.25em;
          font-size: 0.75em;
          font-weight: 600;
          color: var(--color-accent);
          background: var(--color-bg-subtle);
          border: none;
          border-radius: 0.25em;
          cursor: pointer;
          vertical-align: super;
          line-height: 1;
          transition: background 0.15s;
        }

        .pressy-footnote-ref:hover {
          background: var(--color-bg-muted);
        }

        .pressy-footnote-content {
          display: inline-block;
          position: relative;
          margin-left: 0.5em;
          padding: 0.5em 2em 0.5em 0.75em;
          font-size: var(--font-size-sm);
          background: var(--color-bg-subtle);
          border-radius: 0.375em;
          border: 1px solid var(--color-border);
          max-width: 300px;
          vertical-align: baseline;
        }

        .pressy-footnote-close {
          position: absolute;
          top: 0.25em;
          right: 0.25em;
          width: 1.5em;
          height: 1.5em;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1em;
          color: var(--color-text-muted);
          background: none;
          border: none;
          cursor: pointer;
          border-radius: 0.25em;
        }

        .pressy-footnote-close:hover {
          background: var(--color-bg-muted);
          color: var(--color-text);
        }
      `})]})}function Sr({children:e,title:t}){return l("aside",{class:"pressy-aside",children:[t&&l("strong",{class:"pressy-aside-title",children:t}),l("div",{class:"pressy-aside-content",children:e}),l("style",{children:`
        .pressy-aside {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
          border-left: 3px solid var(--color-accent);
          padding-left: 1em;
          margin-block: 1.5em;
        }

        .pressy-aside-title {
          display: block;
          color: var(--color-heading);
          margin-bottom: 0.5em;
          font-weight: 600;
        }

        .pressy-aside-content {
          line-height: 1.5;
        }

        .pressy-aside-content p:first-child {
          margin-top: 0;
        }

        .pressy-aside-content p:last-child {
          margin-bottom: 0;
        }

        @media (min-width: 80ch) {
          .pressy-aside {
            float: right;
            width: 40%;
            margin-left: 2em;
            margin-right: calc(-1 * ((100vw - 65ch) / 4));
          }
        }
      `})]})}function rt({src:e,alt:t,caption:r,wide:n,children:o}){return l("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[l("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||o)&&l("figcaption",{class:"pressy-figure-caption",children:r||o}),l("style",{children:`
        .pressy-figure {
          margin-block: 2em;
          margin-inline: 0;
        }

        .pressy-figure img {
          width: 100%;
          height: auto;
          border-radius: 0.5em;
        }

        .pressy-figure-caption {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
          text-align: center;
          margin-top: 0.75em;
          font-style: italic;
        }

        .pressy-figure-wide {
          margin-inline: 0;
        }

        @media (min-width: 80ch) {
          .pressy-figure-wide {
            margin-inline: calc(-1 * ((100vw - 65ch) / 4));
            max-width: none;
          }
        }
      `})]})}var $r={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},Cr={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function Er({type:e="note",title:t,children:r}){return l("div",{class:`pressy-callout pressy-callout-${e}`,children:[l("div",{class:"pressy-callout-header",children:[l("span",{class:"pressy-callout-icon",children:$r[e]}),l("strong",{class:"pressy-callout-title",children:t||Cr[e]})]}),l("div",{class:"pressy-callout-content",children:r}),l("style",{children:`
        .pressy-callout {
          border-radius: 0.5em;
          padding: 1em 1.25em;
          margin-block: 1.5em;
        }

        .pressy-callout-note {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
        }

        .pressy-callout-tip {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
        }

        .pressy-callout-warning {
          background: #fffbeb;
          border: 1px solid #fde68a;
        }

        .pressy-callout-important {
          background: #fef2f2;
          border: 1px solid #fecaca;
        }

        .pressy-callout-header {
          display: flex;
          align-items: center;
          gap: 0.5em;
          margin-bottom: 0.5em;
        }

        .pressy-callout-icon {
          font-size: 1.25em;
        }

        .pressy-callout-title {
          font-weight: 600;
        }

        .pressy-callout-content {
          font-size: var(--font-size-sm);
          line-height: 1.5;
        }

        .pressy-callout-content p:first-child {
          margin-top: 0;
        }

        .pressy-callout-content p:last-child {
          margin-bottom: 0;
        }

        /* Dark mode adjustments */
        @media (prefers-color-scheme: dark) {
          .pressy-callout-note {
            background: #1e3a5f;
            border-color: #1e40af;
          }

          .pressy-callout-tip {
            background: #052e16;
            border-color: #166534;
          }

          .pressy-callout-warning {
            background: #422006;
            border-color: #854d0e;
          }

          .pressy-callout-important {
            background: #450a0a;
            border-color: #991b1b;
          }
        }

        [data-theme="dark"] .pressy-callout-note {
          background: #1e3a5f;
          border-color: #1e40af;
        }

        [data-theme="dark"] .pressy-callout-tip {
          background: #052e16;
          border-color: #166534;
        }

        [data-theme="dark"] .pressy-callout-warning {
          background: #422006;
          border-color: #854d0e;
        }

        [data-theme="dark"] .pressy-callout-important {
          background: #450a0a;
          border-color: #991b1b;
        }
      `})]})}function nt({variant:e="asterisks"}){return l("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&l("span",{children:"* * *"}),e==="ornament"&&l("span",{children:"❧"}),l("style",{children:`
        .pressy-scene-break {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-block: 3em;
          color: var(--color-text-muted);
        }

        .pressy-scene-break-asterisks span {
          letter-spacing: 0.5em;
          font-size: 1.25em;
        }

        .pressy-scene-break-line {
          width: 100%;
          max-width: 10ch;
          height: 1px;
          background: var(--color-border);
        }

        .pressy-scene-break-ornament span {
          font-size: 1.5em;
        }
      `})]})}var Pr={Footnote:xr,Aside:Sr,Figure:rt,Callout:Er,SceneBreak:nt,img:rt,hr:nt},Lr={};function Ie(){return{...Pr,...Lr}}var Ut="pressy-cached-books",xe=D("online"),_e=D(null),Se=D(!1);function Tr(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(Ut);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var M=D(Tr());typeof window<"u"&&(xe.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{xe.value="online"}),window.addEventListener("offline",()=>{xe.value="offline"}));async function zr(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",Mr),navigator.serviceWorker.controller?Se.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{Se.value=!0}),n.addEventListener("updatefound",()=>{const o=n.installing;o&&o.addEventListener("statechange",()=>{o.state==="activated"&&(Se.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function Z(){try{localStorage.setItem(Ut,JSON.stringify([...M.value]))}catch{}}function Mr(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:o}=e.data;_e.value={bookSlug:r,current:n,total:o}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;_e.value=null;const n=new Set(M.value);n.add(r),M.value=n,Z()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const o of r){const i=o.match(/\/books\/([^/]+)/);i&&n.add(i[1])}M.value=n,Z()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(M.value);n.delete(r),M.value=n,Z()}}async function Ar(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(o=>o.startsWith("http")?o:`${window.location.origin}${o}`);_e.value={bookSlug:e,current:0,total:r.length};const n=new Set(M.value);return n.add(e),M.value=n,Z(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}async function Or(e){const t=new Set(M.value);if(t.delete(e),M.value=t,Z(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const o of n)o.url.includes(`/books/${e}`)&&await r.delete(o);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var ot=D("/"),Rr=D("light"),it=D(!navigator.onLine),Ur="pressy",Dr=1,W="reading-progress",st="unlocks",ae=null;async function ye(){return ae||new Promise((e,t)=>{const r=indexedDB.open(Ur,Dr);r.onerror=()=>t(r.error),r.onsuccess=()=>{ae=r.result,e(ae)},r.onupgradeneeded=n=>{const o=n.target.result;o.objectStoreNames.contains(W)||o.createObjectStore(W,{keyPath:"chapterSlug"}),o.objectStoreNames.contains(st)||o.createObjectStore(st,{keyPath:"bookSlug"})}})}async function Hr(e){const t=await ye();return new Promise((r,n)=>{const s=t.transaction(W,"readwrite").objectStore(W).put(e);s.onsuccess=()=>r(),s.onerror=()=>n(s.error)})}async function Wr(e){const t=await ye();return new Promise((r,n)=>{const s=t.transaction(W,"readonly").objectStore(W).get(e);s.onsuccess=()=>r(s.result||null),s.onerror=()=>n(s.error)})}async function ze(){const e=await ye();return new Promise((t,r)=>{const i=e.transaction(W,"readonly").objectStore(W).getAll();i.onsuccess=()=>t(i.result||[]),i.onerror=()=>r(i.error)})}function at(e){Rr.value=e,document.documentElement.setAttribute("data-theme",e),localStorage.setItem("pressy-theme",e)}function Nr(){const e=localStorage.getItem("pressy-theme");e?at(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&at("dark")}function Br(){window.addEventListener("online",()=>{it.value=!1}),window.addEventListener("offline",()=>{it.value=!0})}function Dt(e,t=[]){const r=e.chapters.map(n=>`/books/${e.slug}/${n.slug}`);return l("div",{class:"pressy-home",children:[l("header",{class:"pressy-home-header",children:[l("h1",{children:e.metadata.title}),l("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&l("p",{class:"pressy-home-desc",children:e.metadata.description})]}),l(br,{bookSlug:e.slug,chapterUrls:r,cachedBooks:M,cacheProgress:_e,onDownload:Ar,onRemove:Or}),l("section",{class:"pressy-home-section",children:[l("h2",{children:"Chapters"}),l(wr,{bookSlug:e.slug,chapters:e.chapters.map(n=>({slug:n.slug,title:n.title,order:n.order,wordCount:n.wordCount||0})),basePath:I,loadAllProgress:ze})]}),t.length>0&&l("section",{class:"pressy-home-section",children:[l("h2",{children:"Articles"}),l("nav",{class:"pressy-chapter-list",children:t.map(n=>l("a",{href:`${I}/articles/${n.slug}`,class:"pressy-chapter-link",children:n.metadata.title}))})]}),l("style",{children:Ht})]})}function $e(e){var r,n;if(e.books.length===1)return Dt(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return l("div",{class:"pressy-home",children:[l("header",{class:"pressy-home-header",children:[l("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&l("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&l("section",{class:"pressy-home-section",children:[l("h2",{children:"Books"}),l("nav",{class:"pressy-chapter-list",children:e.books.map(o=>l("a",{href:`${I}/books/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),e.articles.length>0&&l("section",{class:"pressy-home-section",children:[l("h2",{children:"Articles"}),l("nav",{class:"pressy-chapter-list",children:e.articles.map(o=>l("a",{href:`${I}/articles/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),l("style",{children:Ht})]})}function lt(e,t,r,n,o){const i=e.chapters.reduce((u,d)=>u+(d.wordCount||0),0);if(i===0)return 0;const s=new Map(o.map(u=>[u.chapterSlug,u]));let c=0;for(const u of e.chapters){const d=u.wordCount||0;if(u.slug===t)n>0&&(c+=r/Math.max(1,n-1)*d);else{const p=s.get(u.slug);if(!p)continue;p.totalPages>0&&p.page>=p.totalPages-1?c+=d:p.page>0&&p.totalPages>0&&(c+=p.page/p.totalPages*d)}}return Math.min(100,c/i*100)}function Ir({book:e,chapterSlug:t,chapter:r,prevChapter:n,nextChapter:o,paginationMode:i,Content:s}){const[c,u]=ue(void 0);T(()=>{ze().then(a=>{const h=lt(e,t,0,0,a);u(h)})},[e,t]);const d=a=>{Hr({chapterSlug:t,page:a.page,totalPages:a.totalPages,scrollPosition:a.scrollPosition,timestamp:Date.now()}),a.totalPages>0&&ze().then(h=>{const f=lt(e,t,a.page,a.totalPages,h);u(f)})},p=async()=>{const a=await Wr(t);return a?{page:a.page,totalPages:a.totalPages,scrollPosition:a.scrollPosition}:null};return l(Be,{title:(r==null?void 0:r.title)||t,chapterSlug:t,prevChapter:n,nextChapter:o,paginationMode:i,onSaveProgress:d,onRestoreProgress:p,bookProgressPercent:c,children:l(s,{components:Ie()})})}function jr(e,t,r,n){const o=t.split("/"),i=o[2],s=o[3],c=e.books.find(v=>v.slug===i),u=c?c.chapters.findIndex(v=>v.slug===s):-1,d=c==null?void 0:c.chapters[u],p=v=>`${I}/books/${i}/${v.slug}`,a=c&&u>0?{slug:p(c.chapters[u-1]),title:c.chapters[u-1].title}:void 0,h=c&&u>=0&&u<c.chapters.length-1?{slug:p(c.chapters[u+1]),title:c.chapters[u+1].title}:void 0,f=r;return c?l(Ir,{book:c,chapterSlug:s,chapter:d,prevChapter:a,nextChapter:h,paginationMode:n,Content:f}):l(Be,{title:(d==null?void 0:d.title)||s,prevChapter:a,nextChapter:h,paginationMode:n,children:l(f,{components:Ie()})})}function Fr(e,t,r){const n=t.split("/")[2],o=e.articles.find(s=>s.slug===n),i=r;return l(Be,{title:(o==null?void 0:o.metadata.title)||n,children:l(i,{components:Ie()})})}var Ht=`
  .pressy-home {
    max-width: 65ch;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    font-family: var(--font-body, Georgia, 'Times New Roman', serif);
    color: var(--color-text, #1a1a1a);
  }
  .pressy-home-header {
    margin-bottom: 3rem;
    text-align: center;
  }
  .pressy-home-header h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .pressy-home-author {
    font-style: italic;
    color: var(--color-text-muted, #666);
  }
  .pressy-home-desc {
    color: var(--color-text-muted, #666);
    line-height: 1.6;
    max-width: 50ch;
    margin: 0.5rem auto 0;
  }
  .pressy-home-section {
    margin-bottom: 2rem;
  }
  .pressy-home-section h2 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--color-border, #e5e5e5);
    padding-bottom: 0.5rem;
  }
  .pressy-chapter-list {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .pressy-chapter-link {
    display: flex;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: var(--color-text, #1a1a1a);
    border-radius: 0.5rem;
    transition: background 0.15s;
  }
  .pressy-chapter-link:hover {
    background: var(--color-bg-subtle, #f5f5f5);
  }
  .pressy-chapter-order {
    color: var(--color-text-muted, #666);
    min-width: 2ch;
  }
`;function Yr(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const o=r.indexOf(n);return o>0?r.slice(0,o):""}var I="";function Xr(e,t){var n;I=Yr(e.route),ot.value=e.route,Nr(),Br(),ye(),zr(I),window.addEventListener("popstate",()=>{ot.value=window.location.pathname}),document.addEventListener("click",o=>{const i=o.target.closest("a");if(!i)return;const s=i.getAttribute("href");if(s&&!(s.startsWith("http")||s.startsWith("#"))&&s.startsWith(e.route+"#")){o.preventDefault();const c=s.slice(s.indexOf("#")),u=document.querySelector(c);u&&u.scrollIntoView({behavior:"smooth"});return}});let r;switch(e.routeType){case"home":r=$e(e.manifest);break;case"book":{const o=e.route.split("/")[2],i=e.manifest.books.find(s=>s.slug===o);r=i?Dt(i):l("div",{children:"Book not found"});break}case"chapter":r=t?jr(e.manifest,e.route,t,(n=e.pagination)==null?void 0:n.defaultMode):l("div",{children:"Loading..."});break;case"article":r=t?Fr(e.manifest,e.route,t):l("div",{children:"Loading..."});break;case"books":r=$e(e.manifest);break;case"articles":r=$e(e.manifest);break;default:r=l("div",{children:"Page not found"})}Yt(r,document.getElementById("app"))}export{Xr as h,B as k,l as u};
