(this.webpackJsonpround2=this.webpackJsonpround2||[]).push([[0],{16:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(11),i=c.n(a),r=(c(16),c(6)),j=c(3),o=c(4),l=c(8),b=c(7),u=(c(22),c(0)),d=function(){var e=Object(n.useState)({hours:0,minutes:25,seconds:0}),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),i=Object(o.a)(a,2),d=i[0],O=i[1],h=Object(n.useState)(!1),m=Object(o.a)(h,2),x=m[0],g=m[1],p=Object(n.useState)(!1),v=Object(o.a)(p,2),f=v[0],N=v[1],k=c.hours,C=c.minutes,S=c.seconds,w=284*Math.PI,y=Object(n.useState)(0),I=Object(o.a)(y,2),F=I[0],D=I[1],M=Object(n.useState)(1),P=Object(o.a)(M,2),B=P[0],E=P[1],J=function(e){return function(t){var n=parseInt(t.target.value||0);!isNaN(n)&&n<=60&&n>=0&&s(Object(j.a)(Object(j.a)({},c),{},Object(r.a)({},e,n)))}},L=function(){g(!1),N(!1)},T=function(){L(),s(Object(j.a)(Object(j.a)({},c),{},{hours:0,minutes:0,seconds:0})),D(0),E(1)};return Object(n.useEffect)((function(){var e;return x?e=setInterval((function(){if(0!==S||0!==C||0!==k){var e,t=S-1,n=t<0?C-1:C,a=n<0?k-1:k;t<0&&(t=59),n<0&&(n=59),D(w-(e=(3600*a+60*n+t)/d*100)/100*w),e<66.67&&E(2),e<33.34&&E(3),0===e&&E(4),s(Object(j.a)(Object(j.a)({},c),{},{hours:a,minutes:n,seconds:t}))}else new Audio("/web-battle-round2/bell.mp3").play()}),1e3):clearInterval(e),function(){clearInterval(e)}})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"time-container",children:[Object(u.jsxs)("div",{className:"time-wrapper",children:[Object(u.jsx)("input",{type:"text",id:"hours",value:k,onChange:J("hours"),disabled:f}),Object(u.jsx)("span",{className:"time-label",children:"H"}),Object(u.jsx)("input",{type:"text",id:"minutes",value:C,onChange:J("minutes"),disabled:f}),Object(u.jsx)("span",{className:"time-label",children:"M"}),Object(u.jsx)("input",{type:"text",id:"seconds",value:S,onChange:J("seconds"),disabled:f}),Object(u.jsx)("span",{className:"time-label",children:"S"})]}),Object(u.jsxs)("div",{className:"time-controllers",children:[Object(u.jsx)("button",{onClick:function(){g(!0),N(!0),O(3600*k+60*C+S)},children:Object(u.jsx)(b.a,{icon:l.b})}),Object(u.jsx)("button",{onClick:L,children:Object(u.jsx)(b.a,{icon:l.a})}),Object(u.jsx)("button",{onClick:T,children:Object(u.jsx)(b.a,{icon:l.c})})]}),Object(u.jsx)("svg",{className:"progress-ring",width:"300",height:"300",children:Object(u.jsx)("circle",{className:"progress-ring__circle",stroke:"black",strokeWidth:"4",fill:"transparent",r:"142",cx:"150",cy:"150",strokeDasharray:"".concat(w," ").concat(w),strokeDashoffset:F})})]})}),Object(u.jsx)("div",{className:"vertical-divider"}),Object(u.jsx)("div",{className:"egg-container",children:Object(u.jsx)("img",{src:"/web-battle-round2"+"/egg".concat(B,".png"),alt:"egg",width:4===B?"270":"150",height:"260"})})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),O()}},[[24,1,2]]]);
//# sourceMappingURL=main.68326345.chunk.js.map