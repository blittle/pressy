var it,L,fr,pr,ye,Xt,hr,gr,mr,Ct,wt,xt,Be={},yr=[],Qr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,at=Array.isArray;function de(e,t){for(var r in t)e[r]=t[r];return e}function Pt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function eo(e,t,r){var n,i,s,l={};for(s in t)s=="key"?n=t[s]:s=="ref"?i=t[s]:l[s]=t[s];if(arguments.length>2&&(l.children=arguments.length>3?it.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)l[s]===void 0&&(l[s]=e.defaultProps[s]);return Ze(e,l,n,i,null)}function Ze(e,t,r,n,i){var s={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++fr,__i:-1,__u:0};return i==null&&L.vnode!=null&&L.vnode(s),s}function _e(e){return e.children}function Oe(e,t){this.props=e,this.context=t}function Ce(e,t){if(t==null)return e.__?Ce(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?Ce(e):null}function vr(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return vr(e)}}function qt(e){(!e.__d&&(e.__d=!0)&&ye.push(e)&&!tt.__r++||Xt!=L.debounceRendering)&&((Xt=L.debounceRendering)||hr)(tt)}function tt(){for(var e,t,r,n,i,s,l,u=1;ye.length;)ye.length>u&&ye.sort(gr),e=ye.shift(),u=ye.length,e.__d&&(r=void 0,n=void 0,i=(n=(t=e).__v).__e,s=[],l=[],t.__P&&((r=de({},n)).__v=n.__v+1,L.vnode&&L.vnode(r),Et(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[i]:null,s,i??Ce(n),!!(32&n.__u),l),r.__v=n.__v,r.__.__k[r.__i]=r,wr(s,r,l),n.__e=n.__=null,r.__e!=i&&vr(r)));tt.__r=0}function _r(e,t,r,n,i,s,l,u,f,d,g){var a,v,p,b,C,$,S,x=n&&n.__k||yr,k=t.length;for(f=to(r,t,x,f,k),a=0;a<k;a++)(p=r.__k[a])!=null&&(v=p.__i==-1?Be:x[p.__i]||Be,p.__i=a,$=Et(e,p,v,i,s,l,u,f,d,g),b=p.__e,p.ref&&v.ref!=p.ref&&(v.ref&&Tt(v.ref,null,p),g.push(p.ref,p.__c||b,p)),C==null&&b!=null&&(C=b),(S=!!(4&p.__u))||v.__k===p.__k?f=br(p,f,e,S):typeof p.type=="function"&&$!==void 0?f=$:b&&(f=b.nextSibling),p.__u&=-7);return r.__e=C,f}function to(e,t,r,n,i){var s,l,u,f,d,g=r.length,a=g,v=0;for(e.__k=new Array(i),s=0;s<i;s++)(l=t[s])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=e.__k[s]=Ze(null,l,null,null,null):at(l)?l=e.__k[s]=Ze(_e,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=e.__k[s]=Ze(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):e.__k[s]=l,f=s+v,l.__=e,l.__b=e.__b+1,u=null,(d=l.__i=ro(l,r,f,a))!=-1&&(a--,(u=r[d])&&(u.__u|=2)),u==null||u.__v==null?(d==-1&&(i>g?v--:i<g&&v++),typeof l.type!="function"&&(l.__u|=4)):d!=f&&(d==f-1?v--:d==f+1?v++:(d>f?v--:v++,l.__u|=4))):e.__k[s]=null;if(a)for(s=0;s<g;s++)(u=r[s])!=null&&!(2&u.__u)&&(u.__e==n&&(n=Ce(u)),kr(u,u));return n}function br(e,t,r,n){var i,s;if(typeof e.type=="function"){for(i=e.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=e,t=br(i[s],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=Ce(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function ro(e,t,r,n){var i,s,l,u=e.key,f=e.type,d=t[r],g=d!=null&&(2&d.__u)==0;if(d===null&&u==null||g&&u==d.key&&f==d.type)return r;if(n>(g?1:0)){for(i=r-1,s=r+1;i>=0||s<t.length;)if((d=t[l=i>=0?i--:s++])!=null&&!(2&d.__u)&&u==d.key&&f==d.type)return l}return-1}function Jt(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Qr.test(t)?r:r+"px"}function Je(e,t,r,n,i){var s,l;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Jt(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||Jt(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(mr,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=r,r?n?r.u=n.u:(r.u=Ct,e.addEventListener(t,s?xt:wt,s)):e.removeEventListener(t,s?xt:wt,s);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Gt(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Ct++;else if(t.t<r.u)return;return r(L.event?L.event(t):t)}}}function Et(e,t,r,n,i,s,l,u,f,d){var g,a,v,p,b,C,$,S,x,k,q,T,Z,he,ee,oe,J,j=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(f=!!(32&r.__u),s=[u=t.__e=r.__e]),(g=L.__b)&&g(t);e:if(typeof j=="function")try{if(S=t.props,x="prototype"in j&&j.prototype.render,k=(g=j.contextType)&&n[g.__c],q=g?k?k.props.value:g.__:n,r.__c?$=(a=t.__c=r.__c).__=a.__E:(x?t.__c=a=new j(S,q):(t.__c=a=new Oe(S,q),a.constructor=j,a.render=no),k&&k.sub(a),a.state||(a.state={}),a.__n=n,v=a.__d=!0,a.__h=[],a._sb=[]),x&&a.__s==null&&(a.__s=a.state),x&&j.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=de({},a.__s)),de(a.__s,j.getDerivedStateFromProps(S,a.__s))),p=a.props,b=a.state,a.__v=t,v)x&&j.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),x&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(x&&j.getDerivedStateFromProps==null&&S!==p&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(S,q),t.__v==r.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(S,a.__s,q)===!1){for(t.__v!=r.__v&&(a.props=S,a.state=a.__s,a.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(y){y&&(y.__=t)}),T=0;T<a._sb.length;T++)a.__h.push(a._sb[T]);a._sb=[],a.__h.length&&l.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(S,a.__s,q),x&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(p,b,C)})}if(a.context=q,a.props=S,a.__P=e,a.__e=!1,Z=L.__r,he=0,x){for(a.state=a.__s,a.__d=!1,Z&&Z(t),g=a.render(a.props,a.state,a.context),ee=0;ee<a._sb.length;ee++)a.__h.push(a._sb[ee]);a._sb=[]}else do a.__d=!1,Z&&Z(t),g=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++he<25);a.state=a.__s,a.getChildContext!=null&&(n=de(de({},n),a.getChildContext())),x&&!v&&a.getSnapshotBeforeUpdate!=null&&(C=a.getSnapshotBeforeUpdate(p,b)),oe=g,g!=null&&g.type===_e&&g.key==null&&(oe=xr(g.props.children)),u=_r(e,at(oe)?oe:[oe],t,r,n,i,s,l,u,f,d),a.base=t.__e,t.__u&=-161,a.__h.length&&l.push(a),$&&(a.__E=a.__=null)}catch(y){if(t.__v=null,f||s!=null)if(y.then){for(t.__u|=f?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;s[s.indexOf(u)]=null,t.__e=u}else{for(J=s.length;J--;)Pt(s[J]);kt(t)}else t.__e=r.__e,t.__k=r.__k,y.then||kt(t);L.__e(y,t,r)}else s==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):u=t.__e=oo(r.__e,t,r,n,i,s,l,f,d);return(g=L.diffed)&&g(t),128&t.__u?void 0:u}function kt(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(kt)}function wr(e,t,r){for(var n=0;n<r.length;n++)Tt(r[n],r[++n],r[++n]);L.__c&&L.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(s){s.call(i)})}catch(s){L.__e(s,i.__v)}})}function xr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:at(e)?e.map(xr):de({},e)}function oo(e,t,r,n,i,s,l,u,f){var d,g,a,v,p,b,C,$=r.props||Be,S=t.props,x=t.type;if(x=="svg"?i="http://www.w3.org/2000/svg":x=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),s!=null){for(d=0;d<s.length;d++)if((p=s[d])&&"setAttribute"in p==!!x&&(x?p.localName==x:p.nodeType==3)){e=p,s[d]=null;break}}if(e==null){if(x==null)return document.createTextNode(S);e=document.createElementNS(i,x,S.is&&S),u&&(L.__m&&L.__m(t,s),u=!1),s=null}if(x==null)$===S||u&&e.data==S||(e.data=S);else{if(s=s&&it.call(e.childNodes),!u&&s!=null)for($={},d=0;d<e.attributes.length;d++)$[(p=e.attributes[d]).name]=p.value;for(d in $)if(p=$[d],d!="children"){if(d=="dangerouslySetInnerHTML")a=p;else if(!(d in S)){if(d=="value"&&"defaultValue"in S||d=="checked"&&"defaultChecked"in S)continue;Je(e,d,null,p,i)}}for(d in S)p=S[d],d=="children"?v=p:d=="dangerouslySetInnerHTML"?g=p:d=="value"?b=p:d=="checked"?C=p:u&&typeof p!="function"||$[d]===p||Je(e,d,p,$[d],i);if(g)u||a&&(g.__html==a.__html||g.__html==e.innerHTML)||(e.innerHTML=g.__html),t.__k=[];else if(a&&(e.innerHTML=""),_r(t.type=="template"?e.content:e,at(v)?v:[v],t,r,n,x=="foreignObject"?"http://www.w3.org/1999/xhtml":i,s,l,s?s[0]:r.__k&&Ce(r,0),u,f),s!=null)for(d=s.length;d--;)Pt(s[d]);u||(d="value",x=="progress"&&b==null?e.removeAttribute("value"):b!=null&&(b!==e[d]||x=="progress"&&!b||x=="option"&&b!=$[d])&&Je(e,d,b,$[d],i),d="checked",C!=null&&C!=e[d]&&Je(e,d,C,$[d],i))}return e}function Tt(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(i){L.__e(i,r)}}function kr(e,t,r){var n,i;if(L.unmount&&L.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||Tt(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){L.__e(s,t)}n.base=n.__P=null}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&kr(n[i],t,r||typeof e.type!="function");r||Pt(e.__e),e.__c=e.__=e.__e=void 0}function no(e,t,r){return this.constructor(e,r)}function so(e,t,r){var n,i,s,l;t==document&&(t=document.documentElement),L.__&&L.__(e,t),i=(n=!1)?null:t.__k,s=[],l=[],Et(t,e=t.__k=eo(_e,null,[e]),i||Be,Be,t.namespaceURI,i?null:t.firstChild?it.call(t.childNodes):null,s,i?i.__e:t.firstChild,n,l),wr(s,e,l)}it=yr.slice,L={__e:function(e,t,r,n){for(var i,s,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,n||{}),l=i.__d),l)return i.__E=i}catch(u){e=u}throw e}},fr=0,pr=function(e){return e!=null&&e.constructor===void 0},Oe.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=de({},this.state),typeof e=="function"&&(e=e(de({},r),this.props)),e&&de(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),qt(this))},Oe.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),qt(this))},Oe.prototype.render=_e,ye=[],hr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,gr=function(e,t){return e.__v.__b-t.__v.__b},tt.__r=0,mr=/(PointerCapture)$|Capture$/i,Ct=0,wt=Gt(!1),xt=Gt(!0);var je,H,mt,Kt,Ne=0,Sr=[],I=L,Zt=I.__b,Qt=I.__r,er=I.diffed,tr=I.__c,rr=I.unmount,or=I.__;function zt(e,t){I.__h&&I.__h(H,e,Ne||t),Ne=0;var r=H.__H||(H.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function A(e){return Ne=1,io(Cr,e)}function io(e,t,r){var n=zt(je++,2);if(n.t=e,!n.__c&&(n.__=[Cr(void 0,t),function(u){var f=n.__N?n.__N[0]:n.__[0],d=n.t(f,u);f!==d&&(n.__N=[d,n.__[1]],n.__c.setState({}))}],n.__c=H,!H.__f)){var i=function(u,f,d){if(!n.__c.__H)return!0;var g=n.__c.__H.__.filter(function(v){return!!v.__c});if(g.every(function(v){return!v.__N}))return!s||s.call(this,u,f,d);var a=n.__c.props!==u;return g.forEach(function(v){if(v.__N){var p=v.__[0];v.__=v.__N,v.__N=void 0,p!==v.__[0]&&(a=!0)}}),s&&s.call(this,u,f,d)||a};H.__f=!0;var s=H.shouldComponentUpdate,l=H.componentWillUpdate;H.componentWillUpdate=function(u,f,d){if(this.__e){var g=s;s=void 0,i(u,f,d),s=g}l&&l.call(this,u,f,d)},H.shouldComponentUpdate=i}return n.__N||n.__}function M(e,t){var r=zt(je++,3);!I.__s&&$r(r.__H,t)&&(r.__=e,r.u=t,H.__H.__h.push(r))}function O(e){return Ne=5,lt(function(){return{current:e}},[])}function lt(e,t){var r=zt(je++,7);return $r(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function D(e,t){return Ne=8,lt(function(){return e},t)}function ao(){for(var e;e=Sr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Qe),e.__H.__h.forEach(St),e.__H.__h=[]}catch(t){e.__H.__h=[],I.__e(t,e.__v)}}I.__b=function(e){H=null,Zt&&Zt(e)},I.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),or&&or(e,t)},I.__r=function(e){Qt&&Qt(e),je=0;var t=(H=e.__c).__H;t&&(mt===H?(t.__h=[],H.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Qe),t.__h.forEach(St),t.__h=[],je=0)),mt=H},I.diffed=function(e){er&&er(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Sr.push(t)!==1&&Kt===I.requestAnimationFrame||((Kt=I.requestAnimationFrame)||lo)(ao)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),mt=H=null},I.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Qe),r.__h=r.__h.filter(function(n){return!n.__||St(n)})}catch(n){t.some(function(i){i.__h&&(i.__h=[])}),t=[],I.__e(n,r.__v)}}),tr&&tr(e,t)},I.unmount=function(e){rr&&rr(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Qe(n)}catch(i){t=i}}),r.__H=void 0,t&&I.__e(t,r.__v))};var nr=typeof requestAnimationFrame=="function";function lo(e){var t,r=function(){clearTimeout(n),nr&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);nr&&(t=requestAnimationFrame(r))}function Qe(e){var t=H,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),H=t}function St(e){var t=H;e.__c=e.__(),H=t}function $r(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function Cr(e,t){return typeof t=="function"?t(e):t}var co=Symbol.for("preact-signals");function Lt(){if($e>1)$e--;else{for(var e,t=!1;He!==void 0;){var r=He;for(He=void 0,$t++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&Tr(r))try{r.c()}catch(i){t||(e=i,t=!0)}r=n}}if($t=0,$e--,t)throw e}}var z=void 0;function Pr(e){var t=z;z=void 0;try{return e()}finally{z=t}}var He=void 0,$e=0,$t=0,rt=0;function Er(e){if(z!==void 0){var t=e.n;if(t===void 0||t.t!==z)return t={i:0,S:e,p:z.s,n:void 0,t:z,e:void 0,x:void 0,r:t},z.s!==void 0&&(z.s.n=t),z.s=t,e.n=t,32&z.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=z.s,t.n=void 0,z.s.n=t,z.s=t),t}}function F(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}F.prototype.brand=co;F.prototype.h=function(){return!0};F.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:Pr(function(){var n;(n=t.W)==null||n.call(t)}))};F.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&Pr(function(){var i;(i=t.Z)==null||i.call(t)}))}};F.prototype.subscribe=function(e){var t=this;return Mt(function(){var r=t.value,n=z;z=void 0;try{e(r)}finally{z=n}},{name:"sub"})};F.prototype.valueOf=function(){return this.value};F.prototype.toString=function(){return this.value+""};F.prototype.toJSON=function(){return this.value};F.prototype.peek=function(){var e=z;z=void 0;try{return this.value}finally{z=e}};Object.defineProperty(F.prototype,"value",{get:function(){var e=Er(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if($t>100)throw new Error("Cycle detected");this.v=e,this.i++,rt++,$e++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Lt()}}}});function re(e,t){return new F(e,t)}function Tr(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function zr(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Lr(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function be(e,t){F.call(this,void 0),this.x=e,this.s=void 0,this.g=rt-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}be.prototype=new F;be.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===rt))return!0;if(this.g=rt,this.f|=1,this.i>0&&!Tr(this))return this.f&=-2,!0;var e=z;try{zr(this),z=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return z=e,Lr(this),this.f&=-2,!0};be.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}F.prototype.S.call(this,e)};be.prototype.U=function(e){if(this.t!==void 0&&(F.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};be.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(be.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Er(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function uo(e,t){return new be(e,t)}function Rr(e){var t=e.u;if(e.u=void 0,typeof t=="function"){$e++;var r=z;z=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,Rt(e),n}finally{z=r,Lt()}}}function Rt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Rr(e)}function fo(e){if(z!==this)throw new Error("Out-of-order effect");Lr(this),z=e,this.f&=-2,8&this.f&&Rt(this),Lt()}function Ee(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}Ee.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Ee.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Rr(this),zr(this),$e++;var e=z;return z=this,fo.bind(this,e)};Ee.prototype.N=function(){2&this.f||(this.f|=2,this.o=He,He=this)};Ee.prototype.d=function(){this.f|=8,1&this.f||Rt(this)};Ee.prototype.dispose=function(){this.d()};function Mt(e,t){var r=new Ee(e,t);try{r.c()}catch(i){throw r.d(),i}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var Ge;function Te(e,t){L[e]=t.bind(null,L[e]||function(){})}function ot(e){if(Ge){var t=Ge;Ge=void 0,t()}Ge=e&&e.S()}function Mr(e){var t=this,r=e.data,n=ve(r);n.value=r;var i=lt(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var l,u=t.__$u.S(),f=i.value;u(),pr(f)||((l=t.base)==null?void 0:l.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=f},uo(function(){var l=n.value.value;return l===0?0:l===!0?"":l||""})},[]);return i.value}Mr.displayName="_st";Object.defineProperties(F.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Mr},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Te("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var i in n)if(i!=="children"){var s=n[i];s instanceof F&&(r||(t.__np=r={}),r[i]=s,n[i]=s.peek())}}e(t)});Te("__r",function(e,t){e(t),ot();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(i){var s;return Mt(function(){s=this}),s.c=function(){n.__$f|=1,n.setState({})},s}())),ot(r)});Te("__e",function(e,t,r,n){ot(),e(t,r,n)});Te("diffed",function(e,t){ot();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,i=t.props;if(n){var s=r.U;if(s)for(var l in s){var u=s[l];u!==void 0&&!(l in n)&&(u.d(),s[l]=void 0)}else r.U=s={};for(var f in n){var d=s[f],g=n[f];d===void 0?(d=po(r,f,g,i),s[f]=d):d.o(g,i)}}}e(t)});function po(e,t,r,n){var i=t in e&&e.ownerSVGElement===void 0,s=re(r);return{o:function(l,u){s.value=l,n=u},d:Mt(function(){var l=s.value.value;n[t]!==l&&(n[t]=l,i?e[t]=l:l?e.setAttribute(t,l):e.removeAttribute(t))})}}Te("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var i in n){var s=n[i];s&&s.d()}}}}else{var l=t.__c;if(l){var u=l.__$u;u&&(l.__$u=void 0,u.d())}}e(t)});Te("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});Oe.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var i in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var s in e)if(s!=="__source"&&e[s]!==this.props[s])return!0;for(var l in this.props)if(!(l in e))return!0;return!1};function ve(e){return lt(function(){return re(e)},[])}var ho=0;function o(e,t,r,n,i,s){t||(t={});var l,u,f=t;if("ref"in f)for(u in f={},t)u=="ref"?l=t[u]:f[u]=t[u];var d={type:e,props:f,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ho,__i:-1,__u:0,__source:i,__self:s};if(typeof e=="function"&&(l=e.defaultProps))for(u in l)f[u]===void 0&&(f[u]=l[u]);return L.vnode&&L.vnode(d),d}function go({prev:e,next:t}){return!e&&!t?null:o("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[o("div",{class:"pressy-nav-inner",children:[e?o("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[o("span",{class:"pressy-nav-direction",children:"Previous"}),o("span",{class:"pressy-nav-title",children:e.title})]}):o("div",{class:"pressy-nav-placeholder"}),t?o("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[o("span",{class:"pressy-nav-direction",children:"Next"}),o("span",{class:"pressy-nav-title",children:t.title})]}):o("div",{class:"pressy-nav-placeholder"})]}),o("style",{children:`
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
      `})]})}function Ar(){const e=ve(!1),t=ve({x:0,y:0}),r=ve(""),n=O(null);M(()=>{const u=()=>{const f=window.getSelection();if(!f||f.isCollapsed){e.value=!1;return}const d=f.toString().trim();if(d.length<5){e.value=!1;return}r.value=d;const a=f.getRangeAt(0).getBoundingClientRect();t.value={x:a.left+a.width/2,y:a.top-10},e.value=!0};return document.addEventListener("selectionchange",u),document.addEventListener("mouseup",u),()=>{document.removeEventListener("selectionchange",u),document.removeEventListener("mouseup",u)}},[]);const i=()=>{const u=encodeURIComponent(r.value),f=new URL(window.location.href);return f.hash=`:~:text=${u}`,f.toString()},s=async()=>{const u=i(),f=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:f,url:u}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${f}

${u}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var d;(d=n.current)==null||d.classList.remove("copied")},2e3))}catch(d){console.error("Failed to copy to clipboard:",d)}},l=async()=>{const u=i();try{await navigator.clipboard.writeText(u),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var f;(f=n.current)==null||f.classList.remove("copied")},2e3))}catch(f){console.error("Failed to copy link:",f)}};return e.value?o("div",{ref:n,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[o("button",{class:"pressy-share-btn",onClick:s,"aria-label":"Share selected text",title:"Share quote",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),o("button",{class:"pressy-copy-link-btn",onClick:l,"aria-label":"Copy link to selected text",title:"Copy link",children:o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),o("style",{children:`
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
      `})]}):null}function Or(){const e=ve(!navigator.onLine),t=ve(!1);return M(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?o("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?o(_e,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),o("span",{children:"You're offline"})]}):o(_e,{children:[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),o("span",{children:"Back online"})]}),o("style",{children:`
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
      `})]}):null}var mo=`
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
`;function Hr({offlineProps:e}){if(!e)return null;const{bookSlug:t,chapterUrls:r,cachedBooks:n,onDownload:i,onRemove:s}=e;return n.value.has(t)?o("button",{class:"pressy-offline-icon pressy-offline-icon--cached",onClick:u=>{u.stopPropagation(),s(t)},"aria-label":"Available offline. Click to remove.",title:"Available offline. Click to remove.",children:[o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]}),o("svg",{class:"pressy-offline-check",viewBox:"0 0 24 24",fill:"currentColor",width:"10",height:"10",children:o("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})})]}):o("button",{class:"pressy-offline-icon",onClick:u=>{u.stopPropagation(),i(t,r)},"aria-label":"Download for offline reading",title:"Download for offline reading",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}),o("polyline",{points:"9 15 12 18 15 15"}),o("line",{x1:"12",y1:"12",x2:"12",y2:"18"})]})})}function yo({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:s,onRestoreProgress:l,allChapters:u,bookBasePath:f,currentChapterSlug:d,offlineProps:g}){const a=O(null),[v,p]=A(!1),b=O(null),[C,$]=A(!1),[S,x]=A(!1),k=D(()=>{p(!0),b.current&&clearTimeout(b.current),b.current=setTimeout(()=>p(!1),3e3)},[]),[q,T]=A(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[Z,he]=A(()=>{if(typeof localStorage<"u"){const y=localStorage.getItem("pressy-font-size");return y?parseFloat(y):1}return 1}),ee=D(y=>{y===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${y})`)},[]);M(()=>{Z!==1&&ee(Z)},[]);const oe=D(y=>{T(y),localStorage.setItem("pressy-theme",y);const B=y==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":y;document.documentElement.setAttribute("data-theme",B)},[]),J=D(y=>{he(B=>{const ze=Math.round(Math.max(.8,Math.min(1.5,B+y))*10)/10;return localStorage.setItem("pressy-font-size",String(ze)),ee(ze),ze})},[ee]),j=D(y=>{const B=y.target;if(!B.closest(".pressy-page-footer, .pressy-toc-backdrop, .pressy-toc-toggle")&&!B.closest('a, button, input, select, textarea, [role="button"]')){if(C||S){$(!1),x(!1);return}v?(p(!1),b.current&&clearTimeout(b.current)):k()}},[v,C,S,k]);return M(()=>{l&&l().then(y=>{y&&y.scrollPosition>0&&window.scrollTo(0,y.scrollPosition)})},[]),M(()=>{if(!s)return;const y=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{s({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",y,{passive:!0}),()=>{window.removeEventListener("scroll",y),a.current&&clearTimeout(a.current)}},[s]),M(()=>{if(!s)return;const y=()=>{s({page:0,totalPages:0,scrollPosition:window.scrollY})},B=()=>{document.visibilityState==="hidden"&&y()};return window.addEventListener("beforeunload",y),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("beforeunload",y),document.removeEventListener("visibilitychange",B)}},[s]),o("div",{class:"pressy-reader",onClick:j,children:[o("main",{class:"pressy-reader-main",children:o("article",{class:`pressy-prose ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:e})}),o(Ar,{}),o(go,{prev:r,next:n}),o(Or,{}),S&&u&&o("div",{class:"pressy-toc-backdrop pressy-toc-backdrop--scroll",onClick:y=>{y.stopPropagation(),x(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:y=>y.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:y=>{y.stopPropagation(),x(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:[o("a",{href:f&&f.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>{sessionStorage.setItem("pressy-internal-nav","1"),x(!1)},children:[o("span",{class:"pressy-toc-item-num",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:o("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),o("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),u.map((y,B)=>o("a",{href:`${f||""}/${y.slug}`,class:`pressy-toc-item ${y.slug===d?"pressy-toc-item--active":""}`,onClick:()=>x(!1),children:[o("span",{class:"pressy-toc-item-num",children:[B+1,"."]}),o("span",{class:"pressy-toc-item-title",children:y.title})]},y.slug))]})]})}),o("div",{class:`pressy-page-footer pressy-page-footer--scroll ${v||C||S?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-footer-row",children:[u&&u.length>0&&o("button",{class:"pressy-toc-toggle",onClick:y=>{y.stopPropagation(),$(!1),x(!S)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:y=>{y.stopPropagation(),u&&u.length>0&&($(!1),x(!S))},children:t}),o(Hr,{offlineProps:g}),o("button",{class:"pressy-settings-toggle",onClick:y=>{y.stopPropagation(),x(!1),$(!C)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${C?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(y=>o("button",{class:`pressy-theme-btn ${q===y.id?"pressy-theme-btn--active":""}`,onClick:B=>{B.stopPropagation(),oe(y.id)},children:[y.icon,o("span",{children:y.label})]},y.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:y=>{y.stopPropagation(),J(-.1)},disabled:Z<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(Z*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:y=>{y.stopPropagation(),J(.1)},disabled:Z>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]})]}),o("style",{children:mo})]})}var vo=`
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
`;function _o({title:e}){return o("div",{class:"pressy-chapter-divider",children:o("h2",{class:"pressy-chapter-divider-title",children:e})})}function bo({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:s,onRestoreProgress:l,bookProgressPercent:u,initialContent:f,chapterMapData:d,currentChapterSlug:g,allChapters:a,bookBasePath:v,onChapterChange:p,mdxComponents:b,offlineProps:C}){const $=O(null),S=O(null),x=O(null),[k,q]=A(0),[T,Z]=A(1),he=O(1);he.current=T;const[ee,oe]=A(!1),J=O(!1),j=O(null),y=O(!1),B=O(typeof window<"u"&&new URLSearchParams(window.location.search).get("page")==="last"),[ze,Le]=A(B.current||!!l),[G,Ht]=A([]),[Y,Fr]=A([]),[K,It]=A(g||""),ct=O(new Set),V=!!(d&&f&&g&&a);M(()=>{if(V&&f&&g){const c=a.find(h=>h.slug===g);Ht([{slug:g,title:(c==null?void 0:c.title)||g,Content:f}]),It(g)}},[]),M(()=>{if(B.current){const c=new URL(window.location.href);c.searchParams.delete("page"),history.replaceState(null,"",c.pathname)}},[]);const[ne,De]=A(!1),[te,fe]=A(!1),[Ur,Yr]=A(()=>typeof localStorage<"u"&&localStorage.getItem("pressy-theme")||"light"),[Re,Vr]=A(()=>{if(typeof localStorage<"u"){const c=localStorage.getItem("pressy-font-size");return c?parseFloat(c):1}return 1}),ut=D(c=>{c===1?document.documentElement.style.removeProperty("--font-size-base"):document.documentElement.style.setProperty("--font-size-base",`calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${c})`)},[]);M(()=>{Re!==1&&ut(Re)},[]),M(()=>{var m;const c=$.current;if(!c)return;const h=()=>{c.style.setProperty("--app-height",`${window.innerHeight}px`)};return h(),window.addEventListener("resize",h),(m=window.visualViewport)==null||m.addEventListener("resize",h),()=>{var _;window.removeEventListener("resize",h),(_=window.visualViewport)==null||_.removeEventListener("resize",h)}},[]);const Xr=D(c=>{Yr(c),localStorage.setItem("pressy-theme",c);const h=c==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":c;document.documentElement.setAttribute("data-theme",h)},[]),[Bt,we]=A(!1),[jt,xe]=A(0),[Nt,se]=A(null),dt=O(0),Wt=O(0),ft=O(0),pt=O(0),Fe=O(0),Ue=O(!1),Me=O(!1),Dt=D(()=>{if(!V)return;const c=x.current,h=S.current;if(!c||!h)return;const m=h.clientWidth;if(m===0)return;const _=c.querySelectorAll(".pressy-chapter-section"),w=[];_.forEach(P=>{const E=P.getAttribute("data-chapter-slug")||"",R=P.offsetLeft,N=P.scrollWidth,W=Math.floor(R/m),ce=Math.max(W,Math.ceil((R+N)/m)-1);w.push({slug:E,startPage:W,endPage:ce})}),Fr(w)},[V]),ie=D(()=>{const c=x.current,h=S.current;if(!c||!h)return;const m=h.clientWidth;if(m===0)return;c.style.columnWidth=`${m}px`,c.scrollWidth;const _=Math.max(1,Math.round(c.scrollWidth/m));Z(_),oe(!0),q(w=>Math.min(w,_-1)),Dt()},[Dt]),Ft=D(c=>{Vr(h=>{const m=Math.round(Math.max(.8,Math.min(1.5,h+c))*10)/10;return localStorage.setItem("pressy-font-size",String(m)),ut(m),setTimeout(()=>ie(),100),m})},[ut,ie]);M(()=>{const c=S.current;if(!c)return;const h=setTimeout(ie,50),m=new ResizeObserver(()=>{ie()});return m.observe(c),()=>{clearTimeout(h),m.disconnect()}},[ie]),M(()=>{if(G.length>0){const c=setTimeout(ie,50);return()=>clearTimeout(c)}},[G.length,ie]),M(()=>{const c=x.current;if(!c)return;const h=c.querySelectorAll("img");if(h.length===0)return;const m=()=>ie();return h.forEach(_=>{_.complete||(_.addEventListener("load",m),_.addEventListener("error",m))}),()=>{h.forEach(_=>{_.removeEventListener("load",m),_.removeEventListener("error",m)})}},[ie,G.length]),M(()=>{if(!(J.current||!ee)){if(B.current){B.current=!1,y.current=!0,q(T-1),J.current=!0,Le(!1);return}if(!l){J.current=!0,Le(!1);return}l().then(c=>{if(J.current){Le(!1);return}const h=he.current;if(!c||c.page<=0){J.current=!0,Le(!1);return}let m;if(c.totalPages<=1||Math.abs(c.totalPages-h)<=2)m=c.page;else{const w=c.page/(c.totalPages-1);m=Math.round(w*(h-1))}const _=Math.max(0,Math.min(m,h-1));y.current=!0,q(_),J.current=!0,Le(!1)})}},[ee,T,l]),M(()=>{const c=x.current,h=S.current;if(!c||!h)return;const _=k*h.clientWidth-jt;Bt||y.current?(c.style.transition="none",y.current=!1):c.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",c.style.transform=`translateX(-${_}px)`},[k,jt,Bt]),M(()=>{const c=x.current,h=S.current;if(!c||!h)return;const m=h.getBoundingClientRect();c.querySelectorAll("a[href], button, input, select, textarea, [tabindex]").forEach(w=>{const P=w.getBoundingClientRect();if(P.left>=m.left-1&&P.right<=m.right+1){const R=w.getAttribute("data-original-tabindex");R!==null&&(R===""?w.removeAttribute("tabindex"):w.setAttribute("tabindex",R),w.removeAttribute("data-original-tabindex"))}else w.hasAttribute("data-original-tabindex")||w.setAttribute("data-original-tabindex",w.getAttribute("tabindex")||""),w.setAttribute("tabindex","-1")})},[k,T]),M(()=>{var N;if(!V||!d||Y.length===0)return;const c=Y.find(W=>W.slug===K);if(!c||c.endPage-k>2)return;const{chapterOrder:m,chapterMap:_}=d,w=(N=G[G.length-1])==null?void 0:N.slug,P=m.indexOf(w);if(P===-1||P>=m.length-1)return;const E=m[P+1];if(ct.current.has(E)||G.some(W=>W.slug===E))return;ct.current.add(E);const R=_[E];R&&R().then(W=>{const ce=W.default,pe=a.find(ue=>ue.slug===E);Ht(ue=>ue.some(qe=>qe.slug===E)?ue:[...ue,{slug:E,title:(pe==null?void 0:pe.title)||E,Content:ce}])}).catch(()=>{ct.current.delete(E)})},[k,K,Y,V,d,G,a]),M(()=>{if(!V||Y.length===0||!v)return;const c=Y.find(w=>k>=w.startPage&&k<=w.endPage);if(!c||c.slug===K)return;const h=K;It(c.slug);const m=`${v}/${c.slug}`;history.replaceState(null,"",m);const _=a==null?void 0:a.find(w=>w.slug===c.slug);if(_&&(document.title=document.title.replace(/^[^|]+/,_.title+" ")),p&&h){const w=Y.find(P=>P.slug===h);if(w){const P=w.endPage-w.startPage+1;p(h,P-1,P)}}},[k,Y,K,V,v,a,p]),M(()=>{if(!(!s||!J.current))return j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{if(V&&Y.length>0){const c=Y.find(h=>h.slug===K);if(c){const h=k-c.startPage,m=c.endPage-c.startPage+1;s({page:h,totalPages:m,scrollPosition:0,activeChapterSlug:K})}}else s({page:k,totalPages:T,scrollPosition:0})},300),()=>{j.current&&clearTimeout(j.current)}},[k,T,s,V,Y,K]),M(()=>{if(!s)return;const c=()=>{if(V&&Y.length>0){const m=Y.find(_=>_.slug===K);if(m){const _=k-m.startPage,w=m.endPage-m.startPage+1;s({page:_,totalPages:w,scrollPosition:0,activeChapterSlug:K})}}else s({page:k,totalPages:T,scrollPosition:0})},h=()=>{document.visibilityState==="hidden"&&c()};return window.addEventListener("beforeunload",c),document.addEventListener("visibilitychange",h),()=>{window.removeEventListener("beforeunload",c),document.removeEventListener("visibilitychange",h)}},[k,T,s,V,Y,K]);const ae=(()=>{var _;if(!V||!d)return n;const{chapterOrder:c}=d,h=(_=G[G.length-1])==null?void 0:_.slug;if(!(c.indexOf(h)<c.length-1))return v?{slug:v,title:"Table of Contents"}:n})(),le=(()=>{var P;if(!V||!d)return r;const{chapterOrder:c}=d,h=(P=G[0])==null?void 0:P.slug,m=c.indexOf(h);if(m<=0)return r;const _=c[m-1],w=a==null?void 0:a.find(E=>E.slug===_);return{slug:`${v}/${_}?page=last`,title:(w==null?void 0:w.title)||_}})(),ge=D(c=>{B.current=!1;const h=Math.max(0,Math.min(c,T-1));q(h)},[T]),ke=D(()=>{if(k>=T-1){ae&&(sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ae.slug);return}ge(k+1)},[k,T,ae,ge]),Se=D(()=>{if(k<=0){le&&(sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=le.slug);return}ge(k-1)},[k,le,ge]),[Ye,me]=A(!1),X=O(null),ht=D(()=>{me(!0),X.current&&clearTimeout(X.current),X.current=setTimeout(()=>me(!1),3e3)},[]),Ut=O(0),Ae=O(null),Yt=D(()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})},[]),Ve=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,qr=D(c=>{const h=c.target;if(h.closest(".pressy-settings-panel, .pressy-settings-toggle, .pressy-toc-drawer, .pressy-toc-toggle")||h.closest('a, button, input, select, textarea, [role="button"]'))return;if(ne||te){De(!1),fe(!1);return}if(Ve){Ye?(me(!1),X.current&&clearTimeout(X.current)):ht();return}const m=$.current;if(!m)return;const _=m.getBoundingClientRect(),w=c.clientX-_.left,P=_.width*.15;if(w<P)Se();else if(w>_.width-P)ke();else{const E=Date.now(),R=E-Ut.current;Ut.current=E,R<300?(Ae.current&&clearTimeout(Ae.current),Yt()):(Ae.current&&clearTimeout(Ae.current),Ae.current=setTimeout(()=>{Ye?(me(!1),X.current&&clearTimeout(X.current)):ht()},300))}},[ke,Se,Ye,Ve,ne,te,ht,Yt]),[Vt,Xe]=A(null),Jr=D(c=>{if(Ve)return;const h=$.current;if(!h)return;const m=h.getBoundingClientRect(),_=c.clientX-m.left,w=c.clientY-m.top,P=m.width/3;_<P?Xe("left"):_>P*2?Xe("right"):Xe(null),w>m.height*.75?(me(!0),X.current&&clearTimeout(X.current)):!ne&&!te&&(X.current&&clearTimeout(X.current),X.current=setTimeout(()=>me(!1),600))},[Ve,ne,te]),Gr=D(()=>{Xe(null),!ne&&!te&&(X.current&&clearTimeout(X.current),X.current=setTimeout(()=>me(!1),600))},[ne,te]);M(()=>{const c=h=>{const m=h.target.tagName;m==="INPUT"||m==="TEXTAREA"||m==="SELECT"||(h.key==="ArrowRight"||h.key===" "?(h.preventDefault(),ke()):h.key==="ArrowLeft"?(h.preventDefault(),Se()):h.key==="Home"?(h.preventDefault(),ge(0)):h.key==="End"&&(h.preventDefault(),ge(T-1)))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[ke,Se,ge,T]),M(()=>{const c=$.current;if(!c)return;const h=P=>{const E=P.touches[0];dt.current=E.clientX,Wt.current=E.clientY,ft.current=E.clientX,pt.current=performance.now(),Fe.current=0,Ue.current=!1,Me.current=!1},m=P=>{const E=P.touches[0],R=E.clientX-dt.current,N=E.clientY-Wt.current;if(!Ue.current)if(Math.abs(R)>Math.abs(N)&&Math.abs(R)>10)Ue.current=!0;else return Math.abs(N)>Math.abs(R)&&Math.abs(N)>10,void 0;P.preventDefault();const W=performance.now(),ce=W-pt.current;if(ce>0){const gt=(E.clientX-ft.current)/ce;Fe.current=.6*gt+.4*Fe.current}ft.current=E.clientX,pt.current=W;let pe=R;const ue=k===0,qe=k>=T-1;if(ue&&R>0||qe&&R<0){const gt=R>0?1:-1,Zr=Math.abs(R);pe=gt*Math.sqrt(Zr)*5,R>40&&ue&&le?se("prev"):R<-40&&qe&&ae?se("next"):se(null)}else se(null);Me.current=!0,we(!0),xe(pe)},_=P=>{if(!Ue.current||!Me.current){we(!1),xe(0),se(null);return}const E=P.changedTouches[0].clientX-dt.current,R=Fe.current,N=50,W=.3,ce=80,pe=k===0;if(k>=T-1&&E<-ce&&ae){we(!1),xe(0),se(null),sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=ae.slug;return}if(pe&&E>ce&&le){we(!1),xe(0),se(null),sessionStorage.setItem("pressy-internal-nav","1"),window.location.href=le.slug;return}E<-N||R<-W?ke():(E>N||R>W)&&Se(),Me.current=!1,we(!1),xe(0),se(null)},w=()=>{Me.current=!1,we(!1),xe(0),se(null)};return c.addEventListener("touchstart",h,{passive:!0}),c.addEventListener("touchmove",m,{passive:!1}),c.addEventListener("touchend",_,{passive:!0}),c.addEventListener("touchcancel",w,{passive:!0}),()=>{c.removeEventListener("touchstart",h),c.removeEventListener("touchmove",m),c.removeEventListener("touchend",_),c.removeEventListener("touchcancel",w)}},[k,T,ke,Se,ae,le]),(()=>{if(!V||Y.length===0)return{chapterPage:k,chapterTotalPages:T};const c=Y.find(h=>h.slug===K);return c?{chapterPage:k-c.startPage,chapterTotalPages:c.endPage-c.startPage+1}:{chapterPage:k,chapterTotalPages:T}})();const Kr=(()=>{var R;if(!a||a.length===0)return T>1?k/(T-1)*100:100;const c=a.reduce((N,W)=>N+(W.wordCount||0),0);if(c===0)return 0;const h=((R=G[0])==null?void 0:R.slug)||K;let m=0,_=0,w=!1;for(const N of a)if(N.slug===h&&(w=!0),!w)m+=N.wordCount||0;else if(G.some(W=>W.slug===N.slug))_+=N.wordCount||0;else break;const P=T>1?k/(T-1):0,E=m+P*_;return Math.min(100,E/c*100)})();return o("div",{class:"pressy-reader pressy-reader--paginated",ref:$,onClick:qr,onMouseMove:Jr,onMouseLeave:Gr,children:[o("div",{class:"pressy-paginated-viewport",ref:S,style:ze?{opacity:0}:{opacity:1,transition:"opacity 0.15s ease"},children:o("article",{ref:x,class:`pressy-prose pressy-prose--paginated ${i?"":"no-drop-cap"}`,"data-drop-cap":i,children:V&&G.length>0?G.map(c=>o("section",{class:"pressy-chapter-section","data-chapter-slug":c.slug,children:[o(_o,{title:c.title}),o(c.Content,{components:b||{}})]},c.slug)):e})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--prev ${Vt==="left"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"15 18 9 12 15 6"})})}),o("div",{class:`pressy-nav-arrow pressy-nav-arrow--next ${Vt==="right"?"pressy-nav-arrow--visible":""}`,children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("polyline",{points:"9 6 15 12 9 18"})})}),Nt==="prev"&&le&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-arrow",children:"←"}),o("span",{class:"pressy-chapter-hint-text",children:le.title})]}),Nt==="next"&&ae&&o("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[o("span",{class:"pressy-chapter-hint-text",children:ae.title}),o("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),te&&a&&o("div",{class:"pressy-toc-backdrop",onClick:c=>{c.stopPropagation(),fe(!1)},children:o("div",{class:"pressy-toc-drawer",onClick:c=>c.stopPropagation(),children:[o("div",{class:"pressy-toc-header",children:[o("span",{class:"pressy-toc-title",children:"Contents"}),o("button",{class:"pressy-toc-close",onClick:c=>{c.stopPropagation(),fe(!1)},"aria-label":"Close table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"18",height:"18",children:[o("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),o("nav",{class:"pressy-toc-list",children:[o("a",{href:v&&v.replace(/\/books\/[^/]+$/,"")||"/",class:"pressy-toc-item pressy-toc-item--home",onClick:()=>{sessionStorage.setItem("pressy-internal-nav","1"),fe(!1)},children:[o("span",{class:"pressy-toc-item-num",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",width:"14",height:"14",children:o("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"})})}),o("span",{class:"pressy-toc-item-title",children:t||"Home"})]}),a.map((c,h)=>o("a",{href:`${v||""}/${c.slug}`,class:`pressy-toc-item ${c.slug===(K||g)?"pressy-toc-item--active":""}`,onClick:()=>fe(!1),children:[o("span",{class:"pressy-toc-item-num",children:[h+1,"."]}),o("span",{class:"pressy-toc-item-title",children:c.title})]},c.slug))]})]})}),o("div",{class:`pressy-page-footer ${Ye||ne||te?"pressy-page-footer--visible":""}`,children:[o("div",{class:"pressy-progress-bar",children:o("div",{class:"pressy-progress-fill",style:{width:`${Kr}%`}})}),o("div",{class:"pressy-footer-row",children:[a&&a.length>0&&o("button",{class:"pressy-toc-toggle",onClick:c=>{c.stopPropagation(),De(!1),fe(!te)},"aria-label":"Table of contents",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),t&&o("button",{class:"pressy-footer-title",onClick:c=>{c.stopPropagation(),a&&a.length>0&&(De(!1),fe(!te))},children:t}),o(Hr,{offlineProps:C}),o("button",{class:"pressy-settings-toggle",onClick:c=>{c.stopPropagation(),fe(!1),De(!ne)},"aria-label":"Settings",children:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",width:"18",height:"18",children:[o("circle",{cx:"12",cy:"12",r:"3"}),o("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]}),o("div",{class:`pressy-settings-panel ${ne?"pressy-settings-panel--open":""}`,children:[o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Theme"}),o("div",{class:"pressy-theme-options",children:[{id:"light",label:"Light",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},{id:"dark",label:"Dark",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},{id:"system",label:"System",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})},{id:"sepia",label:"Sepia",icon:o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"16",height:"16",children:[o("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}].map(c=>o("button",{class:`pressy-theme-btn ${Ur===c.id?"pressy-theme-btn--active":""}`,onClick:h=>{h.stopPropagation(),Xr(c.id)},children:[c.icon,o("span",{children:c.label})]},c.id))})]}),o("div",{class:"pressy-settings-section",children:[o("div",{class:"pressy-settings-label",children:"Font Size"}),o("div",{class:"pressy-font-size-controls",children:[o("button",{class:"pressy-font-size-btn",onClick:c=>{c.stopPropagation(),Ft(-.1)},disabled:Re<=.8,"aria-label":"Decrease font size",children:"A-"}),o("span",{class:"pressy-font-size-value",children:[Math.round(Re*100),"%"]}),o("button",{class:"pressy-font-size-btn",onClick:c=>{c.stopPropagation(),Ft(.1)},disabled:Re>=1.5,"aria-label":"Increase font size",children:"A+"})]})]})]})]}),o(Ar,{}),o(Or,{}),o("style",{children:vo})]})}function At({children:e,bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i=!0,paginationMode:s="scroll",onSaveProgress:l,onRestoreProgress:u,bookProgressPercent:f,initialContent:d,chapterMapData:g,currentChapterSlug:a,allChapters:v,bookBasePath:p,onChapterChange:b,mdxComponents:C,offlineProps:$}){return s==="paginated"?o(bo,{bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:l,onRestoreProgress:u,bookProgressPercent:f,initialContent:d,chapterMapData:g,currentChapterSlug:a,allChapters:v,bookBasePath:p,onChapterChange:b,mdxComponents:C,offlineProps:$,children:e}):o(yo,{bookTitle:t,prevChapter:r,nextChapter:n,showDropCap:i,onSaveProgress:l,onRestoreProgress:u,allChapters:v,bookBasePath:p,currentChapterSlug:a,offlineProps:$,children:e})}function wo({id:e,children:t}){const r=ve(!1);return o("span",{class:"pressy-footnote-wrapper",children:[o("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&o("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,o("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),o("style",{children:`
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
      `})]})}function xo({children:e,title:t}){return o("aside",{class:"pressy-aside",children:[t&&o("strong",{class:"pressy-aside-title",children:t}),o("div",{class:"pressy-aside-content",children:e}),o("style",{children:`
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
      `})]})}var ko={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},So={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function $o({type:e="note",title:t,children:r}){return o("div",{class:`pressy-callout pressy-callout-${e}`,children:[o("div",{class:"pressy-callout-header",children:[o("span",{class:"pressy-callout-icon",children:ko[e]}),o("strong",{class:"pressy-callout-title",children:t||So[e]})]}),o("div",{class:"pressy-callout-content",children:r}),o("style",{children:`
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
      `})]})}var Co={Footnote:wo,Aside:xo,Figure:sr,Callout:$o,SceneBreak:ir,img:sr,hr:ir},Po={};function nt(){return{...Co,...Po}}var Ir="pressy-cached-books",yt=re("online"),st=re(null),vt=re(!1),We=re(null);function Eo(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(Ir);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var Q=re(Eo());typeof window<"u"&&(yt.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{yt.value="online"}),window.addEventListener("offline",()=>{yt.value="offline"}));function To(){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),We.value=e}),window.addEventListener("appinstalled",()=>{We.value=null})}async function zo(){const e=We.value;if(!e)return!1;e.prompt();const{outcome:t}=await e.userChoice;return We.value=null,t==="accepted"}async function Lo(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",Ro),navigator.serviceWorker.controller?vt.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{vt.value=!0}),n.addEventListener("updatefound",()=>{const i=n.installing;i&&i.addEventListener("statechange",()=>{i.state==="activated"&&(vt.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function Ie(){try{localStorage.setItem(Ir,JSON.stringify([...Q.value]))}catch{}}function Ro(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:i}=e.data;st.value={bookSlug:r,current:n,total:i}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;st.value=null;const n=new Set(Q.value);n.add(r),Q.value=n,Ie()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const i of r){const s=i.match(/\/books\/([^/]+)/);s&&n.add(s[1])}Q.value=n,Ie()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(Q.value);n.delete(r),Q.value=n,Ie()}}async function Br(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(i=>i.startsWith("http")?i:`${window.location.origin}${i}`);st.value={bookSlug:e,current:0,total:r.length};const n=new Set(Q.value);return n.add(e),Q.value=n,Ie(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}function Mo(e){return Q.value.has(e)}async function Ao(e){const t=new Set(Q.value);if(t.delete(e),Q.value=t,Ie(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const i of n)i.url.includes(`/books/${e}`)&&await r.delete(i);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var ar=re("/"),jr=re("light"),lr=re(!navigator.onLine),Oo="pressy",Ho=1,Pe="reading-progress",cr="unlocks",Ke=null;async function Ot(){return Ke||new Promise((e,t)=>{const r=indexedDB.open(Oo,Ho);r.onerror=()=>t(r.error),r.onsuccess=()=>{Ke=r.result,e(Ke)},r.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(Pe)||i.createObjectStore(Pe,{keyPath:"chapterSlug"}),i.objectStoreNames.contains(cr)||i.createObjectStore(cr,{keyPath:"bookSlug"})}})}async function ur(e){const t=await Ot();return new Promise((r,n)=>{const l=t.transaction(Pe,"readwrite").objectStore(Pe).put(e);l.onsuccess=()=>r(),l.onerror=()=>n(l.error)})}async function et(){const e=await Ot();return new Promise((t,r)=>{const s=e.transaction(Pe,"readonly").objectStore(Pe).getAll();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>r(s.error)})}function Nr(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function dr(e){jr.value=e,localStorage.setItem("pressy-theme",e);const t=e==="system"?Nr():e;document.documentElement.setAttribute("data-theme",t)}function Io(){const e=localStorage.getItem("pressy-theme");e?dr(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&dr("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{jr.value==="system"&&document.documentElement.setAttribute("data-theme",Nr())})}function Bo(){window.addEventListener("online",()=>{lr.value=!1}),window.addEventListener("offline",()=>{lr.value=!0})}function jo({book:e}){const[t,r]=A(null);return M(()=>{if(e.chapters.length===0)return;const n=`${U}/books/${e.slug}/${e.chapters[0].slug}`;try{const i=localStorage.getItem("pressy-last-read");if(i){const{bookSlug:s,chapterSlug:l}=JSON.parse(i);if(s===e.slug&&e.chapters.some(u=>u.slug===l)){r({label:"Continue Reading",href:`${U}/books/${e.slug}/${l}`});return}}}catch{}et().then(i=>{const s=new Map(i.map(u=>[u.chapterSlug,u]));let l=null;for(const u of e.chapters){const f=s.get(u.slug);if(!f)continue;!(f.totalPages>0&&f.page>=f.totalPages-1)&&f.page>0&&(l=u)}r(l?{label:"Continue Reading",href:`${U}/books/${e.slug}/${l.slug}`}:{label:"Start Reading",href:n})}).catch(()=>{r({label:"Start Reading",href:n})})},[e]),t?o("a",{href:t.href,class:"pressy-cta",children:t.label}):null}function No(){return We.value?o("button",{class:"pressy-cta pressy-cta-secondary",onClick:()=>zo(),children:"Install"}):null}function Wr(e,t=[]){const r=e.chapters.reduce((u,f)=>u+(f.wordCount||0),0),n=Math.ceil(r/200),i=e.chapters.length,s=e.metadata.publishDate?new Date(e.metadata.publishDate).getFullYear():null,l=r.toLocaleString();return o("div",{class:"pressy-home",children:[o("div",{class:"pressy-hero",children:[e.coverUrl&&o("img",{src:U+e.coverUrl,alt:`${e.metadata.title} cover`,class:"pressy-hero-cover"}),o("div",{class:"pressy-hero-text",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:e.metadata.title}),o("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&o("p",{class:"pressy-home-desc",children:e.metadata.description})]}),r>0&&o("div",{class:"pressy-stats",children:[o("span",{children:[i," chapter",i!==1?"s":""]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:[l," words"]}),o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:["~",n," min"]}),s&&o(_e,{children:[o("span",{class:"pressy-stats-sep",children:"·"}),o("span",{children:["First published ",s]})]})]}),i>0&&o("div",{class:"pressy-cta-group",children:[o(jo,{book:e}),o(No,{})]})]})]}),t.length>0&&o("section",{class:"pressy-home-section pressy-fade-sections",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:t.map(u=>o("a",{href:`${U}/articles/${u.slug}`,class:"pressy-chapter-link",children:u.metadata.title}))})]}),o("style",{children:Dr})]})}function _t(e){var r,n;if(e.books.length===1)return Wr(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return o("div",{class:"pressy-home",children:[o("header",{class:"pressy-home-header",children:[o("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&o("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Books"}),o("nav",{class:"pressy-chapter-list",children:e.books.map(i=>o("a",{href:`${U}/books/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),e.articles.length>0&&o("section",{class:"pressy-home-section",children:[o("h2",{children:"Articles"}),o("nav",{class:"pressy-chapter-list",children:e.articles.map(i=>o("a",{href:`${U}/articles/${i.slug}`,class:"pressy-chapter-link",children:i.metadata.title}))})]}),o("style",{children:Dr})]})}function bt(e,t,r,n,i){const s=e.chapters.reduce((f,d)=>f+(d.wordCount||0),0);if(s===0)return 0;const l=new Map(i.map(f=>[f.chapterSlug,f]));let u=0;for(const f of e.chapters){const d=f.wordCount||0;if(f.slug===t)n>0&&(u+=r/Math.max(1,n-1)*d);else{const g=l.get(f.slug);if(!g)continue;g.totalPages>0&&g.page>=g.totalPages-1?u+=d:g.page>0&&g.totalPages>0&&(u+=g.page/g.totalPages*d)}}return Math.min(100,u/s*100)}function Wo({book:e,chapterSlug:t,chapter:r,prevChapter:n,nextChapter:i,paginationMode:s,Content:l,chapterMapData:u}){const[f,d]=A(void 0);M(()=>{et().then(p=>{const b=bt(e,t,0,0,p);d(b)})},[e,t]);const g=p=>{const b=p.activeChapterSlug||t;localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:b,page:p.page,totalPages:p.totalPages,scrollPosition:p.scrollPosition})),ur({chapterSlug:b,page:p.page,totalPages:p.totalPages,scrollPosition:p.scrollPosition,timestamp:Date.now()}),p.totalPages>0&&et().then(C=>{const $=bt(e,b,p.page,p.totalPages,C);d($)})},a=async()=>{try{const p=localStorage.getItem("pressy-last-read");if(p){const b=JSON.parse(p);if(b.chapterSlug===t&&b.page>0)return{page:b.page,totalPages:b.totalPages,scrollPosition:b.scrollPosition||0}}}catch{}return null},v=(p,b,C)=>{ur({chapterSlug:p,page:b,totalPages:C,scrollPosition:0,timestamp:Date.now()}),localStorage.setItem("pressy-last-read",JSON.stringify({bookSlug:e.slug,chapterSlug:p,page:b,totalPages:C})),et().then($=>{const S=bt(e,p,b,C,$);d(S)})};return M(()=>{if(n){const p=document.createElement("link");return p.rel="prefetch",p.href=n.slug,document.head.appendChild(p),()=>{document.head.removeChild(p)}}},[n]),o(At,{title:(r==null?void 0:r.title)||t,bookTitle:e.metadata.title,chapterSlug:t,prevChapter:n,nextChapter:i,paginationMode:s,onSaveProgress:g,onRestoreProgress:a,bookProgressPercent:f,initialContent:l,chapterMapData:u,currentChapterSlug:t,allChapters:e.chapters.map(p=>({slug:p.slug,title:p.title,wordCount:p.wordCount})),bookBasePath:`${U}/books/${e.slug}`,onChapterChange:v,mdxComponents:nt(),offlineProps:{bookSlug:e.slug,chapterUrls:e.chapters.map(p=>`${U}/books/${e.slug}/${p.slug}`),cachedBooks:Q,cacheProgress:st,onDownload:Br,onRemove:Ao},children:o(l,{components:nt()})})}function Do(e,t,r,n,i){const s=t.split("/"),l=s[2],u=s[3],f=e.books.find(C=>C.slug===l),d=f?f.chapters.findIndex(C=>C.slug===u):-1,g=f==null?void 0:f.chapters[d],a=C=>`${U}/books/${l}/${C.slug}`,v=f&&d>0?{slug:a(f.chapters[d-1]),title:f.chapters[d-1].title}:f?{slug:`${U}/books/${l}`,title:f.metadata.title}:void 0,p=f&&d>=0&&d<f.chapters.length-1?{slug:a(f.chapters[d+1]),title:f.chapters[d+1].title}:f?{slug:`${U}/books/${l}`,title:f.metadata.title}:void 0,b=r;return f?o(Wo,{book:f,chapterSlug:u,chapter:g,prevChapter:v,nextChapter:p,paginationMode:n,Content:b,chapterMapData:i}):o(At,{title:(g==null?void 0:g.title)||u,prevChapter:v,nextChapter:p,paginationMode:n,children:o(b,{components:nt()})})}function Fo(e,t,r){const n=t.split("/")[2],i=e.articles.find(l=>l.slug===n),s=r;return o(At,{title:(i==null?void 0:i.metadata.title)||n,children:o(s,{components:nt()})})}var Dr=`
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
`;function Uo(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const i=r.indexOf(n);return i>0?r.slice(0,i):""}var U="";function Vo(e,t,r){var l;U=Uo(e.route),ar.value=e.route;const n=!sessionStorage.getItem("pressy-session-active");sessionStorage.setItem("pressy-session-active","1"),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&sessionStorage.removeItem("pressy-session-active")});const i=sessionStorage.getItem("pressy-internal-nav");if(sessionStorage.removeItem("pressy-internal-nav"),n&&!i&&(e.routeType==="home"||e.routeType==="book")){const u=localStorage.getItem("pressy-last-read");if(u)try{const{bookSlug:f,chapterSlug:d}=JSON.parse(u),g=e.manifest.books.find(a=>a.slug===f);if(g!=null&&g.chapters.some(a=>a.slug===d)){window.location.replace(`${U}/books/${f}/${d}`);return}}catch{}}Io(),Bo(),To(),Ot(),Lo(U),window.addEventListener("appinstalled",()=>{for(const u of e.manifest.books){if(Mo(u.slug))continue;const f=u.chapters.map(d=>`${U}/books/${u.slug}/${d.slug}`);Br(u.slug,f)}}),window.addEventListener("popstate",()=>{ar.value=window.location.pathname}),document.addEventListener("click",u=>{const f=u.target.closest("a");if(!f)return;const d=f.getAttribute("href");if(d&&!(d.startsWith("http")||d.startsWith("#"))&&d.startsWith(e.route+"#")){u.preventDefault();const g=d.slice(d.indexOf("#")),a=document.querySelector(g);a&&a.scrollIntoView({behavior:"smooth"});return}});let s;switch(e.routeType){case"home":s=_t(e.manifest);break;case"book":{const u=e.route.split("/")[2],f=e.manifest.books.find(d=>d.slug===u);s=f?Wr(f):o("div",{children:"Book not found"});break}case"chapter":s=t?Do(e.manifest,e.route,t,(l=e.pagination)==null?void 0:l.defaultMode,r):o("div",{children:"Loading..."});break;case"article":s=t?Fo(e.manifest,e.route,t):o("div",{children:"Loading..."});break;case"books":s=_t(e.manifest);break;case"articles":s=_t(e.manifest);break;default:s=o("div",{children:"Page not found"})}so(s,document.getElementById("app"))}export{Vo as h,_e as k,o as u};
