"use strict";(self.webpackChunkchia_dev_guides=self.webpackChunkchia_dev_guides||[]).push([[994],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6420:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"chialisp-primer-intro",slug:"/",title:"1. Intro to Chialisp"},s=void 0,p={unversionedId:"chialisp-primer/chialisp-primer-intro",id:"chialisp-primer/chialisp-primer-intro",title:"1. Intro to Chialisp",description:"Chialisp is a language based on Lisp that is used on the Chia blockchain to dictate how and when coins can be spent. It's designed to be as simple and efficient as possible, but still provide broad functionality and Turing Completeness.",source:"@site/guides/chialisp-primer/intro.md",sourceDirName:"chialisp-primer",slug:"/",permalink:"/guides/",draft:!1,editUrl:"https://github.com/Chia-Network/chia-dev-guides/edit/main/guides/chialisp-primer/intro.md",tags:[],version:"current",frontMatter:{id:"chialisp-primer-intro",slug:"/",title:"1. Intro to Chialisp"},sidebar:"tutorialSidebar",previous:{title:"Chialisp Primer",permalink:"/guides/chialisp-primer"},next:{title:"2. Using Modules",permalink:"/guides/chialisp-using-modules"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Atoms",id:"atoms",level:2},{value:"Lists",id:"lists",level:2},{value:"Example",id:"example",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://chialisp.com"},"Chialisp")," is a language based on ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lisp_(programming_language)"},"Lisp")," that is used on the Chia blockchain to dictate how and when ",(0,i.kt)("a",{parentName:"p",href:"https://docs.chia.net/docs/01introduction/chia-system-overview#coins-and-transactions"},"coins")," can be spent. It's designed to be as simple and efficient as possible, but still provide broad functionality and ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Turing_completeness"},"Turing Completeness"),"."),(0,i.kt)("p",null,"Throughout this guide you will learn the basics of Chialisp, and by the end you should have the skills required to write working programs using it. No prior knowledge of Lisp is required."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"You can follow ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-dev-tools/#install"},"this guide")," to install and use Chia Dev Tools. You will be using these tools and a simple text editor of your choice to write and run snippets of code."),(0,i.kt)("p",null,"Once you have it set up, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'run "test"\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command compiles Chialisp code. In this case, we are compiling a simple string to make sure it is installed properly."),(0,i.kt)("p",null,"If it is working correctly, it should output ",(0,i.kt)("inlineCode",{parentName:"p"},'"test"'),". You can now follow along with any of the code in the coming sections."),(0,i.kt)("h2",{id:"atoms"},"Atoms"),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"atom")," can represent an integer, string, or hexadecimal number. However, the difference is only known before the code is compiled, and every atom is stored directly as bytes."),(0,i.kt)("p",null,"For example, these atoms all have the same value:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Representation"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Symbol"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"A")),(0,i.kt)("td",{parentName:"tr",align:null},"Names and operators")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"A"')),(0,i.kt)("td",{parentName:"tr",align:null},"Used to represent text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"65")),(0,i.kt)("td",{parentName:"tr",align:null},"Whole numbers, positive or negative")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hexadecimal"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x41")),(0,i.kt)("td",{parentName:"tr",align:null},"Raw byte representation")))),(0,i.kt)("p",null,"If you are interested in learning more about how atoms are represented, see the ",(0,i.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/ref/clvm#types"},"Types")," section."),(0,i.kt)("h2",{id:"lists"},"Lists"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"list")," is a nested chain of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cons"},"cons pairs")," used to represent a set of values, which are also either atoms or lists. While you can manually create these pairs, and it is a good thing to know how to do, we will focus on the higher-level concept of lists for now, since they are easier to use and more practical."),(0,i.kt)("p",null,"The first item in an unquoted list is the operator, and the rest are its operands. The same goes for functions or macros and their arguments. If you want to express a list of values, you either have to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," operator or quote the list."),(0,i.kt)("p",null,"This creates a list of values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"run '(list 1 2 3)'\n")),(0,i.kt)("p",null,"And here is an operator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"run '(+ 2 3)'\n")),(0,i.kt)("p",null,"As you can see, just about everything in this language is based on lists, hence the name Lisp (an abbreviation for List Processor). You can see a full list of built-in operators ",(0,i.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/clvm/lang_reference/#operator-summary"},"here"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Lets try a more complex example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"run '(* (if (> 3 2) 10 5) 10)'\n")),(0,i.kt)("p",null,"If 3 is greater than 2, it's 10, otherwise 5. Then multiply it by 10. The result here is as you would expect, 100."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Hopefully this guide has been a good introduction into the world of Chialisp. There is a lot more to learn, but this is the foundation that everything else is built on top of."),(0,i.kt)("p",null,"If you really want to get started with using it, the best way is to try out these examples yourself, and play around a little yourself. Feel free to ask questions on our ",(0,i.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Keybase")," that come up along the way. We are always happy to help you learn."))}h.isMDXComponent=!0}}]);