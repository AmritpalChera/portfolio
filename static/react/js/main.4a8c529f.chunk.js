(this.webpackJsonpworldhelp_test=this.webpackJsonpworldhelp_test||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),l=n.n(i),o=n(1),s=n(3),c=n(4),u=n(5),m=(n(2),function(e){return r.a.createElement("a",{className:"title",href:e.href},e.name)}),p=function(e){var t=e.items.map((function(e){return r.a.createElement("li",{className:"navlistItems",key:e},r.a.createElement("a",{style:{color:"white"},href:"/"+e.toLowerCase()},e))}));return r.a.createElement("ul",{className:"navlist"},t)},h=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,{name:this.props.name,href:this.props.TitleHref}),r.a.createElement(p,{items:this.props.list}))}}]),n}(r.a.Component),f=function(e){return e.subTitle?r.a.createElement("a",{className:"subtitleSubpage",href:e.href},e.subTitle," "):r.a.createElement("a",{className:"titleSubpage",href:e.href},e.name)},g=function(e){var t=null,n=null;return e.ListView?(n=e.ordered?"decimal":e.bullets?"initial":"none",t=e.text.map((function(e){return r.a.createElement("li",{className:"textSubpageListItem",style:{listStyleType:n,marginTop:"2vh"},key:e},e)}))):t=e.text,r.a.createElement("p",{className:"textSubpage"},t," ")},d=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{name:this.props.title,href:this.props.TitleHref}),r.a.createElement(f,{subTitle:this.props.subTitle}),r.a.createElement(g,{text:this.props.text,ListView:this.props.ListView,ordered:this.props.ordered,bullets:this.props.bullets}))}}]),n}(r.a.Component),b="drone.jpg",E="Drone",v="Autonomous Mop.jpg",y="Autonomous Mop",w="1.jpg",T="Artwork (Hobby)",j="1.PNG",O="Portfolio",C="IC Circuits.jpg",N="IC Circuits",S="Java Triangle Solver.PNG",A="Java Triangle Solver",I="Obsticle Avoiding Car.jpg",k="Obsticle Avoiding Car",H="Random Pong Online.png",P="Random Pong Online",x="WrestleBot.jpg",D="WrestleBot",L=function e(t,n){Object(o.a)(this,e),this.img=t,this.title=n},B={};B.ODrone=new L(H,P),B.Drone=new L(b,E),B.prone=new L(v,y),B.sDrone=new L(j,O),B.qrone=new L(S,A),B.mDrone=new L(x,D),B.rDrone=new L(I,k),B.lDrone=new L(C,N),B.aaDrone=new L(w,T);var J=function(e){var t="/static/images/Collage/"+e.title+"/"+e.img;return r.a.createElement("a",{className:"collageGrid",href:e.href},r.a.createElement("p",{className:"collageTitle"},e.title),r.a.createElement("img",{className:"collageImg",alt:"Drone",src:t}))},M=function(e){return e.subTitle?r.a.createElement("a",{className:"subtitleSubpage",href:e.href},e.subTitle," "):r.a.createElement("a",{className:"titleSubpage",href:e.href},e.name)},R=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e,t=[];for(var n in B)t.push(r.a.createElement(J,{img:B[n].img,title:B[n].title,key:n,href:this.props.ContentHref+"#"+B[n].title}));return e=t.map((function(e){return e})),r.a.createElement("div",{className:"collageElements"},r.a.createElement(M,{name:this.props.title,href:this.props.TitleHref}),r.a.createElement("div",{className:"collageContainer"},e))}}]),n}(r.a.Component);l.a.render(r.a.createElement(h,{list:["Projects","About","Contact"],name:"AMRITPAL CHERA",TitleHref:"/"}),document.getElementById("header"));l.a.render(r.a.createElement(d,{title:"ABOUT ME",text:["Constructing electromechanical systems through building efficient circuits","Maintaining well-being by playing sports and eating healthy food.","Learning faster through continuous gain of knowledge and experience.","Programming in different languages such as Python, JS and Java.","Programming in new ways using a different set of tools for each project.","Spotting industrial trends ahead of their time through social and economic awareness.","Innovative technologies that increase viability of renewable energy.","Mastering the skill to enter a superconscious state of mind at will.",'Favorite quote: "Started At Nothing! Stopping At Nothing! NEVER SETTLE"'],ListView:!0,subTitle:"Summary of The Things I Value:",TitleHref:"/about"}),document.getElementById("aboutSummary")),l.a.render(r.a.createElement(R,{title:"KEY PROJECTS",TitleHref:"/projects",ContentHref:"/projects"}),document.getElementById("projectSummary")),l.a.render(r.a.createElement(d,{title:"CONTACT",text:["Email: achera@uwaterloo.ca"],TitleHref:"/contact"}),document.getElementById("contact"))},2:function(e,t,n){},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.4a8c529f.chunk.js.map