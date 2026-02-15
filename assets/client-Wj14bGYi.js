var ue,b,nt,ot,N,He,it,st,at,Ee,we,ke,G={},lt=[],Dt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,fe=Array.isArray;function A(e,t){for(var r in t)e[r]=t[r];return e}function Le(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Ht(e,t,r){var n,o,i,s={};for(i in t)i=="key"?n=t[i]:i=="ref"?o=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?ue.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return oe(e,s,n,o,null)}function oe(e,t,r,n,o){var i={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++nt,__i:-1,__u:0};return o==null&&b.vnode!=null&&b.vnode(i),i}function M(e){return e.children}function V(e,t){this.props=e,this.context=t}function F(e,t){if(t==null)return e.__?F(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?F(e):null}function ct(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return ct(e)}}function Ne(e){(!e.__d&&(e.__d=!0)&&N.push(e)&&!se.__r++||He!=b.debounceRendering)&&((He=b.debounceRendering)||it)(se)}function se(){for(var e,t,r,n,o,i,s,c=1;N.length;)N.length>c&&N.sort(st),e=N.shift(),c=N.length,e.__d&&(r=void 0,n=void 0,o=(n=(t=e).__v).__e,i=[],s=[],t.__P&&((r=A({},n)).__v=n.__v+1,b.vnode&&b.vnode(r),Pe(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,i,o??F(n),!!(32&n.__u),s),r.__v=n.__v,r.__.__k[r.__i]=r,ft(i,r,s),n.__e=n.__=null,r.__e!=o&&ct(r)));se.__r=0}function dt(e,t,r,n,o,i,s,c,u,d,p){var l,h,f,w,y,_,v,m=n&&n.__k||lt,C=t.length;for(u=Nt(r,t,m,u,C),l=0;l<C;l++)(f=r.__k[l])!=null&&(h=f.__i==-1?G:m[f.__i]||G,f.__i=l,_=Pe(e,f,h,o,i,s,c,u,d,p),w=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&Te(h.ref,null,f),p.push(f.ref,f.__c||w,f)),y==null&&w!=null&&(y=w),(v=!!(4&f.__u))||h.__k===f.__k?u=ut(f,u,e,v):typeof f.type=="function"&&_!==void 0?u=_:w&&(u=w.nextSibling),f.__u&=-7);return r.__e=y,u}function Nt(e,t,r,n,o){var i,s,c,u,d,p=r.length,l=p,h=0;for(e.__k=new Array(o),i=0;i<o;i++)(s=t[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[i]=oe(null,s,null,null,null):fe(s)?s=e.__k[i]=oe(M,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[i]=oe(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[i]=s,u=i+h,s.__=e,s.__b=e.__b+1,c=null,(d=s.__i=Mt(s,r,u,l))!=-1&&(l--,(c=r[d])&&(c.__u|=2)),c==null||c.__v==null?(d==-1&&(o>p?h--:o<p&&h++),typeof s.type!="function"&&(s.__u|=4)):d!=u&&(d==u-1?h--:d==u+1?h++:(d>u?h--:h++,s.__u|=4))):e.__k[i]=null;if(l)for(i=0;i<p;i++)(c=r[i])!=null&&!(2&c.__u)&&(c.__e==n&&(n=F(c)),ht(c,c));return n}function ut(e,t,r,n){var o,i;if(typeof e.type=="function"){for(o=e.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=e,t=ut(o[i],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=F(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Mt(e,t,r,n){var o,i,s,c=e.key,u=e.type,d=t[r],p=d!=null&&(2&d.__u)==0;if(d===null&&c==null||p&&c==d.key&&u==d.type)return r;if(n>(p?1:0)){for(o=r-1,i=r+1;o>=0||i<t.length;)if((d=t[s=o>=0?o--:i++])!=null&&!(2&d.__u)&&c==d.key&&u==d.type)return s}return-1}function Me(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Dt.test(t)?r:r+"px"}function ee(e,t,r,n,o){var i,s;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Me(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||Me(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(at,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=r,r?n?r.u=n.u:(r.u=Ee,e.addEventListener(t,i?ke:we,i)):e.removeEventListener(t,i?ke:we,i);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function We(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Ee++;else if(t.t<r.u)return;return r(b.event?b.event(t):t)}}}function Pe(e,t,r,n,o,i,s,c,u,d){var p,l,h,f,w,y,_,v,m,C,L,H,$,U,z,Y,he,P=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(u=!!(32&r.__u),i=[c=t.__e=r.__e]),(p=b.__b)&&p(t);e:if(typeof P=="function")try{if(v=t.props,m="prototype"in P&&P.prototype.render,C=(p=P.contextType)&&n[p.__c],L=p?C?C.props.value:p.__:n,r.__c?_=(l=t.__c=r.__c).__=l.__E:(m?t.__c=l=new P(v,L):(t.__c=l=new V(v,L),l.constructor=P,l.render=Rt),C&&C.sub(l),l.state||(l.state={}),l.__n=n,h=l.__d=!0,l.__h=[],l._sb=[]),m&&l.__s==null&&(l.__s=l.state),m&&P.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=A({},l.__s)),A(l.__s,P.getDerivedStateFromProps(v,l.__s))),f=l.props,w=l.state,l.__v=t,h)m&&P.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),m&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(m&&P.getDerivedStateFromProps==null&&v!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,L),t.__v==r.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,L)===!1){for(t.__v!=r.__v&&(l.props=v,l.state=l.__s,l.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(I){I&&(I.__=t)}),H=0;H<l._sb.length;H++)l.__h.push(l._sb[H]);l._sb=[],l.__h.length&&s.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,L),m&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,w,y)})}if(l.context=L,l.props=v,l.__P=e,l.__e=!1,$=b.__r,U=0,m){for(l.state=l.__s,l.__d=!1,$&&$(t),p=l.render(l.props,l.state,l.context),z=0;z<l._sb.length;z++)l.__h.push(l._sb[z]);l._sb=[]}else do l.__d=!1,$&&$(t),p=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++U<25);l.state=l.__s,l.getChildContext!=null&&(n=A(A({},n),l.getChildContext())),m&&!h&&l.getSnapshotBeforeUpdate!=null&&(y=l.getSnapshotBeforeUpdate(f,w)),Y=p,p!=null&&p.type===M&&p.key==null&&(Y=pt(p.props.children)),c=dt(e,fe(Y)?Y:[Y],t,r,n,o,i,s,c,u,d),l.base=t.__e,t.__u&=-161,l.__h.length&&s.push(l),_&&(l.__E=l.__=null)}catch(I){if(t.__v=null,u||i!=null)if(I.then){for(t.__u|=u?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i[i.indexOf(c)]=null,t.__e=c}else{for(he=i.length;he--;)Le(i[he]);xe(t)}else t.__e=r.__e,t.__k=r.__k,I.then||xe(t);b.__e(I,t,r)}else i==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):c=t.__e=Wt(r.__e,t,r,n,o,i,s,u,d);return(p=b.diffed)&&p(t),128&t.__u?void 0:c}function xe(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(xe)}function ft(e,t,r){for(var n=0;n<r.length;n++)Te(r[n],r[++n],r[++n]);b.__c&&b.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){b.__e(i,o.__v)}})}function pt(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:fe(e)?e.map(pt):A({},e)}function Wt(e,t,r,n,o,i,s,c,u){var d,p,l,h,f,w,y,_=r.props||G,v=t.props,m=t.type;if(m=="svg"?o="http://www.w3.org/2000/svg":m=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((f=i[d])&&"setAttribute"in f==!!m&&(m?f.localName==m:f.nodeType==3)){e=f,i[d]=null;break}}if(e==null){if(m==null)return document.createTextNode(v);e=document.createElementNS(o,m,v.is&&v),c&&(b.__m&&b.__m(t,i),c=!1),i=null}if(m==null)_===v||c&&e.data==v||(e.data=v);else{if(i=i&&ue.call(e.childNodes),!c&&i!=null)for(_={},d=0;d<e.attributes.length;d++)_[(f=e.attributes[d]).name]=f.value;for(d in _)if(f=_[d],d!="children"){if(d=="dangerouslySetInnerHTML")l=f;else if(!(d in v)){if(d=="value"&&"defaultValue"in v||d=="checked"&&"defaultChecked"in v)continue;ee(e,d,null,f,o)}}for(d in v)f=v[d],d=="children"?h=f:d=="dangerouslySetInnerHTML"?p=f:d=="value"?w=f:d=="checked"?y=f:c&&typeof f!="function"||_[d]===f||ee(e,d,f,_[d],o);if(p)c||l&&(p.__html==l.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(l&&(e.innerHTML=""),dt(t.type=="template"?e.content:e,fe(h)?h:[h],t,r,n,m=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:r.__k&&F(r,0),c,u),i!=null)for(d=i.length;d--;)Le(i[d]);c||(d="value",m=="progress"&&w==null?e.removeAttribute("value"):w!=null&&(w!==e[d]||m=="progress"&&!w||m=="option"&&w!=_[d])&&ee(e,d,w,_[d],o),d="checked",y!=null&&y!=e[d]&&ee(e,d,y,_[d],o))}return e}function Te(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){b.__e(o,r)}}function ht(e,t,r){var n,o;if(b.unmount&&b.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||Te(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){b.__e(i,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&ht(n[o],t,r||typeof e.type!="function");r||Le(e.__e),e.__c=e.__=e.__e=void 0}function Rt(e,t,r){return this.constructor(e,r)}function It(e,t,r){var n,o,i,s;t==document&&(t=document.documentElement),b.__&&b.__(e,t),o=(n=!1)?null:t.__k,i=[],s=[],Pe(t,e=t.__k=Ht(M,null,[e]),o||G,G,t.namespaceURI,o?null:t.firstChild?ue.call(t.childNodes):null,i,o?o.__e:t.firstChild,n,s),ft(i,e,s)}ue=lt.slice,b={__e:function(e,t,r,n){for(var o,i,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),s=o.__d),s)return o.__E=o}catch(c){e=c}throw e}},nt=0,ot=function(e){return e!=null&&e.constructor===void 0},V.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=A({},this.state),typeof e=="function"&&(e=e(A({},r),this.props)),e&&A(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ne(this))},V.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ne(this))},V.prototype.render=M,N=[],it=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,st=function(e,t){return e.__v.__b-t.__v.__b},se.__r=0,at=/(PointerCapture)$|Capture$/i,Ee=0,we=We(!1),ke=We(!0);var J,k,_e,Re,Z=0,_t=[],x=b,Ie=x.__b,Be=x.__r,Fe=x.diffed,je=x.__c,Xe=x.unmount,Ye=x.__;function ze(e,t){x.__h&&x.__h(k,e,Z||t),Z=0;var r=k.__H||(k.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Ve(e){return Z=1,Bt(mt,e)}function Bt(e,t,r){var n=ze(J++,2);if(n.t=e,!n.__c&&(n.__=[mt(void 0,t),function(c){var u=n.__N?n.__N[0]:n.__[0],d=n.t(u,c);u!==d&&(n.__N=[d,n.__[1]],n.__c.setState({}))}],n.__c=k,!k.__f)){var o=function(c,u,d){if(!n.__c.__H)return!0;var p=n.__c.__H.__.filter(function(h){return!!h.__c});if(p.every(function(h){return!h.__N}))return!i||i.call(this,c,u,d);var l=n.__c.props!==c;return p.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(l=!0)}}),i&&i.call(this,c,u,d)||l};k.__f=!0;var i=k.shouldComponentUpdate,s=k.componentWillUpdate;k.componentWillUpdate=function(c,u,d){if(this.__e){var p=i;i=void 0,o(c,u,d),i=p}s&&s.call(this,c,u,d)},k.shouldComponentUpdate=o}return n.__N||n.__}function D(e,t){var r=ze(J++,3);!x.__s&&vt(r.__H,t)&&(r.__=e,r.u=t,k.__H.__h.push(r))}function Se(e){return Z=5,pe(function(){return{current:e}},[])}function pe(e,t){var r=ze(J++,7);return vt(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function te(e,t){return Z=8,pe(function(){return e},t)}function Ft(){for(var e;e=_t.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ie),e.__H.__h.forEach($e),e.__H.__h=[]}catch(t){e.__H.__h=[],x.__e(t,e.__v)}}x.__b=function(e){k=null,Ie&&Ie(e)},x.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ye&&Ye(e,t)},x.__r=function(e){Be&&Be(e),J=0;var t=(k=e.__c).__H;t&&(_e===k?(t.__h=[],k.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(ie),t.__h.forEach($e),t.__h=[],J=0)),_e=k},x.diffed=function(e){Fe&&Fe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(_t.push(t)!==1&&Re===x.requestAnimationFrame||((Re=x.requestAnimationFrame)||jt)(Ft)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),_e=k=null},x.__c=function(e,t){t.some(function(r){try{r.__h.forEach(ie),r.__h=r.__h.filter(function(n){return!n.__||$e(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],x.__e(n,r.__v)}}),je&&je(e,t)},x.unmount=function(e){Xe&&Xe(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{ie(n)}catch(o){t=o}}),r.__H=void 0,t&&x.__e(t,r.__v))};var Ke=typeof requestAnimationFrame=="function";function jt(e){var t,r=function(){clearTimeout(n),Ke&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);Ke&&(t=requestAnimationFrame(r))}function ie(e){var t=k,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),k=t}function $e(e){var t=k;e.__c=e.__(),k=t}function vt(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function mt(e,t){return typeof t=="function"?t(e):t}var Xt=Symbol.for("preact-signals");function Ae(){if(B>1)B--;else{for(var e,t=!1;K!==void 0;){var r=K;for(K=void 0,Ce++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&bt(r))try{r.c()}catch(o){t||(e=o,t=!0)}r=n}}if(Ce=0,B--,t)throw e}}var g=void 0;function yt(e){var t=g;g=void 0;try{return e()}finally{g=t}}var K=void 0,B=0,Ce=0,ae=0;function gt(e){if(g!==void 0){var t=e.n;if(t===void 0||t.t!==g)return t={i:0,S:e,p:g.s,n:void 0,t:g,e:void 0,x:void 0,r:t},g.s!==void 0&&(g.s.n=t),g.s=t,e.n=t,32&g.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=g.s,t.n=void 0,g.s.n=t,g.s=t),t}}function S(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}S.prototype.brand=Xt;S.prototype.h=function(){return!0};S.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:yt(function(){var n;(n=t.W)==null||n.call(t)}))};S.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&yt(function(){var o;(o=t.Z)==null||o.call(t)}))}};S.prototype.subscribe=function(e){var t=this;return Ue(function(){var r=t.value,n=g;g=void 0;try{e(r)}finally{g=n}},{name:"sub"})};S.prototype.valueOf=function(){return this.value};S.prototype.toString=function(){return this.value+""};S.prototype.toJSON=function(){return this.value};S.prototype.peek=function(){var e=g;g=void 0;try{return this.value}finally{g=e}};Object.defineProperty(S.prototype,"value",{get:function(){var e=gt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Ce>100)throw new Error("Cycle detected");this.v=e,this.i++,ae++,B++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Ae()}}}});function O(e,t){return new S(e,t)}function bt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function wt(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function kt(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function R(e,t){S.call(this,void 0),this.x=e,this.s=void 0,this.g=ae-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}R.prototype=new S;R.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ae))return!0;if(this.g=ae,this.f|=1,this.i>0&&!bt(this))return this.f&=-2,!0;var e=g;try{wt(this),g=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return g=e,kt(this),this.f&=-2,!0};R.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}S.prototype.S.call(this,e)};R.prototype.U=function(e){if(this.t!==void 0&&(S.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};R.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(R.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=gt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Yt(e,t){return new R(e,t)}function xt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){B++;var r=g;g=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,Oe(e),n}finally{g=r,Ae()}}}function Oe(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,xt(e)}function Vt(e){if(g!==this)throw new Error("Out-of-order effect");kt(this),g=e,this.f&=-2,8&this.f&&Oe(this),Ae()}function j(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}j.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};j.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,xt(this),wt(this),B++;var e=g;return g=this,Vt.bind(this,e)};j.prototype.N=function(){2&this.f||(this.f|=2,this.o=K,K=this)};j.prototype.d=function(){this.f|=8,1&this.f||Oe(this)};j.prototype.dispose=function(){this.d()};function Ue(e,t){var r=new j(e,t);try{r.c()}catch(o){throw r.d(),o}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var re;function X(e,t){b[e]=t.bind(null,b[e]||function(){})}function le(e){if(re){var t=re;re=void 0,t()}re=e&&e.S()}function St(e){var t=this,r=e.data,n=T(r);n.value=r;var o=pe(function(){for(var i=t.__v;i=i.__;)if(i.__c){i.__c.__$f|=4;break}return t.__$u.c=function(){var s,c=t.__$u.S(),u=o.value;c(),ot(u)||((s=t.base)==null?void 0:s.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=u},Yt(function(){var s=n.value.value;return s===0?0:s===!0?"":s||""})},[]);return o.value}St.displayName="_st";Object.defineProperties(S.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:St},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});X("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var o in n)if(o!=="children"){var i=n[o];i instanceof S&&(r||(t.__np=r={}),r[o]=i,n[o]=i.peek())}}e(t)});X("__r",function(e,t){e(t),le();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(o){var i;return Ue(function(){i=this}),i.c=function(){n.__$f|=1,n.setState({})},i}())),le(r)});X("__e",function(e,t,r,n){le(),e(t,r,n)});X("diffed",function(e,t){le();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,o=t.props;if(n){var i=r.U;if(i)for(var s in i){var c=i[s];c!==void 0&&!(s in n)&&(c.d(),i[s]=void 0)}else r.U=i={};for(var u in n){var d=i[u],p=n[u];d===void 0?(d=Kt(r,u,p,o),i[u]=d):d.o(p,o)}}}e(t)});function Kt(e,t,r,n){var o=t in e&&e.ownerSVGElement===void 0,i=O(r);return{o:function(s,c){i.value=s,n=c},d:Ue(function(){var s=i.value.value;n[t]!==s&&(n[t]=s,o?e[t]=s:s?e.setAttribute(t,s):e.removeAttribute(t))})}}X("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var o in n){var i=n[o];i&&i.d()}}}}else{var s=t.__c;if(s){var c=s.__$u;c&&(s.__$u=void 0,c.d())}}e(t)});X("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});V.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var o in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var i in e)if(i!=="__source"&&e[i]!==this.props[i])return!0;for(var s in this.props)if(!(s in e))return!0;return!1};function T(e){return pe(function(){return O(e)},[])}function De(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function qt(e,t){let r;const n=()=>{if(r)return r;const o=indexedDB.open(e);return o.onupgradeneeded=()=>o.result.createObjectStore(t),r=De(o),r.then(i=>{i.onclose=()=>r=void 0},()=>{}),r};return(o,i)=>n().then(s=>i(s.transaction(t,o).objectStore(t)))}let ve;function $t(){return ve||(ve=qt("keyval-store","keyval")),ve}function Ct(e,t=$t()){return t("readonly",r=>De(r.get(e)))}function Gt(e,t,r=$t()){return r("readwrite",n=>(n.put(t,e),De(n.transaction)))}var Jt=0;function a(e,t,r,n,o,i){t||(t={});var s,c,u=t;if("ref"in u)for(c in u={},t)c=="ref"?s=t[c]:u[c]=t[c];var d={type:e,props:u,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Jt,__i:-1,__u:0,__source:o,__self:i};if(typeof e=="function"&&(s=e.defaultProps))for(c in s)u[c]===void 0&&(u[c]=s[c]);return b.vnode&&b.vnode(d),d}var Zt=Object.defineProperty,Qt=(e,t)=>{for(var r in t)Zt(e,r,{get:t[r],enumerable:!0})};function er(e){return ce=new Et(e),ce}function tr(){if(!ce)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return ce}var Et,ce;async function rr(e,t){const r=tr(),n=await r.getProduct(e);if(!n.variants.edges.length)throw new Error("Product has no variants");const i=[{variantId:n.variants.edges[0].node.id,quantity:1}],s=await r.createCheckout(i);if(t&&typeof localStorage<"u"){const c={checkoutId:s.id,bookSlug:t,createdAt:Date.now()};localStorage.setItem(or,JSON.stringify(c))}return s.webUrl}function nr(e){return e.webUrl}var or;async function ir(e,t){const r={bookSlug:e,orderId:t==null?void 0:t.orderId,email:t==null?void 0:t.email,unlockedAt:Date.now()};await Gt(`${Q}${e}`,r),typeof localStorage<"u"&&localStorage.setItem(`${Q}${e}`,JSON.stringify(r))}async function sr(e){if(typeof localStorage<"u"&&localStorage.getItem(`${Q}${e}`))return!0;try{return!!await Ct(`${Q}${e}`)}catch{return!1}}async function ar(e){try{return await Ct(`${Q}${e}`)||null}catch{return null}}async function lr(e,t){const r=await ar(e);return!r||!r.orderId?!1:r.orderId===t}var Q,cr={};Qt(cr,{ShopifyClient:()=>Et,createCheckout:()=>rr,createShopifyClient:()=>er,getCheckoutUrl:()=>nr,isContentUnlocked:()=>sr,unlockContent:()=>ir,verifyPurchase:()=>lr});function dr({prev:e,next:t}){return!e&&!t?null:a("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[a("div",{class:"pressy-nav-inner",children:[e?a("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[a("span",{class:"pressy-nav-direction",children:"Previous"}),a("span",{class:"pressy-nav-title",children:e.title})]}):a("div",{class:"pressy-nav-placeholder"}),t?a("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[a("span",{class:"pressy-nav-direction",children:"Next"}),a("span",{class:"pressy-nav-title",children:t.title})]}):a("div",{class:"pressy-nav-placeholder"})]}),a("style",{children:`
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
      `})]})}function Lt(){const e=T(!1),t=T({x:0,y:0}),r=T(""),n=Se(null);D(()=>{const c=()=>{const u=window.getSelection();if(!u||u.isCollapsed){e.value=!1;return}const d=u.toString().trim();if(d.length<5){e.value=!1;return}r.value=d;const l=u.getRangeAt(0).getBoundingClientRect();t.value={x:l.left+l.width/2,y:l.top-10},e.value=!0};return document.addEventListener("selectionchange",c),document.addEventListener("mouseup",c),()=>{document.removeEventListener("selectionchange",c),document.removeEventListener("mouseup",c)}},[]);const o=()=>{const c=encodeURIComponent(r.value),u=new URL(window.location.href);return u.hash=`:~:text=${c}`,u.toString()},i=async()=>{const c=o(),u=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:u,url:c}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${u}

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
      `})]}):null}function Pt(){const e=T(!navigator.onLine),t=T(!1);return D(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?a("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?a(M,{children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),a("span",{children:"You're offline"})]}):a(M,{children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),a("span",{children:"Back online"})]}),a("style",{children:`
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
      `})]}):null}function Tt({children:e,prevChapter:t,nextChapter:r,showDropCap:n=!0,paginationMode:o="scroll"}){return o==="paginated"?a(ur,{prevChapter:t,nextChapter:r,showDropCap:n,children:e}):a("div",{class:"pressy-reader",children:[a("main",{class:"pressy-reader-main",children:a("article",{class:`pressy-prose ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),a(Lt,{}),a(dr,{prev:t,next:r}),a(Pt,{}),a("style",{children:fr})]})}function ur({children:e,prevChapter:t,nextChapter:r,showDropCap:n}){const o=Se(null),i=Se(null),[s,c]=Ve(0),[u,d]=Ve(1),p=te(()=>{const y=i.current,_=o.current;if(!y||!_)return;const v=_.clientWidth;if(v===0)return;y.style.columnWidth=`${v}px`,y.scrollWidth;const m=Math.max(1,Math.round(y.scrollWidth/v));d(m),c(C=>Math.min(C,m-1))},[]);D(()=>{const y=o.current;if(!y)return;const _=setTimeout(p,50),v=new ResizeObserver(()=>{p()});return v.observe(y),()=>{clearTimeout(_),v.disconnect()}},[p]),D(()=>{const y=i.current;if(!y)return;const _=y.querySelectorAll("img");if(_.length===0)return;const v=()=>p();return _.forEach(m=>{m.complete||(m.addEventListener("load",v),m.addEventListener("error",v))}),()=>{_.forEach(m=>{m.removeEventListener("load",v),m.removeEventListener("error",v)})}},[p]),D(()=>{const y=i.current,_=o.current;if(!y||!_)return;const v=s*_.clientWidth;y.style.transform=`translateX(-${v}px)`},[s]);const l=te(y=>{const _=Math.max(0,Math.min(y,u-1));c(_)},[u]),h=te(()=>{if(s>=u-1){r&&(window.location.href=r.slug);return}l(s+1)},[s,u,r,l]),f=te(()=>{if(s<=0){t&&(window.location.href=t.slug);return}l(s-1)},[s,t,l]);D(()=>{const y=_=>{const v=_.target.tagName;v==="INPUT"||v==="TEXTAREA"||v==="SELECT"||(_.key==="ArrowRight"||_.key===" "?(_.preventDefault(),h()):_.key==="ArrowLeft"?(_.preventDefault(),f()):_.key==="Home"?(_.preventDefault(),l(0)):_.key==="End"&&(_.preventDefault(),l(u-1)))};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[h,f,l,u]),D(()=>{const y=o.current;if(!y)return;let _=0,v=0,m=!1;const C=$=>{_=$.touches[0].clientX,v=$.touches[0].clientY,m=!1},L=$=>{const U=$.touches[0].clientX-_,z=$.touches[0].clientY-v;Math.abs(U)>Math.abs(z)&&Math.abs(U)>10&&(m=!0,$.preventDefault())},H=$=>{if(!m)return;const U=$.changedTouches[0].clientX-_,z=50;U<-z?h():U>z&&f()};return y.addEventListener("touchstart",C,{passive:!0}),y.addEventListener("touchmove",L,{passive:!1}),y.addEventListener("touchend",H,{passive:!0}),()=>{y.removeEventListener("touchstart",C),y.removeEventListener("touchmove",L),y.removeEventListener("touchend",H)}},[h,f]);const w=u>1?(s+1)/u*100:100;return a("div",{class:"pressy-reader pressy-reader--paginated",children:[a("div",{class:"pressy-paginated-viewport",ref:o,children:a("article",{ref:i,class:`pressy-prose pressy-prose--paginated ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),a("div",{class:"pressy-tap-zone pressy-tap-prev",onClick:f,"aria-label":"Previous page"}),a("div",{class:"pressy-tap-zone pressy-tap-next",onClick:h,"aria-label":"Next page"}),a("div",{class:"pressy-page-footer",children:[a("div",{class:"pressy-progress-bar",children:a("div",{class:"pressy-progress-fill",style:{width:`${w}%`}})}),a("div",{class:"pressy-page-indicator",children:["Page ",s+1," of ",u]})]}),a(Lt,{}),a(Pt,{}),a("style",{children:pr})]})}var fr=`
  .pressy-reader {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .pressy-reader-main {
    flex: 1;
    padding: 2rem 0;
  }
`,pr=`
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
     We use translateX to show the current page. */
  .pressy-prose--paginated {
    max-width: none;
    height: 100%;
    column-fill: auto;
    column-gap: 0;
    overflow: visible;
    box-sizing: border-box;
    padding: 0;
    will-change: transform;
    transition: transform 0.3s ease;
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

  /* Tap zones — invisible overlays on left/right thirds of screen */
  .pressy-tap-zone {
    position: absolute;
    top: 0;
    bottom: 60px;
    z-index: 10;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .pressy-tap-prev {
    left: 0;
    width: 33%;
  }

  .pressy-tap-next {
    right: 0;
    width: 33%;
  }

  /* Page footer */
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
  }
`,hr="pressy-cached-books";function qe(){try{const e=localStorage.getItem(hr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function _r({bookSlug:e,chapterUrls:t,cachedBooks:r,cacheProgress:n,onDownload:o,onRemove:i}){var d;const s=T(qe().has(e)||r.value.has(e)),c=T(((d=n.value)==null?void 0:d.bookSlug)===e),u=T(null);return D(()=>{const p=()=>{var f;s.value=qe().has(e)||r.value.has(e),c.value=((f=n.value)==null?void 0:f.bookSlug)===e;const h=n.value;u.value=h&&h.bookSlug===e?Math.round(h.current/h.total*100):null},l=setInterval(p,500);return p(),()=>clearInterval(l)},[e]),s.value?a("div",{class:"pressy-download-book",children:[a("div",{class:"pressy-download-status",children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),a("span",{children:"Available offline"})]}),a("button",{class:"pressy-download-remove",onClick:()=>i(e),"aria-label":"Remove offline copy",children:"Remove"}),a("style",{children:me})]}):c.value?a("div",{class:"pressy-download-book",children:[a("div",{class:"pressy-download-progress",children:[a("div",{class:"pressy-download-bar",children:a("div",{class:"pressy-download-bar-fill",style:{width:`${u.value||0}%`}})}),a("span",{class:"pressy-download-percent",children:[u.value||0,"%"]})]}),a("style",{children:me})]}):a("div",{class:"pressy-download-book",children:[a("button",{class:"pressy-download-btn",onClick:()=>o(e,t),"aria-label":"Download for offline reading",children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),a("span",{children:"Download for offline"})]}),a("style",{children:me})]})}var me=`
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
`;function vr({id:e,children:t}){const r=T(!1);return a(M,{children:[a("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&a("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,a("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),a("style",{children:`
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
      `})]})}function mr({children:e,title:t}){return a("aside",{class:"pressy-aside",children:[t&&a("strong",{class:"pressy-aside-title",children:t}),a("div",{class:"pressy-aside-content",children:e}),a("style",{children:`
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
      `})]})}function Ge({src:e,alt:t,caption:r,wide:n,children:o}){return a("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[a("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||o)&&a("figcaption",{class:"pressy-figure-caption",children:r||o}),a("style",{children:`
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
      `})]})}var yr={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},gr={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function br({type:e="note",title:t,children:r}){return a("div",{class:`pressy-callout pressy-callout-${e}`,children:[a("div",{class:"pressy-callout-header",children:[a("span",{class:"pressy-callout-icon",children:yr[e]}),a("strong",{class:"pressy-callout-title",children:t||gr[e]})]}),a("div",{class:"pressy-callout-content",children:r}),a("style",{children:`
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
      `})]})}function Je({variant:e="asterisks"}){return a("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&a("span",{children:"* * *"}),e==="ornament"&&a("span",{children:"❧"}),a("style",{children:`
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
      `})]})}var wr={Footnote:vr,Aside:mr,Figure:Ge,Callout:br,SceneBreak:Je,img:Ge,hr:Je},kr={};function zt(){return{...wr,...kr}}var At="pressy-cached-books",ye=O("online"),de=O(null),ge=O(!1);function xr(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(At);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var E=O(xr());typeof window<"u"&&(ye.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{ye.value="online"}),window.addEventListener("offline",()=>{ye.value="offline"}));async function Sr(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",$r),navigator.serviceWorker.controller?ge.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{ge.value=!0}),n.addEventListener("updatefound",()=>{const o=n.installing;o&&o.addEventListener("statechange",()=>{o.state==="activated"&&(ge.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function q(){try{localStorage.setItem(At,JSON.stringify([...E.value]))}catch{}}function $r(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:o}=e.data;de.value={bookSlug:r,current:n,total:o}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;de.value=null;const n=new Set(E.value);n.add(r),E.value=n,q()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const o of r){const i=o.match(/\/books\/([^/]+)/);i&&n.add(i[1])}E.value=n,q()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(E.value);n.delete(r),E.value=n,q()}}async function Cr(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(o=>o.startsWith("http")?o:`${window.location.origin}${o}`);de.value={bookSlug:e,current:0,total:r.length};const n=new Set(E.value);return n.add(e),E.value=n,q(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}async function Er(e){const t=new Set(E.value);if(t.delete(e),E.value=t,q(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const o of n)o.url.includes(`/books/${e}`)&&await r.delete(o);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var Ze=O("/"),Lr=O("light"),Qe=O(!navigator.onLine),Pr="pressy",Tr=1,et="reading-progress",tt="unlocks",ne=null;async function zr(){return ne||new Promise((e,t)=>{const r=indexedDB.open(Pr,Tr);r.onerror=()=>t(r.error),r.onsuccess=()=>{ne=r.result,e(ne)},r.onupgradeneeded=n=>{const o=n.target.result;o.objectStoreNames.contains(et)||o.createObjectStore(et,{keyPath:"chapterSlug"}),o.objectStoreNames.contains(tt)||o.createObjectStore(tt,{keyPath:"bookSlug"})}})}function rt(e){Lr.value=e,document.documentElement.setAttribute("data-theme",e),localStorage.setItem("pressy-theme",e)}function Ar(){const e=localStorage.getItem("pressy-theme");e?rt(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&rt("dark")}function Or(){window.addEventListener("online",()=>{Qe.value=!1}),window.addEventListener("offline",()=>{Qe.value=!0})}function Ot(e,t=[]){const r=e.chapters.map(n=>`/books/${e.slug}/${n.slug}`);return a("div",{class:"pressy-home",children:[a("header",{class:"pressy-home-header",children:[a("h1",{children:e.metadata.title}),a("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&a("p",{class:"pressy-home-desc",children:e.metadata.description})]}),a(_r,{bookSlug:e.slug,chapterUrls:r,cachedBooks:E,cacheProgress:de,onDownload:Cr,onRemove:Er}),a("section",{class:"pressy-home-section",children:[a("h2",{children:"Chapters"}),a("nav",{class:"pressy-chapter-list",children:e.chapters.map(n=>a("a",{href:`${W}/books/${e.slug}/${n.slug}`,class:"pressy-chapter-link",children:[a("span",{class:"pressy-chapter-order",children:[n.order,"."]}),a("span",{children:n.title})]}))})]}),t.length>0&&a("section",{class:"pressy-home-section",children:[a("h2",{children:"Articles"}),a("nav",{class:"pressy-chapter-list",children:t.map(n=>a("a",{href:`${W}/articles/${n.slug}`,class:"pressy-chapter-link",children:n.metadata.title}))})]}),a("style",{children:Ut})]})}function be(e){var r,n;if(e.books.length===1)return Ot(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return a("div",{class:"pressy-home",children:[a("header",{class:"pressy-home-header",children:[a("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&a("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&a("section",{class:"pressy-home-section",children:[a("h2",{children:"Books"}),a("nav",{class:"pressy-chapter-list",children:e.books.map(o=>a("a",{href:`${W}/books/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),e.articles.length>0&&a("section",{class:"pressy-home-section",children:[a("h2",{children:"Articles"}),a("nav",{class:"pressy-chapter-list",children:e.articles.map(o=>a("a",{href:`${W}/articles/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),a("style",{children:Ut})]})}function Ur(e,t,r,n){const o=t.split("/"),i=o[2],s=o[3],c=e.books.find(w=>w.slug===i),u=c?c.chapters.findIndex(w=>w.slug===s):-1,d=c==null?void 0:c.chapters[u],p=w=>`${W}/books/${i}/${w.slug}`,l=c&&u>0?{slug:p(c.chapters[u-1]),title:c.chapters[u-1].title}:void 0,h=c&&u>=0&&u<c.chapters.length-1?{slug:p(c.chapters[u+1]),title:c.chapters[u+1].title}:void 0,f=r;return a(Tt,{title:(d==null?void 0:d.title)||s,prevChapter:l,nextChapter:h,paginationMode:n,children:a(f,{components:zt()})})}function Dr(e,t,r){const n=t.split("/")[2],o=e.articles.find(s=>s.slug===n),i=r;return a(Tt,{title:(o==null?void 0:o.metadata.title)||n,children:a(i,{components:zt()})})}var Ut=`
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
`;function Hr(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const o=r.indexOf(n);return o>0?r.slice(0,o):""}var W="";function Nr(e,t){var n;W=Hr(e.route),Ze.value=e.route,Ar(),Or(),zr(),Sr(W),window.addEventListener("popstate",()=>{Ze.value=window.location.pathname}),document.addEventListener("click",o=>{const i=o.target.closest("a");if(!i)return;const s=i.getAttribute("href");if(s&&!(s.startsWith("http")||s.startsWith("#"))&&s.startsWith(e.route+"#")){o.preventDefault();const c=s.slice(s.indexOf("#")),u=document.querySelector(c);u&&u.scrollIntoView({behavior:"smooth"});return}});let r;switch(e.routeType){case"home":r=be(e.manifest);break;case"book":{const o=e.route.split("/")[2],i=e.manifest.books.find(s=>s.slug===o);r=i?Ot(i):a("div",{children:"Book not found"});break}case"chapter":r=t?Ur(e.manifest,e.route,t,(n=e.pagination)==null?void 0:n.defaultMode):a("div",{children:"Loading..."});break;case"article":r=t?Dr(e.manifest,e.route,t):a("div",{children:"Loading..."});break;case"books":r=be(e.manifest);break;case"articles":r=be(e.manifest);break;default:r=a("div",{children:"Page not found"})}It(r,document.getElementById("app"))}export{Nr as h,M as k,a as u};
