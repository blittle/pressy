var ie,m,Ke,Je,P,Pe,Ze,Qe,et,ke,_e,ve,B={},tt=[],St=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ae=Array.isArray;function z(t,e){for(var r in e)t[r]=e[r];return t}function we(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function _(t,e,r){var o,s,n,i={};for(n in e)n=="key"?o=e[n]:n=="ref"?s=e[n]:i[n]=e[n];if(arguments.length>2&&(i.children=arguments.length>3?ie.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)i[n]===void 0&&(i[n]=t.defaultProps[n]);return J(t,i,o,s,null)}function J(t,e,r,o,s){var n={type:t,props:e,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Ke,__i:-1,__u:0};return s==null&&m.vnode!=null&&m.vnode(n),n}function V(t){return t.children}function R(t,e){this.props=t,this.context=e}function I(t,e){if(e==null)return t.__?I(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?I(t):null}function rt(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return rt(t)}}function De(t){(!t.__d&&(t.__d=!0)&&P.push(t)&&!ee.__r++||Pe!=m.debounceRendering)&&((Pe=m.debounceRendering)||Ze)(ee)}function ee(){for(var t,e,r,o,s,n,i,c=1;P.length;)P.length>c&&P.sort(Qe),t=P.shift(),c=P.length,t.__d&&(r=void 0,o=void 0,s=(o=(e=t).__v).__e,n=[],i=[],e.__P&&((r=z({},o)).__v=o.__v+1,m.vnode&&m.vnode(r),xe(e.__P,r,o,e.__n,e.__P.namespaceURI,32&o.__u?[s]:null,n,s??I(o),!!(32&o.__u),i),r.__v=o.__v,r.__.__k[r.__i]=r,st(n,r,i),o.__e=o.__=null,r.__e!=s&&rt(r)));ee.__r=0}function ot(t,e,r,o,s,n,i,c,d,l,p){var a,h,f,k,S,b,y,g=o&&o.__k||tt,T=e.length;for(d=Ct(r,e,g,d,T),a=0;a<T;a++)(f=r.__k[a])!=null&&(h=f.__i==-1?B:g[f.__i]||B,f.__i=a,b=xe(t,f,h,s,n,i,c,d,l,p),k=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&$e(h.ref,null,f),p.push(f.ref,f.__c||k,f)),S==null&&k!=null&&(S=k),(y=!!(4&f.__u))||h.__k===f.__k?d=nt(f,d,t,y):typeof f.type=="function"&&b!==void 0?d=b:k&&(d=k.nextSibling),f.__u&=-7);return r.__e=S,d}function Ct(t,e,r,o,s){var n,i,c,d,l,p=r.length,a=p,h=0;for(t.__k=new Array(s),n=0;n<s;n++)(i=e[n])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=t.__k[n]=J(null,i,null,null,null):ae(i)?i=t.__k[n]=J(V,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=t.__k[n]=J(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):t.__k[n]=i,d=n+h,i.__=t,i.__b=t.__b+1,c=null,(l=i.__i=Et(i,r,d,a))!=-1&&(a--,(c=r[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(s>p?h--:s<p&&h++),typeof i.type!="function"&&(i.__u|=4)):l!=d&&(l==d-1?h--:l==d+1?h++:(l>d?h--:h++,i.__u|=4))):t.__k[n]=null;if(a)for(n=0;n<p;n++)(c=r[n])!=null&&!(2&c.__u)&&(c.__e==o&&(o=I(c)),at(c,c));return o}function nt(t,e,r,o){var s,n;if(typeof t.type=="function"){for(s=t.__k,n=0;s&&n<s.length;n++)s[n]&&(s[n].__=t,e=nt(s[n],e,r,o));return e}t.__e!=e&&(o&&(e&&t.type&&!e.parentNode&&(e=I(t)),r.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Et(t,e,r,o){var s,n,i,c=t.key,d=t.type,l=e[r],p=l!=null&&(2&l.__u)==0;if(l===null&&c==null||p&&c==l.key&&d==l.type)return r;if(o>(p?1:0)){for(s=r-1,n=r+1;s>=0||n<e.length;)if((l=e[i=s>=0?s--:n++])!=null&&!(2&l.__u)&&c==l.key&&d==l.type)return i}return-1}function He(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||St.test(e)?r:r+"px"}function Y(t,e,r,o,s){var n,i;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)r&&e in r||He(t.style,e,"");if(r)for(e in r)o&&r[e]==o[e]||He(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(et,"$1")),i=e.toLowerCase(),e=i in t||e=="onFocusOut"||e=="onFocusIn"?i.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=r,r?o?r.u=o.u:(r.u=ke,t.addEventListener(e,n?ve:_e,n)):t.removeEventListener(e,n?ve:_e,n);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function Me(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e.t==null)e.t=ke++;else if(e.t<r.u)return;return r(m.event?m.event(e):e)}}}function xe(t,e,r,o,s,n,i,c,d,l){var p,a,h,f,k,S,b,y,g,T,L,X,F,Le,G,N,ue,E=e.type;if(e.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),n=[c=e.__e=r.__e]),(p=m.__b)&&p(e);e:if(typeof E=="function")try{if(y=e.props,g="prototype"in E&&E.prototype.render,T=(p=E.contextType)&&o[p.__c],L=p?T?T.props.value:p.__:o,r.__c?b=(a=e.__c=r.__c).__=a.__E:(g?e.__c=a=new E(y,L):(e.__c=a=new R(y,L),a.constructor=E,a.render=Tt),T&&T.sub(a),a.state||(a.state={}),a.__n=o,h=a.__d=!0,a.__h=[],a._sb=[]),g&&a.__s==null&&(a.__s=a.state),g&&E.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=z({},a.__s)),z(a.__s,E.getDerivedStateFromProps(y,a.__s))),f=a.props,k=a.state,a.__v=e,h)g&&E.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),g&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(g&&E.getDerivedStateFromProps==null&&y!==f&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(y,L),e.__v==r.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(y,a.__s,L)===!1){for(e.__v!=r.__v&&(a.props=y,a.state=a.__s,a.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(M){M&&(M.__=e)}),X=0;X<a._sb.length;X++)a.__h.push(a._sb[X]);a._sb=[],a.__h.length&&i.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(y,a.__s,L),g&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(f,k,S)})}if(a.context=L,a.props=y,a.__P=t,a.__e=!1,F=m.__r,Le=0,g){for(a.state=a.__s,a.__d=!1,F&&F(e),p=a.render(a.props,a.state,a.context),G=0;G<a._sb.length;G++)a.__h.push(a._sb[G]);a._sb=[]}else do a.__d=!1,F&&F(e),p=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++Le<25);a.state=a.__s,a.getChildContext!=null&&(o=z(z({},o),a.getChildContext())),g&&!h&&a.getSnapshotBeforeUpdate!=null&&(S=a.getSnapshotBeforeUpdate(f,k)),N=p,p!=null&&p.type===V&&p.key==null&&(N=it(p.props.children)),c=ot(t,ae(N)?N:[N],e,r,o,s,n,i,c,d,l),a.base=e.__e,e.__u&=-161,a.__h.length&&i.push(a),b&&(a.__E=a.__=null)}catch(M){if(e.__v=null,d||n!=null)if(M.then){for(e.__u|=d?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;n[n.indexOf(c)]=null,e.__e=c}else{for(ue=n.length;ue--;)we(n[ue]);me(e)}else e.__e=r.__e,e.__k=r.__k,M.then||me(e);m.__e(M,e,r)}else n==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):c=e.__e=zt(r.__e,e,r,o,s,n,i,d,l);return(p=m.diffed)&&p(e),128&e.__u?void 0:c}function me(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(me)}function st(t,e,r){for(var o=0;o<r.length;o++)$e(r[o],r[++o],r[++o]);m.__c&&m.__c(e,t),t.some(function(s){try{t=s.__h,s.__h=[],t.some(function(n){n.call(s)})}catch(n){m.__e(n,s.__v)}})}function it(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:ae(t)?t.map(it):z({},t)}function zt(t,e,r,o,s,n,i,c,d){var l,p,a,h,f,k,S,b=r.props||B,y=e.props,g=e.type;if(g=="svg"?s="http://www.w3.org/2000/svg":g=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),n!=null){for(l=0;l<n.length;l++)if((f=n[l])&&"setAttribute"in f==!!g&&(g?f.localName==g:f.nodeType==3)){t=f,n[l]=null;break}}if(t==null){if(g==null)return document.createTextNode(y);t=document.createElementNS(s,g,y.is&&y),c&&(m.__m&&m.__m(e,n),c=!1),n=null}if(g==null)b===y||c&&t.data==y||(t.data=y);else{if(n=n&&ie.call(t.childNodes),!c&&n!=null)for(b={},l=0;l<t.attributes.length;l++)b[(f=t.attributes[l]).name]=f.value;for(l in b)if(f=b[l],l!="children"){if(l=="dangerouslySetInnerHTML")a=f;else if(!(l in y)){if(l=="value"&&"defaultValue"in y||l=="checked"&&"defaultChecked"in y)continue;Y(t,l,null,f,s)}}for(l in y)f=y[l],l=="children"?h=f:l=="dangerouslySetInnerHTML"?p=f:l=="value"?k=f:l=="checked"?S=f:c&&typeof f!="function"||b[l]===f||Y(t,l,f,b[l],s);if(p)c||a&&(p.__html==a.__html||p.__html==t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(a&&(t.innerHTML=""),ot(e.type=="template"?t.content:t,ae(h)?h:[h],e,r,o,g=="foreignObject"?"http://www.w3.org/1999/xhtml":s,n,i,n?n[0]:r.__k&&I(r,0),c,d),n!=null)for(l=n.length;l--;)we(n[l]);c||(l="value",g=="progress"&&k==null?t.removeAttribute("value"):k!=null&&(k!==t[l]||g=="progress"&&!k||g=="option"&&k!=b[l])&&Y(t,l,k,b[l],s),l="checked",S!=null&&S!=t[l]&&Y(t,l,S,b[l],s))}return t}function $e(t,e,r){try{if(typeof t=="function"){var o=typeof t.__u=="function";o&&t.__u(),o&&e==null||(t.__u=t(e))}else t.current=e}catch(s){m.__e(s,r)}}function at(t,e,r){var o,s;if(m.unmount&&m.unmount(t),(o=t.ref)&&(o.current&&o.current!=t.__e||$e(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){m.__e(n,e)}o.base=o.__P=null}if(o=t.__k)for(s=0;s<o.length;s++)o[s]&&at(o[s],e,r||typeof t.type!="function");r||we(t.__e),t.__c=t.__=t.__e=void 0}function Tt(t,e,r){return this.constructor(t,r)}function Lt(t,e,r){var o,s,n,i;e==document&&(e=document.documentElement),m.__&&m.__(t,e),s=(o=!1)?null:e.__k,n=[],i=[],xe(e,t=e.__k=_(V,null,[t]),s||B,B,e.namespaceURI,s?null:e.firstChild?ie.call(e.childNodes):null,n,s?s.__e:e.firstChild,o,i),st(n,t,i)}ie=tt.slice,m={__e:function(t,e,r,o){for(var s,n,i;e=e.__;)if((s=e.__c)&&!s.__)try{if((n=s.constructor)&&n.getDerivedStateFromError!=null&&(s.setState(n.getDerivedStateFromError(t)),i=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,o||{}),i=s.__d),i)return s.__E=s}catch(c){t=c}throw t}},Ke=0,Je=function(t){return t!=null&&t.constructor===void 0},R.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=z({},this.state),typeof t=="function"&&(t=t(z({},r),this.props)),t&&z(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),De(this))},R.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),De(this))},R.prototype.render=V,P=[],Ze=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Qe=function(t,e){return t.__v.__b-e.__v.__b},ee.__r=0,et=/(PointerCapture)$|Capture$/i,ke=0,_e=Me(!1),ve=Me(!0);var te,$,de,Ue,ye=0,lt=[],w=m,Ie=w.__b,Ae=w.__r,Oe=w.diffed,Fe=w.__c,Ne=w.unmount,Re=w.__;function ct(t,e){w.__h&&w.__h($,t,ye||e),ye=0;var r=$.__H||($.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function Z(t,e){var r=ct(te++,3);!w.__s&&ut(r.__H,e)&&(r.__=t,r.u=e,$.__H.__h.push(r))}function re(t){return ye=5,le(function(){return{current:t}},[])}function le(t,e){var r=ct(te++,7);return ut(r.__H,e)&&(r.__=t(),r.__H=e,r.__h=t),r.__}function Pt(){for(var t;t=lt.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Q),t.__H.__h.forEach(ge),t.__H.__h=[]}catch(e){t.__H.__h=[],w.__e(e,t.__v)}}w.__b=function(t){$=null,Ie&&Ie(t)},w.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Re&&Re(t,e)},w.__r=function(t){Ae&&Ae(t),te=0;var e=($=t.__c).__H;e&&(de===$?(e.__h=[],$.__h=[],e.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.forEach(Q),e.__h.forEach(ge),e.__h=[],te=0)),de=$},w.diffed=function(t){Oe&&Oe(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(lt.push(e)!==1&&Ue===w.requestAnimationFrame||((Ue=w.requestAnimationFrame)||Dt)(Pt)),e.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),de=$=null},w.__c=function(t,e){e.some(function(r){try{r.__h.forEach(Q),r.__h=r.__h.filter(function(o){return!o.__||ge(o)})}catch(o){e.some(function(s){s.__h&&(s.__h=[])}),e=[],w.__e(o,r.__v)}}),Fe&&Fe(t,e)},w.unmount=function(t){Ne&&Ne(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(o){try{Q(o)}catch(s){e=s}}),r.__H=void 0,e&&w.__e(e,r.__v))};var je=typeof requestAnimationFrame=="function";function Dt(t){var e,r=function(){clearTimeout(o),je&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(r,35);je&&(e=requestAnimationFrame(r))}function Q(t){var e=$,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),$=e}function ge(t){var e=$;t.__c=t.__(),$=e}function ut(t,e){return!t||t.length!==e.length||e.some(function(r,o){return r!==t[o]})}var Ht=Symbol.for("preact-signals");function Se(){if(U>1)U--;else{for(var t,e=!1;j!==void 0;){var r=j;for(j=void 0,be++;r!==void 0;){var o=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&ft(r))try{r.c()}catch(s){e||(t=s,e=!0)}r=o}}if(be=0,U--,e)throw t}}var v=void 0;function dt(t){var e=v;v=void 0;try{return t()}finally{v=e}}var j=void 0,U=0,be=0,oe=0;function pt(t){if(v!==void 0){var e=t.n;if(e===void 0||e.t!==v)return e={i:0,S:t,p:v.s,n:void 0,t:v,e:void 0,x:void 0,r:e},v.s!==void 0&&(v.s.n=e),v.s=e,t.n=e,32&v.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=v.s,e.n=void 0,v.s.n=e,v.s=e),e}}function x(t,e){this.v=t,this.i=0,this.n=void 0,this.t=void 0,this.W=e==null?void 0:e.watched,this.Z=e==null?void 0:e.unwatched,this.name=e==null?void 0:e.name}x.prototype.brand=Ht;x.prototype.h=function(){return!0};x.prototype.S=function(t){var e=this,r=this.t;r!==t&&t.e===void 0&&(t.x=r,this.t=t,r!==void 0?r.e=t:dt(function(){var o;(o=e.W)==null||o.call(e)}))};x.prototype.U=function(t){var e=this;if(this.t!==void 0){var r=t.e,o=t.x;r!==void 0&&(r.x=o,t.e=void 0),o!==void 0&&(o.e=r,t.x=void 0),t===this.t&&(this.t=o,o===void 0&&dt(function(){var s;(s=e.Z)==null||s.call(e)}))}};x.prototype.subscribe=function(t){var e=this;return Ee(function(){var r=e.value,o=v;v=void 0;try{t(r)}finally{v=o}},{name:"sub"})};x.prototype.valueOf=function(){return this.value};x.prototype.toString=function(){return this.value+""};x.prototype.toJSON=function(){return this.value};x.prototype.peek=function(){var t=v;v=void 0;try{return this.value}finally{v=t}};Object.defineProperty(x.prototype,"value",{get:function(){var t=pt(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(be>100)throw new Error("Cycle detected");this.v=t,this.i++,oe++,U++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Se()}}}});function D(t,e){return new x(t,e)}function ft(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function ht(t){for(var e=t.s;e!==void 0;e=e.n){var r=e.S.n;if(r!==void 0&&(e.r=r),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function _t(t){for(var e=t.s,r=void 0;e!==void 0;){var o=e.p;e.i===-1?(e.S.U(e),o!==void 0&&(o.n=e.n),e.n!==void 0&&(e.n.p=o)):r=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=o}t.s=r}function H(t,e){x.call(this,void 0),this.x=t,this.s=void 0,this.g=oe-1,this.f=4,this.W=e==null?void 0:e.watched,this.Z=e==null?void 0:e.unwatched,this.name=e==null?void 0:e.name}H.prototype=new x;H.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===oe))return!0;if(this.g=oe,this.f|=1,this.i>0&&!ft(this))return this.f&=-2,!0;var t=v;try{ht(this),v=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return v=t,_t(this),this.f&=-2,!0};H.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}x.prototype.S.call(this,t)};H.prototype.U=function(t){if(this.t!==void 0&&(x.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};H.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(H.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=pt(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function vt(t,e){return new H(t,e)}function mt(t){var e=t.u;if(t.u=void 0,typeof e=="function"){U++;var r=v;v=void 0;try{e()}catch(o){throw t.f&=-2,t.f|=8,Ce(t),o}finally{v=r,Se()}}}function Ce(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,mt(t)}function Mt(t){if(v!==this)throw new Error("Out-of-order effect");_t(this),v=t,this.f&=-2,8&this.f&&Ce(this),Se()}function A(t,e){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=e==null?void 0:e.name}A.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};A.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,mt(this),ht(this),U++;var t=v;return v=this,Mt.bind(this,t)};A.prototype.N=function(){2&this.f||(this.f|=2,this.o=j,j=this)};A.prototype.d=function(){this.f|=8,1&this.f||Ce(this)};A.prototype.dispose=function(){this.d()};function Ee(t,e){var r=new A(t,e);try{r.c()}catch(s){throw r.d(),s}var o=r.d.bind(r);return o[Symbol.dispose]=o,o}var ce,q;function O(t,e){m[t]=e.bind(null,m[t]||function(){})}function ne(t){if(q){var e=q;q=void 0,e()}q=t&&t.S()}function yt(t){var e=this,r=t.data,o=C(r);o.value=r;var s=le(function(){for(var n=e.__v;n=n.__;)if(n.__c){n.__c.__$f|=4;break}return e.__$u.c=function(){var i,c=e.__$u.S(),d=s.value;c(),Je(d)||((i=e.base)==null?void 0:i.nodeType)!==3?(e.__$f|=1,e.setState({})):e.base.data=d},vt(function(){var i=o.value.value;return i===0?0:i===!0?"":i||""})},[]);return s.value}yt.displayName="_st";Object.defineProperties(x.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:yt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});O("__b",function(t,e){if(typeof e.type=="string"){var r,o=e.props;for(var s in o)if(s!=="children"){var n=o[s];n instanceof x&&(r||(e.__np=r={}),r[s]=n,o[s]=n.peek())}}t(e)});O("__r",function(t,e){t(e),ne();var r,o=e.__c;o&&(o.__$f&=-2,(r=o.__$u)===void 0&&(o.__$u=r=function(s){var n;return Ee(function(){n=this}),n.c=function(){o.__$f|=1,o.setState({})},n}())),ce=o,ne(r)});O("__e",function(t,e,r,o){ne(),ce=void 0,t(e,r,o)});O("diffed",function(t,e){ne(),ce=void 0;var r;if(typeof e.type=="string"&&(r=e.__e)){var o=e.__np,s=e.props;if(o){var n=r.U;if(n)for(var i in n){var c=n[i];c!==void 0&&!(i in o)&&(c.d(),n[i]=void 0)}else r.U=n={};for(var d in o){var l=n[d],p=o[d];l===void 0?(l=Ut(r,d,p,s),n[d]=l):l.o(p,s)}}}t(e)});function Ut(t,e,r,o){var s=e in t&&t.ownerSVGElement===void 0,n=D(r);return{o:function(i,c){n.value=i,o=c},d:Ee(function(){var i=n.value.value;o[e]!==i&&(o[e]=i,s?t[e]=i:i?t.setAttribute(e,i):t.removeAttribute(e))})}}O("unmount",function(t,e){if(typeof e.type=="string"){var r=e.__e;if(r){var o=r.U;if(o){r.U=void 0;for(var s in o){var n=o[s];n&&n.d()}}}}else{var i=e.__c;if(i){var c=i.__$u;c&&(i.__$u=void 0,c.d())}}t(e)});O("__h",function(t,e,r,o){(o<3||o===9)&&(e.__$f|=2),t(e,r,o)});R.prototype.shouldComponentUpdate=function(t,e){if(this.__R)return!0;var r=this.__$u,o=r&&r.s!==void 0;for(var s in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(o||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(o||4&this.__$f)||3&this.__$f)return!0;for(var n in t)if(n!=="__source"&&t[n]!==this.props[n])return!0;for(var i in this.props)if(!(i in t))return!0;return!1};function C(t){return le(function(){return D(t)},[])}function It(t){var e=re(t);return e.current=t,ce.__$f|=4,le(function(){return vt(function(){return e.current()})},[])}function ze(t){return new Promise((e,r)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>r(t.error)})}function At(t,e){let r;const o=()=>{if(r)return r;const s=indexedDB.open(t);return s.onupgradeneeded=()=>s.result.createObjectStore(e),r=ze(s),r.then(n=>{n.onclose=()=>r=void 0},()=>{}),r};return(s,n)=>o().then(i=>n(i.transaction(e,s).objectStore(e)))}let pe;function gt(){return pe||(pe=At("keyval-store","keyval")),pe}function bt(t,e=gt()){return e("readonly",r=>ze(r.get(t)))}function Ot(t,e,r=gt()){return r("readwrite",o=>(o.put(e,t),ze(o.transaction)))}var Ft=0;function u(t,e,r,o,s,n){e||(e={});var i,c,d=e;if("ref"in d)for(c in d={},e)c=="ref"?i=e[c]:d[c]=e[c];var l={type:t,props:d,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ft,__i:-1,__u:0,__source:s,__self:n};if(typeof t=="function"&&(i=t.defaultProps))for(c in i)d[c]===void 0&&(d[c]=i[c]);return m.vnode&&m.vnode(l),l}var Nt=Object.defineProperty,Rt=(t,e)=>{for(var r in e)Nt(t,r,{get:e[r],enumerable:!0})};function jt(t){return se=new kt(t),se}function Bt(){if(!se)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return se}var kt,se;async function Wt(t,e){const r=Bt(),o=await r.getProduct(t);if(!o.variants.edges.length)throw new Error("Product has no variants");const n=[{variantId:o.variants.edges[0].node.id,quantity:1}],i=await r.createCheckout(n);if(e&&typeof localStorage<"u"){const c={checkoutId:i.id,bookSlug:e,createdAt:Date.now()};localStorage.setItem(Xt,JSON.stringify(c))}return i.webUrl}function Vt(t){return t.webUrl}var Xt;async function Gt(t,e){const r={bookSlug:t,orderId:e==null?void 0:e.orderId,email:e==null?void 0:e.email,unlockedAt:Date.now()};await Ot(`${W}${t}`,r),typeof localStorage<"u"&&localStorage.setItem(`${W}${t}`,JSON.stringify(r))}async function Yt(t){if(typeof localStorage<"u"&&localStorage.getItem(`${W}${t}`))return!0;try{return!!await bt(`${W}${t}`)}catch{return!1}}async function qt(t){try{return await bt(`${W}${t}`)||null}catch{return null}}async function Kt(t,e){const r=await qt(t);return!r||!r.orderId?!1:r.orderId===e}var W,Jt={};Rt(Jt,{ShopifyClient:()=>kt,createCheckout:()=>Wt,createShopifyClient:()=>jt,getCheckoutUrl:()=>Vt,isContentUnlocked:()=>Yt,unlockContent:()=>Gt,verifyPurchase:()=>Kt});function Zt({children:t,onPageChange:e}){const r=re(null),o=re(null),s=C(0),n=C(1);Z(()=>{const d=()=>{if(!o.current||!r.current)return;const p=r.current.offsetWidth,a=o.current.scrollWidth,h=Math.ceil(a/p);n.value=Math.max(1,h),s.value>=n.value&&(s.value=n.value-1)};d();const l=new ResizeObserver(d);return r.current&&l.observe(r.current),()=>l.disconnect()},[t]);const i=d=>{const l=Math.max(0,Math.min(d,n.value-1));if(s.value=l,o.current&&r.current){const p=r.current.offsetWidth;o.current.scrollTo({left:l*p,behavior:"smooth"})}e==null||e(l,n.value)};Z(()=>{const d=l=>{l.key==="ArrowRight"||l.key===" "?(l.preventDefault(),i(s.value+1)):l.key==="ArrowLeft"&&(l.preventDefault(),i(s.value-1))};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[]),Z(()=>{if(!r.current)return;let d=0,l=0;const p=f=>{d=f.touches[0].clientX,l=f.touches[0].clientY},a=f=>{const k=f.changedTouches[0].clientX,S=f.changedTouches[0].clientY,b=d-k,y=l-S;Math.abs(b)>Math.abs(y)&&Math.abs(b)>50&&(b>0?i(s.value+1):i(s.value-1))},h=r.current;return h.addEventListener("touchstart",p,{passive:!0}),h.addEventListener("touchend",a,{passive:!0}),()=>{h.removeEventListener("touchstart",p),h.removeEventListener("touchend",a)}},[]);const c=It(()=>n.value<=1?100:Math.round((s.value+1)/n.value*100));return u("div",{class:"pressy-paginator",ref:r,children:[u("div",{class:"pressy-paginator-content",ref:o,children:u("article",{class:"pressy-prose","data-drop-cap":!0,children:t})}),u("div",{class:"pressy-paginator-controls",children:[u("button",{class:"pressy-page-btn pressy-page-prev",onClick:()=>i(s.value-1),disabled:s.value===0,"aria-label":"Previous page",children:u("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:u("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),u("div",{class:"pressy-page-info",children:[u("span",{class:"pressy-page-number",children:[s.value+1," / ",n.value]}),u("div",{class:"pressy-progress-bar",children:u("div",{class:"pressy-progress-fill",style:{width:`${c.value}%`}})})]}),u("button",{class:"pressy-page-btn pressy-page-next",onClick:()=>i(s.value+1),disabled:s.value>=n.value-1,"aria-label":"Next page",children:u("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:u("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})})]}),u("style",{children:`
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
      `})]})}function Qt({prev:t,next:e,basePath:r=""}){return!t&&!e?null:u("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[u("div",{class:"pressy-nav-inner",children:[t?u("a",{href:`${r}/${t.slug}`,class:"pressy-nav-link pressy-nav-prev",children:[u("span",{class:"pressy-nav-direction",children:"Previous"}),u("span",{class:"pressy-nav-title",children:t.title})]}):u("div",{class:"pressy-nav-placeholder"}),e?u("a",{href:`${r}/${e.slug}`,class:"pressy-nav-link pressy-nav-next",children:[u("span",{class:"pressy-nav-direction",children:"Next"}),u("span",{class:"pressy-nav-title",children:e.title})]}):u("div",{class:"pressy-nav-placeholder"})]}),u("style",{children:`
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
      `})]})}function er({items:t,onNavigate:e,activeSlug:r}){const o=s=>{const n=document.getElementById(s);n&&n.scrollIntoView({behavior:"smooth"}),e==null||e()};return u("nav",{class:"pressy-toc","aria-label":"Table of contents",children:[u("h2",{class:"pressy-toc-title",children:"Contents"}),u("ul",{class:"pressy-toc-list",children:t.map(s=>u("li",{class:`pressy-toc-item pressy-toc-level-${s.level}`,"data-active":r===s.slug,children:u("a",{href:`#${s.slug}`,onClick:n=>{n.preventDefault(),o(s.slug)},class:"pressy-toc-link",children:s.text})},s.slug))}),u("style",{children:`
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
      `})]})}function tr(){const t=C(!1),e=C({x:0,y:0}),r=C(""),o=re(null);Z(()=>{const c=()=>{const d=window.getSelection();if(!d||d.isCollapsed){t.value=!1;return}const l=d.toString().trim();if(l.length<5){t.value=!1;return}r.value=l;const a=d.getRangeAt(0).getBoundingClientRect();e.value={x:a.left+a.width/2,y:a.top-10},t.value=!0};return document.addEventListener("selectionchange",c),document.addEventListener("mouseup",c),()=>{document.removeEventListener("selectionchange",c),document.removeEventListener("mouseup",c)}},[]);const s=()=>{const c=encodeURIComponent(r.value),d=new URL(window.location.href);return d.hash=`:~:text=${c}`,d.toString()},n=async()=>{const c=s(),d=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:d,url:c}),t.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${d}

${c}`),o.current&&(o.current.classList.add("copied"),setTimeout(()=>{var l;(l=o.current)==null||l.classList.remove("copied")},2e3))}catch(l){console.error("Failed to copy to clipboard:",l)}},i=async()=>{const c=s();try{await navigator.clipboard.writeText(c),o.current&&(o.current.classList.add("copied"),setTimeout(()=>{var d;(d=o.current)==null||d.classList.remove("copied")},2e3))}catch(d){console.error("Failed to copy link:",d)}};return t.value?u("div",{ref:o,class:"pressy-text-share",style:{left:`${e.value.x}px`,top:`${e.value.y}px`},children:[u("button",{class:"pressy-share-btn",onClick:n,"aria-label":"Share selected text",title:"Share quote",children:u("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:u("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),u("button",{class:"pressy-copy-link-btn",onClick:i,"aria-label":"Copy link to selected text",title:"Copy link",children:u("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:u("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),u("style",{children:`
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
      `})]}):null}var rr=["light","dark","sepia"];function or(){const t=C(!1),e=C((typeof localStorage<"u"?localStorage.getItem("pressy-theme"):"light")||"light"),r=n=>{e.value=n,document.documentElement.setAttribute("data-theme",n),localStorage.setItem("pressy-theme",n),t.value=!1},o={light:"☀️",dark:"🌙",sepia:"📜"},s={light:"Light",dark:"Dark",sepia:"Sepia"};return u("div",{class:"pressy-theme-switcher",children:[u("button",{class:"pressy-theme-toggle",onClick:()=>t.value=!t.value,"aria-label":"Change theme","aria-expanded":t.value,children:u("span",{class:"pressy-theme-icon",children:o[e.value]})}),t.value&&u("div",{class:"pressy-theme-menu",role:"menu",children:rr.map(n=>u("button",{class:"pressy-theme-option",onClick:()=>r(n),role:"menuitem","data-active":e.value===n,children:[u("span",{class:"pressy-theme-icon",children:o[n]}),u("span",{class:"pressy-theme-label",children:s[n]})]},n))}),u("style",{children:`
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
      `})]})}function wt({children:t,title:e,bookTitle:r,chapterTitle:o,prevChapter:s,nextChapter:n,toc:i,mode:c="scroll",showDropCap:d=!0}){const l=C(!1),p=C(c);return u("div",{class:"pressy-reader","data-mode":p.value,children:[u("header",{class:"pressy-reader-header",children:[u("div",{class:"pressy-reader-header-left",children:r&&u("a",{href:`/books/${r.toLowerCase().replace(/\s+/g,"-")}`,class:"pressy-book-link",children:r})}),u("div",{class:"pressy-reader-header-center",children:o&&u("span",{class:"pressy-chapter-title",children:o})}),u("div",{class:"pressy-reader-header-right",children:[i&&i.length>0&&u("button",{class:"pressy-toc-toggle",onClick:()=>l.value=!l.value,"aria-label":"Toggle table of contents",children:u("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:u("path",{d:"M3 4h14v2H3V4zm0 5h14v2H3V9zm0 5h14v2H3v-2z"})})}),u(or,{}),u("button",{class:"pressy-mode-toggle",onClick:()=>{p.value=p.value==="scroll"?"paginated":"scroll"},"aria-label":`Switch to ${p.value==="scroll"?"paginated":"scroll"} mode`,children:p.value==="scroll"?u("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:u("path",{d:"M2 3h7v14H2V3zm9 0h7v14h-7V3z"})}):u("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:u("path",{d:"M3 3h14v14H3V3z"})})})]})]}),l.value&&i&&u("aside",{class:"pressy-toc-sidebar",children:u(er,{items:i,onNavigate:()=>l.value=!1})}),u("main",{class:"pressy-reader-main",children:p.value==="paginated"?u(Zt,{children:t}):u("article",{class:`pressy-prose ${d?"":"no-drop-cap"}`,"data-drop-cap":d,children:t})}),u(tr,{}),u(Qt,{prev:s,next:n}),u("style",{children:`
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
      `})]})}function nr({id:t,children:e}){const r=C(!1);return u(V,{children:[u("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${t}`,"aria-expanded":r.value,children:t}),r.value&&u("span",{class:"pressy-footnote-content",id:`footnote-${t}`,role:"tooltip",children:[e,u("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),u("style",{children:`
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
      `})]})}function sr({children:t,title:e}){return u("aside",{class:"pressy-aside",children:[e&&u("strong",{class:"pressy-aside-title",children:e}),u("div",{class:"pressy-aside-content",children:t}),u("style",{children:`
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
      `})]})}function Be({src:t,alt:e,caption:r,wide:o,children:s}){return u("figure",{class:`pressy-figure ${o?"pressy-figure-wide":""}`,children:[u("img",{src:t,alt:e||r||"",loading:"lazy",decoding:"async"}),(r||s)&&u("figcaption",{class:"pressy-figure-caption",children:r||s}),u("style",{children:`
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
      `})]})}var ir={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},ar={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function lr({type:t="note",title:e,children:r}){return u("div",{class:`pressy-callout pressy-callout-${t}`,children:[u("div",{class:"pressy-callout-header",children:[u("span",{class:"pressy-callout-icon",children:ir[t]}),u("strong",{class:"pressy-callout-title",children:e||ar[t]})]}),u("div",{class:"pressy-callout-content",children:r}),u("style",{children:`
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
      `})]})}function We({variant:t="asterisks"}){return u("div",{class:`pressy-scene-break pressy-scene-break-${t}`,role:"separator",children:[t==="asterisks"&&u("span",{children:"* * *"}),t==="ornament"&&u("span",{children:"❧"}),u("style",{children:`
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
      `})]})}var cr={Footnote:nr,Aside:sr,Figure:Be,Callout:lr,SceneBreak:We,img:Be,hr:We},ur={};function xt(){return{...cr,...ur}}var Ve=D("/"),dr=D("light"),Te=D("scroll"),fe=D(0),Xe=D(!navigator.onLine),pr="pressy",fr=1,Ge="reading-progress",Ye="unlocks",K=null;async function hr(){return K||new Promise((t,e)=>{const r=indexedDB.open(pr,fr);r.onerror=()=>e(r.error),r.onsuccess=()=>{K=r.result,t(K)},r.onupgradeneeded=o=>{const s=o.target.result;s.objectStoreNames.contains(Ge)||s.createObjectStore(Ge,{keyPath:"chapterSlug"}),s.objectStoreNames.contains(Ye)||s.createObjectStore(Ye,{keyPath:"bookSlug"})}})}function qe(t){dr.value=t,document.documentElement.setAttribute("data-theme",t),localStorage.setItem("pressy-theme",t)}function _r(){const t=localStorage.getItem("pressy-theme");t?qe(t):window.matchMedia("(prefers-color-scheme: dark)").matches&&qe("dark")}function vr(){const t=localStorage.getItem("pressy-pagination");t&&(Te.value=t)}function mr(){document.addEventListener("keydown",t=>{Te.value==="paginated"&&(t.key==="ArrowRight"||t.key===" "?(t.preventDefault(),fe.value++):t.key==="ArrowLeft"&&(t.preventDefault(),fe.value>0&&fe.value--))})}function yr(){window.addEventListener("online",()=>{Xe.value=!1}),window.addEventListener("offline",()=>{Xe.value=!0})}function he(t){var r,o;const e=((r=t.books[0])==null?void 0:r.metadata.title)||"Library";return _("div",{class:"pressy-home"},_("header",{class:"pressy-home-header"},_("h1",null,e),((o=t.books[0])==null?void 0:o.metadata.description)&&_("p",{class:"pressy-home-desc"},t.books[0].metadata.description)),t.books.length>0&&_("section",{class:"pressy-home-section"},_("h2",null,"Chapters"),_("nav",{class:"pressy-chapter-list"},...t.books.flatMap(s=>s.chapters.map(n=>_("a",{href:`/books/${s.slug}/${n.slug}`,class:"pressy-chapter-link"},_("span",{class:"pressy-chapter-order"},`${n.order}.`),_("span",null,n.title)))))),t.articles.length>0&&_("section",{class:"pressy-home-section"},_("h2",null,"Articles"),_("nav",{class:"pressy-chapter-list"},...t.articles.map(s=>_("a",{href:`/articles/${s.slug}`,class:"pressy-chapter-link"},s.metadata.title)))),_("style",null,$t))}function gr(t){return _("div",{class:"pressy-home"},_("header",{class:"pressy-home-header"},_("h1",null,t.metadata.title),_("p",{class:"pressy-home-author"},`by ${t.metadata.author}`),t.metadata.description&&_("p",{class:"pressy-home-desc"},t.metadata.description)),_("section",{class:"pressy-home-section"},_("h2",null,"Chapters"),_("nav",{class:"pressy-chapter-list"},...t.chapters.map(e=>_("a",{href:`/books/${t.slug}/${e.slug}`,class:"pressy-chapter-link"},_("span",{class:"pressy-chapter-order"},`${e.order}.`),_("span",null,e.title))))),_("style",null,$t))}function br(t,e,r){const o=e.split("/"),s=o[2],n=o[3],i=t.books.find(h=>h.slug===s),c=i?i.chapters.findIndex(h=>h.slug===n):-1,d=i==null?void 0:i.chapters[c],l=h=>`books/${s}/${h.slug}`,p=i&&c>0?{slug:l(i.chapters[c-1]),title:i.chapters[c-1].title}:void 0,a=i&&c>=0&&c<i.chapters.length-1?{slug:l(i.chapters[c+1]),title:i.chapters[c+1].title}:void 0;return _(wt,{title:(d==null?void 0:d.title)||n,bookTitle:i==null?void 0:i.metadata.title,prevChapter:p,nextChapter:a,mode:Te.value,children:_(r,{components:xt()})})}function kr(t,e,r){const o=e.split("/")[2],s=t.articles.find(n=>n.slug===o);return _(wt,{title:(s==null?void 0:s.metadata.title)||o,mode:"scroll",children:_(r,{components:xt()})})}var $t=`
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
`;function wr(t,e){Ve.value=t.route,_r(),vr(),mr(),yr(),hr(),window.addEventListener("popstate",()=>{Ve.value=window.location.pathname}),document.addEventListener("click",o=>{const s=o.target.closest("a");if(!s)return;const n=s.getAttribute("href");if(n&&!(n.startsWith("http")||n.startsWith("#"))&&n.startsWith(t.route+"#")){o.preventDefault();const i=n.slice(n.indexOf("#")),c=document.querySelector(i);c&&c.scrollIntoView({behavior:"smooth"});return}});let r;switch(t.routeType){case"home":r=he(t.manifest);break;case"book":{const o=t.route.split("/")[2],s=t.manifest.books.find(n=>n.slug===o);r=s?gr(s):_("div",null,"Book not found");break}case"chapter":r=e?br(t.manifest,t.route,e):_("div",null,"Loading...");break;case"article":r=e?kr(t.manifest,t.route,e):_("div",null,"Loading...");break;case"books":r=he(t.manifest);break;case"articles":r=he(t.manifest);break;default:r=_("div",null,"Page not found")}Lt(r,document.getElementById("app"))}export{wr as h,V as k,u};
