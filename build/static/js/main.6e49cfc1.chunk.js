(this.webpackJsonpaviasales_test=this.webpackJsonpaviasales_test||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.9b4b57dd.svg"},,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),c=(a(18),a(1)),o=a.n(c),u=a(2),l=a(9),m=a(4),p=a(5),d=a(11),f=a(12),h=(a(20),function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,n,r,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(){return(s=Object(u.a)(o.a.mark((function e(){var t,a,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://front-test.beta.aviasales.ru/tickets?searchId=".concat(n));case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,s=a.tickets,a.stop){e.next=16;break}return r.push(s),e.next=13,i();case 13:return e.abrupt("return",e.sent);case 16:return c=r.flat().sort((function(e,t){return e.price-t.price})),e.abrupt("return",c);case 18:e.next=27;break;case 20:return e.prev=20,e.t0=e.catch(0),e.next=24,new Promise((function(e){return setTimeout(e,1e3)}));case 24:return e.next=26,i();case 26:return e.abrupt("return",e.sent);case 27:case"end":return e.stop()}}),e,null,[[0,20]])})))).apply(this,arguments)},i=function(){return s.apply(this,arguments)},e.next=4,fetch("https://front-test.beta.aviasales.ru/search");case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,n=a.searchId,r=[],e.next=12,i();case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),v=(a(21),a(10)),g=a.n(v),E=function(){return r.a.createElement("img",{src:g.a,alt:""})},b=a(3),N=(a(22),function(e){var t=e.onFilter;return r.a.createElement("div",{className:"filtersContainer pt-4 pb-3 mb-4"},r.a.createElement("h5",{className:"header"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),function(e){return e.map((function(e){var a=e.id,n=e.value,i=e.text;return r.a.createElement("div",{key:a,className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",id:a,onInput:function(e){return t(Object(b.a)({},n,e.target.checked))}}),r.a.createElement("label",{className:"form-check-label",htmlFor:a},i))}))}([{id:"all",value:"-1",text:"\u0412\u0441\u0435"},{id:"whitoutStops",value:"0",text:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"},{id:"oneStop",value:"1",text:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"},{id:"twoStops",value:"2",text:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"},{id:"threeStops",value:"3",text:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"}]))}),w=(a(23),function(e){var t=e.onSort,a=e.sortBy,n="cheapest ".concat("cheapest"===a?"active":""," p-4"),i="fastest ".concat("fastest"===a?"active":""," p-4");return r.a.createElement("div",{className:"sorting mb-4"},r.a.createElement("button",{className:n,onClick:function(){return t("cheapest")}},"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0451\u0432\u044b\u0439"),r.a.createElement("button",{className:i,onClick:function(){return t("fastest")}},"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439"))}),k=(a(24),a(6)),S=(a(25),a(26),function(e){var t=e.origin,a=e.destination;return r.a.createElement("div",{className:"direction"},r.a.createElement("span",{className:"origin"},t)," \u2013 ",r.a.createElement("span",{className:"destination"},a))}),x=(a(27),function(e){var t=e.departureTime,a=e.arrivalTime;return r.a.createElement("div",{className:"time"},r.a.createElement("span",{className:"departureTime"},t)," \u2013 ",r.a.createElement("span",{className:"arrivalTime"},a))}),y=(a(28),function(e){var t=e.durationValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"durationTitle"},"\u0412 \u043f\u0443\u0442\u0438"),r.a.createElement("div",{className:"durationValue"},t))}),T=(a(29),function(e){var t=e.stopsCount,a=e.stops;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stopsCount"},t),r.a.createElement("div",{className:"stops"},a||"\u2014"))}),C=function(){function e(t){var a,n,r,i=this;Object(m.a)(this,e),this.getDestination=function(){return i.destination},this.getDepartureTime=function(){return i.departureTime},this.getArrivalTime=function(){return i.arrivalTime},this.getDuration=function(){return i.duration},this.getStops=function(){return i.stops},this.getStopsCount=function(){return i.stopsCount},this._MS_IN_MIN=6e4,this._departureDate=new Date(t.date),this.origin=t.origin,this.destination=t.destination,this.departureTime=this._departureDate.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),this.arrivalTime=(a=this._departureDate.getTime(),n=t.duration*this._MS_IN_MIN,new Date(a+n).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),this.duration=function(e){var t=new Date(0,0,0,0,0,0,e);return 0===t.getDay()?"".concat(t.getHours(),"\u0447 ").concat(t.getMinutes(),"\u043c"):"".concat(t.getDay(),"\u0434 ").concat(t.getHours(),"\u0447")}(t.duration*this._MS_IN_MIN),this.stops=t.stops,this.stopsCount=0===(r=this.stops.length)?"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a":1===r?"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430":"".concat(r," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438")}return Object(p.a)(e,[{key:"getOrigin",value:function(){return this.origin}}]),e}(),M=function(e){var t=e.ticket,a=t.price,n=t.carrier,i=t.segments,s=Object(k.a)(i,2),c=s[0],o=s[1],u=new C(c),l=new C(o);return r.a.createElement("div",{className:"ticketContainer p-4 mb-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{className:"price mb-3"},a.toLocaleString()," \u0420"),r.a.createElement("div",{className:"mr-4"},r.a.createElement("img",{src:"https://pics.avs.io/99/36/".concat(n,".png"),alt:""})))),r.a.createElement("div",{className:"col-4 col-md-4"},r.a.createElement("div",{className:"thither"},r.a.createElement(S,{origin:u.getOrigin(),destination:u.getDestination()}),r.a.createElement(x,{departureTime:u.getDepartureTime(),arrivalTime:u.getArrivalTime()})),r.a.createElement("div",{className:"back"},r.a.createElement(S,{origin:l.getOrigin(),destination:l.getDestination()}),r.a.createElement(x,{departureTime:l.getDepartureTime(),arrivalTime:l.getArrivalTime()}))),r.a.createElement("div",{className:"col-3 col-md-4"},r.a.createElement("div",{className:"thither"},r.a.createElement(y,{durationValue:u.getDuration()})),r.a.createElement("div",{className:"back"},r.a.createElement(y,{durationValue:l.getDuration()}))),r.a.createElement("div",{className:"col-5 col-md-4"},r.a.createElement("div",{className:"thither"},r.a.createElement(T,{stopsCount:u.getStopsCount(),stops:u.getStops().toString()})),r.a.createElement("div",{className:"back"},r.a.createElement(T,{stopsCount:l.getStopsCount(),stops:l.getStops().toString()})))))},D=(a(30),function(){return r.a.createElement("svg",{className:"loading",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"30",x:"0",y:"0",enableBackground:"new 0 0 50 50",version:"1.1",viewBox:"0 0 24 30",xmlSpace:"preserve"},r.a.createElement("path",{fill:"#2196F3",d:"M0 0H4V10H0z"},r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"xml",begin:"0",dur:"0.6s",repeatCount:"indefinite",type:"translate",values:"0 0; 0 20; 0 0"})),r.a.createElement("path",{fill:"#2196F3",d:"M10 0H14V10H10z"},r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"xml",begin:"0.2s",dur:"0.6s",repeatCount:"indefinite",type:"translate",values:"0 0; 0 20; 0 0"})),r.a.createElement("path",{fill:"#2196F3",d:"M20 0H24V10H20z"},r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"xml",begin:"0.4s",dur:"0.6s",repeatCount:"indefinite",type:"translate",values:"0 0; 0 20; 0 0"})))}),j=function(e){var t=e.tickets,a=e.onShowMore,n=e.loading,i=t.map((function(e){return r.a.createElement(M,{key:"".concat(e.carrier,"_").concat(Math.random()),ticket:e})})),s=n?r.a.createElement(D,null):i;return r.a.createElement("div",{className:"tickets mb-5"},s,r.a.createElement("button",{disabled:n,onClick:a},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451"))},O=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={tickets:[],showMoreCount:5,filters:{"-1":!1,0:!1,1:!1,2:!1,3:!1},sortBy:"cheapest",loading:!0},e.onFilter=function(t){e.setState((function(e){return{filters:Object(l.a)({},e.filters,{},t)}}))},e.onSort=function(t){e.setState({sortBy:t})},e.onShowMore=function(){e.setState((function(e){return{showMoreCount:e.showMoreCount+=5}}))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:a=t.sent,e.setState({tickets:a,loading:!1});case 4:case"end":return t.stop()}}),t)})))()}},{key:"render",value:function(){var e=this.state,t=e.tickets,a=e.showMoreCount,n=e.filters,i=e.sortBy,s=e.loading,c=function(e,t){switch(t){case"cheapest":return e.flat().sort((function(e,t){return e.price-t.price}));case"fastest":return e.flat().sort((function(e,t){return e.segments[0].duration+e.segments[1].duration-(t.segments[0].duration+t.segments[1].duration)}));default:return e}}(function(e,t){var a=Object.keys(t).filter((function(e){return t[e]})).map((function(e){return+e}));return e.length&&a.length&&!a.includes(-1)?e.filter((function(e){var t=e.segments,n=Object(k.a)(t,2),r=n[0],i=n[1],s=r.stops,c=i.stops;return a.includes(s.length)&&a.includes(c.length)})):e}(t,n),i).slice(0,a);return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 logoContainer mb-2"},r.a.createElement(E,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-4"},r.a.createElement(N,{onFilter:this.onFilter})),r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement(w,{onSort:this.onSort,sortBy:i}),r.a.createElement(j,{tickets:c,onShowMore:this.onShowMore,loading:s})))))}}]),a}(n.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.6e49cfc1.chunk.js.map