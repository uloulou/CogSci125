"use strict";(self.webpackChunkfireworks=self.webpackChunkfireworks||[]).push([[4304],{4304:(t,i,n)=>{n.d(i,{Connector:()=>l});var o=n(4409);class e{constructor(){this.opacity=.5}load(t){t&&void 0!==t.opacity&&(this.opacity=t.opacity)}}class s{constructor(){this.distance=80,this.links=new e,this.radius=60}load(t){t&&(void 0!==t.distance&&(this.distance=t.distance),this.links.load(t.links),void 0!==t.radius&&(this.radius=t.radius))}}const a=0,c=1;function r(t,i,n,e){const s=t.actualOptions.interactivity.modes.connect;if(s)return function(t,i,n,e){const s=Math.floor(n.getRadius()/i.getRadius()),r=i.getFillColor(),d=n.getFillColor();if(!r||!d)return;const l=i.getPosition(),u=n.getPosition(),v=(0,o.EY)(r,d,i.getRadius(),n.getRadius()),h=t.createLinearGradient(l.x,l.y,u.x,u.y);return h.addColorStop(a,(0,o.LC)(r,e)),h.addColorStop((0,o.qE)(s,a,c),(0,o.xx)(v,e)),h.addColorStop(c,(0,o.LC)(d,e)),h}(i,n,e,s.links.opacity)}function d(t,i,n){t.canvas.draw((e=>{var s;const a=r(t,e,i,n);if(!a)return;const c=i.getPosition(),d=n.getPosition();!function(t,i,n,e,s){(0,o.V6)(t,e,s),t.lineWidth=i,t.strokeStyle=n,t.stroke()}(e,null!==(s=i.retina.linksWidth)&&void 0!==s?s:0,a,c,d)}))}class l extends o.sJ{constructor(t){super(t)}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.connect;i&&(t.retina.connectModeDistance=i.distance*t.retina.pixelRatio,t.retina.connectModeRadius=i.radius*t.retina.pixelRatio)}interact(){const t=this.container;if(t.actualOptions.interactivity.events.onHover.enable&&"pointermove"===t.interactivity.status){const i=t.interactivity.mouse.position,{connectModeDistance:n,connectModeRadius:o}=t.retina;if(!n||n<0||!o||o<0||!i)return;const e=Math.abs(o),s=t.particles.quadTree.queryCircle(i,e,(t=>this.isEnabled(t)));s.forEach(((i,o)=>{const e=i.getPosition();for(const a of s.slice(o+1)){const o=a.getPosition(),s=Math.abs(n),c=Math.abs(e.x-o.x),r=Math.abs(e.y-o.y);c<s&&r<s&&d(t,i,a)}}))}}isEnabled(t){var i;const n=this.container,e=n.interactivity.mouse,s=(null!==(i=null===t||void 0===t?void 0:t.interactivity)&&void 0!==i?i:n.actualOptions.interactivity).events;return!(!s.onHover.enable||!e.position)&&(0,o.hn)("connect",s.onHover.mode)}loadModeOptions(t){t.connect||(t.connect=new s);for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];for(const e of n)t.connect.load(null===e||void 0===e?void 0:e.connect)}reset(){}}}}]);
//# sourceMappingURL=4304.51b47e09.chunk.js.map