var de,m,nt,st,H,Ie,it,at,lt,Le,ke,xe,X={},ct=[],Mt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ue=Array.isArray;function T(e,t){for(var r in t)e[r]=t[r];return e}function ze(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function v(e,t,r){var o,n,s,i={};for(s in t)s=="key"?o=t[s]:s=="ref"?n=t[s]:i[s]=t[s];if(arguments.length>2&&(i.children=arguments.length>3?de.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)i[s]===void 0&&(i[s]=e.defaultProps[s]);return te(e,i,o,n,null)}function te(e,t,r,o,n){var s={type:e,props:t,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:n??++nt,__i:-1,__u:0};return n==null&&m.vnode!=null&&m.vnode(s),s}function M(e){return e.children}function V(e,t){this.props=e,this.context=t}function B(e,t){if(t==null)return e.__?B(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?B(e):null}function dt(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return dt(e)}}function Be(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!oe.__r++||Ie!=m.debounceRendering)&&((Ie=m.debounceRendering)||it)(oe)}function oe(){for(var e,t,r,o,n,s,i,d=1;H.length;)H.length>d&&H.sort(at),e=H.shift(),d=H.length,e.__d&&(r=void 0,o=void 0,n=(o=(t=e).__v).__e,s=[],i=[],t.__P&&((r=T({},o)).__v=o.__v+1,m.vnode&&m.vnode(r),Te(t.__P,r,o,t.__n,t.__P.namespaceURI,32&o.__u?[n]:null,s,n??B(o),!!(32&o.__u),i),r.__v=o.__v,r.__.__k[r.__i]=r,pt(s,r,i),o.__e=o.__=null,r.__e!=n&&dt(r)));oe.__r=0}function ut(e,t,r,o,n,s,i,d,u,c,f){var l,h,p,w,C,b,y,g=o&&o.__k||ct,P=t.length;for(u=At(r,t,g,u,P),l=0;l<P;l++)(p=r.__k[l])!=null&&(h=p.__i==-1?X:g[p.__i]||X,p.__i=l,b=Te(e,p,h,n,s,i,d,u,c,f),w=p.__e,p.ref&&h.ref!=p.ref&&(h.ref&&Pe(h.ref,null,p),f.push(p.ref,p.__c||w,p)),C==null&&w!=null&&(C=w),(y=!!(4&p.__u))||h.__k===p.__k?u=ft(p,u,e,y):typeof p.type=="function"&&b!==void 0?u=b:w&&(u=w.nextSibling),p.__u&=-7);return r.__e=C,u}function At(e,t,r,o,n){var s,i,d,u,c,f=r.length,l=f,h=0;for(e.__k=new Array(n),s=0;s<n;s++)(i=t[s])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=e.__k[s]=te(null,i,null,null,null):ue(i)?i=e.__k[s]=te(M,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=e.__k[s]=te(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[s]=i,u=s+h,i.__=e,i.__b=e.__b+1,d=null,(c=i.__i=Dt(i,r,u,l))!=-1&&(l--,(d=r[c])&&(d.__u|=2)),d==null||d.__v==null?(c==-1&&(n>f?h--:n<f&&h++),typeof i.type!="function"&&(i.__u|=4)):c!=u&&(c==u-1?h--:c==u+1?h++:(c>u?h--:h++,i.__u|=4))):e.__k[s]=null;if(l)for(s=0;s<f;s++)(d=r[s])!=null&&!(2&d.__u)&&(d.__e==o&&(o=B(d)),vt(d,d));return o}function ft(e,t,r,o){var n,s;if(typeof e.type=="function"){for(n=e.__k,s=0;n&&s<n.length;s++)n[s]&&(n[s].__=e,t=ft(n[s],t,r,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=B(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Dt(e,t,r,o){var n,s,i,d=e.key,u=e.type,c=t[r],f=c!=null&&(2&c.__u)==0;if(c===null&&d==null||f&&d==c.key&&u==c.type)return r;if(o>(f?1:0)){for(n=r-1,s=r+1;n>=0||s<t.length;)if((c=t[i=n>=0?n--:s++])!=null&&!(2&c.__u)&&d==c.key&&u==c.type)return i}return-1}function We(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Mt.test(t)?r:r+"px"}function Z(e,t,r,o,n){var s,i;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)r&&t in r||We(e.style,t,"");if(r)for(t in r)o&&r[t]==o[t]||We(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(lt,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=r,r?o?r.u=o.u:(r.u=Le,e.addEventListener(t,s?xe:ke,s)):e.removeEventListener(t,s?xe:ke,s);else{if(n=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Re(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Le++;else if(t.t<r.u)return;return r(m.event?m.event(t):t)}}}function Te(e,t,r,o,n,s,i,d,u,c){var f,l,h,p,w,C,b,y,g,P,O,q,F,Ue,J,j,he,z=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(u=!!(32&r.__u),s=[d=t.__e=r.__e]),(f=m.__b)&&f(t);e:if(typeof z=="function")try{if(y=t.props,g="prototype"in z&&z.prototype.render,P=(f=z.contextType)&&o[f.__c],O=f?P?P.props.value:f.__:o,r.__c?b=(l=t.__c=r.__c).__=l.__E:(g?t.__c=l=new z(y,O):(t.__c=l=new V(y,O),l.constructor=z,l.render=It),P&&P.sub(l),l.state||(l.state={}),l.__n=o,h=l.__d=!0,l.__h=[],l._sb=[]),g&&l.__s==null&&(l.__s=l.state),g&&z.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=T({},l.__s)),T(l.__s,z.getDerivedStateFromProps(y,l.__s))),p=l.props,w=l.state,l.__v=t,h)g&&z.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),g&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(g&&z.getDerivedStateFromProps==null&&y!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(y,O),t.__v==r.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(y,l.__s,O)===!1){for(t.__v!=r.__v&&(l.props=y,l.state=l.__s,l.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(D){D&&(D.__=t)}),q=0;q<l._sb.length;q++)l.__h.push(l._sb[q]);l._sb=[],l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(y,l.__s,O),g&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,w,C)})}if(l.context=O,l.props=y,l.__P=e,l.__e=!1,F=m.__r,Ue=0,g){for(l.state=l.__s,l.__d=!1,F&&F(t),f=l.render(l.props,l.state,l.context),J=0;J<l._sb.length;J++)l.__h.push(l._sb[J]);l._sb=[]}else do l.__d=!1,F&&F(t),f=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++Ue<25);l.state=l.__s,l.getChildContext!=null&&(o=T(T({},o),l.getChildContext())),g&&!h&&l.getSnapshotBeforeUpdate!=null&&(C=l.getSnapshotBeforeUpdate(p,w)),j=f,f!=null&&f.type===M&&f.key==null&&(j=ht(f.props.children)),d=ut(e,ue(j)?j:[j],t,r,o,n,s,i,d,u,c),l.base=t.__e,t.__u&=-161,l.__h.length&&i.push(l),b&&(l.__E=l.__=null)}catch(D){if(t.__v=null,u||s!=null)if(D.then){for(t.__u|=u?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;s[s.indexOf(d)]=null,t.__e=d}else{for(he=s.length;he--;)ze(s[he]);Se(t)}else t.__e=r.__e,t.__k=r.__k,D.then||Se(t);m.__e(D,t,r)}else s==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=Ut(r.__e,t,r,o,n,s,i,u,c);return(f=m.diffed)&&f(t),128&t.__u?void 0:d}function Se(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Se)}function pt(e,t,r){for(var o=0;o<r.length;o++)Pe(r[o],r[++o],r[++o]);m.__c&&m.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(s){s.call(n)})}catch(s){m.__e(s,n.__v)}})}function ht(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:ue(e)?e.map(ht):T({},e)}function Ut(e,t,r,o,n,s,i,d,u){var c,f,l,h,p,w,C,b=r.props||X,y=t.props,g=t.type;if(g=="svg"?n="http://www.w3.org/2000/svg":g=="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),s!=null){for(c=0;c<s.length;c++)if((p=s[c])&&"setAttribute"in p==!!g&&(g?p.localName==g:p.nodeType==3)){e=p,s[c]=null;break}}if(e==null){if(g==null)return document.createTextNode(y);e=document.createElementNS(n,g,y.is&&y),d&&(m.__m&&m.__m(t,s),d=!1),s=null}if(g==null)b===y||d&&e.data==y||(e.data=y);else{if(s=s&&de.call(e.childNodes),!d&&s!=null)for(b={},c=0;c<e.attributes.length;c++)b[(p=e.attributes[c]).name]=p.value;for(c in b)if(p=b[c],c!="children"){if(c=="dangerouslySetInnerHTML")l=p;else if(!(c in y)){if(c=="value"&&"defaultValue"in y||c=="checked"&&"defaultChecked"in y)continue;Z(e,c,null,p,n)}}for(c in y)p=y[c],c=="children"?h=p:c=="dangerouslySetInnerHTML"?f=p:c=="value"?w=p:c=="checked"?C=p:d&&typeof p!="function"||b[c]===p||Z(e,c,p,b[c],n);if(f)d||l&&(f.__html==l.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(l&&(e.innerHTML=""),ut(t.type=="template"?e.content:e,ue(h)?h:[h],t,r,o,g=="foreignObject"?"http://www.w3.org/1999/xhtml":n,s,i,s?s[0]:r.__k&&B(r,0),d,u),s!=null)for(c=s.length;c--;)ze(s[c]);d||(c="value",g=="progress"&&w==null?e.removeAttribute("value"):w!=null&&(w!==e[c]||g=="progress"&&!w||g=="option"&&w!=b[c])&&Z(e,c,w,b[c],n),c="checked",C!=null&&C!=e[c]&&Z(e,c,C,b[c],n))}return e}function Pe(e,t,r){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(n){m.__e(n,r)}}function vt(e,t,r){var o,n;if(m.unmount&&m.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||Pe(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(s){m.__e(s,t)}o.base=o.__P=null}if(o=e.__k)for(n=0;n<o.length;n++)o[n]&&vt(o[n],t,r||typeof e.type!="function");r||ze(e.__e),e.__c=e.__=e.__e=void 0}function It(e,t,r){return this.constructor(e,r)}function Bt(e,t,r){var o,n,s,i;t==document&&(t=document.documentElement),m.__&&m.__(e,t),n=(o=!1)?null:t.__k,s=[],i=[],Te(t,e=t.__k=v(M,null,[e]),n||X,X,t.namespaceURI,n?null:t.firstChild?de.call(t.childNodes):null,s,n?n.__e:t.firstChild,o,i),pt(s,e,i)}de=ct.slice,m={__e:function(e,t,r,o){for(var n,s,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((s=n.constructor)&&s.getDerivedStateFromError!=null&&(n.setState(s.getDerivedStateFromError(e)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,o||{}),i=n.__d),i)return n.__E=n}catch(d){e=d}throw e}},nt=0,st=function(e){return e!=null&&e.constructor===void 0},V.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=T({},this.state),typeof e=="function"&&(e=e(T({},r),this.props)),e&&T(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Be(this))},V.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Be(this))},V.prototype.render=M,H=[],it=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,at=function(e,t){return e.__v.__b-t.__v.__b},oe.__r=0,lt=/(PointerCapture)$|Capture$/i,Le=0,ke=Re(!1),xe=Re(!0);var ne,$,ve,Ne,$e=0,_t=[],k=m,Fe=k.__b,je=k.__r,Ve=k.diffed,Ye=k.__c,Ke=k.unmount,Xe=k.__;function mt(e,t){k.__h&&k.__h($,e,$e||t),$e=0;var r=$.__H||($.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function U(e,t){var r=mt(ne++,3);!k.__s&&yt(r.__H,t)&&(r.__=e,r.u=t,$.__H.__h.push(r))}function se(e){return $e=5,fe(function(){return{current:e}},[])}function fe(e,t){var r=mt(ne++,7);return yt(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function Wt(){for(var e;e=_t.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(re),e.__H.__h.forEach(Ce),e.__H.__h=[]}catch(t){e.__H.__h=[],k.__e(t,e.__v)}}k.__b=function(e){$=null,Fe&&Fe(e)},k.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Xe&&Xe(e,t)},k.__r=function(e){je&&je(e),ne=0;var t=($=e.__c).__H;t&&(ve===$?(t.__h=[],$.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(re),t.__h.forEach(Ce),t.__h=[],ne=0)),ve=$},k.diffed=function(e){Ve&&Ve(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(_t.push(t)!==1&&Ne===k.requestAnimationFrame||((Ne=k.requestAnimationFrame)||Rt)(Wt)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),ve=$=null},k.__c=function(e,t){t.some(function(r){try{r.__h.forEach(re),r.__h=r.__h.filter(function(o){return!o.__||Ce(o)})}catch(o){t.some(function(n){n.__h&&(n.__h=[])}),t=[],k.__e(o,r.__v)}}),Ye&&Ye(e,t)},k.unmount=function(e){Ke&&Ke(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(o){try{re(o)}catch(n){t=n}}),r.__H=void 0,t&&k.__e(t,r.__v))};var Ge=typeof requestAnimationFrame=="function";function Rt(e){var t,r=function(){clearTimeout(o),Ge&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(r,35);Ge&&(t=requestAnimationFrame(r))}function re(e){var t=$,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),$=t}function Ce(e){var t=$;e.__c=e.__(),$=t}function yt(e,t){return!e||e.length!==t.length||t.some(function(r,o){return r!==e[o]})}var Nt=Symbol.for("preact-signals");function Oe(){if(I>1)I--;else{for(var e,t=!1;Y!==void 0;){var r=Y;for(Y=void 0,Ee++;r!==void 0;){var o=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&wt(r))try{r.c()}catch(n){t||(e=n,t=!0)}r=o}}if(Ee=0,I--,t)throw e}}var _=void 0;function gt(e){var t=_;_=void 0;try{return e()}finally{_=t}}var Y=void 0,I=0,Ee=0,ie=0;function bt(e){if(_!==void 0){var t=e.n;if(t===void 0||t.t!==_)return t={i:0,S:e,p:_.s,n:void 0,t:_,e:void 0,x:void 0,r:t},_.s!==void 0&&(_.s.n=t),_.s=t,e.n=t,32&_.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=_.s,t.n=void 0,_.s.n=t,_.s=t),t}}function x(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}x.prototype.brand=Nt;x.prototype.h=function(){return!0};x.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:gt(function(){var o;(o=t.W)==null||o.call(t)}))};x.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,o=e.x;r!==void 0&&(r.x=o,e.e=void 0),o!==void 0&&(o.e=r,e.x=void 0),e===this.t&&(this.t=o,o===void 0&&gt(function(){var n;(n=t.Z)==null||n.call(t)}))}};x.prototype.subscribe=function(e){var t=this;return Me(function(){var r=t.value,o=_;_=void 0;try{e(r)}finally{_=o}},{name:"sub"})};x.prototype.valueOf=function(){return this.value};x.prototype.toString=function(){return this.value+""};x.prototype.toJSON=function(){return this.value};x.prototype.peek=function(){var e=_;_=void 0;try{return this.value}finally{_=e}};Object.defineProperty(x.prototype,"value",{get:function(){var e=bt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Ee>100)throw new Error("Cycle detected");this.v=e,this.i++,ie++,I++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Oe()}}}});function L(e,t){return new x(e,t)}function wt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function kt(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function xt(e){for(var t=e.s,r=void 0;t!==void 0;){var o=t.p;t.i===-1?(t.S.U(t),o!==void 0&&(o.n=t.n),t.n!==void 0&&(t.n.p=o)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=o}e.s=r}function A(e,t){x.call(this,void 0),this.x=e,this.s=void 0,this.g=ie-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}A.prototype=new x;A.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ie))return!0;if(this.g=ie,this.f|=1,this.i>0&&!wt(this))return this.f&=-2,!0;var e=_;try{kt(this),_=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return _=e,xt(this),this.f&=-2,!0};A.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}x.prototype.S.call(this,e)};A.prototype.U=function(e){if(this.t!==void 0&&(x.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};A.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(A.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=bt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function St(e,t){return new A(e,t)}function $t(e){var t=e.u;if(e.u=void 0,typeof t=="function"){I++;var r=_;_=void 0;try{t()}catch(o){throw e.f&=-2,e.f|=8,He(e),o}finally{_=r,Oe()}}}function He(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,$t(e)}function Ft(e){if(_!==this)throw new Error("Out-of-order effect");xt(this),_=e,this.f&=-2,8&this.f&&He(this),Oe()}function R(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}R.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};R.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,$t(this),kt(this),I++;var e=_;return _=this,Ft.bind(this,e)};R.prototype.N=function(){2&this.f||(this.f|=2,this.o=Y,Y=this)};R.prototype.d=function(){this.f|=8,1&this.f||He(this)};R.prototype.dispose=function(){this.d()};function Me(e,t){var r=new R(e,t);try{r.c()}catch(n){throw r.d(),n}var o=r.d.bind(r);return o[Symbol.dispose]=o,o}var pe,Q;function N(e,t){m[e]=t.bind(null,m[e]||function(){})}function ae(e){if(Q){var t=Q;Q=void 0,t()}Q=e&&e.S()}function Ct(e){var t=this,r=e.data,o=S(r);o.value=r;var n=fe(function(){for(var s=t.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return t.__$u.c=function(){var i,d=t.__$u.S(),u=n.value;d(),st(u)||((i=t.base)==null?void 0:i.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=u},St(function(){var i=o.value.value;return i===0?0:i===!0?"":i||""})},[]);return n.value}Ct.displayName="_st";Object.defineProperties(x.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Ct},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});N("__b",function(e,t){if(typeof t.type=="string"){var r,o=t.props;for(var n in o)if(n!=="children"){var s=o[n];s instanceof x&&(r||(t.__np=r={}),r[n]=s,o[n]=s.peek())}}e(t)});N("__r",function(e,t){e(t),ae();var r,o=t.__c;o&&(o.__$f&=-2,(r=o.__$u)===void 0&&(o.__$u=r=function(n){var s;return Me(function(){s=this}),s.c=function(){o.__$f|=1,o.setState({})},s}())),pe=o,ae(r)});N("__e",function(e,t,r,o){ae(),pe=void 0,e(t,r,o)});N("diffed",function(e,t){ae(),pe=void 0;var r;if(typeof t.type=="string"&&(r=t.__e)){var o=t.__np,n=t.props;if(o){var s=r.U;if(s)for(var i in s){var d=s[i];d!==void 0&&!(i in o)&&(d.d(),s[i]=void 0)}else r.U=s={};for(var u in o){var c=s[u],f=o[u];c===void 0?(c=jt(r,u,f,n),s[u]=c):c.o(f,n)}}}e(t)});function jt(e,t,r,o){var n=t in e&&e.ownerSVGElement===void 0,s=L(r);return{o:function(i,d){s.value=i,o=d},d:Me(function(){var i=s.value.value;o[t]!==i&&(o[t]=i,n?e[t]=i:i?e.setAttribute(t,i):e.removeAttribute(t))})}}N("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var o=r.U;if(o){r.U=void 0;for(var n in o){var s=o[n];s&&s.d()}}}}else{var i=t.__c;if(i){var d=i.__$u;d&&(i.__$u=void 0,d.d())}}e(t)});N("__h",function(e,t,r,o){(o<3||o===9)&&(t.__$f|=2),e(t,r,o)});V.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,o=r&&r.s!==void 0;for(var n in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(o||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(o||4&this.__$f)||3&this.__$f)return!0;for(var s in e)if(s!=="__source"&&e[s]!==this.props[s])return!0;for(var i in this.props)if(!(i in e))return!0;return!1};function S(e){return fe(function(){return L(e)},[])}function Vt(e){var t=se(e);return t.current=e,pe.__$f|=4,fe(function(){return St(function(){return t.current()})},[])}function Ae(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function Yt(e,t){let r;const o=()=>{if(r)return r;const n=indexedDB.open(e);return n.onupgradeneeded=()=>n.result.createObjectStore(t),r=Ae(n),r.then(s=>{s.onclose=()=>r=void 0},()=>{}),r};return(n,s)=>o().then(i=>s(i.transaction(t,n).objectStore(t)))}let _e;function Et(){return _e||(_e=Yt("keyval-store","keyval")),_e}function Lt(e,t=Et()){return t("readonly",r=>Ae(r.get(e)))}function Kt(e,t,r=Et()){return r("readwrite",o=>(o.put(t,e),Ae(o.transaction)))}var Xt=0;function a(e,t,r,o,n,s){t||(t={});var i,d,u=t;if("ref"in u)for(d in u={},t)d=="ref"?i=t[d]:u[d]=t[d];var c={type:e,props:u,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Xt,__i:-1,__u:0,__source:n,__self:s};if(typeof e=="function"&&(i=e.defaultProps))for(d in i)u[d]===void 0&&(u[d]=i[d]);return m.vnode&&m.vnode(c),c}var Gt=Object.defineProperty,qt=(e,t)=>{for(var r in t)Gt(e,r,{get:t[r],enumerable:!0})};function Jt(e){return le=new zt(e),le}function Zt(){if(!le)throw new Error("Shopify client not initialized. Call createShopifyClient first.");return le}var zt,le;async function Qt(e,t){const r=Zt(),o=await r.getProduct(e);if(!o.variants.edges.length)throw new Error("Product has no variants");const s=[{variantId:o.variants.edges[0].node.id,quantity:1}],i=await r.createCheckout(s);if(t&&typeof localStorage<"u"){const d={checkoutId:i.id,bookSlug:t,createdAt:Date.now()};localStorage.setItem(tr,JSON.stringify(d))}return i.webUrl}function er(e){return e.webUrl}var tr;async function rr(e,t){const r={bookSlug:e,orderId:t==null?void 0:t.orderId,email:t==null?void 0:t.email,unlockedAt:Date.now()};await Kt(`${G}${e}`,r),typeof localStorage<"u"&&localStorage.setItem(`${G}${e}`,JSON.stringify(r))}async function or(e){if(typeof localStorage<"u"&&localStorage.getItem(`${G}${e}`))return!0;try{return!!await Lt(`${G}${e}`)}catch{return!1}}async function nr(e){try{return await Lt(`${G}${e}`)||null}catch{return null}}async function sr(e,t){const r=await nr(e);return!r||!r.orderId?!1:r.orderId===t}var G,ir={};qt(ir,{ShopifyClient:()=>zt,createCheckout:()=>Qt,createShopifyClient:()=>Jt,getCheckoutUrl:()=>er,isContentUnlocked:()=>or,unlockContent:()=>rr,verifyPurchase:()=>sr});function ar({children:e,onPageChange:t}){const r=se(null),o=se(null),n=S(0),s=S(1);U(()=>{const u=()=>{if(!o.current||!r.current)return;const f=r.current.offsetWidth,l=o.current.scrollWidth,h=Math.ceil(l/f);s.value=Math.max(1,h),n.value>=s.value&&(n.value=s.value-1)};u();const c=new ResizeObserver(u);return r.current&&c.observe(r.current),()=>c.disconnect()},[e]);const i=u=>{const c=Math.max(0,Math.min(u,s.value-1));if(n.value=c,o.current&&r.current){const f=r.current.offsetWidth;o.current.scrollTo({left:c*f,behavior:"smooth"})}t==null||t(c,s.value)};U(()=>{const u=c=>{c.key==="ArrowRight"||c.key===" "?(c.preventDefault(),i(n.value+1)):c.key==="ArrowLeft"&&(c.preventDefault(),i(n.value-1))};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[]),U(()=>{if(!r.current)return;let u=0,c=0;const f=p=>{u=p.touches[0].clientX,c=p.touches[0].clientY},l=p=>{const w=p.changedTouches[0].clientX,C=p.changedTouches[0].clientY,b=u-w,y=c-C;Math.abs(b)>Math.abs(y)&&Math.abs(b)>50&&(b>0?i(n.value+1):i(n.value-1))},h=r.current;return h.addEventListener("touchstart",f,{passive:!0}),h.addEventListener("touchend",l,{passive:!0}),()=>{h.removeEventListener("touchstart",f),h.removeEventListener("touchend",l)}},[]);const d=Vt(()=>s.value<=1?100:Math.round((n.value+1)/s.value*100));return a("div",{class:"pressy-paginator",ref:r,children:[a("div",{class:"pressy-paginator-content",ref:o,children:a("article",{class:"pressy-prose","data-drop-cap":!0,children:e})}),a("div",{class:"pressy-paginator-controls",children:[a("button",{class:"pressy-page-btn pressy-page-prev",onClick:()=>i(n.value-1),disabled:n.value===0,"aria-label":"Previous page",children:a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),a("div",{class:"pressy-page-info",children:[a("span",{class:"pressy-page-number",children:[n.value+1," / ",s.value]}),a("div",{class:"pressy-progress-bar",children:a("div",{class:"pressy-progress-fill",style:{width:`${d.value}%`}})})]}),a("button",{class:"pressy-page-btn pressy-page-next",onClick:()=>i(n.value+1),disabled:n.value>=s.value-1,"aria-label":"Next page",children:a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})})]}),a("style",{children:`
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
      `})]})}function lr({prev:e,next:t}){return!e&&!t?null:a("nav",{class:"pressy-navigation","aria-label":"Chapter navigation",children:[a("div",{class:"pressy-nav-inner",children:[e?a("a",{href:e.slug,class:"pressy-nav-link pressy-nav-prev",children:[a("span",{class:"pressy-nav-direction",children:"Previous"}),a("span",{class:"pressy-nav-title",children:e.title})]}):a("div",{class:"pressy-nav-placeholder"}),t?a("a",{href:t.slug,class:"pressy-nav-link pressy-nav-next",children:[a("span",{class:"pressy-nav-direction",children:"Next"}),a("span",{class:"pressy-nav-title",children:t.title})]}):a("div",{class:"pressy-nav-placeholder"})]}),a("style",{children:`
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
      `})]})}function cr({items:e,onNavigate:t,activeSlug:r}){const o=n=>{const s=document.getElementById(n);s&&s.scrollIntoView({behavior:"smooth"}),t==null||t()};return a("nav",{class:"pressy-toc","aria-label":"Table of contents",children:[a("h2",{class:"pressy-toc-title",children:"Contents"}),a("ul",{class:"pressy-toc-list",children:e.map(n=>a("li",{class:`pressy-toc-item pressy-toc-level-${n.level}`,"data-active":r===n.slug,children:a("a",{href:`#${n.slug}`,onClick:s=>{s.preventDefault(),o(n.slug)},class:"pressy-toc-link",children:n.text})},n.slug))}),a("style",{children:`
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
      `})]})}function dr(){const e=S(!1),t=S({x:0,y:0}),r=S(""),o=se(null);U(()=>{const d=()=>{const u=window.getSelection();if(!u||u.isCollapsed){e.value=!1;return}const c=u.toString().trim();if(c.length<5){e.value=!1;return}r.value=c;const l=u.getRangeAt(0).getBoundingClientRect();t.value={x:l.left+l.width/2,y:l.top-10},e.value=!0};return document.addEventListener("selectionchange",d),document.addEventListener("mouseup",d),()=>{document.removeEventListener("selectionchange",d),document.removeEventListener("mouseup",d)}},[]);const n=()=>{const d=encodeURIComponent(r.value),u=new URL(window.location.href);return u.hash=`:~:text=${d}`,u.toString()},s=async()=>{const d=n(),u=`"${r.value}"`;if(navigator.share)try{await navigator.share({text:u,url:d}),e.value=!1;return}catch{}try{await navigator.clipboard.writeText(`${u}

${d}`),o.current&&(o.current.classList.add("copied"),setTimeout(()=>{var c;(c=o.current)==null||c.classList.remove("copied")},2e3))}catch(c){console.error("Failed to copy to clipboard:",c)}},i=async()=>{const d=n();try{await navigator.clipboard.writeText(d),o.current&&(o.current.classList.add("copied"),setTimeout(()=>{var u;(u=o.current)==null||u.classList.remove("copied")},2e3))}catch(u){console.error("Failed to copy link:",u)}};return e.value?a("div",{ref:o,class:"pressy-text-share",style:{left:`${t.value.x}px`,top:`${t.value.y}px`},children:[a("button",{class:"pressy-share-btn",onClick:s,"aria-label":"Share selected text",title:"Share quote",children:a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})})}),a("button",{class:"pressy-copy-link-btn",onClick:i,"aria-label":"Copy link to selected text",title:"Copy link",children:a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})})}),a("style",{children:`
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
      `})]}):null}var ur=["light","dark","sepia"];function fr(){const e=S(!1),t=S((typeof localStorage<"u"?localStorage.getItem("pressy-theme"):"light")||"light"),r=s=>{t.value=s,document.documentElement.setAttribute("data-theme",s),localStorage.setItem("pressy-theme",s),e.value=!1},o={light:"☀️",dark:"🌙",sepia:"📜"},n={light:"Light",dark:"Dark",sepia:"Sepia"};return a("div",{class:"pressy-theme-switcher",children:[a("button",{class:"pressy-theme-toggle",onClick:()=>e.value=!e.value,"aria-label":"Change theme","aria-expanded":e.value,children:a("span",{class:"pressy-theme-icon",children:o[t.value]})}),e.value&&a("div",{class:"pressy-theme-menu",role:"menu",children:ur.map(s=>a("button",{class:"pressy-theme-option",onClick:()=>r(s),role:"menuitem","data-active":t.value===s,children:[a("span",{class:"pressy-theme-icon",children:o[s]}),a("span",{class:"pressy-theme-label",children:n[s]})]},s))}),a("style",{children:`
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
      `})]})}function pr(){const e=S(!navigator.onLine),t=S(!1);return U(()=>{const r=()=>{e.value=!1,t.value=!0,setTimeout(()=>{t.value=!1},3e3)},o=()=>{e.value=!0,t.value=!0};return window.addEventListener("online",r),window.addEventListener("offline",o),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",o)}},[]),t.value?a("div",{class:`pressy-offline-indicator ${e.value?"offline":"online"}`,children:[e.value?a(M,{children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41L3.41 1.31z"})}),a("span",{children:"You're offline"})]}):a(M,{children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})}),a("span",{children:"Back online"})]}),a("style",{children:`
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
      `})]}):null}function Tt({children:e,title:t,bookTitle:r,chapterTitle:o,prevChapter:n,nextChapter:s,toc:i,mode:d="scroll",showDropCap:u=!0}){const c=S(!1),f=S(d);return a("div",{class:"pressy-reader","data-mode":f.value,children:[a("header",{class:"pressy-reader-header",children:[a("div",{class:"pressy-reader-header-left",children:r&&a("a",{href:"../",class:"pressy-book-link",children:r})}),a("div",{class:"pressy-reader-header-center",children:o&&a("span",{class:"pressy-chapter-title",children:o})}),a("div",{class:"pressy-reader-header-right",children:[i&&i.length>0&&a("button",{class:"pressy-toc-toggle",onClick:()=>c.value=!c.value,"aria-label":"Toggle table of contents",children:a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a("path",{d:"M3 4h14v2H3V4zm0 5h14v2H3V9zm0 5h14v2H3v-2z"})})}),a(fr,{}),a("button",{class:"pressy-mode-toggle",onClick:()=>{f.value=f.value==="scroll"?"paginated":"scroll"},"aria-label":`Switch to ${f.value==="scroll"?"paginated":"scroll"} mode`,children:f.value==="scroll"?a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a("path",{d:"M2 3h7v14H2V3zm9 0h7v14h-7V3z"})}):a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a("path",{d:"M3 3h14v14H3V3z"})})})]})]}),c.value&&i&&a("aside",{class:"pressy-toc-sidebar",children:a(cr,{items:i,onNavigate:()=>c.value=!1})}),a("main",{class:"pressy-reader-main",children:f.value==="paginated"?a(ar,{children:e}):a("article",{class:`pressy-prose ${u?"":"no-drop-cap"}`,"data-drop-cap":u,children:e})}),a(dr,{}),a(lr,{prev:n,next:s}),a(pr,{}),a("style",{children:`
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
      `})]})}var hr="pressy-cached-books";function qe(){try{const e=localStorage.getItem(hr);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function vr({bookSlug:e,chapterUrls:t,cachedBooks:r,cacheProgress:o,onDownload:n,onRemove:s}){var c;const i=S(qe().has(e)||r.value.has(e)),d=S(((c=o.value)==null?void 0:c.bookSlug)===e),u=S(null);return U(()=>{const f=()=>{var p;i.value=qe().has(e)||r.value.has(e),d.value=((p=o.value)==null?void 0:p.bookSlug)===e;const h=o.value;u.value=h&&h.bookSlug===e?Math.round(h.current/h.total*100):null},l=setInterval(f,500);return f(),()=>clearInterval(l)},[e]),i.value?a("div",{class:"pressy-download-book",children:[a("div",{class:"pressy-download-status",children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),a("span",{children:"Available offline"})]}),a("button",{class:"pressy-download-remove",onClick:()=>s(e),"aria-label":"Remove offline copy",children:"Remove"}),a("style",{children:me})]}):d.value?a("div",{class:"pressy-download-book",children:[a("div",{class:"pressy-download-progress",children:[a("div",{class:"pressy-download-bar",children:a("div",{class:"pressy-download-bar-fill",style:{width:`${u.value||0}%`}})}),a("span",{class:"pressy-download-percent",children:[u.value||0,"%"]})]}),a("style",{children:me})]}):a("div",{class:"pressy-download-book",children:[a("button",{class:"pressy-download-btn",onClick:()=>n(e,t),"aria-label":"Download for offline reading",children:[a("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),a("span",{children:"Download for offline"})]}),a("style",{children:me})]})}var me=`
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
`;function _r({id:e,children:t}){const r=S(!1);return a(M,{children:[a("button",{class:"pressy-footnote-ref",onClick:()=>r.value=!r.value,"aria-describedby":`footnote-${e}`,"aria-expanded":r.value,children:e}),r.value&&a("span",{class:"pressy-footnote-content",id:`footnote-${e}`,role:"tooltip",children:[t,a("button",{class:"pressy-footnote-close",onClick:()=>r.value=!1,"aria-label":"Close footnote",children:"×"})]}),a("style",{children:`
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
      `})]})}function Je({src:e,alt:t,caption:r,wide:o,children:n}){return a("figure",{class:`pressy-figure ${o?"pressy-figure-wide":""}`,children:[a("img",{src:e,alt:t||r||"",loading:"lazy",decoding:"async"}),(r||n)&&a("figcaption",{class:"pressy-figure-caption",children:r||n}),a("style",{children:`
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
      `})]})}function Ze({variant:e="asterisks"}){return a("div",{class:`pressy-scene-break pressy-scene-break-${e}`,role:"separator",children:[e==="asterisks"&&a("span",{children:"* * *"}),e==="ornament"&&a("span",{children:"❧"}),a("style",{children:`
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
      `})]})}var wr={Footnote:_r,Aside:mr,Figure:Je,Callout:br,SceneBreak:Ze,img:Je,hr:Ze},kr={};function Pt(){return{...wr,...kr}}var Ot="pressy-cached-books",ye=L("online"),ce=L(null),ge=L(!1);function xr(){if(typeof localStorage>"u")return new Set;try{const e=localStorage.getItem(Ot);if(e)return new Set(JSON.parse(e))}catch{}return new Set}var E=L(xr());typeof window<"u"&&(ye.value=navigator.onLine?"online":"offline",window.addEventListener("online",()=>{ye.value="online"}),window.addEventListener("offline",()=>{ye.value="offline"}));async function Sr(e=""){if(!("serviceWorker"in navigator))return console.warn("Service workers are not supported"),null;const t=e?`${e}/sw.js`:"/sw.js",r=e?`${e}/`:"/";try{const o=await navigator.serviceWorker.register(t,{scope:r});return navigator.serviceWorker.addEventListener("message",$r),navigator.serviceWorker.controller?ge.value=!0:navigator.serviceWorker.addEventListener("controllerchange",()=>{ge.value=!0}),o.addEventListener("updatefound",()=>{const n=o.installing;n&&n.addEventListener("statechange",()=>{n.state==="activated"&&(ge.value=!0)})}),o}catch(o){return console.error("Service worker registration failed:",o),null}}function K(){try{localStorage.setItem(Ot,JSON.stringify([...E.value]))}catch{}}function $r(e){const{type:t}=e.data;if(t==="CACHE_PROGRESS"){const{bookSlug:r,current:o,total:n}=e.data;ce.value={bookSlug:r,current:o,total:n}}if(t==="CACHE_COMPLETE"){const{bookSlug:r}=e.data;ce.value=null;const o=new Set(E.value);o.add(r),E.value=o,K()}if(t==="CACHE_STATUS"){const{cached:r}=e.data,o=new Set;for(const n of r){const s=n.match(/\/books\/([^/]+)/);s&&o.add(s[1])}E.value=o,K()}if(t==="CACHE_CLEARED"){const{bookSlug:r}=e.data,o=new Set(E.value);o.delete(r),E.value=o,K()}}async function Cr(e,t){if(!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)return console.warn("Service worker not available"),!1;const r=t.map(n=>n.startsWith("http")?n:`${window.location.origin}${n}`);ce.value={bookSlug:e,current:0,total:r.length};const o=new Set(E.value);return o.add(e),E.value=o,K(),navigator.serviceWorker.controller.postMessage({type:"CACHE_BOOK",bookSlug:e,urls:r}),!0}async function Er(e){const t=new Set(E.value);if(t.delete(e),E.value=t,K(),!("serviceWorker"in navigator)||!navigator.serviceWorker.controller)try{const r=await caches.open("pressy-offline-books"),o=await r.keys();for(const n of o)n.url.includes(`/books/${e}`)&&await r.delete(n);return!0}catch(r){return console.error("Failed to clear cache:",r),!1}return navigator.serviceWorker.controller.postMessage({type:"CLEAR_BOOK_CACHE",bookSlug:e}),!0}var Qe=L("/"),Lr=L("light"),De=L("scroll"),be=L(0),et=L(!navigator.onLine),zr="pressy",Tr=1,tt="reading-progress",rt="unlocks",ee=null;async function Pr(){return ee||new Promise((e,t)=>{const r=indexedDB.open(zr,Tr);r.onerror=()=>t(r.error),r.onsuccess=()=>{ee=r.result,e(ee)},r.onupgradeneeded=o=>{const n=o.target.result;n.objectStoreNames.contains(tt)||n.createObjectStore(tt,{keyPath:"chapterSlug"}),n.objectStoreNames.contains(rt)||n.createObjectStore(rt,{keyPath:"bookSlug"})}})}function ot(e){Lr.value=e,document.documentElement.setAttribute("data-theme",e),localStorage.setItem("pressy-theme",e)}function Or(){const e=localStorage.getItem("pressy-theme");e?ot(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&ot("dark")}function Hr(){const e=localStorage.getItem("pressy-pagination");e&&(De.value=e)}function Mr(){document.addEventListener("keydown",e=>{De.value==="paginated"&&(e.key==="ArrowRight"||e.key===" "?(e.preventDefault(),be.value++):e.key==="ArrowLeft"&&(e.preventDefault(),be.value>0&&be.value--))})}function Ar(){window.addEventListener("online",()=>{et.value=!1}),window.addEventListener("offline",()=>{et.value=!0})}function we(e){var r,o;const t=((r=e.books[0])==null?void 0:r.metadata.title)||"Library";return v("div",{class:"pressy-home"},v("header",{class:"pressy-home-header"},v("h1",null,t),((o=e.books[0])==null?void 0:o.metadata.description)&&v("p",{class:"pressy-home-desc"},e.books[0].metadata.description)),e.books.length>0&&v("section",{class:"pressy-home-section"},v("h2",null,"Chapters"),v("nav",{class:"pressy-chapter-list"},...e.books.flatMap(n=>n.chapters.map(s=>v("a",{href:`${W}/books/${n.slug}/${s.slug}`,class:"pressy-chapter-link"},v("span",{class:"pressy-chapter-order"},`${s.order}.`),v("span",null,s.title)))))),e.articles.length>0&&v("section",{class:"pressy-home-section"},v("h2",null,"Articles"),v("nav",{class:"pressy-chapter-list"},...e.articles.map(n=>v("a",{href:`${W}/articles/${n.slug}`,class:"pressy-chapter-link"},n.metadata.title)))),v("style",null,Ht))}function Dr(e){const t=e.chapters.map(r=>`/books/${e.slug}/${r.slug}`);return v("div",{class:"pressy-home"},v("header",{class:"pressy-home-header"},v("h1",null,e.metadata.title),v("p",{class:"pressy-home-author"},`by ${e.metadata.author}`),e.metadata.description&&v("p",{class:"pressy-home-desc"},e.metadata.description)),v(vr,{bookSlug:e.slug,chapterUrls:t,cachedBooks:E,cacheProgress:ce,onDownload:Cr,onRemove:Er}),v("section",{class:"pressy-home-section"},v("h2",null,"Chapters"),v("nav",{class:"pressy-chapter-list"},...e.chapters.map(r=>v("a",{href:`${W}/books/${e.slug}/${r.slug}`,class:"pressy-chapter-link"},v("span",{class:"pressy-chapter-order"},`${r.order}.`),v("span",null,r.title))))),v("style",null,Ht))}function Ur(e,t,r){const o=t.split("/"),n=o[2],s=o[3],i=e.books.find(h=>h.slug===n),d=i?i.chapters.findIndex(h=>h.slug===s):-1,u=i==null?void 0:i.chapters[d],c=h=>`${W}/books/${n}/${h.slug}`,f=i&&d>0?{slug:c(i.chapters[d-1]),title:i.chapters[d-1].title}:void 0,l=i&&d>=0&&d<i.chapters.length-1?{slug:c(i.chapters[d+1]),title:i.chapters[d+1].title}:void 0;return v(Tt,{title:(u==null?void 0:u.title)||s,bookTitle:i==null?void 0:i.metadata.title,prevChapter:f,nextChapter:l,mode:De.value,children:v(r,{components:Pt()})})}function Ir(e,t,r){const o=t.split("/")[2],n=e.articles.find(s=>s.slug===o);return v(Tt,{title:(n==null?void 0:n.metadata.title)||o,mode:"scroll",children:v(r,{components:Pt()})})}var Ht=`
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
`;function Br(e){const t=window.location.pathname,r=t.endsWith("/")?t.slice(0,-1):t,o=e.endsWith("/")?e.slice(0,-1):e;if(o===""||o==="/")return r.replace(/\/index\.html$/,"")||"";const n=r.indexOf(o);return n>0?r.slice(0,n):""}var W="";function Wr(e,t){W=Br(e.route),Qe.value=e.route,Or(),Hr(),Mr(),Ar(),Pr(),Sr(W),window.addEventListener("popstate",()=>{Qe.value=window.location.pathname}),document.addEventListener("click",o=>{const n=o.target.closest("a");if(!n)return;const s=n.getAttribute("href");if(s&&!(s.startsWith("http")||s.startsWith("#"))&&s.startsWith(e.route+"#")){o.preventDefault();const i=s.slice(s.indexOf("#")),d=document.querySelector(i);d&&d.scrollIntoView({behavior:"smooth"});return}});let r;switch(e.routeType){case"home":r=we(e.manifest);break;case"book":{const o=e.route.split("/")[2],n=e.manifest.books.find(s=>s.slug===o);r=n?Dr(n):v("div",null,"Book not found");break}case"chapter":r=t?Ur(e.manifest,e.route,t):v("div",null,"Loading...");break;case"article":r=t?Ir(e.manifest,e.route,t):v("div",null,"Loading...");break;case"books":r=we(e.manifest);break;case"articles":r=we(e.manifest);break;default:r=v("div",null,"Page not found")}Bt(r,document.getElementById("app"))}export{Wr as h,M as k,a as u};
