(this["webpackJsonpmonstor-rolodex"]=this["webpackJsonpmonstor-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(3),o=n.n(r),a=(n(12),n(4)),i=n(5),h=n(7),l=n(6),d=(n(13),n(14),n(0)),u=function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(d.jsxs)("h1",{children:[" ",e.monster.name," "]}),Object(d.jsxs)("h2",{children:[" ",e.monster.email]})]})},j=function(e){return Object(d.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(d.jsx)(u,{monster:e},e.id)}))})},m=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(d.jsx)("div",{className:"searchbox-holder",children:Object(d.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})})}),b=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"monsters Rolodex"}),Object(d.jsx)(m,{placeholder:"search monsters",handleChange:this.handleChange})]}),Object(d.jsx)(j,{monsters:s})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}}]),n}(s.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),f()}],[[17,1,2]]]);
//# sourceMappingURL=main.4f3e4275.chunk.js.map