var tt,L,ir,ar,ge,Ft,lr,cr,ur,wt,yt,vt,Re={},dr=[],Vr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,rt=Array.isArray;function ce(e,t){for(var r in t)e[r]=t[r];return e}function kt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Xr(e,t,r){var n,s,i,a={};for(i in t)i=="key"?n=t[i]:i=="ref"?s=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?tt.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)a[i]===void 0&&(a[i]=e.defaultProps[i]);return Xe(e,a,n,s,null)}function Xe(e,t,r,n,s){var i={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++ir,__i:-1,__u:0};return s==null&&L.vnode!=null&&L.vnode(i),i}function ye(e){return e.children}function Le(e,t){this.props=e,this.context=t}function $e(e,t){if(t==null)return e.__?$e(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?$e(e):null}function fr(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return fr(e)}}function Nt(e){(!e.__d&&(e.__d=!0)&&ge.push(e)&&!Ge.__r++||Ft!=L.debounceRendering)&&((Ft=L.debounceRendering)||lr)(Ge)}function Ge(){for(var e,t,r,n,s,i,a,c=1;ge.length;)ge.length>c&&ge.sort(cr),e=ge.shift(),c=ge.length,e.__d&&(r=void 0,n=void 0,s=(n=(t=e).__v).__e,i=[],a=[],t.__P&&((r=ce({},n)).__v=n.__v+1,L.vnode&&L.vnode(r),St(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[s]:null,i,s??$e(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,gr(i,r,a),n.__e=n.__=null,r.__e!=s&&fr(r)));Ge.__r=0}function pr(e,t,r,n,s,i,a,c,d,f,g){var l,v,p,S,T,E,w,b=n&&n.__k||dr,x=t.length;for(d=qr(r,t,b,d,x),l=0;l<x;l++)(p=r.__k[l])!=null&&(v=p.__i==-1?Re:b[p.__i]||Re,p.__i=l,E=St(e,p,v,s,i,a,c,d,f,g),S=p.__e,p.ref&&v.ref!=p.ref&&(v.ref&&$t(v.ref,null,p),g.push(p.ref,p.__c||S,p)),T==null&&S!=null&&(T=S),(w=!!(4&p.__u))||v.__k===p.__k?d=hr(p,d,e,w):typeof p.type=="function"&&E!==void 0?d=E:S&&(d=S.nextSibling),p.__u&=-7);return r.__e=T,d}function qr(e,t,r,n,s){var i,a,c,d,f,g=r.length,l=g,v=0;for(e.__k=new Array(s),i=0;i<s;i++)(a=t[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[i]=Xe(null,a,null,null,null):rt(a)?a=e.__k[i]=Xe(ye,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[i]=Xe(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[i]=a,d=i+v,a.__=e,a.__b=e.__b+1,c=null,(f=a.__i=Jr(a,r,d,l))!=-1&&(l--,(c=r[f])&&(c.__u|=2)),c==null||c.__v==null?(f==-1&&(s>g?v--:s<g&&v++),typeof a.type!="function"&&(a.__u|=4)):f!=d&&(f==d-1?v--:f==d+1?v++:(f>d?v--:v++,a.__u|=4))):e.__k[i]=null;if(l)for(i=0;i<g;i++)(c=r[i])!=null&&!(2&c.__u)&&(c.__e==n&&(n=$e(c)),yr(c,c));return n}function hr(e,t,r,n){var s,i;if(typeof e.type=="function"){for(s=e.__k,i=0;s&&i<s.length;i++)s[i]&&(s[i].__=e,t=hr(s[i],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=$e(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Jr(e,t,r,n){var s,i,a,c=e.key,d=e.type,f=t[r],g=f!=null&&(2&f.__u)==0;if(f===null&&c==null||g&&c==f.key&&d==f.type)return r;if(n>(g?1:0)){for(s=r-1,i=r+1;s>=0||i<t.length;)if((f=t[a=s>=0?s--:i++])!=null&&!(2&f.__u)&&c==f.key&&d==f.type)return a}return-1}function It(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Vr.test(t)?r:r+"px"}function Ue(e,t,r,n,s){var i,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||It(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||It(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(ur,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=r,r?n?r.u=n.u:(r.u=wt,e.addEventListener(t,i?vt:yt,i)):e.removeEventListener(t,i?vt:yt,i);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Ut(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=wt++;else if(t.t<r.u)return;return r(L.event?L.event(t):t)}}}function St(e,t,r,n,s,i,a,c,d,f){var g,l,v,p,S,T,E,w,b,x,q,$,G,Z,J,H,te,M=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),i=[c=t.__e=r.__e]),(g=L.__b)&&g(t);e:if(typeof M=="function")try{if(w=t.props,b="prototype"in M&&M.prototype.render,x=(g=M.contextType)&&n[g.__c],q=g?x?x.props.value:g.__:n,r.__c?E=(l=t.__c=r.__c).__=l.__E:(b?t.__c=l=new M(w,q):(t.__c=l=new Le(w,q),l.constructor=M,l.render=Kr),x&&x.sub(l),l.state||(l.state={}),l.__n=n,v=l.__d=!0,l.__h=[],l._sb=[]),b&&l.__s==null&&(l.__s=l.state),b&&M.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=ce({},l.__s)),ce(l.__s,M.getDerivedStateFromProps(w,l.__s))),p=l.props,S=l.state,l.__v=t,v)b&&M.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),b&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(b&&M.getDerivedStateFromProps==null&&w!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(w,q),t.__v==r.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(w,l.__s,q)===!1){for(t.__v!=r.__v&&(l.props=w,l.state=l.__s,l.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(m){m&&(m.__=t)}),$=0;$<l._sb.length;$++)l.__h.push(l._sb[$]);l._sb=[],l.__h.length&&a.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(w,l.__s,q),b&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,S,T)})}if(l.context=q,l.props=w,l.__P=e,l.__e=!1,G=L.__r,Z=0,b){for(l.state=l.__s,l.__d=!1,G&&G(t),g=l.render(l.props,l.state,l.context),J=0;J<l._sb.length;J++)l.__h.push(l._sb[J]);l._sb=[]}else do l.__d=!1,G&&G(t),g=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++Z<25);l.state=l.__s,l.getChildContext!=null&&(n=ce(ce({},n),l.getChildContext())),b&&!v&&l.getSnapshotBeforeUpdate!=null&&(T=l.getSnapshotBeforeUpdate(p,S)),H=g,g!=null&&g.type===ye&&g.key==null&&(H=mr(g.props.children)),c=pr(e,rt(H)?H:[H],t,r,n,s,i,a,c,d,f),l.base=t.__e,t.__u&=-161,l.__h.length&&a.push(l),E&&(l.__E=l.__=null)}catch(m){if(t.__v=null,d||i!=null)if(m.then){for(t.__u|=d?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i[i.indexOf(c)]=null,t.__e=c}else{for(te=i.length;te--;)kt(i[te]);_t(t)}else t.__e=r.__e,t.__k=r.__k,m.then||_t(t);L.__e(m,t,r)}else i==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):c=t.__e=Gr(r.__e,t,r,n,s,i,a,d,f);return(g=L.diffed)&&g(t),128&t.__u?void 0:c}function _t(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(_t)}function gr(e,t,r){for(var n=0;n<r.length;n++)$t(r[n],r[++n],r[++n]);L.__c&&L.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(i){i.call(s)})}catch(i){L.__e(i,s.__v)}})}function mr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:rt(e)?e.map(mr):ce({},e)}function Gr(e,t,r,n,s,i,a,c,d){var f,g,l,v,p,S,T,E=r.props||Re,w=t.props,b=t.type;if(b=="svg"?s="http://www.w3.org/2000/svg":b=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(f=0;f<i.length;f++)if((p=i[f])&&"setAttribute"in p==!!b&&(b?p.localName==b:p.nodeType==3)){e=p,i[f]=null;break}}if(e==null){if(b==null)return document.createTextNode(w);e=document.createElementNS(s,b,w.is&&w),c&&(L.__m&&L.__m(t,i),c=!1),i=null}if(b==null)E===w||c&&e.data==w||(e.data=w);else{if(i=i&&tt.call(e.childNodes),!c&&i!=null)for(E={},f=0;f<e.attributes.length;f++)E[(p=e.attributes[f]).name]=p.value;for(f in E)if(p=E[f],f!="children"){if(f=="dangerouslySetInnerHTML")l=p;else if(!(f in w)){if(f=="value"&&"defaultValue"in w||f=="checked"&&"defaultChecked"in w)continue;Ue(e,f,null,p,s)}}for(f in w)p=w[f],f=="children"?v=p:f=="dangerouslySetInnerHTML"?g=p:f=="value"?S=p:f=="checked"?T=p:c&&typeof p!="function"||E[f]===p||Ue(e,f,p,E[f],s);if(g)c||l&&(g.__html==l.__html||g.__html==e.innerHTML)||(e.innerHTML=g.__html),t.__k=[];else if(l&&(e.innerHTML=""),pr(t.type=="template"?e.content:e,rt(v)?v:[v],t,r,n,b=="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,a,i?i[0]:r.__k&&$e(r,0),c,d),i!=null)for(f=i.length;f--;)kt(i[f]);c||(f="value",b=="progress"&&S==null?e.removeAttribute("value"):S!=null&&(S!==e[f]||b=="progress"&&!S||b=="option"&&S!=E[f])&&Ue(e,f,S,E[f],s),f="checked",T!=null&&T!=e[f]&&Ue(e,f,T,E[f],s))}return e}function $t(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(s){L.__e(s,r)}}function yr(e,t,r){var n,s;if(L.unmount&&L.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||$t(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){L.__e(i,t)}n.base=n.__P=null}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&yr(n[s],t,r||typeof e.type!="function");r||kt(e.__e),e.__c=e.__=e.__e=void 0}function Kr(e,t,r){return this.constructor(e,r)}function Zr(e,t,r){var n,s,i,a;t==document&&(t=document.documentElement),L.__&&L.__(e,t),s=(n=!1)?null:t.__k,i=[],a=[],St(t,e=t.__k=Xr(ye,null,[e]),s||Re,Re,t.namespaceURI,s?null:t.firstChild?tt.call(t.childNodes):null,i,s?s.__e:t.firstChild,n,a),gr(i,e,a)}tt=dr.slice,L={__e:function(e,t,r,n){for(var s,i,a;t=t.__;)if((s=t.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(e)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,n||{}),a=s.__d),a)return s.__E=s}catch(c){e=c}throw e}},ir=0,ar=function(e){return e!=null&&e.constructor===void 0},Le.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ce({},this.state),typeof e=="function"&&(e=e(ce({},r),this.props)),e&&ce(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Nt(this))},Le.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Nt(this))},Le.prototype.render=ye,ge=[],lr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,cr=function(e,t){return e.__v.__b-t.__v.__b},Ge.__r=0,ur=/(PointerCapture)$|Capture$/i,wt=0,yt=Ut(!1),vt=Ut(!0);var Oe,j,ft,Yt,He=0,vr=[],W=L,Vt=W.__b,Xt=W.__r,qt=W.diffed,Jt=W.__c,Gt=W.unmount,Kt=W.__;function Ct(e,t){W.__h&&W.__h(j,e,He||t),He=0;var r=j.__H||(j.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function B(e){return He=1,Qr(br,e)}function Qr(e,t,r){var n=Ct(Oe++,2);if(n.t=e,!n.__c&&(n.__=[br(void 0,t),function(c){var d=n.__N?n.__N[0]:n.__[0],f=n.t(d,c);d!==f&&(n.__N=[f,n.__[1]],n.__c.setState({}))}],n.__c=j,!j.__f)){var s=function(c,d,f){if(!n.__c.__H)return!0;var g=n.__c.__H.__.filter(function(v){return!!v.__c});if(g.every(function(v){return!v.__N}))return!i||i.call(this,c,d,f);var l=n.__c.props!==c;return g.forEach(function(v){if(v.__N){var p=v.__[0];v.__=v.__N,v.__N=void 0,p!==v.__[0]&&(l=!0)}}),i&&i.call(this,c,d,f)||l};j.__f=!0;var i=j.shouldComponentUpdate,a=j.componentWillUpdate;j.componentWillUpdate=function(c,d,f){if(this.__e){var g=i;i=void 0,s(c,d,f),i=g}a&&a.call(this,c,d,f)},j.shouldComponentUpdate=s}return n.__N||n.__}function R(e,t){var r=Ct(Oe++,3);!W.__s&&_r(r.__H,t)&&(r.__=e,r.u=t,j.__H.__h.push(r))}function D(e){return He=5,ot(function(){return{current:e}},[])}function ot(e,t){var r=Ct(Oe++,7);return _r(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function I(e,t){return He=8,ot(function(){return e},t)}function eo(){for(var e;e=vr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(qe),e.__H.__h.forEach(bt),e.__H.__h=[]}catch(t){e.__H.__h=[],W.__e(t,e.__v)}}W.__b=function(e){j=null,Vt&&Vt(e)},W.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Kt&&Kt(e,t)},W.__r=function(e){Xt&&Xt(e),Oe=0;var t=(j=e.__c).__H;t&&(ft===j?(t.__h=[],j.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(qe),t.__h.forEach(bt),t.__h=[],Oe=0)),ft=j},W.diffed=function(e){qt&&qt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(vr.push(t)!==1&&Yt===W.requestAnimationFrame||((Yt=W.requestAnimationFrame)||to)(eo)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),ft=j=null},W.__c=function(e,t){t.some(function(r){try{r.__h.forEach(qe),r.__h=r.__h.filter(function(n){return!n.__||bt(n)})}catch(n){t.some(function(s){s.__h&&(s.__h=[])}),t=[],W.__e(n,r.__v)}}),Jt&&Jt(e,t)},W.unmount=function(e){Gt&&Gt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{qe(n)}catch(s){t=s}}),r.__H=void 0,t&&W.__e(t,r.__v))};var Zt=typeof requestAnimationFrame=="function";function to(e){var t,r=function(){clearTimeout(n),Zt&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);Zt&&(t=requestAnimationFrame(r))}function qe(e){var t=j,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),j=t}function bt(e){var t=j;e.__c=e.__(),j=t}function _r(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function br(e,t){return typeof t=="function"?t(e):t}var ro=Symbol.for("preact-signals");function Pt(){if(Se>1)Se--;else{for(var e,t=!1;Me!==void 0;){var r=Me;for(Me=void 0,xt++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&kr(r))try{r.c()}catch(s){t||(e=s,t=!0)}r=n}}if(xt=0,Se--,t)throw e}}var z=void 0;function xr(e){var t=z;z=void 0;try{return e()}finally{z=t}}var Me=void 0,Se=0,xt=0,Ke=0;function wr(e){if(z!==void 0){var t=e.n;if(t===void 0||t.t!==z)return t={i:0,S:e,p:z.s,n:void 0,t:z,e:void 0,x:void 0,r:t},z.s!==void 0&&(z.s.n=t),z.s=t,e.n=t,32&z.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=z.s,t.n=void 0,z.s.n=t,z.s=t),t}}function U(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}U.prototype.brand=ro;U.prototype.h=function(){return!0};U.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:xr(function(){var n;(n=t.W)==null||n.call(t)}))};U.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&xr(function(){var s;(s=t.Z)==null||s.call(t)}))}};U.prototype.subscribe=function(e){var t=this;return Et(function(){var r=t.value,n=z;z=void 0;try{e(r)}finally{z=n}},{name:"sub"})};U.prototype.valueOf=function(){return this.value};U.prototype.toString=function(){return this.value+""};U.prototype.toJSON=function(){return this.value};U.prototype.peek=function(){var e=z;z=void 0;try{return this.value}finally{z=e}};Object.defineProperty(U.prototype,"value",{get:function(){var e=wr(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(xt>100)throw new Error("Cycle detected");this.v=e,this.i++,Ke++,Se++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Pt()}}}});function ee(e,t){return new U(e,t)}function kr(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Sr(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function $r(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function ve(e,t){U.call(this,void 0),this.x=e,this.s=void 0,this.g=Ke-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}ve.prototype=new U;ve.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Ke))return!0;if(this.g=Ke,this.f|=1,this.i>0&&!kr(this))return this.f&=-2,!0;var e=z;try{Sr(this),z=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return z=e,$r(this),this.f&=-2,!0};ve.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}U.prototype.S.call(this,e)};ve.prototype.U=function(e){if(this.t!==void 0&&(U.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};ve.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(ve.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=wr(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function oo(e,t){return new ve(e,t)}function Cr(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Se++;var r=z;z=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,Tt(e),n}finally{z=r,Pt()}}}function Tt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Cr(e)}function no(e){if(z!==this)throw new Error("Out-of-order effect");$r(this),z=e,this.f&=-2,8&this.f&&Tt(this),Pt()}function Ce(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}Ce.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Ce.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Cr(this),Sr(this),Se++;var e=z;return z=this,no.bind(this,e)};Ce.prototype.N=function(){2&this.f||(this.f|=2,this.o=Me,Me=this)};Ce.prototype.d=function(){this.f|=8,1&this.f||Tt(this)};Ce.prototype.dispose=function(){this.d()};function Et(e,t){var r=new Ce(e,t);try{r.c()}catch(s){throw r.d(),s}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var Ye;function Pe(e,t){L[e]=t.bind(null,L[e]||function(){})}function Ze(e){if(Ye){var t=Ye;Ye=void 0,t()}Ye=e&&e.S()}function Pr(e){var t=this,r=e.data,n=me(r);n.value=r;var s=ot(function(){for(var i=t.__v;i=i.__;)if(i.__c){i.__c.__$f|=4;break}return t.__$u.c=function(){var a,c=t.__$u.S(),d=s.value;c(),ar(d)||((a=t.base)==null?void 0:a.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=d},oo(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return s.value}Pr.displayName="_st";Object.defineProperties(U.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Pr},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Pe("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var s in n)if(s!=="children"){var i=n[s];i instanceof U&&(r||(t.__np=r={}),r[s]=i,n[s]=i.peek())}}e(t)});Pe("__r",function(e,t){e(t),Ze();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(s){var i;return Et(function(){i=this}),i.c=function(){n.__$f|=1,n.setState({})},i}())),Ze(r)});Pe("__e",function(e,t,r,n){Ze(),e(t,r,n)});Pe("diffed",function(e,t){Ze();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,s=t.props;if(n){var i=r.U;if(i)for(var a in i){var c=i[a];c!==void 0&&!(a in n)&&(c.d(),i[a]=void 0)}else r.U=i={};for(var d in n){var f=i[d],g=n[d];f===void 0?(f=so(r,d,g,s),i[d]=f):f.o(g,s)}}}e(t)});function so(e,t,r,n){var s=t in e&&e.ownerSVGElement===void 0,i=ee(r);return{o:function(a,c){i.value=a,n=c},d:Et(function(){var a=i.value.value;n[t]!==a&&(n[t]=a,s?e[t]=a:a?e.setAttribute(t,a):e.removeAttribute(t))})}}Pe("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var s in n){var i=n[s];i&&i.d()}}}}else{var a=t.__c;if(a){var c=a.__$u;c&&(a.__$u=void 0,c.d())}}e(t)});Pe("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});Le.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var s in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var i in e)if(i!=="__source"&&e[i]!==this.props[i])return!0;for(var a in this.props)if(!(a in e))return!0;return!1};function me(e){return ot(function(){return ee(e)},[])}var io=0;function o(e,t,r,n,s,i){t||(t={});var a,c,d=t;if("ref"in d)for(c in d={},t)c=="ref"?a=t[c]:d[c]=t[c];var f={type:e,props:d,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--io,__i:-1,__u:0,__source:s,__self:i};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)d[c]===void 0&&(d[c]=a[c]);return L.vnode&&L.vnode(f),f}function ao({prev:e,next:t}){return!e&&!t?null:o("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[o("div",{class:"pressy-nav-inner",children:[e?o("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[o("span",{class:"pressy-nav-direction",children:"Previous"}),o("span",{class:"pressy-nav-title",children:e.title})]}):o("div",{class:"pressy-nav-placeholder"}),t?o("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[o("span",{class:"pressy-nav-direction",children:"Next"}),o("span",{class:"pressy-nav-title",children:t.title})]}):o("div",{class:"pressy-nav-placeholder"})]}),o("style",{children:`
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
      `})]})}function Tr(){const e=me(!1),t=me({x:0,y:0}),r=me(""),n=D(null);R(()=>{const c=()=>{const d=window.getSelection();if(!d||d.isCollapsed){e.value=!1;return}const f=d.toString().trim();if(f.length<5){e.value=!1;return}r.value=f;const l=d.getRangeAt(0).getBoundingClientRect();t.value={x:l.left+l.width/2,y:l.top-10},e.value=!0};return document.addEventListener("selectionchange",c),document.addEventListener("mouseup",c),()=>{document.removeEventListener("selectionchange",c),document.removeEventListener("mouseup",c)}},[]);const s=()=>{const c=encodeURIComponent(r.value),d=new URL(window.location.href);return d.hash=`:~:text=${c}`,d.toString()},i=async()=>{const c=s(),d=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:d,url:c}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${d}

${c}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var f;(f=n.current)==null||f.classList.remove("copied")},2e3))}catch(f){console.error("Failed to copy to clipboard:",f)}},a=async()=>{const c=s();try{await navigator.clipboard.writeText(c),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var d;(d=n.current)==null||d.classList.remove("copied")},2e3))}catch(d){console.error("Failed to copy link:",d)}};return e.value?o("div",{ref:n,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[o("button",{class:"pressy-share-btn",onClick:i,"aria-label":"Share selected text",title:"Share quote",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),o("button",{class:"pressy-copy-link-btn",onClick:a,"aria-label":"Copy link to selected text",title:"Copy link",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),o("style",{children:`
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
      `})]}):null}function Er(){const e=me(!navigator.onLine),t=me(!1);return R(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?o("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?o(ye,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),o("span",{children:"You're offline"})]}):o(ye,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),o("span",{children:"Back online"})]}),o("style",{children:`
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
      `})]}):null}function zt({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:s=!0,paginationMode:i="scroll",onSaveProgress:a,onRestoreProgress:c,bookProgressPercent:d,initialContent:f,chapterMapData:g,currentChapterSlug:l,allChapters:v,bookBasePath:p,onChapterChange:S,mdxComponents:T,offlineProps:E}){return i==="paginated"?o(uo,{bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:s,onSaveProgress:a,onRestoreProgress:c,bookProgressPercent:d,initialContent:f,chapterMapData:g,currentChapterSlug:l,allChapters:v,bookBasePath:p,onChapterChange:S,mdxComponents:T,offlineProps:E,children:e}):o(lo,{bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:s,onSaveProgress:a,onRestoreProgress:c,allChapters:v,bookBasePath:p,currentChapterSlug:l,offlineProps:E,children:e})}function zr({offlineProps:e}){if(!e)return null;const{bookSlug:t,chapterUrls:r,cachedBooks:n,onDownload:s,onRemove:i}=e;return n.value.has(t)?o("button",{class:"pressy-offline-icon pressy-offline-icon--cached",onClick:c=>{c.stopPropagation(),i(t)},"aria-label":"Available offline. Click to remove.",title:"Available offline. Click to remove.",children:[o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]}),o("svg",{class:"pressy-offline-check",viewBox:"0 0 24 24",fill:"currentColor",width:"10",height:"10",children:o("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})})]}):o("button",{class:"pressy-offline-icon",onClick:c=>{c.stopPropagation(),s(t,r)},"aria-label":"Download for offline reading",title:"Download for offline reading",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]})})}function lo({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:s,onSaveProgress:i,onRestoreProgress:a,allChapters:c,bookBasePath:d,currentChapterSlug:f,offlineProps:g}){const l=D(null),[v,p]=B(!1),S=D(null),[T,E]=B(!1),[w,b]=B(!1),x=I(()=>{p(!0),S.current&&clearTimeout(S.current),S.current=setTimeout(()=>p(!1),3e3)},[]),[q,$]=B(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[G,Z]=B(()=>{if(typeof localStorage<"u"){const m=localStorage.getItem("pressy-font-size");return m?parseFloat(m):1}return 1}),J=I(m=>{m===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${m})`)},[]);R(()=>{G!==1&&J(G)},[]);const H=I(m=>{$(m),localStorage.setItem("pressy-theme",m);const O=m==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":m;document.documentElement.setAttribute("data-theme",O)},[]),te=I(m=>{Z(O=>{const _e=Math.round(Math.max(.8,Math.min(1.5,O+m))*10)/10;return localStorage.setItem("pressy-font-size",String(_e)),J(_e),_e})},[J]),M=I(m=>{const O=m.target;if(!O.closest(".pressy-page-footer, .pressy-toc-backdrop, .pressy-toc-toggle")&&!O.closest('a, button, input, select, textarea, [role="button"]')){if(T||w){E(!1),b(!1);return}v?(p(!1),S.current&&clearTimeout(S.current)):x()}},[v,T,w,x]);return R(()=>{a&&a().then(m=>{m&&m.scrollPosition>0&&window.scrollTo(0,m.scrollPosition)})},[]),R(()=>{if(!i)return;const m=()=>{l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{i({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",m,{passive:!0}),()=>{window.removeEventListener("scroll",m),l.current&&clearTimeout(l.current)}},[i]),R(()=>{if(!i)return;const m=()=>{i({page:0,totalPages:0,scrollPosition:window.scrollY})};return window.addEventListener("beforeunload",m),()=>window.removeEventListener("beforeunload",m)},[i]),o("div",{class:"pressy-reader",onClick:M,children:[o("main",{class:"pressy-reader-main",children:o("article",{class:`pressy-prose ${s?"":"no-drop-cap"}`,"data-drop-cap":s,children:e})}),o(Tr,{}),o(ao,{prev:r,next:n}),o(Er,{}),w&&c&&o("div",{class:"pressy-toc-backdrop pressy-toc-backdrop--scroll",onClick:m=>{m.stopPropagation(),b(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:m=>m.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:m=>{m.stopPropagation(),b(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:[o("a",{href:d&&d.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>b(!1),children:[o("span",{class:"pressy-toc-item-num",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:o("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),o("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),c.map((m,O)=>o("a",{href:`${d||""}/${m.slug}`,class:`pressy-toc-item ${m.slug===f?"pressy-toc-item--active":""}`,onClick:()=>b(!1),children:[o("span",{class:"pressy-toc-item-num",children:[O+1,"."]}),o("span",{class:"pressy-toc-item-title",children:m.title})]},m.slug))]})]})}),o("div",{class:`pressy-page-footer pressy-page-footer--scroll ${v||T||w?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-footer-row",children:[c&&c.length>0&&o("button",{class:"pressy-toc-toggle",onClick:m=>{m.stopPropagation(),E(!1),b(!w)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:m=>{m.stopPropagation(),c&&c.length>0&&(E(!1),b(!w))},children:t}),o(zr,{offlineProps:g}),o("button",{class:"pressy-settings-toggle",onClick:m=>{m.stopPropagation(),b(!1),E(!T)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${T?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(m=>o("button",{class:`pressy-theme-btn ${q===m.id?"pressy-theme-btn--active":""}`,onClick:O=>{O.stopPropagation(),H(m.id)},children:[m.icon,o("span",{children:m.label})]},m.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:m=>{m.stopPropagation(),te(-.1)},disabled:G<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(G*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:m=>{m.stopPropagation(),te(.1)},disabled:G>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]})]}),o("style",{children:fo})]})}function co({title:e}){return o("div",{class:"pressy-chapter-divider",children:o("h2",{class:"pressy-chapter-divider-title",children:e})})}function uo({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:s,onSaveProgress:i,onRestoreProgress:a,bookProgressPercent:c,initialContent:d,chapterMapData:f,currentChapterSlug:g,allChapters:l,bookBasePath:v,onChapterChange:p,mdxComponents:S,offlineProps:T}){const E=D(null),w=D(null),b=D(null),[x,q]=B(0),[$,G]=B(1),Z=D(!1),J=D(null),[H,te]=B([]),[M,m]=B([]),[O,_e]=B(g||""),st=D(new Set),Y=!!(f&&d&&g&&l);R(()=>{if(Y&&d&&g){const u=l.find(h=>h.slug===g);te([{slug:g,title:(u==null?void 0:u.title)||g,Content:d}]),_e(g)}},[]);const[re,je]=B(!1),[Q,ue]=B(!1),[Br,jr]=B(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[Te,Wr]=B(()=>{if(typeof localStorage<"u"){const u=localStorage.getItem("pressy-font-size");return u?parseFloat(u):1}return 1}),it=I(u=>{u===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${u})`)},[]);R(()=>{Te!==1&&it(Te)},[]);const Dr=I(u=>{jr(u),localStorage.setItem("pressy-theme",u);const h=u==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":u;document.documentElement.setAttribute("data-theme",h)},[]),[Lt,be]=B(!1),[Mt,xe]=B(0),[At,oe]=B(null),at=D(0),Rt=D(0),lt=D(0),ct=D(0),We=D(0),De=D(!1),Ee=D(!1),Ot=I(()=>{if(!Y)return;const u=b.current,h=w.current;if(!u||!h)return;const y=h.clientWidth;if(y===0)return;const _=u.querySelectorAll(".pressy-chapter-section"),k=[];_.forEach(C=>{const P=C.getAttribute("data-chapter-slug")||"",A=C.offsetLeft,F=C.scrollWidth,N=Math.floor(A/y),ae=Math.max(N,Math.ceil((A+F)/y)-1);k.push({slug:P,startPage:N,endPage:ae})}),m(k)},[Y]),ne=I(()=>{const u=b.current,h=w.current;if(!u||!h)return;const y=h.clientWidth;if(y===0)return;u.style.columnWidth=`${y}px`,u.scrollWidth;const _=Math.max(1,Math.round(u.scrollWidth/y));G(_),q(k=>Math.min(k,_-1)),Ot()},[Ot]),Ht=I(u=>{Wr(h=>{const y=Math.round(Math.max(.8,Math.min(1.5,h+u))*10)/10;return localStorage.setItem("pressy-font-size",String(y)),it(y),setTimeout(()=>ne(),100),y})},[it,ne]);R(()=>{const u=w.current;if(!u)return;const h=setTimeout(ne,50),y=new ResizeObserver(()=>{ne()});return y.observe(u),()=>{clearTimeout(h),y.disconnect()}},[ne]),R(()=>{if(H.length>0){const u=setTimeout(ne,50);return()=>clearTimeout(u)}},[H.length,ne]),R(()=>{const u=b.current;if(!u)return;const h=u.querySelectorAll("img");if(h.length===0)return;const y=()=>ne();return h.forEach(_=>{_.complete||(_.addEventListener("load",y),_.addEventListener("error",y))}),()=>{h.forEach(_=>{_.removeEventListener("load",y),_.removeEventListener("error",y)})}},[ne,H.length]),R(()=>{if(new URLSearchParams(window.location.search).get("page")==="last"&&$>1){q($-1),Z.current=!0;const h=new URL(window.location.href);h.searchParams.delete("page"),history.replaceState(null,"",h.pathname)}},[$]),R(()=>{Z.current||$<=1||!a||a().then(u=>{if(!u||u.page<=0){Z.current=!0;return}let h;if(u.totalPages===$)h=u.page;else if(u.totalPages>0){const _=u.page/(u.totalPages-1);h=Math.round(_*($-1))}else{Z.current=!0;return}const y=Math.max(0,Math.min(h,$-1));q(y),Z.current=!0})},[$,a]),R(()=>{const u=b.current,h=w.current;if(!u||!h)return;const _=x*h.clientWidth-Mt;Lt?u.style.transition="none":u.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",u.style.transform=`translateX(-${_}px)`},[x,Mt,Lt]),R(()=>{const u=b.current,h=w.current;if(!u||!h)return;const y=h.getBoundingClientRect();u.querySelectorAll("a[href], button, input, select, textarea, [tabindex]").forEach(k=>{const C=k.getBoundingClientRect();if(C.left>=y.left-1&&C.right<=y.right+1){const A=k.getAttribute("data-original-tabindex");A!==null&&(A===""?k.removeAttribute("tabindex"):k.setAttribute("tabindex",A),k.removeAttribute("data-original-tabindex"))}else k.hasAttribute("data-original-tabindex")||k.setAttribute("data-original-tabindex",k.getAttribute("tabindex")||""),k.setAttribute("tabindex","-1")})},[x,$]),R(()=>{var F;if(!Y||!f||M.length===0)return;const u=M.find(N=>N.slug===O);if(!u||u.endPage-x>2)return;const{chapterOrder:y,chapterMap:_}=f,k=(F=H[H.length-1])==null?void 0:F.slug,C=y.indexOf(k);if(C===-1||C>=y.length-1)return;const P=y[C+1];if(st.current.has(P)||H.some(N=>N.slug===P))return;st.current.add(P);const A=_[P];A&&A().then(N=>{const ae=N.default,de=l.find(le=>le.slug===P);te(le=>le.some(Ie=>Ie.slug===P)?le:[...le,{slug:P,title:(de==null?void 0:de.title)||P,Content:ae}])}).catch(()=>{st.current.delete(P)})},[x,O,M,Y,f,H,l]),R(()=>{if(!Y||M.length===0||!v)return;const u=M.find(k=>x>=k.startPage&&x<=k.endPage);if(!u||u.slug===O)return;const h=O;_e(u.slug);const y=`${v}/${u.slug}`;history.replaceState(null,"",y);const _=l==null?void 0:l.find(k=>k.slug===u.slug);if(_&&(document.title=document.title.replace(/^[^|]+/,_.title+" ")),p&&h){const k=M.find(C=>C.slug===h);if(k){const C=k.endPage-k.startPage+1;p(h,C-1,C)}}},[x,M,O,Y,v,l,p]),R(()=>{if(!(!i||!Z.current))return J.current&&clearTimeout(J.current),J.current=setTimeout(()=>{if(Y&&M.length>0){const u=M.find(h=>h.slug===O);if(u){const h=x-u.startPage,y=u.endPage-u.startPage+1;i({page:h,totalPages:y,scrollPosition:0})}}else i({page:x,totalPages:$,scrollPosition:0})},300),()=>{J.current&&clearTimeout(J.current)}},[x,$,i,Y,M,O]),R(()=>{if(!i)return;const u=()=>{if(Y&&M.length>0){const h=M.find(y=>y.slug===O);if(h){const y=x-h.startPage,_=h.endPage-h.startPage+1;i({page:y,totalPages:_,scrollPosition:0})}}else i({page:x,totalPages:$,scrollPosition:0})};return window.addEventListener("beforeunload",u),()=>window.removeEventListener("beforeunload",u)},[x,$,i,Y,M,O]);const se=(()=>{var _;if(!Y||!f)return n;const{chapterOrder:u}=f,h=(_=H[H.length-1])==null?void 0:_.slug;if(!(u.indexOf(h)<u.length-1))return v?{slug:v,title:"Table of Contents"}:n})(),ie=(()=>{var C;if(!Y||!f)return r;const{chapterOrder:u}=f,h=(C=H[0])==null?void 0:C.slug,y=u.indexOf(h);if(y<=0)return r;const _=u[y-1],k=l==null?void 0:l.find(P=>P.slug===_);return{slug:`${v}/${_}?page=last`,title:(k==null?void 0:k.title)||_}})(),pe=I(u=>{const h=Math.max(0,Math.min(u,$-1));q(h)},[$]),we=I(()=>{if(x>=$-1){se&&(window.location.href=se.slug);return}pe(x+1)},[x,$,se,pe]),ke=I(()=>{if(x<=0){ie&&(window.location.href=ie.slug);return}pe(x-1)},[x,ie,pe]),[Fe,he]=B(!1),V=D(null),ut=I(()=>{he(!0),V.current&&clearTimeout(V.current),V.current=setTimeout(()=>he(!1),3e3)},[]),Bt=D(0),ze=D(null),jt=I(()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})},[]),Wt=typeof window<"u"&&window.matchMedia("(hover: none)").matches,Fr=I(u=>{const h=u.target;if(h.closest(".pressy-settings-panel, .pressy-settings-toggle, .pressy-toc-drawer, .pressy-toc-toggle")||h.closest('a, button, input, select, textarea, [role="button"]'))return;if(re||Q){je(!1),ue(!1);return}if(Wt){Fe?(he(!1),V.current&&clearTimeout(V.current)):ut();return}const y=E.current;if(!y)return;const _=y.getBoundingClientRect(),k=u.clientX-_.left,C=_.width*.15;if(k<C)ke();else if(k>_.width-C)we();else{const P=Date.now(),A=P-Bt.current;Bt.current=P,A<300?(ze.current&&clearTimeout(ze.current),jt()):(ze.current&&clearTimeout(ze.current),ze.current=setTimeout(()=>{Fe?(he(!1),V.current&&clearTimeout(V.current)):ut()},300))}},[we,ke,Fe,Wt,re,Q,ut,jt]),[Dt,Ne]=B(null),Nr=I(u=>{const h=E.current;if(!h)return;const y=h.getBoundingClientRect(),_=u.clientX-y.left,k=u.clientY-y.top,C=y.width/3;_<C?Ne("left"):_>C*2?Ne("right"):Ne(null),k>y.height*.75?(he(!0),V.current&&clearTimeout(V.current)):!re&&!Q&&(V.current&&clearTimeout(V.current),V.current=setTimeout(()=>he(!1),600))},[re,Q]),Ir=I(()=>{Ne(null),!re&&!Q&&(V.current&&clearTimeout(V.current),V.current=setTimeout(()=>he(!1),600))},[re,Q]);R(()=>{const u=h=>{const y=h.target.tagName;y==="INPUT"||y==="TEXTAREA"||y==="SELECT"||(h.key==="ArrowRight"||h.key===" "?(h.preventDefault(),we()):h.key==="ArrowLeft"?(h.preventDefault(),ke()):h.key==="Home"?(h.preventDefault(),pe(0)):h.key==="End"&&(h.preventDefault(),pe($-1)))};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[we,ke,pe,$]),R(()=>{const u=E.current;if(!u)return;const h=C=>{const P=C.touches[0];at.current=P.clientX,Rt.current=P.clientY,lt.current=P.clientX,ct.current=performance.now(),We.current=0,De.current=!1,Ee.current=!1},y=C=>{const P=C.touches[0],A=P.clientX-at.current,F=P.clientY-Rt.current;if(!De.current)if(Math.abs(A)>Math.abs(F)&&Math.abs(A)>10)De.current=!0;else return Math.abs(F)>Math.abs(A)&&Math.abs(F)>10,void 0;C.preventDefault();const N=performance.now(),ae=N-ct.current;if(ae>0){const dt=(P.clientX-lt.current)/ae;We.current=.6*dt+.4*We.current}lt.current=P.clientX,ct.current=N;let de=A;const le=x===0,Ie=x>=$-1;if(le&&A>0||Ie&&A<0){const dt=A>0?1:-1,Yr=Math.abs(A);de=dt*Math.sqrt(Yr)*5,A>40&&le&&ie?oe("prev"):A<-40&&Ie&&se?oe("next"):oe(null)}else oe(null);Ee.current=!0,be(!0),xe(de)},_=C=>{if(!De.current||!Ee.current){be(!1),xe(0),oe(null);return}const P=C.changedTouches[0].clientX-at.current,A=We.current,F=50,N=.3,ae=80,de=x===0;if(x>=$-1&&P<-ae&&se){be(!1),xe(0),oe(null),window.location.href=se.slug;return}if(de&&P>ae&&ie){be(!1),xe(0),oe(null),window.location.href=ie.slug;return}P<-F||A<-N?we():(P>F||A>N)&&ke(),Ee.current=!1,be(!1),xe(0),oe(null)},k=()=>{Ee.current=!1,be(!1),xe(0),oe(null)};return u.addEventListener("touchstart",h,{passive:!0}),u.addEventListener("touchmove",y,{passive:!1}),u.addEventListener("touchend",_,{passive:!0}),u.addEventListener("touchcancel",k,{passive:!0}),()=>{u.removeEventListener("touchstart",h),u.removeEventListener("touchmove",y),u.removeEventListener("touchend",_),u.removeEventListener("touchcancel",k)}},[x,$,we,ke,se,ie]),(()=>{if(!Y||M.length===0)return{chapterPage:x,chapterTotalPages:$};const u=M.find(h=>h.slug===O);return u?{chapterPage:x-u.startPage,chapterTotalPages:u.endPage-u.startPage+1}:{chapterPage:x,chapterTotalPages:$}})();const Ur=(()=>{var A;if(!l||l.length===0)return $>1?x/($-1)*100:100;const u=l.reduce((F,N)=>F+(N.wordCount||0),0);if(u===0)return 0;const h=((A=H[0])==null?void 0:A.slug)||O;let y=0,_=0,k=!1;for(const F of l)if(F.slug===h&&(k=!0),!k)y+=F.wordCount||0;else if(H.some(N=>N.slug===F.slug))_+=F.wordCount||0;else break;const C=$>1?x/($-1):0,P=y+C*_;return Math.min(100,P/u*100)})();return o("div",{class:"pressy-reader pressy-reader--paginated",ref:E,onClick:Fr,onMouseMove:Nr,onMouseLeave:Ir,children:[o("div",{class:"pressy-paginated-viewport",ref:w,children:o("article",{ref:b,class:`pressy-prose pressy-prose--paginated ${s?"":"no-drop-cap"}`,"data-drop-cap":s,children:Y&&H.length>0?H.map(u=>o("section",{class:"pressy-chapter-section","data-chapter-slug":u.slug,children:[o(co,{title:u.title}),o(u.Content,{components:S||{}})]},u.slug)):e})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--prev ${Dt==="left"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"15 18 9 12 15 6"})})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--next ${Dt==="right"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"9 6 15 12 9 18"})})}),At==="prev"&&ie&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-arrow",children:"←"}),o("span",{class:"pressy-chapter-hint-text",children:ie.title})]}),At==="next"&&se&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-text",children:se.title}),o("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),Q&&l&&o("div",{class:"pressy-toc-backdrop",onClick:u=>{u.stopPropagation(),ue(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:u=>u.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:u=>{u.stopPropagation(),ue(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:[o("a",{href:v&&v.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>ue(!1),children:[o("span",{class:"pressy-toc-item-num",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:o("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),o("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),l.map((u,h)=>o("a",{href:`${v||""}/${u.slug}`,class:`pressy-toc-item ${u.slug===(O||g)?"pressy-toc-item--active":""}`,onClick:()=>ue(!1),children:[o("span",{class:"pressy-toc-item-num",children:[h+1,"."]}),o("span",{class:"pressy-toc-item-title",children:u.title})]},u.slug))]})]})}),o("div",{class:`pressy-page-footer ${Fe||re||Q?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-progress-bar",children:o("div",{class:"pressy-progress-fill",style:{width:`${Ur}%`}})}),o("div",{class:"pressy-footer-row",children:[l&&l.length>0&&o("button",{class:"pressy-toc-toggle",onClick:u=>{u.stopPropagation(),je(!1),ue(!Q)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:u=>{u.stopPropagation(),l&&l.length>0&&(je(!1),ue(!Q))},children:t}),o(zr,{offlineProps:T}),o("button",{class:"pressy-settings-toggle",onClick:u=>{u.stopPropagation(),ue(!1),je(!re)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${re?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(u=>o("button",{class:`pressy-theme-btn ${Br===u.id?"pressy-theme-btn--active":""}`,onClick:h=>{h.stopPropagation(),Dr(u.id)},children:[u.icon,o("span",{children:u.label})]},u.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:u=>{u.stopPropagation(),Ht(-.1)},disabled:Te<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(Te*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:u=>{u.stopPropagation(),Ht(.1)},disabled:Te>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]})]}),o(Tr,{}),o(Er,{}),o("style",{children:po})]})}var fo=`
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
`,po=`
  html:has(.pressy-reader--paginated),
  html:has(.pressy-reader--paginated) body {
    margin: 0;
    overflow: hidden;
    height: 100%;
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
`;function ho({id:e,children:t}){const r=me(!1);return o("span",{class:"pressy-footnote-wrapper",children:[o("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&o("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,o("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),o("style",{children:`
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
      `})]})}function go({children:e,title:t}){return o("aside",{class:"pressy-aside",children:[t&&o("strong",{class:"pressy-aside-title",children:t}),o("div",{class:"pressy-aside-content",children:e}),o("style",{children:`
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
      `})]})}function Qt({src:e,alt:t,caption:r,wide:n,children:s}){return o("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[o("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||s)&&o("figcaption",{class:"pressy-figure-caption",children:r||s}),o("style",{children:`
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
      `})]})}var mo={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},yo={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function vo({type:e="note",title:t,children:r}){return o("div",{class:`pressy-callout pressy-callout-${e}`,children:[o("div",{class:"pressy-callout-header",children:[o("span",{class:"pressy-callout-icon",children:mo[e]}),o("strong",{class:"pressy-callout-title",children:t||yo[e]})]}),o("div",{class:"pressy-callout-content",children:r}),o("style",{children:`
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
      `})]})}function er({variant:e="asterisks"}){return o("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&o("span",{children:"* * *"}),e==="ornament"&&o("span",{children:"❧"}),o("style",{children:`
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
      `})]})}var _o={Footnote:ho,Aside:go,Figure:Qt,Callout:vo,SceneBreak:er,img:Qt,hr:er},bo={};function Qe(){return{..._o,...bo}}var Lr="pressy-cached-books",pt=ee("online"),et=ee(null),ht=ee(!1),Be=ee(null);function xo(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(Lr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var K=ee(xo());typeof window<"u"&&(pt.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{pt.value="online"}),window.addEventListener("offline",()=>{pt.value="offline"}));function wo(){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Be.value=e}),window.addEventListener("appinstalled",()=>{Be.value=null})}async function ko(){const e=Be.value;if(!e)return!1;e.prompt();const{outcome:t}=await e.userChoice;return Be.value=null,t==="accepted"}async function So(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",$o),navigator.serviceWorker.controller?ht.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{ht.value=!0}),n.addEventListener("updatefound",()=>{const s=n.installing;s&&s.addEventListener("statechange",()=>{s.state==="activated"&&(ht.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function Ae(){try{localStorage.setItem(Lr,JSON.stringify([...K.value]))}catch{}}function $o(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:s}=e.data;et.value={bookSlug:r,current:n,total:s}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;et.value=null;const n=new Set(K.value);n.add(r),K.value=n,Ae()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const s of r){const i=s.match(/\/books\/([^/]+)/);i&&n.add(i[1])}K.value=n,Ae()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(K.value);n.delete(r),K.value=n,Ae()}}async function Mr(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(s=>s.startsWith("http")?s:`${window.location.origin}${s}`);et.value={bookSlug:e,current:0,total:r.length};const n=new Set(K.value);return n.add(e),K.value=n,Ae(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}function Co(e){return K.value.has(e)}async function Po(e){const t=new Set(K.value);if(t.delete(e),K.value=t,Ae(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const s of n)s.url.includes(`/books/${e}`)&&await r.delete(s);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var tr=ee("/"),Ar=ee("light"),rr=ee(!navigator.onLine),To="pressy",Eo=1,fe="reading-progress",or="unlocks",Ve=null;async function nt(){return Ve||new Promise((e,t)=>{const r=indexedDB.open(To,Eo);r.onerror=()=>t(r.error),r.onsuccess=()=>{Ve=r.result,e(Ve)},r.onupgradeneeded=n=>{const s=n.target.result;s.objectStoreNames.contains(fe)||s.createObjectStore(fe,{keyPath:"chapterSlug"}),s.objectStoreNames.contains(or)||s.createObjectStore(or,{keyPath:"bookSlug"})}})}async function nr(e){const t=await nt();return new Promise((r,n)=>{const a=t.transaction(fe,"readwrite").objectStore(fe).put(e);a.onsuccess=()=>r(),a.onerror=()=>n(a.error)})}async function zo(e){const t=await nt();return new Promise((r,n)=>{const a=t.transaction(fe,"readonly").objectStore(fe).get(e);a.onsuccess=()=>r(a.result||null),a.onerror=()=>n(a.error)})}async function Je(){const e=await nt();return new Promise((t,r)=>{const i=e.transaction(fe,"readonly").objectStore(fe).getAll();i.onsuccess=()=>t(i.result||[]),i.onerror=()=>r(i.error)})}function Rr(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function sr(e){Ar.value=e,localStorage.setItem("pressy-theme",e);const t=e==="system"?Rr():e;document.documentElement.setAttribute("data-theme",t)}function Lo(){const e=localStorage.getItem("pressy-theme");e?sr(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&sr("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Ar.value==="system"&&document.documentElement.setAttribute("data-theme",Rr())})}function Mo(){window.addEventListener("online",()=>{rr.value=!1}),window.addEventListener("offline",()=>{rr.value=!0})}function Ao({book:e}){const[t,r]=B(null);return R(()=>{if(e.chapters.length===0)return;const n=`${X}/books/${e.slug}/${e.chapters[0].slug}`;Je().then(s=>{const i=new Map(s.map(c=>[c.chapterSlug,c]));let a=null;for(const c of e.chapters){const d=i.get(c.slug);if(!d)continue;!(d.totalPages>0&&d.page>=d.totalPages-1)&&d.page>0&&(a=c)}r(a?{label:"Continue Reading",href:`${X}/books/${e.slug}/${a.slug}`}:{label:"Start Reading",href:n})}).catch(()=>{r({label:"Start Reading",href:n})})},[e]),t?o("a",{href:t.href,class:"pressy-cta",children:t.label}):null}function Ro(){return Be.value?o("button",{class:"pressy-cta pressy-cta-secondary",onClick:()=>ko(),children:"Install"}):null}function Or(e,t=[]){const r=e.chapters.reduce((c,d)=>c+(d.wordCount||0),0),n=Math.ceil(r/200),s=e.chapters.length,i=e.metadata.publishDate?new Date(e.metadata.publishDate).getFullYear():null,a=r.toLocaleString();return o("div",{class:"pressy-home",children:[o("div",{class:"pressy-hero",children:[e.coverUrl&&o("img",{src:X+e.coverUrl,alt:`${e.metadata.title} cover`,class:"pressy-hero-cover"}),o("div",{class:"pressy-hero-text",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:e.metadata.title}),o("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&o("p",{class:"pressy-home-desc",children:e.metadata.description})]}),r>0&&o("div",{class:"pressy-stats",children:[o("span",{children:[s," chapter",s!==1?"s":""]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:[a," words"]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:["~",n," min"]}),i&&o(ye,{children:[o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:["First published ",i]})]})]}),s>0&&o("div",{class:"pressy-cta-group",children:[o(Ao,{book:e}),o(Ro,{})]})]})]}),t.length>0&&o("section",{class:"pressy-home-section pressy-fade-sections",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:t.map(c=>o("a",{href:`${X}/articles/${c.slug}`,class:"pressy-chapter-link",children:c.metadata.title}))})]}),o("style",{children:Hr})]})}function gt(e){var r,n;if(e.books.length===1)return Or(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return o("div",{class:"pressy-home",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&o("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Books"}),o("nav",{class:"pressy-chapter-list",children:e.books.map(s=>o("a",{href:`${X}/books/${s.slug}`,class:"pressy-chapter-link",children:s.metadata.title}))})]}),e.articles.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:e.articles.map(s=>o("a",{href:`${X}/articles/${s.slug}`,class:"pressy-chapter-link",children:s.metadata.title}))})]}),o("style",{children:Hr})]})}function mt(e,t,r,n,s){const i=e.chapters.reduce((d,f)=>d+(f.wordCount||0),0);if(i===0)return 0;const a=new Map(s.map(d=>[d.chapterSlug,d]));let c=0;for(const d of e.chapters){const f=d.wordCount||0;if(d.slug===t)n>0&&(c+=r/Math.max(1,n-1)*f);else{const g=a.get(d.slug);if(!g)continue;g.totalPages>0&&g.page>=g.totalPages-1?c+=f:g.page>0&&g.totalPages>0&&(c+=g.page/g.totalPages*f)}}return Math.min(100,c/i*100)}function Oo({book:e,chapterSlug:t,chapter:r,prevChapter:n,nextChapter:s,paginationMode:i,Content:a,chapterMapData:c}){const[d,f]=B(void 0);R(()=>{Je().then(p=>{const S=mt(e,t,0,0,p);f(S)})},[e,t]);const g=p=>{nr({chapterSlug:t,page:p.page,totalPages:p.totalPages,scrollPosition:p.scrollPosition,timestamp:Date.now()}),localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:t})),p.totalPages>0&&Je().then(S=>{const T=mt(e,t,p.page,p.totalPages,S);f(T)})},l=async()=>{const p=await zo(t);return p?{page:p.page,totalPages:p.totalPages,scrollPosition:p.scrollPosition}:null},v=(p,S,T)=>{nr({chapterSlug:p,page:S,totalPages:T,scrollPosition:0,timestamp:Date.now()}),localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:p})),Je().then(E=>{const w=mt(e,p,S,T,E);f(w)})};return R(()=>{if(n){const p=document.createElement("link");return p.rel="prefetch",p.href=n.slug,document.head.appendChild(p),()=>{document.head.removeChild(p)}}},[n]),o(zt,{title:(r==null?void 0:r.title)||t,bookTitle:e.metadata.title,chapterSlug:t,prevChapter:n,nextChapter:s,paginationMode:i,onSaveProgress:g,onRestoreProgress:l,bookProgressPercent:d,initialContent:a,chapterMapData:c,currentChapterSlug:t,allChapters:e.chapters.map(p=>({slug:p.slug,title:p.title,wordCount:p.wordCount})),bookBasePath:`${X}/books/${e.slug}`,onChapterChange:v,mdxComponents:Qe(),offlineProps:{bookSlug:e.slug,chapterUrls:e.chapters.map(p=>`${X}/books/${e.slug}/${p.slug}`),cachedBooks:K,cacheProgress:et,onDownload:Mr,onRemove:Po},children:o(a,{components:Qe()})})}function Ho(e,t,r,n,s){const i=t.split("/"),a=i[2],c=i[3],d=e.books.find(T=>T.slug===a),f=d?d.chapters.findIndex(T=>T.slug===c):-1,g=d==null?void 0:d.chapters[f],l=T=>`${X}/books/${a}/${T.slug}`,v=d&&f>0?{slug:l(d.chapters[f-1]),title:d.chapters[f-1].title}:d?{slug:`${X}/books/${a}`,title:d.metadata.title}:void 0,p=d&&f>=0&&f<d.chapters.length-1?{slug:l(d.chapters[f+1]),title:d.chapters[f+1].title}:d?{slug:`${X}/books/${a}`,title:d.metadata.title}:void 0,S=r;return d?o(Oo,{book:d,chapterSlug:c,chapter:g,prevChapter:v,nextChapter:p,paginationMode:n,Content:S,chapterMapData:s}):o(zt,{title:(g==null?void 0:g.title)||c,prevChapter:v,nextChapter:p,paginationMode:n,children:o(S,{components:Qe()})})}function Bo(e,t,r){const n=t.split("/")[2],s=e.articles.find(a=>a.slug===n),i=r;return o(zt,{title:(s==null?void 0:s.metadata.title)||n,children:o(i,{components:Qe()})})}var Hr=`
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
`;function jo(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const s=r.indexOf(n);return s>0?r.slice(0,s):""}var X="";function Do(e,t,r){var i;X=jo(e.route),tr.value=e.route;const n=!sessionStorage.getItem("pressy-session-active");if(sessionStorage.setItem("pressy-session-active","1"),n&&(e.routeType==="home"||e.routeType==="book")){const a=localStorage.getItem("pressy-last-read");if(a)try{const{bookSlug:c,chapterSlug:d}=JSON.parse(a),f=e.manifest.books.find(g=>g.slug===c);if(f!=null&&f.chapters.some(g=>g.slug===d)){window.location.replace(`${X}/books/${c}/${d}`);return}}catch{}}Lo(),Mo(),wo(),nt(),So(X),window.addEventListener("appinstalled",()=>{for(const a of e.manifest.books){if(Co(a.slug))continue;const c=a.chapters.map(d=>`${X}/books/${a.slug}/${d.slug}`);Mr(a.slug,c)}}),window.addEventListener("popstate",()=>{tr.value=window.location.pathname}),document.addEventListener("click",a=>{const c=a.target.closest("a");if(!c)return;const d=c.getAttribute("href");if(d&&!(d.startsWith("http")||d.startsWith("#"))&&d.startsWith(e.route+"#")){a.preventDefault();const f=d.slice(d.indexOf("#")),g=document.querySelector(f);g&&g.scrollIntoView({behavior:"smooth"});return}});let s;switch(e.routeType){case"home":s=gt(e.manifest);break;case"book":{const a=e.route.split("/")[2],c=e.manifest.books.find(d=>d.slug===a);s=c?Or(c):o("div",{children:"Book not found"});break}case"chapter":s=t?Ho(e.manifest,e.route,t,(i=e.pagination)==null?void 0:i.defaultMode,r):o("div",{children:"Loading..."});break;case"article":s=t?Bo(e.manifest,e.route,t):o("div",{children:"Loading..."});break;case"books":s=gt(e.manifest);break;case"articles":s=gt(e.manifest);break;default:s=o("div",{children:"Page not found"})}Zr(s,document.getElementById("app"))}export{Do as h,ye as k,o as u};
