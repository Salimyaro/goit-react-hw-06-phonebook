(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c,a=n(1),r=n(9),i=n.n(r),o=n(0),s=n.n(o),u=n(15),b=n(12),l=n(2),j=n(3),m=Object(j.b)("contacts/add",(function(t){return{payload:{id:Object(j.e)(),name:t.name,number:t.number}}})),d=Object(j.b)("contacts/delete"),O=Object(j.b)("contacts/changeFilter"),f=Object(j.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(c={},Object(b.a)(c,m,(function(t,e){var n=e.payload;return[].concat(Object(u.a)(t),[n])})),Object(b.a)(c,d,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),h=Object(j.c)("",Object(b.a)({},O,(function(t,e){return e.payload}))),p=Object(l.c)({items:f,filter:h}),x=(n(29),n(5)),_=n(21),C=n.n(_),v={serializableCheck:{ignoredActions:[x.a,x.f,x.b,x.c,x.d,x.e]}},N=Object(j.d)(v);var g={key:"PhoneBookRedux",storage:C.a,blacklist:["filter"]},k=Object(j.a)({reducer:{contacts:Object(x.g)(g,p)},devTools:!1,middleware:N}),y=Object(x.h)(k),L=n(22),w=n(4),F=(n(36),n(37),n(18)),S=n(6),I=n.n(S);function q(){var t=Object(o.useState)(""),e=Object(F.a)(t,2),n=e[0],c=e[1],r=Object(o.useState)(""),i=Object(F.a)(r,2),s=i[0],u=i[1],b=Object(w.b)();return Object(a.jsxs)("form",{className:I.a.form,onSubmit:function(t){t.preventDefault(),""!==n?""!==s?(b(m({name:n,number:s})),c(""),u("")):alert("Number required"):alert("Name required")},children:[Object(a.jsxs)("label",{className:I.a.title,children:["Name",Object(a.jsx)("input",{className:I.a.input,type:"text",value:n,onChange:function(t){var e=t.target;c(e.value)}})]}),Object(a.jsxs)("label",{className:I.a.title,children:["Number",Object(a.jsx)("input",{className:I.a.input,type:"text",value:s,onChange:function(t){var e=t.target;u(e.value)}})]}),Object(a.jsx)("button",{className:I.a.button,type:"submit",children:"Add contact"})]})}var A=n(7),P=n.n(A),W=n(10),z=function(t){return t.contacts.filter},D=Object(W.a)([function(t){return t.contacts.items},z],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}));function E(){var t=Object(w.c)(D),e=Object(w.b)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{className:P.a.list,children:t.map((function(t){var n=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:P.a.listItem,children:[Object(a.jsxs)("span",{className:P.a.name,children:[c,":"]}),Object(a.jsx)("span",{className:P.a.num,children:r}),Object(a.jsx)("button",{className:P.a.button,onClick:function(){return e(d(n))},children:"Delete"})]},n)}))})})}function J(){var t=Object(w.c)(z),e=Object(w.b)();return Object(a.jsx)("input",{type:"text",value:t,onChange:function(t){var n=t.target;e(O(n.value))}})}function R(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(q,{}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(J,{}),Object(a.jsx)(E,{})]})}i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(w.a,{store:k,children:Object(a.jsx)(L.a,{persistor:y,children:Object(a.jsx)(R,{})})})}),document.querySelector("#root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__2Cdcc",title:"ContactForm_title__pafkN",input:"ContactForm_input__3myh8",button:"ContactForm_button__2PGWO"}},7:function(t,e,n){t.exports={list:"ContactList_list__ns2lX",listItem:"ContactList_listItem__1WLIc",name:"ContactList_name__2gV6e",num:"ContactList_num__1Ec3i",button:"ContactList_button__3CfWz"}}},[[38,1,2]]]);
//# sourceMappingURL=main.459db890.chunk.js.map