(()=>{"use strict";var e,t,n,r,o,i,f={4762:(e,t,n)=>{n.d(t,{IS_FIREFOX:()=>f,IS_SAFARI:()=>i});var r=n(6761);const o=navigator?navigator.userAgent:null,i=(navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),navigator.userAgent.toLowerCase().indexOf("android"),/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),(/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&r.Z.MSStream,!!("safari"in r.Z)||!(!o||!(/\b(iPad|iPhone|iPod)\b/.test(o)||o.match("Safari")&&!o.match("Chrome")))),f=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;navigator.maxTouchPoints>0&&navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i)},6318:(e,t,n)=>{n(690);var r=n(4736),o=n.n(r);o()(Number.MAX_SAFE_INTEGER);const i=o()(o()[2]).pow(64),f=i.divide(o()[2]);function a(e,t=256){return o().fromArray(e instanceof Uint8Array?[...e]:e,t)}function c(e){return new Uint8Array(e.toArray(256).value)}function s(e,t,n){const r=a(e),o=a(t),i=a(n);return c(r.modPow(o,i))}var u=n(745),h=n.n(u),l=n(6761),d=n(8630);function y(e){const t=e.length,n=8*t;let r=o()(e[0]).and(127).shiftLeft(n-8);for(let i=1;i<t;++i){const t=n-8*(i+1),f=o()(e[i]);r=r.or(t?f.shiftLeft(t):f)}return r}const p=["1f609","1f60d","1f61b","1f62d","1f631","1f621","1f60e","1f634","1f635","1f608","1f62c","1f607","1f60f","1f46e","1f477","1f482","1f476","1f468","1f469","1f474","1f475","1f63b","1f63d","1f640","1f47a","1f648","1f649","1f64a","1f480","1f47d","1f4a9","1f525","1f4a5","1f4a4","1f442","1f440","1f443","1f445","1f444","1f44d","1f44e","1f44c","1f44a","270c","270b","1f450","1f446","1f447","1f449","1f448","1f64f","1f44f","1f4aa","1f6b6","1f3c3","1f483","1f46b","1f46a","1f46c","1f46d","1f485","1f3a9","1f451","1f452","1f45f","1f45e","1f460","1f455","1f457","1f456","1f459","1f45c","1f453","1f380","1f484","1f49b","1f499","1f49c","1f49a","1f48d","1f48e","1f436","1f43a","1f431","1f42d","1f439","1f430","1f438","1f42f","1f428","1f43b","1f437","1f42e","1f417","1f434","1f411","1f418","1f43c","1f427","1f425","1f414","1f40d","1f422","1f41b","1f41d","1f41c","1f41e","1f40c","1f419","1f41a","1f41f","1f42c","1f40b","1f410","1f40a","1f42b","1f340","1f339","1f33b","1f341","1f33e","1f344","1f335","1f334","1f333","1f31e","1f31a","1f319","1f30e","1f30b","26a1","2614","2744","26c4","1f300","1f308","1f30a","1f393","1f386","1f383","1f47b","1f385","1f384","1f381","1f388","1f52e","1f3a5","1f4f7","1f4bf","1f4bb","260e","1f4e1","1f4fa","1f4fb","1f509","1f514","23f3","23f0","231a","1f512","1f511","1f50e","1f4a1","1f526","1f50c","1f50b","1f6bf","1f6bd","1f527","1f528","1f6aa","1f6ac","1f4a3","1f52b","1f52a","1f48a","1f489","1f4b0","1f4b5","1f4b3","2709","1f4eb","1f4e6","1f4c5","1f4c1","2702","1f4cc","1f4ce","2712","270f","1f4d0","1f4da","1f52c","1f52d","1f3a8","1f3ac","1f3a4","1f3a7","1f3b5","1f3b9","1f3bb","1f3ba","1f3b8","1f47e","1f3ae","1f0cf","1f3b2","1f3af","1f3c8","1f3c0","26bd","26be","1f3be","1f3b1","1f3c9","1f3b3","1f3c1","1f3c7","1f3c6","1f3ca","1f3c4","2615","1f37c","1f37a","1f377","1f374","1f355","1f354","1f35f","1f357","1f371","1f35a","1f35c","1f361","1f373","1f35e","1f369","1f366","1f382","1f370","1f36a","1f36b","1f36d","1f36f","1f34e","1f34f","1f34a","1f34b","1f352","1f347","1f349","1f353","1f351","1f34c","1f350","1f34d","1f346","1f345","1f33d","1f3e1","1f3e5","1f3e6","26ea","1f3f0","26fa","1f3ed","1f5fb","1f5fd","1f3a0","1f3a1","26f2","1f3a2","1f6a2","1f6a4","2693","1f680","2708","1f681","1f682","1f68b","1f68e","1f68c","1f699","1f697","1f695","1f69b","1f6a8","1f694","1f692","1f691","1f6b2","1f6a0","1f69c","1f6a6","26a0","1f6a7","26fd","1f3b0","1f5ff","1f3aa","1f3ad","1f1ef-1f1f5","1f1f0-1f1f7","1f1e9-1f1ea","1f1e8-1f1f3","1f1fa-1f1f8","1f1eb-1f1f7","1f1ea-1f1f8","1f1ee-1f1f9","1f1f7-1f1fa","1f1ec-1f1e7","0031-20e3","0032-20e3","0033-20e3","0034-20e3","0035-20e3","0036-20e3","0037-20e3","0038-20e3","0039-20e3","0030-20e3","1f51f","2757","2753","2665","2666","1f4af","1f517","1f531","1f534","1f535","1f536","1f537"];function v(e){if(!crypto||!("getRandomValues"in crypto))throw new Error("NO_SECURE_RANDOM");return crypto.getRandomValues(e),e}var g=n(4903);function w(e,t=16,n,r=!1,o=!1){const i=e.byteLength||e.length,f=r?t-i:t-i%t;if(f>0&&f<t){const t=new Uint8Array(f);if(n)for(let e=0;e<f;++e)t[e]=0;else v(t);return e instanceof ArrayBuffer?(o?(0,g.Z)(t,e):(0,g.Z)(e,t)).buffer:e instanceof Uint8Array?o?(0,g.Z)(t,e):(0,g.Z)(e,t):o?[...t].concat(e):e.concat([...t])}return e}function b(e){const t=e.length,n=new Uint8Array(Math.ceil(t/2));let r=0;t%2&&(n[r++]=parseInt(e.charAt(0),16));for(let o=r;o<t;o+=2)n[r++]=parseInt(e.substr(o,2),16);return n}function m(e){return e instanceof Uint8Array?e:"string"==typeof e?(new TextEncoder).encode(e):new Uint8Array(e)}var A=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function f(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(f,a)}c((r=r.apply(e,t||[])).next())}))},k=new Uint8Array(256),S=new Uint8Array(256),U=new Uint32Array(256),P=new Uint32Array(256),Z=new Uint32Array(256),C=new Uint32Array(256),K=new Uint32Array(256),x=new Uint32Array(256),E=new Uint32Array(256),F=new Uint32Array(256);function L(e){if(e instanceof Uint32Array)return e;if("string"==typeof e){if(e.length%4!=0)for(var t=e.length%4;t<=4;t++)e+="\0x00";var n=new Uint32Array(e.length/4);for(t=0;t<e.length;t+=4)n[t/4]=(o=t,(r=e).charCodeAt(o)<<24^r.charCodeAt(o+1)<<16^r.charCodeAt(o+2)<<8^r.charCodeAt(o+3));return n}var r,o;if(e instanceof Uint8Array){for(n=new Uint32Array(e.length/4),t=0;t<e.length;t+=4)n[t/4]=e[t]<<24^e[t+1]<<16^e[t+2]<<8^e[t+3];return n}throw new Error("Unable to create 32-bit words")}function _(e,t,n){void 0===n&&(n=e);for(var r=0;r<e.length;r++)n[r]=e[r]^t[r]}!function(){for(var e,t,n,r,o,i=new Uint8Array(256),f=new Uint8Array(256),a=0,c=0,s=0;s<256;s++)i[s]=s<<1^283*(s>>7),f[i[s]^s]=s;for(;!k[a];a^=e||1)n=(n=c^c<<1^c<<2^c<<3^c<<4)>>8^255&n^99,k[a]=n,S[n]=a,o=16843009*i[t=i[e=i[a]]]^65537*t^257*e^16843008*a,r=257*i[n]^16843008*n,U[a]=r=r<<24^r>>>8,P[a]=r=r<<24^r>>>8,Z[a]=r=r<<24^r>>>8,C[a]=r=r<<24^r>>>8,K[n]=o=o<<24^o>>>8,x[n]=o=o<<24^o>>>8,E[n]=o=o<<24^o>>>8,F[n]=o=o<<24^o>>>8,c=f[c]||1}();var O=function(){function e(e){var t=L(e);if(4!==t.length&&6!==t.length&&8!==t.length)throw new Error("Invalid key size");this.encKey=new Uint32Array(4*t.length+28),this.decKey=new Uint32Array(4*t.length+28),this.encKey.set(t);for(var n,r=1,o=t.length;o<4*t.length+28;o++)n=this.encKey[o-1],(o%t.length==0||8===t.length&&o%t.length==4)&&(n=k[n>>>24]<<24^k[n>>16&255]<<16^k[n>>8&255]<<8^k[255&n],o%t.length==0&&(n=n<<8^n>>>24^r<<24,r=r<<1^283*(r>>7))),this.encKey[o]=this.encKey[o-t.length]^n;for(var i=0;o;i++,o--)n=this.encKey[3&i?o:o-4],this.decKey[i]=o<=4||i<4?n:K[k[n>>>24]]^x[k[n>>16&255]]^E[k[n>>8&255]]^F[k[255&n]]}return e.prototype.encrypt=function(e){for(var t,n,r,o=L(e),i=new Uint32Array(4),f=o[0]^this.encKey[0],a=o[1]^this.encKey[1],c=o[2]^this.encKey[2],s=o[3]^this.encKey[3],u=this.encKey.length/4-2,h=4,l=0;l<u;l++)t=U[f>>>24]^P[a>>16&255]^Z[c>>8&255]^C[255&s]^this.encKey[h],n=U[a>>>24]^P[c>>16&255]^Z[s>>8&255]^C[255&f]^this.encKey[h+1],r=U[c>>>24]^P[s>>16&255]^Z[f>>8&255]^C[255&a]^this.encKey[h+2],s=U[s>>>24]^P[f>>16&255]^Z[a>>8&255]^C[255&c]^this.encKey[h+3],f=t,a=n,c=r,h+=4;for(l=0;l<4;l++)i[l]=k[f>>>24]<<24^k[a>>16&255]<<16^k[c>>8&255]<<8^k[255&s]^this.encKey[h++],t=f,f=a,a=c,c=s,s=t;return i},e.prototype.decrypt=function(e){for(var t,n,r,o=L(e),i=new Uint32Array(4),f=o[0]^this.decKey[0],a=o[3]^this.decKey[1],c=o[2]^this.decKey[2],s=o[1]^this.decKey[3],u=this.decKey.length/4-2,h=4,l=0;l<u;l++)t=K[f>>>24]^x[a>>16&255]^E[c>>8&255]^F[255&s]^this.decKey[h],n=K[a>>>24]^x[c>>16&255]^E[s>>8&255]^F[255&f]^this.decKey[h+1],r=K[c>>>24]^x[s>>16&255]^E[f>>8&255]^F[255&a]^this.decKey[h+2],s=K[s>>>24]^x[f>>16&255]^E[a>>8&255]^F[255&c]^this.decKey[h+3],f=t,a=n,c=r,h+=4;for(l=0;l<4;l++)i[3&-l]=S[f>>>24]<<24^S[a>>16&255]<<16^S[c>>8&255]<<8^S[255&s]^this.decKey[h++],t=f,f=a,a=c,c=s,s=t;return i},e}(),z=function(){function e(e,t,n){void 0===n&&(n=16),this.key=L(e),this.iv=L(t),this.cipher=new O(e),this.blockSize=n/4}return e.prototype.encrypt=function(e,t){for(var n=L(e),r=t||new Uint32Array(n.length),o=this.iv.subarray(this.blockSize,this.iv.length),i=this.iv.subarray(0,this.blockSize),f=new Uint32Array(this.blockSize),a=0;a<n.length;a+=this.blockSize){var c=n.subarray(a,a+this.blockSize);_(c,i,f);var s=this.cipher.encrypt(f);_(s,o),o=c,i=s;for(var u=a,h=0;u<n.length&&h<4;u++,h++)r[u]=s[h]}return r},e.prototype.decrypt=function(e,t){for(var n=L(e),r=t||new Uint32Array(n.length),o=this.iv.subarray(this.blockSize,this.iv.length),i=this.iv.subarray(0,this.blockSize),f=new Uint32Array(this.blockSize),a=0;a<r.length;a+=this.blockSize){var c=n.subarray(a,a+this.blockSize);_(c,o,f);var s=this.cipher.decrypt(f);_(s,i),i=c,o=s;for(var u=a,h=0;u<r.length&&h<4;u++,h++)r[u]=s[h]}return r},e}();function I(e){const t=m(e),n=[];for(let e=0,r=t.length;e<r;++e)n[e>>>2]|=t[e]<<24-e%4*8;return new Uint32Array(n)}function M(e,t,n,r=!0){return function(e){const t=new Uint8Array(e.byteLength);for(let n=0,r=4*e.length;n<r;++n)t[n]=e[n>>>2]>>>24-n%4*8&255;return t}(new z(I(t),I(n))[r?"encrypt":"decrypt"](I(e)))}!function(){function e(e,t,n){if(void 0===n&&(n=16),this.offset=0,this.key=L(e),this.counter=L(t),this.cipher=new O(e),this.blockSize=n/4,4!==this.counter.length)throw new Error("AES-CTR mode counter must be 16 bytes length")}e.prototype.encrypt=function(e,t){for(var n=L(e),r=t||new Uint32Array(n.length),o=this.offset,i=0;i<n.length;i+=this.blockSize){for(var f=this.cipher.encrypt(this.counter),a=i,c=o;a<n.length&&c<this.blockSize;a++,c++)r[a]=f[c]^n[a];n.length-i>=this.blockSize&&this.incrementCounter(),o&&(i-=o,o=0)}return this.offset=(this.offset+n.length%4)%4,r},e.prototype.decrypt=function(e,t){return this.encrypt(e,t)},e.prototype.incrementCounter=function(){for(var e=this.counter.length-1;e>=0&&!(++this.counter[e]<4294967295);e--);}}();const N={8:new Uint8Array(1),16:new Uint16Array(1),32:new Uint32Array(1)};function R(e,t){return o().randBetween(e,t,(()=>function(e){const t=N[e];return crypto.getRandomValues(t),t[0]}(32)/4294967295))}function B(e){const t=o()[2];if(e.remainder(t).isZero())return t;const n=o()(1e3);let r,i,f,a,c,s,u;do{r=R(o().one,e.minus(1))}while(r.isZero()||r.eq(e.minus(t)));f=R(o().one,e.minus(1)),c=o().one,s=o().one;const h=o()("FFFFFFFFFFFFFFFF",16).minus(e).plus(1),l=n=>((n=(n=n.pow(t).mod(e)).add(r)).lesser(r)&&(n=n.add(h)),n.mod(e));do{i=f;for(let e=0;o()(e).lesser(c);++e)f=l(f);let t=o().zero;do{a=f;const r=o().min(n,c.minus(t));for(let t=0;o()(t).lesser(r);++t)f=l(f),s=s.multiply(i.greater(f)?i.minus(f):f.minus(i)).mod(e);u=o().gcd(s,e),t=t.add(n)}while(t.lesser(c)&&u.eq(o().one));c=c.shiftLeft(o().one)}while(u.eq(o().one));if(u.eq(e))do{a=l(a),u=o().gcd(i.minus(a).abs(),e)}while(u.eq(o().one));return u}const T="undefined"!=typeof window&&"crypto"in window?window.crypto.subtle:self.crypto.subtle;var q=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function f(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(f,a)}c((r=r.apply(e,t||[])).next())}))};class j{constructor(e,t,n){this.mode=e,this.cryptoKey=t,this.queue=[],this.counter=a(n)}update(e){return q(this,void 0,void 0,(function*(){return new Promise((t=>{this.queue.push({data:e,resolve:t}),this.release()}))}))}release(){return q(this,void 0,void 0,(function*(){if(!this.releasing){for(this.releasing=!0;this.queue.length;){const{data:e,resolve:t}=this.queue.shift();t(yield this._update(e))}this.releasing=!1}}))}perform(e){return q(this,void 0,void 0,(function*(){return yield T[this.mode]({name:"AES-CTR",counter:w(c(this.counter),16,!0,!0,!0),length:128},this.cryptoKey,e)}))}_update(e){return q(this,void 0,void 0,(function*(){let t,n,r=e;if(this.leftLength){const e=this.leftLength,n=16-e,o=new Uint8Array(e).concat(r.slice(0,n)),i=yield this.perform(o);t=new Uint8Array(i.slice(e)),r=r.slice(n),this.counter=this.counter.add(1)}n=new Uint8Array(yield this.perform(r));const o=t?t.concat(n):n;let i=r.length;const f=i%16;i-=f;const a=i/16;return this.counter=this.counter.add(a),this.leftLength=f||void 0,o}))}}var D=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function f(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(f,a)}c((r=r.apply(e,t||[])).next())}))};const W=new Map;let $=-1;console.log("CryptoWorker start");const J={sha1:function(e){return T.digest("SHA-1",m(e)).then((e=>new Uint8Array(e)))},sha256:function(e){return T.digest("SHA-256",m(e)).then((e=>new Uint8Array(e)))},pbkdf2:function(e,t,n){return r=this,o=void 0,f=function*(){const r=yield T.importKey("raw",e,{name:"PBKDF2"},!1,["deriveBits"]);return T.deriveBits({name:"PBKDF2",salt:t,iterations:n,hash:{name:"SHA-512"}},r,512).then((e=>new Uint8Array(e)))},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{c(f.next(e))}catch(e){t(e)}}function a(e){try{c(f.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof i?r:new i((function(e){e(r)}))).then(n,a)}c((f=f.apply(r,o||[])).next())}));var r,o,i,f},"aes-encrypt":function(e,t,n){return M(w(e),t,n,!0)},"aes-decrypt":function(e,t,n){return M(e,t,n,!1)},"rsa-encrypt":function(e,t){return s(e,b(t.exponent),b(t.modulus))},factorize:function(e){let t=function(e){const t=a(e),n=[],r=[];let i=B(t);n.push(t.divide(i)),n.push(i);do{const e=n.pop();if(!e.eq(o().one))if(e.isPrime(!0)){r.push(e);for(let t=0;t<n.length;++t){let r=n[t];if(r.mod(e).isZero()){do{r=r.divide(e)}while(r.mod(e).isZero());n[t]=r}}}else i=B(e),n.push(e.divide(i)),n.push(i)}while(n.length);return r}(e);t.sort(((e,t)=>e.compare(t))),t.length>2&&(t=[t.splice(t.length-2,1)[0],t.reduce(((e,t)=>e.multiply(t)),o().one)]);const n=t[0],r=t[t.length-1];return(n.lesser(r)?[n,r]:[r,n]).map((e=>c(e)))},"mod-pow":s,gzipUncompress:function(e,t){return h().inflate(e,t?{to:"string"}:void 0)},computeSRP:function(e,t,n){return A(this,void 0,void 0,(function*(){const r=n?t.new_algo:t.current_algo,i=a(r.p),f=o()(r.g),s=yield function(e,t,n){return A(this,void 0,void 0,(function*(){let r=yield d.Z.invokeCrypto("sha256",(0,g.Z)(t,(new TextEncoder).encode(e),t));r=(0,g.Z)(n,r,n),r=yield d.Z.invokeCrypto("sha256",r);let o=yield d.Z.invokeCrypto("pbkdf2",new Uint8Array(r),t,1e5);return o=(0,g.Z)(n,o,n),r=yield d.Z.invokeCrypto("sha256",o),r}))}(e,r.salt1,r.salt2),u=o()(function(e){const t=e.length,n=new Array(t);for(let r=0;r<t;++r)n[r]=(e[r]<16?"0":"")+(e[r]||0).toString(16);return n.join("")}(s),16),h=function(e,t){return e instanceof Uint8Array||(e=m(e)),w(e,t,!0,!0,!0)},l=f.modPow(u,i),y=e=>{const t=new Uint8Array(e.length);for(let n=0;n<e.length;n+=4)t[n]=e[n+3],t[n+1]=e[n+2],t[n+2]=e[n+1],t[n+3]=e[n];return t};if(n)return h(c(l),256);const p=a(t.srp_B),v=h(c(i),256),b=h(c(f),256),k=h(c(p),256),S=a(yield d.Z.invokeCrypto("sha256",(0,g.Z)(v,b))).multiply(l).mod(i),U=(e,t)=>{const n=t.subtract(e);return!(n.isNegative()||n.bitLength().toJSNumber()<1984||e.bitLength().toJSNumber()<1984||Math.floor((e.bitLength().toJSNumber()+7)/8)>256)},{a:P,a_for_hash:Z,u:C}=yield(()=>A(this,void 0,void 0,(function*(){for(;;){const e=a(y(t.secure_random)),n=f.modPow(e,i);if(U(n,i)){const t=c(n),r=a(yield d.Z.invokeCrypto("sha256",(0,g.Z)(t,k)));if(!r.isZero()&&!r.isNegative())return{a:e,a_for_hash:t,u:r}}}})))();let K;K=p.greater(S)?p:p.add(i),K=K.subtract(S).mod(i);const x=C.multiply(u),E=P.add(x),F=K.modPow(E,i),L=yield d.Z.invokeCrypto("sha256",h(c(F),256));let _=yield d.Z.invokeCrypto("sha256",v);_=function(e,t){const n=e.length,r=new Uint8Array(n);for(let o=0;o<n;++o)r[o]=e[o]^t[o];return r}(_,yield d.Z.invokeCrypto("sha256",b));const O=(0,g.Z)(_,yield d.Z.invokeCrypto("sha256",r.salt1),yield d.Z.invokeCrypto("sha256",r.salt2),Z,k,L),z=yield d.Z.invokeCrypto("sha256",O);return{_:"inputCheckPasswordSRP",srp_id:t.srp_id,A:new Uint8Array(Z),M1:z}}))},"generate-dh":function(e){return t=this,n=void 0,i=function*(){const{p:t,g:n}=e,r=(e=>{for(;;){const t=v(new Uint8Array(e.length)),n=a(t);if(!n.greater(o().one))continue;const r=a(e);if(n.lesser(r.subtract(o().one)))return t}})(t),i=b(n.toString(16)),f=w(yield d.Z.invokeCrypto("mod-pow",i,r,t),256,!0,!0,!0);return{a:r,g_a:f,g_a_hash:yield d.Z.invokeCrypto("sha256",f),p:t}},new((r=void 0)||(r=Promise))((function(e,o){function f(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(f,a)}c((i=i.apply(t,n||[])).next())}));var t,n,r,i},"compute-dh-key":function(e,t,n){return r=this,o=void 0,s=function*(){const r=yield d.Z.invokeCrypto("mod-pow",e,t,n);var o;return{key:r,key_fingerprint:(o=a((yield d.Z.invokeCrypto("sha1",r)).slice(-8).reverse()),o.greater(f)?o.minus(i):o).toString(10)}},new((c=void 0)||(c=Promise))((function(e,t){function n(e){try{f(s.next(e))}catch(e){t(e)}}function i(e){try{f(s.throw(e))}catch(e){t(e)}}function f(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(n,i)}f((s=s.apply(r,o||[])).next())}));var r,o,c,s},"get-emojis-fingerprint":function(e,t){return n=this,r=void 0,i=function*(){const n=e.concat(t),r=yield d.Z.invokeCrypto("sha256",n),o=[],i=p.length;for(let e=0;e!=r.length;e+=8){const t=y(r.slice(e,e+8)).mod(i).toJSNumber(),n=p[t];o.push(n)}return o},new((o=void 0)||(o=Promise))((function(e,t){function f(e){try{c(i.next(e))}catch(e){t(e)}}function a(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(f,a)}c((i=i.apply(n,r||[])).next())}));var n,r,o,i},"aes-ctr-prepare":function({encKey:e,encIv:t,decKey:n,decIv:r}){return D(this,void 0,void 0,(function*(){const o=++$,i=[["encrypt",e],["decrypt",n]].map((([e,t])=>T.importKey("raw",t,{name:"AES-CTR"},!1,[e]))),[f,a]=yield Promise.all(i),c={enc:new j("encrypt",f,t.slice()),dec:new j("decrypt",a,r.slice())};return W.set(o,c),o}))},"aes-ctr-process":function({id:e,data:t,operation:n}){return D(this,void 0,void 0,(function*(){const r=W.get(e);return yield("encrypt"===n?r.enc:r.dec).update(t)}))},"aes-ctr-destroy":function(e){W.delete(e)}};d.Z.addEventListener("invoke",(({method:e,args:t})=>J[e](...t))),"undefined"!=typeof MessageChannel&&function(e,t,n){const r=n=>{e.attachPort(n),t&&t(n)};"undefined"!=typeof SharedWorkerGlobalScope?l.Z.addEventListener("connect",(e=>r(e.source))):r(l.Z)}(d.Z,(e=>{const t=new MessageChannel;d.Z.attachPort(t.port1),d.Z.invokeVoid("port",void 0,e,[t.port2])}))},5003:(e,t,n)=>{n.d(t,{kg:()=>d});var r,o=n(410),i=n(4762),f=n(1352),a=n(5289);!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Log=4]="Log",e[e.Debug=8]="Debug"}(r||(r={}));const c=[r.None,r.Error,r.Warn,r.Log,r.Debug],s=!(i.IS_SAFARI||i.IS_FIREFOX),u="[33m",h="[36m",l=[["debug",r.Debug],["info",r.Log],["warn",r.Warn],["error",r.Error],["assert",r.Error],["trace",r.Log],["group",r.Log],["groupCollapsed",r.Log],["groupEnd",r.Log]];function d(e,t=r.Log|r.Warn|r.Error,n=!1,i=""){let y;o.ZP||n||(t=r.Error),s?i||(f.SU?i=u:f.N5&&(i=h)):i="";let p=i;i=i?`%s ${i}%s`:"%s";const v=function(...n){return t&r.Log&&console.log(i,(0,a.Z)(),e,...n)};return l.forEach((([n,r])=>{v[n]=function(...o){return t&r&&console[n](i,(0,a.Z)(),e,...o)}})),v.setPrefix=function(t){y=t,e="["+t+"]"},v.setPrefix(e),v.setLevel=function(e){t=c.slice(0,e+1).reduce(((e,t)=>e|t),0)},v.bindPrefix=function(e){return d(`${y}] [${e}`,t,n,p)},v}}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return f[e].call(n.exports,n,n.exports,c),n.loaded=!0,n.exports}c.m=f,c.x=()=>{var e=c.O(void 0,[699,211,960],(()=>c(6318)));return c.O(e)},e=[],c.O=(t,n,r,o)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,r,o]=e[u],f=!0,a=0;a<n.length;a++)(!1&o||i>=o)&&Object.keys(c.O).every((e=>c.O[e](n[a])))?n.splice(a--,1):(f=!1,o<i&&(i=o));if(f){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,n)=>(c.f[n](e,t),t)),[])),c.u=e=>960===e?"960.7ae964ab6031f51a0275.bundle.js":{211:"npm.big-integer",699:"npm.pako"}[e]+"."+{211:"a7ea0f3283af2967a6ae",699:"f16d6f756c34f3914132"}[e]+".chunk.js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),t=c.u,n=c.e,r=new Map,o=new Map,c.u=function(e){return t(e)+(r.has(e)?"?"+r.get(e):"")},c.e=function(e){return n(e).catch((function(n){var i=o.has(e)?o.get(e):999999;if(i<1){var f=t(e);throw n.message="Loading chunk "+e+" failed after 999999 retries.\n("+f+")",n.request=f,n}return new Promise((function(t){setTimeout((function(){var n=Date.now();r.set(e,n),o.set(e,i-1),t(c.e(e))}),3e3)}))}))},(()=>{var e={589:1};c.f.i=(t,n)=>{e[t]||importScripts(c.p+c.u(t))};var t=this.webpackChunktweb=this.webpackChunktweb||[],n=t.push.bind(t);t.push=t=>{var[r,o,i]=t;for(var f in o)c.o(o,f)&&(c.m[f]=o[f]);for(i&&i(c);r.length;)e[r.pop()]=1;n(t)}})(),i=c.x,c.x=()=>Promise.all([699,211,960].map(c.e,c)).then(i),c.x()})();
//# sourceMappingURL=crypto.worker.291b2addb6b8e3a5f9e6.chunk.js.map