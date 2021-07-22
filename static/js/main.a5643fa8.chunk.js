(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{301:function(e,t,n){},306:function(e,t,n){},324:function(e,t,n){},326:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(75),i=n.n(c),s=n(25),o=n(76),l=n(170),j=n(182),d=n(23),u=n(360),b=n(27),h=n(31),O=n(40),x=n(39),p=n(351),f=n(362),m=n(42),g=n.n(m),y=n(70),v=n(91);v.a.initializeApp({apiKey:"AIzaSyAgEGsXQixNlGpQhx3xhHu0SshXgvq6bqM",databaseURL:"https://portfolio-24dd4-default-rtdb.firebaseio.com",projectId:"portfolio-24dd4",storageBucket:"portfolio-24dd4.appspot.com"});var k=v.a.database(),S=v.a.auth(),w=v.a.storage(),I=function(){return function(){var e=Object(y.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.ref("/").once("value").then((function(e){return e.val()}));case 2:n=e.sent,t({type:"FETCH_DATA",payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=n(334),L=n(335),D=n(336),A=n(333),E=n(337),N=n(338),R=n(361),F=n(4),z=function(e){return Object(F.jsx)(A.a,{color:"gray.500",align:{base:"center",md:"left"},mb:5,mt:10,fontSize:"lg",style:{fontWeight:800},children:"/* ".concat(e.body," */")})},T=Object(s.b)((function(e){return{about:e.data.about}}))((function(e){return Object(F.jsxs)("div",{children:[Object(F.jsx)(z,{body:"About Me"}),Object(F.jsxs)(C.a,{direction:{base:"column",md:"row"},children:[Object(F.jsxs)(L.a,{order:{base:2,md:0},children:[Object(F.jsx)(D.a,{as:"h1",size:"2xl",color:"orange.500",mt:"2",textAlign:{base:"center",md:"left"},children:e.about.name}),Object(F.jsx)(D.a,{color:"green.400",mt:"3",mb:"5",children:e.about.designation}),Object(F.jsx)(A.a,{color:"red.100",align:"justify",children:e.about.summary})]}),Object(F.jsx)(E.a,{}),Object(F.jsx)(N.a,{w:"100%",children:Object(F.jsx)(R.a,{borderRadius:"full",boxSize:"150px",src:e.about.profilePic,alt:e.about.name})})]})]})})),M=n(339),_=n(340),G=n(71),W=Object(s.b)((function(e){return{education:e.data.education}}))((function(e){return Object(F.jsxs)("div",{className:"section",children:[Object(F.jsx)(z,{body:"Education"}),Object(F.jsxs)(C.a,{direction:{base:"column",md:"row"},alignItems:"center",justifyContent:"center",children:[Object(F.jsxs)(L.a,{w:{base:"100%",md:"40%"},children:[Object(F.jsxs)(L.a,{display:"flex",mb:3,children:[Object(F.jsx)("h1",{className:"eduLogo",children:Object(F.jsx)(G.c,{style:{fontSize:"xxx-large",marginRight:"30px",color:"#805AD5"}})}),Object(F.jsx)(D.a,{as:"h3",size:"lg",color:"purple.500",children:e.education.school.name})]}),Object(F.jsx)(A.a,{color:"gray.500",mb:2,children:e.education.school.period}),Object(F.jsx)(A.a,{color:"purple.100",children:e.education.school.details})]}),Object(F.jsx)(E.a,{}),Object(F.jsxs)(L.a,{m:{base:5},children:[Object(F.jsx)(M.a,{w:10,h:10,display:{base:"none",md:"flex"}}),Object(F.jsx)(_.a,{w:10,h:10,display:{base:"flex",md:"none"}})]}),Object(F.jsx)(E.a,{}),Object(F.jsxs)(L.a,{w:{base:"100%",md:"40%"},children:[Object(F.jsxs)(L.a,{display:"flex",mb:3,children:[Object(F.jsx)(D.a,{as:"h3",size:"lg",textAlign:"right",color:"pink.500",children:e.education.college.name}),Object(F.jsx)("h1",{className:"eduLogo",children:Object(F.jsx)(G.e,{style:{fontSize:"xxx-large",marginLeft:"30px",color:"#D53F8C"}})})]}),Object(F.jsx)(A.a,{textAlign:"right",color:"gray.500",mb:2,children:e.education.college.period}),Object(F.jsx)(A.a,{color:"pink.100",textAlign:"right",children:e.education.college.details})]})]})]})})),B=n(172);n(300),n(301);var P=function(e){var t={labels:e.dataObj.map((function(e){return e.name})),datasets:[{data:e.dataObj.map((function(e){return e.xp})),backgroundColor:e.dataObj.map((function(e){return e.color}))}]};return Object(F.jsx)("div",{className:"chartWrapper",children:Object(F.jsx)(B.Doughnut,{data:t,options:{rotation:1*Math.PI,circumference:1*Math.PI,title:{display:!0,position:"bottom",text:e.chartName,fontSize:20,fontFamily:"Jetbrains Mono",fontColor:"#fff"},cutoutPercentage:50,plugins:{labels:{render:"label",fontColor:function(e){var t=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(e.dataset.backgroundColor[e.index]);return.299*t.r+.587*t.g+.114*t.b>140?"black":"white"}},fontFamily:"Jetbrains Mono",position:"outside"},tooltips:{enabled:!1},legend:{display:!1}}})})},U=n(341),V=Object(s.b)((function(e){return{skills:e.data.skills}}))((function(e){return Object(F.jsxs)("div",{className:"section",children:[Object(F.jsx)(z,{body:"Skills"}),Object(F.jsxs)(U.a,{style:{justifyContent:"center"},children:[Object(F.jsx)(P,{dataObj:e.skills.backend,chartName:"Backend"}),Object(F.jsx)(P,{dataObj:e.skills.database,chartName:"Database"}),Object(F.jsx)(P,{dataObj:e.skills.frontend,chartName:"Frontend"}),Object(F.jsx)(P,{dataObj:e.skills.python,chartName:"Python"}),Object(F.jsx)(P,{dataObj:e.skills.others,chartName:"Others"})]})]})})),q=n(135),H=(n(305),n(342)),J=n(343),Y=n(90),K=n(173),Q=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"onGoingBadge",value:function(e){return e.isOngoing?Object(F.jsx)(H.a,{fontSize:"0.7em",ml:2,p:2,colorScheme:"purple",children:"Ongoing"}):null}},{key:"renderDetailsList",value:function(e,t){return e.map((function(e){return Object(F.jsxs)(J.c,{color:t,children:[Object(F.jsx)(J.b,{as:Y.a,color:"green.500"}),e]})}))}},{key:"renderTech",value:function(e){return e.map((function(e){return Object(F.jsx)("div",{style:{marginLeft:"15px"},children:a.a.createElement(K[e])})}))}},{key:"renderPositionList",value:function(e,t){var n=this;return e.positions.map((function(e){return Object(F.jsxs)("div",{children:[Object(F.jsxs)(A.a,{fontSize:"xl",color:"#718096",children:[e.designation,Object(F.jsx)("br",{}),e.date]}),Object(F.jsx)(J.a,{spacing:1,fontSize:14,mt:3,mb:3,children:n.renderDetailsList(e.details,t)}),Object(F.jsx)(D.a,{as:"h5",fontSize:20,color:"#4A5568",d:"flex",justifyContent:"flex-end",children:n.renderTech(e.tech)})]})}))}},{key:"renderWorkList",value:function(){var e=this,t=["cyan.300","green.300","blue.300","yellow.300","purple.300"],n=["cyan.100","green.100","blue.100","yellow.100","purple.100"];return this.props.workExperience.map((function(r,a){return Object(F.jsxs)(q.VerticalTimelineElement,{className:"vertical-timeline-element",contentArrowStyle:{borderRight:"7px solid  #4A5568"},contentStyle:{backgroundColor:"#171923"},iconStyle:{background:"#171923",color:"#fff"},icon:Object(F.jsx)(Y.b,{}),children:[Object(F.jsx)("div",{style:{marginBottom:"15px"},children:Object(F.jsxs)(C.a,{alignItems:"center",children:[Object(F.jsx)(R.a,{mr:2,boxSize:"40px",src:r.logo}),Object(F.jsxs)(D.a,{as:"h3",size:"lg",color:t[a%t.length],children:[r.organization,e.onGoingBadge(r)]})]})}),e.renderPositionList(r,n[a%t.length])]})}))}},{key:"render",value:function(){return console.log(this.props.workExperience),Object(F.jsxs)("div",{children:[Object(F.jsx)(z,{body:"Work Experience"}),Object(F.jsx)(q.VerticalTimeline,{animate:!1,children:this.renderWorkList()})]})}}]),n}(a.a.Component),X=Object(s.b)((function(e){return{workExperience:e.data.workExperience}}))(Q),$=n(344),Z=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"renderDetails",value:function(e){return e.map((function(e){return Object(F.jsxs)(J.c,{children:[Object(F.jsx)(J.b,{as:Y.a,color:"green.500"}),e]})}))}},{key:"renderCards",value:function(){var e=this;return this.props.volunteerExperience.map((function(t,n){return Object(F.jsx)($.b,{rowSpan:1,colSpan:{base:3,md:0===n?2:1},marginTop:{base:"1rem",md:"initial"},children:Object(F.jsxs)(L.a,{borderWidth:"3px",borderRadius:"lg",overflow:"hidden",p:5,height:"100%",children:[Object(F.jsxs)(C.a,{alignItems:"center",children:[Object(F.jsx)(R.a,{mr:2,borderRadius:"full",boxSize:"40px",src:t.logo}),Object(F.jsx)(D.a,{as:"h4",size:"md",color:"blue.200",children:t.organization})]}),Object(F.jsx)(J.a,{spacing:1,fontSize:14,mt:3,mb:3,children:e.renderDetails(t.details)})]})})}))}},{key:"render",value:function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)(z,{body:"Volunteer Experience"}),Object(F.jsx)($.a,{templateRows:"repeat(2, 1fr)",templateColumns:"repeat(3, 1fr)",gap:4,display:{base:"initial",md:"grid"},children:this.renderCards()})]})}}]),n}(a.a.Component),ee=Object(s.b)((function(e){return{volunteerExperience:e.data.volunteerExperience}}))(Z),te=(n(306),n(28)),ne=n(174),re=n.n(ne),ae=(n(322),n(323),n(345)),ce=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"renderSlide",value:function(){var e=["cyan.300","green.300","blue.300","yellow.300","purple.300"],t=["cyan.50","green.50","blue.50","yellow.50","purple.50"];return this.props.projects.map((function(n,r){var a=Math.floor(Math.random()*(e.length-1));return Object(F.jsx)("div",{children:Object(F.jsxs)(ae.a,{as:"address",p:"3",m:"3",borderRadius:"lg",children:[Object(F.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(F.jsx)(R.a,{src:n.image,maxHeight:"250px"})}),Object(F.jsx)(ae.b,{href:n.link,children:Object(F.jsxs)(L.a,{p:"6",children:[Object(F.jsx)(L.a,{color:e[a],children:n.title}),Object(F.jsx)(L.a,{ml:"2",color:t[a],fontSize:"sm",children:n.description})]})})]})})}))}},{key:"render",value:function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)(z,{body:"Some of my Works"}),Object(F.jsxs)(re.a,Object(te.a)(Object(te.a)({},{dots:!0,speed:500,slidesToShow:2,slidesToScroll:2,adaptiveHeight:!1,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:1e3,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}}]}),{},{children:[this.renderSlide(),Object(F.jsx)("div",{children:Object(F.jsx)(L.a,{display:"flex",justifyContent:"center",alignItems:"center",p:"6",color:"gray.600",children:Object(F.jsxs)(ae.b,{href:"https://github.com/kinjalrk2k/",children:[Object(F.jsx)("div",{children:Object(F.jsx)(G.b,{size:"200"})}),"See more on my GitHub"]})})})]}))]})}}]),n}(a.a.Component),ie=Object(s.b)((function(e){return{projects:e.data.projects}}))(ce),se=n(10),oe=n(68),le=n(347),je=n(348),de=n(349),ue=n(186),be=n(185),he={USER_ID:"user_zg8h8U9rjRouzkeowwu4p",TEMPLATE_ID:"template_hid616y",SERVICE_ID:"service_jchrhzj"};var Oe=function(){var e=Object(r.useState)(""),t=Object(se.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(se.a)(c,2),s=i[0],o=i[1],l=Object(r.useState)(""),j=Object(se.a)(l,2),d=j[0],u=j[1],b=Object(r.useState)("S E N D"),h=Object(se.a)(b,2),O=h[0],x=h[1],p=/\S+@\S+\.\S+/;return Object(F.jsxs)("div",{children:[Object(F.jsx)(z,{body:"Get in Touch"}),Object(F.jsxs)("form",{children:[Object(F.jsxs)($.a,{templateColumns:"repeat(2, 1fr)",gap:4,children:[Object(F.jsx)($.b,{colSpan:{base:2,md:1},children:Object(F.jsxs)(oe.a,{id:"name",children:[Object(F.jsx)(le.a,{children:"Name"}),Object(F.jsx)(je.a,{type:"text",required:!0,onChange:function(e){return a(e.target.value)}})]})}),Object(F.jsx)($.b,{colSpan:{base:2,md:1},children:Object(F.jsxs)(oe.a,{id:"email",children:[Object(F.jsx)(le.a,{children:"Email address"}),Object(F.jsx)(je.a,{type:"email",required:!0,onChange:function(e){return o(e.target.value)}}),Object(F.jsx)(oe.b,{children:"I'll get back to you in this email!"})]})})]}),Object(F.jsx)(le.a,{mt:3,children:"Message"}),Object(F.jsx)(de.a,{rows:3,placeholder:"Your message goes here...",required:!0,onChange:function(e){return u(e.target.value)}}),Object(F.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"1rem"},children:Object(F.jsx)(ue.a,{colorScheme:"red",variant:"outline",onClick:function(e){if(x("Sending..."),e.preventDefault(),e.target.checkValidity(),e.target.reportValidity(),console.log(e),""!==n&&p.test(String(s).toLowerCase())&&""!==d){var t={from_name:n,message:d,email:s};be.a.send(he.SERVICE_ID,he.TEMPLATE_ID,t,he.USER_ID).then((function(e){x("Message sent!"),o(""),a(""),u("")})).catch((function(e){x("Failed to send! :(")}))}},type:"submit",disabled:""===n||!p.test(String(s).toLowerCase())||""===d,children:O})})]})]})},xe=n(350),pe=n(175),fe=n(136),me=n(176);var ge=function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)(z,{body:"My Socials"}),Object(F.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",marginTop:"2rem",marginBottom:"2rem",fontSize:"2.5rem",color:"gray"},children:[Object(F.jsx)(xe.a,{className:"social-icon",href:"https://kinjal.co",children:Object(F.jsx)(pe.a,{})}),Object(F.jsx)(xe.a,{className:"social-icon",href:"https://www.linkedin.com/in/kinjal-raykarmakar/",children:Object(F.jsx)(fe.b,{})}),Object(F.jsx)(xe.a,{className:"social-icon",href:"https://www.facebook.com/kinjal.raykarmakar",children:Object(F.jsx)(G.a,{})}),Object(F.jsx)(xe.a,{className:"social-icon",href:"https://www.instagram.com/kinjal.raykarmakar",children:Object(F.jsx)(fe.a,{})}),Object(F.jsx)(xe.a,{className:"social-icon",href:"https://www.github.com/kinjark2k",children:Object(F.jsx)(me.a,{})}),Object(F.jsx)(xe.a,{className:"social-icon",href:"https://www.github.com/kinjark2k",children:Object(F.jsx)(G.d,{})})]})]})};var ye=function(){return Object(F.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"1rem",paddingBottom:"1rem"},children:"\xa9 ".concat((new Date).getFullYear()," Kinjal Raykarmakar")})};n(324);var ve=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{id:"stars"}),Object(F.jsx)("div",{id:"stars2"}),Object(F.jsx)("div",{id:"stars3"})]})},ke=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){return this.props.data?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ve,{}),Object(F.jsxs)(p.a,{maxW:"container.lg",marginTop:5,children:[Object(F.jsx)(T,{}),Object(F.jsx)(W,{}),Object(F.jsx)(V,{}),Object(F.jsx)(X,{}),Object(F.jsx)(ee,{}),Object(F.jsx)(ie,{}),Object(F.jsx)(Oe,{}),Object(F.jsx)(ge,{}),Object(F.jsx)(ye,{})]})]}):Object(F.jsx)("div",{style:{width:"95vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(F.jsx)(f.a,{size:"xl"})})}}]),n}(a.a.Component),Se=Object(s.b)((function(e){return console.log(e.data),{data:e.data}}),{fetchData:I})(ke),we=function(){return function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.onAuthStateChanged((function(e){console.log(e),t(e?{type:"ALREADY_SIGNED_IN",payload:{user:e,isLoggedIn:!0}}:{type:"ALREADY_SIGNED_IN",payload:{user:null,isLoggedIn:!1}})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ie=n(352),Ce=n(363),Le=n(58),De=n(353),Ae=n(354),Ee=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isOpen:!1},e}return Object(h.a)(n,[{key:"onLogoutClick",value:function(e){this.props.logout()}},{key:"render",value:function(){var e=this;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Ie.a,{colorScheme:"blue","aria-label":"Search database",onClick:function(){return e.setState({isOpen:!0})},icon:Object(F.jsx)(De.a,{})}),Object(F.jsx)(Ce.a,{placement:"left",size:"xs",onClose:function(){return e.setState({isOpen:!1})},isOpen:this.state.isOpen,children:Object(F.jsx)(Le.f,{children:Object(F.jsxs)(Ce.b,{children:[Object(F.jsx)(Le.e,{borderBottomWidth:"1px",children:"Admin"}),Object(F.jsx)(Le.b,{children:Object(F.jsxs)(J.a,{spacing:3,children:[Object(F.jsx)(J.c,{children:Object(F.jsx)(ue.a,{isFullWidth:!0,children:"About"})}),Object(F.jsx)(J.c,{children:Object(F.jsx)(ue.a,{isFullWidth:!0,children:"About"})}),Object(F.jsx)(J.c,{children:Object(F.jsx)(ue.a,{isFullWidth:!0,children:"About"})}),Object(F.jsx)(J.c,{children:Object(F.jsx)(ue.a,{isFullWidth:!0,children:"About"})})]})}),Object(F.jsxs)(Le.d,{children:[Object(F.jsx)(ue.a,{variant:"outline",mr:3,onClick:function(){return e.setState({isOpen:!1})},children:Object(F.jsx)(Ae.a,{})}),Object(F.jsx)(ue.a,{colorScheme:"blue",onClick:function(){return e.onLogoutClick()},children:"Logout"})]})]})})})]})}}]),n}(a.a.Component),Ne=Object(s.b)(null,{alreadySignedIn:we,logout:function(){return function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.signOut().then((function(){t({type:"SIGN_OUT"})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ee),Re=n(139),Fe=n(356),ze=n(355),Te=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={theFile:""},r.handleFileUpload=function(){var e=Object(y.a)(g.a.mark((function e(t,n){var a,c,i,s,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],console.log(a),c=w.ref(),i=c.child("images/".concat(a.name,"-").concat(Date.now())),e.next=6,i.put(a);case 6:return s=e.sent,e.next=9,c.child(s.metadata.fullPath).getDownloadURL();case 9:o=e.sent,n("theFile",o),r.setState({theFile:o});case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),r.fileInputRef=a.a.createRef(),r.fileURLRef=a.a.createRef(),r}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(F.jsx)(Re.b,{initialValues:this.state,children:function(t){return Object(F.jsx)(Re.a,{name:"theFile",children:function(n){var r=n.field,a=n.form;return Object(F.jsx)(oe.a,{isInvalid:a.errors.theFile&&a.touched.theFile,mt:5,flexGrow:1,children:Object(F.jsxs)(C.a,{children:[Object(F.jsx)(Ie.a,{icon:Object(F.jsx)(ze.a,{}),mb:2,onClick:function(){return e.fileInputRef.current.click()}}),Object(F.jsx)(je.a,{type:"file",ref:e.fileInputRef,onChange:function(n){return e.handleFileUpload(n,t.setFieldValue)},accept:"image/*",style:{display:"none"}}),Object(F.jsx)(le.a,{htmlFor:"theFile",ml:3,alignItems:"center",children:"Download URL"}),Object(F.jsx)(je.a,Object(te.a)(Object(te.a)({},r),{},{id:"theFile",ref:e.fileURLRef})),Object(F.jsx)(Fe.a,{children:a.errors.theFile}),Object(F.jsx)(ue.a,{ml:3,onClick:function(){navigator.clipboard.writeText(e.state.theFile)},children:"Clip it!"})]})})}})}})}}]),n}(a.a.Component),Me=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={isSubmitBtnClicked:!1},r.props.alreadySignedIn(),r.submitRef=a.a.createRef(),r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"onLoginSubmit",value:function(e){e.preventDefault(),this.setState({isSubmitBtnClicked:!0});var t=new FormData(e.target),n=t.get("email"),r=t.get("password");this.props.signIn(n,r)}},{key:"renderLoginForm",value:function(){var e=this;return this.props.auth.errorMsg&&this.state.isSubmitBtnClicked&&this.setState({isSubmitBtnClicked:!1}),Object(F.jsx)(C.a,{width:"full",height:"100vh",align:"center",justifyContent:"center",alignItems:"center",children:Object(F.jsxs)(L.a,{maxW:"400px",borderWidth:1,borderRadius:8,p:8,boxShadow:"lg",children:[Object(F.jsx)(D.a,{children:"Login as Admin"}),Object(F.jsx)(A.a,{mt:3,color:"red.500",children:this.props.auth.errorMsg}),Object(F.jsxs)("form",{onSubmit:function(t){return e.onLoginSubmit(t)},children:[Object(F.jsxs)(oe.a,{id:"email",mt:4,children:[Object(F.jsx)(le.a,{children:"Email address"}),Object(F.jsx)(je.a,{type:"email",name:"email",required:!0})]}),Object(F.jsxs)(oe.a,{id:"password",mt:6,children:[Object(F.jsx)(le.a,{children:"Password"}),Object(F.jsx)(je.a,{type:"password",name:"password",required:!0})]}),Object(F.jsx)(ue.a,{type:"submit",mt:4,width:"full",ref:this.submitRef,children:this.state.isSubmitBtnClicked?Object(F.jsx)(f.a,{}):"Sign In"})]})]})})}},{key:"renderAdminDashboard",value:function(){return Object(F.jsx)("div",{children:Object(F.jsxs)(p.a,{maxW:"container.xl",mt:3,children:[Object(F.jsxs)(C.a,{children:[Object(F.jsx)(Ne,{}),Object(F.jsx)(A.a,{fontSize:"3xl",textAlign:"center",flexGrow:1,letterSpacing:20,children:"ADMIN PANEL"})]}),Object(F.jsx)(Te,{})]})})}},{key:"render",value:function(){return null===this.props.auth.isLoggedIn?Object(F.jsx)("div",{children:Object(F.jsx)("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(F.jsx)(f.a,{size:"xl"})})}):this.props.auth.isLoggedIn?this.renderAdminDashboard():this.renderLoginForm()}}]),n}(a.a.Component),_e=Object(s.b)((function(e){return console.log(e),{auth:e.auth,data:e.data}}),{signIn:function(e,t){return function(){var n=Object(y.a)(g.a.mark((function n(r){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:S.signInWithEmailAndPassword(e,t).then((function(e){r({type:"SIGN_IN",payload:e.user})})).catch((function(e){r({type:"SIGN_IN_ERROR",payload:e.message})}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},alreadySignedIn:we,fetchData:I})(Me),Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA":return t.payload;case"EDIT_ABOUT":return Object(te.a)(Object(te.a)({},e),{},{about:t.payload});default:return e}},We={isLoggedIn:null,user:null,errorMsg:null},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(te.a)(Object(te.a)({},e),{},{isLoggedIn:!0,user:t.payload,errorMsg:null});case"SIGN_IN_ERROR":return Object(te.a)(Object(te.a)({},e),{},{isLoggedIn:!1,user:null,errorMsg:t.payload});case"ALREADY_SIGNED_IN":var n=t.payload,r=n.isLoggedIn,a=n.user;return Object(te.a)(Object(te.a)({},e),{},{isLoggedIn:r,user:a,errorMsg:null});case"SIGN_OUT":return Object(te.a)(Object(te.a)({},e),{},{isLoggedIn:!1,user:null,errorMsg:null});default:return e}},Pe=Object(o.c)({data:Ge,auth:Be}),Ue=n(357),Ve=Object(Ue.a)({config:{useSystemColorMode:!0,initialColorMode:"dark"},fonts:{heading:"Jetbrains Mono",body:"Jetbrains Mono"}}),qe=Object(o.d)(Pe,Object(o.a)(l.a));i.a.render(Object(F.jsx)(s.a,{store:qe,children:Object(F.jsx)(u.a,{theme:Ve,children:Object(F.jsxs)(j.a,{children:[Object(F.jsx)(d.a,{path:"/",exact:!0,component:Se}),Object(F.jsx)(d.a,{path:"/admin",exact:!0,component:_e})]})})}),document.querySelector("#root"))}},[[326,1,2]]]);
//# sourceMappingURL=main.a5643fa8.chunk.js.map