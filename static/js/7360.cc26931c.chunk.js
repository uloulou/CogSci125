"use strict";(self.webpackChunkparticles=self.webpackChunkparticles||[]).push([[7360],{7360:(t,s,i)=>{i.d(s,{EmittersCircleShapeGenerator:()=>o});var a=i(3532),e=i(4409);const h=.25,n=2*Math.PI;class r extends a.B{constructor(t,s,i,a){super(t,s,i,a)}async init(){}randomPosition(){const t=this.size,s=this.fill,i=this.position,[a,r]=[.5*t.width,.5*t.height],o=((t,s)=>{const i=(0,e.G0)()*h,a=Math.atan(s/t*Math.tan(n*i)),r=(0,e.G0)();return r<h?a:r<.5?Math.PI-a:r<.75?Math.PI+a:-a})(a,r),c=(u=o,(p=a)*(M=r)/Math.sqrt((M*Math.cos(u))**2+(p*Math.sin(u))**2)),l=s?c*Math.sqrt((0,e.G0)()):c;var p,M,u;return{position:{x:i.x+l*Math.cos(o),y:i.y+l*Math.sin(o)}}}}class o{generate(t,s,i,a){return new r(t,s,i,a)}}},3532:(t,s,i)=>{i.d(s,{B:()=>a});class a{constructor(t,s,i,a){this.position=t,this.size=s,this.fill=i,this.options=a}resize(t,s){this.position=t,this.size=s}}}}]);
//# sourceMappingURL=7360.cc26931c.chunk.js.map