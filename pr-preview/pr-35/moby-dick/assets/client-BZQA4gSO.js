var ht,B,wr,kr,Se,tr,xr,Sr,Pr,Bt,zt,Lt,Xe={},$r=[],po=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,gt=Array.isArray;function me(e,t){for(var r in t)e[r]=t[r];return e}function Ot(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function fo(e,t,r){var s,i,n,a={};for(n in t)n=="key"?s=t[n]:n=="ref"?i=t[n]:a[n]=t[n];if(arguments.length>2&&(a.children=arguments.length>3?ht.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)a[n]===void 0&&(a[n]=e.defaultProps[n]);return it(e,a,s,i,null)}function it(e,t,r,s,i){var n={type:e,props:t,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++wr,__i:-1,__u:0};return i==null&&B.vnode!=null&&B.vnode(n),n}function $e(e){return e.children}function Ve(e,t){this.props=e,this.context=t}function Re(e,t){if(t==null)return e.__?Re(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?Re(e):null}function Cr(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Cr(e)}}function rr(e){(!e.__d&&(e.__d=!0)&&Se.push(e)&&!ct.__r++||tr!=B.debounceRendering)&&((tr=B.debounceRendering)||xr)(ct)}function ct(){for(var e,t,r,s,i,n,a,d=1;Se.length;)Se.length>d&&Se.sort(Sr),e=Se.shift(),d=Se.length,e.__d&&(r=void 0,s=void 0,i=(s=(t=e).__v).__e,n=[],a=[],t.__P&&((r=me({},s)).__v=s.__v+1,B.vnode&&B.vnode(r),It(t.__P,r,s,t.__n,t.__P.namespaceURI,32&s.__u?[i]:null,n,i??Re(s),!!(32&s.__u),a),r.__v=s.__v,r.__.__k[r.__i]=r,zr(n,r,a),s.__e=s.__=null,r.__e!=i&&Cr(r)));ct.__r=0}function Tr(e,t,r,s,i,n,a,d,p,u,g){var c,_,v,E,x,A,S,P=s&&s.__k||$r,O=t.length;for(p=ho(r,t,P,p,O),c=0;c<O;c++)(v=r.__k[c])!=null&&(_=v.__i==-1?Xe:P[v.__i]||Xe,v.__i=c,A=It(e,v,_,i,n,a,d,p,u,g),E=v.__e,v.ref&&_.ref!=v.ref&&(_.ref&&jt(_.ref,null,v),g.push(v.ref,v.__c||E,v)),x==null&&E!=null&&(x=E),(S=!!(4&v.__u))||_.__k===v.__k?p=Er(v,p,e,S):typeof v.type=="function"&&A!==void 0?p=A:E&&(p=E.nextSibling),v.__u&=-7);return r.__e=x,p}function ho(e,t,r,s,i){var n,a,d,p,u,g=r.length,c=g,_=0;for(e.__k=new Array(i),n=0;n<i;n++)(a=t[n])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[n]=it(null,a,null,null,null):gt(a)?a=e.__k[n]=it($e,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[n]=it(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[n]=a,p=n+_,a.__=e,a.__b=e.__b+1,d=null,(u=a.__i=go(a,r,p,c))!=-1&&(c--,(d=r[u])&&(d.__u|=2)),d==null||d.__v==null?(u==-1&&(i>g?_--:i<g&&_++),typeof a.type!="function"&&(a.__u|=4)):u!=p&&(u==p-1?_--:u==p+1?_++:(u>p?_--:_++,a.__u|=4))):e.__k[n]=null;if(c)for(n=0;n<g;n++)(d=r[n])!=null&&!(2&d.__u)&&(d.__e==s&&(s=Re(d)),Ar(d,d));return s}function Er(e,t,r,s){var i,n;if(typeof e.type=="function"){for(i=e.__k,n=0;i&&n<i.length;n++)i[n]&&(i[n].__=e,t=Er(i[n],t,r,s));return t}e.__e!=t&&(s&&(t&&e.type&&!t.parentNode&&(t=Re(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function go(e,t,r,s){var i,n,a,d=e.key,p=e.type,u=t[r],g=u!=null&&(2&u.__u)==0;if(u===null&&d==null||g&&d==u.key&&p==u.type)return r;if(s>(g?1:0)){for(i=r-1,n=r+1;i>=0||n<t.length;)if((u=t[a=i>=0?i--:n++])!=null&&!(2&u.__u)&&d==u.key&&p==u.type)return a}return-1}function or(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||po.test(t)?r:r+"px"}function ot(e,t,r,s,i){var n,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)r&&t in r||or(e.style,t,"");if(r)for(t in r)s&&r[t]==s[t]||or(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")n=t!=(t=t.replace(Pr,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=r,r?s?r.u=s.u:(r.u=Bt,e.addEventListener(t,n?Lt:zt,n)):e.removeEventListener(t,n?Lt:zt,n);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function sr(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Bt++;else if(t.t<r.u)return;return r(B.event?B.event(t):t)}}}function It(e,t,r,s,i,n,a,d,p,u){var g,c,_,v,E,x,A,S,P,O,I,w,J,h,$,D,oe,V=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(p=!!(32&r.__u),n=[d=t.__e=r.__e]),(g=B.__b)&&g(t);e:if(typeof V=="function")try{if(S=t.props,P="prototype"in V&&V.prototype.render,O=(g=V.contextType)&&s[g.__c],I=g?O?O.props.value:g.__:s,r.__c?A=(c=t.__c=r.__c).__=c.__E:(P?t.__c=c=new V(S,I):(t.__c=c=new Ve(S,I),c.constructor=V,c.render=yo),O&&O.sub(c),c.state||(c.state={}),c.__n=s,_=c.__d=!0,c.__h=[],c._sb=[]),P&&c.__s==null&&(c.__s=c.state),P&&V.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=me({},c.__s)),me(c.__s,V.getDerivedStateFromProps(S,c.__s))),v=c.props,E=c.state,c.__v=t,_)P&&V.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),P&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(P&&V.getDerivedStateFromProps==null&&S!==v&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(S,I),t.__v==r.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(S,c.__s,I)===!1){for(t.__v!=r.__v&&(c.props=S,c.state=c.__s,c.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(K){K&&(K.__=t)}),w=0;w<c._sb.length;w++)c.__h.push(c._sb[w]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(S,c.__s,I),P&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(v,E,x)})}if(c.context=I,c.props=S,c.__P=e,c.__e=!1,J=B.__r,h=0,P){for(c.state=c.__s,c.__d=!1,J&&J(t),g=c.render(c.props,c.state,c.context),$=0;$<c._sb.length;$++)c.__h.push(c._sb[$]);c._sb=[]}else do c.__d=!1,J&&J(t),g=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++h<25);c.state=c.__s,c.getChildContext!=null&&(s=me(me({},s),c.getChildContext())),P&&!_&&c.getSnapshotBeforeUpdate!=null&&(x=c.getSnapshotBeforeUpdate(v,E)),D=g,g!=null&&g.type===$e&&g.key==null&&(D=Lr(g.props.children)),d=Tr(e,gt(D)?D:[D],t,r,s,i,n,a,d,p,u),c.base=t.__e,t.__u&=-161,c.__h.length&&a.push(c),A&&(c.__E=c.__=null)}catch(K){if(t.__v=null,p||n!=null)if(K.then){for(t.__u|=p?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;n[n.indexOf(d)]=null,t.__e=d}else{for(oe=n.length;oe--;)Ot(n[oe]);At(t)}else t.__e=r.__e,t.__k=r.__k,K.then||At(t);B.__e(K,t,r)}else n==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=mo(r.__e,t,r,s,i,n,a,p,u);return(g=B.diffed)&&g(t),128&t.__u?void 0:d}function At(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(At)}function zr(e,t,r){for(var s=0;s<r.length;s++)jt(r[s],r[++s],r[++s]);B.__c&&B.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(n){n.call(i)})}catch(n){B.__e(n,i.__v)}})}function Lr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:gt(e)?e.map(Lr):me({},e)}function mo(e,t,r,s,i,n,a,d,p){var u,g,c,_,v,E,x,A=r.props||Xe,S=t.props,P=t.type;if(P=="svg"?i="http://www.w3.org/2000/svg":P=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),n!=null){for(u=0;u<n.length;u++)if((v=n[u])&&"setAttribute"in v==!!P&&(P?v.localName==P:v.nodeType==3)){e=v,n[u]=null;break}}if(e==null){if(P==null)return document.createTextNode(S);e=document.createElementNS(i,P,S.is&&S),d&&(B.__m&&B.__m(t,n),d=!1),n=null}if(P==null)A===S||d&&e.data==S||(e.data=S);else{if(n=n&&ht.call(e.childNodes),!d&&n!=null)for(A={},u=0;u<e.attributes.length;u++)A[(v=e.attributes[u]).name]=v.value;for(u in A)if(v=A[u],u!="children"){if(u=="dangerouslySetInnerHTML")c=v;else if(!(u in S)){if(u=="value"&&"defaultValue"in S||u=="checked"&&"defaultChecked"in S)continue;ot(e,u,null,v,i)}}for(u in S)v=S[u],u=="children"?_=v:u=="dangerouslySetInnerHTML"?g=v:u=="value"?E=v:u=="checked"?x=v:d&&typeof v!="function"||A[u]===v||ot(e,u,v,A[u],i);if(g)d||c&&(g.__html==c.__html||g.__html==e.innerHTML)||(e.innerHTML=g.__html),t.__k=[];else if(c&&(e.innerHTML=""),Tr(t.type=="template"?e.content:e,gt(_)?_:[_],t,r,s,P=="foreignObject"?"http://www.w3.org/1999/xhtml":i,n,a,n?n[0]:r.__k&&Re(r,0),d,p),n!=null)for(u=n.length;u--;)Ot(n[u]);d||(u="value",P=="progress"&&E==null?e.removeAttribute("value"):E!=null&&(E!==e[u]||P=="progress"&&!E||P=="option"&&E!=A[u])&&ot(e,u,E,A[u],i),u="checked",x!=null&&x!=e[u]&&ot(e,u,x,A[u],i))}return e}function jt(e,t,r){try{if(typeof e=="function"){var s=typeof e.__u=="function";s&&e.__u(),s&&t==null||(e.__u=e(t))}else e.current=t}catch(i){B.__e(i,r)}}function Ar(e,t,r){var s,i;if(B.unmount&&B.unmount(e),(s=e.ref)&&(s.current&&s.current!=e.__e||jt(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(n){B.__e(n,t)}s.base=s.__P=null}if(s=e.__k)for(i=0;i<s.length;i++)s[i]&&Ar(s[i],t,r||typeof e.type!="function");r||Ot(e.__e),e.__c=e.__=e.__e=void 0}function yo(e,t,r){return this.constructor(e,r)}function vo(e,t,r){var s,i,n,a;t==document&&(t=document.documentElement),B.__&&B.__(e,t),i=(s=!1)?null:t.__k,n=[],a=[],It(t,e=t.__k=fo($e,null,[e]),i||Xe,Xe,t.namespaceURI,i?null:t.firstChild?ht.call(t.childNodes):null,n,i?i.__e:t.firstChild,s,a),zr(n,e,a)}ht=$r.slice,B={__e:function(e,t,r,s){for(var i,n,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,s||{}),a=i.__d),a)return i.__E=i}catch(d){e=d}throw e}},wr=0,kr=function(e){return e!=null&&e.constructor===void 0},Ve.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=me({},this.state),typeof e=="function"&&(e=e(me({},r),this.props)),e&&me(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),rr(this))},Ve.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),rr(this))},Ve.prototype.render=$e,Se=[],xr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Sr=function(e,t){return e.__v.__b-t.__v.__b},ct.__r=0,Pr=/(PointerCapture)$|Capture$/i,Bt=0,zt=sr(!1),Lt=sr(!0);var Je,N,St,nr,Ke=0,Mr=[],W=B,ir=W.__b,ar=W.__r,lr=W.diffed,cr=W.__c,ur=W.unmount,dr=W.__;function Ht(e,t){W.__h&&W.__h(N,e,Ke||t),Ke=0;var r=N.__H||(N.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function z(e){return Ke=1,_o(Br,e)}function _o(e,t,r){var s=Ht(Je++,2);if(s.t=e,!s.__c&&(s.__=[Br(void 0,t),function(d){var p=s.__N?s.__N[0]:s.__[0],u=s.t(p,d);p!==u&&(s.__N=[u,s.__[1]],s.__c.setState({}))}],s.__c=N,!N.__f)){var i=function(d,p,u){if(!s.__c.__H)return!0;var g=s.__c.__H.__.filter(function(_){return!!_.__c});if(g.every(function(_){return!_.__N}))return!n||n.call(this,d,p,u);var c=s.__c.props!==d;return g.forEach(function(_){if(_.__N){var v=_.__[0];_.__=_.__N,_.__N=void 0,v!==_.__[0]&&(c=!0)}}),n&&n.call(this,d,p,u)||c};N.__f=!0;var n=N.shouldComponentUpdate,a=N.componentWillUpdate;N.componentWillUpdate=function(d,p,u){if(this.__e){var g=n;n=void 0,i(d,p,u),n=g}a&&a.call(this,d,p,u)},N.shouldComponentUpdate=i}return s.__N||s.__}function R(e,t){var r=Ht(Je++,3);!W.__s&&Rr(r.__H,t)&&(r.__=e,r.u=t,N.__H.__h.push(r))}function j(e){return Ke=5,mt(function(){return{current:e}},[])}function mt(e,t){var r=Ht(Je++,7);return Rr(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function U(e,t){return Ke=8,mt(function(){return e},t)}function bo(){for(var e;e=Mr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(at),e.__H.__h.forEach(Mt),e.__H.__h=[]}catch(t){e.__H.__h=[],W.__e(t,e.__v)}}W.__b=function(e){N=null,ir&&ir(e)},W.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),dr&&dr(e,t)},W.__r=function(e){ar&&ar(e),Je=0;var t=(N=e.__c).__H;t&&(St===N?(t.__h=[],N.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(at),t.__h.forEach(Mt),t.__h=[],Je=0)),St=N},W.diffed=function(e){lr&&lr(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Mr.push(t)!==1&&nr===W.requestAnimationFrame||((nr=W.requestAnimationFrame)||wo)(bo)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),St=N=null},W.__c=function(e,t){t.some(function(r){try{r.__h.forEach(at),r.__h=r.__h.filter(function(s){return!s.__||Mt(s)})}catch(s){t.some(function(i){i.__h&&(i.__h=[])}),t=[],W.__e(s,r.__v)}}),cr&&cr(e,t)},W.unmount=function(e){ur&&ur(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(s){try{at(s)}catch(i){t=i}}),r.__H=void 0,t&&W.__e(t,r.__v))};var pr=typeof requestAnimationFrame=="function";function wo(e){var t,r=function(){clearTimeout(s),pr&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(r,35);pr&&(t=requestAnimationFrame(r))}function at(e){var t=N,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),N=t}function Mt(e){var t=N;e.__c=e.__(),N=t}function Rr(e,t){return!e||e.length!==t.length||t.some(function(r,s){return r!==e[s]})}function Br(e,t){return typeof t=="function"?t(e):t}var ko=Symbol.for("preact-signals");function Nt(){if(Me>1)Me--;else{for(var e,t=!1;Ye!==void 0;){var r=Ye;for(Ye=void 0,Rt++;r!==void 0;){var s=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&jr(r))try{r.c()}catch(i){t||(e=i,t=!0)}r=s}}if(Rt=0,Me--,t)throw e}}var L=void 0;function Or(e){var t=L;L=void 0;try{return e()}finally{L=t}}var Ye=void 0,Me=0,Rt=0,ut=0;function Ir(e){if(L!==void 0){var t=e.n;if(t===void 0||t.t!==L)return t={i:0,S:e,p:L.s,n:void 0,t:L,e:void 0,x:void 0,r:t},L.s!==void 0&&(L.s.n=t),L.s=t,e.n=t,32&L.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=L.s,t.n=void 0,L.s.n=t,L.s=t),t}}function X(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}X.prototype.brand=ko;X.prototype.h=function(){return!0};X.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:Or(function(){var s;(s=t.W)==null||s.call(t)}))};X.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,s=e.x;r!==void 0&&(r.x=s,e.e=void 0),s!==void 0&&(s.e=r,e.x=void 0),e===this.t&&(this.t=s,s===void 0&&Or(function(){var i;(i=t.Z)==null||i.call(t)}))}};X.prototype.subscribe=function(e){var t=this;return Wt(function(){var r=t.value,s=L;L=void 0;try{e(r)}finally{L=s}},{name:"sub"})};X.prototype.valueOf=function(){return this.value};X.prototype.toString=function(){return this.value+""};X.prototype.toJSON=function(){return this.value};X.prototype.peek=function(){var e=L;L=void 0;try{return this.value}finally{L=e}};Object.defineProperty(X.prototype,"value",{get:function(){var e=Ir(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Rt>100)throw new Error("Cycle detected");this.v=e,this.i++,ut++,Me++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Nt()}}}});function de(e,t){return new X(e,t)}function jr(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Hr(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Nr(e){for(var t=e.s,r=void 0;t!==void 0;){var s=t.p;t.i===-1?(t.S.U(t),s!==void 0&&(s.n=t.n),t.n!==void 0&&(t.n.p=s)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=s}e.s=r}function Ce(e,t){X.call(this,void 0),this.x=e,this.s=void 0,this.g=ut-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}Ce.prototype=new X;Ce.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ut))return!0;if(this.g=ut,this.f|=1,this.i>0&&!jr(this))return this.f&=-2,!0;var e=L;try{Hr(this),L=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return L=e,Nr(this),this.f&=-2,!0};Ce.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}X.prototype.S.call(this,e)};Ce.prototype.U=function(e){if(this.t!==void 0&&(X.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};Ce.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(Ce.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Ir(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function xo(e,t){return new Ce(e,t)}function Dr(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Me++;var r=L;L=void 0;try{t()}catch(s){throw e.f&=-2,e.f|=8,Dt(e),s}finally{L=r,Nt()}}}function Dt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Dr(e)}function So(e){if(L!==this)throw new Error("Out-of-order effect");Nr(this),L=e,this.f&=-2,8&this.f&&Dt(this),Nt()}function Oe(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}Oe.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Oe.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Dr(this),Hr(this),Me++;var e=L;return L=this,So.bind(this,e)};Oe.prototype.N=function(){2&this.f||(this.f|=2,this.o=Ye,Ye=this)};Oe.prototype.d=function(){this.f|=8,1&this.f||Dt(this)};Oe.prototype.dispose=function(){this.d()};function Wt(e,t){var r=new Oe(e,t);try{r.c()}catch(i){throw r.d(),i}var s=r.d.bind(r);return s[Symbol.dispose]=s,s}var st;function Ie(e,t){B[e]=t.bind(null,B[e]||function(){})}function dt(e){if(st){var t=st;st=void 0,t()}st=e&&e.S()}function Wr(e){var t=this,r=e.data,s=Pe(r);s.value=r;var i=mt(function(){for(var n=t.__v;n=n.__;)if(n.__c){n.__c.__$f|=4;break}return t.__$u.c=function(){var a,d=t.__$u.S(),p=i.value;d(),kr(p)||((a=t.base)==null?void 0:a.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=p},xo(function(){var a=s.value.value;return a===0?0:a===!0?"":a||""})},[]);return i.value}Wr.displayName="_st";Object.defineProperties(X.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Wr},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Ie("__b",function(e,t){if(typeof t.type=="string"){var r,s=t.props;for(var i in s)if(i!=="children"){var n=s[i];n instanceof X&&(r||(t.__np=r={}),r[i]=n,s[i]=n.peek())}}e(t)});Ie("__r",function(e,t){e(t),dt();var r,s=t.__c;s&&(s.__$f&=-2,(r=s.__$u)===void 0&&(s.__$u=r=function(i){var n;return Wt(function(){n=this}),n.c=function(){s.__$f|=1,s.setState({})},n}())),dt(r)});Ie("__e",function(e,t,r,s){dt(),e(t,r,s)});Ie("diffed",function(e,t){dt();var r;if(typeof t.type=="string"&&(r=t.__e)){var s=t.__np,i=t.props;if(s){var n=r.U;if(n)for(var a in n){var d=n[a];d!==void 0&&!(a in s)&&(d.d(),n[a]=void 0)}else r.U=n={};for(var p in s){var u=n[p],g=s[p];u===void 0?(u=Po(r,p,g,i),n[p]=u):u.o(g,i)}}}e(t)});function Po(e,t,r,s){var i=t in e&&e.ownerSVGElement===void 0,n=de(r);return{o:function(a,d){n.value=a,s=d},d:Wt(function(){var a=n.value.value;s[t]!==a&&(s[t]=a,i?e[t]=a:a?e.setAttribute(t,a):e.removeAttribute(t))})}}Ie("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var s=r.U;if(s){r.U=void 0;for(var i in s){var n=s[i];n&&n.d()}}}}else{var a=t.__c;if(a){var d=a.__$u;d&&(a.__$u=void 0,d.d())}}e(t)});Ie("__h",function(e,t,r,s){(s<3||s===9)&&(t.__$f|=2),e(t,r,s)});Ve.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,s=r&&r.s!==void 0;for(var i in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(s||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(s||4&this.__$f)||3&this.__$f)return!0;for(var n in e)if(n!=="__source"&&e[n]!==this.props[n])return!0;for(var a in this.props)if(!(a in e))return!0;return!1};function Pe(e){return mt(function(){return de(e)},[])}var $o=0;function o(e,t,r,s,i,n){t||(t={});var a,d,p=t;if("ref"in p)for(d in p={},t)d=="ref"?a=t[d]:p[d]=t[d];var u={type:e,props:p,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--$o,__i:-1,__u:0,__source:i,__self:n};if(typeof e=="function"&&(a=e.defaultProps))for(d in a)p[d]===void 0&&(p[d]=a[d]);return B.vnode&&B.vnode(u),u}function Co({prev:e,next:t}){return!e&&!t?null:o("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[o("div",{class:"pressy-nav-inner",children:[e?o("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[o("span",{class:"pressy-nav-direction",children:"Previous"}),o("span",{class:"pressy-nav-title",children:e.title})]}):o("div",{class:"pressy-nav-placeholder"}),t?o("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[o("span",{class:"pressy-nav-direction",children:"Next"}),o("span",{class:"pressy-nav-title",children:t.title})]}):o("div",{class:"pressy-nav-placeholder"})]}),o("style",{children:`
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
      `})]})}function Fr(){const e=Pe(!1),t=Pe({x:0,y:0}),r=Pe(""),s=j(null);R(()=>{const d=()=>{const p=window.getSelection();if(!p||p.isCollapsed){e.value=!1;return}const u=p.toString().trim();if(u.length<5){e.value=!1;return}r.value=u;const c=p.getRangeAt(0).getBoundingClientRect();t.value={x:c.left+c.width/2,y:c.top-10},e.value=!0};return document.addEventListener("selectionchange",d),document.addEventListener("mouseup",d),()=>{document.removeEventListener("selectionchange",d),document.removeEventListener("mouseup",d)}},[]);const i=()=>{const d=encodeURIComponent(r.value),p=new URL(window.location.href);return p.hash=`:~:text=${d}`,p.toString()},n=async()=>{const d=i(),p=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:p,url:d}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${p}

${d}`),s.current&&(s.current.classList.add("copied"),setTimeout(()=>{var u;(u=s.current)==null||u.classList.remove("copied")},2e3))}catch(u){console.error("Failed to copy to clipboard:",u)}},a=async()=>{const d=i();try{await navigator.clipboard.writeText(d),s.current&&(s.current.classList.add("copied"),setTimeout(()=>{var p;(p=s.current)==null||p.classList.remove("copied")},2e3))}catch(p){console.error("Failed to copy link:",p)}};return e.value?o("div",{ref:s,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[o("button",{class:"pressy-share-btn",onClick:n,"aria-label":"Share selected text",title:"Share quote",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),o("button",{class:"pressy-copy-link-btn",onClick:a,"aria-label":"Copy link to selected text",title:"Copy link",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),o("style",{children:`
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
      `})]}):null}function Ur(){const e=Pe(!navigator.onLine),t=Pe(!1);return R(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},s=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",s),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",s)}},[]),t.value?o("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?o($e,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),o("span",{children:"You're offline"})]}):o($e,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),o("span",{children:"Back online"})]}),o("style",{children:`
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
          background: var(--color-callout-important-bg);
          color: var(--color-danger);
          border: 1px solid var(--color-callout-important-border);
        }

        .pressy-offline-indicator.online {
          background: var(--color-callout-tip-bg);
          color: var(--color-success);
          border: 1px solid var(--color-callout-tip-border);
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
      `})]}):null}var To=`
  .pressy-reader {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .pressy-reader-main {
    flex: 1;
    padding: 2rem 0;
  }

  /* ── Scroll reader footer ──────────────────────────────── */
  .pressy-page-footer--scroll {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem 1.5rem calc(1rem + env(safe-area-inset-bottom, 0px));
    text-align: center;
    user-select: none;
    transform: translateY(100%);
    opacity: 0;
    transition: transform 0.25s ease, opacity 0.25s ease;
    z-index: 15;
    background: var(--color-bg, #ffffff);
    box-shadow: var(--shadow-sm);
  }

  .pressy-page-footer--scroll.pressy-page-footer--visible {
    transform: translateY(0);
    opacity: 1;
  }

  /* Shared footer styles for scroll reader */
  .pressy-page-footer--scroll .pressy-footer-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .pressy-page-footer--scroll .pressy-footer-title {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.75rem;
    color: var(--color-text-muted, #6c757d);
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    flex: 1;
    text-align: left;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }

  .pressy-page-footer--scroll .pressy-footer-title:hover {
    color: var(--color-text, #212529);
  }

  .pressy-page-footer--scroll .pressy-toc-toggle,
  .pressy-page-footer--scroll .pressy-settings-toggle {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    cursor: pointer;
    border-radius: 0.375rem;
    transition: color 0.15s, background 0.15s;
    padding: 0;
  }

  .pressy-page-footer--scroll .pressy-toc-toggle:hover,
  .pressy-page-footer--scroll .pressy-settings-toggle:hover {
    color: var(--color-text, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-page-footer--scroll .pressy-settings-panel {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.25s ease, opacity 0.2s ease;
    border-top: 0 solid var(--color-border, #dee2e6);
  }

  .pressy-page-footer--scroll .pressy-settings-panel--open {
    max-height: 300px;
    opacity: 1;
    border-top-width: 1px;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
  }

  .pressy-page-footer--scroll .pressy-settings-section {
    margin-bottom: 0.75rem;
  }

  .pressy-page-footer--scroll .pressy-settings-section:last-child {
    margin-bottom: 0;
  }

  .pressy-page-footer--scroll .pressy-settings-label {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted, #6c757d);
    margin-bottom: 0.5rem;
    text-align: left;
  }

  .pressy-page-footer--scroll .pressy-theme-options {
    display: flex;
    gap: 0.375rem;
  }

  .pressy-page-footer--scroll .pressy-theme-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.375rem 0.5rem;
    border: 1.5px solid var(--color-border, #dee2e6);
    border-radius: 0.5rem;
    background: transparent;
    color: var(--color-text, #212529);
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.6875rem;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
  }

  .pressy-page-footer--scroll .pressy-theme-btn:hover {
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-page-footer--scroll .pressy-theme-btn--active {
    border-color: var(--color-accent, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
    font-weight: 600;
  }

  .pressy-page-footer--scroll .pressy-font-size-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .pressy-page-footer--scroll .pressy-font-size-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: 1.5px solid var(--color-border, #dee2e6);
    border-radius: 50%;
    background: transparent;
    color: var(--color-text, #212529);
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
  }

  .pressy-page-footer--scroll .pressy-font-size-btn:hover:not(:disabled) {
    background: var(--color-bg-subtle, #f8f9fa);
    border-color: var(--color-accent, #212529);
  }

  .pressy-page-footer--scroll .pressy-font-size-btn:disabled {
    opacity: 0.3;
    cursor: default;
  }

  .pressy-page-footer--scroll .pressy-font-size-value {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--color-text, #212529);
    min-width: 3ch;
    text-align: center;
  }

  /* ── TOC drawer for scroll reader ───────────────────────── */
  .pressy-toc-backdrop--scroll {
    position: fixed;
    inset: 0;
    background: var(--color-overlay);
    z-index: 20;
    display: flex;
    align-items: flex-end;
    animation: pressy-scroll-toc-fade-in 0.2s ease-out;
  }

  .pressy-toc-backdrop--scroll .pressy-toc-drawer {
    width: 100%;
    max-height: 70vh;
    background: var(--color-bg, #ffffff);
    border-radius: 1rem 1rem 0 0;
    display: flex;
    flex-direction: column;
    animation: pressy-scroll-toc-slide-up 0.25s ease-out;
    box-shadow: var(--shadow-lg);
  }

  .pressy-toc-backdrop--scroll .pressy-toc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem 0.75rem;
    border-bottom: 1px solid var(--color-border, #dee2e6);
    flex-shrink: 0;
  }

  .pressy-toc-backdrop--scroll .pressy-toc-title {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text, #212529);
  }

  .pressy-toc-backdrop--scroll .pressy-toc-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    cursor: pointer;
    border-radius: 0.375rem;
    padding: 0;
  }

  .pressy-toc-backdrop--scroll .pressy-toc-close:hover {
    color: var(--color-text, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-toc-backdrop--scroll .pressy-toc-list {
    overflow-y: auto;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .pressy-toc-backdrop--scroll .pressy-toc-item {
    display: flex;
    gap: 0.75rem;
    padding: 0.625rem 1rem;
    text-decoration: none;
    color: var(--color-text, #212529);
    border-radius: 0.5rem;
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.875rem;
    transition: background 0.15s;
  }

  .pressy-toc-backdrop--scroll .pressy-toc-item:hover {
    background: var(--color-bg-subtle, #f5f5f5);
  }

  .pressy-toc-backdrop--scroll .pressy-toc-item--active {
    background: var(--color-bg-subtle, #f5f5f5);
    font-weight: 600;
  }

  .pressy-toc-backdrop--scroll .pressy-toc-item-num {
    color: var(--color-text-muted, #6c757d);
    min-width: 2ch;
    text-align: right;
  }

  .pressy-toc-backdrop--scroll .pressy-toc-item--home {
    border-bottom: 1px solid var(--color-border, #e5e5e5);
    margin-bottom: 0.25rem;
    padding-bottom: 0.75rem;
  }

  .pressy-toc-backdrop--scroll .pressy-toc-item--home .pressy-toc-item-num {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pressy-toc-backdrop--scroll .pressy-toc-item-title {
    flex: 1;
    min-width: 0;
  }

  @keyframes pressy-scroll-toc-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes pressy-scroll-toc-slide-up {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  /* ── Offline icon for scroll reader ─────────────────────── */
  .pressy-page-footer--scroll .pressy-offline-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2rem;
    height: 2rem;
    border: none;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    cursor: pointer;
    border-radius: 0.375rem;
    transition: color 0.15s, background 0.15s;
    padding: 0;
  }

  .pressy-page-footer--scroll .pressy-offline-icon:hover {
    color: var(--color-text, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-page-footer--scroll .pressy-offline-icon--cached {
    color: var(--color-success);
  }

  .pressy-page-footer--scroll .pressy-offline-icon--cached:hover {
    color: var(--color-danger);
  }

  .pressy-page-footer--scroll .pressy-offline-check {
    position: absolute;
    bottom: 2px;
    right: 2px;
  }

  .pressy-page-footer--scroll .pressy-offline-icon--downloading {
    cursor: default;
  }

  /* ── Bookmark toggle for scroll reader ───────────────────── */
  .pressy-page-footer--scroll .pressy-bookmarks-toggle {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    cursor: pointer;
    border-radius: 0.375rem;
    transition: color 0.15s, background 0.15s;
    padding: 0;
  }

  .pressy-page-footer--scroll .pressy-bookmarks-toggle:hover {
    color: var(--color-text, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  /* ── Bookmark panel for scroll reader ────────────────────── */
  .pressy-page-footer--scroll .pressy-bookmarks-panel {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.25s ease, opacity 0.2s ease;
    border-top: 0 solid var(--color-border, #dee2e6);
  }

  .pressy-page-footer--scroll .pressy-bookmarks-panel--open {
    max-height: 300px;
    opacity: 1;
    border-top-width: 1px;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
    overflow-y: auto;
  }

  .pressy-page-footer--scroll .pressy-bookmarks-empty {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.8125rem;
    color: var(--color-text-muted, #6c757d);
    text-align: center;
    padding: 0.5rem 0;
  }

  .pressy-page-footer--scroll .pressy-bookmarks-list {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 0.5rem;
  }

  .pressy-page-footer--scroll .pressy-bookmark-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 0.5rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background 0.15s;
  }

  .pressy-page-footer--scroll .pressy-bookmark-item:hover {
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-page-footer--scroll .pressy-bookmark-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  .pressy-page-footer--scroll .pressy-bookmark-chapter {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--color-text, #212529);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }

  .pressy-page-footer--scroll .pressy-bookmark-detail {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.6875rem;
    color: var(--color-text-muted, #6c757d);
    text-align: left;
  }

  .pressy-page-footer--scroll .pressy-bookmark-delete {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    cursor: pointer;
    border-radius: 0.25rem;
    padding: 0;
    transition: color 0.15s, background 0.15s;
  }

  .pressy-page-footer--scroll .pressy-bookmark-delete:hover {
    color: var(--color-danger);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-page-footer--scroll .pressy-bookmark-add {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1.5px dashed var(--color-border, #dee2e6);
    border-radius: 0.375rem;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    transition: border-color 0.15s, color 0.15s;
  }

  .pressy-page-footer--scroll .pressy-bookmark-add:hover {
    border-color: var(--color-accent, #212529);
    color: var(--color-text, #212529);
  }

  @media (prefers-reduced-motion: reduce) {
    .pressy-page-footer--scroll {
      transition: none;
    }
    .pressy-toc-backdrop--scroll,
    .pressy-toc-backdrop--scroll .pressy-toc-drawer {
      animation: none;
    }
  }
`;function Vr(e){const t=Math.floor((Date.now()-e)/1e3);if(t<60)return"just now";const r=Math.floor(t/60);if(r<60)return`${r}m ago`;const s=Math.floor(r/60);if(s<24)return`${s}h ago`;const i=Math.floor(s/24);return i<30?`${i}d ago`:`${Math.floor(i/30)}mo ago`}function Yr({offlineProps:e}){if(!e)return null;const{bookSlug:t,chapterUrls:r,cachedBooks:s,onDownload:i,onRemove:n}=e;return s.value.has(t)?o("button",{class:"pressy-offline-icon pressy-offline-icon--cached",onClick:d=>{d.stopPropagation(),n(t)},"aria-label":"Available offline. Click to remove.",title:"Available offline. Click to remove.",children:[o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]}),o("svg",{class:"pressy-offline-check",viewBox:"0 0 24 24",fill:"currentColor",width:"10",height:"10",children:o("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})})]}):o("button",{class:"pressy-offline-icon",onClick:d=>{d.stopPropagation(),i(t,r)},"aria-label":"Download for offline reading",title:"Download for offline reading",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]})})}function Eo({children:e,bookTitle:t,prevChapter:r,nextChapter:s,showDropCap:i,onSaveProgress:n,onRestoreProgress:a,allChapters:d,bookBasePath:p,currentChapterSlug:u,offlineProps:g,bookmarkProps:c}){const _=j(null),[v,E]=z(!1),x=j(null),[A,S]=z(!1),[P,O]=z(!1),[I,w]=z(!1),J=U(()=>{E(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>E(!1),3e3)},[]),[h,$]=z(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[D,oe]=z(()=>{if(typeof localStorage<"u"){const m=localStorage.getItem("pressy-font-size");return m?parseFloat(m):1}return 1}),V=U(m=>{m===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${m})`)},[]);R(()=>{D!==1&&V(D)},[]);const K=U(m=>{$(m),localStorage.setItem("pressy-theme",m);const H=m==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":m;document.documentElement.setAttribute("data-theme",H)},[]),ye=U(m=>{oe(H=>{const ne=Math.round(Math.max(.8,Math.min(1.5,H+m))*10)/10;return localStorage.setItem("pressy-font-size",String(ne)),V(ne),ne})},[V]),Te=U(m=>{const H=m.target;if(!H.closest(".pressy-page-footer, .pressy-toc-backdrop, .pressy-toc-toggle, .pressy-bookmarks-panel, .pressy-bookmarks-toggle")&&!H.closest('a, button, input, select, textarea, [role="button"]')){if(A||P||I){S(!1),O(!1),w(!1);return}v?(E(!1),x.current&&clearTimeout(x.current)):J()}},[v,A,P,I,J]);return R(()=>{a&&a().then(m=>{m&&m.scrollPosition>0&&window.scrollTo(0,m.scrollPosition)})},[]),R(()=>{if(!n)return;const m=()=>{_.current&&clearTimeout(_.current),_.current=setTimeout(()=>{n({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",m,{passive:!0}),()=>{window.removeEventListener("scroll",m),_.current&&clearTimeout(_.current)}},[n]),R(()=>{if(!n)return;const m=()=>{n({page:0,totalPages:0,scrollPosition:window.scrollY})},H=()=>{document.visibilityState==="hidden"&&m()};return window.addEventListener("beforeunload",m),document.addEventListener("visibilitychange",H),()=>{window.removeEventListener("beforeunload",m),document.removeEventListener("visibilitychange",H)}},[n]),o("div",{class:"pressy-reader",onClick:Te,children:[o("main",{class:"pressy-reader-main",children:o("article",{class:`pressy-prose ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:e})}),o(Fr,{}),o(Co,{prev:r,next:s}),o(Ur,{}),P&&d&&o("div",{class:"pressy-toc-backdrop pressy-toc-backdrop--scroll",onClick:m=>{m.stopPropagation(),O(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:m=>m.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:m=>{m.stopPropagation(),O(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:[o("a",{href:p&&p.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>{sessionStorage.setItem("pressy-internal-nav","1"),O(!1)},children:[o("span",{class:"pressy-toc-item-num",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:o("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),o("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),d.map((m,H)=>o("a",{href:`${p||""}/${m.slug}`,class:`pressy-toc-item ${m.slug===u?"pressy-toc-item--active":""}`,onClick:()=>O(!1),children:[o("span",{class:"pressy-toc-item-num",children:[H+1,"."]}),o("span",{class:"pressy-toc-item-title",children:m.title})]},m.slug))]})]})}),o("div",{class:`pressy-page-footer pressy-page-footer--scroll ${v||A||P||I?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-footer-row",children:[d&&d.length>0&&o("button",{class:"pressy-toc-toggle",onClick:m=>{m.stopPropagation(),S(!1),w(!1),O(!P)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:m=>{m.stopPropagation(),d&&d.length>0&&(S(!1),w(!1),O(!P))},children:t}),o(Yr,{offlineProps:g}),c&&o("button",{class:"pressy-bookmarks-toggle",onClick:m=>{m.stopPropagation(),S(!1),O(!1),w(!I)},"aria-label":"Bookmarks",children:o("svg",{viewBox:"0 0 24 24",fill:I?"currentColor":"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:o("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})})}),o("button",{class:"pressy-settings-toggle",onClick:m=>{m.stopPropagation(),O(!1),w(!1),S(!A)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${A?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(m=>o("button",{class:`pressy-theme-btn ${h===m.id?"pressy-theme-btn--active":""}`,onClick:H=>{H.stopPropagation(),K(m.id)},children:[m.icon,o("span",{children:m.label})]},m.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:m=>{m.stopPropagation(),ye(-.1)},disabled:D<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(D*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:m=>{m.stopPropagation(),ye(.1)},disabled:D>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]}),c&&o("div",{class:`pressy-bookmarks-panel ${I?"pressy-bookmarks-panel--open":""}`,children:[c.bookmarks.length===0?o("div",{class:"pressy-bookmarks-empty",children:"No bookmarks yet"}):o("div",{class:"pressy-bookmarks-list",children:c.bookmarks.map(m=>o("div",{class:"pressy-bookmark-item",onClick:H=>{H.stopPropagation(),c.onNavigateBookmark(m),w(!1)},children:[o("div",{class:"pressy-bookmark-info",children:[o("span",{class:"pressy-bookmark-chapter",children:m.chapterTitle}),o("span",{class:"pressy-bookmark-detail",children:[m.scrollPosition>0?`Scroll ${Math.round(m.scrollPosition)}px`:m.totalPages>0?`Page ${m.page+1} of ${m.totalPages}`:"Start"," · ",Vr(m.createdAt)]})]}),o("button",{class:"pressy-bookmark-delete",onClick:H=>{H.stopPropagation(),c.onDeleteBookmark(m.id)},"aria-label":"Delete bookmark",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},m.id))}),o("button",{class:"pressy-bookmark-add",onClick:m=>{var H;m.stopPropagation(),c.onAddBookmark({chapterSlug:u||"",chapterTitle:((H=d==null?void 0:d.find(ne=>ne.slug===u))==null?void 0:H.title)||u||"",page:0,totalPages:0,scrollPosition:window.scrollY})},children:"Bookmark this page"})]})]}),o("style",{children:To})]})}var zo=`
  html:has(.pressy-reader--paginated),
  html:has(.pressy-reader--paginated) body {
    margin: 0;
    overflow: hidden;
    height: 100%;
  }

  .pressy-reader--paginated {
    height: var(--app-height, 100dvh);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
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
    text-wrap: pretty;
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

  /* ── Navigation arrows ────────────────────────────────────── */
  /* Hover-triggered arrows on left/right edges for desktop navigation */
  .pressy-nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-muted, #6c757d);
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
    z-index: 5;
  }

  .pressy-nav-arrow svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .pressy-nav-arrow--prev {
    left: 0.75rem;
  }

  .pressy-nav-arrow--next {
    right: 0.75rem;
  }

  .pressy-nav-arrow--visible {
    opacity: 0.4;
  }

  /* Hide on touch devices — swipe handles navigation there */
  @media (pointer: coarse) {
    .pressy-nav-arrow {
      display: none;
    }
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
    box-shadow: var(--shadow-md);
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

  .pressy-chapter-hint--paywall {
    background: var(--color-accent, #4a90d9);
    color: white;
    border-color: var(--color-accent, #4a90d9);
    cursor: pointer;
    pointer-events: auto;
  }

  .pressy-chapter-hint-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  @keyframes pressy-hint-fade-in {
    from { opacity: 0; transform: translateY(-50%) scale(0.95); }
    to { opacity: 1; transform: translateY(-50%) scale(1); }
  }

  /* ── Page footer ───────────────────────────────────────────── */
  .pressy-page-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem 1.5rem calc(1rem + env(safe-area-inset-bottom, 0px));
    text-align: center;
    user-select: none;
    transform: translateY(100%);
    opacity: 0;
    transition: transform 0.25s ease, opacity 0.25s ease;
    z-index: 15;
    background: var(--color-bg, #ffffff);
  }

  .pressy-page-footer--visible {
    transform: translateY(0);
    opacity: 1;
  }

  /* Progress bar */
  .pressy-progress-bar {
    height: 3px;
    background: var(--color-border, #dee2e6);
    border-radius: 1.5px;
    overflow: hidden;
  }

  .pressy-progress-fill {
    height: 100%;
    background: var(--color-accent, #212529);
    border-radius: 1.5px;
    transition: width 0.3s ease;
  }

  /* ── Footer row (title + gear) ──────────────────────────── */
  .pressy-footer-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
    gap: 0.5rem;
  }

  .pressy-footer-title {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.75rem;
    color: var(--color-text-muted, #6c757d);
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    flex: 1;
    text-align: left;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }

  .pressy-footer-title:hover {
    color: var(--color-text, #212529);
  }

  /* ── TOC toggle button ──────────────────────────────────── */
  .pressy-toc-toggle {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    cursor: pointer;
    border-radius: 0.375rem;
    transition: color 0.15s, background 0.15s;
    padding: 0;
  }

  .pressy-toc-toggle:hover {
    color: var(--color-text, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-settings-toggle {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    cursor: pointer;
    border-radius: 0.375rem;
    transition: color 0.15s, background 0.15s;
    padding: 0;
  }

  .pressy-settings-toggle:hover {
    color: var(--color-text, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  /* ── Settings panel ────────────────────────────────────── */
  .pressy-settings-panel {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.25s ease, opacity 0.2s ease;
    border-top: 0 solid var(--color-border, #dee2e6);
  }

  .pressy-settings-panel--open {
    max-height: 300px;
    opacity: 1;
    border-top-width: 1px;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
  }

  .pressy-settings-section {
    margin-bottom: 0.75rem;
  }

  .pressy-settings-section:last-child {
    margin-bottom: 0;
  }

  .pressy-settings-label {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted, #6c757d);
    margin-bottom: 0.5rem;
    text-align: left;
  }

  .pressy-theme-options {
    display: flex;
    gap: 0.375rem;
  }

  .pressy-theme-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.375rem 0.5rem;
    border: 1.5px solid var(--color-border, #dee2e6);
    border-radius: 0.5rem;
    background: transparent;
    color: var(--color-text, #212529);
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.6875rem;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
  }

  .pressy-theme-btn:hover {
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-theme-btn--active {
    border-color: var(--color-accent, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
    font-weight: 600;
  }

  .pressy-font-size-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .pressy-font-size-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: 1.5px solid var(--color-border, #dee2e6);
    border-radius: 50%;
    background: transparent;
    color: var(--color-text, #212529);
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
  }

  .pressy-font-size-btn:hover:not(:disabled) {
    background: var(--color-bg-subtle, #f8f9fa);
    border-color: var(--color-accent, #212529);
  }

  .pressy-font-size-btn:disabled {
    opacity: 0.3;
    cursor: default;
  }

  .pressy-font-size-value {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--color-text, #212529);
    min-width: 3ch;
    text-align: center;
  }

  /* ── Chapter sections ─────────────────────────────────── */
  .pressy-chapter-section + .pressy-chapter-section {
    break-before: column;
  }

  .pressy-chapter-divider {
    padding: 0;
    margin: 0;
  }

  .pressy-chapter-divider-title {
    font-size: 1.5rem;
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    margin: 0;
  }

  /* ── TOC drawer ──────────────────────────────────────────── */
  .pressy-toc-backdrop {
    position: absolute;
    inset: 0;
    background: var(--color-overlay);
    z-index: 20;
    display: flex;
    align-items: flex-end;
    animation: pressy-toc-fade-in 0.2s ease-out;
  }

  .pressy-toc-drawer {
    width: 100%;
    max-height: 70vh;
    background: var(--color-bg, #ffffff);
    border-radius: 1rem 1rem 0 0;
    display: flex;
    flex-direction: column;
    animation: pressy-toc-slide-up 0.25s ease-out;
    box-shadow: var(--shadow-lg);
  }

  .pressy-toc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem 0.75rem;
    border-bottom: 1px solid var(--color-border, #dee2e6);
    flex-shrink: 0;
  }

  .pressy-toc-title {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text, #212529);
  }

  .pressy-toc-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    cursor: pointer;
    border-radius: 0.375rem;
    padding: 0;
  }

  .pressy-toc-close:hover {
    color: var(--color-text, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-toc-list {
    overflow-y: auto;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .pressy-toc-item {
    display: flex;
    gap: 0.75rem;
    padding: 0.625rem 1rem;
    text-decoration: none;
    color: var(--color-text, #212529);
    border-radius: 0.5rem;
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.875rem;
    transition: background 0.15s;
  }

  .pressy-toc-item:hover {
    background: var(--color-bg-subtle, #f5f5f5);
  }

  .pressy-toc-item--active {
    background: var(--color-bg-subtle, #f5f5f5);
    font-weight: 600;
  }

  .pressy-toc-item-num {
    color: var(--color-text-muted, #6c757d);
    min-width: 2ch;
    text-align: right;
  }

  .pressy-toc-item--home {
    border-bottom: 1px solid var(--color-border, #e5e5e5);
    margin-bottom: 0.25rem;
    padding-bottom: 0.75rem;
  }

  .pressy-toc-item--home .pressy-toc-item-num {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pressy-toc-item-title {
    flex: 1;
    min-width: 0;
  }

  @keyframes pressy-toc-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes pressy-toc-slide-up {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  /* ── Offline footer icon ────────────────────────────────── */
  .pressy-offline-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2rem;
    height: 2rem;
    border: none;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    cursor: pointer;
    border-radius: 0.375rem;
    transition: color 0.15s, background 0.15s;
    padding: 0;
  }

  .pressy-offline-icon:hover {
    color: var(--color-text, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-offline-icon--cached {
    color: var(--color-success);
  }

  .pressy-offline-icon--cached:hover {
    color: var(--color-danger);
  }

  .pressy-offline-check {
    position: absolute;
    bottom: 2px;
    right: 2px;
  }

  .pressy-offline-icon--downloading {
    cursor: default;
  }

  @keyframes pressy-offline-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .pressy-offline-spinner {
    animation: pressy-offline-spin 1s linear infinite;
    transform-origin: 12px 12px;
  }

  /* ── Bookmark toggle ─────────────────────────────────────── */
  .pressy-bookmarks-toggle {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    cursor: pointer;
    border-radius: 0.375rem;
    transition: color 0.15s, background 0.15s;
    padding: 0;
  }

  .pressy-bookmarks-toggle:hover {
    color: var(--color-text, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  /* ── Bookmark panel ─────────────────────────────────────── */
  .pressy-bookmarks-panel {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.25s ease, opacity 0.2s ease;
    border-top: 0 solid var(--color-border, #dee2e6);
  }

  .pressy-bookmarks-panel--open {
    max-height: 300px;
    opacity: 1;
    border-top-width: 1px;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
    overflow-y: auto;
  }

  .pressy-bookmarks-empty {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.8125rem;
    color: var(--color-text-muted, #6c757d);
    text-align: center;
    padding: 0.5rem 0;
  }

  .pressy-bookmarks-list {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 0.5rem;
  }

  .pressy-bookmark-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 0.5rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background 0.15s;
  }

  .pressy-bookmark-item:hover {
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-bookmark-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  .pressy-bookmark-chapter {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--color-text, #212529);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }

  .pressy-bookmark-detail {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.6875rem;
    color: var(--color-text-muted, #6c757d);
    text-align: left;
  }

  .pressy-bookmark-delete {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    cursor: pointer;
    border-radius: 0.25rem;
    padding: 0;
    transition: color 0.15s, background 0.15s;
  }

  .pressy-bookmark-delete:hover {
    color: var(--color-danger);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-bookmark-add {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1.5px dashed var(--color-border, #dee2e6);
    border-radius: 0.375rem;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    transition: border-color 0.15s, color 0.15s;
  }

  .pressy-bookmark-add:hover {
    border-color: var(--color-accent, #212529);
    color: var(--color-text, #212529);
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
    .pressy-toc-backdrop,
    .pressy-toc-drawer {
      animation: none;
    }
    .pressy-offline-spinner {
      animation: none;
    }
  }
`;function Lo({title:e}){return o("div",{class:"pressy-chapter-divider",children:o("h2",{class:"pressy-chapter-divider-title",children:e})})}function Ao({children:e,bookTitle:t,prevChapter:r,nextChapter:s,showDropCap:i,onSaveProgress:n,onRestoreProgress:a,bookProgressPercent:d,initialContent:p,chapterMapData:u,currentChapterSlug:g,allChapters:c,bookBasePath:_,onChapterChange:v,mdxComponents:E,paywall:x,offlineProps:A,bookmarkProps:S}){const P=j(null),O=j(null),I=j(null),[w,J]=z(0),[h,$]=z(1),D=j(1);D.current=h;const[oe,V]=z(!1),K=j(!1),ye=j(null),Te=j(!1),m=j(typeof window<"u"&&new URLSearchParams(window.location.search).get("page")==="last"),[H,ne]=z(m.current||!!a),[G,Ut]=z([]),[Q,to]=z([]),[ee,Vt]=z(g||""),yt=j(new Set),Z=!!(u&&p&&g&&c);R(()=>{if(Z&&p&&g){const l=c.find(f=>f.slug===g);Ut([{slug:g,title:(l==null?void 0:l.title)||g,Content:p}]),Vt(g)}},[]),R(()=>{if(m.current){const l=new URL(window.location.href);l.searchParams.delete("page"),history.replaceState(null,"",l.pathname)}},[]);const[pe,He]=z(!1),[ae,fe]=z(!1),[le,Ee]=z(!1),[ro,oo]=z(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[Ne,so]=z(()=>{if(typeof localStorage<"u"){const l=localStorage.getItem("pressy-font-size");return l?parseFloat(l):1}return 1}),vt=U(l=>{l===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${l})`)},[]);R(()=>{Ne!==1&&vt(Ne)},[]),R(()=>{var y;const l=P.current;if(!l)return;const f=()=>{l.style.setProperty("--app-height",`${window.innerHeight}px`)};return f(),window.addEventListener("resize",f),(y=window.visualViewport)==null||y.addEventListener("resize",f),()=>{var b;window.removeEventListener("resize",f),(b=window.visualViewport)==null||b.removeEventListener("resize",f)}},[]);const no=U(l=>{oo(l),localStorage.setItem("pressy-theme",l);const f=l==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":l;document.documentElement.setAttribute("data-theme",f)},[]),[Yt,be]=z(!1),[qt,we]=z(0),[De,re]=z(null),_t=j(0),Xt=j(0),bt=j(0),wt=j(0),Ze=j(0),Qe=j(!1),We=j(!1),Jt=U(()=>{if(!Z)return;const l=I.current,f=O.current;if(!l||!f)return;const y=f.clientWidth;if(y===0)return;const b=l.querySelectorAll(".pressy-chapter-section"),k=[];b.forEach(T=>{const C=T.getAttribute("data-chapter-slug")||"",M=T.offsetLeft,Y=T.scrollWidth,F=Math.floor(M/y),ue=Math.max(F,Math.ceil((M+Y)/y)-1);k.push({slug:C,startPage:F,endPage:ue})}),to(k)},[Z]),he=U(()=>{const l=I.current,f=O.current;if(!l||!f)return;const y=f.clientWidth;if(y===0)return;l.style.columnWidth=`${y}px`,l.scrollWidth;const b=Math.max(1,Math.round(l.scrollWidth/y));$(b),V(!0),J(k=>Math.min(k,b-1)),Jt()},[Jt]),Kt=U(l=>{so(f=>{const y=Math.round(Math.max(.8,Math.min(1.5,f+l))*10)/10;return localStorage.setItem("pressy-font-size",String(y)),vt(y),setTimeout(()=>he(),100),y})},[vt,he]);R(()=>{const l=O.current;if(!l)return;const f=setTimeout(he,50),y=new ResizeObserver(()=>{he()});return y.observe(l),()=>{clearTimeout(f),y.disconnect()}},[he]),R(()=>{if(G.length>0){const l=setTimeout(he,50);return()=>clearTimeout(l)}},[G.length,he]),R(()=>{const l=I.current;if(!l)return;const f=l.querySelectorAll("img");if(f.length===0)return;const y=()=>he();return f.forEach(b=>{b.complete||(b.addEventListener("load",y),b.addEventListener("error",y))}),()=>{f.forEach(b=>{b.removeEventListener("load",y),b.removeEventListener("error",y)})}},[he,G.length]),R(()=>{if(!(K.current||!oe)){if(m.current){m.current=!1,Te.current=!0,J(h-1),K.current=!0,ne(!1);return}if(!a){K.current=!0,ne(!1);return}a().then(l=>{if(K.current){ne(!1);return}const f=D.current;if(!l||l.page<=0){K.current=!0,ne(!1);return}let y;if(l.totalPages<=1||Math.abs(l.totalPages-f)<=2)y=l.page;else{const k=l.page/(l.totalPages-1);y=Math.round(k*(f-1))}const b=Math.max(0,Math.min(y,f-1));Te.current=!0,J(b),K.current=!0,ne(!1)})}},[oe,h,a]),R(()=>{const l=I.current,f=O.current;if(!l||!f)return;const b=w*f.clientWidth-qt;Yt||Te.current?(l.style.transition="none",Te.current=!1):l.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",l.style.transform=`translateX(-${b}px)`},[w,qt,Yt]),R(()=>{const l=I.current,f=O.current;if(!l||!f)return;const y=f.getBoundingClientRect();l.querySelectorAll("a[href], button, input, select, textarea, [tabindex]").forEach(k=>{const T=k.getBoundingClientRect();if(T.left>=y.left-1&&T.right<=y.right+1){const M=k.getAttribute("data-original-tabindex");M!==null&&(M===""?k.removeAttribute("tabindex"):k.setAttribute("tabindex",M),k.removeAttribute("data-original-tabindex"))}else k.hasAttribute("data-original-tabindex")||k.setAttribute("data-original-tabindex",k.getAttribute("tabindex")||""),k.setAttribute("tabindex","-1")})},[w,h]),R(()=>{var Y;if(!Z||!u||Q.length===0)return;const l=Q.find(F=>F.slug===ee);if(!l||l.endPage-w>2)return;const{chapterOrder:y,chapterMap:b}=u,k=(Y=G[G.length-1])==null?void 0:Y.slug,T=y.indexOf(k);if(T===-1||T>=y.length-1)return;const C=y[T+1];if(yt.current.has(C)||G.some(F=>F.slug===C)||x&&!x.authorized&&y.indexOf(C)>=x.previewChapters)return;yt.current.add(C);const M=b[C];M&&M().then(F=>{const ue=F.default,ve=c.find(ie=>ie.slug===C);Ut(ie=>ie.some(Ue=>Ue.slug===C)?ie:[...ie,{slug:C,title:(ve==null?void 0:ve.title)||C,Content:ue}])}).catch(()=>{yt.current.delete(C)})},[w,ee,Q,Z,u,G,c,x]),R(()=>{if(!Z||Q.length===0||!_)return;const l=Q.find(k=>w>=k.startPage&&w<=k.endPage);if(!l||l.slug===ee)return;const f=ee;Vt(l.slug);const y=`${_}/${l.slug}`;history.replaceState(null,"",y);const b=c==null?void 0:c.find(k=>k.slug===l.slug);if(b&&(document.title=document.title.replace(/^[^|]+/,b.title+" ")),v&&f){const k=Q.find(T=>T.slug===f);if(k){const T=k.endPage-k.startPage+1;v(f,T-1,T)}}},[w,Q,ee,Z,_,c,v]),R(()=>{if(!(!n||!K.current))return ye.current&&clearTimeout(ye.current),ye.current=setTimeout(()=>{if(Z&&Q.length>0){const l=Q.find(f=>f.slug===ee);if(l){const f=w-l.startPage,y=l.endPage-l.startPage+1;n({page:f,totalPages:y,scrollPosition:0,activeChapterSlug:ee})}}else n({page:w,totalPages:h,scrollPosition:0})},300),()=>{ye.current&&clearTimeout(ye.current)}},[w,h,n,Z,Q,ee]),R(()=>{if(!n)return;const l=()=>{if(Z&&Q.length>0){const y=Q.find(b=>b.slug===ee);if(y){const b=w-y.startPage,k=y.endPage-y.startPage+1;n({page:b,totalPages:k,scrollPosition:0,activeChapterSlug:ee})}}else n({page:w,totalPages:h,scrollPosition:0})},f=()=>{document.visibilityState==="hidden"&&l()};return window.addEventListener("beforeunload",l),document.addEventListener("visibilitychange",f),()=>{window.removeEventListener("beforeunload",l),document.removeEventListener("visibilitychange",f)}},[w,h,n,Z,Q,ee]);const ce=(()=>{var b;if(!Z||!u)return s;const{chapterOrder:l}=u,f=(b=G[G.length-1])==null?void 0:b.slug;if(!(l.indexOf(f)<l.length-1))return _?{slug:_,title:"Table of Contents"}:s})(),ge=(()=>{var T;if(!Z||!u)return r;const{chapterOrder:l}=u,f=(T=G[0])==null?void 0:T.slug,y=l.indexOf(f);if(y<=0)return r;const b=l[y-1],k=c==null?void 0:c.find(C=>C.slug===b);return{slug:`${_}/${b}?page=last`,title:(k==null?void 0:k.title)||b}})(),ze=(()=>{var b;if(!x||x.authorized||!Z||!u||ce)return!1;const{chapterOrder:l}=u,f=(b=G[G.length-1])==null?void 0:b.slug,y=l.indexOf(f);return y>=0&&y<l.length-1})(),Gt=U(()=>{x&&(x.mode==="stripe"||x.price?window.location.href=`/api/checkout?book=${x.bookSlug}`:x.bookBasePath&&(window.location.href=`${x.bookBasePath}?purchase=true`))},[x]),ke=U(l=>{m.current=!1;const f=Math.max(0,Math.min(l,h-1));J(f)},[h]),Le=U(()=>{if(w>=h-1){ce?(sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ce.slug):ze&&re("paywall");return}ke(w+1)},[w,h,ce,ze,ke]),Ae=U(()=>{if(w<=0){ge&&(sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ge.slug);return}ke(w-1)},[w,ge,ke]),[et,xe]=z(!1),te=j(null),kt=U(()=>{xe(!0),te.current&&clearTimeout(te.current),te.current=setTimeout(()=>xe(!1),3e3)},[]),Zt=j(0),Fe=j(null),Qt=U(()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})},[]),tt=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,io=U(l=>{const f=l.target;if(f.closest(".pressy-settings-panel, .pressy-settings-toggle, .pressy-toc-drawer, .pressy-toc-toggle, .pressy-bookmarks-panel, .pressy-bookmarks-toggle")||f.closest('a, button, input, select, textarea, [role="button"]'))return;if(pe||ae||le){He(!1),fe(!1),Ee(!1);return}if(De==="paywall"){re(null);return}if(tt){et?(xe(!1),te.current&&clearTimeout(te.current)):kt();return}const y=P.current;if(!y)return;const b=y.getBoundingClientRect(),k=l.clientX-b.left,T=b.width*.15;if(k<T)Ae();else if(k>b.width-T)Le();else{const C=Date.now(),M=C-Zt.current;Zt.current=C,M<300?(Fe.current&&clearTimeout(Fe.current),Qt()):(Fe.current&&clearTimeout(Fe.current),Fe.current=setTimeout(()=>{et?(xe(!1),te.current&&clearTimeout(te.current)):kt()},300))}},[Le,Ae,et,tt,pe,ae,le,kt,Qt,De]),[er,rt]=z(null),ao=U(l=>{if(tt)return;const f=P.current;if(!f)return;const y=f.getBoundingClientRect(),b=l.clientX-y.left,k=l.clientY-y.top,T=y.width/3;b<T?rt("left"):b>T*2?rt("right"):rt(null),k>y.height*.75?(xe(!0),te.current&&clearTimeout(te.current)):!pe&&!ae&&!le&&(te.current&&clearTimeout(te.current),te.current=setTimeout(()=>xe(!1),600))},[tt,pe,ae,le]),lo=U(()=>{rt(null),!pe&&!ae&&!le&&(te.current&&clearTimeout(te.current),te.current=setTimeout(()=>xe(!1),600))},[pe,ae,le]);R(()=>{const l=f=>{const y=f.target.tagName;y==="INPUT"||y==="TEXTAREA"||y==="SELECT"||(f.key==="ArrowRight"||f.key===" "?(f.preventDefault(),Le()):f.key==="ArrowLeft"?(f.preventDefault(),Ae()):f.key==="Home"?(f.preventDefault(),ke(0)):f.key==="End"&&(f.preventDefault(),ke(h-1)))};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[Le,Ae,ke,h]),R(()=>{const l=P.current;if(!l)return;const f=T=>{const C=T.touches[0];_t.current=C.clientX,Xt.current=C.clientY,bt.current=C.clientX,wt.current=performance.now(),Ze.current=0,Qe.current=!1,We.current=!1},y=T=>{const C=T.touches[0],M=C.clientX-_t.current,Y=C.clientY-Xt.current;if(!Qe.current)if(Math.abs(M)>Math.abs(Y)&&Math.abs(M)>10)Qe.current=!0;else return Math.abs(Y)>Math.abs(M)&&Math.abs(Y)>10,void 0;T.preventDefault();const F=performance.now(),ue=F-wt.current;if(ue>0){const xt=(C.clientX-bt.current)/ue;Ze.current=.6*xt+.4*Ze.current}bt.current=C.clientX,wt.current=F;let ve=M;const ie=w===0,Ue=w>=h-1;if(ie&&M>0||Ue&&M<0){const xt=M>0?1:-1,uo=Math.abs(M);ve=xt*Math.sqrt(uo)*5,M>40&&ie&&ge?re("prev"):M<-40&&Ue&&ce?re("next"):M<-40&&Ue&&ze?re("paywall"):re(null)}else re(null);We.current=!0,be(!0),we(ve)},b=T=>{if(!Qe.current||!We.current){be(!1),we(0),re(null);return}const C=T.changedTouches[0].clientX-_t.current,M=Ze.current,Y=50,F=.3,ue=80,ve=w===0,ie=w>=h-1;if(ie&&C<-ue&&ce){be(!1),we(0),re(null),sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ce.slug;return}if(ie&&C<-ue&&ze){be(!1),we(0),re("paywall");return}if(ve&&C>ue&&ge){be(!1),we(0),re(null),sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ge.slug;return}C<-Y||M<-F?Le():(C>Y||M>F)&&Ae(),We.current=!1,be(!1),we(0),re(null)},k=()=>{We.current=!1,be(!1),we(0),re(null)};return l.addEventListener("touchstart",f,{passive:!0}),l.addEventListener("touchmove",y,{passive:!1}),l.addEventListener("touchend",b,{passive:!0}),l.addEventListener("touchcancel",k,{passive:!0}),()=>{l.removeEventListener("touchstart",f),l.removeEventListener("touchmove",y),l.removeEventListener("touchend",b),l.removeEventListener("touchcancel",k)}},[w,h,Le,Ae,ce,ge,ze,Gt]),(()=>{if(!Z||Q.length===0)return{chapterPage:w,chapterTotalPages:h};const l=Q.find(f=>f.slug===ee);return l?{chapterPage:w-l.startPage,chapterTotalPages:l.endPage-l.startPage+1}:{chapterPage:w,chapterTotalPages:h}})();const co=(()=>{var M;if(!c||c.length===0)return h>1?w/(h-1)*100:100;const l=c.reduce((Y,F)=>Y+(F.wordCount||0),0);if(l===0)return 0;const f=((M=G[0])==null?void 0:M.slug)||ee;let y=0,b=0,k=!1;for(const Y of c)if(Y.slug===f&&(k=!0),!k)y+=Y.wordCount||0;else if(G.some(F=>F.slug===Y.slug))b+=Y.wordCount||0;else break;const T=h>1?w/(h-1):0,C=y+T*b;return Math.min(100,C/l*100)})();return o("div",{class:"pressy-reader pressy-reader--paginated",ref:P,onClick:io,onMouseMove:ao,onMouseLeave:lo,children:[o("div",{class:"pressy-paginated-viewport",ref:O,style:H?{opacity:0}:{opacity:1,transition:"opacity 0.15s ease"},children:o("article",{ref:I,class:`pressy-prose pressy-prose--paginated ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:Z&&G.length>0?G.map(l=>o("section",{class:"pressy-chapter-section","data-chapter-slug":l.slug,children:[o(Lo,{title:l.title}),o(l.Content,{components:E||{}})]},l.slug)):e})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--prev ${er==="left"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"15 18 9 12 15 6"})})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--next ${er==="right"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"9 6 15 12 9 18"})})}),De==="prev"&&ge&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-arrow",children:"←"}),o("span",{class:"pressy-chapter-hint-text",children:ge.title})]}),De==="next"&&ce&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-text",children:ce.title}),o("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),De==="paywall"&&ze&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--next pressy-chapter-hint--paywall","aria-live":"polite",onClick:l=>{l.stopPropagation(),Gt()},children:[o("span",{class:"pressy-chapter-hint-icon",children:o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})})}),o("span",{class:"pressy-chapter-hint-text",children:x!=null&&x.price?`Purchase — ${x.price}`:"Unlock full book"}),o("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),ae&&c&&o("div",{class:"pressy-toc-backdrop",onClick:l=>{l.stopPropagation(),fe(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:l=>l.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:l=>{l.stopPropagation(),fe(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:[o("a",{href:_&&_.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>{sessionStorage.setItem("pressy-internal-nav","1"),fe(!1)},children:[o("span",{class:"pressy-toc-item-num",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:o("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),o("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),c.map((l,f)=>o("a",{href:`${_||""}/${l.slug}`,class:`pressy-toc-item ${l.slug===(ee||g)?"pressy-toc-item--active":""}`,onClick:()=>fe(!1),children:[o("span",{class:"pressy-toc-item-num",children:[f+1,"."]}),o("span",{class:"pressy-toc-item-title",children:l.title})]},l.slug))]})]})}),o("div",{class:`pressy-page-footer ${et||pe||ae||le?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-progress-bar",children:o("div",{class:"pressy-progress-fill",style:{width:`${co}%`}})}),o("div",{class:"pressy-footer-row",children:[c&&c.length>0&&o("button",{class:"pressy-toc-toggle",onClick:l=>{l.stopPropagation(),He(!1),Ee(!1),fe(!ae)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:l=>{l.stopPropagation(),c&&c.length>0&&(He(!1),Ee(!1),fe(!ae))},children:t}),o(Yr,{offlineProps:A}),S&&o("button",{class:"pressy-bookmarks-toggle",onClick:l=>{l.stopPropagation(),He(!1),fe(!1),Ee(!le)},"aria-label":"Bookmarks",children:o("svg",{viewBox:"0 0 24 24",fill:le?"currentColor":"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:o("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})})}),o("button",{class:"pressy-settings-toggle",onClick:l=>{l.stopPropagation(),fe(!1),Ee(!1),He(!pe)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${pe?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(l=>o("button",{class:`pressy-theme-btn ${ro===l.id?"pressy-theme-btn--active":""}`,onClick:f=>{f.stopPropagation(),no(l.id)},children:[l.icon,o("span",{children:l.label})]},l.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:l=>{l.stopPropagation(),Kt(-.1)},disabled:Ne<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(Ne*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:l=>{l.stopPropagation(),Kt(.1)},disabled:Ne>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]}),S&&o("div",{class:`pressy-bookmarks-panel ${le?"pressy-bookmarks-panel--open":""}`,children:[S.bookmarks.length===0?o("div",{class:"pressy-bookmarks-empty",children:"No bookmarks yet"}):o("div",{class:"pressy-bookmarks-list",children:S.bookmarks.map(l=>o("div",{class:"pressy-bookmark-item",onClick:f=>{f.stopPropagation(),S.onNavigateBookmark(l),Ee(!1)},children:[o("div",{class:"pressy-bookmark-info",children:[o("span",{class:"pressy-bookmark-chapter",children:l.chapterTitle}),o("span",{class:"pressy-bookmark-detail",children:[l.totalPages>0?`Page ${l.page+1} of ${l.totalPages}`:l.scrollPosition>0?`Scroll ${Math.round(l.scrollPosition)}px`:"Start"," · ",Vr(l.createdAt)]})]}),o("button",{class:"pressy-bookmark-delete",onClick:f=>{f.stopPropagation(),S.onDeleteBookmark(l.id)},"aria-label":"Delete bookmark",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},l.id))}),o("button",{class:"pressy-bookmark-add",onClick:l=>{var b;l.stopPropagation();const f=ee||g||"",y=((b=c==null?void 0:c.find(k=>k.slug===f))==null?void 0:b.title)||f;S.onAddBookmark({chapterSlug:f,chapterTitle:y,page:w,totalPages:h,scrollPosition:0})},children:"Bookmark this page"})]})]}),o(Fr,{}),o(Ur,{}),o("style",{children:zo})]})}function Ft({children:e,bookTitle:t,prevChapter:r,nextChapter:s,showDropCap:i=!0,paginationMode:n="scroll",onSaveProgress:a,onRestoreProgress:d,bookProgressPercent:p,initialContent:u,chapterMapData:g,currentChapterSlug:c,allChapters:_,bookBasePath:v,onChapterChange:E,mdxComponents:x,paywall:A,offlineProps:S,bookmarkProps:P}){return n==="paginated"?o(Ao,{bookTitle:t,prevChapter:r,nextChapter:s,showDropCap:i,onSaveProgress:a,onRestoreProgress:d,bookProgressPercent:p,initialContent:u,chapterMapData:g,currentChapterSlug:c,allChapters:_,bookBasePath:v,onChapterChange:E,mdxComponents:x,paywall:A,offlineProps:S,bookmarkProps:P,children:e}):o(Eo,{bookTitle:t,prevChapter:r,nextChapter:s,showDropCap:i,onSaveProgress:a,onRestoreProgress:d,allChapters:_,bookBasePath:v,currentChapterSlug:c,offlineProps:S,bookmarkProps:P,children:e})}function Mo({id:e,children:t}){const r=Pe(!1),s=j(null);return R(()=>{if(!r.value)return;function i(a){a.key==="Escape"&&(r.value=!1)}function n(a){s.current&&!s.current.contains(a.target)&&(r.value=!1)}return document.addEventListener("keydown",i),document.addEventListener("mousedown",n),()=>{document.removeEventListener("keydown",i),document.removeEventListener("mousedown",n)}},[r.value]),o("span",{class:"pressy-footnote-wrapper",ref:s,children:[o("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),o("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",hidden:!r.value,children:[t,o("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]})]})}function Ro({children:e,title:t}){return o("aside",{class:"pressy-aside",children:[t&&o("strong",{class:"pressy-aside-title",children:t}),o("div",{class:"pressy-aside-content",children:e})]})}function fr({src:e,alt:t,caption:r,wide:s,children:i}){if(!r&&!i)return o("img",{src:e,alt:t||"",loading:"lazy",decoding:"async"});const n=["pressy-figure",s&&"pressy-figure-wide"].filter(Boolean).join(" ");return o("figure",{class:n,children:[o("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),o("figcaption",{class:"pressy-figure-caption",children:r||i})]})}var Bo={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},Oo={note:"Note",tip:"Tip",warning:"Warning",important:"Important"},Io={note:"note",tip:"note",warning:"alert",important:"alert"};function jo({type:e="note",title:t,children:r}){return o("div",{class:`pressy-callout pressy-callout-${e}`,role:Io[e],children:[o("div",{class:"pressy-callout-header",children:[o("span",{class:"pressy-callout-icon",children:Bo[e]}),o("strong",{class:"pressy-callout-title",children:t||Oo[e]})]}),o("div",{class:"pressy-callout-content",children:r})]})}function hr({variant:e="asterisks"}){return o("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&o("span",{children:"* * *"}),e==="ornament"&&o("span",{children:"❧"})]})}var Ho={Footnote:Mo,Aside:Ro,Figure:fr,Callout:jo,SceneBreak:hr,img:fr,hr:e=>hr({variant:"line",...e})},No={};function pt(){return{...Ho,...No}}var qr="pressy-cached-books",Pt=de("online"),ft=de(null),$t=de(!1),Ge=de(null);function Do(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(qr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var se=de(Do());typeof window<"u"&&(Pt.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{Pt.value="online"}),window.addEventListener("offline",()=>{Pt.value="offline"}));function Wo(){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Ge.value=e}),window.addEventListener("appinstalled",()=>{Ge.value=null})}async function Fo(){const e=Ge.value;if(!e)return!1;e.prompt();const{outcome:t}=await e.userChoice;return Ge.value=null,t==="accepted"}async function Uo(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const s=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",Vo),navigator.serviceWorker.controller?$t.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{$t.value=!0}),s.addEventListener("updatefound",()=>{const i=s.installing;i&&i.addEventListener("statechange",()=>{i.state==="activated"&&($t.value=!0)})}),s}catch(s){return console.error("Service worker registration failed:",s),null}}function qe(){try{localStorage.setItem(qr,JSON.stringify([...se.value]))}catch{}}function Vo(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:s,total:i}=e.data;ft.value={bookSlug:r,current:s,total:i}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;ft.value=null;const s=new Set(se.value);s.add(r),se.value=s,qe()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,s=new Set;for(const i of r){const n=i.match(/\/books\/([^/]+)/);n&&s.add(n[1])}se.value=s,qe()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,s=new Set(se.value);s.delete(r),se.value=s,qe()}}async function Xr(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(i=>i.startsWith("http")?i:`${window.location.origin}${i}`);ft.value={bookSlug:e,current:0,total:r.length};const s=new Set(se.value);return s.add(e),se.value=s,qe(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}function Yo(e){return se.value.has(e)}function Jr(e){!("serviceWorker"in navigator)||!navigator.serviceWorker.controller||navigator.serviceWorker.controller.postMessage({type:"INVALIDATE_BOOK_PAGES",bookSlug:e})}async function qo(e){const t=new Set(se.value);if(t.delete(e),se.value=t,qe(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),s=await r.keys();for(const i of s)i.url.includes(`/books/${e}`)&&await r.delete(i);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var gr=de("/"),Kr=de("light"),mr=de(!navigator.onLine),Xo="pressy",Jo=2,Be="reading-progress",yr="unlocks",_e="bookmarks",nt=null;async function je(){return nt||new Promise((e,t)=>{const r=indexedDB.open(Xo,Jo);r.onerror=()=>t(r.error),r.onblocked=()=>t(new Error("Database upgrade blocked by open connection")),r.onsuccess=()=>{nt=r.result,e(nt)},r.onupgradeneeded=s=>{const i=s.target.result;i.objectStoreNames.contains(Be)||i.createObjectStore(Be,{keyPath:"chapterSlug"}),i.objectStoreNames.contains(yr)||i.createObjectStore(yr,{keyPath:"bookSlug"}),i.objectStoreNames.contains(_e)||i.createObjectStore(_e,{keyPath:"id"})}})}async function vr(e){const t=await je();return new Promise((r,s)=>{const a=t.transaction(Be,"readwrite").objectStore(Be).put(e);a.onsuccess=()=>r(),a.onerror=()=>s(a.error)})}async function lt(){const e=await je();return new Promise((t,r)=>{const n=e.transaction(Be,"readonly").objectStore(Be).getAll();n.onsuccess=()=>t(n.result||[]),n.onerror=()=>r(n.error)})}async function Ko(e){const t=await je();return new Promise((r,s)=>{const a=t.transaction(_e,"readwrite").objectStore(_e).put(e);a.onsuccess=()=>r(),a.onerror=()=>s(a.error)})}async function Go(e){const t=await je();return new Promise((r,s)=>{const a=t.transaction(_e,"readwrite").objectStore(_e).delete(e);a.onsuccess=()=>r(),a.onerror=()=>s(a.error)})}async function Ct(e){const t=await je();return new Promise((r,s)=>{const a=t.transaction(_e,"readonly").objectStore(_e).getAll();a.onsuccess=()=>{const p=(a.result||[]).filter(u=>u.bookSlug===e).sort((u,g)=>g.createdAt-u.createdAt);r(p)},a.onerror=()=>s(a.error)})}function Gr(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function _r(e){Kr.value=e,localStorage.setItem("pressy-theme",e);const t=e==="system"?Gr():e;document.documentElement.setAttribute("data-theme",t)}function Zo(){const e=localStorage.getItem("pressy-theme");e?_r(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&_r("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Kr.value==="system"&&document.documentElement.setAttribute("data-theme",Gr())})}function Qo(){window.addEventListener("online",()=>{mr.value=!1}),window.addEventListener("offline",()=>{mr.value=!0})}function es({book:e}){if(e.chapters.length===0)return null;const t=`${q}/books/${e.slug}/${e.chapters[0].slug}`,r=(()=>{try{const n=localStorage.getItem("pressy-last-read");if(n){const{bookSlug:a,chapterSlug:d}=JSON.parse(n);if(a===e.slug&&e.chapters.some(p=>p.slug===d))return{label:"Continue Reading",href:`${q}/books/${e.slug}/${d}`}}}catch{}return{label:"Start Reading",href:t}})(),[s,i]=z(r);return R(()=>{lt().then(n=>{const a=new Map(n.map(p=>[p.chapterSlug,p]));let d=null;for(const p of e.chapters){const u=a.get(p.slug);if(!u)continue;!(u.totalPages>0&&u.page>=u.totalPages-1)&&u.page>0&&(d=p)}d&&i({label:"Continue Reading",href:`${q}/books/${e.slug}/${d.slug}`})}).catch(()=>{})},[e]),o("a",{href:s.href,class:"pressy-cta",children:s.label})}function ts(){return Ge.value?o("button",{class:"pressy-cta pressy-cta-secondary",onClick:()=>Fo(),children:"Install"}):null}function Zr({book:e,prominent:t}){const r=e.metadata.paywall;return!(r!=null&&r.enabled)||!r.price?null:o("a",{href:`/api/checkout?book=${e.slug}`,class:`pressy-cta ${t?"":"pressy-cta-secondary"}`,children:["Purchase — ",r.price]})}function br({book:e}){const[t,r]=z("idle"),[s,i]=z(""),n=a=>{a.preventDefault(),s&&(r("sending"),fetch("/api/auth/recover",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,book:e.slug})}).then(d=>{r(d.ok?"success":"error")}).catch(()=>r("error")))};return t==="success"?o("p",{class:"pressy-recover-success",children:"Check your email for a recovery link."}):t==="error"?o("p",{class:"pressy-recover-error",children:"Something went wrong. Please try again."}):t==="idle"?o("button",{class:"pressy-recover-link",onClick:()=>r("form"),children:"Already purchased?"}):o("form",{class:"pressy-recover-form",onSubmit:n,children:[o("input",{type:"email",placeholder:"Email address",value:s,onInput:a=>i(a.target.value),required:!0}),o("button",{type:"submit",disabled:t==="sending",children:t==="sending"?"Sending…":"Send Recovery Link"})]})}function rs(e){var s,i;const[t,r]=z((s=e.metadata.paywall)!=null&&s.enabled?void 0:!0);return R(()=>{var n;if(!((n=e.metadata.paywall)!=null&&n.enabled)){r(!0);return}fetch(`/api/auth/status?book=${e.slug}`).then(a=>a.json()).then(a=>{r(a.authorized),a.authorized&&Jr(e.slug)}).catch(()=>r(!1))},[e.slug,(i=e.metadata.paywall)==null?void 0:i.enabled]),t}function os({book:e,showPurchasePrompt:t,authorized:r}){var s;return!((s=e.metadata.paywall)!=null&&s.enabled)||r?null:t?o("div",{class:"pressy-purchase-prompt",children:[o("p",{children:"This chapter requires purchase to read."}),o(Zr,{book:e,prominent:!0}),o(br,{book:e})]}):o(br,{book:e})}function Qr({book:e,articles:t}){const r=typeof window<"u"&&new URLSearchParams(window.location.search).get("purchase")==="true",s=rs(e),i=e.chapters.reduce((u,g)=>u+(g.wordCount||0),0),n=Math.ceil(i/200),a=e.chapters.length,d=e.metadata.publishDate?new Date(e.metadata.publishDate).getFullYear():null,p=i.toLocaleString();return o("div",{class:"pressy-home",children:[o("div",{class:"pressy-hero",children:[e.coverUrl&&o("img",{src:q+e.coverUrl,alt:`${e.metadata.title} cover`,class:"pressy-hero-cover"}),o("div",{class:"pressy-hero-text",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:e.metadata.title}),o("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&o("p",{class:"pressy-home-desc",children:e.metadata.description})]}),i>0&&o("div",{class:"pressy-stats",children:[o("span",{children:[a," chapter",a!==1?"s":""]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:[p," words"]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:["~",n," min"]}),d&&o($e,{children:[o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:["First published ",d]})]})]}),o(os,{book:e,showPurchasePrompt:r,authorized:s}),a>0&&o("div",{class:"pressy-cta-group",children:[o(es,{book:e}),!s&&!r&&o(Zr,{book:e}),o(ts,{})]})]})]}),t&&t.length>0&&o("section",{class:"pressy-home-section pressy-fade-sections",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:t.map(u=>o("a",{href:`${q}/articles/${u.slug}`,class:"pressy-chapter-link",children:u.metadata.title}))})]}),o("style",{children:eo})]})}function Tt(e){var r,s;if(e.books.length===1)return o(Qr,{book:e.books[0],articles:e.articles});const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return o("div",{class:"pressy-home",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:t}),((s=e.books[0])==null?void 0:s.metadata.description)&&o("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Books"}),o("nav",{class:"pressy-chapter-list",children:e.books.map(i=>o("a",{href:`${q}/books/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),e.articles.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:e.articles.map(i=>o("a",{href:`${q}/articles/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),o("style",{children:eo})]})}function Et(e,t,r,s,i){const n=e.chapters.reduce((p,u)=>p+(u.wordCount||0),0);if(n===0)return 0;const a=new Map(i.map(p=>[p.chapterSlug,p]));let d=0;for(const p of e.chapters){const u=p.wordCount||0;if(p.slug===t)s>0&&(d+=r/Math.max(1,s-1)*u);else{const g=a.get(p.slug);if(!g)continue;g.totalPages>0&&g.page>=g.totalPages-1?d+=u:g.page>0&&g.totalPages>0&&(d+=g.page/g.totalPages*u)}}return Math.min(100,d/n*100)}function ss({book:e,chapterSlug:t,chapter:r,prevChapter:s,nextChapter:i,paginationMode:n,Content:a,chapterMapData:d}){var I,w,J;const[p,u]=z([]),[g,c]=z(void 0),[_,v]=z((I=e.metadata.paywall)!=null&&I.enabled?void 0:!0);R(()=>{var h;if(!((h=e.metadata.paywall)!=null&&h.enabled)){v(!0);return}fetch(`/api/auth/status?book=${e.slug}`).then($=>$.json()).then($=>{v($.authorized),$.authorized&&Jr(e.slug)}).catch(()=>v(!1))},[e.slug,(w=e.metadata.paywall)==null?void 0:w.enabled]),R(()=>{lt().then(h=>{const $=Et(e,t,0,0,h);c($)})},[e,t]),R(()=>{Ct(e.slug).then(u).catch(()=>{})},[e.slug]);const E=h=>{const $={id:`${e.slug}:${h.chapterSlug}:${Date.now()}`,bookSlug:e.slug,chapterSlug:h.chapterSlug,chapterTitle:h.chapterTitle,page:h.page,totalPages:h.totalPages,scrollPosition:h.scrollPosition,createdAt:Date.now()};Ko($).then(()=>{Ct(e.slug).then(u)})},x=h=>{Go(h).then(()=>{Ct(e.slug).then(u)})},A=h=>{h.chapterSlug===t?(h.scrollPosition>0&&window.scrollTo(0,h.scrollPosition),localStorage.setItem("pressy-bookmark-restore",JSON.stringify({chapterSlug:h.chapterSlug,page:h.page,totalPages:h.totalPages,scrollPosition:h.scrollPosition})),window.location.reload()):(localStorage.setItem("pressy-bookmark-restore",JSON.stringify({chapterSlug:h.chapterSlug,page:h.page,totalPages:h.totalPages,scrollPosition:h.scrollPosition})),window.location.href=`${q}/books/${e.slug}/${h.chapterSlug}`)},S=h=>{const $=h.activeChapterSlug||t;localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:$,page:h.page,totalPages:h.totalPages,scrollPosition:h.scrollPosition})),vr({chapterSlug:$,page:h.page,totalPages:h.totalPages,scrollPosition:h.scrollPosition,timestamp:Date.now()}),h.totalPages>0&&lt().then(D=>{const oe=Et(e,$,h.page,h.totalPages,D);c(oe)})},P=async()=>{try{const h=localStorage.getItem("pressy-bookmark-restore");if(h){localStorage.removeItem("pressy-bookmark-restore");const $=JSON.parse(h);if($.chapterSlug===t)return{page:$.page,totalPages:$.totalPages,scrollPosition:$.scrollPosition||0}}}catch{}try{const h=localStorage.getItem("pressy-last-read");if(h){const $=JSON.parse(h);if($.chapterSlug===t&&$.page>0)return{page:$.page,totalPages:$.totalPages,scrollPosition:$.scrollPosition||0}}}catch{}return null},O=(h,$,D)=>{vr({chapterSlug:h,page:$,totalPages:D,scrollPosition:0,timestamp:Date.now()}),localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:h,page:$,totalPages:D})),lt().then(oe=>{const V=Et(e,h,$,D,oe);c(V)})};return R(()=>{if(s){const h=document.createElement("link");return h.rel="prefetch",h.href=s.slug,document.head.appendChild(h),()=>{document.head.removeChild(h)}}},[s]),o(Ft,{title:(r==null?void 0:r.title)||t,bookTitle:e.metadata.title,chapterSlug:t,prevChapter:s,nextChapter:i,paginationMode:n,onSaveProgress:S,onRestoreProgress:P,bookProgressPercent:g,initialContent:a,chapterMapData:d,currentChapterSlug:t,allChapters:e.chapters.map(h=>({slug:h.slug,title:h.title,wordCount:h.wordCount})),bookBasePath:`${q}/books/${e.slug}`,onChapterChange:O,mdxComponents:pt(),paywall:(J=e.metadata.paywall)!=null&&J.enabled?{previewChapters:e.metadata.paywall.previewChapters,authorized:_??!1,bookSlug:e.slug,price:e.metadata.paywall.price,mode:e.metadata.paywall.mode,bookBasePath:`${q}/books/${e.slug}`}:void 0,bookmarkProps:{bookmarks:p,onAddBookmark:E,onDeleteBookmark:x,onNavigateBookmark:A},offlineProps:{bookSlug:e.slug,chapterUrls:e.chapters.map(h=>`${q}/books/${e.slug}/${h.slug}`),cachedBooks:se,cacheProgress:ft,onDownload:Xr,onRemove:qo},children:o(a,{components:pt()})})}function ns(e,t,r,s,i){const n=t.split("/"),a=n[2],d=n[3],p=e.books.find(x=>x.slug===a),u=p?p.chapters.findIndex(x=>x.slug===d):-1,g=p==null?void 0:p.chapters[u],c=x=>`${q}/books/${a}/${x.slug}`,_=p&&u>0?{slug:c(p.chapters[u-1]),title:p.chapters[u-1].title}:p?{slug:`${q}/books/${a}`,title:p.metadata.title}:void 0,v=p&&u>=0&&u<p.chapters.length-1?{slug:c(p.chapters[u+1]),title:p.chapters[u+1].title}:p?{slug:`${q}/books/${a}`,title:p.metadata.title}:void 0,E=r;return p?o(ss,{book:p,chapterSlug:d,chapter:g,prevChapter:_,nextChapter:v,paginationMode:s,Content:E,chapterMapData:i}):o(Ft,{title:(g==null?void 0:g.title)||d,prevChapter:_,nextChapter:v,paginationMode:s,children:o(E,{components:pt()})})}function is(e,t,r){const s=t.split("/")[2],i=e.articles.find(a=>a.slug===s),n=r;return o(Ft,{title:(i==null?void 0:i.metadata.title)||s,children:o(n,{components:pt()})})}var eo=`
  @keyframes pressy-fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .pressy-home {
    max-width: 65ch;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    font-family: var(--font-body, Georgia, 'Times New Roman', serif);
    color: var(--color-text, #1a1a1a);
  }

  /* ── Hero layout ────────────────────────── */
  .pressy-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin-bottom: 2.5rem;
  }
  .pressy-hero-cover {
    max-width: 220px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.15);
    animation: pressy-fade-in 0.6s ease-out both;
  }
  .pressy-hero-text {
    animation: pressy-fade-in 0.6s ease-out 0.15s both;
  }

  /* ── Header ─────────────────────────────── */
  .pressy-home-header {
    margin-bottom: 1rem;
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

  /* ── Stats row ──────────────────────────── */
  .pressy-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.4em;
    font-size: 0.85rem;
    color: var(--color-text-muted, #666);
    margin-top: 1rem;
  }
  .pressy-stats-sep {
    opacity: 0.5;
  }

  /* ── CTA button ─────────────────────────── */
  .pressy-cta-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    align-items: center;
  }
  .pressy-cta {
    display: inline-block;
    margin-top: 1.25rem;
    padding: 0.75rem 1.75rem;
    background: var(--color-link, #2563eb);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: opacity 0.15s;
  }
  .pressy-cta:hover {
    opacity: 0.85;
  }
  .pressy-cta-secondary {
    background: transparent;
    color: var(--color-link, #2563eb);
    border: 1.5px solid var(--color-link, #2563eb);
    cursor: pointer;
    font-family: inherit;
  }
  .pressy-cta-secondary:hover {
    background: var(--color-link, #2563eb);
    color: #fff;
  }

  /* ── Purchase prompt ──────────────────── */
  .pressy-purchase-prompt {
    margin-top: 1.25rem;
    padding: 1.25rem;
    background: var(--color-bg-subtle, #f5f5f5);
    border-radius: 0.5rem;
    border: 1.5px solid var(--color-link, #2563eb);
    text-align: center;
  }
  .pressy-purchase-prompt p {
    margin: 0 0 0.75rem;
    font-weight: 500;
  }
  .pressy-purchase-prompt .pressy-cta {
    margin-top: 0;
  }

  /* ── Recover link ────────────────────────── */
  .pressy-recover-link {
    display: inline-block;
    margin-top: 0.75rem;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    font-size: 0.85rem;
    color: var(--color-link, #2563eb);
    text-decoration: underline;
    cursor: pointer;
  }
  .pressy-recover-link:hover {
    opacity: 0.75;
  }
  .pressy-recover-form {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;
    align-items: center;
  }
  .pressy-recover-form input {
    flex: 1;
    min-width: 180px;
    padding: 0.5rem 0.75rem;
    font: inherit;
    font-size: 0.9rem;
    border: 1.5px solid var(--color-border, #e5e5e5);
    border-radius: 0.375rem;
    background: var(--color-bg, #fff);
    color: var(--color-text, #1a1a1a);
  }
  .pressy-recover-form button {
    padding: 0.5rem 1rem;
    font: inherit;
    font-size: 0.9rem;
    font-weight: 600;
    background: var(--color-link, #2563eb);
    color: #fff;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: opacity 0.15s;
  }
  .pressy-recover-form button:hover {
    opacity: 0.85;
  }
  .pressy-recover-form button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .pressy-recover-success {
    margin-top: 0.75rem;
    font-size: 0.85rem;
    color: var(--color-link, #2563eb);
  }
  .pressy-recover-error {
    margin-top: 0.75rem;
    font-size: 0.85rem;
    color: #dc2626;
  }

  /* ── Sections below hero ────────────────── */
  .pressy-fade-sections {
    animation: pressy-fade-in 0.6s ease-out 0.3s both;
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

  /* ── Reduced motion ─────────────────────── */
  @media (prefers-reduced-motion: reduce) {
    .pressy-hero-cover,
    .pressy-hero-text,
    .pressy-fade-sections {
      animation: none;
    }
  }
`;function as(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,s=e.endsWith("/")?e.slice(0,-1):e;if(s===""||s==="/")return r.replace(/\/index\.html$/,"")||"";const i=r.indexOf(s);return i>0?r.slice(0,i):""}var q="";function cs(e,t,r){var a;q=as(e.route),gr.value=e.route;const s=!sessionStorage.getItem("pressy-session-active");sessionStorage.setItem("pressy-session-active","1"),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&sessionStorage.removeItem("pressy-session-active")});const i=sessionStorage.getItem("pressy-internal-nav");if(sessionStorage.removeItem("pressy-internal-nav"),s&&!i&&(e.routeType==="home"||e.routeType==="book")){const d=localStorage.getItem("pressy-last-read");if(d)try{const{bookSlug:p,chapterSlug:u}=JSON.parse(d),g=e.manifest.books.find(c=>c.slug===p);if(g!=null&&g.chapters.some(c=>c.slug===u)){window.location.replace(`${q}/books/${p}/${u}`);return}}catch{}}Zo(),Qo(),Wo(),je(),Uo(q),window.addEventListener("appinstalled",()=>{for(const d of e.manifest.books){if(Yo(d.slug))continue;const p=d.chapters.map(u=>`${q}/books/${d.slug}/${u.slug}`);Xr(d.slug,p)}}),window.addEventListener("popstate",()=>{gr.value=window.location.pathname}),document.addEventListener("click",d=>{const p=d.target.closest("a");if(!p)return;const u=p.getAttribute("href");if(u&&!(u.startsWith("http")||u.startsWith("#"))&&u.startsWith(e.route+"#")){d.preventDefault();const g=u.slice(u.indexOf("#")),c=document.querySelector(g);c&&c.scrollIntoView({behavior:"smooth"});return}});let n;switch(e.routeType){case"home":n=Tt(e.manifest);break;case"book":{const d=e.route.split("/")[2],p=e.manifest.books.find(u=>u.slug===d);n=p?o(Qr,{book:p}):o("div",{children:"Book not found"});break}case"chapter":n=t?ns(e.manifest,e.route,t,(a=e.pagination)==null?void 0:a.defaultMode,r):o("div",{children:"Loading..."});break;case"article":n=t?is(e.manifest,e.route,t):o("div",{children:"Loading..."});break;case"books":n=Tt(e.manifest);break;case"articles":n=Tt(e.manifest);break;default:n=o("div",{children:"Page not found"})}vo(n,document.getElementById("app"))}export{cs as h,$e as k,o as u};
