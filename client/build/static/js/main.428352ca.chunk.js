(this["webpackJsonpauxswap-react"]=this["webpackJsonpauxswap-react"]||[]).push([[0],{106:function(e,t,s){},107:function(e,t,s){},109:function(e,t,s){},137:function(e,t,s){},138:function(e,t,s){},156:function(e,t,s){},157:function(e,t,s){},158:function(e,t,s){},162:function(e,t,s){},163:function(e,t,s){},180:function(e,t){},190:function(e,t,s){},191:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(73),r=s.n(a),i=(s(91),s(38)),o=s.n(i),l=s(74),u=s(2),j=(s(93),s(9)),d=s(5),b=s(4),m=n.a.createContext(),h=n.a.createContext(),O=(s(94),s.p+"static/media/logo_1_transparent.f6b8161d.png"),f=s(1);var x=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{className:"head",children:"AuxSwap"}),Object(f.jsx)("img",{src:O,className:"mainLogo"}),Object(f.jsxs)("body",{className:"bod",children:["A web application using Spotify. ",Object(f.jsx)("br",{}),"Listen together and chat with your friends!"]}),Object(f.jsx)("a",{className:"Login-button",href:"".concat("http://localhost:4000","/auth/login"),children:"Login to Spotify"})]})},g=(s(96),function(e){var t={backgroundImage:"url(".concat(e.item.album.images[0].url,")")},s={width:100*e.progress_ms/e.item.duration_ms+"%"};return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("div",{className:"main-wrapper",children:[Object(f.jsx)("div",{className:"now-playing__img",children:Object(f.jsx)("img",{src:e.item.album.images[0].url})}),Object(f.jsxs)("div",{className:"now-playing__side",children:[Object(f.jsx)("div",{className:"now-playing__name",children:e.item.name}),Object(f.jsx)("div",{className:"now-playing__artist",children:e.item.artists[0].name}),Object(f.jsx)("div",{className:"now-playing__status",children:e.is_playing?"Playing":"Paused"}),Object(f.jsx)("div",{className:"progress",children:Object(f.jsx)("div",{className:"progress__bar",style:s})})]}),Object(f.jsx)("div",{className:"background",style:t})," "]})})}),p=(s(97),s.p+"static/media/logo.6ce24c58.svg"),v=(s(98),function(){var e=n.a.useState(""),t=Object(u.a)(e,2),s=t[0],c=t[1],a=Object(b.g)();return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"home-container",children:[Object(f.jsx)("input",{type:"text",placeholder:"Room",value:s,onKeyDown:function(e){13==e.keyCode&&a.push("/party/".concat(s))},onChange:function(e){c(e.target.value)},className:"text-input-field"}),Object(f.jsx)(d.b,{to:"/party/".concat(s),className:"enter-room-button",children:"Join room2"})]})})}),y=(s(106),s(107),function(e){var t=Object(c.useContext)(m),s=Object(c.useState)(""),n=Object(u.a)(s,2),a=n[0],r=n[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),l=o[0],b=o[1],h=Object(c.useState)(""),O=Object(u.a)(h,2),x=O[0],g=O[1];return Object(c.useEffect)((function(e){""!==a?j.ajax({url:"https://api.spotify.com/v1/users/".concat(a),type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t.currtoken)},dataType:"json",success:function(e){e&&(void 0==typeof e||(console.log("userData: ".concat(e)),b(e.display_name),e.images.length>0?g(e.images[0].url):(b("User does not exist"),g(""))))},error:function(e){console.log(e)}}):(console.log("else"),r(""),b(""),g(""))}),[a]),Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),Object(f.jsx)("input",{placeholder:"Search for a user",type:"search",id:"user_searchbar",autoComplete:"off",className:"user-searchbarChatUserSearch",onChange:function(){r(document.getElementById("user_searchbar").value)}}),""!==l&&""!==x?Object(f.jsx)("div",{className:"result-containerChatUserSearch",children:Object(f.jsx)("ul",{className:"result-listChatUserSearch",id:"result-listChatUserSearch",children:Object(f.jsx)("li",{className:"user-info-itemChatUserSearch",children:Object(f.jsxs)("div",{children:[Object(f.jsx)(d.b,{to:"/chat/1",children:Object(f.jsx)("img",{className:"search-imageChatUserSearch",src:x})}),Object(f.jsx)("div",{className:"user-display-nameChatUserSearch",children:l})]})})})}):null,""!==l&&""==x?Object(f.jsx)("div",{className:"result-containerChatUserSearch",children:Object(f.jsx)("ul",{className:"result-listChatUserSearch",id:"result-listChatUserSearch",children:Object(f.jsx)("li",{className:"user-info-itemChatUserSearch",children:Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"user-display-nameChatUserSearch_2",children:l})})})})}):null]})}),N=function(){var e=n.a.useState(""),t=Object(u.a)(e,2),s=t[0],c=t[1],a=Object(b.g)();return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"home-container",children:[Object(f.jsx)("input",{type:"text",placeholder:"Room",value:s,onKeyDown:function(e){13===e.keyCode&&a.push("/chat/".concat(s))},onChange:function(e){c(e.target.value)},className:"text-input-field"}),Object(f.jsx)(d.b,{to:"/chat/".concat(s),className:"enter-room-button",children:"Join room"}),Object(f.jsx)(y,{})]})})},S=s(37),w=(s(109),s(27)),k=s(43),C=s(25),_=s.n(C),E="newChatMessage",I=function(e){var t=Object(c.useState)([]),s=Object(u.a)(t,2),n=s[0],a=s[1],r=Object(c.useRef)();Object(c.useEffect)((function(){return r.current=_()("http://localhost:4000",{query:{roomId:e}}),r.current.on(E,(function(e){var t=Object(k.a)(Object(k.a)({},e),{},{ownedByCurrentUser:e.senderId===r.current.id});a((function(e){return[].concat(Object(w.a)(e),[t])}))})),function(){r.current.disconnect()}}),[e]);return{messages:n,sendMessage:function(e){r.current.emit(E,{body:e,senderId:r.current.id})}}},A=(s(137),function(e){var t=Object(c.useContext)(m),s=/^(spotify:track:|https:\/\/[a-z]+\.spotify\.com\/track\/)([0-9a-z-A-Z]{22})/,a=n.a.useState(""),r=Object(u.a)(a,2),i=r[0],o=r[1],l=n.a.useState(""),d=Object(u.a)(l,2),b=d[0],h=d[1],O=n.a.useState(""),x=Object(u.a)(O,2),g=x[0],p=x[1];return Object(c.useEffect)((function(){!function(e){var c=e.match(s)[2];j.ajax({url:"https://api.spotify.com/v1/tracks/".concat(c),type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t.currtoken)},success:function(e){e||o("https://i.pinimg.com/originals/d4/e3/60/d4e3604d2811dbe178801f48e6a2ae69.jpg"),o(e.album.images[0].url),h(e.name),p(e.artists[0].name)},error:function(e){console.log(e),o("https://i.pinimg.com/originals/d4/e3/60/d4e3604d2811dbe178801f48e6a2ae69.jpg")}})}(e.message)}),[]),Object(f.jsxs)("div",{className:"song-message-container",children:[Object(f.jsx)("img",{className:"search-images",src:i}),Object(f.jsx)("div",{className:"song-name",children:b}),Object(f.jsx)("div",{className:"song-artist",children:g})]})}),U=(s(138),function(e){var t=Object(c.useContext)(m),s=n.a.useState([]),a=Object(u.a)(s,2),r=a[0],i=a[1],o=n.a.useState(""),l=Object(u.a)(o,2),d=l[0],b=l[1];var h=function(e){var t=document.getElementById("new-message-input-field");!function(e,t){var s=Object.getOwnPropertyDescriptor(e,"value").set,c=Object.getPrototypeOf(e),n=Object.getOwnPropertyDescriptor(c,"value").set;s&&s!==n?n.call(e,t):s.call(e,t)}(t,e+" "+t.value),t.dispatchEvent(new Event("input",{bubbles:!0}))};return Object(c.useEffect)((function(){r.length=0,i([]),i([]),r.length=0,""!=d&&j.ajax({url:"https://api.spotify.com/v1/search?q=".concat(d,"&type=track&limit=").concat(5,"&offset=0"),type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t.currtoken)},dataType:"json",success:function(e){e.tracks.items.forEach((function(e){i((function(t){return[].concat(Object(w.a)(t),[e])}))}))},error:function(e){console.log(e)}})}),[d]),Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),Object(f.jsx)("input",{placeholder:"Search for a song",type:"search",id:"searchbar",autoComplete:"off",className:"song-searchbar",onChange:function(){i([]),r.length=0,b(document.getElementById("searchbar").value)}}),Object(f.jsx)("div",{className:"result-container",children:Object(f.jsx)("ul",{className:"result-list",children:r.slice(0,5).map((function(e){return Object(f.jsx)("li",{className:"song-info-list-item",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{className:"search-images",src:e.album.images[0].url,onClick:function(){h(e.external_urls.spotify),i([]),r.length=0,document.getElementById("searchbar").value=""}},e.external_urls.spotify),Object(f.jsx)("div",{className:"song-name",children:e.name}),Object(f.jsx)("div",{className:"song-artist",children:e.artists[0].name})]})})}))})})]})}),D=(s(42),function(e){var t=/(spotify:track:|https:\/\/[a-z]+\.spotify\.com\/track\/)([0-9a-z-A-Z]{22})/g,s=/(http:|https:|ftp:)\/\/[a-zA-Z0-9]+[.][a-z]+\/*[^ \n]*/g,a=e.match.params.roomId,r=I(a),i=r.messages,o=r.sendMessage,l=n.a.useState(""),j=Object(u.a)(l,2),d=j[0],b=j[1],h=n.a.useState([]),O=Object(u.a)(h,2),x=O[0],g=O[1],p=Object(c.useContext)(m),v=n.a.useState(!1),y=Object(u.a)(v,2),N=y[0],w=y[1],k=n.a.useState(!1),C=Object(u.a)(k,2),_=C[0],E=C[1],D=n.a.useState(!0),L=Object(u.a)(D,2),P=L[0],T=L[1],z=(n.a.useCallback((function(){return T(!P)})),function(){if(""!==d){o(d);var e=document.getElementById("messages-container");setTimeout((function(){e.scrollTop=1e9}),100),b("")}else b("")});return Object(f.jsx)("div",{className:"chat-room-page",children:Object(f.jsxs)("div",{className:"chat-room-container",children:[Object(f.jsx)("h1",{className:"chat-room-title",children:"Chat Room"}),Object(f.jsxs)("h2",{className:"room-name",children:["Room: ",a]}),Object(f.jsx)("div",{children:Object(f.jsx)(U,{children:"SPOTIFY SEARCH"})}),Object(f.jsx)("div",{className:"messages-container",id:"messages-container",children:Object(f.jsx)("ol",{className:"messages-list",children:i.map((function(e,c){if(l=e.body,t.test(l)){var n=new Set(e.body.match(t)),a=Array.from(n),r=e.body.replace(/[ \n]*spotify:track:|https:\/\/[a-z]+\.spotify\.com\/track\/([0-9a-z-A-Z]{22})([?]si=[a-zA-Z0-9]{22})?([ \n]*)/g,""),i=""===r;return Object(f.jsxs)("div",{children:[i?null:Object(f.jsx)("li",{className:"message-item ".concat(e.ownedByCurrentUser?"my-message":"received-message"),children:Object(f.jsx)("div",{children:r})},c),a.map((function(t,s){return Object(f.jsx)("li",{className:"message-item ".concat(e.ownedByCurrentUser?"my-message":"received-message"),children:Object(f.jsx)("div",{onClick:function(){!function(e){var t=e.match(/(spotify:track:|https:\/\/[a-z]+\.spotify\.com\/track\/)([0-9a-z-A-Z]{22})/)[2],s="spotify:track:".concat(t);g([s])}(t),w(!0)},children:Object(f.jsx)(A,{message:t})})},s)}))]})}if(function(e){return!!s.test(e)}(e.body)){var o=e.body.split(" ");return Object(f.jsx)("li",{className:"message-item ".concat(e.ownedByCurrentUser?"my-message":"received-message"),children:o.map((function(e,t){var s=/(http:|https:|ftp:)\/\/[a-zA-Z0-9]+[.][a-z]+\/*[^ \n]*/g.test(e);return Object(f.jsx)("div",{children:s?Object(f.jsxs)("a",{href:e,target:"_blank",rel:"noreferrer",children:[e," "]}):Object(f.jsx)("div",{children:e})},t)}))},c)}return Object(f.jsx)("li",{className:"message-item ".concat(e.ownedByCurrentUser?"my-message":"received-message"),children:e.body},c);var l}))})}),Object(f.jsx)("textarea",{className:"new-message-input-field",value:d,onKeyDown:function(e){13===e.keyCode&&(E(!0),z())},onChange:function(e){e.preventDefault(),!0!==_&&b(e.target.value),E(!1)},placeholder:"Write message...",id:"new-message-input-field",onKeyPress:function(e){return"Enter"===e.key?z():null}}),Object(f.jsx)("button",{onClick:z,className:"send-message-button",children:"Send"}),Object(f.jsx)("div",{children:N?Object(f.jsx)("button",{onClick:function(){return w(!1)},children:Object(f.jsx)("img",{src:"https://1001freedownloads.s3.amazonaws.com/vector/thumb/70571/close-button.png",className:"x-button"})}):null}),Object(f.jsx)("div",{children:N?Object(f.jsx)(S.a,{token:p.currtoken,uris:x,autoPlay:"true",showSaveIcon:"true",name:"Auxswap"}):null})]})})});var L=function(){return Object(f.jsx)(d.a,{children:Object(f.jsxs)(b.d,{children:[Object(f.jsx)(b.b,{exact:!0,path:"/chat",component:N}),Object(f.jsx)(b.b,{exact:!0,path:"/home",component:X}),Object(f.jsx)(b.b,{exact:!0,path:"/chat/:roomId",component:D}),Object(f.jsx)(b.b,{exact:!0,path:"/player",component:V}),Object(f.jsx)(b.b,{exact:!0,path:"/party",component:Y})]})})};s(156);function P(e){var t=Object(c.useState)(),s=Object(u.a)(t,2),n=s[0],a=s[1];return Object(c.useEffect)((function(){a(e.members)}),[e]),Object(f.jsx)("div",{className:"userContainer",children:n?n.map((function(e){var t=e.name,s=e.data,c=e.id;return Object(f.jsxs)("div",{className:"userBlock",children:[Object(f.jsx)("img",{src:s,className:"userIcon"}),Object(f.jsx)("div",{className:"userName",children:t})]},c)})):null})}var T=s(193);s(157),s(158);function z(e){var t=e.song,s=e.setsong;return Object(f.jsx)("div",{dclassName:"result-container",children:Object(f.jsx)("ul",{className:"result-list-party",children:Object(f.jsx)("li",{className:"song-info-list-item-party",onClick:function(){t&&s(t)},children:Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{className:"search-images",src:t.image}),Object(f.jsx)("div",{className:"song-name",children:t.songName}),Object(f.jsx)("div",{className:"song-artist",children:t.artist})]})})})})}function R(e){var t=e.api,s=e.handleSongSend,n=Object(c.useState)(),a=Object(u.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),l=Object(u.a)(o,2),j=l[0],d=l[1],b=Object(c.useState)([]),m=Object(u.a)(b,2),h=m[0],O=m[1];function x(e){s(e),d("")}return Object(c.useEffect)((function(){t&&i(t)}),[t]),Object(c.useEffect)((function(){if(r)return j?void r.searchTracks(j).then((function(e){O(e.body.tracks.items.map((function(e){return{songName:e.name,artist:e.artists[0].name,image:e.album.images[2].url,songUrl:e.uri}})))})):O([])}),[j,r]),Object(f.jsxs)("div",{className:"search-box",children:[Object(f.jsx)(T.a,{type:"search",placeholder:"Enter song name",value:j,onChange:function(e){return d(e.target.value)}}),Object(f.jsx)("div",{className:"song-box",children:h.map((function(e){return Object(f.jsx)(z,{song:e,setsong:x},e.songUrl)}))}),Object(f.jsx)("div",{className:"decision-box"})]})}s(162);function B(e){var t=e.song;return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:t.image}),Object(f.jsx)("div",{className:"song-name",children:t.songName}),Object(f.jsx)("div",{className:"artist-name",children:t.artist})]})})}var K="song_send",q="get_top_list",H=function(e){var t=Object(c.useState)(""),s=Object(u.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(),i=Object(u.a)(r,2),o=i[0],l=i[1],d=Object(c.useState)(""),b=Object(u.a)(d,2),h=b[0],O=b[1],f=Object(c.useContext)(m),x=Object(c.useState)(),g=Object(u.a)(x,2),p=g[0],v=g[1],y=Object(c.useState)(),N=Object(u.a)(y,2),S=N[0],w=N[1],k=Object(c.useState)(),C=Object(u.a)(k,2),E=C[0],I=C[1],A=Object(c.useRef)(),U=Object(c.useState)(),D=Object(u.a)(U,2),L=D[0],P=D[1],T=Object(c.useState)(),z=Object(u.a)(T,2),R=z[0],B=z[1],H=Object(c.useState)(!1),J=Object(u.a)(H,2),Z=J[0],G=J[1];function M(e,t){j.ajax({url:"https://api.spotify.com/v1/me/player/play?device_id="+t,type:"PUT",data:'{"uris": ["'+e+'"]}',beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+f.currtoken)},success:G(!0)})}Object(c.useEffect)((function(){window.onbeforeunload=function(){return!1},l(e.room),e.setAPi(e.spotify.setAccessToken(f.currtoken)),e.spotify.getMe().then((function(e){O(e.body.images[0].url),a(e.body.display_name)}),(function(e){console.log(e)}))}),[e.room,f.currtoken]),Object(c.useEffect)((function(){e.SDK&&P(e.SDK)}),[e.SDK]),Object(c.useEffect)((function(){e.ID&&B(e.ID)}),[e.ID]),Object(c.useEffect)((function(){L&&R&&E&&L.getCurrentState().then((function(e){if(e)return 1==e.paused&&Z?(G(!1),void F()):void(1!=e.paused||Z?console.log(e):M(E.songUrl,R));Z||M(E.songUrl,R)}))}),[E]),Object(c.useEffect)((function(){if(L)return""!=n&&""!=h?(A.current=_()("http://localhost:4000",{query:o}),A.current.emit("newJoin",{name:n,data:h,room:o}),A.current.on("get_room_data",(function(e){var t=e.users;v(t)})),A.current.on(K,(function(e){var t=e.songs;w(t)})),A.current.on(q,(function(e){var t=e.song;I(t)})),W(),function(){A.current.disconnect(),L.disconnect()}):void 0}),[n,h,o]);var F=function(){console.log("next...."),A.current.emit("get_next")},W=function(){var e=setInterval((function(){A.current.emit(q)}),1e3);return function(){clearInterval(e)}};return{memberlist:p,songList:S,sendSong:function(e){A.current.emit(K,{song:e})},currentSong:E}},J=s(84),Z=s.n(J);function G(e){var t=e.handleID,s=e.SDK,n=Object(c.useContext)(m);function a(){var e=n.currtoken,c=new window.Spotify.Player({name:"Aux2",getOAuthToken:function(t){t(e)}});console.log(c),c.addListener("initialization_error",(function(e){var t=e.message;console.error(t)})),c.addListener("authentication_error",(function(e){var t=e.message;console.error(t)})),c.addListener("account_error",(function(e){var t=e.message;console.error(t)})),c.addListener("playback_error",(function(e){var t=e.message;console.error(t)})),c.addListener("ready",(function(e){var s=e.device_id;console.log("Ready with Device ID",s),t(s)})),c.addListener("not_ready",(function(e){var t=e.device_id;console.log("Device ID has gone offline",t)})),c.connect(),s(c)}return Object(c.useEffect)((function(){window.onSpotifyWebPlaybackSDKReady=function(){a()}})),Object(f.jsx)("div",{children:Object(f.jsx)(Z.a,{url:"https://sdk.scdn.co/spotify-player.js",onLoad:a})})}s(163);var M=s(85),F=new(s.n(M).a);var W=function(e){var t=e.match.params.roomId,s=Object(c.useState)(F),n=Object(u.a)(s,2),a=n[0],r=n[1],i=Object(c.useState)(),o=Object(u.a)(i,2),l=o[0],j=o[1],d=Object(c.useState)([]),b=Object(u.a)(d,2),m=b[0],h=b[1],O=Object(c.useState)(),x=Object(u.a)(O,2),g=x[0],p=x[1],v=Object(c.useState)(),y=Object(u.a)(v,2),N=y[0],S=y[1],w=H({room:t,spotify:a,setAPi:r,SDK:N,ID:g});return Object(c.useEffect)((function(){w.songList&&h(w.songList)}),[w.songList]),Object(c.useEffect)((function(){j(w.memberlist)}),[w.memberlist]),Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"party-room-container",children:[Object(f.jsx)("h1",{className:"party-room-title",children:"Party room"}),Object(f.jsxs)("h2",{className:"party-room-name",children:["Room: ",t]}),Object(f.jsxs)("div",{className:"user-container",children:[Object(f.jsx)("h3",{className:"user-title",children:"Active Users"}),Object(f.jsx)(P,{members:l})]}),Object(f.jsx)("div",{className:"Search-Bar",children:Object(f.jsx)(R,{api:a,handleSongSend:function(e){w.sendSong(e)}})}),Object(f.jsx)("div",{className:"song-container",children:m.map((function(e){return Object(f.jsx)(B,{song:e},e.songUrl)}))}),Object(f.jsx)(G,{handleID:function(e){p(e)},SDK:function(e){S(e)}})]})})};var Y=function(){return Object(f.jsx)(d.a,{children:Object(f.jsxs)(b.d,{children:[Object(f.jsx)(b.b,{exact:!0,path:"/party",component:v}),Object(f.jsx)(b.b,{exact:!0,path:"/party/:roomId",component:W}),Object(f.jsx)(b.b,{exact:!0,path:"/player",component:V}),Object(f.jsx)(b.b,{exact:!0,path:"/chat",component:L})]})})};s(72),s(190);var Q=function(e){var t=n.a.useState(""),s=Object(u.a)(t,2),a=s[0],r=s[1],i=n.a.useState(""),o=Object(u.a)(i,2),l=o[0],j=o[1];return Object(c.useEffect)((function(){r(e.displayname),j(e.imageurl)}),[e.imageurl,e.displayname]),Object(f.jsxs)("nav",{className:"navClass",children:[Object(f.jsx)("div",{}),Object(f.jsxs)("ul",{className:"navList",children:[Object(f.jsx)("li",{className:"navListElementsLogo",children:Object(f.jsx)(d.c,{to:"/home",children:Object(f.jsx)("img",{src:O,className:"navLogo"})})}),Object(f.jsx)("li",{className:"navListElements",children:Object(f.jsx)(d.c,{to:"/chat",children:" Chat "})}),Object(f.jsx)("li",{className:"navListElements",children:Object(f.jsx)(d.c,{to:"/party",children:" Party "})}),Object(f.jsxs)("div",{className:"userNav",children:[Object(f.jsx)("li",{children:Object(f.jsx)("img",{className:"navImage",src:l})}),Object(f.jsxs)("li",{className:"displayName",children:[" ",a," "]})]})]})]})};var V=function(){var e=Object(c.useContext)(m),t=n.a.useState({album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0}),s=Object(u.a)(t,2),a=s[0],r=s[1],i=n.a.useState("Paused"),o=Object(u.a)(i,2),l=o[0],d=o[1],b=n.a.useState(0),h=Object(u.a)(b,2),O=h[0],x=h[1],v=n.a.useState(!1),y=Object(u.a)(v,2),N=y[0],S=y[1],w=n.a.useState(!1),k=Object(u.a)(w,2),C=k[0],_=k[1];return Object(c.useEffect)((function(){j.ajax({url:"https://api.spotify.com/v1/me/player",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e.currtoken)},success:function(e){e?(r(e.item),d(e.is_playing),x(e.progress_ms),S(!1)):S(!0)},error:function(e){console.log(e),S(!0),_(!0)}})}),[e.currtoken]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(Q,{}),Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("img",{src:p,className:"App-logo",alt:"logo"}),!N&&Object(f.jsx)(g,{item:a,is_playing:l,progress_ms:O}),N&&C&&Object(f.jsx)("p",{children:"Uh oh! An error occurred when making contact with the API :("}),N&&!C&&Object(f.jsx)("p",{children:"Are you logged into Spotify? Make sure you are logged in AND that something is playing."})]})]})};var X=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("header",{className:"head1",children:"Welcome to AuxSwap!"}),Object(f.jsx)("img",{src:O,className:"logoHome"}),Object(f.jsxs)("div",{class:"row",children:[Object(f.jsx)(d.c,{to:"/chat",children:Object(f.jsxs)("div",{class:"column",children:[Object(f.jsx)("h2",{className:"head2",children:"Chat"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{className:"bullets",children:"Chat with friends"}),Object(f.jsx)("li",{className:"bullets",children:"Search and share songs"}),Object(f.jsx)("li",{className:"bullets",children:"Play songs directly in the chat"})]})]})}),Object(f.jsx)(d.c,{to:"/party",children:Object(f.jsxs)("div",{class:"column2",children:[Object(f.jsx)("h2",{className:"head2",children:"Party Lobbies"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{className:"bullets",children:"Join lobbies to listen together"}),Object(f.jsx)("li",{className:"bullets",children:"Add songs to the queue"}),Object(f.jsx)("li",{className:"bullets",children:"Hear new music and share with your friends"})]})]})})]})]})};var $=function(e){return Object(c.useEffect)((function(){var t=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var s=t.split("=");e[s[0]]=decodeURIComponent(s[1]),console.log(decodeURIComponent(s[1]))}return e}),{}),s=t.access_token,c=t.refresh_token;s&&c?e.updateToken(s,c):s&&e.JustToken(s)}),[e]),null};var ee=function(){var e=n.a.useState(null),t=Object(u.a)(e,2),s=t[0],a=t[1],r=n.a.useState(null),i=Object(u.a)(r,2),O=i[0],g=i[1],p=n.a.useState(""),v=Object(u.a)(p,2),y=v[0],N=v[1],S=n.a.useState(""),w=Object(u.a)(S,2),k=w[0],C=w[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.ajax({url:"https://api.spotify.com/v1/me",type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t)},success:function(e){e||console.log("null values"),N(e.display_name),C(e.images[0].url)},error:function(e){console.log("IN GET DATA ERROR",t),console.log(e)}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=window.sessionStorage.getItem("token"),s=window.sessionStorage.getItem("refresh");t&&(a(t),e(t),s&&g(s))}),[]),Object(f.jsx)(m.Provider,{value:{currtoken:s},children:Object(f.jsx)(h.Provider,{value:{refreshcurrtoken:O},children:Object(f.jsx)(d.a,{children:Object(f.jsxs)(b.d,{children:[Object(f.jsx)(b.b,{exact:!0,path:"/",children:s?Object(f.jsx)(b.a,{to:"/home"}):Object(f.jsx)(x,{})}),Object(f.jsx)(b.b,{exact:!0,path:"/home",children:s?Object(f.jsxs)("div",{children:[" ",Object(f.jsx)(Q,{displayname:y,imageurl:k}),Object(f.jsx)(X,{})," "]}):Object(f.jsx)(b.a,{to:"/"})}),Object(f.jsx)(b.b,{path:"/callbackpage",children:s?Object(f.jsx)(b.a,{to:"/home"}):Object(f.jsx)($,{updateToken:function(e,t){window.sessionStorage.setItem("token",e),window.sessionStorage.setItem("refresh",t),a(e),g(t)},JustToken:function(e){window.sessionStorage.setItem("token",e),a(e)}})}),Object(f.jsxs)(b.b,{exact:!0,path:"/chat",children:[Object(f.jsx)(Q,{displayname:y,imageurl:k})," ",Object(f.jsx)(L,{})]}),Object(f.jsxs)(b.b,{exact:!0,path:"/party",children:[Object(f.jsx)(Q,{displayname:y,imageurl:k})," ",Object(f.jsx)(Y,{})]})]})})})})},te=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,194)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(ee,{})}),document.getElementById("root")),te()},72:function(e,t,s){},91:function(e,t,s){},93:function(e,t,s){},94:function(e,t,s){},96:function(e,t,s){},97:function(e,t,s){},98:function(e,t,s){}},[[191,1,2]]]);
//# sourceMappingURL=main.428352ca.chunk.js.map