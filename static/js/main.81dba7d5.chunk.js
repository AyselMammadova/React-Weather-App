(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(51)},28:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),o=(a(28),a(4)),s=a.n(o),i=a(18),u=a(5),p=a(19),d=a.n(p),m=(a(49),function(e){var t=e.city;return console.log(t),c.a.createElement("div",null,c.a.createElement("div",{className:"w-[350px] rounded-md shadow mx-auto"},c.a.createElement("h2",{className:"text-5xl font-bold"},t.main.temp," \xb0C"),c.a.createElement("h1",{className:"text-3xl font-semibold"},t.name),c.a.createElement("h3",{className:"text-2xl"},t.weather[0].main),c.a.createElement("h4",{className:"text-2xl"},"Wind speed: ",t.wind.speed)))});var h=function(){var e="469a2d487b18684def045a04c93e7a85",t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(),p=Object(u.a)(o,2),h=p[0],x=p[1];return Object(n.useEffect)(function(){function t(){return(t=Object(i.a)(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,"&appid=").concat(e,"&units=metric"));case 3:a=t.sent,console.log(a),x(a.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[r]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{style:{padding:"50px 0"}},"Search city and see weather ",c.a.createElement("br",null),c.a.createElement("input",{onChange:function(e){return l(e.target.value)},type:"text",placeholder:"Placeholder",style:{marginTop:"10px"},className:"px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded"}),h&&c.a.createElement(m,{city:h})))};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)))}},[[20,2,1]]]);
//# sourceMappingURL=main.81dba7d5.chunk.js.map