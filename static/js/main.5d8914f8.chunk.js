(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(46)},23:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),c=n.n(r),i=(n(23),n(11)),p=n(12),l=n(13),h=n(16),d=n(14),s=n(17),u=n(3),m=n.n(u),f=n(15),g=(n(44),function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",receiptId:0,price1:0,price2:0},n.handleChange=function(e){var t=e.target,a=t.value,o=t.name;return n.setState(Object(i.a)({},o,a))},n.createAndDownloadPdf=function(){m.a.post("https://test-pdf-generator.herokuapp.com/create-pdf",n.state).then(function(){return m.a.get("https://test-pdf-generator.herokuapp.com/fetch-pdf",{responseType:"blob"})}).then(function(e){var t=new Blob([e.data],{type:"application/pdf"});Object(f.saveAs)(t,"newPdf.pdf")})},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("input",{type:"text",placeholder:"Name",name:"name",onChange:this.handleChange}),o.a.createElement("input",{type:"text",placeholder:"Receipt ID",name:"receiptId",onChange:this.handleChange}),o.a.createElement("input",{type:"text",placeholder:"Price 1",name:"price1",onChange:this.handleChange}),o.a.createElement("input",{type:"text",placeholder:"Price 2",name:"price2",onChange:this.handleChange}),o.a.createElement("button",{onClick:this.createAndDownloadPdf},"Download PDF"))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[18,2,1]]]);
//# sourceMappingURL=main.5d8914f8.chunk.js.map