(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),o=a.n(s),l=a(1),c=a(2),i=a(4),u=a(3),m=a(5),d=(a(14),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={selectedOption:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.activeTab,a="workout"===t?"nav-link active":"nav-link",r="dashboard"===t?"nav-link active":"nav-link",s="profile"===t?"nav-link active":"nav-link";return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",null,n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement("div",{className:"brand-logo",onClick:function(){return e.props.selectTab("start")}},n.a.createElement("i",{className:"material-icons"},"fitness_center")," SnapLifts"),n.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},"start"!==t&&n.a.createElement("li",null,n.a.createElement("button",{className:a,onClick:function(){return e.props.selectTab("workout")}},"Workout")),n.a.createElement("li",null,n.a.createElement("button",{className:r,onClick:function(){return e.props.selectTab("dashboard")}},"Dashboard")),n.a.createElement("li",null,n.a.createElement("button",{className:s,onClick:function(){return e.props.selectTab("profile")}},"Profile"))))))}}]),t}(n.a.Component)),h=(a(15),a(16),function(e){var t=e.repKey,a=e.item,r=e.repColumn;return n.a.createElement("div",{className:"rep"},n.a.createElement("input",{type:"checkbox",id:t,name:t,checked:a.sets[r],onChange:function(){return e.workoutToggle(a.key,r)}}),n.a.createElement("label",{htmlFor:t,className:"circleLabel"},n.a.createElement("svg",{className:"checkmark",viewBox:"0 0 15 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M1 6L5.5 9.5L14.5 0.5",stroke:"#FFF"}))))}),p=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.workouts.filter(function(t){return t.workout===e.props.currentWorkout}).map(function(t,a){return n.a.createElement("div",{className:"set",key:a},n.a.createElement("div",{className:"set_heading"},n.a.createElement("div",{className:"title"},t.title),n.a.createElement("div",{className:"weight"},"100kg")),n.a.createElement("div",{className:"reps"},n.a.createElement(h,{index:a,item:t,repKey:"first-".concat(a),repColumn:0,workoutToggle:e.props.workoutToggle}),n.a.createElement(h,{index:a,item:t,repKey:"second-".concat(a),repColumn:1,workoutToggle:e.props.workoutToggle}),n.a.createElement(h,{index:a,item:t,repKey:"third-".concat(a),repColumn:2,workoutToggle:e.props.workoutToggle}),n.a.createElement(h,{index:a,item:t,repKey:"fourth-".concat(a),repColumn:3,workoutToggle:e.props.workoutToggle}),n.a.createElement(h,{index:a,item:t,repKey:"fifth-".concat(a),repColumn:4,workoutToggle:e.props.workoutToggle})))});return n.a.createElement("div",{className:"workouts"},n.a.createElement("div",{className:"header"},n.a.createElement("h4",null,"Workout ",this.props.currentWorkout),n.a.createElement("div",{className:"change"},n.a.createElement("button",{className:"snapButton waves-effect waves-light btn-small",onClick:function(){return e.props.selectTab("start")}},"Change Workout"))),t,n.a.createElement("div",{className:"finishButton"},n.a.createElement("button",{className:"snapButton waves-effect waves-light btn-large",onClick:this.props.workoutFinish},"FINISH WORKOUT")))}}]),t}(n.a.Component),k=(a(17),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={displayAdd:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleAddWorkout",value:function(e){e.preventDefault();var t=this.refs.addWorkoutInput.value;""!==t&&(this.props.dashboardAdd(t,"A"),this.refs.addWorkoutInput.value="")}},{key:"toggleAdd",value:function(){this.setState(function(e){return{displayAdd:!e.displayAdd}})}},{key:"render",value:function(){var e=this,t=this.state.displayAdd?"addList addList-active":"addList",a=this.state.displayAdd?n.a.createElement("i",{className:"material-icons"},"remove"):n.a.createElement("i",{className:"material-icons"},"add"),r=this.props.workouts.map(function(t,a){return n.a.createElement("div",{className:"items",key:a},n.a.createElement("div",{className:"title"},n.a.createElement("div",{className:"icon"},n.a.createElement("i",{className:"material-icons"},"fitness_center")),n.a.createElement("div",null,t.title)),n.a.createElement("div",{className:"control"},n.a.createElement("button",{className:"deleteButton",onClick:function(){return e.props.deleteItem(t.key)}},n.a.createElement("i",{className:"material-icons"},"delete"))))});return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"itemList"},n.a.createElement("h4",null,"Workout ",this.props.workoutTitle),r),n.a.createElement("div",{className:"addNew"},n.a.createElement("div",{className:t},n.a.createElement("input",{className:"add__input",type:"text",ref:"addWorkoutInput",placeholder:"Add new workout"}),n.a.createElement("button",{type:"button",className:"add__button",onClick:this.handleAddWorkout.bind(this)},"Insert")),n.a.createElement("button",{className:"addToggle",onClick:function(){return e.toggleAdd()}},a)))}}]),t}(n.a.Component)),v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.workouts.filter(function(e){return"A"===e.workout}),t=this.props.workouts.filter(function(e){return"B"===e.workout}),a=this.props.workouts.filter(function(e){return"C"===e.workout});return n.a.createElement("div",{className:"dashboard"},n.a.createElement(k,{dashboardAdd:this.props.dashboardAdd,deleteItem:this.props.deleteItem,workoutTitle:"A",workouts:e}),n.a.createElement(k,{dashboardAdd:this.props.dashboardAdd,deleteItem:this.props.deleteItem,workoutTitle:"B",workouts:t}),n.a.createElement(k,{dashboardAdd:this.props.dashboardAdd,deleteItem:this.props.deleteItem,workoutTitle:"C",workouts:a}))}}]),t}(n.a.Component),f=(a(18),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"start"},n.a.createElement("div",{className:"left",style:{backgroundImage:"url(./assets/squats.png)"}}),n.a.createElement("div",{className:"right"},n.a.createElement("h3",{className:"title"},"Gym Tracking App"),n.a.createElement("div",{className:"subtitle"},"Snaplifts make it easier to track your gym workouts"),n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{className:"snapButton waves-effect waves-light btn-large ",onClick:function(){return e.props.startWorkout("A")}},"Workout A"),n.a.createElement("button",{className:"snapButton waves-effect waves-light btn-large ",onClick:function(){return e.props.startWorkout("B")}},"Workout B"),n.a.createElement("button",{className:"snapButton waves-effect waves-light btn-large ",onClick:function(){return e.props.startWorkout("C")}},"Workout C"))))}}]),t}(n.a.Component)),g=(a(19),a(20),a(21),["Sun","Mon","Tues","Wed","Thu","Fri","Sat"]),b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=g.map(function(e,t){return n.a.createElement("div",{className:"weeklyLabel",key:t},e)});return n.a.createElement("div",{className:"weekdayLabels"},e)}}]),t}(r.Component),w=(a(22),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.history,t=new Date,a=function(a,r){for(var s=[],o=new Date(r,a,1),l=new Date(r,a+1,0),c=o.getDay()+l.getDate(),i=Math.ceil(c/7),u=0;u<i;u++)s.push([]);for(var m=new Date(t.getFullYear(),t.getMonth(),1).getDay(),d=0;d<m;d++)s[0].push(n.a.createElement("div",{key:"empty"+d,className:"date"}));for(var h=0,p=function(){var t=new Date(k),a="";e.map(function(e){if(e.date===t.toLocaleDateString("en-US")){var r=e.result;switch(!0){case r<.1:a="";break;case r<.2:a="lighterColor";break;case r<.4:a="lightColor";break;case r<.6:a="color";break;case r<.8:a="dakrColor";break;case r<1.1:a="darkerColor"}}return null}),s[h].push(n.a.createElement("div",{className:"square",key:k},n.a.createElement("div",{className:a+" date "+(t.getDate()===(new Date).getDate()?"current":"")},t.getDate()))),7===Object.keys(s[h]).length&&(h+=1)},k=o;k<=l;k.setDate(k.getDate()+1))p();return s}(t.getMonth(),t.getFullYear()).map(function(e,t){return n.a.createElement("div",{key:t,className:"row"},e)});return n.a.createElement("div",{className:"weekdays"},a)}}]),t}(n.a.Component)),E=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=new Date,t=e.toLocaleString("default",{month:"long"}),a=e.getFullYear();return n.a.createElement("div",{className:"calendar"},n.a.createElement("div",{className:"month"},n.a.createElement("div",{className:"title"},n.a.createElement("h3",null,"Workout Statistics"),n.a.createElement("span",{className:"month"},t)," ",n.a.createElement("span",{className:"year"},a)),n.a.createElement(b,null),n.a.createElement(w,{history:this.props.history})))}}]),t}(n.a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleAddWeight",value:function(e){e.preventDefault();var t=this.refs.addWeight.value;""!==t&&(this.props.addWeight(t),this.refs.addWeight.value="")}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"profile block"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"center-align col s8"},n.a.createElement("img",{src:"https://via.placeholder.com/150/",alt:"profile"})),n.a.createElement("div",{className:" col s4"},n.a.createElement("h3",null,this.props.user.name),n.a.createElement("p",null,this.props.user.age," years"))))),n.a.createElement("div",{className:"weight-container block"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:" col s12"},n.a.createElement("h4",{className:"center-align"},"Weight Tracker")),n.a.createElement("div",{className:" col s10"},n.a.createElement("input",{type:"number",className:"weightInput",placeholder:"Enter weight in lbs",ref:"addWeight"})),n.a.createElement("div",{className:" col s2"},n.a.createElement("button",{onClick:this.handleAddWeight.bind(this),className:"snapButton waves-effect waves-light btn-large"},"Save"))),n.a.createElement("div",{className:"row"},n.a.createElement("p",null,"Weight Chart"),n.a.createElement("div",{className:"weights"},0!==this.props.user.weights.length&&this.props.user.weights.map(function(e,t){var a=e.date.split("T")[0],r={height:e.weight/500*100};return n.a.createElement("div",{key:t,className:"weight"},n.a.createElement("div",{className:"weightBar",style:r},e.weight,"lbs"),n.a.createElement("div",{className:"date"},a))}))))),n.a.createElement("div",{className:"block"},n.a.createElement(E,{history:this.props.history})),n.a.createElement("div",{className:"reset block"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:" col s12 center-align"},n.a.createElement("h4",null,"Danger Zone"),n.a.createElement("button",{className:"snapButton waves-effect waves-light btn-large",onClick:function(){localStorage.clear()}},"Reset All Data")))))}}]),t}(n.a.Component),N=(a(23),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).selectTab=function(e){a.setState({activeTab:e})},a.startWorkout=function(e){a.setState({activeTab:"workout",currentWorkout:e})},a.workoutToggle=function(e,t){for(var r=a.state.workouts,n=0;n<r.length;n++){var s=r[n];if(s.key===e){var o=s.sets;o[t]=!o[t]}}a.setState({workouts:r})},a.workoutFinish=function(){var e=a.state.workouts,t=0,r=0;a.state.workouts.filter(function(e){return e.workout===a.state.currentWorkout}).map(function(e){return e.sets.map(function(e){return e&&t++,r++,null}),null});var n=t/r,s=a.state.history,o=new Date;s.push({user:a.state.user,date:o.toLocaleDateString("en-US"),result:n});var l=!0,c=!1,i=void 0;try{for(var u,m=e[Symbol.iterator]();!(l=(u=m.next()).done);l=!0){u.value.sets=[!1,!1,!1,!1,!1]}}catch(d){c=!0,i=d}finally{try{l||null==m.return||m.return()}finally{if(c)throw i}}a.setState({workouts:e,history:s}),a.updateLocalStorage("snaplifts_history",a.state.history)},a.deleteItem=function(e){var t=a.state.workouts.filter(function(t){return t.key!==e});a.setState({workouts:t}),a.updateLocalStorage("snaplifts_workouts",a.state.workouts)},a.addWeight=function(e){var t=a.state.user,r=a.state.user.weights,n=new Date,s=n.getDate()+"/"+n.getMonth()+"/"+n.getFullYear();r.push({date:s,weight:e}),t.weights=r,a.setState({user:t}),a.updateLocalStorage("snaplifts_user",t),console.log(e)},a.sets=[{completed:!1,weight:100},{completed:!1,weight:100},{completed:!1,weight:100},{completed:!1,weight:100},{completed:!1,weight:100}],a.init=[{key:1,workout:"A",title:"Squats",sets:[!1,!1,!1,!1,!1]},{key:2,workout:"A",title:"Shoulder Press",sets:[!1,!1,!1,!1,!1]},{key:3,workout:"A",title:"Biceps",sets:[!1,!1,!1,!1,!1]},{key:4,workout:"B",title:"Bench Press",sets:[!1,!1,!1,!1,!1]},{key:5,workout:"B",title:"Barbell Row",sets:[!1,!1,!1,!1,!1]},{key:6,workout:"B",title:"Triceps",sets:[!1,!1,!1,!1,!1]},{key:7,workout:"C",title:"Squats",sets:[!1,!1,!1,!1,!1]},{key:8,workout:"C",title:"Deadlifts",sets:[!1,!1,!1,!1,!1]},{key:9,workout:"C",title:"Abs",sets:[!1,!1,!1,!1,!1]}],a.state={user:{name:"Mike",age:30,height:172,weights:[]},count:9,activeTab:"start",currentWorkout:"A",workouts:a.init,history:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("snaplifts_history"),t=JSON.parse(e),a=localStorage.getItem("snaplifts_workouts"),r=JSON.parse(a);t&&this.setState({history:t}),r&&this.setState({workouts:r})}catch(o){}try{var n=localStorage.getItem("snaplifts_user"),s=JSON.parse(n);s&&this.setState({user:s})}catch(o){}}},{key:"updateLocalStorage",value:function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}},{key:"handleWorkoutChange",value:function(e){this.setState({currentWorkout:e.value})}},{key:"dashboardAdd",value:function(e,t){var a=this.state.workouts,r={key:a[a.length-1].key+1,workout:t,title:e,sets:[!1,!1,!1,!1,!1]};a.push(r),this.setState({workouts:a}),this.updateLocalStorage("snaplifts_workouts",this.state.workouts)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{selectTab:this.selectTab.bind(this),handleWorkoutChange:this.handleWorkoutChange.bind(this),activeTab:this.state.activeTab,currentWorkout:this.state.currentWorkout}),n.a.createElement("div",{className:"container"},"start"===this.state.activeTab&&n.a.createElement(f,{startWorkout:this.startWorkout}),"workout"===this.state.activeTab&&n.a.createElement(p,{workouts:this.state.workouts,currentWorkout:this.state.currentWorkout,workoutToggle:this.workoutToggle.bind(this),workoutFinish:this.workoutFinish.bind(this),selectTab:this.selectTab.bind(this)}),"dashboard"===this.state.activeTab&&n.a.createElement(v,{workouts:this.state.workouts,deleteItem:this.deleteItem,currentWorkout:this.state.currentWorkout,dashboardAdd:this.dashboardAdd.bind(this)}),"profile"===this.state.activeTab&&n.a.createElement(y,{user:this.state.user,addWeight:this.addWeight,history:this.state.history,activeTab:this.state.activeTab})))}}]),t}(n.a.Component));a(24);var O=function(){return n.a.createElement("div",{className:"footer"},"Snaplifts Copyright 2019")};a(25);var j=document.getElementById("root");o.a.render(n.a.createElement(function(){return n.a.createElement("div",{className:"App"},n.a.createElement(N,null),n.a.createElement(O,null))},null),j)}],[[8,1,2]]]);
//# sourceMappingURL=main.5acd607e.chunk.js.map