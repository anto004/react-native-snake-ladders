(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{244:function(e,t,r){"use strict";r.d(t,"a",(function(){return ce}));var n=r(191),a=r(1),o=r.n(a),l=r(2),i=r(3),c=r(114),s=r(78),u=r(43),y=r.n(u),d=r(7),m=r.n(d);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){m()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=[[{id:15,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1},{id:14,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1},{id:13,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1},{id:12,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1}],[{id:11,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1},{id:10,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1},{id:9,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1},{id:8,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1}],[{id:7,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1},{id:6,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1},{id:5,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1},{id:4,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1}],[{id:0,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1},{id:1,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1},{id:2,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1},{id:3,RED:!1,GREEN:!1,BLUE:!1,YELLOW:!1}]],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,r=[{row:3,col:0},{row:3,col:1},{row:3,col:2},{row:3,col:3},{row:2,col:3},{row:2,col:2},{row:2,col:1},{row:2,col:0},{row:1,col:3},{row:1,col:2},{row:1,col:1},{row:1,col:0},{row:0,col:3},{row:0,col:2},{row:0,col:1},{row:0,col:0}],n=t.player,a=t.fromPosition,o=t.toPosition,l=r[o],i=r[a];switch(t.type){case"move_player":return e[l.row][l.col]=p(p({},e[l.row][l.col]),{},m()({},n,!0)),e[i.row][i.col]=p(p({},e[i.row][i.col]),{},m()({},n,!1)),y()(e);case"move_player_to_start":return e[l.row][l.col]=p(p({},e[l.row][l.col]),{},m()({},n,!0)),y()(e);case"reset_players":return e.map((function(t,r){return t.map((function(t,n){var a=e[r][n];return a.red=!1,a.green=!1,a.blue=!1,a.yellow=!1,a}))}));default:return e}},h=r(12),v=r.n(h),w=r(15),S=r.n(w),b=r(38),P=r.n(b),O=r(13),R=r.n(O),L=r(14),C=r.n(L),D=r(6),x=r.n(D),T=r(30),I=r(122),N=r(69),j=r(36),k=r(100),G=r.n(k),W=r(243),_=r.n(W);var U=l.a.create({playerStyle:{height:13.5,width:15,borderRadius:30,margin:1}}),B=function(e){var t=e.color;return o.a.createElement(i.a,{style:[U.playerStyle,{backgroundColor:t}]})};function Y(e){var t=e.column;return Object.entries(t).map((function(e){var r=_()(e,2),n=r[0];r[1];return"red"===n&&t[n]?o.a.createElement(B,{key:n,color:"red"}):"green"===n&&t[n]?o.a.createElement(B,{key:n,color:"green"}):"blue"===n&&t[n]?o.a.createElement(B,{key:n,color:"blue"}):"yellow"===n&&t[n]?o.a.createElement(B,{key:n,color:"yellow"}):void 0}))}function M(e){var t=e.row;return o.a.createElement(i.a,{style:H.rowStyle},t.map((function(e,t){return o.a.createElement(z,{key:e.id,column:e})})))}function z(e){var t=e.column;return o.a.createElement(i.a,{key:t.id,style:H.cellContainer},o.a.createElement(i.a,{style:H.cellPlayerContainer},o.a.createElement(Y,{column:t})),o.a.createElement(i.a,{style:H.cellIdStyle},0===t.id&&o.a.createElement(j.b,{h4:!0},"Start"),15===t.id&&o.a.createElement(j.b,{h4:!0},"Win"),0!==t.id&&15!==t.id&&o.a.createElement(j.b,{h4:!0,style:H.textIdStyle},t.id)))}var H=l.a.create({gridContainer:{width:300,marginTop:5,marginRight:10,marginLeft:10,backgroundColor:"white"},rowStyle:{flexDirection:"row",alignItems:"center",justifyContent:"space-around"},cellContainer:{flex:1,height:60,borderWidth:1},cellPlayerContainer:{flexDirection:"row",justifyContent:"flex-end"},cellIdStyle:{flex:1,justifyContent:"center",alignItems:"center",margin:4},textIdStyle:{margin:0}}),X=Object(s.b)((function(e){return{grid:e}}),(function(e){return{}}))((function(e){var t=e.grid;return o.a.createElement(i.a,{style:H.gridContainer},t.map((function(e,t){return o.a.createElement(M,{key:t,row:e})})))})),A=r(245);var J=l.a.create({buttonStyle:{width:50,height:50,margin:0},textStyle:{fontWeight:"bold",fontSize:25},iconStyle:{margin:6}}),V=function(e){var t=e.dice,r=e.rollDice;return o.a.createElement(i.a,null,o.a.createElement(j.a,{title:t.toString(),type:"outline",raised:!0,onPress:r,buttonStyle:J.buttonStyle,titleStyle:J.textStyle}),o.a.createElement(A.a,{name:"dice",size:24,color:"black",style:J.iconStyle}))};function F(e){var t=e.color,r=e.playersTurn;return o.a.createElement(i.a,{style:q.playerStyle},o.a.createElement(B,{color:t}),r===t&&o.a.createElement(i.a,{style:q.iconStyle},o.a.createElement(A.a,{name:"arrow-up",size:20,color:"black"})))}var q=l.a.create({playersContainer:{flexDirection:"row",justifyContent:"center",padding:10},playerStyle:{justifyContent:"flex-start",alignItems:"center",padding:2},iconStyle:{padding:1,justifyContent:"center",alignItems:"center"}}),K=function(e){var t=e.players,r=e.playersTurn;return o.a.createElement(i.a,{style:q.playersContainer},t[0]&&o.a.createElement(F,{color:"red",playersTurn:r}),t[1]&&o.a.createElement(F,{color:"green",playersTurn:r}),t[2]&&o.a.createElement(F,{color:"blue",playersTurn:r}),t[3]&&o.a.createElement(F,{color:"yellow",playersTurn:r}))},Q=T.a.get("window").width;var Z=l.a.create({headerContainer:{flexDirection:"row",width:Q,marginTop:10,marginBottom:15,paddingTop:30,justifyContent:"center"}}),$=function(e){var t=e.onStart,r=e.onReset;return o.a.createElement(i.a,{style:Z.headerContainer},o.a.createElement(j.a,{type:"outline",raised:!0,title:"Reset",onPress:r}),o.a.createElement(j.b,{h4:!0}," Snake and Ladders "),o.a.createElement(j.a,{type:"outline",raised:!0,title:"Start",onPress:t}))};var ee=l.a.create({timerContainer:{margin:0,justifyContent:"space-evenly",alignItems:"center"},timerStyle:{width:50,height:50,borderWidth:1,borderRadius:50,justifyContent:"center",alignItems:"center"}}),te=function(e){var t=e.seconds;return o.a.createElement(i.a,{style:ee.timerContainer},o.a.createElement(i.a,{style:ee.timerStyle},o.a.createElement(j.b,null,t)),o.a.createElement(j.b,null," Timer "))};function re(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=x()(e);if(t){var a=x()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return C()(this,r)}}var ne=T.a.get("window").width,ae=["red","green","blue","yellow"],oe=function(e){R()(r,e);var t=re(r);function r(e){var n;return v()(this,r),(n=t.call(this,e)).onChangePlayerNumbers=function(e){var t=[];if(!n.state.gameOnGoing&&!Number.isNaN(Number(e))&&Number(e)<5){n.setState({numberPlayers:e});for(var r=0;r<e;r++){var a={player:ae[r],position:0};t.push(a)}n.setState({players:t})}},n.rollDice=function(){var e,t=n.state,r=t.gameOnGoing,a=t.gameOver,o=(e=3,Math.floor(Math.random()*Math.floor(e))+1);n.setState({dice:o}),r?a?N.a.show("Game Over! Reset and Start New Game",N.a.SHORT):(n.moveCurrentPlayer(o),n.setState({seconds:5})):N.a.show("Press start",N.a.SHORT)},n.moveCurrentPlayer=function(e){var t=n.state,r=t.players,a=t.currentPlayerIndex,o=n.props,l=o.dispatchMovePlayer,i=(o.dispatchMovePlayerToStart,n.getCurrentPlayer()),c=i.player,s=i.position,u=s+e;if(!(u>15)){if(15===u&&(n.setState({winner:c,gameOver:!0}),G.a.clearInterval(P()(n))),0===s){if(1!==e)return void n.setCurrentPlayer();l(c,s,u)}else l(c,s,u);var y=r.map((function(e,t){return t===a?(e.position=u,e):e}));n.setState({players:y}),n.setCurrentPlayer()}},n.onStart=function(){var e=n.state,t=e.players,r=(e.numberPlayers,e.gameOnGoing),a=n.props.dispatchMovePlayerToStart;r?N.a.show("A Game is in progress",N.a.SHORT):(t.map((function(e){a(e.player,0,0)})),n.setState({playersTurn:"red"}),n.setState({gameOnGoing:!0}),G.a.setInterval(P()(n),"displaySeconds",(function(){if(0===n.state.seconds)return n.rollDice(),void n.setState({seconds:5});n.setState({seconds:n.state.seconds-1})}),1e3))},n.onReset=function(){(0,n.props.dispatchResetPlayers)(),n.setState({dice:3,numberPlayers:2,winner:"",players:[{player:"red",position:0},{player:"green",position:0}],currentPlayerIndex:0,playersTurn:"",seconds:5,gameOnGoing:!1,gameOver:!1}),G.a.clearInterval(P()(n))},n.state={dice:3,numberPlayers:2,winner:"",players:[{player:"red",position:0},{player:"green",position:0}],currentPlayerIndex:0,playersTurn:"",seconds:5,gameOnGoing:!1,gameOver:!1},n}return S()(r,[{key:"componentWillUnmount",value:function(){G.a.clearInterval(this)}},{key:"getCurrentPlayer",value:function(){var e=this.state,t=e.players,r=e.currentPlayerIndex;return r>t.length-1?t[0]:t[r]}},{key:"setCurrentPlayer",value:function(){var e=this.state,t=e.players,r=(e.numberPlayers,e.currentPlayerIndex);1!==t.length&&(r!==t.length-1?this.setState({currentPlayerIndex:this.state.currentPlayerIndex+1}):this.setState({currentPlayerIndex:0}))}},{key:"componentDidUpdate",value:function(e,t){if(this.state.currentPlayerIndex!==t.currentPlayerIndex){var r=this.getCurrentPlayer();this.setState({playersTurn:r.player})}}},{key:"render",value:function(){var e=this,t=this.state,r=t.players,n=t.dice,a=t.numberPlayers,l=t.playersTurn,c=t.winner,s=t.seconds;return o.a.createElement(i.a,{style:le.gameContainer},o.a.createElement($,{onStart:this.onStart,onReset:this.onReset}),o.a.createElement(i.a,null,o.a.createElement(i.a,{style:le.numberPlayersContainer},o.a.createElement(j.b,{style:le.numberPlayerTextStyle},"Select Number of Players(2-4)"),o.a.createElement(I.a,{style:le.inputStyle,value:a.toString(),onChangeText:function(t){return e.onChangePlayerNumbers(t)}}))),o.a.createElement(i.a,{style:le.gridContainer},o.a.createElement(X,null),o.a.createElement(te,{seconds:s})),o.a.createElement(i.a,{style:le.bottomContainer},o.a.createElement(K,{players:r,playersTurn:l}),""!==c&&o.a.createElement(j.b,{style:le.winnerTextStyle},"Hurray! "+c.toUpperCase()+" is the winner"),o.a.createElement(V,{dice:n,rollDice:this.rollDice})))}}]),r}(a.Component),le=l.a.create({gameContainer:{flex:1},gridContainer:{flexDirection:"row",alignItems:"center",justifyContent:"center",margin:10},bottomContainer:{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",width:ne,padding:25},numberPlayersContainer:{flexDirection:"row",alignItems:"center",justifyContent:"center"},numberPlayerTextStyle:{fontSize:17,marginRight:5},inputStyle:{height:30,width:30,borderWidth:1,textAlign:"center"},winnerTextStyle:{fontSize:20,fontWeight:"bold"}}),ie=Object(s.b)((function(e){return{data:e}}),(function(e){return{dispatchMovePlayerToStart:function(t,r,n){return e(function(e,t,r){return{type:"move_player_to_start",player:e,fromPosition:t,toPosition:r}}(t,r,n))},dispatchMovePlayer:function(t,r,n){return e(function(e,t,r){return{type:"move_player",player:e,fromPosition:t,toPosition:r}}(t,r,n))},dispatchResetPlayers:function(){return e({type:"reset_players"})}}}))(oe);function ce(){var e=Object(c.b)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());return o.a.createElement(s.a,{store:e},o.a.createElement(i.a,{style:se.container},o.a.createElement(n.StatusBar,{style:"auto"}),o.a.createElement(ie,null)))}var se=l.a.create({container:{flex:1,backgroundColor:"#fff"}})},247:function(e,t,r){r(248),e.exports=r(386)},248:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/react-native-snake-ladders/expo-service-worker.js",{scope:"/react-native-snake-ladders/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[247,1,2]]]);
//# sourceMappingURL=app.5fc79c79.chunk.js.map