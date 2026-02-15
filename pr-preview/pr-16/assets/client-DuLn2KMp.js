var qe,E,Zt,Qt,ue,At,er,tr,rr,vt,ut,dt,Ce={},nr=[],Or=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ve=Array.isArray;function re(e,t){for(var r in t)e[r]=t[r];return e}function _t(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function zr(e,t,r){var n,o,s,a={};for(s in t)s=="key"?n=t[s]:s=="ref"?o=t[s]:a[s]=t[s];if(arguments.length>2&&(a.children=arguments.length>3?qe.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)a[s]===void 0&&(a[s]=e.defaultProps[s]);return We(e,a,n,o,null)}function We(e,t,r,n,o){var s={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Zt,__i:-1,__u:0};return o==null&&E.vnode!=null&&E.vnode(s),s}function me(e){return e.children}function Se(e,t){this.props=e,this.context=t}function ye(e,t){if(t==null)return e.__?ye(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?ye(e):null}function or(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return or(e)}}function Ot(e){(!e.__d&&(e.__d=!0)&&ue.push(e)&&!Be.__r++||At!=E.debounceRendering)&&((At=E.debounceRendering)||er)(Be)}function Be(){for(var e,t,r,n,o,s,a,l=1;ue.length;)ue.length>l&&ue.sort(tr),e=ue.shift(),l=ue.length,e.__d&&(r=void 0,n=void 0,o=(n=(t=e).__v).__e,s=[],a=[],t.__P&&((r=re({},n)).__v=n.__v+1,E.vnode&&E.vnode(r),gt(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,s,o??ye(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,ar(s,r,a),n.__e=n.__=null,r.__e!=o&&or(r)));Be.__r=0}function sr(e,t,r,n,o,s,a,l,d,c,h){var u,_,f,y,x,L,g,$=n&&n.__k||nr,S=t.length;for(d=Mr(r,t,$,d,S),u=0;u<S;u++)(f=r.__k[u])!=null&&(_=f.__i==-1?Ce:$[f.__i]||Ce,f.__i=u,L=gt(e,f,_,o,s,a,l,d,c,h),y=f.__e,f.ref&&_.ref!=f.ref&&(_.ref&&mt(_.ref,null,f),h.push(f.ref,f.__c||y,f)),x==null&&y!=null&&(x=y),(g=!!(4&f.__u))||_.__k===f.__k?d=ir(f,d,e,g):typeof f.type=="function"&&L!==void 0?d=L:y&&(d=y.nextSibling),f.__u&=-7);return r.__e=x,d}function Mr(e,t,r,n,o){var s,a,l,d,c,h=r.length,u=h,_=0;for(e.__k=new Array(o),s=0;s<o;s++)(a=t[s])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[s]=We(null,a,null,null,null):Ve(a)?a=e.__k[s]=We(me,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[s]=We(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[s]=a,d=s+_,a.__=e,a.__b=e.__b+1,l=null,(c=a.__i=Hr(a,r,d,u))!=-1&&(u--,(l=r[c])&&(l.__u|=2)),l==null||l.__v==null?(c==-1&&(o>h?_--:o<h&&_++),typeof a.type!="function"&&(a.__u|=4)):c!=d&&(c==d-1?_--:c==d+1?_++:(c>d?_--:_++,a.__u|=4))):e.__k[s]=null;if(u)for(s=0;s<h;s++)(l=r[s])!=null&&!(2&l.__u)&&(l.__e==n&&(n=ye(l)),cr(l,l));return n}function ir(e,t,r,n){var o,s;if(typeof e.type=="function"){for(o=e.__k,s=0;o&&s<o.length;s++)o[s]&&(o[s].__=e,t=ir(o[s],t,r,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=ye(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Hr(e,t,r,n){var o,s,a,l=e.key,d=e.type,c=t[r],h=c!=null&&(2&c.__u)==0;if(c===null&&l==null||h&&l==c.key&&d==c.type)return r;if(n>(h?1:0)){for(o=r-1,s=r+1;o>=0||s<t.length;)if((c=t[a=o>=0?o--:s++])!=null&&!(2&c.__u)&&l==c.key&&d==c.type)return a}return-1}function zt(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Or.test(t)?r:r+"px"}function Me(e,t,r,n,o){var s,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||zt(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||zt(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(rr,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=r,r?n?r.u=n.u:(r.u=vt,e.addEventListener(t,s?dt:ut,s)):e.removeEventListener(t,s?dt:ut,s);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Mt(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=vt++;else if(t.t<r.u)return;return r(E.event?E.event(t):t)}}}function gt(e,t,r,n,o,s,a,l,d,c){var h,u,_,f,y,x,L,g,$,S,V,ie,j,W,ae,O,xe,R=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),s=[l=t.__e=r.__e]),(h=E.__b)&&h(t);e:if(typeof R=="function")try{if(g=t.props,$="prototype"in R&&R.prototype.render,S=(h=R.contextType)&&n[h.__c],V=h?S?S.props.value:h.__:n,r.__c?L=(u=t.__c=r.__c).__=u.__E:($?t.__c=u=new R(g,V):(t.__c=u=new Se(g,V),u.constructor=R,u.render=Wr),S&&S.sub(u),u.state||(u.state={}),u.__n=n,_=u.__d=!0,u.__h=[],u._sb=[]),$&&u.__s==null&&(u.__s=u.state),$&&R.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=re({},u.__s)),re(u.__s,R.getDerivedStateFromProps(g,u.__s))),f=u.props,y=u.state,u.__v=t,_)$&&R.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),$&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if($&&R.getDerivedStateFromProps==null&&g!==f&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(g,V),t.__v==r.__v||!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(g,u.__s,V)===!1){for(t.__v!=r.__v&&(u.props=g,u.state=u.__s,u.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(K){K&&(K.__=t)}),ie=0;ie<u._sb.length;ie++)u.__h.push(u._sb[ie]);u._sb=[],u.__h.length&&a.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(g,u.__s,V),$&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(f,y,x)})}if(u.context=V,u.props=g,u.__P=e,u.__e=!1,j=E.__r,W=0,$){for(u.state=u.__s,u.__d=!1,j&&j(t),h=u.render(u.props,u.state,u.context),ae=0;ae<u._sb.length;ae++)u.__h.push(u._sb[ae]);u._sb=[]}else do u.__d=!1,j&&j(t),h=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++W<25);u.state=u.__s,u.getChildContext!=null&&(n=re(re({},n),u.getChildContext())),$&&!_&&u.getSnapshotBeforeUpdate!=null&&(x=u.getSnapshotBeforeUpdate(f,y)),O=h,h!=null&&h.type===me&&h.key==null&&(O=lr(h.props.children)),l=sr(e,Ve(O)?O:[O],t,r,n,o,s,a,l,d,c),u.base=t.__e,t.__u&=-161,u.__h.length&&a.push(u),L&&(u.__E=u.__=null)}catch(K){if(t.__v=null,d||s!=null)if(K.then){for(t.__u|=d?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;s[s.indexOf(l)]=null,t.__e=l}else{for(xe=s.length;xe--;)_t(s[xe]);ft(t)}else t.__e=r.__e,t.__k=r.__k,K.then||ft(t);E.__e(K,t,r)}else s==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=Ur(r.__e,t,r,n,o,s,a,d,c);return(h=E.diffed)&&h(t),128&t.__u?void 0:l}function ft(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(ft)}function ar(e,t,r){for(var n=0;n<r.length;n++)mt(r[n],r[++n],r[++n]);E.__c&&E.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(s){s.call(o)})}catch(s){E.__e(s,o.__v)}})}function lr(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Ve(e)?e.map(lr):re({},e)}function Ur(e,t,r,n,o,s,a,l,d){var c,h,u,_,f,y,x,L=r.props||Ce,g=t.props,$=t.type;if($=="svg"?o="http://www.w3.org/2000/svg":$=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),s!=null){for(c=0;c<s.length;c++)if((f=s[c])&&"setAttribute"in f==!!$&&($?f.localName==$:f.nodeType==3)){e=f,s[c]=null;break}}if(e==null){if($==null)return document.createTextNode(g);e=document.createElementNS(o,$,g.is&&g),l&&(E.__m&&E.__m(t,s),l=!1),s=null}if($==null)L===g||l&&e.data==g||(e.data=g);else{if(s=s&&qe.call(e.childNodes),!l&&s!=null)for(L={},c=0;c<e.attributes.length;c++)L[(f=e.attributes[c]).name]=f.value;for(c in L)if(f=L[c],c!="children"){if(c=="dangerouslySetInnerHTML")u=f;else if(!(c in g)){if(c=="value"&&"defaultValue"in g||c=="checked"&&"defaultChecked"in g)continue;Me(e,c,null,f,o)}}for(c in g)f=g[c],c=="children"?_=f:c=="dangerouslySetInnerHTML"?h=f:c=="value"?y=f:c=="checked"?x=f:l&&typeof f!="function"||L[c]===f||Me(e,c,f,L[c],o);if(h)l||u&&(h.__html==u.__html||h.__html==e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(u&&(e.innerHTML=""),sr(t.type=="template"?e.content:e,Ve(_)?_:[_],t,r,n,$=="foreignObject"?"http://www.w3.org/1999/xhtml":o,s,a,s?s[0]:r.__k&&ye(r,0),l,d),s!=null)for(c=s.length;c--;)_t(s[c]);l||(c="value",$=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[c]||$=="progress"&&!y||$=="option"&&y!=L[c])&&Me(e,c,y,L[c],o),c="checked",x!=null&&x!=e[c]&&Me(e,c,x,L[c],o))}return e}function mt(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){E.__e(o,r)}}function cr(e,t,r){var n,o;if(E.unmount&&E.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||mt(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){E.__e(s,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&cr(n[o],t,r||typeof e.type!="function");r||_t(e.__e),e.__c=e.__=e.__e=void 0}function Wr(e,t,r){return this.constructor(e,r)}function Dr(e,t,r){var n,o,s,a;t==document&&(t=document.documentElement),E.__&&E.__(e,t),o=(n=!1)?null:t.__k,s=[],a=[],gt(t,e=t.__k=zr(me,null,[e]),o||Ce,Ce,t.namespaceURI,o?null:t.firstChild?qe.call(t.childNodes):null,s,o?o.__e:t.firstChild,n,a),ar(s,e,a)}qe=nr.slice,E={__e:function(e,t,r,n){for(var o,s,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((s=o.constructor)&&s.getDerivedStateFromError!=null&&(o.setState(s.getDerivedStateFromError(e)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),a=o.__d),a)return o.__E=o}catch(l){e=l}throw e}},Zt=0,Qt=function(e){return e!=null&&e.constructor===void 0},Se.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=re({},this.state),typeof e=="function"&&(e=e(re({},r),this.props)),e&&re(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ot(this))},Se.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ot(this))},Se.prototype.render=me,ue=[],er=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,tr=function(e,t){return e.__v.__b-t.__v.__b},Be.__r=0,rr=/(PointerCapture)$|Capture$/i,vt=0,ut=Mt(!1),dt=Mt(!0);var Ee,z,nt,Ht,Le=0,ur=[],M=E,Ut=M.__b,Wt=M.__r,Dt=M.diffed,Nt=M.__c,Bt=M.unmount,It=M.__;function yt(e,t){M.__h&&M.__h(z,e,Le||t),Le=0;var r=z.__H||(z.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function F(e){return Le=1,Nr(fr,e)}function Nr(e,t,r){var n=yt(Ee++,2);if(n.t=e,!n.__c&&(n.__=[fr(void 0,t),function(l){var d=n.__N?n.__N[0]:n.__[0],c=n.t(d,l);d!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=z,!z.__f)){var o=function(l,d,c){if(!n.__c.__H)return!0;var h=n.__c.__H.__.filter(function(_){return!!_.__c});if(h.every(function(_){return!_.__N}))return!s||s.call(this,l,d,c);var u=n.__c.props!==l;return h.forEach(function(_){if(_.__N){var f=_.__[0];_.__=_.__N,_.__N=void 0,f!==_.__[0]&&(u=!0)}}),s&&s.call(this,l,d,c)||u};z.__f=!0;var s=z.shouldComponentUpdate,a=z.componentWillUpdate;z.componentWillUpdate=function(l,d,c){if(this.__e){var h=s;s=void 0,o(l,d,c),s=h}a&&a.call(this,l,d,c)},z.shouldComponentUpdate=o}return n.__N||n.__}function A(e,t){var r=yt(Ee++,3);!M.__s&&dr(r.__H,t)&&(r.__=e,r.u=t,z.__H.__h.push(r))}function N(e){return Le=5,Ke(function(){return{current:e}},[])}function Ke(e,t){var r=yt(Ee++,7);return dr(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function te(e,t){return Le=8,Ke(function(){return e},t)}function Br(){for(var e;e=ur.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(De),e.__H.__h.forEach(pt),e.__H.__h=[]}catch(t){e.__H.__h=[],M.__e(t,e.__v)}}M.__b=function(e){z=null,Ut&&Ut(e)},M.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),It&&It(e,t)},M.__r=function(e){Wt&&Wt(e),Ee=0;var t=(z=e.__c).__H;t&&(nt===z?(t.__h=[],z.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(De),t.__h.forEach(pt),t.__h=[],Ee=0)),nt=z},M.diffed=function(e){Dt&&Dt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ur.push(t)!==1&&Ht===M.requestAnimationFrame||((Ht=M.requestAnimationFrame)||Ir)(Br)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),nt=z=null},M.__c=function(e,t){t.some(function(r){try{r.__h.forEach(De),r.__h=r.__h.filter(function(n){return!n.__||pt(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],M.__e(n,r.__v)}}),Nt&&Nt(e,t)},M.unmount=function(e){Bt&&Bt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{De(n)}catch(o){t=o}}),r.__H=void 0,t&&M.__e(t,r.__v))};var Ft=typeof requestAnimationFrame=="function";function Ir(e){var t,r=function(){clearTimeout(n),Ft&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);Ft&&(t=requestAnimationFrame(r))}function De(e){var t=z,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),z=t}function pt(e){var t=z;e.__c=e.__(),z=t}function dr(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function fr(e,t){return typeof t=="function"?t(e):t}var Fr=Symbol.for("preact-signals");function bt(){if(ge>1)ge--;else{for(var e,t=!1;$e!==void 0;){var r=$e;for($e=void 0,ht++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&vr(r))try{r.c()}catch(o){t||(e=o,t=!0)}r=n}}if(ht=0,ge--,t)throw e}}var C=void 0;function pr(e){var t=C;C=void 0;try{return e()}finally{C=t}}var $e=void 0,ge=0,ht=0,Ie=0;function hr(e){if(C!==void 0){var t=e.n;if(t===void 0||t.t!==C)return t={i:0,S:e,p:C.s,n:void 0,t:C,e:void 0,x:void 0,r:t},C.s!==void 0&&(C.s.n=t),C.s=t,e.n=t,32&C.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=C.s,t.n=void 0,C.s.n=t,C.s=t),t}}function D(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}D.prototype.brand=Fr;D.prototype.h=function(){return!0};D.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:pr(function(){var n;(n=t.W)==null||n.call(t)}))};D.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,n=e.x;r!==void 0&&(r.x=n,e.e=void 0),n!==void 0&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,n===void 0&&pr(function(){var o;(o=t.Z)==null||o.call(t)}))}};D.prototype.subscribe=function(e){var t=this;return xt(function(){var r=t.value,n=C;C=void 0;try{e(r)}finally{C=n}},{name:"sub"})};D.prototype.valueOf=function(){return this.value};D.prototype.toString=function(){return this.value+""};D.prototype.toJSON=function(){return this.value};D.prototype.peek=function(){var e=C;C=void 0;try{return this.value}finally{C=e}};Object.defineProperty(D.prototype,"value",{get:function(){var e=hr(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(ht>100)throw new Error("Cycle detected");this.v=e,this.i++,Ie++,ge++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{bt()}}}});function ne(e,t){return new D(e,t)}function vr(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function _r(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function gr(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function de(e,t){D.call(this,void 0),this.x=e,this.s=void 0,this.g=Ie-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}de.prototype=new D;de.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Ie))return!0;if(this.g=Ie,this.f|=1,this.i>0&&!vr(this))return this.f&=-2,!0;var e=C;try{_r(this),C=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return C=e,gr(this),this.f&=-2,!0};de.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}D.prototype.S.call(this,e)};de.prototype.U=function(e){if(this.t!==void 0&&(D.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};de.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(de.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=hr(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function jr(e,t){return new de(e,t)}function mr(e){var t=e.u;if(e.u=void 0,typeof t=="function"){ge++;var r=C;C=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,wt(e),n}finally{C=r,bt()}}}function wt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,mr(e)}function Yr(e){if(C!==this)throw new Error("Out-of-order effect");gr(this),C=e,this.f&=-2,8&this.f&&wt(this),bt()}function be(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}be.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};be.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,mr(this),_r(this),ge++;var e=C;return C=this,Yr.bind(this,e)};be.prototype.N=function(){2&this.f||(this.f|=2,this.o=$e,$e=this)};be.prototype.d=function(){this.f|=8,1&this.f||wt(this)};be.prototype.dispose=function(){this.d()};function xt(e,t){var r=new be(e,t);try{r.c()}catch(o){throw r.d(),o}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}var He;function we(e,t){E[e]=t.bind(null,E[e]||function(){})}function Fe(e){if(He){var t=He;He=void 0,t()}He=e&&e.S()}function yr(e){var t=this,r=e.data,n=X(r);n.value=r;var o=Ke(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var a,l=t.__$u.S(),d=o.value;l(),Qt(d)||((a=t.base)==null?void 0:a.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=d},jr(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return o.value}yr.displayName="_st";Object.defineProperties(D.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:yr},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});we("__b",function(e,t){if(typeof t.type=="string"){var r,n=t.props;for(var o in n)if(o!=="children"){var s=n[o];s instanceof D&&(r||(t.__np=r={}),r[o]=s,n[o]=s.peek())}}e(t)});we("__r",function(e,t){e(t),Fe();var r,n=t.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(o){var s;return xt(function(){s=this}),s.c=function(){n.__$f|=1,n.setState({})},s}())),Fe(r)});we("__e",function(e,t,r,n){Fe(),e(t,r,n)});we("diffed",function(e,t){Fe();var r;if(typeof t.type=="string"&&(r=t.__e)){var n=t.__np,o=t.props;if(n){var s=r.U;if(s)for(var a in s){var l=s[a];l!==void 0&&!(a in n)&&(l.d(),s[a]=void 0)}else r.U=s={};for(var d in n){var c=s[d],h=n[d];c===void 0?(c=Xr(r,d,h,o),s[d]=c):c.o(h,o)}}}e(t)});function Xr(e,t,r,n){var o=t in e&&e.ownerSVGElement===void 0,s=ne(r);return{o:function(a,l){s.value=a,n=l},d:xt(function(){var a=s.value.value;n[t]!==a&&(n[t]=a,o?e[t]=a:a?e.setAttribute(t,a):e.removeAttribute(t))})}}we("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var o in n){var s=n[o];s&&s.d()}}}}else{var a=t.__c;if(a){var l=a.__$u;l&&(a.__$u=void 0,l.d())}}e(t)});we("__h",function(e,t,r,n){(n<3||n===9)&&(t.__$f|=2),e(t,r,n)});Se.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&r.s!==void 0;for(var o in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var s in e)if(s!=="__source"&&e[s]!==this.props[s])return!0;for(var a in this.props)if(!(a in e))return!0;return!1};function X(e){return Ke(function(){return ne(e)},[])}function kt(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function qr(e,t){let r;const n=()=>{if(r)return r;const o=indexedDB.open(e);return o.onupgradeneeded=()=>o.result.createObjectStore(t),r=kt(o),r.then(s=>{s.onclose=()=>r=void 0},()=>{}),r};return(o,s)=>n().then(a=>s(a.transaction(t,o).objectStore(t)))}let ot;function br(){return ot||(ot=qr("keyval-store","keyval")),ot}function wr(e,t=br()){return t("readonly",r=>kt(r.get(e)))}function Vr(e,t,r=br()){return r("readwrite",n=>(n.put(t,e),kt(n.transaction)))}var Kr=0;function i(e,t,r,n,o,s){t||(t={});var a,l,d=t;if("ref"in d)for(l in d={},t)l=="ref"?a=t[l]:d[l]=t[l];var c={type:e,props:d,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Kr,__i:-1,__u:0,__source:o,__self:s};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)d[l]===void 0&&(d[l]=a[l]);return E.vnode&&E.vnode(c),c}var Gr=Object.defineProperty,Jr=(e,t)=>{for(var r in t)Gr(e,r,{get:t[r],enumerable:!0})};function Zr(e){return je=new xr(e),je}function Qr(){if(!je)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return je}var xr,je;async function en(e,t){const r=Qr(),n=await r.getProduct(e);if(!n.variants.edges.length)throw new Error("Product has no variants");const s=[{variantId:n.variants.edges[0].node.id,quantity:1}],a=await r.createCheckout(s);if(t&&typeof localStorage<"u"){const l={checkoutId:a.id,bookSlug:t,createdAt:Date.now()};localStorage.setItem(rn,JSON.stringify(l))}return a.webUrl}function tn(e){return e.webUrl}var rn;async function nn(e,t){const r={bookSlug:e,orderId:t==null?void 0:t.orderId,email:t==null?void 0:t.email,unlockedAt:Date.now()};await Vr(`${Te}${e}`,r),typeof localStorage<"u"&&localStorage.setItem(`${Te}${e}`,JSON.stringify(r))}async function on(e){if(typeof localStorage<"u"&&localStorage.getItem(`${Te}${e}`))return!0;try{return!!await wr(`${Te}${e}`)}catch{return!1}}async function sn(e){try{return await wr(`${Te}${e}`)||null}catch{return null}}async function an(e,t){const r=await sn(e);return!r||!r.orderId?!1:r.orderId===t}var Te,ln={};Jr(ln,{ShopifyClient:()=>xr,createCheckout:()=>en,createShopifyClient:()=>Zr,getCheckoutUrl:()=>tn,isContentUnlocked:()=>on,unlockContent:()=>nn,verifyPurchase:()=>an});function cn({prev:e,next:t}){return!e&&!t?null:i("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[i("div",{class:"pressy-nav-inner",children:[e?i("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[i("span",{class:"pressy-nav-direction",children:"Previous"}),i("span",{class:"pressy-nav-title",children:e.title})]}):i("div",{class:"pressy-nav-placeholder"}),t?i("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[i("span",{class:"pressy-nav-direction",children:"Next"}),i("span",{class:"pressy-nav-title",children:t.title})]}):i("div",{class:"pressy-nav-placeholder"})]}),i("style",{children:`
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
      `})]})}function kr(){const e=X(!1),t=X({x:0,y:0}),r=X(""),n=N(null);A(()=>{const l=()=>{const d=window.getSelection();if(!d||d.isCollapsed){e.value=!1;return}const c=d.toString().trim();if(c.length<5){e.value=!1;return}r.value=c;const u=d.getRangeAt(0).getBoundingClientRect();t.value={x:u.left+u.width/2,y:u.top-10},e.value=!0};return document.addEventListener("selectionchange",l),document.addEventListener("mouseup",l),()=>{document.removeEventListener("selectionchange",l),document.removeEventListener("mouseup",l)}},[]);const o=()=>{const l=encodeURIComponent(r.value),d=new URL(window.location.href);return d.hash=`:~:text=${l}`,d.toString()},s=async()=>{const l=o(),d=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:d,url:l}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${d}

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
      `})]}):null}function Sr(){const e=X(!navigator.onLine),t=X(!1);return A(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},n=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}},[]),t.value?i("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?i(me,{children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),i("span",{children:"You're offline"})]}):i(me,{children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),i("span",{children:"Back online"})]}),i("style",{children:`
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
      `})]}):null}function St({children:e,prevChapter:t,nextChapter:r,showDropCap:n=!0,paginationMode:o="scroll",onSaveProgress:s,onRestoreProgress:a,bookProgressPercent:l,initialContent:d,chapterMapData:c,currentChapterSlug:h,allChapters:u,bookBasePath:_,onChapterChange:f,mdxComponents:y}){return o==="paginated"?i(fn,{prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:s,onRestoreProgress:a,bookProgressPercent:l,initialContent:d,chapterMapData:c,currentChapterSlug:h,allChapters:u,bookBasePath:_,onChapterChange:f,mdxComponents:y,children:e}):i(un,{prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:s,onRestoreProgress:a,children:e})}function un({children:e,prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:o,onRestoreProgress:s}){const a=N(null);return A(()=>{s&&s().then(l=>{l&&l.scrollPosition>0&&window.scrollTo(0,l.scrollPosition)})},[]),A(()=>{if(!o)return;const l=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{o({page:0,totalPages:0,scrollPosition:window.scrollY})},500)};return window.addEventListener("scroll",l,{passive:!0}),()=>{window.removeEventListener("scroll",l),a.current&&clearTimeout(a.current)}},[o]),A(()=>{if(!o)return;const l=()=>{o({page:0,totalPages:0,scrollPosition:window.scrollY})};return window.addEventListener("beforeunload",l),()=>window.removeEventListener("beforeunload",l)},[o]),i("div",{class:"pressy-reader",children:[i("main",{class:"pressy-reader-main",children:i("article",{class:`pressy-prose ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:e})}),i(kr,{}),i(cn,{prev:t,next:r}),i(Sr,{}),i("style",{children:pn})]})}function dn({title:e}){return i("div",{class:"pressy-chapter-divider",children:i("h2",{class:"pressy-chapter-divider-title",children:e})})}function fn({children:e,prevChapter:t,nextChapter:r,showDropCap:n,onSaveProgress:o,onRestoreProgress:s,bookProgressPercent:a,initialContent:l,chapterMapData:d,currentChapterSlug:c,allChapters:h,bookBasePath:u,onChapterChange:_,mdxComponents:f}){const y=N(null),x=N(null),L=N(null),[g,$]=F(0),[S,V]=F(1),ie=N(!1),j=N(null),[W,ae]=F([]),[O,xe]=F([]),[R,K]=F(c||""),Je=N(new Set),B=!!(d&&l&&c&&h);A(()=>{if(B&&l&&c){const p=h.find(v=>v.slug===c);ae([{slug:c,title:(p==null?void 0:p.title)||c,Content:l}]),K(c)}},[]);const[$t,fe]=F(!1),[Pt,pe]=F(0),[Ct,G]=F(null),Ze=N(0),Et=N(0),Qe=N(0),et=N(0),Re=N(0),Ae=N(!1),ke=N(!1),Lt=te(()=>{if(!B)return;const p=L.current,v=x.current;if(!p||!v)return;const m=v.clientWidth;if(m===0)return;const b=p.querySelectorAll(".pressy-chapter-section"),w=[];b.forEach(k=>{const P=k.getAttribute("data-chapter-slug")||"",T=k.offsetLeft,H=k.scrollWidth,U=Math.floor(T/m),Q=Math.max(U,Math.ceil((T+H)/m)-1);w.push({slug:P,startPage:U,endPage:Q})}),xe(w)},[B]),le=te(()=>{const p=L.current,v=x.current;if(!p||!v)return;const m=v.clientWidth;if(m===0)return;p.style.columnWidth=`${m}px`,p.scrollWidth;const b=Math.max(1,Math.round(p.scrollWidth/m));V(b),$(w=>Math.min(w,b-1)),Lt()},[Lt]);A(()=>{const p=x.current;if(!p)return;const v=setTimeout(le,50),m=new ResizeObserver(()=>{le()});return m.observe(p),()=>{clearTimeout(v),m.disconnect()}},[le]),A(()=>{if(W.length>0){const p=setTimeout(le,50);return()=>clearTimeout(p)}},[W.length,le]),A(()=>{const p=L.current;if(!p)return;const v=p.querySelectorAll("img");if(v.length===0)return;const m=()=>le();return v.forEach(b=>{b.complete||(b.addEventListener("load",m),b.addEventListener("error",m))}),()=>{v.forEach(b=>{b.removeEventListener("load",m),b.removeEventListener("error",m)})}},[le,W.length]),A(()=>{if(new URLSearchParams(window.location.search).get("page")==="last"&&S>1){$(S-1),ie.current=!0;const v=new URL(window.location.href);v.searchParams.delete("page"),history.replaceState(null,"",v.pathname)}},[S]),A(()=>{const p=L.current,v=x.current;if(!p||!v)return;const b=g*v.clientWidth-Pt;$t?p.style.transition="none":p.style.transition="transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",p.style.transform=`translateX(-${b}px)`},[g,Pt,$t]),A(()=>{const p=L.current,v=x.current;if(!p||!v)return;const m=v.getBoundingClientRect();p.querySelectorAll("a[href], button, input, select, textarea, [tabindex]").forEach(w=>{const k=w.getBoundingClientRect();if(k.left>=m.left-1&&k.right<=m.right+1){const T=w.getAttribute("data-original-tabindex");T!==null&&(T===""?w.removeAttribute("tabindex"):w.setAttribute("tabindex",T),w.removeAttribute("data-original-tabindex"))}else w.hasAttribute("data-original-tabindex")||w.setAttribute("data-original-tabindex",w.getAttribute("tabindex")||""),w.setAttribute("tabindex","-1")})},[g,S]),A(()=>{var H;if(!B||!d||O.length===0)return;const p=O.find(U=>U.slug===R);if(!p||p.endPage-g>2)return;const{chapterOrder:m,chapterMap:b}=d,w=(H=W[W.length-1])==null?void 0:H.slug,k=m.indexOf(w);if(k===-1||k>=m.length-1)return;const P=m[k+1];if(Je.current.has(P)||W.some(U=>U.slug===P))return;Je.current.add(P);const T=b[P];T&&T().then(U=>{const Q=U.default,oe=h.find(ee=>ee.slug===P);ae(ee=>ee.some(ze=>ze.slug===P)?ee:[...ee,{slug:P,title:(oe==null?void 0:oe.title)||P,Content:Q}])}).catch(()=>{Je.current.delete(P)})},[g,R,O,B,d,W,h]),A(()=>{if(!B||O.length===0||!u)return;const p=O.find(w=>g>=w.startPage&&g<=w.endPage);if(!p||p.slug===R)return;const v=R;K(p.slug);const m=`${u}/${p.slug}`;history.replaceState(null,"",m);const b=h==null?void 0:h.find(w=>w.slug===p.slug);if(b&&(document.title=document.title.replace(/^[^|]+/,b.title+" ")),_&&v){const w=O.find(k=>k.slug===v);if(w){const k=w.endPage-w.startPage+1;_(v,k-1,k)}}},[g,O,R,B,u,h,_]),A(()=>{if(!(!o||!ie.current))return j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{if(B&&O.length>0){const p=O.find(v=>v.slug===R);if(p){const v=g-p.startPage,m=p.endPage-p.startPage+1;o({page:v,totalPages:m,scrollPosition:0})}}else o({page:g,totalPages:S,scrollPosition:0})},300),()=>{j.current&&clearTimeout(j.current)}},[g,S,o,B,O,R]),A(()=>{if(!o)return;const p=()=>{if(B&&O.length>0){const v=O.find(m=>m.slug===R);if(v){const m=g-v.startPage,b=v.endPage-v.startPage+1;o({page:m,totalPages:b,scrollPosition:0})}}else o({page:g,totalPages:S,scrollPosition:0})};return window.addEventListener("beforeunload",p),()=>window.removeEventListener("beforeunload",p)},[g,S,o,B,O,R]);const J=(()=>{var b;if(!B||!d)return r;const{chapterOrder:p}=d,v=(b=W[W.length-1])==null?void 0:b.slug;if(!(p.indexOf(v)<p.length-1))return u?{slug:u,title:"Table of Contents"}:r})(),Z=(()=>{var k;if(!B||!d)return t;const{chapterOrder:p}=d,v=(k=W[0])==null?void 0:k.slug,m=p.indexOf(v);if(m<=0)return t;const b=p[m-1],w=h==null?void 0:h.find(P=>P.slug===b);return{slug:`${u}/${b}?page=last`,title:(w==null?void 0:w.title)||b}})(),ce=te(p=>{const v=Math.max(0,Math.min(p,S-1));$(v)},[S]),he=te(()=>{if(g>=S-1){J&&(window.location.href=J.slug);return}ce(g+1)},[g,S,J,ce]),ve=te(()=>{if(g<=0){Z&&(window.location.href=Z.slug);return}ce(g-1)},[g,Z,ce]),[tt,_e]=F(!1),I=N(null),Tt=te(()=>{_e(!0),I.current&&clearTimeout(I.current),I.current=setTimeout(()=>_e(!1),3e3)},[]),Er=te(p=>{if(p.target.closest('a, button, input, select, textarea, [role="button"]'))return;const m=y.current;if(!m)return;const b=m.getBoundingClientRect(),w=p.clientX-b.left,k=b.width/3;w<k?ve():w>k*2?he():tt?(_e(!1),I.current&&clearTimeout(I.current)):Tt()},[he,ve,tt,Tt]),[Rt,Oe]=F(null),Lr=te(p=>{const v=y.current;if(!v)return;const m=v.getBoundingClientRect(),b=p.clientX-m.left,w=p.clientY-m.top,k=m.width/3;b<k?Oe("left"):b>k*2?Oe("right"):Oe(null),w>m.height*.75?(_e(!0),I.current&&clearTimeout(I.current)):(I.current&&clearTimeout(I.current),I.current=setTimeout(()=>_e(!1),600))},[]),Tr=te(()=>{Oe(null),I.current&&clearTimeout(I.current),I.current=setTimeout(()=>_e(!1),600)},[]);A(()=>{const p=v=>{const m=v.target.tagName;m==="INPUT"||m==="TEXTAREA"||m==="SELECT"||(v.key==="ArrowRight"||v.key===" "?(v.preventDefault(),he()):v.key==="ArrowLeft"?(v.preventDefault(),ve()):v.key==="Home"?(v.preventDefault(),ce(0)):v.key==="End"&&(v.preventDefault(),ce(S-1)))};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[he,ve,ce,S]),A(()=>{const p=y.current;if(!p)return;const v=k=>{const P=k.touches[0];Ze.current=P.clientX,Et.current=P.clientY,Qe.current=P.clientX,et.current=performance.now(),Re.current=0,Ae.current=!1,ke.current=!1},m=k=>{const P=k.touches[0],T=P.clientX-Ze.current,H=P.clientY-Et.current;if(!Ae.current)if(Math.abs(T)>Math.abs(H)&&Math.abs(T)>10)Ae.current=!0;else return Math.abs(H)>Math.abs(T)&&Math.abs(H)>10,void 0;k.preventDefault();const U=performance.now(),Q=U-et.current;if(Q>0){const rt=(P.clientX-Qe.current)/Q;Re.current=.6*rt+.4*Re.current}Qe.current=P.clientX,et.current=U;let oe=T;const ee=g===0,ze=g>=S-1;if(ee&&T>0||ze&&T<0){const rt=T>0?1:-1,Ar=Math.abs(T);oe=rt*Math.sqrt(Ar)*5,T>40&&ee&&Z?G("prev"):T<-40&&ze&&J?G("next"):G(null)}else G(null);ke.current=!0,fe(!0),pe(oe)},b=k=>{if(!Ae.current||!ke.current){fe(!1),pe(0),G(null);return}const P=k.changedTouches[0].clientX-Ze.current,T=Re.current,H=50,U=.3,Q=80,oe=g===0;if(g>=S-1&&P<-Q&&J){fe(!1),pe(0),G(null),window.location.href=J.slug;return}if(oe&&P>Q&&Z){fe(!1),pe(0),G(null),window.location.href=Z.slug;return}P<-H||T<-U?he():(P>H||T>U)&&ve(),ke.current=!1,fe(!1),pe(0),G(null)},w=()=>{ke.current=!1,fe(!1),pe(0),G(null)};return p.addEventListener("touchstart",v,{passive:!0}),p.addEventListener("touchmove",m,{passive:!1}),p.addEventListener("touchend",b,{passive:!0}),p.addEventListener("touchcancel",w,{passive:!0}),()=>{p.removeEventListener("touchstart",v),p.removeEventListener("touchmove",m),p.removeEventListener("touchend",b),p.removeEventListener("touchcancel",w)}},[g,S,he,ve,J,Z]),(()=>{if(!B||O.length===0)return{chapterPage:g,chapterTotalPages:S};const p=O.find(v=>v.slug===R);return p?{chapterPage:g-p.startPage,chapterTotalPages:p.endPage-p.startPage+1}:{chapterPage:g,chapterTotalPages:S}})();const Rr=(()=>{var T;if(!h||h.length===0)return S>1?g/(S-1)*100:100;const p=h.reduce((H,U)=>H+(U.wordCount||0),0);if(p===0)return 0;const v=((T=W[0])==null?void 0:T.slug)||R;let m=0,b=0,w=!1;for(const H of h)if(H.slug===v&&(w=!0),!w)m+=H.wordCount||0;else if(W.some(U=>U.slug===H.slug))b+=H.wordCount||0;else break;const k=S>1?g/(S-1):0,P=m+k*b;return Math.min(100,P/p*100)})();return i("div",{class:"pressy-reader pressy-reader--paginated",ref:y,onClick:Er,onMouseMove:Lr,onMouseLeave:Tr,children:[i("div",{class:"pressy-paginated-viewport",ref:x,children:i("article",{ref:L,class:`pressy-prose pressy-prose--paginated ${n?"":"no-drop-cap"}`,"data-drop-cap":n,children:B&&W.length>0?W.map(p=>i("section",{class:"pressy-chapter-section","data-chapter-slug":p.slug,children:[i(dn,{title:p.title}),i(p.Content,{components:f||{}})]},p.slug)):e})}),i("div",{class:`pressy-nav-arrow pressy-nav-arrow--prev ${Rt==="left"?"pressy-nav-arrow--visible":""}`,children:i("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:i("polyline",{points:"15 18 9 12 15 6"})})}),i("div",{class:`pressy-nav-arrow pressy-nav-arrow--next ${Rt==="right"?"pressy-nav-arrow--visible":""}`,children:i("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:i("polyline",{points:"9 6 15 12 9 18"})})}),Ct==="prev"&&Z&&i("div",{class:"pressy-chapter-hint pressy-chapter-hint--prev","aria-live":"polite",children:[i("span",{class:"pressy-chapter-hint-arrow",children:"←"}),i("span",{class:"pressy-chapter-hint-text",children:Z.title})]}),Ct==="next"&&J&&i("div",{class:"pressy-chapter-hint pressy-chapter-hint--next","aria-live":"polite",children:[i("span",{class:"pressy-chapter-hint-text",children:J.title}),i("span",{class:"pressy-chapter-hint-arrow",children:"→"})]}),i("div",{class:`pressy-page-footer ${tt?"pressy-page-footer--visible":""}`,children:i("div",{class:"pressy-progress-bar",children:i("div",{class:"pressy-progress-fill",style:{width:`${Rr}%`}})})}),i(kr,{}),i(Sr,{}),i("style",{children:hn})]})}var pn=`
  .pressy-reader {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .pressy-reader-main {
    flex: 1;
    padding: 2rem 0;
  }
`,hn=`
  html:has(.pressy-reader--paginated) body {
    margin: 0;
  }

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
  @media (hover: none) {
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
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem 1.5rem 1rem;
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
`,vn="pressy-cached-books";function jt(){try{const e=localStorage.getItem(vn);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function _n({bookSlug:e,chapterUrls:t,cachedBooks:r,cacheProgress:n,onDownload:o,onRemove:s}){var c;const a=X(jt().has(e)||r.value.has(e)),l=X(((c=n.value)==null?void 0:c.bookSlug)===e),d=X(null);return A(()=>{const h=()=>{var f;a.value=jt().has(e)||r.value.has(e),l.value=((f=n.value)==null?void 0:f.bookSlug)===e;const _=n.value;d.value=_&&_.bookSlug===e?Math.round(_.current/_.total*100):null},u=setInterval(h,500);return h(),()=>clearInterval(u)},[e]),a.value?i("div",{class:"pressy-download-book",children:[i("div",{class:"pressy-download-status",children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),i("span",{children:"Available offline"})]}),i("button",{class:"pressy-download-remove",onClick:()=>s(e),"aria-label":"Remove offline copy",children:"Remove"}),i("style",{children:st})]}):l.value?i("div",{class:"pressy-download-book",children:[i("div",{class:"pressy-download-progress",children:[i("div",{class:"pressy-download-bar",children:i("div",{class:"pressy-download-bar-fill",style:{width:`${d.value||0}%`}})}),i("span",{class:"pressy-download-percent",children:[d.value||0,"%"]})]}),i("style",{children:st})]}):i("div",{class:"pressy-download-book",children:[i("button",{class:"pressy-download-btn",onClick:()=>o(e,t),"aria-label":"Download for offline reading",children:[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:i("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),i("span",{children:"Download for offline"})]}),i("style",{children:st})]})}var st=`
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
`;function gn({chapters:e,basePath:t,bookSlug:r,loadAllProgress:n}){const[o,s]=F(new Map);A(()=>{n().then(_=>{const f=new Set(e.map(x=>x.slug)),y=new Map;for(const x of _)f.has(x.chapterSlug)&&y.set(x.chapterSlug,{page:x.page,totalPages:x.totalPages});s(y)})},[e,n]);const a=e.reduce((_,f)=>_+(f.wordCount||0),0);let l=0,d=0,c=0;for(const _ of e){const f=o.get(_.slug);if(!f)continue;const y=_.wordCount||0;f.totalPages>0&&f.page>=f.totalPages-1?(l+=y,d++,c++):f.page>0&&f.totalPages>0&&(l+=f.page/f.totalPages*y,c++)}const h=a>0?l/a*100:0,u=c>0;return i("div",{class:"pressy-book-progress-section",children:[u&&i("div",{class:"pressy-overall-progress",children:[i("div",{class:"pressy-overall-progress-bar",children:i("div",{class:"pressy-overall-progress-fill",style:{width:`${h}%`}})}),i("div",{class:"pressy-overall-progress-text",children:[Math.round(h),"% complete",i("span",{class:"pressy-overall-progress-detail",children:[d," of ",e.length," chapters"]})]})]}),i("nav",{class:"pressy-chapter-list",children:e.map(_=>{const f=o.get(_.slug),y=f&&f.totalPages>0&&f.page>=f.totalPages-1,x=f&&f.page>0&&!y;return i("a",{href:`${t}/books/${r}/${_.slug}`,class:`pressy-chapter-link ${y?"pressy-chapter--completed":""} ${x?"pressy-chapter--started":""}`,children:[i("span",{class:"pressy-chapter-order",children:[_.order,"."]}),i("span",{class:"pressy-chapter-title",children:_.title}),y&&i("span",{class:"pressy-chapter-badge pressy-chapter-badge--done",children:"Done"}),x&&f&&i("span",{class:"pressy-chapter-badge pressy-chapter-badge--reading",children:["p.",f.page+1,"/",f.totalPages]})]})})}),i("style",{children:mn})]})}var mn=`
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
`;function yn({id:e,children:t}){const r=X(!1);return i("span",{class:"pressy-footnote-wrapper",children:[i("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&i("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,i("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),i("style",{children:`
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
      `})]})}function bn({children:e,title:t}){return i("aside",{class:"pressy-aside",children:[t&&i("strong",{class:"pressy-aside-title",children:t}),i("div",{class:"pressy-aside-content",children:e}),i("style",{children:`
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
      `})]})}function Yt({src:e,alt:t,caption:r,wide:n,children:o}){return i("figure",{class:`pressy-figure ${n?"pressy-figure-wide":""}`,children:[i("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||o)&&i("figcaption",{class:"pressy-figure-caption",children:r||o}),i("style",{children:`
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
      `})]})}var wn={note:"📝",tip:"💡",warning:"⚠️",important:"❗"},xn={note:"Note",tip:"Tip",warning:"Warning",important:"Important"};function kn({type:e="note",title:t,children:r}){return i("div",{class:`pressy-callout pressy-callout-${e}`,children:[i("div",{class:"pressy-callout-header",children:[i("span",{class:"pressy-callout-icon",children:wn[e]}),i("strong",{class:"pressy-callout-title",children:t||xn[e]})]}),i("div",{class:"pressy-callout-content",children:r}),i("style",{children:`
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
      `})]})}function Xt({variant:e="asterisks"}){return i("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&i("span",{children:"* * *"}),e==="ornament"&&i("span",{children:"❧"}),i("style",{children:`
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
      `})]})}var Sn={Footnote:yn,Aside:bn,Figure:Yt,Callout:kn,SceneBreak:Xt,img:Yt,hr:Xt},$n={};function Ye(){return{...Sn,...$n}}var $r="pressy-cached-books",it=ne("online"),Xe=ne(null),at=ne(!1);function Pn(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem($r);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var Y=ne(Pn());typeof window<"u"&&(it.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{it.value="online"}),window.addEventListener("offline",()=>{it.value="offline"}));async function Cn(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const n=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",En),navigator.serviceWorker.controller?at.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{at.value=!0}),n.addEventListener("updatefound",()=>{const o=n.installing;o&&o.addEventListener("statechange",()=>{o.state==="activated"&&(at.value=!0)})}),n}catch(n){return console.error("Service worker registration failed:",n),null}}function Pe(){try{localStorage.setItem($r,JSON.stringify([...Y.value]))}catch{}}function En(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:n,total:o}=e.data;Xe.value={bookSlug:r,current:n,total:o}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;Xe.value=null;const n=new Set(Y.value);n.add(r),Y.value=n,Pe()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,n=new Set;for(const o of r){const s=o.match(/\/books\/([^/]+)/);s&&n.add(s[1])}Y.value=n,Pe()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,n=new Set(Y.value);n.delete(r),Y.value=n,Pe()}}async function Ln(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(o=>o.startsWith("http")?o:`${window.location.origin}${o}`);Xe.value={bookSlug:e,current:0,total:r.length};const n=new Set(Y.value);return n.add(e),Y.value=n,Pe(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}async function Tn(e){const t=new Set(Y.value);if(t.delete(e),Y.value=t,Pe(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),n=await r.keys();for(const o of n)o.url.includes(`/books/${e}`)&&await r.delete(o);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var qt=ne("/"),Rn=ne("light"),Vt=ne(!navigator.onLine),An="pressy",On=1,se="reading-progress",Kt="unlocks",Ue=null;async function Ge(){return Ue||new Promise((e,t)=>{const r=indexedDB.open(An,On);r.onerror=()=>t(r.error),r.onsuccess=()=>{Ue=r.result,e(Ue)},r.onupgradeneeded=n=>{const o=n.target.result;o.objectStoreNames.contains(se)||o.createObjectStore(se,{keyPath:"chapterSlug"}),o.objectStoreNames.contains(Kt)||o.createObjectStore(Kt,{keyPath:"bookSlug"})}})}async function Gt(e){const t=await Ge();return new Promise((r,n)=>{const a=t.transaction(se,"readwrite").objectStore(se).put(e);a.onsuccess=()=>r(),a.onerror=()=>n(a.error)})}async function zn(e){const t=await Ge();return new Promise((r,n)=>{const a=t.transaction(se,"readonly").objectStore(se).get(e);a.onsuccess=()=>r(a.result||null),a.onerror=()=>n(a.error)})}async function Ne(){const e=await Ge();return new Promise((t,r)=>{const s=e.transaction(se,"readonly").objectStore(se).getAll();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>r(s.error)})}function Jt(e){Rn.value=e,document.documentElement.setAttribute("data-theme",e),localStorage.setItem("pressy-theme",e)}function Mn(){const e=localStorage.getItem("pressy-theme");e?Jt(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&Jt("dark")}function Hn(){window.addEventListener("online",()=>{Vt.value=!1}),window.addEventListener("offline",()=>{Vt.value=!0})}function Pr(e,t=[]){const r=e.chapters.map(n=>`/books/${e.slug}/${n.slug}`);return i("div",{class:"pressy-home",children:[i("header",{class:"pressy-home-header",children:[i("h1",{children:e.metadata.title}),i("p",{class:"pressy-home-author",children:["by ",e.metadata.author]}),e.metadata.description&&i("p",{class:"pressy-home-desc",children:e.metadata.description})]}),i(_n,{bookSlug:e.slug,chapterUrls:r,cachedBooks:Y,cacheProgress:Xe,onDownload:Ln,onRemove:Tn}),i("section",{class:"pressy-home-section",children:[i("h2",{children:"Chapters"}),i(gn,{bookSlug:e.slug,chapters:e.chapters.map(n=>({slug:n.slug,title:n.title,order:n.order,wordCount:n.wordCount||0})),basePath:q,loadAllProgress:Ne})]}),t.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Articles"}),i("nav",{class:"pressy-chapter-list",children:t.map(n=>i("a",{href:`${q}/articles/${n.slug}`,class:"pressy-chapter-link",children:n.metadata.title}))})]}),i("style",{children:Cr})]})}function lt(e){var r,n;if(e.books.length===1)return Pr(e.books[0],e.articles);const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return i("div",{class:"pressy-home",children:[i("header",{class:"pressy-home-header",children:[i("h1",{children:t}),((n=e.books[0])==null?void 0:n.metadata.description)&&i("p",{class:"pressy-home-desc",children:e.books[0].metadata.description})]}),e.books.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Books"}),i("nav",{class:"pressy-chapter-list",children:e.books.map(o=>i("a",{href:`${q}/books/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),e.articles.length>0&&i("section",{class:"pressy-home-section",children:[i("h2",{children:"Articles"}),i("nav",{class:"pressy-chapter-list",children:e.articles.map(o=>i("a",{href:`${q}/articles/${o.slug}`,class:"pressy-chapter-link",children:o.metadata.title}))})]}),i("style",{children:Cr})]})}function ct(e,t,r,n,o){const s=e.chapters.reduce((d,c)=>d+(c.wordCount||0),0);if(s===0)return 0;const a=new Map(o.map(d=>[d.chapterSlug,d]));let l=0;for(const d of e.chapters){const c=d.wordCount||0;if(d.slug===t)n>0&&(l+=r/Math.max(1,n-1)*c);else{const h=a.get(d.slug);if(!h)continue;h.totalPages>0&&h.page>=h.totalPages-1?l+=c:h.page>0&&h.totalPages>0&&(l+=h.page/h.totalPages*c)}}return Math.min(100,l/s*100)}function Un({book:e,chapterSlug:t,chapter:r,prevChapter:n,nextChapter:o,paginationMode:s,Content:a,chapterMapData:l}){const[d,c]=F(void 0);A(()=>{Ne().then(f=>{const y=ct(e,t,0,0,f);c(y)})},[e,t]);const h=f=>{Gt({chapterSlug:t,page:f.page,totalPages:f.totalPages,scrollPosition:f.scrollPosition,timestamp:Date.now()}),f.totalPages>0&&Ne().then(y=>{const x=ct(e,t,f.page,f.totalPages,y);c(x)})},u=async()=>{const f=await zn(t);return f?{page:f.page,totalPages:f.totalPages,scrollPosition:f.scrollPosition}:null},_=(f,y,x)=>{Gt({chapterSlug:f,page:y,totalPages:x,scrollPosition:0,timestamp:Date.now()}),Ne().then(L=>{const g=ct(e,f,y,x,L);c(g)})};return A(()=>{if(n){const f=document.createElement("link");return f.rel="prefetch",f.href=n.slug,document.head.appendChild(f),()=>{document.head.removeChild(f)}}},[n]),i(St,{title:(r==null?void 0:r.title)||t,chapterSlug:t,prevChapter:n,nextChapter:o,paginationMode:s,onSaveProgress:h,onRestoreProgress:u,bookProgressPercent:d,initialContent:a,chapterMapData:l,currentChapterSlug:t,allChapters:e.chapters.map(f=>({slug:f.slug,title:f.title,wordCount:f.wordCount})),bookBasePath:`${q}/books/${e.slug}`,onChapterChange:_,mdxComponents:Ye(),children:i(a,{components:Ye()})})}function Wn(e,t,r,n,o){const s=t.split("/"),a=s[2],l=s[3],d=e.books.find(x=>x.slug===a),c=d?d.chapters.findIndex(x=>x.slug===l):-1,h=d==null?void 0:d.chapters[c],u=x=>`${q}/books/${a}/${x.slug}`,_=d&&c>0?{slug:u(d.chapters[c-1]),title:d.chapters[c-1].title}:d?{slug:`${q}/books/${a}`,title:d.metadata.title}:void 0,f=d&&c>=0&&c<d.chapters.length-1?{slug:u(d.chapters[c+1]),title:d.chapters[c+1].title}:d?{slug:`${q}/books/${a}`,title:d.metadata.title}:void 0,y=r;return d?i(Un,{book:d,chapterSlug:l,chapter:h,prevChapter:_,nextChapter:f,paginationMode:n,Content:y,chapterMapData:o}):i(St,{title:(h==null?void 0:h.title)||l,prevChapter:_,nextChapter:f,paginationMode:n,children:i(y,{components:Ye()})})}function Dn(e,t,r){const n=t.split("/")[2],o=e.articles.find(a=>a.slug===n),s=r;return i(St,{title:(o==null?void 0:o.metadata.title)||n,children:i(s,{components:Ye()})})}var Cr=`
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
`;function Nn(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,n=e.endsWith("/")?e.slice(0,-1):e;if(n===""||n==="/")return r.replace(/\/index\.html$/,"")||"";const o=r.indexOf(n);return o>0?r.slice(0,o):""}var q="";function In(e,t,r){var o;q=Nn(e.route),qt.value=e.route,Mn(),Hn(),Ge(),Cn(q),window.addEventListener("popstate",()=>{qt.value=window.location.pathname}),document.addEventListener("click",s=>{const a=s.target.closest("a");if(!a)return;const l=a.getAttribute("href");if(l&&!(l.startsWith("http")||l.startsWith("#"))&&l.startsWith(e.route+"#")){s.preventDefault();const d=l.slice(l.indexOf("#")),c=document.querySelector(d);c&&c.scrollIntoView({behavior:"smooth"});return}});let n;switch(e.routeType){case"home":n=lt(e.manifest);break;case"book":{const s=e.route.split("/")[2],a=e.manifest.books.find(l=>l.slug===s);n=a?Pr(a):i("div",{children:"Book not found"});break}case"chapter":n=t?Wn(e.manifest,e.route,t,(o=e.pagination)==null?void 0:o.defaultMode,r):i("div",{children:"Loading..."});break;case"article":n=t?Dn(e.manifest,e.route,t):i("div",{children:"Loading..."});break;case"books":n=lt(e.manifest);break;case"articles":n=lt(e.manifest);break;default:n=i("div",{children:"Page not found"})}Dr(n,document.getElementById("app"))}export{In as h,me as k,i as u};
