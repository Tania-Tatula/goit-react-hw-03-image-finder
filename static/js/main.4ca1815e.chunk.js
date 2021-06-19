(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),o=n.n(c),i=(n(23),n(2)),s=n(3),l=n(5),u=n(4),h=(n(24),n(10)),m=n(7),d=n.n(m);d.a.defaults.baseURL="https://pixabay.com";var g=function(e){var t=e.searchQuery,n=void 0===t?"":t,a=e.imagesPage,r=void 0===a?1:a,c=e.pageSize,o=void 0===c?12:c;return d.a.get("/api/?q=".concat(n,"&page=").concat(r,"&key=").concat("21253837-b1ce1cf3df57506fc2e4b8a71","&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data.hits}))},j=n(0),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.query,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(a.Component),p=document.querySelector("#modal-root"),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:this.props.img,alt:"rfh"})})}),p)}}]),n}(a.Component),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"onOpenImages",value:function(e){this.props.onClick(e)}},{key:"render",value:function(){var e=this;return this.props.images.map((function(t){var n=t.id,a=t.webformatURL,r=t.largeImageURL,c=t.tags;return Object(j.jsx)("li",{className:"ImageGalleryItem",children:Object(j.jsx)("img",{className:"ImageGalleryItem-image",src:a,alt:c,onClick:function(){return e.onOpenImages(r)}})},n)}))}}]),n}(a.Component),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{className:"Button",type:"button",onClick:this.props.onOpenCloseButton,children:"Load more"})})}}]),n}(a.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"preloader",children:Object(j.jsxs)("div",{className:"preloader__row",children:[Object(j.jsx)("div",{className:"preloader__item"}),Object(j.jsx)("div",{className:"preloader__item"})]})})}}]),n}(a.Component);n(44);d.a.defaults.baseURL="https://pixabay.com";var x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],imagesPage:1,searchQuery:"",isLoading:!1,showModal:!1,error:null,bigImg:""},e.onChangeQuery=function(t){e.setState({searchQuery:t,imagesPage:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,n=t.imagesPage,a={searchQuery:t.searchQuery,imagesPage:n};e.setState({isLoading:!0}),g(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(h.a)(e.images),Object(h.a)(t)),imagesPage:e.imagesPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.onOpenBigImages=function(t){e.setState({bigImg:t,showModal:!0})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}})),e.setState({bigImg:""})},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,n=e.isLoading,a=e.error,r=e.showModal,c=t.length>0&&!n;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[a&&Object(j.jsx)("h2",{children:"Sorry, error"}),Object(j.jsx)(b,{onSubmit:this.onChangeQuery}),r&&Object(j.jsx)(f,{onClose:this.toggleModal,img:this.state.bigImg}),Object(j.jsx)("ul",{className:"ImageGallery",children:t.length?Object(j.jsx)(O,{images:this.state.images,onClick:this.onOpenBigImages}):Object(j.jsx)("h2",{children:"Please, enter a valid image title"})})]}),Object(j.jsxs)("div",{className:"ButtonBlock",children:[n&&Object(j.jsx)(v,{}),c&&Object(j.jsx)(y,{onOpenCloseButton:this.fetchImages})]})]})}}]),n}(a.Component),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],filter:"",showModal:!1,query:"",bigImg:""},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(x,{})})}}]),n}(a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),k()}},[[45,1,2]]]);
//# sourceMappingURL=main.4ca1815e.chunk.js.map