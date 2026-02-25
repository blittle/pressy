var it,A,hr,gr,_e,Xt,yr,mr,vr,$t,wt,xt,Be={},_r=[],to=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,at=Array.isArray;function fe(e,t){for(var r in t)e[r]=t[r];return e}function Ct(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ro(e,t,r){var n,i,s,u={};for(s in t)s=="key"?n=t[s]:s=="ref"?i=t[s]:u[s]=t[s];if(arguments.length>2&&(u.children=arguments.length>3?it.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)u[s]===void 0&&(u[s]=e.defaultProps[s]);return Ze(e,u,n,i,null)}function Ze(e,t,r,n,i){var s={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++hr,__i:-1,__u:0};return i==null&&A.vnode!=null&&A.vnode(s),s}function ye(e){return e.children}function Ie(e,t){this.props=e,this.context=t}function $e(e,t){if(t==null)return e.__?$e(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?$e(e):null}function br(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return br(e)}}function qt(e){(!e.__d&&(e.__d=!0)&&_e.push(e)&&!tt.__r++||Xt!=A.debounceRendering)&&((Xt=A.debounceRendering)||yr)(tt)}function tt(){for(var e,t,r,n,i,s,u,c=1;_e.length;)_e.length>c&&_e.sort(mr),e=_e.shift(),c=_e.length,e.__d&&(r=void 0,n=void 0,i=(n=(t=e).__v).__e,s=[],u=[],t.__P&&((r=fe({},n)).__v=n.__v+1,A.vnode&&A.vnode(r),Et(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[i]:null,s,i??$e(n),!!(32&n.__u),u),r.__v=n.__v,r.__.__k[r.__i]=r,kr(s,r,u),n.__e=n.__=null,r.__e!=i&&br(r)));tt.__r=0}function wr(e,t,r,n,i,s,u,c,p,l,f){var a,y,h,S,E,C,$,b=n&&n.__k||_r,k=t.length;for(p=oo(r,t,b,p,k),a=0;a<k;a++)(h=r.__k[a])!=null&&(y=h.__i==-1?Be:b[h.__i]||Be,h.__i=a,C=Et(e,h,y,i,s,u,c,p,l,f),S=h.__e,h.ref&&y.ref!=h.ref&&(y.ref&&zt(y.ref,null,h),f.push(h.ref,h.__c||S,h)),E==null&&S!=null&&(E=S),($=!!(4&h.__u))||y.__k===h.__k?p=xr(h,p,e,$):typeof h.type=="function"&&C!==void 0?p=C:S&&(p=S.nextSibling),h.__u&=-7);return r.__e=E,p}function oo(e,t,r,n,i){var s,u,c,p,l,f=r.length,a=f,y=0;for(e.__k=new Array(i),s=0;s<i;s++)(u=t[s])!=null&&typeof u!="boolean"&&typeof u!="function"?(typeof u=="string"||typeof u=="number"||typeof u=="bigint"||u.constructor==String?u=e.__k[s]=Ze(null,u,null,null,null):at(u)?u=e.__k[s]=Ze(ye,{children:u},null,null,null):u.constructor===void 0&&u.__b>0?u=e.__k[s]=Ze(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):e.__k[s]=u,p=s+y,u.__=e,u.__b=e.__b+1,c=null,(l=u.__i=no(u,r,p,a))!=-1&&(a--,(c=r[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(i>f?y--:i<f&&y++),typeof u.type!="function"&&(u.__u|=4)):l!=p&&(l==p-1?y--:l==p+1?y++:(l>p?y--:y++,u.__u|=4))):e.__k[s]=null;if(a)for(s=0;s<f;s++)(c=r[s])!=null&&!(2&c.__u)&&(c.__e==n&&(n=$e(c)),Pr(c,c));return n}function xr(e,t,r,n){var i,s;if(typeof e.type=="function"){for(i=e.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=e,t=xr(i[s],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=$e(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function no(e,t,r,n){var i,s,u,c=e.key,p=e.type,l=t[r],f=l!=null&&(2&l.__u)==0;if(l===null&&c==null||f&&c==l.key&&p==l.type)return r;if(n>(f?1:0)){for(i=r-1,s=r+1;i>=0||s<t.length;)if((l=t[u=i>=0?i--:s++])!=null&&!(2&l.__u)&&c==l.key&&p==l.type)return u}return-1}function Jt(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||to.test(t)?r:r+"px"}function Je(e,t,r,n,i){var s,u;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Jt(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||Jt(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(vr,"$1")),u=t.toLowerCase(),t=u in e||t=="onFocusOut"||t=="onFocusIn"?u.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=r,r?n?r.u=n.u:(r.u=$t,e.addEventListener(t,s?xt:wt,s)):e.removeEventListener(t,s?xt:wt,s);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Gt(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=$t++;else if(t.t<r.u)return;return r(A.event?A.event(t):t)}}}function Et(e,t,r,n,i,s,u,c,p,l){var f,a,y,h,S,E,C,$,b,k,N,w,m,z,B,Q,q,F=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(p=!!(32&r.__u),s=[c=t.__e=r.__e]),(f=A.__b)&&f(t);e:if(typeof F=="function")try{if($=t.props,b="prototype"in F&&F.prototype.render,k=(f=F.contextType)&&n[f.__c],N=f?k?k.props.value:f.__:n,r.__c?C=(a=t.__c=r.__c).__=a.__E:(b?t.__c=a=new F($,N):(t.__c=a=new Ie($,N),a.constructor=F,a.render=io),k&&k.sub(a),a.state||(a.state={}),a.__n=n,y=a.__d=!0,a.__h=[],a._sb=[]),b&&a.__s==null&&(a.__s=a.state),b&&F.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=fe({},a.__s)),fe(a.__s,F.getDerivedStateFromProps($,a.__s))),h=a.props,S=a.state,a.__v=t,y)b&&F.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),b&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(b&&F.getDerivedStateFromProps==null&&$!==h&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps($,N),t.__v==r.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate($,a.__s,N)===!1){for(t.__v!=r.__v&&(a.props=$,a.state=a.__s,a.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(_){_&&(_.__=t)}),w=0;w<a._sb.length;w++)a.__h.push(a._sb[w]);a._sb=[],a.__h.length&&u.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate($,a.__s,N),b&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(h,S,E)})}if(a.context=N,a.props=$,a.__P=e,a.__e=!1,m=A.__r,z=0,b){for(a.state=a.__s,a.__d=!1,m&&m(t),f=a.render(a.props,a.state,a.context),B=0;B<a._sb.length;B++)a.__h.push(a._sb[B]);a._sb=[]}else do a.__d=!1,m&&m(t),f=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++z<25);a.state=a.__s,a.getChildContext!=null&&(n=fe(fe({},n),a.getChildContext())),b&&!y&&a.getSnapshotBeforeUpdate!=null&&(E=a.getSnapshotBeforeUpdate(h,S)),Q=f,f!=null&&f.type===ye&&f.key==null&&(Q=Sr(f.props.children)),c=wr(e,at(Q)?Q:[Q],t,r,n,i,s,u,c,p,l),a.base=t.__e,t.__u&=-161,a.__h.length&&u.push(a),C&&(a.__E=a.__=null)}catch(_){if(t.__v=null,p||s!=null)if(_.then){for(t.__u|=p?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;s[s.indexOf(c)]=null,t.__e=c}else{for(q=s.length;q--;)Ct(s[q]);kt(t)}else t.__e=r.__e,t.__k=r.__k,_.then||kt(t);A.__e(_,t,r)}else s==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):c=t.__e=so(r.__e,t,r,n,i,s,u,p,l);return(f=A.diffed)&&f(t),128&t.__u?void 0:c}function kt(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(kt)}function kr(e,t,r){for(var n=0;n<r.length;n++)zt(r[n],r[++n],r[++n]);A.__c&&A.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(s){s.call(i)})}catch(s){A.__e(s,i.__v)}})}function Sr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:at(e)?e.map(Sr):fe({},e)}function so(e,t,r,n,i,s,u,c,p){var l,f,a,y,h,S,E,C=r.props||Be,$=t.props,b=t.type;if(b=="svg"?i="http://www.w3.org/2000/svg":b=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),s!=null){for(l=0;l<s.length;l++)if((h=s[l])&&"setAttribute"in h==!!b&&(b?h.localName==b:h.nodeType==3)){e=h,s[l]=null;break}}if(e==null){if(b==null)return document.createTextNode($);e=document.createElementNS(i,b,$.is&&$),c&&(A.__m&&A.__m(t,s),c=!1),s=null}if(b==null)C===$||c&&e.data==$||(e.data=$);else{if(s=s&&it.call(e.childNodes),!c&&s!=null)for(C={},l=0;l<e.attributes.length;l++)C[(h=e.attributes[l]).name]=h.value;for(l in C)if(h=C[l],l!="children"){if(l=="dangerouslySetInnerHTML")a=h;else if(!(l in $)){if(l=="value"&&"defaultValue"in $||l=="checked"&&"defaultChecked"in $)continue;Je(e,l,null,h,i)}}for(l in $)h=$[l],l=="children"?y=h:l=="dangerouslySetInnerHTML"?f=h:l=="value"?S=h:l=="checked"?E=h:c&&typeof h!="function"||C[l]===h||Je(e,l,h,C[l],i);if(f)c||a&&(f.__html==a.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(a&&(e.innerHTML=""),wr(t.type=="template"?e.content:e,at(y)?y:[y],t,r,n,b=="foreignObject"?"http://www.w3.org/1999/xhtml":i,s,u,s?s[0]:r.__k&&$e(r,0),c,p),s!=null)for(l=s.length;l--;)Ct(s[l]);c||(l="value",b=="progress"&&S==null?e.removeAttribute("value"):S!=null&&(S!==e[l]||b=="progress"&&!S||b=="option"&&S!=C[l])&&Je(e,l,S,C[l],i),l="checked",E!=null&&E!=e[l]&&Je(e,l,E,C[l],i))}return e}function zt(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(i){A.__e(i,r)}}function Pr(e,t,r){var n,i;if(A.unmount&&A.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||zt(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){A.__e(s,t)}n.base=n.__P=null}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&Pr(n[i],t,r||typeof e.type!="function");r||Ct(e.__e),e.__c=e.__=e.__e=void 0}function io(e,t,r){return this.constructor(e,r)}function ao(e,t,r){var n,i,s,u;t==document&&(t=document.documentElement),A.__&&A.__(e,t),i=(n=!1)?null:t.__k,s=[],u=[],Et(t,e=t.__k=ro(ye,null,[e]),i||Be,Be,t.namespaceURI,i?null:t.firstChild?it.call(t.childNodes):null,s,i?i.__e:t.firstChild,n,u),kr(s,e,u)}it=_r.slice,A={__e:function(e,t,r,n){for(var i,s,u;t=t.__;)if((i=t.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(e)),u=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,n||{}),u=i.__d),u)return i.__E=i}catch(c){e=c}throw e}},hr=0,gr=function(e){return e!=null&&e.constructor===void 0},Ie.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=fe({},this.state),typeof e=="function"&&(e=e(fe({},r),this.props)),e&&fe(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),qt(this))},Ie.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),qt(this))},Ie.prototype.render=ye,_e=[],yr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,mr=function(e,t){return e.__v.__b-t.__v.__b},tt.__r=0,vr=/(PointerCapture)$|Capture$/i,$t=0,wt=Gt(!1),xt=Gt(!0);var De,D,yt,Kt,je=0,$r=[],j=A,Zt=j.__b,Qt=j.__r,er=j.diffed,tr=j.__c,rr=j.unmount,or=j.__;function Lt(e,t){j.__h&&j.__h(D,e,je||t),je=0;var r=D.__H||(D.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function O(e){return je=1,lo(Er,e)}function lo(e,t,r){var n=Lt(De++,2);if(n.t=e,!n.__c&&(n.__=[Er(void 0,t),function(c){var p=n.__N?n.__N[0]:n.__[0],l=n.t(p,c);p!==l&&(n.__N=[l,n.__[1]],n.__c.setState({}))}],n.__c=D,!D.__f)){var i=function(c,p,l){if(!n.__c.__H)return!0;var f=n.__c.__H.__.filter(function(y){return!!y.__c});if(f.every(function(y){return!y.__N}))return!s||s.call(this,c,p,l);var a=n.__c.props!==c;return f.forEach(function(y){if(y.__N){var h=y.__[0];y.__=y.__N,y.__N=void 0,h!==y.__[0]&&(a=!0)}}),s&&s.call(this,c,p,l)||a};D.__f=!0;var s=D.shouldComponentUpdate,u=D.componentWillUpdate;D.componentWillUpdate=function(c,p,l){if(this.__e){var f=s;s=void 0,i(c,p,l),s=f}u&&u.call(this,c,p,l)},D.shouldComponentUpdate=i}return n.__N||n.__}function I(e,t){var r=Lt(De++,3);!j.__s&&Cr(r.__H,t)&&(r.__=e,r.u=t,D.__H.__h.push(r))}function H(e){return je=5,lt(function(){return{current:e}},[])}function lt(e,t){var r=Lt(De++,7);return Cr(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function Y(e,t){return je=8,lt(function(){return e},t)}function co(){for(var e;e=$r.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Qe),e.__H.__h.forEach(St),e.__H.__h=[]}catch(t){e.__H.__h=[],j.__e(t,e.__v)}}j.__b=function(e){D=null,Zt&&Zt(e)},j.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),or&&or(e,t)},j.__r=function(e){Qt&&Qt(e),De=0;var t=(D=e.__c).__H;t&&(yt===D?(t.__h=[],D.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Qe),t.__h.forEach(St),t.__h=[],De=0)),yt=D},j.diffed=function(e){er&&er(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&($r.push(t)!==1&&Kt===j.requestAnimationFrame||((Kt=j.requestAnimationFrame)||uo)(co)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),yt=D=null},j.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Qe),r.__h=r.__h.filter(function(n){return!n.__||St(n)})}catch(n){t.some(function(i){i.__h&&(i.__h=[])}),t=[],j.__e(n,r.__v)}}),tr&&tr(e,t)},j.unmount=function(e){rr&&rr(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Qe(n)}catch(i){t=i}}),r.__H=void 0,t&&j.__e(t,r.__v))};var nr=typeof requestAnimationFrame=="function";function uo(e){var t,r=function(){clearTimeout(n),nr&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);nr&&(t=requestAnimationFrame(r))}function Qe(e){var t=D,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),D=t}function St(e){var t=D;e.__c=e.__(),D=t}function Cr(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function Er(e,t){return typeof t=="function"?t(e):t}var po=Symbol.for("preact-signals");function Tt(){if(Pe>1)Pe--;else{for(var e,t=!1;Oe!==void 0;){var r=Oe;for(Oe=void 0,Pt++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&Tr(r))try{r.c()}catch(i){t||(e=i,t=!0)}r=n}}if(Pt=0,Pe--,t)throw e}}var R=void 0;function zr(e){var t=R;R=void 0;try{return e()}finally{R=t}}var Oe=void 0,Pe=0,Pt=0,rt=0;function Lr(e){if(R!==void 0){var t=e.n;if(t===void 0||t.t!==R)return t={i:0,S:e,p:R.s,n:void 0,t:R,e:void 0,x:void 0,r:t},R.s!==void 0&&(R.s.n=t),R.s=t,e.n=t,32&R.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=R.s,t.n=void 0,R.s.n=t,R.s=t),t}}function X(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}X.prototype.brand=po;X.prototype.h=function(){return!0};X.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:zr(function(){var n;(n=t.W)==null||n.call(t)}))};X.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&zr(function(){var i;(i=t.Z)==null||i.call(t)}))}};X.prototype.subscribe=function(e){var t=this;return At(function(){var r=t.value,n=R;R=void 0;try{e(r)}finally{R=n}},{name:"sub"})};X.prototype.valueOf=function(){return this.value};X.prototype.toString=function(){return this.value+""};X.prototype.toJSON=function(){return this.value};X.prototype.peek=function(){var e=R;R=void 0;try{return this.value}finally{R=e}};Object.defineProperty(X.prototype,"value",{get:function(){var e=Lr(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Pt>100)throw new Error("Cycle detected");this.v=e,this.i++,rt++,Pe++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Tt()}}}});function se(e,t){return new X(e,t)}function Tr(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Rr(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Ar(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function be(e,t){X.call(this,void 0),this.x=e,this.s=void 0,this.g=rt-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}be.prototype=new X;be.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===rt))return!0;if(this.g=rt,this.f|=1,this.i>0&&!Tr(this))return this.f&=-2,!0;var e=R;try{Rr(this),R=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return R=e,Ar(this),this.f&=-2,!0};be.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}X.prototype.S.call(this,e)};be.prototype.U=function(e){if(this.t!==void 0&&(X.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};be.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(be.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Lr(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function fo(e,t){return new be(e,t)}function Mr(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Pe++;var r=R;R=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,Rt(e),n}finally{R=r,Tt()}}}function Rt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Mr(e)}function ho(e){if(R!==this)throw new Error("Out-of-order effect");Ar(this),R=e,this.f&=-2,8&this.f&&Rt(this),Tt()}function Ee(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}Ee.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Ee.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Mr(this),Rr(this),Pe++;var e=R;return R=this,ho.bind(this,e)};Ee.prototype.N=function(){2&this.f||(this.f|=2,this.o=Oe,Oe=this)};Ee.prototype.d=function(){this.f|=8,1&this.f||Rt(this)};Ee.prototype.dispose=function(){this.d()};function At(e,t){var r=new Ee(e,t);try{r.c()}catch(i){throw r.d(),i}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var Ge;function ze(e,t){A[e]=t.bind(null,A[e]||function(){})}function ot(e){if(Ge){var t=Ge;Ge=void 0,t()}Ge=e&&e.S()}function Ir(e){var t=this,r=e.data,n=oe(r);n.value=r;var i=lt(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var u,c=t.__$u.S(),p=i.value;c(),gr(p)||((u=t.base)==null?void 0:u.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=p},fo(function(){var u=n.value.value;return u===0?0:u===!0?"":u||""})},[]);return i.value}Ir.displayName="_st";Object.defineProperties(X.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Ir},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});ze("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var i in n)if(i!=="children"){var s=n[i];s instanceof X&&(r||(t.__np=r={}),r[i]=s,n[i]=s.peek())}}e(t)});ze("__r",function(e,t){e(t),ot();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(i){var s;return At(function(){s=this}),s.c=function(){n.__$f|=1,n.setState({})},s}())),ot(r)});ze("__e",function(e,t,r,n){ot(),e(t,r,n)});ze("diffed",function(e,t){ot();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,i=t.props;if(n){var s=r.U;if(s)for(var u in s){var c=s[u];c!==void 0&&!(u in n)&&(c.d(),s[u]=void 0)}else r.U=s={};for(var p in n){var l=s[p],f=n[p];l===void 0?(l=go(r,p,f,i),s[p]=l):l.o(f,i)}}}e(t)});function go(e,t,r,n){var i=t in e&&e.ownerSVGElement===void 0,s=se(r);return{o:function(u,c){s.value=u,n=c},d:At(function(){var u=s.value.value;n[t]!==u&&(n[t]=u,i?e[t]=u:u?e.setAttribute(t,u):e.removeAttribute(t))})}}ze("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var i in n){var s=n[i];s&&s.d()}}}}else{var u=t.__c;if(u){var c=u.__$u;c&&(u.__$u=void 0,c.d())}}e(t)});ze("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});Ie.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var i in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var s in e)if(s!=="__source"&&e[s]!==this.props[s])return!0;for(var u in this.props)if(!(u in e))return!0;return!1};function oe(e){return lt(function(){return se(e)},[])}const yo="modulepreload",mo=function(e,t){return new URL(e,t).href},sr={},ir=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){const u=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),p=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=Promise.allSettled(r.map(l=>{if(l=mo(l,n),l in sr)return;sr[l]=!0;const f=l.endsWith(".css"),a=f?'[rel="stylesheet"]':"";if(!!n)for(let S=u.length-1;S>=0;S--){const E=u[S];if(E.href===l&&(!f||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${a}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":yo,f||(h.as="script"),h.crossOrigin="",h.href=l,p&&h.setAttribute("nonce",p),document.head.appendChild(h),f)return new Promise((S,E)=>{h.addEventListener("load",S),h.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(u){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u}return i.then(u=>{for(const c of u||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};var vo=0;function o(e,t,r,n,i,s){t||(t={});var u,c,p=t;if("ref"in p)for(c in p={},t)c=="ref"?u=t[c]:p[c]=t[c];var l={type:e,props:p,key:r,ref:u,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--vo,__i:-1,__u:0,__source:i,__self:s};if(typeof e=="function"&&(u=e.defaultProps))for(c in u)p[c]===void 0&&(p[c]=u[c]);return A.vnode&&A.vnode(l),l}function _o({prev:e,next:t}){return!e&&!t?null:o("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[o("div",{class:"pressy-nav-inner",children:[e?o("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[o("span",{class:"pressy-nav-direction",children:"Previous"}),o("span",{class:"pressy-nav-title",children:e.title})]}):o("div",{class:"pressy-nav-placeholder"}),t?o("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[o("span",{class:"pressy-nav-direction",children:"Next"}),o("span",{class:"pressy-nav-title",children:t.title})]}):o("div",{class:"pressy-nav-placeholder"})]}),o("style",{children:`
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
      `})]})}function Or(){const e=oe(!1),t=oe({x:0,y:0}),r=oe(""),n=H(null);I(()=>{const c=()=>{const p=window.getSelection();if(!p||p.isCollapsed){e.value=!1;return}const l=p.toString().trim();if(l.length<5){e.value=!1;return}r.value=l;const a=p.getRangeAt(0).getBoundingClientRect();t.value={x:a.left+a.width/2,y:a.top-10},e.value=!0};return document.addEventListener("selectionchange",c),document.addEventListener("mouseup",c),()=>{document.removeEventListener("selectionchange",c),document.removeEventListener("mouseup",c)}},[]);const i=()=>{const c=encodeURIComponent(r.value),p=new URL(window.location.href);return p.hash=`:~:text=${c}`,p.toString()},s=async()=>{const c=i(),p=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:p,url:c}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${p}

${c}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var l;(l=n.current)==null||l.classList.remove("copied")},2e3))}catch(l){console.error("Failed to copy to clipboard:",l)}},u=async()=>{const c=i();try{await navigator.clipboard.writeText(c),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var p;(p=n.current)==null||p.classList.remove("copied")},2e3))}catch(p){console.error("Failed to copy link:",p)}};return e.value?o("div",{ref:n,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[o("button",{class:"pressy-share-btn",onClick:s,"aria-label":"Share selected text",title:"Share quote",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),o("button",{class:"pressy-copy-link-btn",onClick:u,"aria-label":"Copy link to selected text",title:"Copy link",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),o("style",{children:`
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
      `})]}):null}function Hr(){const e=oe(!navigator.onLine),t=oe(!1);return I(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?o("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?o(ye,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),o("span",{children:"You're offline"})]}):o(ye,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),o("span",{children:"Back online"})]}),o("style",{children:`
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
`;function Br({offlineProps:e}){if(!e)return null;const{bookSlug:t,chapterUrls:r,cachedBooks:n,onDownload:i,onRemove:s}=e;return n.value.has(t)?o("button",{class:"pressy-offline-icon pressy-offline-icon--cached",onClick:c=>{c.stopPropagation(),s(t)},"aria-label":"Available offline. Click to remove.",title:"Available offline. Click to remove.",children:[o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]}),o("svg",{class:"pressy-offline-check",viewBox:"0 0 24 24",fill:"currentColor",width:"10",height:"10",children:o("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})})]}):o("button",{class:"pressy-offline-icon",onClick:c=>{c.stopPropagation(),i(t,r)},"aria-label":"Download for offline reading",title:"Download for offline reading",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]})})}function wo({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:s,onRestoreProgress:u,allChapters:c,bookBasePath:p,currentChapterSlug:l,offlineProps:f}){const a=H(null),[y,h]=O(!1),S=H(null),[E,C]=O(!1),[$,b]=O(!1),k=Y(()=>{h(!0),S.current&&clearTimeout(S.current),S.current=setTimeout(()=>h(!1),3e3)},[]),[N,w]=O(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[m,z]=O(()=>{if(typeof localStorage<"u"){const _=localStorage.getItem("pressy-font-size");return _?parseFloat(_):1}return 1}),B=Y(_=>{_===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${_})`)},[]);I(()=>{m!==1&&B(m)},[]);const Q=Y(_=>{w(_),localStorage.setItem("pressy-theme",_);const W=_==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":_;document.documentElement.setAttribute("data-theme",W)},[]),q=Y(_=>{z(W=>{const Le=Math.round(Math.max(.8,Math.min(1.5,W+_))*10)/10;return localStorage.setItem("pressy-font-size",String(Le)),B(Le),Le})},[B]),F=Y(_=>{const W=_.target;if(!W.closest(".pressy-page-footer, .pressy-toc-backdrop, .pressy-toc-toggle")&&!W.closest('a, button, input, select, textarea, [role="button"]')){if(E||$){C(!1),b(!1);return}y?(h(!1),S.current&&clearTimeout(S.current)):k()}},[y,E,$,k]);return I(()=>{u&&u().then(_=>{_&&_.scrollPosition>0&&window.scrollTo(0,_.scrollPosition)})},[]),I(()=>{if(!s)return;const _=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{s({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",_,{passive:!0}),()=>{window.removeEventListener("scroll",_),a.current&&clearTimeout(a.current)}},[s]),I(()=>{if(!s)return;const _=()=>{s({page:0,totalPages:0,scrollPosition:window.scrollY})},W=()=>{document.visibilityState==="hidden"&&_()};return window.addEventListener("beforeunload",_),document.addEventListener("visibilitychange",W),()=>{window.removeEventListener("beforeunload",_),document.removeEventListener("visibilitychange",W)}},[s]),o("div",{class:"pressy-reader",onClick:F,children:[o("main",{class:"pressy-reader-main",children:o("article",{class:`pressy-prose ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:e})}),o(Or,{}),o(_o,{prev:r,next:n}),o(Hr,{}),$&&c&&o("div",{class:"pressy-toc-backdrop pressy-toc-backdrop--scroll",onClick:_=>{_.stopPropagation(),b(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:_=>_.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:_=>{_.stopPropagation(),b(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:[o("a",{href:p&&p.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>b(!1),children:[o("span",{class:"pressy-toc-item-num",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:o("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),o("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),c.map((_,W)=>o("a",{href:`${p||""}/${_.slug}`,class:`pressy-toc-item ${_.slug===l?"pressy-toc-item--active":""}`,onClick:()=>b(!1),children:[o("span",{class:"pressy-toc-item-num",children:[W+1,"."]}),o("span",{class:"pressy-toc-item-title",children:_.title})]},_.slug))]})]})}),o("div",{class:`pressy-page-footer pressy-page-footer--scroll ${y||E||$?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-footer-row",children:[c&&c.length>0&&o("button",{class:"pressy-toc-toggle",onClick:_=>{_.stopPropagation(),C(!1),b(!$)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:_=>{_.stopPropagation(),c&&c.length>0&&(C(!1),b(!$))},children:t}),o(Br,{offlineProps:f}),o("button",{class:"pressy-settings-toggle",onClick:_=>{_.stopPropagation(),b(!1),C(!E)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${E?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(_=>o("button",{class:`pressy-theme-btn ${N===_.id?"pressy-theme-btn--active":""}`,onClick:W=>{W.stopPropagation(),Q(_.id)},children:[_.icon,o("span",{children:_.label})]},_.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:_=>{_.stopPropagation(),q(-.1)},disabled:m<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(m*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:_=>{_.stopPropagation(),q(.1)},disabled:m>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]})]}),o("style",{children:bo})]})}var xo=`
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
`;function ko({title:e}){return o("div",{class:"pressy-chapter-divider",children:o("h2",{class:"pressy-chapter-divider-title",children:e})})}function So({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:s,onRestoreProgress:u,bookProgressPercent:c,initialContent:p,chapterMapData:l,currentChapterSlug:f,allChapters:a,bookBasePath:y,onChapterChange:h,mdxComponents:S,offlineProps:E}){const C=H(null),$=H(null),b=H(null),[k,N]=O(0),[w,m]=O(1),z=H(1);z.current=w;const[B,Q]=O(!1),q=H(!1),F=H(null),_=H(!1),W=H(typeof window<"u"&&new URLSearchParams(window.location.search).get("page")==="last"),[Le,Te]=O(W.current||!!u),[ee,Ot]=O([]),[J,Vr]=O([]),[te,Ht]=O(f||""),ct=H(new Set),G=!!(l&&p&&f&&a);I(()=>{if(G&&p&&f){const d=a.find(g=>g.slug===f);Ot([{slug:f,title:(d==null?void 0:d.title)||f,Content:p}]),Ht(f)}},[]),I(()=>{if(W.current){const d=new URL(window.location.href);d.searchParams.delete("page"),history.replaceState(null,"",d.pathname)}},[]);const[ie,We]=O(!1),[ne,he]=O(!1),[Yr,Xr]=O(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[Re,qr]=O(()=>{if(typeof localStorage<"u"){const d=localStorage.getItem("pressy-font-size");return d?parseFloat(d):1}return 1}),ut=Y(d=>{d===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${d})`)},[]);I(()=>{Re!==1&&ut(Re)},[]),I(()=>{var v;const d=C.current;if(!d)return;const g=()=>{d.style.setProperty("--app-height",`${window.innerHeight}px`)};return g(),window.addEventListener("resize",g),(v=window.visualViewport)==null||v.addEventListener("resize",g),()=>{var x;window.removeEventListener("resize",g),(x=window.visualViewport)==null||x.removeEventListener("resize",g)}},[]);const Jr=Y(d=>{Xr(d),localStorage.setItem("pressy-theme",d);const g=d==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":d;document.documentElement.setAttribute("data-theme",g)},[]),[Bt,we]=O(!1),[Dt,xe]=O(0),[jt,ae]=O(null),dt=H(0),Nt=H(0),pt=H(0),ft=H(0),Fe=H(0),Ue=H(!1),Ae=H(!1),Wt=Y(()=>{if(!G)return;const d=b.current,g=$.current;if(!d||!g)return;const v=g.clientWidth;if(v===0)return;const x=d.querySelectorAll(".pressy-chapter-section"),P=[];x.forEach(L=>{const T=L.getAttribute("data-chapter-slug")||"",M=L.offsetLeft,U=L.scrollWidth,V=Math.floor(M/v),de=Math.max(V,Math.ceil((M+U)/v)-1);P.push({slug:T,startPage:V,endPage:de})}),Vr(P)},[G]),le=Y(()=>{const d=b.current,g=$.current;if(!d||!g)return;const v=g.clientWidth;if(v===0)return;d.style.columnWidth=`${v}px`,d.scrollWidth;const x=Math.max(1,Math.round(d.scrollWidth/v));m(x),Q(!0),N(P=>Math.min(P,x-1)),Wt()},[Wt]),Ft=Y(d=>{qr(g=>{const v=Math.round(Math.max(.8,Math.min(1.5,g+d))*10)/10;return localStorage.setItem("pressy-font-size",String(v)),ut(v),setTimeout(()=>le(),100),v})},[ut,le]);I(()=>{const d=$.current;if(!d)return;const g=setTimeout(le,50),v=new ResizeObserver(()=>{le()});return v.observe(d),()=>{clearTimeout(g),v.disconnect()}},[le]),I(()=>{if(ee.length>0){const d=setTimeout(le,50);return()=>clearTimeout(d)}},[ee.length,le]),I(()=>{const d=b.current;if(!d)return;const g=d.querySelectorAll("img");if(g.length===0)return;const v=()=>le();return g.forEach(x=>{x.complete||(x.addEventListener("load",v),x.addEventListener("error",v))}),()=>{g.forEach(x=>{x.removeEventListener("load",v),x.removeEventListener("error",v)})}},[le,ee.length]),I(()=>{if(!(q.current||!B)){if(W.current){W.current=!1,_.current=!0,N(w-1),q.current=!0,Te(!1);return}if(!u){q.current=!0,Te(!1);return}u().then(d=>{if(q.current){Te(!1);return}const g=z.current;if(!d||d.page<=0){q.current=!0,Te(!1);return}let v;if(d.totalPages<=1||Math.abs(d.totalPages-g)<=2)v=d.page;else{const P=d.page/(d.totalPages-1);v=Math.round(P*(g-1))}const x=Math.max(0,Math.min(v,g-1));_.current=!0,N(x),q.current=!0,Te(!1)})}},[B,w,u]),I(()=>{const d=b.current,g=$.current;if(!d||!g)return;const x=k*g.clientWidth-Dt;Bt||_.current?(d.style.transition="none",_.current=!1):d.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",d.style.transform=`translateX(-${x}px)`},[k,Dt,Bt]),I(()=>{const d=b.current,g=$.current;if(!d||!g)return;const v=g.getBoundingClientRect();d.querySelectorAll("a[href], button, input, select, textarea, [tabindex]").forEach(P=>{const L=P.getBoundingClientRect();if(L.left>=v.left-1&&L.right<=v.right+1){const M=P.getAttribute("data-original-tabindex");M!==null&&(M===""?P.removeAttribute("tabindex"):P.setAttribute("tabindex",M),P.removeAttribute("data-original-tabindex"))}else P.hasAttribute("data-original-tabindex")||P.setAttribute("data-original-tabindex",P.getAttribute("tabindex")||""),P.setAttribute("tabindex","-1")})},[k,w]),I(()=>{var U;if(!G||!l||J.length===0)return;const d=J.find(V=>V.slug===te);if(!d||d.endPage-k>2)return;const{chapterOrder:v,chapterMap:x}=l,P=(U=ee[ee.length-1])==null?void 0:U.slug,L=v.indexOf(P);if(L===-1||L>=v.length-1)return;const T=v[L+1];if(ct.current.has(T)||ee.some(V=>V.slug===T))return;ct.current.add(T);const M=x[T];M&&M().then(V=>{const de=V.default,ge=a.find(pe=>pe.slug===T);Ot(pe=>pe.some(qe=>qe.slug===T)?pe:[...pe,{slug:T,title:(ge==null?void 0:ge.title)||T,Content:de}])}).catch(()=>{ct.current.delete(T)})},[k,te,J,G,l,ee,a]),I(()=>{if(!G||J.length===0||!y)return;const d=J.find(P=>k>=P.startPage&&k<=P.endPage);if(!d||d.slug===te)return;const g=te;Ht(d.slug);const v=`${y}/${d.slug}`;history.replaceState(null,"",v);const x=a==null?void 0:a.find(P=>P.slug===d.slug);if(x&&(document.title=document.title.replace(/^[^|]+/,x.title+" ")),h&&g){const P=J.find(L=>L.slug===g);if(P){const L=P.endPage-P.startPage+1;h(g,L-1,L)}}},[k,J,te,G,y,a,h]),I(()=>{if(!(!s||!q.current))return F.current&&clearTimeout(F.current),F.current=setTimeout(()=>{if(G&&J.length>0){const d=J.find(g=>g.slug===te);if(d){const g=k-d.startPage,v=d.endPage-d.startPage+1;s({page:g,totalPages:v,scrollPosition:0,activeChapterSlug:te})}}else s({page:k,totalPages:w,scrollPosition:0})},300),()=>{F.current&&clearTimeout(F.current)}},[k,w,s,G,J,te]),I(()=>{if(!s)return;const d=()=>{if(G&&J.length>0){const v=J.find(x=>x.slug===te);if(v){const x=k-v.startPage,P=v.endPage-v.startPage+1;s({page:x,totalPages:P,scrollPosition:0,activeChapterSlug:te})}}else s({page:k,totalPages:w,scrollPosition:0})},g=()=>{document.visibilityState==="hidden"&&d()};return window.addEventListener("beforeunload",d),document.addEventListener("visibilitychange",g),()=>{window.removeEventListener("beforeunload",d),document.removeEventListener("visibilitychange",g)}},[k,w,s,G,J,te]);const ce=(()=>{var x;if(!G||!l)return n;const{chapterOrder:d}=l,g=(x=ee[ee.length-1])==null?void 0:x.slug;if(!(d.indexOf(g)<d.length-1))return y?{slug:y,title:"Table of Contents"}:n})(),ue=(()=>{var L;if(!G||!l)return r;const{chapterOrder:d}=l,g=(L=ee[0])==null?void 0:L.slug,v=d.indexOf(g);if(v<=0)return r;const x=d[v-1],P=a==null?void 0:a.find(T=>T.slug===x);return{slug:`${y}/${x}?page=last`,title:(P==null?void 0:P.title)||x}})(),me=Y(d=>{W.current=!1;const g=Math.max(0,Math.min(d,w-1));N(g)},[w]),ke=Y(()=>{if(k>=w-1){ce&&(sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ce.slug);return}me(k+1)},[k,w,ce,me]),Se=Y(()=>{if(k<=0){ue&&(sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ue.slug);return}me(k-1)},[k,ue,me]),[Ve,ve]=O(!1),K=H(null),ht=Y(()=>{ve(!0),K.current&&clearTimeout(K.current),K.current=setTimeout(()=>ve(!1),3e3)},[]),Ut=H(0),Me=H(null),Vt=Y(()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})},[]),Ye=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,Gr=Y(d=>{const g=d.target;if(g.closest(".pressy-settings-panel, .pressy-settings-toggle, .pressy-toc-drawer, .pressy-toc-toggle")||g.closest('a, button, input, select, textarea, [role="button"]'))return;if(ie||ne){We(!1),he(!1);return}if(Ye){Ve?(ve(!1),K.current&&clearTimeout(K.current)):ht();return}const v=C.current;if(!v)return;const x=v.getBoundingClientRect(),P=d.clientX-x.left,L=x.width*.15;if(P<L)Se();else if(P>x.width-L)ke();else{const T=Date.now(),M=T-Ut.current;Ut.current=T,M<300?(Me.current&&clearTimeout(Me.current),Vt()):(Me.current&&clearTimeout(Me.current),Me.current=setTimeout(()=>{Ve?(ve(!1),K.current&&clearTimeout(K.current)):ht()},300))}},[ke,Se,Ve,Ye,ie,ne,ht,Vt]),[Yt,Xe]=O(null),Kr=Y(d=>{if(Ye)return;const g=C.current;if(!g)return;const v=g.getBoundingClientRect(),x=d.clientX-v.left,P=d.clientY-v.top,L=v.width/3;x<L?Xe("left"):x>L*2?Xe("right"):Xe(null),P>v.height*.75?(ve(!0),K.current&&clearTimeout(K.current)):!ie&&!ne&&(K.current&&clearTimeout(K.current),K.current=setTimeout(()=>ve(!1),600))},[Ye,ie,ne]),Zr=Y(()=>{Xe(null),!ie&&!ne&&(K.current&&clearTimeout(K.current),K.current=setTimeout(()=>ve(!1),600))},[ie,ne]);I(()=>{const d=g=>{const v=g.target.tagName;v==="INPUT"||v==="TEXTAREA"||v==="SELECT"||(g.key==="ArrowRight"||g.key===" "?(g.preventDefault(),ke()):g.key==="ArrowLeft"?(g.preventDefault(),Se()):g.key==="Home"?(g.preventDefault(),me(0)):g.key==="End"&&(g.preventDefault(),me(w-1)))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[ke,Se,me,w]),I(()=>{const d=C.current;if(!d)return;const g=L=>{const T=L.touches[0];dt.current=T.clientX,Nt.current=T.clientY,pt.current=T.clientX,ft.current=performance.now(),Fe.current=0,Ue.current=!1,Ae.current=!1},v=L=>{const T=L.touches[0],M=T.clientX-dt.current,U=T.clientY-Nt.current;if(!Ue.current)if(Math.abs(M)>Math.abs(U)&&Math.abs(M)>10)Ue.current=!0;else return Math.abs(U)>Math.abs(M)&&Math.abs(U)>10,void 0;L.preventDefault();const V=performance.now(),de=V-ft.current;if(de>0){const gt=(T.clientX-pt.current)/de;Fe.current=.6*gt+.4*Fe.current}pt.current=T.clientX,ft.current=V;let ge=M;const pe=k===0,qe=k>=w-1;if(pe&&M>0||qe&&M<0){const gt=M>0?1:-1,eo=Math.abs(M);ge=gt*Math.sqrt(eo)*5,M>40&&pe&&ue?ae("prev"):M<-40&&qe&&ce?ae("next"):ae(null)}else ae(null);Ae.current=!0,we(!0),xe(ge)},x=L=>{if(!Ue.current||!Ae.current){we(!1),xe(0),ae(null);return}const T=L.changedTouches[0].clientX-dt.current,M=Fe.current,U=50,V=.3,de=80,ge=k===0;if(k>=w-1&&T<-de&&ce){we(!1),xe(0),ae(null),sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ce.slug;return}if(ge&&T>de&&ue){we(!1),xe(0),ae(null),sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ue.slug;return}T<-U||M<-V?ke():(T>U||M>V)&&Se(),Ae.current=!1,we(!1),xe(0),ae(null)},P=()=>{Ae.current=!1,we(!1),xe(0),ae(null)};return d.addEventListener("touchstart",g,{passive:!0}),d.addEventListener("touchmove",v,{passive:!1}),d.addEventListener("touchend",x,{passive:!0}),d.addEventListener("touchcancel",P,{passive:!0}),()=>{d.removeEventListener("touchstart",g),d.removeEventListener("touchmove",v),d.removeEventListener("touchend",x),d.removeEventListener("touchcancel",P)}},[k,w,ke,Se,ce,ue]),(()=>{if(!G||J.length===0)return{chapterPage:k,chapterTotalPages:w};const d=J.find(g=>g.slug===te);return d?{chapterPage:k-d.startPage,chapterTotalPages:d.endPage-d.startPage+1}:{chapterPage:k,chapterTotalPages:w}})();const Qr=(()=>{var M;if(!a||a.length===0)return w>1?k/(w-1)*100:100;const d=a.reduce((U,V)=>U+(V.wordCount||0),0);if(d===0)return 0;const g=((M=ee[0])==null?void 0:M.slug)||te;let v=0,x=0,P=!1;for(const U of a)if(U.slug===g&&(P=!0),!P)v+=U.wordCount||0;else if(ee.some(V=>V.slug===U.slug))x+=U.wordCount||0;else break;const L=w>1?k/(w-1):0,T=v+L*x;return Math.min(100,T/d*100)})();return o("div",{class:"pressy-reader pressy-reader--paginated",ref:C,onClick:Gr,onMouseMove:Kr,onMouseLeave:Zr,children:[o("div",{class:"pressy-paginated-viewport",ref:$,style:Le?{opacity:0}:{opacity:1,transition:"opacity 0.15s ease"},children:o("article",{ref:b,class:`pressy-prose pressy-prose--paginated ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:G&&ee.length>0?ee.map(d=>o("section",{class:"pressy-chapter-section","data-chapter-slug":d.slug,children:[o(ko,{title:d.title}),o(d.Content,{components:S||{}})]},d.slug)):e})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--prev ${Yt==="left"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"15 18 9 12 15 6"})})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--next ${Yt==="right"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"9 6 15 12 9 18"})})}),jt==="prev"&&ue&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-arrow",children:"←"}),o("span",{class:"pressy-chapter-hint-text",children:ue.title})]}),jt==="next"&&ce&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-text",children:ce.title}),o("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),ne&&a&&o("div",{class:"pressy-toc-backdrop",onClick:d=>{d.stopPropagation(),he(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:d=>d.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:d=>{d.stopPropagation(),he(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:[o("a",{href:y&&y.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>he(!1),children:[o("span",{class:"pressy-toc-item-num",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:o("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),o("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),a.map((d,g)=>o("a",{href:`${y||""}/${d.slug}`,class:`pressy-toc-item ${d.slug===(te||f)?"pressy-toc-item--active":""}`,onClick:()=>he(!1),children:[o("span",{class:"pressy-toc-item-num",children:[g+1,"."]}),o("span",{class:"pressy-toc-item-title",children:d.title})]},d.slug))]})]})}),o("div",{class:`pressy-page-footer ${Ve||ie||ne?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-progress-bar",children:o("div",{class:"pressy-progress-fill",style:{width:`${Qr}%`}})}),o("div",{class:"pressy-footer-row",children:[a&&a.length>0&&o("button",{class:"pressy-toc-toggle",onClick:d=>{d.stopPropagation(),We(!1),he(!ne)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:d=>{d.stopPropagation(),a&&a.length>0&&(We(!1),he(!ne))},children:t}),o(Br,{offlineProps:E}),o("button",{class:"pressy-settings-toggle",onClick:d=>{d.stopPropagation(),he(!1),We(!ie)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${ie?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(d=>o("button",{class:`pressy-theme-btn ${Yr===d.id?"pressy-theme-btn--active":""}`,onClick:g=>{g.stopPropagation(),Jr(d.id)},children:[d.icon,o("span",{children:d.label})]},d.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:d=>{d.stopPropagation(),Ft(-.1)},disabled:Re<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(Re*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:d=>{d.stopPropagation(),Ft(.1)},disabled:Re>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]})]}),o(Or,{}),o(Hr,{}),o("style",{children:xo})]})}function Mt({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i=!0,paginationMode:s="scroll",onSaveProgress:u,onRestoreProgress:c,bookProgressPercent:p,initialContent:l,chapterMapData:f,currentChapterSlug:a,allChapters:y,bookBasePath:h,onChapterChange:S,mdxComponents:E,offlineProps:C}){return s==="paginated"?o(So,{bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:u,onRestoreProgress:c,bookProgressPercent:p,initialContent:l,chapterMapData:f,currentChapterSlug:a,allChapters:y,bookBasePath:h,onChapterChange:S,mdxComponents:E,offlineProps:C,children:e}):o(wo,{bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:u,onRestoreProgress:c,allChapters:y,bookBasePath:h,currentChapterSlug:a,offlineProps:C,children:e})}function Po({bookSlug:e,bookTitle:t,previewChapters:r,currentChapter:n,mode:i="email",shopifyProductId:s,stripePaymentLink:u,paypalPlanId:c,providers:p,onUnlock:l}){const f=oe(""),a=oe(!1),y=oe(""),h=oe(!1),S=H(null);if(typeof window<"u"&&localStorage.getItem(`pressy-unlocked-${e}`)&&(h.value=!0),I(()=>{if(typeof window>"u")return;const w=new URLSearchParams(window.location.search);if(w.get("stripe_success")==="true"&&w.get("book")===e){localStorage.setItem(`pressy-unlocked-${e}`,"stripe"),h.value=!0;const m=new URL(window.location.href);m.searchParams.delete("stripe_success"),m.searchParams.delete("book"),window.history.replaceState({},"",m.toString()),l==null||l()}if(w.get("checkout_success")==="true"&&w.get("book")===e){localStorage.setItem(`pressy-unlocked-${e}`,"shopify"),h.value=!0;const m=new URL(window.location.href);m.searchParams.delete("checkout_success"),m.searchParams.delete("book"),m.searchParams.delete("order_id"),window.history.replaceState({},"",m.toString()),l==null||l()}if(!h.value)try{const m=localStorage.getItem("pressy-checkout-pending");if(m){const{bookSlug:z,timestamp:B}=JSON.parse(m);z===e&&Date.now()-B<36e5&&(localStorage.setItem(`pressy-unlocked-${e}`,"stripe"),localStorage.removeItem("pressy-checkout-pending"),h.value=!0,l==null||l())}}catch{}},[e]),I(()=>{var m;if(i!=="paypal"||h.value||!S.current||!((m=p==null?void 0:p.paypal)!=null&&m.clientId)||!c)return;let w=!1;return ir(async()=>{const{renderPayPalButtons:z}=await import("@pressy-pub/paypal");return{renderPayPalButtons:z}},[],import.meta.url).then(({renderPayPalButtons:z})=>{w||!S.current||z({clientId:p.paypal.clientId,planId:c,bookSlug:e,currency:p.paypal.currency,container:S.current,onApprove:(B,Q)=>{localStorage.setItem(`pressy-unlocked-${e}`,"paypal"),h.value=!0,l==null||l()},onError:B=>{y.value="Payment failed. Please try again."}})}).catch(()=>{y.value="Failed to load PayPal. Please try again."}),()=>{w=!0}},[i,h.value,c,e]),h.value||n<=r)return null;const E=async w=>{if(w.preventDefault(),!f.value||!f.value.includes("@")){y.value="Please enter a valid email address";return}a.value=!0,y.value="";try{await new Promise(m=>setTimeout(m,1e3)),localStorage.setItem(`pressy-unlocked-${e}`,"email"),localStorage.setItem(`pressy-email-${e}`,f.value),h.value=!0,l==null||l()}catch{y.value="Something went wrong. Please try again."}finally{a.value=!1}},C=async()=>{if(!s){y.value="Purchase not available";return}a.value=!0;try{const{createCheckout:w}=await ir(async()=>{const{createCheckout:z}=await import("@pressy-pub/shopify");return{createCheckout:z}},[],import.meta.url),m=await w(s);window.location.href=m}catch{y.value="Failed to create checkout. Please try again.",a.value=!1}},$=()=>{if(!u){y.value="Purchase not available";return}a.value=!0;try{const w=new URL(u);w.searchParams.set("client_reference_id",e),localStorage.setItem("pressy-checkout-pending",JSON.stringify({bookSlug:e,timestamp:Date.now()})),window.location.href=w.toString()}catch{y.value="Invalid payment link. Please try again.",a.value=!1}},b=()=>{switch(i){case"stripe":case"shopify":case"paypal":return" Purchase the full book to continue reading.";case"email":default:return" Enter your email to unlock the full book."}},k=()=>{switch(i){case"stripe":return"Secure checkout powered by Stripe.";case"shopify":return"Secure checkout powered by Shopify.";case"paypal":return"Secure checkout powered by PayPal.";case"email":default:return"We'll never share your email with anyone."}},N=()=>{switch(i){case"email":return o("form",{class:"pressy-paywall-form",onSubmit:E,children:[o("input",{type:"email",placeholder:"Enter your email",value:f.value,onInput:w=>f.value=w.target.value,class:"pressy-paywall-input",disabled:a.value}),o("button",{type:"submit",class:"pressy-paywall-button",disabled:a.value,children:a.value?"Unlocking...":"Unlock Full Book"})]});case"shopify":return o("button",{class:"pressy-paywall-button pressy-paywall-purchase",onClick:C,disabled:a.value,children:a.value?"Processing...":"Purchase Now"});case"stripe":return o("button",{class:"pressy-paywall-button pressy-paywall-purchase",onClick:$,disabled:a.value,children:a.value?"Redirecting...":"Purchase Now"});case"paypal":return o("div",{class:"pressy-paywall-paypal",children:o("div",{ref:S,class:"pressy-paywall-paypal-buttons"})})}};return o("div",{class:"pressy-paywall",children:[o("div",{class:"pressy-paywall-content",children:[o("div",{class:"pressy-paywall-icon",children:o("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})})}),o("h2",{class:"pressy-paywall-title",children:"Continue Reading"}),o("p",{class:"pressy-paywall-description",children:["You've enjoyed the first ",r,' chapters of "',t,'".',b()]}),N(),y.value&&o("p",{class:"pressy-paywall-error",children:y.value}),o("p",{class:"pressy-paywall-note",children:k()})]}),o("style",{children:$o})]})}var $o=`
  .pressy-paywall {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1.5rem;
  }

  .pressy-paywall-content {
    background: var(--color-bg);
    border-radius: 1rem;
    padding: 2.5rem;
    max-width: 400px;
    width: 100%;
    text-align: center;
  }

  .pressy-paywall-icon {
    color: var(--color-accent);
    margin-bottom: 1.5rem;
  }

  .pressy-paywall-title {
    font-size: var(--font-size-xl);
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: var(--color-heading);
  }

  .pressy-paywall-description {
    color: var(--color-text-muted);
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .pressy-paywall-form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .pressy-paywall-input {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    font-size: var(--font-size-base);
    background: var(--color-bg);
    color: var(--color-text);
    box-sizing: border-box;
  }

  .pressy-paywall-input:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
  }

  .pressy-paywall-button {
    width: 100%;
    padding: 0.875rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: var(--font-size-base);
    font-weight: 500;
    background: var(--color-accent);
    color: white;
    cursor: pointer;
    transition: opacity 0.15s;
  }

  .pressy-paywall-button:hover:not(:disabled) {
    opacity: 0.9;
  }

  .pressy-paywall-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .pressy-paywall-paypal-buttons {
    min-height: 45px;
  }

  .pressy-paywall-error {
    color: #dc2626;
    font-size: var(--font-size-sm);
    margin-top: 0.75rem;
  }

  .pressy-paywall-note {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    margin-top: 1.5rem;
  }
`;function Co({id:e,children:t}){const r=oe(!1);return o("span",{class:"pressy-footnote-wrapper",children:[o("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&o("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,o("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),o("style",{children:`
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
      `})]})}function Eo({children:e,title:t}){return o("aside",{class:"pressy-aside",children:[t&&o("strong",{class:"pressy-aside-title",children:t}),o("div",{class:"pressy-aside-content",children:e}),o("style",{children:`
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
      `})]})}function ar({src:e,alt:t,caption:r,wide:n,children:i}){return o("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[o("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||i)&&o("figcaption",{class:"pressy-figure-caption",children:r||i}),o("style",{children:`
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
      `})]})}var zo={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},Lo={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function To({type:e="note",title:t,children:r}){return o("div",{class:`pressy-callout pressy-callout-${e}`,children:[o("div",{class:"pressy-callout-header",children:[o("span",{class:"pressy-callout-icon",children:zo[e]}),o("strong",{class:"pressy-callout-title",children:t||Lo[e]})]}),o("div",{class:"pressy-callout-content",children:r}),o("style",{children:`
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
      `})]})}function lr({variant:e="asterisks"}){return o("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&o("span",{children:"* * *"}),e==="ornament"&&o("span",{children:"❧"}),o("style",{children:`
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
      `})]})}var Ro={Footnote:Co,Aside:Eo,Figure:ar,Callout:To,SceneBreak:lr,img:ar,hr:lr},Ao={};function nt(){return{...Ro,...Ao}}var Dr="pressy-cached-books",mt=se("online"),st=se(null),vt=se(!1),Ne=se(null);function Mo(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(Dr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var re=se(Mo());typeof window<"u"&&(mt.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{mt.value="online"}),window.addEventListener("offline",()=>{mt.value="offline"}));function Io(){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Ne.value=e}),window.addEventListener("appinstalled",()=>{Ne.value=null})}async function Oo(){const e=Ne.value;if(!e)return!1;e.prompt();const{outcome:t}=await e.userChoice;return Ne.value=null,t==="accepted"}async function Ho(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",Bo),navigator.serviceWorker.controller?vt.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{vt.value=!0}),n.addEventListener("updatefound",()=>{const i=n.installing;i&&i.addEventListener("statechange",()=>{i.state==="activated"&&(vt.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function He(){try{localStorage.setItem(Dr,JSON.stringify([...re.value]))}catch{}}function Bo(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:i}=e.data;st.value={bookSlug:r,current:n,total:i}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;st.value=null;const n=new Set(re.value);n.add(r),re.value=n,He()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const i of r){const s=i.match(/\/books\/([^/]+)/);s&&n.add(s[1])}re.value=n,He()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(re.value);n.delete(r),re.value=n,He()}}async function jr(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(i=>i.startsWith("http")?i:`${window.location.origin}${i}`);st.value={bookSlug:e,current:0,total:r.length};const n=new Set(re.value);return n.add(e),re.value=n,He(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}function Do(e){return re.value.has(e)}async function jo(e){const t=new Set(re.value);if(t.delete(e),re.value=t,He(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const i of n)i.url.includes(`/books/${e}`)&&await r.delete(i);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var cr=se("/"),Nr=se("light"),ur=se(!navigator.onLine),No="pressy",Wo=1,Ce="reading-progress",dr="unlocks",Ke=null;async function It(){return Ke||new Promise((e,t)=>{const r=indexedDB.open(No,Wo);r.onerror=()=>t(r.error),r.onsuccess=()=>{Ke=r.result,e(Ke)},r.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(Ce)||i.createObjectStore(Ce,{keyPath:"chapterSlug"}),i.objectStoreNames.contains(dr)||i.createObjectStore(dr,{keyPath:"bookSlug"})}})}async function pr(e){const t=await It();return new Promise((r,n)=>{const u=t.transaction(Ce,"readwrite").objectStore(Ce).put(e);u.onsuccess=()=>r(),u.onerror=()=>n(u.error)})}async function et(){const e=await It();return new Promise((t,r)=>{const s=e.transaction(Ce,"readonly").objectStore(Ce).getAll();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>r(s.error)})}function Fo(e){return!!localStorage.getItem(`pressy-unlocked-${e}`)}function Wr(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function fr(e){Nr.value=e,localStorage.setItem("pressy-theme",e);const t=e==="system"?Wr():e;document.documentElement.setAttribute("data-theme",t)}function Uo(){const e=localStorage.getItem("pressy-theme");e?fr(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&fr("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Nr.value==="system"&&document.documentElement.setAttribute("data-theme",Wr())})}function Vo(){window.addEventListener("online",()=>{ur.value=!1}),window.addEventListener("offline",()=>{ur.value=!0})}function Yo({book:e}){const[t,r]=O(null);return I(()=>{if(e.chapters.length===0)return;const n=`${Z}/books/${e.slug}/${e.chapters[0].slug}`;et().then(i=>{const s=new Map(i.map(c=>[c.chapterSlug,c]));let u=null;for(const c of e.chapters){const p=s.get(c.slug);if(!p)continue;!(p.totalPages>0&&p.page>=p.totalPages-1)&&p.page>0&&(u=c)}r(u?{label:"Continue Reading",href:`${Z}/books/${e.slug}/${u.slug}`}:{label:"Start Reading",href:n})}).catch(()=>{r({label:"Start Reading",href:n})})},[e]),t?o("a",{href:t.href,class:"pressy-cta",children:t.label}):null}function Xo(){return Ne.value?o("button",{class:"pressy-cta pressy-cta-secondary",onClick:()=>Oo(),children:"Install"}):null}function Fr(e,t=[]){var l,f;const r=e.chapters.reduce((a,y)=>a+(y.wordCount||0),0),n=Math.ceil(r/200),i=e.chapters.length,s=e.metadata.publishDate?new Date(e.metadata.publishDate).getFullYear():null,u=r.toLocaleString(),c=(l=e.metadata.paywall)==null?void 0:l.price,p=((f=e.metadata.paywall)==null?void 0:f.enabled)&&e.metadata.paywall.stripePaymentLink;return o("div",{class:"pressy-home",children:[o("div",{class:"pressy-hero",children:[e.coverUrl&&o("img",{src:Z+e.coverUrl,alt:`${e.metadata.title} cover`,class:"pressy-hero-cover"}),o("div",{class:"pressy-hero-text",children:[o("h1",{class:"pressy-hero-title",children:e.metadata.title}),o("p",{class:"pressy-hero-author",children:["by ",e.metadata.author]}),c&&o("p",{class:"pressy-hero-price",children:c}),i>0&&o("div",{class:"pressy-cta-group",children:[o(Yo,{book:e}),p&&o("a",{href:e.metadata.paywall.stripePaymentLink,class:"pressy-cta pressy-cta-secondary",children:"Purchase"}),o(Xo,{})]}),r>0&&o("div",{class:"pressy-stats",children:[o("span",{children:[i," chapter",i!==1?"s":""]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:[u," words"]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:["~",n," min read"]}),s&&o(ye,{children:[o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:s})]})]})]})]}),e.metadata.description&&o("p",{class:"pressy-home-desc pressy-fade-sections",children:e.metadata.description}),t.length>0&&o("section",{class:"pressy-home-section pressy-fade-sections",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:t.map(a=>o("a",{href:`${Z}/articles/${a.slug}`,class:"pressy-chapter-link",children:a.metadata.title}))})]}),o("style",{children:Ur})]})}function _t(e){var r,n;if(e.books.length===1)return Fr(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return o("div",{class:"pressy-home",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&o("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Books"}),o("nav",{class:"pressy-chapter-list",children:e.books.map(i=>o("a",{href:`${Z}/books/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),e.articles.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:e.articles.map(i=>o("a",{href:`${Z}/articles/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),o("style",{children:Ur})]})}function bt(e,t,r,n,i){const s=e.chapters.reduce((p,l)=>p+(l.wordCount||0),0);if(s===0)return 0;const u=new Map(i.map(p=>[p.chapterSlug,p]));let c=0;for(const p of e.chapters){const l=p.wordCount||0;if(p.slug===t)n>0&&(c+=r/Math.max(1,n-1)*l);else{const f=u.get(p.slug);if(!f)continue;f.totalPages>0&&f.page>=f.totalPages-1?c+=l:f.page>0&&f.totalPages>0&&(c+=f.page/f.totalPages*l)}}return Math.min(100,c/s*100)}function qo({book:e,chapterSlug:t,chapter:r,prevChapter:n,nextChapter:i,paginationMode:s,Content:u,chapterMapData:c,providers:p}){const[l,f]=O(void 0),[a,y]=O(()=>{const m=e.metadata.paywall;return m!=null&&m.enabled?Fo(e.slug):!0}),[h,S]=O(t);I(()=>{et().then(m=>{const z=bt(e,t,0,0,m);f(z)})},[e,t]);const E=m=>{const z=m.activeChapterSlug||t;z!==h&&S(z),localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:z,page:m.page,totalPages:m.totalPages,scrollPosition:m.scrollPosition})),pr({chapterSlug:z,page:m.page,totalPages:m.totalPages,scrollPosition:m.scrollPosition,timestamp:Date.now()}),m.totalPages>0&&et().then(B=>{const Q=bt(e,z,m.page,m.totalPages,B);f(Q)})},C=async()=>{try{const m=localStorage.getItem("pressy-last-read");if(m){const z=JSON.parse(m);if(z.chapterSlug===t&&z.page>0)return{page:z.page,totalPages:z.totalPages,scrollPosition:z.scrollPosition||0}}}catch{}return null},$=(m,z,B)=>{pr({chapterSlug:m,page:z,totalPages:B,scrollPosition:0,timestamp:Date.now()}),localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:m,page:z,totalPages:B})),et().then(Q=>{const q=bt(e,m,z,B,Q);f(q)})};I(()=>{if(n){const m=document.createElement("link");return m.rel="prefetch",m.href=n.slug,document.head.appendChild(m),()=>{document.head.removeChild(m)}}},[n]);const b=e.metadata.paywall,k=e.chapters.findIndex(m=>m.slug===h),N=k>=0?k+1:1,w=(b==null?void 0:b.enabled)&&!a&&N>(b.previewChapters||0);return o(ye,{children:[o(Mt,{title:(r==null?void 0:r.title)||t,bookTitle:e.metadata.title,chapterSlug:t,prevChapter:n,nextChapter:i,paginationMode:s,onSaveProgress:E,onRestoreProgress:C,bookProgressPercent:l,initialContent:u,chapterMapData:c,currentChapterSlug:t,allChapters:e.chapters.map(m=>({slug:m.slug,title:m.title,wordCount:m.wordCount})),bookBasePath:`${Z}/books/${e.slug}`,onChapterChange:$,mdxComponents:nt(),offlineProps:{bookSlug:e.slug,chapterUrls:e.chapters.map(m=>`${Z}/books/${e.slug}/${m.slug}`),cachedBooks:re,cacheProgress:st,onDownload:jr,onRemove:jo},children:o(u,{components:nt()})}),w&&o(Po,{bookSlug:e.slug,bookTitle:e.metadata.title,previewChapters:b.previewChapters||0,currentChapter:N,mode:b.mode,shopifyProductId:b.shopifyProductId,stripePaymentLink:b.stripePaymentLink,paypalPlanId:b.paypalPlanId,providers:p,onUnlock:()=>y(!0)})]})}function Jo(e,t,r,n,i,s){const u=t.split("/"),c=u[2],p=u[3],l=e.books.find(C=>C.slug===c),f=l?l.chapters.findIndex(C=>C.slug===p):-1,a=l==null?void 0:l.chapters[f],y=C=>`${Z}/books/${c}/${C.slug}`,h=l&&f>0?{slug:y(l.chapters[f-1]),title:l.chapters[f-1].title}:l?{slug:`${Z}/books/${c}`,title:l.metadata.title}:void 0,S=l&&f>=0&&f<l.chapters.length-1?{slug:y(l.chapters[f+1]),title:l.chapters[f+1].title}:l?{slug:`${Z}/books/${c}`,title:l.metadata.title}:void 0,E=r;return l?o(qo,{book:l,chapterSlug:p,chapter:a,prevChapter:h,nextChapter:S,paginationMode:n,Content:E,chapterMapData:i,providers:s}):o(Mt,{title:(a==null?void 0:a.title)||p,prevChapter:h,nextChapter:S,paginationMode:n,children:o(E,{components:nt()})})}function Go(e,t,r){const n=t.split("/")[2],i=e.articles.find(u=>u.slug===n),s=r;return o(Mt,{title:(i==null?void 0:i.metadata.title)||n,children:o(s,{components:nt()})})}var Ur=`
  @keyframes pressy-fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .pressy-home {
    max-width: 38rem;
    margin: 0 auto;
    padding: 3rem 1.5rem;
    font-family: var(--font-body, Georgia, 'Times New Roman', serif);
    color: var(--color-text, #1a1a1a);
  }

  /* ── Hero layout ────────────────────────── */
  .pressy-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2.5rem;
  }
  .pressy-hero-cover {
    max-width: 240px;
    width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.18);
    margin-bottom: 2rem;
    animation: pressy-fade-in 0.6s ease-out both;
  }
  .pressy-hero-text {
    animation: pressy-fade-in 0.6s ease-out 0.15s both;
  }
  .pressy-hero-title {
    font-size: 2rem;
    margin: 0 0 0.25rem;
    line-height: 1.2;
  }
  .pressy-hero-author {
    font-style: italic;
    color: var(--color-text-muted, #666);
    margin: 0 0 0.75rem;
  }
  .pressy-hero-price {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
    color: var(--color-text, #1a1a1a);
  }
  @media (min-width: 600px) {
    .pressy-hero-cover {
      max-width: 280px;
    }
    .pressy-hero-title {
      font-size: 2.25rem;
    }
  }

  /* ── Description ─────────────────────────── */
  .pressy-home-desc {
    color: var(--color-text-muted, #555);
    line-height: 1.7;
    max-width: 55ch;
    margin: 0 auto 2rem;
    text-align: center;
    font-size: 0.95rem;
  }

  /* ── Stats row ──────────────────────────── */
  .pressy-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.4em;
    font-size: 0.8rem;
    color: var(--color-text-muted, #999);
    margin-top: 1rem;
    letter-spacing: 0.01em;
  }
  .pressy-stats-sep {
    opacity: 0.4;
  }

  /* ── CTA button ─────────────────────────── */
  .pressy-cta-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    align-items: center;
    margin-top: 1.25rem;
  }
  .pressy-cta {
    display: inline-block;
    padding: 0.75rem 2rem;
    background: var(--color-link, #2563eb);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: opacity 0.15s, background 0.15s, color 0.15s;
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
`;function Ko(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const i=r.indexOf(n);return i>0?r.slice(0,i):""}var Z="";function Qo(e,t,r){var u;Z=Ko(e.route),cr.value=e.route;const n=!sessionStorage.getItem("pressy-session-active");sessionStorage.setItem("pressy-session-active","1"),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&sessionStorage.removeItem("pressy-session-active")});const i=sessionStorage.getItem("pressy-internal-nav");if(sessionStorage.removeItem("pressy-internal-nav"),n&&!i&&(e.routeType==="home"||e.routeType==="book")){const c=localStorage.getItem("pressy-last-read");if(c)try{const{bookSlug:p,chapterSlug:l}=JSON.parse(c),f=e.manifest.books.find(a=>a.slug===p);if(f!=null&&f.chapters.some(a=>a.slug===l)){window.location.replace(`${Z}/books/${p}/${l}`);return}}catch{}}Uo(),Vo(),Io(),It(),Ho(Z),window.addEventListener("appinstalled",()=>{for(const c of e.manifest.books){if(Do(c.slug))continue;const p=c.chapters.map(l=>`${Z}/books/${c.slug}/${l.slug}`);jr(c.slug,p)}}),window.addEventListener("popstate",()=>{cr.value=window.location.pathname}),document.addEventListener("click",c=>{const p=c.target.closest("a");if(!p)return;const l=p.getAttribute("href");if(l&&!(l.startsWith("http")||l.startsWith("#"))&&l.startsWith(e.route+"#")){c.preventDefault();const f=l.slice(l.indexOf("#")),a=document.querySelector(f);a&&a.scrollIntoView({behavior:"smooth"});return}});let s;switch(e.routeType){case"home":s=_t(e.manifest);break;case"book":{const c=e.route.split("/")[2],p=e.manifest.books.find(l=>l.slug===c);s=p?Fr(p):o("div",{children:"Book not found"});break}case"chapter":s=t?Jo(e.manifest,e.route,t,(u=e.pagination)==null?void 0:u.defaultMode,r,e.providers):o("div",{children:"Loading..."});break;case"article":s=t?Go(e.manifest,e.route,t):o("div",{children:"Loading..."});break;case"books":s=_t(e.manifest);break;case"articles":s=_t(e.manifest);break;default:s=o("div",{children:"Page not found"})}ao(s,document.getElementById("app"))}export{ir as _,Qo as h,ye as k,o as u};
