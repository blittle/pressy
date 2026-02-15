var le,m,et,tt,H,Ue,rt,nt,ot,xe,me,ye,G={},it=[],Tt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ce=Array.isArray;function O(e,t){for(var r in t)e[r]=t[r];return e}function Se(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function p(e,t,r){var n,o,i,s={};for(i in t)i=="key"?n=t[i]:i=="ref"?o=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?le.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return te(e,s,n,o,null)}function te(e,t,r,n,o){var i={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++et,__i:-1,__u:0};return o==null&&m.vnode!=null&&m.vnode(i),i}function U(e){return e.children}function j(e,t){this.props=e,this.context=t}function B(e,t){if(t==null)return e.__?B(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?B(e):null}function st(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return st(e)}}function Ae(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!ne.__r++||Ue!=m.debounceRendering)&&((Ue=m.debounceRendering)||rt)(ne)}function ne(){for(var e,t,r,n,o,i,s,l=1;H.length;)H.length>l&&H.sort(nt),e=H.shift(),l=H.length,e.__d&&(r=void 0,n=void 0,o=(n=(t=e).__v).__e,i=[],s=[],t.__P&&((r=O({},n)).__v=n.__v+1,m.vnode&&m.vnode(r),$e(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,i,o??B(n),!!(32&n.__u),s),r.__v=n.__v,r.__.__k[r.__i]=r,ct(i,r,s),n.__e=n.__=null,r.__e!=o&&st(r)));ne.__r=0}function at(e,t,r,n,o,i,s,l,u,c,_){var a,h,f,w,C,k,g,y=n&&n.__k||it,P=t.length;for(u=Ht(r,t,y,u,P),a=0;a<P;a++)(f=r.__k[a])!=null&&(h=f.__i==-1?G:y[f.__i]||G,f.__i=a,k=$e(e,f,h,o,i,s,l,u,c,_),w=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&Ce(h.ref,null,f),_.push(f.ref,f.__c||w,f)),C==null&&w!=null&&(C=w),(g=!!(4&f.__u))||h.__k===f.__k?u=lt(f,u,e,g):typeof f.type=="function"&&k!==void 0?u=k:w&&(u=w.nextSibling),f.__u&=-7);return r.__e=C,u}function Ht(e,t,r,n,o){var i,s,l,u,c,_=r.length,a=_,h=0;for(e.__k=new Array(o),i=0;i<o;i++)(s=t[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[i]=te(null,s,null,null,null):ce(s)?s=e.__k[i]=te(U,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[i]=te(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[i]=s,u=i+h,s.__=e,s.__b=e.__b+1,l=null,(c=s.__i=Ut(s,r,u,a))!=-1&&(a--,(l=r[c])&&(l.__u|=2)),l==null||l.__v==null?(c==-1&&(o>_?h--:o<_&&h++),typeof s.type!="function"&&(s.__u|=4)):c!=u&&(c==u-1?h--:c==u+1?h++:(c>u?h--:h++,s.__u|=4))):e.__k[i]=null;if(a)for(i=0;i<_;i++)(l=r[i])!=null&&!(2&l.__u)&&(l.__e==n&&(n=B(l)),ut(l,l));return n}function lt(e,t,r,n){var o,i;if(typeof e.type=="function"){for(o=e.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=e,t=lt(o[i],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=B(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Ut(e,t,r,n){var o,i,s,l=e.key,u=e.type,c=t[r],_=c!=null&&(2&c.__u)==0;if(c===null&&l==null||_&&l==c.key&&u==c.type)return r;if(n>(_?1:0)){for(o=r-1,i=r+1;o>=0||i<t.length;)if((c=t[s=o>=0?o--:i++])!=null&&!(2&c.__u)&&l==c.key&&u==c.type)return s}return-1}function De(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Tt.test(t)?r:r+"px"}function Z(e,t,r,n,o){var i,s;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||De(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||De(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(ot,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=r,r?n?r.u=n.u:(r.u=xe,e.addEventListener(t,i?ye:me,i)):e.removeEventListener(t,i?ye:me,i);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Ie(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=xe++;else if(t.t<r.u)return;return r(m.event?m.event(t):t)}}}function $e(e,t,r,n,o,i,s,l,u,c){var _,a,h,f,w,C,k,g,y,P,T,J,W,He,X,F,de,E=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(u=!!(32&r.__u),i=[l=t.__e=r.__e]),(_=m.__b)&&_(t);e:if(typeof E=="function")try{if(g=t.props,y="prototype"in E&&E.prototype.render,P=(_=E.contextType)&&n[_.__c],T=_?P?P.props.value:_.__:n,r.__c?k=(a=t.__c=r.__c).__=a.__E:(y?t.__c=a=new E(g,T):(t.__c=a=new j(g,T),a.constructor=E,a.render=Dt),P&&P.sub(a),a.state||(a.state={}),a.__n=n,h=a.__d=!0,a.__h=[],a._sb=[]),y&&a.__s==null&&(a.__s=a.state),y&&E.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=O({},a.__s)),O(a.__s,E.getDerivedStateFromProps(g,a.__s))),f=a.props,w=a.state,a.__v=t,h)y&&E.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),y&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(y&&E.getDerivedStateFromProps==null&&g!==f&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(g,T),t.__v==r.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(g,a.__s,T)===!1){for(t.__v!=r.__v&&(a.props=g,a.state=a.__s,a.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(D){D&&(D.__=t)}),J=0;J<a._sb.length;J++)a.__h.push(a._sb[J]);a._sb=[],a.__h.length&&s.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(g,a.__s,T),y&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(f,w,C)})}if(a.context=T,a.props=g,a.__P=e,a.__e=!1,W=m.__r,He=0,y){for(a.state=a.__s,a.__d=!1,W&&W(t),_=a.render(a.props,a.state,a.context),X=0;X<a._sb.length;X++)a.__h.push(a._sb[X]);a._sb=[]}else do a.__d=!1,W&&W(t),_=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++He<25);a.state=a.__s,a.getChildContext!=null&&(n=O(O({},n),a.getChildContext())),y&&!h&&a.getSnapshotBeforeUpdate!=null&&(C=a.getSnapshotBeforeUpdate(f,w)),F=_,_!=null&&_.type===U&&_.key==null&&(F=dt(_.props.children)),l=at(e,ce(F)?F:[F],t,r,n,o,i,s,l,u,c),a.base=t.__e,t.__u&=-161,a.__h.length&&s.push(a),k&&(a.__E=a.__=null)}catch(D){if(t.__v=null,u||i!=null)if(D.then){for(t.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;i[i.indexOf(l)]=null,t.__e=l}else{for(de=i.length;de--;)Se(i[de]);ge(t)}else t.__e=r.__e,t.__k=r.__k,D.then||ge(t);m.__e(D,t,r)}else i==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=At(r.__e,t,r,n,o,i,s,u,c);return(_=m.diffed)&&_(t),128&t.__u?void 0:l}function ge(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(ge)}function ct(e,t,r){for(var n=0;n<r.length;n++)Ce(r[n],r[++n],r[++n]);m.__c&&m.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){m.__e(i,o.__v)}})}function dt(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:ce(e)?e.map(dt):O({},e)}function At(e,t,r,n,o,i,s,l,u){var c,_,a,h,f,w,C,k=r.props||G,g=t.props,y=t.type;if(y=="svg"?o="http://www.w3.org/2000/svg":y=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(c=0;c<i.length;c++)if((f=i[c])&&"setAttribute"in f==!!y&&(y?f.localName==y:f.nodeType==3)){e=f,i[c]=null;break}}if(e==null){if(y==null)return document.createTextNode(g);e=document.createElementNS(o,y,g.is&&g),l&&(m.__m&&m.__m(t,i),l=!1),i=null}if(y==null)k===g||l&&e.data==g||(e.data=g);else{if(i=i&&le.call(e.childNodes),!l&&i!=null)for(k={},c=0;c<e.attributes.length;c++)k[(f=e.attributes[c]).name]=f.value;for(c in k)if(f=k[c],c!="children"){if(c=="dangerouslySetInnerHTML")a=f;else if(!(c in g)){if(c=="value"&&"defaultValue"in g||c=="checked"&&"defaultChecked"in g)continue;Z(e,c,null,f,o)}}for(c in g)f=g[c],c=="children"?h=f:c=="dangerouslySetInnerHTML"?_=f:c=="value"?w=f:c=="checked"?C=f:l&&typeof f!="function"||k[c]===f||Z(e,c,f,k[c],o);if(_)l||a&&(_.__html==a.__html||_.__html==e.innerHTML)||(e.innerHTML=_.__html),t.__k=[];else if(a&&(e.innerHTML=""),at(t.type=="template"?e.content:e,ce(h)?h:[h],t,r,n,y=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:r.__k&&B(r,0),l,u),i!=null)for(c=i.length;c--;)Se(i[c]);l||(c="value",y=="progress"&&w==null?e.removeAttribute("value"):w!=null&&(w!==e[c]||y=="progress"&&!w||y=="option"&&w!=k[c])&&Z(e,c,w,k[c],o),c="checked",C!=null&&C!=e[c]&&Z(e,c,C,k[c],o))}return e}function Ce(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){m.__e(o,r)}}function ut(e,t,r){var n,o;if(m.unmount&&m.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||Ce(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){m.__e(i,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&ut(n[o],t,r||typeof e.type!="function");r||Se(e.__e),e.__c=e.__=e.__e=void 0}function Dt(e,t,r){return this.constructor(e,r)}function It(e,t,r){var n,o,i,s;t==document&&(t=document.documentElement),m.__&&m.__(e,t),o=(n=!1)?null:t.__k,i=[],s=[],$e(t,e=t.__k=p(U,null,[e]),o||G,G,t.namespaceURI,o?null:t.firstChild?le.call(t.childNodes):null,i,o?o.__e:t.firstChild,n,s),ct(i,e,s)}le=it.slice,m={__e:function(e,t,r,n){for(var o,i,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),s=o.__d),s)return o.__E=o}catch(l){e=l}throw e}},et=0,tt=function(e){return e!=null&&e.constructor===void 0},j.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=O({},this.state),typeof e=="function"&&(e=e(O({},r),this.props)),e&&O(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ae(this))},j.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ae(this))},j.prototype.render=U,H=[],rt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nt=function(e,t){return e.__v.__b-t.__v.__b},ne.__r=0,ot=/(PointerCapture)$|Capture$/i,xe=0,me=Ie(!1),ye=Ie(!0);var oe,S,ue,Be,be=0,ft=[],b=m,Me=b.__b,Re=b.__r,Ne=b.diffed,We=b.__c,Fe=b.unmount,je=b.__;function _t(e,t){b.__h&&b.__h(S,e,be||t),be=0;var r=S.__H||(S.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Ee(e,t){var r=_t(oe++,3);!b.__s&&pt(r.__H,t)&&(r.__=e,r.u=t,S.__H.__h.push(r))}function Bt(e){return be=5,Le(function(){return{current:e}},[])}function Le(e,t){var r=_t(oe++,7);return pt(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function Mt(){for(var e;e=ft.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(re),e.__H.__h.forEach(we),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){S=null,Me&&Me(e)},b.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),je&&je(e,t)},b.__r=function(e){Re&&Re(e),oe=0;var t=(S=e.__c).__H;t&&(ue===S?(t.__h=[],S.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(re),t.__h.forEach(we),t.__h=[],oe=0)),ue=S},b.diffed=function(e){Ne&&Ne(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ft.push(t)!==1&&Be===b.requestAnimationFrame||((Be=b.requestAnimationFrame)||Rt)(Mt)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),ue=S=null},b.__c=function(e,t){t.some(function(r){try{r.__h.forEach(re),r.__h=r.__h.filter(function(n){return!n.__||we(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],b.__e(n,r.__v)}}),We&&We(e,t)},b.unmount=function(e){Fe&&Fe(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{re(n)}catch(o){t=o}}),r.__H=void 0,t&&b.__e(t,r.__v))};var Ke=typeof requestAnimationFrame=="function";function Rt(e){var t,r=function(){clearTimeout(n),Ke&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);Ke&&(t=requestAnimationFrame(r))}function re(e){var t=S,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),S=t}function we(e){var t=S;e.__c=e.__(),S=t}function pt(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}var Nt=Symbol.for("preact-signals");function Oe(){if(I>1)I--;else{for(var e,t=!1;K!==void 0;){var r=K;for(K=void 0,ke++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&mt(r))try{r.c()}catch(o){t||(e=o,t=!0)}r=n}}if(ke=0,I--,t)throw e}}var v=void 0;function ht(e){var t=v;v=void 0;try{return e()}finally{v=t}}var K=void 0,I=0,ke=0,ie=0;function vt(e){if(v!==void 0){var t=e.n;if(t===void 0||t.t!==v)return t={i:0,S:e,p:v.s,n:void 0,t:v,e:void 0,x:void 0,r:t},v.s!==void 0&&(v.s.n=t),v.s=t,e.n=t,32&v.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=v.s,t.n=void 0,v.s.n=t,v.s=t),t}}function x(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}x.prototype.brand=Nt;x.prototype.h=function(){return!0};x.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:ht(function(){var n;(n=t.W)==null||n.call(t)}))};x.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&ht(function(){var o;(o=t.Z)==null||o.call(t)}))}};x.prototype.subscribe=function(e){var t=this;return Pe(function(){var r=t.value,n=v;v=void 0;try{e(r)}finally{v=n}},{name:"sub"})};x.prototype.valueOf=function(){return this.value};x.prototype.toString=function(){return this.value+""};x.prototype.toJSON=function(){return this.value};x.prototype.peek=function(){var e=v;v=void 0;try{return this.value}finally{v=e}};Object.defineProperty(x.prototype,"value",{get:function(){var e=vt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(ke>100)throw new Error("Cycle detected");this.v=e,this.i++,ie++,I++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Oe()}}}});function z(e,t){return new x(e,t)}function mt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function yt(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function gt(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function A(e,t){x.call(this,void 0),this.x=e,this.s=void 0,this.g=ie-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}A.prototype=new x;A.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ie))return!0;if(this.g=ie,this.f|=1,this.i>0&&!mt(this))return this.f&=-2,!0;var e=v;try{yt(this),v=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return v=e,gt(this),this.f&=-2,!0};A.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}x.prototype.S.call(this,e)};A.prototype.U=function(e){if(this.t!==void 0&&(x.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};A.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(A.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=vt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Wt(e,t){return new A(e,t)}function bt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){I++;var r=v;v=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,ze(e),n}finally{v=r,Oe()}}}function ze(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,bt(e)}function Ft(e){if(v!==this)throw new Error("Out-of-order effect");gt(this),v=e,this.f&=-2,8&this.f&&ze(this),Oe()}function R(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}R.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};R.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,bt(this),yt(this),I++;var e=v;return v=this,Ft.bind(this,e)};R.prototype.N=function(){2&this.f||(this.f|=2,this.o=K,K=this)};R.prototype.d=function(){this.f|=8,1&this.f||ze(this)};R.prototype.dispose=function(){this.d()};function Pe(e,t){var r=new R(e,t);try{r.c()}catch(o){throw r.d(),o}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var Q;function N(e,t){m[e]=t.bind(null,m[e]||function(){})}function se(e){if(Q){var t=Q;Q=void 0,t()}Q=e&&e.S()}function wt(e){var t=this,r=e.data,n=L(r);n.value=r;var o=Le(function(){for(var i=t.__v;i=i.__;)if(i.__c){i.__c.__$f|=4;break}return t.__$u.c=function(){var s,l=t.__$u.S(),u=o.value;l(),tt(u)||((s=t.base)==null?void 0:s.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=u},Wt(function(){var s=n.value.value;return s===0?0:s===!0?"":s||""})},[]);return o.value}wt.displayName="_st";Object.defineProperties(x.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:wt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});N("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var o in n)if(o!=="children"){var i=n[o];i instanceof x&&(r||(t.__np=r={}),r[o]=i,n[o]=i.peek())}}e(t)});N("__r",function(e,t){e(t),se();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(o){var i;return Pe(function(){i=this}),i.c=function(){n.__$f|=1,n.setState({})},i}())),se(r)});N("__e",function(e,t,r,n){se(),e(t,r,n)});N("diffed",function(e,t){se();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,o=t.props;if(n){var i=r.U;if(i)for(var s in i){var l=i[s];l!==void 0&&!(s in n)&&(l.d(),i[s]=void 0)}else r.U=i={};for(var u in n){var c=i[u],_=n[u];c===void 0?(c=jt(r,u,_,o),i[u]=c):c.o(_,o)}}}e(t)});function jt(e,t,r,n){var o=t in e&&e.ownerSVGElement===void 0,i=z(r);return{o:function(s,l){i.value=s,n=l},d:Pe(function(){var s=i.value.value;n[t]!==s&&(n[t]=s,o?e[t]=s:s?e.setAttribute(t,s):e.removeAttribute(t))})}}N("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var o in n){var i=n[o];i&&i.d()}}}}else{var s=t.__c;if(s){var l=s.__$u;l&&(s.__$u=void 0,l.d())}}e(t)});N("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});j.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var o in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var i in e)if(i!=="__source"&&e[i]!==this.props[i])return!0;for(var s in this.props)if(!(s in e))return!0;return!1};function L(e){return Le(function(){return z(e)},[])}function Te(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function Kt(e,t){let r;const n=()=>{if(r)return r;const o=indexedDB.open(e);return o.onupgradeneeded=()=>o.result.createObjectStore(t),r=Te(o),r.then(i=>{i.onclose=()=>r=void 0},()=>{}),r};return(o,i)=>n().then(s=>i(s.transaction(t,o).objectStore(t)))}let fe;function kt(){return fe||(fe=Kt("keyval-store","keyval")),fe}function xt(e,t=kt()){return t("readonly",r=>Te(r.get(e)))}function Vt(e,t,r=kt()){return r("readwrite",n=>(n.put(t,e),Te(n.transaction)))}var Gt=0;function d(e,t,r,n,o,i){t||(t={});var s,l,u=t;if("ref"in u)for(l in u={},t)l=="ref"?s=t[l]:u[l]=t[l];var c={type:e,props:u,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Gt,__i:-1,__u:0,__source:o,__self:i};if(typeof e=="function"&&(s=e.defaultProps))for(l in s)u[l]===void 0&&(u[l]=s[l]);return m.vnode&&m.vnode(c),c}var Yt=Object.defineProperty,qt=(e,t)=>{for(var r in t)Yt(e,r,{get:t[r],enumerable:!0})};function Jt(e){return ae=new St(e),ae}function Xt(){if(!ae)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return ae}var St,ae;async function Zt(e,t){const r=Xt(),n=await r.getProduct(e);if(!n.variants.edges.length)throw new Error("Product has no variants");const i=[{variantId:n.variants.edges[0].node.id,quantity:1}],s=await r.createCheckout(i);if(t&&typeof localStorage<"u"){const l={checkoutId:s.id,bookSlug:t,createdAt:Date.now()};localStorage.setItem(er,JSON.stringify(l))}return s.webUrl}function Qt(e){return e.webUrl}var er;async function tr(e,t){const r={bookSlug:e,orderId:t==null?void 0:t.orderId,email:t==null?void 0:t.email,unlockedAt:Date.now()};await Vt(`${Y}${e}`,r),typeof localStorage<"u"&&localStorage.setItem(`${Y}${e}`,JSON.stringify(r))}async function rr(e){if(typeof localStorage<"u"&&localStorage.getItem(`${Y}${e}`))return!0;try{return!!await xt(`${Y}${e}`)}catch{return!1}}async function nr(e){try{return await xt(`${Y}${e}`)||null}catch{return null}}async function or(e,t){const r=await nr(e);return!r||!r.orderId?!1:r.orderId===t}var Y,ir={};qt(ir,{ShopifyClient:()=>St,createCheckout:()=>Zt,createShopifyClient:()=>Jt,getCheckoutUrl:()=>Qt,isContentUnlocked:()=>rr,unlockContent:()=>tr,verifyPurchase:()=>or});function sr({prev:e,next:t}){return!e&&!t?null:d("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[d("div",{class:"pressy-nav-inner",children:[e?d("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[d("span",{class:"pressy-nav-direction",children:"Previous"}),d("span",{class:"pressy-nav-title",children:e.title})]}):d("div",{class:"pressy-nav-placeholder"}),t?d("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[d("span",{class:"pressy-nav-direction",children:"Next"}),d("span",{class:"pressy-nav-title",children:t.title})]}):d("div",{class:"pressy-nav-placeholder"})]}),d("style",{children:`
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
      `})]})}function ar(){const e=L(!1),t=L({x:0,y:0}),r=L(""),n=Bt(null);Ee(()=>{const l=()=>{const u=window.getSelection();if(!u||u.isCollapsed){e.value=!1;return}const c=u.toString().trim();if(c.length<5){e.value=!1;return}r.value=c;const a=u.getRangeAt(0).getBoundingClientRect();t.value={x:a.left+a.width/2,y:a.top-10},e.value=!0};return document.addEventListener("selectionchange",l),document.addEventListener("mouseup",l),()=>{document.removeEventListener("selectionchange",l),document.removeEventListener("mouseup",l)}},[]);const o=()=>{const l=encodeURIComponent(r.value),u=new URL(window.location.href);return u.hash=`:~:text=${l}`,u.toString()},i=async()=>{const l=o(),u=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:u,url:l}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${u}

${l}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var c;(c=n.current)==null||c.classList.remove("copied")},2e3))}catch(c){console.error("Failed to copy to clipboard:",c)}},s=async()=>{const l=o();try{await navigator.clipboard.writeText(l),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var u;(u=n.current)==null||u.classList.remove("copied")},2e3))}catch(u){console.error("Failed to copy link:",u)}};return e.value?d("div",{ref:n,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[d("button",{class:"pressy-share-btn",onClick:i,"aria-label":"Share selected text",title:"Share quote",children:d("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:d("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),d("button",{class:"pressy-copy-link-btn",onClick:s,"aria-label":"Copy link to selected text",title:"Copy link",children:d("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:d("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),d("style",{children:`
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
      `})]}):null}function lr(){const e=L(!navigator.onLine),t=L(!1);return Ee(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?d("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?d(U,{children:[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:d("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),d("span",{children:"You're offline"})]}):d(U,{children:[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:d("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),d("span",{children:"Back online"})]}),d("style",{children:`
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
      `})]}):null}function $t({children:e,prevChapter:t,nextChapter:r,showDropCap:n=!0}){return d("div",{class:"pressy-reader",children:[d("main",{class:"pressy-reader-main",children:d("article",{class:`pressy-prose ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),d(ar,{}),d(sr,{prev:t,next:r}),d(lr,{}),d("style",{children:`
        .pressy-reader {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .pressy-reader-main {
          flex: 1;
          padding: 2rem 0;
        }
      `})]})}var cr="pressy-cached-books";function Ve(){try{const e=localStorage.getItem(cr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function Ct({bookSlug:e,chapterUrls:t,cachedBooks:r,cacheProgress:n,onDownload:o,onRemove:i}){var c;const s=L(Ve().has(e)||r.value.has(e)),l=L(((c=n.value)==null?void 0:c.bookSlug)===e),u=L(null);return Ee(()=>{const _=()=>{var f;s.value=Ve().has(e)||r.value.has(e),l.value=((f=n.value)==null?void 0:f.bookSlug)===e;const h=n.value;u.value=h&&h.bookSlug===e?Math.round(h.current/h.total*100):null},a=setInterval(_,500);return _(),()=>clearInterval(a)},[e]),s.value?d("div",{class:"pressy-download-book",children:[d("div",{class:"pressy-download-status",children:[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:d("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),d("span",{children:"Available offline"})]}),d("button",{class:"pressy-download-remove",onClick:()=>i(e),"aria-label":"Remove offline copy",children:"Remove"}),d("style",{children:_e})]}):l.value?d("div",{class:"pressy-download-book",children:[d("div",{class:"pressy-download-progress",children:[d("div",{class:"pressy-download-bar",children:d("div",{class:"pressy-download-bar-fill",style:{width:`${u.value||0}%`}})}),d("span",{class:"pressy-download-percent",children:[u.value||0,"%"]})]}),d("style",{children:_e})]}):d("div",{class:"pressy-download-book",children:[d("button",{class:"pressy-download-btn",onClick:()=>o(e,t),"aria-label":"Download for offline reading",children:[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:d("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),d("span",{children:"Download for offline"})]}),d("style",{children:_e})]})}var _e=`
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
`;function dr({id:e,children:t}){const r=L(!1);return d(U,{children:[d("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&d("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,d("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),d("style",{children:`
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
      `})]})}function ur({children:e,title:t}){return d("aside",{class:"pressy-aside",children:[t&&d("strong",{class:"pressy-aside-title",children:t}),d("div",{class:"pressy-aside-content",children:e}),d("style",{children:`
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
      `})]})}function Ge({src:e,alt:t,caption:r,wide:n,children:o}){return d("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[d("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||o)&&d("figcaption",{class:"pressy-figure-caption",children:r||o}),d("style",{children:`
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
      `})]})}var fr={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},_r={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function pr({type:e="note",title:t,children:r}){return d("div",{class:`pressy-callout pressy-callout-${e}`,children:[d("div",{class:"pressy-callout-header",children:[d("span",{class:"pressy-callout-icon",children:fr[e]}),d("strong",{class:"pressy-callout-title",children:t||_r[e]})]}),d("div",{class:"pressy-callout-content",children:r}),d("style",{children:`
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
      `})]})}function Ye({variant:e="asterisks"}){return d("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&d("span",{children:"* * *"}),e==="ornament"&&d("span",{children:"❧"}),d("style",{children:`
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
      `})]})}var hr={Footnote:dr,Aside:ur,Figure:Ge,Callout:pr,SceneBreak:Ye,img:Ge,hr:Ye},vr={};function Et(){return{...hr,...vr}}var Lt="pressy-cached-books",pe=z("online"),q=z(null),he=z(!1);function mr(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(Lt);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var $=z(mr());typeof window<"u"&&(pe.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{pe.value="online"}),window.addEventListener("offline",()=>{pe.value="offline"}));async function yr(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",gr),navigator.serviceWorker.controller?he.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{he.value=!0}),n.addEventListener("updatefound",()=>{const o=n.installing;o&&o.addEventListener("statechange",()=>{o.state==="activated"&&(he.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function V(){try{localStorage.setItem(Lt,JSON.stringify([...$.value]))}catch{}}function gr(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:o}=e.data;q.value={bookSlug:r,current:n,total:o}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;q.value=null;const n=new Set($.value);n.add(r),$.value=n,V()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const o of r){const i=o.match(/\/books\/([^/]+)/);i&&n.add(i[1])}$.value=n,V()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set($.value);n.delete(r),$.value=n,V()}}async function Ot(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(o=>o.startsWith("http")?o:`${window.location.origin}${o}`);q.value={bookSlug:e,current:0,total:r.length};const n=new Set($.value);return n.add(e),$.value=n,V(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}async function zt(e){const t=new Set($.value);if(t.delete(e),$.value=t,V(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const o of n)o.url.includes(`/books/${e}`)&&await r.delete(o);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var qe=z("/"),br=z("light"),Je=z(!navigator.onLine),wr="pressy",kr=1,Xe="reading-progress",Ze="unlocks",ee=null;async function xr(){return ee||new Promise((e,t)=>{const r=indexedDB.open(wr,kr);r.onerror=()=>t(r.error),r.onsuccess=()=>{ee=r.result,e(ee)},r.onupgradeneeded=n=>{const o=n.target.result;o.objectStoreNames.contains(Xe)||o.createObjectStore(Xe,{keyPath:"chapterSlug"}),o.objectStoreNames.contains(Ze)||o.createObjectStore(Ze,{keyPath:"bookSlug"})}})}function Qe(e){br.value=e,document.documentElement.setAttribute("data-theme",e),localStorage.setItem("pressy-theme",e)}function Sr(){const e=localStorage.getItem("pressy-theme");e?Qe(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&Qe("dark")}function $r(){window.addEventListener("online",()=>{Je.value=!1}),window.addEventListener("offline",()=>{Je.value=!0})}function ve(e){var r,n;const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return p("div",{class:"pressy-home"},p("header",{class:"pressy-home-header"},p("h1",null,t),((n=e.books[0])==null?void 0:n.metadata.description)&&p("p",{class:"pressy-home-desc"},e.books[0].metadata.description)),...e.books.map(o=>p(Ct,{bookSlug:o.slug,chapterUrls:o.chapters.map(i=>`/books/${o.slug}/${i.slug}`),cachedBooks:$,cacheProgress:q,onDownload:Ot,onRemove:zt})),e.books.length>0&&p("section",{class:"pressy-home-section"},p("h2",null,"Chapters"),p("nav",{class:"pressy-chapter-list"},...e.books.flatMap(o=>o.chapters.map(i=>p("a",{href:`${M}/books/${o.slug}/${i.slug}`,class:"pressy-chapter-link"},p("span",{class:"pressy-chapter-order"},`${i.order}.`),p("span",null,i.title)))))),e.articles.length>0&&p("section",{class:"pressy-home-section"},p("h2",null,"Articles"),p("nav",{class:"pressy-chapter-list"},...e.articles.map(o=>p("a",{href:`${M}/articles/${o.slug}`,class:"pressy-chapter-link"},o.metadata.title)))),p("style",null,Pt))}function Cr(e){const t=e.chapters.map(r=>`/books/${e.slug}/${r.slug}`);return p("div",{class:"pressy-home"},p("header",{class:"pressy-home-header"},p("h1",null,e.metadata.title),p("p",{class:"pressy-home-author"},`by ${e.metadata.author}`),e.metadata.description&&p("p",{class:"pressy-home-desc"},e.metadata.description)),p(Ct,{bookSlug:e.slug,chapterUrls:t,cachedBooks:$,cacheProgress:q,onDownload:Ot,onRemove:zt}),p("section",{class:"pressy-home-section"},p("h2",null,"Chapters"),p("nav",{class:"pressy-chapter-list"},...e.chapters.map(r=>p("a",{href:`${M}/books/${e.slug}/${r.slug}`,class:"pressy-chapter-link"},p("span",{class:"pressy-chapter-order"},`${r.order}.`),p("span",null,r.title))))),p("style",null,Pt))}function Er(e,t,r){const n=t.split("/"),o=n[2],i=n[3],s=e.books.find(h=>h.slug===o),l=s?s.chapters.findIndex(h=>h.slug===i):-1,u=s==null?void 0:s.chapters[l],c=h=>`${M}/books/${o}/${h.slug}`,_=s&&l>0?{slug:c(s.chapters[l-1]),title:s.chapters[l-1].title}:void 0,a=s&&l>=0&&l<s.chapters.length-1?{slug:c(s.chapters[l+1]),title:s.chapters[l+1].title}:void 0;return p($t,{title:(u==null?void 0:u.title)||i,prevChapter:_,nextChapter:a,children:p(r,{components:Et()})})}function Lr(e,t,r){const n=t.split("/")[2],o=e.articles.find(i=>i.slug===n);return p($t,{title:(o==null?void 0:o.metadata.title)||n,children:p(r,{components:Et()})})}var Pt=`
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
`;function Or(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const o=r.indexOf(n);return o>0?r.slice(0,o):""}var M="";function zr(e,t){M=Or(e.route),qe.value=e.route,Sr(),$r(),xr(),yr(M),window.addEventListener("popstate",()=>{qe.value=window.location.pathname}),document.addEventListener("click",n=>{const o=n.target.closest("a");if(!o)return;const i=o.getAttribute("href");if(i&&!(i.startsWith("http")||i.startsWith("#"))&&i.startsWith(e.route+"#")){n.preventDefault();const s=i.slice(i.indexOf("#")),l=document.querySelector(s);l&&l.scrollIntoView({behavior:"smooth"});return}});let r;switch(e.routeType){case"home":r=ve(e.manifest);break;case"book":{const n=e.route.split("/")[2],o=e.manifest.books.find(i=>i.slug===n);r=o?Cr(o):p("div",null,"Book not found");break}case"chapter":r=t?Er(e.manifest,e.route,t):p("div",null,"Loading...");break;case"article":r=t?Lr(e.manifest,e.route,t):p("div",null,"Loading...");break;case"books":r=ve(e.manifest);break;case"articles":r=ve(e.manifest);break;default:r=p("div",null,"Page not found")}It(r,document.getElementById("app"))}export{zr as h,U as k,d as u};
