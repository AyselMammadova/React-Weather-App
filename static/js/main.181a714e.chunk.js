(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(51)},28:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),u=(a(28),a(4)),o=a.n(u),p=a(18),s=a(5),i=a(19),m=a.n(i),d=(a(49),function(e){var t=e.city;return console.log(t),r.a.createElement("div",null,r.a.createElement("div",{className:"result"},r.a.createElement("h2",null,"Place: ",r.a.createElement("span",null,t.name)),r.a.createElement("h3",null,"Temp: ",r.a.createElement("span",null,t.main.temp," \xb0C")),r.a.createElement("h3",null,"Weather: ",r.a.createElement("span",null,t.weather[0].main)),r.a.createElement("h3",null,"Wind speed: ",r.a.createElement("span",null,t.wind.speed)),r.a.createElement("h3",null,"Country: ",r.a.createElement("span",null,t.sys.country))))});var h=function(){var e="469a2d487b18684def045a04c93e7a85",t=Object(n.useState)("Baku"),a=Object(s.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(),i=Object(s.a)(u,2),h=i[0],E=i[1];return Object(n.useEffect)(function(){function t(){return(t=Object(p.a)(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&appid=").concat(e,"&units=metric"));case 3:(a=t.sent)&&E(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[c]),r.a.createElement("div",{className:"App"},r.a.createElement("p",null,"Search place and see weather"),r.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)},type:"text",placeholder:"Type here..."}),h&&r.a.createElement(d,{city:h}))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)))}},[[20,2,1]]]);
//# sourceMappingURL=main.181a714e.chunk.js.map