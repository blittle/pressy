var ae,m,Je,Ze,L,De,Qe,et,tt,we,ve,me,B={},rt=[],Ct=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,le=Array.isArray;function P(t,e){for(var r in e)t[r]=e[r];return t}function xe(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function _(t,e,r){var n,s,o,i={};for(o in e)o=="key"?n=e[o]:o=="ref"?s=e[o]:i[o]=e[o];if(arguments.length>2&&(i.children=arguments.length>3?ae.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)i[o]===void 0&&(i[o]=t.defaultProps[o]);return Z(t,i,n,s,null)}function Z(t,e,r,n,s){var o={type:t,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Je,__i:-1,__u:0};return s==null&&m.vnode!=null&&m.vnode(o),o}function X(t){return t.children}function N(t,e){this.props=t,this.context=e}function I(t,e){if(e==null)return t.__?I(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?I(t):null}function nt(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return nt(t)}}function He(t){(!t.__d&&(t.__d=!0)&&L.push(t)&&!te.__r++||De!=m.debounceRendering)&&((De=m.debounceRendering)||Qe)(te)}function te(){for(var t,e,r,n,s,o,i,c=1;L.length;)L.length>c&&L.sort(et),t=L.shift(),c=L.length,t.__d&&(r=void 0,n=void 0,s=(n=(e=t).__v).__e,o=[],i=[],e.__P&&((r=P({},n)).__v=n.__v+1,m.vnode&&m.vnode(r),$e(e.__P,r,n,e.__n,e.__P.namespaceURI,32&n.__u?[s]:null,o,s??I(n),!!(32&n.__u),i),r.__v=n.__v,r.__.__k[r.__i]=r,it(o,r,i),n.__e=n.__=null,r.__e!=s&&nt(r)));te.__r=0}function ot(t,e,r,n,s,o,i,c,d,l,p){var a,h,f,k,S,b,y,g=n&&n.__k||rt,z=e.length;for(d=Et(r,e,g,d,z),a=0;a<z;a++)(f=r.__k[a])!=null&&(h=f.__i==-1?B:g[f.__i]||B,f.__i=a,b=$e(t,f,h,s,o,i,c,d,l,p),k=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&Se(h.ref,null,f),p.push(f.ref,f.__c||k,f)),S==null&&k!=null&&(S=k),(y=!!(4&f.__u))||h.__k===f.__k?d=st(f,d,t,y):typeof f.type=="function"&&b!==void 0?d=b:k&&(d=k.nextSibling),f.__u&=-7);return r.__e=S,d}function Et(t,e,r,n,s){var o,i,c,d,l,p=r.length,a=p,h=0;for(t.__k=new Array(s),o=0;o<s;o++)(i=e[o])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=t.__k[o]=Z(null,i,null,null,null):le(i)?i=t.__k[o]=Z(X,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=t.__k[o]=Z(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):t.__k[o]=i,d=o+h,i.__=t,i.__b=t.__b+1,c=null,(l=i.__i=Pt(i,r,d,a))!=-1&&(a--,(c=r[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(s>p?h--:s<p&&h++),typeof i.type!="function"&&(i.__u|=4)):l!=d&&(l==d-1?h--:l==d+1?h++:(l>d?h--:h++,i.__u|=4))):t.__k[o]=null;if(a)for(o=0;o<p;o++)(c=r[o])!=null&&!(2&c.__u)&&(c.__e==n&&(n=I(c)),lt(c,c));return n}function st(t,e,r,n){var s,o;if(typeof t.type=="function"){for(s=t.__k,o=0;s&&o<s.length;o++)s[o]&&(s[o].__=t,e=st(s[o],e,r,n));return e}t.__e!=e&&(n&&(e&&t.type&&!e.parentNode&&(e=I(t)),r.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Pt(t,e,r,n){var s,o,i,c=t.key,d=t.type,l=e[r],p=l!=null&&(2&l.__u)==0;if(l===null&&c==null||p&&c==l.key&&d==l.type)return r;if(n>(p?1:0)){for(s=r-1,o=r+1;s>=0||o<e.length;)if((l=e[i=s>=0?s--:o++])!=null&&!(2&l.__u)&&c==l.key&&d==l.type)return i}return-1}function Me(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||Ct.test(e)?r:r+"px"}function q(t,e,r,n,s){var o,i;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)r&&e in r||Me(t.style,e,"");if(r)for(e in r)n&&r[e]==n[e]||Me(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")o=e!=(e=e.replace(tt,"$1")),i=e.toLowerCase(),e=i in t||e=="onFocusOut"||e=="onFocusIn"?i.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=r,r?n?r.u=n.u:(r.u=we,t.addEventListener(e,o?me:ve,o)):t.removeEventListener(e,o?me:ve,o);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function Ue(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e.t==null)e.t=we++;else if(e.t<r.u)return;return r(m.event?m.event(e):e)}}}function $e(t,e,r,n,s,o,i,c,d,l){var p,a,h,f,k,S,b,y,g,z,T,G,R,Le,Y,F,de,E=e.type;if(e.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),o=[c=e.__e=r.__e]),(p=m.__b)&&p(e);e:if(typeof E=="function")try{if(y=e.props,g="prototype"in E&&E.prototype.render,z=(p=E.contextType)&&n[p.__c],T=p?z?z.props.value:p.__:n,r.__c?b=(a=e.__c=r.__c).__=a.__E:(g?e.__c=a=new E(y,T):(e.__c=a=new N(y,T),a.constructor=E,a.render=Tt),z&&z.sub(a),a.state||(a.state={}),a.__n=n,h=a.__d=!0,a.__h=[],a._sb=[]),g&&a.__s==null&&(a.__s=a.state),g&&E.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=P({},a.__s)),P(a.__s,E.getDerivedStateFromProps(y,a.__s))),f=a.props,k=a.state,a.__v=e,h)g&&E.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),g&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(g&&E.getDerivedStateFromProps==null&&y!==f&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(y,T),e.__v==r.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(y,a.__s,T)===!1){for(e.__v!=r.__v&&(a.props=y,a.state=a.__s,a.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(M){M&&(M.__=e)}),G=0;G<a._sb.length;G++)a.__h.push(a._sb[G]);a._sb=[],a.__h.length&&i.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(y,a.__s,T),g&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(f,k,S)})}if(a.context=T,a.props=y,a.__P=t,a.__e=!1,R=m.__r,Le=0,g){for(a.state=a.__s,a.__d=!1,R&&R(e),p=a.render(a.props,a.state,a.context),Y=0;Y<a._sb.length;Y++)a.__h.push(a._sb[Y]);a._sb=[]}else do a.__d=!1,R&&R(e),p=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++Le<25);a.state=a.__s,a.getChildContext!=null&&(n=P(P({},n),a.getChildContext())),g&&!h&&a.getSnapshotBeforeUpdate!=null&&(S=a.getSnapshotBeforeUpdate(f,k)),F=p,p!=null&&p.type===X&&p.key==null&&(F=at(p.props.children)),c=ot(t,le(F)?F:[F],e,r,n,s,o,i,c,d,l),a.base=e.__e,e.__u&=-161,a.__h.length&&i.push(a),b&&(a.__E=a.__=null)}catch(M){if(e.__v=null,d||o!=null)if(M.then){for(e.__u|=d?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,e.__e=c}else{for(de=o.length;de--;)xe(o[de]);ye(e)}else e.__e=r.__e,e.__k=r.__k,M.then||ye(e);m.__e(M,e,r)}else o==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):c=e.__e=zt(r.__e,e,r,n,s,o,i,d,l);return(p=m.diffed)&&p(e),128&e.__u?void 0:c}function ye(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(ye)}function it(t,e,r){for(var n=0;n<r.length;n++)Se(r[n],r[++n],r[++n]);m.__c&&m.__c(e,t),t.some(function(s){try{t=s.__h,s.__h=[],t.some(function(o){o.call(s)})}catch(o){m.__e(o,s.__v)}})}function at(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:le(t)?t.map(at):P({},t)}function zt(t,e,r,n,s,o,i,c,d){var l,p,a,h,f,k,S,b=r.props||B,y=e.props,g=e.type;if(g=="svg"?s="http://www.w3.org/2000/svg":g=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((f=o[l])&&"setAttribute"in f==!!g&&(g?f.localName==g:f.nodeType==3)){t=f,o[l]=null;break}}if(t==null){if(g==null)return document.createTextNode(y);t=document.createElementNS(s,g,y.is&&y),c&&(m.__m&&m.__m(e,o),c=!1),o=null}if(g==null)b===y||c&&t.data==y||(t.data=y);else{if(o=o&&ae.call(t.childNodes),!c&&o!=null)for(b={},l=0;l<t.attributes.length;l++)b[(f=t.attributes[l]).name]=f.value;for(l in b)if(f=b[l],l!="children"){if(l=="dangerouslySetInnerHTML")a=f;else if(!(l in y)){if(l=="value"&&"defaultValue"in y||l=="checked"&&"defaultChecked"in y)continue;q(t,l,null,f,s)}}for(l in y)f=y[l],l=="children"?h=f:l=="dangerouslySetInnerHTML"?p=f:l=="value"?k=f:l=="checked"?S=f:c&&typeof f!="function"||b[l]===f||q(t,l,f,b[l],s);if(p)c||a&&(p.__html==a.__html||p.__html==t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(a&&(t.innerHTML=""),ot(e.type=="template"?t.content:t,le(h)?h:[h],e,r,n,g=="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,i,o?o[0]:r.__k&&I(r,0),c,d),o!=null)for(l=o.length;l--;)xe(o[l]);c||(l="value",g=="progress"&&k==null?t.removeAttribute("value"):k!=null&&(k!==t[l]||g=="progress"&&!k||g=="option"&&k!=b[l])&&q(t,l,k,b[l],s),l="checked",S!=null&&S!=t[l]&&q(t,l,S,b[l],s))}return t}function Se(t,e,r){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(s){m.__e(s,r)}}function lt(t,e,r){var n,s;if(m.unmount&&m.unmount(t),(n=t.ref)&&(n.current&&n.current!=t.__e||Se(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){m.__e(o,e)}n.base=n.__P=null}if(n=t.__k)for(s=0;s<n.length;s++)n[s]&&lt(n[s],e,r||typeof t.type!="function");r||xe(t.__e),t.__c=t.__=t.__e=void 0}function Tt(t,e,r){return this.constructor(t,r)}function Lt(t,e,r){var n,s,o,i;e==document&&(e=document.documentElement),m.__&&m.__(t,e),s=(n=!1)?null:e.__k,o=[],i=[],$e(e,t=e.__k=_(X,null,[t]),s||B,B,e.namespaceURI,s?null:e.firstChild?ae.call(e.childNodes):null,o,s?s.__e:e.firstChild,n,i),it(o,t,i)}ae=rt.slice,m={__e:function(t,e,r,n){for(var s,o,i;e=e.__;)if((s=e.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(t)),i=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,n||{}),i=s.__d),i)return s.__E=s}catch(c){t=c}throw t}},Je=0,Ze=function(t){return t!=null&&t.constructor===void 0},N.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=P({},this.state),typeof t=="function"&&(t=t(P({},r),this.props)),t&&P(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),He(this))},N.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),He(this))},N.prototype.render=X,L=[],Qe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,et=function(t,e){return t.__v.__b-e.__v.__b},te.__r=0,tt=/(PointerCapture)$|Capture$/i,we=0,ve=Ue(!1),me=Ue(!0);var re,$,pe,Ie,ge=0,ct=[],w=m,Ae=w.__b,Oe=w.__r,Re=w.diffed,Fe=w.__c,Ne=w.unmount,je=w.__;function ut(t,e){w.__h&&w.__h($,t,ge||e),ge=0;var r=$.__H||($.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function Q(t,e){var r=ut(re++,3);!w.__s&&dt(r.__H,e)&&(r.__=t,r.u=e,$.__H.__h.push(r))}function ne(t){return ge=5,ce(function(){return{current:t}},[])}function ce(t,e){var r=ut(re++,7);return dt(r.__H,e)&&(r.__=t(),r.__H=e,r.__h=t),r.__}function Dt(){for(var t;t=ct.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ee),t.__H.__h.forEach(be),t.__H.__h=[]}catch(e){t.__H.__h=[],w.__e(e,t.__v)}}w.__b=function(t){$=null,Ae&&Ae(t)},w.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),je&&je(t,e)},w.__r=function(t){Oe&&Oe(t),re=0;var e=($=t.__c).__H;e&&(pe===$?(e.__h=[],$.__h=[],e.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.forEach(ee),e.__h.forEach(be),e.__h=[],re=0)),pe=$},w.diffed=function(t){Re&&Re(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(ct.push(e)!==1&&Ie===w.requestAnimationFrame||((Ie=w.requestAnimationFrame)||Ht)(Dt)),e.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),pe=$=null},w.__c=function(t,e){e.some(function(r){try{r.__h.forEach(ee),r.__h=r.__h.filter(function(n){return!n.__||be(n)})}catch(n){e.some(function(s){s.__h&&(s.__h=[])}),e=[],w.__e(n,r.__v)}}),Fe&&Fe(t,e)},w.unmount=function(t){Ne&&Ne(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{ee(n)}catch(s){e=s}}),r.__H=void 0,e&&w.__e(e,r.__v))};var Be=typeof requestAnimationFrame=="function";function Ht(t){var e,r=function(){clearTimeout(n),Be&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(r,35);Be&&(e=requestAnimationFrame(r))}function ee(t){var e=$,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),$=e}function be(t){var e=$;t.__c=t.__(),$=e}function dt(t,e){return!t||t.length!==e.length||e.some(function(r,n){return r!==t[n]})}var Mt=Symbol.for("preact-signals");function Ce(){if(U>1)U--;else{for(var t,e=!1;j!==void 0;){var r=j;for(j=void 0,ke++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&ht(r))try{r.c()}catch(s){e||(t=s,e=!0)}r=n}}if(ke=0,U--,e)throw t}}var v=void 0;function pt(t){var e=v;v=void 0;try{return t()}finally{v=e}}var j=void 0,U=0,ke=0,oe=0;function ft(t){if(v!==void 0){var e=t.n;if(e===void 0||e.t!==v)return e={i:0,S:t,p:v.s,n:void 0,t:v,e:void 0,x:void 0,r:e},v.s!==void 0&&(v.s.n=e),v.s=e,t.n=e,32&v.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=v.s,e.n=void 0,v.s.n=e,v.s=e),e}}function x(t,e){this.v=t,this.i=0,this.n=void 0,this.t=void 0,this.W=e==null?void 0:e.watched,this.Z=e==null?void 0:e.unwatched,this.name=e==null?void 0:e.name}x.prototype.brand=Mt;x.prototype.h=function(){return!0};x.prototype.S=function(t){var e=this,r=this.t;r!==t&&t.e===void 0&&(t.x=r,this.t=t,r!==void 0?r.e=t:pt(function(){var n;(n=e.W)==null||n.call(e)}))};x.prototype.U=function(t){var e=this;if(this.t!==void 0){var r=t.e,n=t.x;r!==void 0&&(r.x=n,t.e=void 0),n!==void 0&&(n.e=r,t.x=void 0),t===this.t&&(this.t=n,n===void 0&&pt(function(){var s;(s=e.Z)==null||s.call(e)}))}};x.prototype.subscribe=function(t){var e=this;return Pe(function(){var r=e.value,n=v;v=void 0;try{t(r)}finally{v=n}},{name:"sub"})};x.prototype.valueOf=function(){return this.value};x.prototype.toString=function(){return this.value+""};x.prototype.toJSON=function(){return this.value};x.prototype.peek=function(){var t=v;v=void 0;try{return this.value}finally{v=t}};Object.defineProperty(x.prototype,"value",{get:function(){var t=ft(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(ke>100)throw new Error("Cycle detected");this.v=t,this.i++,oe++,U++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Ce()}}}});function D(t,e){return new x(t,e)}function ht(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function _t(t){for(var e=t.s;e!==void 0;e=e.n){var r=e.S.n;if(r!==void 0&&(e.r=r),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function vt(t){for(var e=t.s,r=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):r=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}t.s=r}function H(t,e){x.call(this,void 0),this.x=t,this.s=void 0,this.g=oe-1,this.f=4,this.W=e==null?void 0:e.watched,this.Z=e==null?void 0:e.unwatched,this.name=e==null?void 0:e.name}H.prototype=new x;H.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===oe))return!0;if(this.g=oe,this.f|=1,this.i>0&&!ht(this))return this.f&=-2,!0;var t=v;try{_t(this),v=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return v=t,vt(this),this.f&=-2,!0};H.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}x.prototype.S.call(this,t)};H.prototype.U=function(t){if(this.t!==void 0&&(x.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};H.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(H.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=ft(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function mt(t,e){return new H(t,e)}function yt(t){var e=t.u;if(t.u=void 0,typeof e=="function"){U++;var r=v;v=void 0;try{e()}catch(n){throw t.f&=-2,t.f|=8,Ee(t),n}finally{v=r,Ce()}}}function Ee(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,yt(t)}function Ut(t){if(v!==this)throw new Error("Out-of-order effect");vt(this),v=t,this.f&=-2,8&this.f&&Ee(this),Ce()}function A(t,e){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=e==null?void 0:e.name}A.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};A.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,yt(this),_t(this),U++;var t=v;return v=this,Ut.bind(this,t)};A.prototype.N=function(){2&this.f||(this.f|=2,this.o=j,j=this)};A.prototype.d=function(){this.f|=8,1&this.f||Ee(this)};A.prototype.dispose=function(){this.d()};function Pe(t,e){var r=new A(t,e);try{r.c()}catch(s){throw r.d(),s}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var ue,K;function O(t,e){m[t]=e.bind(null,m[t]||function(){})}function se(t){if(K){var e=K;K=void 0,e()}K=t&&t.S()}function gt(t){var e=this,r=t.data,n=C(r);n.value=r;var s=ce(function(){for(var o=e.__v;o=o.__;)if(o.__c){o.__c.__$f|=4;break}return e.__$u.c=function(){var i,c=e.__$u.S(),d=s.value;c(),Ze(d)||((i=e.base)==null?void 0:i.nodeType)!==3?(e.__$f|=1,e.setState({})):e.base.data=d},mt(function(){var i=n.value.value;return i===0?0:i===!0?"":i||""})},[]);return s.value}gt.displayName="_st";Object.defineProperties(x.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:gt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});O("__b",function(t,e){if(typeof e.type=="string"){var r,n=e.props;for(var s in n)if(s!=="children"){var o=n[s];o instanceof x&&(r||(e.__np=r={}),r[s]=o,n[s]=o.peek())}}t(e)});O("__r",function(t,e){t(e),se();var r,n=e.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(s){var o;return Pe(function(){o=this}),o.c=function(){n.__$f|=1,n.setState({})},o}())),ue=n,se(r)});O("__e",function(t,e,r,n){se(),ue=void 0,t(e,r,n)});O("diffed",function(t,e){se(),ue=void 0;var r;if(typeof e.type=="string"&&(r=e.__e)){var n=e.__np,s=e.props;if(n){var o=r.U;if(o)for(var i in o){var c=o[i];c!==void 0&&!(i in n)&&(c.d(),o[i]=void 0)}else r.U=o={};for(var d in n){var l=o[d],p=n[d];l===void 0?(l=It(r,d,p,s),o[d]=l):l.o(p,s)}}}t(e)});function It(t,e,r,n){var s=e in t&&t.ownerSVGElement===void 0,o=D(r);return{o:function(i,c){o.value=i,n=c},d:Pe(function(){var i=o.value.value;n[e]!==i&&(n[e]=i,s?t[e]=i:i?t.setAttribute(e,i):t.removeAttribute(e))})}}O("unmount",function(t,e){if(typeof e.type=="string"){var r=e.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var s in n){var o=n[s];o&&o.d()}}}}else{var i=e.__c;if(i){var c=i.__$u;c&&(i.__$u=void 0,c.d())}}t(e)});O("__h",function(t,e,r,n){(n<3||n===9)&&(e.__$f|=2),t(e,r,n)});N.prototype.shouldComponentUpdate=function(t,e){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var s in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var o in t)if(o!=="__source"&&t[o]!==this.props[o])return!0;for(var i in this.props)if(!(i in t))return!0;return!1};function C(t){return ce(function(){return D(t)},[])}function At(t){var e=ne(t);return e.current=t,ue.__$f|=4,ce(function(){return mt(function(){return e.current()})},[])}function ze(t){return new Promise((e,r)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>r(t.error)})}function Ot(t,e){let r;const n=()=>{if(r)return r;const s=indexedDB.open(t);return s.onupgradeneeded=()=>s.result.createObjectStore(e),r=ze(s),r.then(o=>{o.onclose=()=>r=void 0},()=>{}),r};return(s,o)=>n().then(i=>o(i.transaction(e,s).objectStore(e)))}let fe;function bt(){return fe||(fe=Ot("keyval-store","keyval")),fe}function kt(t,e=bt()){return e("readonly",r=>ze(r.get(t)))}function Rt(t,e,r=bt()){return r("readwrite",n=>(n.put(e,t),ze(n.transaction)))}var Ft=0;function u(t,e,r,n,s,o){e||(e={});var i,c,d=e;if("ref"in d)for(c in d={},e)c=="ref"?i=e[c]:d[c]=e[c];var l={type:t,props:d,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ft,__i:-1,__u:0,__source:s,__self:o};if(typeof t=="function"&&(i=t.defaultProps))for(c in i)d[c]===void 0&&(d[c]=i[c]);return m.vnode&&m.vnode(l),l}var Nt=Object.defineProperty,jt=(t,e)=>{for(var r in e)Nt(t,r,{get:e[r],enumerable:!0})};function Bt(t){return ie=new wt(t),ie}function Wt(){if(!ie)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return ie}var wt,ie;async function Vt(t,e){const r=Wt(),n=await r.getProduct(t);if(!n.variants.edges.length)throw new Error("Product has no variants");const o=[{variantId:n.variants.edges[0].node.id,quantity:1}],i=await r.createCheckout(o);if(e&&typeof localStorage<"u"){const c={checkoutId:i.id,bookSlug:e,createdAt:Date.now()};localStorage.setItem(Gt,JSON.stringify(c))}return i.webUrl}function Xt(t){return t.webUrl}var Gt;async function Yt(t,e){const r={bookSlug:t,orderId:e==null?void 0:e.orderId,email:e==null?void 0:e.email,unlockedAt:Date.now()};await Rt(`${W}${t}`,r),typeof localStorage<"u"&&localStorage.setItem(`${W}${t}`,JSON.stringify(r))}async function qt(t){if(typeof localStorage<"u"&&localStorage.getItem(`${W}${t}`))return!0;try{return!!await kt(`${W}${t}`)}catch{return!1}}async function Kt(t){try{return await kt(`${W}${t}`)||null}catch{return null}}async function Jt(t,e){const r=await Kt(t);return!r||!r.orderId?!1:r.orderId===e}var W,Zt={};jt(Zt,{ShopifyClient:()=>wt,createCheckout:()=>Vt,createShopifyClient:()=>Bt,getCheckoutUrl:()=>Xt,isContentUnlocked:()=>qt,unlockContent:()=>Yt,verifyPurchase:()=>Jt});function Qt({children:t,onPageChange:e}){const r=ne(null),n=ne(null),s=C(0),o=C(1);Q(()=>{const d=()=>{if(!n.current||!r.current)return;const p=r.current.offsetWidth,a=n.current.scrollWidth,h=Math.ceil(a/p);o.value=Math.max(1,h),s.value>=o.value&&(s.value=o.value-1)};d();const l=new ResizeObserver(d);return r.current&&l.observe(r.current),()=>l.disconnect()},[t]);const i=d=>{const l=Math.max(0,Math.min(d,o.value-1));if(s.value=l,n.current&&r.current){const p=r.current.offsetWidth;n.current.scrollTo({left:l*p,behavior:"smooth"})}e==null||e(l,o.value)};Q(()=>{const d=l=>{l.key==="ArrowRight"||l.key===" "?(l.preventDefault(),i(s.value+1)):l.key==="ArrowLeft"&&(l.preventDefault(),i(s.value-1))};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[]),Q(()=>{if(!r.current)return;let d=0,l=0;const p=f=>{d=f.touches[0].clientX,l=f.touches[0].clientY},a=f=>{const k=f.changedTouches[0].clientX,S=f.changedTouches[0].clientY,b=d-k,y=l-S;Math.abs(b)>Math.abs(y)&&Math.abs(b)>50&&(b>0?i(s.value+1):i(s.value-1))},h=r.current;return h.addEventListener("touchstart",p,{passive:!0}),h.addEventListener("touchend",a,{passive:!0}),()=>{h.removeEventListener("touchstart",p),h.removeEventListener("touchend",a)}},[]);const c=At(()=>o.value<=1?100:Math.round((s.value+1)/o.value*100));return u("div",{class:"pressy-paginator",ref:r,children:[u("div",{class:"pressy-paginator-content",ref:n,children:u("article",{class:"pressy-prose","data-drop-cap":!0,children:t})}),u("div",{class:"pressy-paginator-controls",children:[u("button",{class:"pressy-page-btn pressy-page-prev",onClick:()=>i(s.value-1),disabled:s.value===0,"aria-label":"Previous page",children:u("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:u("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),u("div",{class:"pressy-page-info",children:[u("span",{class:"pressy-page-number",children:[s.value+1," / ",o.value]}),u("div",{class:"pressy-progress-bar",children:u("div",{class:"pressy-progress-fill",style:{width:`${c.value}%`}})})]}),u("button",{class:"pressy-page-btn pressy-page-next",onClick:()=>i(s.value+1),disabled:s.value>=o.value-1,"aria-label":"Next page",children:u("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:u("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})})]}),u("style",{children:`
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
      `})]})}function er({prev:t,next:e}){return!t&&!e?null:u("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[u("div",{class:"pressy-nav-inner",children:[t?u("a",{href:t.slug,class:"pressy-nav-link pressy-nav-prev",children:[u("span",{class:"pressy-nav-direction",children:"Previous"}),u("span",{class:"pressy-nav-title",children:t.title})]}):u("div",{class:"pressy-nav-placeholder"}),e?u("a",{href:e.slug,class:"pressy-nav-link pressy-nav-next",children:[u("span",{class:"pressy-nav-direction",children:"Next"}),u("span",{class:"pressy-nav-title",children:e.title})]}):u("div",{class:"pressy-nav-placeholder"})]}),u("style",{children:`
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
      `})]})}function tr({items:t,onNavigate:e,activeSlug:r}){const n=s=>{const o=document.getElementById(s);o&&o.scrollIntoView({behavior:"smooth"}),e==null||e()};return u("nav",{class:"pressy-toc","aria-label":"Table of contents",children:[u("h2",{class:"pressy-toc-title",children:"Contents"}),u("ul",{class:"pressy-toc-list",children:t.map(s=>u("li",{class:`pressy-toc-item pressy-toc-level-${s.level}`,"data-active":r===s.slug,children:u("a",{href:`#${s.slug}`,onClick:o=>{o.preventDefault(),n(s.slug)},class:"pressy-toc-link",children:s.text})},s.slug))}),u("style",{children:`
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
      `})]})}function rr(){const t=C(!1),e=C({x:0,y:0}),r=C(""),n=ne(null);Q(()=>{const c=()=>{const d=window.getSelection();if(!d||d.isCollapsed){t.value=!1;return}const l=d.toString().trim();if(l.length<5){t.value=!1;return}r.value=l;const a=d.getRangeAt(0).getBoundingClientRect();e.value={x:a.left+a.width/2,y:a.top-10},t.value=!0};return document.addEventListener("selectionchange",c),document.addEventListener("mouseup",c),()=>{document.removeEventListener("selectionchange",c),document.removeEventListener("mouseup",c)}},[]);const s=()=>{const c=encodeURIComponent(r.value),d=new URL(window.location.href);return d.hash=`:~:text=${c}`,d.toString()},o=async()=>{const c=s(),d=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:d,url:c}),t.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${d}

${c}`),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var l;(l=n.current)==null||l.classList.remove("copied")},2e3))}catch(l){console.error("Failed to copy to clipboard:",l)}},i=async()=>{const c=s();try{await navigator.clipboard.writeText(c),n.current&&(n.current.classList.add("copied"),setTimeout(()=>{var d;(d=n.current)==null||d.classList.remove("copied")},2e3))}catch(d){console.error("Failed to copy link:",d)}};return t.value?u("div",{ref:n,class:"pressy-text-share",style:{left:`${e.value.x}px`,top:`${e.value.y}px`},children:[u("button",{class:"pressy-share-btn",onClick:o,"aria-label":"Share selected text",title:"Share quote",children:u("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:u("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),u("button",{class:"pressy-copy-link-btn",onClick:i,"aria-label":"Copy link to selected text",title:"Copy link",children:u("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:u("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),u("style",{children:`
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
      `})]}):null}var nr=["light","dark","sepia"];function or(){const t=C(!1),e=C((typeof localStorage<"u"?localStorage.getItem("pressy-theme"):"light")||"light"),r=o=>{e.value=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem("pressy-theme",o),t.value=!1},n={light:"☀️",dark:"🌙",sepia:"📜"},s={light:"Light",dark:"Dark",sepia:"Sepia"};return u("div",{class:"pressy-theme-switcher",children:[u("button",{class:"pressy-theme-toggle",onClick:()=>t.value=!t.value,"aria-label":"Change theme","aria-expanded":t.value,children:u("span",{class:"pressy-theme-icon",children:n[e.value]})}),t.value&&u("div",{class:"pressy-theme-menu",role:"menu",children:nr.map(o=>u("button",{class:"pressy-theme-option",onClick:()=>r(o),role:"menuitem","data-active":e.value===o,children:[u("span",{class:"pressy-theme-icon",children:n[o]}),u("span",{class:"pressy-theme-label",children:s[o]})]},o))}),u("style",{children:`
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
      `})]})}function xt({children:t,title:e,bookTitle:r,chapterTitle:n,prevChapter:s,nextChapter:o,toc:i,mode:c="scroll",showDropCap:d=!0}){const l=C(!1),p=C(c);return u("div",{class:"pressy-reader","data-mode":p.value,children:[u("header",{class:"pressy-reader-header",children:[u("div",{class:"pressy-reader-header-left",children:r&&u("a",{href:"../",class:"pressy-book-link",children:r})}),u("div",{class:"pressy-reader-header-center",children:n&&u("span",{class:"pressy-chapter-title",children:n})}),u("div",{class:"pressy-reader-header-right",children:[i&&i.length>0&&u("button",{class:"pressy-toc-toggle",onClick:()=>l.value=!l.value,"aria-label":"Toggle table of contents",children:u("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:u("path",{d:"M3 4h14v2H3V4zm0 5h14v2H3V9zm0 5h14v2H3v-2z"})})}),u(or,{}),u("button",{class:"pressy-mode-toggle",onClick:()=>{p.value=p.value==="scroll"?"paginated":"scroll"},"aria-label":`Switch to ${p.value==="scroll"?"paginated":"scroll"} mode`,children:p.value==="scroll"?u("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:u("path",{d:"M2 3h7v14H2V3zm9 0h7v14h-7V3z"})}):u("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:u("path",{d:"M3 3h14v14H3V3z"})})})]})]}),l.value&&i&&u("aside",{class:"pressy-toc-sidebar",children:u(tr,{items:i,onNavigate:()=>l.value=!1})}),u("main",{class:"pressy-reader-main",children:p.value==="paginated"?u(Qt,{children:t}):u("article",{class:`pressy-prose ${d?"":"no-drop-cap"}`,"data-drop-cap":d,children:t})}),u(rr,{}),u(er,{prev:s,next:o}),u("style",{children:`
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
      `})]})}function sr({id:t,children:e}){const r=C(!1);return u(X,{children:[u("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${t}`,"aria-expanded":r.value,children:t}),r.value&&u("span",{class:"pressy-footnote-content",id:`footnote-${t}`,role:"tooltip",children:[e,u("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),u("style",{children:`
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
      `})]})}function ir({children:t,title:e}){return u("aside",{class:"pressy-aside",children:[e&&u("strong",{class:"pressy-aside-title",children:e}),u("div",{class:"pressy-aside-content",children:t}),u("style",{children:`
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
      `})]})}function We({src:t,alt:e,caption:r,wide:n,children:s}){return u("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[u("img",{src:t,alt:e||r||"",loading:"lazy",decoding:"async"}),(r||s)&&u("figcaption",{class:"pressy-figure-caption",children:r||s}),u("style",{children:`
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
      `})]})}var ar={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},lr={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function cr({type:t="note",title:e,children:r}){return u("div",{class:`pressy-callout pressy-callout-${t}`,children:[u("div",{class:"pressy-callout-header",children:[u("span",{class:"pressy-callout-icon",children:ar[t]}),u("strong",{class:"pressy-callout-title",children:e||lr[t]})]}),u("div",{class:"pressy-callout-content",children:r}),u("style",{children:`
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
      `})]})}function Ve({variant:t="asterisks"}){return u("div",{class:`pressy-scene-break pressy-scene-break-${t}`,role:"separator",children:[t==="asterisks"&&u("span",{children:"* * *"}),t==="ornament"&&u("span",{children:"❧"}),u("style",{children:`
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
      `})]})}var ur={Footnote:sr,Aside:ir,Figure:We,Callout:cr,SceneBreak:Ve,img:We,hr:Ve},dr={};function $t(){return{...ur,...dr}}var Xe=D("/"),pr=D("light"),Te=D("scroll"),he=D(0),Ge=D(!navigator.onLine),fr="pressy",hr=1,Ye="reading-progress",qe="unlocks",J=null;async function _r(){return J||new Promise((t,e)=>{const r=indexedDB.open(fr,hr);r.onerror=()=>e(r.error),r.onsuccess=()=>{J=r.result,t(J)},r.onupgradeneeded=n=>{const s=n.target.result;s.objectStoreNames.contains(Ye)||s.createObjectStore(Ye,{keyPath:"chapterSlug"}),s.objectStoreNames.contains(qe)||s.createObjectStore(qe,{keyPath:"bookSlug"})}})}function Ke(t){pr.value=t,document.documentElement.setAttribute("data-theme",t),localStorage.setItem("pressy-theme",t)}function vr(){const t=localStorage.getItem("pressy-theme");t?Ke(t):window.matchMedia("(prefers-color-scheme: dark)").matches&&Ke("dark")}function mr(){const t=localStorage.getItem("pressy-pagination");t&&(Te.value=t)}function yr(){document.addEventListener("keydown",t=>{Te.value==="paginated"&&(t.key==="ArrowRight"||t.key===" "?(t.preventDefault(),he.value++):t.key==="ArrowLeft"&&(t.preventDefault(),he.value>0&&he.value--))})}function gr(){window.addEventListener("online",()=>{Ge.value=!1}),window.addEventListener("offline",()=>{Ge.value=!0})}function _e(t){var r,n;const e=((r=t.books[0])==null?void 0:r.metadata.title)||"Library";return _("div",{class:"pressy-home"},_("header",{class:"pressy-home-header"},_("h1",null,e),((n=t.books[0])==null?void 0:n.metadata.description)&&_("p",{class:"pressy-home-desc"},t.books[0].metadata.description)),t.books.length>0&&_("section",{class:"pressy-home-section"},_("h2",null,"Chapters"),_("nav",{class:"pressy-chapter-list"},...t.books.flatMap(s=>s.chapters.map(o=>_("a",{href:`${V}/books/${s.slug}/${o.slug}`,class:"pressy-chapter-link"},_("span",{class:"pressy-chapter-order"},`${o.order}.`),_("span",null,o.title)))))),t.articles.length>0&&_("section",{class:"pressy-home-section"},_("h2",null,"Articles"),_("nav",{class:"pressy-chapter-list"},...t.articles.map(s=>_("a",{href:`${V}/articles/${s.slug}`,class:"pressy-chapter-link"},s.metadata.title)))),_("style",null,St))}function br(t){return _("div",{class:"pressy-home"},_("header",{class:"pressy-home-header"},_("h1",null,t.metadata.title),_("p",{class:"pressy-home-author"},`by ${t.metadata.author}`),t.metadata.description&&_("p",{class:"pressy-home-desc"},t.metadata.description)),_("section",{class:"pressy-home-section"},_("h2",null,"Chapters"),_("nav",{class:"pressy-chapter-list"},...t.chapters.map(e=>_("a",{href:`${V}/books/${t.slug}/${e.slug}`,class:"pressy-chapter-link"},_("span",{class:"pressy-chapter-order"},`${e.order}.`),_("span",null,e.title))))),_("style",null,St))}function kr(t,e,r){const n=e.split("/"),s=n[2],o=n[3],i=t.books.find(h=>h.slug===s),c=i?i.chapters.findIndex(h=>h.slug===o):-1,d=i==null?void 0:i.chapters[c],l=h=>`${V}/books/${s}/${h.slug}`,p=i&&c>0?{slug:l(i.chapters[c-1]),title:i.chapters[c-1].title}:void 0,a=i&&c>=0&&c<i.chapters.length-1?{slug:l(i.chapters[c+1]),title:i.chapters[c+1].title}:void 0;return _(xt,{title:(d==null?void 0:d.title)||o,bookTitle:i==null?void 0:i.metadata.title,prevChapter:p,nextChapter:a,mode:Te.value,children:_(r,{components:$t()})})}function wr(t,e,r){const n=e.split("/")[2],s=t.articles.find(o=>o.slug===n);return _(xt,{title:(s==null?void 0:s.metadata.title)||n,mode:"scroll",children:_(r,{components:$t()})})}var St=`
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
`;function xr(t){const e=window.location.pathname,r=e.endsWith("/")?e.slice(0,-1):e,n=t.endsWith("/")?t.slice(0,-1):t;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const s=r.indexOf(n);return s>0?r.slice(0,s):""}var V="";function $r(t,e){V=xr(t.route),Xe.value=t.route,vr(),mr(),yr(),gr(),_r(),window.addEventListener("popstate",()=>{Xe.value=window.location.pathname}),document.addEventListener("click",n=>{const s=n.target.closest("a");if(!s)return;const o=s.getAttribute("href");if(o&&!(o.startsWith("http")||o.startsWith("#"))&&o.startsWith(t.route+"#")){n.preventDefault();const i=o.slice(o.indexOf("#")),c=document.querySelector(i);c&&c.scrollIntoView({behavior:"smooth"});return}});let r;switch(t.routeType){case"home":r=_e(t.manifest);break;case"book":{const n=t.route.split("/")[2],s=t.manifest.books.find(o=>o.slug===n);r=s?br(s):_("div",null,"Book not found");break}case"chapter":r=e?kr(t.manifest,t.route,e):_("div",null,"Loading...");break;case"article":r=e?wr(t.manifest,t.route,e):_("div",null,"Loading...");break;case"books":r=_e(t.manifest);break;case"articles":r=_e(t.manifest);break;default:r=_("div",null,"Page not found")}Lt(r,document.getElementById("app"))}export{$r as h,X as k,u};
