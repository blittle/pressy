var et,L,sr,ir,ge,Dt,ar,lr,cr,xt,mt,yt,Me={},ur=[],Ir=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,tt=Array.isArray;function ae(e,t){for(var r in t)e[r]=t[r];return e}function wt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Yr(e,t,r){var n,i,s,l={};for(s in t)s=="key"?n=t[s]:s=="ref"?i=t[s]:l[s]=t[s];if(arguments.length>2&&(l.children=arguments.length>3?et.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)l[s]===void 0&&(l[s]=e.defaultProps[s]);return Ve(e,l,n,i,null)}function Ve(e,t,r,n,i){var s={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++sr,__i:-1,__u:0};return i==null&&L.vnode!=null&&L.vnode(s),s}function ye(e){return e.children}function Le(e,t){this.props=e,this.context=t}function $e(e,t){if(t==null)return e.__?$e(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?$e(e):null}function dr(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return dr(e)}}function Ft(e){(!e.__d&&(e.__d=!0)&&ge.push(e)&&!Ge.__r++||Dt!=L.debounceRendering)&&((Dt=L.debounceRendering)||ar)(Ge)}function Ge(){for(var e,t,r,n,i,s,l,c=1;ge.length;)ge.length>c&&ge.sort(lr),e=ge.shift(),c=ge.length,e.__d&&(r=void 0,n=void 0,i=(n=(t=e).__v).__e,s=[],l=[],t.__P&&((r=ae({},n)).__v=n.__v+1,L.vnode&&L.vnode(r),kt(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[i]:null,s,i??$e(n),!!(32&n.__u),l),r.__v=n.__v,r.__.__k[r.__i]=r,hr(s,r,l),n.__e=n.__=null,r.__e!=i&&dr(r)));Ge.__r=0}function fr(e,t,r,n,i,s,l,c,f,d,g){var a,v,p,S,P,T,b,x=n&&n.__k||ur,_=t.length;for(f=Vr(r,t,x,f,_),a=0;a<_;a++)(p=r.__k[a])!=null&&(v=p.__i==-1?Me:x[p.__i]||Me,p.__i=a,T=kt(e,p,v,i,s,l,c,f,d,g),S=p.__e,p.ref&&v.ref!=p.ref&&(v.ref&&St(v.ref,null,p),g.push(p.ref,p.__c||S,p)),P==null&&S!=null&&(P=S),(b=!!(4&p.__u))||v.__k===p.__k?f=pr(p,f,e,b):typeof p.type=="function"&&T!==void 0?f=T:S&&(f=S.nextSibling),p.__u&=-7);return r.__e=P,f}function Vr(e,t,r,n,i){var s,l,c,f,d,g=r.length,a=g,v=0;for(e.__k=new Array(i),s=0;s<i;s++)(l=t[s])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=e.__k[s]=Ve(null,l,null,null,null):tt(l)?l=e.__k[s]=Ve(ye,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=e.__k[s]=Ve(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):e.__k[s]=l,f=s+v,l.__=e,l.__b=e.__b+1,c=null,(d=l.__i=Xr(l,r,f,a))!=-1&&(a--,(c=r[d])&&(c.__u|=2)),c==null||c.__v==null?(d==-1&&(i>g?v--:i<g&&v++),typeof l.type!="function"&&(l.__u|=4)):d!=f&&(d==f-1?v--:d==f+1?v++:(d>f?v--:v++,l.__u|=4))):e.__k[s]=null;if(a)for(s=0;s<g;s++)(c=r[s])!=null&&!(2&c.__u)&&(c.__e==n&&(n=$e(c)),mr(c,c));return n}function pr(e,t,r,n){var i,s;if(typeof e.type=="function"){for(i=e.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=e,t=pr(i[s],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=$e(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Xr(e,t,r,n){var i,s,l,c=e.key,f=e.type,d=t[r],g=d!=null&&(2&d.__u)==0;if(d===null&&c==null||g&&c==d.key&&f==d.type)return r;if(n>(g?1:0)){for(i=r-1,s=r+1;i>=0||s<t.length;)if((d=t[l=i>=0?i--:s++])!=null&&!(2&d.__u)&&c==d.key&&f==d.type)return l}return-1}function Ut(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Ir.test(t)?r:r+"px"}function Ne(e,t,r,n,i){var s,l;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Ut(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||Ut(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(cr,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=r,r?n?r.u=n.u:(r.u=xt,e.addEventListener(t,s?yt:mt,s)):e.removeEventListener(t,s?yt:mt,s);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Nt(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=xt++;else if(t.t<r.u)return;return r(L.event?L.event(t):t)}}}function kt(e,t,r,n,i,s,l,c,f,d){var g,a,v,p,S,P,T,b,x,_,q,E,G,de,X,H,Q,A=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(f=!!(32&r.__u),s=[c=t.__e=r.__e]),(g=L.__b)&&g(t);e:if(typeof A=="function")try{if(b=t.props,x="prototype"in A&&A.prototype.render,_=(g=A.contextType)&&n[g.__c],q=g?_?_.props.value:g.__:n,r.__c?T=(a=t.__c=r.__c).__=a.__E:(x?t.__c=a=new A(b,q):(t.__c=a=new Le(b,q),a.constructor=A,a.render=Gr),_&&_.sub(a),a.state||(a.state={}),a.__n=n,v=a.__d=!0,a.__h=[],a._sb=[]),x&&a.__s==null&&(a.__s=a.state),x&&A.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=ae({},a.__s)),ae(a.__s,A.getDerivedStateFromProps(b,a.__s))),p=a.props,S=a.state,a.__v=t,v)x&&A.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),x&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(x&&A.getDerivedStateFromProps==null&&b!==p&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(b,q),t.__v==r.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(b,a.__s,q)===!1){for(t.__v!=r.__v&&(a.props=b,a.state=a.__s,a.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(m){m&&(m.__=t)}),E=0;E<a._sb.length;E++)a.__h.push(a._sb[E]);a._sb=[],a.__h.length&&l.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(b,a.__s,q),x&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(p,S,P)})}if(a.context=q,a.props=b,a.__P=e,a.__e=!1,G=L.__r,de=0,x){for(a.state=a.__s,a.__d=!1,G&&G(t),g=a.render(a.props,a.state,a.context),X=0;X<a._sb.length;X++)a.__h.push(a._sb[X]);a._sb=[]}else do a.__d=!1,G&&G(t),g=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++de<25);a.state=a.__s,a.getChildContext!=null&&(n=ae(ae({},n),a.getChildContext())),x&&!v&&a.getSnapshotBeforeUpdate!=null&&(P=a.getSnapshotBeforeUpdate(p,S)),H=g,g!=null&&g.type===ye&&g.key==null&&(H=gr(g.props.children)),c=fr(e,tt(H)?H:[H],t,r,n,i,s,l,c,f,d),a.base=t.__e,t.__u&=-161,a.__h.length&&l.push(a),T&&(a.__E=a.__=null)}catch(m){if(t.__v=null,f||s!=null)if(m.then){for(t.__u|=f?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;s[s.indexOf(c)]=null,t.__e=c}else{for(Q=s.length;Q--;)wt(s[Q]);vt(t)}else t.__e=r.__e,t.__k=r.__k,m.then||vt(t);L.__e(m,t,r)}else s==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):c=t.__e=qr(r.__e,t,r,n,i,s,l,f,d);return(g=L.diffed)&&g(t),128&t.__u?void 0:c}function vt(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(vt)}function hr(e,t,r){for(var n=0;n<r.length;n++)St(r[n],r[++n],r[++n]);L.__c&&L.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(s){s.call(i)})}catch(s){L.__e(s,i.__v)}})}function gr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:tt(e)?e.map(gr):ae({},e)}function qr(e,t,r,n,i,s,l,c,f){var d,g,a,v,p,S,P,T=r.props||Me,b=t.props,x=t.type;if(x=="svg"?i="http://www.w3.org/2000/svg":x=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),s!=null){for(d=0;d<s.length;d++)if((p=s[d])&&"setAttribute"in p==!!x&&(x?p.localName==x:p.nodeType==3)){e=p,s[d]=null;break}}if(e==null){if(x==null)return document.createTextNode(b);e=document.createElementNS(i,x,b.is&&b),c&&(L.__m&&L.__m(t,s),c=!1),s=null}if(x==null)T===b||c&&e.data==b||(e.data=b);else{if(s=s&&et.call(e.childNodes),!c&&s!=null)for(T={},d=0;d<e.attributes.length;d++)T[(p=e.attributes[d]).name]=p.value;for(d in T)if(p=T[d],d!="children"){if(d=="dangerouslySetInnerHTML")a=p;else if(!(d in b)){if(d=="value"&&"defaultValue"in b||d=="checked"&&"defaultChecked"in b)continue;Ne(e,d,null,p,i)}}for(d in b)p=b[d],d=="children"?v=p:d=="dangerouslySetInnerHTML"?g=p:d=="value"?S=p:d=="checked"?P=p:c&&typeof p!="function"||T[d]===p||Ne(e,d,p,T[d],i);if(g)c||a&&(g.__html==a.__html||g.__html==e.innerHTML)||(e.innerHTML=g.__html),t.__k=[];else if(a&&(e.innerHTML=""),fr(t.type=="template"?e.content:e,tt(v)?v:[v],t,r,n,x=="foreignObject"?"http://www.w3.org/1999/xhtml":i,s,l,s?s[0]:r.__k&&$e(r,0),c,f),s!=null)for(d=s.length;d--;)wt(s[d]);c||(d="value",x=="progress"&&S==null?e.removeAttribute("value"):S!=null&&(S!==e[d]||x=="progress"&&!S||x=="option"&&S!=T[d])&&Ne(e,d,S,T[d],i),d="checked",P!=null&&P!=e[d]&&Ne(e,d,P,T[d],i))}return e}function St(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(i){L.__e(i,r)}}function mr(e,t,r){var n,i;if(L.unmount&&L.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||St(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){L.__e(s,t)}n.base=n.__P=null}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&mr(n[i],t,r||typeof e.type!="function");r||wt(e.__e),e.__c=e.__=e.__e=void 0}function Gr(e,t,r){return this.constructor(e,r)}function Kr(e,t,r){var n,i,s,l;t==document&&(t=document.documentElement),L.__&&L.__(e,t),i=(n=!1)?null:t.__k,s=[],l=[],kt(t,e=t.__k=Yr(ye,null,[e]),i||Me,Me,t.namespaceURI,i?null:t.firstChild?et.call(t.childNodes):null,s,i?i.__e:t.firstChild,n,l),hr(s,e,l)}et=ur.slice,L={__e:function(e,t,r,n){for(var i,s,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,n||{}),l=i.__d),l)return i.__E=i}catch(c){e=c}throw e}},sr=0,ir=function(e){return e!=null&&e.constructor===void 0},Le.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ae({},this.state),typeof e=="function"&&(e=e(ae({},r),this.props)),e&&ae(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ft(this))},Le.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ft(this))},Le.prototype.render=ye,ge=[],ar=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,lr=function(e,t){return e.__v.__b-t.__v.__b},Ge.__r=0,cr=/(PointerCapture)$|Capture$/i,xt=0,mt=Nt(!1),yt=Nt(!0);var Oe,W,dt,It,He=0,yr=[],j=L,Yt=j.__b,Vt=j.__r,Xt=j.diffed,qt=j.__c,Gt=j.unmount,Kt=j.__;function $t(e,t){j.__h&&j.__h(W,e,He||t),He=0;var r=W.__H||(W.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function B(e){return He=1,Zr(_r,e)}function Zr(e,t,r){var n=$t(Oe++,2);if(n.t=e,!n.__c&&(n.__=[_r(void 0,t),function(c){var f=n.__N?n.__N[0]:n.__[0],d=n.t(f,c);f!==d&&(n.__N=[d,n.__[1]],n.__c.setState({}))}],n.__c=W,!W.__f)){var i=function(c,f,d){if(!n.__c.__H)return!0;var g=n.__c.__H.__.filter(function(v){return!!v.__c});if(g.every(function(v){return!v.__N}))return!s||s.call(this,c,f,d);var a=n.__c.props!==c;return g.forEach(function(v){if(v.__N){var p=v.__[0];v.__=v.__N,v.__N=void 0,p!==v.__[0]&&(a=!0)}}),s&&s.call(this,c,f,d)||a};W.__f=!0;var s=W.shouldComponentUpdate,l=W.componentWillUpdate;W.componentWillUpdate=function(c,f,d){if(this.__e){var g=s;s=void 0,i(c,f,d),s=g}l&&l.call(this,c,f,d)},W.shouldComponentUpdate=i}return n.__N||n.__}function O(e,t){var r=$t(Oe++,3);!j.__s&&vr(r.__H,t)&&(r.__=e,r.u=t,W.__H.__h.push(r))}function D(e){return He=5,rt(function(){return{current:e}},[])}function rt(e,t){var r=$t(Oe++,7);return vr(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function N(e,t){return He=8,rt(function(){return e},t)}function Jr(){for(var e;e=yr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Xe),e.__H.__h.forEach(_t),e.__H.__h=[]}catch(t){e.__H.__h=[],j.__e(t,e.__v)}}j.__b=function(e){W=null,Yt&&Yt(e)},j.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Kt&&Kt(e,t)},j.__r=function(e){Vt&&Vt(e),Oe=0;var t=(W=e.__c).__H;t&&(dt===W?(t.__h=[],W.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Xe),t.__h.forEach(_t),t.__h=[],Oe=0)),dt=W},j.diffed=function(e){Xt&&Xt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(yr.push(t)!==1&&It===j.requestAnimationFrame||((It=j.requestAnimationFrame)||Qr)(Jr)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),dt=W=null},j.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Xe),r.__h=r.__h.filter(function(n){return!n.__||_t(n)})}catch(n){t.some(function(i){i.__h&&(i.__h=[])}),t=[],j.__e(n,r.__v)}}),qt&&qt(e,t)},j.unmount=function(e){Gt&&Gt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Xe(n)}catch(i){t=i}}),r.__H=void 0,t&&j.__e(t,r.__v))};var Zt=typeof requestAnimationFrame=="function";function Qr(e){var t,r=function(){clearTimeout(n),Zt&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);Zt&&(t=requestAnimationFrame(r))}function Xe(e){var t=W,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),W=t}function _t(e){var t=W;e.__c=e.__(),W=t}function vr(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function _r(e,t){return typeof t=="function"?t(e):t}var eo=Symbol.for("preact-signals");function Ct(){if(Se>1)Se--;else{for(var e,t=!1;Ae!==void 0;){var r=Ae;for(Ae=void 0,bt++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&wr(r))try{r.c()}catch(i){t||(e=i,t=!0)}r=n}}if(bt=0,Se--,t)throw e}}var z=void 0;function br(e){var t=z;z=void 0;try{return e()}finally{z=t}}var Ae=void 0,Se=0,bt=0,Ke=0;function xr(e){if(z!==void 0){var t=e.n;if(t===void 0||t.t!==z)return t={i:0,S:e,p:z.s,n:void 0,t:z,e:void 0,x:void 0,r:t},z.s!==void 0&&(z.s.n=t),z.s=t,e.n=t,32&z.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=z.s,t.n=void 0,z.s.n=t,z.s=t),t}}function I(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}I.prototype.brand=eo;I.prototype.h=function(){return!0};I.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:br(function(){var n;(n=t.W)==null||n.call(t)}))};I.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&br(function(){var i;(i=t.Z)==null||i.call(t)}))}};I.prototype.subscribe=function(e){var t=this;return Tt(function(){var r=t.value,n=z;z=void 0;try{e(r)}finally{z=n}},{name:"sub"})};I.prototype.valueOf=function(){return this.value};I.prototype.toString=function(){return this.value+""};I.prototype.toJSON=function(){return this.value};I.prototype.peek=function(){var e=z;z=void 0;try{return this.value}finally{z=e}};Object.defineProperty(I.prototype,"value",{get:function(){var e=xr(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(bt>100)throw new Error("Cycle detected");this.v=e,this.i++,Ke++,Se++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Ct()}}}});function le(e,t){return new I(e,t)}function wr(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function kr(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Sr(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function ve(e,t){I.call(this,void 0),this.x=e,this.s=void 0,this.g=Ke-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}ve.prototype=new I;ve.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Ke))return!0;if(this.g=Ke,this.f|=1,this.i>0&&!wr(this))return this.f&=-2,!0;var e=z;try{kr(this),z=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return z=e,Sr(this),this.f&=-2,!0};ve.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}I.prototype.S.call(this,e)};ve.prototype.U=function(e){if(this.t!==void 0&&(I.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};ve.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(ve.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=xr(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function to(e,t){return new ve(e,t)}function $r(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Se++;var r=z;z=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,Pt(e),n}finally{z=r,Ct()}}}function Pt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,$r(e)}function ro(e){if(z!==this)throw new Error("Out-of-order effect");Sr(this),z=e,this.f&=-2,8&this.f&&Pt(this),Ct()}function Ce(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}Ce.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Ce.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,$r(this),kr(this),Se++;var e=z;return z=this,ro.bind(this,e)};Ce.prototype.N=function(){2&this.f||(this.f|=2,this.o=Ae,Ae=this)};Ce.prototype.d=function(){this.f|=8,1&this.f||Pt(this)};Ce.prototype.dispose=function(){this.d()};function Tt(e,t){var r=new Ce(e,t);try{r.c()}catch(i){throw r.d(),i}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var Ie;function Pe(e,t){L[e]=t.bind(null,L[e]||function(){})}function Ze(e){if(Ie){var t=Ie;Ie=void 0,t()}Ie=e&&e.S()}function Cr(e){var t=this,r=e.data,n=me(r);n.value=r;var i=rt(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var l,c=t.__$u.S(),f=i.value;c(),ir(f)||((l=t.base)==null?void 0:l.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=f},to(function(){var l=n.value.value;return l===0?0:l===!0?"":l||""})},[]);return i.value}Cr.displayName="_st";Object.defineProperties(I.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Cr},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Pe("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var i in n)if(i!=="children"){var s=n[i];s instanceof I&&(r||(t.__np=r={}),r[i]=s,n[i]=s.peek())}}e(t)});Pe("__r",function(e,t){e(t),Ze();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(i){var s;return Tt(function(){s=this}),s.c=function(){n.__$f|=1,n.setState({})},s}())),Ze(r)});Pe("__e",function(e,t,r,n){Ze(),e(t,r,n)});Pe("diffed",function(e,t){Ze();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,i=t.props;if(n){var s=r.U;if(s)for(var l in s){var c=s[l];c!==void 0&&!(l in n)&&(c.d(),s[l]=void 0)}else r.U=s={};for(var f in n){var d=s[f],g=n[f];d===void 0?(d=oo(r,f,g,i),s[f]=d):d.o(g,i)}}}e(t)});function oo(e,t,r,n){var i=t in e&&e.ownerSVGElement===void 0,s=le(r);return{o:function(l,c){s.value=l,n=c},d:Tt(function(){var l=s.value.value;n[t]!==l&&(n[t]=l,i?e[t]=l:l?e.setAttribute(t,l):e.removeAttribute(t))})}}Pe("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var i in n){var s=n[i];s&&s.d()}}}}else{var l=t.__c;if(l){var c=l.__$u;c&&(l.__$u=void 0,c.d())}}e(t)});Pe("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});Le.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var i in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var s in e)if(s!=="__source"&&e[s]!==this.props[s])return!0;for(var l in this.props)if(!(l in e))return!0;return!1};function me(e){return rt(function(){return le(e)},[])}var no=0;function o(e,t,r,n,i,s){t||(t={});var l,c,f=t;if("ref"in f)for(c in f={},t)c=="ref"?l=t[c]:f[c]=t[c];var d={type:e,props:f,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--no,__i:-1,__u:0,__source:i,__self:s};if(typeof e=="function"&&(l=e.defaultProps))for(c in l)f[c]===void 0&&(f[c]=l[c]);return L.vnode&&L.vnode(d),d}function so({prev:e,next:t}){return!e&&!t?null:o("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[o("div",{class:"pressy-nav-inner",children:[e?o("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[o("span",{class:"pressy-nav-direction",children:"Previous"}),o("span",{class:"pressy-nav-title",children:e.title})]}):o("div",{class:"pressy-nav-placeholder"}),t?o("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[o("span",{class:"pressy-nav-direction",children:"Next"}),o("span",{class:"pressy-nav-title",children:t.title})]}):o("div",{class:"pressy-nav-placeholder"})]}),o("style",{children:`
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
      `})]})}function Pr(){const e=me(!1),t=me({x:0,y:0}),r=me(""),n=D(null);O(()=>{const c=()=>{const f=window.getSelection();if(!f||f.isCollapsed){e.value=!1;return}const d=f.toString().trim();if(d.length<5){e.value=!1;return}r.value=d;const a=f.getRangeAt(0).getBoundingClientRect();t.value={x:a.left+a.width/2,y:a.top-10},e.value=!0};return document.addEventListener("selectionchange",c),document.addEventListener("mouseup",c),()=>{document.removeEventListener("selectionchange",c),document.removeEventListener("mouseup",c)}},[]);const i=()=>{const c=encodeURIComponent(r.value),f=new URL(window.location.href);return f.hash=`:~:text=${c}`,f.toString()},s=async()=>{const c=i(),f=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:f,url:c}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${f}

${c}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var d;(d=n.current)==null||d.classList.remove("copied")},2e3))}catch(d){console.error("Failed to copy to clipboard:",d)}},l=async()=>{const c=i();try{await navigator.clipboard.writeText(c),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var f;(f=n.current)==null||f.classList.remove("copied")},2e3))}catch(f){console.error("Failed to copy link:",f)}};return e.value?o("div",{ref:n,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[o("button",{class:"pressy-share-btn",onClick:s,"aria-label":"Share selected text",title:"Share quote",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),o("button",{class:"pressy-copy-link-btn",onClick:l,"aria-label":"Copy link to selected text",title:"Copy link",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),o("style",{children:`
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
      `})]}):null}function Tr(){const e=me(!navigator.onLine),t=me(!1);return O(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?o("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?o(ye,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),o("span",{children:"You're offline"})]}):o(ye,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),o("span",{children:"Back online"})]}),o("style",{children:`
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
      `})]}):null}function Et({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i=!0,paginationMode:s="scroll",onSaveProgress:l,onRestoreProgress:c,bookProgressPercent:f,initialContent:d,chapterMapData:g,currentChapterSlug:a,allChapters:v,bookBasePath:p,onChapterChange:S,mdxComponents:P,offlineProps:T}){return s==="paginated"?o(lo,{bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:l,onRestoreProgress:c,bookProgressPercent:f,initialContent:d,chapterMapData:g,currentChapterSlug:a,allChapters:v,bookBasePath:p,onChapterChange:S,mdxComponents:P,offlineProps:T,children:e}):o(io,{bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:l,onRestoreProgress:c,allChapters:v,bookBasePath:p,currentChapterSlug:a,offlineProps:T,children:e})}function Er({offlineProps:e}){if(!e)return null;const{bookSlug:t,chapterUrls:r,cachedBooks:n,onDownload:i,onRemove:s}=e;return n.value.has(t)?o("button",{class:"pressy-offline-icon pressy-offline-icon--cached",onClick:c=>{c.stopPropagation(),s(t)},"aria-label":"Available offline. Click to remove.",title:"Available offline. Click to remove.",children:[o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]}),o("svg",{class:"pressy-offline-check",viewBox:"0 0 24 24",fill:"currentColor",width:"10",height:"10",children:o("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})})]}):o("button",{class:"pressy-offline-icon",onClick:c=>{c.stopPropagation(),i(t,r)},"aria-label":"Download for offline reading",title:"Download for offline reading",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]})})}function io({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:s,onRestoreProgress:l,allChapters:c,bookBasePath:f,currentChapterSlug:d,offlineProps:g}){const a=D(null),[v,p]=B(!1),S=D(null),[P,T]=B(!1),[b,x]=B(!1),_=N(()=>{p(!0),S.current&&clearTimeout(S.current),S.current=setTimeout(()=>p(!1),3e3)},[]),[q,E]=B(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[G,de]=B(()=>{if(typeof localStorage<"u"){const m=localStorage.getItem("pressy-font-size");return m?parseFloat(m):1}return 1}),X=N(m=>{m===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${m})`)},[]);O(()=>{G!==1&&X(G)},[]);const H=N(m=>{E(m),localStorage.setItem("pressy-theme",m);const M=m==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":m;document.documentElement.setAttribute("data-theme",M)},[]),Q=N(m=>{de(M=>{const _e=Math.round(Math.max(.8,Math.min(1.5,M+m))*10)/10;return localStorage.setItem("pressy-font-size",String(_e)),X(_e),_e})},[X]),A=N(m=>{const M=m.target;if(!M.closest(".pressy-page-footer, .pressy-toc-backdrop, .pressy-toc-toggle")&&!M.closest('a, button, input, select, textarea, [role="button"]')){if(P||b){T(!1),x(!1);return}v?(p(!1),S.current&&clearTimeout(S.current)):_()}},[v,P,b,_]);return O(()=>{l&&l().then(m=>{m&&m.scrollPosition>0&&window.scrollTo(0,m.scrollPosition)})},[]),O(()=>{if(!s)return;const m=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{s({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",m,{passive:!0}),()=>{window.removeEventListener("scroll",m),a.current&&clearTimeout(a.current)}},[s]),O(()=>{if(!s)return;const m=()=>{s({page:0,totalPages:0,scrollPosition:window.scrollY})};return window.addEventListener("beforeunload",m),()=>window.removeEventListener("beforeunload",m)},[s]),o("div",{class:"pressy-reader",onClick:A,children:[o("main",{class:"pressy-reader-main",children:o("article",{class:`pressy-prose ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:e})}),o(Pr,{}),o(so,{prev:r,next:n}),o(Tr,{}),b&&c&&o("div",{class:"pressy-toc-backdrop pressy-toc-backdrop--scroll",onClick:m=>{m.stopPropagation(),x(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:m=>m.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:m=>{m.stopPropagation(),x(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:c.map((m,M)=>o("a",{href:`${f||""}/${m.slug}`,class:`pressy-toc-item ${m.slug===d?"pressy-toc-item--active":""}`,onClick:()=>x(!1),children:[o("span",{class:"pressy-toc-item-num",children:[M+1,"."]}),o("span",{class:"pressy-toc-item-title",children:m.title})]},m.slug))})]})}),o("div",{class:`pressy-page-footer pressy-page-footer--scroll ${v||P||b?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-footer-row",children:[c&&c.length>0&&o("button",{class:"pressy-toc-toggle",onClick:m=>{m.stopPropagation(),T(!1),x(!b)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:m=>{m.stopPropagation(),c&&c.length>0&&(T(!1),x(!b))},children:t}),o(Er,{offlineProps:g}),o("button",{class:"pressy-settings-toggle",onClick:m=>{m.stopPropagation(),x(!1),T(!P)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${P?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(m=>o("button",{class:`pressy-theme-btn ${q===m.id?"pressy-theme-btn--active":""}`,onClick:M=>{M.stopPropagation(),H(m.id)},children:[m.icon,o("span",{children:m.label})]},m.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:m=>{m.stopPropagation(),Q(-.1)},disabled:G<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(G*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:m=>{m.stopPropagation(),Q(.1)},disabled:G>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]})]}),o("style",{children:co})]})}function ao({title:e}){return o("div",{class:"pressy-chapter-divider",children:o("h2",{class:"pressy-chapter-divider-title",children:e})})}function lo({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:s,onRestoreProgress:l,bookProgressPercent:c,initialContent:f,chapterMapData:d,currentChapterSlug:g,allChapters:a,bookBasePath:v,onChapterChange:p,mdxComponents:S,offlineProps:P}){const T=D(null),b=D(null),x=D(null),[_,q]=B(0),[E,G]=B(1),de=D(!1),X=D(null),[H,Q]=B([]),[A,m]=B([]),[M,_e]=B(g||""),nt=D(new Set),Y=!!(d&&f&&g&&a);O(()=>{if(Y&&f&&g){const u=a.find(h=>h.slug===g);Q([{slug:g,title:(u==null?void 0:u.title)||g,Content:f}]),_e(g)}},[]);const[ee,Be]=B(!1),[J,fe]=B(!1),[Or,Hr]=B(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[Te,Br]=B(()=>{if(typeof localStorage<"u"){const u=localStorage.getItem("pressy-font-size");return u?parseFloat(u):1}return 1}),st=N(u=>{u===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${u})`)},[]);O(()=>{Te!==1&&st(Te)},[]);const Wr=N(u=>{Hr(u),localStorage.setItem("pressy-theme",u);const h=u==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":u;document.documentElement.setAttribute("data-theme",h)},[]),[zt,be]=B(!1),[Lt,xe]=B(0),[At,te]=B(null),it=D(0),Rt=D(0),at=D(0),lt=D(0),We=D(0),je=D(!1),Ee=D(!1),Mt=N(()=>{if(!Y)return;const u=x.current,h=b.current;if(!u||!h)return;const y=h.clientWidth;if(y===0)return;const w=u.querySelectorAll(".pressy-chapter-section"),k=[];w.forEach($=>{const C=$.getAttribute("data-chapter-slug")||"",R=$.offsetLeft,F=$.scrollWidth,U=Math.floor(R/y),se=Math.max(U,Math.ceil((R+F)/y)-1);k.push({slug:C,startPage:U,endPage:se})}),m(k)},[Y]),re=N(()=>{const u=x.current,h=b.current;if(!u||!h)return;const y=h.clientWidth;if(y===0)return;u.style.columnWidth=`${y}px`,u.scrollWidth;const w=Math.max(1,Math.round(u.scrollWidth/y));G(w),q(k=>Math.min(k,w-1)),Mt()},[Mt]),Ot=N(u=>{Br(h=>{const y=Math.round(Math.max(.8,Math.min(1.5,h+u))*10)/10;return localStorage.setItem("pressy-font-size",String(y)),st(y),setTimeout(()=>re(),100),y})},[st,re]);O(()=>{const u=b.current;if(!u)return;const h=setTimeout(re,50),y=new ResizeObserver(()=>{re()});return y.observe(u),()=>{clearTimeout(h),y.disconnect()}},[re]),O(()=>{if(H.length>0){const u=setTimeout(re,50);return()=>clearTimeout(u)}},[H.length,re]),O(()=>{const u=x.current;if(!u)return;const h=u.querySelectorAll("img");if(h.length===0)return;const y=()=>re();return h.forEach(w=>{w.complete||(w.addEventListener("load",y),w.addEventListener("error",y))}),()=>{h.forEach(w=>{w.removeEventListener("load",y),w.removeEventListener("error",y)})}},[re,H.length]),O(()=>{if(new URLSearchParams(window.location.search).get("page")==="last"&&E>1){q(E-1),de.current=!0;const h=new URL(window.location.href);h.searchParams.delete("page"),history.replaceState(null,"",h.pathname)}},[E]),O(()=>{const u=x.current,h=b.current;if(!u||!h)return;const w=_*h.clientWidth-Lt;zt?u.style.transition="none":u.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",u.style.transform=`translateX(-${w}px)`},[_,Lt,zt]),O(()=>{const u=x.current,h=b.current;if(!u||!h)return;const y=h.getBoundingClientRect();u.querySelectorAll("a[href], button, input, select, textarea, [tabindex]").forEach(k=>{const $=k.getBoundingClientRect();if($.left>=y.left-1&&$.right<=y.right+1){const R=k.getAttribute("data-original-tabindex");R!==null&&(R===""?k.removeAttribute("tabindex"):k.setAttribute("tabindex",R),k.removeAttribute("data-original-tabindex"))}else k.hasAttribute("data-original-tabindex")||k.setAttribute("data-original-tabindex",k.getAttribute("tabindex")||""),k.setAttribute("tabindex","-1")})},[_,E]),O(()=>{var F;if(!Y||!d||A.length===0)return;const u=A.find(U=>U.slug===M);if(!u||u.endPage-_>2)return;const{chapterOrder:y,chapterMap:w}=d,k=(F=H[H.length-1])==null?void 0:F.slug,$=y.indexOf(k);if($===-1||$>=y.length-1)return;const C=y[$+1];if(nt.current.has(C)||H.some(U=>U.slug===C))return;nt.current.add(C);const R=w[C];R&&R().then(U=>{const se=U.default,ce=a.find(ie=>ie.slug===C);Q(ie=>ie.some(Ue=>Ue.slug===C)?ie:[...ie,{slug:C,title:(ce==null?void 0:ce.title)||C,Content:se}])}).catch(()=>{nt.current.delete(C)})},[_,M,A,Y,d,H,a]),O(()=>{if(!Y||A.length===0||!v)return;const u=A.find(k=>_>=k.startPage&&_<=k.endPage);if(!u||u.slug===M)return;const h=M;_e(u.slug);const y=`${v}/${u.slug}`;history.replaceState(null,"",y);const w=a==null?void 0:a.find(k=>k.slug===u.slug);if(w&&(document.title=document.title.replace(/^[^|]+/,w.title+" ")),p&&h){const k=A.find($=>$.slug===h);if(k){const $=k.endPage-k.startPage+1;p(h,$-1,$)}}},[_,A,M,Y,v,a,p]),O(()=>{if(!(!s||!de.current))return X.current&&clearTimeout(X.current),X.current=setTimeout(()=>{if(Y&&A.length>0){const u=A.find(h=>h.slug===M);if(u){const h=_-u.startPage,y=u.endPage-u.startPage+1;s({page:h,totalPages:y,scrollPosition:0})}}else s({page:_,totalPages:E,scrollPosition:0})},300),()=>{X.current&&clearTimeout(X.current)}},[_,E,s,Y,A,M]),O(()=>{if(!s)return;const u=()=>{if(Y&&A.length>0){const h=A.find(y=>y.slug===M);if(h){const y=_-h.startPage,w=h.endPage-h.startPage+1;s({page:y,totalPages:w,scrollPosition:0})}}else s({page:_,totalPages:E,scrollPosition:0})};return window.addEventListener("beforeunload",u),()=>window.removeEventListener("beforeunload",u)},[_,E,s,Y,A,M]);const oe=(()=>{var w;if(!Y||!d)return n;const{chapterOrder:u}=d,h=(w=H[H.length-1])==null?void 0:w.slug;if(!(u.indexOf(h)<u.length-1))return v?{slug:v,title:"Table of Contents"}:n})(),ne=(()=>{var $;if(!Y||!d)return r;const{chapterOrder:u}=d,h=($=H[0])==null?void 0:$.slug,y=u.indexOf(h);if(y<=0)return r;const w=u[y-1],k=a==null?void 0:a.find(C=>C.slug===w);return{slug:`${v}/${w}?page=last`,title:(k==null?void 0:k.title)||w}})(),pe=N(u=>{const h=Math.max(0,Math.min(u,E-1));q(h)},[E]),we=N(()=>{if(_>=E-1){oe&&(window.location.href=oe.slug);return}pe(_+1)},[_,E,oe,pe]),ke=N(()=>{if(_<=0){ne&&(window.location.href=ne.slug);return}pe(_-1)},[_,ne,pe]),[De,he]=B(!1),V=D(null),ct=N(()=>{he(!0),V.current&&clearTimeout(V.current),V.current=setTimeout(()=>he(!1),3e3)},[]),Ht=D(0),ze=D(null),Bt=N(()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})},[]),Wt=typeof window<"u"&&window.matchMedia("(hover: none)").matches,jr=N(u=>{const h=u.target;if(h.closest(".pressy-settings-panel, .pressy-settings-toggle, .pressy-toc-drawer, .pressy-toc-toggle")||h.closest('a, button, input, select, textarea, [role="button"]'))return;if(ee||J){Be(!1),fe(!1);return}if(Wt){De?(he(!1),V.current&&clearTimeout(V.current)):ct();return}const y=T.current;if(!y)return;const w=y.getBoundingClientRect(),k=u.clientX-w.left,$=w.width*.15;if(k<$)ke();else if(k>w.width-$)we();else{const C=Date.now(),R=C-Ht.current;Ht.current=C,R<300?(ze.current&&clearTimeout(ze.current),Bt()):(ze.current&&clearTimeout(ze.current),ze.current=setTimeout(()=>{De?(he(!1),V.current&&clearTimeout(V.current)):ct()},300))}},[we,ke,De,Wt,ee,J,ct,Bt]),[jt,Fe]=B(null),Dr=N(u=>{const h=T.current;if(!h)return;const y=h.getBoundingClientRect(),w=u.clientX-y.left,k=u.clientY-y.top,$=y.width/3;w<$?Fe("left"):w>$*2?Fe("right"):Fe(null),k>y.height*.75?(he(!0),V.current&&clearTimeout(V.current)):!ee&&!J&&(V.current&&clearTimeout(V.current),V.current=setTimeout(()=>he(!1),600))},[ee,J]),Fr=N(()=>{Fe(null),!ee&&!J&&(V.current&&clearTimeout(V.current),V.current=setTimeout(()=>he(!1),600))},[ee,J]);O(()=>{const u=h=>{const y=h.target.tagName;y==="INPUT"||y==="TEXTAREA"||y==="SELECT"||(h.key==="ArrowRight"||h.key===" "?(h.preventDefault(),we()):h.key==="ArrowLeft"?(h.preventDefault(),ke()):h.key==="Home"?(h.preventDefault(),pe(0)):h.key==="End"&&(h.preventDefault(),pe(E-1)))};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[we,ke,pe,E]),O(()=>{const u=T.current;if(!u)return;const h=$=>{const C=$.touches[0];it.current=C.clientX,Rt.current=C.clientY,at.current=C.clientX,lt.current=performance.now(),We.current=0,je.current=!1,Ee.current=!1},y=$=>{const C=$.touches[0],R=C.clientX-it.current,F=C.clientY-Rt.current;if(!je.current)if(Math.abs(R)>Math.abs(F)&&Math.abs(R)>10)je.current=!0;else return Math.abs(F)>Math.abs(R)&&Math.abs(F)>10,void 0;$.preventDefault();const U=performance.now(),se=U-lt.current;if(se>0){const ut=(C.clientX-at.current)/se;We.current=.6*ut+.4*We.current}at.current=C.clientX,lt.current=U;let ce=R;const ie=_===0,Ue=_>=E-1;if(ie&&R>0||Ue&&R<0){const ut=R>0?1:-1,Nr=Math.abs(R);ce=ut*Math.sqrt(Nr)*5,R>40&&ie&&ne?te("prev"):R<-40&&Ue&&oe?te("next"):te(null)}else te(null);Ee.current=!0,be(!0),xe(ce)},w=$=>{if(!je.current||!Ee.current){be(!1),xe(0),te(null);return}const C=$.changedTouches[0].clientX-it.current,R=We.current,F=50,U=.3,se=80,ce=_===0;if(_>=E-1&&C<-se&&oe){be(!1),xe(0),te(null),window.location.href=oe.slug;return}if(ce&&C>se&&ne){be(!1),xe(0),te(null),window.location.href=ne.slug;return}C<-F||R<-U?we():(C>F||R>U)&&ke(),Ee.current=!1,be(!1),xe(0),te(null)},k=()=>{Ee.current=!1,be(!1),xe(0),te(null)};return u.addEventListener("touchstart",h,{passive:!0}),u.addEventListener("touchmove",y,{passive:!1}),u.addEventListener("touchend",w,{passive:!0}),u.addEventListener("touchcancel",k,{passive:!0}),()=>{u.removeEventListener("touchstart",h),u.removeEventListener("touchmove",y),u.removeEventListener("touchend",w),u.removeEventListener("touchcancel",k)}},[_,E,we,ke,oe,ne]),(()=>{if(!Y||A.length===0)return{chapterPage:_,chapterTotalPages:E};const u=A.find(h=>h.slug===M);return u?{chapterPage:_-u.startPage,chapterTotalPages:u.endPage-u.startPage+1}:{chapterPage:_,chapterTotalPages:E}})();const Ur=(()=>{var R;if(!a||a.length===0)return E>1?_/(E-1)*100:100;const u=a.reduce((F,U)=>F+(U.wordCount||0),0);if(u===0)return 0;const h=((R=H[0])==null?void 0:R.slug)||M;let y=0,w=0,k=!1;for(const F of a)if(F.slug===h&&(k=!0),!k)y+=F.wordCount||0;else if(H.some(U=>U.slug===F.slug))w+=F.wordCount||0;else break;const $=E>1?_/(E-1):0,C=y+$*w;return Math.min(100,C/u*100)})();return o("div",{class:"pressy-reader pressy-reader--paginated",ref:T,onClick:jr,onMouseMove:Dr,onMouseLeave:Fr,children:[o("div",{class:"pressy-paginated-viewport",ref:b,children:o("article",{ref:x,class:`pressy-prose pressy-prose--paginated ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:Y&&H.length>0?H.map(u=>o("section",{class:"pressy-chapter-section","data-chapter-slug":u.slug,children:[o(ao,{title:u.title}),o(u.Content,{components:S||{}})]},u.slug)):e})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--prev ${jt==="left"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"15 18 9 12 15 6"})})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--next ${jt==="right"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"9 6 15 12 9 18"})})}),At==="prev"&&ne&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-arrow",children:"←"}),o("span",{class:"pressy-chapter-hint-text",children:ne.title})]}),At==="next"&&oe&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-text",children:oe.title}),o("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),J&&a&&o("div",{class:"pressy-toc-backdrop",onClick:u=>{u.stopPropagation(),fe(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:u=>u.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:u=>{u.stopPropagation(),fe(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:a.map((u,h)=>o("a",{href:`${v||""}/${u.slug}`,class:`pressy-toc-item ${u.slug===(M||g)?"pressy-toc-item--active":""}`,onClick:()=>fe(!1),children:[o("span",{class:"pressy-toc-item-num",children:[h+1,"."]}),o("span",{class:"pressy-toc-item-title",children:u.title})]},u.slug))})]})}),o("div",{class:`pressy-page-footer ${De||ee||J?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-progress-bar",children:o("div",{class:"pressy-progress-fill",style:{width:`${Ur}%`}})}),o("div",{class:"pressy-footer-row",children:[a&&a.length>0&&o("button",{class:"pressy-toc-toggle",onClick:u=>{u.stopPropagation(),Be(!1),fe(!J)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:u=>{u.stopPropagation(),a&&a.length>0&&(Be(!1),fe(!J))},children:t}),o(Er,{offlineProps:P}),o("button",{class:"pressy-settings-toggle",onClick:u=>{u.stopPropagation(),fe(!1),Be(!ee)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${ee?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(u=>o("button",{class:`pressy-theme-btn ${Or===u.id?"pressy-theme-btn--active":""}`,onClick:h=>{h.stopPropagation(),Wr(u.id)},children:[u.icon,o("span",{children:u.label})]},u.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:u=>{u.stopPropagation(),Ot(-.1)},disabled:Te<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(Te*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:u=>{u.stopPropagation(),Ot(.1)},disabled:Te>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]})]}),o(Pr,{}),o(Tr,{}),o("style",{children:uo})]})}var co=`
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
    padding: 0.5rem 1.5rem 1rem;
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

  @media (prefers-reduced-motion: reduce) {
    .pressy-page-footer--scroll {
      transition: none;
    }
    .pressy-toc-backdrop--scroll,
    .pressy-toc-backdrop--scroll .pressy-toc-drawer {
      animation: none;
    }
  }
`,uo=`
  html:has(.pressy-reader--paginated) body {
    margin: 0;
  }

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
  @media (hover: none) {
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
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem 1.5rem 1rem;
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
`;function fo({id:e,children:t}){const r=me(!1);return o("span",{class:"pressy-footnote-wrapper",children:[o("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&o("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,o("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),o("style",{children:`
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
      `})]})}function po({children:e,title:t}){return o("aside",{class:"pressy-aside",children:[t&&o("strong",{class:"pressy-aside-title",children:t}),o("div",{class:"pressy-aside-content",children:e}),o("style",{children:`
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
      `})]})}function Jt({src:e,alt:t,caption:r,wide:n,children:i}){return o("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[o("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||i)&&o("figcaption",{class:"pressy-figure-caption",children:r||i}),o("style",{children:`
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
      `})]})}var ho={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},go={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function mo({type:e="note",title:t,children:r}){return o("div",{class:`pressy-callout pressy-callout-${e}`,children:[o("div",{class:"pressy-callout-header",children:[o("span",{class:"pressy-callout-icon",children:ho[e]}),o("strong",{class:"pressy-callout-title",children:t||go[e]})]}),o("div",{class:"pressy-callout-content",children:r}),o("style",{children:`
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
      `})]})}function Qt({variant:e="asterisks"}){return o("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&o("span",{children:"* * *"}),e==="ornament"&&o("span",{children:"❧"}),o("style",{children:`
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
      `})]})}var yo={Footnote:fo,Aside:po,Figure:Jt,Callout:mo,SceneBreak:Qt,img:Jt,hr:Qt},vo={};function Je(){return{...yo,...vo}}var zr="pressy-cached-books",ft=le("online"),Qe=le(null),pt=le(!1);function _o(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(zr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var K=le(_o());typeof window<"u"&&(ft.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{ft.value="online"}),window.addEventListener("offline",()=>{ft.value="offline"}));async function bo(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",xo),navigator.serviceWorker.controller?pt.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{pt.value=!0}),n.addEventListener("updatefound",()=>{const i=n.installing;i&&i.addEventListener("statechange",()=>{i.state==="activated"&&(pt.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function Re(){try{localStorage.setItem(zr,JSON.stringify([...K.value]))}catch{}}function xo(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:i}=e.data;Qe.value={bookSlug:r,current:n,total:i}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;Qe.value=null;const n=new Set(K.value);n.add(r),K.value=n,Re()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const i of r){const s=i.match(/\/books\/([^/]+)/);s&&n.add(s[1])}K.value=n,Re()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(K.value);n.delete(r),K.value=n,Re()}}async function wo(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(i=>i.startsWith("http")?i:`${window.location.origin}${i}`);Qe.value={bookSlug:e,current:0,total:r.length};const n=new Set(K.value);return n.add(e),K.value=n,Re(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}async function ko(e){const t=new Set(K.value);if(t.delete(e),K.value=t,Re(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const i of n)i.url.includes(`/books/${e}`)&&await r.delete(i);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var er=le("/"),Lr=le("light"),tr=le(!navigator.onLine),So="pressy",$o=1,ue="reading-progress",rr="unlocks",Ye=null;async function ot(){return Ye||new Promise((e,t)=>{const r=indexedDB.open(So,$o);r.onerror=()=>t(r.error),r.onsuccess=()=>{Ye=r.result,e(Ye)},r.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(ue)||i.createObjectStore(ue,{keyPath:"chapterSlug"}),i.objectStoreNames.contains(rr)||i.createObjectStore(rr,{keyPath:"bookSlug"})}})}async function or(e){const t=await ot();return new Promise((r,n)=>{const l=t.transaction(ue,"readwrite").objectStore(ue).put(e);l.onsuccess=()=>r(),l.onerror=()=>n(l.error)})}async function Co(e){const t=await ot();return new Promise((r,n)=>{const l=t.transaction(ue,"readonly").objectStore(ue).get(e);l.onsuccess=()=>r(l.result||null),l.onerror=()=>n(l.error)})}async function qe(){const e=await ot();return new Promise((t,r)=>{const s=e.transaction(ue,"readonly").objectStore(ue).getAll();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>r(s.error)})}function Ar(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function nr(e){Lr.value=e,localStorage.setItem("pressy-theme",e);const t=e==="system"?Ar():e;document.documentElement.setAttribute("data-theme",t)}function Po(){const e=localStorage.getItem("pressy-theme");e?nr(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&nr("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Lr.value==="system"&&document.documentElement.setAttribute("data-theme",Ar())})}function To(){window.addEventListener("online",()=>{tr.value=!1}),window.addEventListener("offline",()=>{tr.value=!0})}function Eo({book:e}){const[t,r]=B(null);return O(()=>{if(e.chapters.length===0)return;const n=`${Z}/books/${e.slug}/${e.chapters[0].slug}`;qe().then(i=>{const s=new Map(i.map(c=>[c.chapterSlug,c]));let l=null;for(const c of e.chapters){const f=s.get(c.slug);if(!f)continue;!(f.totalPages>0&&f.page>=f.totalPages-1)&&f.page>0&&(l=c)}r(l?{label:"Continue Reading",href:`${Z}/books/${e.slug}/${l.slug}`}:{label:"Start Reading",href:n})}).catch(()=>{r({label:"Start Reading",href:n})})},[e]),t?o("a",{href:t.href,class:"pressy-cta",children:t.label}):null}function Rr(e,t=[]){const r=e.chapters.reduce((c,f)=>c+(f.wordCount||0),0),n=Math.ceil(r/200),i=e.chapters.length,s=e.metadata.publishDate?new Date(e.metadata.publishDate).getFullYear():null,l=r.toLocaleString();return o("div",{class:"pressy-home",children:[o("div",{class:"pressy-hero",children:[e.coverUrl&&o("img",{src:e.coverUrl,alt:`${e.metadata.title} cover`,class:"pressy-hero-cover"}),o("div",{class:"pressy-hero-text",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:e.metadata.title}),o("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&o("p",{class:"pressy-home-desc",children:e.metadata.description})]}),r>0&&o("div",{class:"pressy-stats",children:[o("span",{children:[i," chapter",i!==1?"s":""]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:[l," words"]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:["~",n," min"]}),s&&o(ye,{children:[o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:["First published ",s]})]})]}),i>0&&o(Eo,{book:e})]})]}),t.length>0&&o("section",{class:"pressy-home-section pressy-fade-sections",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:t.map(c=>o("a",{href:`${Z}/articles/${c.slug}`,class:"pressy-chapter-link",children:c.metadata.title}))})]}),o("style",{children:Mr})]})}function ht(e){var r,n;if(e.books.length===1)return Rr(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return o("div",{class:"pressy-home",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&o("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Books"}),o("nav",{class:"pressy-chapter-list",children:e.books.map(i=>o("a",{href:`${Z}/books/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),e.articles.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:e.articles.map(i=>o("a",{href:`${Z}/articles/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),o("style",{children:Mr})]})}function gt(e,t,r,n,i){const s=e.chapters.reduce((f,d)=>f+(d.wordCount||0),0);if(s===0)return 0;const l=new Map(i.map(f=>[f.chapterSlug,f]));let c=0;for(const f of e.chapters){const d=f.wordCount||0;if(f.slug===t)n>0&&(c+=r/Math.max(1,n-1)*d);else{const g=l.get(f.slug);if(!g)continue;g.totalPages>0&&g.page>=g.totalPages-1?c+=d:g.page>0&&g.totalPages>0&&(c+=g.page/g.totalPages*d)}}return Math.min(100,c/s*100)}function zo({book:e,chapterSlug:t,chapter:r,prevChapter:n,nextChapter:i,paginationMode:s,Content:l,chapterMapData:c}){const[f,d]=B(void 0);O(()=>{qe().then(p=>{const S=gt(e,t,0,0,p);d(S)})},[e,t]);const g=p=>{or({chapterSlug:t,page:p.page,totalPages:p.totalPages,scrollPosition:p.scrollPosition,timestamp:Date.now()}),p.totalPages>0&&qe().then(S=>{const P=gt(e,t,p.page,p.totalPages,S);d(P)})},a=async()=>{const p=await Co(t);return p?{page:p.page,totalPages:p.totalPages,scrollPosition:p.scrollPosition}:null},v=(p,S,P)=>{or({chapterSlug:p,page:S,totalPages:P,scrollPosition:0,timestamp:Date.now()}),qe().then(T=>{const b=gt(e,p,S,P,T);d(b)})};return O(()=>{if(n){const p=document.createElement("link");return p.rel="prefetch",p.href=n.slug,document.head.appendChild(p),()=>{document.head.removeChild(p)}}},[n]),o(Et,{title:(r==null?void 0:r.title)||t,bookTitle:e.metadata.title,chapterSlug:t,prevChapter:n,nextChapter:i,paginationMode:s,onSaveProgress:g,onRestoreProgress:a,bookProgressPercent:f,initialContent:l,chapterMapData:c,currentChapterSlug:t,allChapters:e.chapters.map(p=>({slug:p.slug,title:p.title,wordCount:p.wordCount})),bookBasePath:`${Z}/books/${e.slug}`,onChapterChange:v,mdxComponents:Je(),offlineProps:{bookSlug:e.slug,chapterUrls:e.chapters.map(p=>`/books/${e.slug}/${p.slug}`),cachedBooks:K,cacheProgress:Qe,onDownload:wo,onRemove:ko},children:o(l,{components:Je()})})}function Lo(e,t,r,n,i){const s=t.split("/"),l=s[2],c=s[3],f=e.books.find(P=>P.slug===l),d=f?f.chapters.findIndex(P=>P.slug===c):-1,g=f==null?void 0:f.chapters[d],a=P=>`${Z}/books/${l}/${P.slug}`,v=f&&d>0?{slug:a(f.chapters[d-1]),title:f.chapters[d-1].title}:f?{slug:`${Z}/books/${l}`,title:f.metadata.title}:void 0,p=f&&d>=0&&d<f.chapters.length-1?{slug:a(f.chapters[d+1]),title:f.chapters[d+1].title}:f?{slug:`${Z}/books/${l}`,title:f.metadata.title}:void 0,S=r;return f?o(zo,{book:f,chapterSlug:c,chapter:g,prevChapter:v,nextChapter:p,paginationMode:n,Content:S,chapterMapData:i}):o(Et,{title:(g==null?void 0:g.title)||c,prevChapter:v,nextChapter:p,paginationMode:n,children:o(S,{components:Je()})})}function Ao(e,t,r){const n=t.split("/")[2],i=e.articles.find(l=>l.slug===n),s=r;return o(Et,{title:(i==null?void 0:i.metadata.title)||n,children:o(s,{components:Je()})})}var Mr=`
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
    align-items: flex-start;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .pressy-hero-cover {
    flex-shrink: 0;
    max-width: 280px;
    width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.15);
    animation: pressy-fade-in 0.6s ease-out both;
  }
  .pressy-hero-text {
    flex: 1;
    animation: pressy-fade-in 0.6s ease-out 0.15s both;
  }
  @media (max-width: 700px) {
    .pressy-hero {
      flex-direction: column;
      align-items: center;
    }
    .pressy-hero-cover {
      max-width: 220px;
    }
    .pressy-hero-text {
      text-align: center;
    }
    .pressy-home-desc {
      margin-left: auto;
      margin-right: auto;
    }
    .pressy-stats {
      justify-content: center;
    }
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
    margin: 0.5rem 0 0;
  }

  /* ── Stats row ──────────────────────────── */
  .pressy-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4em;
    font-size: 0.85rem;
    color: var(--color-text-muted, #666);
    margin-top: 1rem;
  }
  .pressy-stats-sep {
    opacity: 0.5;
  }

  /* ── CTA button ─────────────────────────── */
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
`;function Ro(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const i=r.indexOf(n);return i>0?r.slice(0,i):""}var Z="";function Oo(e,t,r){var i;Z=Ro(e.route),er.value=e.route,Po(),To(),ot(),bo(Z),window.addEventListener("popstate",()=>{er.value=window.location.pathname}),document.addEventListener("click",s=>{const l=s.target.closest("a");if(!l)return;const c=l.getAttribute("href");if(c&&!(c.startsWith("http")||c.startsWith("#"))&&c.startsWith(e.route+"#")){s.preventDefault();const f=c.slice(c.indexOf("#")),d=document.querySelector(f);d&&d.scrollIntoView({behavior:"smooth"});return}});let n;switch(e.routeType){case"home":n=ht(e.manifest);break;case"book":{const s=e.route.split("/")[2],l=e.manifest.books.find(c=>c.slug===s);n=l?Rr(l):o("div",{children:"Book not found"});break}case"chapter":n=t?Lo(e.manifest,e.route,t,(i=e.pagination)==null?void 0:i.defaultMode,r):o("div",{children:"Loading..."});break;case"article":n=t?Ao(e.manifest,e.route,t):o("div",{children:"Loading..."});break;case"books":n=ht(e.manifest);break;case"articles":n=ht(e.manifest);break;default:n=o("div",{children:"Page not found"})}Kr(n,document.getElementById("app"))}export{Oo as h,ye as k,o as u};
