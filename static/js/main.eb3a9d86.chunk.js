(this.webpackJsonpmobilnasauna=this.webpackJsonpmobilnasauna||[]).push([[0],{25:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(29),o=a.n(i),l=a(5),r=a(6),c=a(8),j=a(7),d=a(13),h=(a(37),a(38),a(16)),u=a(17),b=a(30),m=a(0),p=function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"contact",children:Object(m.jsx)("div",{className:"phone_number_container",children:Object(m.jsxs)("a",{className:"phone_number link_reset",rel:"nofollow",href:"tel: 607 327 678",children:[Object(m.jsx)("span",{className:"phone_icon",children:Object(m.jsx)(h.a,{icon:u.d})}),Object(m.jsx)("strong",{children:"607 327 678"})]})})}),Object(m.jsxs)("div",{className:"socials",children:[Object(m.jsx)("a",{className:"fb_icon link_reset",target:"_blank",href:"https://www.facebook.com/gabinetmorski",children:Object(m.jsx)(h.a,{icon:b.a})}),Object(m.jsx)("a",{className:"map_icon link_reset",target:"_blank",href:"https://www.google.pl/maps/place/Mobilne+Saunowanie/@54.7569078,18.3954327,17z/data=!3m1!4b1!4m5!3m4!1s0x46fdb33b199b021d:0x6772620e76f48786!8m2!3d54.7569078!4d18.3976214",children:Object(m.jsx)(h.a,{icon:u.c})})]})]})},O=a(4),x=a(22),y=(a(46),function(e){Object(c.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={hover:!1},e}return Object(r.a)(a,[{key:"handleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"render",value:function(){var e=this,t={container:{opacity:0,animation:"1s appear forwards",animationDelay:this.props.delay},menuItem:{fontFamily:"'lato', sans-serif",cursor:"pointer",transition:"color 0.2s ease-in-out",animation:"0.5s slideIn forwards",animationDelay:this.props.delay},line:{width:"90%",margin:"0 auto",animation:"0.5s shrink forwards",animationDelay:this.props.delay}};return Object(m.jsxs)("div",{className:"small_width",style:t.container,children:[Object(m.jsx)("div",{className:"menu_item",style:t.menuItem,onMouseEnter:function(){e.handleHover()},onMouseLeave:function(){e.handleHover()},onClick:function(){return e.props.scroll()},children:Object(m.jsx)("a",{className:"link_reset",children:this.props.text})}),Object(m.jsx)("div",{className:"menu_item_line small_width",style:t.line})]})}}]),a}(n.Component)),w=a(10),f=function(e){Object(c.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={open:!!e.props.open&&e.props.open},e.menu=e.props.menuList.map((function(e,t){return Object(m.jsx)(y,Object(w.a)({},e),t)})),e}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"menu ".concat(this.state.open," small_width"),children:this.state.open?Object(m.jsx)("div",{className:"menu_list",children:this.menu}):null})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.open!==t.open?{open:e.open}:null}}]),a}(n.Component),g=function(e){Object(c.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={open:!!e.props.open&&e.props.open,color:e.props.color?e.props.color:"black"},e}return Object(r.a)(a,[{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t={container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer"},line:{background:this.state.color,transition:"all 0.2s ease"},lineTop:{transform:this.state.open?"rotate(45deg)":"none",transformOrigin:"top left"},lineMiddle:{opacity:this.state.open?0:1,transform:this.state.open?"translateX(-16px)":"none"},lineBottom:{transform:this.state.open?"translateX(-1px) rotate(-45deg)":"none",transformOrigin:"top left"}};return Object(m.jsxs)("div",{className:"menu_button small_width",style:t.container,onClick:this.props.onClick?this.props.onClick:function(){e.handleClick()},children:[Object(m.jsx)("div",{className:"line line_top",style:Object(w.a)(Object(w.a)({},t.line),t.lineTop)}),Object(m.jsx)("div",{className:"line line_middle",style:Object(w.a)(Object(w.a)({},t.line),t.lineMiddle)}),Object(m.jsx)("div",{className:"line line_bottom",style:Object(w.a)(Object(w.a)({},t.line),t.lineBottom)})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.open!==t.open?{open:e.open}:null}}]),a}(n.Component),v=a.p+"static/media/logo1.826c7923.png",_=function(e){Object(c.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={menuOpen:!1},e}return Object(r.a)(a,[{key:"handleMenuClick",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"handleLinkClick",value:function(){this.setState({menuOpen:!1})}},{key:"render",value:function(){var e=this,t=this.props.menuList.map((function(e){return Object(m.jsx)(y,{},e)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"small_nav small_width",children:[Object(m.jsx)(g,{open:this.state.menuOpen,onClick:function(){return e.handleMenuClick()},color:"#222"}),Object(m.jsx)("div",{className:"nav_logo",children:Object(m.jsx)("img",{src:v,alt:"mobilna sauna"})})]}),Object(m.jsx)(f,{menuList:this.props.menuList,open:this.state.menuOpen,children:t})]})}}]),a}(n.Component),k=function(e){e.path;var t=e.text,a=e.scroll;return Object(m.jsx)("div",{className:"element",children:Object(m.jsx)("a",{onClick:function(){return a()},className:"link_reset",children:t})})},z=function(e){var t=e.menuList.map((function(e,t){return Object(m.jsx)(k,Object(w.a)({},e),t)}));return Object(m.jsx)("div",{className:"med_nav_bar",children:Object(m.jsxs)("div",{className:"med_nav_container",children:[Object(m.jsx)("div",{className:"med_logo",children:Object(m.jsx)("img",{src:v,alt:"Mobilna Sauna"})}),Object(m.jsx)("div",{className:"med_nav",children:t})]})})},N=function(e){e.path;var t=e.text,a=e.scroll;return Object(m.jsx)("div",{className:"element",children:Object(m.jsx)("a",{onClick:function(){return a()},className:"link_reset",children:t})})},S=function(e){var t=e.menuList.map((function(e,t){return Object(m.jsx)(N,Object(w.a)({},e),t)}));return Object(m.jsx)("div",{className:"lar_nav_bar",children:Object(m.jsxs)("div",{className:"lar_nav_container",children:[Object(m.jsx)("div",{className:"lar_logo",children:Object(m.jsx)("img",{src:v,alt:"Mobilna Sauna"})}),Object(m.jsx)("div",{className:"lar_nav",children:t})]})})},T=function(e){Object(c.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={menuList:[{text:"O nas",path:"#o-nas",delay:"0s",scroll:e.props.scrollToAbout},{text:"Oferta",path:"#oferta",delay:"0.15s",scroll:e.props.scrollToOffer},{text:"Galeria",path:"#galeria",delay:"0.30s",scroll:e.props.scrollToGallery},{text:"Kontakt",path:"#stopka",delay:"0.45s",scroll:e.props.scrollToFooter}]},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsx)(x.a,{queries:{small:"(max-width: 599px)",medium:"(min-width: 600px) and (max-width: 1223px)",large:"(min-width: 1224px)"},children:function(t){return Object(m.jsxs)(m.Fragment,{children:[t.small&&Object(m.jsx)(_,{menuList:e.state.menuList}),t.medium&&Object(m.jsx)(z,{menuList:e.state.menuList}),t.large&&Object(m.jsx)(S,{menuList:e.state.menuList})]})}})}}]),a}(n.Component),B=(a(47),function(){return Object(m.jsx)("div",{className:"error_nav_bar",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"back_arrow",children:Object(m.jsx)(d.b,{className:"link_reset",to:"/",children:Object(m.jsx)(h.a,{icon:u.b})})}),Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)(d.b,{className:"link_reset",to:"/",children:Object(m.jsx)("img",{src:v,alt:"Mobilna Sauna"})})})]})})}),F=function(e){return Object(m.jsxs)(O.c,{children:[Object(m.jsx)(O.a,{path:"/",exact:!0,render:function(){return Object(m.jsx)(T,{scrollToAbout:e.scrollToAbout,scrollToOffer:e.scrollToOffer,scrollToGallery:e.scrollToGallery,scrollToFooter:e.scrollToFooter})}}),Object(m.jsx)(O.a,{path:"/regulamin",component:B}),Object(m.jsx)(O.a,{path:"",component:B})]})},C=(a(50),a(15)),L=a.n(C),P=(a(25),a.p+"static/media/vertical_header1.66766144.jpg"),G=a.p+"static/media/vertical_header2.f42d22b8.jpg",I=a.p+"static/media/vertical_header3.34b10451.jpg",A=a.p+"static/media/vertical_header4.e798b65d.jpg",D=function(){var e=[{original:P,thumbnail:null},{original:G,thumbnail:null},{original:I,thumbnail:null},{original:A,thumbnail:null}];return Object(m.jsx)("div",{className:"header_container",children:Object(m.jsx)("div",{className:"header_gallery",children:Object(m.jsx)(L.a,{lazyLoad:!0,showNav:!1,showThumbnails:!1,showFullscreenButton:!1,showPlayButton:!1,autoPlay:!0,slideDuration:400,slideInterval:6900,flickThreshold:.1,items:e,showBullets:!0})})})},V=a.p+"static/media/square_header1.86f83500.jpg",M=a.p+"static/media/square_header2.777c14e3.jpg",R=a.p+"static/media/square_header3.ae762fea.jpg",K=a.p+"static/media/square_header4.04c8ae71.jpg",W=function(){var e=[{original:V,thumbnail:null},{original:M,thumbnail:null},{original:R,thumbnail:null},{original:K,thumbnail:null}];return Object(m.jsx)("div",{className:"header_container",children:Object(m.jsx)("div",{className:"header_gallery",children:Object(m.jsx)(L.a,{lazyLoad:!0,showNav:!1,showThumbnails:!1,showFullscreenButton:!1,showPlayButton:!1,autoPlay:!0,slideDuration:600,slideInterval:6900,flickThreshold:.1,items:e,showBullets:!0})})})},q=a.p+"static/media/horizontal_header1.fea0df18.jpg",U=a.p+"static/media/horizontal_header2.8085d4ef.jpg",Z=a.p+"static/media/horizontal_header3.047ab6de.jpg",E=a.p+"static/media/horizontal_header4.1f86cfb2.jpg",H=function(){var e=[{original:q,thumbnail:null,alt:"Mobilne saunowanie"},{original:U,thumbnail:null},{original:Z,thumbnail:null},{original:E,thumbnail:null}];return Object(m.jsx)("div",{className:"header_container",children:Object(m.jsx)("div",{className:"header_gallery",children:Object(m.jsx)(L.a,{lazyLoad:!1,showNav:!1,showThumbnails:!1,showFullscreenButton:!1,showPlayButton:!1,autoPlay:!0,slideDuration:800,slideInterval:6900,flickThreshold:.1,items:e,showBullets:!0,useWindowKeyDown:!0})})})},J=function(e){Object(c.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsx)(x.a,{queries:{small:"(max-width: 599px)",medium:"(min-width: 600px) and (max-width: 1223px)",large:"(min-width: 1224px)"},children:function(t){return Object(m.jsxs)(m.Fragment,{children:[t.small&&Object(m.jsx)(D,{menuList:e.state.menuList}),t.medium&&Object(m.jsx)(W,{menuList:e.state.menuList}),t.large&&Object(m.jsx)(H,{menuList:e.state.menuList})]})}})}}]),a}(n.Component),X=(a(59),function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"background_sheet",children:Object(m.jsxs)("div",{className:"text_container",children:[Object(m.jsx)("h3",{children:"O nas"}),Object(m.jsxs)("p",{children:["Mobilna Sauna powsta\u0142a z pasji do saunowania na \u015bwie\u017cym powietrzu w gronie znajomych oraz z ch\u0119ci\u0105 dzielenia jej z innymi. Naszym celem jest umo\u017cliwienie relaksu w saunie na w\u0142asnym podw\xf3rku lub w innych atrakcyjnych miejscach ka\u017cdemu kto ma na to ochot\u0119.",Object(m.jsx)("br",{}),Object(m.jsxs)("span",{className:"p_gabinet",children:["Mobilna Sauna jest uzupe\u0142nieniem oferty"," ",Object(m.jsx)("a",{className:"link_reset link_gabinet",target:"_blank",href:"https://www.facebook.com/gabinetmorski",children:"Gabinetu Morskiego"}),", do kt\xf3rego r\xf3wnie\u017c serdecznie zapraszamy."]})]})]})})})}),Y=(a(60),function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"background_sheet",children:Object(m.jsxs)("div",{className:"text_container",children:[Object(m.jsx)("h3",{children:"Oferta"}),Object(m.jsx)("p",{children:"Sauna jest przeznaczona dla maksymalnie 10 os\xf3b."}),Object(m.jsx)("p",{children:"Dodatkowo wraz z saun\u0105 oferujemy w cenie opa\u0142 drzewny."}),Object(m.jsx)("p",{children:"Dow\xf3z sauny jest darmowy do W\u0142adys\u0142awowa, Pucka, Swarzewa i okolic w promieniu do 10km od Swarzewa. Ka\u017cdy dodatkowy kilometr kosztuje 5z\u0142."}),Object(m.jsx)("h4",{children:"Saunowanie na w\u0142asnym podw\xf3rku"}),Object(m.jsx)("p",{children:"Sauna przyje\u017cd\u017ca na Pa\u0144stwa teren prywatny. Rozpalamy j\u0105 i zostawiamy do Pa\u0144stwa dyspozycji."}),Object(m.jsx)("h5",{children:"Koszt: 300z\u0142 / 6 godzin"}),Object(m.jsx)("h4",{children:"Saunowanie przy pla\u017cy"}),Object(m.jsx)("p",{children:"Rozpalona sauna stoi na parkinku przy pla\u017cy o um\xf3wionej porze. W tym wariancie palenisko jest dogl\u0105dane przez nas, a Pa\u0144stwo mog\u0105 odda\u0107 si\u0119 k\u0105pielom i relaksie w saunie bez zaprz\u0105tania sobie g\u0142owy podtrzymywaniem ognia."}),Object(m.jsx)("h5",{children:"Koszt: 300z\u0142 / 3 godziny"}),Object(m.jsx)("p",{children:"Aby zareserwowa\u0107 saun\u0119 prosimy o telefon pod numer: "}),Object(m.jsx)("p",{className:"offer_phone_number",children:Object(m.jsx)("strong",{children:Object(m.jsx)("a",{className:"link_reset",rel:"nofollow",href:"tel: 607 327 678",children:"607 327 678"})})})]})})})}),Q=a(19),$=(a(61),a.p+"static/media/gallery1.e9e2e670.jpg"),ee=a.p+"static/media/gallery2.1fc92ee7.jpg",te=a.p+"static/media/gallery3.3dc3922a.jpg",ae=a.p+"static/media/gallery4.3d674ade.jpg",ne=a.p+"static/media/gallery5.0ad4e4e3.jpg",se=a.p+"static/media/gallery_map2.9dc3202d.jpg",ie=a.p+"static/media/thumbnail_gallery1.13248239.jpg",oe=a.p+"static/media/thumbnail_gallery2.b1949f47.jpg",le=a.p+"static/media/thumbnail_gallery3.a1fd0b06.jpg",re=a.p+"static/media/thumbnail_gallery4.12293e86.jpg",ce=a.p+"static/media/thumbnail_gallery5.c11d3e12.jpg",je=a.p+"static/media/thumbnail_gallery_map.f90b2d4d.jpg",de=function(e){Object(c.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={showIndex:!1,showBullets:!0,infinite:!0,showThumbnails:!0,showFullscreenButton:!0,showGalleryFullscreenButton:!0,showPlayButton:!1,showGalleryPlayButton:!0,showNav:!0,isRTL:!1,slideDuration:450,slideInterval:2e3,slideOnThumbnailOver:!1,thumbnailPosition:"bottom",showVideo:{},useWindowKeyDown:!0},e.images=[{original:$,thumbnail:ie,alt:"asdasd"},{original:ee,thumbnail:oe},{original:te,thumbnail:le},{original:ae,thumbnail:re},{original:ne,thumbnail:ce},{original:se,thumbnail:je}],e}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.slideInterval===t.slideInterval&&this.state.slideDuration===t.slideDuration||(this._imageGallery.pause(),this._imageGallery.play())}},{key:"_onSlide",value:function(e){this._resetVideo()}},{key:"_handleInputChange",value:function(e,t){this.setState(Object(Q.a)({},e,t.target.value))}},{key:"_handleCheckboxChange",value:function(e,t){this.setState(Object(Q.a)({},e,t.target.checked))}},{key:"_handleThumbnailPositionChange",value:function(e){this.setState({thumbnailPosition:e.target.value})}},{key:"_resetVideo",value:function(){this.setState({showVideo:{}}),this.state.showPlayButton&&this.setState({showGalleryPlayButton:!0}),this.state.showFullscreenButton&&this.setState({showGalleryFullscreenButton:!0})}},{key:"_toggleShowVideo",value:function(e){this.state.showVideo[e]=!Boolean(this.state.showVideo[e]),this.setState({showVideo:this.state.showVideo}),this.state.showVideo[e]&&(this.state.showPlayButton&&this.setState({showGalleryPlayButton:!1}),this.state.showFullscreenButton&&this.setState({showGalleryFullscreenButton:!1}))}},{key:"_renderVideo",value:function(e){return Object(m.jsx)("div",{children:this.state.showVideo[e.embedUrl]?Object(m.jsxs)("div",{className:"video-wrapper",children:[Object(m.jsx)("a",{className:"close-video",onClick:this._toggleShowVideo.bind(this,e.embedUrl)}),Object(m.jsx)("iframe",{width:"560",height:"315",src:e.embedUrl,frameBorder:"0",allowFullScreen:!0})]}):Object(m.jsxs)("a",{onClick:this._toggleShowVideo.bind(this,e.embedUrl),children:[Object(m.jsx)("div",{className:"play-button"}),Object(m.jsx)("img",{className:"image-gallery-image",src:e.original}),e.description&&Object(m.jsx)("span",{className:"image-gallery-description",style:{right:"0",left:"initial"},children:e.description})]})})}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"main_page_gallery",children:Object(m.jsx)(L.a,{ref:function(t){return e._imageGallery=t},items:this.images,lazyLoad:!1,onSlide:this._onSlide.bind(this),infinite:this.state.infinite,showBullets:this.state.showBullets,showFullscreenButton:this.state.showFullscreenButton&&this.state.showGalleryFullscreenButton,showPlayButton:this.state.showPlayButton&&this.state.showGalleryPlayButton,showThumbnails:this.state.showThumbnails,showIndex:this.state.showIndex,showNav:this.state.showNav,isRTL:this.state.isRTL,thumbnailPosition:this.state.thumbnailPosition,slideDuration:parseInt(this.state.slideDuration),slideInterval:parseInt(this.state.slideInterval),slideOnThumbnailOver:this.state.slideOnThumbnailOver,additionalClass:"app-image-gallery",useWindowKeyDown:this.state.useWindowKeyDown})})}}]),a}(n.Component),he=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("header",{className:"header",children:Object(m.jsx)(J,{})}),Object(m.jsx)("div",{ref:e.toAbout,className:"separating_line"}),Object(m.jsx)("section",{className:"about",children:Object(m.jsx)(X,{})}),Object(m.jsx)("div",{ref:e.toOffer,className:"separating_line"}),Object(m.jsx)("main",{className:"offer",children:Object(m.jsx)(Y,{})}),Object(m.jsx)("div",{ref:e.toGallery,className:"separating_line"}),Object(m.jsx)("section",{className:"gallery",children:Object(m.jsx)(de,{})})]})},ue=(a(62),a.p+"static/media/wz\xf3r_umowy_najmu_sauny_mobilnej.b4b371c0.pdf"),be=function(){return Object(m.jsx)("div",{className:"terms_of_use_page",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"background_sheet",children:Object(m.jsxs)("div",{className:"text_container",children:[Object(m.jsx)("h3",{children:"Regulamin"}),Object(m.jsxs)("p",{children:["\xa71. Ka\u017cda osoba korzystaj\u0105ca z sauny mobilnej jest zobowi\u0105zana do zapoznania si\u0119 z niniejszym regulaminem.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"\xa72. Korzystanie z sauny oznacza zgod\u0119 na przestrzeganie postanowie\u0144 niniejszego regulaminu.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"\xa73. Osoby niepe\u0142noletnie mog\u0105 korzysta\u0107 z sauny tylko pod opiek\u0105 os\xf3b doros\u0142ych.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"\xa74. Wej\u015bcie do sauny stanowi potwierdzenie braku przeciwwskaza\u0144 do korzystania z sauny. Saunowanie odbywa si\u0119 na odpowiedzialno\u015b\u0107 osoby korzystaj\u0105cej.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"\xa75. Zabrania si\u0119 korzystania z sauny przez osoby pod wp\u0142ywem alkoholu lub innych substancji odurzaj\u0105cych.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"\xa76. Zakazuje si\u0119 wnoszenia oraz spo\u017cywania artyku\u0142\xf3w spo\u017cywczych oraz alkoholu, a tak\u017ce palenia wyrob\xf3w tytoniowych i e-papieros\xf3w.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"\xa77. Z sauny nale\u017cy korzysta\u0107 u\u017cywaj\u0105c r\u0119cznika w taki spos\xf3b aby \u017cadna cz\u0119\u015b\u0107 cia\u0142a nie dotyka\u0142a bezpo\u015brednio z deskami \u0142awki i oparcia.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"\xa78. Ze wzgl\u0119d\xf3w bezpiecze\u0144stwa z sauny mog\u0105 korzysta\u0107 minimum dwie osoby.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"\xa79. Nie wolno dotyka\u0107 pieca, kamieni ani komina gdy\u017c grozi to poparzeniem.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"\xa710. Osoba wynajmuj\u0105ca zobowi\u0105zuje si\u0119 do oddania sauny w stanie niepogorszonym."]}),Object(m.jsx)("div",{className:"pdf_download",children:Object(m.jsx)("a",{className:"button_container link_reset",href:ue,download:"wz\xf3r_umowy_najmu_sauny_mobilnej.pdf",children:Object(m.jsx)("button",{className:"link_reset",children:"Pobierz umow\u0119 wypo\u017cyczenia (pdf)"})})})]})})})})},me=(a(63),function(){return Object(m.jsx)("div",{className:"error_page",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"background_sheet",children:Object(m.jsxs)("div",{className:"text_container",children:[Object(m.jsx)("h3",{children:"Co\u015b posz\u0142o nie tak..."}),Object(m.jsx)("p",{children:"Upewnij si\u0119 czy zosta\u0142 wpisany poprawny adres strony"})]})})})})}),pe=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(O.c,{children:[Object(m.jsx)(O.a,{path:"/",exact:!0,render:function(){return Object(m.jsx)(he,{toAbout:e.toAbout,toOffer:e.toOffer,toGallery:e.toGallery})}}),Object(m.jsx)(O.a,{path:"/regulamin",component:be}),Object(m.jsx)(O.a,{path:"",component:me})]})})},Oe=(a(64),function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"top_footer",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"footer_phone_number",children:Object(m.jsxs)("a",{className:"link_reset",rel:"nofollow",href:"tel: 607 327 678",children:["Zadzwo\u0144:",Object(m.jsx)("span",{children:" 607 327 678"})]})})})}),Object(m.jsx)("div",{className:"middle_footer",children:Object(m.jsx)("p",{className:"adress",children:Object(m.jsx)("a",{className:"link_reset",target:"_blank",href:"https://www.google.com/maps/place/Swarzewo/?hl=pl-PL",children:"Swarzewo woj. Pomorskie"})})}),Object(m.jsx)("div",{className:"bottom_footer",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("p",{children:"\xa92021 Mobilna Sauna"}),Object(m.jsx)("p",{children:Object(m.jsx)(d.b,{className:"link_reset",to:"/regulamin",children:"Regulamin"})})]})})]})}),xe=(a(65),function(e){Object(c.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={showScroll:!1},e.checkScrollTop=function(){!e.state.showScroll&&window.pageYOffset>300?e.setState({showScroll:!0}):e.state.showScroll&&window.pageYOffset<=300&&e.setState({showScroll:!1})},e.scrollTop=function(){window.scrollTo({top:0})},e}return Object(r.a)(a,[{key:"render",value:function(){return window.addEventListener("scroll",this.checkScrollTop),Object(m.jsx)("div",{className:"scroll_top_button",style:{display:this.state.showScroll?"flex":"none"},children:Object(m.jsx)(h.a,{className:"scrollTop",onClick:this.scrollTop,icon:u.a})})}}]),a}(n.Component)),ye=function(e){Object(c.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={},e.toAbout=Object(n.createRef)(),e.toOffer=Object(n.createRef)(),e.toGallery=Object(n.createRef)(),e.toFooter=Object(n.createRef)(),e.scrollToAbout=function(){e.toAbout.current.scrollIntoView({behavior:"smooth",block:"start"})},e.scrollToOffer=function(){e.toOffer.current.scrollIntoView({behavior:"smooth",block:"start"})},e.scrollToGallery=function(){e.toGallery.current.scrollIntoView({behavior:"smooth",block:"start"})},e.scrollToFooter=function(){e.toFooter.current.scrollIntoView({behavior:"smooth",block:"start"})},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsx)(d.a,{basename:"https://www.mobilnesaunowanie.pl",children:Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("section",{className:"top_contact_bar",children:Object(m.jsx)(p,{})}),Object(m.jsx)("nav",{className:"nav",children:Object(m.jsx)(F,{scrollToAbout:this.scrollToAbout,scrollToOffer:this.scrollToOffer,scrollToGallery:this.scrollToGallery,scrollToFooter:this.scrollToFooter})}),Object(m.jsx)("div",{className:"page",children:Object(m.jsx)(pe,{toAbout:this.toAbout,toOffer:this.toOffer,toGallery:this.toGallery})}),Object(m.jsx)("footer",{ref:this.toFooter,id:"stopka",className:"footer",children:Object(m.jsx)(Oe,{})}),Object(m.jsx)("div",{children:Object(m.jsx)(xe,{})})]})})}}]),a}(n.Component),we=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),i(e),o(e)}))};o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(ye,{})}),document.getElementById("root")),we()}},[[66,1,2]]]);
//# sourceMappingURL=main.eb3a9d86.chunk.js.map