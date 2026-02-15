var Te,b,Et,Ct,Z,it,Pt,Lt,Tt,qe,Be,je,he={},zt=[],or=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ze=Array.isArray;function I(e,t){for(var r in t)e[r]=t[r];return e}function Ke(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function sr(e,t,r){var n,o,s,a={};for(s in t)s=="key"?n=t[s]:s=="ref"?o=t[s]:a[s]=t[s];if(arguments.length>2&&(a.children=arguments.length>3?Te.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)a[s]===void 0&&(a[s]=e.defaultProps[s]);return xe(e,a,n,o,null)}function xe(e,t,r,n,o){var s={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Et,__i:-1,__u:0};return o==null&&b.vnode!=null&&b.vnode(s),s}function ee(e){return e.children}function de(e,t){this.props=e,this.context=t}function ie(e,t){if(t==null)return e.__?ie(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?ie(e):null}function Mt(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Mt(e)}}function at(e){(!e.__d&&(e.__d=!0)&&Z.push(e)&&!$e.__r++||it!=b.debounceRendering)&&((it=b.debounceRendering)||Pt)($e)}function $e(){for(var e,t,r,n,o,s,a,c=1;Z.length;)Z.length>c&&Z.sort(Lt),e=Z.shift(),c=Z.length,e.__d&&(r=void 0,n=void 0,o=(n=(t=e).__v).__e,s=[],a=[],t.__P&&((r=I({},n)).__v=n.__v+1,b.vnode&&b.vnode(r),Ge(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,s,o??ie(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,Rt(s,r,a),n.__e=n.__=null,r.__e!=o&&Mt(r)));$e.__r=0}function Dt(e,t,r,n,o,s,a,c,d,u,p){var l,h,f,v,x,S,w,m=n&&n.__k||zt,U=t.length;for(d=ir(r,t,m,d,U),l=0;l<U;l++)(f=r.__k[l])!=null&&(h=f.__i==-1?he:m[f.__i]||he,f.__i=l,S=Ge(e,f,h,o,s,a,c,d,u,p),v=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&Je(h.ref,null,f),p.push(f.ref,f.__c||v,f)),x==null&&v!=null&&(x=v),(w=!!(4&f.__u))||h.__k===f.__k?d=Ot(f,d,e,w):typeof f.type=="function"&&S!==void 0?d=S:v&&(d=v.nextSibling),f.__u&=-7);return r.__e=x,d}function ir(e,t,r,n,o){var s,a,c,d,u,p=r.length,l=p,h=0;for(e.__k=new Array(o),s=0;s<o;s++)(a=t[s])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[s]=xe(null,a,null,null,null):ze(a)?a=e.__k[s]=xe(ee,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[s]=xe(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[s]=a,d=s+h,a.__=e,a.__b=e.__b+1,c=null,(u=a.__i=ar(a,r,d,l))!=-1&&(l--,(c=r[u])&&(c.__u|=2)),c==null||c.__v==null?(u==-1&&(o>p?h--:o<p&&h++),typeof a.type!="function"&&(a.__u|=4)):u!=d&&(u==d-1?h--:u==d+1?h++:(u>d?h--:h++,a.__u|=4))):e.__k[s]=null;if(l)for(s=0;s<p;s++)(c=r[s])!=null&&!(2&c.__u)&&(c.__e==n&&(n=ie(c)),Ut(c,c));return n}function Ot(e,t,r,n){var o,s;if(typeof e.type=="function"){for(o=e.__k,s=0;o&&s<o.length;s++)o[s]&&(o[s].__=e,t=Ot(o[s],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=ie(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function ar(e,t,r,n){var o,s,a,c=e.key,d=e.type,u=t[r],p=u!=null&&(2&u.__u)==0;if(u===null&&c==null||p&&c==u.key&&d==u.type)return r;if(n>(p?1:0)){for(o=r-1,s=r+1;o>=0||s<t.length;)if((u=t[a=o>=0?o--:s++])!=null&&!(2&u.__u)&&c==u.key&&d==u.type)return a}return-1}function lt(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||or.test(t)?r:r+"px"}function ye(e,t,r,n,o){var s,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||lt(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||lt(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(Tt,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=r,r?n?r.u=n.u:(r.u=qe,e.addEventListener(t,s?je:Be,s)):e.removeEventListener(t,s?je:Be,s);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function ct(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=qe++;else if(t.t<r.u)return;return r(b.event?b.event(t):t)}}}function Ge(e,t,r,n,o,s,a,c,d,u){var p,l,h,f,v,x,S,w,m,U,C,j,F,ne,X,W,Y,z=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),s=[c=t.__e=r.__e]),(p=b.__b)&&p(t);e:if(typeof z=="function")try{if(w=t.props,m="prototype"in z&&z.prototype.render,U=(p=z.contextType)&&n[p.__c],C=p?U?U.props.value:p.__:n,r.__c?S=(l=t.__c=r.__c).__=l.__E:(m?t.__c=l=new z(w,C):(t.__c=l=new de(w,C),l.constructor=z,l.render=cr),U&&U.sub(l),l.state||(l.state={}),l.__n=n,h=l.__d=!0,l.__h=[],l._sb=[]),m&&l.__s==null&&(l.__s=l.state),m&&z.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=I({},l.__s)),I(l.__s,z.getDerivedStateFromProps(w,l.__s))),f=l.props,v=l.state,l.__v=t,h)m&&z.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),m&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(m&&z.getDerivedStateFromProps==null&&w!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(w,C),t.__v==r.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(w,l.__s,C)===!1){for(t.__v!=r.__v&&(l.props=w,l.state=l.__s,l.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(R){R&&(R.__=t)}),j=0;j<l._sb.length;j++)l.__h.push(l._sb[j]);l._sb=[],l.__h.length&&a.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(w,l.__s,C),m&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,v,x)})}if(l.context=C,l.props=w,l.__P=e,l.__e=!1,F=b.__r,ne=0,m){for(l.state=l.__s,l.__d=!1,F&&F(t),p=l.render(l.props,l.state,l.context),X=0;X<l._sb.length;X++)l.__h.push(l._sb[X]);l._sb=[]}else do l.__d=!1,F&&F(t),p=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++ne<25);l.state=l.__s,l.getChildContext!=null&&(n=I(I({},n),l.getChildContext())),m&&!h&&l.getSnapshotBeforeUpdate!=null&&(x=l.getSnapshotBeforeUpdate(f,v)),W=p,p!=null&&p.type===ee&&p.key==null&&(W=At(p.props.children)),c=Dt(e,ze(W)?W:[W],t,r,n,o,s,a,c,d,u),l.base=t.__e,t.__u&=-161,l.__h.length&&a.push(l),S&&(l.__E=l.__=null)}catch(R){if(t.__v=null,d||s!=null)if(R.then){for(t.__u|=d?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;s[s.indexOf(c)]=null,t.__e=c}else{for(Y=s.length;Y--;)Ke(s[Y]);Fe(t)}else t.__e=r.__e,t.__k=r.__k,R.then||Fe(t);b.__e(R,t,r)}else s==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):c=t.__e=lr(r.__e,t,r,n,o,s,a,d,u);return(p=b.diffed)&&p(t),128&t.__u?void 0:c}function Fe(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Fe)}function Rt(e,t,r){for(var n=0;n<r.length;n++)Je(r[n],r[++n],r[++n]);b.__c&&b.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(s){s.call(o)})}catch(s){b.__e(s,o.__v)}})}function At(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:ze(e)?e.map(At):I({},e)}function lr(e,t,r,n,o,s,a,c,d){var u,p,l,h,f,v,x,S=r.props||he,w=t.props,m=t.type;if(m=="svg"?o="http://www.w3.org/2000/svg":m=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),s!=null){for(u=0;u<s.length;u++)if((f=s[u])&&"setAttribute"in f==!!m&&(m?f.localName==m:f.nodeType==3)){e=f,s[u]=null;break}}if(e==null){if(m==null)return document.createTextNode(w);e=document.createElementNS(o,m,w.is&&w),c&&(b.__m&&b.__m(t,s),c=!1),s=null}if(m==null)S===w||c&&e.data==w||(e.data=w);else{if(s=s&&Te.call(e.childNodes),!c&&s!=null)for(S={},u=0;u<e.attributes.length;u++)S[(f=e.attributes[u]).name]=f.value;for(u in S)if(f=S[u],u!="children"){if(u=="dangerouslySetInnerHTML")l=f;else if(!(u in w)){if(u=="value"&&"defaultValue"in w||u=="checked"&&"defaultChecked"in w)continue;ye(e,u,null,f,o)}}for(u in w)f=w[u],u=="children"?h=f:u=="dangerouslySetInnerHTML"?p=f:u=="value"?v=f:u=="checked"?x=f:c&&typeof f!="function"||S[u]===f||ye(e,u,f,S[u],o);if(p)c||l&&(p.__html==l.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(l&&(e.innerHTML=""),Dt(t.type=="template"?e.content:e,ze(h)?h:[h],t,r,n,m=="foreignObject"?"http://www.w3.org/1999/xhtml":o,s,a,s?s[0]:r.__k&&ie(r,0),c,d),s!=null)for(u=s.length;u--;)Ke(s[u]);c||(u="value",m=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[u]||m=="progress"&&!v||m=="option"&&v!=S[u])&&ye(e,u,v,S[u],o),u="checked",x!=null&&x!=e[u]&&ye(e,u,x,S[u],o))}return e}function Je(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){b.__e(o,r)}}function Ut(e,t,r){var n,o;if(b.unmount&&b.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||Je(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){b.__e(s,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&Ut(n[o],t,r||typeof e.type!="function");r||Ke(e.__e),e.__c=e.__=e.__e=void 0}function cr(e,t,r){return this.constructor(e,r)}function ur(e,t,r){var n,o,s,a;t==document&&(t=document.documentElement),b.__&&b.__(e,t),o=(n=!1)?null:t.__k,s=[],a=[],Ge(t,e=t.__k=sr(ee,null,[e]),o||he,he,t.namespaceURI,o?null:t.firstChild?Te.call(t.childNodes):null,s,o?o.__e:t.firstChild,n,a),Rt(s,e,a)}Te=zt.slice,b={__e:function(e,t,r,n){for(var o,s,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((s=o.constructor)&&s.getDerivedStateFromError!=null&&(o.setState(s.getDerivedStateFromError(e)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),a=o.__d),a)return o.__E=o}catch(c){e=c}throw e}},Et=0,Ct=function(e){return e!=null&&e.constructor===void 0},de.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=I({},this.state),typeof e=="function"&&(e=e(I({},r),this.props)),e&&I(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),at(this))},de.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),at(this))},de.prototype.render=ee,Z=[],Pt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Lt=function(e,t){return e.__v.__b-t.__v.__b},$e.__r=0,Tt=/(PointerCapture)$|Capture$/i,qe=0,Be=ct(!1),je=ct(!0);var _e,$,Ae,ut,ve=0,Ht=[],E=b,dt=E.__b,ft=E.__r,pt=E.diffed,ht=E.__c,_t=E.unmount,vt=E.__;function Ze(e,t){E.__h&&E.__h($,e,ve||t),ve=0;var r=$.__H||($.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Q(e){return ve=1,dr(Nt,e)}function dr(e,t,r){var n=Ze(_e++,2);if(n.t=e,!n.__c&&(n.__=[Nt(void 0,t),function(c){var d=n.__N?n.__N[0]:n.__[0],u=n.t(d,c);d!==u&&(n.__N=[u,n.__[1]],n.__c.setState({}))}],n.__c=$,!$.__f)){var o=function(c,d,u){if(!n.__c.__H)return!0;var p=n.__c.__H.__.filter(function(h){return!!h.__c});if(p.every(function(h){return!h.__N}))return!s||s.call(this,c,d,u);var l=n.__c.props!==c;return p.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(l=!0)}}),s&&s.call(this,c,d,u)||l};$.__f=!0;var s=$.shouldComponentUpdate,a=$.componentWillUpdate;$.componentWillUpdate=function(c,d,u){if(this.__e){var p=s;s=void 0,o(c,d,u),s=p}a&&a.call(this,c,d,u)},$.shouldComponentUpdate=o}return n.__N||n.__}function L(e,t){var r=Ze(_e++,3);!E.__s&&Wt(r.__H,t)&&(r.__=e,r.u=t,$.__H.__h.push(r))}function O(e){return ve=5,Me(function(){return{current:e}},[])}function Me(e,t){var r=Ze(_e++,7);return Wt(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function be(e,t){return ve=8,Me(function(){return e},t)}function fr(){for(var e;e=Ht.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Se),e.__H.__h.forEach(Xe),e.__H.__h=[]}catch(t){e.__H.__h=[],E.__e(t,e.__v)}}E.__b=function(e){$=null,dt&&dt(e)},E.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),vt&&vt(e,t)},E.__r=function(e){ft&&ft(e),_e=0;var t=($=e.__c).__H;t&&(Ae===$?(t.__h=[],$.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Se),t.__h.forEach(Xe),t.__h=[],_e=0)),Ae=$},E.diffed=function(e){pt&&pt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ht.push(t)!==1&&ut===E.requestAnimationFrame||((ut=E.requestAnimationFrame)||pr)(fr)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),Ae=$=null},E.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Se),r.__h=r.__h.filter(function(n){return!n.__||Xe(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],E.__e(n,r.__v)}}),ht&&ht(e,t)},E.unmount=function(e){_t&&_t(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Se(n)}catch(o){t=o}}),r.__H=void 0,t&&E.__e(t,r.__v))};var gt=typeof requestAnimationFrame=="function";function pr(e){var t,r=function(){clearTimeout(n),gt&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);gt&&(t=requestAnimationFrame(r))}function Se(e){var t=$,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),$=t}function Xe(e){var t=$;e.__c=e.__(),$=t}function Wt(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function Nt(e,t){return typeof t=="function"?t(e):t}var hr=Symbol.for("preact-signals");function Qe(){if(se>1)se--;else{for(var e,t=!1;fe!==void 0;){var r=fe;for(fe=void 0,Ye++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&jt(r))try{r.c()}catch(o){t||(e=o,t=!0)}r=n}}if(Ye=0,se--,t)throw e}}var y=void 0;function It(e){var t=y;y=void 0;try{return e()}finally{y=t}}var fe=void 0,se=0,Ye=0,Ee=0;function Bt(e){if(y!==void 0){var t=e.n;if(t===void 0||t.t!==y)return t={i:0,S:e,p:y.s,n:void 0,t:y,e:void 0,x:void 0,r:t},y.s!==void 0&&(y.s.n=t),y.s=t,e.n=t,32&y.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=y.s,t.n=void 0,y.s.n=t,y.s=t),t}}function T(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}T.prototype.brand=hr;T.prototype.h=function(){return!0};T.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:It(function(){var n;(n=t.W)==null||n.call(t)}))};T.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&It(function(){var o;(o=t.Z)==null||o.call(t)}))}};T.prototype.subscribe=function(e){var t=this;return tt(function(){var r=t.value,n=y;y=void 0;try{e(r)}finally{y=n}},{name:"sub"})};T.prototype.valueOf=function(){return this.value};T.prototype.toString=function(){return this.value+""};T.prototype.toJSON=function(){return this.value};T.prototype.peek=function(){var e=y;y=void 0;try{return this.value}finally{y=e}};Object.defineProperty(T.prototype,"value",{get:function(){var e=Bt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Ye>100)throw new Error("Cycle detected");this.v=e,this.i++,Ee++,se++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Qe()}}}});function B(e,t){return new T(e,t)}function jt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Ft(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Xt(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function re(e,t){T.call(this,void 0),this.x=e,this.s=void 0,this.g=Ee-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}re.prototype=new T;re.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Ee))return!0;if(this.g=Ee,this.f|=1,this.i>0&&!jt(this))return this.f&=-2,!0;var e=y;try{Ft(this),y=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return y=e,Xt(this),this.f&=-2,!0};re.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}T.prototype.S.call(this,e)};re.prototype.U=function(e){if(this.t!==void 0&&(T.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};re.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(re.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Bt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function _r(e,t){return new re(e,t)}function Yt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){se++;var r=y;y=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,et(e),n}finally{y=r,Qe()}}}function et(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Yt(e)}function vr(e){if(y!==this)throw new Error("Out-of-order effect");Xt(this),y=e,this.f&=-2,8&this.f&&et(this),Qe()}function ae(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}ae.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};ae.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Yt(this),Ft(this),se++;var e=y;return y=this,vr.bind(this,e)};ae.prototype.N=function(){2&this.f||(this.f|=2,this.o=fe,fe=this)};ae.prototype.d=function(){this.f|=8,1&this.f||et(this)};ae.prototype.dispose=function(){this.d()};function tt(e,t){var r=new ae(e,t);try{r.c()}catch(o){throw r.d(),o}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var we;function le(e,t){b[e]=t.bind(null,b[e]||function(){})}function Ce(e){if(we){var t=we;we=void 0,t()}we=e&&e.S()}function Vt(e){var t=this,r=e.data,n=N(r);n.value=r;var o=Me(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var a,c=t.__$u.S(),d=o.value;c(),Ct(d)||((a=t.base)==null?void 0:a.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=d},_r(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return o.value}Vt.displayName="_st";Object.defineProperties(T.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Vt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});le("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var o in n)if(o!=="children"){var s=n[o];s instanceof T&&(r||(t.__np=r={}),r[o]=s,n[o]=s.peek())}}e(t)});le("__r",function(e,t){e(t),Ce();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(o){var s;return tt(function(){s=this}),s.c=function(){n.__$f|=1,n.setState({})},s}())),Ce(r)});le("__e",function(e,t,r,n){Ce(),e(t,r,n)});le("diffed",function(e,t){Ce();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,o=t.props;if(n){var s=r.U;if(s)for(var a in s){var c=s[a];c!==void 0&&!(a in n)&&(c.d(),s[a]=void 0)}else r.U=s={};for(var d in n){var u=s[d],p=n[d];u===void 0?(u=gr(r,d,p,o),s[d]=u):u.o(p,o)}}}e(t)});function gr(e,t,r,n){var o=t in e&&e.ownerSVGElement===void 0,s=B(r);return{o:function(a,c){s.value=a,n=c},d:tt(function(){var a=s.value.value;n[t]!==a&&(n[t]=a,o?e[t]=a:a?e.setAttribute(t,a):e.removeAttribute(t))})}}le("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var o in n){var s=n[o];s&&s.d()}}}}else{var a=t.__c;if(a){var c=a.__$u;c&&(a.__$u=void 0,c.d())}}e(t)});le("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});de.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var o in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var s in e)if(s!=="__source"&&e[s]!==this.props[s])return!0;for(var a in this.props)if(!(a in e))return!0;return!1};function N(e){return Me(function(){return B(e)},[])}function rt(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function mr(e,t){let r;const n=()=>{if(r)return r;const o=indexedDB.open(e);return o.onupgradeneeded=()=>o.result.createObjectStore(t),r=rt(o),r.then(s=>{s.onclose=()=>r=void 0},()=>{}),r};return(o,s)=>n().then(a=>s(a.transaction(t,o).objectStore(t)))}let Ue;function qt(){return Ue||(Ue=mr("keyval-store","keyval")),Ue}function Kt(e,t=qt()){return t("readonly",r=>rt(r.get(e)))}function yr(e,t,r=qt()){return r("readwrite",n=>(n.put(t,e),rt(n.transaction)))}var br=0;function i(e,t,r,n,o,s){t||(t={});var a,c,d=t;if("ref"in d)for(c in d={},t)c=="ref"?a=t[c]:d[c]=t[c];var u={type:e,props:d,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--br,__i:-1,__u:0,__source:o,__self:s};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)d[c]===void 0&&(d[c]=a[c]);return b.vnode&&b.vnode(u),u}var wr=Object.defineProperty,kr=(e,t)=>{for(var r in t)wr(e,r,{get:t[r],enumerable:!0})};function xr(e){return Pe=new Gt(e),Pe}function Sr(){if(!Pe)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return Pe}var Gt,Pe;async function $r(e,t){const r=Sr(),n=await r.getProduct(e);if(!n.variants.edges.length)throw new Error("Product has no variants");const s=[{variantId:n.variants.edges[0].node.id,quantity:1}],a=await r.createCheckout(s);if(t&&typeof localStorage<"u"){const c={checkoutId:a.id,bookSlug:t,createdAt:Date.now()};localStorage.setItem(Cr,JSON.stringify(c))}return a.webUrl}function Er(e){return e.webUrl}var Cr;async function Pr(e,t){const r={bookSlug:e,orderId:t==null?void 0:t.orderId,email:t==null?void 0:t.email,unlockedAt:Date.now()};await yr(`${ge}${e}`,r),typeof localStorage<"u"&&localStorage.setItem(`${ge}${e}`,JSON.stringify(r))}async function Lr(e){if(typeof localStorage<"u"&&localStorage.getItem(`${ge}${e}`))return!0;try{return!!await Kt(`${ge}${e}`)}catch{return!1}}async function Tr(e){try{return await Kt(`${ge}${e}`)||null}catch{return null}}async function zr(e,t){const r=await Tr(e);return!r||!r.orderId?!1:r.orderId===t}var ge,Mr={};kr(Mr,{ShopifyClient:()=>Gt,createCheckout:()=>$r,createShopifyClient:()=>xr,getCheckoutUrl:()=>Er,isContentUnlocked:()=>Lr,unlockContent:()=>Pr,verifyPurchase:()=>zr});function Dr({prev:e,next:t}){return!e&&!t?null:i("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[i("div",{class:"pressy-nav-inner",children:[e?i("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[i("span",{class:"pressy-nav-direction",children:"Previous"}),i("span",{class:"pressy-nav-title",children:e.title})]}):i("div",{class:"pressy-nav-placeholder"}),t?i("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[i("span",{class:"pressy-nav-direction",children:"Next"}),i("span",{class:"pressy-nav-title",children:t.title})]}):i("div",{class:"pressy-nav-placeholder"})]}),i("style",{children:`
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
      `})]})}function Jt(){const e=N(!1),t=N({x:0,y:0}),r=N(""),n=O(null);L(()=>{const c=()=>{const d=window.getSelection();if(!d||d.isCollapsed){e.value=!1;return}const u=d.toString().trim();if(u.length<5){e.value=!1;return}r.value=u;const l=d.getRangeAt(0).getBoundingClientRect();t.value={x:l.left+l.width/2,y:l.top-10},e.value=!0};return document.addEventListener("selectionchange",c),document.addEventListener("mouseup",c),()=>{document.removeEventListener("selectionchange",c),document.removeEventListener("mouseup",c)}},[]);const o=()=>{const c=encodeURIComponent(r.value),d=new URL(window.location.href);return d.hash=`:~:text=${c}`,d.toString()},s=async()=>{const c=o(),d=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:d,url:c}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${d}

${c}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var u;(u=n.current)==null||u.classList.remove("copied")},2e3))}catch(u){console.error("Failed to copy to clipboard:",u)}},a=async()=>{const c=o();try{await navigator.clipboard.writeText(c),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var d;(d=n.current)==null||d.classList.remove("copied")},2e3))}catch(d){console.error("Failed to copy link:",d)}};return e.value?i("div",{ref:n,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[i("button",{class:"pressy-share-btn",onClick:s,"aria-label":"Share selected text",title:"Share quote",children:i("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),i("button",{class:"pressy-copy-link-btn",onClick:a,"aria-label":"Copy link to selected text",title:"Copy link",children:i("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),i("style",{children:`
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
      `})]}):null}function Zt(){const e=N(!navigator.onLine),t=N(!1);return L(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?i("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?i(ee,{children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),i("span",{children:"You're offline"})]}):i(ee,{children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),i("span",{children:"Back online"})]}),i("style",{children:`
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
      `})]}):null}function nt({children:e,prevChapter:t,nextChapter:r,showDropCap:n=!0,paginationMode:o="scroll",onSaveProgress:s,onRestoreProgress:a,bookProgressPercent:c}){return o==="paginated"?i(Rr,{prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:s,onRestoreProgress:a,bookProgressPercent:c,children:e}):i(Or,{prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:s,onRestoreProgress:a,children:e})}function Or({children:e,prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:o,onRestoreProgress:s}){const a=O(null);return L(()=>{s&&s().then(c=>{c&&c.scrollPosition>0&&window.scrollTo(0,c.scrollPosition)})},[]),L(()=>{if(!o)return;const c=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{o({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",c,{passive:!0}),()=>{window.removeEventListener("scroll",c),a.current&&clearTimeout(a.current)}},[o]),L(()=>{if(!o)return;const c=()=>{o({page:0,totalPages:0,scrollPosition:window.scrollY})};return window.addEventListener("beforeunload",c),()=>window.removeEventListener("beforeunload",c)},[o]),i("div",{class:"pressy-reader",children:[i("main",{class:"pressy-reader-main",children:i("article",{class:`pressy-prose ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),i(Jt,{}),i(Dr,{prev:t,next:r}),i(Zt,{}),i("style",{children:Ar})]})}function Rr({children:e,prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:o,onRestoreProgress:s,bookProgressPercent:a}){const c=O(null),d=O(null),[u,p]=Q(0),[l,h]=Q(1),f=O(!1),v=O(null),[x,S]=Q(!1),[w,m]=Q(0),[U,C]=Q(null),j=O(0),F=O(0),ne=O(0),X=O(0),W=O(0),Y=O(!1),z=O(!1),R=be(()=>{const _=d.current,g=c.current;if(!_||!g)return;const k=g.clientWidth;if(k===0)return;_.style.columnWidth=`${k}px`,_.scrollWidth;const P=Math.max(1,Math.round(_.scrollWidth/k));h(P),p(J=>Math.min(J,P-1))},[]);L(()=>{const _=c.current;if(!_)return;const g=setTimeout(R,50),k=new ResizeObserver(()=>{R()});return k.observe(_),()=>{clearTimeout(g),k.disconnect()}},[R]),L(()=>{const _=d.current;if(!_)return;const g=_.querySelectorAll("img");if(g.length===0)return;const k=()=>R();return g.forEach(P=>{P.complete||(P.addEventListener("load",k),P.addEventListener("error",k))}),()=>{g.forEach(P=>{P.removeEventListener("load",k),P.removeEventListener("error",k)})}},[R]),L(()=>{f.current||!s||l<=1||(f.current=!0,s().then(_=>{if(_&&_.page>0){const g=Math.min(_.page,l-1);p(g)}}))},[l,s]),L(()=>{const _=d.current,g=c.current;if(!_||!g)return;const P=u*g.clientWidth-w;x?_.style.transition="none":_.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",_.style.transform=`translateX(-${P}px)`},[u,w,x]),L(()=>{if(!(!o||!f.current))return v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{o({page:u,totalPages:l,scrollPosition:0})},300),()=>{v.current&&clearTimeout(v.current)}},[u,l,o]),L(()=>{if(!o)return;const _=()=>{o({page:u,totalPages:l,scrollPosition:0})};return window.addEventListener("beforeunload",_),()=>window.removeEventListener("beforeunload",_)},[u,l,o]);const q=be(_=>{const g=Math.max(0,Math.min(_,l-1));p(g)},[l]),K=be(()=>{if(u>=l-1){r&&(window.location.href=r.slug);return}q(u+1)},[u,l,r,q]),G=be(()=>{if(u<=0){t&&(window.location.href=t.slug);return}q(u-1)},[u,t,q]);L(()=>{const _=g=>{const k=g.target.tagName;k==="INPUT"||k==="TEXTAREA"||k==="SELECT"||(g.key==="ArrowRight"||g.key===" "?(g.preventDefault(),K()):g.key==="ArrowLeft"?(g.preventDefault(),G()):g.key==="Home"?(g.preventDefault(),q(0)):g.key==="End"&&(g.preventDefault(),q(l-1)))};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[K,G,q,l]),L(()=>{const _=c.current;if(!_)return;const g=A=>{const M=A.touches[0];j.current=M.clientX,F.current=M.clientY,ne.current=M.clientX,X.current=performance.now(),W.current=0,Y.current=!1,z.current=!1},k=A=>{const M=A.touches[0],D=M.clientX-j.current,oe=M.clientY-F.current;if(!Y.current)if(Math.abs(D)>Math.abs(oe)&&Math.abs(D)>10)Y.current=!0;else return Math.abs(oe)>Math.abs(D)&&Math.abs(oe)>10,void 0;A.preventDefault();const ce=performance.now(),ue=ce-X.current;if(ue>0){const Re=(M.clientX-ne.current)/ue;W.current=.6*Re+.4*W.current}ne.current=M.clientX,X.current=ce;let me=D;const Oe=u===0,st=u>=l-1;if(Oe&&D>0||st&&D<0){const Re=D>0?1:-1,nr=Math.abs(D);me=Re*Math.sqrt(nr)*5,D>40&&Oe&&t?C("prev"):D<-40&&st&&r?C("next"):C(null)}else C(null);z.current=!0,S(!0),m(me)},P=A=>{if(!Y.current||!z.current){S(!1),m(0),C(null);return}const M=A.changedTouches[0].clientX-j.current,D=W.current,oe=50,ce=.3,ue=80,me=u===0;if(u>=l-1&&M<-ue&&r){S(!1),m(0),C(null),window.location.href=r.slug;return}if(me&&M>ue&&t){S(!1),m(0),C(null),window.location.href=t.slug;return}M<-oe||D<-ce?K():(M>oe||D>ce)&&G(),z.current=!1,S(!1),m(0),C(null)},J=()=>{z.current=!1,S(!1),m(0),C(null)};return _.addEventListener("touchstart",g,{passive:!0}),_.addEventListener("touchmove",k,{passive:!1}),_.addEventListener("touchend",P,{passive:!0}),_.addEventListener("touchcancel",J,{passive:!0}),()=>{_.removeEventListener("touchstart",g),_.removeEventListener("touchmove",k),_.removeEventListener("touchend",P),_.removeEventListener("touchcancel",J)}},[u,l,K,G,r,t]),L(()=>{const _=c.current;if(!_)return;let g=0,k=null;const P=80,J=A=>{A.preventDefault();const M=Math.abs(A.deltaX)>Math.abs(A.deltaY)?A.deltaX:A.deltaY;g+=M,k&&clearTimeout(k),k=setTimeout(()=>{g=0},200),g>P?(K(),g=0):g<-P&&(G(),g=0)};return _.addEventListener("wheel",J,{passive:!1}),()=>{_.removeEventListener("wheel",J),k&&clearTimeout(k)}},[K,G]);const rr=l>1?(u+1)/l*100:100;return i("div",{class:"pressy-reader pressy-reader--paginated",children:[i("div",{class:"pressy-paginated-viewport",ref:c,children:i("article",{ref:d,class:`pressy-prose pressy-prose--paginated ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),i("div",{class:"pressy-tap-zone pressy-tap-prev",onClick:G,"aria-label":"Previous page",role:"button",tabIndex:-1}),i("div",{class:"pressy-tap-zone pressy-tap-next",onClick:K,"aria-label":"Next page",role:"button",tabIndex:-1}),U==="prev"&&t&&i("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[i("span",{class:"pressy-chapter-hint-arrow",children:"←"}),i("span",{class:"pressy-chapter-hint-text",children:t.title})]}),U==="next"&&r&&i("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[i("span",{class:"pressy-chapter-hint-text",children:r.title}),i("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),i("div",{class:"pressy-page-footer",children:[i("div",{class:"pressy-progress-bar",children:i("div",{class:"pressy-progress-fill",style:{width:`${rr}%`}})}),i("div",{class:"pressy-page-indicator",children:[i("span",{children:["Page ",u+1," of ",l]}),a!=null&&i("span",{class:"pressy-book-progress",children:[Math.round(a),"% of book"]})]})]}),i(Jt,{}),i(Zt,{}),i("style",{children:Ur})]})}var Ar=`
  .pressy-reader {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .pressy-reader-main {
    flex: 1;
    padding: 2rem 0;
  }
`,Ur=`
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
`,Hr="pressy-cached-books";function mt(){try{const e=localStorage.getItem(Hr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function Wr({bookSlug:e,chapterUrls:t,cachedBooks:r,cacheProgress:n,onDownload:o,onRemove:s}){var u;const a=N(mt().has(e)||r.value.has(e)),c=N(((u=n.value)==null?void 0:u.bookSlug)===e),d=N(null);return L(()=>{const p=()=>{var f;a.value=mt().has(e)||r.value.has(e),c.value=((f=n.value)==null?void 0:f.bookSlug)===e;const h=n.value;d.value=h&&h.bookSlug===e?Math.round(h.current/h.total*100):null},l=setInterval(p,500);return p(),()=>clearInterval(l)},[e]),a.value?i("div",{class:"pressy-download-book",children:[i("div",{class:"pressy-download-status",children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),i("span",{children:"Available offline"})]}),i("button",{class:"pressy-download-remove",onClick:()=>s(e),"aria-label":"Remove offline copy",children:"Remove"}),i("style",{children:He})]}):c.value?i("div",{class:"pressy-download-book",children:[i("div",{class:"pressy-download-progress",children:[i("div",{class:"pressy-download-bar",children:i("div",{class:"pressy-download-bar-fill",style:{width:`${d.value||0}%`}})}),i("span",{class:"pressy-download-percent",children:[d.value||0,"%"]})]}),i("style",{children:He})]}):i("div",{class:"pressy-download-book",children:[i("button",{class:"pressy-download-btn",onClick:()=>o(e,t),"aria-label":"Download for offline reading",children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),i("span",{children:"Download for offline"})]}),i("style",{children:He})]})}var He=`
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
`;function Nr({chapters:e,basePath:t,bookSlug:r,loadAllProgress:n}){const[o,s]=Q(new Map);L(()=>{n().then(h=>{const f=new Set(e.map(x=>x.slug)),v=new Map;for(const x of h)f.has(x.chapterSlug)&&v.set(x.chapterSlug,{page:x.page,totalPages:x.totalPages});s(v)})},[e,n]);const a=e.reduce((h,f)=>h+(f.wordCount||0),0);let c=0,d=0,u=0;for(const h of e){const f=o.get(h.slug);if(!f)continue;const v=h.wordCount||0;f.totalPages>0&&f.page>=f.totalPages-1?(c+=v,d++,u++):f.page>0&&f.totalPages>0&&(c+=f.page/f.totalPages*v,u++)}const p=a>0?c/a*100:0,l=u>0;return i("div",{class:"pressy-book-progress-section",children:[l&&i("div",{class:"pressy-overall-progress",children:[i("div",{class:"pressy-overall-progress-bar",children:i("div",{class:"pressy-overall-progress-fill",style:{width:`${p}%`}})}),i("div",{class:"pressy-overall-progress-text",children:[Math.round(p),"% complete",i("span",{class:"pressy-overall-progress-detail",children:[d," of ",e.length," chapters"]})]})]}),i("nav",{class:"pressy-chapter-list",children:e.map(h=>{const f=o.get(h.slug),v=f&&f.totalPages>0&&f.page>=f.totalPages-1,x=f&&f.page>0&&!v;return i("a",{href:`${t}/books/${r}/${h.slug}`,class:`pressy-chapter-link ${v?"pressy-chapter--completed":""} ${x?"pressy-chapter--started":""}`,children:[i("span",{class:"pressy-chapter-order",children:[h.order,"."]}),i("span",{class:"pressy-chapter-title",children:h.title}),v&&i("span",{class:"pressy-chapter-badge pressy-chapter-badge--done",children:"Done"}),x&&f&&i("span",{class:"pressy-chapter-badge pressy-chapter-badge--reading",children:["p.",f.page+1,"/",f.totalPages]})]})})}),i("style",{children:Ir})]})}var Ir=`
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
`;function Br({id:e,children:t}){const r=N(!1);return i(ee,{children:[i("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&i("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,i("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),i("style",{children:`
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
      `})]})}function jr({children:e,title:t}){return i("aside",{class:"pressy-aside",children:[t&&i("strong",{class:"pressy-aside-title",children:t}),i("div",{class:"pressy-aside-content",children:e}),i("style",{children:`
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
      `})]})}function yt({src:e,alt:t,caption:r,wide:n,children:o}){return i("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[i("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||o)&&i("figcaption",{class:"pressy-figure-caption",children:r||o}),i("style",{children:`
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
      `})]})}var Fr={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},Xr={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function Yr({type:e="note",title:t,children:r}){return i("div",{class:`pressy-callout pressy-callout-${e}`,children:[i("div",{class:"pressy-callout-header",children:[i("span",{class:"pressy-callout-icon",children:Fr[e]}),i("strong",{class:"pressy-callout-title",children:t||Xr[e]})]}),i("div",{class:"pressy-callout-content",children:r}),i("style",{children:`
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
      `})]})}function bt({variant:e="asterisks"}){return i("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&i("span",{children:"* * *"}),e==="ornament"&&i("span",{children:"❧"}),i("style",{children:`
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
      `})]})}var Vr={Footnote:Br,Aside:jr,Figure:yt,Callout:Yr,SceneBreak:bt,img:yt,hr:bt},qr={};function ot(){return{...Vr,...qr}}var Qt="pressy-cached-books",We=B("online"),Le=B(null),Ne=B(!1);function Kr(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(Qt);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var H=B(Kr());typeof window<"u"&&(We.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{We.value="online"}),window.addEventListener("offline",()=>{We.value="offline"}));async function Gr(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",Jr),navigator.serviceWorker.controller?Ne.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{Ne.value=!0}),n.addEventListener("updatefound",()=>{const o=n.installing;o&&o.addEventListener("statechange",()=>{o.state==="activated"&&(Ne.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function pe(){try{localStorage.setItem(Qt,JSON.stringify([...H.value]))}catch{}}function Jr(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:o}=e.data;Le.value={bookSlug:r,current:n,total:o}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;Le.value=null;const n=new Set(H.value);n.add(r),H.value=n,pe()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const o of r){const s=o.match(/\/books\/([^/]+)/);s&&n.add(s[1])}H.value=n,pe()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(H.value);n.delete(r),H.value=n,pe()}}async function Zr(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(o=>o.startsWith("http")?o:`${window.location.origin}${o}`);Le.value={bookSlug:e,current:0,total:r.length};const n=new Set(H.value);return n.add(e),H.value=n,pe(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}async function Qr(e){const t=new Set(H.value);if(t.delete(e),H.value=t,pe(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const o of n)o.url.includes(`/books/${e}`)&&await r.delete(o);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var wt=B("/"),en=B("light"),kt=B(!navigator.onLine),tn="pressy",rn=1,V="reading-progress",xt="unlocks",ke=null;async function De(){return ke||new Promise((e,t)=>{const r=indexedDB.open(tn,rn);r.onerror=()=>t(r.error),r.onsuccess=()=>{ke=r.result,e(ke)},r.onupgradeneeded=n=>{const o=n.target.result;o.objectStoreNames.contains(V)||o.createObjectStore(V,{keyPath:"chapterSlug"}),o.objectStoreNames.contains(xt)||o.createObjectStore(xt,{keyPath:"bookSlug"})}})}async function nn(e){const t=await De();return new Promise((r,n)=>{const a=t.transaction(V,"readwrite").objectStore(V).put(e);a.onsuccess=()=>r(),a.onerror=()=>n(a.error)})}async function on(e){const t=await De();return new Promise((r,n)=>{const a=t.transaction(V,"readonly").objectStore(V).get(e);a.onsuccess=()=>r(a.result||null),a.onerror=()=>n(a.error)})}async function Ve(){const e=await De();return new Promise((t,r)=>{const s=e.transaction(V,"readonly").objectStore(V).getAll();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>r(s.error)})}function St(e){en.value=e,document.documentElement.setAttribute("data-theme",e),localStorage.setItem("pressy-theme",e)}function sn(){const e=localStorage.getItem("pressy-theme");e?St(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&St("dark")}function an(){window.addEventListener("online",()=>{kt.value=!1}),window.addEventListener("offline",()=>{kt.value=!0})}function er(e,t=[]){const r=e.chapters.map(n=>`/books/${e.slug}/${n.slug}`);return i("div",{class:"pressy-home",children:[i("header",{class:"pressy-home-header",children:[i("h1",{children:e.metadata.title}),i("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&i("p",{class:"pressy-home-desc",children:e.metadata.description})]}),i(Wr,{bookSlug:e.slug,chapterUrls:r,cachedBooks:H,cacheProgress:Le,onDownload:Zr,onRemove:Qr}),i("section",{class:"pressy-home-section",children:[i("h2",{children:"Chapters"}),i(Nr,{bookSlug:e.slug,chapters:e.chapters.map(n=>({slug:n.slug,title:n.title,order:n.order,wordCount:n.wordCount||0})),basePath:te,loadAllProgress:Ve})]}),t.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Articles"}),i("nav",{class:"pressy-chapter-list",children:t.map(n=>i("a",{href:`${te}/articles/${n.slug}`,class:"pressy-chapter-link",children:n.metadata.title}))})]}),i("style",{children:tr})]})}function Ie(e){var r,n;if(e.books.length===1)return er(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return i("div",{class:"pressy-home",children:[i("header",{class:"pressy-home-header",children:[i("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&i("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Books"}),i("nav",{class:"pressy-chapter-list",children:e.books.map(o=>i("a",{href:`${te}/books/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),e.articles.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Articles"}),i("nav",{class:"pressy-chapter-list",children:e.articles.map(o=>i("a",{href:`${te}/articles/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),i("style",{children:tr})]})}function $t(e,t,r,n,o){const s=e.chapters.reduce((d,u)=>d+(u.wordCount||0),0);if(s===0)return 0;const a=new Map(o.map(d=>[d.chapterSlug,d]));let c=0;for(const d of e.chapters){const u=d.wordCount||0;if(d.slug===t)n>0&&(c+=r/Math.max(1,n-1)*u);else{const p=a.get(d.slug);if(!p)continue;p.totalPages>0&&p.page>=p.totalPages-1?c+=u:p.page>0&&p.totalPages>0&&(c+=p.page/p.totalPages*u)}}return Math.min(100,c/s*100)}function ln({book:e,chapterSlug:t,chapter:r,prevChapter:n,nextChapter:o,paginationMode:s,Content:a}){const[c,d]=Q(void 0);L(()=>{Ve().then(l=>{const h=$t(e,t,0,0,l);d(h)})},[e,t]);const u=l=>{nn({chapterSlug:t,page:l.page,totalPages:l.totalPages,scrollPosition:l.scrollPosition,timestamp:Date.now()}),l.totalPages>0&&Ve().then(h=>{const f=$t(e,t,l.page,l.totalPages,h);d(f)})},p=async()=>{const l=await on(t);return l?{page:l.page,totalPages:l.totalPages,scrollPosition:l.scrollPosition}:null};return i(nt,{title:(r==null?void 0:r.title)||t,chapterSlug:t,prevChapter:n,nextChapter:o,paginationMode:s,onSaveProgress:u,onRestoreProgress:p,bookProgressPercent:c,children:i(a,{components:ot()})})}function cn(e,t,r,n){const o=t.split("/"),s=o[2],a=o[3],c=e.books.find(v=>v.slug===s),d=c?c.chapters.findIndex(v=>v.slug===a):-1,u=c==null?void 0:c.chapters[d],p=v=>`${te}/books/${s}/${v.slug}`,l=c&&d>0?{slug:p(c.chapters[d-1]),title:c.chapters[d-1].title}:void 0,h=c&&d>=0&&d<c.chapters.length-1?{slug:p(c.chapters[d+1]),title:c.chapters[d+1].title}:void 0,f=r;return c?i(ln,{book:c,chapterSlug:a,chapter:u,prevChapter:l,nextChapter:h,paginationMode:n,Content:f}):i(nt,{title:(u==null?void 0:u.title)||a,prevChapter:l,nextChapter:h,paginationMode:n,children:i(f,{components:ot()})})}function un(e,t,r){const n=t.split("/")[2],o=e.articles.find(a=>a.slug===n),s=r;return i(nt,{title:(o==null?void 0:o.metadata.title)||n,children:i(s,{components:ot()})})}var tr=`
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
`;function dn(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const o=r.indexOf(n);return o>0?r.slice(0,o):""}var te="";function fn(e,t){var n;te=dn(e.route),wt.value=e.route,sn(),an(),De(),Gr(te),window.addEventListener("popstate",()=>{wt.value=window.location.pathname}),document.addEventListener("click",o=>{const s=o.target.closest("a");if(!s)return;const a=s.getAttribute("href");if(a&&!(a.startsWith("http")||a.startsWith("#"))&&a.startsWith(e.route+"#")){o.preventDefault();const c=a.slice(a.indexOf("#")),d=document.querySelector(c);d&&d.scrollIntoView({behavior:"smooth"});return}});let r;switch(e.routeType){case"home":r=Ie(e.manifest);break;case"book":{const o=e.route.split("/")[2],s=e.manifest.books.find(a=>a.slug===o);r=s?er(s):i("div",{children:"Book not found"});break}case"chapter":r=t?cn(e.manifest,e.route,t,(n=e.pagination)==null?void 0:n.defaultMode):i("div",{children:"Loading..."});break;case"article":r=t?un(e.manifest,e.route,t):i("div",{children:"Loading..."});break;case"books":r=Ie(e.manifest);break;case"articles":r=Ie(e.manifest);break;default:r=i("div",{children:"Page not found"})}ur(r,document.getElementById("app"))}export{fn as h,ee as k,i as u};
