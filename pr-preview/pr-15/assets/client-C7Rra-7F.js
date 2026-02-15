var Xe,S,qt,Vt,le,Ct,Kt,Gt,Jt,ft,at,lt,$e={},Zt=[],Pr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ye=Array.isArray;function Q(e,t){for(var r in t)e[r]=t[r];return e}function pt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function $r(e,t,r){var n,o,s,a={};for(s in t)s=="key"?n=t[s]:s=="ref"?o=t[s]:a[s]=t[s];if(arguments.length>2&&(a.children=arguments.length>3?Xe.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)a[s]===void 0&&(a[s]=e.defaultProps[s]);return De(e,a,n,o,null)}function De(e,t,r,n,o){var s={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++qt,__i:-1,__u:0};return o==null&&S.vnode!=null&&S.vnode(s),s}function ce(e){return e.children}function xe(e,t){this.props=e,this.context=t}function he(e,t){if(t==null)return e.__?he(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?he(e):null}function Qt(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Qt(e)}}function Et(e){(!e.__d&&(e.__d=!0)&&le.push(e)&&!He.__r++||Ct!=S.debounceRendering)&&((Ct=S.debounceRendering)||Kt)(He)}function He(){for(var e,t,r,n,o,s,a,l=1;le.length;)le.length>l&&le.sort(Gt),e=le.shift(),l=le.length,e.__d&&(r=void 0,n=void 0,o=(n=(t=e).__v).__e,s=[],a=[],t.__P&&((r=Q({},n)).__v=n.__v+1,S.vnode&&S.vnode(r),ht(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,s,o??he(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,rr(s,r,a),n.__e=n.__=null,r.__e!=o&&Qt(r)));He.__r=0}function er(e,t,r,n,o,s,a,l,d,c,p){var u,_,f,m,b,C,v,w=n&&n.__k||Zt,P=t.length;for(d=Cr(r,t,w,d,P),u=0;u<P;u++)(f=r.__k[u])!=null&&(_=f.__i==-1?$e:w[f.__i]||$e,f.__i=u,C=ht(e,f,_,o,s,a,l,d,c,p),m=f.__e,f.ref&&_.ref!=f.ref&&(_.ref&&_t(_.ref,null,f),p.push(f.ref,f.__c||m,f)),b==null&&m!=null&&(b=m),(v=!!(4&f.__u))||_.__k===f.__k?d=tr(f,d,e,v):typeof f.type=="function"&&C!==void 0?d=C:m&&(d=m.nextSibling),f.__u&=-7);return r.__e=b,d}function Cr(e,t,r,n,o){var s,a,l,d,c,p=r.length,u=p,_=0;for(e.__k=new Array(o),s=0;s<o;s++)(a=t[s])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[s]=De(null,a,null,null,null):Ye(a)?a=e.__k[s]=De(ce,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[s]=De(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[s]=a,d=s+_,a.__=e,a.__b=e.__b+1,l=null,(c=a.__i=Er(a,r,d,u))!=-1&&(u--,(l=r[c])&&(l.__u|=2)),l==null||l.__v==null?(c==-1&&(o>p?_--:o<p&&_++),typeof a.type!="function"&&(a.__u|=4)):c!=d&&(c==d-1?_--:c==d+1?_++:(c>d?_--:_++,a.__u|=4))):e.__k[s]=null;if(u)for(s=0;s<p;s++)(l=r[s])!=null&&!(2&l.__u)&&(l.__e==n&&(n=he(l)),or(l,l));return n}function tr(e,t,r,n){var o,s;if(typeof e.type=="function"){for(o=e.__k,s=0;o&&s<o.length;s++)o[s]&&(o[s].__=e,t=tr(o[s],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=he(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Er(e,t,r,n){var o,s,a,l=e.key,d=e.type,c=t[r],p=c!=null&&(2&c.__u)==0;if(c===null&&l==null||p&&l==c.key&&d==c.type)return r;if(n>(p?1:0)){for(o=r-1,s=r+1;o>=0||s<t.length;)if((c=t[a=o>=0?o--:s++])!=null&&!(2&c.__u)&&l==c.key&&d==c.type)return a}return-1}function Lt(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Pr.test(t)?r:r+"px"}function Oe(e,t,r,n,o){var s,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Lt(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||Lt(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(Jt,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=r,r?n?r.u=n.u:(r.u=ft,e.addEventListener(t,s?lt:at,s)):e.removeEventListener(t,s?lt:at,s);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Tt(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=ft++;else if(t.t<r.u)return;return r(S.event?S.event(t):t)}}}function ht(e,t,r,n,o,s,a,l,d,c){var p,u,_,f,m,b,C,v,w,P,Y,oe,I,U,se,T,ge,R=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),s=[l=t.__e=r.__e]),(p=S.__b)&&p(t);e:if(typeof R=="function")try{if(v=t.props,w="prototype"in R&&R.prototype.render,P=(p=R.contextType)&&n[p.__c],Y=p?P?P.props.value:p.__:n,r.__c?C=(u=t.__c=r.__c).__=u.__E:(w?t.__c=u=new R(v,Y):(t.__c=u=new xe(v,Y),u.constructor=R,u.render=Tr),P&&P.sub(u),u.state||(u.state={}),u.__n=n,_=u.__d=!0,u.__h=[],u._sb=[]),w&&u.__s==null&&(u.__s=u.state),w&&R.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Q({},u.__s)),Q(u.__s,R.getDerivedStateFromProps(v,u.__s))),f=u.props,m=u.state,u.__v=t,_)w&&R.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),w&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(w&&R.getDerivedStateFromProps==null&&v!==f&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(v,Y),t.__v==r.__v||!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(v,u.__s,Y)===!1){for(t.__v!=r.__v&&(u.props=v,u.state=u.__s,u.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(q){q&&(q.__=t)}),oe=0;oe<u._sb.length;oe++)u.__h.push(u._sb[oe]);u._sb=[],u.__h.length&&a.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(v,u.__s,Y),w&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(f,m,b)})}if(u.context=Y,u.props=v,u.__P=e,u.__e=!1,I=S.__r,U=0,w){for(u.state=u.__s,u.__d=!1,I&&I(t),p=u.render(u.props,u.state,u.context),se=0;se<u._sb.length;se++)u.__h.push(u._sb[se]);u._sb=[]}else do u.__d=!1,I&&I(t),p=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++U<25);u.state=u.__s,u.getChildContext!=null&&(n=Q(Q({},n),u.getChildContext())),w&&!_&&u.getSnapshotBeforeUpdate!=null&&(b=u.getSnapshotBeforeUpdate(f,m)),T=p,p!=null&&p.type===ce&&p.key==null&&(T=nr(p.props.children)),l=er(e,Ye(T)?T:[T],t,r,n,o,s,a,l,d,c),u.base=t.__e,t.__u&=-161,u.__h.length&&a.push(u),C&&(u.__E=u.__=null)}catch(q){if(t.__v=null,d||s!=null)if(q.then){for(t.__u|=d?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;s[s.indexOf(l)]=null,t.__e=l}else{for(ge=s.length;ge--;)pt(s[ge]);ct(t)}else t.__e=r.__e,t.__k=r.__k,q.then||ct(t);S.__e(q,t,r)}else s==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=Lr(r.__e,t,r,n,o,s,a,d,c);return(p=S.diffed)&&p(t),128&t.__u?void 0:l}function ct(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(ct)}function rr(e,t,r){for(var n=0;n<r.length;n++)_t(r[n],r[++n],r[++n]);S.__c&&S.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(s){s.call(o)})}catch(s){S.__e(s,o.__v)}})}function nr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Ye(e)?e.map(nr):Q({},e)}function Lr(e,t,r,n,o,s,a,l,d){var c,p,u,_,f,m,b,C=r.props||$e,v=t.props,w=t.type;if(w=="svg"?o="http://www.w3.org/2000/svg":w=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),s!=null){for(c=0;c<s.length;c++)if((f=s[c])&&"setAttribute"in f==!!w&&(w?f.localName==w:f.nodeType==3)){e=f,s[c]=null;break}}if(e==null){if(w==null)return document.createTextNode(v);e=document.createElementNS(o,w,v.is&&v),l&&(S.__m&&S.__m(t,s),l=!1),s=null}if(w==null)C===v||l&&e.data==v||(e.data=v);else{if(s=s&&Xe.call(e.childNodes),!l&&s!=null)for(C={},c=0;c<e.attributes.length;c++)C[(f=e.attributes[c]).name]=f.value;for(c in C)if(f=C[c],c!="children"){if(c=="dangerouslySetInnerHTML")u=f;else if(!(c in v)){if(c=="value"&&"defaultValue"in v||c=="checked"&&"defaultChecked"in v)continue;Oe(e,c,null,f,o)}}for(c in v)f=v[c],c=="children"?_=f:c=="dangerouslySetInnerHTML"?p=f:c=="value"?m=f:c=="checked"?b=f:l&&typeof f!="function"||C[c]===f||Oe(e,c,f,C[c],o);if(p)l||u&&(p.__html==u.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(u&&(e.innerHTML=""),er(t.type=="template"?e.content:e,Ye(_)?_:[_],t,r,n,w=="foreignObject"?"http://www.w3.org/1999/xhtml":o,s,a,s?s[0]:r.__k&&he(r,0),l,d),s!=null)for(c=s.length;c--;)pt(s[c]);l||(c="value",w=="progress"&&m==null?e.removeAttribute("value"):m!=null&&(m!==e[c]||w=="progress"&&!m||w=="option"&&m!=C[c])&&Oe(e,c,m,C[c],o),c="checked",b!=null&&b!=e[c]&&Oe(e,c,b,C[c],o))}return e}function _t(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){S.__e(o,r)}}function or(e,t,r){var n,o;if(S.unmount&&S.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||_t(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){S.__e(s,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&or(n[o],t,r||typeof e.type!="function");r||pt(e.__e),e.__c=e.__=e.__e=void 0}function Tr(e,t,r){return this.constructor(e,r)}function Rr(e,t,r){var n,o,s,a;t==document&&(t=document.documentElement),S.__&&S.__(e,t),o=(n=!1)?null:t.__k,s=[],a=[],ht(t,e=t.__k=$r(ce,null,[e]),o||$e,$e,t.namespaceURI,o?null:t.firstChild?Xe.call(t.childNodes):null,s,o?o.__e:t.firstChild,n,a),rr(s,e,a)}Xe=Zt.slice,S={__e:function(e,t,r,n){for(var o,s,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((s=o.constructor)&&s.getDerivedStateFromError!=null&&(o.setState(s.getDerivedStateFromError(e)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),a=o.__d),a)return o.__E=o}catch(l){e=l}throw e}},qt=0,Vt=function(e){return e!=null&&e.constructor===void 0},xe.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Q({},this.state),typeof e=="function"&&(e=e(Q({},r),this.props)),e&&Q(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Et(this))},xe.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Et(this))},xe.prototype.render=ce,le=[],Kt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Gt=function(e,t){return e.__v.__b-t.__v.__b},He.__r=0,Jt=/(PointerCapture)$|Capture$/i,ft=0,at=Tt(!1),lt=Tt(!0);var Ce,O,et,Rt,Ee=0,sr=[],A=S,zt=A.__b,Ot=A.__r,At=A.diffed,Mt=A.__c,Dt=A.unmount,Ut=A.__;function vt(e,t){A.__h&&A.__h(O,e,Ee||t),Ee=0;var r=O.__H||(O.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function F(e){return Ee=1,zr(ar,e)}function zr(e,t,r){var n=vt(Ce++,2);if(n.t=e,!n.__c&&(n.__=[ar(void 0,t),function(l){var d=n.__N?n.__N[0]:n.__[0],c=n.t(d,l);d!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=O,!O.__f)){var o=function(l,d,c){if(!n.__c.__H)return!0;var p=n.__c.__H.__.filter(function(_){return!!_.__c});if(p.every(function(_){return!_.__N}))return!s||s.call(this,l,d,c);var u=n.__c.props!==l;return p.forEach(function(_){if(_.__N){var f=_.__[0];_.__=_.__N,_.__N=void 0,f!==_.__[0]&&(u=!0)}}),s&&s.call(this,l,d,c)||u};O.__f=!0;var s=O.shouldComponentUpdate,a=O.componentWillUpdate;O.componentWillUpdate=function(l,d,c){if(this.__e){var p=s;s=void 0,o(l,d,c),s=p}a&&a.call(this,l,d,c)},O.shouldComponentUpdate=o}return n.__N||n.__}function z(e,t){var r=vt(Ce++,3);!A.__s&&ir(r.__H,t)&&(r.__=e,r.u=t,O.__H.__h.push(r))}function H(e){return Ee=5,qe(function(){return{current:e}},[])}function qe(e,t){var r=vt(Ce++,7);return ir(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function ke(e,t){return Ee=8,qe(function(){return e},t)}function Or(){for(var e;e=sr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ue),e.__H.__h.forEach(ut),e.__H.__h=[]}catch(t){e.__H.__h=[],A.__e(t,e.__v)}}A.__b=function(e){O=null,zt&&zt(e)},A.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ut&&Ut(e,t)},A.__r=function(e){Ot&&Ot(e),Ce=0;var t=(O=e.__c).__H;t&&(et===O?(t.__h=[],O.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Ue),t.__h.forEach(ut),t.__h=[],Ce=0)),et=O},A.diffed=function(e){At&&At(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(sr.push(t)!==1&&Rt===A.requestAnimationFrame||((Rt=A.requestAnimationFrame)||Ar)(Or)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),et=O=null},A.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Ue),r.__h=r.__h.filter(function(n){return!n.__||ut(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],A.__e(n,r.__v)}}),Mt&&Mt(e,t)},A.unmount=function(e){Dt&&Dt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Ue(n)}catch(o){t=o}}),r.__H=void 0,t&&A.__e(t,r.__v))};var Wt=typeof requestAnimationFrame=="function";function Ar(e){var t,r=function(){clearTimeout(n),Wt&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);Wt&&(t=requestAnimationFrame(r))}function Ue(e){var t=O,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),O=t}function ut(e){var t=O;e.__c=e.__(),O=t}function ir(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function ar(e,t){return typeof t=="function"?t(e):t}var Mr=Symbol.for("preact-signals");function gt(){if(pe>1)pe--;else{for(var e,t=!1;Se!==void 0;){var r=Se;for(Se=void 0,dt++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&ur(r))try{r.c()}catch(o){t||(e=o,t=!0)}r=n}}if(dt=0,pe--,t)throw e}}var x=void 0;function lr(e){var t=x;x=void 0;try{return e()}finally{x=t}}var Se=void 0,pe=0,dt=0,Ne=0;function cr(e){if(x!==void 0){var t=e.n;if(t===void 0||t.t!==x)return t={i:0,S:e,p:x.s,n:void 0,t:x,e:void 0,x:void 0,r:t},x.s!==void 0&&(x.s.n=t),x.s=t,e.n=t,32&x.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=x.s,t.n=void 0,x.s.n=t,x.s=t),t}}function D(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}D.prototype.brand=Mr;D.prototype.h=function(){return!0};D.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:lr(function(){var n;(n=t.W)==null||n.call(t)}))};D.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&lr(function(){var o;(o=t.Z)==null||o.call(t)}))}};D.prototype.subscribe=function(e){var t=this;return yt(function(){var r=t.value,n=x;x=void 0;try{e(r)}finally{x=n}},{name:"sub"})};D.prototype.valueOf=function(){return this.value};D.prototype.toString=function(){return this.value+""};D.prototype.toJSON=function(){return this.value};D.prototype.peek=function(){var e=x;x=void 0;try{return this.value}finally{x=e}};Object.defineProperty(D.prototype,"value",{get:function(){var e=cr(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(dt>100)throw new Error("Cycle detected");this.v=e,this.i++,Ne++,pe++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{gt()}}}});function te(e,t){return new D(e,t)}function ur(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function dr(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function fr(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function ue(e,t){D.call(this,void 0),this.x=e,this.s=void 0,this.g=Ne-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}ue.prototype=new D;ue.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Ne))return!0;if(this.g=Ne,this.f|=1,this.i>0&&!ur(this))return this.f&=-2,!0;var e=x;try{dr(this),x=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return x=e,fr(this),this.f&=-2,!0};ue.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}D.prototype.S.call(this,e)};ue.prototype.U=function(e){if(this.t!==void 0&&(D.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};ue.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(ue.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=cr(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Dr(e,t){return new ue(e,t)}function pr(e){var t=e.u;if(e.u=void 0,typeof t=="function"){pe++;var r=x;x=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,mt(e),n}finally{x=r,gt()}}}function mt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,pr(e)}function Ur(e){if(x!==this)throw new Error("Out-of-order effect");fr(this),x=e,this.f&=-2,8&this.f&&mt(this),gt()}function _e(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}_e.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};_e.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,pr(this),dr(this),pe++;var e=x;return x=this,Ur.bind(this,e)};_e.prototype.N=function(){2&this.f||(this.f|=2,this.o=Se,Se=this)};_e.prototype.d=function(){this.f|=8,1&this.f||mt(this)};_e.prototype.dispose=function(){this.d()};function yt(e,t){var r=new _e(e,t);try{r.c()}catch(o){throw r.d(),o}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var Ae;function ve(e,t){S[e]=t.bind(null,S[e]||function(){})}function Ie(e){if(Ae){var t=Ae;Ae=void 0,t()}Ae=e&&e.S()}function hr(e){var t=this,r=e.data,n=X(r);n.value=r;var o=qe(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var a,l=t.__$u.S(),d=o.value;l(),Vt(d)||((a=t.base)==null?void 0:a.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=d},Dr(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return o.value}hr.displayName="_st";Object.defineProperties(D.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:hr},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});ve("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var o in n)if(o!=="children"){var s=n[o];s instanceof D&&(r||(t.__np=r={}),r[o]=s,n[o]=s.peek())}}e(t)});ve("__r",function(e,t){e(t),Ie();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(o){var s;return yt(function(){s=this}),s.c=function(){n.__$f|=1,n.setState({})},s}())),Ie(r)});ve("__e",function(e,t,r,n){Ie(),e(t,r,n)});ve("diffed",function(e,t){Ie();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,o=t.props;if(n){var s=r.U;if(s)for(var a in s){var l=s[a];l!==void 0&&!(a in n)&&(l.d(),s[a]=void 0)}else r.U=s={};for(var d in n){var c=s[d],p=n[d];c===void 0?(c=Wr(r,d,p,o),s[d]=c):c.o(p,o)}}}e(t)});function Wr(e,t,r,n){var o=t in e&&e.ownerSVGElement===void 0,s=te(r);return{o:function(a,l){s.value=a,n=l},d:yt(function(){var a=s.value.value;n[t]!==a&&(n[t]=a,o?e[t]=a:a?e.setAttribute(t,a):e.removeAttribute(t))})}}ve("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var o in n){var s=n[o];s&&s.d()}}}}else{var a=t.__c;if(a){var l=a.__$u;l&&(a.__$u=void 0,l.d())}}e(t)});ve("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});xe.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var o in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var s in e)if(s!=="__source"&&e[s]!==this.props[s])return!0;for(var a in this.props)if(!(a in e))return!0;return!1};function X(e){return qe(function(){return te(e)},[])}function bt(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function Hr(e,t){let r;const n=()=>{if(r)return r;const o=indexedDB.open(e);return o.onupgradeneeded=()=>o.result.createObjectStore(t),r=bt(o),r.then(s=>{s.onclose=()=>r=void 0},()=>{}),r};return(o,s)=>n().then(a=>s(a.transaction(t,o).objectStore(t)))}let tt;function _r(){return tt||(tt=Hr("keyval-store","keyval")),tt}function vr(e,t=_r()){return t("readonly",r=>bt(r.get(e)))}function Nr(e,t,r=_r()){return r("readwrite",n=>(n.put(t,e),bt(n.transaction)))}var Ir=0;function i(e,t,r,n,o,s){t||(t={});var a,l,d=t;if("ref"in d)for(l in d={},t)l=="ref"?a=t[l]:d[l]=t[l];var c={type:e,props:d,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ir,__i:-1,__u:0,__source:o,__self:s};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)d[l]===void 0&&(d[l]=a[l]);return S.vnode&&S.vnode(c),c}var Br=Object.defineProperty,jr=(e,t)=>{for(var r in t)Br(e,r,{get:t[r],enumerable:!0})};function Fr(e){return Be=new gr(e),Be}function Xr(){if(!Be)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return Be}var gr,Be;async function Yr(e,t){const r=Xr(),n=await r.getProduct(e);if(!n.variants.edges.length)throw new Error("Product has no variants");const s=[{variantId:n.variants.edges[0].node.id,quantity:1}],a=await r.createCheckout(s);if(t&&typeof localStorage<"u"){const l={checkoutId:a.id,bookSlug:t,createdAt:Date.now()};localStorage.setItem(Vr,JSON.stringify(l))}return a.webUrl}function qr(e){return e.webUrl}var Vr;async function Kr(e,t){const r={bookSlug:e,orderId:t==null?void 0:t.orderId,email:t==null?void 0:t.email,unlockedAt:Date.now()};await Nr(`${Le}${e}`,r),typeof localStorage<"u"&&localStorage.setItem(`${Le}${e}`,JSON.stringify(r))}async function Gr(e){if(typeof localStorage<"u"&&localStorage.getItem(`${Le}${e}`))return!0;try{return!!await vr(`${Le}${e}`)}catch{return!1}}async function Jr(e){try{return await vr(`${Le}${e}`)||null}catch{return null}}async function Zr(e,t){const r=await Jr(e);return!r||!r.orderId?!1:r.orderId===t}var Le,Qr={};jr(Qr,{ShopifyClient:()=>gr,createCheckout:()=>Yr,createShopifyClient:()=>Fr,getCheckoutUrl:()=>qr,isContentUnlocked:()=>Gr,unlockContent:()=>Kr,verifyPurchase:()=>Zr});function en({prev:e,next:t}){return!e&&!t?null:i("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[i("div",{class:"pressy-nav-inner",children:[e?i("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[i("span",{class:"pressy-nav-direction",children:"Previous"}),i("span",{class:"pressy-nav-title",children:e.title})]}):i("div",{class:"pressy-nav-placeholder"}),t?i("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[i("span",{class:"pressy-nav-direction",children:"Next"}),i("span",{class:"pressy-nav-title",children:t.title})]}):i("div",{class:"pressy-nav-placeholder"})]}),i("style",{children:`
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
      `})]})}function mr(){const e=X(!1),t=X({x:0,y:0}),r=X(""),n=H(null);z(()=>{const l=()=>{const d=window.getSelection();if(!d||d.isCollapsed){e.value=!1;return}const c=d.toString().trim();if(c.length<5){e.value=!1;return}r.value=c;const u=d.getRangeAt(0).getBoundingClientRect();t.value={x:u.left+u.width/2,y:u.top-10},e.value=!0};return document.addEventListener("selectionchange",l),document.addEventListener("mouseup",l),()=>{document.removeEventListener("selectionchange",l),document.removeEventListener("mouseup",l)}},[]);const o=()=>{const l=encodeURIComponent(r.value),d=new URL(window.location.href);return d.hash=`:~:text=${l}`,d.toString()},s=async()=>{const l=o(),d=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:d,url:l}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${d}

${l}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var c;(c=n.current)==null||c.classList.remove("copied")},2e3))}catch(c){console.error("Failed to copy to clipboard:",c)}},a=async()=>{const l=o();try{await navigator.clipboard.writeText(l),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var d;(d=n.current)==null||d.classList.remove("copied")},2e3))}catch(d){console.error("Failed to copy link:",d)}};return e.value?i("div",{ref:n,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[i("button",{class:"pressy-share-btn",onClick:s,"aria-label":"Share selected text",title:"Share quote",children:i("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),i("button",{class:"pressy-copy-link-btn",onClick:a,"aria-label":"Copy link to selected text",title:"Copy link",children:i("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),i("style",{children:`
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
      `})]}):null}function yr(){const e=X(!navigator.onLine),t=X(!1);return z(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?i("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?i(ce,{children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),i("span",{children:"You're offline"})]}):i(ce,{children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),i("span",{children:"Back online"})]}),i("style",{children:`
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
      `})]}):null}function wt({children:e,prevChapter:t,nextChapter:r,showDropCap:n=!0,paginationMode:o="scroll",onSaveProgress:s,onRestoreProgress:a,bookProgressPercent:l,initialContent:d,chapterMapData:c,currentChapterSlug:p,allChapters:u,bookBasePath:_,onChapterChange:f,mdxComponents:m}){return o==="paginated"?i(nn,{prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:s,onRestoreProgress:a,bookProgressPercent:l,initialContent:d,chapterMapData:c,currentChapterSlug:p,allChapters:u,bookBasePath:_,onChapterChange:f,mdxComponents:m,children:e}):i(tn,{prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:s,onRestoreProgress:a,children:e})}function tn({children:e,prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:o,onRestoreProgress:s}){const a=H(null);return z(()=>{s&&s().then(l=>{l&&l.scrollPosition>0&&window.scrollTo(0,l.scrollPosition)})},[]),z(()=>{if(!o)return;const l=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{o({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",l,{passive:!0}),()=>{window.removeEventListener("scroll",l),a.current&&clearTimeout(a.current)}},[o]),z(()=>{if(!o)return;const l=()=>{o({page:0,totalPages:0,scrollPosition:window.scrollY})};return window.addEventListener("beforeunload",l),()=>window.removeEventListener("beforeunload",l)},[o]),i("div",{class:"pressy-reader",children:[i("main",{class:"pressy-reader-main",children:i("article",{class:`pressy-prose ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),i(mr,{}),i(en,{prev:t,next:r}),i(yr,{}),i("style",{children:on})]})}function rn({title:e}){return i("div",{class:"pressy-chapter-divider",children:i("h2",{class:"pressy-chapter-divider-title",children:e})})}function nn({children:e,prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:o,onRestoreProgress:s,bookProgressPercent:a,initialContent:l,chapterMapData:d,currentChapterSlug:c,allChapters:p,bookBasePath:u,onChapterChange:_,mdxComponents:f}){const m=H(null),b=H(null),C=H(null),[v,w]=F(0),[P,Y]=F(1),oe=H(!1),I=H(null),[U,se]=F([]),[T,ge]=F([]),[R,q]=F(c||""),Ke=H(new Set),W=!!(d&&l&&c&&p);z(()=>{if(W&&l&&c){const h=p.find(g=>g.slug===c);se([{slug:c,title:(h==null?void 0:h.title)||c,Content:l}]),q(c)}},[]);const[kt,de]=F(!1),[xt,fe]=F(0),[St,V]=F(null),Ge=H(0),Pt=H(0),Je=H(0),Ze=H(0),Te=H(0),Re=H(!1),me=H(!1),$t=ke(()=>{if(!W)return;const h=C.current,g=b.current;if(!h||!g)return;const y=g.clientWidth;if(y===0)return;const k=h.querySelectorAll(".pressy-chapter-section"),E=[];k.forEach(L=>{const $=L.getAttribute("data-chapter-slug")||"",M=L.offsetLeft,B=L.scrollWidth,N=Math.floor(M/y),J=Math.max(N,Math.ceil((M+B)/y)-1);E.push({slug:$,startPage:N,endPage:J})}),ge(E)},[W]),ie=ke(()=>{const h=C.current,g=b.current;if(!h||!g)return;const y=g.clientWidth;if(y===0)return;h.style.columnWidth=`${y}px`,h.scrollWidth;const k=Math.max(1,Math.round(h.scrollWidth/y));Y(k),w(E=>Math.min(E,k-1)),$t()},[$t]);z(()=>{const h=b.current;if(!h)return;const g=setTimeout(ie,50),y=new ResizeObserver(()=>{ie()});return y.observe(h),()=>{clearTimeout(g),y.disconnect()}},[ie]),z(()=>{if(U.length>0){const h=setTimeout(ie,50);return()=>clearTimeout(h)}},[U.length,ie]),z(()=>{const h=C.current;if(!h)return;const g=h.querySelectorAll("img");if(g.length===0)return;const y=()=>ie();return g.forEach(k=>{k.complete||(k.addEventListener("load",y),k.addEventListener("error",y))}),()=>{g.forEach(k=>{k.removeEventListener("load",y),k.removeEventListener("error",y)})}},[ie,U.length]),z(()=>{if(new URLSearchParams(window.location.search).get("page")==="last"&&P>1){w(P-1),oe.current=!0;const g=new URL(window.location.href);g.searchParams.delete("page"),history.replaceState(null,"",g.pathname)}},[P]),z(()=>{const h=C.current,g=b.current;if(!h||!g)return;const k=v*g.clientWidth-xt;kt?h.style.transition="none":h.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",h.style.transform=`translateX(-${k}px)`},[v,xt,kt]),z(()=>{var B;if(!W||!d||T.length===0)return;const h=T.find(N=>N.slug===R);if(!h||h.endPage-v>2)return;const{chapterOrder:y,chapterMap:k}=d,E=(B=U[U.length-1])==null?void 0:B.slug,L=y.indexOf(E);if(L===-1||L>=y.length-1)return;const $=y[L+1];if(Ke.current.has($)||U.some(N=>N.slug===$))return;Ke.current.add($);const M=k[$];M&&M().then(N=>{const J=N.default,re=p.find(Z=>Z.slug===$);se(Z=>Z.some(ze=>ze.slug===$)?Z:[...Z,{slug:$,title:(re==null?void 0:re.title)||$,Content:J}])}).catch(()=>{Ke.current.delete($)})},[v,R,T,W,d,U,p]),z(()=>{if(!W||T.length===0||!u)return;const h=T.find(E=>v>=E.startPage&&v<=E.endPage);if(!h||h.slug===R)return;const g=R;q(h.slug);const y=`${u}/${h.slug}`;history.replaceState(null,"",y);const k=p==null?void 0:p.find(E=>E.slug===h.slug);if(k&&(document.title=document.title.replace(/^[^|]+/,k.title+" ")),_&&g){const E=T.find(L=>L.slug===g);if(E){const L=E.endPage-E.startPage+1;_(g,L-1,L)}}},[v,T,R,W,u,p,_]),z(()=>{if(!(!o||!oe.current))return I.current&&clearTimeout(I.current),I.current=setTimeout(()=>{if(W&&T.length>0){const h=T.find(g=>g.slug===R);if(h){const g=v-h.startPage,y=h.endPage-h.startPage+1;o({page:g,totalPages:y,scrollPosition:0})}}else o({page:v,totalPages:P,scrollPosition:0})},300),()=>{I.current&&clearTimeout(I.current)}},[v,P,o,W,T,R]),z(()=>{if(!o)return;const h=()=>{if(W&&T.length>0){const g=T.find(y=>y.slug===R);if(g){const y=v-g.startPage,k=g.endPage-g.startPage+1;o({page:y,totalPages:k,scrollPosition:0})}}else o({page:v,totalPages:P,scrollPosition:0})};return window.addEventListener("beforeunload",h),()=>window.removeEventListener("beforeunload",h)},[v,P,o,W,T,R]);const K=(()=>{var k;if(!W||!d)return r;const{chapterOrder:h}=d,g=(k=U[U.length-1])==null?void 0:k.slug;if(!(h.indexOf(g)<h.length-1))return u?{slug:u,title:"Table of Contents"}:r})(),G=(()=>{var L;if(!W||!d)return t;const{chapterOrder:h}=d,g=(L=U[0])==null?void 0:L.slug,y=h.indexOf(g);if(y<=0)return t;const k=h[y-1],E=p==null?void 0:p.find($=>$.slug===k);return{slug:`${u}/${k}?page=last`,title:(E==null?void 0:E.title)||k}})(),ae=ke(h=>{const g=Math.max(0,Math.min(h,P-1));w(g)},[P]),ye=ke(()=>{if(v>=P-1){K&&(window.location.href=K.slug);return}ae(v+1)},[v,P,K,ae]),be=ke(()=>{if(v<=0){G&&(window.location.href=G.slug);return}ae(v-1)},[v,G,ae]);z(()=>{const h=g=>{const y=g.target.tagName;y==="INPUT"||y==="TEXTAREA"||y==="SELECT"||(g.key==="ArrowRight"||g.key===" "?(g.preventDefault(),ye()):g.key==="ArrowLeft"?(g.preventDefault(),be()):g.key==="Home"?(g.preventDefault(),ae(0)):g.key==="End"&&(g.preventDefault(),ae(P-1)))};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[ye,be,ae,P]),z(()=>{const h=m.current;if(!h)return;const g=L=>{const $=L.touches[0];Ge.current=$.clientX,Pt.current=$.clientY,Je.current=$.clientX,Ze.current=performance.now(),Te.current=0,Re.current=!1,me.current=!1},y=L=>{const $=L.touches[0],M=$.clientX-Ge.current,B=$.clientY-Pt.current;if(!Re.current)if(Math.abs(M)>Math.abs(B)&&Math.abs(M)>10)Re.current=!0;else return Math.abs(B)>Math.abs(M)&&Math.abs(B)>10,void 0;L.preventDefault();const N=performance.now(),J=N-Ze.current;if(J>0){const Qe=($.clientX-Je.current)/J;Te.current=.6*Qe+.4*Te.current}Je.current=$.clientX,Ze.current=N;let re=M;const Z=v===0,ze=v>=P-1;if(Z&&M>0||ze&&M<0){const Qe=M>0?1:-1,Sr=Math.abs(M);re=Qe*Math.sqrt(Sr)*5,M>40&&Z&&G?V("prev"):M<-40&&ze&&K?V("next"):V(null)}else V(null);me.current=!0,de(!0),fe(re)},k=L=>{if(!Re.current||!me.current){de(!1),fe(0),V(null);return}const $=L.changedTouches[0].clientX-Ge.current,M=Te.current,B=50,N=.3,J=80,re=v===0;if(v>=P-1&&$<-J&&K){de(!1),fe(0),V(null),window.location.href=K.slug;return}if(re&&$>J&&G){de(!1),fe(0),V(null),window.location.href=G.slug;return}$<-B||M<-N?ye():($>B||M>N)&&be(),me.current=!1,de(!1),fe(0),V(null)},E=()=>{me.current=!1,de(!1),fe(0),V(null)};return h.addEventListener("touchstart",g,{passive:!0}),h.addEventListener("touchmove",y,{passive:!1}),h.addEventListener("touchend",k,{passive:!0}),h.addEventListener("touchcancel",E,{passive:!0}),()=>{h.removeEventListener("touchstart",g),h.removeEventListener("touchmove",y),h.removeEventListener("touchend",k),h.removeEventListener("touchcancel",E)}},[v,P,ye,be,K,G]);const we=(()=>{if(!W||T.length===0)return{chapterPage:v,chapterTotalPages:P};const h=T.find(g=>g.slug===R);return h?{chapterPage:v-h.startPage,chapterTotalPages:h.endPage-h.startPage+1}:{chapterPage:v,chapterTotalPages:P}})(),xr=we.chapterTotalPages>1?(we.chapterPage+1)/we.chapterTotalPages*100:100;return i("div",{class:"pressy-reader pressy-reader--paginated",ref:m,children:[i("div",{class:"pressy-paginated-viewport",ref:b,children:i("article",{ref:C,class:`pressy-prose pressy-prose--paginated ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:W&&U.length>0?U.map(h=>i("section",{class:"pressy-chapter-section","data-chapter-slug":h.slug,children:[i(rn,{title:h.title}),i(h.Content,{components:f||{}})]},h.slug)):e})}),i("div",{class:"pressy-tap-zone pressy-tap-prev",onClick:be,"aria-label":"Previous page",role:"button",tabIndex:-1}),i("div",{class:"pressy-tap-zone pressy-tap-next",onClick:ye,"aria-label":"Next page",role:"button",tabIndex:-1}),St==="prev"&&G&&i("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[i("span",{class:"pressy-chapter-hint-arrow",children:"←"}),i("span",{class:"pressy-chapter-hint-text",children:G.title})]}),St==="next"&&K&&i("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[i("span",{class:"pressy-chapter-hint-text",children:K.title}),i("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),i("div",{class:"pressy-page-footer",children:[i("div",{class:"pressy-progress-bar",children:i("div",{class:"pressy-progress-fill",style:{width:`${xr}%`}})}),i("div",{class:"pressy-page-indicator",children:[i("span",{children:["Page ",we.chapterPage+1," of ",we.chapterTotalPages]}),a!=null&&i("span",{class:"pressy-book-progress",children:[Math.round(a),"% of book"]})]})]}),i(mr,{}),i(yr,{}),i("style",{children:sn})]})}var on=`
  .pressy-reader {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .pressy-reader-main {
    flex: 1;
    padding: 2rem 0;
  }
`,sn=`
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
`,an="pressy-cached-books";function Ht(){try{const e=localStorage.getItem(an);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function ln({bookSlug:e,chapterUrls:t,cachedBooks:r,cacheProgress:n,onDownload:o,onRemove:s}){var c;const a=X(Ht().has(e)||r.value.has(e)),l=X(((c=n.value)==null?void 0:c.bookSlug)===e),d=X(null);return z(()=>{const p=()=>{var f;a.value=Ht().has(e)||r.value.has(e),l.value=((f=n.value)==null?void 0:f.bookSlug)===e;const _=n.value;d.value=_&&_.bookSlug===e?Math.round(_.current/_.total*100):null},u=setInterval(p,500);return p(),()=>clearInterval(u)},[e]),a.value?i("div",{class:"pressy-download-book",children:[i("div",{class:"pressy-download-status",children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),i("span",{children:"Available offline"})]}),i("button",{class:"pressy-download-remove",onClick:()=>s(e),"aria-label":"Remove offline copy",children:"Remove"}),i("style",{children:rt})]}):l.value?i("div",{class:"pressy-download-book",children:[i("div",{class:"pressy-download-progress",children:[i("div",{class:"pressy-download-bar",children:i("div",{class:"pressy-download-bar-fill",style:{width:`${d.value||0}%`}})}),i("span",{class:"pressy-download-percent",children:[d.value||0,"%"]})]}),i("style",{children:rt})]}):i("div",{class:"pressy-download-book",children:[i("button",{class:"pressy-download-btn",onClick:()=>o(e,t),"aria-label":"Download for offline reading",children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),i("span",{children:"Download for offline"})]}),i("style",{children:rt})]})}var rt=`
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
`;function cn({chapters:e,basePath:t,bookSlug:r,loadAllProgress:n}){const[o,s]=F(new Map);z(()=>{n().then(_=>{const f=new Set(e.map(b=>b.slug)),m=new Map;for(const b of _)f.has(b.chapterSlug)&&m.set(b.chapterSlug,{page:b.page,totalPages:b.totalPages});s(m)})},[e,n]);const a=e.reduce((_,f)=>_+(f.wordCount||0),0);let l=0,d=0,c=0;for(const _ of e){const f=o.get(_.slug);if(!f)continue;const m=_.wordCount||0;f.totalPages>0&&f.page>=f.totalPages-1?(l+=m,d++,c++):f.page>0&&f.totalPages>0&&(l+=f.page/f.totalPages*m,c++)}const p=a>0?l/a*100:0,u=c>0;return i("div",{class:"pressy-book-progress-section",children:[u&&i("div",{class:"pressy-overall-progress",children:[i("div",{class:"pressy-overall-progress-bar",children:i("div",{class:"pressy-overall-progress-fill",style:{width:`${p}%`}})}),i("div",{class:"pressy-overall-progress-text",children:[Math.round(p),"% complete",i("span",{class:"pressy-overall-progress-detail",children:[d," of ",e.length," chapters"]})]})]}),i("nav",{class:"pressy-chapter-list",children:e.map(_=>{const f=o.get(_.slug),m=f&&f.totalPages>0&&f.page>=f.totalPages-1,b=f&&f.page>0&&!m;return i("a",{href:`${t}/books/${r}/${_.slug}`,class:`pressy-chapter-link ${m?"pressy-chapter--completed":""} ${b?"pressy-chapter--started":""}`,children:[i("span",{class:"pressy-chapter-order",children:[_.order,"."]}),i("span",{class:"pressy-chapter-title",children:_.title}),m&&i("span",{class:"pressy-chapter-badge pressy-chapter-badge--done",children:"Done"}),b&&f&&i("span",{class:"pressy-chapter-badge pressy-chapter-badge--reading",children:["p.",f.page+1,"/",f.totalPages]})]})})}),i("style",{children:un})]})}var un=`
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
`;function dn({id:e,children:t}){const r=X(!1);return i(ce,{children:[i("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&i("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,i("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),i("style",{children:`
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
      `})]})}function fn({children:e,title:t}){return i("aside",{class:"pressy-aside",children:[t&&i("strong",{class:"pressy-aside-title",children:t}),i("div",{class:"pressy-aside-content",children:e}),i("style",{children:`
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
      `})]})}function Nt({src:e,alt:t,caption:r,wide:n,children:o}){return i("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[i("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||o)&&i("figcaption",{class:"pressy-figure-caption",children:r||o}),i("style",{children:`
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
      `})]})}var pn={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},hn={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function _n({type:e="note",title:t,children:r}){return i("div",{class:`pressy-callout pressy-callout-${e}`,children:[i("div",{class:"pressy-callout-header",children:[i("span",{class:"pressy-callout-icon",children:pn[e]}),i("strong",{class:"pressy-callout-title",children:t||hn[e]})]}),i("div",{class:"pressy-callout-content",children:r}),i("style",{children:`
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
      `})]})}function It({variant:e="asterisks"}){return i("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&i("span",{children:"* * *"}),e==="ornament"&&i("span",{children:"❧"}),i("style",{children:`
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
      `})]})}var vn={Footnote:dn,Aside:fn,Figure:Nt,Callout:_n,SceneBreak:It,img:Nt,hr:It},gn={};function je(){return{...vn,...gn}}var br="pressy-cached-books",nt=te("online"),Fe=te(null),ot=te(!1);function mn(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(br);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var j=te(mn());typeof window<"u"&&(nt.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{nt.value="online"}),window.addEventListener("offline",()=>{nt.value="offline"}));async function yn(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",bn),navigator.serviceWorker.controller?ot.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{ot.value=!0}),n.addEventListener("updatefound",()=>{const o=n.installing;o&&o.addEventListener("statechange",()=>{o.state==="activated"&&(ot.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function Pe(){try{localStorage.setItem(br,JSON.stringify([...j.value]))}catch{}}function bn(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:o}=e.data;Fe.value={bookSlug:r,current:n,total:o}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;Fe.value=null;const n=new Set(j.value);n.add(r),j.value=n,Pe()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const o of r){const s=o.match(/\/books\/([^/]+)/);s&&n.add(s[1])}j.value=n,Pe()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(j.value);n.delete(r),j.value=n,Pe()}}async function wn(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(o=>o.startsWith("http")?o:`${window.location.origin}${o}`);Fe.value={bookSlug:e,current:0,total:r.length};const n=new Set(j.value);return n.add(e),j.value=n,Pe(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}async function kn(e){const t=new Set(j.value);if(t.delete(e),j.value=t,Pe(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const o of n)o.url.includes(`/books/${e}`)&&await r.delete(o);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var Bt=te("/"),xn=te("light"),jt=te(!navigator.onLine),Sn="pressy",Pn=1,ne="reading-progress",Ft="unlocks",Me=null;async function Ve(){return Me||new Promise((e,t)=>{const r=indexedDB.open(Sn,Pn);r.onerror=()=>t(r.error),r.onsuccess=()=>{Me=r.result,e(Me)},r.onupgradeneeded=n=>{const o=n.target.result;o.objectStoreNames.contains(ne)||o.createObjectStore(ne,{keyPath:"chapterSlug"}),o.objectStoreNames.contains(Ft)||o.createObjectStore(Ft,{keyPath:"bookSlug"})}})}async function Xt(e){const t=await Ve();return new Promise((r,n)=>{const a=t.transaction(ne,"readwrite").objectStore(ne).put(e);a.onsuccess=()=>r(),a.onerror=()=>n(a.error)})}async function $n(e){const t=await Ve();return new Promise((r,n)=>{const a=t.transaction(ne,"readonly").objectStore(ne).get(e);a.onsuccess=()=>r(a.result||null),a.onerror=()=>n(a.error)})}async function We(){const e=await Ve();return new Promise((t,r)=>{const s=e.transaction(ne,"readonly").objectStore(ne).getAll();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>r(s.error)})}function Yt(e){xn.value=e,document.documentElement.setAttribute("data-theme",e),localStorage.setItem("pressy-theme",e)}function Cn(){const e=localStorage.getItem("pressy-theme");e?Yt(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&Yt("dark")}function En(){window.addEventListener("online",()=>{jt.value=!1}),window.addEventListener("offline",()=>{jt.value=!0})}function wr(e,t=[]){const r=e.chapters.map(n=>`/books/${e.slug}/${n.slug}`);return i("div",{class:"pressy-home",children:[i("header",{class:"pressy-home-header",children:[i("h1",{children:e.metadata.title}),i("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&i("p",{class:"pressy-home-desc",children:e.metadata.description})]}),i(ln,{bookSlug:e.slug,chapterUrls:r,cachedBooks:j,cacheProgress:Fe,onDownload:wn,onRemove:kn}),i("section",{class:"pressy-home-section",children:[i("h2",{children:"Chapters"}),i(cn,{bookSlug:e.slug,chapters:e.chapters.map(n=>({slug:n.slug,title:n.title,order:n.order,wordCount:n.wordCount||0})),basePath:ee,loadAllProgress:We})]}),t.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Articles"}),i("nav",{class:"pressy-chapter-list",children:t.map(n=>i("a",{href:`${ee}/articles/${n.slug}`,class:"pressy-chapter-link",children:n.metadata.title}))})]}),i("style",{children:kr})]})}function st(e){var r,n;if(e.books.length===1)return wr(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return i("div",{class:"pressy-home",children:[i("header",{class:"pressy-home-header",children:[i("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&i("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Books"}),i("nav",{class:"pressy-chapter-list",children:e.books.map(o=>i("a",{href:`${ee}/books/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),e.articles.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Articles"}),i("nav",{class:"pressy-chapter-list",children:e.articles.map(o=>i("a",{href:`${ee}/articles/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),i("style",{children:kr})]})}function it(e,t,r,n,o){const s=e.chapters.reduce((d,c)=>d+(c.wordCount||0),0);if(s===0)return 0;const a=new Map(o.map(d=>[d.chapterSlug,d]));let l=0;for(const d of e.chapters){const c=d.wordCount||0;if(d.slug===t)n>0&&(l+=r/Math.max(1,n-1)*c);else{const p=a.get(d.slug);if(!p)continue;p.totalPages>0&&p.page>=p.totalPages-1?l+=c:p.page>0&&p.totalPages>0&&(l+=p.page/p.totalPages*c)}}return Math.min(100,l/s*100)}function Ln({book:e,chapterSlug:t,chapter:r,prevChapter:n,nextChapter:o,paginationMode:s,Content:a,chapterMapData:l}){const[d,c]=F(void 0);z(()=>{We().then(f=>{const m=it(e,t,0,0,f);c(m)})},[e,t]);const p=f=>{Xt({chapterSlug:t,page:f.page,totalPages:f.totalPages,scrollPosition:f.scrollPosition,timestamp:Date.now()}),f.totalPages>0&&We().then(m=>{const b=it(e,t,f.page,f.totalPages,m);c(b)})},u=async()=>{const f=await $n(t);return f?{page:f.page,totalPages:f.totalPages,scrollPosition:f.scrollPosition}:null},_=(f,m,b)=>{Xt({chapterSlug:f,page:m,totalPages:b,scrollPosition:0,timestamp:Date.now()}),We().then(C=>{const v=it(e,f,m,b,C);c(v)})};return z(()=>{if(n){const f=document.createElement("link");return f.rel="prefetch",f.href=n.slug,document.head.appendChild(f),()=>{document.head.removeChild(f)}}},[n]),i(wt,{title:(r==null?void 0:r.title)||t,chapterSlug:t,prevChapter:n,nextChapter:o,paginationMode:s,onSaveProgress:p,onRestoreProgress:u,bookProgressPercent:d,initialContent:a,chapterMapData:l,currentChapterSlug:t,allChapters:e.chapters.map(f=>({slug:f.slug,title:f.title,wordCount:f.wordCount})),bookBasePath:`${ee}/books/${e.slug}`,onChapterChange:_,mdxComponents:je(),children:i(a,{components:je()})})}function Tn(e,t,r,n,o){const s=t.split("/"),a=s[2],l=s[3],d=e.books.find(b=>b.slug===a),c=d?d.chapters.findIndex(b=>b.slug===l):-1,p=d==null?void 0:d.chapters[c],u=b=>`${ee}/books/${a}/${b.slug}`,_=d&&c>0?{slug:u(d.chapters[c-1]),title:d.chapters[c-1].title}:void 0,f=d&&c>=0&&c<d.chapters.length-1?{slug:u(d.chapters[c+1]),title:d.chapters[c+1].title}:d?{slug:`${ee}/books/${a}`,title:d.metadata.title}:void 0,m=r;return d?i(Ln,{book:d,chapterSlug:l,chapter:p,prevChapter:_,nextChapter:f,paginationMode:n,Content:m,chapterMapData:o}):i(wt,{title:(p==null?void 0:p.title)||l,prevChapter:_,nextChapter:f,paginationMode:n,children:i(m,{components:je()})})}function Rn(e,t,r){const n=t.split("/")[2],o=e.articles.find(a=>a.slug===n),s=r;return i(wt,{title:(o==null?void 0:o.metadata.title)||n,children:i(s,{components:je()})})}var kr=`
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
`;function zn(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const o=r.indexOf(n);return o>0?r.slice(0,o):""}var ee="";function An(e,t,r){var o;ee=zn(e.route),Bt.value=e.route,Cn(),En(),Ve(),yn(ee),window.addEventListener("popstate",()=>{Bt.value=window.location.pathname}),document.addEventListener("click",s=>{const a=s.target.closest("a");if(!a)return;const l=a.getAttribute("href");if(l&&!(l.startsWith("http")||l.startsWith("#"))&&l.startsWith(e.route+"#")){s.preventDefault();const d=l.slice(l.indexOf("#")),c=document.querySelector(d);c&&c.scrollIntoView({behavior:"smooth"});return}});let n;switch(e.routeType){case"home":n=st(e.manifest);break;case"book":{const s=e.route.split("/")[2],a=e.manifest.books.find(l=>l.slug===s);n=a?wr(a):i("div",{children:"Book not found"});break}case"chapter":n=t?Tn(e.manifest,e.route,t,(o=e.pagination)==null?void 0:o.defaultMode,r):i("div",{children:"Loading..."});break;case"article":n=t?Rn(e.manifest,e.route,t):i("div",{children:"Loading..."});break;case"books":n=st(e.manifest);break;case"articles":n=st(e.manifest);break;default:n=i("div",{children:"Page not found"})}Rr(n,document.getElementById("app"))}export{An as h,ce as k,i as u};
