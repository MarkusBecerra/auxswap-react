(this["webpackJsonpauxswap-react"]=this["webpackJsonpauxswap-react"]||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},126:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},180:function(e,t){},190:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(74),r=n.n(a),o=(n(91),n(12)),i=n.n(o),l=n(21),u=n(2),j=(n(93),n(6)),d=n(5),b=n(4),m=s.a.createContext(),h=s.a.createContext(),f=(n(94),n.p+"static/media/logo_1_transparent.f6b8161d.png"),O=n(1);var p=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{className:"head",children:"AuxSwap"}),Object(O.jsx)("img",{src:f,className:"mainLogo"}),Object(O.jsxs)("body",{className:"bod",children:["A web application using Spotify. ",Object(O.jsx)("br",{}),"Listen together and chat with your friends!"]}),Object(O.jsx)("a",{className:"Login-button",href:"".concat("http://localhost:4000","/auth/login"),children:"Login to Spotify"})]})},g=(n(96),function(e){var t={backgroundImage:"url(".concat(e.item.album.images[0].url,")")},n={width:100*e.progress_ms/e.item.duration_ms+"%"};return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("div",{className:"main-wrapper",children:[Object(O.jsx)("div",{className:"now-playing__img",children:Object(O.jsx)("img",{src:e.item.album.images[0].url})}),Object(O.jsxs)("div",{className:"now-playing__side",children:[Object(O.jsx)("div",{className:"now-playing__name",children:e.item.name}),Object(O.jsx)("div",{className:"now-playing__artist",children:e.item.artists[0].name}),Object(O.jsx)("div",{className:"now-playing__status",children:e.is_playing?"Playing":"Paused"}),Object(O.jsx)("div",{className:"progress",children:Object(O.jsx)("div",{className:"progress__bar",style:n})})]}),Object(O.jsx)("div",{className:"background",style:t})," "]})})}),x=(n(97),n.p+"static/media/logo.6ce24c58.svg"),v=(n(98),n(75)),y=n.n(v);function S(){var e=Object(c.useContext)(m),t=Object(c.useState)(),n=Object(u.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(),o=Object(u.a)(r,2),i=o[0],l=o[1];return Object(c.useEffect)((function(){window.onSpotifyWebPlaybackSDKReady=function(){return{SDK_object:s,SDK_ID:i}}})),Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{url:"https://sdk.scdn.co/spotify-player.js",onLoad:function(){var t=new window.Spotify.Player({name:"AuxSwap",getOAuthToken:function(t){t(e.currtoken)}});t.addListener("initialization_error",(function(e){var t=e.message;console.error(t)})),t.addListener("authentication_error",(function(e){var t=e.message;console.error(t)})),t.addListener("account_error",(function(e){var t=e.message;console.error(t)})),t.addListener("playback_error",(function(e){var t=e.message;console.error(t)})),t.addListener("ready",(function(e){var t=e.device_id;console.log("Ready with Device ID",t),l(t)})),t.addListener("not_ready",(function(e){var t=e.device_id;console.log("Device ID has gone offline",t)})),t.connect(),a(t)}})})}var N=function(){var e=s.a.useState(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(b.g)();return Object(O.jsxs)("div",{children:[Object(O.jsx)(S,{}),Object(O.jsxs)("div",{className:"home-container",children:[Object(O.jsx)("input",{type:"text",placeholder:"Room",value:n,onKeyDown:function(e){13==e.keyCode&&a.push("/party/".concat(n))},onChange:function(e){c(e.target.value)},className:"text-input-field"}),Object(O.jsx)(d.b,{to:"/party/".concat(n),className:"enter-room-button",children:"Join Party"})]})]})},k=(n(106),n(107),n(23)),w=n.n(k),C=n(22),_=n(40),E=(n(126),n(44)),A=n(29),I=n.n(A),D="newChatMessage",R=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),s=n[0],a=n[1],r=Object(c.useRef)();Object(c.useEffect)((function(){return r.current=I()("http://localhost:4000",{query:{roomId:e}}),r.current.on(D,(function(e){var t=Object(E.a)(Object(E.a)({},e),{},{isCurrentUser:e.senderId===r.current.id});a((function(e){return[].concat(Object(C.a)(e),[t])}))})),function(){r.current.disconnect()}}),[e]);return{messages:s,sendMessage:function(e){r.current.emit(D,{body:e,senderId:r.current.id})},setMessages:a}},T=(n(154),function(e){var t=Object(c.useContext)(m),n=/^(spotify:track:|https:\/\/[a-z]+\.spotify\.com\/track\/)([0-9a-z-A-Z]{22})/,a=s.a.useState(""),r=Object(u.a)(a,2),o=r[0],i=r[1],l=s.a.useState(""),d=Object(u.a)(l,2),b=d[0],h=d[1],f=s.a.useState(""),p=Object(u.a)(f,2),g=p[0],x=p[1];return Object(c.useEffect)((function(){!function(e){var c=e.match(n)[2];j.ajax({url:"https://api.spotify.com/v1/tracks/".concat(c),type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t.currtoken)},success:function(e){e||i("https://i.pinimg.com/originals/d4/e3/60/d4e3604d2811dbe178801f48e6a2ae69.jpg"),i(e.album.images[0].url),h(e.name),x(e.artists[0].name)},error:function(e){console.log(e),i("https://i.pinimg.com/originals/d4/e3/60/d4e3604d2811dbe178801f48e6a2ae69.jpg")}})}(e.message)}),[]),Object(O.jsxs)("div",{className:"song-message-container",children:[Object(O.jsx)("img",{className:"search-images",src:o}),Object(O.jsx)("div",{className:"song-name",children:b}),Object(O.jsx)("div",{className:"song-artist",children:g})]})}),P=(n(155),function(e){var t=Object(c.useContext)(m),n=s.a.useState([]),a=Object(u.a)(n,2),r=a[0],o=a[1],i=s.a.useState(""),l=Object(u.a)(i,2),d=l[0],b=l[1];var h=function(e){var t=document.getElementById("new-message-input-field");!function(e,t){var n=Object.getOwnPropertyDescriptor(e,"value").set,c=Object.getPrototypeOf(e),s=Object.getOwnPropertyDescriptor(c,"value").set;n&&n!==s?s.call(e,t):n.call(e,t)}(t,e+" "+t.value),t.dispatchEvent(new Event("input",{bubbles:!0}))};return Object(c.useEffect)((function(){r.length=0,o([]),o([]),r.length=0,""!=d&&j.ajax({url:"https://api.spotify.com/v1/search?q=".concat(d,"&type=track&limit=").concat(5,"&offset=0"),type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t.currtoken)},dataType:"json",success:function(e){e.tracks.items.forEach((function(e){o((function(t){return[].concat(Object(C.a)(t),[e])}))}))},error:function(e){console.log(e)}})}),[d]),Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("input",{placeholder:"Search for a song",type:"search",id:"searchbar",autoComplete:"off",className:"song-searchbar",onChange:function(){o([]),r.length=0,b(document.getElementById("searchbar").value)}}),Object(O.jsx)("div",{className:"result-container",children:Object(O.jsx)("ul",{className:"result-list",children:r.slice(0,5).map((function(e){return Object(O.jsx)("li",{className:"song-info-list-item",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{className:"search-images",src:e.album.images[0].url,onClick:function(){h(e.external_urls.spotify),o([]),r.length=0,document.getElementById("searchbar").value=""}},e.external_urls.spotify),Object(O.jsx)("div",{className:"song-name",children:e.name}),Object(O.jsx)("div",{className:"song-artist",children:e.artists[0].name})]})})}))})})]})}),U=function(e){var t=Object(c.useContext)(m),n=/(spotify:track:|https:\/\/[a-z]+\.spotify\.com\/track\/)([0-9a-z-A-Z]{22})/g,a=/(http:|https:|ftp:)\/\/[a-zA-Z0-9]+[.][a-z]+\/*[^ \n]*/g,r=e.match.params.roomId,o=s.a.useState(""),d=Object(u.a)(o,2),b=d[0],h=d[1],f=R(r),p=f.messages,g=f.sendMessage,x=f.setMessages,v=s.a.useState(""),y=Object(u.a)(v,2),S=y[0],N=y[1],k=s.a.useState([]),E=Object(u.a)(k,2),A=E[0],I=E[1],D=s.a.useState(!1),U=Object(u.a)(D,2),L=U[0],z=U[1],K=s.a.useState(!1),B=Object(u.a)(K,2),q=B[0],H=B[1],G=s.a.useState(!0),J=Object(u.a)(G,2),W=J[0],M=J[1],Z=s.a.useCallback((function(){return M(!W)})),F=s.a.useState(),V=Object(u.a)(F,2)[1],Y=(s.a.useCallback((function(){return V({})}),[]),function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.currtoken){e.next=2;break}return e.abrupt("return","");case 2:return e.next=4,j.ajax({url:"https://api.spotify.com/v1/me",type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t.currtoken)},success:function(e){e||console.log("null values"),h(e.id),console.log("right after set: ".concat(b))},error:function(e){console.log("IN GET DATA ERROR",t.currtoken),console.log(e)}});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());s.a.useEffect((function(){Y()})),s.a.useEffect((function(){$(r)}),[b]);var Q=function(){if(""!==S){g(S),X(S,r);var e=document.getElementById("messages-container");setTimeout((function(){e.scrollTop=1e9}),100),N("")}else N("")},X=function(e,t){var n={session:t,userID:b,content:e};w.a.post("".concat("http://localhost:4000","/messages"),n).catch((function(e){alert(e.message)}))},$=function(e){console.log("here"),b&&W&&(w.a.get("".concat("http://localhost:4000","/messages/").concat(e),{params:{id:e},headers:{Accept:"application/json","Content-Type":"application/json"}},{responseType:"json"}).then((function(e){console.log("retrive from db here");for(var t=0;t<e.data.length;t++)e.data[t].sender_id==b?function(){var n={body:e.data[t].content,senderId:e.data[t].sender_id,isCurrentUser:!0};x((function(e){return[].concat(Object(C.a)(e),[n])}))}():function(){var n={body:e.data[t].content,senderId:e.data[t].sender_id,isCurrentUser:!1};x((function(e){return[].concat(Object(C.a)(e),[n])}))}()})).catch((function(e){console.log(e.type)})),Z())};return Object(O.jsx)("div",{className:"chat-room-page",children:Object(O.jsxs)("div",{className:"chat-room-container",children:[Object(O.jsx)("h1",{className:"chat-room-title",children:"Chat Room"}),Object(O.jsx)("h2",{className:"room-name",children:b}),Object(O.jsx)("div",{children:Object(O.jsx)(P,{children:"SPOTIFY SEARCH"})}),Object(O.jsx)("div",{className:"messages-container",id:"messages-container",children:Object(O.jsx)("ol",{className:"messages-list",children:(console.log(p.length),p.map((function(e,t){if(l=e.body,n.test(l)){var c=new Set(e.body.match(n)),s=Array.from(c),r=e.body.replace(/[ \n]*spotify:track:|https:\/\/[a-z]+\.spotify\.com\/track\/([0-9a-z-A-Z]{22})([?]si=[a-zA-Z0-9]{22})?([ \n]*)/g,""),o=""===r;return Object(O.jsxs)("div",{children:[o?null:Object(O.jsx)("li",{className:"message-item ".concat(e.isCurrentUser?"my-message":"received-message"),children:Object(O.jsx)("div",{children:r})},t),s.map((function(t,n){return Object(O.jsx)("li",{className:"message-item ".concat(e.isCurrentUser?"my-message":"received-message"),children:Object(O.jsx)("div",{onClick:function(){!function(e){var t=e.match(/(spotify:track:|https:\/\/[a-z]+\.spotify\.com\/track\/)([0-9a-z-A-Z]{22})/)[2],n="spotify:track:".concat(t);I([n])}(t),z(!0)},children:Object(O.jsx)(T,{message:t})})},n)}))]})}if(function(e){return!!a.test(e)}(e.body)){var i=e.body.split(" ");return Object(O.jsx)("li",{className:"message-item ".concat(e.isCurrentUser?"my-message":"received-message"),children:i.map((function(e,t){var n=/(http:|https:|ftp:)\/\/[a-zA-Z0-9]+[.][a-z]+\/*[^ \n]*/g.test(e);return Object(O.jsx)("div",{children:n?Object(O.jsxs)("a",{href:e,target:"_blank",rel:"noreferrer",children:[e," "]}):Object(O.jsx)("div",{children:e})},t)}))},t)}return Object(O.jsx)("li",{className:"message-item ".concat(e.isCurrentUser?"my-message":"received-message"),children:e.body},t);var l})))})}),Object(O.jsx)("textarea",{className:"new-message-input-field",value:S,onKeyDown:function(e){13===e.keyCode&&(H(!0),Q())},onChange:function(e){e.preventDefault(),!0!==q&&N(e.target.value),H(!1)},placeholder:"Write message...",id:"new-message-input-field",onKeyPress:function(e){return"Enter"===e.key?Q():null}}),Object(O.jsx)("button",{onClick:Q,className:"send-message-button",children:"Send"}),Object(O.jsx)("div",{children:L?Object(O.jsx)("button",{onClick:function(){return z(!1)},children:Object(O.jsx)("img",{src:"https://1001freedownloads.s3.amazonaws.com/vector/thumb/70571/close-button.png",className:"x-button"})}):null}),Object(O.jsx)("div",{children:L?Object(O.jsx)(_.a,{token:t.currtoken,uris:A,autoPlay:"true",showSaveIcon:"true",name:"Auxswap"}):null})]})})},L=function(e){var t=Object(c.useContext)(m),n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],o=a[1],b=Object(c.useState)(""),h=Object(u.a)(b,2),f=h[0],p=h[1],g=Object(c.useState)(""),x=Object(u.a)(g,2),v=x[0],y=x[1],S=Object(c.useState)(""),N=Object(u.a)(S,2),k=N[0],C=N[1],_=Object(c.useState)(""),E=Object(u.a)(_,2),A=E[0],I=E[1],D=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.currtoken){e.next=2;break}return e.abrupt("return","");case 2:return e.next=4,j.ajax({url:"https://api.spotify.com/v1/me",type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t.currtoken)},success:function(e){e||console.log("null values"),I(e.id)},error:function(e){console.log("IN GET DATA ERROR",t.currtoken),console.log(e)}});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s.a.useEffect((function(){D()}));Object(c.useEffect)((function(e){""!==r?j.ajax({url:"https://api.spotify.com/v1/users/".concat(r),type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t.currtoken)},dataType:"json",success:function(e){e&&(void 0==typeof e||(console.log("userData: ".concat(e)),p(e.display_name),e.images.length>0?y(e.images[0].url):(p("User does not exist"),y(""))))},error:function(e){console.log(e)}}):(o(""),p(""),y(""))}),[r]);var R=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat("http://localhost:4000","/session/").concat(r,"/").concat(A),{params:{user1:r,user2:A},headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){if(0==e.data.length){console.log("Its empty, need to post add one");var t={user1:A,user2:r};w.a.post("".concat("http://localhost:4000","/sessions"),t).then((function(e){C(e.data[1]),console.log("successful: ".concat(e.data[1]))})).catch((function(e){console.log("err: ".concat(e.message))}))}else C(e.data[0].session_id),console.log("Already exist")})).catch((function(e){console.log("err: ".concat(e.message))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("input",{placeholder:"Search for a user",type:"search",id:"user_searchbar",autoComplete:"off",className:"user-searchbarChatUserSearch",onChange:function(){o(document.getElementById("user_searchbar").value.toLowerCase())}}),""!==f&&""!==v?Object(O.jsx)("div",{className:"result-containerChatUserSearch",children:Object(O.jsx)("ul",{className:"result-listChatUserSearch",id:"result-listChatUserSearch",children:Object(O.jsx)("li",{className:"user-info-itemChatUserSearch",children:Object(O.jsxs)("div",{children:[Object(O.jsx)(d.b,{to:"/chat/".concat(k),children:Object(O.jsx)("img",{onClick:R,className:"search-imageChatUserSearch",src:v})}),Object(O.jsx)("div",{className:"user-display-nameChatUserSearch",children:f})]})})})}):null,""!==f&&""==v?Object(O.jsx)("div",{className:"result-containerChatUserSearch",children:Object(O.jsx)("ul",{className:"result-listChatUserSearch",id:"result-listChatUserSearch",children:Object(O.jsx)("li",{className:"user-info-itemChatUserSearch",children:Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"user-display-nameChatUserSearch_2",children:f})})})})}):null]})},z=function(){var e=s.a.useState(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(b.g)();return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"home-container",children:[Object(O.jsx)("input",{type:"text",placeholder:"Room",value:n,onKeyDown:function(e){13===e.keyCode&&a.push("/chat/".concat(n))},onChange:function(e){c(e.target.value)},className:"text-input-field"}),Object(O.jsx)(d.b,{to:"/chat/".concat(n),className:"enter-room-button",children:"Join room"}),Object(O.jsx)(L,{})]})})};var K=function(){return Object(O.jsx)(d.a,{children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{exact:!0,path:"/chat",component:z}),Object(O.jsx)(b.b,{exact:!0,path:"/home",component:ee}),Object(O.jsx)(b.b,{exact:!0,path:"/chat/:roomId",component:U}),Object(O.jsx)(b.b,{exact:!0,path:"/player",component:$}),Object(O.jsx)(b.b,{exact:!0,path:"/party",component:Q})]})})};n(156);function B(e){var t=Object(c.useState)(),n=Object(u.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){a(e.members)}),[e]),Object(O.jsx)("div",{className:"userContainer",children:s?s.map((function(e){var t=e.name,n=e.data,c=e.id;return Object(O.jsxs)("div",{className:"userBlock",children:[Object(O.jsx)("img",{src:n,className:"userIcon"}),Object(O.jsx)("div",{className:"userName",children:t})]},c)})):null})}var q=n(193);n(157),n(158);function H(e){var t=e.song,n=e.setsong;return Object(O.jsx)("div",{className:"song_re",children:Object(O.jsx)("ul",{className:"result-list-party",children:Object(O.jsx)("li",{className:"song-info-list-item-party",onClick:function(){t&&n(t)},children:Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{className:"search-images",src:t.image}),Object(O.jsx)("div",{className:"song-name",children:t.songName}),Object(O.jsx)("div",{className:"song-artist",children:t.artist})]})})})})}function G(e){var t=e.api,n=e.handleSongSend,s=Object(c.useState)(),a=Object(u.a)(s,2),r=a[0],o=a[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)([]),m=Object(u.a)(b,2),h=m[0],f=m[1];function p(e){n(e),d("")}return Object(c.useEffect)((function(){t&&o(t)}),[t]),Object(c.useEffect)((function(){if(r)return j?void r.searchTracks(j).then((function(e){f(e.body.tracks.items.map((function(e){return{songName:e.name,artist:e.artists[0].name,image:e.album.images[2].url,songUrl:e.uri}})))})):f([])}),[j,r]),Object(O.jsxs)("div",{className:"search-box",children:[Object(O.jsx)(q.a,{type:"search",placeholder:"Enter song name",value:j,onChange:function(e){return d(e.target.value)},className:"search-bar"}),Object(O.jsx)("div",{className:"song-box",children:h.map((function(e){return Object(O.jsx)(H,{song:e,setsong:p},e.songUrl)}))}),Object(O.jsx)("div",{className:"decision-box"})]})}n(162);function J(e){var t=e.song;return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:t.image}),Object(O.jsx)("div",{className:"song-name",children:t.songName}),Object(O.jsx)("div",{className:"artist-name",children:t.artist})]})})}var W="song_send",M="get_top_list",Z=function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(),o=Object(u.a)(r,2),i=o[0],l=o[1],d=Object(c.useState)(""),b=Object(u.a)(d,2),h=b[0],f=b[1],O=Object(c.useContext)(m),p=Object(c.useState)(),g=Object(u.a)(p,2),x=g[0],v=g[1],y=Object(c.useState)(),S=Object(u.a)(y,2),N=S[0],k=S[1],w=Object(c.useState)(),C=Object(u.a)(w,2),_=C[0],E=C[1],A=Object(c.useRef)();Object(c.useEffect)((function(){window.onbeforeunload=function(){return!1},l(e.room),e.setAPi(e.spotify.setAccessToken(O.currtoken)),e.spotify.getMe().then((function(e){f(e.body.images[0].url),a(e.body.display_name)}),(function(e){console.log(e)}))}),[e.room,O.currtoken]),Object(c.useEffect)((function(){if(""!=s&&""!=h)return A.current=I()("http://localhost:4000",{query:i}),A.current.emit("newJoin",{name:s,data:h,room:i}),A.current.on("get_room_data",(function(e){var t=e.users;v(t)})),A.current.on(W,(function(e){var t=e.songs;k(t)})),A.current.on(M,(function(e){var t=e.song;E(t)})),D(),function(){A.current.disconnect(),window.onSpotifyWebPlaybackSDKReady().SDK_object.disconnect()}}),[s,h,i]);var D=function(){A.current.emit(M),A.current.on(M,(function(e){var t=e.song;E(t)}))};return{memberlist:x,songList:N,sendSong:function(e){A.current.emit(W,{song:e})},currentSong:_,peakTop:D,nextSong:function(){console.log("next...."),A.current.emit("get_next"),A.current.on(W,(function(e){var t=e.songs;k(t)}))},SDKPlay:function(e){j.ajax({url:"https://api.spotify.com/v1/me/player/play?device_id="+window.onSpotifyWebPlaybackSDKReady().SDK_ID,type:"PUT",data:'{"uris": ["'+e+'"]}',beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+O.currtoken)}})}}},F=(n(163),n(85)),V=new(n.n(F).a);var Y=function(e){var t=e.match.params.roomId,n=Object(c.useState)(V),s=Object(u.a)(n,2),a=s[0],r=s[1],o=Object(c.useState)(),i=Object(u.a)(o,2),l=i[0],j=i[1],d=Object(c.useState)([]),b=Object(u.a)(d,2),m=b[0],h=b[1],f=Object(c.useState)(),p=Object(u.a)(f,2),g=p[0],x=p[1],v=Z({room:t,spotify:a,setAPi:r});return Object(c.useLayoutEffect)((function(){window.onSpotifyWebPlaybackSDKReady().SDK_object&&x(window.onSpotifyWebPlaybackSDKReady().SDK_object)})),Object(c.useEffect)((function(){v.songList&&(h(v.songList),v.peakTop())}),[v.songList]),Object(c.useEffect)((function(){j(v.memberlist)}),[v.memberlist]),Object(c.useEffect)((function(){v.currentSong&&g&&g.getCurrentState().then((function(e){e&&e.track_window.current_track.uri==v.currentSong.songUrl||v.SDKPlay(v.currentSong.songUrl)}))}),[v.currentSong]),Object(c.useEffect)((function(){if(g){var e=setInterval((function(){g.getCurrentState().then((function(e){e&&(console.log(e),1==e.paused&&m.length>0&&v.nextSong())}))}),1e3);return function(){clearInterval(e)}}})),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"party-room-container",children:[Object(O.jsx)("h1",{className:"party-room-title",children:"Party room"}),Object(O.jsxs)("h2",{className:"party-room-name",children:["Room: ",t]}),Object(O.jsxs)("div",{className:"user-container",children:[Object(O.jsx)("h3",{className:"user-title",children:"Active Users"}),Object(O.jsx)(B,{members:l}),Object(O.jsx)("div",{className:"volume_control",children:Object(O.jsx)("input",{type:"range",min:"1",max:"100",className:"slider",onChange:function(e){window.onSpotifyWebPlaybackSDKReady().SDK_object&&g&&g.setVolume(e.target.value/100)}})})]}),Object(O.jsx)("div",{className:"Search-Bar",children:Object(O.jsx)(G,{api:a,handleSongSend:function(e){v.sendSong(e)}})}),Object(O.jsx)("div",{className:"song-container",children:m.map((function(e){return Object(O.jsx)(J,{song:e},e.songUrl)}))})]})})};var Q=function(){return Object(O.jsx)(d.a,{children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{exact:!0,path:"/party",component:N}),Object(O.jsx)(b.b,{exact:!0,path:"/party/:roomId",component:Y}),Object(O.jsx)(b.b,{exact:!0,path:"/player",component:$}),Object(O.jsx)(b.b,{exact:!0,path:"/chat",component:K})]})})};n(73),n(190);var X=function(e){var t=s.a.useState(""),n=Object(u.a)(t,2),a=n[0],r=n[1],o=s.a.useState(""),i=Object(u.a)(o,2),l=i[0],j=i[1];return Object(c.useEffect)((function(){r(e.displayname),j(e.imageurl)}),[e.imageurl,e.displayname]),Object(O.jsxs)("nav",{className:"navClass",children:[Object(O.jsx)("div",{}),Object(O.jsxs)("ul",{className:"navList",children:[Object(O.jsx)("li",{className:"navListElementsLogo",children:Object(O.jsx)(d.c,{to:"/home",children:Object(O.jsx)("img",{src:f,className:"navLogo"})})}),Object(O.jsx)("li",{className:"navListElements",children:Object(O.jsx)(d.c,{to:"/chat",children:" Chat "})}),Object(O.jsx)("li",{className:"navListElements",children:Object(O.jsx)(d.c,{to:"/party",children:" Party "})}),Object(O.jsxs)("div",{className:"userNav",children:[Object(O.jsx)("li",{children:Object(O.jsx)("img",{className:"navImage",src:l})}),Object(O.jsxs)("li",{className:"displayName",children:[" ",a," "]})]})]})]})};var $=function(){var e=Object(c.useContext)(m),t=s.a.useState({album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0}),n=Object(u.a)(t,2),a=n[0],r=n[1],o=s.a.useState("Paused"),i=Object(u.a)(o,2),l=i[0],d=i[1],b=s.a.useState(0),h=Object(u.a)(b,2),f=h[0],p=h[1],v=s.a.useState(!1),y=Object(u.a)(v,2),S=y[0],N=y[1],k=s.a.useState(!1),w=Object(u.a)(k,2),C=w[0],_=w[1];return Object(c.useEffect)((function(){j.ajax({url:"https://api.spotify.com/v1/me/player",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e.currtoken)},success:function(e){e?(r(e.item),d(e.is_playing),p(e.progress_ms),N(!1)):N(!0)},error:function(e){console.log(e),N(!0),_(!0)}})}),[e.currtoken]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(X,{}),Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("img",{src:x,className:"App-logo",alt:"logo"}),!S&&Object(O.jsx)(g,{item:a,is_playing:l,progress_ms:f}),S&&C&&Object(O.jsx)("p",{children:"Uh oh! An error occurred when making contact with the API :("}),S&&!C&&Object(O.jsx)("p",{children:"Are you logged into Spotify? Make sure you are logged in AND that something is playing."})]})]})};var ee=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("header",{className:"head1",children:"Welcome to AuxSwap!"}),Object(O.jsx)("img",{src:f,className:"logoHome"}),Object(O.jsxs)("div",{class:"row",children:[Object(O.jsx)(d.c,{to:"/chat",children:Object(O.jsxs)("div",{class:"column",children:[Object(O.jsx)("h2",{className:"head2",children:"Chat"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"bullets",children:"Chat with friends"}),Object(O.jsx)("li",{className:"bullets",children:"Search and share songs"}),Object(O.jsx)("li",{className:"bullets",children:"Play songs directly in the chat"})]})]})}),Object(O.jsx)(d.c,{to:"/party",children:Object(O.jsxs)("div",{class:"column2",children:[Object(O.jsx)("h2",{className:"head2",children:"Party Lobbies"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"bullets",children:"Join lobbies to listen together"}),Object(O.jsx)("li",{className:"bullets",children:"Add songs to the queue"}),Object(O.jsx)("li",{className:"bullets",children:"Hear new music and share with your friends"})]})]})})]})]})};var te=function(e){return Object(c.useEffect)((function(){var t=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1]),console.log(decodeURIComponent(n[1]))}return e}),{}),n=t.access_token,c=t.refresh_token;n&&c?e.updateToken(n,c):n&&e.JustToken(n)}),[e]),null};var ne=function(){var e=s.a.useState(null),t=Object(u.a)(e,2),n=t[0],a=t[1],r=s.a.useState(null),o=Object(u.a)(r,2),f=o[0],g=o[1],x=s.a.useState(""),v=Object(u.a)(x,2),y=v[0],S=v[1],N=s.a.useState(""),k=Object(u.a)(N,2),w=k[0],C=k[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.ajax({url:"https://api.spotify.com/v1/me",type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t)},success:function(e){e||console.log("null values"),S(e.display_name),C(e.images[0].url)},error:function(e){console.log("IN GET DATA ERROR",t),console.log(e)}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=window.sessionStorage.getItem("token"),n=window.sessionStorage.getItem("refresh");t&&(a(t),e(t),n&&g(n))}),[]),Object(O.jsx)(m.Provider,{value:{currtoken:n},children:Object(O.jsx)(h.Provider,{value:{refreshcurrtoken:f},children:Object(O.jsx)(d.a,{children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{exact:!0,path:"/",children:n?Object(O.jsx)(b.a,{to:"/home"}):Object(O.jsx)(p,{})}),Object(O.jsx)(b.b,{exact:!0,path:"/home",children:n?Object(O.jsxs)("div",{children:[" ",Object(O.jsx)(X,{displayname:y,imageurl:w}),Object(O.jsx)(ee,{})," "]}):Object(O.jsx)(b.a,{to:"/"})}),Object(O.jsx)(b.b,{path:"/callbackpage",children:n?Object(O.jsx)(b.a,{to:"/home"}):Object(O.jsx)(te,{updateToken:function(e,t){window.sessionStorage.setItem("token",e),window.sessionStorage.setItem("refresh",t),a(e),g(t)},JustToken:function(e){window.sessionStorage.setItem("token",e),a(e)}})}),Object(O.jsxs)(b.b,{exact:!0,path:"/chat",children:[Object(O.jsx)(X,{displayname:y,imageurl:w})," ",Object(O.jsx)(K,{})]}),Object(O.jsxs)(b.b,{exact:!0,path:"/party",children:[Object(O.jsx)(X,{displayname:y,imageurl:w})," ",Object(O.jsx)(Q,{})]})]})})})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(O.jsx)(ne,{}),document.getElementById("root")),ce()},73:function(e,t,n){},91:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[191,1,2]]]);
//# sourceMappingURL=main.4de69fa3.chunk.js.map