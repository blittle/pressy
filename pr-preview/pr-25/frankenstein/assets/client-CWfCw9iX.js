var pt,M,br,_r,we,Qt,kr,wr,xr,Mt,zt,Tt,Ve={},Sr=[],co=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ft=Array.isArray;function me(e,t){for(var r in t)e[r]=t[r];return e}function Rt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function uo(e,t,r){var s,i,n,a={};for(n in t)n=="key"?s=t[n]:n=="ref"?i=t[n]:a[n]=t[n];if(arguments.length>2&&(a.children=arguments.length>3?pt.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)a[n]===void 0&&(a[n]=e.defaultProps[n]);return st(e,a,s,i,null)}function st(e,t,r,s,i){var n={type:e,props:t,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++br,__i:-1,__u:0};return i==null&&M.vnode!=null&&M.vnode(n),n}function Se(e){return e.children}function We(e,t){this.props=e,this.context=t}function Me(e,t){if(t==null)return e.__?Me(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?Me(e):null}function Pr(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Pr(e)}}function er(e){(!e.__d&&(e.__d=!0)&&we.push(e)&&!at.__r++||Qt!=M.debounceRendering)&&((Qt=M.debounceRendering)||kr)(at)}function at(){for(var e,t,r,s,i,n,a,d=1;we.length;)we.length>d&&we.sort(wr),e=we.shift(),d=we.length,e.__d&&(r=void 0,s=void 0,i=(s=(t=e).__v).__e,n=[],a=[],t.__P&&((r=me({},s)).__v=s.__v+1,M.vnode&&M.vnode(r),Bt(t.__P,r,s,t.__n,t.__P.namespaceURI,32&s.__u?[i]:null,n,i??Me(s),!!(32&s.__u),a),r.__v=s.__v,r.__.__k[r.__i]=r,zr(n,r,a),s.__e=s.__=null,r.__e!=i&&Pr(r)));at.__r=0}function $r(e,t,r,s,i,n,a,d,p,u,g){var l,b,v,T,z,A,x,S=s&&s.__k||Sr,O=t.length;for(p=po(r,t,S,p,O),l=0;l<O;l++)(v=r.__k[l])!=null&&(b=v.__i==-1?Ve:S[v.__i]||Ve,v.__i=l,A=Bt(e,v,b,i,n,a,d,p,u,g),T=v.__e,v.ref&&b.ref!=v.ref&&(b.ref&&Ot(b.ref,null,v),g.push(v.ref,v.__c||T,v)),z==null&&T!=null&&(z=T),(x=!!(4&v.__u))||b.__k===v.__k?p=Cr(v,p,e,x):typeof v.type=="function"&&A!==void 0?p=A:T&&(p=T.nextSibling),v.__u&=-7);return r.__e=z,p}function po(e,t,r,s,i){var n,a,d,p,u,g=r.length,l=g,b=0;for(e.__k=new Array(i),n=0;n<i;n++)(a=t[n])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[n]=st(null,a,null,null,null):ft(a)?a=e.__k[n]=st(Se,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[n]=st(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[n]=a,p=n+b,a.__=e,a.__b=e.__b+1,d=null,(u=a.__i=fo(a,r,p,l))!=-1&&(l--,(d=r[u])&&(d.__u|=2)),d==null||d.__v==null?(u==-1&&(i>g?b--:i<g&&b++),typeof a.type!="function"&&(a.__u|=4)):u!=p&&(u==p-1?b--:u==p+1?b++:(u>p?b--:b++,a.__u|=4))):e.__k[n]=null;if(l)for(n=0;n<g;n++)(d=r[n])!=null&&!(2&d.__u)&&(d.__e==s&&(s=Me(d)),Er(d,d));return s}function Cr(e,t,r,s){var i,n;if(typeof e.type=="function"){for(i=e.__k,n=0;i&&n<i.length;n++)i[n]&&(i[n].__=e,t=Cr(i[n],t,r,s));return t}e.__e!=t&&(s&&(t&&e.type&&!t.parentNode&&(t=Me(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function fo(e,t,r,s){var i,n,a,d=e.key,p=e.type,u=t[r],g=u!=null&&(2&u.__u)==0;if(u===null&&d==null||g&&d==u.key&&p==u.type)return r;if(s>(g?1:0)){for(i=r-1,n=r+1;i>=0||n<t.length;)if((u=t[a=i>=0?i--:n++])!=null&&!(2&u.__u)&&d==u.key&&p==u.type)return a}return-1}function tr(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||co.test(t)?r:r+"px"}function tt(e,t,r,s,i){var n,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)r&&t in r||tr(e.style,t,"");if(r)for(t in r)s&&r[t]==s[t]||tr(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")n=t!=(t=t.replace(xr,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=r,r?s?r.u=s.u:(r.u=Mt,e.addEventListener(t,n?Tt:zt,n)):e.removeEventListener(t,n?Tt:zt,n);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function rr(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Mt++;else if(t.t<r.u)return;return r(M.event?M.event(t):t)}}}function Bt(e,t,r,s,i,n,a,d,p,u){var g,l,b,v,T,z,A,x,S,O,I,k,J,f,P,H,re,U=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(p=!!(32&r.__u),n=[d=t.__e=r.__e]),(g=M.__b)&&g(t);e:if(typeof U=="function")try{if(x=t.props,S="prototype"in U&&U.prototype.render,O=(g=U.contextType)&&s[g.__c],I=g?O?O.props.value:g.__:s,r.__c?A=(l=t.__c=r.__c).__=l.__E:(S?t.__c=l=new U(x,I):(t.__c=l=new We(x,I),l.constructor=U,l.render=go),O&&O.sub(l),l.state||(l.state={}),l.__n=s,b=l.__d=!0,l.__h=[],l._sb=[]),S&&l.__s==null&&(l.__s=l.state),S&&U.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=me({},l.__s)),me(l.__s,U.getDerivedStateFromProps(x,l.__s))),v=l.props,T=l.state,l.__v=t,b)S&&U.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),S&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(S&&U.getDerivedStateFromProps==null&&x!==v&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(x,I),t.__v==r.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(x,l.__s,I)===!1){for(t.__v!=r.__v&&(l.props=x,l.state=l.__s,l.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(K){K&&(K.__=t)}),k=0;k<l._sb.length;k++)l.__h.push(l._sb[k]);l._sb=[],l.__h.length&&a.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(x,l.__s,I),S&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(v,T,z)})}if(l.context=I,l.props=x,l.__P=e,l.__e=!1,J=M.__r,f=0,S){for(l.state=l.__s,l.__d=!1,J&&J(t),g=l.render(l.props,l.state,l.context),P=0;P<l._sb.length;P++)l.__h.push(l._sb[P]);l._sb=[]}else do l.__d=!1,J&&J(t),g=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++f<25);l.state=l.__s,l.getChildContext!=null&&(s=me(me({},s),l.getChildContext())),S&&!b&&l.getSnapshotBeforeUpdate!=null&&(z=l.getSnapshotBeforeUpdate(v,T)),H=g,g!=null&&g.type===Se&&g.key==null&&(H=Tr(g.props.children)),d=$r(e,ft(H)?H:[H],t,r,s,i,n,a,d,p,u),l.base=t.__e,t.__u&=-161,l.__h.length&&a.push(l),A&&(l.__E=l.__=null)}catch(K){if(t.__v=null,p||n!=null)if(K.then){for(t.__u|=p?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;n[n.indexOf(d)]=null,t.__e=d}else{for(re=n.length;re--;)Rt(n[re]);Et(t)}else t.__e=r.__e,t.__k=r.__k,K.then||Et(t);M.__e(K,t,r)}else n==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=ho(r.__e,t,r,s,i,n,a,p,u);return(g=M.diffed)&&g(t),128&t.__u?void 0:d}function Et(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Et)}function zr(e,t,r){for(var s=0;s<r.length;s++)Ot(r[s],r[++s],r[++s]);M.__c&&M.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(n){n.call(i)})}catch(n){M.__e(n,i.__v)}})}function Tr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:ft(e)?e.map(Tr):me({},e)}function ho(e,t,r,s,i,n,a,d,p){var u,g,l,b,v,T,z,A=r.props||Ve,x=t.props,S=t.type;if(S=="svg"?i="http://www.w3.org/2000/svg":S=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),n!=null){for(u=0;u<n.length;u++)if((v=n[u])&&"setAttribute"in v==!!S&&(S?v.localName==S:v.nodeType==3)){e=v,n[u]=null;break}}if(e==null){if(S==null)return document.createTextNode(x);e=document.createElementNS(i,S,x.is&&x),d&&(M.__m&&M.__m(t,n),d=!1),n=null}if(S==null)A===x||d&&e.data==x||(e.data=x);else{if(n=n&&pt.call(e.childNodes),!d&&n!=null)for(A={},u=0;u<e.attributes.length;u++)A[(v=e.attributes[u]).name]=v.value;for(u in A)if(v=A[u],u!="children"){if(u=="dangerouslySetInnerHTML")l=v;else if(!(u in x)){if(u=="value"&&"defaultValue"in x||u=="checked"&&"defaultChecked"in x)continue;tt(e,u,null,v,i)}}for(u in x)v=x[u],u=="children"?b=v:u=="dangerouslySetInnerHTML"?g=v:u=="value"?T=v:u=="checked"?z=v:d&&typeof v!="function"||A[u]===v||tt(e,u,v,A[u],i);if(g)d||l&&(g.__html==l.__html||g.__html==e.innerHTML)||(e.innerHTML=g.__html),t.__k=[];else if(l&&(e.innerHTML=""),$r(t.type=="template"?e.content:e,ft(b)?b:[b],t,r,s,S=="foreignObject"?"http://www.w3.org/1999/xhtml":i,n,a,n?n[0]:r.__k&&Me(r,0),d,p),n!=null)for(u=n.length;u--;)Rt(n[u]);d||(u="value",S=="progress"&&T==null?e.removeAttribute("value"):T!=null&&(T!==e[u]||S=="progress"&&!T||S=="option"&&T!=A[u])&&tt(e,u,T,A[u],i),u="checked",z!=null&&z!=e[u]&&tt(e,u,z,A[u],i))}return e}function Ot(e,t,r){try{if(typeof e=="function"){var s=typeof e.__u=="function";s&&e.__u(),s&&t==null||(e.__u=e(t))}else e.current=t}catch(i){M.__e(i,r)}}function Er(e,t,r){var s,i;if(M.unmount&&M.unmount(e),(s=e.ref)&&(s.current&&s.current!=e.__e||Ot(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(n){M.__e(n,t)}s.base=s.__P=null}if(s=e.__k)for(i=0;i<s.length;i++)s[i]&&Er(s[i],t,r||typeof e.type!="function");r||Rt(e.__e),e.__c=e.__=e.__e=void 0}function go(e,t,r){return this.constructor(e,r)}function mo(e,t,r){var s,i,n,a;t==document&&(t=document.documentElement),M.__&&M.__(e,t),i=(s=!1)?null:t.__k,n=[],a=[],Bt(t,e=t.__k=uo(Se,null,[e]),i||Ve,Ve,t.namespaceURI,i?null:t.firstChild?pt.call(t.childNodes):null,n,i?i.__e:t.firstChild,s,a),zr(n,e,a)}pt=Sr.slice,M={__e:function(e,t,r,s){for(var i,n,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,s||{}),a=i.__d),a)return i.__E=i}catch(d){e=d}throw e}},br=0,_r=function(e){return e!=null&&e.constructor===void 0},We.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=me({},this.state),typeof e=="function"&&(e=e(me({},r),this.props)),e&&me(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),er(this))},We.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),er(this))},We.prototype.render=Se,we=[],kr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,wr=function(e,t){return e.__v.__b-t.__v.__b},at.__r=0,xr=/(PointerCapture)$|Capture$/i,Mt=0,zt=rr(!1),Tt=rr(!0);var Ye,D,wt,or,qe=0,Lr=[],W=M,sr=W.__b,nr=W.__r,ir=W.diffed,ar=W.__c,lr=W.unmount,cr=W.__;function It(e,t){W.__h&&W.__h(D,e,qe||t),qe=0;var r=D.__H||(D.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function E(e){return qe=1,yo(Mr,e)}function yo(e,t,r){var s=It(Ye++,2);if(s.t=e,!s.__c&&(s.__=[Mr(void 0,t),function(d){var p=s.__N?s.__N[0]:s.__[0],u=s.t(p,d);p!==u&&(s.__N=[u,s.__[1]],s.__c.setState({}))}],s.__c=D,!D.__f)){var i=function(d,p,u){if(!s.__c.__H)return!0;var g=s.__c.__H.__.filter(function(b){return!!b.__c});if(g.every(function(b){return!b.__N}))return!n||n.call(this,d,p,u);var l=s.__c.props!==d;return g.forEach(function(b){if(b.__N){var v=b.__[0];b.__=b.__N,b.__N=void 0,v!==b.__[0]&&(l=!0)}}),n&&n.call(this,d,p,u)||l};D.__f=!0;var n=D.shouldComponentUpdate,a=D.componentWillUpdate;D.componentWillUpdate=function(d,p,u){if(this.__e){var g=n;n=void 0,i(d,p,u),n=g}a&&a.call(this,d,p,u)},D.shouldComponentUpdate=i}return s.__N||s.__}function B(e,t){var r=It(Ye++,3);!W.__s&&Ar(r.__H,t)&&(r.__=e,r.u=t,D.__H.__h.push(r))}function N(e){return qe=5,ht(function(){return{current:e}},[])}function ht(e,t){var r=It(Ye++,7);return Ar(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function Y(e,t){return qe=8,ht(function(){return e},t)}function vo(){for(var e;e=Lr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(nt),e.__H.__h.forEach(Lt),e.__H.__h=[]}catch(t){e.__H.__h=[],W.__e(t,e.__v)}}W.__b=function(e){D=null,sr&&sr(e)},W.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),cr&&cr(e,t)},W.__r=function(e){nr&&nr(e),Ye=0;var t=(D=e.__c).__H;t&&(wt===D?(t.__h=[],D.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(nt),t.__h.forEach(Lt),t.__h=[],Ye=0)),wt=D},W.diffed=function(e){ir&&ir(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Lr.push(t)!==1&&or===W.requestAnimationFrame||((or=W.requestAnimationFrame)||bo)(vo)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),wt=D=null},W.__c=function(e,t){t.some(function(r){try{r.__h.forEach(nt),r.__h=r.__h.filter(function(s){return!s.__||Lt(s)})}catch(s){t.some(function(i){i.__h&&(i.__h=[])}),t=[],W.__e(s,r.__v)}}),ar&&ar(e,t)},W.unmount=function(e){lr&&lr(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(s){try{nt(s)}catch(i){t=i}}),r.__H=void 0,t&&W.__e(t,r.__v))};var ur=typeof requestAnimationFrame=="function";function bo(e){var t,r=function(){clearTimeout(s),ur&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(r,35);ur&&(t=requestAnimationFrame(r))}function nt(e){var t=D,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),D=t}function Lt(e){var t=D;e.__c=e.__(),D=t}function Ar(e,t){return!e||e.length!==t.length||t.some(function(r,s){return r!==e[s]})}function Mr(e,t){return typeof t=="function"?t(e):t}var _o=Symbol.for("preact-signals");function jt(){if(Ae>1)Ae--;else{for(var e,t=!1;Fe!==void 0;){var r=Fe;for(Fe=void 0,At++;r!==void 0;){var s=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&Or(r))try{r.c()}catch(i){t||(e=i,t=!0)}r=s}}if(At=0,Ae--,t)throw e}}var L=void 0;function Rr(e){var t=L;L=void 0;try{return e()}finally{L=t}}var Fe=void 0,Ae=0,At=0,lt=0;function Br(e){if(L!==void 0){var t=e.n;if(t===void 0||t.t!==L)return t={i:0,S:e,p:L.s,n:void 0,t:L,e:void 0,x:void 0,r:t},L.s!==void 0&&(L.s.n=t),L.s=t,e.n=t,32&L.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=L.s,t.n=void 0,L.s.n=t,L.s=t),t}}function X(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}X.prototype.brand=_o;X.prototype.h=function(){return!0};X.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:Rr(function(){var s;(s=t.W)==null||s.call(t)}))};X.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,s=e.x;r!==void 0&&(r.x=s,e.e=void 0),s!==void 0&&(s.e=r,e.x=void 0),e===this.t&&(this.t=s,s===void 0&&Rr(function(){var i;(i=t.Z)==null||i.call(t)}))}};X.prototype.subscribe=function(e){var t=this;return Dt(function(){var r=t.value,s=L;L=void 0;try{e(r)}finally{L=s}},{name:"sub"})};X.prototype.valueOf=function(){return this.value};X.prototype.toString=function(){return this.value+""};X.prototype.toJSON=function(){return this.value};X.prototype.peek=function(){var e=L;L=void 0;try{return this.value}finally{L=e}};Object.defineProperty(X.prototype,"value",{get:function(){var e=Br(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(At>100)throw new Error("Cycle detected");this.v=e,this.i++,lt++,Ae++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{jt()}}}});function ae(e,t){return new X(e,t)}function Or(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Ir(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function jr(e){for(var t=e.s,r=void 0;t!==void 0;){var s=t.p;t.i===-1?(t.S.U(t),s!==void 0&&(s.n=t.n),t.n!==void 0&&(t.n.p=s)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=s}e.s=r}function Pe(e,t){X.call(this,void 0),this.x=e,this.s=void 0,this.g=lt-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}Pe.prototype=new X;Pe.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===lt))return!0;if(this.g=lt,this.f|=1,this.i>0&&!Or(this))return this.f&=-2,!0;var e=L;try{Ir(this),L=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return L=e,jr(this),this.f&=-2,!0};Pe.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}X.prototype.S.call(this,e)};Pe.prototype.U=function(e){if(this.t!==void 0&&(X.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};Pe.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(Pe.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Br(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function ko(e,t){return new Pe(e,t)}function Nr(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Ae++;var r=L;L=void 0;try{t()}catch(s){throw e.f&=-2,e.f|=8,Nt(e),s}finally{L=r,jt()}}}function Nt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Nr(e)}function wo(e){if(L!==this)throw new Error("Out-of-order effect");jr(this),L=e,this.f&=-2,8&this.f&&Nt(this),jt()}function Be(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}Be.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Be.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Nr(this),Ir(this),Ae++;var e=L;return L=this,wo.bind(this,e)};Be.prototype.N=function(){2&this.f||(this.f|=2,this.o=Fe,Fe=this)};Be.prototype.d=function(){this.f|=8,1&this.f||Nt(this)};Be.prototype.dispose=function(){this.d()};function Dt(e,t){var r=new Be(e,t);try{r.c()}catch(i){throw r.d(),i}var s=r.d.bind(r);return s[Symbol.dispose]=s,s}var rt;function Oe(e,t){M[e]=t.bind(null,M[e]||function(){})}function ct(e){if(rt){var t=rt;rt=void 0,t()}rt=e&&e.S()}function Dr(e){var t=this,r=e.data,s=xe(r);s.value=r;var i=ht(function(){for(var n=t.__v;n=n.__;)if(n.__c){n.__c.__$f|=4;break}return t.__$u.c=function(){var a,d=t.__$u.S(),p=i.value;d(),_r(p)||((a=t.base)==null?void 0:a.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=p},ko(function(){var a=s.value.value;return a===0?0:a===!0?"":a||""})},[]);return i.value}Dr.displayName="_st";Object.defineProperties(X.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Dr},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Oe("__b",function(e,t){if(typeof t.type=="string"){var r,s=t.props;for(var i in s)if(i!=="children"){var n=s[i];n instanceof X&&(r||(t.__np=r={}),r[i]=n,s[i]=n.peek())}}e(t)});Oe("__r",function(e,t){e(t),ct();var r,s=t.__c;s&&(s.__$f&=-2,(r=s.__$u)===void 0&&(s.__$u=r=function(i){var n;return Dt(function(){n=this}),n.c=function(){s.__$f|=1,s.setState({})},n}())),ct(r)});Oe("__e",function(e,t,r,s){ct(),e(t,r,s)});Oe("diffed",function(e,t){ct();var r;if(typeof t.type=="string"&&(r=t.__e)){var s=t.__np,i=t.props;if(s){var n=r.U;if(n)for(var a in n){var d=n[a];d!==void 0&&!(a in s)&&(d.d(),n[a]=void 0)}else r.U=n={};for(var p in s){var u=n[p],g=s[p];u===void 0?(u=xo(r,p,g,i),n[p]=u):u.o(g,i)}}}e(t)});function xo(e,t,r,s){var i=t in e&&e.ownerSVGElement===void 0,n=ae(r);return{o:function(a,d){n.value=a,s=d},d:Dt(function(){var a=n.value.value;s[t]!==a&&(s[t]=a,i?e[t]=a:a?e.setAttribute(t,a):e.removeAttribute(t))})}}Oe("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var s=r.U;if(s){r.U=void 0;for(var i in s){var n=s[i];n&&n.d()}}}}else{var a=t.__c;if(a){var d=a.__$u;d&&(a.__$u=void 0,d.d())}}e(t)});Oe("__h",function(e,t,r,s){(s<3||s===9)&&(t.__$f|=2),e(t,r,s)});We.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,s=r&&r.s!==void 0;for(var i in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(s||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(s||4&this.__$f)||3&this.__$f)return!0;for(var n in e)if(n!=="__source"&&e[n]!==this.props[n])return!0;for(var a in this.props)if(!(a in e))return!0;return!1};function xe(e){return ht(function(){return ae(e)},[])}var So=0;function o(e,t,r,s,i,n){t||(t={});var a,d,p=t;if("ref"in p)for(d in p={},t)d=="ref"?a=t[d]:p[d]=t[d];var u={type:e,props:p,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--So,__i:-1,__u:0,__source:i,__self:n};if(typeof e=="function"&&(a=e.defaultProps))for(d in a)p[d]===void 0&&(p[d]=a[d]);return M.vnode&&M.vnode(u),u}function Po({prev:e,next:t}){return!e&&!t?null:o("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[o("div",{class:"pressy-nav-inner",children:[e?o("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[o("span",{class:"pressy-nav-direction",children:"Previous"}),o("span",{class:"pressy-nav-title",children:e.title})]}):o("div",{class:"pressy-nav-placeholder"}),t?o("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[o("span",{class:"pressy-nav-direction",children:"Next"}),o("span",{class:"pressy-nav-title",children:t.title})]}):o("div",{class:"pressy-nav-placeholder"})]}),o("style",{children:`
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
      `})]})}function Hr(){const e=xe(!1),t=xe({x:0,y:0}),r=xe(""),s=N(null);B(()=>{const d=()=>{const p=window.getSelection();if(!p||p.isCollapsed){e.value=!1;return}const u=p.toString().trim();if(u.length<5){e.value=!1;return}r.value=u;const l=p.getRangeAt(0).getBoundingClientRect();t.value={x:l.left+l.width/2,y:l.top-10},e.value=!0};return document.addEventListener("selectionchange",d),document.addEventListener("mouseup",d),()=>{document.removeEventListener("selectionchange",d),document.removeEventListener("mouseup",d)}},[]);const i=()=>{const d=encodeURIComponent(r.value),p=new URL(window.location.href);return p.hash=`:~:text=${d}`,p.toString()},n=async()=>{const d=i(),p=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:p,url:d}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${p}

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
      `})]}):null}function Wr(){const e=xe(!navigator.onLine),t=xe(!1);return B(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},s=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",s),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",s)}},[]),t.value?o("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?o(Se,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),o("span",{children:"You're offline"})]}):o(Se,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),o("span",{children:"Back online"})]}),o("style",{children:`
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
      `})]}):null}var $o=`
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
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
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
    background: rgba(0, 0, 0, 0.3);
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
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
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
    color: #16a34a;
  }

  .pressy-page-footer--scroll .pressy-offline-icon--cached:hover {
    color: #dc2626;
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
    color: #dc2626;
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
`;function Fr(e){const t=Math.floor((Date.now()-e)/1e3);if(t<60)return"just now";const r=Math.floor(t/60);if(r<60)return`${r}m ago`;const s=Math.floor(r/60);if(s<24)return`${s}h ago`;const i=Math.floor(s/24);return i<30?`${i}d ago`:`${Math.floor(i/30)}mo ago`}function Ur({offlineProps:e}){if(!e)return null;const{bookSlug:t,chapterUrls:r,cachedBooks:s,onDownload:i,onRemove:n}=e;return s.value.has(t)?o("button",{class:"pressy-offline-icon pressy-offline-icon--cached",onClick:d=>{d.stopPropagation(),n(t)},"aria-label":"Available offline. Click to remove.",title:"Available offline. Click to remove.",children:[o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]}),o("svg",{class:"pressy-offline-check",viewBox:"0 0 24 24",fill:"currentColor",width:"10",height:"10",children:o("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})})]}):o("button",{class:"pressy-offline-icon",onClick:d=>{d.stopPropagation(),i(t,r)},"aria-label":"Download for offline reading",title:"Download for offline reading",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]})})}function Co({children:e,bookTitle:t,prevChapter:r,nextChapter:s,showDropCap:i,onSaveProgress:n,onRestoreProgress:a,allChapters:d,bookBasePath:p,currentChapterSlug:u,offlineProps:g,bookmarkProps:l}){const b=N(null),[v,T]=E(!1),z=N(null),[A,x]=E(!1),[S,O]=E(!1),[I,k]=E(!1),J=Y(()=>{T(!0),z.current&&clearTimeout(z.current),z.current=setTimeout(()=>T(!1),3e3)},[]),[f,P]=E(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[H,re]=E(()=>{if(typeof localStorage<"u"){const m=localStorage.getItem("pressy-font-size");return m?parseFloat(m):1}return 1}),U=Y(m=>{m===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${m})`)},[]);B(()=>{H!==1&&U(H)},[]);const K=Y(m=>{P(m),localStorage.setItem("pressy-theme",m);const j=m==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":m;document.documentElement.setAttribute("data-theme",j)},[]),ye=Y(m=>{re(j=>{const se=Math.round(Math.max(.8,Math.min(1.5,j+m))*10)/10;return localStorage.setItem("pressy-font-size",String(se)),U(se),se})},[U]),$e=Y(m=>{const j=m.target;if(!j.closest(".pressy-page-footer, .pressy-toc-backdrop, .pressy-toc-toggle, .pressy-bookmarks-panel, .pressy-bookmarks-toggle")&&!j.closest('a, button, input, select, textarea, [role="button"]')){if(A||S||I){x(!1),O(!1),k(!1);return}v?(T(!1),z.current&&clearTimeout(z.current)):J()}},[v,A,S,I,J]);return B(()=>{a&&a().then(m=>{m&&m.scrollPosition>0&&window.scrollTo(0,m.scrollPosition)})},[]),B(()=>{if(!n)return;const m=()=>{b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{n({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",m,{passive:!0}),()=>{window.removeEventListener("scroll",m),b.current&&clearTimeout(b.current)}},[n]),B(()=>{if(!n)return;const m=()=>{n({page:0,totalPages:0,scrollPosition:window.scrollY})},j=()=>{document.visibilityState==="hidden"&&m()};return window.addEventListener("beforeunload",m),document.addEventListener("visibilitychange",j),()=>{window.removeEventListener("beforeunload",m),document.removeEventListener("visibilitychange",j)}},[n]),o("div",{class:"pressy-reader",onClick:$e,children:[o("main",{class:"pressy-reader-main",children:o("article",{class:`pressy-prose ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:e})}),o(Hr,{}),o(Po,{prev:r,next:s}),o(Wr,{}),S&&d&&o("div",{class:"pressy-toc-backdrop pressy-toc-backdrop--scroll",onClick:m=>{m.stopPropagation(),O(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:m=>m.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:m=>{m.stopPropagation(),O(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:[o("a",{href:p&&p.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>{sessionStorage.setItem("pressy-internal-nav","1"),O(!1)},children:[o("span",{class:"pressy-toc-item-num",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:o("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),o("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),d.map((m,j)=>o("a",{href:`${p||""}/${m.slug}`,class:`pressy-toc-item ${m.slug===u?"pressy-toc-item--active":""}`,onClick:()=>O(!1),children:[o("span",{class:"pressy-toc-item-num",children:[j+1,"."]}),o("span",{class:"pressy-toc-item-title",children:m.title})]},m.slug))]})]})}),o("div",{class:`pressy-page-footer pressy-page-footer--scroll ${v||A||S||I?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-footer-row",children:[d&&d.length>0&&o("button",{class:"pressy-toc-toggle",onClick:m=>{m.stopPropagation(),x(!1),k(!1),O(!S)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:m=>{m.stopPropagation(),d&&d.length>0&&(x(!1),k(!1),O(!S))},children:t}),o(Ur,{offlineProps:g}),l&&o("button",{class:"pressy-bookmarks-toggle",onClick:m=>{m.stopPropagation(),x(!1),O(!1),k(!I)},"aria-label":"Bookmarks",children:o("svg",{viewBox:"0 0 24 24",fill:I?"currentColor":"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:o("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})})}),o("button",{class:"pressy-settings-toggle",onClick:m=>{m.stopPropagation(),O(!1),k(!1),x(!A)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${A?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(m=>o("button",{class:`pressy-theme-btn ${f===m.id?"pressy-theme-btn--active":""}`,onClick:j=>{j.stopPropagation(),K(m.id)},children:[m.icon,o("span",{children:m.label})]},m.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:m=>{m.stopPropagation(),ye(-.1)},disabled:H<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(H*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:m=>{m.stopPropagation(),ye(.1)},disabled:H>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]}),l&&o("div",{class:`pressy-bookmarks-panel ${I?"pressy-bookmarks-panel--open":""}`,children:[l.bookmarks.length===0?o("div",{class:"pressy-bookmarks-empty",children:"No bookmarks yet"}):o("div",{class:"pressy-bookmarks-list",children:l.bookmarks.map(m=>o("div",{class:"pressy-bookmark-item",onClick:j=>{j.stopPropagation(),l.onNavigateBookmark(m),k(!1)},children:[o("div",{class:"pressy-bookmark-info",children:[o("span",{class:"pressy-bookmark-chapter",children:m.chapterTitle}),o("span",{class:"pressy-bookmark-detail",children:[m.scrollPosition>0?`Scroll ${Math.round(m.scrollPosition)}px`:m.totalPages>0?`Page ${m.page+1} of ${m.totalPages}`:"Start"," · ",Fr(m.createdAt)]})]}),o("button",{class:"pressy-bookmark-delete",onClick:j=>{j.stopPropagation(),l.onDeleteBookmark(m.id)},"aria-label":"Delete bookmark",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},m.id))}),o("button",{class:"pressy-bookmark-add",onClick:m=>{var j;m.stopPropagation(),l.onAddBookmark({chapterSlug:u||"",chapterTitle:((j=d==null?void 0:d.find(se=>se.slug===u))==null?void 0:j.title)||u||"",page:0,totalPages:0,scrollPosition:window.scrollY})},children:"Bookmark this page"})]})]}),o("style",{children:$o})]})}var zo=`
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
    background: rgba(0, 0, 0, 0.3);
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
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
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
    color: #16a34a;
  }

  .pressy-offline-icon--cached:hover {
    color: #dc2626;
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
    color: #dc2626;
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
`;function To({title:e}){return o("div",{class:"pressy-chapter-divider",children:o("h2",{class:"pressy-chapter-divider-title",children:e})})}function Eo({children:e,bookTitle:t,prevChapter:r,nextChapter:s,showDropCap:i,onSaveProgress:n,onRestoreProgress:a,bookProgressPercent:d,initialContent:p,chapterMapData:u,currentChapterSlug:g,allChapters:l,bookBasePath:b,onChapterChange:v,mdxComponents:T,paywall:z,offlineProps:A,bookmarkProps:x}){const S=N(null),O=N(null),I=N(null),[k,J]=E(0),[f,P]=E(1),H=N(1);H.current=f;const[re,U]=E(!1),K=N(!1),ye=N(null),$e=N(!1),m=N(typeof window<"u"&&new URLSearchParams(window.location.search).get("page")==="last"),[j,se]=E(m.current||!!a),[te,Wt]=E([]),[G,Qr]=E([]),[Z,Ft]=E(g||""),gt=N(new Set),Q=!!(u&&p&&g&&l);B(()=>{if(Q&&p&&g){const c=l.find(h=>h.slug===g);Wt([{slug:g,title:(c==null?void 0:c.title)||g,Content:p}]),Ft(g)}},[]),B(()=>{if(m.current){const c=new URL(window.location.href);c.searchParams.delete("page"),history.replaceState(null,"",c.pathname)}},[]);const[le,je]=E(!1),[ne,ce]=E(!1),[ie,Ce]=E(!1),[eo,to]=E(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[Ne,ro]=E(()=>{if(typeof localStorage<"u"){const c=localStorage.getItem("pressy-font-size");return c?parseFloat(c):1}return 1}),mt=Y(c=>{c===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${c})`)},[]);B(()=>{Ne!==1&&mt(Ne)},[]),B(()=>{var y;const c=S.current;if(!c)return;const h=()=>{c.style.setProperty("--app-height",`${window.innerHeight}px`)};return h(),window.addEventListener("resize",h),(y=window.visualViewport)==null||y.addEventListener("resize",h),()=>{var _;window.removeEventListener("resize",h),(_=window.visualViewport)==null||_.removeEventListener("resize",h)}},[]);const oo=Y(c=>{to(c),localStorage.setItem("pressy-theme",c);const h=c==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":c;document.documentElement.setAttribute("data-theme",h)},[]),[Ut,ze]=E(!1),[Vt,Te]=E(0),[Yt,ue]=E(null),yt=N(0),qt=N(0),vt=N(0),bt=N(0),Je=N(0),Ke=N(!1),De=N(!1),Xt=Y(()=>{if(!Q)return;const c=I.current,h=O.current;if(!c||!h)return;const y=h.clientWidth;if(y===0)return;const _=c.querySelectorAll(".pressy-chapter-section"),w=[];_.forEach(C=>{const $=C.getAttribute("data-chapter-slug")||"",R=C.offsetLeft,V=C.scrollWidth,F=Math.floor(R/y),he=Math.max(F,Math.ceil((R+V)/y)-1);w.push({slug:$,startPage:F,endPage:he})}),Qr(w)},[Q]),de=Y(()=>{const c=I.current,h=O.current;if(!c||!h)return;const y=h.clientWidth;if(y===0)return;c.style.columnWidth=`${y}px`,c.scrollWidth;const _=Math.max(1,Math.round(c.scrollWidth/y));P(_),U(!0),J(w=>Math.min(w,_-1)),Xt()},[Xt]),Jt=Y(c=>{ro(h=>{const y=Math.round(Math.max(.8,Math.min(1.5,h+c))*10)/10;return localStorage.setItem("pressy-font-size",String(y)),mt(y),setTimeout(()=>de(),100),y})},[mt,de]);B(()=>{const c=O.current;if(!c)return;const h=setTimeout(de,50),y=new ResizeObserver(()=>{de()});return y.observe(c),()=>{clearTimeout(h),y.disconnect()}},[de]),B(()=>{if(te.length>0){const c=setTimeout(de,50);return()=>clearTimeout(c)}},[te.length,de]),B(()=>{const c=I.current;if(!c)return;const h=c.querySelectorAll("img");if(h.length===0)return;const y=()=>de();return h.forEach(_=>{_.complete||(_.addEventListener("load",y),_.addEventListener("error",y))}),()=>{h.forEach(_=>{_.removeEventListener("load",y),_.removeEventListener("error",y)})}},[de,te.length]),B(()=>{if(!(K.current||!re)){if(m.current){m.current=!1,$e.current=!0,J(f-1),K.current=!0,se(!1);return}if(!a){K.current=!0,se(!1);return}a().then(c=>{if(K.current){se(!1);return}const h=H.current;if(!c||c.page<=0){K.current=!0,se(!1);return}let y;if(c.totalPages<=1||Math.abs(c.totalPages-h)<=2)y=c.page;else{const w=c.page/(c.totalPages-1);y=Math.round(w*(h-1))}const _=Math.max(0,Math.min(y,h-1));$e.current=!0,J(_),K.current=!0,se(!1)})}},[re,f,a]),B(()=>{const c=I.current,h=O.current;if(!c||!h)return;const _=k*h.clientWidth-Vt;Ut||$e.current?(c.style.transition="none",$e.current=!1):c.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",c.style.transform=`translateX(-${_}px)`},[k,Vt,Ut]),B(()=>{const c=I.current,h=O.current;if(!c||!h)return;const y=h.getBoundingClientRect();c.querySelectorAll("a[href], button, input, select, textarea, [tabindex]").forEach(w=>{const C=w.getBoundingClientRect();if(C.left>=y.left-1&&C.right<=y.right+1){const R=w.getAttribute("data-original-tabindex");R!==null&&(R===""?w.removeAttribute("tabindex"):w.setAttribute("tabindex",R),w.removeAttribute("data-original-tabindex"))}else w.hasAttribute("data-original-tabindex")||w.setAttribute("data-original-tabindex",w.getAttribute("tabindex")||""),w.setAttribute("tabindex","-1")})},[k,f]),B(()=>{var V;if(!Q||!u||G.length===0)return;const c=G.find(F=>F.slug===Z);if(!c||c.endPage-k>2)return;const{chapterOrder:y,chapterMap:_}=u,w=(V=te[te.length-1])==null?void 0:V.slug,C=y.indexOf(w);if(C===-1||C>=y.length-1)return;const $=y[C+1];if(gt.current.has($)||te.some(F=>F.slug===$)||z&&!z.authorized&&y.indexOf($)>=z.previewChapters)return;gt.current.add($);const R=_[$];R&&R().then(F=>{const he=F.default,ve=l.find(ge=>ge.slug===$);Wt(ge=>ge.some(et=>et.slug===$)?ge:[...ge,{slug:$,title:(ve==null?void 0:ve.title)||$,Content:he}])}).catch(()=>{gt.current.delete($)})},[k,Z,G,Q,u,te,l,z]),B(()=>{if(!Q||G.length===0||!b)return;const c=G.find(w=>k>=w.startPage&&k<=w.endPage);if(!c||c.slug===Z)return;const h=Z;Ft(c.slug);const y=`${b}/${c.slug}`;history.replaceState(null,"",y);const _=l==null?void 0:l.find(w=>w.slug===c.slug);if(_&&(document.title=document.title.replace(/^[^|]+/,_.title+" ")),v&&h){const w=G.find(C=>C.slug===h);if(w){const C=w.endPage-w.startPage+1;v(h,C-1,C)}}},[k,G,Z,Q,b,l,v]),B(()=>{if(!(!n||!K.current))return ye.current&&clearTimeout(ye.current),ye.current=setTimeout(()=>{if(Q&&G.length>0){const c=G.find(h=>h.slug===Z);if(c){const h=k-c.startPage,y=c.endPage-c.startPage+1;n({page:h,totalPages:y,scrollPosition:0,activeChapterSlug:Z})}}else n({page:k,totalPages:f,scrollPosition:0})},300),()=>{ye.current&&clearTimeout(ye.current)}},[k,f,n,Q,G,Z]),B(()=>{if(!n)return;const c=()=>{if(Q&&G.length>0){const y=G.find(_=>_.slug===Z);if(y){const _=k-y.startPage,w=y.endPage-y.startPage+1;n({page:_,totalPages:w,scrollPosition:0,activeChapterSlug:Z})}}else n({page:k,totalPages:f,scrollPosition:0})},h=()=>{document.visibilityState==="hidden"&&c()};return window.addEventListener("beforeunload",c),document.addEventListener("visibilitychange",h),()=>{window.removeEventListener("beforeunload",c),document.removeEventListener("visibilitychange",h)}},[k,f,n,Q,G,Z]);const pe=(()=>{var _;if(!Q||!u)return s;const{chapterOrder:c}=u,h=(_=te[te.length-1])==null?void 0:_.slug;if(!(c.indexOf(h)<c.length-1))return b?{slug:b,title:"Table of Contents"}:s})(),fe=(()=>{var C;if(!Q||!u)return r;const{chapterOrder:c}=u,h=(C=te[0])==null?void 0:C.slug,y=c.indexOf(h);if(y<=0)return r;const _=c[y-1],w=l==null?void 0:l.find($=>$.slug===_);return{slug:`${b}/${_}?page=last`,title:(w==null?void 0:w.title)||_}})(),_e=Y(c=>{m.current=!1;const h=Math.max(0,Math.min(c,f-1));J(h)},[f]),Ee=Y(()=>{if(k>=f-1){pe&&(sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=pe.slug);return}_e(k+1)},[k,f,pe,_e]),Le=Y(()=>{if(k<=0){fe&&(sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=fe.slug);return}_e(k-1)},[k,fe,_e]),[Ge,ke]=E(!1),ee=N(null),_t=Y(()=>{ke(!0),ee.current&&clearTimeout(ee.current),ee.current=setTimeout(()=>ke(!1),3e3)},[]),Kt=N(0),He=N(null),Gt=Y(()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})},[]),Ze=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,so=Y(c=>{const h=c.target;if(h.closest(".pressy-settings-panel, .pressy-settings-toggle, .pressy-toc-drawer, .pressy-toc-toggle, .pressy-bookmarks-panel, .pressy-bookmarks-toggle")||h.closest('a, button, input, select, textarea, [role="button"]'))return;if(le||ne||ie){je(!1),ce(!1),Ce(!1);return}if(Ze){Ge?(ke(!1),ee.current&&clearTimeout(ee.current)):_t();return}const y=S.current;if(!y)return;const _=y.getBoundingClientRect(),w=c.clientX-_.left,C=_.width*.15;if(w<C)Le();else if(w>_.width-C)Ee();else{const $=Date.now(),R=$-Kt.current;Kt.current=$,R<300?(He.current&&clearTimeout(He.current),Gt()):(He.current&&clearTimeout(He.current),He.current=setTimeout(()=>{Ge?(ke(!1),ee.current&&clearTimeout(ee.current)):_t()},300))}},[Ee,Le,Ge,Ze,le,ne,ie,_t,Gt]),[Zt,Qe]=E(null),no=Y(c=>{if(Ze)return;const h=S.current;if(!h)return;const y=h.getBoundingClientRect(),_=c.clientX-y.left,w=c.clientY-y.top,C=y.width/3;_<C?Qe("left"):_>C*2?Qe("right"):Qe(null),w>y.height*.75?(ke(!0),ee.current&&clearTimeout(ee.current)):!le&&!ne&&!ie&&(ee.current&&clearTimeout(ee.current),ee.current=setTimeout(()=>ke(!1),600))},[Ze,le,ne,ie]),io=Y(()=>{Qe(null),!le&&!ne&&!ie&&(ee.current&&clearTimeout(ee.current),ee.current=setTimeout(()=>ke(!1),600))},[le,ne,ie]);B(()=>{const c=h=>{const y=h.target.tagName;y==="INPUT"||y==="TEXTAREA"||y==="SELECT"||(h.key==="ArrowRight"||h.key===" "?(h.preventDefault(),Ee()):h.key==="ArrowLeft"?(h.preventDefault(),Le()):h.key==="Home"?(h.preventDefault(),_e(0)):h.key==="End"&&(h.preventDefault(),_e(f-1)))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[Ee,Le,_e,f]),B(()=>{const c=S.current;if(!c)return;const h=C=>{const $=C.touches[0];yt.current=$.clientX,qt.current=$.clientY,vt.current=$.clientX,bt.current=performance.now(),Je.current=0,Ke.current=!1,De.current=!1},y=C=>{const $=C.touches[0],R=$.clientX-yt.current,V=$.clientY-qt.current;if(!Ke.current)if(Math.abs(R)>Math.abs(V)&&Math.abs(R)>10)Ke.current=!0;else return Math.abs(V)>Math.abs(R)&&Math.abs(V)>10,void 0;C.preventDefault();const F=performance.now(),he=F-bt.current;if(he>0){const kt=($.clientX-vt.current)/he;Je.current=.6*kt+.4*Je.current}vt.current=$.clientX,bt.current=F;let ve=R;const ge=k===0,et=k>=f-1;if(ge&&R>0||et&&R<0){const kt=R>0?1:-1,lo=Math.abs(R);ve=kt*Math.sqrt(lo)*5,R>40&&ge&&fe?ue("prev"):R<-40&&et&&pe?ue("next"):ue(null)}else ue(null);De.current=!0,ze(!0),Te(ve)},_=C=>{if(!Ke.current||!De.current){ze(!1),Te(0),ue(null);return}const $=C.changedTouches[0].clientX-yt.current,R=Je.current,V=50,F=.3,he=80,ve=k===0;if(k>=f-1&&$<-he&&pe){ze(!1),Te(0),ue(null),sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=pe.slug;return}if(ve&&$>he&&fe){ze(!1),Te(0),ue(null),sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=fe.slug;return}$<-V||R<-F?Ee():($>V||R>F)&&Le(),De.current=!1,ze(!1),Te(0),ue(null)},w=()=>{De.current=!1,ze(!1),Te(0),ue(null)};return c.addEventListener("touchstart",h,{passive:!0}),c.addEventListener("touchmove",y,{passive:!1}),c.addEventListener("touchend",_,{passive:!0}),c.addEventListener("touchcancel",w,{passive:!0}),()=>{c.removeEventListener("touchstart",h),c.removeEventListener("touchmove",y),c.removeEventListener("touchend",_),c.removeEventListener("touchcancel",w)}},[k,f,Ee,Le,pe,fe]),(()=>{if(!Q||G.length===0)return{chapterPage:k,chapterTotalPages:f};const c=G.find(h=>h.slug===Z);return c?{chapterPage:k-c.startPage,chapterTotalPages:c.endPage-c.startPage+1}:{chapterPage:k,chapterTotalPages:f}})();const ao=(()=>{var R;if(!l||l.length===0)return f>1?k/(f-1)*100:100;const c=l.reduce((V,F)=>V+(F.wordCount||0),0);if(c===0)return 0;const h=((R=te[0])==null?void 0:R.slug)||Z;let y=0,_=0,w=!1;for(const V of l)if(V.slug===h&&(w=!0),!w)y+=V.wordCount||0;else if(te.some(F=>F.slug===V.slug))_+=V.wordCount||0;else break;const C=f>1?k/(f-1):0,$=y+C*_;return Math.min(100,$/c*100)})();return o("div",{class:"pressy-reader pressy-reader--paginated",ref:S,onClick:so,onMouseMove:no,onMouseLeave:io,children:[o("div",{class:"pressy-paginated-viewport",ref:O,style:j?{opacity:0}:{opacity:1,transition:"opacity 0.15s ease"},children:o("article",{ref:I,class:`pressy-prose pressy-prose--paginated ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:Q&&te.length>0?te.map(c=>o("section",{class:"pressy-chapter-section","data-chapter-slug":c.slug,children:[o(To,{title:c.title}),o(c.Content,{components:T||{}})]},c.slug)):e})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--prev ${Zt==="left"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"15 18 9 12 15 6"})})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--next ${Zt==="right"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"9 6 15 12 9 18"})})}),Yt==="prev"&&fe&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-arrow",children:"←"}),o("span",{class:"pressy-chapter-hint-text",children:fe.title})]}),Yt==="next"&&pe&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-text",children:pe.title}),o("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),ne&&l&&o("div",{class:"pressy-toc-backdrop",onClick:c=>{c.stopPropagation(),ce(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:c=>c.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:c=>{c.stopPropagation(),ce(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:[o("a",{href:b&&b.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>{sessionStorage.setItem("pressy-internal-nav","1"),ce(!1)},children:[o("span",{class:"pressy-toc-item-num",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:o("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),o("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),l.map((c,h)=>o("a",{href:`${b||""}/${c.slug}`,class:`pressy-toc-item ${c.slug===(Z||g)?"pressy-toc-item--active":""}`,onClick:()=>ce(!1),children:[o("span",{class:"pressy-toc-item-num",children:[h+1,"."]}),o("span",{class:"pressy-toc-item-title",children:c.title})]},c.slug))]})]})}),o("div",{class:`pressy-page-footer ${Ge||le||ne||ie?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-progress-bar",children:o("div",{class:"pressy-progress-fill",style:{width:`${ao}%`}})}),o("div",{class:"pressy-footer-row",children:[l&&l.length>0&&o("button",{class:"pressy-toc-toggle",onClick:c=>{c.stopPropagation(),je(!1),Ce(!1),ce(!ne)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:c=>{c.stopPropagation(),l&&l.length>0&&(je(!1),Ce(!1),ce(!ne))},children:t}),o(Ur,{offlineProps:A}),x&&o("button",{class:"pressy-bookmarks-toggle",onClick:c=>{c.stopPropagation(),je(!1),ce(!1),Ce(!ie)},"aria-label":"Bookmarks",children:o("svg",{viewBox:"0 0 24 24",fill:ie?"currentColor":"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:o("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})})}),o("button",{class:"pressy-settings-toggle",onClick:c=>{c.stopPropagation(),ce(!1),Ce(!1),je(!le)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${le?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(c=>o("button",{class:`pressy-theme-btn ${eo===c.id?"pressy-theme-btn--active":""}`,onClick:h=>{h.stopPropagation(),oo(c.id)},children:[c.icon,o("span",{children:c.label})]},c.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:c=>{c.stopPropagation(),Jt(-.1)},disabled:Ne<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(Ne*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:c=>{c.stopPropagation(),Jt(.1)},disabled:Ne>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]}),x&&o("div",{class:`pressy-bookmarks-panel ${ie?"pressy-bookmarks-panel--open":""}`,children:[x.bookmarks.length===0?o("div",{class:"pressy-bookmarks-empty",children:"No bookmarks yet"}):o("div",{class:"pressy-bookmarks-list",children:x.bookmarks.map(c=>o("div",{class:"pressy-bookmark-item",onClick:h=>{h.stopPropagation(),x.onNavigateBookmark(c),Ce(!1)},children:[o("div",{class:"pressy-bookmark-info",children:[o("span",{class:"pressy-bookmark-chapter",children:c.chapterTitle}),o("span",{class:"pressy-bookmark-detail",children:[c.totalPages>0?`Page ${c.page+1} of ${c.totalPages}`:c.scrollPosition>0?`Scroll ${Math.round(c.scrollPosition)}px`:"Start"," · ",Fr(c.createdAt)]})]}),o("button",{class:"pressy-bookmark-delete",onClick:h=>{h.stopPropagation(),x.onDeleteBookmark(c.id)},"aria-label":"Delete bookmark",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},c.id))}),o("button",{class:"pressy-bookmark-add",onClick:c=>{var _;c.stopPropagation();const h=Z||g||"",y=((_=l==null?void 0:l.find(w=>w.slug===h))==null?void 0:_.title)||h;x.onAddBookmark({chapterSlug:h,chapterTitle:y,page:k,totalPages:f,scrollPosition:0})},children:"Bookmark this page"})]})]}),o(Hr,{}),o(Wr,{}),o("style",{children:zo})]})}function Ht({children:e,bookTitle:t,prevChapter:r,nextChapter:s,showDropCap:i=!0,paginationMode:n="scroll",onSaveProgress:a,onRestoreProgress:d,bookProgressPercent:p,initialContent:u,chapterMapData:g,currentChapterSlug:l,allChapters:b,bookBasePath:v,onChapterChange:T,mdxComponents:z,paywall:A,offlineProps:x,bookmarkProps:S}){return n==="paginated"?o(Eo,{bookTitle:t,prevChapter:r,nextChapter:s,showDropCap:i,onSaveProgress:a,onRestoreProgress:d,bookProgressPercent:p,initialContent:u,chapterMapData:g,currentChapterSlug:l,allChapters:b,bookBasePath:v,onChapterChange:T,mdxComponents:z,paywall:A,offlineProps:x,bookmarkProps:S,children:e}):o(Co,{bookTitle:t,prevChapter:r,nextChapter:s,showDropCap:i,onSaveProgress:a,onRestoreProgress:d,allChapters:b,bookBasePath:v,currentChapterSlug:l,offlineProps:x,bookmarkProps:S,children:e})}function Lo({id:e,children:t}){const r=xe(!1);return o("span",{class:"pressy-footnote-wrapper",children:[o("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&o("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,o("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),o("style",{children:`
        .pressy-footnote-wrapper {
          position: relative;
          display: inline;
        }

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
          position: absolute;
          bottom: calc(100% + 0.5em);
          left: 0;
          z-index: 30;
          display: block;
          padding: 0.5em 2em 0.5em 0.75em;
          font-size: var(--font-size-sm);
          background: var(--color-bg-subtle);
          border-radius: 0.375em;
          border: 1px solid var(--color-border);
          width: 300px;
          max-width: 80vw;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
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
      `})]})}function Ao({children:e,title:t}){return o("aside",{class:"pressy-aside",children:[t&&o("strong",{class:"pressy-aside-title",children:t}),o("div",{class:"pressy-aside-content",children:e}),o("style",{children:`
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
      `})]})}function dr({src:e,alt:t,caption:r,wide:s,children:i}){return o("figure",{class:`pressy-figure ${s?"pressy-figure-wide":""}`,children:[o("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||i)&&o("figcaption",{class:"pressy-figure-caption",children:r||i}),o("style",{children:`
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
      `})]})}var Mo={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},Ro={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function Bo({type:e="note",title:t,children:r}){return o("div",{class:`pressy-callout pressy-callout-${e}`,children:[o("div",{class:"pressy-callout-header",children:[o("span",{class:"pressy-callout-icon",children:Mo[e]}),o("strong",{class:"pressy-callout-title",children:t||Ro[e]})]}),o("div",{class:"pressy-callout-content",children:r}),o("style",{children:`
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
      `})]})}function pr({variant:e="asterisks"}){return o("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&o("span",{children:"* * *"}),e==="ornament"&&o("span",{children:"❧"}),o("style",{children:`
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
      `})]})}var Oo={Footnote:Lo,Aside:Ao,Figure:dr,Callout:Bo,SceneBreak:pr,img:dr,hr:pr},Io={};function ut(){return{...Oo,...Io}}var Vr="pressy-cached-books",xt=ae("online"),dt=ae(null),St=ae(!1),Xe=ae(null);function jo(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(Vr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var oe=ae(jo());typeof window<"u"&&(xt.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{xt.value="online"}),window.addEventListener("offline",()=>{xt.value="offline"}));function No(){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Xe.value=e}),window.addEventListener("appinstalled",()=>{Xe.value=null})}async function Do(){const e=Xe.value;if(!e)return!1;e.prompt();const{outcome:t}=await e.userChoice;return Xe.value=null,t==="accepted"}async function Ho(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const s=await navigator.serviceWorker.register(t,{scope:r});navigator.serviceWorker.addEventListener("message",Wo);const i=!!navigator.serviceWorker.controller;navigator.serviceWorker.controller&&(St.value=!0);let n=!1;return navigator.serviceWorker.addEventListener("controllerchange",()=>{St.value=!0,i&&!n&&(n=!0,window.location.reload())}),s.addEventListener("updatefound",()=>{const a=s.installing;a&&a.addEventListener("statechange",()=>{a.state==="activated"&&(St.value=!0)})}),s.update().catch(()=>{}),s}catch(s){return console.error("Service worker registration failed:",s),null}}function Ue(){try{localStorage.setItem(Vr,JSON.stringify([...oe.value]))}catch{}}function Wo(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:s,total:i}=e.data;dt.value={bookSlug:r,current:s,total:i}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;dt.value=null;const s=new Set(oe.value);s.add(r),oe.value=s,Ue()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,s=new Set;for(const i of r){const n=i.match(/\/books\/([^/]+)/);n&&s.add(n[1])}oe.value=s,Ue()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,s=new Set(oe.value);s.delete(r),oe.value=s,Ue()}}async function Yr(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(i=>i.startsWith("http")?i:`${window.location.origin}${i}`);dt.value={bookSlug:e,current:0,total:r.length};const s=new Set(oe.value);return s.add(e),oe.value=s,Ue(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}function Fo(e){return oe.value.has(e)}function qr(e){!("serviceWorker"in navigator)||!navigator.serviceWorker.controller||navigator.serviceWorker.controller.postMessage({type:"INVALIDATE_BOOK_PAGES",bookSlug:e})}async function Uo(e){const t=new Set(oe.value);if(t.delete(e),oe.value=t,Ue(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),s=await r.keys();for(const i of s)i.url.includes(`/books/${e}`)&&await r.delete(i);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var fr=ae("/"),Xr=ae("light"),hr=ae(!navigator.onLine),Vo="pressy",Yo=2,Re="reading-progress",gr="unlocks",be="bookmarks",ot=null;async function Ie(){return ot||new Promise((e,t)=>{const r=indexedDB.open(Vo,Yo);r.onerror=()=>t(r.error),r.onblocked=()=>t(new Error("Database upgrade blocked by open connection")),r.onsuccess=()=>{ot=r.result,e(ot)},r.onupgradeneeded=s=>{const i=s.target.result;i.objectStoreNames.contains(Re)||i.createObjectStore(Re,{keyPath:"chapterSlug"}),i.objectStoreNames.contains(gr)||i.createObjectStore(gr,{keyPath:"bookSlug"}),i.objectStoreNames.contains(be)||i.createObjectStore(be,{keyPath:"id"})}})}async function mr(e){const t=await Ie();return new Promise((r,s)=>{const a=t.transaction(Re,"readwrite").objectStore(Re).put(e);a.onsuccess=()=>r(),a.onerror=()=>s(a.error)})}async function it(){const e=await Ie();return new Promise((t,r)=>{const n=e.transaction(Re,"readonly").objectStore(Re).getAll();n.onsuccess=()=>t(n.result||[]),n.onerror=()=>r(n.error)})}async function qo(e){const t=await Ie();return new Promise((r,s)=>{const a=t.transaction(be,"readwrite").objectStore(be).put(e);a.onsuccess=()=>r(),a.onerror=()=>s(a.error)})}async function Xo(e){const t=await Ie();return new Promise((r,s)=>{const a=t.transaction(be,"readwrite").objectStore(be).delete(e);a.onsuccess=()=>r(),a.onerror=()=>s(a.error)})}async function Pt(e){const t=await Ie();return new Promise((r,s)=>{const a=t.transaction(be,"readonly").objectStore(be).getAll();a.onsuccess=()=>{const p=(a.result||[]).filter(u=>u.bookSlug===e).sort((u,g)=>g.createdAt-u.createdAt);r(p)},a.onerror=()=>s(a.error)})}function Jr(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function yr(e){Xr.value=e,localStorage.setItem("pressy-theme",e);const t=e==="system"?Jr():e;document.documentElement.setAttribute("data-theme",t)}function Jo(){const e=localStorage.getItem("pressy-theme");e?yr(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&yr("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Xr.value==="system"&&document.documentElement.setAttribute("data-theme",Jr())})}function Ko(){window.addEventListener("online",()=>{hr.value=!1}),window.addEventListener("offline",()=>{hr.value=!0})}function Go({book:e}){if(e.chapters.length===0)return null;const t=`${q}/books/${e.slug}/${e.chapters[0].slug}`,r=(()=>{try{const n=localStorage.getItem("pressy-last-read");if(n){const{bookSlug:a,chapterSlug:d}=JSON.parse(n);if(a===e.slug&&e.chapters.some(p=>p.slug===d))return{label:"Continue Reading",href:`${q}/books/${e.slug}/${d}`}}}catch{}return{label:"Start Reading",href:t}})(),[s,i]=E(r);return B(()=>{it().then(n=>{const a=new Map(n.map(p=>[p.chapterSlug,p]));let d=null;for(const p of e.chapters){const u=a.get(p.slug);if(!u)continue;!(u.totalPages>0&&u.page>=u.totalPages-1)&&u.page>0&&(d=p)}d&&i({label:"Continue Reading",href:`${q}/books/${e.slug}/${d.slug}`})}).catch(()=>{})},[e]),o("a",{href:s.href,class:"pressy-cta",children:s.label})}function Zo(){return Xe.value?o("button",{class:"pressy-cta pressy-cta-secondary",onClick:()=>Do(),children:"Install"}):null}function Kr({book:e,prominent:t}){const r=e.metadata.paywall;return!(r!=null&&r.enabled)||!r.price?null:o("a",{href:`/api/checkout?book=${e.slug}`,class:`pressy-cta ${t?"":"pressy-cta-secondary"}`,children:["Purchase — ",r.price]})}function vr({book:e}){const[t,r]=E("idle"),[s,i]=E(""),n=a=>{a.preventDefault(),s&&(r("sending"),fetch("/api/auth/recover",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,book:e.slug})}).then(d=>{r(d.ok?"success":"error")}).catch(()=>r("error")))};return t==="success"?o("p",{class:"pressy-recover-success",children:"Check your email for a recovery link."}):t==="error"?o("p",{class:"pressy-recover-error",children:"Something went wrong. Please try again."}):t==="idle"?o("button",{class:"pressy-recover-link",onClick:()=>r("form"),children:"Already purchased?"}):o("form",{class:"pressy-recover-form",onSubmit:n,children:[o("input",{type:"email",placeholder:"Email address",value:s,onInput:a=>i(a.target.value),required:!0}),o("button",{type:"submit",disabled:t==="sending",children:t==="sending"?"Sending…":"Send Recovery Link"})]})}function Qo(e){var s,i;const[t,r]=E((s=e.metadata.paywall)!=null&&s.enabled?void 0:!0);return B(()=>{var n;if(!((n=e.metadata.paywall)!=null&&n.enabled)){r(!0);return}fetch(`/api/auth/status?book=${e.slug}`).then(a=>a.json()).then(a=>{r(a.authorized),a.authorized&&qr(e.slug)}).catch(()=>r(!1))},[e.slug,(i=e.metadata.paywall)==null?void 0:i.enabled]),t}function es({book:e,showPurchasePrompt:t,authorized:r}){var s;return!((s=e.metadata.paywall)!=null&&s.enabled)||r?null:t?o("div",{class:"pressy-purchase-prompt",children:[o("p",{children:"This chapter requires purchase to read."}),o(Kr,{book:e,prominent:!0}),o(vr,{book:e})]}):o(vr,{book:e})}function Gr({book:e,articles:t}){const r=typeof window<"u"&&new URLSearchParams(window.location.search).get("purchase")==="true",s=Qo(e),i=e.chapters.reduce((u,g)=>u+(g.wordCount||0),0),n=Math.ceil(i/200),a=e.chapters.length,d=e.metadata.publishDate?new Date(e.metadata.publishDate).getFullYear():null,p=i.toLocaleString();return o("div",{class:"pressy-home",children:[o("div",{class:"pressy-hero",children:[e.coverUrl&&o("img",{src:q+e.coverUrl,alt:`${e.metadata.title} cover`,class:"pressy-hero-cover"}),o("div",{class:"pressy-hero-text",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:e.metadata.title}),o("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&o("p",{class:"pressy-home-desc",children:e.metadata.description})]}),i>0&&o("div",{class:"pressy-stats",children:[o("span",{children:[a," chapter",a!==1?"s":""]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:[p," words"]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:["~",n," min"]}),d&&o(Se,{children:[o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:["First published ",d]})]})]}),o(es,{book:e,showPurchasePrompt:r,authorized:s}),a>0&&o("div",{class:"pressy-cta-group",children:[o(Go,{book:e}),!s&&!r&&o(Kr,{book:e}),o(Zo,{})]})]})]}),t&&t.length>0&&o("section",{class:"pressy-home-section pressy-fade-sections",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:t.map(u=>o("a",{href:`${q}/articles/${u.slug}`,class:"pressy-chapter-link",children:u.metadata.title}))})]}),o("style",{children:Zr})]})}function $t(e){var r,s;if(e.books.length===1)return o(Gr,{book:e.books[0],articles:e.articles});const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return o("div",{class:"pressy-home",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:t}),((s=e.books[0])==null?void 0:s.metadata.description)&&o("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Books"}),o("nav",{class:"pressy-chapter-list",children:e.books.map(i=>o("a",{href:`${q}/books/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),e.articles.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:e.articles.map(i=>o("a",{href:`${q}/articles/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),o("style",{children:Zr})]})}function Ct(e,t,r,s,i){const n=e.chapters.reduce((p,u)=>p+(u.wordCount||0),0);if(n===0)return 0;const a=new Map(i.map(p=>[p.chapterSlug,p]));let d=0;for(const p of e.chapters){const u=p.wordCount||0;if(p.slug===t)s>0&&(d+=r/Math.max(1,s-1)*u);else{const g=a.get(p.slug);if(!g)continue;g.totalPages>0&&g.page>=g.totalPages-1?d+=u:g.page>0&&g.totalPages>0&&(d+=g.page/g.totalPages*u)}}return Math.min(100,d/n*100)}function ts({book:e,chapterSlug:t,chapter:r,prevChapter:s,nextChapter:i,paginationMode:n,Content:a,chapterMapData:d}){var I,k,J;const[p,u]=E([]),[g,l]=E(void 0),[b,v]=E((I=e.metadata.paywall)!=null&&I.enabled?void 0:!0);B(()=>{var f;if(!((f=e.metadata.paywall)!=null&&f.enabled)){v(!0);return}fetch(`/api/auth/status?book=${e.slug}`).then(P=>P.json()).then(P=>{v(P.authorized),P.authorized&&qr(e.slug)}).catch(()=>v(!0))},[e.slug,(k=e.metadata.paywall)==null?void 0:k.enabled]),B(()=>{it().then(f=>{const P=Ct(e,t,0,0,f);l(P)})},[e,t]),B(()=>{Pt(e.slug).then(u).catch(()=>{})},[e.slug]);const T=f=>{const P={id:`${e.slug}:${f.chapterSlug}:${Date.now()}`,bookSlug:e.slug,chapterSlug:f.chapterSlug,chapterTitle:f.chapterTitle,page:f.page,totalPages:f.totalPages,scrollPosition:f.scrollPosition,createdAt:Date.now()};qo(P).then(()=>{Pt(e.slug).then(u)})},z=f=>{Xo(f).then(()=>{Pt(e.slug).then(u)})},A=f=>{f.chapterSlug===t?(f.scrollPosition>0&&window.scrollTo(0,f.scrollPosition),localStorage.setItem("pressy-bookmark-restore",JSON.stringify({chapterSlug:f.chapterSlug,page:f.page,totalPages:f.totalPages,scrollPosition:f.scrollPosition})),window.location.reload()):(localStorage.setItem("pressy-bookmark-restore",JSON.stringify({chapterSlug:f.chapterSlug,page:f.page,totalPages:f.totalPages,scrollPosition:f.scrollPosition})),window.location.href=`${q}/books/${e.slug}/${f.chapterSlug}`)},x=f=>{const P=f.activeChapterSlug||t;localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:P,page:f.page,totalPages:f.totalPages,scrollPosition:f.scrollPosition})),mr({chapterSlug:P,page:f.page,totalPages:f.totalPages,scrollPosition:f.scrollPosition,timestamp:Date.now()}),f.totalPages>0&&it().then(H=>{const re=Ct(e,P,f.page,f.totalPages,H);l(re)})},S=async()=>{try{const f=localStorage.getItem("pressy-bookmark-restore");if(f){localStorage.removeItem("pressy-bookmark-restore");const P=JSON.parse(f);if(P.chapterSlug===t)return{page:P.page,totalPages:P.totalPages,scrollPosition:P.scrollPosition||0}}}catch{}try{const f=localStorage.getItem("pressy-last-read");if(f){const P=JSON.parse(f);if(P.chapterSlug===t&&P.page>0)return{page:P.page,totalPages:P.totalPages,scrollPosition:P.scrollPosition||0}}}catch{}return null},O=(f,P,H)=>{mr({chapterSlug:f,page:P,totalPages:H,scrollPosition:0,timestamp:Date.now()}),localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:f,page:P,totalPages:H})),it().then(re=>{const U=Ct(e,f,P,H,re);l(U)})};return B(()=>{if(s){const f=document.createElement("link");return f.rel="prefetch",f.href=s.slug,document.head.appendChild(f),()=>{document.head.removeChild(f)}}},[s]),o(Ht,{title:(r==null?void 0:r.title)||t,bookTitle:e.metadata.title,chapterSlug:t,prevChapter:s,nextChapter:i,paginationMode:n,onSaveProgress:x,onRestoreProgress:S,bookProgressPercent:g,initialContent:a,chapterMapData:d,currentChapterSlug:t,allChapters:e.chapters.map(f=>({slug:f.slug,title:f.title,wordCount:f.wordCount})),bookBasePath:`${q}/books/${e.slug}`,onChapterChange:O,mdxComponents:ut(),paywall:(J=e.metadata.paywall)!=null&&J.enabled?{previewChapters:e.metadata.paywall.previewChapters,authorized:b??!1,bookSlug:e.slug}:void 0,bookmarkProps:{bookmarks:p,onAddBookmark:T,onDeleteBookmark:z,onNavigateBookmark:A},offlineProps:{bookSlug:e.slug,chapterUrls:e.chapters.map(f=>`${q}/books/${e.slug}/${f.slug}`),cachedBooks:oe,cacheProgress:dt,onDownload:Yr,onRemove:Uo},children:o(a,{components:ut()})})}function rs(e,t,r,s,i){const n=t.split("/"),a=n[2],d=n[3],p=e.books.find(z=>z.slug===a),u=p?p.chapters.findIndex(z=>z.slug===d):-1,g=p==null?void 0:p.chapters[u],l=z=>`${q}/books/${a}/${z.slug}`,b=p&&u>0?{slug:l(p.chapters[u-1]),title:p.chapters[u-1].title}:p?{slug:`${q}/books/${a}`,title:p.metadata.title}:void 0,v=p&&u>=0&&u<p.chapters.length-1?{slug:l(p.chapters[u+1]),title:p.chapters[u+1].title}:p?{slug:`${q}/books/${a}`,title:p.metadata.title}:void 0,T=r;return p?o(ts,{book:p,chapterSlug:d,chapter:g,prevChapter:b,nextChapter:v,paginationMode:s,Content:T,chapterMapData:i}):o(Ht,{title:(g==null?void 0:g.title)||d,prevChapter:b,nextChapter:v,paginationMode:s,children:o(T,{components:ut()})})}function os(e,t,r){const s=t.split("/")[2],i=e.articles.find(a=>a.slug===s),n=r;return o(Ht,{title:(i==null?void 0:i.metadata.title)||s,children:o(n,{components:ut()})})}var Zr=`
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
`;function ss(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,s=e.endsWith("/")?e.slice(0,-1):e;if(s===""||s==="/")return r.replace(/\/index\.html$/,"")||"";const i=r.indexOf(s);return i>0?r.slice(0,i):""}var q="";function is(e,t,r){var a;q=ss(e.route),fr.value=e.route;const s=!sessionStorage.getItem("pressy-session-active");sessionStorage.setItem("pressy-session-active","1"),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&sessionStorage.removeItem("pressy-session-active")});const i=sessionStorage.getItem("pressy-internal-nav");if(sessionStorage.removeItem("pressy-internal-nav"),s&&!i&&(e.routeType==="home"||e.routeType==="book")){const d=localStorage.getItem("pressy-last-read");if(d)try{const{bookSlug:p,chapterSlug:u}=JSON.parse(d),g=e.manifest.books.find(l=>l.slug===p);if(g!=null&&g.chapters.some(l=>l.slug===u)){window.location.replace(`${q}/books/${p}/${u}`);return}}catch{}}Jo(),Ko(),No(),Ie(),Ho(q),window.addEventListener("appinstalled",()=>{for(const d of e.manifest.books){if(Fo(d.slug))continue;const p=d.chapters.map(u=>`${q}/books/${d.slug}/${u.slug}`);Yr(d.slug,p)}}),window.addEventListener("popstate",()=>{fr.value=window.location.pathname}),document.addEventListener("click",d=>{const p=d.target.closest("a");if(!p)return;const u=p.getAttribute("href");if(u&&!(u.startsWith("http")||u.startsWith("#"))&&u.startsWith(e.route+"#")){d.preventDefault();const g=u.slice(u.indexOf("#")),l=document.querySelector(g);l&&l.scrollIntoView({behavior:"smooth"});return}});let n;switch(e.routeType){case"home":n=$t(e.manifest);break;case"book":{const d=e.route.split("/")[2],p=e.manifest.books.find(u=>u.slug===d);n=p?o(Gr,{book:p}):o("div",{children:"Book not found"});break}case"chapter":n=t?rs(e.manifest,e.route,t,(a=e.pagination)==null?void 0:a.defaultMode,r):o("div",{children:"Loading..."});break;case"article":n=t?os(e.manifest,e.route,t):o("div",{children:"Loading..."});break;case"books":n=$t(e.manifest);break;case"articles":n=$t(e.manifest);break;default:n=o("div",{children:"Page not found"})}mo(n,document.getElementById("app"))}export{is as h,Se as k,o as u};
