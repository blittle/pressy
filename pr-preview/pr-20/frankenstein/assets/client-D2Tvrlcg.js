var vt,z,Pr,Lr,be,ur,zr,Mr,Rr,Dt,Rt,At,Ye={},Ar=[],Tn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_t=Array.isArray;function he(e,t){for(var r in t)e[r]=t[r];return e}function Wt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Or(e,t,r){var o,i,s,l={};for(s in t)s=="key"?o=t[s]:s=="ref"?i=t[s]:l[s]=t[s];if(arguments.length>2&&(l.children=arguments.length>3?vt.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)l[s]===void 0&&(l[s]=e.defaultProps[s]);return ct(e,l,o,i,null)}function ct(e,t,r,o,i){var s={type:e,props:t,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Pr,__i:-1,__u:0};return i==null&&z.vnode!=null&&z.vnode(s),s}function xe(e){return e.children}function je(e,t){this.props=e,this.context=t}function ze(e,t){if(t==null)return e.__?ze(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?ze(e):null}function Ir(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Ir(e)}}function dr(e){(!e.__d&&(e.__d=!0)&&be.push(e)&&!ft.__r++||ur!=z.debounceRendering)&&((ur=z.debounceRendering)||zr)(ft)}function ft(){for(var e,t,r,o,i,s,l,u=1;be.length;)be.length>u&&be.sort(Mr),e=be.shift(),u=be.length,e.__d&&(r=void 0,o=void 0,i=(o=(t=e).__v).__e,s=[],l=[],t.__P&&((r=he({},o)).__v=o.__v+1,z.vnode&&z.vnode(r),Ut(t.__P,r,o,t.__n,t.__P.namespaceURI,32&o.__u?[i]:null,s,i??ze(o),!!(32&o.__u),l),r.__v=o.__v,r.__.__k[r.__i]=r,Br(s,r,l),o.__e=o.__=null,r.__e!=i&&Ir(r)));ft.__r=0}function Hr(e,t,r,o,i,s,l,u,p,d,g){var a,v,f,b,$,x,k,C=o&&o.__k||Ar,A=t.length;for(p=En(r,t,C,p,A),a=0;a<A;a++)(f=r.__k[a])!=null&&(v=f.__i==-1?Ye:C[f.__i]||Ye,f.__i=a,x=Ut(e,f,v,i,s,l,u,p,d,g),b=f.__e,f.ref&&v.ref!=f.ref&&(v.ref&&Yt(v.ref,null,f),g.push(f.ref,f.__c||b,f)),$==null&&b!=null&&($=b),(k=!!(4&f.__u))||v.__k===f.__k?p=Nr(f,p,e,k):typeof f.type=="function"&&x!==void 0?p=x:b&&(p=b.nextSibling),f.__u&=-7);return r.__e=$,p}function En(e,t,r,o,i){var s,l,u,p,d,g=r.length,a=g,v=0;for(e.__k=new Array(i),s=0;s<i;s++)(l=t[s])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=e.__k[s]=ct(null,l,null,null,null):_t(l)?l=e.__k[s]=ct(xe,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=e.__k[s]=ct(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):e.__k[s]=l,p=s+v,l.__=e,l.__b=e.__b+1,u=null,(d=l.__i=Pn(l,r,p,a))!=-1&&(a--,(u=r[d])&&(u.__u|=2)),u==null||u.__v==null?(d==-1&&(i>g?v--:i<g&&v++),typeof l.type!="function"&&(l.__u|=4)):d!=p&&(d==p-1?v--:d==p+1?v++:(d>p?v--:v++,l.__u|=4))):e.__k[s]=null;if(a)for(s=0;s<g;s++)(u=r[s])!=null&&!(2&u.__u)&&(u.__e==o&&(o=ze(u)),jr(u,u));return o}function Nr(e,t,r,o){var i,s;if(typeof e.type=="function"){for(i=e.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=e,t=Nr(i[s],t,r,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=ze(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Pn(e,t,r,o){var i,s,l,u=e.key,p=e.type,d=t[r],g=d!=null&&(2&d.__u)==0;if(d===null&&u==null||g&&u==d.key&&p==d.type)return r;if(o>(g?1:0)){for(i=r-1,s=r+1;i>=0||s<t.length;)if((d=t[l=i>=0?i--:s++])!=null&&!(2&d.__u)&&u==d.key&&p==d.type)return l}return-1}function pr(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Tn.test(t)?r:r+"px"}function it(e,t,r,o,i){var s,l;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)r&&t in r||pr(e.style,t,"");if(r)for(t in r)o&&r[t]==o[t]||pr(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(Rr,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=r,r?o?r.u=o.u:(r.u=Dt,e.addEventListener(t,s?At:Rt,s)):e.removeEventListener(t,s?At:Rt,s);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function fr(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Dt++;else if(t.t<r.u)return;return r(z.event?z.event(t):t)}}}function Ut(e,t,r,o,i,s,l,u,p,d){var g,a,v,f,b,$,x,k,C,A,S,ne,P,oe,ie,ee,ye,H=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(p=!!(32&r.__u),s=[u=t.__e=r.__e]),(g=z.__b)&&g(t);e:if(typeof H=="function")try{if(k=t.props,C="prototype"in H&&H.prototype.render,A=(g=H.contextType)&&o[g.__c],S=g?A?A.props.value:g.__:o,r.__c?x=(a=t.__c=r.__c).__=a.__E:(C?t.__c=a=new H(k,S):(t.__c=a=new je(k,S),a.constructor=H,a.render=zn),A&&A.sub(a),a.state||(a.state={}),a.__n=o,v=a.__d=!0,a.__h=[],a._sb=[]),C&&a.__s==null&&(a.__s=a.state),C&&H.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=he({},a.__s)),he(a.__s,H.getDerivedStateFromProps(k,a.__s))),f=a.props,b=a.state,a.__v=t,v)C&&H.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),C&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(C&&H.getDerivedStateFromProps==null&&k!==f&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(k,S),t.__v==r.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(k,a.__s,S)===!1){for(t.__v!=r.__v&&(a.props=k,a.state=a.__s,a.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(J){J&&(J.__=t)}),ne=0;ne<a._sb.length;ne++)a.__h.push(a._sb[ne]);a._sb=[],a.__h.length&&l.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(k,a.__s,S),C&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(f,b,$)})}if(a.context=S,a.props=k,a.__P=e,a.__e=!1,P=z.__r,oe=0,C){for(a.state=a.__s,a.__d=!1,P&&P(t),g=a.render(a.props,a.state,a.context),ie=0;ie<a._sb.length;ie++)a.__h.push(a._sb[ie]);a._sb=[]}else do a.__d=!1,P&&P(t),g=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++oe<25);a.state=a.__s,a.getChildContext!=null&&(o=he(he({},o),a.getChildContext())),C&&!v&&a.getSnapshotBeforeUpdate!=null&&($=a.getSnapshotBeforeUpdate(f,b)),ee=g,g!=null&&g.type===xe&&g.key==null&&(ee=Fr(g.props.children)),u=Hr(e,_t(ee)?ee:[ee],t,r,o,i,s,l,u,p,d),a.base=t.__e,t.__u&=-161,a.__h.length&&l.push(a),x&&(a.__E=a.__=null)}catch(J){if(t.__v=null,p||s!=null)if(J.then){for(t.__u|=p?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;s[s.indexOf(u)]=null,t.__e=u}else{for(ye=s.length;ye--;)Wt(s[ye]);Ot(t)}else t.__e=r.__e,t.__k=r.__k,J.then||Ot(t);z.__e(J,t,r)}else s==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):u=t.__e=Ln(r.__e,t,r,o,i,s,l,p,d);return(g=z.diffed)&&g(t),128&t.__u?void 0:u}function Ot(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Ot)}function Br(e,t,r){for(var o=0;o<r.length;o++)Yt(r[o],r[++o],r[++o]);z.__c&&z.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(s){s.call(i)})}catch(s){z.__e(s,i.__v)}})}function Fr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:_t(e)?e.map(Fr):he({},e)}function Ln(e,t,r,o,i,s,l,u,p){var d,g,a,v,f,b,$,x=r.props||Ye,k=t.props,C=t.type;if(C=="svg"?i="http://www.w3.org/2000/svg":C=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),s!=null){for(d=0;d<s.length;d++)if((f=s[d])&&"setAttribute"in f==!!C&&(C?f.localName==C:f.nodeType==3)){e=f,s[d]=null;break}}if(e==null){if(C==null)return document.createTextNode(k);e=document.createElementNS(i,C,k.is&&k),u&&(z.__m&&z.__m(t,s),u=!1),s=null}if(C==null)x===k||u&&e.data==k||(e.data=k);else{if(s=s&&vt.call(e.childNodes),!u&&s!=null)for(x={},d=0;d<e.attributes.length;d++)x[(f=e.attributes[d]).name]=f.value;for(d in x)if(f=x[d],d!="children"){if(d=="dangerouslySetInnerHTML")a=f;else if(!(d in k)){if(d=="value"&&"defaultValue"in k||d=="checked"&&"defaultChecked"in k)continue;it(e,d,null,f,i)}}for(d in k)f=k[d],d=="children"?v=f:d=="dangerouslySetInnerHTML"?g=f:d=="value"?b=f:d=="checked"?$=f:u&&typeof f!="function"||x[d]===f||it(e,d,f,x[d],i);if(g)u||a&&(g.__html==a.__html||g.__html==e.innerHTML)||(e.innerHTML=g.__html),t.__k=[];else if(a&&(e.innerHTML=""),Hr(t.type=="template"?e.content:e,_t(v)?v:[v],t,r,o,C=="foreignObject"?"http://www.w3.org/1999/xhtml":i,s,l,s?s[0]:r.__k&&ze(r,0),u,p),s!=null)for(d=s.length;d--;)Wt(s[d]);u||(d="value",C=="progress"&&b==null?e.removeAttribute("value"):b!=null&&(b!==e[d]||C=="progress"&&!b||C=="option"&&b!=x[d])&&it(e,d,b,x[d],i),d="checked",$!=null&&$!=e[d]&&it(e,d,$,x[d],i))}return e}function Yt(e,t,r){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(i){z.__e(i,r)}}function jr(e,t,r){var o,i;if(z.unmount&&z.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||Yt(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(s){z.__e(s,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&jr(o[i],t,r||typeof e.type!="function");r||Wt(e.__e),e.__c=e.__=e.__e=void 0}function zn(e,t,r){return this.constructor(e,r)}function It(e,t,r){var o,i,s,l;t==document&&(t=document.documentElement),z.__&&z.__(e,t),i=(o=!1)?null:t.__k,s=[],l=[],Ut(t,e=t.__k=Or(xe,null,[e]),i||Ye,Ye,t.namespaceURI,i?null:t.firstChild?vt.call(t.childNodes):null,s,i?i.__e:t.firstChild,o,l),Br(s,e,l)}vt=Ar.slice,z={__e:function(e,t,r,o){for(var i,s,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),l=i.__d),l)return i.__E=i}catch(u){e=u}throw e}},Pr=0,Lr=function(e){return e!=null&&e.constructor===void 0},je.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=he({},this.state),typeof e=="function"&&(e=e(he({},r),this.props)),e&&he(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),dr(this))},je.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),dr(this))},je.prototype.render=xe,be=[],zr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Mr=function(e,t){return e.__v.__b-t.__v.__b},ft.__r=0,Rr=/(PointerCapture)$|Capture$/i,Dt=0,Rt=fr(!1),At=fr(!0);var Ve,N,Et,hr,Xe=0,Dr=[],B=z,gr=B.__b,mr=B.__r,yr=B.diffed,vr=B.__c,_r=B.unmount,br=B.__;function Vt(e,t){B.__h&&B.__h(N,e,Xe||t),Xe=0;var r=N.__H||(N.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function O(e){return Xe=1,Mn(Ur,e)}function Mn(e,t,r){var o=Vt(Ve++,2);if(o.t=e,!o.__c&&(o.__=[Ur(void 0,t),function(u){var p=o.__N?o.__N[0]:o.__[0],d=o.t(p,u);p!==d&&(o.__N=[d,o.__[1]],o.__c.setState({}))}],o.__c=N,!N.__f)){var i=function(u,p,d){if(!o.__c.__H)return!0;var g=o.__c.__H.__.filter(function(v){return!!v.__c});if(g.every(function(v){return!v.__N}))return!s||s.call(this,u,p,d);var a=o.__c.props!==u;return g.forEach(function(v){if(v.__N){var f=v.__[0];v.__=v.__N,v.__N=void 0,f!==v.__[0]&&(a=!0)}}),s&&s.call(this,u,p,d)||a};N.__f=!0;var s=N.shouldComponentUpdate,l=N.componentWillUpdate;N.componentWillUpdate=function(u,p,d){if(this.__e){var g=s;s=void 0,i(u,p,d),s=g}l&&l.call(this,u,p,d)},N.shouldComponentUpdate=i}return o.__N||o.__}function R(e,t){var r=Vt(Ve++,3);!B.__s&&Wr(r.__H,t)&&(r.__=e,r.u=t,N.__H.__h.push(r))}function I(e){return Xe=5,bt(function(){return{current:e}},[])}function bt(e,t){var r=Vt(Ve++,7);return Wr(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function W(e,t){return Xe=8,bt(function(){return e},t)}function Rn(){for(var e;e=Dr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ut),e.__H.__h.forEach(Ht),e.__H.__h=[]}catch(t){e.__H.__h=[],B.__e(t,e.__v)}}B.__b=function(e){N=null,gr&&gr(e)},B.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),br&&br(e,t)},B.__r=function(e){mr&&mr(e),Ve=0;var t=(N=e.__c).__H;t&&(Et===N?(t.__h=[],N.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(ut),t.__h.forEach(Ht),t.__h=[],Ve=0)),Et=N},B.diffed=function(e){yr&&yr(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Dr.push(t)!==1&&hr===B.requestAnimationFrame||((hr=B.requestAnimationFrame)||An)(Rn)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),Et=N=null},B.__c=function(e,t){t.some(function(r){try{r.__h.forEach(ut),r.__h=r.__h.filter(function(o){return!o.__||Ht(o)})}catch(o){t.some(function(i){i.__h&&(i.__h=[])}),t=[],B.__e(o,r.__v)}}),vr&&vr(e,t)},B.unmount=function(e){_r&&_r(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(o){try{ut(o)}catch(i){t=i}}),r.__H=void 0,t&&B.__e(t,r.__v))};var wr=typeof requestAnimationFrame=="function";function An(e){var t,r=function(){clearTimeout(o),wr&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(r,35);wr&&(t=requestAnimationFrame(r))}function ut(e){var t=N,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),N=t}function Ht(e){var t=N;e.__c=e.__(),N=t}function Wr(e,t){return!e||e.length!==t.length||t.some(function(r,o){return r!==e[o]})}function Ur(e,t){return typeof t=="function"?t(e):t}var On=Symbol.for("preact-signals");function Xt(){if(Pe>1)Pe--;else{for(var e,t=!1;De!==void 0;){var r=De;for(De=void 0,Nt++;r!==void 0;){var o=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&Xr(r))try{r.c()}catch(i){t||(e=i,t=!0)}r=o}}if(Nt=0,Pe--,t)throw e}}var L=void 0;function Yr(e){var t=L;L=void 0;try{return e()}finally{L=t}}var De=void 0,Pe=0,Nt=0,ht=0;function Vr(e){if(L!==void 0){var t=e.n;if(t===void 0||t.t!==L)return t={i:0,S:e,p:L.s,n:void 0,t:L,e:void 0,x:void 0,r:t},L.s!==void 0&&(L.s.n=t),L.s=t,e.n=t,32&L.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=L.s,t.n=void 0,L.s.n=t,L.s=t),t}}function U(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}U.prototype.brand=On;U.prototype.h=function(){return!0};U.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:Yr(function(){var o;(o=t.W)==null||o.call(t)}))};U.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,o=e.x;r!==void 0&&(r.x=o,e.e=void 0),o!==void 0&&(o.e=r,e.x=void 0),e===this.t&&(this.t=o,o===void 0&&Yr(function(){var i;(i=t.Z)==null||i.call(t)}))}};U.prototype.subscribe=function(e){var t=this;return Kt(function(){var r=t.value,o=L;L=void 0;try{e(r)}finally{L=o}},{name:"sub"})};U.prototype.valueOf=function(){return this.value};U.prototype.toString=function(){return this.value+""};U.prototype.toJSON=function(){return this.value};U.prototype.peek=function(){var e=L;L=void 0;try{return this.value}finally{L=e}};Object.defineProperty(U.prototype,"value",{get:function(){var e=Vr(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Nt>100)throw new Error("Cycle detected");this.v=e,this.i++,ht++,Pe++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Xt()}}}});function Y(e,t){return new U(e,t)}function Xr(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function qr(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Kr(e){for(var t=e.s,r=void 0;t!==void 0;){var o=t.p;t.i===-1?(t.S.U(t),o!==void 0&&(o.n=t.n),t.n!==void 0&&(t.n.p=o)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=o}e.s=r}function Se(e,t){U.call(this,void 0),this.x=e,this.s=void 0,this.g=ht-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}Se.prototype=new U;Se.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ht))return!0;if(this.g=ht,this.f|=1,this.i>0&&!Xr(this))return this.f&=-2,!0;var e=L;try{qr(this),L=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return L=e,Kr(this),this.f&=-2,!0};Se.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}U.prototype.S.call(this,e)};Se.prototype.U=function(e){if(this.t!==void 0&&(U.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};Se.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(Se.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Vr(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function In(e,t){return new Se(e,t)}function Jr(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Pe++;var r=L;L=void 0;try{t()}catch(o){throw e.f&=-2,e.f|=8,qt(e),o}finally{L=r,Xt()}}}function qt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Jr(e)}function Hn(e){if(L!==this)throw new Error("Out-of-order effect");Kr(this),L=e,this.f&=-2,8&this.f&&qt(this),Xt()}function Re(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}Re.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Re.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Jr(this),qr(this),Pe++;var e=L;return L=this,Hn.bind(this,e)};Re.prototype.N=function(){2&this.f||(this.f|=2,this.o=De,De=this)};Re.prototype.d=function(){this.f|=8,1&this.f||qt(this)};Re.prototype.dispose=function(){this.d()};function Kt(e,t){var r=new Re(e,t);try{r.c()}catch(i){throw r.d(),i}var o=r.d.bind(r);return o[Symbol.dispose]=o,o}var at;function Ae(e,t){z[e]=t.bind(null,z[e]||function(){})}function gt(e){if(at){var t=at;at=void 0,t()}at=e&&e.S()}function Gr(e){var t=this,r=e.data,o=we(r);o.value=r;var i=bt(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var l,u=t.__$u.S(),p=i.value;u(),Lr(p)||((l=t.base)==null?void 0:l.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=p},In(function(){var l=o.value.value;return l===0?0:l===!0?"":l||""})},[]);return i.value}Gr.displayName="_st";Object.defineProperties(U.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Gr},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Ae("__b",function(e,t){if(typeof t.type=="string"){var r,o=t.props;for(var i in o)if(i!=="children"){var s=o[i];s instanceof U&&(r||(t.__np=r={}),r[i]=s,o[i]=s.peek())}}e(t)});Ae("__r",function(e,t){e(t),gt();var r,o=t.__c;o&&(o.__$f&=-2,(r=o.__$u)===void 0&&(o.__$u=r=function(i){var s;return Kt(function(){s=this}),s.c=function(){o.__$f|=1,o.setState({})},s}())),gt(r)});Ae("__e",function(e,t,r,o){gt(),e(t,r,o)});Ae("diffed",function(e,t){gt();var r;if(typeof t.type=="string"&&(r=t.__e)){var o=t.__np,i=t.props;if(o){var s=r.U;if(s)for(var l in s){var u=s[l];u!==void 0&&!(l in o)&&(u.d(),s[l]=void 0)}else r.U=s={};for(var p in o){var d=s[p],g=o[p];d===void 0?(d=Nn(r,p,g,i),s[p]=d):d.o(g,i)}}}e(t)});function Nn(e,t,r,o){var i=t in e&&e.ownerSVGElement===void 0,s=Y(r);return{o:function(l,u){s.value=l,o=u},d:Kt(function(){var l=s.value.value;o[t]!==l&&(o[t]=l,i?e[t]=l:l?e.setAttribute(t,l):e.removeAttribute(t))})}}Ae("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var o=r.U;if(o){r.U=void 0;for(var i in o){var s=o[i];s&&s.d()}}}}else{var l=t.__c;if(l){var u=l.__$u;u&&(l.__$u=void 0,u.d())}}e(t)});Ae("__h",function(e,t,r,o){(o<3||o===9)&&(t.__$f|=2),e(t,r,o)});je.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,o=r&&r.s!==void 0;for(var i in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(o||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(o||4&this.__$f)||3&this.__$f)return!0;for(var s in e)if(s!=="__source"&&e[s]!==this.props[s])return!0;for(var l in this.props)if(!(l in e))return!0;return!1};function we(e){return bt(function(){return Y(e)},[])}var Bn=0;function n(e,t,r,o,i,s){t||(t={});var l,u,p=t;if("ref"in p)for(u in p={},t)u=="ref"?l=t[u]:p[u]=t[u];var d={type:e,props:p,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Bn,__i:-1,__u:0,__source:i,__self:s};if(typeof e=="function"&&(l=e.defaultProps))for(u in l)p[u]===void 0&&(p[u]=l[u]);return z.vnode&&z.vnode(d),d}function Fn({prev:e,next:t}){return!e&&!t?null:n("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[n("div",{class:"pressy-nav-inner",children:[e?n("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[n("span",{class:"pressy-nav-direction",children:"Previous"}),n("span",{class:"pressy-nav-title",children:e.title})]}):n("div",{class:"pressy-nav-placeholder"}),t?n("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[n("span",{class:"pressy-nav-direction",children:"Next"}),n("span",{class:"pressy-nav-title",children:t.title})]}):n("div",{class:"pressy-nav-placeholder"})]}),n("style",{children:`
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
      `})]})}function Zr(){const e=we(!1),t=we({x:0,y:0}),r=we(""),o=I(null);R(()=>{const u=()=>{const p=window.getSelection();if(!p||p.isCollapsed){e.value=!1;return}const d=p.toString().trim();if(d.length<5){e.value=!1;return}r.value=d;const a=p.getRangeAt(0).getBoundingClientRect();t.value={x:a.left+a.width/2,y:a.top-10},e.value=!0};return document.addEventListener("selectionchange",u),document.addEventListener("mouseup",u),()=>{document.removeEventListener("selectionchange",u),document.removeEventListener("mouseup",u)}},[]);const i=()=>{const u=encodeURIComponent(r.value),p=new URL(window.location.href);return p.hash=`:~:text=${u}`,p.toString()},s=async()=>{const u=i(),p=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:p,url:u}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${p}

${u}`),o.current&&(o.current.classList.add("copied"),setTimeout(()=>{var d;(d=o.current)==null||d.classList.remove("copied")},2e3))}catch(d){console.error("Failed to copy to clipboard:",d)}},l=async()=>{const u=i();try{await navigator.clipboard.writeText(u),o.current&&(o.current.classList.add("copied"),setTimeout(()=>{var p;(p=o.current)==null||p.classList.remove("copied")},2e3))}catch(p){console.error("Failed to copy link:",p)}};return e.value?n("div",{ref:o,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[n("button",{class:"pressy-share-btn",onClick:s,"aria-label":"Share selected text",title:"Share quote",children:n("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:n("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),n("button",{class:"pressy-copy-link-btn",onClick:l,"aria-label":"Copy link to selected text",title:"Copy link",children:n("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:n("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),n("style",{children:`
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
      `})]}):null}function Qr(){const e=we(!navigator.onLine),t=we(!1);return R(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},o=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",o),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",o)}},[]),t.value?n("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?n(xe,{children:[n("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:n("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),n("span",{children:"You're offline"})]}):n(xe,{children:[n("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:n("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),n("span",{children:"Back online"})]}),n("style",{children:`
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
      `})]}):null}var jn=`
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

  /* ── TTS footer icon ───────────────────────────────────── */
  .pressy-page-footer--scroll .pressy-tts-icon {
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

  .pressy-page-footer--scroll .pressy-tts-icon:hover {
    color: var(--color-text, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-page-footer--scroll .pressy-tts-icon--playing {
    color: var(--color-link, #2563eb);
  }

  @keyframes pressy-tts-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .pressy-page-footer--scroll .pressy-tts-icon--playing svg {
    animation: pressy-tts-pulse 1.5s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .pressy-page-footer--scroll {
      transition: none;
    }
    .pressy-toc-backdrop--scroll,
    .pressy-toc-backdrop--scroll .pressy-toc-drawer {
      animation: none;
    }
    .pressy-page-footer--scroll .pressy-tts-icon--playing svg {
      animation: none;
    }
  }
`;function en({ttsProps:e}){if(!e||!e.supported)return null;const t=e.isPlaying;return n("button",{class:`pressy-tts-icon ${t?"pressy-tts-icon--playing":""}`,onClick:r=>{r.stopPropagation(),e.onToggle()},"aria-label":t?"Stop listening":"Listen to this chapter",title:t?"Stop listening":"Listen",children:t?n("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"18",height:"18",children:n("rect",{x:"6",y:"6",width:"12",height:"12",rx:"1"})}):n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[n("path",{d:"M3 18v-6a9 9 0 0 1 18 0v6"}),n("path",{d:"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"})]})})}function tn({offlineProps:e}){if(!e)return null;const{bookSlug:t,chapterUrls:r,cachedBooks:o,onDownload:i,onRemove:s}=e;return o.value.has(t)?n("button",{class:"pressy-offline-icon pressy-offline-icon--cached",onClick:u=>{u.stopPropagation(),s(t)},"aria-label":"Available offline. Click to remove.",title:"Available offline. Click to remove.",children:[n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[n("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),n("polyline",{points:"9 15 12 18 15 15"}),n("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]}),n("svg",{class:"pressy-offline-check",viewBox:"0 0 24 24",fill:"currentColor",width:"10",height:"10",children:n("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})})]}):n("button",{class:"pressy-offline-icon",onClick:u=>{u.stopPropagation(),i(t,r)},"aria-label":"Download for offline reading",title:"Download for offline reading",children:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[n("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),n("polyline",{points:"9 15 12 18 15 15"}),n("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]})})}function Dn({children:e,bookTitle:t,prevChapter:r,nextChapter:o,showDropCap:i,onSaveProgress:s,onRestoreProgress:l,allChapters:u,bookBasePath:p,currentChapterSlug:d,offlineProps:g,ttsProps:a}){const v=I(null),[f,b]=O(!1),$=I(null),[x,k]=O(!1),[C,A]=O(!1),S=W(()=>{b(!0),$.current&&clearTimeout($.current),$.current=setTimeout(()=>b(!1),3e3)},[]),[ne,P]=O(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[oe,ie]=O(()=>{if(typeof localStorage<"u"){const y=localStorage.getItem("pressy-font-size");return y?parseFloat(y):1}return 1}),ee=W(y=>{y===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${y})`)},[]);R(()=>{oe!==1&&ee(oe)},[]);const ye=W(y=>{P(y),localStorage.setItem("pressy-theme",y);const F=y==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":y;document.documentElement.setAttribute("data-theme",F)},[]),H=W(y=>{ie(F=>{const Oe=Math.round(Math.max(.8,Math.min(1.5,F+y))*10)/10;return localStorage.setItem("pressy-font-size",String(Oe)),ee(Oe),Oe})},[ee]),J=W(y=>{const F=y.target;if(!F.closest(".pressy-page-footer, .pressy-toc-backdrop, .pressy-toc-toggle")&&!F.closest('a, button, input, select, textarea, [role="button"]')){if(x||C){k(!1),A(!1);return}f?(b(!1),$.current&&clearTimeout($.current)):S()}},[f,x,C,S]);return R(()=>{l&&l().then(y=>{y&&y.scrollPosition>0&&window.scrollTo(0,y.scrollPosition)})},[]),R(()=>{if(!s)return;const y=()=>{v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{s({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",y,{passive:!0}),()=>{window.removeEventListener("scroll",y),v.current&&clearTimeout(v.current)}},[s]),R(()=>{if(!s)return;const y=()=>{s({page:0,totalPages:0,scrollPosition:window.scrollY})},F=()=>{document.visibilityState==="hidden"&&y()};return window.addEventListener("beforeunload",y),document.addEventListener("visibilitychange",F),()=>{window.removeEventListener("beforeunload",y),document.removeEventListener("visibilitychange",F)}},[s]),n("div",{class:"pressy-reader",onClick:J,children:[n("main",{class:"pressy-reader-main",children:n("article",{class:`pressy-prose ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:e})}),n(Zr,{}),n(Fn,{prev:r,next:o}),n(Qr,{}),C&&u&&n("div",{class:"pressy-toc-backdrop pressy-toc-backdrop--scroll",onClick:y=>{y.stopPropagation(),A(!1)},children:n("div",{class:"pressy-toc-drawer",onClick:y=>y.stopPropagation(),children:[n("div",{class:"pressy-toc-header",children:[n("span",{class:"pressy-toc-title",children:"Contents"}),n("button",{class:"pressy-toc-close",onClick:y=>{y.stopPropagation(),A(!1)},"aria-label":"Close table of contents",children:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[n("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),n("nav",{class:"pressy-toc-list",children:[n("a",{href:p&&p.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>A(!1),children:[n("span",{class:"pressy-toc-item-num",children:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:n("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),n("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),u.map((y,F)=>n("a",{href:`${p||""}/${y.slug}`,class:`pressy-toc-item ${y.slug===d?"pressy-toc-item--active":""}`,onClick:()=>A(!1),children:[n("span",{class:"pressy-toc-item-num",children:[F+1,"."]}),n("span",{class:"pressy-toc-item-title",children:y.title})]},y.slug))]})]})}),n("div",{class:`pressy-page-footer pressy-page-footer--scroll ${f||x||C?"pressy-page-footer--visible":""}`,children:[n("div",{class:"pressy-footer-row",children:[u&&u.length>0&&n("button",{class:"pressy-toc-toggle",onClick:y=>{y.stopPropagation(),k(!1),A(!C)},"aria-label":"Table of contents",children:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[n("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),n("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),n("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&n("button",{class:"pressy-footer-title",onClick:y=>{y.stopPropagation(),u&&u.length>0&&(k(!1),A(!C))},children:t}),n(tn,{offlineProps:g}),n(en,{ttsProps:a}),n("button",{class:"pressy-settings-toggle",onClick:y=>{y.stopPropagation(),A(!1),k(!x)},"aria-label":"Settings",children:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[n("circle",{cx:"12",cy:"12",r:"3"}),n("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),n("div",{class:`pressy-settings-panel ${x?"pressy-settings-panel--open":""}`,children:[n("div",{class:"pressy-settings-section",children:[n("div",{class:"pressy-settings-label",children:"Theme"}),n("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[n("circle",{cx:"12",cy:"12",r:"5"}),n("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),n("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),n("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),n("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),n("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),n("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),n("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),n("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:n("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[n("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),n("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),n("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[n("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),n("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(y=>n("button",{class:`pressy-theme-btn ${ne===y.id?"pressy-theme-btn--active":""}`,onClick:F=>{F.stopPropagation(),ye(y.id)},children:[y.icon,n("span",{children:y.label})]},y.id))})]}),n("div",{class:"pressy-settings-section",children:[n("div",{class:"pressy-settings-label",children:"Font Size"}),n("div",{class:"pressy-font-size-controls",children:[n("button",{class:"pressy-font-size-btn",onClick:y=>{y.stopPropagation(),H(-.1)},disabled:oe<=.8,"aria-label":"Decrease font size",children:"A-"}),n("span",{class:"pressy-font-size-value",children:[Math.round(oe*100),"%"]}),n("button",{class:"pressy-font-size-btn",onClick:y=>{y.stopPropagation(),H(.1)},disabled:oe>=1.5,"aria-label":"Increase font size",children:"A+"})]})]}),a&&a.supported&&n("div",{class:"pressy-settings-section",children:[n("div",{class:"pressy-settings-label",children:"Narration Speed"}),n("div",{class:"pressy-font-size-controls",children:[n("button",{class:"pressy-font-size-btn",onClick:y=>{y.stopPropagation(),a.onSetRate(a.rate-.25)},disabled:a.rate<=.5,"aria-label":"Slower narration",children:"Slower"}),n("span",{class:"pressy-font-size-value",children:[a.rate,"x"]}),n("button",{class:"pressy-font-size-btn",onClick:y=>{y.stopPropagation(),a.onSetRate(a.rate+.25)},disabled:a.rate>=2,"aria-label":"Faster narration",children:"Faster"})]})]})]})]}),n("style",{children:jn})]})}var Wn=`
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

  /* ── TTS footer icon ───────────────────────────────────── */
  .pressy-tts-icon {
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

  .pressy-tts-icon:hover {
    color: var(--color-text, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-tts-icon--playing {
    color: var(--color-link, #2563eb);
  }

  @keyframes pressy-tts-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .pressy-tts-icon--playing svg {
    animation: pressy-tts-pulse 1.5s ease-in-out infinite;
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
    .pressy-tts-icon--playing svg {
      animation: none;
    }
  }
`;function Un({title:e}){return n("div",{class:"pressy-chapter-divider",children:n("h2",{class:"pressy-chapter-divider-title",children:e})})}function Yn({children:e,bookTitle:t,prevChapter:r,nextChapter:o,showDropCap:i,onSaveProgress:s,onRestoreProgress:l,bookProgressPercent:u,initialContent:p,chapterMapData:d,currentChapterSlug:g,allChapters:a,bookBasePath:v,onChapterChange:f,mdxComponents:b,offlineProps:$,ttsProps:x}){const k=I(null),C=I(null),A=I(null),[S,ne]=O(0),[P,oe]=O(1),ie=I(1);ie.current=P;const[ee,ye]=O(!1),H=I(!1),J=I(null),y=I(!1),F=I(typeof window<"u"&&new URLSearchParams(window.location.search).get("page")==="last"),[Oe,Ie]=O(F.current||!!l),[G,Qt]=O([]),[V,yn]=O([]),[Z,er]=O(g||""),wt=I(new Set),X=!!(d&&p&&g&&a);R(()=>{if(X&&p&&g){const c=a.find(h=>h.slug===g);Qt([{slug:g,title:(c==null?void 0:c.title)||g,Content:p}]),er(g)}},[]),R(()=>{if(F.current){const c=new URL(window.location.href);c.searchParams.delete("page"),history.replaceState(null,"",c.pathname)}},[]);const[ae,Qe]=O(!1),[se,ge]=O(!1),[vn,_n]=O(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[He,bn]=O(()=>{if(typeof localStorage<"u"){const c=localStorage.getItem("pressy-font-size");return c?parseFloat(c):1}return 1}),xt=W(c=>{c===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${c})`)},[]);R(()=>{He!==1&&xt(He)},[]),R(()=>{var m;const c=k.current;if(!c)return;const h=()=>{c.style.setProperty("--app-height",`${window.innerHeight}px`)};return h(),window.addEventListener("resize",h),(m=window.visualViewport)==null||m.addEventListener("resize",h),()=>{var _;window.removeEventListener("resize",h),(_=window.visualViewport)==null||_.removeEventListener("resize",h)}},[]);const wn=W(c=>{_n(c),localStorage.setItem("pressy-theme",c);const h=c==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":c;document.documentElement.setAttribute("data-theme",h)},[]),[tr,Ce]=O(!1),[rr,$e]=O(0),[nr,le]=O(null),kt=I(0),or=I(0),St=I(0),Ct=I(0),et=I(0),tt=I(!1),Ne=I(!1),sr=W(()=>{if(!X)return;const c=A.current,h=C.current;if(!c||!h)return;const m=h.clientWidth;if(m===0)return;const _=c.querySelectorAll(".pressy-chapter-section"),w=[];_.forEach(T=>{const E=T.getAttribute("data-chapter-slug")||"",M=T.offsetLeft,j=T.scrollWidth,D=Math.floor(M/m),pe=Math.max(D,Math.ceil((M+j)/m)-1);w.push({slug:E,startPage:D,endPage:pe})}),yn(w)},[X]),ce=W(()=>{const c=A.current,h=C.current;if(!c||!h)return;const m=h.clientWidth;if(m===0)return;c.style.columnWidth=`${m}px`,c.scrollWidth;const _=Math.max(1,Math.round(c.scrollWidth/m));oe(_),ye(!0),ne(w=>Math.min(w,_-1)),sr()},[sr]),ir=W(c=>{bn(h=>{const m=Math.round(Math.max(.8,Math.min(1.5,h+c))*10)/10;return localStorage.setItem("pressy-font-size",String(m)),xt(m),setTimeout(()=>ce(),100),m})},[xt,ce]);R(()=>{const c=C.current;if(!c)return;const h=setTimeout(ce,50),m=new ResizeObserver(()=>{ce()});return m.observe(c),()=>{clearTimeout(h),m.disconnect()}},[ce]),R(()=>{if(G.length>0){const c=setTimeout(ce,50);return()=>clearTimeout(c)}},[G.length,ce]),R(()=>{const c=A.current;if(!c)return;const h=c.querySelectorAll("img");if(h.length===0)return;const m=()=>ce();return h.forEach(_=>{_.complete||(_.addEventListener("load",m),_.addEventListener("error",m))}),()=>{h.forEach(_=>{_.removeEventListener("load",m),_.removeEventListener("error",m)})}},[ce,G.length]),R(()=>{if(!(H.current||!ee)){if(F.current){F.current=!1,y.current=!0,ne(P-1),H.current=!0,Ie(!1);return}if(!l){H.current=!0,Ie(!1);return}l().then(c=>{if(H.current){Ie(!1);return}const h=ie.current;if(!c||c.page<=0){H.current=!0,Ie(!1);return}let m;if(c.totalPages<=1||Math.abs(c.totalPages-h)<=2)m=c.page;else{const w=c.page/(c.totalPages-1);m=Math.round(w*(h-1))}const _=Math.max(0,Math.min(m,h-1));y.current=!0,ne(_),H.current=!0,Ie(!1)})}},[ee,P,l]),R(()=>{const c=A.current,h=C.current;if(!c||!h)return;const _=S*h.clientWidth-rr;tr||y.current?(c.style.transition="none",y.current=!1):c.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",c.style.transform=`translateX(-${_}px)`},[S,rr,tr]),R(()=>{const c=A.current,h=C.current;if(!c||!h)return;const m=h.getBoundingClientRect();c.querySelectorAll("a[href], button, input, select, textarea, [tabindex]").forEach(w=>{const T=w.getBoundingClientRect();if(T.left>=m.left-1&&T.right<=m.right+1){const M=w.getAttribute("data-original-tabindex");M!==null&&(M===""?w.removeAttribute("tabindex"):w.setAttribute("tabindex",M),w.removeAttribute("data-original-tabindex"))}else w.hasAttribute("data-original-tabindex")||w.setAttribute("data-original-tabindex",w.getAttribute("tabindex")||""),w.setAttribute("tabindex","-1")})},[S,P]),R(()=>{var j;if(!X||!d||V.length===0)return;const c=V.find(D=>D.slug===Z);if(!c||c.endPage-S>2)return;const{chapterOrder:m,chapterMap:_}=d,w=(j=G[G.length-1])==null?void 0:j.slug,T=m.indexOf(w);if(T===-1||T>=m.length-1)return;const E=m[T+1];if(wt.current.has(E)||G.some(D=>D.slug===E))return;wt.current.add(E);const M=_[E];M&&M().then(D=>{const pe=D.default,me=a.find(fe=>fe.slug===E);Qt(fe=>fe.some(st=>st.slug===E)?fe:[...fe,{slug:E,title:(me==null?void 0:me.title)||E,Content:pe}])}).catch(()=>{wt.current.delete(E)})},[S,Z,V,X,d,G,a]),R(()=>{if(!X||V.length===0||!v)return;const c=V.find(w=>S>=w.startPage&&S<=w.endPage);if(!c||c.slug===Z)return;const h=Z;er(c.slug);const m=`${v}/${c.slug}`;history.replaceState(null,"",m);const _=a==null?void 0:a.find(w=>w.slug===c.slug);if(_&&(document.title=document.title.replace(/^[^|]+/,_.title+" ")),f&&h){const w=V.find(T=>T.slug===h);if(w){const T=w.endPage-w.startPage+1;f(h,T-1,T)}}},[S,V,Z,X,v,a,f]),R(()=>{if(!(!s||!H.current))return J.current&&clearTimeout(J.current),J.current=setTimeout(()=>{if(X&&V.length>0){const c=V.find(h=>h.slug===Z);if(c){const h=S-c.startPage,m=c.endPage-c.startPage+1;s({page:h,totalPages:m,scrollPosition:0,activeChapterSlug:Z})}}else s({page:S,totalPages:P,scrollPosition:0})},300),()=>{J.current&&clearTimeout(J.current)}},[S,P,s,X,V,Z]),R(()=>{if(!s)return;const c=()=>{if(X&&V.length>0){const m=V.find(_=>_.slug===Z);if(m){const _=S-m.startPage,w=m.endPage-m.startPage+1;s({page:_,totalPages:w,scrollPosition:0,activeChapterSlug:Z})}}else s({page:S,totalPages:P,scrollPosition:0})},h=()=>{document.visibilityState==="hidden"&&c()};return window.addEventListener("beforeunload",c),document.addEventListener("visibilitychange",h),()=>{window.removeEventListener("beforeunload",c),document.removeEventListener("visibilitychange",h)}},[S,P,s,X,V,Z]);const ue=(()=>{var _;if(!X||!d)return o;const{chapterOrder:c}=d,h=(_=G[G.length-1])==null?void 0:_.slug;if(!(c.indexOf(h)<c.length-1))return v?{slug:v,title:"Table of Contents"}:o})(),de=(()=>{var T;if(!X||!d)return r;const{chapterOrder:c}=d,h=(T=G[0])==null?void 0:T.slug,m=c.indexOf(h);if(m<=0)return r;const _=c[m-1],w=a==null?void 0:a.find(E=>E.slug===_);return{slug:`${v}/${_}?page=last`,title:(w==null?void 0:w.title)||_}})(),ve=W(c=>{F.current=!1;const h=Math.max(0,Math.min(c,P-1));ne(h)},[P]),Te=W(()=>{if(S>=P-1){ue&&(sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ue.slug);return}ve(S+1)},[S,P,ue,ve]),Ee=W(()=>{if(S<=0){de&&(sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=de.slug);return}ve(S-1)},[S,de,ve]),[rt,_e]=O(!1),q=I(null),$t=W(()=>{_e(!0),q.current&&clearTimeout(q.current),q.current=setTimeout(()=>_e(!1),3e3)},[]),ar=I(0),Be=I(null),lr=W(()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})},[]),nt=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,xn=W(c=>{const h=c.target;if(h.closest(".pressy-settings-panel, .pressy-settings-toggle, .pressy-toc-drawer, .pressy-toc-toggle")||h.closest('a, button, input, select, textarea, [role="button"]'))return;if(ae||se){Qe(!1),ge(!1);return}if(nt){rt?(_e(!1),q.current&&clearTimeout(q.current)):$t();return}const m=k.current;if(!m)return;const _=m.getBoundingClientRect(),w=c.clientX-_.left,T=_.width*.15;if(w<T)Ee();else if(w>_.width-T)Te();else{const E=Date.now(),M=E-ar.current;ar.current=E,M<300?(Be.current&&clearTimeout(Be.current),lr()):(Be.current&&clearTimeout(Be.current),Be.current=setTimeout(()=>{rt?(_e(!1),q.current&&clearTimeout(q.current)):$t()},300))}},[Te,Ee,rt,nt,ae,se,$t,lr]),[cr,ot]=O(null),kn=W(c=>{if(nt)return;const h=k.current;if(!h)return;const m=h.getBoundingClientRect(),_=c.clientX-m.left,w=c.clientY-m.top,T=m.width/3;_<T?ot("left"):_>T*2?ot("right"):ot(null),w>m.height*.75?(_e(!0),q.current&&clearTimeout(q.current)):!ae&&!se&&(q.current&&clearTimeout(q.current),q.current=setTimeout(()=>_e(!1),600))},[nt,ae,se]),Sn=W(()=>{ot(null),!ae&&!se&&(q.current&&clearTimeout(q.current),q.current=setTimeout(()=>_e(!1),600))},[ae,se]);R(()=>{const c=h=>{const m=h.target.tagName;m==="INPUT"||m==="TEXTAREA"||m==="SELECT"||(h.key==="ArrowRight"||h.key===" "?(h.preventDefault(),Te()):h.key==="ArrowLeft"?(h.preventDefault(),Ee()):h.key==="Home"?(h.preventDefault(),ve(0)):h.key==="End"&&(h.preventDefault(),ve(P-1)))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[Te,Ee,ve,P]),R(()=>{const c=k.current;if(!c)return;const h=T=>{const E=T.touches[0];kt.current=E.clientX,or.current=E.clientY,St.current=E.clientX,Ct.current=performance.now(),et.current=0,tt.current=!1,Ne.current=!1},m=T=>{const E=T.touches[0],M=E.clientX-kt.current,j=E.clientY-or.current;if(!tt.current)if(Math.abs(M)>Math.abs(j)&&Math.abs(M)>10)tt.current=!0;else return Math.abs(j)>Math.abs(M)&&Math.abs(j)>10,void 0;T.preventDefault();const D=performance.now(),pe=D-Ct.current;if(pe>0){const Tt=(E.clientX-St.current)/pe;et.current=.6*Tt+.4*et.current}St.current=E.clientX,Ct.current=D;let me=M;const fe=S===0,st=S>=P-1;if(fe&&M>0||st&&M<0){const Tt=M>0?1:-1,$n=Math.abs(M);me=Tt*Math.sqrt($n)*5,M>40&&fe&&de?le("prev"):M<-40&&st&&ue?le("next"):le(null)}else le(null);Ne.current=!0,Ce(!0),$e(me)},_=T=>{if(!tt.current||!Ne.current){Ce(!1),$e(0),le(null);return}const E=T.changedTouches[0].clientX-kt.current,M=et.current,j=50,D=.3,pe=80,me=S===0;if(S>=P-1&&E<-pe&&ue){Ce(!1),$e(0),le(null),sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ue.slug;return}if(me&&E>pe&&de){Ce(!1),$e(0),le(null),sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=de.slug;return}E<-j||M<-D?Te():(E>j||M>D)&&Ee(),Ne.current=!1,Ce(!1),$e(0),le(null)},w=()=>{Ne.current=!1,Ce(!1),$e(0),le(null)};return c.addEventListener("touchstart",h,{passive:!0}),c.addEventListener("touchmove",m,{passive:!1}),c.addEventListener("touchend",_,{passive:!0}),c.addEventListener("touchcancel",w,{passive:!0}),()=>{c.removeEventListener("touchstart",h),c.removeEventListener("touchmove",m),c.removeEventListener("touchend",_),c.removeEventListener("touchcancel",w)}},[S,P,Te,Ee,ue,de]),(()=>{if(!X||V.length===0)return{chapterPage:S,chapterTotalPages:P};const c=V.find(h=>h.slug===Z);return c?{chapterPage:S-c.startPage,chapterTotalPages:c.endPage-c.startPage+1}:{chapterPage:S,chapterTotalPages:P}})();const Cn=(()=>{var M;if(!a||a.length===0)return P>1?S/(P-1)*100:100;const c=a.reduce((j,D)=>j+(D.wordCount||0),0);if(c===0)return 0;const h=((M=G[0])==null?void 0:M.slug)||Z;let m=0,_=0,w=!1;for(const j of a)if(j.slug===h&&(w=!0),!w)m+=j.wordCount||0;else if(G.some(D=>D.slug===j.slug))_+=j.wordCount||0;else break;const T=P>1?S/(P-1):0,E=m+T*_;return Math.min(100,E/c*100)})();return n("div",{class:"pressy-reader pressy-reader--paginated",ref:k,onClick:xn,onMouseMove:kn,onMouseLeave:Sn,children:[n("div",{class:"pressy-paginated-viewport",ref:C,style:Oe?{opacity:0}:{opacity:1,transition:"opacity 0.15s ease"},children:n("article",{ref:A,class:`pressy-prose pressy-prose--paginated ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:X&&G.length>0?G.map(c=>n("section",{class:"pressy-chapter-section","data-chapter-slug":c.slug,children:[n(Un,{title:c.title}),n(c.Content,{components:b||{}})]},c.slug)):e})}),n("div",{class:`pressy-nav-arrow pressy-nav-arrow--prev ${cr==="left"?"pressy-nav-arrow--visible":""}`,children:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:n("polyline",{points:"15 18 9 12 15 6"})})}),n("div",{class:`pressy-nav-arrow pressy-nav-arrow--next ${cr==="right"?"pressy-nav-arrow--visible":""}`,children:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:n("polyline",{points:"9 6 15 12 9 18"})})}),nr==="prev"&&de&&n("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[n("span",{class:"pressy-chapter-hint-arrow",children:"←"}),n("span",{class:"pressy-chapter-hint-text",children:de.title})]}),nr==="next"&&ue&&n("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[n("span",{class:"pressy-chapter-hint-text",children:ue.title}),n("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),se&&a&&n("div",{class:"pressy-toc-backdrop",onClick:c=>{c.stopPropagation(),ge(!1)},children:n("div",{class:"pressy-toc-drawer",onClick:c=>c.stopPropagation(),children:[n("div",{class:"pressy-toc-header",children:[n("span",{class:"pressy-toc-title",children:"Contents"}),n("button",{class:"pressy-toc-close",onClick:c=>{c.stopPropagation(),ge(!1)},"aria-label":"Close table of contents",children:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[n("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),n("nav",{class:"pressy-toc-list",children:[n("a",{href:v&&v.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>ge(!1),children:[n("span",{class:"pressy-toc-item-num",children:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:n("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),n("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),a.map((c,h)=>n("a",{href:`${v||""}/${c.slug}`,class:`pressy-toc-item ${c.slug===(Z||g)?"pressy-toc-item--active":""}`,onClick:()=>ge(!1),children:[n("span",{class:"pressy-toc-item-num",children:[h+1,"."]}),n("span",{class:"pressy-toc-item-title",children:c.title})]},c.slug))]})]})}),n("div",{class:`pressy-page-footer ${rt||ae||se?"pressy-page-footer--visible":""}`,children:[n("div",{class:"pressy-progress-bar",children:n("div",{class:"pressy-progress-fill",style:{width:`${Cn}%`}})}),n("div",{class:"pressy-footer-row",children:[a&&a.length>0&&n("button",{class:"pressy-toc-toggle",onClick:c=>{c.stopPropagation(),Qe(!1),ge(!se)},"aria-label":"Table of contents",children:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[n("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),n("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),n("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&n("button",{class:"pressy-footer-title",onClick:c=>{c.stopPropagation(),a&&a.length>0&&(Qe(!1),ge(!se))},children:t}),n(tn,{offlineProps:$}),n(en,{ttsProps:x}),n("button",{class:"pressy-settings-toggle",onClick:c=>{c.stopPropagation(),ge(!1),Qe(!ae)},"aria-label":"Settings",children:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[n("circle",{cx:"12",cy:"12",r:"3"}),n("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),n("div",{class:`pressy-settings-panel ${ae?"pressy-settings-panel--open":""}`,children:[n("div",{class:"pressy-settings-section",children:[n("div",{class:"pressy-settings-label",children:"Theme"}),n("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[n("circle",{cx:"12",cy:"12",r:"5"}),n("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),n("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),n("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),n("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),n("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),n("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),n("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),n("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:n("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[n("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),n("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),n("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:n("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[n("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),n("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(c=>n("button",{class:`pressy-theme-btn ${vn===c.id?"pressy-theme-btn--active":""}`,onClick:h=>{h.stopPropagation(),wn(c.id)},children:[c.icon,n("span",{children:c.label})]},c.id))})]}),n("div",{class:"pressy-settings-section",children:[n("div",{class:"pressy-settings-label",children:"Font Size"}),n("div",{class:"pressy-font-size-controls",children:[n("button",{class:"pressy-font-size-btn",onClick:c=>{c.stopPropagation(),ir(-.1)},disabled:He<=.8,"aria-label":"Decrease font size",children:"A-"}),n("span",{class:"pressy-font-size-value",children:[Math.round(He*100),"%"]}),n("button",{class:"pressy-font-size-btn",onClick:c=>{c.stopPropagation(),ir(.1)},disabled:He>=1.5,"aria-label":"Increase font size",children:"A+"})]})]}),x&&x.supported&&n("div",{class:"pressy-settings-section",children:[n("div",{class:"pressy-settings-label",children:"Narration Speed"}),n("div",{class:"pressy-font-size-controls",children:[n("button",{class:"pressy-font-size-btn",onClick:c=>{c.stopPropagation(),x.onSetRate(x.rate-.25)},disabled:x.rate<=.5,"aria-label":"Slower narration",children:"Slower"}),n("span",{class:"pressy-font-size-value",children:[x.rate,"x"]}),n("button",{class:"pressy-font-size-btn",onClick:c=>{c.stopPropagation(),x.onSetRate(x.rate+.25)},disabled:x.rate>=2,"aria-label":"Faster narration",children:"Faster"})]})]})]})]}),n(Zr,{}),n(Qr,{}),n("style",{children:Wn})]})}function Jt({children:e,bookTitle:t,prevChapter:r,nextChapter:o,showDropCap:i=!0,paginationMode:s="scroll",onSaveProgress:l,onRestoreProgress:u,bookProgressPercent:p,initialContent:d,chapterMapData:g,currentChapterSlug:a,allChapters:v,bookBasePath:f,onChapterChange:b,mdxComponents:$,offlineProps:x,ttsProps:k}){return s==="paginated"?n(Yn,{bookTitle:t,prevChapter:r,nextChapter:o,showDropCap:i,onSaveProgress:l,onRestoreProgress:u,bookProgressPercent:p,initialContent:d,chapterMapData:g,currentChapterSlug:a,allChapters:v,bookBasePath:f,onChapterChange:b,mdxComponents:$,offlineProps:x,ttsProps:k,children:e}):n(Dn,{bookTitle:t,prevChapter:r,nextChapter:o,showDropCap:i,onSaveProgress:l,onRestoreProgress:u,allChapters:v,bookBasePath:f,currentChapterSlug:a,offlineProps:x,ttsProps:k,children:e})}function Vn({id:e,children:t}){const r=we(!1);return n("span",{class:"pressy-footnote-wrapper",children:[n("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&n("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,n("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),n("style",{children:`
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
      `})]})}function Xn({children:e,title:t}){return n("aside",{class:"pressy-aside",children:[t&&n("strong",{class:"pressy-aside-title",children:t}),n("div",{class:"pressy-aside-content",children:e}),n("style",{children:`
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
      `})]})}function xr({src:e,alt:t,caption:r,wide:o,children:i}){return n("figure",{class:`pressy-figure ${o?"pressy-figure-wide":""}`,children:[n("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||i)&&n("figcaption",{class:"pressy-figure-caption",children:r||i}),n("style",{children:`
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
      `})]})}var qn={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},Kn={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function Jn({type:e="note",title:t,children:r}){return n("div",{class:`pressy-callout pressy-callout-${e}`,children:[n("div",{class:"pressy-callout-header",children:[n("span",{class:"pressy-callout-icon",children:qn[e]}),n("strong",{class:"pressy-callout-title",children:t||Kn[e]})]}),n("div",{class:"pressy-callout-content",children:r}),n("style",{children:`
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
      `})]})}function kr({variant:e="asterisks"}){return n("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&n("span",{children:"* * *"}),e==="ornament"&&n("span",{children:"❧"}),n("style",{children:`
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
      `})]})}var Gn={Footnote:Vn,Aside:Xn,Figure:xr,Callout:Jn,SceneBreak:kr,img:xr,hr:kr},Zn={};function Le(){return{...Gn,...Zn}}var rn="pressy-cached-books",Pt=Y("online"),mt=Y(null),Lt=Y(!1),qe=Y(null);function Qn(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(rn);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var te=Y(Qn());typeof window<"u"&&(Pt.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{Pt.value="online"}),window.addEventListener("offline",()=>{Pt.value="offline"}));function eo(){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),qe.value=e}),window.addEventListener("appinstalled",()=>{qe.value=null})}async function to(){const e=qe.value;if(!e)return!1;e.prompt();const{outcome:t}=await e.userChoice;return qe.value=null,t==="accepted"}async function ro(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const o=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",no),navigator.serviceWorker.controller?Lt.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{Lt.value=!0}),o.addEventListener("updatefound",()=>{const i=o.installing;i&&i.addEventListener("statechange",()=>{i.state==="activated"&&(Lt.value=!0)})}),o}catch(o){return console.error("Service worker registration failed:",o),null}}function We(){try{localStorage.setItem(rn,JSON.stringify([...te.value]))}catch{}}function no(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:o,total:i}=e.data;mt.value={bookSlug:r,current:o,total:i}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;mt.value=null;const o=new Set(te.value);o.add(r),te.value=o,We()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,o=new Set;for(const i of r){const s=i.match(/\/books\/([^/]+)/);s&&o.add(s[1])}te.value=o,We()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,o=new Set(te.value);o.delete(r),te.value=o,We()}}async function nn(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(i=>i.startsWith("http")?i:`${window.location.origin}${i}`);mt.value={bookSlug:e,current:0,total:r.length};const o=new Set(te.value);return o.add(e),te.value=o,We(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}function oo(e){return te.value.has(e)}async function so(e){const t=new Set(te.value);if(t.delete(e),te.value=t,We(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),o=await r.keys();for(const i of o)i.url.includes(`/books/${e}`)&&await r.delete(i);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var Ke=Y(!1),Q=Y(!1),Je=Y(""),ke=Y(0),io=Y(0),Ze=Y(1),on=Y(0),sn="pressy-tts-rate",an="pressy-tts-position",Bt="",Ue=[],ln={},cn={},Fe=[],re=!1,dt=null;function ao(){if(Ke.value=typeof window<"u"&&"speechSynthesis"in window,!!Ke.value){try{const e=localStorage.getItem(sn);if(e){const t=parseFloat(e);!isNaN(t)&&t>=.5&&t<=2&&(Ze.value=t)}}catch{}window.addEventListener("beforeunload",()=>{Q.value&&(Ge(),speechSynthesis.cancel())}),document.addEventListener("visibilitychange",()=>{Q.value&&document.hidden&&Ge()})}}function Ge(){if(!(!Bt||!Je.value))try{localStorage.setItem(an,JSON.stringify({bookSlug:Bt,chapterSlug:Je.value,paragraphIndex:ke.value}))}catch{}}function lo(){try{const e=localStorage.getItem(an);if(e){const t=JSON.parse(e);if(t.bookSlug&&t.chapterSlug&&typeof t.paragraphIndex=="number")return t}}catch{}return null}var co=["style","script","svg","button","nav",".pressy-footnote-ref",".pressy-footnote-content",".pressy-footnote-close",".pressy-chapter-divider",'[aria-hidden="true"]'].join(", "),uo=new Set(["P","H1","H2","H3","H4","H5","H6","LI","BLOCKQUOTE","FIGCAPTION","TD","TH"]);function po(e){const t=[];function r(o){var i;if(o.nodeType===Node.ELEMENT_NODE){const s=o;if(s.matches(co))return;if(uo.has(s.tagName)){const l=(i=s.textContent)==null?void 0:i.trim();l&&t.push(l);return}}for(const s of Array.from(o.childNodes))r(s)}return r(e),t}function fo(e){const t=[],r=e.match(/[^.!?]*(?:[.!?]+["'\u201D\u2019)}\]]*\s*)/g);if(!r)return e.trim()?[e.trim()]:[];let o="";for(const s of r){o+=s;const l=o.trim();l.length>2&&(t.push(l),o="")}const i=o.trim();return i&&(t.length>0?t[t.length-1]+=" "+i:t.push(i)),t.filter(Boolean)}function ho(e){const t=[];for(const r of e){const o=fo(r);t.push(...o)}return t}async function go(e){const t=ln[e];if(!t)return[];const o=(await t()).default,i=document.createElement("div");i.style.position="absolute",i.style.left="-9999px",i.style.visibility="hidden",document.body.appendChild(i),It(Or(o,{components:cn}),i);const s=po(i);return It(null,i),document.body.removeChild(i),ho(s)}function mo(){un(),dt=setInterval(()=>{speechSynthesis.speaking&&!speechSynthesis.paused&&(speechSynthesis.pause(),speechSynthesis.resume())},1e4)}function un(){dt!==null&&(clearInterval(dt),dt=null)}function yt(e,t){if(!Q.value||re)return;if(t>=e.length){dn();return}const r=new SpeechSynthesisUtterance(e[t]);r.rate=Ze.value,r.onend=()=>{!Q.value||re||(ke.value=t+1,Ge(),yt(e,t+1))},r.onerror=o=>{o.error==="canceled"||o.error==="interrupted"||Q.value&&!re&&(ke.value=t+1,yt(e,t+1))},speechSynthesis.speak(r)}function dn(){const e=Ue.findIndex(o=>o.slug===Je.value);if(e<0||e>=Ue.length-1){Gt();return}const t=Ue[e+1];Je.value=t.slug,on.value=e+1,ke.value=0,Ge();const r=new SpeechSynthesisUtterance(t.title);r.rate=Ze.value,r.onend=()=>{!Q.value||re||Ft(t.slug)},r.onerror=()=>{Q.value&&!re&&Ft(t.slug)},speechSynthesis.speak(r)}async function Ft(e){if(!(!Q.value||re)){if(Fe=await go(e),io.value=Fe.length,Fe.length===0){dn();return}yt(Fe,ke.value)}}function pn(e){if(!Ke.value)return;re=!0,speechSynthesis.cancel(),re=!1,Bt=e.bookSlug,Ue=e.allChapters,ln=e.chapterMap,cn=e.mdxComponents;const t=Ue.findIndex(r=>r.slug===e.chapterSlug);Je.value=e.chapterSlug,on.value=t>=0?t:0,ke.value=e.paragraphIndex||0,Q.value=!0,mo(),Ft(e.chapterSlug)}function Gt(){Ge(),re=!0,Q.value=!1,speechSynthesis.cancel(),re=!1,un()}function yo(e){const t=Math.max(.5,Math.min(2,e));Ze.value=t;try{localStorage.setItem(sn,String(t))}catch{}Q.value&&(re=!0,speechSynthesis.cancel(),re=!1,yt(Fe,ke.value))}var Sr=Y("/"),fn=Y("light"),Cr=Y(!navigator.onLine),vo="pressy",_o=1,Me="reading-progress",$r="unlocks",lt=null;async function Zt(){return lt||new Promise((e,t)=>{const r=indexedDB.open(vo,_o);r.onerror=()=>t(r.error),r.onsuccess=()=>{lt=r.result,e(lt)},r.onupgradeneeded=o=>{const i=o.target.result;i.objectStoreNames.contains(Me)||i.createObjectStore(Me,{keyPath:"chapterSlug"}),i.objectStoreNames.contains($r)||i.createObjectStore($r,{keyPath:"bookSlug"})}})}async function Tr(e){const t=await Zt();return new Promise((r,o)=>{const l=t.transaction(Me,"readwrite").objectStore(Me).put(e);l.onsuccess=()=>r(),l.onerror=()=>o(l.error)})}async function pt(){const e=await Zt();return new Promise((t,r)=>{const s=e.transaction(Me,"readonly").objectStore(Me).getAll();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>r(s.error)})}function hn(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Er(e){fn.value=e,localStorage.setItem("pressy-theme",e);const t=e==="system"?hn():e;document.documentElement.setAttribute("data-theme",t)}function bo(){const e=localStorage.getItem("pressy-theme");e?Er(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&Er("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{fn.value==="system"&&document.documentElement.setAttribute("data-theme",hn())})}function wo(){window.addEventListener("online",()=>{Cr.value=!1}),window.addEventListener("offline",()=>{Cr.value=!0})}function xo({book:e}){const[t,r]=O(null);return R(()=>{if(e.chapters.length===0)return;const o=`${K}/books/${e.slug}/${e.chapters[0].slug}`;pt().then(i=>{const s=new Map(i.map(u=>[u.chapterSlug,u]));let l=null;for(const u of e.chapters){const p=s.get(u.slug);if(!p)continue;!(p.totalPages>0&&p.page>=p.totalPages-1)&&p.page>0&&(l=u)}r(l?{label:"Continue Reading",href:`${K}/books/${e.slug}/${l.slug}`}:{label:"Start Reading",href:o})}).catch(()=>{r({label:"Start Reading",href:o})})},[e]),t?n("a",{href:t.href,class:"pressy-cta",children:t.label}):null}function ko(){return qe.value?n("button",{class:"pressy-cta pressy-cta-secondary",onClick:()=>to(),children:"Install"}):null}var jt;function So({book:e}){if(!Ke.value)return null;const t=Q.value;return n("button",{class:"pressy-cta pressy-cta-secondary",onClick:()=>{var l;if(t){Gt();return}if(!jt)return;const o=lo();let i=(l=e.chapters[0])==null?void 0:l.slug,s=0;o&&o.bookSlug===e.slug&&(i=o.chapterSlug,s=o.paragraphIndex),i&&pn({bookSlug:e.slug,chapterSlug:i,paragraphIndex:s,allChapters:e.chapters.map(u=>({slug:u.slug,title:u.title})),chapterMap:jt.chapterMap,mdxComponents:Le()})},children:t?"Stop Listening":"Listen"})}function gn(e,t=[]){const r=e.chapters.reduce((u,p)=>u+(p.wordCount||0),0),o=Math.ceil(r/200),i=e.chapters.length,s=e.metadata.publishDate?new Date(e.metadata.publishDate).getFullYear():null,l=r.toLocaleString();return n("div",{class:"pressy-home",children:[n("div",{class:"pressy-hero",children:[e.coverUrl&&n("img",{src:K+e.coverUrl,alt:`${e.metadata.title} cover`,class:"pressy-hero-cover"}),n("div",{class:"pressy-hero-text",children:[n("header",{class:"pressy-home-header",children:[n("h1",{children:e.metadata.title}),n("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&n("p",{class:"pressy-home-desc",children:e.metadata.description})]}),r>0&&n("div",{class:"pressy-stats",children:[n("span",{children:[i," chapter",i!==1?"s":""]}),n("span",{class:"pressy-stats-sep",children:"·"}),n("span",{children:[l," words"]}),n("span",{class:"pressy-stats-sep",children:"·"}),n("span",{children:["~",o," min"]}),s&&n(xe,{children:[n("span",{class:"pressy-stats-sep",children:"·"}),n("span",{children:["First published ",s]})]})]}),i>0&&n("div",{class:"pressy-cta-group",children:[n(xo,{book:e}),n(So,{book:e}),n(ko,{})]})]})]}),t.length>0&&n("section",{class:"pressy-home-section pressy-fade-sections",children:[n("h2",{children:"Articles"}),n("nav",{class:"pressy-chapter-list",children:t.map(u=>n("a",{href:`${K}/articles/${u.slug}`,class:"pressy-chapter-link",children:u.metadata.title}))})]}),n("style",{children:mn})]})}function zt(e){var r,o;if(e.books.length===1)return gn(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return n("div",{class:"pressy-home",children:[n("header",{class:"pressy-home-header",children:[n("h1",{children:t}),((o=e.books[0])==null?void 0:o.metadata.description)&&n("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&n("section",{class:"pressy-home-section",children:[n("h2",{children:"Books"}),n("nav",{class:"pressy-chapter-list",children:e.books.map(i=>n("a",{href:`${K}/books/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),e.articles.length>0&&n("section",{class:"pressy-home-section",children:[n("h2",{children:"Articles"}),n("nav",{class:"pressy-chapter-list",children:e.articles.map(i=>n("a",{href:`${K}/articles/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),n("style",{children:mn})]})}function Mt(e,t,r,o,i){const s=e.chapters.reduce((p,d)=>p+(d.wordCount||0),0);if(s===0)return 0;const l=new Map(i.map(p=>[p.chapterSlug,p]));let u=0;for(const p of e.chapters){const d=p.wordCount||0;if(p.slug===t)o>0&&(u+=r/Math.max(1,o-1)*d);else{const g=l.get(p.slug);if(!g)continue;g.totalPages>0&&g.page>=g.totalPages-1?u+=d:g.page>0&&g.totalPages>0&&(u+=g.page/g.totalPages*d)}}return Math.min(100,u/s*100)}function Co({book:e,chapterSlug:t,chapter:r,prevChapter:o,nextChapter:i,paginationMode:s,Content:l,chapterMapData:u}){const[p,d]=O(void 0);R(()=>{pt().then(f=>{const b=Mt(e,t,0,0,f);d(b)})},[e,t]);const g=f=>{const b=f.activeChapterSlug||t;localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:b,page:f.page,totalPages:f.totalPages,scrollPosition:f.scrollPosition})),Tr({chapterSlug:b,page:f.page,totalPages:f.totalPages,scrollPosition:f.scrollPosition,timestamp:Date.now()}),f.totalPages>0&&pt().then($=>{const x=Mt(e,b,f.page,f.totalPages,$);d(x)})},a=async()=>{try{const f=localStorage.getItem("pressy-last-read");if(f){const b=JSON.parse(f);if(b.chapterSlug===t&&b.page>0)return{page:b.page,totalPages:b.totalPages,scrollPosition:b.scrollPosition||0}}}catch{}return null},v=(f,b,$)=>{Tr({chapterSlug:f,page:b,totalPages:$,scrollPosition:0,timestamp:Date.now()}),localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:f,page:b,totalPages:$})),pt().then(x=>{const k=Mt(e,f,b,$,x);d(k)})};return R(()=>{if(o){const f=document.createElement("link");return f.rel="prefetch",f.href=o.slug,document.head.appendChild(f),()=>{document.head.removeChild(f)}}},[o]),n(Jt,{title:(r==null?void 0:r.title)||t,bookTitle:e.metadata.title,chapterSlug:t,prevChapter:o,nextChapter:i,paginationMode:s,onSaveProgress:g,onRestoreProgress:a,bookProgressPercent:p,initialContent:l,chapterMapData:u,currentChapterSlug:t,allChapters:e.chapters.map(f=>({slug:f.slug,title:f.title,wordCount:f.wordCount})),bookBasePath:`${K}/books/${e.slug}`,onChapterChange:v,mdxComponents:Le(),offlineProps:{bookSlug:e.slug,chapterUrls:e.chapters.map(f=>`${K}/books/${e.slug}/${f.slug}`),cachedBooks:te,cacheProgress:mt,onDownload:nn,onRemove:so},ttsProps:{supported:Ke.value,isPlaying:Q.value,rate:Ze.value,onToggle:()=>{Q.value?Gt():u&&pn({bookSlug:e.slug,chapterSlug:t,paragraphIndex:0,allChapters:e.chapters.map(f=>({slug:f.slug,title:f.title})),chapterMap:u.chapterMap,mdxComponents:Le()})},onSetRate:yo},children:n(l,{components:Le()})})}function $o(e,t,r,o,i){const s=t.split("/"),l=s[2],u=s[3],p=e.books.find($=>$.slug===l),d=p?p.chapters.findIndex($=>$.slug===u):-1,g=p==null?void 0:p.chapters[d],a=$=>`${K}/books/${l}/${$.slug}`,v=p&&d>0?{slug:a(p.chapters[d-1]),title:p.chapters[d-1].title}:p?{slug:`${K}/books/${l}`,title:p.metadata.title}:void 0,f=p&&d>=0&&d<p.chapters.length-1?{slug:a(p.chapters[d+1]),title:p.chapters[d+1].title}:p?{slug:`${K}/books/${l}`,title:p.metadata.title}:void 0,b=r;return p?n(Co,{book:p,chapterSlug:u,chapter:g,prevChapter:v,nextChapter:f,paginationMode:o,Content:b,chapterMapData:i}):n(Jt,{title:(g==null?void 0:g.title)||u,prevChapter:v,nextChapter:f,paginationMode:o,children:n(b,{components:Le()})})}function To(e,t,r){const o=t.split("/")[2],i=e.articles.find(l=>l.slug===o),s=r;return n(Jt,{title:(i==null?void 0:i.metadata.title)||o,children:n(s,{components:Le()})})}var mn=`
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
  .pressy-cta-group {
    display: flex;
    flex-wrap: wrap;
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
`;function Eo(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,o=e.endsWith("/")?e.slice(0,-1):e;if(o===""||o==="/")return r.replace(/\/index\.html$/,"")||"";const i=r.indexOf(o);return i>0?r.slice(0,i):""}var K="";function Lo(e,t,r){var l;K=Eo(e.route),Sr.value=e.route;const o=!sessionStorage.getItem("pressy-session-active");sessionStorage.setItem("pressy-session-active","1"),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&sessionStorage.removeItem("pressy-session-active")});const i=sessionStorage.getItem("pressy-internal-nav");if(sessionStorage.removeItem("pressy-internal-nav"),o&&!i&&(e.routeType==="home"||e.routeType==="book")){const u=localStorage.getItem("pressy-last-read");if(u)try{const{bookSlug:p,chapterSlug:d}=JSON.parse(u),g=e.manifest.books.find(a=>a.slug===p);if(g!=null&&g.chapters.some(a=>a.slug===d)){window.location.replace(`${K}/books/${p}/${d}`);return}}catch{}}r&&(jt=r),bo(),wo(),eo(),Zt(),ao(),ro(K),window.addEventListener("appinstalled",()=>{for(const u of e.manifest.books){if(oo(u.slug))continue;const p=u.chapters.map(d=>`${K}/books/${u.slug}/${d.slug}`);nn(u.slug,p)}}),window.addEventListener("popstate",()=>{Sr.value=window.location.pathname}),document.addEventListener("click",u=>{const p=u.target.closest("a");if(!p)return;const d=p.getAttribute("href");if(d&&!(d.startsWith("http")||d.startsWith("#"))&&d.startsWith(e.route+"#")){u.preventDefault();const g=d.slice(d.indexOf("#")),a=document.querySelector(g);a&&a.scrollIntoView({behavior:"smooth"});return}});let s;switch(e.routeType){case"home":s=zt(e.manifest);break;case"book":{const u=e.route.split("/")[2],p=e.manifest.books.find(d=>d.slug===u);s=p?gn(p):n("div",{children:"Book not found"});break}case"chapter":s=t?$o(e.manifest,e.route,t,(l=e.pagination)==null?void 0:l.defaultMode,r):n("div",{children:"Loading..."});break;case"article":s=t?To(e.manifest,e.route,t):n("div",{children:"Loading..."});break;case"books":s=zt(e.manifest);break;case"articles":s=zt(e.manifest);break;default:s=n("div",{children:"Page not found"})}It(s,document.getElementById("app"))}export{Lo as h,xe as k,n as u};
