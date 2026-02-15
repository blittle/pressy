var Ge,E,ar,lr,de,It,cr,ur,dr,yt,ht,vt,Le={},fr=[],qr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Je=Array.isArray;function ne(e,t){for(var r in t)e[r]=t[r];return e}function bt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Kr(e,t,r){var n,s,i,a={};for(i in t)i=="key"?n=t[i]:i=="ref"?s=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?Ge.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)a[i]===void 0&&(a[i]=e.defaultProps[i]);return Ie(e,a,n,s,null)}function Ie(e,t,r,n,s){var i={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++ar,__i:-1,__u:0};return s==null&&E.vnode!=null&&E.vnode(i),i}function be(e){return e.children}function Ce(e,t){this.props=e,this.context=t}function we(e,t){if(t==null)return e.__?we(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?we(e):null}function pr(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return pr(e)}}function Nt(e){(!e.__d&&(e.__d=!0)&&de.push(e)&&!je.__r++||It!=E.debounceRendering)&&((It=E.debounceRendering)||cr)(je)}function je(){for(var e,t,r,n,s,i,a,c=1;de.length;)de.length>c&&de.sort(ur),e=de.shift(),c=de.length,e.__d&&(r=void 0,n=void 0,s=(n=(t=e).__v).__e,i=[],a=[],t.__P&&((r=ne({},n)).__v=n.__v+1,E.vnode&&E.vnode(r),wt(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[s]:null,i,s??we(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,gr(i,r,a),n.__e=n.__=null,r.__e!=s&&pr(r)));je.__r=0}function hr(e,t,r,n,s,i,a,c,d,u,h){var l,g,p,y,x,L,k,_=n&&n.__k||fr,Y=t.length;for(d=Gr(r,t,_,d,Y),l=0;l<Y;l++)(p=r.__k[l])!=null&&(g=p.__i==-1?Le:_[p.__i]||Le,p.__i=l,L=wt(e,p,g,s,i,a,c,d,u,h),y=p.__e,p.ref&&g.ref!=p.ref&&(g.ref&&xt(g.ref,null,p),h.push(p.ref,p.__c||y,p)),x==null&&y!=null&&(x=y),(k=!!(4&p.__u))||g.__k===p.__k?d=vr(p,d,e,k):typeof p.type=="function"&&L!==void 0?d=L:y&&(d=y.nextSibling),p.__u&=-7);return r.__e=x,d}function Gr(e,t,r,n,s){var i,a,c,d,u,h=r.length,l=h,g=0;for(e.__k=new Array(s),i=0;i<s;i++)(a=t[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[i]=Ie(null,a,null,null,null):Je(a)?a=e.__k[i]=Ie(be,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[i]=Ie(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[i]=a,d=i+g,a.__=e,a.__b=e.__b+1,c=null,(u=a.__i=Jr(a,r,d,l))!=-1&&(l--,(c=r[u])&&(c.__u|=2)),c==null||c.__v==null?(u==-1&&(s>h?g--:s<h&&g++),typeof a.type!="function"&&(a.__u|=4)):u!=d&&(u==d-1?g--:u==d+1?g++:(u>d?g--:g++,a.__u|=4))):e.__k[i]=null;if(l)for(i=0;i<h;i++)(c=r[i])!=null&&!(2&c.__u)&&(c.__e==n&&(n=we(c)),mr(c,c));return n}function vr(e,t,r,n){var s,i;if(typeof e.type=="function"){for(s=e.__k,i=0;s&&i<s.length;i++)s[i]&&(s[i].__=e,t=vr(s[i],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=we(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Jr(e,t,r,n){var s,i,a,c=e.key,d=e.type,u=t[r],h=u!=null&&(2&u.__u)==0;if(u===null&&c==null||h&&c==u.key&&d==u.type)return r;if(n>(h?1:0)){for(s=r-1,i=r+1;s>=0||i<t.length;)if((u=t[a=s>=0?s--:i++])!=null&&!(2&u.__u)&&c==u.key&&d==u.type)return a}return-1}function Ft(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||qr.test(t)?r:r+"px"}function Ue(e,t,r,n,s){var i,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Ft(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||Ft(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(dr,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=r,r?n?r.u=n.u:(r.u=yt,e.addEventListener(t,i?vt:ht,i)):e.removeEventListener(t,i?vt:ht,i);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function jt(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=yt++;else if(t.t<r.u)return;return r(E.event?E.event(t):t)}}}function wt(e,t,r,n,s,i,a,c,d,u){var h,l,g,p,y,x,L,k,_,Y,P,pe,se,ie,M,ae,O,X=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),i=[c=t.__e=r.__e]),(h=E.__b)&&h(t);e:if(typeof X=="function")try{if(k=t.props,_="prototype"in X&&X.prototype.render,Y=(h=X.contextType)&&n[h.__c],P=h?Y?Y.props.value:h.__:n,r.__c?L=(l=t.__c=r.__c).__=l.__E:(_?t.__c=l=new X(k,P):(t.__c=l=new Ce(k,P),l.constructor=X,l.render=Qr),Y&&Y.sub(l),l.state||(l.state={}),l.__n=n,g=l.__d=!0,l.__h=[],l._sb=[]),_&&l.__s==null&&(l.__s=l.state),_&&X.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=ne({},l.__s)),ne(l.__s,X.getDerivedStateFromProps(k,l.__s))),p=l.props,y=l.state,l.__v=t,g)_&&X.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),_&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(_&&X.getDerivedStateFromProps==null&&k!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(k,P),t.__v==r.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(k,l.__s,P)===!1){for(t.__v!=r.__v&&(l.props=k,l.state=l.__s,l.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(H){H&&(H.__=t)}),pe=0;pe<l._sb.length;pe++)l.__h.push(l._sb[pe]);l._sb=[],l.__h.length&&a.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(k,l.__s,P),_&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,y,x)})}if(l.context=P,l.props=k,l.__P=e,l.__e=!1,se=E.__r,ie=0,_){for(l.state=l.__s,l.__d=!1,se&&se(t),h=l.render(l.props,l.state,l.context),M=0;M<l._sb.length;M++)l.__h.push(l._sb[M]);l._sb=[]}else do l.__d=!1,se&&se(t),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++ie<25);l.state=l.__s,l.getChildContext!=null&&(n=ne(ne({},n),l.getChildContext())),_&&!g&&l.getSnapshotBeforeUpdate!=null&&(x=l.getSnapshotBeforeUpdate(p,y)),ae=h,h!=null&&h.type===be&&h.key==null&&(ae=_r(h.props.children)),c=hr(e,Je(ae)?ae:[ae],t,r,n,s,i,a,c,d,u),l.base=t.__e,t.__u&=-161,l.__h.length&&a.push(l),L&&(l.__E=l.__=null)}catch(H){if(t.__v=null,d||i!=null)if(H.then){for(t.__u|=d?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i[i.indexOf(c)]=null,t.__e=c}else{for(O=i.length;O--;)bt(i[O]);gt(t)}else t.__e=r.__e,t.__k=r.__k,H.then||gt(t);E.__e(H,t,r)}else i==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):c=t.__e=Zr(r.__e,t,r,n,s,i,a,d,u);return(h=E.diffed)&&h(t),128&t.__u?void 0:c}function gt(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(gt)}function gr(e,t,r){for(var n=0;n<r.length;n++)xt(r[n],r[++n],r[++n]);E.__c&&E.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(i){i.call(s)})}catch(i){E.__e(i,s.__v)}})}function _r(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Je(e)?e.map(_r):ne({},e)}function Zr(e,t,r,n,s,i,a,c,d){var u,h,l,g,p,y,x,L=r.props||Le,k=t.props,_=t.type;if(_=="svg"?s="http://www.w3.org/2000/svg":_=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(u=0;u<i.length;u++)if((p=i[u])&&"setAttribute"in p==!!_&&(_?p.localName==_:p.nodeType==3)){e=p,i[u]=null;break}}if(e==null){if(_==null)return document.createTextNode(k);e=document.createElementNS(s,_,k.is&&k),c&&(E.__m&&E.__m(t,i),c=!1),i=null}if(_==null)L===k||c&&e.data==k||(e.data=k);else{if(i=i&&Ge.call(e.childNodes),!c&&i!=null)for(L={},u=0;u<e.attributes.length;u++)L[(p=e.attributes[u]).name]=p.value;for(u in L)if(p=L[u],u!="children"){if(u=="dangerouslySetInnerHTML")l=p;else if(!(u in k)){if(u=="value"&&"defaultValue"in k||u=="checked"&&"defaultChecked"in k)continue;Ue(e,u,null,p,s)}}for(u in k)p=k[u],u=="children"?g=p:u=="dangerouslySetInnerHTML"?h=p:u=="value"?y=p:u=="checked"?x=p:c&&typeof p!="function"||L[u]===p||Ue(e,u,p,L[u],s);if(h)c||l&&(h.__html==l.__html||h.__html==e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(l&&(e.innerHTML=""),hr(t.type=="template"?e.content:e,Je(g)?g:[g],t,r,n,_=="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,a,i?i[0]:r.__k&&we(r,0),c,d),i!=null)for(u=i.length;u--;)bt(i[u]);c||(u="value",_=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[u]||_=="progress"&&!y||_=="option"&&y!=L[u])&&Ue(e,u,y,L[u],s),u="checked",x!=null&&x!=e[u]&&Ue(e,u,x,L[u],s))}return e}function xt(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(s){E.__e(s,r)}}function mr(e,t,r){var n,s;if(E.unmount&&E.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||xt(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){E.__e(i,t)}n.base=n.__P=null}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&mr(n[s],t,r||typeof e.type!="function");r||bt(e.__e),e.__c=e.__=e.__e=void 0}function Qr(e,t,r){return this.constructor(e,r)}function en(e,t,r){var n,s,i,a;t==document&&(t=document.documentElement),E.__&&E.__(e,t),s=(n=!1)?null:t.__k,i=[],a=[],wt(t,e=t.__k=Kr(be,null,[e]),s||Le,Le,t.namespaceURI,s?null:t.firstChild?Ge.call(t.childNodes):null,i,s?s.__e:t.firstChild,n,a),gr(i,e,a)}Ge=fr.slice,E={__e:function(e,t,r,n){for(var s,i,a;t=t.__;)if((s=t.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(e)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,n||{}),a=s.__d),a)return s.__E=s}catch(c){e=c}throw e}},ar=0,lr=function(e){return e!=null&&e.constructor===void 0},Ce.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ne({},this.state),typeof e=="function"&&(e=e(ne({},r),this.props)),e&&ne(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Nt(this))},Ce.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Nt(this))},Ce.prototype.render=be,de=[],cr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ur=function(e,t){return e.__v.__b-t.__v.__b},je.__r=0,dr=/(PointerCapture)$|Capture$/i,yt=0,ht=jt(!1),vt=jt(!0);var ze,R,at,Yt,Re=0,yr=[],A=E,Xt=A.__b,Vt=A.__r,qt=A.diffed,Kt=A.__c,Gt=A.unmount,Jt=A.__;function kt(e,t){A.__h&&A.__h(R,e,Re||t),Re=0;var r=R.__H||(R.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function N(e){return Re=1,tn(wr,e)}function tn(e,t,r){var n=kt(ze++,2);if(n.t=e,!n.__c&&(n.__=[wr(void 0,t),function(c){var d=n.__N?n.__N[0]:n.__[0],u=n.t(d,c);d!==u&&(n.__N=[u,n.__[1]],n.__c.setState({}))}],n.__c=R,!R.__f)){var s=function(c,d,u){if(!n.__c.__H)return!0;var h=n.__c.__H.__.filter(function(g){return!!g.__c});if(h.every(function(g){return!g.__N}))return!i||i.call(this,c,d,u);var l=n.__c.props!==c;return h.forEach(function(g){if(g.__N){var p=g.__[0];g.__=g.__N,g.__N=void 0,p!==g.__[0]&&(l=!0)}}),i&&i.call(this,c,d,u)||l};R.__f=!0;var i=R.shouldComponentUpdate,a=R.componentWillUpdate;R.componentWillUpdate=function(c,d,u){if(this.__e){var h=i;i=void 0,s(c,d,u),i=h}a&&a.call(this,c,d,u)},R.shouldComponentUpdate=s}return n.__N||n.__}function z(e,t){var r=kt(ze++,3);!A.__s&&br(r.__H,t)&&(r.__=e,r.u=t,R.__H.__h.push(r))}function W(e){return Re=5,Ze(function(){return{current:e}},[])}function Ze(e,t){var r=kt(ze++,7);return br(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function j(e,t){return Re=8,Ze(function(){return e},t)}function rn(){for(var e;e=yr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ne),e.__H.__h.forEach(_t),e.__H.__h=[]}catch(t){e.__H.__h=[],A.__e(t,e.__v)}}A.__b=function(e){R=null,Xt&&Xt(e)},A.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Jt&&Jt(e,t)},A.__r=function(e){Vt&&Vt(e),ze=0;var t=(R=e.__c).__H;t&&(at===R?(t.__h=[],R.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Ne),t.__h.forEach(_t),t.__h=[],ze=0)),at=R},A.diffed=function(e){qt&&qt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(yr.push(t)!==1&&Yt===A.requestAnimationFrame||((Yt=A.requestAnimationFrame)||nn)(rn)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),at=R=null},A.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Ne),r.__h=r.__h.filter(function(n){return!n.__||_t(n)})}catch(n){t.some(function(s){s.__h&&(s.__h=[])}),t=[],A.__e(n,r.__v)}}),Kt&&Kt(e,t)},A.unmount=function(e){Gt&&Gt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Ne(n)}catch(s){t=s}}),r.__H=void 0,t&&A.__e(t,r.__v))};var Zt=typeof requestAnimationFrame=="function";function nn(e){var t,r=function(){clearTimeout(n),Zt&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);Zt&&(t=requestAnimationFrame(r))}function Ne(e){var t=R,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),R=t}function _t(e){var t=R;e.__c=e.__(),R=t}function br(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function wr(e,t){return typeof t=="function"?t(e):t}var on=Symbol.for("preact-signals");function St(){if(ye>1)ye--;else{for(var e,t=!1;Ee!==void 0;){var r=Ee;for(Ee=void 0,mt++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&Sr(r))try{r.c()}catch(s){t||(e=s,t=!0)}r=n}}if(mt=0,ye--,t)throw e}}var C=void 0;function xr(e){var t=C;C=void 0;try{return e()}finally{C=t}}var Ee=void 0,ye=0,mt=0,Ye=0;function kr(e){if(C!==void 0){var t=e.n;if(t===void 0||t.t!==C)return t={i:0,S:e,p:C.s,n:void 0,t:C,e:void 0,x:void 0,r:t},C.s!==void 0&&(C.s.n=t),C.s=t,e.n=t,32&C.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=C.s,t.n=void 0,C.s.n=t,C.s=t),t}}function B(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}B.prototype.brand=on;B.prototype.h=function(){return!0};B.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:xr(function(){var n;(n=t.W)==null||n.call(t)}))};B.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&xr(function(){var s;(s=t.Z)==null||s.call(t)}))}};B.prototype.subscribe=function(e){var t=this;return Pt(function(){var r=t.value,n=C;C=void 0;try{e(r)}finally{C=n}},{name:"sub"})};B.prototype.valueOf=function(){return this.value};B.prototype.toString=function(){return this.value+""};B.prototype.toJSON=function(){return this.value};B.prototype.peek=function(){var e=C;C=void 0;try{return this.value}finally{C=e}};Object.defineProperty(B.prototype,"value",{get:function(){var e=kr(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(mt>100)throw new Error("Cycle detected");this.v=e,this.i++,Ye++,ye++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{St()}}}});function oe(e,t){return new B(e,t)}function Sr(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function $r(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Pr(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function fe(e,t){B.call(this,void 0),this.x=e,this.s=void 0,this.g=Ye-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}fe.prototype=new B;fe.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Ye))return!0;if(this.g=Ye,this.f|=1,this.i>0&&!Sr(this))return this.f&=-2,!0;var e=C;try{$r(this),C=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return C=e,Pr(this),this.f&=-2,!0};fe.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}B.prototype.S.call(this,e)};fe.prototype.U=function(e){if(this.t!==void 0&&(B.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};fe.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(fe.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=kr(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function sn(e,t){return new fe(e,t)}function Cr(e){var t=e.u;if(e.u=void 0,typeof t=="function"){ye++;var r=C;C=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,$t(e),n}finally{C=r,St()}}}function $t(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Cr(e)}function an(e){if(C!==this)throw new Error("Out-of-order effect");Pr(this),C=e,this.f&=-2,8&this.f&&$t(this),St()}function xe(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}xe.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};xe.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Cr(this),$r(this),ye++;var e=C;return C=this,an.bind(this,e)};xe.prototype.N=function(){2&this.f||(this.f|=2,this.o=Ee,Ee=this)};xe.prototype.d=function(){this.f|=8,1&this.f||$t(this)};xe.prototype.dispose=function(){this.d()};function Pt(e,t){var r=new xe(e,t);try{r.c()}catch(s){throw r.d(),s}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var We;function ke(e,t){E[e]=t.bind(null,E[e]||function(){})}function Xe(e){if(We){var t=We;We=void 0,t()}We=e&&e.S()}function Er(e){var t=this,r=e.data,n=q(r);n.value=r;var s=Ze(function(){for(var i=t.__v;i=i.__;)if(i.__c){i.__c.__$f|=4;break}return t.__$u.c=function(){var a,c=t.__$u.S(),d=s.value;c(),lr(d)||((a=t.base)==null?void 0:a.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=d},sn(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return s.value}Er.displayName="_st";Object.defineProperties(B.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Er},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});ke("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var s in n)if(s!=="children"){var i=n[s];i instanceof B&&(r||(t.__np=r={}),r[s]=i,n[s]=i.peek())}}e(t)});ke("__r",function(e,t){e(t),Xe();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(s){var i;return Pt(function(){i=this}),i.c=function(){n.__$f|=1,n.setState({})},i}())),Xe(r)});ke("__e",function(e,t,r,n){Xe(),e(t,r,n)});ke("diffed",function(e,t){Xe();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,s=t.props;if(n){var i=r.U;if(i)for(var a in i){var c=i[a];c!==void 0&&!(a in n)&&(c.d(),i[a]=void 0)}else r.U=i={};for(var d in n){var u=i[d],h=n[d];u===void 0?(u=ln(r,d,h,s),i[d]=u):u.o(h,s)}}}e(t)});function ln(e,t,r,n){var s=t in e&&e.ownerSVGElement===void 0,i=oe(r);return{o:function(a,c){i.value=a,n=c},d:Pt(function(){var a=i.value.value;n[t]!==a&&(n[t]=a,s?e[t]=a:a?e.setAttribute(t,a):e.removeAttribute(t))})}}ke("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var s in n){var i=n[s];i&&i.d()}}}}else{var a=t.__c;if(a){var c=a.__$u;c&&(a.__$u=void 0,c.d())}}e(t)});ke("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});Ce.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var s in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var i in e)if(i!=="__source"&&e[i]!==this.props[i])return!0;for(var a in this.props)if(!(a in e))return!0;return!1};function q(e){return Ze(function(){return oe(e)},[])}function Ct(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function cn(e,t){let r;const n=()=>{if(r)return r;const s=indexedDB.open(e);return s.onupgradeneeded=()=>s.result.createObjectStore(t),r=Ct(s),r.then(i=>{i.onclose=()=>r=void 0},()=>{}),r};return(s,i)=>n().then(a=>i(a.transaction(t,s).objectStore(t)))}let lt;function Tr(){return lt||(lt=cn("keyval-store","keyval")),lt}function Lr(e,t=Tr()){return t("readonly",r=>Ct(r.get(e)))}function un(e,t,r=Tr()){return r("readwrite",n=>(n.put(t,e),Ct(n.transaction)))}var dn=0;function o(e,t,r,n,s,i){t||(t={});var a,c,d=t;if("ref"in d)for(c in d={},t)c=="ref"?a=t[c]:d[c]=t[c];var u={type:e,props:d,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--dn,__i:-1,__u:0,__source:s,__self:i};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)d[c]===void 0&&(d[c]=a[c]);return E.vnode&&E.vnode(u),u}var fn=Object.defineProperty,pn=(e,t)=>{for(var r in t)fn(e,r,{get:t[r],enumerable:!0})};function hn(e){return Ve=new zr(e),Ve}function vn(){if(!Ve)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return Ve}var zr,Ve;async function gn(e,t){const r=vn(),n=await r.getProduct(e);if(!n.variants.edges.length)throw new Error("Product has no variants");const i=[{variantId:n.variants.edges[0].node.id,quantity:1}],a=await r.createCheckout(i);if(t&&typeof localStorage<"u"){const c={checkoutId:a.id,bookSlug:t,createdAt:Date.now()};localStorage.setItem(mn,JSON.stringify(c))}return a.webUrl}function _n(e){return e.webUrl}var mn;async function yn(e,t){const r={bookSlug:e,orderId:t==null?void 0:t.orderId,email:t==null?void 0:t.email,unlockedAt:Date.now()};await un(`${Ae}${e}`,r),typeof localStorage<"u"&&localStorage.setItem(`${Ae}${e}`,JSON.stringify(r))}async function bn(e){if(typeof localStorage<"u"&&localStorage.getItem(`${Ae}${e}`))return!0;try{return!!await Lr(`${Ae}${e}`)}catch{return!1}}async function wn(e){try{return await Lr(`${Ae}${e}`)||null}catch{return null}}async function xn(e,t){const r=await wn(e);return!r||!r.orderId?!1:r.orderId===t}var Ae,kn={};pn(kn,{ShopifyClient:()=>zr,createCheckout:()=>gn,createShopifyClient:()=>hn,getCheckoutUrl:()=>_n,isContentUnlocked:()=>bn,unlockContent:()=>yn,verifyPurchase:()=>xn});function Sn({prev:e,next:t}){return!e&&!t?null:o("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[o("div",{class:"pressy-nav-inner",children:[e?o("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[o("span",{class:"pressy-nav-direction",children:"Previous"}),o("span",{class:"pressy-nav-title",children:e.title})]}):o("div",{class:"pressy-nav-placeholder"}),t?o("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[o("span",{class:"pressy-nav-direction",children:"Next"}),o("span",{class:"pressy-nav-title",children:t.title})]}):o("div",{class:"pressy-nav-placeholder"})]}),o("style",{children:`
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
      `})]})}function Rr(){const e=q(!1),t=q({x:0,y:0}),r=q(""),n=W(null);z(()=>{const c=()=>{const d=window.getSelection();if(!d||d.isCollapsed){e.value=!1;return}const u=d.toString().trim();if(u.length<5){e.value=!1;return}r.value=u;const l=d.getRangeAt(0).getBoundingClientRect();t.value={x:l.left+l.width/2,y:l.top-10},e.value=!0};return document.addEventListener("selectionchange",c),document.addEventListener("mouseup",c),()=>{document.removeEventListener("selectionchange",c),document.removeEventListener("mouseup",c)}},[]);const s=()=>{const c=encodeURIComponent(r.value),d=new URL(window.location.href);return d.hash=`:~:text=${c}`,d.toString()},i=async()=>{const c=s(),d=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:d,url:c}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${d}

${c}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var u;(u=n.current)==null||u.classList.remove("copied")},2e3))}catch(u){console.error("Failed to copy to clipboard:",u)}},a=async()=>{const c=s();try{await navigator.clipboard.writeText(c),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var d;(d=n.current)==null||d.classList.remove("copied")},2e3))}catch(d){console.error("Failed to copy link:",d)}};return e.value?o("div",{ref:n,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[o("button",{class:"pressy-share-btn",onClick:i,"aria-label":"Share selected text",title:"Share quote",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),o("button",{class:"pressy-copy-link-btn",onClick:a,"aria-label":"Copy link to selected text",title:"Copy link",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),o("style",{children:`
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
      `})]}):null}function Ar(){const e=q(!navigator.onLine),t=q(!1);return z(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?o("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?o(be,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),o("span",{children:"You're offline"})]}):o(be,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),o("span",{children:"Back online"})]}),o("style",{children:`
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
      `})]}):null}function Et({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:s=!0,paginationMode:i="scroll",onSaveProgress:a,onRestoreProgress:c,bookProgressPercent:d,initialContent:u,chapterMapData:h,currentChapterSlug:l,allChapters:g,bookBasePath:p,onChapterChange:y,mdxComponents:x}){return i==="paginated"?o(Cn,{bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:s,onSaveProgress:a,onRestoreProgress:c,bookProgressPercent:d,initialContent:u,chapterMapData:h,currentChapterSlug:l,allChapters:g,bookBasePath:p,onChapterChange:y,mdxComponents:x,children:e}):o($n,{prevChapter:r,nextChapter:n,showDropCap:s,onSaveProgress:a,onRestoreProgress:c,children:e})}function $n({children:e,prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:s,onRestoreProgress:i}){const a=W(null);return z(()=>{i&&i().then(c=>{c&&c.scrollPosition>0&&window.scrollTo(0,c.scrollPosition)})},[]),z(()=>{if(!s)return;const c=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{s({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",c,{passive:!0}),()=>{window.removeEventListener("scroll",c),a.current&&clearTimeout(a.current)}},[s]),z(()=>{if(!s)return;const c=()=>{s({page:0,totalPages:0,scrollPosition:window.scrollY})};return window.addEventListener("beforeunload",c),()=>window.removeEventListener("beforeunload",c)},[s]),o("div",{class:"pressy-reader",children:[o("main",{class:"pressy-reader-main",children:o("article",{class:`pressy-prose ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),o(Rr,{}),o(Sn,{prev:t,next:r}),o(Ar,{}),o("style",{children:En})]})}function Pn({title:e}){return o("div",{class:"pressy-chapter-divider",children:o("h2",{class:"pressy-chapter-divider-title",children:e})})}function Cn({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:s,onSaveProgress:i,onRestoreProgress:a,bookProgressPercent:c,initialContent:d,chapterMapData:u,currentChapterSlug:h,allChapters:l,bookBasePath:g,onChapterChange:p,mdxComponents:y}){const x=W(null),L=W(null),k=W(null),[_,Y]=N(0),[P,pe]=N(1),se=W(!1),ie=W(null),[M,ae]=N([]),[O,X]=N([]),[H,Tt]=N(h||""),et=W(new Set),I=!!(u&&d&&h&&l);z(()=>{if(I&&d&&h){const f=l.find(v=>v.slug===h);ae([{slug:h,title:(f==null?void 0:f.title)||h,Content:d}]),Tt(h)}},[]);const[G,Lt]=N(!1),[Wr,Br]=N(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[Se,Ir]=N(()=>{if(typeof localStorage<"u"){const f=localStorage.getItem("pressy-font-size");return f?parseFloat(f):1}return 1}),tt=j(f=>{f===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${f})`)},[]);z(()=>{Se!==1&&tt(Se)},[]);const Nr=j(f=>{Br(f),localStorage.setItem("pressy-theme",f);const v=f==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":f;document.documentElement.setAttribute("data-theme",v)},[]),[zt,he]=N(!1),[Rt,ve]=N(0),[At,J]=N(null),rt=W(0),Mt=W(0),nt=W(0),ot=W(0),Me=W(0),Oe=W(!1),$e=W(!1),Ot=j(()=>{if(!I)return;const f=k.current,v=L.current;if(!f||!v)return;const m=v.clientWidth;if(m===0)return;const b=f.querySelectorAll(".pressy-chapter-section"),w=[];b.forEach(S=>{const $=S.getAttribute("data-chapter-slug")||"",T=S.offsetLeft,D=S.scrollWidth,U=Math.floor(T/m),te=Math.max(U,Math.ceil((T+D)/m)-1);w.push({slug:$,startPage:U,endPage:te})}),X(w)},[I]),Z=j(()=>{const f=k.current,v=L.current;if(!f||!v)return;const m=v.clientWidth;if(m===0)return;f.style.columnWidth=`${m}px`,f.scrollWidth;const b=Math.max(1,Math.round(f.scrollWidth/m));pe(b),Y(w=>Math.min(w,b-1)),Ot()},[Ot]),Ht=j(f=>{Ir(v=>{const m=Math.round(Math.max(.8,Math.min(1.5,v+f))*10)/10;return localStorage.setItem("pressy-font-size",String(m)),tt(m),setTimeout(()=>Z(),100),m})},[tt,Z]);z(()=>{const f=L.current;if(!f)return;const v=setTimeout(Z,50),m=new ResizeObserver(()=>{Z()});return m.observe(f),()=>{clearTimeout(v),m.disconnect()}},[Z]),z(()=>{if(M.length>0){const f=setTimeout(Z,50);return()=>clearTimeout(f)}},[M.length,Z]),z(()=>{const f=k.current;if(!f)return;const v=f.querySelectorAll("img");if(v.length===0)return;const m=()=>Z();return v.forEach(b=>{b.complete||(b.addEventListener("load",m),b.addEventListener("error",m))}),()=>{v.forEach(b=>{b.removeEventListener("load",m),b.removeEventListener("error",m)})}},[Z,M.length]),z(()=>{if(new URLSearchParams(window.location.search).get("page")==="last"&&P>1){Y(P-1),se.current=!0;const v=new URL(window.location.href);v.searchParams.delete("page"),history.replaceState(null,"",v.pathname)}},[P]),z(()=>{const f=k.current,v=L.current;if(!f||!v)return;const b=_*v.clientWidth-Rt;zt?f.style.transition="none":f.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",f.style.transform=`translateX(-${b}px)`},[_,Rt,zt]),z(()=>{const f=k.current,v=L.current;if(!f||!v)return;const m=v.getBoundingClientRect();f.querySelectorAll("a[href], button, input, select, textarea, [tabindex]").forEach(w=>{const S=w.getBoundingClientRect();if(S.left>=m.left-1&&S.right<=m.right+1){const T=w.getAttribute("data-original-tabindex");T!==null&&(T===""?w.removeAttribute("tabindex"):w.setAttribute("tabindex",T),w.removeAttribute("data-original-tabindex"))}else w.hasAttribute("data-original-tabindex")||w.setAttribute("data-original-tabindex",w.getAttribute("tabindex")||""),w.setAttribute("tabindex","-1")})},[_,P]),z(()=>{var D;if(!I||!u||O.length===0)return;const f=O.find(U=>U.slug===H);if(!f||f.endPage-_>2)return;const{chapterOrder:m,chapterMap:b}=u,w=(D=M[M.length-1])==null?void 0:D.slug,S=m.indexOf(w);if(S===-1||S>=m.length-1)return;const $=m[S+1];if(et.current.has($)||M.some(U=>U.slug===$))return;et.current.add($);const T=b[$];T&&T().then(U=>{const te=U.default,le=l.find(re=>re.slug===$);ae(re=>re.some(De=>De.slug===$)?re:[...re,{slug:$,title:(le==null?void 0:le.title)||$,Content:te}])}).catch(()=>{et.current.delete($)})},[_,H,O,I,u,M,l]),z(()=>{if(!I||O.length===0||!g)return;const f=O.find(w=>_>=w.startPage&&_<=w.endPage);if(!f||f.slug===H)return;const v=H;Tt(f.slug);const m=`${g}/${f.slug}`;history.replaceState(null,"",m);const b=l==null?void 0:l.find(w=>w.slug===f.slug);if(b&&(document.title=document.title.replace(/^[^|]+/,b.title+" ")),p&&v){const w=O.find(S=>S.slug===v);if(w){const S=w.endPage-w.startPage+1;p(v,S-1,S)}}},[_,O,H,I,g,l,p]),z(()=>{if(!(!i||!se.current))return ie.current&&clearTimeout(ie.current),ie.current=setTimeout(()=>{if(I&&O.length>0){const f=O.find(v=>v.slug===H);if(f){const v=_-f.startPage,m=f.endPage-f.startPage+1;i({page:v,totalPages:m,scrollPosition:0})}}else i({page:_,totalPages:P,scrollPosition:0})},300),()=>{ie.current&&clearTimeout(ie.current)}},[_,P,i,I,O,H]),z(()=>{if(!i)return;const f=()=>{if(I&&O.length>0){const v=O.find(m=>m.slug===H);if(v){const m=_-v.startPage,b=v.endPage-v.startPage+1;i({page:m,totalPages:b,scrollPosition:0})}}else i({page:_,totalPages:P,scrollPosition:0})};return window.addEventListener("beforeunload",f),()=>window.removeEventListener("beforeunload",f)},[_,P,i,I,O,H]);const Q=(()=>{var b;if(!I||!u)return n;const{chapterOrder:f}=u,v=(b=M[M.length-1])==null?void 0:b.slug;if(!(f.indexOf(v)<f.length-1))return g?{slug:g,title:"Table of Contents"}:n})(),ee=(()=>{var S;if(!I||!u)return r;const{chapterOrder:f}=u,v=(S=M[0])==null?void 0:S.slug,m=f.indexOf(v);if(m<=0)return r;const b=f[m-1],w=l==null?void 0:l.find($=>$.slug===b);return{slug:`${g}/${b}?page=last`,title:(w==null?void 0:w.title)||b}})(),ue=j(f=>{const v=Math.max(0,Math.min(f,P-1));Y(v)},[P]),ge=j(()=>{if(_>=P-1){Q&&(window.location.href=Q.slug);return}ue(_+1)},[_,P,Q,ue]),_e=j(()=>{if(_<=0){ee&&(window.location.href=ee.slug);return}ue(_-1)},[_,ee,ue]),[st,me]=N(!1),F=W(null),Dt=j(()=>{me(!0),F.current&&clearTimeout(F.current),F.current=setTimeout(()=>me(!1),3e3)},[]),Ut=W(0),Pe=W(null),Wt=j(()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})},[]),Fr=j(f=>{const v=f.target;if(v.closest(".pressy-settings-panel, .pressy-settings-toggle")||v.closest('a, button, input, select, textarea, [role="button"]'))return;if(G){Lt(!1);return}const m=x.current;if(!m)return;const b=m.getBoundingClientRect(),w=f.clientX-b.left,S=b.width*.15;if(w<S)_e();else if(w>b.width-S)ge();else{const $=Date.now(),T=$-Ut.current;Ut.current=$,T<300?(Pe.current&&clearTimeout(Pe.current),Wt()):(Pe.current&&clearTimeout(Pe.current),Pe.current=setTimeout(()=>{st?(me(!1),F.current&&clearTimeout(F.current)):Dt()},300))}},[ge,_e,st,G,Dt,Wt]),[Bt,He]=N(null),jr=j(f=>{const v=x.current;if(!v)return;const m=v.getBoundingClientRect(),b=f.clientX-m.left,w=f.clientY-m.top,S=m.width/3;b<S?He("left"):b>S*2?He("right"):He(null),w>m.height*.75?(me(!0),F.current&&clearTimeout(F.current)):G||(F.current&&clearTimeout(F.current),F.current=setTimeout(()=>me(!1),600))},[G]),Yr=j(()=>{He(null),G||(F.current&&clearTimeout(F.current),F.current=setTimeout(()=>me(!1),600))},[G]);z(()=>{const f=v=>{const m=v.target.tagName;m==="INPUT"||m==="TEXTAREA"||m==="SELECT"||(v.key==="ArrowRight"||v.key===" "?(v.preventDefault(),ge()):v.key==="ArrowLeft"?(v.preventDefault(),_e()):v.key==="Home"?(v.preventDefault(),ue(0)):v.key==="End"&&(v.preventDefault(),ue(P-1)))};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[ge,_e,ue,P]),z(()=>{const f=x.current;if(!f)return;const v=S=>{const $=S.touches[0];rt.current=$.clientX,Mt.current=$.clientY,nt.current=$.clientX,ot.current=performance.now(),Me.current=0,Oe.current=!1,$e.current=!1},m=S=>{const $=S.touches[0],T=$.clientX-rt.current,D=$.clientY-Mt.current;if(!Oe.current)if(Math.abs(T)>Math.abs(D)&&Math.abs(T)>10)Oe.current=!0;else return Math.abs(D)>Math.abs(T)&&Math.abs(D)>10,void 0;S.preventDefault();const U=performance.now(),te=U-ot.current;if(te>0){const it=($.clientX-nt.current)/te;Me.current=.6*it+.4*Me.current}nt.current=$.clientX,ot.current=U;let le=T;const re=_===0,De=_>=P-1;if(re&&T>0||De&&T<0){const it=T>0?1:-1,Vr=Math.abs(T);le=it*Math.sqrt(Vr)*5,T>40&&re&&ee?J("prev"):T<-40&&De&&Q?J("next"):J(null)}else J(null);$e.current=!0,he(!0),ve(le)},b=S=>{if(!Oe.current||!$e.current){he(!1),ve(0),J(null);return}const $=S.changedTouches[0].clientX-rt.current,T=Me.current,D=50,U=.3,te=80,le=_===0;if(_>=P-1&&$<-te&&Q){he(!1),ve(0),J(null),window.location.href=Q.slug;return}if(le&&$>te&&ee){he(!1),ve(0),J(null),window.location.href=ee.slug;return}$<-D||T<-U?ge():($>D||T>U)&&_e(),$e.current=!1,he(!1),ve(0),J(null)},w=()=>{$e.current=!1,he(!1),ve(0),J(null)};return f.addEventListener("touchstart",v,{passive:!0}),f.addEventListener("touchmove",m,{passive:!1}),f.addEventListener("touchend",b,{passive:!0}),f.addEventListener("touchcancel",w,{passive:!0}),()=>{f.removeEventListener("touchstart",v),f.removeEventListener("touchmove",m),f.removeEventListener("touchend",b),f.removeEventListener("touchcancel",w)}},[_,P,ge,_e,Q,ee]),(()=>{if(!I||O.length===0)return{chapterPage:_,chapterTotalPages:P};const f=O.find(v=>v.slug===H);return f?{chapterPage:_-f.startPage,chapterTotalPages:f.endPage-f.startPage+1}:{chapterPage:_,chapterTotalPages:P}})();const Xr=(()=>{var T;if(!l||l.length===0)return P>1?_/(P-1)*100:100;const f=l.reduce((D,U)=>D+(U.wordCount||0),0);if(f===0)return 0;const v=((T=M[0])==null?void 0:T.slug)||H;let m=0,b=0,w=!1;for(const D of l)if(D.slug===v&&(w=!0),!w)m+=D.wordCount||0;else if(M.some(U=>U.slug===D.slug))b+=D.wordCount||0;else break;const S=P>1?_/(P-1):0,$=m+S*b;return Math.min(100,$/f*100)})();return o("div",{class:"pressy-reader pressy-reader--paginated",ref:x,onClick:Fr,onMouseMove:jr,onMouseLeave:Yr,children:[o("div",{class:"pressy-paginated-viewport",ref:L,children:o("article",{ref:k,class:`pressy-prose pressy-prose--paginated ${s?"":"no-drop-cap"}`,"data-drop-cap":s,children:I&&M.length>0?M.map(f=>o("section",{class:"pressy-chapter-section","data-chapter-slug":f.slug,children:[o(Pn,{title:f.title}),o(f.Content,{components:y||{}})]},f.slug)):e})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--prev ${Bt==="left"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"15 18 9 12 15 6"})})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--next ${Bt==="right"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"9 6 15 12 9 18"})})}),At==="prev"&&ee&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-arrow",children:"←"}),o("span",{class:"pressy-chapter-hint-text",children:ee.title})]}),At==="next"&&Q&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-text",children:Q.title}),o("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),o("div",{class:`pressy-page-footer ${st||G?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-progress-bar",children:o("div",{class:"pressy-progress-fill",style:{width:`${Xr}%`}})}),o("div",{class:"pressy-footer-row",children:[t&&o("span",{class:"pressy-footer-title",children:t}),o("button",{class:"pressy-settings-toggle",onClick:f=>{f.stopPropagation(),Lt(!G)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${G?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(f=>o("button",{class:`pressy-theme-btn ${Wr===f.id?"pressy-theme-btn--active":""}`,onClick:v=>{v.stopPropagation(),Nr(f.id)},children:[f.icon,o("span",{children:f.label})]},f.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:f=>{f.stopPropagation(),Ht(-.1)},disabled:Se<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(Se*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:f=>{f.stopPropagation(),Ht(.1)},disabled:Se>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]})]}),o(Rr,{}),o(Ar,{}),o("style",{children:Tn})]})}var En=`
  .pressy-reader {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .pressy-reader-main {
    flex: 1;
    padding: 2rem 0;
  }
`,Tn=`
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
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
    text-align: center;
    padding: 3rem 1.5rem;
    max-width: min(65ch, calc(100% - 3rem));
    margin: 0 auto;
  }

  .pressy-chapter-divider-title {
    font-size: 1.5rem;
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    margin: 0;
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
`,Ln="pressy-cached-books";function Qt(){try{const e=localStorage.getItem(Ln);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function zn({bookSlug:e,chapterUrls:t,cachedBooks:r,cacheProgress:n,onDownload:s,onRemove:i}){var u;const a=q(Qt().has(e)||r.value.has(e)),c=q(((u=n.value)==null?void 0:u.bookSlug)===e),d=q(null);return z(()=>{const h=()=>{var p;a.value=Qt().has(e)||r.value.has(e),c.value=((p=n.value)==null?void 0:p.bookSlug)===e;const g=n.value;d.value=g&&g.bookSlug===e?Math.round(g.current/g.total*100):null},l=setInterval(h,500);return h(),()=>clearInterval(l)},[e]),a.value?o("div",{class:"pressy-download-book",children:[o("div",{class:"pressy-download-status",children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),o("span",{children:"Available offline"})]}),o("button",{class:"pressy-download-remove",onClick:()=>i(e),"aria-label":"Remove offline copy",children:"Remove"}),o("style",{children:ct})]}):c.value?o("div",{class:"pressy-download-book",children:[o("div",{class:"pressy-download-progress",children:[o("div",{class:"pressy-download-bar",children:o("div",{class:"pressy-download-bar-fill",style:{width:`${d.value||0}%`}})}),o("span",{class:"pressy-download-percent",children:[d.value||0,"%"]})]}),o("style",{children:ct})]}):o("div",{class:"pressy-download-book",children:[o("button",{class:"pressy-download-btn",onClick:()=>s(e,t),"aria-label":"Download for offline reading",children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),o("span",{children:"Download for offline"})]}),o("style",{children:ct})]})}var ct=`
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
`;function Rn({chapters:e,basePath:t,bookSlug:r,loadAllProgress:n}){const[s,i]=N(new Map);z(()=>{n().then(g=>{const p=new Set(e.map(x=>x.slug)),y=new Map;for(const x of g)p.has(x.chapterSlug)&&y.set(x.chapterSlug,{page:x.page,totalPages:x.totalPages});i(y)})},[e,n]);const a=e.reduce((g,p)=>g+(p.wordCount||0),0);let c=0,d=0,u=0;for(const g of e){const p=s.get(g.slug);if(!p)continue;const y=g.wordCount||0;p.totalPages>0&&p.page>=p.totalPages-1?(c+=y,d++,u++):p.page>0&&p.totalPages>0&&(c+=p.page/p.totalPages*y,u++)}const h=a>0?c/a*100:0,l=u>0;return o("div",{class:"pressy-book-progress-section",children:[l&&o("div",{class:"pressy-overall-progress",children:[o("div",{class:"pressy-overall-progress-bar",children:o("div",{class:"pressy-overall-progress-fill",style:{width:`${h}%`}})}),o("div",{class:"pressy-overall-progress-text",children:[Math.round(h),"% complete",o("span",{class:"pressy-overall-progress-detail",children:[d," of ",e.length," chapters"]})]})]}),o("nav",{class:"pressy-chapter-list",children:e.map(g=>{const p=s.get(g.slug),y=p&&p.totalPages>0&&p.page>=p.totalPages-1,x=p&&p.page>0&&!y;return o("a",{href:`${t}/books/${r}/${g.slug}`,class:`pressy-chapter-link ${y?"pressy-chapter--completed":""} ${x?"pressy-chapter--started":""}`,children:[o("span",{class:"pressy-chapter-order",children:[g.order,"."]}),o("span",{class:"pressy-chapter-title",children:g.title}),y&&o("span",{class:"pressy-chapter-badge pressy-chapter-badge--done",children:"Done"}),x&&p&&o("span",{class:"pressy-chapter-badge pressy-chapter-badge--reading",children:["p.",p.page+1,"/",p.totalPages]})]})})}),o("style",{children:An})]})}var An=`
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
`;function Mn({id:e,children:t}){const r=q(!1);return o("span",{class:"pressy-footnote-wrapper",children:[o("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&o("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,o("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),o("style",{children:`
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
      `})]})}function On({children:e,title:t}){return o("aside",{class:"pressy-aside",children:[t&&o("strong",{class:"pressy-aside-title",children:t}),o("div",{class:"pressy-aside-content",children:e}),o("style",{children:`
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
      `})]})}function er({src:e,alt:t,caption:r,wide:n,children:s}){return o("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[o("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||s)&&o("figcaption",{class:"pressy-figure-caption",children:r||s}),o("style",{children:`
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
      `})]})}var Hn={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},Dn={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function Un({type:e="note",title:t,children:r}){return o("div",{class:`pressy-callout pressy-callout-${e}`,children:[o("div",{class:"pressy-callout-header",children:[o("span",{class:"pressy-callout-icon",children:Hn[e]}),o("strong",{class:"pressy-callout-title",children:t||Dn[e]})]}),o("div",{class:"pressy-callout-content",children:r}),o("style",{children:`
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
      `})]})}function tr({variant:e="asterisks"}){return o("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&o("span",{children:"* * *"}),e==="ornament"&&o("span",{children:"❧"}),o("style",{children:`
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
      `})]})}var Wn={Footnote:Mn,Aside:On,Figure:er,Callout:Un,SceneBreak:tr,img:er,hr:tr},Bn={};function qe(){return{...Wn,...Bn}}var Mr="pressy-cached-books",ut=oe("online"),Ke=oe(null),dt=oe(!1);function In(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(Mr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var V=oe(In());typeof window<"u"&&(ut.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{ut.value="online"}),window.addEventListener("offline",()=>{ut.value="offline"}));async function Nn(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",Fn),navigator.serviceWorker.controller?dt.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{dt.value=!0}),n.addEventListener("updatefound",()=>{const s=n.installing;s&&s.addEventListener("statechange",()=>{s.state==="activated"&&(dt.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function Te(){try{localStorage.setItem(Mr,JSON.stringify([...V.value]))}catch{}}function Fn(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:s}=e.data;Ke.value={bookSlug:r,current:n,total:s}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;Ke.value=null;const n=new Set(V.value);n.add(r),V.value=n,Te()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const s of r){const i=s.match(/\/books\/([^/]+)/);i&&n.add(i[1])}V.value=n,Te()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(V.value);n.delete(r),V.value=n,Te()}}async function jn(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(s=>s.startsWith("http")?s:`${window.location.origin}${s}`);Ke.value={bookSlug:e,current:0,total:r.length};const n=new Set(V.value);return n.add(e),V.value=n,Te(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}async function Yn(e){const t=new Set(V.value);if(t.delete(e),V.value=t,Te(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const s of n)s.url.includes(`/books/${e}`)&&await r.delete(s);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var rr=oe("/"),Or=oe("light"),nr=oe(!navigator.onLine),Xn="pressy",Vn=1,ce="reading-progress",or="unlocks",Be=null;async function Qe(){return Be||new Promise((e,t)=>{const r=indexedDB.open(Xn,Vn);r.onerror=()=>t(r.error),r.onsuccess=()=>{Be=r.result,e(Be)},r.onupgradeneeded=n=>{const s=n.target.result;s.objectStoreNames.contains(ce)||s.createObjectStore(ce,{keyPath:"chapterSlug"}),s.objectStoreNames.contains(or)||s.createObjectStore(or,{keyPath:"bookSlug"})}})}async function sr(e){const t=await Qe();return new Promise((r,n)=>{const a=t.transaction(ce,"readwrite").objectStore(ce).put(e);a.onsuccess=()=>r(),a.onerror=()=>n(a.error)})}async function qn(e){const t=await Qe();return new Promise((r,n)=>{const a=t.transaction(ce,"readonly").objectStore(ce).get(e);a.onsuccess=()=>r(a.result||null),a.onerror=()=>n(a.error)})}async function Fe(){const e=await Qe();return new Promise((t,r)=>{const i=e.transaction(ce,"readonly").objectStore(ce).getAll();i.onsuccess=()=>t(i.result||[]),i.onerror=()=>r(i.error)})}function Hr(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function ir(e){Or.value=e,localStorage.setItem("pressy-theme",e);const t=e==="system"?Hr():e;document.documentElement.setAttribute("data-theme",t)}function Kn(){const e=localStorage.getItem("pressy-theme");e?ir(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&ir("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Or.value==="system"&&document.documentElement.setAttribute("data-theme",Hr())})}function Gn(){window.addEventListener("online",()=>{nr.value=!1}),window.addEventListener("offline",()=>{nr.value=!0})}function Dr(e,t=[]){const r=e.chapters.map(n=>`/books/${e.slug}/${n.slug}`);return o("div",{class:"pressy-home",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:e.metadata.title}),o("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&o("p",{class:"pressy-home-desc",children:e.metadata.description})]}),o(zn,{bookSlug:e.slug,chapterUrls:r,cachedBooks:V,cacheProgress:Ke,onDownload:jn,onRemove:Yn}),o("section",{class:"pressy-home-section",children:[o("h2",{children:"Chapters"}),o(Rn,{bookSlug:e.slug,chapters:e.chapters.map(n=>({slug:n.slug,title:n.title,order:n.order,wordCount:n.wordCount||0})),basePath:K,loadAllProgress:Fe})]}),t.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:t.map(n=>o("a",{href:`${K}/articles/${n.slug}`,class:"pressy-chapter-link",children:n.metadata.title}))})]}),o("style",{children:Ur})]})}function ft(e){var r,n;if(e.books.length===1)return Dr(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return o("div",{class:"pressy-home",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&o("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Books"}),o("nav",{class:"pressy-chapter-list",children:e.books.map(s=>o("a",{href:`${K}/books/${s.slug}`,class:"pressy-chapter-link",children:s.metadata.title}))})]}),e.articles.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:e.articles.map(s=>o("a",{href:`${K}/articles/${s.slug}`,class:"pressy-chapter-link",children:s.metadata.title}))})]}),o("style",{children:Ur})]})}function pt(e,t,r,n,s){const i=e.chapters.reduce((d,u)=>d+(u.wordCount||0),0);if(i===0)return 0;const a=new Map(s.map(d=>[d.chapterSlug,d]));let c=0;for(const d of e.chapters){const u=d.wordCount||0;if(d.slug===t)n>0&&(c+=r/Math.max(1,n-1)*u);else{const h=a.get(d.slug);if(!h)continue;h.totalPages>0&&h.page>=h.totalPages-1?c+=u:h.page>0&&h.totalPages>0&&(c+=h.page/h.totalPages*u)}}return Math.min(100,c/i*100)}function Jn({book:e,chapterSlug:t,chapter:r,prevChapter:n,nextChapter:s,paginationMode:i,Content:a,chapterMapData:c}){const[d,u]=N(void 0);z(()=>{Fe().then(p=>{const y=pt(e,t,0,0,p);u(y)})},[e,t]);const h=p=>{sr({chapterSlug:t,page:p.page,totalPages:p.totalPages,scrollPosition:p.scrollPosition,timestamp:Date.now()}),p.totalPages>0&&Fe().then(y=>{const x=pt(e,t,p.page,p.totalPages,y);u(x)})},l=async()=>{const p=await qn(t);return p?{page:p.page,totalPages:p.totalPages,scrollPosition:p.scrollPosition}:null},g=(p,y,x)=>{sr({chapterSlug:p,page:y,totalPages:x,scrollPosition:0,timestamp:Date.now()}),Fe().then(L=>{const k=pt(e,p,y,x,L);u(k)})};return z(()=>{if(n){const p=document.createElement("link");return p.rel="prefetch",p.href=n.slug,document.head.appendChild(p),()=>{document.head.removeChild(p)}}},[n]),o(Et,{title:(r==null?void 0:r.title)||t,bookTitle:e.metadata.title,chapterSlug:t,prevChapter:n,nextChapter:s,paginationMode:i,onSaveProgress:h,onRestoreProgress:l,bookProgressPercent:d,initialContent:a,chapterMapData:c,currentChapterSlug:t,allChapters:e.chapters.map(p=>({slug:p.slug,title:p.title,wordCount:p.wordCount})),bookBasePath:`${K}/books/${e.slug}`,onChapterChange:g,mdxComponents:qe(),children:o(a,{components:qe()})})}function Zn(e,t,r,n,s){const i=t.split("/"),a=i[2],c=i[3],d=e.books.find(x=>x.slug===a),u=d?d.chapters.findIndex(x=>x.slug===c):-1,h=d==null?void 0:d.chapters[u],l=x=>`${K}/books/${a}/${x.slug}`,g=d&&u>0?{slug:l(d.chapters[u-1]),title:d.chapters[u-1].title}:d?{slug:`${K}/books/${a}`,title:d.metadata.title}:void 0,p=d&&u>=0&&u<d.chapters.length-1?{slug:l(d.chapters[u+1]),title:d.chapters[u+1].title}:d?{slug:`${K}/books/${a}`,title:d.metadata.title}:void 0,y=r;return d?o(Jn,{book:d,chapterSlug:c,chapter:h,prevChapter:g,nextChapter:p,paginationMode:n,Content:y,chapterMapData:s}):o(Et,{title:(h==null?void 0:h.title)||c,prevChapter:g,nextChapter:p,paginationMode:n,children:o(y,{components:qe()})})}function Qn(e,t,r){const n=t.split("/")[2],s=e.articles.find(a=>a.slug===n),i=r;return o(Et,{title:(s==null?void 0:s.metadata.title)||n,children:o(i,{components:qe()})})}var Ur=`
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
`;function eo(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const s=r.indexOf(n);return s>0?r.slice(0,s):""}var K="";function ro(e,t,r){var s;K=eo(e.route),rr.value=e.route,Kn(),Gn(),Qe(),Nn(K),window.addEventListener("popstate",()=>{rr.value=window.location.pathname}),document.addEventListener("click",i=>{const a=i.target.closest("a");if(!a)return;const c=a.getAttribute("href");if(c&&!(c.startsWith("http")||c.startsWith("#"))&&c.startsWith(e.route+"#")){i.preventDefault();const d=c.slice(c.indexOf("#")),u=document.querySelector(d);u&&u.scrollIntoView({behavior:"smooth"});return}});let n;switch(e.routeType){case"home":n=ft(e.manifest);break;case"book":{const i=e.route.split("/")[2],a=e.manifest.books.find(c=>c.slug===i);n=a?Dr(a):o("div",{children:"Book not found"});break}case"chapter":n=t?Zn(e.manifest,e.route,t,(s=e.pagination)==null?void 0:s.defaultMode,r):o("div",{children:"Loading..."});break;case"article":n=t?Qn(e.manifest,e.route,t):o("div",{children:"Loading..."});break;case"books":n=ft(e.manifest);break;case"articles":n=ft(e.manifest);break;default:n=o("div",{children:"Page not found"})}en(n,document.getElementById("app"))}export{ro as h,be as k,o as u};
