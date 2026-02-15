var We,S,At,Dt,ie,ht,Ot,Nt,Rt,nt,Je,Ze,xe={},Wt=[],ur=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ue=Array.isArray;function re(e,t){for(var r in t)e[r]=t[r];return e}function ot(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function dr(e,t,r){var n,o,s,a={};for(s in t)s=="key"?n=t[s]:s=="ref"?o=t[s]:a[s]=t[s];if(arguments.length>2&&(a.children=arguments.length>3?We.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)a[s]===void 0&&(a[s]=e.defaultProps[s]);return Me(e,a,n,o,null)}function Me(e,t,r,n,o){var s={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++At,__i:-1,__u:0};return o==null&&S.vnode!=null&&S.vnode(s),s}function ae(e){return e.children}function ye(e,t){this.props=e,this.context=t}function pe(e,t){if(t==null)return e.__?pe(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?pe(e):null}function Ut(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Ut(e)}}function _t(e){(!e.__d&&(e.__d=!0)&&ie.push(e)&&!Ae.__r++||ht!=S.debounceRendering)&&((ht=S.debounceRendering)||Ot)(Ae)}function Ae(){for(var e,t,r,n,o,s,a,l=1;ie.length;)ie.length>l&&ie.sort(Nt),e=ie.shift(),l=ie.length,e.__d&&(r=void 0,n=void 0,o=(n=(t=e).__v).__e,s=[],a=[],t.__P&&((r=re({},n)).__v=n.__v+1,S.vnode&&S.vnode(r),st(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,s,o??pe(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,Bt(s,r,a),n.__e=n.__=null,r.__e!=o&&Ut(r)));Ae.__r=0}function Ht(e,t,r,n,o,s,a,l,d,u,f){var c,h,p,_,w,m,x,b=n&&n.__k||Wt,z=t.length;for(d=fr(r,t,b,d,z),c=0;c<z;c++)(p=r.__k[c])!=null&&(h=p.__i==-1?xe:b[p.__i]||xe,p.__i=c,m=st(e,p,h,o,s,a,l,d,u,f),_=p.__e,p.ref&&h.ref!=p.ref&&(h.ref&&it(h.ref,null,p),f.push(p.ref,p.__c||_,p)),w==null&&_!=null&&(w=_),(x=!!(4&p.__u))||h.__k===p.__k?d=It(p,d,e,x):typeof p.type=="function"&&m!==void 0?d=m:_&&(d=_.nextSibling),p.__u&=-7);return r.__e=w,d}function fr(e,t,r,n,o){var s,a,l,d,u,f=r.length,c=f,h=0;for(e.__k=new Array(o),s=0;s<o;s++)(a=t[s])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[s]=Me(null,a,null,null,null):Ue(a)?a=e.__k[s]=Me(ae,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[s]=Me(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[s]=a,d=s+h,a.__=e,a.__b=e.__b+1,l=null,(u=a.__i=pr(a,r,d,c))!=-1&&(c--,(l=r[u])&&(l.__u|=2)),l==null||l.__v==null?(u==-1&&(o>f?h--:o<f&&h++),typeof a.type!="function"&&(a.__u|=4)):u!=d&&(u==d-1?h--:u==d+1?h++:(u>d?h--:h++,a.__u|=4))):e.__k[s]=null;if(c)for(s=0;s<f;s++)(l=r[s])!=null&&!(2&l.__u)&&(l.__e==n&&(n=pe(l)),jt(l,l));return n}function It(e,t,r,n){var o,s;if(typeof e.type=="function"){for(o=e.__k,s=0;o&&s<o.length;s++)o[s]&&(o[s].__=e,t=It(o[s],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=pe(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function pr(e,t,r,n){var o,s,a,l=e.key,d=e.type,u=t[r],f=u!=null&&(2&u.__u)==0;if(u===null&&l==null||f&&l==u.key&&d==u.type)return r;if(n>(f?1:0)){for(o=r-1,s=r+1;o>=0||s<t.length;)if((u=t[a=o>=0?o--:s++])!=null&&!(2&u.__u)&&l==u.key&&d==u.type)return a}return-1}function vt(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||ur.test(t)?r:r+"px"}function Ce(e,t,r,n,o){var s,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||vt(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||vt(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(Rt,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=r,r?n?r.u=n.u:(r.u=nt,e.addEventListener(t,s?Ze:Je,s)):e.removeEventListener(t,s?Ze:Je,s);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function gt(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=nt++;else if(t.t<r.u)return;return r(S.event?S.event(t):t)}}}function st(e,t,r,n,o,s,a,l,d,u){var f,c,h,p,_,w,m,x,b,z,H,F,J,G,ee,A,te,v=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),s=[l=t.__e=r.__e]),(f=S.__b)&&f(t);e:if(typeof v=="function")try{if(x=t.props,b="prototype"in v&&v.prototype.render,z=(f=v.contextType)&&n[f.__c],H=f?z?z.props.value:f.__:n,r.__c?m=(c=t.__c=r.__c).__=c.__E:(b?t.__c=c=new v(x,H):(t.__c=c=new ye(x,H),c.constructor=v,c.render=_r),z&&z.sub(c),c.state||(c.state={}),c.__n=n,h=c.__d=!0,c.__h=[],c._sb=[]),b&&c.__s==null&&(c.__s=c.state),b&&v.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=re({},c.__s)),re(c.__s,v.getDerivedStateFromProps(x,c.__s))),p=c.props,_=c.state,c.__v=t,h)b&&v.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),b&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(b&&v.getDerivedStateFromProps==null&&x!==p&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(x,H),t.__v==r.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(x,c.__s,H)===!1){for(t.__v!=r.__v&&(c.props=x,c.state=c.__s,c.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(E){E&&(E.__=t)}),F=0;F<c._sb.length;F++)c.__h.push(c._sb[F]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(x,c.__s,H),b&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(p,_,w)})}if(c.context=H,c.props=x,c.__P=e,c.__e=!1,J=S.__r,G=0,b){for(c.state=c.__s,c.__d=!1,J&&J(t),f=c.render(c.props,c.state,c.context),ee=0;ee<c._sb.length;ee++)c.__h.push(c._sb[ee]);c._sb=[]}else do c.__d=!1,J&&J(t),f=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++G<25);c.state=c.__s,c.getChildContext!=null&&(n=re(re({},n),c.getChildContext())),b&&!h&&c.getSnapshotBeforeUpdate!=null&&(w=c.getSnapshotBeforeUpdate(p,_)),A=f,f!=null&&f.type===ae&&f.key==null&&(A=Ft(f.props.children)),l=Ht(e,Ue(A)?A:[A],t,r,n,o,s,a,l,d,u),c.base=t.__e,t.__u&=-161,c.__h.length&&a.push(c),m&&(c.__E=c.__=null)}catch(E){if(t.__v=null,d||s!=null)if(E.then){for(t.__u|=d?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;s[s.indexOf(l)]=null,t.__e=l}else{for(te=s.length;te--;)ot(s[te]);Qe(t)}else t.__e=r.__e,t.__k=r.__k,E.then||Qe(t);S.__e(E,t,r)}else s==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=hr(r.__e,t,r,n,o,s,a,d,u);return(f=S.diffed)&&f(t),128&t.__u?void 0:l}function Qe(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Qe)}function Bt(e,t,r){for(var n=0;n<r.length;n++)it(r[n],r[++n],r[++n]);S.__c&&S.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(s){s.call(o)})}catch(s){S.__e(s,o.__v)}})}function Ft(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Ue(e)?e.map(Ft):re({},e)}function hr(e,t,r,n,o,s,a,l,d){var u,f,c,h,p,_,w,m=r.props||xe,x=t.props,b=t.type;if(b=="svg"?o="http://www.w3.org/2000/svg":b=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),s!=null){for(u=0;u<s.length;u++)if((p=s[u])&&"setAttribute"in p==!!b&&(b?p.localName==b:p.nodeType==3)){e=p,s[u]=null;break}}if(e==null){if(b==null)return document.createTextNode(x);e=document.createElementNS(o,b,x.is&&x),l&&(S.__m&&S.__m(t,s),l=!1),s=null}if(b==null)m===x||l&&e.data==x||(e.data=x);else{if(s=s&&We.call(e.childNodes),!l&&s!=null)for(m={},u=0;u<e.attributes.length;u++)m[(p=e.attributes[u]).name]=p.value;for(u in m)if(p=m[u],u!="children"){if(u=="dangerouslySetInnerHTML")c=p;else if(!(u in x)){if(u=="value"&&"defaultValue"in x||u=="checked"&&"defaultChecked"in x)continue;Ce(e,u,null,p,o)}}for(u in x)p=x[u],u=="children"?h=p:u=="dangerouslySetInnerHTML"?f=p:u=="value"?_=p:u=="checked"?w=p:l&&typeof p!="function"||m[u]===p||Ce(e,u,p,m[u],o);if(f)l||c&&(f.__html==c.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(c&&(e.innerHTML=""),Ht(t.type=="template"?e.content:e,Ue(h)?h:[h],t,r,n,b=="foreignObject"?"http://www.w3.org/1999/xhtml":o,s,a,s?s[0]:r.__k&&pe(r,0),l,d),s!=null)for(u=s.length;u--;)ot(s[u]);l||(u="value",b=="progress"&&_==null?e.removeAttribute("value"):_!=null&&(_!==e[u]||b=="progress"&&!_||b=="option"&&_!=m[u])&&Ce(e,u,_,m[u],o),u="checked",w!=null&&w!=e[u]&&Ce(e,u,w,m[u],o))}return e}function it(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){S.__e(o,r)}}function jt(e,t,r){var n,o;if(S.unmount&&S.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||it(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){S.__e(s,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&jt(n[o],t,r||typeof e.type!="function");r||ot(e.__e),e.__c=e.__=e.__e=void 0}function _r(e,t,r){return this.constructor(e,r)}function vr(e,t,r){var n,o,s,a;t==document&&(t=document.documentElement),S.__&&S.__(e,t),o=(n=!1)?null:t.__k,s=[],a=[],st(t,e=t.__k=dr(ae,null,[e]),o||xe,xe,t.namespaceURI,o?null:t.firstChild?We.call(t.childNodes):null,s,o?o.__e:t.firstChild,n,a),Bt(s,e,a)}We=Wt.slice,S={__e:function(e,t,r,n){for(var o,s,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((s=o.constructor)&&s.getDerivedStateFromError!=null&&(o.setState(s.getDerivedStateFromError(e)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),a=o.__d),a)return o.__E=o}catch(l){e=l}throw e}},At=0,Dt=function(e){return e!=null&&e.constructor===void 0},ye.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=re({},this.state),typeof e=="function"&&(e=e(re({},r),this.props)),e&&re(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),_t(this))},ye.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_t(this))},ye.prototype.render=ae,ie=[],Ot=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Nt=function(e,t){return e.__v.__b-t.__v.__b},Ae.__r=0,Rt=/(PointerCapture)$|Capture$/i,nt=0,Je=gt(!1),Ze=gt(!0);var Se,C,Xe,mt,$e=0,Xt=[],L=S,yt=L.__b,bt=L.__r,wt=L.diffed,kt=L.__c,xt=L.unmount,St=L.__;function at(e,t){L.__h&&L.__h(C,e,$e||t),$e=0;var r=C.__H||(C.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Z(e){return $e=1,gr(qt,e)}function gr(e,t,r){var n=at(Se++,2);if(n.t=e,!n.__c&&(n.__=[qt(void 0,t),function(l){var d=n.__N?n.__N[0]:n.__[0],u=n.t(d,l);d!==u&&(n.__N=[u,n.__[1]],n.__c.setState({}))}],n.__c=C,!C.__f)){var o=function(l,d,u){if(!n.__c.__H)return!0;var f=n.__c.__H.__.filter(function(h){return!!h.__c});if(f.every(function(h){return!h.__N}))return!s||s.call(this,l,d,u);var c=n.__c.props!==l;return f.forEach(function(h){if(h.__N){var p=h.__[0];h.__=h.__N,h.__N=void 0,p!==h.__[0]&&(c=!0)}}),s&&s.call(this,l,d,u)||c};C.__f=!0;var s=C.shouldComponentUpdate,a=C.componentWillUpdate;C.componentWillUpdate=function(l,d,u){if(this.__e){var f=s;s=void 0,o(l,d,u),s=f}a&&a.call(this,l,d,u)},C.shouldComponentUpdate=o}return n.__N||n.__}function P(e,t){var r=at(Se++,3);!L.__s&&Yt(r.__H,t)&&(r.__=e,r.u=t,C.__H.__h.push(r))}function O(e){return $e=5,He(function(){return{current:e}},[])}function He(e,t){var r=at(Se++,7);return Yt(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function ue(e,t){return $e=8,He(function(){return e},t)}function mr(){for(var e;e=Xt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ze),e.__H.__h.forEach(et),e.__H.__h=[]}catch(t){e.__H.__h=[],L.__e(t,e.__v)}}L.__b=function(e){C=null,yt&&yt(e)},L.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),St&&St(e,t)},L.__r=function(e){bt&&bt(e),Se=0;var t=(C=e.__c).__H;t&&(Xe===C?(t.__h=[],C.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(ze),t.__h.forEach(et),t.__h=[],Se=0)),Xe=C},L.diffed=function(e){wt&&wt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Xt.push(t)!==1&&mt===L.requestAnimationFrame||((mt=L.requestAnimationFrame)||yr)(mr)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),Xe=C=null},L.__c=function(e,t){t.some(function(r){try{r.__h.forEach(ze),r.__h=r.__h.filter(function(n){return!n.__||et(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],L.__e(n,r.__v)}}),kt&&kt(e,t)},L.unmount=function(e){xt&&xt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{ze(n)}catch(o){t=o}}),r.__H=void 0,t&&L.__e(t,r.__v))};var $t=typeof requestAnimationFrame=="function";function yr(e){var t,r=function(){clearTimeout(n),$t&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);$t&&(t=requestAnimationFrame(r))}function ze(e){var t=C,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),C=t}function et(e){var t=C;e.__c=e.__(),C=t}function Yt(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function qt(e,t){return typeof t=="function"?t(e):t}var br=Symbol.for("preact-signals");function lt(){if(de>1)de--;else{for(var e,t=!1;be!==void 0;){var r=be;for(be=void 0,tt++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&Kt(r))try{r.c()}catch(o){t||(e=o,t=!0)}r=n}}if(tt=0,de--,t)throw e}}var k=void 0;function Vt(e){var t=k;k=void 0;try{return e()}finally{k=t}}var be=void 0,de=0,tt=0,De=0;function Gt(e){if(k!==void 0){var t=e.n;if(t===void 0||t.t!==k)return t={i:0,S:e,p:k.s,n:void 0,t:k,e:void 0,x:void 0,r:t},k.s!==void 0&&(k.s.n=t),k.s=t,e.n=t,32&k.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=k.s,t.n=void 0,k.s.n=t,k.s=t),t}}function N(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}N.prototype.brand=br;N.prototype.h=function(){return!0};N.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:Vt(function(){var n;(n=t.W)==null||n.call(t)}))};N.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&Vt(function(){var o;(o=t.Z)==null||o.call(t)}))}};N.prototype.subscribe=function(e){var t=this;return ut(function(){var r=t.value,n=k;k=void 0;try{e(r)}finally{k=n}},{name:"sub"})};N.prototype.valueOf=function(){return this.value};N.prototype.toString=function(){return this.value+""};N.prototype.toJSON=function(){return this.value};N.prototype.peek=function(){var e=k;k=void 0;try{return this.value}finally{k=e}};Object.defineProperty(N.prototype,"value",{get:function(){var e=Gt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(tt>100)throw new Error("Cycle detected");this.v=e,this.i++,De++,de++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{lt()}}}});function oe(e,t){return new N(e,t)}function Kt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Jt(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Zt(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function le(e,t){N.call(this,void 0),this.x=e,this.s=void 0,this.g=De-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}le.prototype=new N;le.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===De))return!0;if(this.g=De,this.f|=1,this.i>0&&!Kt(this))return this.f&=-2,!0;var e=k;try{Jt(this),k=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return k=e,Zt(this),this.f&=-2,!0};le.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}N.prototype.S.call(this,e)};le.prototype.U=function(e){if(this.t!==void 0&&(N.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};le.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(le.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Gt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function wr(e,t){return new le(e,t)}function Qt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){de++;var r=k;k=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,ct(e),n}finally{k=r,lt()}}}function ct(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Qt(e)}function kr(e){if(k!==this)throw new Error("Out-of-order effect");Zt(this),k=e,this.f&=-2,8&this.f&&ct(this),lt()}function _e(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}_e.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};_e.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Qt(this),Jt(this),de++;var e=k;return k=this,kr.bind(this,e)};_e.prototype.N=function(){2&this.f||(this.f|=2,this.o=be,be=this)};_e.prototype.d=function(){this.f|=8,1&this.f||ct(this)};_e.prototype.dispose=function(){this.d()};function ut(e,t){var r=new _e(e,t);try{r.c()}catch(o){throw r.d(),o}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var Le;function ve(e,t){S[e]=t.bind(null,S[e]||function(){})}function Oe(e){if(Le){var t=Le;Le=void 0,t()}Le=e&&e.S()}function er(e){var t=this,r=e.data,n=Q(r);n.value=r;var o=He(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var a,l=t.__$u.S(),d=o.value;l(),Dt(d)||((a=t.base)==null?void 0:a.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=d},wr(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return o.value}er.displayName="_st";Object.defineProperties(N.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:er},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});ve("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var o in n)if(o!=="children"){var s=n[o];s instanceof N&&(r||(t.__np=r={}),r[o]=s,n[o]=s.peek())}}e(t)});ve("__r",function(e,t){e(t),Oe();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(o){var s;return ut(function(){s=this}),s.c=function(){n.__$f|=1,n.setState({})},s}())),Oe(r)});ve("__e",function(e,t,r,n){Oe(),e(t,r,n)});ve("diffed",function(e,t){Oe();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,o=t.props;if(n){var s=r.U;if(s)for(var a in s){var l=s[a];l!==void 0&&!(a in n)&&(l.d(),s[a]=void 0)}else r.U=s={};for(var d in n){var u=s[d],f=n[d];u===void 0?(u=xr(r,d,f,o),s[d]=u):u.o(f,o)}}}e(t)});function xr(e,t,r,n){var o=t in e&&e.ownerSVGElement===void 0,s=oe(r);return{o:function(a,l){s.value=a,n=l},d:ut(function(){var a=s.value.value;n[t]!==a&&(n[t]=a,o?e[t]=a:a?e.setAttribute(t,a):e.removeAttribute(t))})}}ve("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var o in n){var s=n[o];s&&s.d()}}}}else{var a=t.__c;if(a){var l=a.__$u;l&&(a.__$u=void 0,l.d())}}e(t)});ve("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});ye.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var o in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var s in e)if(s!=="__source"&&e[s]!==this.props[s])return!0;for(var a in this.props)if(!(a in e))return!0;return!1};function Q(e){return He(function(){return oe(e)},[])}function dt(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function Sr(e,t){let r;const n=()=>{if(r)return r;const o=indexedDB.open(e);return o.onupgradeneeded=()=>o.result.createObjectStore(t),r=dt(o),r.then(s=>{s.onclose=()=>r=void 0},()=>{}),r};return(o,s)=>n().then(a=>s(a.transaction(t,o).objectStore(t)))}let Ye;function tr(){return Ye||(Ye=Sr("keyval-store","keyval")),Ye}function rr(e,t=tr()){return t("readonly",r=>dt(r.get(e)))}function $r(e,t,r=tr()){return r("readwrite",n=>(n.put(t,e),dt(n.transaction)))}var Er=0;function i(e,t,r,n,o,s){t||(t={});var a,l,d=t;if("ref"in d)for(l in d={},t)l=="ref"?a=t[l]:d[l]=t[l];var u={type:e,props:d,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Er,__i:-1,__u:0,__source:o,__self:s};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)d[l]===void 0&&(d[l]=a[l]);return S.vnode&&S.vnode(u),u}var Pr=Object.defineProperty,Cr=(e,t)=>{for(var r in t)Pr(e,r,{get:t[r],enumerable:!0})};function Lr(e){return Ne=new nr(e),Ne}function Tr(){if(!Ne)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return Ne}var nr,Ne;async function Mr(e,t){const r=Tr(),n=await r.getProduct(e);if(!n.variants.edges.length)throw new Error("Product has no variants");const s=[{variantId:n.variants.edges[0].node.id,quantity:1}],a=await r.createCheckout(s);if(t&&typeof localStorage<"u"){const l={checkoutId:a.id,bookSlug:t,createdAt:Date.now()};localStorage.setItem(Ar,JSON.stringify(l))}return a.webUrl}function zr(e){return e.webUrl}var Ar;async function Dr(e,t){const r={bookSlug:e,orderId:t==null?void 0:t.orderId,email:t==null?void 0:t.email,unlockedAt:Date.now()};await $r(`${Ee}${e}`,r),typeof localStorage<"u"&&localStorage.setItem(`${Ee}${e}`,JSON.stringify(r))}async function Or(e){if(typeof localStorage<"u"&&localStorage.getItem(`${Ee}${e}`))return!0;try{return!!await rr(`${Ee}${e}`)}catch{return!1}}async function Nr(e){try{return await rr(`${Ee}${e}`)||null}catch{return null}}async function Rr(e,t){const r=await Nr(e);return!r||!r.orderId?!1:r.orderId===t}var Ee,Wr={};Cr(Wr,{ShopifyClient:()=>nr,createCheckout:()=>Mr,createShopifyClient:()=>Lr,getCheckoutUrl:()=>zr,isContentUnlocked:()=>Or,unlockContent:()=>Dr,verifyPurchase:()=>Rr});function Ur({prev:e,next:t}){return!e&&!t?null:i("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[i("div",{class:"pressy-nav-inner",children:[e?i("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[i("span",{class:"pressy-nav-direction",children:"Previous"}),i("span",{class:"pressy-nav-title",children:e.title})]}):i("div",{class:"pressy-nav-placeholder"}),t?i("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[i("span",{class:"pressy-nav-direction",children:"Next"}),i("span",{class:"pressy-nav-title",children:t.title})]}):i("div",{class:"pressy-nav-placeholder"})]}),i("style",{children:`
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
      `})]})}function or(){const e=Q(!1),t=Q({x:0,y:0}),r=Q(""),n=O(null);P(()=>{const l=()=>{const d=window.getSelection();if(!d||d.isCollapsed){e.value=!1;return}const u=d.toString().trim();if(u.length<5){e.value=!1;return}r.value=u;const c=d.getRangeAt(0).getBoundingClientRect();t.value={x:c.left+c.width/2,y:c.top-10},e.value=!0};return document.addEventListener("selectionchange",l),document.addEventListener("mouseup",l),()=>{document.removeEventListener("selectionchange",l),document.removeEventListener("mouseup",l)}},[]);const o=()=>{const l=encodeURIComponent(r.value),d=new URL(window.location.href);return d.hash=`:~:text=${l}`,d.toString()},s=async()=>{const l=o(),d=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:d,url:l}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${d}

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
      `})]}):null}function sr(){const e=Q(!navigator.onLine),t=Q(!1);return P(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?i("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?i(ae,{children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),i("span",{children:"You're offline"})]}):i(ae,{children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),i("span",{children:"Back online"})]}),i("style",{children:`
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
      `})]}):null}function Ie({children:e,prevChapter:t,nextChapter:r,showDropCap:n=!0,paginationMode:o="scroll",onSaveProgress:s,onRestoreProgress:a,bookProgressPercent:l,onNearEnd:d,onPageChange:u,articleRef:f,viewportRef:c}){return o==="paginated"?i(Ir,{prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:s,onRestoreProgress:a,bookProgressPercent:l,onNearEnd:d,onPageChange:u,articleRefCb:f,viewportRefCb:c,children:e}):i(Hr,{prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:s,onRestoreProgress:a,children:e})}function Hr({children:e,prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:o,onRestoreProgress:s}){const a=O(null);return P(()=>{s&&s().then(l=>{l&&l.scrollPosition>0&&window.scrollTo(0,l.scrollPosition)})},[]),P(()=>{if(!o)return;const l=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{o({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",l,{passive:!0}),()=>{window.removeEventListener("scroll",l),a.current&&clearTimeout(a.current)}},[o]),P(()=>{if(!o)return;const l=()=>{o({page:0,totalPages:0,scrollPosition:window.scrollY})};return window.addEventListener("beforeunload",l),()=>window.removeEventListener("beforeunload",l)},[o]),i("div",{class:"pressy-reader",children:[i("main",{class:"pressy-reader-main",children:i("article",{class:`pressy-prose ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),i(or,{}),i(Ur,{prev:t,next:r}),i(sr,{}),i("style",{children:Br})]})}function Ir({children:e,prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:o,onRestoreProgress:s,bookProgressPercent:a,onNearEnd:l,onPageChange:d,articleRefCb:u,viewportRefCb:f}){const c=O(null),h=O(null),p=O(null),[_,w]=Z(0),[m,x]=Z(1),b=O(!1),z=O(null),[H,F]=Z(!1),[J,G]=Z(0),[ee,A]=Z(null),te=O(0),v=O(0),E=O(0),q=O(0),j=O(0),I=O(!1),B=O(!1),T=ue(()=>{const g=p.current,y=h.current;if(!g||!y)return;const $=y.clientWidth;if($===0)return;g.style.columnWidth=`${$}px`,g.scrollWidth;const D=Math.max(1,Math.round(g.scrollWidth/$));x(D),w(se=>Math.min(se,D-1))},[]);P(()=>{const g=h.current;if(!g)return;const y=setTimeout(T,50),$=new ResizeObserver(()=>{T()});return $.observe(g),()=>{clearTimeout(y),$.disconnect()}},[T]),P(()=>{const g=p.current;if(!g)return;const y=g.querySelectorAll("img");if(y.length===0)return;const $=()=>T();return y.forEach(D=>{D.complete||(D.addEventListener("load",$),D.addEventListener("error",$))}),()=>{y.forEach(D=>{D.removeEventListener("load",$),D.removeEventListener("error",$)})}},[T]),P(()=>{b.current||!s||m<=1||(b.current=!0,s().then(g=>{if(g&&g.page>0){const y=Math.min(g.page,m-1);w(y)}}))},[m,s]),P(()=>{const g=p.current,y=h.current;if(!g||!y)return;const D=_*y.clientWidth-J;H?g.style.transition="none":g.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",g.style.transform=`translateX(-${D}px)`},[_,J,H]),P(()=>{d==null||d(_,m),m>1&&_>=m-3&&(l==null||l())},[_,m]),P(()=>(u==null||u(p.current),()=>u==null?void 0:u(null)),[u]),P(()=>(f==null||f(h.current),()=>f==null?void 0:f(null)),[f]),P(()=>{if(!(!o||!b.current))return z.current&&clearTimeout(z.current),z.current=setTimeout(()=>{o({page:_,totalPages:m,scrollPosition:0})},300),()=>{z.current&&clearTimeout(z.current)}},[_,m,o]),P(()=>{if(!o)return;const g=()=>{o({page:_,totalPages:m,scrollPosition:0})};return window.addEventListener("beforeunload",g),()=>window.removeEventListener("beforeunload",g)},[_,m,o]);const R=ue(g=>{const y=Math.max(0,Math.min(g,m-1));w(y)},[m]),M=ue(()=>{if(_>=m-1){r&&(window.location.href=r.slug);return}R(_+1)},[_,m,r,R]),W=ue(()=>{if(_<=0){t&&(window.location.href=t.slug+"#end");return}R(_-1)},[_,t,R]);P(()=>{const g=y=>{const $=y.target.tagName;$==="INPUT"||$==="TEXTAREA"||$==="SELECT"||(y.key==="ArrowRight"||y.key===" "?(y.preventDefault(),M()):y.key==="ArrowLeft"?(y.preventDefault(),W()):y.key==="Home"?(y.preventDefault(),R(0)):y.key==="End"&&(y.preventDefault(),R(m-1)))};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[M,W,R,m]),P(()=>{const g=c.current;if(!g)return;const y=V=>{const U=V.touches[0];te.current=U.clientX,v.current=U.clientY,E.current=U.clientX,q.current=performance.now(),j.current=0,I.current=!1,B.current=!1},$=V=>{const U=V.touches[0],Y=U.clientX-te.current,ce=U.clientY-v.current;if(!I.current)if(Math.abs(Y)>Math.abs(ce)&&Math.abs(Y)>10)I.current=!0;else return Math.abs(ce)>Math.abs(Y)&&Math.abs(ce)>10,void 0;V.preventDefault();const ge=performance.now(),me=ge-q.current;if(me>0){const je=(U.clientX-E.current)/me;j.current=.6*je+.4*j.current}E.current=U.clientX,q.current=ge;let Pe=Y;const Fe=_===0,pt=_>=m-1;if(Fe&&Y>0||pt&&Y<0){const je=Y>0?1:-1,cr=Math.abs(Y);Pe=je*Math.sqrt(cr)*5,Y>40&&Fe&&t?A("prev"):Y<-40&&pt&&r?A("next"):A(null)}else A(null);B.current=!0,F(!0),G(Pe)},D=V=>{if(!I.current||!B.current){F(!1),G(0),A(null);return}const U=V.changedTouches[0].clientX-te.current,Y=j.current,ce=50,ge=.3,me=80,Pe=_===0;if(_>=m-1&&U<-me&&r){F(!1),G(0),A(null),window.location.href=r.slug;return}if(Pe&&U>me&&t){F(!1),G(0),A(null),window.location.href=t.slug+"#end";return}U<-ce||Y<-ge?M():(U>ce||Y>ge)&&W(),B.current=!1,F(!1),G(0),A(null)},se=()=>{B.current=!1,F(!1),G(0),A(null)};return g.addEventListener("touchstart",y,{passive:!0}),g.addEventListener("touchmove",$,{passive:!1}),g.addEventListener("touchend",D,{passive:!0}),g.addEventListener("touchcancel",se,{passive:!0}),()=>{g.removeEventListener("touchstart",y),g.removeEventListener("touchmove",$),g.removeEventListener("touchend",D),g.removeEventListener("touchcancel",se)}},[_,m,M,W,r,t]),P(()=>{const g=c.current;if(!g)return;let y=0,$=null;const D=80,se=V=>{V.preventDefault();const U=Math.abs(V.deltaX)>Math.abs(V.deltaY)?V.deltaX:V.deltaY;y+=U,$&&clearTimeout($),$=setTimeout(()=>{y=0},200),y>D?(M(),y=0):y<-D&&(W(),y=0)};return g.addEventListener("wheel",se,{passive:!1}),()=>{g.removeEventListener("wheel",se),$&&clearTimeout($)}},[M,W]);const X=m>1?(_+1)/m*100:100;return i("div",{class:"pressy-reader pressy-reader--paginated",ref:c,children:[i("div",{class:"pressy-paginated-viewport",ref:h,children:i("article",{ref:p,class:`pressy-prose pressy-prose--paginated ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),i("div",{class:"pressy-tap-zone pressy-tap-prev",onClick:W,"aria-label":"Previous page",role:"button",tabIndex:-1}),i("div",{class:"pressy-tap-zone pressy-tap-next",onClick:M,"aria-label":"Next page",role:"button",tabIndex:-1}),ee==="prev"&&t&&i("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[i("span",{class:"pressy-chapter-hint-arrow",children:"←"}),i("span",{class:"pressy-chapter-hint-text",children:t.title})]}),ee==="next"&&r&&i("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[i("span",{class:"pressy-chapter-hint-text",children:r.title}),i("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),i("div",{class:"pressy-page-footer",children:[i("div",{class:"pressy-progress-bar",children:i("div",{class:"pressy-progress-fill",style:{width:`${X}%`}})}),i("div",{class:"pressy-page-indicator",children:[i("span",{children:["Page ",_+1," of ",m]}),a!=null&&i("span",{class:"pressy-book-progress",children:[Math.round(a),"% of book"]})]})]}),i(or,{}),i(sr,{}),i("style",{children:Fr})]})}var Br=`
  .pressy-reader {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .pressy-reader-main {
    flex: 1;
    padding: 2rem 0;
  }
`,Fr=`
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

  /* ── Chapter break (seamless transitions) ─────────────── */
  /* Forces next chapter to start on a new page/column and adds visual separation */
  .pressy-chapter-break {
    break-before: column;
    padding-top: 4rem;
    margin-bottom: 2rem;
  }

  .pressy-chapter-break h1 {
    max-width: min(65ch, calc(100% - 3rem));
    margin-left: auto;
    margin-right: auto;
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 1.75rem;
    line-height: 1.3;
    color: var(--color-heading, #1a1a1a);
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
`,jr="pressy-cached-books";function Et(){try{const e=localStorage.getItem(jr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function Xr({bookSlug:e,chapterUrls:t,cachedBooks:r,cacheProgress:n,onDownload:o,onRemove:s}){var u;const a=Q(Et().has(e)||r.value.has(e)),l=Q(((u=n.value)==null?void 0:u.bookSlug)===e),d=Q(null);return P(()=>{const f=()=>{var p;a.value=Et().has(e)||r.value.has(e),l.value=((p=n.value)==null?void 0:p.bookSlug)===e;const h=n.value;d.value=h&&h.bookSlug===e?Math.round(h.current/h.total*100):null},c=setInterval(f,500);return f(),()=>clearInterval(c)},[e]),a.value?i("div",{class:"pressy-download-book",children:[i("div",{class:"pressy-download-status",children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),i("span",{children:"Available offline"})]}),i("button",{class:"pressy-download-remove",onClick:()=>s(e),"aria-label":"Remove offline copy",children:"Remove"}),i("style",{children:qe})]}):l.value?i("div",{class:"pressy-download-book",children:[i("div",{class:"pressy-download-progress",children:[i("div",{class:"pressy-download-bar",children:i("div",{class:"pressy-download-bar-fill",style:{width:`${d.value||0}%`}})}),i("span",{class:"pressy-download-percent",children:[d.value||0,"%"]})]}),i("style",{children:qe})]}):i("div",{class:"pressy-download-book",children:[i("button",{class:"pressy-download-btn",onClick:()=>o(e,t),"aria-label":"Download for offline reading",children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),i("span",{children:"Download for offline"})]}),i("style",{children:qe})]})}var qe=`
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
`;function Yr({chapters:e,basePath:t,bookSlug:r,loadAllProgress:n}){const[o,s]=Z(new Map);P(()=>{n().then(h=>{const p=new Set(e.map(w=>w.slug)),_=new Map;for(const w of h)p.has(w.chapterSlug)&&_.set(w.chapterSlug,{page:w.page,totalPages:w.totalPages});s(_)})},[e,n]);const a=e.reduce((h,p)=>h+(p.wordCount||0),0);let l=0,d=0,u=0;for(const h of e){const p=o.get(h.slug);if(!p)continue;const _=h.wordCount||0;p.totalPages>0&&p.page>=p.totalPages-1?(l+=_,d++,u++):p.page>0&&p.totalPages>0&&(l+=p.page/p.totalPages*_,u++)}const f=a>0?l/a*100:0,c=u>0;return i("div",{class:"pressy-book-progress-section",children:[c&&i("div",{class:"pressy-overall-progress",children:[i("div",{class:"pressy-overall-progress-bar",children:i("div",{class:"pressy-overall-progress-fill",style:{width:`${f}%`}})}),i("div",{class:"pressy-overall-progress-text",children:[Math.round(f),"% complete",i("span",{class:"pressy-overall-progress-detail",children:[d," of ",e.length," chapters"]})]})]}),i("nav",{class:"pressy-chapter-list",children:e.map(h=>{const p=o.get(h.slug),_=p&&p.totalPages>0&&p.page>=p.totalPages-1,w=p&&p.page>0&&!_;return i("a",{href:`${t}/books/${r}/${h.slug}`,class:`pressy-chapter-link ${_?"pressy-chapter--completed":""} ${w?"pressy-chapter--started":""}`,children:[i("span",{class:"pressy-chapter-order",children:[h.order,"."]}),i("span",{class:"pressy-chapter-title",children:h.title}),_&&i("span",{class:"pressy-chapter-badge pressy-chapter-badge--done",children:"Done"}),w&&p&&i("span",{class:"pressy-chapter-badge pressy-chapter-badge--reading",children:["p.",p.page+1,"/",p.totalPages]})]})})}),i("style",{children:qr})]})}var qr=`
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
`;function Vr({id:e,children:t}){const r=Q(!1);return i(ae,{children:[i("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&i("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,i("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),i("style",{children:`
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
      `})]})}function Gr({children:e,title:t}){return i("aside",{class:"pressy-aside",children:[t&&i("strong",{class:"pressy-aside-title",children:t}),i("div",{class:"pressy-aside-content",children:e}),i("style",{children:`
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
      `})]})}function Pt({src:e,alt:t,caption:r,wide:n,children:o}){return i("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[i("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||o)&&i("figcaption",{class:"pressy-figure-caption",children:r||o}),i("style",{children:`
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
      `})]})}var Kr={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},Jr={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function Zr({type:e="note",title:t,children:r}){return i("div",{class:`pressy-callout pressy-callout-${e}`,children:[i("div",{class:"pressy-callout-header",children:[i("span",{class:"pressy-callout-icon",children:Kr[e]}),i("strong",{class:"pressy-callout-title",children:t||Jr[e]})]}),i("div",{class:"pressy-callout-content",children:r}),i("style",{children:`
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
      `})]})}function Ct({variant:e="asterisks"}){return i("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&i("span",{children:"* * *"}),e==="ornament"&&i("span",{children:"❧"}),i("style",{children:`
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
      `})]})}var Qr={Footnote:Vr,Aside:Gr,Figure:Pt,Callout:Zr,SceneBreak:Ct,img:Pt,hr:Ct},en={};function Be(){return{...Qr,...en}}var ir="pressy-cached-books",Ve=oe("online"),Re=oe(null),Ge=oe(!1);function tn(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(ir);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var K=oe(tn());typeof window<"u"&&(Ve.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{Ve.value="online"}),window.addEventListener("offline",()=>{Ve.value="offline"}));async function rn(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",nn),navigator.serviceWorker.controller?Ge.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{Ge.value=!0}),n.addEventListener("updatefound",()=>{const o=n.installing;o&&o.addEventListener("statechange",()=>{o.state==="activated"&&(Ge.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function we(){try{localStorage.setItem(ir,JSON.stringify([...K.value]))}catch{}}function nn(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:o}=e.data;Re.value={bookSlug:r,current:n,total:o}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;Re.value=null;const n=new Set(K.value);n.add(r),K.value=n,we()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const o of r){const s=o.match(/\/books\/([^/]+)/);s&&n.add(s[1])}K.value=n,we()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(K.value);n.delete(r),K.value=n,we()}}async function on(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(o=>o.startsWith("http")?o:`${window.location.origin}${o}`);Re.value={bookSlug:e,current:0,total:r.length};const n=new Set(K.value);return n.add(e),K.value=n,we(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}async function sn(e){const t=new Set(K.value);if(t.delete(e),K.value=t,we(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const o of n)o.url.includes(`/books/${e}`)&&await r.delete(o);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var Lt=oe("/"),an=oe("light"),Tt=oe(!navigator.onLine),ln="pressy",cn=1,he="reading-progress",Mt="unlocks",Te=null;async function ft(){return Te||new Promise((e,t)=>{const r=indexedDB.open(ln,cn);r.onerror=()=>t(r.error),r.onsuccess=()=>{Te=r.result,e(Te)},r.onupgradeneeded=n=>{const o=n.target.result;o.objectStoreNames.contains(he)||o.createObjectStore(he,{keyPath:"chapterSlug"}),o.objectStoreNames.contains(Mt)||o.createObjectStore(Mt,{keyPath:"bookSlug"})}})}async function rt(e){const t=await ft();return new Promise((r,n)=>{const a=t.transaction(he,"readwrite").objectStore(he).put(e);a.onsuccess=()=>r(),a.onerror=()=>n(a.error)})}async function fe(){const e=await ft();return new Promise((t,r)=>{const s=e.transaction(he,"readonly").objectStore(he).getAll();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>r(s.error)})}function zt(e){an.value=e,document.documentElement.setAttribute("data-theme",e),localStorage.setItem("pressy-theme",e)}function un(){const e=localStorage.getItem("pressy-theme");e?zt(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&zt("dark")}function dn(){window.addEventListener("online",()=>{Tt.value=!1}),window.addEventListener("offline",()=>{Tt.value=!0})}function ar(e,t=[]){const r=e.chapters.map(n=>`/books/${e.slug}/${n.slug}`);return i("div",{class:"pressy-home",children:[i("header",{class:"pressy-home-header",children:[i("h1",{children:e.metadata.title}),i("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&i("p",{class:"pressy-home-desc",children:e.metadata.description})]}),i(Xr,{bookSlug:e.slug,chapterUrls:r,cachedBooks:K,cacheProgress:Re,onDownload:on,onRemove:sn}),i("section",{class:"pressy-home-section",children:[i("h2",{children:"Chapters"}),i(Yr,{bookSlug:e.slug,chapters:e.chapters.map(n=>({slug:n.slug,title:n.title,order:n.order,wordCount:n.wordCount||0})),basePath:ne,loadAllProgress:fe})]}),t.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Articles"}),i("nav",{class:"pressy-chapter-list",children:t.map(n=>i("a",{href:`${ne}/articles/${n.slug}`,class:"pressy-chapter-link",children:n.metadata.title}))})]}),i("style",{children:lr})]})}function Ke(e){var r,n;if(e.books.length===1)return ar(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return i("div",{class:"pressy-home",children:[i("header",{class:"pressy-home-header",children:[i("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&i("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Books"}),i("nav",{class:"pressy-chapter-list",children:e.books.map(o=>i("a",{href:`${ne}/books/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),e.articles.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Articles"}),i("nav",{class:"pressy-chapter-list",children:e.articles.map(o=>i("a",{href:`${ne}/articles/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),i("style",{children:lr})]})}function ke(e,t,r,n,o){const s=e.chapters.reduce((d,u)=>d+(u.wordCount||0),0);if(s===0)return 0;const a=new Map(o.map(d=>[d.chapterSlug,d]));let l=0;for(const d of e.chapters){const u=d.wordCount||0;if(d.slug===t)n>0&&(l+=r/Math.max(1,n-1)*u);else{const f=a.get(d.slug);if(!f)continue;f.totalPages>0&&f.page>=f.totalPages-1?l+=u:f.page>0&&f.totalPages>0&&(l+=f.page/f.totalPages*u)}}return Math.min(100,l/s*100)}function fn({book:e,chapterSlug:t,chapter:r,prevChapter:n,nextChapter:o,paginationMode:s,Content:a}){const[l,d]=Z(void 0);P(()=>{fe().then(c=>{const h=ke(e,t,0,0,c);d(h)})},[e,t]);const u=c=>{rt({chapterSlug:t,page:c.page,totalPages:c.totalPages,scrollPosition:c.scrollPosition,timestamp:Date.now()}),c.totalPages>0&&fe().then(h=>{const p=ke(e,t,c.page,c.totalPages,h);d(p)})},f=async()=>window.location.hash==="#end"?(history.replaceState(null,"",window.location.pathname+window.location.search),{page:Number.MAX_SAFE_INTEGER,totalPages:0,scrollPosition:0}):null;return i(Ie,{title:(r==null?void 0:r.title)||t,chapterSlug:t,prevChapter:n,nextChapter:o,paginationMode:s,onSaveProgress:u,onRestoreProgress:f,bookProgressPercent:l,children:i(a,{components:Be()})})}function pn({book:e,chapterSlug:t,chapter:r,prevChapter:n,nextChapter:o,paginationMode:s,Content:a,chapterLoaders:l}){const[d,u]=Z(void 0),[f,c]=Z(()=>[{slug:t,title:(r==null?void 0:r.title)||t,Content:a,wordCount:(r==null?void 0:r.wordCount)||0}]),[h,p]=Z(t),_=O(null),w=O(null),m=O(!1),x=f[f.length-1].slug,b=e.chapters.findIndex(v=>v.slug===x),z=b>=0&&b<e.chapters.length-1,H=b+1,F=H<e.chapters.length?{slug:`${ne}/books/${e.slug}/${e.chapters[H].slug}`,title:e.chapters[H].title}:void 0;P(()=>{if(!n)return;const v=document.createElement("link");return v.rel="prefetch",v.href=n.slug,document.head.appendChild(v),()=>{document.head.removeChild(v)}},[n]),P(()=>{fe().then(v=>{const E=ke(e,t,0,0,v);u(E)})},[e,t]);const J=ue(async()=>{if(!z||m.current)return;m.current=!0;const v=e.chapters[b+1],E=l[v.slug];if(!E){m.current=!1;return}try{const j=(await E()).default;c(I=>[...I,{slug:v.slug,title:v.title,Content:j,wordCount:v.wordCount||0}])}catch(q){console.error("Failed to preload chapter:",v.slug,q)}m.current=!1},[z,b,e.chapters,l]),G=ue((v,E)=>{const q=_.current,j=w.current;if(!q||!j||f.length<=1)return;const I=j.clientWidth;if(I===0)return;const B=q.querySelectorAll("[data-chapter-start]");let T=f[0].slug,R=0;for(const M of B){const W=M,X=Math.floor(W.offsetLeft/I);v>=X&&(T=W.getAttribute("data-chapter-start")||T,R=X)}if(T!==h){p(T);const M=`${ne}/books/${e.slug}/${T}`;history.replaceState(null,"",M),rt({chapterSlug:h,page:0,totalPages:0,scrollPosition:0,timestamp:Date.now()})}if(E>0){const M=v-R;fe().then(W=>{const X=ke(e,T,M,E-R,W);u(X)})}},[f,h,e]),ee=v=>{const E=_.current,q=w.current;let j=v.page,I=v.totalPages;if(E&&q&&f.length>1){const B=q.clientWidth;if(B>0){const T=E.querySelectorAll("[data-chapter-start]");let R=0;for(const X of T){const g=X,y=Math.floor(g.offsetLeft/B);g.getAttribute("data-chapter-start")===h&&(R=y)}h===f[0].slug&&(R=0),j=v.page-R;let M=v.totalPages,W=!1;for(const X of T){const g=X,y=Math.floor(g.offsetLeft/B),$=g.getAttribute("data-chapter-start");if(W){M=y;break}$===h&&(W=!0)}if(h===f[0].slug){const X=T[0];M=X?Math.floor(X.offsetLeft/B):v.totalPages,I=M}else I=M-R}}rt({chapterSlug:h,page:j,totalPages:I,scrollPosition:v.scrollPosition,timestamp:Date.now()}),v.totalPages>0&&fe().then(B=>{const T=ke(e,h,j,I,B);u(T)})},A=async()=>window.location.hash==="#end"?(history.replaceState(null,"",window.location.pathname+window.location.search),{page:Number.MAX_SAFE_INTEGER,totalPages:0,scrollPosition:0}):null,te=Be();return i(Ie,{title:(r==null?void 0:r.title)||t,chapterSlug:h,prevChapter:n,nextChapter:f.length>1?F:o,paginationMode:s,onSaveProgress:ee,onRestoreProgress:A,bookProgressPercent:d,onNearEnd:J,onPageChange:G,articleRef:v=>{_.current=v},viewportRef:v=>{w.current=v},children:f.map((v,E)=>i("div",{children:[E>0&&i("div",{"data-chapter-start":v.slug,class:"pressy-chapter-break",style:{breakBefore:"column"},children:i("h1",{children:v.title})}),i(v.Content,{components:te})]},v.slug))})}function hn(e,t,r,n,o){const s=t.split("/"),a=s[2],l=s[3],d=e.books.find(w=>w.slug===a),u=d?d.chapters.findIndex(w=>w.slug===l):-1,f=d==null?void 0:d.chapters[u],c=w=>`${ne}/books/${a}/${w.slug}`,h=d&&u>0?{slug:c(d.chapters[u-1]),title:d.chapters[u-1].title}:void 0,p=d&&u>=0&&u<d.chapters.length-1?{slug:c(d.chapters[u+1]),title:d.chapters[u+1].title}:void 0,_=r;return d?o&&n==="paginated"?i(pn,{book:d,chapterSlug:l,chapter:f,prevChapter:h,nextChapter:p,paginationMode:n,Content:_,chapterLoaders:o}):i(fn,{book:d,chapterSlug:l,chapter:f,prevChapter:h,nextChapter:p,paginationMode:n,Content:_}):i(Ie,{title:(f==null?void 0:f.title)||l,prevChapter:h,nextChapter:p,paginationMode:n,children:i(_,{components:Be()})})}function _n(e,t,r){const n=t.split("/")[2],o=e.articles.find(a=>a.slug===n),s=r;return i(Ie,{title:(o==null?void 0:o.metadata.title)||n,children:i(s,{components:Be()})})}var lr=`
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
`;function vn(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const o=r.indexOf(n);return o>0?r.slice(0,o):""}var ne="";function gn(e,t,r){var o;ne=vn(e.route),Lt.value=e.route,un(),dn(),ft(),rn(ne),window.addEventListener("popstate",()=>{Lt.value=window.location.pathname}),document.addEventListener("click",s=>{const a=s.target.closest("a");if(!a)return;const l=a.getAttribute("href");if(l&&!(l.startsWith("http")||l.startsWith("#"))&&l.startsWith(e.route+"#")){s.preventDefault();const d=l.slice(l.indexOf("#")),u=document.querySelector(d);u&&u.scrollIntoView({behavior:"smooth"});return}});let n;switch(e.routeType){case"home":n=Ke(e.manifest);break;case"book":{const s=e.route.split("/")[2],a=e.manifest.books.find(l=>l.slug===s);n=a?ar(a):i("div",{children:"Book not found"});break}case"chapter":n=t?hn(e.manifest,e.route,t,(o=e.pagination)==null?void 0:o.defaultMode,r):i("div",{children:"Loading..."});break;case"article":n=t?_n(e.manifest,e.route,t):i("div",{children:"Loading..."});break;case"books":n=Ke(e.manifest);break;case"articles":n=Ke(e.manifest);break;default:n=i("div",{children:"Page not found"})}vr(n,document.getElementById("app"))}export{gn as h,ae as k,i as u};
