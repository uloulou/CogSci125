"use strict";(self.webpackChunkparticles=self.webpackChunkparticles||[]).push([[6964],{6964:(t,o,i)=>{i.d(o,{Slower:()=>a});var s=i(4409);class n{constructor(){this.factor=3,this.radius=200}load(t){t&&(void 0!==t.factor&&(this.factor=t.factor),void 0!==t.radius&&(this.radius=t.radius))}}class a extends s.sJ{constructor(t){super(t)}clear(t,o,i){t.slow.inRange&&!i||(t.slow.factor=1)}init(){const t=this.container,o=t.actualOptions.interactivity.modes.slow;o&&(t.retina.slowModeRadius=o.radius*t.retina.pixelRatio)}interact(){}isEnabled(t){var o;const i=this.container,n=i.interactivity.mouse,a=(null!==(o=null===t||void 0===t?void 0:t.interactivity)&&void 0!==o?o:i.actualOptions.interactivity).events;return a.onHover.enable&&!!n.position&&(0,s.hn)("slow",a.onHover.mode)}loadModeOptions(t){t.slow||(t.slow=new n);for(var o=arguments.length,i=new Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];for(const n of i)t.slow.load(null===n||void 0===n?void 0:n.slow)}reset(t){t.slow.inRange=!1;const o=this.container,i=o.actualOptions,n=o.interactivity.mouse.position,a=o.retina.slowModeRadius,e=i.interactivity.modes.slow;if(!e||!a||a<0||!n)return;const r=t.getPosition(),c=(0,s.Yf)(n,r),l=c/a,d=e.factor,{slow:u}=t;c>a||(u.inRange=!0,u.factor=l/d)}}}}]);
//# sourceMappingURL=6964.07baa4d8.chunk.js.map