var ze,w,Ct,Pt,Z,at,Lt,Tt,zt,Ke,je,Fe,_e={},Mt=[],sr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Me=Array.isArray;function j(e,t){for(var r in t)e[r]=t[r];return e}function Ge(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ir(e,t,r){var n,o,s,a={};for(s in t)s=="key"?n=t[s]:s=="ref"?o=t[s]:a[s]=t[s];if(arguments.length>2&&(a.children=arguments.length>3?ze.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)a[s]===void 0&&(a[s]=e.defaultProps[s]);return Se(e,a,n,o,null)}function Se(e,t,r,n,o){var s={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Ct,__i:-1,__u:0};return o==null&&w.vnode!=null&&w.vnode(s),s}function ee(e){return e.children}function fe(e,t){this.props=e,this.context=t}function se(e,t){if(t==null)return e.__?se(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?se(e):null}function Rt(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Rt(e)}}function lt(e){(!e.__d&&(e.__d=!0)&&Z.push(e)&&!Ee.__r++||at!=w.debounceRendering)&&((at=w.debounceRendering)||Lt)(Ee)}function Ee(){for(var e,t,r,n,o,s,a,l=1;Z.length;)Z.length>l&&Z.sort(Tt),e=Z.shift(),l=Z.length,e.__d&&(r=void 0,n=void 0,o=(n=(t=e).__v).__e,s=[],a=[],t.__P&&((r=j({},n)).__v=n.__v+1,w.vnode&&w.vnode(r),Je(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,s,o??se(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,At(s,r,a),n.__e=n.__=null,r.__e!=o&&Rt(r)));Ee.__r=0}function Dt(e,t,r,n,o,s,a,l,d,u,f){var c,p,h,v,k,$,m,b=n&&n.__k||Mt,T=t.length;for(d=ar(r,t,b,d,T),c=0;c<T;c++)(h=r.__k[c])!=null&&(p=h.__i==-1?_e:b[h.__i]||_e,h.__i=c,$=Je(e,h,p,o,s,a,l,d,u,f),v=h.__e,h.ref&&p.ref!=h.ref&&(p.ref&&Ze(p.ref,null,h),f.push(h.ref,h.__c||v,h)),k==null&&v!=null&&(k=v),(m=!!(4&h.__u))||p.__k===h.__k?d=Ot(h,d,e,m):typeof h.type=="function"&&$!==void 0?d=$:v&&(d=v.nextSibling),h.__u&=-7);return r.__e=k,d}function ar(e,t,r,n,o){var s,a,l,d,u,f=r.length,c=f,p=0;for(e.__k=new Array(o),s=0;s<o;s++)(a=t[s])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[s]=Se(null,a,null,null,null):Me(a)?a=e.__k[s]=Se(ee,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[s]=Se(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[s]=a,d=s+p,a.__=e,a.__b=e.__b+1,l=null,(u=a.__i=lr(a,r,d,c))!=-1&&(c--,(l=r[u])&&(l.__u|=2)),l==null||l.__v==null?(u==-1&&(o>f?p--:o<f&&p++),typeof a.type!="function"&&(a.__u|=4)):u!=d&&(u==d-1?p--:u==d+1?p++:(u>d?p--:p++,a.__u|=4))):e.__k[s]=null;if(c)for(s=0;s<f;s++)(l=r[s])!=null&&!(2&l.__u)&&(l.__e==n&&(n=se(l)),Ht(l,l));return n}function Ot(e,t,r,n){var o,s;if(typeof e.type=="function"){for(o=e.__k,s=0;o&&s<o.length;s++)o[s]&&(o[s].__=e,t=Ot(o[s],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=se(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function lr(e,t,r,n){var o,s,a,l=e.key,d=e.type,u=t[r],f=u!=null&&(2&u.__u)==0;if(u===null&&l==null||f&&l==u.key&&d==u.type)return r;if(n>(f?1:0)){for(o=r-1,s=r+1;o>=0||s<t.length;)if((u=t[a=o>=0?o--:s++])!=null&&!(2&u.__u)&&l==u.key&&d==u.type)return a}return-1}function ct(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||sr.test(t)?r:r+"px"}function be(e,t,r,n,o){var s,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||ct(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||ct(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(zt,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=r,r?n?r.u=n.u:(r.u=Ke,e.addEventListener(t,s?Fe:je,s)):e.removeEventListener(t,s?Fe:je,s);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function ut(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Ke++;else if(t.t<r.u)return;return r(w.event?w.event(t):t)}}}function Je(e,t,r,n,o,s,a,l,d,u){var f,c,p,h,v,k,$,m,b,T,W,R,I,le,X,B,Y,z=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),s=[l=t.__e=r.__e]),(f=w.__b)&&f(t);e:if(typeof z=="function")try{if(m=t.props,b="prototype"in z&&z.prototype.render,T=(f=z.contextType)&&n[f.__c],W=f?T?T.props.value:f.__:n,r.__c?$=(c=t.__c=r.__c).__=c.__E:(b?t.__c=c=new z(m,W):(t.__c=c=new fe(m,W),c.constructor=z,c.render=ur),T&&T.sub(c),c.state||(c.state={}),c.__n=n,p=c.__d=!0,c.__h=[],c._sb=[]),b&&c.__s==null&&(c.__s=c.state),b&&z.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=j({},c.__s)),j(c.__s,z.getDerivedStateFromProps(m,c.__s))),h=c.props,v=c.state,c.__v=t,p)b&&z.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),b&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(b&&z.getDerivedStateFromProps==null&&m!==h&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(m,W),t.__v==r.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(m,c.__s,W)===!1){for(t.__v!=r.__v&&(c.props=m,c.state=c.__s,c.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(A){A&&(A.__=t)}),R=0;R<c._sb.length;R++)c.__h.push(c._sb[R]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(m,c.__s,W),b&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(h,v,k)})}if(c.context=W,c.props=m,c.__P=e,c.__e=!1,I=w.__r,le=0,b){for(c.state=c.__s,c.__d=!1,I&&I(t),f=c.render(c.props,c.state,c.context),X=0;X<c._sb.length;X++)c.__h.push(c._sb[X]);c._sb=[]}else do c.__d=!1,I&&I(t),f=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++le<25);c.state=c.__s,c.getChildContext!=null&&(n=j(j({},n),c.getChildContext())),b&&!p&&c.getSnapshotBeforeUpdate!=null&&(k=c.getSnapshotBeforeUpdate(h,v)),B=f,f!=null&&f.type===ee&&f.key==null&&(B=Ut(f.props.children)),l=Dt(e,Me(B)?B:[B],t,r,n,o,s,a,l,d,u),c.base=t.__e,t.__u&=-161,c.__h.length&&a.push(c),$&&(c.__E=c.__=null)}catch(A){if(t.__v=null,d||s!=null)if(A.then){for(t.__u|=d?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;s[s.indexOf(l)]=null,t.__e=l}else{for(Y=s.length;Y--;)Ge(s[Y]);Xe(t)}else t.__e=r.__e,t.__k=r.__k,A.then||Xe(t);w.__e(A,t,r)}else s==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=cr(r.__e,t,r,n,o,s,a,d,u);return(f=w.diffed)&&f(t),128&t.__u?void 0:l}function Xe(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Xe)}function At(e,t,r){for(var n=0;n<r.length;n++)Ze(r[n],r[++n],r[++n]);w.__c&&w.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(s){s.call(o)})}catch(s){w.__e(s,o.__v)}})}function Ut(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Me(e)?e.map(Ut):j({},e)}function cr(e,t,r,n,o,s,a,l,d){var u,f,c,p,h,v,k,$=r.props||_e,m=t.props,b=t.type;if(b=="svg"?o="http://www.w3.org/2000/svg":b=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),s!=null){for(u=0;u<s.length;u++)if((h=s[u])&&"setAttribute"in h==!!b&&(b?h.localName==b:h.nodeType==3)){e=h,s[u]=null;break}}if(e==null){if(b==null)return document.createTextNode(m);e=document.createElementNS(o,b,m.is&&m),l&&(w.__m&&w.__m(t,s),l=!1),s=null}if(b==null)$===m||l&&e.data==m||(e.data=m);else{if(s=s&&ze.call(e.childNodes),!l&&s!=null)for($={},u=0;u<e.attributes.length;u++)$[(h=e.attributes[u]).name]=h.value;for(u in $)if(h=$[u],u!="children"){if(u=="dangerouslySetInnerHTML")c=h;else if(!(u in m)){if(u=="value"&&"defaultValue"in m||u=="checked"&&"defaultChecked"in m)continue;be(e,u,null,h,o)}}for(u in m)h=m[u],u=="children"?p=h:u=="dangerouslySetInnerHTML"?f=h:u=="value"?v=h:u=="checked"?k=h:l&&typeof h!="function"||$[u]===h||be(e,u,h,$[u],o);if(f)l||c&&(f.__html==c.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(c&&(e.innerHTML=""),Dt(t.type=="template"?e.content:e,Me(p)?p:[p],t,r,n,b=="foreignObject"?"http://www.w3.org/1999/xhtml":o,s,a,s?s[0]:r.__k&&se(r,0),l,d),s!=null)for(u=s.length;u--;)Ge(s[u]);l||(u="value",b=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[u]||b=="progress"&&!v||b=="option"&&v!=$[u])&&be(e,u,v,$[u],o),u="checked",k!=null&&k!=e[u]&&be(e,u,k,$[u],o))}return e}function Ze(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){w.__e(o,r)}}function Ht(e,t,r){var n,o;if(w.unmount&&w.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||Ze(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){w.__e(s,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&Ht(n[o],t,r||typeof e.type!="function");r||Ge(e.__e),e.__c=e.__=e.__e=void 0}function ur(e,t,r){return this.constructor(e,r)}function dr(e,t,r){var n,o,s,a;t==document&&(t=document.documentElement),w.__&&w.__(e,t),o=(n=!1)?null:t.__k,s=[],a=[],Je(t,e=t.__k=ir(ee,null,[e]),o||_e,_e,t.namespaceURI,o?null:t.firstChild?ze.call(t.childNodes):null,s,o?o.__e:t.firstChild,n,a),At(s,e,a)}ze=Mt.slice,w={__e:function(e,t,r,n){for(var o,s,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((s=o.constructor)&&s.getDerivedStateFromError!=null&&(o.setState(s.getDerivedStateFromError(e)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),a=o.__d),a)return o.__E=o}catch(l){e=l}throw e}},Ct=0,Pt=function(e){return e!=null&&e.constructor===void 0},fe.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=j({},this.state),typeof e=="function"&&(e=e(j({},r),this.props)),e&&j(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),lt(this))},fe.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),lt(this))},fe.prototype.render=ee,Z=[],Lt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Tt=function(e,t){return e.__v.__b-t.__v.__b},Ee.__r=0,zt=/(PointerCapture)$|Capture$/i,Ke=0,je=ut(!1),Fe=ut(!0);var ve,S,Ue,dt,ge=0,Wt=[],E=w,ft=E.__b,pt=E.__r,ht=E.diffed,_t=E.__c,vt=E.unmount,gt=E.__;function Qe(e,t){E.__h&&E.__h(S,e,ge||t),ge=0;var r=S.__H||(S.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Q(e){return ge=1,fr(It,e)}function fr(e,t,r){var n=Qe(ve++,2);if(n.t=e,!n.__c&&(n.__=[It(void 0,t),function(l){var d=n.__N?n.__N[0]:n.__[0],u=n.t(d,l);d!==u&&(n.__N=[u,n.__[1]],n.__c.setState({}))}],n.__c=S,!S.__f)){var o=function(l,d,u){if(!n.__c.__H)return!0;var f=n.__c.__H.__.filter(function(p){return!!p.__c});if(f.every(function(p){return!p.__N}))return!s||s.call(this,l,d,u);var c=n.__c.props!==l;return f.forEach(function(p){if(p.__N){var h=p.__[0];p.__=p.__N,p.__N=void 0,h!==p.__[0]&&(c=!0)}}),s&&s.call(this,l,d,u)||c};S.__f=!0;var s=S.shouldComponentUpdate,a=S.componentWillUpdate;S.componentWillUpdate=function(l,d,u){if(this.__e){var f=s;s=void 0,o(l,d,u),s=f}a&&a.call(this,l,d,u)},S.shouldComponentUpdate=o}return n.__N||n.__}function P(e,t){var r=Qe(ve++,3);!E.__s&&Nt(r.__H,t)&&(r.__=e,r.u=t,S.__H.__h.push(r))}function D(e){return ge=5,Re(function(){return{current:e}},[])}function Re(e,t){var r=Qe(ve++,7);return Nt(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function we(e,t){return ge=8,Re(function(){return e},t)}function pr(){for(var e;e=Wt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach($e),e.__H.__h.forEach(Ye),e.__H.__h=[]}catch(t){e.__H.__h=[],E.__e(t,e.__v)}}E.__b=function(e){S=null,ft&&ft(e)},E.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),gt&&gt(e,t)},E.__r=function(e){pt&&pt(e),ve=0;var t=(S=e.__c).__H;t&&(Ue===S?(t.__h=[],S.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach($e),t.__h.forEach(Ye),t.__h=[],ve=0)),Ue=S},E.diffed=function(e){ht&&ht(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Wt.push(t)!==1&&dt===E.requestAnimationFrame||((dt=E.requestAnimationFrame)||hr)(pr)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),Ue=S=null},E.__c=function(e,t){t.some(function(r){try{r.__h.forEach($e),r.__h=r.__h.filter(function(n){return!n.__||Ye(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],E.__e(n,r.__v)}}),_t&&_t(e,t)},E.unmount=function(e){vt&&vt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{$e(n)}catch(o){t=o}}),r.__H=void 0,t&&E.__e(t,r.__v))};var mt=typeof requestAnimationFrame=="function";function hr(e){var t,r=function(){clearTimeout(n),mt&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);mt&&(t=requestAnimationFrame(r))}function $e(e){var t=S,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),S=t}function Ye(e){var t=S;e.__c=e.__(),S=t}function Nt(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function It(e,t){return typeof t=="function"?t(e):t}var _r=Symbol.for("preact-signals");function et(){if(oe>1)oe--;else{for(var e,t=!1;pe!==void 0;){var r=pe;for(pe=void 0,Ve++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&Ft(r))try{r.c()}catch(o){t||(e=o,t=!0)}r=n}}if(Ve=0,oe--,t)throw e}}var y=void 0;function Bt(e){var t=y;y=void 0;try{return e()}finally{y=t}}var pe=void 0,oe=0,Ve=0,Ce=0;function jt(e){if(y!==void 0){var t=e.n;if(t===void 0||t.t!==y)return t={i:0,S:e,p:y.s,n:void 0,t:y,e:void 0,x:void 0,r:t},y.s!==void 0&&(y.s.n=t),y.s=t,e.n=t,32&y.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=y.s,t.n=void 0,y.s.n=t,y.s=t),t}}function L(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}L.prototype.brand=_r;L.prototype.h=function(){return!0};L.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:Bt(function(){var n;(n=t.W)==null||n.call(t)}))};L.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&Bt(function(){var o;(o=t.Z)==null||o.call(t)}))}};L.prototype.subscribe=function(e){var t=this;return rt(function(){var r=t.value,n=y;y=void 0;try{e(r)}finally{y=n}},{name:"sub"})};L.prototype.valueOf=function(){return this.value};L.prototype.toString=function(){return this.value+""};L.prototype.toJSON=function(){return this.value};L.prototype.peek=function(){var e=y;y=void 0;try{return this.value}finally{y=e}};Object.defineProperty(L.prototype,"value",{get:function(){var e=jt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Ve>100)throw new Error("Cycle detected");this.v=e,this.i++,Ce++,oe++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{et()}}}});function F(e,t){return new L(e,t)}function Ft(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Xt(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Yt(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function re(e,t){L.call(this,void 0),this.x=e,this.s=void 0,this.g=Ce-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}re.prototype=new L;re.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Ce))return!0;if(this.g=Ce,this.f|=1,this.i>0&&!Ft(this))return this.f&=-2,!0;var e=y;try{Xt(this),y=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return y=e,Yt(this),this.f&=-2,!0};re.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}L.prototype.S.call(this,e)};re.prototype.U=function(e){if(this.t!==void 0&&(L.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};re.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(re.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=jt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function vr(e,t){return new re(e,t)}function Vt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){oe++;var r=y;y=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,tt(e),n}finally{y=r,et()}}}function tt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Vt(e)}function gr(e){if(y!==this)throw new Error("Out-of-order effect");Yt(this),y=e,this.f&=-2,8&this.f&&tt(this),et()}function ie(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}ie.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};ie.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Vt(this),Xt(this),oe++;var e=y;return y=this,gr.bind(this,e)};ie.prototype.N=function(){2&this.f||(this.f|=2,this.o=pe,pe=this)};ie.prototype.d=function(){this.f|=8,1&this.f||tt(this)};ie.prototype.dispose=function(){this.d()};function rt(e,t){var r=new ie(e,t);try{r.c()}catch(o){throw r.d(),o}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var ke;function ae(e,t){w[e]=t.bind(null,w[e]||function(){})}function Pe(e){if(ke){var t=ke;ke=void 0,t()}ke=e&&e.S()}function qt(e){var t=this,r=e.data,n=N(r);n.value=r;var o=Re(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var a,l=t.__$u.S(),d=o.value;l(),Pt(d)||((a=t.base)==null?void 0:a.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=d},vr(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return o.value}qt.displayName="_st";Object.defineProperties(L.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:qt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});ae("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var o in n)if(o!=="children"){var s=n[o];s instanceof L&&(r||(t.__np=r={}),r[o]=s,n[o]=s.peek())}}e(t)});ae("__r",function(e,t){e(t),Pe();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(o){var s;return rt(function(){s=this}),s.c=function(){n.__$f|=1,n.setState({})},s}())),Pe(r)});ae("__e",function(e,t,r,n){Pe(),e(t,r,n)});ae("diffed",function(e,t){Pe();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,o=t.props;if(n){var s=r.U;if(s)for(var a in s){var l=s[a];l!==void 0&&!(a in n)&&(l.d(),s[a]=void 0)}else r.U=s={};for(var d in n){var u=s[d],f=n[d];u===void 0?(u=mr(r,d,f,o),s[d]=u):u.o(f,o)}}}e(t)});function mr(e,t,r,n){var o=t in e&&e.ownerSVGElement===void 0,s=F(r);return{o:function(a,l){s.value=a,n=l},d:rt(function(){var a=s.value.value;n[t]!==a&&(n[t]=a,o?e[t]=a:a?e.setAttribute(t,a):e.removeAttribute(t))})}}ae("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var o in n){var s=n[o];s&&s.d()}}}}else{var a=t.__c;if(a){var l=a.__$u;l&&(a.__$u=void 0,l.d())}}e(t)});ae("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});fe.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var o in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var s in e)if(s!=="__source"&&e[s]!==this.props[s])return!0;for(var a in this.props)if(!(a in e))return!0;return!1};function N(e){return Re(function(){return F(e)},[])}function nt(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function yr(e,t){let r;const n=()=>{if(r)return r;const o=indexedDB.open(e);return o.onupgradeneeded=()=>o.result.createObjectStore(t),r=nt(o),r.then(s=>{s.onclose=()=>r=void 0},()=>{}),r};return(o,s)=>n().then(a=>s(a.transaction(t,o).objectStore(t)))}let He;function Kt(){return He||(He=yr("keyval-store","keyval")),He}function Gt(e,t=Kt()){return t("readonly",r=>nt(r.get(e)))}function br(e,t,r=Kt()){return r("readwrite",n=>(n.put(t,e),nt(n.transaction)))}var wr=0;function i(e,t,r,n,o,s){t||(t={});var a,l,d=t;if("ref"in d)for(l in d={},t)l=="ref"?a=t[l]:d[l]=t[l];var u={type:e,props:d,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--wr,__i:-1,__u:0,__source:o,__self:s};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)d[l]===void 0&&(d[l]=a[l]);return w.vnode&&w.vnode(u),u}var kr=Object.defineProperty,xr=(e,t)=>{for(var r in t)kr(e,r,{get:t[r],enumerable:!0})};function Sr(e){return Le=new Jt(e),Le}function $r(){if(!Le)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return Le}var Jt,Le;async function Er(e,t){const r=$r(),n=await r.getProduct(e);if(!n.variants.edges.length)throw new Error("Product has no variants");const s=[{variantId:n.variants.edges[0].node.id,quantity:1}],a=await r.createCheckout(s);if(t&&typeof localStorage<"u"){const l={checkoutId:a.id,bookSlug:t,createdAt:Date.now()};localStorage.setItem(Pr,JSON.stringify(l))}return a.webUrl}function Cr(e){return e.webUrl}var Pr;async function Lr(e,t){const r={bookSlug:e,orderId:t==null?void 0:t.orderId,email:t==null?void 0:t.email,unlockedAt:Date.now()};await br(`${me}${e}`,r),typeof localStorage<"u"&&localStorage.setItem(`${me}${e}`,JSON.stringify(r))}async function Tr(e){if(typeof localStorage<"u"&&localStorage.getItem(`${me}${e}`))return!0;try{return!!await Gt(`${me}${e}`)}catch{return!1}}async function zr(e){try{return await Gt(`${me}${e}`)||null}catch{return null}}async function Mr(e,t){const r=await zr(e);return!r||!r.orderId?!1:r.orderId===t}var me,Rr={};xr(Rr,{ShopifyClient:()=>Jt,createCheckout:()=>Er,createShopifyClient:()=>Sr,getCheckoutUrl:()=>Cr,isContentUnlocked:()=>Tr,unlockContent:()=>Lr,verifyPurchase:()=>Mr});function Dr({prev:e,next:t}){return!e&&!t?null:i("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[i("div",{class:"pressy-nav-inner",children:[e?i("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[i("span",{class:"pressy-nav-direction",children:"Previous"}),i("span",{class:"pressy-nav-title",children:e.title})]}):i("div",{class:"pressy-nav-placeholder"}),t?i("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[i("span",{class:"pressy-nav-direction",children:"Next"}),i("span",{class:"pressy-nav-title",children:t.title})]}):i("div",{class:"pressy-nav-placeholder"})]}),i("style",{children:`
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
      `})]})}function Zt(){const e=N(!1),t=N({x:0,y:0}),r=N(""),n=D(null);P(()=>{const l=()=>{const d=window.getSelection();if(!d||d.isCollapsed){e.value=!1;return}const u=d.toString().trim();if(u.length<5){e.value=!1;return}r.value=u;const c=d.getRangeAt(0).getBoundingClientRect();t.value={x:c.left+c.width/2,y:c.top-10},e.value=!0};return document.addEventListener("selectionchange",l),document.addEventListener("mouseup",l),()=>{document.removeEventListener("selectionchange",l),document.removeEventListener("mouseup",l)}},[]);const o=()=>{const l=encodeURIComponent(r.value),d=new URL(window.location.href);return d.hash=`:~:text=${l}`,d.toString()},s=async()=>{const l=o(),d=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:d,url:l}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${d}

${l}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var u;(u=n.current)==null||u.classList.remove("copied")},2e3))}catch(u){console.error("Failed to copy to clipboard:",u)}},a=async()=>{const l=o();try{await navigator.clipboard.writeText(l),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var d;(d=n.current)==null||d.classList.remove("copied")},2e3))}catch(d){console.error("Failed to copy link:",d)}};return e.value?i("div",{ref:n,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[i("button",{class:"pressy-share-btn",onClick:s,"aria-label":"Share selected text",title:"Share quote",children:i("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),i("button",{class:"pressy-copy-link-btn",onClick:a,"aria-label":"Copy link to selected text",title:"Copy link",children:i("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),i("style",{children:`
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
      `})]}):null}function Qt(){const e=N(!navigator.onLine),t=N(!1);return P(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?i("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?i(ee,{children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),i("span",{children:"You're offline"})]}):i(ee,{children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),i("span",{children:"Back online"})]}),i("style",{children:`
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
      `})]}):null}function ot({children:e,prevChapter:t,nextChapter:r,showDropCap:n=!0,paginationMode:o="scroll",onSaveProgress:s,onRestoreProgress:a,bookProgressPercent:l}){return o==="paginated"?i(Ar,{prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:s,onRestoreProgress:a,bookProgressPercent:l,children:e}):i(Or,{prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:s,onRestoreProgress:a,children:e})}function Or({children:e,prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:o,onRestoreProgress:s}){const a=D(null);return P(()=>{s&&s().then(l=>{l&&l.scrollPosition>0&&window.scrollTo(0,l.scrollPosition)})},[]),P(()=>{if(!o)return;const l=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{o({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",l,{passive:!0}),()=>{window.removeEventListener("scroll",l),a.current&&clearTimeout(a.current)}},[o]),P(()=>{if(!o)return;const l=()=>{o({page:0,totalPages:0,scrollPosition:window.scrollY})};return window.addEventListener("beforeunload",l),()=>window.removeEventListener("beforeunload",l)},[o]),i("div",{class:"pressy-reader",children:[i("main",{class:"pressy-reader-main",children:i("article",{class:`pressy-prose ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),i(Zt,{}),i(Dr,{prev:t,next:r}),i(Qt,{}),i("style",{children:Ur})]})}function Ar({children:e,prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:o,onRestoreProgress:s,bookProgressPercent:a}){const l=D(null),d=D(null),u=D(null),[f,c]=Q(0),[p,h]=Q(1),v=D(!1),k=D(null),[$,m]=Q(!1),[b,T]=Q(0),[W,R]=Q(null),I=D(0),le=D(0),X=D(0),B=D(0),Y=D(0),z=D(!1),A=D(!1),ce=we(()=>{const _=u.current,g=d.current;if(!_||!g)return;const x=g.clientWidth;if(x===0)return;_.style.columnWidth=`${x}px`,_.scrollWidth;const C=Math.max(1,Math.round(_.scrollWidth/x));h(C),c(J=>Math.min(J,C-1))},[]);P(()=>{const _=d.current;if(!_)return;const g=setTimeout(ce,50),x=new ResizeObserver(()=>{ce()});return x.observe(_),()=>{clearTimeout(g),x.disconnect()}},[ce]),P(()=>{const _=u.current;if(!_)return;const g=_.querySelectorAll("img");if(g.length===0)return;const x=()=>ce();return g.forEach(C=>{C.complete||(C.addEventListener("load",x),C.addEventListener("error",x))}),()=>{g.forEach(C=>{C.removeEventListener("load",x),C.removeEventListener("error",x)})}},[ce]),P(()=>{v.current||!s||p<=1||(v.current=!0,s().then(_=>{if(_&&_.page>0){const g=Math.min(_.page,p-1);c(g)}}))},[p,s]),P(()=>{const _=u.current,g=d.current;if(!_||!g)return;const C=f*g.clientWidth-b;$?_.style.transition="none":_.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",_.style.transform=`translateX(-${C}px)`},[f,b,$]),P(()=>{if(!(!o||!v.current))return k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{o({page:f,totalPages:p,scrollPosition:0})},300),()=>{k.current&&clearTimeout(k.current)}},[f,p,o]),P(()=>{if(!o)return;const _=()=>{o({page:f,totalPages:p,scrollPosition:0})};return window.addEventListener("beforeunload",_),()=>window.removeEventListener("beforeunload",_)},[f,p,o]);const q=we(_=>{const g=Math.max(0,Math.min(_,p-1));c(g)},[p]),K=we(()=>{if(f>=p-1){r&&(window.location.href=r.slug);return}q(f+1)},[f,p,r,q]),G=we(()=>{if(f<=0){t&&(window.location.href=t.slug);return}q(f-1)},[f,t,q]);P(()=>{const _=g=>{const x=g.target.tagName;x==="INPUT"||x==="TEXTAREA"||x==="SELECT"||(g.key==="ArrowRight"||g.key===" "?(g.preventDefault(),K()):g.key==="ArrowLeft"?(g.preventDefault(),G()):g.key==="Home"?(g.preventDefault(),q(0)):g.key==="End"&&(g.preventDefault(),q(p-1)))};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[K,G,q,p]),P(()=>{const _=l.current;if(!_)return;const g=U=>{const M=U.touches[0];I.current=M.clientX,le.current=M.clientY,X.current=M.clientX,B.current=performance.now(),Y.current=0,z.current=!1,A.current=!1},x=U=>{const M=U.touches[0],O=M.clientX-I.current,ne=M.clientY-le.current;if(!z.current)if(Math.abs(O)>Math.abs(ne)&&Math.abs(O)>10)z.current=!0;else return Math.abs(ne)>Math.abs(O)&&Math.abs(ne)>10,void 0;U.preventDefault();const ue=performance.now(),de=ue-B.current;if(de>0){const Ae=(M.clientX-X.current)/de;Y.current=.6*Ae+.4*Y.current}X.current=M.clientX,B.current=ue;let ye=O;const Oe=f===0,it=f>=p-1;if(Oe&&O>0||it&&O<0){const Ae=O>0?1:-1,or=Math.abs(O);ye=Ae*Math.sqrt(or)*5,O>40&&Oe&&t?R("prev"):O<-40&&it&&r?R("next"):R(null)}else R(null);A.current=!0,m(!0),T(ye)},C=U=>{if(!z.current||!A.current){m(!1),T(0),R(null);return}const M=U.changedTouches[0].clientX-I.current,O=Y.current,ne=50,ue=.3,de=80,ye=f===0;if(f>=p-1&&M<-de&&r){m(!1),T(0),R(null),window.location.href=r.slug;return}if(ye&&M>de&&t){m(!1),T(0),R(null),window.location.href=t.slug;return}M<-ne||O<-ue?K():(M>ne||O>ue)&&G(),A.current=!1,m(!1),T(0),R(null)},J=()=>{A.current=!1,m(!1),T(0),R(null)};return _.addEventListener("touchstart",g,{passive:!0}),_.addEventListener("touchmove",x,{passive:!1}),_.addEventListener("touchend",C,{passive:!0}),_.addEventListener("touchcancel",J,{passive:!0}),()=>{_.removeEventListener("touchstart",g),_.removeEventListener("touchmove",x),_.removeEventListener("touchend",C),_.removeEventListener("touchcancel",J)}},[f,p,K,G,r,t]),P(()=>{const _=l.current;if(!_)return;let g=0,x=null;const C=80,J=U=>{U.preventDefault();const M=Math.abs(U.deltaX)>Math.abs(U.deltaY)?U.deltaX:U.deltaY;g+=M,x&&clearTimeout(x),x=setTimeout(()=>{g=0},200),g>C?(K(),g=0):g<-C&&(G(),g=0)};return _.addEventListener("wheel",J,{passive:!1}),()=>{_.removeEventListener("wheel",J),x&&clearTimeout(x)}},[K,G]);const nr=p>1?(f+1)/p*100:100;return i("div",{class:"pressy-reader pressy-reader--paginated",ref:l,children:[i("div",{class:"pressy-paginated-viewport",ref:d,children:i("article",{ref:u,class:`pressy-prose pressy-prose--paginated ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),i("div",{class:"pressy-tap-zone pressy-tap-prev",onClick:G,"aria-label":"Previous page",role:"button",tabIndex:-1}),i("div",{class:"pressy-tap-zone pressy-tap-next",onClick:K,"aria-label":"Next page",role:"button",tabIndex:-1}),W==="prev"&&t&&i("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[i("span",{class:"pressy-chapter-hint-arrow",children:"←"}),i("span",{class:"pressy-chapter-hint-text",children:t.title})]}),W==="next"&&r&&i("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[i("span",{class:"pressy-chapter-hint-text",children:r.title}),i("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),i("div",{class:"pressy-page-footer",children:[i("div",{class:"pressy-progress-bar",children:i("div",{class:"pressy-progress-fill",style:{width:`${nr}%`}})}),i("div",{class:"pressy-page-indicator",children:[i("span",{children:["Page ",f+1," of ",p]}),a!=null&&i("span",{class:"pressy-book-progress",children:[Math.round(a),"% of book"]})]})]}),i(Zt,{}),i(Qt,{}),i("style",{children:Hr})]})}var Ur=`
  .pressy-reader {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .pressy-reader-main {
    flex: 1;
    padding: 2rem 0;
  }
`,Hr=`
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
     translateX controlled by JS — transitions set dynamically during drag vs snap. */
  .pressy-prose--paginated {
    max-width: none;
    height: 100%;
    column-fill: auto;
    column-gap: 0;
    overflow: visible;
    box-sizing: border-box;
    padding: 0;
    will-change: transform;
    /* Transition is set dynamically: none during drag, ease-out on snap */
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

  /* ── Tap zones ─────────────────────────────────────────────── */
  /* Invisible overlays on left/right thirds of screen.
     Visual feedback via radial gradient on active state. */
  .pressy-tap-zone {
    position: absolute;
    top: 0;
    bottom: 60px;
    z-index: 10;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    background: transparent;
    transition: background 0.15s ease;
  }

  .pressy-tap-prev {
    left: 0;
    width: 33%;
  }

  .pressy-tap-next {
    right: 0;
    width: 33%;
  }

  /* Tap feedback — brief highlight on press */
  .pressy-tap-prev:active {
    background: radial-gradient(
      circle at 30% 50%,
      rgba(0, 0, 0, 0.04) 0%,
      transparent 70%
    );
  }

  .pressy-tap-next:active {
    background: radial-gradient(
      circle at 70% 50%,
      rgba(0, 0, 0, 0.04) 0%,
      transparent 70%
    );
  }

  /* Dark theme tap feedback */
  [data-theme="dark"] .pressy-tap-prev:active {
    background: radial-gradient(
      circle at 30% 50%,
      rgba(255, 255, 255, 0.06) 0%,
      transparent 70%
    );
  }

  [data-theme="dark"] .pressy-tap-next:active {
    background: radial-gradient(
      circle at 70% 50%,
      rgba(255, 255, 255, 0.06) 0%,
      transparent 70%
    );
  }

  /* ── Chapter boundary hints ─────────────────────────────── */
  /* Shown when overscrolling past first/last page of a chapter */
  .pressy-chapter-hint {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: var(--color-bg-subtle, #f5f5f5);
    border: 1px solid var(--color-border, #dee2e6);
    border-radius: 0.75rem;
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-muted, #6c757d);
    z-index: 20;
    pointer-events: none;
    animation: pressy-hint-fade-in 0.15s ease-out;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    max-width: 60%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pressy-chapter-hint--prev {
    left: 1rem;
  }

  .pressy-chapter-hint--next {
    right: 1rem;
  }

  .pressy-chapter-hint-arrow {
    flex-shrink: 0;
    font-size: 1rem;
    opacity: 0.6;
  }

  .pressy-chapter-hint-text {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @keyframes pressy-hint-fade-in {
    from { opacity: 0; transform: translateY(-50%) scale(0.95); }
    to { opacity: 1; transform: translateY(-50%) scale(1); }
  }

  /* ── Page footer ───────────────────────────────────────────── */
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

  /* ── Reduced motion preference ────────────────────────────
     Disable page turn animations for users who prefer reduced motion. */
  @media (prefers-reduced-motion: reduce) {
    .pressy-prose--paginated {
      transition: none !important;
    }
    .pressy-progress-fill {
      transition: none !important;
    }
  }
`,Wr="pressy-cached-books";function yt(){try{const e=localStorage.getItem(Wr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function Nr({bookSlug:e,chapterUrls:t,cachedBooks:r,cacheProgress:n,onDownload:o,onRemove:s}){var u;const a=N(yt().has(e)||r.value.has(e)),l=N(((u=n.value)==null?void 0:u.bookSlug)===e),d=N(null);return P(()=>{const f=()=>{var h;a.value=yt().has(e)||r.value.has(e),l.value=((h=n.value)==null?void 0:h.bookSlug)===e;const p=n.value;d.value=p&&p.bookSlug===e?Math.round(p.current/p.total*100):null},c=setInterval(f,500);return f(),()=>clearInterval(c)},[e]),a.value?i("div",{class:"pressy-download-book",children:[i("div",{class:"pressy-download-status",children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),i("span",{children:"Available offline"})]}),i("button",{class:"pressy-download-remove",onClick:()=>s(e),"aria-label":"Remove offline copy",children:"Remove"}),i("style",{children:We})]}):l.value?i("div",{class:"pressy-download-book",children:[i("div",{class:"pressy-download-progress",children:[i("div",{class:"pressy-download-bar",children:i("div",{class:"pressy-download-bar-fill",style:{width:`${d.value||0}%`}})}),i("span",{class:"pressy-download-percent",children:[d.value||0,"%"]})]}),i("style",{children:We})]}):i("div",{class:"pressy-download-book",children:[i("button",{class:"pressy-download-btn",onClick:()=>o(e,t),"aria-label":"Download for offline reading",children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),i("span",{children:"Download for offline"})]}),i("style",{children:We})]})}var We=`
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
`;function Ir({chapters:e,basePath:t,bookSlug:r,loadAllProgress:n}){const[o,s]=Q(new Map);P(()=>{n().then(p=>{const h=new Set(e.map(k=>k.slug)),v=new Map;for(const k of p)h.has(k.chapterSlug)&&v.set(k.chapterSlug,{page:k.page,totalPages:k.totalPages});s(v)})},[e,n]);const a=e.reduce((p,h)=>p+(h.wordCount||0),0);let l=0,d=0,u=0;for(const p of e){const h=o.get(p.slug);if(!h)continue;const v=p.wordCount||0;h.totalPages>0&&h.page>=h.totalPages-1?(l+=v,d++,u++):h.page>0&&h.totalPages>0&&(l+=h.page/h.totalPages*v,u++)}const f=a>0?l/a*100:0,c=u>0;return i("div",{class:"pressy-book-progress-section",children:[c&&i("div",{class:"pressy-overall-progress",children:[i("div",{class:"pressy-overall-progress-bar",children:i("div",{class:"pressy-overall-progress-fill",style:{width:`${f}%`}})}),i("div",{class:"pressy-overall-progress-text",children:[Math.round(f),"% complete",i("span",{class:"pressy-overall-progress-detail",children:[d," of ",e.length," chapters"]})]})]}),i("nav",{class:"pressy-chapter-list",children:e.map(p=>{const h=o.get(p.slug),v=h&&h.totalPages>0&&h.page>=h.totalPages-1,k=h&&h.page>0&&!v;return i("a",{href:`${t}/books/${r}/${p.slug}`,class:`pressy-chapter-link ${v?"pressy-chapter--completed":""} ${k?"pressy-chapter--started":""}`,children:[i("span",{class:"pressy-chapter-order",children:[p.order,"."]}),i("span",{class:"pressy-chapter-title",children:p.title}),v&&i("span",{class:"pressy-chapter-badge pressy-chapter-badge--done",children:"Done"}),k&&h&&i("span",{class:"pressy-chapter-badge pressy-chapter-badge--reading",children:["p.",h.page+1,"/",h.totalPages]})]})})}),i("style",{children:Br})]})}var Br=`
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
`;function jr({id:e,children:t}){const r=N(!1);return i(ee,{children:[i("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&i("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,i("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),i("style",{children:`
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
      `})]})}function Fr({children:e,title:t}){return i("aside",{class:"pressy-aside",children:[t&&i("strong",{class:"pressy-aside-title",children:t}),i("div",{class:"pressy-aside-content",children:e}),i("style",{children:`
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
      `})]})}function bt({src:e,alt:t,caption:r,wide:n,children:o}){return i("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[i("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||o)&&i("figcaption",{class:"pressy-figure-caption",children:r||o}),i("style",{children:`
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
      `})]})}var Xr={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},Yr={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function Vr({type:e="note",title:t,children:r}){return i("div",{class:`pressy-callout pressy-callout-${e}`,children:[i("div",{class:"pressy-callout-header",children:[i("span",{class:"pressy-callout-icon",children:Xr[e]}),i("strong",{class:"pressy-callout-title",children:t||Yr[e]})]}),i("div",{class:"pressy-callout-content",children:r}),i("style",{children:`
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
      `})]})}function wt({variant:e="asterisks"}){return i("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&i("span",{children:"* * *"}),e==="ornament"&&i("span",{children:"❧"}),i("style",{children:`
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
      `})]})}var qr={Footnote:jr,Aside:Fr,Figure:bt,Callout:Vr,SceneBreak:wt,img:bt,hr:wt},Kr={};function st(){return{...qr,...Kr}}var er="pressy-cached-books",Ne=F("online"),Te=F(null),Ie=F(!1);function Gr(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(er);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var H=F(Gr());typeof window<"u"&&(Ne.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{Ne.value="online"}),window.addEventListener("offline",()=>{Ne.value="offline"}));async function Jr(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",Zr),navigator.serviceWorker.controller?Ie.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{Ie.value=!0}),n.addEventListener("updatefound",()=>{const o=n.installing;o&&o.addEventListener("statechange",()=>{o.state==="activated"&&(Ie.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function he(){try{localStorage.setItem(er,JSON.stringify([...H.value]))}catch{}}function Zr(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:o}=e.data;Te.value={bookSlug:r,current:n,total:o}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;Te.value=null;const n=new Set(H.value);n.add(r),H.value=n,he()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const o of r){const s=o.match(/\/books\/([^/]+)/);s&&n.add(s[1])}H.value=n,he()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(H.value);n.delete(r),H.value=n,he()}}async function Qr(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(o=>o.startsWith("http")?o:`${window.location.origin}${o}`);Te.value={bookSlug:e,current:0,total:r.length};const n=new Set(H.value);return n.add(e),H.value=n,he(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}async function en(e){const t=new Set(H.value);if(t.delete(e),H.value=t,he(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const o of n)o.url.includes(`/books/${e}`)&&await r.delete(o);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var kt=F("/"),tn=F("light"),xt=F(!navigator.onLine),rn="pressy",nn=1,V="reading-progress",St="unlocks",xe=null;async function De(){return xe||new Promise((e,t)=>{const r=indexedDB.open(rn,nn);r.onerror=()=>t(r.error),r.onsuccess=()=>{xe=r.result,e(xe)},r.onupgradeneeded=n=>{const o=n.target.result;o.objectStoreNames.contains(V)||o.createObjectStore(V,{keyPath:"chapterSlug"}),o.objectStoreNames.contains(St)||o.createObjectStore(St,{keyPath:"bookSlug"})}})}async function on(e){const t=await De();return new Promise((r,n)=>{const a=t.transaction(V,"readwrite").objectStore(V).put(e);a.onsuccess=()=>r(),a.onerror=()=>n(a.error)})}async function sn(e){const t=await De();return new Promise((r,n)=>{const a=t.transaction(V,"readonly").objectStore(V).get(e);a.onsuccess=()=>r(a.result||null),a.onerror=()=>n(a.error)})}async function qe(){const e=await De();return new Promise((t,r)=>{const s=e.transaction(V,"readonly").objectStore(V).getAll();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>r(s.error)})}function $t(e){tn.value=e,document.documentElement.setAttribute("data-theme",e),localStorage.setItem("pressy-theme",e)}function an(){const e=localStorage.getItem("pressy-theme");e?$t(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&$t("dark")}function ln(){window.addEventListener("online",()=>{xt.value=!1}),window.addEventListener("offline",()=>{xt.value=!0})}function tr(e,t=[]){const r=e.chapters.map(n=>`/books/${e.slug}/${n.slug}`);return i("div",{class:"pressy-home",children:[i("header",{class:"pressy-home-header",children:[i("h1",{children:e.metadata.title}),i("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&i("p",{class:"pressy-home-desc",children:e.metadata.description})]}),i(Nr,{bookSlug:e.slug,chapterUrls:r,cachedBooks:H,cacheProgress:Te,onDownload:Qr,onRemove:en}),i("section",{class:"pressy-home-section",children:[i("h2",{children:"Chapters"}),i(Ir,{bookSlug:e.slug,chapters:e.chapters.map(n=>({slug:n.slug,title:n.title,order:n.order,wordCount:n.wordCount||0})),basePath:te,loadAllProgress:qe})]}),t.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Articles"}),i("nav",{class:"pressy-chapter-list",children:t.map(n=>i("a",{href:`${te}/articles/${n.slug}`,class:"pressy-chapter-link",children:n.metadata.title}))})]}),i("style",{children:rr})]})}function Be(e){var r,n;if(e.books.length===1)return tr(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return i("div",{class:"pressy-home",children:[i("header",{class:"pressy-home-header",children:[i("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&i("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Books"}),i("nav",{class:"pressy-chapter-list",children:e.books.map(o=>i("a",{href:`${te}/books/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),e.articles.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Articles"}),i("nav",{class:"pressy-chapter-list",children:e.articles.map(o=>i("a",{href:`${te}/articles/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),i("style",{children:rr})]})}function Et(e,t,r,n,o){const s=e.chapters.reduce((d,u)=>d+(u.wordCount||0),0);if(s===0)return 0;const a=new Map(o.map(d=>[d.chapterSlug,d]));let l=0;for(const d of e.chapters){const u=d.wordCount||0;if(d.slug===t)n>0&&(l+=r/Math.max(1,n-1)*u);else{const f=a.get(d.slug);if(!f)continue;f.totalPages>0&&f.page>=f.totalPages-1?l+=u:f.page>0&&f.totalPages>0&&(l+=f.page/f.totalPages*u)}}return Math.min(100,l/s*100)}function cn({book:e,chapterSlug:t,chapter:r,prevChapter:n,nextChapter:o,paginationMode:s,Content:a}){const[l,d]=Q(void 0);P(()=>{qe().then(c=>{const p=Et(e,t,0,0,c);d(p)})},[e,t]);const u=c=>{on({chapterSlug:t,page:c.page,totalPages:c.totalPages,scrollPosition:c.scrollPosition,timestamp:Date.now()}),c.totalPages>0&&qe().then(p=>{const h=Et(e,t,c.page,c.totalPages,p);d(h)})},f=async()=>{const c=await sn(t);return c?{page:c.page,totalPages:c.totalPages,scrollPosition:c.scrollPosition}:null};return i(ot,{title:(r==null?void 0:r.title)||t,chapterSlug:t,prevChapter:n,nextChapter:o,paginationMode:s,onSaveProgress:u,onRestoreProgress:f,bookProgressPercent:l,children:i(a,{components:st()})})}function un(e,t,r,n){const o=t.split("/"),s=o[2],a=o[3],l=e.books.find(v=>v.slug===s),d=l?l.chapters.findIndex(v=>v.slug===a):-1,u=l==null?void 0:l.chapters[d],f=v=>`${te}/books/${s}/${v.slug}`,c=l&&d>0?{slug:f(l.chapters[d-1]),title:l.chapters[d-1].title}:void 0,p=l&&d>=0&&d<l.chapters.length-1?{slug:f(l.chapters[d+1]),title:l.chapters[d+1].title}:void 0,h=r;return l?i(cn,{book:l,chapterSlug:a,chapter:u,prevChapter:c,nextChapter:p,paginationMode:n,Content:h}):i(ot,{title:(u==null?void 0:u.title)||a,prevChapter:c,nextChapter:p,paginationMode:n,children:i(h,{components:st()})})}function dn(e,t,r){const n=t.split("/")[2],o=e.articles.find(a=>a.slug===n),s=r;return i(ot,{title:(o==null?void 0:o.metadata.title)||n,children:i(s,{components:st()})})}var rr=`
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
`;function fn(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const o=r.indexOf(n);return o>0?r.slice(0,o):""}var te="";function pn(e,t){var n;te=fn(e.route),kt.value=e.route,an(),ln(),De(),Jr(te),window.addEventListener("popstate",()=>{kt.value=window.location.pathname}),document.addEventListener("click",o=>{const s=o.target.closest("a");if(!s)return;const a=s.getAttribute("href");if(a&&!(a.startsWith("http")||a.startsWith("#"))&&a.startsWith(e.route+"#")){o.preventDefault();const l=a.slice(a.indexOf("#")),d=document.querySelector(l);d&&d.scrollIntoView({behavior:"smooth"});return}});let r;switch(e.routeType){case"home":r=Be(e.manifest);break;case"book":{const o=e.route.split("/")[2],s=e.manifest.books.find(a=>a.slug===o);r=s?tr(s):i("div",{children:"Book not found"});break}case"chapter":r=t?un(e.manifest,e.route,t,(n=e.pagination)==null?void 0:n.defaultMode):i("div",{children:"Loading..."});break;case"article":r=t?dn(e.manifest,e.route,t):i("div",{children:"Loading..."});break;case"books":r=Be(e.manifest);break;case"articles":r=Be(e.manifest);break;default:r=i("div",{children:"Page not found"})}dr(r,document.getElementById("app"))}export{pn as h,ee as k,i as u};
