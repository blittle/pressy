var ae,v,Qe,et,T,He,tt,rt,nt,ke,ve,me,V={},ot=[],Ot=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,le=Array.isArray;function L(e,t){for(var r in t)e[r]=t[r];return e}function xe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function zt(e,t,r){var n,o,i,s={};for(i in t)i=="key"?n=t[i]:i=="ref"?o=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?ae.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return Q(e,s,n,o,null)}function Q(e,t,r,n,o){var i={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Qe,__i:-1,__u:0};return o==null&&v.vnode!=null&&v.vnode(i),i}function H(e){return e.children}function F(e,t){this.props=e,this.context=t}function I(e,t){if(t==null)return e.__?I(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?I(e):null}function it(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return it(e)}}function Ae(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!te.__r++||He!=v.debounceRendering)&&((He=v.debounceRendering)||tt)(te)}function te(){for(var e,t,r,n,o,i,s,c=1;T.length;)T.length>c&&T.sort(rt),e=T.shift(),c=T.length,e.__d&&(r=void 0,n=void 0,o=(n=(t=e).__v).__e,i=[],s=[],t.__P&&((r=L({},n)).__v=n.__v+1,v.vnode&&v.vnode(r),Se(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,i,o??I(n),!!(32&n.__u),s),r.__v=n.__v,r.__.__k[r.__i]=r,lt(i,r,s),n.__e=n.__=null,r.__e!=o&&it(r)));te.__r=0}function st(e,t,r,n,o,i,s,c,u,d,h){var l,_,f,b,S,w,y,m=n&&n.__k||ot,z=t.length;for(u=Pt(r,t,m,u,z),l=0;l<z;l++)(f=r.__k[l])!=null&&(_=f.__i==-1?V:m[f.__i]||V,f.__i=l,w=Se(e,f,_,o,i,s,c,u,d,h),b=f.__e,f.ref&&_.ref!=f.ref&&(_.ref&&$e(_.ref,null,f),h.push(f.ref,f.__c||b,f)),S==null&&b!=null&&(S=b),(y=!!(4&f.__u))||_.__k===f.__k?u=at(f,u,e,y):typeof f.type=="function"&&w!==void 0?u=w:b&&(u=b.nextSibling),f.__u&=-7);return r.__e=S,u}function Pt(e,t,r,n,o){var i,s,c,u,d,h=r.length,l=h,_=0;for(e.__k=new Array(o),i=0;i<o;i++)(s=t[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[i]=Q(null,s,null,null,null):le(s)?s=e.__k[i]=Q(H,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[i]=Q(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[i]=s,u=i+_,s.__=e,s.__b=e.__b+1,c=null,(d=s.__i=Tt(s,r,u,l))!=-1&&(l--,(c=r[d])&&(c.__u|=2)),c==null||c.__v==null?(d==-1&&(o>h?_--:o<h&&_++),typeof s.type!="function"&&(s.__u|=4)):d!=u&&(d==u-1?_--:d==u+1?_++:(d>u?_--:_++,s.__u|=4))):e.__k[i]=null;if(l)for(i=0;i<h;i++)(c=r[i])!=null&&!(2&c.__u)&&(c.__e==n&&(n=I(c)),dt(c,c));return n}function at(e,t,r,n){var o,i;if(typeof e.type=="function"){for(o=e.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=e,t=at(o[i],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=I(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Tt(e,t,r,n){var o,i,s,c=e.key,u=e.type,d=t[r],h=d!=null&&(2&d.__u)==0;if(d===null&&c==null||h&&c==d.key&&u==d.type)return r;if(n>(h?1:0)){for(o=r-1,i=r+1;o>=0||i<t.length;)if((d=t[s=o>=0?o--:i++])!=null&&!(2&d.__u)&&c==d.key&&u==d.type)return s}return-1}function Ue(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Ot.test(t)?r:r+"px"}function q(e,t,r,n,o){var i,s;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Ue(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||Ue(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(nt,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=r,r?n?r.u=n.u:(r.u=ke,e.addEventListener(t,i?me:ve,i)):e.removeEventListener(t,i?me:ve,i);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function De(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=ke++;else if(t.t<r.u)return;return r(v.event?v.event(t):t)}}}function Se(e,t,r,n,o,i,s,c,u,d){var h,l,_,f,b,S,w,y,m,z,P,X,R,Te,Y,W,ce,C=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(u=!!(32&r.__u),i=[c=t.__e=r.__e]),(h=v.__b)&&h(t);e:if(typeof C=="function")try{if(y=t.props,m="prototype"in C&&C.prototype.render,z=(h=C.contextType)&&n[h.__c],P=h?z?z.props.value:h.__:n,r.__c?w=(l=t.__c=r.__c).__=l.__E:(m?t.__c=l=new C(y,P):(t.__c=l=new F(y,P),l.constructor=C,l.render=At),z&&z.sub(l),l.state||(l.state={}),l.__n=n,_=l.__d=!0,l.__h=[],l._sb=[]),m&&l.__s==null&&(l.__s=l.state),m&&C.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=L({},l.__s)),L(l.__s,C.getDerivedStateFromProps(y,l.__s))),f=l.props,b=l.state,l.__v=t,_)m&&C.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),m&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(m&&C.getDerivedStateFromProps==null&&y!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(y,P),t.__v==r.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(y,l.__s,P)===!1){for(t.__v!=r.__v&&(l.props=y,l.state=l.__s,l.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(D){D&&(D.__=t)}),X=0;X<l._sb.length;X++)l.__h.push(l._sb[X]);l._sb=[],l.__h.length&&s.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(y,l.__s,P),m&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,b,S)})}if(l.context=P,l.props=y,l.__P=e,l.__e=!1,R=v.__r,Te=0,m){for(l.state=l.__s,l.__d=!1,R&&R(t),h=l.render(l.props,l.state,l.context),Y=0;Y<l._sb.length;Y++)l.__h.push(l._sb[Y]);l._sb=[]}else do l.__d=!1,R&&R(t),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++Te<25);l.state=l.__s,l.getChildContext!=null&&(n=L(L({},n),l.getChildContext())),m&&!_&&l.getSnapshotBeforeUpdate!=null&&(S=l.getSnapshotBeforeUpdate(f,b)),W=h,h!=null&&h.type===H&&h.key==null&&(W=ct(h.props.children)),c=st(e,le(W)?W:[W],t,r,n,o,i,s,c,u,d),l.base=t.__e,t.__u&=-161,l.__h.length&&s.push(l),w&&(l.__E=l.__=null)}catch(D){if(t.__v=null,u||i!=null)if(D.then){for(t.__u|=u?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i[i.indexOf(c)]=null,t.__e=c}else{for(ce=i.length;ce--;)xe(i[ce]);ye(t)}else t.__e=r.__e,t.__k=r.__k,D.then||ye(t);v.__e(D,t,r)}else i==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):c=t.__e=Ht(r.__e,t,r,n,o,i,s,u,d);return(h=v.diffed)&&h(t),128&t.__u?void 0:c}function ye(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(ye)}function lt(e,t,r){for(var n=0;n<r.length;n++)$e(r[n],r[++n],r[++n]);v.__c&&v.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){v.__e(i,o.__v)}})}function ct(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:le(e)?e.map(ct):L({},e)}function Ht(e,t,r,n,o,i,s,c,u){var d,h,l,_,f,b,S,w=r.props||V,y=t.props,m=t.type;if(m=="svg"?o="http://www.w3.org/2000/svg":m=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((f=i[d])&&"setAttribute"in f==!!m&&(m?f.localName==m:f.nodeType==3)){e=f,i[d]=null;break}}if(e==null){if(m==null)return document.createTextNode(y);e=document.createElementNS(o,m,y.is&&y),c&&(v.__m&&v.__m(t,i),c=!1),i=null}if(m==null)w===y||c&&e.data==y||(e.data=y);else{if(i=i&&ae.call(e.childNodes),!c&&i!=null)for(w={},d=0;d<e.attributes.length;d++)w[(f=e.attributes[d]).name]=f.value;for(d in w)if(f=w[d],d!="children"){if(d=="dangerouslySetInnerHTML")l=f;else if(!(d in y)){if(d=="value"&&"defaultValue"in y||d=="checked"&&"defaultChecked"in y)continue;q(e,d,null,f,o)}}for(d in y)f=y[d],d=="children"?_=f:d=="dangerouslySetInnerHTML"?h=f:d=="value"?b=f:d=="checked"?S=f:c&&typeof f!="function"||w[d]===f||q(e,d,f,w[d],o);if(h)c||l&&(h.__html==l.__html||h.__html==e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(l&&(e.innerHTML=""),st(t.type=="template"?e.content:e,le(_)?_:[_],t,r,n,m=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:r.__k&&I(r,0),c,u),i!=null)for(d=i.length;d--;)xe(i[d]);c||(d="value",m=="progress"&&b==null?e.removeAttribute("value"):b!=null&&(b!==e[d]||m=="progress"&&!b||m=="option"&&b!=w[d])&&q(e,d,b,w[d],o),d="checked",S!=null&&S!=e[d]&&q(e,d,S,w[d],o))}return e}function $e(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){v.__e(o,r)}}function dt(e,t,r){var n,o;if(v.unmount&&v.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||$e(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){v.__e(i,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&dt(n[o],t,r||typeof e.type!="function");r||xe(e.__e),e.__c=e.__=e.__e=void 0}function At(e,t,r){return this.constructor(e,r)}function Ut(e,t,r){var n,o,i,s;t==document&&(t=document.documentElement),v.__&&v.__(e,t),o=(n=!1)?null:t.__k,i=[],s=[],Se(t,e=t.__k=zt(H,null,[e]),o||V,V,t.namespaceURI,o?null:t.firstChild?ae.call(t.childNodes):null,i,o?o.__e:t.firstChild,n,s),lt(i,e,s)}ae=ot.slice,v={__e:function(e,t,r,n){for(var o,i,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),s=o.__d),s)return o.__E=o}catch(c){e=c}throw e}},Qe=0,et=function(e){return e!=null&&e.constructor===void 0},F.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=L({},this.state),typeof e=="function"&&(e=e(L({},r),this.props)),e&&L(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ae(this))},F.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ae(this))},F.prototype.render=H,T=[],tt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,rt=function(e,t){return e.__v.__b-t.__v.__b},te.__r=0,nt=/(PointerCapture)$|Capture$/i,ke=0,ve=De(!1),me=De(!0);var re,x,de,Be,ge=0,ut=[],g=v,Ie=g.__b,Me=g.__r,Ne=g.diffed,Re=g.__c,We=g.unmount,Fe=g.__;function ft(e,t){g.__h&&g.__h(x,e,ge||t),ge=0;var r=x.__H||(x.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Ce(e,t){var r=ft(re++,3);!g.__s&&ht(r.__H,t)&&(r.__=e,r.u=t,x.__H.__h.push(r))}function Dt(e){return ge=5,Ee(function(){return{current:e}},[])}function Ee(e,t){var r=ft(re++,7);return ht(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function Bt(){for(var e;e=ut.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ee),e.__H.__h.forEach(be),e.__H.__h=[]}catch(t){e.__H.__h=[],g.__e(t,e.__v)}}g.__b=function(e){x=null,Ie&&Ie(e)},g.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Fe&&Fe(e,t)},g.__r=function(e){Me&&Me(e),re=0;var t=(x=e.__c).__H;t&&(de===x?(t.__h=[],x.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(ee),t.__h.forEach(be),t.__h=[],re=0)),de=x},g.diffed=function(e){Ne&&Ne(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ut.push(t)!==1&&Be===g.requestAnimationFrame||((Be=g.requestAnimationFrame)||It)(Bt)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),de=x=null},g.__c=function(e,t){t.some(function(r){try{r.__h.forEach(ee),r.__h=r.__h.filter(function(n){return!n.__||be(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],g.__e(n,r.__v)}}),Re&&Re(e,t)},g.unmount=function(e){We&&We(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{ee(n)}catch(o){t=o}}),r.__H=void 0,t&&g.__e(t,r.__v))};var je=typeof requestAnimationFrame=="function";function It(e){var t,r=function(){clearTimeout(n),je&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);je&&(t=requestAnimationFrame(r))}function ee(e){var t=x,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),x=t}function be(e){var t=x;e.__c=e.__(),x=t}function ht(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}var Mt=Symbol.for("preact-signals");function Le(){if(B>1)B--;else{for(var e,t=!1;j!==void 0;){var r=j;for(j=void 0,we++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&vt(r))try{r.c()}catch(o){t||(e=o,t=!0)}r=n}}if(we=0,B--,t)throw e}}var p=void 0;function _t(e){var t=p;p=void 0;try{return e()}finally{p=t}}var j=void 0,B=0,we=0,ne=0;function pt(e){if(p!==void 0){var t=e.n;if(t===void 0||t.t!==p)return t={i:0,S:e,p:p.s,n:void 0,t:p,e:void 0,x:void 0,r:t},p.s!==void 0&&(p.s.n=t),p.s=t,e.n=t,32&p.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=p.s,t.n=void 0,p.s.n=t,p.s=t),t}}function k(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}k.prototype.brand=Mt;k.prototype.h=function(){return!0};k.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:_t(function(){var n;(n=t.W)==null||n.call(t)}))};k.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&_t(function(){var o;(o=t.Z)==null||o.call(t)}))}};k.prototype.subscribe=function(e){var t=this;return ze(function(){var r=t.value,n=p;p=void 0;try{e(r)}finally{p=n}},{name:"sub"})};k.prototype.valueOf=function(){return this.value};k.prototype.toString=function(){return this.value+""};k.prototype.toJSON=function(){return this.value};k.prototype.peek=function(){var e=p;p=void 0;try{return this.value}finally{p=e}};Object.defineProperty(k.prototype,"value",{get:function(){var e=pt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(we>100)throw new Error("Cycle detected");this.v=e,this.i++,ne++,B++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Le()}}}});function O(e,t){return new k(e,t)}function vt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function mt(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function yt(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function U(e,t){k.call(this,void 0),this.x=e,this.s=void 0,this.g=ne-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}U.prototype=new k;U.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ne))return!0;if(this.g=ne,this.f|=1,this.i>0&&!vt(this))return this.f&=-2,!0;var e=p;try{mt(this),p=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return p=e,yt(this),this.f&=-2,!0};U.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}k.prototype.S.call(this,e)};U.prototype.U=function(e){if(this.t!==void 0&&(k.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};U.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(U.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=pt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Nt(e,t){return new U(e,t)}function gt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){B++;var r=p;p=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,Oe(e),n}finally{p=r,Le()}}}function Oe(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,gt(e)}function Rt(e){if(p!==this)throw new Error("Out-of-order effect");yt(this),p=e,this.f&=-2,8&this.f&&Oe(this),Le()}function M(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}M.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};M.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,gt(this),mt(this),B++;var e=p;return p=this,Rt.bind(this,e)};M.prototype.N=function(){2&this.f||(this.f|=2,this.o=j,j=this)};M.prototype.d=function(){this.f|=8,1&this.f||Oe(this)};M.prototype.dispose=function(){this.d()};function ze(e,t){var r=new M(e,t);try{r.c()}catch(o){throw r.d(),o}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var J;function N(e,t){v[e]=t.bind(null,v[e]||function(){})}function oe(e){if(J){var t=J;J=void 0,t()}J=e&&e.S()}function bt(e){var t=this,r=e.data,n=E(r);n.value=r;var o=Ee(function(){for(var i=t.__v;i=i.__;)if(i.__c){i.__c.__$f|=4;break}return t.__$u.c=function(){var s,c=t.__$u.S(),u=o.value;c(),et(u)||((s=t.base)==null?void 0:s.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=u},Nt(function(){var s=n.value.value;return s===0?0:s===!0?"":s||""})},[]);return o.value}bt.displayName="_st";Object.defineProperties(k.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:bt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});N("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var o in n)if(o!=="children"){var i=n[o];i instanceof k&&(r||(t.__np=r={}),r[o]=i,n[o]=i.peek())}}e(t)});N("__r",function(e,t){e(t),oe();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(o){var i;return ze(function(){i=this}),i.c=function(){n.__$f|=1,n.setState({})},i}())),oe(r)});N("__e",function(e,t,r,n){oe(),e(t,r,n)});N("diffed",function(e,t){oe();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,o=t.props;if(n){var i=r.U;if(i)for(var s in i){var c=i[s];c!==void 0&&!(s in n)&&(c.d(),i[s]=void 0)}else r.U=i={};for(var u in n){var d=i[u],h=n[u];d===void 0?(d=Wt(r,u,h,o),i[u]=d):d.o(h,o)}}}e(t)});function Wt(e,t,r,n){var o=t in e&&e.ownerSVGElement===void 0,i=O(r);return{o:function(s,c){i.value=s,n=c},d:ze(function(){var s=i.value.value;n[t]!==s&&(n[t]=s,o?e[t]=s:s?e.setAttribute(t,s):e.removeAttribute(t))})}}N("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var o in n){var i=n[o];i&&i.d()}}}}else{var s=t.__c;if(s){var c=s.__$u;c&&(s.__$u=void 0,c.d())}}e(t)});N("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});F.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var o in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var i in e)if(i!=="__source"&&e[i]!==this.props[i])return!0;for(var s in this.props)if(!(s in e))return!0;return!1};function E(e){return Ee(function(){return O(e)},[])}function Pe(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function Ft(e,t){let r;const n=()=>{if(r)return r;const o=indexedDB.open(e);return o.onupgradeneeded=()=>o.result.createObjectStore(t),r=Pe(o),r.then(i=>{i.onclose=()=>r=void 0},()=>{}),r};return(o,i)=>n().then(s=>i(s.transaction(t,o).objectStore(t)))}let ue;function wt(){return ue||(ue=Ft("keyval-store","keyval")),ue}function kt(e,t=wt()){return t("readonly",r=>Pe(r.get(e)))}function jt(e,t,r=wt()){return r("readwrite",n=>(n.put(t,e),Pe(n.transaction)))}var Kt=0;function a(e,t,r,n,o,i){t||(t={});var s,c,u=t;if("ref"in u)for(c in u={},t)c=="ref"?s=t[c]:u[c]=t[c];var d={type:e,props:u,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Kt,__i:-1,__u:0,__source:o,__self:i};if(typeof e=="function"&&(s=e.defaultProps))for(c in s)u[c]===void 0&&(u[c]=s[c]);return v.vnode&&v.vnode(d),d}var Vt=Object.defineProperty,Gt=(e,t)=>{for(var r in t)Vt(e,r,{get:t[r],enumerable:!0})};function Xt(e){return ie=new xt(e),ie}function Yt(){if(!ie)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return ie}var xt,ie;async function qt(e,t){const r=Yt(),n=await r.getProduct(e);if(!n.variants.edges.length)throw new Error("Product has no variants");const i=[{variantId:n.variants.edges[0].node.id,quantity:1}],s=await r.createCheckout(i);if(t&&typeof localStorage<"u"){const c={checkoutId:s.id,bookSlug:t,createdAt:Date.now()};localStorage.setItem(Zt,JSON.stringify(c))}return s.webUrl}function Jt(e){return e.webUrl}var Zt;async function Qt(e,t){const r={bookSlug:e,orderId:t==null?void 0:t.orderId,email:t==null?void 0:t.email,unlockedAt:Date.now()};await jt(`${G}${e}`,r),typeof localStorage<"u"&&localStorage.setItem(`${G}${e}`,JSON.stringify(r))}async function er(e){if(typeof localStorage<"u"&&localStorage.getItem(`${G}${e}`))return!0;try{return!!await kt(`${G}${e}`)}catch{return!1}}async function tr(e){try{return await kt(`${G}${e}`)||null}catch{return null}}async function rr(e,t){const r=await tr(e);return!r||!r.orderId?!1:r.orderId===t}var G,nr={};Gt(nr,{ShopifyClient:()=>xt,createCheckout:()=>qt,createShopifyClient:()=>Xt,getCheckoutUrl:()=>Jt,isContentUnlocked:()=>er,unlockContent:()=>Qt,verifyPurchase:()=>rr});function or({prev:e,next:t}){return!e&&!t?null:a("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[a("div",{class:"pressy-nav-inner",children:[e?a("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[a("span",{class:"pressy-nav-direction",children:"Previous"}),a("span",{class:"pressy-nav-title",children:e.title})]}):a("div",{class:"pressy-nav-placeholder"}),t?a("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[a("span",{class:"pressy-nav-direction",children:"Next"}),a("span",{class:"pressy-nav-title",children:t.title})]}):a("div",{class:"pressy-nav-placeholder"})]}),a("style",{children:`
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
      `})]})}function ir(){const e=E(!1),t=E({x:0,y:0}),r=E(""),n=Dt(null);Ce(()=>{const c=()=>{const u=window.getSelection();if(!u||u.isCollapsed){e.value=!1;return}const d=u.toString().trim();if(d.length<5){e.value=!1;return}r.value=d;const l=u.getRangeAt(0).getBoundingClientRect();t.value={x:l.left+l.width/2,y:l.top-10},e.value=!0};return document.addEventListener("selectionchange",c),document.addEventListener("mouseup",c),()=>{document.removeEventListener("selectionchange",c),document.removeEventListener("mouseup",c)}},[]);const o=()=>{const c=encodeURIComponent(r.value),u=new URL(window.location.href);return u.hash=`:~:text=${c}`,u.toString()},i=async()=>{const c=o(),u=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:u,url:c}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${u}

${c}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var d;(d=n.current)==null||d.classList.remove("copied")},2e3))}catch(d){console.error("Failed to copy to clipboard:",d)}},s=async()=>{const c=o();try{await navigator.clipboard.writeText(c),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var u;(u=n.current)==null||u.classList.remove("copied")},2e3))}catch(u){console.error("Failed to copy link:",u)}};return e.value?a("div",{ref:n,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[a("button",{class:"pressy-share-btn",onClick:i,"aria-label":"Share selected text",title:"Share quote",children:a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),a("button",{class:"pressy-copy-link-btn",onClick:s,"aria-label":"Copy link to selected text",title:"Copy link",children:a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),a("style",{children:`
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
      `})]}):null}function sr(){const e=E(!navigator.onLine),t=E(!1);return Ce(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?a("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?a(H,{children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),a("span",{children:"You're offline"})]}):a(H,{children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),a("span",{children:"Back online"})]}),a("style",{children:`
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
      `})]}):null}function St({children:e,prevChapter:t,nextChapter:r,showDropCap:n=!0}){return a("div",{class:"pressy-reader",children:[a("main",{class:"pressy-reader-main",children:a("article",{class:`pressy-prose ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),a(ir,{}),a(or,{prev:t,next:r}),a(sr,{}),a("style",{children:`
        .pressy-reader {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .pressy-reader-main {
          flex: 1;
          padding: 2rem 0;
        }
      `})]})}var ar="pressy-cached-books";function Ke(){try{const e=localStorage.getItem(ar);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function lr({bookSlug:e,chapterUrls:t,cachedBooks:r,cacheProgress:n,onDownload:o,onRemove:i}){var d;const s=E(Ke().has(e)||r.value.has(e)),c=E(((d=n.value)==null?void 0:d.bookSlug)===e),u=E(null);return Ce(()=>{const h=()=>{var f;s.value=Ke().has(e)||r.value.has(e),c.value=((f=n.value)==null?void 0:f.bookSlug)===e;const _=n.value;u.value=_&&_.bookSlug===e?Math.round(_.current/_.total*100):null},l=setInterval(h,500);return h(),()=>clearInterval(l)},[e]),s.value?a("div",{class:"pressy-download-book",children:[a("div",{class:"pressy-download-status",children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),a("span",{children:"Available offline"})]}),a("button",{class:"pressy-download-remove",onClick:()=>i(e),"aria-label":"Remove offline copy",children:"Remove"}),a("style",{children:fe})]}):c.value?a("div",{class:"pressy-download-book",children:[a("div",{class:"pressy-download-progress",children:[a("div",{class:"pressy-download-bar",children:a("div",{class:"pressy-download-bar-fill",style:{width:`${u.value||0}%`}})}),a("span",{class:"pressy-download-percent",children:[u.value||0,"%"]})]}),a("style",{children:fe})]}):a("div",{class:"pressy-download-book",children:[a("button",{class:"pressy-download-btn",onClick:()=>o(e,t),"aria-label":"Download for offline reading",children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),a("span",{children:"Download for offline"})]}),a("style",{children:fe})]})}var fe=`
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
`;function cr({id:e,children:t}){const r=E(!1);return a(H,{children:[a("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&a("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,a("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),a("style",{children:`
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
      `})]})}function dr({children:e,title:t}){return a("aside",{class:"pressy-aside",children:[t&&a("strong",{class:"pressy-aside-title",children:t}),a("div",{class:"pressy-aside-content",children:e}),a("style",{children:`
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
      `})]})}function Ve({src:e,alt:t,caption:r,wide:n,children:o}){return a("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[a("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||o)&&a("figcaption",{class:"pressy-figure-caption",children:r||o}),a("style",{children:`
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
      `})]})}var ur={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},fr={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function hr({type:e="note",title:t,children:r}){return a("div",{class:`pressy-callout pressy-callout-${e}`,children:[a("div",{class:"pressy-callout-header",children:[a("span",{class:"pressy-callout-icon",children:ur[e]}),a("strong",{class:"pressy-callout-title",children:t||fr[e]})]}),a("div",{class:"pressy-callout-content",children:r}),a("style",{children:`
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
      `})]})}function Ge({variant:e="asterisks"}){return a("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&a("span",{children:"* * *"}),e==="ornament"&&a("span",{children:"❧"}),a("style",{children:`
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
      `})]})}var _r={Footnote:cr,Aside:dr,Figure:Ve,Callout:hr,SceneBreak:Ge,img:Ve,hr:Ge},pr={};function $t(){return{..._r,...pr}}var Ct="pressy-cached-books",he=O("online"),se=O(null),_e=O(!1);function vr(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(Ct);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var $=O(vr());typeof window<"u"&&(he.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{he.value="online"}),window.addEventListener("offline",()=>{he.value="offline"}));async function mr(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",yr),navigator.serviceWorker.controller?_e.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{_e.value=!0}),n.addEventListener("updatefound",()=>{const o=n.installing;o&&o.addEventListener("statechange",()=>{o.state==="activated"&&(_e.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function K(){try{localStorage.setItem(Ct,JSON.stringify([...$.value]))}catch{}}function yr(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:o}=e.data;se.value={bookSlug:r,current:n,total:o}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;se.value=null;const n=new Set($.value);n.add(r),$.value=n,K()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const o of r){const i=o.match(/\/books\/([^/]+)/);i&&n.add(i[1])}$.value=n,K()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set($.value);n.delete(r),$.value=n,K()}}async function gr(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(o=>o.startsWith("http")?o:`${window.location.origin}${o}`);se.value={bookSlug:e,current:0,total:r.length};const n=new Set($.value);return n.add(e),$.value=n,K(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}async function br(e){const t=new Set($.value);if(t.delete(e),$.value=t,K(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const o of n)o.url.includes(`/books/${e}`)&&await r.delete(o);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var Xe=O("/"),wr=O("light"),Ye=O(!navigator.onLine),kr="pressy",xr=1,qe="reading-progress",Je="unlocks",Z=null;async function Sr(){return Z||new Promise((e,t)=>{const r=indexedDB.open(kr,xr);r.onerror=()=>t(r.error),r.onsuccess=()=>{Z=r.result,e(Z)},r.onupgradeneeded=n=>{const o=n.target.result;o.objectStoreNames.contains(qe)||o.createObjectStore(qe,{keyPath:"chapterSlug"}),o.objectStoreNames.contains(Je)||o.createObjectStore(Je,{keyPath:"bookSlug"})}})}function Ze(e){wr.value=e,document.documentElement.setAttribute("data-theme",e),localStorage.setItem("pressy-theme",e)}function $r(){const e=localStorage.getItem("pressy-theme");e?Ze(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&Ze("dark")}function Cr(){window.addEventListener("online",()=>{Ye.value=!1}),window.addEventListener("offline",()=>{Ye.value=!0})}function Et(e,t=[]){const r=e.chapters.map(n=>`/books/${e.slug}/${n.slug}`);return a("div",{class:"pressy-home",children:[a("header",{class:"pressy-home-header",children:[a("h1",{children:e.metadata.title}),a("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&a("p",{class:"pressy-home-desc",children:e.metadata.description})]}),a(lr,{bookSlug:e.slug,chapterUrls:r,cachedBooks:$,cacheProgress:se,onDownload:gr,onRemove:br}),a("section",{class:"pressy-home-section",children:[a("h2",{children:"Chapters"}),a("nav",{class:"pressy-chapter-list",children:e.chapters.map(n=>a("a",{href:`${A}/books/${e.slug}/${n.slug}`,class:"pressy-chapter-link",children:[a("span",{class:"pressy-chapter-order",children:[n.order,"."]}),a("span",{children:n.title})]}))})]}),t.length>0&&a("section",{class:"pressy-home-section",children:[a("h2",{children:"Articles"}),a("nav",{class:"pressy-chapter-list",children:t.map(n=>a("a",{href:`${A}/articles/${n.slug}`,class:"pressy-chapter-link",children:n.metadata.title}))})]}),a("style",{children:Lt})]})}function pe(e){var r,n;if(e.books.length===1)return Et(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return a("div",{class:"pressy-home",children:[a("header",{class:"pressy-home-header",children:[a("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&a("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&a("section",{class:"pressy-home-section",children:[a("h2",{children:"Books"}),a("nav",{class:"pressy-chapter-list",children:e.books.map(o=>a("a",{href:`${A}/books/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),e.articles.length>0&&a("section",{class:"pressy-home-section",children:[a("h2",{children:"Articles"}),a("nav",{class:"pressy-chapter-list",children:e.articles.map(o=>a("a",{href:`${A}/articles/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),a("style",{children:Lt})]})}function Er(e,t,r){const n=t.split("/"),o=n[2],i=n[3],s=e.books.find(f=>f.slug===o),c=s?s.chapters.findIndex(f=>f.slug===i):-1,u=s==null?void 0:s.chapters[c],d=f=>`${A}/books/${o}/${f.slug}`,h=s&&c>0?{slug:d(s.chapters[c-1]),title:s.chapters[c-1].title}:void 0,l=s&&c>=0&&c<s.chapters.length-1?{slug:d(s.chapters[c+1]),title:s.chapters[c+1].title}:void 0,_=r;return a(St,{title:(u==null?void 0:u.title)||i,prevChapter:h,nextChapter:l,children:a(_,{components:$t()})})}function Lr(e,t,r){const n=t.split("/")[2],o=e.articles.find(s=>s.slug===n),i=r;return a(St,{title:(o==null?void 0:o.metadata.title)||n,children:a(i,{components:$t()})})}var Lt=`
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
`;function Or(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const o=r.indexOf(n);return o>0?r.slice(0,o):""}var A="";function zr(e,t){A=Or(e.route),Xe.value=e.route,$r(),Cr(),Sr(),mr(A),window.addEventListener("popstate",()=>{Xe.value=window.location.pathname}),document.addEventListener("click",n=>{const o=n.target.closest("a");if(!o)return;const i=o.getAttribute("href");if(i&&!(i.startsWith("http")||i.startsWith("#"))&&i.startsWith(e.route+"#")){n.preventDefault();const s=i.slice(i.indexOf("#")),c=document.querySelector(s);c&&c.scrollIntoView({behavior:"smooth"});return}});let r;switch(e.routeType){case"home":r=pe(e.manifest);break;case"book":{const n=e.route.split("/")[2],o=e.manifest.books.find(i=>i.slug===n);r=o?Et(o):a("div",{children:"Book not found"});break}case"chapter":r=t?Er(e.manifest,e.route,t):a("div",{children:"Loading..."});break;case"article":r=t?Lr(e.manifest,e.route,t):a("div",{children:"Loading..."});break;case"books":r=pe(e.manifest);break;case"articles":r=pe(e.manifest);break;default:r=a("div",{children:"Page not found"})}Ut(r,document.getElementById("app"))}export{zr as h,H as k,a as u};
