(function(e){function t(t){for(var n,o,l=t[0],s=t[1],u=t[2],b=0,d=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);i&&i(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var i=s;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1ebc":function(e,t,r){},3195:function(e,t,r){"use strict";r("1ebc")},"38e9":function(e,t,r){e.exports=r.p+"img/dumbbell-light.ef471ab1.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={key:0,class:"min-h-full font-Poppins box-border"};function c(e,t,r,c,o,l){var s=Object(n["w"])("Navigation"),u=Object(n["w"])("router-view");return c.appReady?(Object(n["r"])(),Object(n["f"])("div",a,[Object(n["i"])(s),Object(n["i"])(u)])):Object(n["e"])("",!0)}var o=r("38e9"),l=r.n(o),s={class:"bg-at-light-green text-white"},u={class:"container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row"},i=Object(n["g"])("div",{class:"flex items-center gap-x-4"},[Object(n["g"])("img",{class:"w-14",src:l.a,alt:""}),Object(n["g"])("h1",{class:"text-lg"},"Active Tracker")],-1),b={class:"flex flex-1 justify-end gap-x-10"},d=Object(n["h"])("Home"),g=Object(n["h"])("Create"),p=Object(n["h"])("Login");function f(e,t,r,a,c,o){var l=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("header",s,[Object(n["g"])("nav",u,[i,Object(n["g"])("ul",b,[Object(n["i"])(l,{class:"cursor-pointer",to:{name:"Home"}},{default:Object(n["D"])((function(){return[d]})),_:1}),a.user?(Object(n["r"])(),Object(n["d"])(l,{key:0,class:"cursor-pointer",to:{name:"Create"}},{default:Object(n["D"])((function(){return[g]})),_:1})):Object(n["e"])("",!0),a.user?Object(n["e"])("",!0):(Object(n["r"])(),Object(n["d"])(l,{key:1,class:"cursor-pointer",to:{name:"Login"}},{default:Object(n["D"])((function(){return[p]})),_:1})),a.user?(Object(n["r"])(),Object(n["f"])("li",{key:2,onClick:t[0]||(t[0]=function(){return a.logout&&a.logout.apply(a,arguments)}),class:"cursor-pointer"},"Logout")):Object(n["e"])("",!0)])])])}var x=r("1da1"),j=(r("96cf"),Object(n["t"])({user:null})),O={setUser:function(e){j.user=e?e.user:null}},m={state:j,methods:O},h=r("940b"),v="https://fbaxpqbxhrzncubmgljs.supabase.co",y="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiYXhwcWJ4aHJ6bmN1Ym1nbGpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcxMDYwNzMsImV4cCI6MTk3MjY4MjA3M30.9c9e3rMADWNxTcuRuiUrghJDehSoqTE3_ZYRQhO6440",w=Object(h["a"])(v,y),k=r("6c02"),E={setup:function(){var e=Object(n["b"])((function(){return m.state.user})),t=Object(k["d"])(),r=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.auth.signOut();case 2:console.log("bye"),t.push({name:"Home"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{logout:r,user:e}}},T=r("6b0d"),U=r.n(T),V=U()(E,[["render",f]]),C={components:{Navigation:V},setup:function(){var e=Object(n["u"])(null),t=w.auth.user();return t||(e.value=!0),w.auth.onAuthStateChange((function(t,r){m.methods.setUser(r),e.value=!0,console.log("Change")})),{appReady:e}}},M=(r("3195"),U()(C,[["render",c]])),R=(r("45fc"),r("f7da")),B=r.n(R),W=r("a25c"),I=r.n(W),L={key:0,class:"w-full flex flex-col items-center"},S=Object(n["g"])("h1",{class:"text-2xl"},"Looks empty here",-1),q=Object(n["h"])("Create Workout"),P={key:1,class:"container mt-10 px-4"},N={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},A={key:0,src:B.a,alt:"running",class:"h-24 w-auto"},D={key:1,src:I.a,alt:"dumbbell",class:"h-24 w-auto"},_={class:"mt-6 py-1 px-3 text-white bg-at-light-green shadow-md rounded-lg"},J={class:"mt-8 mb-2 text-center text-xl text-at-light-green"};function H(e,t,r,a,c,o){var l=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])(n["a"],null,[0===a.data.length?(Object(n["r"])(),Object(n["f"])("div",L,[S,Object(n["i"])(l,{class:"mt-6 px-6 rounded-sm text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green",to:{name:"Create"}},{default:Object(n["D"])((function(){return[q]})),_:1})])):Object(n["e"])("",!0),a.dataLoaded?(Object(n["r"])(),Object(n["f"])("div",P,[Object(n["g"])("div",N,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.data,(function(e,t){return Object(n["r"])(),Object(n["d"])(l,{class:"flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer",to:{name:"View-Workout",params:{workoutId:e.id}},key:t},{default:Object(n["D"])((function(){return["cardio"===e.workoutType?(Object(n["r"])(),Object(n["f"])("img",A)):(Object(n["r"])(),Object(n["f"])("img",D)),Object(n["g"])("p",_,Object(n["y"])(e.workoutType),1),Object(n["g"])("h1",J,Object(n["y"])(e.workoutName),1)]})),_:2},1032,["to"])})),128))])])):Object(n["e"])("",!0)],64)}var Y={name:"Home",components:{},setup:function(){var e=Object(n["u"])([]),t=Object(n["u"])(null),r=function(){var r=Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,w.from("workouts").select("*");case 3:if(n=r.sent,a=n.data,c=n.error,!c){r.next=8;break}throw c;case 8:console.log(e),e.value=a,t.value=!0,r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](0),console.warn(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(){return r.apply(this,arguments)}}();return r(),{data:e,dataLoaded:t}}},z=U()(Y,[["render",H]]),F={class:"max-w-screen-sm mx-auto px-4 py-10"},Z={key:0,class:"mb-10 p-4 rounded-md bg-light-grey shadow-lg"},X={class:"text-red-500"},G=Object(n["g"])("h1",{class:"text-3xl text-at-light-green mb-4"},"Login",-1),Q={class:"flex flex-col mb-2"},K=Object(n["g"])("label",{for:"email",class:"mb-1 text-sm text-at-light-green"},"Email",-1),$={class:"flex flex-col mb-2"},ee=Object(n["g"])("label",{for:"password",class:"mb-1 text-sm text-at-light-green"},"Password",-1),te=Object(n["g"])("button",{type:"submit",class:"mt-6 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Login",-1),re=Object(n["h"])(" Don't have an account? "),ne=Object(n["g"])("span",{class:"text-at-light-green"},"Register",-1);function ae(e,t,r,a,c,o){var l=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("div",F,[a.errorMsg?(Object(n["r"])(),Object(n["f"])("div",Z,[Object(n["g"])("p",X,Object(n["y"])(a.errorMsg),1)])):Object(n["e"])("",!0),Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["F"])((function(){return a.login&&a.login.apply(a,arguments)}),["prevent"])),class:"p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[G,Object(n["g"])("div",Q,[K,Object(n["E"])(Object(n["g"])("input",{id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e}),type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none"},null,512),[[n["B"],a.email]])]),Object(n["g"])("div",$,[ee,Object(n["E"])(Object(n["g"])("input",{id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e}),type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none"},null,512),[[n["B"],a.password]])]),te,Object(n["i"])(l,{class:"text-sm mt-6 text-center",to:{name:"Register"}},{default:Object(n["D"])((function(){return[re,ne]})),_:1})],32)])}r("4795");var ce={name:"login",setup:function(){var e=Object(k["d"])(),t=Object(n["u"])(null),r=Object(n["u"])(null),a=Object(n["u"])(null),c=function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(){var c,o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.auth.signIn({email:t.value,password:r.value});case 3:if(c=n.sent,o=c.user,l=c.error,!l){n.next=8;break}throw l;case 8:console.log("logged in".concat(o)),e.push({name:"Home"}),n.next=16;break;case 12:n.prev=12,n.t0=n["catch"](0),a.value="Error: ".concat(n.t0.message),setTimeout((function(){return a.value=""}),5e3);case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();return{email:t,password:r,errorMsg:a,login:c}}},oe=U()(ce,[["render",ae]]),le={class:"max-w-screen-sm mx-auto px-4 py-10"},se={key:0,class:"mb-10 p-4 rounded-md bg-light-grey shadow-lg"},ue={class:"text-red-500"},ie=Object(n["g"])("h1",{class:"text-3xl text-at-light-green mb-4"},"Register",-1),be={class:"flex flex-col mb-2"},de=Object(n["g"])("label",{for:"email",class:"mb-1 text-sm text-at-light-green"},"Email",-1),ge={class:"flex flex-col mb-2"},pe=Object(n["g"])("label",{for:"password",class:"mb-1 text-sm text-at-light-green"},"Password",-1),fe={class:"flex flex-col mb-2"},xe=Object(n["g"])("label",{for:"confirmPassword",class:"mb-1 text-sm text-at-light-green"},"Confirm Password",-1),je=Object(n["g"])("button",{type:"submit",class:"mt-6 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Register",-1),Oe=Object(n["h"])(" Already have an account? "),me=Object(n["g"])("span",{class:"text-at-light-green"},"Login",-1);function he(e,t,r,a,c,o){var l=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("div",le,[a.errorMsg?(Object(n["r"])(),Object(n["f"])("div",se,[Object(n["g"])("p",ue,Object(n["y"])(a.errorMsg),1)])):Object(n["e"])("",!0),Object(n["g"])("form",{onSubmit:t[3]||(t[3]=Object(n["F"])((function(){return a.register&&a.register.apply(a,arguments)}),["prevent"])),class:"p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[ie,Object(n["g"])("div",be,[de,Object(n["E"])(Object(n["g"])("input",{id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e}),type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none"},null,512),[[n["B"],a.email]])]),Object(n["g"])("div",ge,[pe,Object(n["E"])(Object(n["g"])("input",{id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e}),type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none"},null,512),[[n["B"],a.password]])]),Object(n["g"])("div",fe,[xe,Object(n["E"])(Object(n["g"])("input",{id:"confirmPassword","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.confirmPassword=e}),type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none"},null,512),[[n["B"],a.confirmPassword]])]),je,Object(n["i"])(l,{class:"text-sm mt-6 text-center",to:{name:"Login"}},{default:Object(n["D"])((function(){return[Oe,me]})),_:1})],32)])}var ve={name:"register",setup:function(){var e=Object(k["d"])(),t=Object(n["u"])(null),r=Object(n["u"])(null),a=Object(n["u"])(null),c=Object(n["u"])(null),o=function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r.value!==a.value){n.next=16;break}return n.prev=1,n.next=4,w.auth.signUp({email:t.value,password:r.value});case 4:if(o=n.sent,l=o.error,!l){n.next=8;break}throw l;case 8:e.push({name:"Login"}),n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](1),c.value=n.t0.message,setTimeout((function(){return c.value=""}),5e3);case 15:return n.abrupt("return");case 16:c.value="Error: Passwords do not match",setTimeout((function(){return c.value=""}),5e3);case 18:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(){return n.apply(this,arguments)}}();return{email:t,password:r,confirmPassword:a,errorMsg:c,register:o}}},ye=U()(ve,[["render",he]]),we=r("9b82"),ke=r.n(we),Ee={class:"max-w-screen-md mx-auto px-4 py-10"},Te={key:0,class:"mb-10 p-4 bg-light-grey rounded-md"},Ue={class:"text-at-light-green"},Ve={class:"text-red-500"},Ce={class:"p-8 flex items-start bg-light-grey rounded-md shadow-lg"},Me=Object(n["g"])("h1",{class:"text-2xl text-at-light-green"},"Record Workout",-1),Re={class:"flex flex-col"},Be=Object(n["g"])("label",{for:"workout-name",class:"mb-1 text-sm text-at-light-green"},"Workout Name",-1),We={class:"flex flex-col"},Ie=Object(n["g"])("label",{for:"workout-type",class:"mb-1 text-sm text-at-light-green"},"Workout Type",-1),Le=Object(n["g"])("option",{value:"select-workout"},"Select Workout",-1),Se=Object(n["g"])("option",{value:"strength"},"Strength Training",-1),qe=Object(n["g"])("option",{value:"cardio"},"Cardio",-1),Pe=[Le,Se,qe],Ne={key:0,class:"flex flex-col gap-y-4"},Ae={class:"flex flex-col md:w-1/3"},De=Object(n["g"])("label",{for:"exrecise-name",class:"mb-1 text-sm text-at-light-green"},"Exercise",-1),_e=["onUpdate:modelValue"],Je={class:"flex flex-col flex-1"},He=Object(n["g"])("label",{for:"sets",class:"mb-1 text-sm text-at-light-green"},"Sets",-1),Ye=["onUpdate:modelValue"],ze={class:"flex flex-col flex-1"},Fe=Object(n["g"])("label",{for:"reps",class:"mb-1 text-sm text-at-light-green"},"Reps",-1),Ze=["onUpdate:modelValue"],Xe={class:"flex flex-col flex-1"},Ge=Object(n["g"])("label",{for:"weight",class:"mb-1 text-sm text-at-light-green"},"Weight (LBs)",-1),Qe=["onUpdate:modelValue"],Ke=["onClick"],$e={key:1,class:"flex flex-col gap-y-4"},et={class:"flex flex-col md:w-1/3"},tt=Object(n["g"])("label",{for:"cardio-type",class:"mb-1 text-sm text-at-light-green"},"Type",-1),rt=["onUpdate:modelValue"],nt=Object(n["g"])("option",{value:"#"},"Select Type",-1),at=Object(n["g"])("option",{value:"run"},"Runs",-1),ct=Object(n["g"])("option",{value:"walk"},"Walk",-1),ot=[nt,at,ct],lt={class:"flex flex-col flex-1"},st=Object(n["g"])("label",{for:"distance",class:"mb-1 text-sm text-at-light-green"},"Distance",-1),ut=["onUpdate:modelValue"],it={class:"flex flex-col flex-1"},bt=Object(n["g"])("label",{for:"duration",class:"mb-1 text-sm text-at-light-green"},"Duration(min)",-1),dt=["onUpdate:modelValue"],gt={class:"flex flex-col flex-1"},pt=Object(n["g"])("label",{for:"pace",class:"mb-1 text-sm text-at-light-green"},"Pace",-1),ft=["onUpdate:modelValue"],xt=["onClick"],jt=Object(n["g"])("button",{type:"submit",class:"mt-6 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Record workout",-1);function Ot(e,t,r,a,c,o){return Object(n["r"])(),Object(n["f"])("div",Ee,[a.statusMsg||a.errorMsg?(Object(n["r"])(),Object(n["f"])("div",Te,[Object(n["g"])("p",Ue,Object(n["y"])(a.statusMsg),1),Object(n["g"])("p",Ve,Object(n["y"])(a.errorMsg),1)])):Object(n["e"])("",!0),Object(n["g"])("div",Ce,[Object(n["g"])("form",{onSubmit:t[5]||(t[5]=Object(n["F"])((function(){return a.createWorkout&&a.createWorkout.apply(a,arguments)}),["prevent"])),class:"flex flex-col gap-y-5 w-full"},[Me,Object(n["g"])("div",Re,[Be,Object(n["E"])(Object(n["g"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"workout-name","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.workoutName=e})},null,512),[[n["B"],a.workoutName]])]),Object(n["g"])("div",We,[Ie,Object(n["E"])(Object(n["g"])("select",{onChange:t[1]||(t[1]=function(){return a.workoutChange&&a.workoutChange.apply(a,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.workoutType=e}),id:"workout-type",required:"",class:"p-2 text-gray-500 focus:outline-none"},Pe,544),[[n["A"],a.workoutType]])]),"strength"===a.workoutType?(Object(n["r"])(),Object(n["f"])("div",Ne,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative md:flex-row",key:t},[Object(n["g"])("div",Ae,[De,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.exercise=t}},null,8,_e),[[n["B"],e.exercise]])]),Object(n["g"])("div",Je,[He,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.sets=t}},null,8,Ye),[[n["B"],e.sets]])]),Object(n["g"])("div",ze,[Fe,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.reps=t}},null,8,Ze),[[n["B"],e.reps]])]),Object(n["g"])("div",Xe,[Ge,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.weight=t}},null,8,Qe),[[n["B"],e.weight]])]),Object(n["g"])("img",{onClick:function(t){return a.deleteExercise(e.id)},src:ke.a,class:"h-4 w-auto absolute -left-5 cursor-pointer",alt:"trash-can"},null,8,Ke)])})),128)),Object(n["g"])("button",{onClick:t[3]||(t[3]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),type:"button",class:"mt-6 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise")])):Object(n["e"])("",!0),"cardio"===a.workoutType?(Object(n["r"])(),Object(n["f"])("div",$e,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative md:flex-row",key:t},[Object(n["g"])("div",et,[tt,Object(n["E"])(Object(n["g"])("select",{id:"cardio-type",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.cardioType=t}},ot,8,rt),[[n["A"],e.cardioType]])]),Object(n["g"])("div",lt,[st,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.distance=t}},null,8,ut),[[n["B"],e.distance]])]),Object(n["g"])("div",it,[bt,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.duration=t}},null,8,dt),[[n["B"],e.duration]])]),Object(n["g"])("div",gt,[pt,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.pace=t}},null,8,ft),[[n["B"],e.pace]])]),Object(n["g"])("img",{onClick:function(t){return a.deleteExercise(e.id)},src:ke.a,class:"h-4 w-auto absolute -left-5 cursor-pointer",alt:"trash-can"},null,8,xt)])})),128)),Object(n["g"])("button",{onClick:t[4]||(t[4]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),type:"button",class:"mt-6 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise")])):Object(n["e"])("",!0),jt],32)])])}r("4de4");var mt=r("8a77"),ht={name:"create",setup:function(){var e=Object(n["u"])(""),t=Object(n["u"])("select-workout"),r=Object(n["u"])(["1"]),a=Object(n["u"])(null),c=Object(n["u"])(null);console.log("HAI");var o=function(){"strength"!==t.value?r.value.push({id:Object(mt["a"])(),cardioType:"",distance:"",duration:"",pace:""}):r.value.push({id:Object(mt["a"])(),exercise:"",sets:"",reps:"",weight:""})},l=function(e){r.value.length>1?r.value=r.value.filter((function(t){return t.id!==e})):(c.value="error: cannot remove, need to at least have one exercise",setTimeout((function(){return c.value=!1}),5e3))},s=function(){r.value=[],o()},u=function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.from("workouts").insert([{workoutName:e.value,workoutType:t.value,exercises:r.value}]);case 3:if(o=n.sent,l=o.error,!l){n.next=7;break}throw l;case 7:a.value="Success: Workout Added!",e.value=null,t.value="select-workout",r.value=[],setTimeout((function(){return a.value=!1}),5e3),n.next=18;break;case 14:n.prev=14,n.t0=n["catch"](0),c.value="Error: ".concat(n.t0.message),setTimeout((function(){return c.value=!1}),5e3);case 18:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}();return{workoutName:e,workoutType:t,exercises:r,statusMsg:a,errorMsg:c,addExercise:o,workoutChange:s,deleteExercise:l,createWorkout:u}}},vt=U()(ht,[["render",Ot]]),yt=r("6122"),wt=r.n(yt),kt=r("a407"),Et=r.n(kt),Tt={class:"max-w-screen-sm mx-auto px-4 py-10"},Ut={key:0,class:"mb-10 p-4 rounded-md shadow-md bg-light-grey"},Vt={class:"text-at-light-green"},Ct={class:"text-red-500"},Mt={key:1},Rt={class:"flex flex-col items-center p-8 rounded-md shadow-md bg-light-grey relative"},Bt={key:0,class:"flex absolute left-2 top-2 gap-x-2"},Wt=Object(n["g"])("img",{class:"h-3.5 w-auto",alt:"pencil",src:wt.a},null,-1),It=[Wt],Lt=Object(n["g"])("img",{class:"h-3.5 w-auto",alt:"trash",src:Et.a},null,-1),St=[Lt],qt={key:1,class:"h-24 w-auto",src:B.a,alt:"running"},Pt={key:2,class:"h-24 w-auto",src:I.a,alt:"dumbbell"},Nt={class:"mt-6 py-1.5 px-5 text-xs text-white bg-at-light-green rounded-lg shadow-md"},At={class:"w-full mt-6"},Dt={key:1,class:"text-at-light-green text-2xl text-center"},_t={class:"mt-10 p-8 rounded-md flex flex-col item-center bg-light-grey shadow-md"},Jt={key:0,class:"flex flex-col gap-y-4 w-full"},Ht={class:"flex flex-2 flex-col md:w-1/3"},Yt=Object(n["g"])("label",{for:"exercise-name",class:"mb-1 text-sm text-at-light-green"}," Exercise ",-1),zt=["onUpdate:modelValue"],Ft={key:1},Zt={class:"flex flex-1 flex-col"},Xt=Object(n["g"])("label",{for:"sets",class:"mb-1 text-sm text-at-light-green"}," Sets ",-1),Gt=["onUpdate:modelValue"],Qt={key:1},Kt={class:"flex flex-1 flex-col"},$t=Object(n["g"])("label",{for:"reps",class:"mb-1 text-sm text-at-light-green"}," Reps ",-1),er=["onUpdate:modelValue"],tr={key:1},rr={class:"flex flex-1 flex-col"},nr=Object(n["g"])("label",{for:"weight",class:"mb-1 text-sm text-at-light-green"}," Weight (LBs) ",-1),ar=["onUpdate:modelValue"],cr={key:1},or=["onClick"],lr={key:1,class:"flex flex-col gap=y-4 w-full"},sr={class:"flex flex-2 flex-col md:w-1/3"},ur=Object(n["g"])("label",{for:"cardioType",class:"mb-1 text-sm text-at-light-green"}," Type ",-1),ir=["onUpdate:modelValue"],br=Object(n["g"])("option",{value:"#"},"Select Type",-1),dr=Object(n["g"])("option",{value:"run"},"Run",-1),gr=Object(n["g"])("option",{value:"walk"},"Walk",-1),pr=[br,dr,gr],fr={key:1},xr={class:"flex flex-1 flex-col"},jr=Object(n["g"])("label",{for:"distance",class:"mb-1 text-sm text-at-light-green"}," Distance ",-1),Or=["onUpdate:modelValue"],mr={key:1},hr={class:"flex flex-1 flex-col"},vr=Object(n["g"])("label",{for:"duration",class:"mb-1 text-sm text-at-light-green"}," Duration(Mins) ",-1),yr=["onUpdate:modelValue"],wr={key:1},kr={class:"flex flex-1 flex-col"},Er=Object(n["g"])("label",{for:"pace",class:"mb-1 text-sm text-at-light-green"}," Pace ",-1),Tr=["onUpdate:modelValue"],Ur={key:1},Vr=["onClick"];function Cr(e,t,r,a,c,o){return Object(n["r"])(),Object(n["f"])("div",Tt,[a.statusMsg||a.errorMsg?(Object(n["r"])(),Object(n["f"])("div",Ut,[Object(n["g"])("p",Vt,Object(n["y"])(a.statusMsg),1),Object(n["g"])("p",Ct,Object(n["y"])(a.errorMsg),1)])):Object(n["e"])("",!0),a.dataLoaded?(Object(n["r"])(),Object(n["f"])("div",Mt,[Object(n["g"])("div",Rt,[a.user?(Object(n["r"])(),Object(n["f"])("div",Bt,[Object(n["g"])("div",{onClick:t[0]||(t[0]=function(){return a.editMode&&a.editMode.apply(a,arguments)}),class:"h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-at-light-green shadow-lg"},It),Object(n["g"])("div",{onClick:t[1]||(t[1]=function(){return a.deleteWorkout&&a.deleteWorkout.apply(a,arguments)}),class:"h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-at-light-green shadow-lg"},St)])):Object(n["e"])("",!0),"cardio"==a.data.workoutType?(Object(n["r"])(),Object(n["f"])("img",qt)):(Object(n["r"])(),Object(n["f"])("img",Pt)),Object(n["g"])("span",Nt,Object(n["y"])(a.data.workoutType),1),Object(n["g"])("div",At,[a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.data.workoutName=e})},null,512)),[[n["B"],a.data.workoutName]]):(Object(n["r"])(),Object(n["f"])("h1",Dt,Object(n["y"])(a.data.workoutName),1))])]),Object(n["g"])("div",_t,["strength"==a.data.workoutType?(Object(n["r"])(),Object(n["f"])("div",Jt,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.data.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative sm:flex-row",key:t},[Object(n["g"])("div",Ht,[Yt,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"exercise-name",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.exercise=t}},null,8,zt)),[[n["B"],e.exercise]]):(Object(n["r"])(),Object(n["f"])("p",Ft,Object(n["y"])(e.exercise),1))]),Object(n["g"])("div",Zt,[Xt,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"sets",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.sets=t}},null,8,Gt)),[[n["B"],e.sets]]):(Object(n["r"])(),Object(n["f"])("p",Qt,Object(n["y"])(e.sets),1))]),Object(n["g"])("div",Kt,[$t,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"reps",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.reps=t}},null,8,er)),[[n["B"],e.reps]]):(Object(n["r"])(),Object(n["f"])("p",tr,Object(n["y"])(e.reps),1))]),Object(n["g"])("div",rr,[nr,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"weight",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.weight=t}},null,8,ar)),[[n["B"],e.weight]]):(Object(n["r"])(),Object(n["f"])("p",cr,Object(n["y"])(e.weight),1))]),a.edit?(Object(n["r"])(),Object(n["f"])("img",{key:0,onClick:function(t){return a.deleteExercise(e.id)},class:"absolute h-4 w-auto -left-5 cursor-pointer",src:ke.a,alt:"trash"},null,8,or)):Object(n["e"])("",!0)])})),128)),a.edit?(Object(n["r"])(),Object(n["f"])("button",{key:0,onClick:t[3]||(t[3]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),type:"button",class:"mt-6 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")):Object(n["e"])("",!0)])):(Object(n["r"])(),Object(n["f"])("div",lr,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(a.data.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative sm:flex-row",key:t},[Object(n["g"])("div",sr,[ur,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("select",{key:0,id:"cardioType",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.cardioType=t}},pr,8,ir)),[[n["A"],e.cardioType]]):(Object(n["r"])(),Object(n["f"])("p",fr,Object(n["y"])(e.cardioType),1))]),Object(n["g"])("div",xr,[jr,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"distance",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.distance=t}},null,8,Or)),[[n["B"],e.distance]]):(Object(n["r"])(),Object(n["f"])("p",mr,Object(n["y"])(e.distance),1))]),Object(n["g"])("div",hr,[vr,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"duration",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.duration=t}},null,8,yr)),[[n["B"],e.duration]]):(Object(n["r"])(),Object(n["f"])("p",wr,Object(n["y"])(e.duration),1))]),Object(n["g"])("div",kr,[Er,a.edit?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"pace",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.pace=t}},null,8,Tr)),[[n["B"],e.pace]]):(Object(n["r"])(),Object(n["f"])("p",Ur,Object(n["y"])(e.pace),1))]),a.edit?(Object(n["r"])(),Object(n["f"])("img",{key:0,class:"absolute h-4 w-auto -left-5 cursor-pointer",onClick:function(t){return a.deleteExercise(e.id)},src:ke.a,alt:"trash"},null,8,Vr)):Object(n["e"])("",!0)])})),128)),a.edit?(Object(n["r"])(),Object(n["f"])("button",{key:0,type:"button",onClick:t[4]||(t[4]=function(){return a.addExercise&&a.addExercise.apply(a,arguments)}),class:"mt-6 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")):Object(n["e"])("",!0)]))]),a.edit?(Object(n["r"])(),Object(n["f"])("button",{key:0,type:"button",onClick:t[5]||(t[5]=function(){return a.update&&a.update.apply(a,arguments)}),class:"mt-10 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Update Workout ")):Object(n["e"])("",!0)])):Object(n["e"])("",!0)])}var Mr={name:"view-workout",setup:function(){var e=Object(k["c"])(),t=Object(k["d"])(),r=Object(n["u"])(null),a=Object(n["u"])(null),c=Object(n["u"])(null),o=Object(n["u"])(null),l=Object(n["b"])((function(){return m.state.user})),s=Object(n["u"])(null);console.log(e.params.workoutId);var u=e.params.workoutId,i=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.from("workouts").select("*").eq("id",u);case 3:if(t=e.sent,n=t.data,o=t.error,!o){e.next=8;break}throw o;case 8:console.log(n),r.value=n[0],a.value=!0,e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),c.value=e.t0.message,setTimeout((function(){return c.value=""}),5e3);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();i();var b=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.from("workouts")["delete"]().eq("id",u);case 3:if(r=e.sent,n=r.error,!n){e.next=7;break}throw n;case 7:t.push({name:"Home"}),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),c.value="Error: ".concat(e.t0.message),setTimeout((function(){return c.value=""}),5e3);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),d=function(){s.value=!s.value,console.log("HAI"+s.value),console.log(r.value.exercises)},g=function(){console.log("hey"),"strength"!==r.value.workoutType?r.value.exercises.push({id:Object(mt["a"])(),cardioType:"",distance:"",duration:"",pace:""}):r.value.exercises.push({id:Object(mt["a"])(),exercise:"",sets:"",reps:"",weight:""})},p=function(e){r.value.exercises.length>1?r.value.exercises=r.value.exercises.filter((function(t){return t.id!==e})):(c.value="error: cannot remove, need to at least have one exercise",setTimeout((function(){return c.value=!1}),5e3))},f=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.from("workouts").update({workoutName:r.value.workoutName,exercises:r.value.exercises}).eq("id",u);case 3:if(t=e.sent,n=t.error,!n){e.next=7;break}throw n;case 7:s.value=!1,o.value="Success: Workout updated",setTimeout((function(){return o.value=!1}),5e3),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](0),c.value="Error: ".concat(e.t0.message),setTimeout((function(){return c.value=!1}),5e3);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return{statusMsg:o,data:r,dataLoaded:a,errorMsg:c,edit:s,editMode:d,user:l,deleteWorkout:b,addExercise:g,deleteExercise:p,update:f}}},Rr=U()(Mr,[["render",Cr]]),Br=[{path:"/",name:"Home",component:z,meta:{title:"Home",auth:!1}},{path:"/Login",name:"Login",component:oe,meta:{title:"Login",auth:!1}},{path:"/Register",name:"Register",component:ye,meta:{title:"Register",auth:!1}},{path:"/Create",name:"Create",component:vt,meta:{title:"Create",auth:!0}},{path:"/View-Workout/:workoutId",name:"View-Workout",component:Rr,meta:{title:"View Workout"}}],Wr=Object(k["a"])({history:Object(k["b"])("/"),routes:Br});Wr.beforeEach((function(e,t,r){document.title="".concat(e.meta.title," | Active Tracker"),r()})),Wr.beforeEach((function(e,t,r){var n=w.auth.user();if(e.matched.some((function(e){return e.meta.auth})))return n?void r():void r({name:"Login"});r()}));var Ir=Wr;r("ba8c");Object(n["c"])(M).use(Ir).mount("#app")},6122:function(e,t,r){e.exports=r.p+"img/pencil-light.67a7865c.png"},"9b82":function(e,t,r){e.exports=r.p+"img/trash-light-green.f27ed677.png"},a25c:function(e,t,r){e.exports=r.p+"img/dumbbell-light-green.e9869f64.png"},a407:function(e,t,r){e.exports=r.p+"img/trash-light.f5a99b6a.png"},ba8c:function(e,t,r){},f7da:function(e,t,r){e.exports=r.p+"img/running-light-green.599f4302.png"}});
//# sourceMappingURL=app.b9208f07.js.map