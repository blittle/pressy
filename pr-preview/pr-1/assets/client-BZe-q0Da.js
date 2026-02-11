var de,m,or,nr,H,We,ir,sr,ar,Le,ke,xe,X={},lr=[],Mr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ue=Array.isArray;function z(e,r){for(var t in r)e[t]=r[t];return e}function ze(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function h(e,r,t){var o,n,i,s={};for(i in r)i=="key"?o=r[i]:i=="ref"?n=r[i]:s[i]=r[i];if(arguments.length>2&&(s.children=arguments.length>3?de.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return ee(e,s,o,n,null)}function ee(e,r,t,o,n){var i={type:e,props:r,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:n??++or,__i:-1,__u:0};return n==null&&m.vnode!=null&&m.vnode(i),i}function A(e){return e.children}function N(e,r){this.props=e,this.context=r}function W(e,r){if(r==null)return e.__?W(e.__,e.__i+1):null;for(var t;r<e.__k.length;r++)if((t=e.__k[r])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?W(e):null}function cr(e){var r,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,r=0;r<e.__k.length;r++)if((t=e.__k[r])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return cr(e)}}function Re(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!oe.__r++||We!=m.debounceRendering)&&((We=m.debounceRendering)||ir)(oe)}function oe(){for(var e,r,t,o,n,i,s,d=1;H.length;)H.length>d&&H.sort(sr),e=H.shift(),d=H.length,e.__d&&(t=void 0,o=void 0,n=(o=(r=e).__v).__e,i=[],s=[],r.__P&&((t=z({},o)).__v=o.__v+1,m.vnode&&m.vnode(t),Te(r.__P,t,o,r.__n,r.__P.namespaceURI,32&o.__u?[n]:null,i,n??W(o),!!(32&o.__u),s),t.__v=o.__v,t.__.__k[t.__i]=t,fr(i,t,s),o.__e=o.__=null,t.__e!=n&&cr(t)));oe.__r=0}function dr(e,r,t,o,n,i,s,d,u,c,f){var l,v,p,w,$,b,g,y=o&&o.__k||lr,T=r.length;for(u=Hr(t,r,y,u,T),l=0;l<T;l++)(p=t.__k[l])!=null&&(v=p.__i==-1?X:y[p.__i]||X,p.__i=l,b=Te(e,p,v,n,i,s,d,u,c,f),w=p.__e,p.ref&&v.ref!=p.ref&&(v.ref&&Pe(v.ref,null,p),f.push(p.ref,p.__c||w,p)),$==null&&w!=null&&($=w),(g=!!(4&p.__u))||v.__k===p.__k?u=ur(p,u,e,g):typeof p.type=="function"&&b!==void 0?u=b:w&&(u=w.nextSibling),p.__u&=-7);return t.__e=$,u}function Hr(e,r,t,o,n){var i,s,d,u,c,f=t.length,l=f,v=0;for(e.__k=new Array(n),i=0;i<n;i++)(s=r[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[i]=ee(null,s,null,null,null):ue(s)?s=e.__k[i]=ee(A,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[i]=ee(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[i]=s,u=i+v,s.__=e,s.__b=e.__b+1,d=null,(c=s.__i=Ar(s,t,u,l))!=-1&&(l--,(d=t[c])&&(d.__u|=2)),d==null||d.__v==null?(c==-1&&(n>f?v--:n<f&&v++),typeof s.type!="function"&&(s.__u|=4)):c!=u&&(c==u-1?v--:c==u+1?v++:(c>u?v--:v++,s.__u|=4))):e.__k[i]=null;if(l)for(i=0;i<f;i++)(d=t[i])!=null&&!(2&d.__u)&&(d.__e==o&&(o=W(d)),hr(d,d));return o}function ur(e,r,t,o){var n,i;if(typeof e.type=="function"){for(n=e.__k,i=0;n&&i<n.length;i++)n[i]&&(n[i].__=e,r=ur(n[i],r,t,o));return r}e.__e!=r&&(o&&(r&&e.type&&!r.parentNode&&(r=W(e)),t.insertBefore(e.__e,r||null)),r=e.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function Ar(e,r,t,o){var n,i,s,d=e.key,u=e.type,c=r[t],f=c!=null&&(2&c.__u)==0;if(c===null&&d==null||f&&d==c.key&&u==c.type)return t;if(o>(f?1:0)){for(n=t-1,i=t+1;n>=0||i<r.length;)if((c=r[s=n>=0?n--:i++])!=null&&!(2&c.__u)&&d==c.key&&u==c.type)return s}return-1}function Be(e,r,t){r[0]=="-"?e.setProperty(r,t??""):e[r]=t==null?"":typeof t!="number"||Mr.test(r)?t:t+"px"}function J(e,r,t,o,n){var i,s;e:if(r=="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(r in o)t&&r in t||Be(e.style,r,"");if(t)for(r in t)o&&t[r]==o[r]||Be(e.style,r,t[r])}else if(r[0]=="o"&&r[1]=="n")i=r!=(r=r.replace(ar,"$1")),s=r.toLowerCase(),r=s in e||r=="onFocusOut"||r=="onFocusIn"?s.slice(2):r.slice(2),e.l||(e.l={}),e.l[r+i]=t,t?o?t.u=o.u:(t.u=Le,e.addEventListener(r,i?xe:ke,i)):e.removeEventListener(r,i?xe:ke,i);else{if(n=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in e)try{e[r]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&r[4]!="-"?e.removeAttribute(r):e.setAttribute(r,r=="popover"&&t==1?"":t))}}function Ie(e){return function(r){if(this.l){var t=this.l[r.type+e];if(r.t==null)r.t=Le++;else if(r.t<t.u)return;return t(m.event?m.event(r):r)}}}function Te(e,r,t,o,n,i,s,d,u,c){var f,l,v,p,w,$,b,g,y,T,M,K,I,Ue,q,F,he,L=r.type;if(r.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),i=[d=r.__e=t.__e]),(f=m.__b)&&f(r);e:if(typeof L=="function")try{if(g=r.props,y="prototype"in L&&L.prototype.render,T=(f=L.contextType)&&o[f.__c],M=f?T?T.props.value:f.__:o,t.__c?b=(l=r.__c=t.__c).__=l.__E:(y?r.__c=l=new L(g,M):(r.__c=l=new N(g,M),l.constructor=L,l.render=Or),T&&T.sub(l),l.state||(l.state={}),l.__n=o,v=l.__d=!0,l.__h=[],l._sb=[]),y&&l.__s==null&&(l.__s=l.state),y&&L.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=z({},l.__s)),z(l.__s,L.getDerivedStateFromProps(g,l.__s))),p=l.props,w=l.state,l.__v=r,v)y&&L.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),y&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(y&&L.getDerivedStateFromProps==null&&g!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(g,M),r.__v==t.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(g,l.__s,M)===!1){for(r.__v!=t.__v&&(l.props=g,l.state=l.__s,l.__d=!1),r.__e=t.__e,r.__k=t.__k,r.__k.some(function(O){O&&(O.__=r)}),K=0;K<l._sb.length;K++)l.__h.push(l._sb[K]);l._sb=[],l.__h.length&&s.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(g,l.__s,M),y&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,w,$)})}if(l.context=M,l.props=g,l.__P=e,l.__e=!1,I=m.__r,Ue=0,y){for(l.state=l.__s,l.__d=!1,I&&I(r),f=l.render(l.props,l.state,l.context),q=0;q<l._sb.length;q++)l.__h.push(l._sb[q]);l._sb=[]}else do l.__d=!1,I&&I(r),f=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++Ue<25);l.state=l.__s,l.getChildContext!=null&&(o=z(z({},o),l.getChildContext())),y&&!v&&l.getSnapshotBeforeUpdate!=null&&($=l.getSnapshotBeforeUpdate(p,w)),F=f,f!=null&&f.type===A&&f.key==null&&(F=pr(f.props.children)),d=dr(e,ue(F)?F:[F],r,t,o,n,i,s,d,u,c),l.base=r.__e,r.__u&=-161,l.__h.length&&s.push(l),b&&(l.__E=l.__=null)}catch(O){if(r.__v=null,u||i!=null)if(O.then){for(r.__u|=u?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;i[i.indexOf(d)]=null,r.__e=d}else{for(he=i.length;he--;)ze(i[he]);Se(r)}else r.__e=t.__e,r.__k=t.__k,O.then||Se(r);m.__e(O,r,t)}else i==null&&r.__v==t.__v?(r.__k=t.__k,r.__e=t.__e):d=r.__e=Dr(t.__e,r,t,o,n,i,s,u,c);return(f=m.diffed)&&f(r),128&r.__u?void 0:d}function Se(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Se)}function fr(e,r,t){for(var o=0;o<t.length;o++)Pe(t[o],t[++o],t[++o]);m.__c&&m.__c(r,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){m.__e(i,n.__v)}})}function pr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:ue(e)?e.map(pr):z({},e)}function Dr(e,r,t,o,n,i,s,d,u){var c,f,l,v,p,w,$,b=t.props||X,g=r.props,y=r.type;if(y=="svg"?n="http://www.w3.org/2000/svg":y=="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),i!=null){for(c=0;c<i.length;c++)if((p=i[c])&&"setAttribute"in p==!!y&&(y?p.localName==y:p.nodeType==3)){e=p,i[c]=null;break}}if(e==null){if(y==null)return document.createTextNode(g);e=document.createElementNS(n,y,g.is&&g),d&&(m.__m&&m.__m(r,i),d=!1),i=null}if(y==null)b===g||d&&e.data==g||(e.data=g);else{if(i=i&&de.call(e.childNodes),!d&&i!=null)for(b={},c=0;c<e.attributes.length;c++)b[(p=e.attributes[c]).name]=p.value;for(c in b)if(p=b[c],c!="children"){if(c=="dangerouslySetInnerHTML")l=p;else if(!(c in g)){if(c=="value"&&"defaultValue"in g||c=="checked"&&"defaultChecked"in g)continue;J(e,c,null,p,n)}}for(c in g)p=g[c],c=="children"?v=p:c=="dangerouslySetInnerHTML"?f=p:c=="value"?w=p:c=="checked"?$=p:d&&typeof p!="function"||b[c]===p||J(e,c,p,b[c],n);if(f)d||l&&(f.__html==l.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),r.__k=[];else if(l&&(e.innerHTML=""),dr(r.type=="template"?e.content:e,ue(v)?v:[v],r,t,o,y=="foreignObject"?"http://www.w3.org/1999/xhtml":n,i,s,i?i[0]:t.__k&&W(t,0),d,u),i!=null)for(c=i.length;c--;)ze(i[c]);d||(c="value",y=="progress"&&w==null?e.removeAttribute("value"):w!=null&&(w!==e[c]||y=="progress"&&!w||y=="option"&&w!=b[c])&&J(e,c,w,b[c],n),c="checked",$!=null&&$!=e[c]&&J(e,c,$,b[c],n))}return e}function Pe(e,r,t){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&r==null||(e.__u=e(r))}else e.current=r}catch(n){m.__e(n,t)}}function hr(e,r,t){var o,n;if(m.unmount&&m.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||Pe(o,null,r)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){m.__e(i,r)}o.base=o.__P=null}if(o=e.__k)for(n=0;n<o.length;n++)o[n]&&hr(o[n],r,t||typeof e.type!="function");t||ze(e.__e),e.__c=e.__=e.__e=void 0}function Or(e,r,t){return this.constructor(e,t)}function Ur(e,r,t){var o,n,i,s;r==document&&(r=document.documentElement),m.__&&m.__(e,r),n=(o=!1)?null:r.__k,i=[],s=[],Te(r,e=r.__k=h(A,null,[e]),n||X,X,r.namespaceURI,n?null:r.firstChild?de.call(r.childNodes):null,i,n?n.__e:r.firstChild,o,s),fr(i,e,s)}de=lr.slice,m={__e:function(e,r,t,o){for(var n,i,s;r=r.__;)if((n=r.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,o||{}),s=n.__d),s)return n.__E=n}catch(d){e=d}throw e}},or=0,nr=function(e){return e!=null&&e.constructor===void 0},N.prototype.setState=function(e,r){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=z({},this.state),typeof e=="function"&&(e=e(z({},t),this.props)),e&&z(t,e),e!=null&&this.__v&&(r&&this._sb.push(r),Re(this))},N.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Re(this))},N.prototype.render=A,H=[],ir=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,sr=function(e,r){return e.__v.__b-r.__v.__b},oe.__r=0,ar=/(PointerCapture)$|Capture$/i,Le=0,ke=Ie(!1),xe=Ie(!0);var ne,S,ve,Fe,$e=0,vr=[],k=m,Ne=k.__b,je=k.__r,Ve=k.diffed,Xe=k.__c,Ye=k.unmount,Ge=k.__;function _r(e,r){k.__h&&k.__h(S,e,$e||r),$e=0;var t=S.__H||(S.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function j(e,r){var t=_r(ne++,3);!k.__s&&mr(t.__H,r)&&(t.__=e,t.u=r,S.__H.__h.push(t))}function ie(e){return $e=5,fe(function(){return{current:e}},[])}function fe(e,r){var t=_r(ne++,7);return mr(t.__H,r)&&(t.__=e(),t.__H=r,t.__h=e),t.__}function Wr(){for(var e;e=vr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(re),e.__H.__h.forEach(Ce),e.__H.__h=[]}catch(r){e.__H.__h=[],k.__e(r,e.__v)}}k.__b=function(e){S=null,Ne&&Ne(e)},k.__=function(e,r){e&&r.__k&&r.__k.__m&&(e.__m=r.__k.__m),Ge&&Ge(e,r)},k.__r=function(e){je&&je(e),ne=0;var r=(S=e.__c).__H;r&&(ve===S?(r.__h=[],S.__h=[],r.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(r.__h.forEach(re),r.__h.forEach(Ce),r.__h=[],ne=0)),ve=S},k.diffed=function(e){Ve&&Ve(e);var r=e.__c;r&&r.__H&&(r.__H.__h.length&&(vr.push(r)!==1&&Fe===k.requestAnimationFrame||((Fe=k.requestAnimationFrame)||Rr)(Wr)),r.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),ve=S=null},k.__c=function(e,r){r.some(function(t){try{t.__h.forEach(re),t.__h=t.__h.filter(function(o){return!o.__||Ce(o)})}catch(o){r.some(function(n){n.__h&&(n.__h=[])}),r=[],k.__e(o,t.__v)}}),Xe&&Xe(e,r)},k.unmount=function(e){Ye&&Ye(e);var r,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{re(o)}catch(n){r=n}}),t.__H=void 0,r&&k.__e(r,t.__v))};var Ke=typeof requestAnimationFrame=="function";function Rr(e){var r,t=function(){clearTimeout(o),Ke&&cancelAnimationFrame(r),setTimeout(e)},o=setTimeout(t,35);Ke&&(r=requestAnimationFrame(t))}function re(e){var r=S,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),S=r}function Ce(e){var r=S;e.__c=e.__(),S=r}function mr(e,r){return!e||e.length!==r.length||r.some(function(t,o){return t!==e[o]})}var Br=Symbol.for("preact-signals");function Me(){if(U>1)U--;else{for(var e,r=!1;V!==void 0;){var t=V;for(V=void 0,Ee++;t!==void 0;){var o=t.o;if(t.o=void 0,t.f&=-3,!(8&t.f)&&br(t))try{t.c()}catch(n){r||(e=n,r=!0)}t=o}}if(Ee=0,U--,r)throw e}}var _=void 0;function gr(e){var r=_;_=void 0;try{return e()}finally{_=r}}var V=void 0,U=0,Ee=0,se=0;function yr(e){if(_!==void 0){var r=e.n;if(r===void 0||r.t!==_)return r={i:0,S:e,p:_.s,n:void 0,t:_,e:void 0,x:void 0,r},_.s!==void 0&&(_.s.n=r),_.s=r,e.n=r,32&_.f&&e.S(r),r;if(r.i===-1)return r.i=0,r.n!==void 0&&(r.n.p=r.p,r.p!==void 0&&(r.p.n=r.n),r.p=_.s,r.n=void 0,_.s.n=r,_.s=r),r}}function x(e,r){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=r==null?void 0:r.watched,this.Z=r==null?void 0:r.unwatched,this.name=r==null?void 0:r.name}x.prototype.brand=Br;x.prototype.h=function(){return!0};x.prototype.S=function(e){var r=this,t=this.t;t!==e&&e.e===void 0&&(e.x=t,this.t=e,t!==void 0?t.e=e:gr(function(){var o;(o=r.W)==null||o.call(r)}))};x.prototype.U=function(e){var r=this;if(this.t!==void 0){var t=e.e,o=e.x;t!==void 0&&(t.x=o,e.e=void 0),o!==void 0&&(o.e=t,e.x=void 0),e===this.t&&(this.t=o,o===void 0&&gr(function(){var n;(n=r.Z)==null||n.call(r)}))}};x.prototype.subscribe=function(e){var r=this;return Ae(function(){var t=r.value,o=_;_=void 0;try{e(t)}finally{_=o}},{name:"sub"})};x.prototype.valueOf=function(){return this.value};x.prototype.toString=function(){return this.value+""};x.prototype.toJSON=function(){return this.value};x.prototype.peek=function(){var e=_;_=void 0;try{return this.value}finally{_=e}};Object.defineProperty(x.prototype,"value",{get:function(){var e=yr(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Ee>100)throw new Error("Cycle detected");this.v=e,this.i++,se++,U++;try{for(var r=this.t;r!==void 0;r=r.x)r.t.N()}finally{Me()}}}});function E(e,r){return new x(e,r)}function br(e){for(var r=e.s;r!==void 0;r=r.n)if(r.S.i!==r.i||!r.S.h()||r.S.i!==r.i)return!0;return!1}function wr(e){for(var r=e.s;r!==void 0;r=r.n){var t=r.S.n;if(t!==void 0&&(r.r=t),r.S.n=r,r.i=-1,r.n===void 0){e.s=r;break}}}function kr(e){for(var r=e.s,t=void 0;r!==void 0;){var o=r.p;r.i===-1?(r.S.U(r),o!==void 0&&(o.n=r.n),r.n!==void 0&&(r.n.p=o)):t=r,r.S.n=r.r,r.r!==void 0&&(r.r=void 0),r=o}e.s=t}function D(e,r){x.call(this,void 0),this.x=e,this.s=void 0,this.g=se-1,this.f=4,this.W=r==null?void 0:r.watched,this.Z=r==null?void 0:r.unwatched,this.name=r==null?void 0:r.name}D.prototype=new x;D.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===se))return!0;if(this.g=se,this.f|=1,this.i>0&&!br(this))return this.f&=-2,!0;var e=_;try{wr(this),_=this;var r=this.x();(16&this.f||this.v!==r||this.i===0)&&(this.v=r,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return _=e,kr(this),this.f&=-2,!0};D.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var r=this.s;r!==void 0;r=r.n)r.S.S(r)}x.prototype.S.call(this,e)};D.prototype.U=function(e){if(this.t!==void 0&&(x.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var r=this.s;r!==void 0;r=r.n)r.S.U(r)}};D.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(D.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=yr(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function xr(e,r){return new D(e,r)}function Sr(e){var r=e.u;if(e.u=void 0,typeof r=="function"){U++;var t=_;_=void 0;try{r()}catch(o){throw e.f&=-2,e.f|=8,He(e),o}finally{_=t,Me()}}}function He(e){for(var r=e.s;r!==void 0;r=r.n)r.S.U(r);e.x=void 0,e.s=void 0,Sr(e)}function Ir(e){if(_!==this)throw new Error("Out-of-order effect");kr(this),_=e,this.f&=-2,8&this.f&&He(this),Me()}function R(e,r){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=r==null?void 0:r.name}R.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var r=this.x();typeof r=="function"&&(this.u=r)}finally{e()}};R.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Sr(this),wr(this),U++;var e=_;return _=this,Ir.bind(this,e)};R.prototype.N=function(){2&this.f||(this.f|=2,this.o=V,V=this)};R.prototype.d=function(){this.f|=8,1&this.f||He(this)};R.prototype.dispose=function(){this.d()};function Ae(e,r){var t=new R(e,r);try{t.c()}catch(n){throw t.d(),n}var o=t.d.bind(t);return o[Symbol.dispose]=o,o}var pe,Z;function B(e,r){m[e]=r.bind(null,m[e]||function(){})}function ae(e){if(Z){var r=Z;Z=void 0,r()}Z=e&&e.S()}function $r(e){var r=this,t=e.data,o=C(t);o.value=t;var n=fe(function(){for(var i=r.__v;i=i.__;)if(i.__c){i.__c.__$f|=4;break}return r.__$u.c=function(){var s,d=r.__$u.S(),u=n.value;d(),nr(u)||((s=r.base)==null?void 0:s.nodeType)!==3?(r.__$f|=1,r.setState({})):r.base.data=u},xr(function(){var s=o.value.value;return s===0?0:s===!0?"":s||""})},[]);return n.value}$r.displayName="_st";Object.defineProperties(x.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:$r},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});B("__b",function(e,r){if(typeof r.type=="string"){var t,o=r.props;for(var n in o)if(n!=="children"){var i=o[n];i instanceof x&&(t||(r.__np=t={}),t[n]=i,o[n]=i.peek())}}e(r)});B("__r",function(e,r){e(r),ae();var t,o=r.__c;o&&(o.__$f&=-2,(t=o.__$u)===void 0&&(o.__$u=t=function(n){var i;return Ae(function(){i=this}),i.c=function(){o.__$f|=1,o.setState({})},i}())),pe=o,ae(t)});B("__e",function(e,r,t,o){ae(),pe=void 0,e(r,t,o)});B("diffed",function(e,r){ae(),pe=void 0;var t;if(typeof r.type=="string"&&(t=r.__e)){var o=r.__np,n=r.props;if(o){var i=t.U;if(i)for(var s in i){var d=i[s];d!==void 0&&!(s in o)&&(d.d(),i[s]=void 0)}else t.U=i={};for(var u in o){var c=i[u],f=o[u];c===void 0?(c=Fr(t,u,f,n),i[u]=c):c.o(f,n)}}}e(r)});function Fr(e,r,t,o){var n=r in e&&e.ownerSVGElement===void 0,i=E(t);return{o:function(s,d){i.value=s,o=d},d:Ae(function(){var s=i.value.value;o[r]!==s&&(o[r]=s,n?e[r]=s:s?e.setAttribute(r,s):e.removeAttribute(r))})}}B("unmount",function(e,r){if(typeof r.type=="string"){var t=r.__e;if(t){var o=t.U;if(o){t.U=void 0;for(var n in o){var i=o[n];i&&i.d()}}}}else{var s=r.__c;if(s){var d=s.__$u;d&&(s.__$u=void 0,d.d())}}e(r)});B("__h",function(e,r,t,o){(o<3||o===9)&&(r.__$f|=2),e(r,t,o)});N.prototype.shouldComponentUpdate=function(e,r){if(this.__R)return!0;var t=this.__$u,o=t&&t.s!==void 0;for(var n in r)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(o||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(o||4&this.__$f)||3&this.__$f)return!0;for(var i in e)if(i!=="__source"&&e[i]!==this.props[i])return!0;for(var s in this.props)if(!(s in e))return!0;return!1};function C(e){return fe(function(){return E(e)},[])}function te(e){var r=ie(e);return r.current=e,pe.__$f|=4,fe(function(){return xr(function(){return r.current()})},[])}function De(e){return new Promise((r,t)=>{e.oncomplete=e.onsuccess=()=>r(e.result),e.onabort=e.onerror=()=>t(e.error)})}function Nr(e,r){let t;const o=()=>{if(t)return t;const n=indexedDB.open(e);return n.onupgradeneeded=()=>n.result.createObjectStore(r),t=De(n),t.then(i=>{i.onclose=()=>t=void 0},()=>{}),t};return(n,i)=>o().then(s=>i(s.transaction(r,n).objectStore(r)))}let _e;function Cr(){return _e||(_e=Nr("keyval-store","keyval")),_e}function Er(e,r=Cr()){return r("readonly",t=>De(t.get(e)))}function jr(e,r,t=Cr()){return t("readwrite",o=>(o.put(r,e),De(o.transaction)))}var Vr=0;function a(e,r,t,o,n,i){r||(r={});var s,d,u=r;if("ref"in u)for(d in u={},r)d=="ref"?s=r[d]:u[d]=r[d];var c={type:e,props:u,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Vr,__i:-1,__u:0,__source:n,__self:i};if(typeof e=="function"&&(s=e.defaultProps))for(d in s)u[d]===void 0&&(u[d]=s[d]);return m.vnode&&m.vnode(c),c}var Xr=Object.defineProperty,Yr=(e,r)=>{for(var t in r)Xr(e,t,{get:r[t],enumerable:!0})};function Gr(e){return le=new Lr(e),le}function Kr(){if(!le)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return le}var Lr,le;async function qr(e,r){const t=Kr(),o=await t.getProduct(e);if(!o.variants.edges.length)throw new Error("Product has no variants");const i=[{variantId:o.variants.edges[0].node.id,quantity:1}],s=await t.createCheckout(i);if(r&&typeof localStorage<"u"){const d={checkoutId:s.id,bookSlug:r,createdAt:Date.now()};localStorage.setItem(Zr,JSON.stringify(d))}return s.webUrl}function Jr(e){return e.webUrl}var Zr;async function Qr(e,r){const t={bookSlug:e,orderId:r==null?void 0:r.orderId,email:r==null?void 0:r.email,unlockedAt:Date.now()};await jr(`${Y}${e}`,t),typeof localStorage<"u"&&localStorage.setItem(`${Y}${e}`,JSON.stringify(t))}async function et(e){if(typeof localStorage<"u"&&localStorage.getItem(`${Y}${e}`))return!0;try{return!!await Er(`${Y}${e}`)}catch{return!1}}async function rt(e){try{return await Er(`${Y}${e}`)||null}catch{return null}}async function tt(e,r){const t=await rt(e);return!t||!t.orderId?!1:t.orderId===r}var Y,ot={};Yr(ot,{ShopifyClient:()=>Lr,createCheckout:()=>qr,createShopifyClient:()=>Gr,getCheckoutUrl:()=>Jr,isContentUnlocked:()=>et,unlockContent:()=>Qr,verifyPurchase:()=>tt});function nt({children:e,onPageChange:r}){const t=ie(null),o=ie(null),n=C(0),i=C(1);j(()=>{const u=()=>{if(!o.current||!t.current)return;const f=t.current.offsetWidth,l=o.current.scrollWidth,v=Math.ceil(l/f);i.value=Math.max(1,v),n.value>=i.value&&(n.value=i.value-1)};u();const c=new ResizeObserver(u);return t.current&&c.observe(t.current),()=>c.disconnect()},[e]);const s=u=>{const c=Math.max(0,Math.min(u,i.value-1));if(n.value=c,o.current&&t.current){const f=t.current.offsetWidth;o.current.scrollTo({left:c*f,behavior:"smooth"})}r==null||r(c,i.value)};j(()=>{const u=c=>{c.key==="ArrowRight"||c.key===" "?(c.preventDefault(),s(n.value+1)):c.key==="ArrowLeft"&&(c.preventDefault(),s(n.value-1))};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[]),j(()=>{if(!t.current)return;let u=0,c=0;const f=p=>{u=p.touches[0].clientX,c=p.touches[0].clientY},l=p=>{const w=p.changedTouches[0].clientX,$=p.changedTouches[0].clientY,b=u-w,g=c-$;Math.abs(b)>Math.abs(g)&&Math.abs(b)>50&&(b>0?s(n.value+1):s(n.value-1))},v=t.current;return v.addEventListener("touchstart",f,{passive:!0}),v.addEventListener("touchend",l,{passive:!0}),()=>{v.removeEventListener("touchstart",f),v.removeEventListener("touchend",l)}},[]);const d=te(()=>i.value<=1?100:Math.round((n.value+1)/i.value*100));return a("div",{class:"pressy-paginator",ref:t,children:[a("div",{class:"pressy-paginator-content",ref:o,children:a("article",{class:"pressy-prose","data-drop-cap":!0,children:e})}),a("div",{class:"pressy-paginator-controls",children:[a("button",{class:"pressy-page-btn pressy-page-prev",onClick:()=>s(n.value-1),disabled:n.value===0,"aria-label":"Previous page",children:a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),a("div",{class:"pressy-page-info",children:[a("span",{class:"pressy-page-number",children:[n.value+1," / ",i.value]}),a("div",{class:"pressy-progress-bar",children:a("div",{class:"pressy-progress-fill",style:{width:`${d.value}%`}})})]}),a("button",{class:"pressy-page-btn pressy-page-next",onClick:()=>s(n.value+1),disabled:n.value>=i.value-1,"aria-label":"Next page",children:a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})})]}),a("style",{children:`
        .pressy-paginator {
          position: relative;
          height: calc(100vh - 8rem);
          overflow: hidden;
        }

        .pressy-paginator-content {
          height: calc(100% - 3rem);
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;

          /* Hide scrollbar but keep functionality */
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .pressy-paginator-content::-webkit-scrollbar {
          display: none;
        }

        .pressy-paginator-content .pressy-prose {
          column-width: calc(100vw - 3rem);
          column-gap: 3rem;
          column-fill: auto;
          height: 100%;
          padding: 0 1.5rem;
        }

        /* Prevent orphans and widows */
        .pressy-paginator-content .pressy-prose p {
          break-inside: avoid;
          orphans: 3;
          widows: 3;
        }

        .pressy-paginator-content .pressy-prose h1,
        .pressy-paginator-content .pressy-prose h2,
        .pressy-paginator-content .pressy-prose h3 {
          break-after: avoid;
        }

        .pressy-paginator-content .pressy-prose img,
        .pressy-paginator-content .pressy-prose figure {
          break-inside: avoid;
        }

        .pressy-paginator-controls {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 0.75rem 1.5rem;
          background: var(--color-bg);
          border-top: 1px solid var(--color-border);
        }

        .pressy-page-btn {
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

        .pressy-page-btn:hover:not(:disabled) {
          background: var(--color-bg-muted);
          color: var(--color-text);
        }

        .pressy-page-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .pressy-page-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          min-width: 120px;
        }

        .pressy-page-number {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
        }

        .pressy-progress-bar {
          width: 100%;
          height: 3px;
          background: var(--color-bg-muted);
          border-radius: 1.5px;
          overflow: hidden;
        }

        .pressy-progress-fill {
          height: 100%;
          background: var(--color-accent);
          transition: width 0.3s ease;
        }
      `})]})}function it({prev:e,next:r}){return!e&&!r?null:a("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[a("div",{class:"pressy-nav-inner",children:[e?a("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[a("span",{class:"pressy-nav-direction",children:"Previous"}),a("span",{class:"pressy-nav-title",children:e.title})]}):a("div",{class:"pressy-nav-placeholder"}),r?a("a",{href:r.slug,class:"pressy-nav-link pressy-nav-next",children:[a("span",{class:"pressy-nav-direction",children:"Next"}),a("span",{class:"pressy-nav-title",children:r.title})]}):a("div",{class:"pressy-nav-placeholder"})]}),a("style",{children:`
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
      `})]})}function st({items:e,onNavigate:r,activeSlug:t}){const o=n=>{const i=document.getElementById(n);i&&i.scrollIntoView({behavior:"smooth"}),r==null||r()};return a("nav",{class:"pressy-toc","aria-label":"Table of contents",children:[a("h2",{class:"pressy-toc-title",children:"Contents"}),a("ul",{class:"pressy-toc-list",children:e.map(n=>a("li",{class:`pressy-toc-item pressy-toc-level-${n.level}`,"data-active":t===n.slug,children:a("a",{href:`#${n.slug}`,onClick:i=>{i.preventDefault(),o(n.slug)},class:"pressy-toc-link",children:n.text})},n.slug))}),a("style",{children:`
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
      `})]})}function at(){const e=C(!1),r=C({x:0,y:0}),t=C(""),o=ie(null);j(()=>{const d=()=>{const u=window.getSelection();if(!u||u.isCollapsed){e.value=!1;return}const c=u.toString().trim();if(c.length<5){e.value=!1;return}t.value=c;const l=u.getRangeAt(0).getBoundingClientRect();r.value={x:l.left+l.width/2,y:l.top-10},e.value=!0};return document.addEventListener("selectionchange",d),document.addEventListener("mouseup",d),()=>{document.removeEventListener("selectionchange",d),document.removeEventListener("mouseup",d)}},[]);const n=()=>{const d=encodeURIComponent(t.value),u=new URL(window.location.href);return u.hash=`:~:text=${d}`,u.toString()},i=async()=>{const d=n(),u=`"${t.value}"`;if(navigator.share)try{await navigator.share({text:u,url:d}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${u}

${d}`),o.current&&(o.current.classList.add("copied"),setTimeout(()=>{var c;(c=o.current)==null||c.classList.remove("copied")},2e3))}catch(c){console.error("Failed to copy to clipboard:",c)}},s=async()=>{const d=n();try{await navigator.clipboard.writeText(d),o.current&&(o.current.classList.add("copied"),setTimeout(()=>{var u;(u=o.current)==null||u.classList.remove("copied")},2e3))}catch(u){console.error("Failed to copy link:",u)}};return e.value?a("div",{ref:o,class:"pressy-text-share",style:{left:`${r.value.x}px`,top:`${r.value.y}px`},children:[a("button",{class:"pressy-share-btn",onClick:i,"aria-label":"Share selected text",title:"Share quote",children:a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),a("button",{class:"pressy-copy-link-btn",onClick:s,"aria-label":"Copy link to selected text",title:"Copy link",children:a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),a("style",{children:`
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
      `})]}):null}var lt=["light","dark","sepia"];function ct(){const e=C(!1),r=C((typeof localStorage<"u"?localStorage.getItem("pressy-theme"):"light")||"light"),t=i=>{r.value=i,document.documentElement.setAttribute("data-theme",i),localStorage.setItem("pressy-theme",i),e.value=!1},o={light:"☀️",dark:"🌙",sepia:"📜"},n={light:"Light",dark:"Dark",sepia:"Sepia"};return a("div",{class:"pressy-theme-switcher",children:[a("button",{class:"pressy-theme-toggle",onClick:()=>e.value=!e.value,"aria-label":"Change theme","aria-expanded":e.value,children:a("span",{class:"pressy-theme-icon",children:o[r.value]})}),e.value&&a("div",{class:"pressy-theme-menu",role:"menu",children:lt.map(i=>a("button",{class:"pressy-theme-option",onClick:()=>t(i),role:"menuitem","data-active":r.value===i,children:[a("span",{class:"pressy-theme-icon",children:o[i]}),a("span",{class:"pressy-theme-label",children:n[i]})]},i))}),a("style",{children:`
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
      `})]})}function dt(){const e=C(!navigator.onLine),r=C(!1);return j(()=>{const t=()=>{e.value=!1,r.value=!0,setTimeout(()=>{r.value=!1},3e3)},o=()=>{e.value=!0,r.value=!0};return window.addEventListener("online",t),window.addEventListener("offline",o),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",o)}},[]),r.value?a("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?a(A,{children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),a("span",{children:"You're offline"})]}):a(A,{children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),a("span",{children:"Back online"})]}),a("style",{children:`
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
      `})]}):null}function zr({children:e,title:r,bookTitle:t,chapterTitle:o,prevChapter:n,nextChapter:i,toc:s,mode:d="scroll",showDropCap:u=!0}){const c=C(!1),f=C(d);return a("div",{class:"pressy-reader","data-mode":f.value,children:[a("header",{class:"pressy-reader-header",children:[a("div",{class:"pressy-reader-header-left",children:t&&a("a",{href:"../",class:"pressy-book-link",children:t})}),a("div",{class:"pressy-reader-header-center",children:o&&a("span",{class:"pressy-chapter-title",children:o})}),a("div",{class:"pressy-reader-header-right",children:[s&&s.length>0&&a("button",{class:"pressy-toc-toggle",onClick:()=>c.value=!c.value,"aria-label":"Toggle table of contents",children:a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a("path",{d:"M3 4h14v2H3V4zm0 5h14v2H3V9zm0 5h14v2H3v-2z"})})}),a(ct,{}),a("button",{class:"pressy-mode-toggle",onClick:()=>{f.value=f.value==="scroll"?"paginated":"scroll"},"aria-label":`Switch to ${f.value==="scroll"?"paginated":"scroll"} mode`,children:f.value==="scroll"?a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a("path",{d:"M2 3h7v14H2V3zm9 0h7v14h-7V3z"})}):a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a("path",{d:"M3 3h14v14H3V3z"})})})]})]}),c.value&&s&&a("aside",{class:"pressy-toc-sidebar",children:a(st,{items:s,onNavigate:()=>c.value=!1})}),a("main",{class:"pressy-reader-main",children:f.value==="paginated"?a(nt,{children:e}):a("article",{class:`pressy-prose ${u?"":"no-drop-cap"}`,"data-drop-cap":u,children:e})}),a(at,{}),a(it,{prev:n,next:i}),a(dt,{}),a("style",{children:`
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

        .pressy-toc-toggle,
        .pressy-mode-toggle {
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

        .pressy-toc-toggle:hover,
        .pressy-mode-toggle:hover {
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

        .pressy-reader[data-mode="scroll"] .pressy-reader-main {
          overflow-y: auto;
        }

        .pressy-reader[data-mode="paginated"] .pressy-reader-main {
          overflow: hidden;
        }
      `})]})}function ut({bookSlug:e,chapterUrls:r,cachedBooks:t,cacheProgress:o,onDownload:n,onRemove:i}){const s=te(()=>t.value.has(e)),d=te(()=>{var c;return((c=o.value)==null?void 0:c.bookSlug)===e}),u=te(()=>{const c=o.value;return!c||c.bookSlug!==e?null:Math.round(c.current/c.total*100)});return s.value?a("div",{class:"pressy-download-book",children:[a("div",{class:"pressy-download-status",children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),a("span",{children:"Available offline"})]}),a("button",{class:"pressy-download-remove",onClick:()=>i(e),"aria-label":"Remove offline copy",children:"Remove"}),a("style",{children:me})]}):d.value?a("div",{class:"pressy-download-book",children:[a("div",{class:"pressy-download-progress",children:[a("div",{class:"pressy-download-bar",children:a("div",{class:"pressy-download-bar-fill",style:{width:`${u.value||0}%`}})}),a("span",{class:"pressy-download-percent",children:[u.value||0,"%"]})]}),a("style",{children:me})]}):a("div",{class:"pressy-download-book",children:[a("button",{class:"pressy-download-btn",onClick:()=>n(e,r),"aria-label":"Download for offline reading",children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),a("span",{children:"Download for offline"})]}),a("style",{children:me})]})}var me=`
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
`;function ft({id:e,children:r}){const t=C(!1);return a(A,{children:[a("button",{class:"pressy-footnote-ref",onClick:()=>t.value=!t.value,"aria-describedby":`footnote-${e}`,"aria-expanded":t.value,children:e}),t.value&&a("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[r,a("button",{class:"pressy-footnote-close",onClick:()=>t.value=!1,"aria-label":"Close footnote",children:"×"})]}),a("style",{children:`
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
      `})]})}function pt({children:e,title:r}){return a("aside",{class:"pressy-aside",children:[r&&a("strong",{class:"pressy-aside-title",children:r}),a("div",{class:"pressy-aside-content",children:e}),a("style",{children:`
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
      `})]})}function qe({src:e,alt:r,caption:t,wide:o,children:n}){return a("figure",{class:`pressy-figure ${o?"pressy-figure-wide":""}`,children:[a("img",{src:e,alt:r||t||"",loading:"lazy",decoding:"async"}),(t||n)&&a("figcaption",{class:"pressy-figure-caption",children:t||n}),a("style",{children:`
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
      `})]})}var ht={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},vt={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function _t({type:e="note",title:r,children:t}){return a("div",{class:`pressy-callout pressy-callout-${e}`,children:[a("div",{class:"pressy-callout-header",children:[a("span",{class:"pressy-callout-icon",children:ht[e]}),a("strong",{class:"pressy-callout-title",children:r||vt[e]})]}),a("div",{class:"pressy-callout-content",children:t}),a("style",{children:`
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
      `})]})}var mt={Footnote:ft,Aside:pt,Figure:qe,Callout:_t,SceneBreak:Je,img:qe,hr:Je},gt={};function Tr(){return{...mt,...gt}}var ge=E("online"),ce=E(null),P=E(new Set),ye=E(!1);typeof window<"u"&&(ge.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{ge.value="online"}),window.addEventListener("offline",()=>{ge.value="offline"}));async function yt(){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;try{const e=await navigator.serviceWorker.register("/sw.js",{scope:"/"});return navigator.serviceWorker.addEventListener("message",bt),navigator.serviceWorker.controller?ye.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{ye.value=!0}),e.addEventListener("updatefound",()=>{const r=e.installing;r&&r.addEventListener("statechange",()=>{r.state==="activated"&&(ye.value=!0)})}),e}catch(e){return console.error("Service worker registration failed:",e),null}}function bt(e){const{type:r}=e.data;if(r==="CACHE_PROGRESS"){const{bookSlug:t,current:o,total:n}=e.data;ce.value={bookSlug:t,current:o,total:n}}if(r==="CACHE_COMPLETE"){const{bookSlug:t}=e.data;ce.value=null;const o=new Set(P.value);o.add(t),P.value=o}if(r==="CACHE_STATUS"){const{cached:t}=e.data,o=new Set;for(const n of t){const i=n.match(/\/books\/([^/]+)/);i&&o.add(i[1])}P.value=o}if(r==="CACHE_CLEARED"){const{bookSlug:t}=e.data,o=new Set(P.value);o.delete(t),P.value=o}}async function wt(e,r){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const t=r.map(o=>o.startsWith("http")?o:`${window.location.origin}${o}`);return ce.value={bookSlug:e,current:0,total:t.length},navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:t}),!0}async function kt(e){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),t=await r.keys();for(const n of t)n.url.includes(`/books/${e}`)&&await r.delete(n);const o=new Set(P.value);return o.delete(e),P.value=o,!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var Ze=E("/"),xt=E("light"),Oe=E("scroll"),be=E(0),Qe=E(!navigator.onLine),St="pressy",$t=1,er="reading-progress",rr="unlocks",Q=null;async function Ct(){return Q||new Promise((e,r)=>{const t=indexedDB.open(St,$t);t.onerror=()=>r(t.error),t.onsuccess=()=>{Q=t.result,e(Q)},t.onupgradeneeded=o=>{const n=o.target.result;n.objectStoreNames.contains(er)||n.createObjectStore(er,{keyPath:"chapterSlug"}),n.objectStoreNames.contains(rr)||n.createObjectStore(rr,{keyPath:"bookSlug"})}})}function tr(e){xt.value=e,document.documentElement.setAttribute("data-theme",e),localStorage.setItem("pressy-theme",e)}function Et(){const e=localStorage.getItem("pressy-theme");e?tr(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&tr("dark")}function Lt(){const e=localStorage.getItem("pressy-pagination");e&&(Oe.value=e)}function zt(){document.addEventListener("keydown",e=>{Oe.value==="paginated"&&(e.key==="ArrowRight"||e.key===" "?(e.preventDefault(),be.value++):e.key==="ArrowLeft"&&(e.preventDefault(),be.value>0&&be.value--))})}function Tt(){window.addEventListener("online",()=>{Qe.value=!1}),window.addEventListener("offline",()=>{Qe.value=!0})}function we(e){var t,o;const r=((t=e.books[0])==null?void 0:t.metadata.title)||"Library";return h("div",{class:"pressy-home"},h("header",{class:"pressy-home-header"},h("h1",null,r),((o=e.books[0])==null?void 0:o.metadata.description)&&h("p",{class:"pressy-home-desc"},e.books[0].metadata.description)),e.books.length>0&&h("section",{class:"pressy-home-section"},h("h2",null,"Chapters"),h("nav",{class:"pressy-chapter-list"},...e.books.flatMap(n=>n.chapters.map(i=>h("a",{href:`${G}/books/${n.slug}/${i.slug}`,class:"pressy-chapter-link"},h("span",{class:"pressy-chapter-order"},`${i.order}.`),h("span",null,i.title)))))),e.articles.length>0&&h("section",{class:"pressy-home-section"},h("h2",null,"Articles"),h("nav",{class:"pressy-chapter-list"},...e.articles.map(n=>h("a",{href:`${G}/articles/${n.slug}`,class:"pressy-chapter-link"},n.metadata.title)))),h("style",null,Pr))}function Pt(e){const r=e.chapters.map(t=>`/books/${e.slug}/${t.slug}`);return h("div",{class:"pressy-home"},h("header",{class:"pressy-home-header"},h("h1",null,e.metadata.title),h("p",{class:"pressy-home-author"},`by ${e.metadata.author}`),e.metadata.description&&h("p",{class:"pressy-home-desc"},e.metadata.description)),h(ut,{bookSlug:e.slug,chapterUrls:r,cachedBooks:P,cacheProgress:ce,onDownload:wt,onRemove:kt}),h("section",{class:"pressy-home-section"},h("h2",null,"Chapters"),h("nav",{class:"pressy-chapter-list"},...e.chapters.map(t=>h("a",{href:`${G}/books/${e.slug}/${t.slug}`,class:"pressy-chapter-link"},h("span",{class:"pressy-chapter-order"},`${t.order}.`),h("span",null,t.title))))),h("style",null,Pr))}function Mt(e,r,t){const o=r.split("/"),n=o[2],i=o[3],s=e.books.find(v=>v.slug===n),d=s?s.chapters.findIndex(v=>v.slug===i):-1,u=s==null?void 0:s.chapters[d],c=v=>`${G}/books/${n}/${v.slug}`,f=s&&d>0?{slug:c(s.chapters[d-1]),title:s.chapters[d-1].title}:void 0,l=s&&d>=0&&d<s.chapters.length-1?{slug:c(s.chapters[d+1]),title:s.chapters[d+1].title}:void 0;return h(zr,{title:(u==null?void 0:u.title)||i,bookTitle:s==null?void 0:s.metadata.title,prevChapter:f,nextChapter:l,mode:Oe.value,children:h(t,{components:Tr()})})}function Ht(e,r,t){const o=r.split("/")[2],n=e.articles.find(i=>i.slug===o);return h(zr,{title:(n==null?void 0:n.metadata.title)||o,mode:"scroll",children:h(t,{components:Tr()})})}var Pr=`
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
`;function At(e){const r=window.location.pathname,t=r.endsWith("/")?r.slice(0,-1):r,o=e.endsWith("/")?e.slice(0,-1):e;if(o===""||o==="/")return t.replace(/\/index\.html$/,"")||"";const n=t.indexOf(o);return n>0?t.slice(0,n):""}var G="";function Dt(e,r){G=At(e.route),Ze.value=e.route,Et(),Lt(),zt(),Tt(),Ct(),yt(),window.addEventListener("popstate",()=>{Ze.value=window.location.pathname}),document.addEventListener("click",o=>{const n=o.target.closest("a");if(!n)return;const i=n.getAttribute("href");if(i&&!(i.startsWith("http")||i.startsWith("#"))&&i.startsWith(e.route+"#")){o.preventDefault();const s=i.slice(i.indexOf("#")),d=document.querySelector(s);d&&d.scrollIntoView({behavior:"smooth"});return}});let t;switch(e.routeType){case"home":t=we(e.manifest);break;case"book":{const o=e.route.split("/")[2],n=e.manifest.books.find(i=>i.slug===o);t=n?Pt(n):h("div",null,"Book not found");break}case"chapter":t=r?Mt(e.manifest,e.route,r):h("div",null,"Loading...");break;case"article":t=r?Ht(e.manifest,e.route,r):h("div",null,"Loading...");break;case"books":t=we(e.manifest);break;case"articles":t=we(e.manifest);break;default:t=h("div",null,"Page not found")}Ur(t,document.getElementById("app"))}export{Dt as h,A as k,a as u};
