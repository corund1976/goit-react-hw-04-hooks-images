(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem___yqG4",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1ONgd"}},14:function(e,t,a){e.exports={Button:"Button_Button__2mVST",buttonWrapper:"Button_buttonWrapper__bQwcK"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1LuRk",Modal:"Modal_Modal__31Pib"}},27:function(e,t,a){e.exports={container:"Container_container__2d7w9"}},28:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2BYys"}},30:function(e,t,a){e.exports={Loader:"Loader_Loader__3mdQq"}},37:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3kkOy",SearchForm:"Searchbar_SearchForm__3AZhF",SearchForm_button:"Searchbar_SearchForm_button__28WrT",SearchForm_button__label:"Searchbar_SearchForm_button__label__St24_",SearchForm_input:"Searchbar_SearchForm_input__1ifGI"}},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),u=(a(37),a(31)),s=a(16),i=a(4),l=a(12),m=a.n(l),b=a(26),h=a(10),j=a.n(h);j.a.defaults.baseURL="https://pixabay.com/api/";var d=function(e,t){return j.a.defaults.params={key:"23749479-af26a543787f3771d684a474e",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:12}};function f(){return(f=Object(b.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(t,a),e.prev=1,e.next=4,j.a.get();case 4:return n=e.sent,e.abrupt("return",n.data.hits);case 8:throw e.prev=8,e.t0=e.catch(1),console.log("error: ",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var _=a(27),g=a.n(_),p=a(1);var O=function(e){var t=e.children;return Object(p.jsx)("div",{className:g.a.container,children:t})},S=a(5),v=a.n(S);var x=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1],u=function(){return o("")};return Object(p.jsx)("header",{className:v.a.Searchbar,children:Object(p.jsxs)("form",{className:v.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),u()):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430...")},children:[Object(p.jsx)("button",{type:"submit",className:v.a.SearchForm_button,children:Object(p.jsx)("span",{className:v.a.SearchForm_button__label,children:"Search"})}),Object(p.jsx)("input",{className:v.a.SearchForm_input,type:"text",value:c,onChange:function(e){return o(e.target.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},y=a(32),I=a(13),w=a.n(I);var k=function(e){var t=e.image,a=t.webformatURL,n=t.largeImageURL,r=t.tags,c=e.onShowModal;return Object(p.jsx)("li",{className:w.a.ImageGalleryItem,onClick:function(){return c({modalImage:{largeImageURL:n,tags:r}})},children:Object(p.jsx)("img",{src:a,alt:r,className:w.a.ImageGalleryItem_image})})},L=a(28),M=a.n(L);var N=function(e){var t=e.images,a=e.onShowModal;return Object(p.jsx)("ul",{className:M.a.ImageGallery,children:t.map((function(e){var t=e.id,n=Object(y.a)(e,["id"]);return Object(p.jsx)(k,{image:n,onShowModal:a},t)}))})},F=a(14),G=a.n(F),E=function(e){var t=e.onLoadMore;return Object(p.jsx)("div",{className:G.a.buttonWrapper,children:Object(p.jsx)("button",{type:"button",className:G.a.Button,onClick:t,children:"Load more..."})})},B=a(29),C=a.n(B),T=(a(78),a(30)),R=a.n(T);var U=function(){return Object(p.jsx)(C.a,{className:R.a.Loader,type:"MutatingDots",color:"#3f51b5",height:100,width:100,timeout:3e3})},q=a(15),W=a.n(q);var D=function(e){var t=e.modalImage,a=t.largeImageURL,r=t.tags,c=e.onToggleModalStatus;return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&c()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[c]),Object(p.jsx)("div",{className:W.a.Overlay,onClick:function(e){e.currentTarget===e.target&&c()},children:Object(p.jsx)("div",{className:W.a.Modal,children:Object(p.jsx)("img",{src:a,alt:r})})})};a(79);var J=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(i.a)(c,2),l=o[0],m=o[1],b=Object(n.useState)(1),h=Object(i.a)(b,2),j=h[0],d=h[1],_=Object(n.useState)(null),g=Object(i.a)(_,2),S=g[0],v=g[1],y=Object(n.useState)(!1),I=Object(i.a)(y,2),w=I[0],k=I[1],L=Object(n.useState)({}),M=Object(i.a)(L,2),F=M[0],G=M[1],B=Object(n.useState)(!0),C=Object(i.a)(B,2),T=C[0],R=C[1],q=function(){k(!0),function(e,t){return f.apply(this,arguments)}(a,j).then((function(e){if(0===e.length)return Promise.reject(new Error("There is no pictures by ".concat(a," name, please try another request")));m((function(t){return[].concat(Object(s.a)(t||[]),Object(s.a)(e))}))})).catch((function(e){return v(e)})).finally((function(){return k(!1)}))},W=Object(n.useCallback)((function(){R((function(e){return!e}))}),[]);return Object(n.useEffect)((function(){""!==a&&q()}),[j,a]),Object(n.useEffect)((function(){j>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[l]),Object(p.jsxs)(O,{children:[Object(p.jsx)(x,{onSubmit:function(e){r(e),m([]),d(1),v(null)}}),S&&Object(p.jsx)("h1",{children:S.message}),Object(p.jsx)(N,{images:l,onShowModal:function(e){var t=e.modalImage;G(Object(u.a)({},t)),W()}}),w&&Object(p.jsx)(U,{}),!!l.length&&!w&&Object(p.jsx)(E,{onLoadMore:function(){d((function(e){return e+1}))}}),!T&&Object(p.jsx)(D,{onToggleModalStatus:W,modalImage:F})]})};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.cd1c6f34.chunk.js.map