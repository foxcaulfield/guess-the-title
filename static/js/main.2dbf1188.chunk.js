(this["webpackJsonpguess-the-title"]=this["webpackJsonpguess-the-title"]||[]).push([[0],{22:function(e,t,i){},23:function(e,t,i){},32:function(e,t,i){"use strict";i.r(t);var n,r=i(0),a=i.n(r),o=i(5),s=i.n(o),c=(i(22),i(23),i(6)),d=i(12),l=i(7),u=i(1);var f=function(e){console.log(e);var t=e.destination===e.value;return Object(u.jsx)("div",{children:Object(u.jsxs)(b,{disabled:!e.attempt,isMarker:e.isMarker,onClick:e.destination===e.value?function(t){alert("Right! click 'Start new game!' to start a new game"),e.handleAttempt()}:function(t){alert("Oops, you failed! Right answer is ".concat(e.destination,".click 'Start new game!' to start a new game")),e.handleAttempt()},isGameStarted:e.isGameStarted,isWin:t,attempt:e.attempt,children:[e.value,e.isMarker?"\ud83c\udfc1":""]})})},b=l.a.button(n||(n=Object(c.a)(["\n  background-color: ",";\n  color: ",";\n  display: inline-block;\n  visibility: ",";\n  cursor: pointer;\n  font-size: 2em;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n  &:hover {\n    background-color: lightblue;\n  }\n"])),(function(e){return e.destination===e.value?"palevioletred":"white"}),(function(e){return e.destination===e.value?"white":"palevioletred"}),(function(e){return e.isGameStarted?"visible":"hidden"})),O=i(9),j=i(2);function h(e,t){return e=Math.ceil(e),t=Math.ceil(t),Math.floor(Math.random()*(t-e+1))+e}var m="RESET_MARKER_POSITION",v="ADD_COLUMNS_ACTION_CREATOR",S="ADD_ROWS_ACTION_CREATOR",p="REMOVE_COLUMNS_ACTION_CREATOR",g="REMOVE_ROWS_ACTION_CREATOR",z="MOVE_MARKER_ACTION_CREATOR",k={fieldSizeX:3,fieldSizeY:3,markerPosition:[],destinationPosition:[],numberOfMoves:10,markerMoves:[],isWin:!1,isGameOver:!1};var C,M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var i=h(1,e.fieldSizeX),n=h(1,e.fieldSizeY);return Object(j.a)(Object(j.a)({},e),{},{markerPosition:[i,n]});case v:return Object(j.a)(Object(j.a)({},e),{},{fieldSizeX:e.fieldSizeX+1});case S:return Object(j.a)(Object(j.a)({},e),{},{fieldSizeY:e.fieldSizeY+1});case p:return Object(j.a)(Object(j.a)({},e),{},{fieldSizeX:e.fieldSizeX-1});case g:return Object(j.a)(Object(j.a)({},e),{},{fieldSizeY:e.fieldSizeY-1});case z:for(var r=e.markerPosition.slice(),a=[],o=0;o<e.numberOfMoves;o++){var s=h(1,4);1===s?r[1]>=1&&r[1]<e.fieldSizeY?(r[1]+=1,a.push("\u2b07\ufe0f")):r[1]>1&&r[1]<=e.fieldSizeY&&(r[1]-=1,a.push("\u2b06\ufe0f")):2===s?r[1]>1&&r[1]<=e.fieldSizeY?(r[1]-=1,a.push("\u2b06\ufe0f")):r[1]>=1&&r[1]<e.fieldSizeY&&(r[1]+=1,a.push("\u2b07\ufe0f")):3===s?r[0]<e.fieldSizeX&&r[0]>=1?(r[0]+=1,a.push("\u27a1\ufe0f")):r[0]>1&&r[0]<=e.fieldSizeX&&(r[0]-=1,a.push("\u2b05\ufe0f")):4===s&&(r[0]>1&&r[0]<=e.fieldSizeX?(r[0]-=1,a.push("\u2b05\ufe0f")):r[0]<e.fieldSizeX&&r[0]>=1&&(r[0]+=1,a.push("\u27a1\ufe0f")))}return Object(j.a)(Object(j.a)({},e),{},{markerMoves:a.slice(),destinationPosition:r.slice()});default:return e}};var R=l.a.div(C||(C=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  grid-template-rows: repeat(",", 1fr);\n  grid-gap: 5px;\n"])),(function(e){return e.fieldSizeX}),(function(e){return e.fieldSizeY})),w=Object(O.b)((function(e){return{state:e}}),(function(e){return{resetMarkerPosition:function(){e({type:m})},addColumns:function(){e({type:v})},addRows:function(){e({type:S})},removeColumns:function(){e({type:p})},removeRows:function(){e({type:g})},moveMarker:function(){e({type:z})}}}))((function(e){for(var t=Object(r.useState)(!1),i=Object(d.a)(t,2),n=i[0],a=i[1],o=Object(r.useState)(1),s=Object(d.a)(o,2),c=s[0],l=s[1],b=function(){l(0),console.log("attempt left"),console.log(c)},O=[],j=1;j<=e.state.fieldSizeY;j++)for(var h=1;h<=e.state.fieldSizeX;h++)O.push(Object(u.jsx)(f,{value:h+""+j,isMarker:h+""+j===e.state.markerPosition.join(""),destination:e.state.destinationPosition.join(""),handleAttempt:b,isGameStarted:n,attempt:c},h+""+j));return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{disabled:n&&c,onClick:function(){e.resetMarkerPosition(),e.moveMarker(),a(!0),l(1)},children:"Start new game!"}),Object(u.jsx)(R,{fieldSizeX:e.state.fieldSizeX,fieldSizeY:e.state.fieldSizeY,children:O}),e.state.markerMoves.join(""),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{disabled:c,onClick:e.addColumns,children:"add cols"}),Object(u.jsx)("button",{disabled:c,onClick:e.addRows,children:"add rows"}),Object(u.jsx)("button",{disabled:c,onClick:e.removeColumns,children:"remove cols"}),Object(u.jsx)("button",{disabled:c,onClick:e.removeRows,children:"remove rows"})]})]})})),x=i(8),A=Object(x.b)(M);window.store=A;var _=A;var T=function(){return Object(u.jsx)(O.a,{store:_,children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Guess the title"}),"There is a hidden marker in one of the titles. Try to guess where it is. Start count your steps from \ud83c\udfc1"]}),Object(u.jsx)(w,{})]})})})},E=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,33)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;i(e),n(e),r(e),a(e),o(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),E()}},[[32,1,2]]]);
//# sourceMappingURL=main.2dbf1188.chunk.js.map