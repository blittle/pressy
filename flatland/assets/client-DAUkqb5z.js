var it,A,fr,hr,ye,Xt,gr,mr,yr,Ct,wt,xt,je={},vr=[],oo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,at=Array.isArray;function de(e,t){for(var r in t)e[r]=t[r];return e}function Pt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function no(e,t,r){var n,i,s,l={};for(s in t)s=="key"?n=t[s]:s=="ref"?i=t[s]:l[s]=t[s];if(arguments.length>2&&(l.children=arguments.length>3?it.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)l[s]===void 0&&(l[s]=e.defaultProps[s]);return Ze(e,l,n,i,null)}function Ze(e,t,r,n,i){var s={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++fr,__i:-1,__u:0};return i==null&&A.vnode!=null&&A.vnode(s),s}function _e(e){return e.children}function Oe(e,t){this.props=e,this.context=t}function Pe(e,t){if(t==null)return e.__?Pe(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?Pe(e):null}function _r(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return _r(e)}}function qt(e){(!e.__d&&(e.__d=!0)&&ye.push(e)&&!tt.__r++||Xt!=A.debounceRendering)&&((Xt=A.debounceRendering)||gr)(tt)}function tt(){for(var e,t,r,n,i,s,l,d=1;ye.length;)ye.length>d&&ye.sort(mr),e=ye.shift(),d=ye.length,e.__d&&(r=void 0,n=void 0,i=(n=(t=e).__v).__e,s=[],l=[],t.__P&&((r=de({},n)).__v=n.__v+1,A.vnode&&A.vnode(r),zt(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[i]:null,s,i??Pe(n),!!(32&n.__u),l),r.__v=n.__v,r.__.__k[r.__i]=r,xr(s,r,l),n.__e=n.__=null,r.__e!=i&&_r(r)));tt.__r=0}function br(e,t,r,n,i,s,l,d,p,c,h){var a,_,v,P,z,L,x,g=n&&n.__k||vr,S=t.length;for(p=so(r,t,g,p,S),a=0;a<S;a++)(v=r.__k[a])!=null&&(_=v.__i==-1?je:g[v.__i]||je,v.__i=a,L=zt(e,v,_,i,s,l,d,p,c,h),P=v.__e,v.ref&&_.ref!=v.ref&&(_.ref&&Et(_.ref,null,v),h.push(v.ref,v.__c||P,v)),z==null&&P!=null&&(z=P),(x=!!(4&v.__u))||_.__k===v.__k?p=wr(v,p,e,x):typeof v.type=="function"&&L!==void 0?p=L:P&&(p=P.nextSibling),v.__u&=-7);return r.__e=z,p}function so(e,t,r,n,i){var s,l,d,p,c,h=r.length,a=h,_=0;for(e.__k=new Array(i),s=0;s<i;s++)(l=t[s])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=e.__k[s]=Ze(null,l,null,null,null):at(l)?l=e.__k[s]=Ze(_e,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=e.__k[s]=Ze(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):e.__k[s]=l,p=s+_,l.__=e,l.__b=e.__b+1,d=null,(c=l.__i=io(l,r,p,a))!=-1&&(a--,(d=r[c])&&(d.__u|=2)),d==null||d.__v==null?(c==-1&&(i>h?_--:i<h&&_++),typeof l.type!="function"&&(l.__u|=4)):c!=p&&(c==p-1?_--:c==p+1?_++:(c>p?_--:_++,l.__u|=4))):e.__k[s]=null;if(a)for(s=0;s<h;s++)(d=r[s])!=null&&!(2&d.__u)&&(d.__e==n&&(n=Pe(d)),Sr(d,d));return n}function wr(e,t,r,n){var i,s;if(typeof e.type=="function"){for(i=e.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=e,t=wr(i[s],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=Pe(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function io(e,t,r,n){var i,s,l,d=e.key,p=e.type,c=t[r],h=c!=null&&(2&c.__u)==0;if(c===null&&d==null||h&&d==c.key&&p==c.type)return r;if(n>(h?1:0)){for(i=r-1,s=r+1;i>=0||s<t.length;)if((c=t[l=i>=0?i--:s++])!=null&&!(2&c.__u)&&d==c.key&&p==c.type)return l}return-1}function Jt(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||oo.test(t)?r:r+"px"}function Je(e,t,r,n,i){var s,l;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Jt(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||Jt(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(yr,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=r,r?n?r.u=n.u:(r.u=Ct,e.addEventListener(t,s?xt:wt,s)):e.removeEventListener(t,s?xt:wt,s);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Gt(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Ct++;else if(t.t<r.u)return;return r(A.event?A.event(t):t)}}}function zt(e,t,r,n,i,s,l,d,p,c){var h,a,_,v,P,z,L,x,g,S,w,Y,$,we,Q,ee,pe,j=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(p=!!(32&r.__u),s=[d=t.__e=r.__e]),(h=A.__b)&&h(t);e:if(typeof j=="function")try{if(x=t.props,g="prototype"in j&&j.prototype.render,S=(h=j.contextType)&&n[h.__c],w=h?S?S.props.value:h.__:n,r.__c?L=(a=t.__c=r.__c).__=a.__E:(g?t.__c=a=new j(x,w):(t.__c=a=new Oe(x,w),a.constructor=j,a.render=lo),S&&S.sub(a),a.state||(a.state={}),a.__n=n,_=a.__d=!0,a.__h=[],a._sb=[]),g&&a.__s==null&&(a.__s=a.state),g&&j.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=de({},a.__s)),de(a.__s,j.getDerivedStateFromProps(x,a.__s))),v=a.props,P=a.state,a.__v=t,_)g&&j.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),g&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(g&&j.getDerivedStateFromProps==null&&x!==v&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(x,w),t.__v==r.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(x,a.__s,w)===!1){for(t.__v!=r.__v&&(a.props=x,a.state=a.__s,a.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(y){y&&(y.__=t)}),Y=0;Y<a._sb.length;Y++)a.__h.push(a._sb[Y]);a._sb=[],a.__h.length&&l.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(x,a.__s,w),g&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(v,P,z)})}if(a.context=w,a.props=x,a.__P=e,a.__e=!1,$=A.__r,we=0,g){for(a.state=a.__s,a.__d=!1,$&&$(t),h=a.render(a.props,a.state,a.context),Q=0;Q<a._sb.length;Q++)a.__h.push(a._sb[Q]);a._sb=[]}else do a.__d=!1,$&&$(t),h=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++we<25);a.state=a.__s,a.getChildContext!=null&&(n=de(de({},n),a.getChildContext())),g&&!_&&a.getSnapshotBeforeUpdate!=null&&(z=a.getSnapshotBeforeUpdate(v,P)),ee=h,h!=null&&h.type===_e&&h.key==null&&(ee=kr(h.props.children)),d=br(e,at(ee)?ee:[ee],t,r,n,i,s,l,d,p,c),a.base=t.__e,t.__u&=-161,a.__h.length&&l.push(a),L&&(a.__E=a.__=null)}catch(y){if(t.__v=null,p||s!=null)if(y.then){for(t.__u|=p?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;s[s.indexOf(d)]=null,t.__e=d}else{for(pe=s.length;pe--;)Pt(s[pe]);kt(t)}else t.__e=r.__e,t.__k=r.__k,y.then||kt(t);A.__e(y,t,r)}else s==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=ao(r.__e,t,r,n,i,s,l,p,c);return(h=A.diffed)&&h(t),128&t.__u?void 0:d}function kt(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(kt)}function xr(e,t,r){for(var n=0;n<r.length;n++)Et(r[n],r[++n],r[++n]);A.__c&&A.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(s){s.call(i)})}catch(s){A.__e(s,i.__v)}})}function kr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:at(e)?e.map(kr):de({},e)}function ao(e,t,r,n,i,s,l,d,p){var c,h,a,_,v,P,z,L=r.props||je,x=t.props,g=t.type;if(g=="svg"?i="http://www.w3.org/2000/svg":g=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),s!=null){for(c=0;c<s.length;c++)if((v=s[c])&&"setAttribute"in v==!!g&&(g?v.localName==g:v.nodeType==3)){e=v,s[c]=null;break}}if(e==null){if(g==null)return document.createTextNode(x);e=document.createElementNS(i,g,x.is&&x),d&&(A.__m&&A.__m(t,s),d=!1),s=null}if(g==null)L===x||d&&e.data==x||(e.data=x);else{if(s=s&&it.call(e.childNodes),!d&&s!=null)for(L={},c=0;c<e.attributes.length;c++)L[(v=e.attributes[c]).name]=v.value;for(c in L)if(v=L[c],c!="children"){if(c=="dangerouslySetInnerHTML")a=v;else if(!(c in x)){if(c=="value"&&"defaultValue"in x||c=="checked"&&"defaultChecked"in x)continue;Je(e,c,null,v,i)}}for(c in x)v=x[c],c=="children"?_=v:c=="dangerouslySetInnerHTML"?h=v:c=="value"?P=v:c=="checked"?z=v:d&&typeof v!="function"||L[c]===v||Je(e,c,v,L[c],i);if(h)d||a&&(h.__html==a.__html||h.__html==e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(a&&(e.innerHTML=""),br(t.type=="template"?e.content:e,at(_)?_:[_],t,r,n,g=="foreignObject"?"http://www.w3.org/1999/xhtml":i,s,l,s?s[0]:r.__k&&Pe(r,0),d,p),s!=null)for(c=s.length;c--;)Pt(s[c]);d||(c="value",g=="progress"&&P==null?e.removeAttribute("value"):P!=null&&(P!==e[c]||g=="progress"&&!P||g=="option"&&P!=L[c])&&Je(e,c,P,L[c],i),c="checked",z!=null&&z!=e[c]&&Je(e,c,z,L[c],i))}return e}function Et(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(i){A.__e(i,r)}}function Sr(e,t,r){var n,i;if(A.unmount&&A.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||Et(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){A.__e(s,t)}n.base=n.__P=null}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&Sr(n[i],t,r||typeof e.type!="function");r||Pt(e.__e),e.__c=e.__=e.__e=void 0}function lo(e,t,r){return this.constructor(e,r)}function co(e,t,r){var n,i,s,l;t==document&&(t=document.documentElement),A.__&&A.__(e,t),i=(n=!1)?null:t.__k,s=[],l=[],zt(t,e=t.__k=no(_e,null,[e]),i||je,je,t.namespaceURI,i?null:t.firstChild?it.call(t.childNodes):null,s,i?i.__e:t.firstChild,n,l),xr(s,e,l)}it=vr.slice,A={__e:function(e,t,r,n){for(var i,s,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,n||{}),l=i.__d),l)return i.__E=i}catch(d){e=d}throw e}},fr=0,hr=function(e){return e!=null&&e.constructor===void 0},Oe.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=de({},this.state),typeof e=="function"&&(e=e(de({},r),this.props)),e&&de(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),qt(this))},Oe.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),qt(this))},Oe.prototype.render=_e,ye=[],gr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,mr=function(e,t){return e.__v.__b-t.__v.__b},tt.__r=0,yr=/(PointerCapture)$|Capture$/i,Ct=0,wt=Gt(!1),xt=Gt(!0);var Be,H,mt,Kt,We=0,$r=[],B=A,Zt=B.__b,Qt=B.__r,er=B.diffed,tr=B.__c,rr=B.unmount,or=B.__;function Tt(e,t){B.__h&&B.__h(H,e,We||t),We=0;var r=H.__H||(H.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function M(e){return We=1,uo(Pr,e)}function uo(e,t,r){var n=Tt(Be++,2);if(n.t=e,!n.__c&&(n.__=[Pr(void 0,t),function(d){var p=n.__N?n.__N[0]:n.__[0],c=n.t(p,d);p!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=H,!H.__f)){var i=function(d,p,c){if(!n.__c.__H)return!0;var h=n.__c.__H.__.filter(function(_){return!!_.__c});if(h.every(function(_){return!_.__N}))return!s||s.call(this,d,p,c);var a=n.__c.props!==d;return h.forEach(function(_){if(_.__N){var v=_.__[0];_.__=_.__N,_.__N=void 0,v!==_.__[0]&&(a=!0)}}),s&&s.call(this,d,p,c)||a};H.__f=!0;var s=H.shouldComponentUpdate,l=H.componentWillUpdate;H.componentWillUpdate=function(d,p,c){if(this.__e){var h=s;s=void 0,i(d,p,c),s=h}l&&l.call(this,d,p,c)},H.shouldComponentUpdate=i}return n.__N||n.__}function O(e,t){var r=Tt(Be++,3);!B.__s&&Cr(r.__H,t)&&(r.__=e,r.u=t,H.__H.__h.push(r))}function I(e){return We=5,lt(function(){return{current:e}},[])}function lt(e,t){var r=Tt(Be++,7);return Cr(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function F(e,t){return We=8,lt(function(){return e},t)}function po(){for(var e;e=$r.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Qe),e.__H.__h.forEach(St),e.__H.__h=[]}catch(t){e.__H.__h=[],B.__e(t,e.__v)}}B.__b=function(e){H=null,Zt&&Zt(e)},B.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),or&&or(e,t)},B.__r=function(e){Qt&&Qt(e),Be=0;var t=(H=e.__c).__H;t&&(mt===H?(t.__h=[],H.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Qe),t.__h.forEach(St),t.__h=[],Be=0)),mt=H},B.diffed=function(e){er&&er(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&($r.push(t)!==1&&Kt===B.requestAnimationFrame||((Kt=B.requestAnimationFrame)||fo)(po)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),mt=H=null},B.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Qe),r.__h=r.__h.filter(function(n){return!n.__||St(n)})}catch(n){t.some(function(i){i.__h&&(i.__h=[])}),t=[],B.__e(n,r.__v)}}),tr&&tr(e,t)},B.unmount=function(e){rr&&rr(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Qe(n)}catch(i){t=i}}),r.__H=void 0,t&&B.__e(t,r.__v))};var nr=typeof requestAnimationFrame=="function";function fo(e){var t,r=function(){clearTimeout(n),nr&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);nr&&(t=requestAnimationFrame(r))}function Qe(e){var t=H,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),H=t}function St(e){var t=H;e.__c=e.__(),H=t}function Cr(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function Pr(e,t){return typeof t=="function"?t(e):t}var ho=Symbol.for("preact-signals");function Lt(){if(Ce>1)Ce--;else{for(var e,t=!1;Ie!==void 0;){var r=Ie;for(Ie=void 0,$t++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&Tr(r))try{r.c()}catch(i){t||(e=i,t=!0)}r=n}}if($t=0,Ce--,t)throw e}}var T=void 0;function zr(e){var t=T;T=void 0;try{return e()}finally{T=t}}var Ie=void 0,Ce=0,$t=0,rt=0;function Er(e){if(T!==void 0){var t=e.n;if(t===void 0||t.t!==T)return t={i:0,S:e,p:T.s,n:void 0,t:T,e:void 0,x:void 0,r:t},T.s!==void 0&&(T.s.n=t),T.s=t,e.n=t,32&T.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=T.s,t.n=void 0,T.s.n=t,T.s=t),t}}function U(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}U.prototype.brand=ho;U.prototype.h=function(){return!0};U.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:zr(function(){var n;(n=t.W)==null||n.call(t)}))};U.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&zr(function(){var i;(i=t.Z)==null||i.call(t)}))}};U.prototype.subscribe=function(e){var t=this;return Rt(function(){var r=t.value,n=T;T=void 0;try{e(r)}finally{T=n}},{name:"sub"})};U.prototype.valueOf=function(){return this.value};U.prototype.toString=function(){return this.value+""};U.prototype.toJSON=function(){return this.value};U.prototype.peek=function(){var e=T;T=void 0;try{return this.value}finally{T=e}};Object.defineProperty(U.prototype,"value",{get:function(){var e=Er(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if($t>100)throw new Error("Cycle detected");this.v=e,this.i++,rt++,Ce++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Lt()}}}});function re(e,t){return new U(e,t)}function Tr(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Lr(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Ar(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function be(e,t){U.call(this,void 0),this.x=e,this.s=void 0,this.g=rt-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}be.prototype=new U;be.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===rt))return!0;if(this.g=rt,this.f|=1,this.i>0&&!Tr(this))return this.f&=-2,!0;var e=T;try{Lr(this),T=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return T=e,Ar(this),this.f&=-2,!0};be.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}U.prototype.S.call(this,e)};be.prototype.U=function(e){if(this.t!==void 0&&(U.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};be.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(be.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Er(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function go(e,t){return new be(e,t)}function Rr(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Ce++;var r=T;T=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,At(e),n}finally{T=r,Lt()}}}function At(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Rr(e)}function mo(e){if(T!==this)throw new Error("Out-of-order effect");Ar(this),T=e,this.f&=-2,8&this.f&&At(this),Lt()}function Ee(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}Ee.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Ee.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Rr(this),Lr(this),Ce++;var e=T;return T=this,mo.bind(this,e)};Ee.prototype.N=function(){2&this.f||(this.f|=2,this.o=Ie,Ie=this)};Ee.prototype.d=function(){this.f|=8,1&this.f||At(this)};Ee.prototype.dispose=function(){this.d()};function Rt(e,t){var r=new Ee(e,t);try{r.c()}catch(i){throw r.d(),i}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var Ge;function Te(e,t){A[e]=t.bind(null,A[e]||function(){})}function ot(e){if(Ge){var t=Ge;Ge=void 0,t()}Ge=e&&e.S()}function Mr(e){var t=this,r=e.data,n=ve(r);n.value=r;var i=lt(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var l,d=t.__$u.S(),p=i.value;d(),hr(p)||((l=t.base)==null?void 0:l.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=p},go(function(){var l=n.value.value;return l===0?0:l===!0?"":l||""})},[]);return i.value}Mr.displayName="_st";Object.defineProperties(U.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Mr},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Te("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var i in n)if(i!=="children"){var s=n[i];s instanceof U&&(r||(t.__np=r={}),r[i]=s,n[i]=s.peek())}}e(t)});Te("__r",function(e,t){e(t),ot();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(i){var s;return Rt(function(){s=this}),s.c=function(){n.__$f|=1,n.setState({})},s}())),ot(r)});Te("__e",function(e,t,r,n){ot(),e(t,r,n)});Te("diffed",function(e,t){ot();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,i=t.props;if(n){var s=r.U;if(s)for(var l in s){var d=s[l];d!==void 0&&!(l in n)&&(d.d(),s[l]=void 0)}else r.U=s={};for(var p in n){var c=s[p],h=n[p];c===void 0?(c=yo(r,p,h,i),s[p]=c):c.o(h,i)}}}e(t)});function yo(e,t,r,n){var i=t in e&&e.ownerSVGElement===void 0,s=re(r);return{o:function(l,d){s.value=l,n=d},d:Rt(function(){var l=s.value.value;n[t]!==l&&(n[t]=l,i?e[t]=l:l?e.setAttribute(t,l):e.removeAttribute(t))})}}Te("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var i in n){var s=n[i];s&&s.d()}}}}else{var l=t.__c;if(l){var d=l.__$u;d&&(l.__$u=void 0,d.d())}}e(t)});Te("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});Oe.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var i in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var s in e)if(s!=="__source"&&e[s]!==this.props[s])return!0;for(var l in this.props)if(!(l in e))return!0;return!1};function ve(e){return lt(function(){return re(e)},[])}var vo=0;function o(e,t,r,n,i,s){t||(t={});var l,d,p=t;if("ref"in p)for(d in p={},t)d=="ref"?l=t[d]:p[d]=t[d];var c={type:e,props:p,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--vo,__i:-1,__u:0,__source:i,__self:s};if(typeof e=="function"&&(l=e.defaultProps))for(d in l)p[d]===void 0&&(p[d]=l[d]);return A.vnode&&A.vnode(c),c}function _o({prev:e,next:t}){return!e&&!t?null:o("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[o("div",{class:"pressy-nav-inner",children:[e?o("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[o("span",{class:"pressy-nav-direction",children:"Previous"}),o("span",{class:"pressy-nav-title",children:e.title})]}):o("div",{class:"pressy-nav-placeholder"}),t?o("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[o("span",{class:"pressy-nav-direction",children:"Next"}),o("span",{class:"pressy-nav-title",children:t.title})]}):o("div",{class:"pressy-nav-placeholder"})]}),o("style",{children:`
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
      `})]})}function Or(){const e=ve(!1),t=ve({x:0,y:0}),r=ve(""),n=I(null);O(()=>{const d=()=>{const p=window.getSelection();if(!p||p.isCollapsed){e.value=!1;return}const c=p.toString().trim();if(c.length<5){e.value=!1;return}r.value=c;const a=p.getRangeAt(0).getBoundingClientRect();t.value={x:a.left+a.width/2,y:a.top-10},e.value=!0};return document.addEventListener("selectionchange",d),document.addEventListener("mouseup",d),()=>{document.removeEventListener("selectionchange",d),document.removeEventListener("mouseup",d)}},[]);const i=()=>{const d=encodeURIComponent(r.value),p=new URL(window.location.href);return p.hash=`:~:text=${d}`,p.toString()},s=async()=>{const d=i(),p=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:p,url:d}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${p}

${d}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var c;(c=n.current)==null||c.classList.remove("copied")},2e3))}catch(c){console.error("Failed to copy to clipboard:",c)}},l=async()=>{const d=i();try{await navigator.clipboard.writeText(d),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var p;(p=n.current)==null||p.classList.remove("copied")},2e3))}catch(p){console.error("Failed to copy link:",p)}};return e.value?o("div",{ref:n,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[o("button",{class:"pressy-share-btn",onClick:s,"aria-label":"Share selected text",title:"Share quote",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),o("button",{class:"pressy-copy-link-btn",onClick:l,"aria-label":"Copy link to selected text",title:"Copy link",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),o("style",{children:`
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
      `})]}):null}function Ir(){const e=ve(!navigator.onLine),t=ve(!1);return O(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?o("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?o(_e,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),o("span",{children:"You're offline"})]}):o(_e,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),o("span",{children:"Back online"})]}),o("style",{children:`
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
      `})]}):null}var bo=`
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

  @media (prefers-reduced-motion: reduce) {
    .pressy-page-footer--scroll {
      transition: none;
    }
    .pressy-toc-backdrop--scroll,
    .pressy-toc-backdrop--scroll .pressy-toc-drawer {
      animation: none;
    }
  }
`;function Hr({offlineProps:e}){if(!e)return null;const{bookSlug:t,chapterUrls:r,cachedBooks:n,onDownload:i,onRemove:s}=e;return n.value.has(t)?o("button",{class:"pressy-offline-icon pressy-offline-icon--cached",onClick:d=>{d.stopPropagation(),s(t)},"aria-label":"Available offline. Click to remove.",title:"Available offline. Click to remove.",children:[o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]}),o("svg",{class:"pressy-offline-check",viewBox:"0 0 24 24",fill:"currentColor",width:"10",height:"10",children:o("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})})]}):o("button",{class:"pressy-offline-icon",onClick:d=>{d.stopPropagation(),i(t,r)},"aria-label":"Download for offline reading",title:"Download for offline reading",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]})})}function wo({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:s,onRestoreProgress:l,allChapters:d,bookBasePath:p,currentChapterSlug:c,offlineProps:h}){const a=I(null),[_,v]=M(!1),P=I(null),[z,L]=M(!1),[x,g]=M(!1),S=F(()=>{v(!0),P.current&&clearTimeout(P.current),P.current=setTimeout(()=>v(!1),3e3)},[]),[w,Y]=M(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[$,we]=M(()=>{if(typeof localStorage<"u"){const y=localStorage.getItem("pressy-font-size");return y?parseFloat(y):1}return 1}),Q=F(y=>{y===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${y})`)},[]);O(()=>{$!==1&&Q($)},[]);const ee=F(y=>{Y(y),localStorage.setItem("pressy-theme",y);const N=y==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":y;document.documentElement.setAttribute("data-theme",N)},[]),pe=F(y=>{we(N=>{const oe=Math.round(Math.max(.8,Math.min(1.5,N+y))*10)/10;return localStorage.setItem("pressy-font-size",String(oe)),Q(oe),oe})},[Q]),j=F(y=>{const N=y.target;if(!N.closest(".pressy-page-footer, .pressy-toc-backdrop, .pressy-toc-toggle")&&!N.closest('a, button, input, select, textarea, [role="button"]')){if(z||x){L(!1),g(!1);return}_?(v(!1),P.current&&clearTimeout(P.current)):S()}},[_,z,x,S]);return O(()=>{l&&l().then(y=>{y&&y.scrollPosition>0&&window.scrollTo(0,y.scrollPosition)})},[]),O(()=>{if(!s)return;const y=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{s({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",y,{passive:!0}),()=>{window.removeEventListener("scroll",y),a.current&&clearTimeout(a.current)}},[s]),O(()=>{if(!s)return;const y=()=>{s({page:0,totalPages:0,scrollPosition:window.scrollY})},N=()=>{document.visibilityState==="hidden"&&y()};return window.addEventListener("beforeunload",y),document.addEventListener("visibilitychange",N),()=>{window.removeEventListener("beforeunload",y),document.removeEventListener("visibilitychange",N)}},[s]),o("div",{class:"pressy-reader",onClick:j,children:[o("main",{class:"pressy-reader-main",children:o("article",{class:`pressy-prose ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:e})}),o(Or,{}),o(_o,{prev:r,next:n}),o(Ir,{}),x&&d&&o("div",{class:"pressy-toc-backdrop pressy-toc-backdrop--scroll",onClick:y=>{y.stopPropagation(),g(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:y=>y.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:y=>{y.stopPropagation(),g(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:[o("a",{href:p&&p.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>{sessionStorage.setItem("pressy-internal-nav","1"),g(!1)},children:[o("span",{class:"pressy-toc-item-num",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:o("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),o("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),d.map((y,N)=>o("a",{href:`${p||""}/${y.slug}`,class:`pressy-toc-item ${y.slug===c?"pressy-toc-item--active":""}`,onClick:()=>g(!1),children:[o("span",{class:"pressy-toc-item-num",children:[N+1,"."]}),o("span",{class:"pressy-toc-item-title",children:y.title})]},y.slug))]})]})}),o("div",{class:`pressy-page-footer pressy-page-footer--scroll ${_||z||x?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-footer-row",children:[d&&d.length>0&&o("button",{class:"pressy-toc-toggle",onClick:y=>{y.stopPropagation(),L(!1),g(!x)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:y=>{y.stopPropagation(),d&&d.length>0&&(L(!1),g(!x))},children:t}),o(Hr,{offlineProps:h}),o("button",{class:"pressy-settings-toggle",onClick:y=>{y.stopPropagation(),g(!1),L(!z)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${z?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(y=>o("button",{class:`pressy-theme-btn ${w===y.id?"pressy-theme-btn--active":""}`,onClick:N=>{N.stopPropagation(),ee(y.id)},children:[y.icon,o("span",{children:y.label})]},y.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:y=>{y.stopPropagation(),pe(-.1)},disabled:$<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round($*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:y=>{y.stopPropagation(),pe(.1)},disabled:$>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]})]}),o("style",{children:bo})]})}var xo=`
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
`;function ko({title:e}){return o("div",{class:"pressy-chapter-divider",children:o("h2",{class:"pressy-chapter-divider-title",children:e})})}function So({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:s,onRestoreProgress:l,bookProgressPercent:d,initialContent:p,chapterMapData:c,currentChapterSlug:h,allChapters:a,bookBasePath:_,onChapterChange:v,mdxComponents:P,paywall:z,offlineProps:L}){const x=I(null),g=I(null),S=I(null),[w,Y]=M(0),[$,we]=M(1),Q=I(1);Q.current=$;const[ee,pe]=M(!1),j=I(!1),y=I(null),N=I(!1),oe=I(typeof window<"u"&&new URLSearchParams(window.location.search).get("page")==="last"),[Yr,Le]=M(oe.current||!!l),[G,It]=M([]),[X,Xr]=M([]),[K,Ht]=M(h||""),ct=I(new Set),q=!!(c&&p&&h&&a);O(()=>{if(q&&p&&h){const u=a.find(f=>f.slug===h);It([{slug:h,title:(u==null?void 0:u.title)||h,Content:p}]),Ht(h)}},[]),O(()=>{if(oe.current){const u=new URL(window.location.href);u.searchParams.delete("page"),history.replaceState(null,"",u.pathname)}},[]);const[ne,De]=M(!1),[te,fe]=M(!1),[qr,Jr]=M(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[Ae,Gr]=M(()=>{if(typeof localStorage<"u"){const u=localStorage.getItem("pressy-font-size");return u?parseFloat(u):1}return 1}),ut=F(u=>{u===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${u})`)},[]);O(()=>{Ae!==1&&ut(Ae)},[]),O(()=>{var m;const u=x.current;if(!u)return;const f=()=>{u.style.setProperty("--app-height",`${window.innerHeight}px`)};return f(),window.addEventListener("resize",f),(m=window.visualViewport)==null||m.addEventListener("resize",f),()=>{var b;window.removeEventListener("resize",f),(b=window.visualViewport)==null||b.removeEventListener("resize",f)}},[]);const Kr=F(u=>{Jr(u),localStorage.setItem("pressy-theme",u);const f=u==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":u;document.documentElement.setAttribute("data-theme",f)},[]),[jt,xe]=M(!1),[Bt,ke]=M(0),[Wt,se]=M(null),dt=I(0),Nt=I(0),pt=I(0),ft=I(0),Fe=I(0),Ue=I(!1),Re=I(!1),Dt=F(()=>{if(!q)return;const u=S.current,f=g.current;if(!u||!f)return;const m=f.clientWidth;if(m===0)return;const b=u.querySelectorAll(".pressy-chapter-section"),k=[];b.forEach(E=>{const C=E.getAttribute("data-chapter-slug")||"",R=E.offsetLeft,D=E.scrollWidth,W=Math.floor(R/m),ce=Math.max(W,Math.ceil((R+D)/m)-1);k.push({slug:C,startPage:W,endPage:ce})}),Xr(k)},[q]),ie=F(()=>{const u=S.current,f=g.current;if(!u||!f)return;const m=f.clientWidth;if(m===0)return;u.style.columnWidth=`${m}px`,u.scrollWidth;const b=Math.max(1,Math.round(u.scrollWidth/m));we(b),pe(!0),Y(k=>Math.min(k,b-1)),Dt()},[Dt]),Ft=F(u=>{Gr(f=>{const m=Math.round(Math.max(.8,Math.min(1.5,f+u))*10)/10;return localStorage.setItem("pressy-font-size",String(m)),ut(m),setTimeout(()=>ie(),100),m})},[ut,ie]);O(()=>{const u=g.current;if(!u)return;const f=setTimeout(ie,50),m=new ResizeObserver(()=>{ie()});return m.observe(u),()=>{clearTimeout(f),m.disconnect()}},[ie]),O(()=>{if(G.length>0){const u=setTimeout(ie,50);return()=>clearTimeout(u)}},[G.length,ie]),O(()=>{const u=S.current;if(!u)return;const f=u.querySelectorAll("img");if(f.length===0)return;const m=()=>ie();return f.forEach(b=>{b.complete||(b.addEventListener("load",m),b.addEventListener("error",m))}),()=>{f.forEach(b=>{b.removeEventListener("load",m),b.removeEventListener("error",m)})}},[ie,G.length]),O(()=>{if(!(j.current||!ee)){if(oe.current){oe.current=!1,N.current=!0,Y($-1),j.current=!0,Le(!1);return}if(!l){j.current=!0,Le(!1);return}l().then(u=>{if(j.current){Le(!1);return}const f=Q.current;if(!u||u.page<=0){j.current=!0,Le(!1);return}let m;if(u.totalPages<=1||Math.abs(u.totalPages-f)<=2)m=u.page;else{const k=u.page/(u.totalPages-1);m=Math.round(k*(f-1))}const b=Math.max(0,Math.min(m,f-1));N.current=!0,Y(b),j.current=!0,Le(!1)})}},[ee,$,l]),O(()=>{const u=S.current,f=g.current;if(!u||!f)return;const b=w*f.clientWidth-Bt;jt||N.current?(u.style.transition="none",N.current=!1):u.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",u.style.transform=`translateX(-${b}px)`},[w,Bt,jt]),O(()=>{const u=S.current,f=g.current;if(!u||!f)return;const m=f.getBoundingClientRect();u.querySelectorAll("a[href], button, input, select, textarea, [tabindex]").forEach(k=>{const E=k.getBoundingClientRect();if(E.left>=m.left-1&&E.right<=m.right+1){const R=k.getAttribute("data-original-tabindex");R!==null&&(R===""?k.removeAttribute("tabindex"):k.setAttribute("tabindex",R),k.removeAttribute("data-original-tabindex"))}else k.hasAttribute("data-original-tabindex")||k.setAttribute("data-original-tabindex",k.getAttribute("tabindex")||""),k.setAttribute("tabindex","-1")})},[w,$]),O(()=>{var D;if(!q||!c||X.length===0)return;const u=X.find(W=>W.slug===K);if(!u||u.endPage-w>2)return;const{chapterOrder:m,chapterMap:b}=c,k=(D=G[G.length-1])==null?void 0:D.slug,E=m.indexOf(k);if(E===-1||E>=m.length-1)return;const C=m[E+1];if(ct.current.has(C)||G.some(W=>W.slug===C)||z&&!z.authorized&&m.indexOf(C)>=z.previewChapters)return;ct.current.add(C);const R=b[C];R&&R().then(W=>{const ce=W.default,he=a.find(ue=>ue.slug===C);It(ue=>ue.some(qe=>qe.slug===C)?ue:[...ue,{slug:C,title:(he==null?void 0:he.title)||C,Content:ce}])}).catch(()=>{ct.current.delete(C)})},[w,K,X,q,c,G,a,z]),O(()=>{if(!q||X.length===0||!_)return;const u=X.find(k=>w>=k.startPage&&w<=k.endPage);if(!u||u.slug===K)return;const f=K;Ht(u.slug);const m=`${_}/${u.slug}`;history.replaceState(null,"",m);const b=a==null?void 0:a.find(k=>k.slug===u.slug);if(b&&(document.title=document.title.replace(/^[^|]+/,b.title+" ")),v&&f){const k=X.find(E=>E.slug===f);if(k){const E=k.endPage-k.startPage+1;v(f,E-1,E)}}},[w,X,K,q,_,a,v]),O(()=>{if(!(!s||!j.current))return y.current&&clearTimeout(y.current),y.current=setTimeout(()=>{if(q&&X.length>0){const u=X.find(f=>f.slug===K);if(u){const f=w-u.startPage,m=u.endPage-u.startPage+1;s({page:f,totalPages:m,scrollPosition:0,activeChapterSlug:K})}}else s({page:w,totalPages:$,scrollPosition:0})},300),()=>{y.current&&clearTimeout(y.current)}},[w,$,s,q,X,K]),O(()=>{if(!s)return;const u=()=>{if(q&&X.length>0){const m=X.find(b=>b.slug===K);if(m){const b=w-m.startPage,k=m.endPage-m.startPage+1;s({page:b,totalPages:k,scrollPosition:0,activeChapterSlug:K})}}else s({page:w,totalPages:$,scrollPosition:0})},f=()=>{document.visibilityState==="hidden"&&u()};return window.addEventListener("beforeunload",u),document.addEventListener("visibilitychange",f),()=>{window.removeEventListener("beforeunload",u),document.removeEventListener("visibilitychange",f)}},[w,$,s,q,X,K]);const ae=(()=>{var b;if(!q||!c)return n;const{chapterOrder:u}=c,f=(b=G[G.length-1])==null?void 0:b.slug;if(!(u.indexOf(f)<u.length-1))return _?{slug:_,title:"Table of Contents"}:n})(),le=(()=>{var E;if(!q||!c)return r;const{chapterOrder:u}=c,f=(E=G[0])==null?void 0:E.slug,m=u.indexOf(f);if(m<=0)return r;const b=u[m-1],k=a==null?void 0:a.find(C=>C.slug===b);return{slug:`${_}/${b}?page=last`,title:(k==null?void 0:k.title)||b}})(),ge=F(u=>{oe.current=!1;const f=Math.max(0,Math.min(u,$-1));Y(f)},[$]),Se=F(()=>{if(w>=$-1){ae&&(sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ae.slug);return}ge(w+1)},[w,$,ae,ge]),$e=F(()=>{if(w<=0){le&&(sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=le.slug);return}ge(w-1)},[w,le,ge]),[Ve,me]=M(!1),J=I(null),ht=F(()=>{me(!0),J.current&&clearTimeout(J.current),J.current=setTimeout(()=>me(!1),3e3)},[]),Ut=I(0),Me=I(null),Vt=F(()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})},[]),Ye=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,Zr=F(u=>{const f=u.target;if(f.closest(".pressy-settings-panel, .pressy-settings-toggle, .pressy-toc-drawer, .pressy-toc-toggle")||f.closest('a, button, input, select, textarea, [role="button"]'))return;if(ne||te){De(!1),fe(!1);return}if(Ye){Ve?(me(!1),J.current&&clearTimeout(J.current)):ht();return}const m=x.current;if(!m)return;const b=m.getBoundingClientRect(),k=u.clientX-b.left,E=b.width*.15;if(k<E)$e();else if(k>b.width-E)Se();else{const C=Date.now(),R=C-Ut.current;Ut.current=C,R<300?(Me.current&&clearTimeout(Me.current),Vt()):(Me.current&&clearTimeout(Me.current),Me.current=setTimeout(()=>{Ve?(me(!1),J.current&&clearTimeout(J.current)):ht()},300))}},[Se,$e,Ve,Ye,ne,te,ht,Vt]),[Yt,Xe]=M(null),Qr=F(u=>{if(Ye)return;const f=x.current;if(!f)return;const m=f.getBoundingClientRect(),b=u.clientX-m.left,k=u.clientY-m.top,E=m.width/3;b<E?Xe("left"):b>E*2?Xe("right"):Xe(null),k>m.height*.75?(me(!0),J.current&&clearTimeout(J.current)):!ne&&!te&&(J.current&&clearTimeout(J.current),J.current=setTimeout(()=>me(!1),600))},[Ye,ne,te]),eo=F(()=>{Xe(null),!ne&&!te&&(J.current&&clearTimeout(J.current),J.current=setTimeout(()=>me(!1),600))},[ne,te]);O(()=>{const u=f=>{const m=f.target.tagName;m==="INPUT"||m==="TEXTAREA"||m==="SELECT"||(f.key==="ArrowRight"||f.key===" "?(f.preventDefault(),Se()):f.key==="ArrowLeft"?(f.preventDefault(),$e()):f.key==="Home"?(f.preventDefault(),ge(0)):f.key==="End"&&(f.preventDefault(),ge($-1)))};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[Se,$e,ge,$]),O(()=>{const u=x.current;if(!u)return;const f=E=>{const C=E.touches[0];dt.current=C.clientX,Nt.current=C.clientY,pt.current=C.clientX,ft.current=performance.now(),Fe.current=0,Ue.current=!1,Re.current=!1},m=E=>{const C=E.touches[0],R=C.clientX-dt.current,D=C.clientY-Nt.current;if(!Ue.current)if(Math.abs(R)>Math.abs(D)&&Math.abs(R)>10)Ue.current=!0;else return Math.abs(D)>Math.abs(R)&&Math.abs(D)>10,void 0;E.preventDefault();const W=performance.now(),ce=W-ft.current;if(ce>0){const gt=(C.clientX-pt.current)/ce;Fe.current=.6*gt+.4*Fe.current}pt.current=C.clientX,ft.current=W;let he=R;const ue=w===0,qe=w>=$-1;if(ue&&R>0||qe&&R<0){const gt=R>0?1:-1,ro=Math.abs(R);he=gt*Math.sqrt(ro)*5,R>40&&ue&&le?se("prev"):R<-40&&qe&&ae?se("next"):se(null)}else se(null);Re.current=!0,xe(!0),ke(he)},b=E=>{if(!Ue.current||!Re.current){xe(!1),ke(0),se(null);return}const C=E.changedTouches[0].clientX-dt.current,R=Fe.current,D=50,W=.3,ce=80,he=w===0;if(w>=$-1&&C<-ce&&ae){xe(!1),ke(0),se(null),sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ae.slug;return}if(he&&C>ce&&le){xe(!1),ke(0),se(null),sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=le.slug;return}C<-D||R<-W?Se():(C>D||R>W)&&$e(),Re.current=!1,xe(!1),ke(0),se(null)},k=()=>{Re.current=!1,xe(!1),ke(0),se(null)};return u.addEventListener("touchstart",f,{passive:!0}),u.addEventListener("touchmove",m,{passive:!1}),u.addEventListener("touchend",b,{passive:!0}),u.addEventListener("touchcancel",k,{passive:!0}),()=>{u.removeEventListener("touchstart",f),u.removeEventListener("touchmove",m),u.removeEventListener("touchend",b),u.removeEventListener("touchcancel",k)}},[w,$,Se,$e,ae,le]),(()=>{if(!q||X.length===0)return{chapterPage:w,chapterTotalPages:$};const u=X.find(f=>f.slug===K);return u?{chapterPage:w-u.startPage,chapterTotalPages:u.endPage-u.startPage+1}:{chapterPage:w,chapterTotalPages:$}})();const to=(()=>{var R;if(!a||a.length===0)return $>1?w/($-1)*100:100;const u=a.reduce((D,W)=>D+(W.wordCount||0),0);if(u===0)return 0;const f=((R=G[0])==null?void 0:R.slug)||K;let m=0,b=0,k=!1;for(const D of a)if(D.slug===f&&(k=!0),!k)m+=D.wordCount||0;else if(G.some(W=>W.slug===D.slug))b+=D.wordCount||0;else break;const E=$>1?w/($-1):0,C=m+E*b;return Math.min(100,C/u*100)})();return o("div",{class:"pressy-reader pressy-reader--paginated",ref:x,onClick:Zr,onMouseMove:Qr,onMouseLeave:eo,children:[o("div",{class:"pressy-paginated-viewport",ref:g,style:Yr?{opacity:0}:{opacity:1,transition:"opacity 0.15s ease"},children:o("article",{ref:S,class:`pressy-prose pressy-prose--paginated ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:q&&G.length>0?G.map(u=>o("section",{class:"pressy-chapter-section","data-chapter-slug":u.slug,children:[o(ko,{title:u.title}),o(u.Content,{components:P||{}})]},u.slug)):e})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--prev ${Yt==="left"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"15 18 9 12 15 6"})})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--next ${Yt==="right"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"9 6 15 12 9 18"})})}),Wt==="prev"&&le&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-arrow",children:"←"}),o("span",{class:"pressy-chapter-hint-text",children:le.title})]}),Wt==="next"&&ae&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-text",children:ae.title}),o("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),te&&a&&o("div",{class:"pressy-toc-backdrop",onClick:u=>{u.stopPropagation(),fe(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:u=>u.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:u=>{u.stopPropagation(),fe(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:[o("a",{href:_&&_.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>{sessionStorage.setItem("pressy-internal-nav","1"),fe(!1)},children:[o("span",{class:"pressy-toc-item-num",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:o("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),o("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),a.map((u,f)=>o("a",{href:`${_||""}/${u.slug}`,class:`pressy-toc-item ${u.slug===(K||h)?"pressy-toc-item--active":""}`,onClick:()=>fe(!1),children:[o("span",{class:"pressy-toc-item-num",children:[f+1,"."]}),o("span",{class:"pressy-toc-item-title",children:u.title})]},u.slug))]})]})}),o("div",{class:`pressy-page-footer ${Ve||ne||te?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-progress-bar",children:o("div",{class:"pressy-progress-fill",style:{width:`${to}%`}})}),o("div",{class:"pressy-footer-row",children:[a&&a.length>0&&o("button",{class:"pressy-toc-toggle",onClick:u=>{u.stopPropagation(),De(!1),fe(!te)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:u=>{u.stopPropagation(),a&&a.length>0&&(De(!1),fe(!te))},children:t}),o(Hr,{offlineProps:L}),o("button",{class:"pressy-settings-toggle",onClick:u=>{u.stopPropagation(),fe(!1),De(!ne)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${ne?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(u=>o("button",{class:`pressy-theme-btn ${qr===u.id?"pressy-theme-btn--active":""}`,onClick:f=>{f.stopPropagation(),Kr(u.id)},children:[u.icon,o("span",{children:u.label})]},u.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:u=>{u.stopPropagation(),Ft(-.1)},disabled:Ae<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(Ae*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:u=>{u.stopPropagation(),Ft(.1)},disabled:Ae>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]})]}),o(Or,{}),o(Ir,{}),o("style",{children:xo})]})}function Mt({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i=!0,paginationMode:s="scroll",onSaveProgress:l,onRestoreProgress:d,bookProgressPercent:p,initialContent:c,chapterMapData:h,currentChapterSlug:a,allChapters:_,bookBasePath:v,onChapterChange:P,mdxComponents:z,paywall:L,offlineProps:x}){return s==="paginated"?o(So,{bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:l,onRestoreProgress:d,bookProgressPercent:p,initialContent:c,chapterMapData:h,currentChapterSlug:a,allChapters:_,bookBasePath:v,onChapterChange:P,mdxComponents:z,paywall:L,offlineProps:x,children:e}):o(wo,{bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:l,onRestoreProgress:d,allChapters:_,bookBasePath:v,currentChapterSlug:a,offlineProps:x,children:e})}function $o({id:e,children:t}){const r=ve(!1);return o("span",{class:"pressy-footnote-wrapper",children:[o("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&o("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,o("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),o("style",{children:`
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
      `})]})}function Co({children:e,title:t}){return o("aside",{class:"pressy-aside",children:[t&&o("strong",{class:"pressy-aside-title",children:t}),o("div",{class:"pressy-aside-content",children:e}),o("style",{children:`
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
      `})]})}function sr({src:e,alt:t,caption:r,wide:n,children:i}){return o("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[o("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||i)&&o("figcaption",{class:"pressy-figure-caption",children:r||i}),o("style",{children:`
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
      `})]})}var Po={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},zo={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function Eo({type:e="note",title:t,children:r}){return o("div",{class:`pressy-callout pressy-callout-${e}`,children:[o("div",{class:"pressy-callout-header",children:[o("span",{class:"pressy-callout-icon",children:Po[e]}),o("strong",{class:"pressy-callout-title",children:t||zo[e]})]}),o("div",{class:"pressy-callout-content",children:r}),o("style",{children:`
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
      `})]})}function ir({variant:e="asterisks"}){return o("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&o("span",{children:"* * *"}),e==="ornament"&&o("span",{children:"❧"}),o("style",{children:`
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
      `})]})}var To={Footnote:$o,Aside:Co,Figure:sr,Callout:Eo,SceneBreak:ir,img:sr,hr:ir},Lo={};function nt(){return{...To,...Lo}}var jr="pressy-cached-books",yt=re("online"),st=re(null),vt=re(!1),Ne=re(null);function Ao(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(jr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var Z=re(Ao());typeof window<"u"&&(yt.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{yt.value="online"}),window.addEventListener("offline",()=>{yt.value="offline"}));function Ro(){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Ne.value=e}),window.addEventListener("appinstalled",()=>{Ne.value=null})}async function Mo(){const e=Ne.value;if(!e)return!1;e.prompt();const{outcome:t}=await e.userChoice;return Ne.value=null,t==="accepted"}async function Oo(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",Io),navigator.serviceWorker.controller?vt.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{vt.value=!0}),n.addEventListener("updatefound",()=>{const i=n.installing;i&&i.addEventListener("statechange",()=>{i.state==="activated"&&(vt.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function He(){try{localStorage.setItem(jr,JSON.stringify([...Z.value]))}catch{}}function Io(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:i}=e.data;st.value={bookSlug:r,current:n,total:i}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;st.value=null;const n=new Set(Z.value);n.add(r),Z.value=n,He()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const i of r){const s=i.match(/\/books\/([^/]+)/);s&&n.add(s[1])}Z.value=n,He()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(Z.value);n.delete(r),Z.value=n,He()}}async function Br(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(i=>i.startsWith("http")?i:`${window.location.origin}${i}`);st.value={bookSlug:e,current:0,total:r.length};const n=new Set(Z.value);return n.add(e),Z.value=n,He(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}function Ho(e){return Z.value.has(e)}function Wr(e){!("serviceWorker"in navigator)||!navigator.serviceWorker.controller||navigator.serviceWorker.controller.postMessage({type:"INVALIDATE_BOOK_PAGES",bookSlug:e})}async function jo(e){const t=new Set(Z.value);if(t.delete(e),Z.value=t,He(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const i of n)i.url.includes(`/books/${e}`)&&await r.delete(i);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var ar=re("/"),Nr=re("light"),lr=re(!navigator.onLine),Bo="pressy",Wo=1,ze="reading-progress",cr="unlocks",Ke=null;async function Ot(){return Ke||new Promise((e,t)=>{const r=indexedDB.open(Bo,Wo);r.onerror=()=>t(r.error),r.onsuccess=()=>{Ke=r.result,e(Ke)},r.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(ze)||i.createObjectStore(ze,{keyPath:"chapterSlug"}),i.objectStoreNames.contains(cr)||i.createObjectStore(cr,{keyPath:"bookSlug"})}})}async function ur(e){const t=await Ot();return new Promise((r,n)=>{const l=t.transaction(ze,"readwrite").objectStore(ze).put(e);l.onsuccess=()=>r(),l.onerror=()=>n(l.error)})}async function et(){const e=await Ot();return new Promise((t,r)=>{const s=e.transaction(ze,"readonly").objectStore(ze).getAll();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>r(s.error)})}function Dr(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function dr(e){Nr.value=e,localStorage.setItem("pressy-theme",e);const t=e==="system"?Dr():e;document.documentElement.setAttribute("data-theme",t)}function No(){const e=localStorage.getItem("pressy-theme");e?dr(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&dr("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Nr.value==="system"&&document.documentElement.setAttribute("data-theme",Dr())})}function Do(){window.addEventListener("online",()=>{lr.value=!1}),window.addEventListener("offline",()=>{lr.value=!0})}function Fo({book:e}){const[t,r]=M(null);return O(()=>{if(e.chapters.length===0)return;const n=`${V}/books/${e.slug}/${e.chapters[0].slug}`;try{const i=localStorage.getItem("pressy-last-read");if(i){const{bookSlug:s,chapterSlug:l}=JSON.parse(i);if(s===e.slug&&e.chapters.some(d=>d.slug===l)){r({label:"Continue Reading",href:`${V}/books/${e.slug}/${l}`});return}}}catch{}et().then(i=>{const s=new Map(i.map(d=>[d.chapterSlug,d]));let l=null;for(const d of e.chapters){const p=s.get(d.slug);if(!p)continue;!(p.totalPages>0&&p.page>=p.totalPages-1)&&p.page>0&&(l=d)}r(l?{label:"Continue Reading",href:`${V}/books/${e.slug}/${l.slug}`}:{label:"Start Reading",href:n})}).catch(()=>{r({label:"Start Reading",href:n})})},[e]),t?o("a",{href:t.href,class:"pressy-cta",children:t.label}):null}function Uo(){return Ne.value?o("button",{class:"pressy-cta pressy-cta-secondary",onClick:()=>Mo(),children:"Install"}):null}function Fr({book:e,prominent:t}){const r=e.metadata.paywall;return!(r!=null&&r.enabled)||!r.price?null:o("a",{href:`/api/checkout?book=${e.slug}`,class:`pressy-cta ${t?"":"pressy-cta-secondary"}`,children:["Purchase — ",r.price]})}function pr({book:e}){const[t,r]=M("idle"),[n,i]=M(""),s=l=>{l.preventDefault(),n&&(r("sending"),fetch("/api/auth/recover",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,book:e.slug})}).then(d=>{r(d.ok?"success":"error")}).catch(()=>r("error")))};return t==="success"?o("p",{class:"pressy-recover-success",children:"Check your email for a recovery link."}):t==="error"?o("p",{class:"pressy-recover-error",children:"Something went wrong. Please try again."}):t==="idle"?o("button",{class:"pressy-recover-link",onClick:()=>r("form"),children:"Already purchased?"}):o("form",{class:"pressy-recover-form",onSubmit:s,children:[o("input",{type:"email",placeholder:"Email address",value:n,onInput:l=>i(l.target.value),required:!0}),o("button",{type:"submit",disabled:t==="sending",children:t==="sending"?"Sending…":"Send Recovery Link"})]})}function Vo(e){var n,i;const[t,r]=M((n=e.metadata.paywall)!=null&&n.enabled?void 0:!0);return O(()=>{var s;if(!((s=e.metadata.paywall)!=null&&s.enabled)){r(!0);return}fetch(`/api/auth/status?book=${e.slug}`).then(l=>l.json()).then(l=>{r(l.authorized),l.authorized&&Wr(e.slug)}).catch(()=>r(!1))},[e.slug,(i=e.metadata.paywall)==null?void 0:i.enabled]),t}function Yo({book:e,showPurchasePrompt:t,authorized:r}){var n;return!((n=e.metadata.paywall)!=null&&n.enabled)||r?null:t?o("div",{class:"pressy-purchase-prompt",children:[o("p",{children:"This chapter requires purchase to read."}),o(Fr,{book:e,prominent:!0}),o(pr,{book:e})]}):o(pr,{book:e})}function Ur({book:e,articles:t}){const r=typeof window<"u"&&new URLSearchParams(window.location.search).get("purchase")==="true",n=Vo(e),i=e.chapters.reduce((c,h)=>c+(h.wordCount||0),0),s=Math.ceil(i/200),l=e.chapters.length,d=e.metadata.publishDate?new Date(e.metadata.publishDate).getFullYear():null,p=i.toLocaleString();return o("div",{class:"pressy-home",children:[o("div",{class:"pressy-hero",children:[e.coverUrl&&o("img",{src:V+e.coverUrl,alt:`${e.metadata.title} cover`,class:"pressy-hero-cover"}),o("div",{class:"pressy-hero-text",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:e.metadata.title}),o("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&o("p",{class:"pressy-home-desc",children:e.metadata.description})]}),i>0&&o("div",{class:"pressy-stats",children:[o("span",{children:[l," chapter",l!==1?"s":""]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:[p," words"]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:["~",s," min"]}),d&&o(_e,{children:[o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:["First published ",d]})]})]}),o(Yo,{book:e,showPurchasePrompt:r,authorized:n}),l>0&&o("div",{class:"pressy-cta-group",children:[o(Fo,{book:e}),!n&&!r&&o(Fr,{book:e}),o(Uo,{})]})]})]}),t&&t.length>0&&o("section",{class:"pressy-home-section pressy-fade-sections",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:t.map(c=>o("a",{href:`${V}/articles/${c.slug}`,class:"pressy-chapter-link",children:c.metadata.title}))})]}),o("style",{children:Vr})]})}function _t(e){var r,n;if(e.books.length===1)return o(Ur,{book:e.books[0],articles:e.articles});const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return o("div",{class:"pressy-home",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&o("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Books"}),o("nav",{class:"pressy-chapter-list",children:e.books.map(i=>o("a",{href:`${V}/books/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),e.articles.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:e.articles.map(i=>o("a",{href:`${V}/articles/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),o("style",{children:Vr})]})}function bt(e,t,r,n,i){const s=e.chapters.reduce((p,c)=>p+(c.wordCount||0),0);if(s===0)return 0;const l=new Map(i.map(p=>[p.chapterSlug,p]));let d=0;for(const p of e.chapters){const c=p.wordCount||0;if(p.slug===t)n>0&&(d+=r/Math.max(1,n-1)*c);else{const h=l.get(p.slug);if(!h)continue;h.totalPages>0&&h.page>=h.totalPages-1?d+=c:h.page>0&&h.totalPages>0&&(d+=h.page/h.totalPages*c)}}return Math.min(100,d/s*100)}function Xo({book:e,chapterSlug:t,chapter:r,prevChapter:n,nextChapter:i,paginationMode:s,Content:l,chapterMapData:d}){var z,L,x;const[p,c]=M(void 0),[h,a]=M((z=e.metadata.paywall)!=null&&z.enabled?void 0:!0);O(()=>{var g;if(!((g=e.metadata.paywall)!=null&&g.enabled)){a(!0);return}fetch(`/api/auth/status?book=${e.slug}`).then(S=>S.json()).then(S=>{a(S.authorized),S.authorized&&Wr(e.slug)}).catch(()=>a(!0))},[e.slug,(L=e.metadata.paywall)==null?void 0:L.enabled]),O(()=>{et().then(g=>{const S=bt(e,t,0,0,g);c(S)})},[e,t]);const _=g=>{const S=g.activeChapterSlug||t;localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:S,page:g.page,totalPages:g.totalPages,scrollPosition:g.scrollPosition})),ur({chapterSlug:S,page:g.page,totalPages:g.totalPages,scrollPosition:g.scrollPosition,timestamp:Date.now()}),g.totalPages>0&&et().then(w=>{const Y=bt(e,S,g.page,g.totalPages,w);c(Y)})},v=async()=>{try{const g=localStorage.getItem("pressy-last-read");if(g){const S=JSON.parse(g);if(S.chapterSlug===t&&S.page>0)return{page:S.page,totalPages:S.totalPages,scrollPosition:S.scrollPosition||0}}}catch{}return null},P=(g,S,w)=>{ur({chapterSlug:g,page:S,totalPages:w,scrollPosition:0,timestamp:Date.now()}),localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:g,page:S,totalPages:w})),et().then(Y=>{const $=bt(e,g,S,w,Y);c($)})};return O(()=>{if(n){const g=document.createElement("link");return g.rel="prefetch",g.href=n.slug,document.head.appendChild(g),()=>{document.head.removeChild(g)}}},[n]),o(Mt,{title:(r==null?void 0:r.title)||t,bookTitle:e.metadata.title,chapterSlug:t,prevChapter:n,nextChapter:i,paginationMode:s,onSaveProgress:_,onRestoreProgress:v,bookProgressPercent:p,initialContent:l,chapterMapData:d,currentChapterSlug:t,allChapters:e.chapters.map(g=>({slug:g.slug,title:g.title,wordCount:g.wordCount})),bookBasePath:`${V}/books/${e.slug}`,onChapterChange:P,mdxComponents:nt(),paywall:(x=e.metadata.paywall)!=null&&x.enabled?{previewChapters:e.metadata.paywall.previewChapters,authorized:h??!1,bookSlug:e.slug}:void 0,offlineProps:{bookSlug:e.slug,chapterUrls:e.chapters.map(g=>`${V}/books/${e.slug}/${g.slug}`),cachedBooks:Z,cacheProgress:st,onDownload:Br,onRemove:jo},children:o(l,{components:nt()})})}function qo(e,t,r,n,i){const s=t.split("/"),l=s[2],d=s[3],p=e.books.find(z=>z.slug===l),c=p?p.chapters.findIndex(z=>z.slug===d):-1,h=p==null?void 0:p.chapters[c],a=z=>`${V}/books/${l}/${z.slug}`,_=p&&c>0?{slug:a(p.chapters[c-1]),title:p.chapters[c-1].title}:p?{slug:`${V}/books/${l}`,title:p.metadata.title}:void 0,v=p&&c>=0&&c<p.chapters.length-1?{slug:a(p.chapters[c+1]),title:p.chapters[c+1].title}:p?{slug:`${V}/books/${l}`,title:p.metadata.title}:void 0,P=r;return p?o(Xo,{book:p,chapterSlug:d,chapter:h,prevChapter:_,nextChapter:v,paginationMode:n,Content:P,chapterMapData:i}):o(Mt,{title:(h==null?void 0:h.title)||d,prevChapter:_,nextChapter:v,paginationMode:n,children:o(P,{components:nt()})})}function Jo(e,t,r){const n=t.split("/")[2],i=e.articles.find(l=>l.slug===n),s=r;return o(Mt,{title:(i==null?void 0:i.metadata.title)||n,children:o(s,{components:nt()})})}var Vr=`
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
`;function Go(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const i=r.indexOf(n);return i>0?r.slice(0,i):""}var V="";function Zo(e,t,r){var l;V=Go(e.route),ar.value=e.route;const n=!sessionStorage.getItem("pressy-session-active");sessionStorage.setItem("pressy-session-active","1"),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&sessionStorage.removeItem("pressy-session-active")});const i=sessionStorage.getItem("pressy-internal-nav");if(sessionStorage.removeItem("pressy-internal-nav"),n&&!i&&(e.routeType==="home"||e.routeType==="book")){const d=localStorage.getItem("pressy-last-read");if(d)try{const{bookSlug:p,chapterSlug:c}=JSON.parse(d),h=e.manifest.books.find(a=>a.slug===p);if(h!=null&&h.chapters.some(a=>a.slug===c)){window.location.replace(`${V}/books/${p}/${c}`);return}}catch{}}No(),Do(),Ro(),Ot(),Oo(V),window.addEventListener("appinstalled",()=>{for(const d of e.manifest.books){if(Ho(d.slug))continue;const p=d.chapters.map(c=>`${V}/books/${d.slug}/${c.slug}`);Br(d.slug,p)}}),window.addEventListener("popstate",()=>{ar.value=window.location.pathname}),document.addEventListener("click",d=>{const p=d.target.closest("a");if(!p)return;const c=p.getAttribute("href");if(c&&!(c.startsWith("http")||c.startsWith("#"))&&c.startsWith(e.route+"#")){d.preventDefault();const h=c.slice(c.indexOf("#")),a=document.querySelector(h);a&&a.scrollIntoView({behavior:"smooth"});return}});let s;switch(e.routeType){case"home":s=_t(e.manifest);break;case"book":{const d=e.route.split("/")[2],p=e.manifest.books.find(c=>c.slug===d);s=p?o(Ur,{book:p}):o("div",{children:"Book not found"});break}case"chapter":s=t?qo(e.manifest,e.route,t,(l=e.pagination)==null?void 0:l.defaultMode,r):o("div",{children:"Loading..."});break;case"article":s=t?Jo(e.manifest,e.route,t):o("div",{children:"Loading..."});break;case"books":s=_t(e.manifest);break;case"articles":s=_t(e.manifest);break;default:s=o("div",{children:"Page not found"})}co(s,document.getElementById("app"))}export{Zo as h,_e as k,o as u};
