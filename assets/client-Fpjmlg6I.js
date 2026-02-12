var le,m,et,tt,P,Ae,rt,nt,ot,xe,me,ye,G={},it=[],Lt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ce=Array.isArray;function L(e,t){for(var r in t)e[r]=t[r];return e}function Se(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function h(e,t,r){var n,o,i,s={};for(i in t)i=="key"?n=t[i]:i=="ref"?o=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?le.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return ee(e,s,n,o,null)}function ee(e,t,r,n,o){var i={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++et,__i:-1,__u:0};return o==null&&m.vnode!=null&&m.vnode(i),i}function A(e){return e.children}function j(e,t){this.props=e,this.context=t}function B(e,t){if(t==null)return e.__?B(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?B(e):null}function st(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return st(e)}}function Ue(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!re.__r++||Ae!=m.debounceRendering)&&((Ae=m.debounceRendering)||rt)(re)}function re(){for(var e,t,r,n,o,i,s,c=1;P.length;)P.length>c&&P.sort(nt),e=P.shift(),c=P.length,e.__d&&(r=void 0,n=void 0,o=(n=(t=e).__v).__e,i=[],s=[],t.__P&&((r=L({},n)).__v=n.__v+1,m.vnode&&m.vnode(r),$e(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,i,o??B(n),!!(32&n.__u),s),r.__v=n.__v,r.__.__k[r.__i]=r,ct(i,r,s),n.__e=n.__=null,r.__e!=o&&st(r)));re.__r=0}function at(e,t,r,n,o,i,s,c,u,d,p){var a,_,f,w,C,k,g,y=n&&n.__k||it,O=t.length;for(u=Tt(r,t,y,u,O),a=0;a<O;a++)(f=r.__k[a])!=null&&(_=f.__i==-1?G:y[f.__i]||G,f.__i=a,k=$e(e,f,_,o,i,s,c,u,d,p),w=f.__e,f.ref&&_.ref!=f.ref&&(_.ref&&Ce(_.ref,null,f),p.push(f.ref,f.__c||w,f)),C==null&&w!=null&&(C=w),(g=!!(4&f.__u))||_.__k===f.__k?u=lt(f,u,e,g):typeof f.type=="function"&&k!==void 0?u=k:w&&(u=w.nextSibling),f.__u&=-7);return r.__e=C,u}function Tt(e,t,r,n,o){var i,s,c,u,d,p=r.length,a=p,_=0;for(e.__k=new Array(o),i=0;i<o;i++)(s=t[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[i]=ee(null,s,null,null,null):ce(s)?s=e.__k[i]=ee(A,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[i]=ee(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[i]=s,u=i+_,s.__=e,s.__b=e.__b+1,c=null,(d=s.__i=Ot(s,r,u,a))!=-1&&(a--,(c=r[d])&&(c.__u|=2)),c==null||c.__v==null?(d==-1&&(o>p?_--:o<p&&_++),typeof s.type!="function"&&(s.__u|=4)):d!=u&&(d==u-1?_--:d==u+1?_++:(d>u?_--:_++,s.__u|=4))):e.__k[i]=null;if(a)for(i=0;i<p;i++)(c=r[i])!=null&&!(2&c.__u)&&(c.__e==n&&(n=B(c)),ut(c,c));return n}function lt(e,t,r,n){var o,i;if(typeof e.type=="function"){for(o=e.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=e,t=lt(o[i],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=B(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Ot(e,t,r,n){var o,i,s,c=e.key,u=e.type,d=t[r],p=d!=null&&(2&d.__u)==0;if(d===null&&c==null||p&&c==d.key&&u==d.type)return r;if(n>(p?1:0)){for(o=r-1,i=r+1;o>=0||i<t.length;)if((d=t[s=o>=0?o--:i++])!=null&&!(2&d.__u)&&c==d.key&&u==d.type)return s}return-1}function De(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Lt.test(t)?r:r+"px"}function X(e,t,r,n,o){var i,s;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||De(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||De(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(ot,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=r,r?n?r.u=n.u:(r.u=xe,e.addEventListener(t,i?ye:me,i)):e.removeEventListener(t,i?ye:me,i);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Ie(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=xe++;else if(t.t<r.u)return;return r(m.event?m.event(t):t)}}}function $e(e,t,r,n,o,i,s,c,u,d){var p,a,_,f,w,C,k,g,y,O,H,q,F,Pe,J,N,de,z=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(u=!!(32&r.__u),i=[c=t.__e=r.__e]),(p=m.__b)&&p(t);e:if(typeof z=="function")try{if(g=t.props,y="prototype"in z&&z.prototype.render,O=(p=z.contextType)&&n[p.__c],H=p?O?O.props.value:p.__:n,r.__c?k=(a=t.__c=r.__c).__=a.__E:(y?t.__c=a=new z(g,H):(t.__c=a=new j(g,H),a.constructor=z,a.render=Pt),O&&O.sub(a),a.state||(a.state={}),a.__n=n,_=a.__d=!0,a.__h=[],a._sb=[]),y&&a.__s==null&&(a.__s=a.state),y&&z.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=L({},a.__s)),L(a.__s,z.getDerivedStateFromProps(g,a.__s))),f=a.props,w=a.state,a.__v=t,_)y&&z.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),y&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(y&&z.getDerivedStateFromProps==null&&g!==f&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(g,H),t.__v==r.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(g,a.__s,H)===!1){for(t.__v!=r.__v&&(a.props=g,a.state=a.__s,a.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(D){D&&(D.__=t)}),q=0;q<a._sb.length;q++)a.__h.push(a._sb[q]);a._sb=[],a.__h.length&&s.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(g,a.__s,H),y&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(f,w,C)})}if(a.context=H,a.props=g,a.__P=e,a.__e=!1,F=m.__r,Pe=0,y){for(a.state=a.__s,a.__d=!1,F&&F(t),p=a.render(a.props,a.state,a.context),J=0;J<a._sb.length;J++)a.__h.push(a._sb[J]);a._sb=[]}else do a.__d=!1,F&&F(t),p=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++Pe<25);a.state=a.__s,a.getChildContext!=null&&(n=L(L({},n),a.getChildContext())),y&&!_&&a.getSnapshotBeforeUpdate!=null&&(C=a.getSnapshotBeforeUpdate(f,w)),N=p,p!=null&&p.type===A&&p.key==null&&(N=dt(p.props.children)),c=at(e,ce(N)?N:[N],t,r,n,o,i,s,c,u,d),a.base=t.__e,t.__u&=-161,a.__h.length&&s.push(a),k&&(a.__E=a.__=null)}catch(D){if(t.__v=null,u||i!=null)if(D.then){for(t.__u|=u?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i[i.indexOf(c)]=null,t.__e=c}else{for(de=i.length;de--;)Se(i[de]);ge(t)}else t.__e=r.__e,t.__k=r.__k,D.then||ge(t);m.__e(D,t,r)}else i==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):c=t.__e=Ht(r.__e,t,r,n,o,i,s,u,d);return(p=m.diffed)&&p(t),128&t.__u?void 0:c}function ge(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(ge)}function ct(e,t,r){for(var n=0;n<r.length;n++)Ce(r[n],r[++n],r[++n]);m.__c&&m.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){m.__e(i,o.__v)}})}function dt(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:ce(e)?e.map(dt):L({},e)}function Ht(e,t,r,n,o,i,s,c,u){var d,p,a,_,f,w,C,k=r.props||G,g=t.props,y=t.type;if(y=="svg"?o="http://www.w3.org/2000/svg":y=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((f=i[d])&&"setAttribute"in f==!!y&&(y?f.localName==y:f.nodeType==3)){e=f,i[d]=null;break}}if(e==null){if(y==null)return document.createTextNode(g);e=document.createElementNS(o,y,g.is&&g),c&&(m.__m&&m.__m(t,i),c=!1),i=null}if(y==null)k===g||c&&e.data==g||(e.data=g);else{if(i=i&&le.call(e.childNodes),!c&&i!=null)for(k={},d=0;d<e.attributes.length;d++)k[(f=e.attributes[d]).name]=f.value;for(d in k)if(f=k[d],d!="children"){if(d=="dangerouslySetInnerHTML")a=f;else if(!(d in g)){if(d=="value"&&"defaultValue"in g||d=="checked"&&"defaultChecked"in g)continue;X(e,d,null,f,o)}}for(d in g)f=g[d],d=="children"?_=f:d=="dangerouslySetInnerHTML"?p=f:d=="value"?w=f:d=="checked"?C=f:c&&typeof f!="function"||k[d]===f||X(e,d,f,k[d],o);if(p)c||a&&(p.__html==a.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(a&&(e.innerHTML=""),at(t.type=="template"?e.content:e,ce(_)?_:[_],t,r,n,y=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:r.__k&&B(r,0),c,u),i!=null)for(d=i.length;d--;)Se(i[d]);c||(d="value",y=="progress"&&w==null?e.removeAttribute("value"):w!=null&&(w!==e[d]||y=="progress"&&!w||y=="option"&&w!=k[d])&&X(e,d,w,k[d],o),d="checked",C!=null&&C!=e[d]&&X(e,d,C,k[d],o))}return e}function Ce(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){m.__e(o,r)}}function ut(e,t,r){var n,o;if(m.unmount&&m.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||Ce(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){m.__e(i,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&ut(n[o],t,r||typeof e.type!="function");r||Se(e.__e),e.__c=e.__=e.__e=void 0}function Pt(e,t,r){return this.constructor(e,r)}function At(e,t,r){var n,o,i,s;t==document&&(t=document.documentElement),m.__&&m.__(e,t),o=(n=!1)?null:t.__k,i=[],s=[],$e(t,e=t.__k=h(A,null,[e]),o||G,G,t.namespaceURI,o?null:t.firstChild?le.call(t.childNodes):null,i,o?o.__e:t.firstChild,n,s),ct(i,e,s)}le=it.slice,m={__e:function(e,t,r,n){for(var o,i,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),s=o.__d),s)return o.__E=o}catch(c){e=c}throw e}},et=0,tt=function(e){return e!=null&&e.constructor===void 0},j.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=L({},this.state),typeof e=="function"&&(e=e(L({},r),this.props)),e&&L(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ue(this))},j.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ue(this))},j.prototype.render=A,P=[],rt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nt=function(e,t){return e.__v.__b-t.__v.__b},re.__r=0,ot=/(PointerCapture)$|Capture$/i,xe=0,me=Ie(!1),ye=Ie(!0);var ne,S,ue,Be,be=0,ft=[],b=m,Me=b.__b,Re=b.__r,We=b.diffed,Fe=b.__c,Ne=b.unmount,je=b.__;function pt(e,t){b.__h&&b.__h(S,e,be||t),be=0;var r=S.__H||(S.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Ee(e,t){var r=pt(ne++,3);!b.__s&&ht(r.__H,t)&&(r.__=e,r.u=t,S.__H.__h.push(r))}function Ut(e){return be=5,ze(function(){return{current:e}},[])}function ze(e,t){var r=pt(ne++,7);return ht(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function Dt(){for(var e;e=ft.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(te),e.__H.__h.forEach(we),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){S=null,Me&&Me(e)},b.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),je&&je(e,t)},b.__r=function(e){Re&&Re(e),ne=0;var t=(S=e.__c).__H;t&&(ue===S?(t.__h=[],S.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(te),t.__h.forEach(we),t.__h=[],ne=0)),ue=S},b.diffed=function(e){We&&We(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ft.push(t)!==1&&Be===b.requestAnimationFrame||((Be=b.requestAnimationFrame)||It)(Dt)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),ue=S=null},b.__c=function(e,t){t.some(function(r){try{r.__h.forEach(te),r.__h=r.__h.filter(function(n){return!n.__||we(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],b.__e(n,r.__v)}}),Fe&&Fe(e,t)},b.unmount=function(e){Ne&&Ne(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{te(n)}catch(o){t=o}}),r.__H=void 0,t&&b.__e(t,r.__v))};var Ve=typeof requestAnimationFrame=="function";function It(e){var t,r=function(){clearTimeout(n),Ve&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);Ve&&(t=requestAnimationFrame(r))}function te(e){var t=S,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),S=t}function we(e){var t=S;e.__c=e.__(),S=t}function ht(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}var Bt=Symbol.for("preact-signals");function Le(){if(I>1)I--;else{for(var e,t=!1;V!==void 0;){var r=V;for(V=void 0,ke++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&mt(r))try{r.c()}catch(o){t||(e=o,t=!0)}r=n}}if(ke=0,I--,t)throw e}}var v=void 0;function _t(e){var t=v;v=void 0;try{return e()}finally{v=t}}var V=void 0,I=0,ke=0,oe=0;function vt(e){if(v!==void 0){var t=e.n;if(t===void 0||t.t!==v)return t={i:0,S:e,p:v.s,n:void 0,t:v,e:void 0,x:void 0,r:t},v.s!==void 0&&(v.s.n=t),v.s=t,e.n=t,32&v.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=v.s,t.n=void 0,v.s.n=t,v.s=t),t}}function x(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}x.prototype.brand=Bt;x.prototype.h=function(){return!0};x.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:_t(function(){var n;(n=t.W)==null||n.call(t)}))};x.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&_t(function(){var o;(o=t.Z)==null||o.call(t)}))}};x.prototype.subscribe=function(e){var t=this;return Oe(function(){var r=t.value,n=v;v=void 0;try{e(r)}finally{v=n}},{name:"sub"})};x.prototype.valueOf=function(){return this.value};x.prototype.toString=function(){return this.value+""};x.prototype.toJSON=function(){return this.value};x.prototype.peek=function(){var e=v;v=void 0;try{return this.value}finally{v=e}};Object.defineProperty(x.prototype,"value",{get:function(){var e=vt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(ke>100)throw new Error("Cycle detected");this.v=e,this.i++,oe++,I++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Le()}}}});function T(e,t){return new x(e,t)}function mt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function yt(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function gt(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function U(e,t){x.call(this,void 0),this.x=e,this.s=void 0,this.g=oe-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}U.prototype=new x;U.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===oe))return!0;if(this.g=oe,this.f|=1,this.i>0&&!mt(this))return this.f&=-2,!0;var e=v;try{yt(this),v=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return v=e,gt(this),this.f&=-2,!0};U.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}x.prototype.S.call(this,e)};U.prototype.U=function(e){if(this.t!==void 0&&(x.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};U.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(U.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=vt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Mt(e,t){return new U(e,t)}function bt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){I++;var r=v;v=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,Te(e),n}finally{v=r,Le()}}}function Te(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,bt(e)}function Rt(e){if(v!==this)throw new Error("Out-of-order effect");gt(this),v=e,this.f&=-2,8&this.f&&Te(this),Le()}function R(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}R.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};R.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,bt(this),yt(this),I++;var e=v;return v=this,Rt.bind(this,e)};R.prototype.N=function(){2&this.f||(this.f|=2,this.o=V,V=this)};R.prototype.d=function(){this.f|=8,1&this.f||Te(this)};R.prototype.dispose=function(){this.d()};function Oe(e,t){var r=new R(e,t);try{r.c()}catch(o){throw r.d(),o}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var Z;function W(e,t){m[e]=t.bind(null,m[e]||function(){})}function ie(e){if(Z){var t=Z;Z=void 0,t()}Z=e&&e.S()}function wt(e){var t=this,r=e.data,n=$(r);n.value=r;var o=ze(function(){for(var i=t.__v;i=i.__;)if(i.__c){i.__c.__$f|=4;break}return t.__$u.c=function(){var s,c=t.__$u.S(),u=o.value;c(),tt(u)||((s=t.base)==null?void 0:s.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=u},Mt(function(){var s=n.value.value;return s===0?0:s===!0?"":s||""})},[]);return o.value}wt.displayName="_st";Object.defineProperties(x.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:wt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});W("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var o in n)if(o!=="children"){var i=n[o];i instanceof x&&(r||(t.__np=r={}),r[o]=i,n[o]=i.peek())}}e(t)});W("__r",function(e,t){e(t),ie();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(o){var i;return Oe(function(){i=this}),i.c=function(){n.__$f|=1,n.setState({})},i}())),ie(r)});W("__e",function(e,t,r,n){ie(),e(t,r,n)});W("diffed",function(e,t){ie();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,o=t.props;if(n){var i=r.U;if(i)for(var s in i){var c=i[s];c!==void 0&&!(s in n)&&(c.d(),i[s]=void 0)}else r.U=i={};for(var u in n){var d=i[u],p=n[u];d===void 0?(d=Wt(r,u,p,o),i[u]=d):d.o(p,o)}}}e(t)});function Wt(e,t,r,n){var o=t in e&&e.ownerSVGElement===void 0,i=T(r);return{o:function(s,c){i.value=s,n=c},d:Oe(function(){var s=i.value.value;n[t]!==s&&(n[t]=s,o?e[t]=s:s?e.setAttribute(t,s):e.removeAttribute(t))})}}W("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var o in n){var i=n[o];i&&i.d()}}}}else{var s=t.__c;if(s){var c=s.__$u;c&&(s.__$u=void 0,c.d())}}e(t)});W("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});j.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var o in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var i in e)if(i!=="__source"&&e[i]!==this.props[i])return!0;for(var s in this.props)if(!(s in e))return!0;return!1};function $(e){return ze(function(){return T(e)},[])}function He(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function Ft(e,t){let r;const n=()=>{if(r)return r;const o=indexedDB.open(e);return o.onupgradeneeded=()=>o.result.createObjectStore(t),r=He(o),r.then(i=>{i.onclose=()=>r=void 0},()=>{}),r};return(o,i)=>n().then(s=>i(s.transaction(t,o).objectStore(t)))}let fe;function kt(){return fe||(fe=Ft("keyval-store","keyval")),fe}function xt(e,t=kt()){return t("readonly",r=>He(r.get(e)))}function Nt(e,t,r=kt()){return r("readwrite",n=>(n.put(t,e),He(n.transaction)))}var jt=0;function l(e,t,r,n,o,i){t||(t={});var s,c,u=t;if("ref"in u)for(c in u={},t)c=="ref"?s=t[c]:u[c]=t[c];var d={type:e,props:u,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--jt,__i:-1,__u:0,__source:o,__self:i};if(typeof e=="function"&&(s=e.defaultProps))for(c in s)u[c]===void 0&&(u[c]=s[c]);return m.vnode&&m.vnode(d),d}var Vt=Object.defineProperty,Kt=(e,t)=>{for(var r in t)Vt(e,r,{get:t[r],enumerable:!0})};function Gt(e){return se=new St(e),se}function Yt(){if(!se)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return se}var St,se;async function qt(e,t){const r=Yt(),n=await r.getProduct(e);if(!n.variants.edges.length)throw new Error("Product has no variants");const i=[{variantId:n.variants.edges[0].node.id,quantity:1}],s=await r.createCheckout(i);if(t&&typeof localStorage<"u"){const c={checkoutId:s.id,bookSlug:t,createdAt:Date.now()};localStorage.setItem(Xt,JSON.stringify(c))}return s.webUrl}function Jt(e){return e.webUrl}var Xt;async function Zt(e,t){const r={bookSlug:e,orderId:t==null?void 0:t.orderId,email:t==null?void 0:t.email,unlockedAt:Date.now()};await Nt(`${Y}${e}`,r),typeof localStorage<"u"&&localStorage.setItem(`${Y}${e}`,JSON.stringify(r))}async function Qt(e){if(typeof localStorage<"u"&&localStorage.getItem(`${Y}${e}`))return!0;try{return!!await xt(`${Y}${e}`)}catch{return!1}}async function er(e){try{return await xt(`${Y}${e}`)||null}catch{return null}}async function tr(e,t){const r=await er(e);return!r||!r.orderId?!1:r.orderId===t}var Y,rr={};Kt(rr,{ShopifyClient:()=>St,createCheckout:()=>qt,createShopifyClient:()=>Gt,getCheckoutUrl:()=>Jt,isContentUnlocked:()=>Qt,unlockContent:()=>Zt,verifyPurchase:()=>tr});function nr({prev:e,next:t}){return!e&&!t?null:l("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[l("div",{class:"pressy-nav-inner",children:[e?l("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[l("span",{class:"pressy-nav-direction",children:"Previous"}),l("span",{class:"pressy-nav-title",children:e.title})]}):l("div",{class:"pressy-nav-placeholder"}),t?l("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[l("span",{class:"pressy-nav-direction",children:"Next"}),l("span",{class:"pressy-nav-title",children:t.title})]}):l("div",{class:"pressy-nav-placeholder"})]}),l("style",{children:`
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
      `})]})}function or({items:e,onNavigate:t,activeSlug:r}){const n=o=>{const i=document.getElementById(o);i&&i.scrollIntoView({behavior:"smooth"}),t==null||t()};return l("nav",{class:"pressy-toc","aria-label":"Table of contents",children:[l("h2",{class:"pressy-toc-title",children:"Contents"}),l("ul",{class:"pressy-toc-list",children:e.map(o=>l("li",{class:`pressy-toc-item pressy-toc-level-${o.level}`,"data-active":r===o.slug,children:l("a",{href:`#${o.slug}`,onClick:i=>{i.preventDefault(),n(o.slug)},class:"pressy-toc-link",children:o.text})},o.slug))}),l("style",{children:`
        .pressy-toc {
          font-size: var(--font-size-sm);
        }

        .pressy-toc-title {
          font-size: var(--font-size-base);
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--color-heading);
        }

        .pressy-toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .pressy-toc-item {
          margin-bottom: 0.5rem;
        }

        .pressy-toc-level-1 {
          padding-left: 0;
        }

        .pressy-toc-level-2 {
          padding-left: 1rem;
        }

        .pressy-toc-level-3 {
          padding-left: 2rem;
        }

        .pressy-toc-level-4 {
          padding-left: 3rem;
        }

        .pressy-toc-link {
          color: var(--color-text-muted);
          text-decoration: none;
          transition: color 0.15s;
          display: block;
          padding: 0.25rem 0;
        }

        .pressy-toc-link:hover {
          color: var(--color-text);
        }

        .pressy-toc-item[data-active="true"] .pressy-toc-link {
          color: var(--color-accent);
          font-weight: 500;
        }
      `})]})}function ir(){const e=$(!1),t=$({x:0,y:0}),r=$(""),n=Ut(null);Ee(()=>{const c=()=>{const u=window.getSelection();if(!u||u.isCollapsed){e.value=!1;return}const d=u.toString().trim();if(d.length<5){e.value=!1;return}r.value=d;const a=u.getRangeAt(0).getBoundingClientRect();t.value={x:a.left+a.width/2,y:a.top-10},e.value=!0};return document.addEventListener("selectionchange",c),document.addEventListener("mouseup",c),()=>{document.removeEventListener("selectionchange",c),document.removeEventListener("mouseup",c)}},[]);const o=()=>{const c=encodeURIComponent(r.value),u=new URL(window.location.href);return u.hash=`:~:text=${c}`,u.toString()},i=async()=>{const c=o(),u=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:u,url:c}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${u}

${c}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var d;(d=n.current)==null||d.classList.remove("copied")},2e3))}catch(d){console.error("Failed to copy to clipboard:",d)}},s=async()=>{const c=o();try{await navigator.clipboard.writeText(c),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var u;(u=n.current)==null||u.classList.remove("copied")},2e3))}catch(u){console.error("Failed to copy link:",u)}};return e.value?l("div",{ref:n,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[l("button",{class:"pressy-share-btn",onClick:i,"aria-label":"Share selected text",title:"Share quote",children:l("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:l("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),l("button",{class:"pressy-copy-link-btn",onClick:s,"aria-label":"Copy link to selected text",title:"Copy link",children:l("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:l("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),l("style",{children:`
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
      `})]}):null}var sr=["light","dark","sepia"];function ar(){const e=$(!1),t=$((typeof localStorage<"u"?localStorage.getItem("pressy-theme"):"light")||"light"),r=i=>{t.value=i,document.documentElement.setAttribute("data-theme",i),localStorage.setItem("pressy-theme",i),e.value=!1},n={light:"☀️",dark:"🌙",sepia:"📜"},o={light:"Light",dark:"Dark",sepia:"Sepia"};return l("div",{class:"pressy-theme-switcher",children:[l("button",{class:"pressy-theme-toggle",onClick:()=>e.value=!e.value,"aria-label":"Change theme","aria-expanded":e.value,children:l("span",{class:"pressy-theme-icon",children:n[t.value]})}),e.value&&l("div",{class:"pressy-theme-menu",role:"menu",children:sr.map(i=>l("button",{class:"pressy-theme-option",onClick:()=>r(i),role:"menuitem","data-active":t.value===i,children:[l("span",{class:"pressy-theme-icon",children:n[i]}),l("span",{class:"pressy-theme-label",children:o[i]})]},i))}),l("style",{children:`
        .pressy-theme-switcher {
          position: relative;
        }

        .pressy-theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 0.5rem;
          transition: background 0.15s;
          font-size: 1.25rem;
        }

        .pressy-theme-toggle:hover {
          background: var(--color-bg-muted);
        }

        .pressy-theme-menu {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 0.5rem;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 0.5rem;
          box-shadow: var(--shadow-md);
          overflow: hidden;
          z-index: 100;
        }

        .pressy-theme-option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.75rem 1rem;
          border: none;
          background: transparent;
          cursor: pointer;
          text-align: left;
          color: var(--color-text);
          transition: background 0.15s;
        }

        .pressy-theme-option:hover {
          background: var(--color-bg-subtle);
        }

        .pressy-theme-option[data-active="true"] {
          background: var(--color-bg-muted);
          font-weight: 500;
        }

        .pressy-theme-label {
          font-size: var(--font-size-sm);
        }
      `})]})}function lr(){const e=$(!navigator.onLine),t=$(!1);return Ee(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?l("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?l(A,{children:[l("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:l("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),l("span",{children:"You're offline"})]}):l(A,{children:[l("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:l("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),l("span",{children:"Back online"})]}),l("style",{children:`
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
      `})]}):null}function $t({children:e,title:t,bookTitle:r,chapterTitle:n,prevChapter:o,nextChapter:i,toc:s,showDropCap:c=!0}){const u=$(!1);return l("div",{class:"pressy-reader",children:[l("header",{class:"pressy-reader-header",children:[l("div",{class:"pressy-reader-header-left",children:r&&l("a",{href:"../",class:"pressy-book-link",children:r})}),l("div",{class:"pressy-reader-header-center",children:n&&l("span",{class:"pressy-chapter-title",children:n})}),l("div",{class:"pressy-reader-header-right",children:[s&&s.length>0&&l("button",{class:"pressy-toc-toggle",onClick:()=>u.value=!u.value,"aria-label":"Toggle table of contents",children:l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:l("path",{d:"M3 4h14v2H3V4zm0 5h14v2H3V9zm0 5h14v2H3v-2z"})})}),l(ar,{})]})]}),u.value&&s&&l("aside",{class:"pressy-toc-sidebar",children:l(or,{items:s,onNavigate:()=>u.value=!1})}),l("main",{class:"pressy-reader-main",children:l("article",{class:`pressy-prose ${c?"":"no-drop-cap"}`,"data-drop-cap":c,children:e})}),l(ir,{}),l(nr,{prev:o,next:i}),l(lr,{}),l("style",{children:`
        .pressy-reader {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .pressy-reader-header {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.5rem;
          background: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }

        .pressy-reader-header-left,
        .pressy-reader-header-right {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pressy-reader-header-center {
          flex: 1;
          text-align: center;
        }

        .pressy-book-link {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
          text-decoration: none;
        }

        .pressy-book-link:hover {
          color: var(--color-text);
        }

        .pressy-chapter-title {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
        }

        .pressy-toc-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border: none;
          background: transparent;
          color: var(--color-text-muted);
          cursor: pointer;
          border-radius: 0.5rem;
          transition: background 0.15s, color 0.15s;
        }

        .pressy-toc-toggle:hover {
          background: var(--color-bg-muted);
          color: var(--color-text);
        }

        .pressy-toc-sidebar {
          position: fixed;
          top: 3.5rem;
          right: 0;
          width: 300px;
          max-width: 90vw;
          height: calc(100vh - 3.5rem);
          background: var(--color-bg);
          border-left: 1px solid var(--color-border);
          overflow-y: auto;
          padding: 1rem;
          z-index: 90;
        }

        .pressy-reader-main {
          flex: 1;
          padding: 2rem 0;
        }
      `})]})}var cr="pressy-cached-books";function Ke(){try{const e=localStorage.getItem(cr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function dr({bookSlug:e,chapterUrls:t,cachedBooks:r,cacheProgress:n,onDownload:o,onRemove:i}){var d;const s=$(Ke().has(e)||r.value.has(e)),c=$(((d=n.value)==null?void 0:d.bookSlug)===e),u=$(null);return Ee(()=>{const p=()=>{var f;s.value=Ke().has(e)||r.value.has(e),c.value=((f=n.value)==null?void 0:f.bookSlug)===e;const _=n.value;u.value=_&&_.bookSlug===e?Math.round(_.current/_.total*100):null},a=setInterval(p,500);return p(),()=>clearInterval(a)},[e]),s.value?l("div",{class:"pressy-download-book",children:[l("div",{class:"pressy-download-status",children:[l("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:l("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),l("span",{children:"Available offline"})]}),l("button",{class:"pressy-download-remove",onClick:()=>i(e),"aria-label":"Remove offline copy",children:"Remove"}),l("style",{children:pe})]}):c.value?l("div",{class:"pressy-download-book",children:[l("div",{class:"pressy-download-progress",children:[l("div",{class:"pressy-download-bar",children:l("div",{class:"pressy-download-bar-fill",style:{width:`${u.value||0}%`}})}),l("span",{class:"pressy-download-percent",children:[u.value||0,"%"]})]}),l("style",{children:pe})]}):l("div",{class:"pressy-download-book",children:[l("button",{class:"pressy-download-btn",onClick:()=>o(e,t),"aria-label":"Download for offline reading",children:[l("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:l("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),l("span",{children:"Download for offline"})]}),l("style",{children:pe})]})}var pe=`
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
`;function ur({id:e,children:t}){const r=$(!1);return l(A,{children:[l("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&l("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,l("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),l("style",{children:`
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
      `})]})}function fr({children:e,title:t}){return l("aside",{class:"pressy-aside",children:[t&&l("strong",{class:"pressy-aside-title",children:t}),l("div",{class:"pressy-aside-content",children:e}),l("style",{children:`
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
      `})]})}function Ge({src:e,alt:t,caption:r,wide:n,children:o}){return l("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[l("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||o)&&l("figcaption",{class:"pressy-figure-caption",children:r||o}),l("style",{children:`
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
      `})]})}var pr={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},hr={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function _r({type:e="note",title:t,children:r}){return l("div",{class:`pressy-callout pressy-callout-${e}`,children:[l("div",{class:"pressy-callout-header",children:[l("span",{class:"pressy-callout-icon",children:pr[e]}),l("strong",{class:"pressy-callout-title",children:t||hr[e]})]}),l("div",{class:"pressy-callout-content",children:r}),l("style",{children:`
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
      `})]})}function Ye({variant:e="asterisks"}){return l("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&l("span",{children:"* * *"}),e==="ornament"&&l("span",{children:"❧"}),l("style",{children:`
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
      `})]})}var vr={Footnote:ur,Aside:fr,Figure:Ge,Callout:_r,SceneBreak:Ye,img:Ge,hr:Ye},mr={};function Ct(){return{...vr,...mr}}var Et="pressy-cached-books",he=T("online"),ae=T(null),_e=T(!1);function yr(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(Et);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var E=T(yr());typeof window<"u"&&(he.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{he.value="online"}),window.addEventListener("offline",()=>{he.value="offline"}));async function gr(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",br),navigator.serviceWorker.controller?_e.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{_e.value=!0}),n.addEventListener("updatefound",()=>{const o=n.installing;o&&o.addEventListener("statechange",()=>{o.state==="activated"&&(_e.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function K(){try{localStorage.setItem(Et,JSON.stringify([...E.value]))}catch{}}function br(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:o}=e.data;ae.value={bookSlug:r,current:n,total:o}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;ae.value=null;const n=new Set(E.value);n.add(r),E.value=n,K()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const o of r){const i=o.match(/\/books\/([^/]+)/);i&&n.add(i[1])}E.value=n,K()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(E.value);n.delete(r),E.value=n,K()}}async function wr(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(o=>o.startsWith("http")?o:`${window.location.origin}${o}`);ae.value={bookSlug:e,current:0,total:r.length};const n=new Set(E.value);return n.add(e),E.value=n,K(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}async function kr(e){const t=new Set(E.value);if(t.delete(e),E.value=t,K(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const o of n)o.url.includes(`/books/${e}`)&&await r.delete(o);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var qe=T("/"),xr=T("light"),Je=T(!navigator.onLine),Sr="pressy",$r=1,Xe="reading-progress",Ze="unlocks",Q=null;async function Cr(){return Q||new Promise((e,t)=>{const r=indexedDB.open(Sr,$r);r.onerror=()=>t(r.error),r.onsuccess=()=>{Q=r.result,e(Q)},r.onupgradeneeded=n=>{const o=n.target.result;o.objectStoreNames.contains(Xe)||o.createObjectStore(Xe,{keyPath:"chapterSlug"}),o.objectStoreNames.contains(Ze)||o.createObjectStore(Ze,{keyPath:"bookSlug"})}})}function Qe(e){xr.value=e,document.documentElement.setAttribute("data-theme",e),localStorage.setItem("pressy-theme",e)}function Er(){const e=localStorage.getItem("pressy-theme");e?Qe(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&Qe("dark")}function zr(){window.addEventListener("online",()=>{Je.value=!1}),window.addEventListener("offline",()=>{Je.value=!0})}function ve(e){var r,n;const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return h("div",{class:"pressy-home"},h("header",{class:"pressy-home-header"},h("h1",null,t),((n=e.books[0])==null?void 0:n.metadata.description)&&h("p",{class:"pressy-home-desc"},e.books[0].metadata.description)),e.books.length>0&&h("section",{class:"pressy-home-section"},h("h2",null,"Chapters"),h("nav",{class:"pressy-chapter-list"},...e.books.flatMap(o=>o.chapters.map(i=>h("a",{href:`${M}/books/${o.slug}/${i.slug}`,class:"pressy-chapter-link"},h("span",{class:"pressy-chapter-order"},`${i.order}.`),h("span",null,i.title)))))),e.articles.length>0&&h("section",{class:"pressy-home-section"},h("h2",null,"Articles"),h("nav",{class:"pressy-chapter-list"},...e.articles.map(o=>h("a",{href:`${M}/articles/${o.slug}`,class:"pressy-chapter-link"},o.metadata.title)))),h("style",null,zt))}function Lr(e){const t=e.chapters.map(r=>`/books/${e.slug}/${r.slug}`);return h("div",{class:"pressy-home"},h("header",{class:"pressy-home-header"},h("h1",null,e.metadata.title),h("p",{class:"pressy-home-author"},`by ${e.metadata.author}`),e.metadata.description&&h("p",{class:"pressy-home-desc"},e.metadata.description)),h(dr,{bookSlug:e.slug,chapterUrls:t,cachedBooks:E,cacheProgress:ae,onDownload:wr,onRemove:kr}),h("section",{class:"pressy-home-section"},h("h2",null,"Chapters"),h("nav",{class:"pressy-chapter-list"},...e.chapters.map(r=>h("a",{href:`${M}/books/${e.slug}/${r.slug}`,class:"pressy-chapter-link"},h("span",{class:"pressy-chapter-order"},`${r.order}.`),h("span",null,r.title))))),h("style",null,zt))}function Tr(e,t,r){const n=t.split("/"),o=n[2],i=n[3],s=e.books.find(_=>_.slug===o),c=s?s.chapters.findIndex(_=>_.slug===i):-1,u=s==null?void 0:s.chapters[c],d=_=>`${M}/books/${o}/${_.slug}`,p=s&&c>0?{slug:d(s.chapters[c-1]),title:s.chapters[c-1].title}:void 0,a=s&&c>=0&&c<s.chapters.length-1?{slug:d(s.chapters[c+1]),title:s.chapters[c+1].title}:void 0;return h($t,{title:(u==null?void 0:u.title)||i,bookTitle:s==null?void 0:s.metadata.title,prevChapter:p,nextChapter:a,children:h(r,{components:Ct()})})}function Or(e,t,r){const n=t.split("/")[2],o=e.articles.find(i=>i.slug===n);return h($t,{title:(o==null?void 0:o.metadata.title)||n,children:h(r,{components:Ct()})})}var zt=`
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
`;function Hr(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const o=r.indexOf(n);return o>0?r.slice(0,o):""}var M="";function Pr(e,t){M=Hr(e.route),qe.value=e.route,Er(),zr(),Cr(),gr(M),window.addEventListener("popstate",()=>{qe.value=window.location.pathname}),document.addEventListener("click",n=>{const o=n.target.closest("a");if(!o)return;const i=o.getAttribute("href");if(i&&!(i.startsWith("http")||i.startsWith("#"))&&i.startsWith(e.route+"#")){n.preventDefault();const s=i.slice(i.indexOf("#")),c=document.querySelector(s);c&&c.scrollIntoView({behavior:"smooth"});return}});let r;switch(e.routeType){case"home":r=ve(e.manifest);break;case"book":{const n=e.route.split("/")[2],o=e.manifest.books.find(i=>i.slug===n);r=o?Lr(o):h("div",null,"Book not found");break}case"chapter":r=t?Tr(e.manifest,e.route,t):h("div",null,"Loading...");break;case"article":r=t?Or(e.manifest,e.route,t):h("div",null,"Loading...");break;case"books":r=ve(e.manifest);break;case"articles":r=ve(e.manifest);break;default:r=h("div",null,"Page not found")}At(r,document.getElementById("app"))}export{Pr as h,A as k,l as u};
