"use strict";(self.webpackChunkchia_dev_guides=self.webpackChunkchia_dev_guides||[]).push([[169],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||l;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),i=a(4334),l="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),i=a(7294),l=a(4334),o=a(2389),r=a(7392),s=a(7094),p=a(2466),u="tabList__CuJ",h="tabItem_LNqP";function c(e){var t,a,o=e.lazy,c=e.block,m=e.defaultValue,d=e.values,f=e.groupId,k=e.className,N=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,r.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:N[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),T=w.tabGroupChoices,C=w.setTabGroupChoices,v=(0,i.useState)(y),I=v[0],D=v[1],E=[],F=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=T[f];null!=x&&x!==I&&g.some((function(e){return e.value===x}))&&D(x)}var A=function(e){var t=e.currentTarget,a=E.indexOf(t),n=g[a].value;n!==I&&(F(t),D(n),null!=f&&C(f,String(n)))},L=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,i=E.indexOf(e.currentTarget)+1;a=null!=(n=E[i])?n:E[0];break;case"ArrowLeft":var l,o=E.indexOf(e.currentTarget)-1;a=null!=(l=E[o])?l:E[E.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},g.map((function(e){var t=e.value,a=e.label,o=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return E.push(e)},onKeyDown:L,onFocus:A,onClick:A},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":I===t})}),null!=a?a:t)}))),o?(0,i.cloneElement)(N.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function m(e){var t=(0,o.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},1293:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return m}});var n=a(3117),i=a(102),l=(a(7294),a(3905)),o=a(5488),r=a(5162),s=["components"],p={id:"nft-intro",slug:"/nft-intro",title:"NFT Introduction"},u=void 0,h={unversionedId:"nft/nft-intro",id:"nft/nft-intro",title:"NFT Introduction",description:"This document will guide you through the process of creating DIDs that conform to Chia's DID standard, as well as minting NFTs that adhere to Chia's NFT standard. It will demonstrate this functionality using both the command-line and RPCs on Windows, MacOS and Linux. It will also show you how to verify that your NFTs are working as designed in Chia's Electron wallet. We'll use the testnet for most of this guide, but we'll also give you some tips on deploying NFTs on Chia's mainnet.",source:"@site/guides/nft/nft-intro.mdx",sourceDirName:"nft",slug:"/nft-intro",permalink:"/guides/nft-intro",draft:!1,editUrl:"https://github.com/Chia-Network/chia-dev-guides/edit/main/guides/nft/nft-intro.mdx",tags:[],version:"current",frontMatter:{id:"nft-intro",slug:"/nft-intro",title:"NFT Introduction"},sidebar:"tutorialSidebar",previous:{title:"NFT Guide",permalink:"/guides/nft-developer-guide"},next:{title:"Minting NFTs With CLI",permalink:"/guides/nft-cli"}},c={},m=[{value:"Install Testnet",id:"install-testnet",level:2},{value:"Binary installer",id:"binary-installer",level:3},{value:"Installing from source",id:"installing-from-source",level:3},{value:"Switching to testnet",id:"switching-to-testnet",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Obtain images with corresponding hashes",id:"obtain-images-with-corresponding-hashes",level:2},{value:"CLI, no DID",id:"cli-no-did",level:3},{value:"CLI, with DID",id:"cli-with-did",level:3},{value:"RPC, no DID",id:"rpc-no-did",level:3},{value:"RPC, with DID",id:"rpc-with-did",level:3},{value:"Where to store images for NFTs",id:"where-to-store-images-for-nfts",level:2},{value:"NFT Metadata Standards",id:"nft-metadata-standards",level:2}],d={toc:m};function f(e){var t=e.components,a=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document will guide you through the process of creating DIDs that conform to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chips/pull/18"},"Chia's DID standard"),", as well as minting NFTs that adhere to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chips/pull/19"},"Chia's NFT standard"),". It will demonstrate this functionality using both the command-line and RPCs on Windows, MacOS and Linux. It will also show you how to verify that your NFTs are working as designed in Chia's Electron wallet. We'll use the testnet for most of this guide, but we'll also give you some tips on deploying NFTs on Chia's mainnet."),(0,l.kt)("p",null,"Detailed instructions for each of the commands from this tutorial are available from the following references on Chia Docs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.chia.net/docs/13cli/did_cli",title:"Chia DIDs: CLI reference"},"DID CLI reference")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.chia.net/docs/13cli/nft_cli",title:"Chia NFTs: CLI reference"},"NFT CLI reference")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.chia.net/docs/12rpcs/did_rpcs",title:"Chia DIDs: RPC reference"},"DID RPC reference")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.chia.net/docs/12rpcs/nft_rpcs",title:"Chia NFTs: RPC reference"},"NFT RPC reference"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"As detailed in our ",(0,l.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/clvm/lang_reference#evaluating-cost-for-a-typical-transaction"},"CLVM reference"),", the CLVM cost for an XCH transaction with two inputs and two outputs is around 17 million."),(0,l.kt)("p",{parentName:"admonition"},"The cost for minting and modifying NFTs is significantly higher. The following chart shows the approximate CLVM cost (rounded up to the nearest million), as well as the recommended minimum fee (at 5 mojos per cost). Note that the minimum fees listed here will only apply when the mempool is full."),(0,l.kt)("table",{parentName:"admonition"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Operation"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Cost (approx)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Min fee (mojos)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Minting NFT without DID"),(0,l.kt)("td",{parentName:"tr",align:"right"},"53 million"),(0,l.kt)("td",{parentName:"tr",align:"left"},"265 million")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Minting NFT with DID"),(0,l.kt)("td",{parentName:"tr",align:"right"},"123 million"),(0,l.kt)("td",{parentName:"tr",align:"left"},"615 million")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Adding a URI to NFT without DID"),(0,l.kt)("td",{parentName:"tr",align:"right"},"41 million"),(0,l.kt)("td",{parentName:"tr",align:"left"},"205 million")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Transfer NFT with DID"),(0,l.kt)("td",{parentName:"tr",align:"right"},"67 million"),(0,l.kt)("td",{parentName:"tr",align:"left"},"335 million")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Assign DID to NFT"),(0,l.kt)("td",{parentName:"tr",align:"right"},"107 million"),(0,l.kt)("td",{parentName:"tr",align:"left"},"535 million")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Adding URI to NFT with DID"),(0,l.kt)("td",{parentName:"tr",align:"right"},"71 million"),(0,l.kt)("td",{parentName:"tr",align:"left"},"355 million")))),(0,l.kt)("p",{parentName:"admonition"},"The maximum CLVM cost in a transaction block is 11 billion. If you plan to mint several NFTs at once, be careful not to exceed this cost or your CLVM program will fail. Even if your spend bundle's total cost is less than the maximum, it may take a very long time to be included in a block if an insufficient fee is included. We therefore recommended that you create multiple spend bundles with only a few mintings that adhere to the minimum fees laid out above, which will increase the likelihood of your blocks making it onto the chain in a timely manner.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Note about Python ",(0,l.kt)("code",null,"RuntimeError")," on Windows"),(0,l.kt)("p",null,"If you are running on Windows, you might occasionally see a Python Runtime Error. This is a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/aio-libs/aiohttp/issues/4324",title:"More info about this issue"},"known issue in Python")," and can be safely ignored. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia stop -d all\n\nException ignored in: function _ProactorBasePipeTransport.__del__ at 0x000001A719716160\nTraceback (most recent call last):\n  File \"C:\\Users\\User\\AppData\\Local\\Programs\\Python\\Python39\\lib\\asyncio\\proactor_events.py\", line 116, in __del__\n    self.close()\n  File \"C:\\Users\\User\\AppData\\Local\\Programs\\Python\\Python39\\lib\\asyncio\\proactor_events.py\", line 108, in close\n    self._loop.call_soon(self._call_connection_lost, None)\n  File \"C:\\Users\\User\\AppData\\Local\\Programs\\Python\\Python39\\lib\\asyncio\\base_events.py\", line 746, in call_soon\n    self._check_closed()\n  File \"C:\\Users\\User\\AppData\\Local\\Programs\\Python\\Python39\\lib\\asyncio\\base_events.py\", line 510, in _check_closed\n    raise RuntimeError('Event loop is closed')\nRuntimeError: Event loop is closed\ndaemon: {'ack': True, 'command': 'exit', 'data': {'success': True}, 'destination': 'client', 'origin': 'daemon', 'request_id': '0de5449121b6873ce18661b2adc4213d7dc795c2943ff7f4be9502058e8eaba0'}\n"))),(0,l.kt)("h2",{id:"install-testnet"},"Install Testnet"),(0,l.kt)("p",null,"This section will show you how to install the latest version of Chia, configure your installation to run on the testnet, sync your node, and obtain some TXCH. If you have already done all of these things, you can skip to the next section, ",(0,l.kt)("a",{parentName:"p",href:"#obtain-images-with-corresponding-hashes"},"Obtain images with corresponding hashes"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Your firewall might give warnings when installing Chia. This is normal. Allow the installations to continue.")),(0,l.kt)("p",null,"You can either run on a full node or use the light wallet. You also have the option of installing from source or using a binary installer."),(0,l.kt)("h3",{id:"binary-installer"},"Binary installer"),(0,l.kt)("p",null,"If you choose to run a binary installer, download the latest version of Chia from the ",(0,l.kt)("a",{parentName:"p",href:"https://www.chia.net/downloads"},"Chia download page"),"."),(0,l.kt)("p",null,"After the installer has downloaded, execute it and Chia will install automatically."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"chia")," command isn't already in your system's path, you can create an alias:"),(0,l.kt)(o.Z,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux/MacOS",value:"nix"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("p",{parentName:"admonition"},"Be sure to replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<username>")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"<version>")," with the actual folder names."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Set-Alias -Name chia "C:\\Users\\<username>\\AppData\\Local\\chia-blockchain\\app-<version>\\resources\\app.asar.unpacked\\daemon\\chia.exe"\n')),"  "),(0,l.kt)(r.Z,{value:"nix",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'alias chia="/Applications/Chia.app/Contents/Resources/app.asar.unpacked/daemon/chia"\n')),"  "))),(0,l.kt)("h3",{id:"installing-from-source"},"Installing from source"),(0,l.kt)("p",null,"To install Chia from source, follow our ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/wiki/INSTALL"},"installation wiki"),", which includes instructions for intalling on all supported operating systems."),(0,l.kt)("h3",{id:"switching-to-testnet"},"Switching to testnet"),(0,l.kt)("p",null,"By default, Chia will run on mainnet. To switch to the testnet (recommended) for this guide, see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/wiki/How-to-Connect-to-the-Testnet"},"our wiki guide"),"."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"We recommend that you use ",(0,l.kt)("inlineCode",{parentName:"p"},"INFO")," level logging instead of the default ",(0,l.kt)("inlineCode",{parentName:"p"},"WARNING")," level. To do this, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia configure --set-log-level INFO\n")),(0,l.kt)("p",null,"We recommend that you use a key pair for testnet that is separate from your mainnet keys. If you don't have a separate set of testnet keys, generate them:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia keys generate\n")),(0,l.kt)("p",null,"This will give an output such as the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Generating private key\nAdded private key with public key fingerprint 3049838316\n(...)\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"It is good security practice to use this set of keys for testnet development only. In case of key compromise, your TXCH and NFTs will be sandboxed from your XCH.")),(0,l.kt)("p",null,"If you generated new testnet keys in the last step, we recommend that you write down your seed phrase for later recovery. Run the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia keys show --show-mnemonic-seed\n")),(0,l.kt)("p",null,"You'll be shown your public and private keys. The last line of the output will be a list of 24 secret words. This is your ",(0,l.kt)("em",{parentName:"p"},"seed phrase"),". ",(0,l.kt)("strong",{parentName:"p"},"Carefully copy the words on paper and store them in a secure location.")," Order is important."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Showing all public and private keys\n\nFingerprint: 3049838316\n(...)\n    Mnemonic seed (24 secret words):\nyouth stomach social aware clay pottery benefit asthma mail cry rubber panda wife around provide atom cute sand staff exotic pink east gloom minute\n")),(0,l.kt)("admonition",{title:"important",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Your seed phrase is all that is required to recover your wallet. If you lose your seed phrase, recovery will not be possible. If a bad actor gains access to your seed phrase, they'll be able to steal your Chia assets, including XCH, CATs and NFTs.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you ever need to display your address, run ",(0,l.kt)("inlineCode",{parentName:"p"},"chia keys show"),". This command will only output your public keys and address; your private keys and seed phrase will not be shown.")),(0,l.kt)("p",null,"Note: At this point we'll start the Chia light wallet, but not the full node. As noted above, the full node is not required for minting NFTs, but it will generally be faster than the light wallet."),(0,l.kt)("p",null,"Start your wallet by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia start wallet\n")),(0,l.kt)("p",null,"Wait for your wallet to sync. You can view the status of your wallet with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show\n")),(0,l.kt)("p",null,"Be sure to select the correct key/fingerprint, which you obtained from the ",(0,l.kt)("inlineCode",{parentName:"p"},"chia keys show")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Wallet keys:\n1)   285637561\n2) * 3049838316 (Not Synced)\nChoose a wallet key [1-2] ('q' to quit, or Enter to use 3049838316):\nWallet height: 938814\nSync status: Syncing...\n")),(0,l.kt)("p",null,"Syncing should only require a few minutes, unless your wallet has a large number of previous transactions. Eventually, the ",(0,l.kt)("inlineCode",{parentName:"p"},"chia wallet show")," command will show that your wallet has been synced. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Wallet height: 938990\nSync status: Synced\nBalances, fingerprint: 3049838316\n\nChia Wallet:\n   -Total Balance:         14.5 txch (14500000000000 mojo)\n   -Pending Total Balance: 14.5 txch (14500000000000 mojo)\n   -Spendable:             14.5 txch (14500000000000 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n")),(0,l.kt)("p",null,'In order to continue, you\'ll need to have some TXCH in your wallet. If your total balance is 0, you can obtain 1 TXCH from our faucet. Copy the value of "First wallet address:" from the output of the ',(0,l.kt)("inlineCode",{parentName:"p"},"chia keys show"),' command. It will be a long string beginning with "txch".'),(0,l.kt)("p",null,"Open our ",(0,l.kt)("a",{parentName:"p",href:"https://testnet10-faucet.chia.net",title:"Chia's testnet10 faucet link"},"testnet faucet page"),'. Paste your address and click "Submit".'),(0,l.kt)("p",null,"You'll receive this message: ",(0,l.kt)("inlineCode",{parentName:"p"},"Accepted. Your request is in the queue and will be processed in the order it was received.")," At some point you'll receive 1 TXCH. Depending on how busy the faucet and the testnet are, this could take several minutes. However, you don't need to wait for your coins to arrive before continuing."),(0,l.kt)("p",null,"(Optional) Start the full node:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia start node\nchia_full_node: started\n")),(0,l.kt)("p",null,"Check the sync status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia show -s\n")),(0,l.kt)("p",null,"Eventually, it will say ",(0,l.kt)("inlineCode",{parentName:"p"},"Full Node Synced"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Network: testnet10    Port: 58444   RPC Port: 8555\nNode ID: 82a73b06b3a5f9493a3ac4e3d903026b39c85b748158ba41c623d531947f2a2a\nGenesis Challenge: ae83525ba8d1dd3f09b277de18ca3e43fc0af20d20c4b3e92ef2a48bd291ccb2\nCurrent Blockchain Status: Full Node Synced\n")),(0,l.kt)("p",null,"Once you have a synced wallet and some TXCH, you may proceed to the next section. If your requested TXCH has not yet arrived, post your address on the #dev channel on Keybase. Someone might be able to send some to you."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Note about Chia wallets"),(0,l.kt)("p",null,"In Chia, each public/private key pair can hold multiple wallets of various types."),(0,l.kt)("p",null,'A "fingerprint" is a 4-byte hash of a public key. The computer running the examples we\'ll use in the next sections had two public/private key pairs, and thus two fingerprints, labeled ',(0,l.kt)("inlineCode",{parentName:"p"},"1)")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"2)"),"."),(0,l.kt)("p",null,"Note that simultaneous syncing of multiple fingerprints is not currently possible. Whether you're using the CLI or the GUI (in general, not just for NFTs) you have to select one of the fingerprints to sync, while the other will be temporarily ignored and not synced."),(0,l.kt)("p",null,"Within each of the fingerprints, you can store multiple wallets of various types. The default wallet is a ",(0,l.kt)("inlineCode",{parentName:"p"},"Chia Wallet"),", aka a ",(0,l.kt)("inlineCode",{parentName:"p"},"STANDARD_WALLET"),". This label is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/wallet/util/wallet_types.py"},"part of an enum")," with a value of ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),". The other wallet types are as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"STANDARD_WALLET = 0\nRATE_LIMITED = 1\nATOMIC_SWAP = 2\nAUTHORIZED_PAYEE = 3\nMULTI_SIG = 4\nCUSTODY = 5\nCAT = 6\nRECOVERABLE = 7\nDECENTRALIZED_ID = 8\nPOOLING_WALLET = 9\nNFT = 10\n")),(0,l.kt)("p",null,"A few notes about this enum:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The only types that are supported as of June 2022 are STANDARD_WALLET, DECENTRALIZED_ID, CAT, and NFT"),(0,l.kt)("li",{parentName:"ul"},"Each fingerprint/Wallet Key can support ",(0,l.kt)("em",{parentName:"li"},"each")," of the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"One ",(0,l.kt)("inlineCode",{parentName:"li"},"STANDARD_WALLET")),(0,l.kt)("li",{parentName:"ul"},"An unbounded number of ",(0,l.kt)("inlineCode",{parentName:"li"},"CAT"),"s"),(0,l.kt)("li",{parentName:"ul"},"An unbounded number of ",(0,l.kt)("inlineCode",{parentName:"li"},"DECENTRALIZED_ID"),"s"),(0,l.kt)("li",{parentName:"ul"},"One ",(0,l.kt)("inlineCode",{parentName:"li"},"NFT")," wallet per ",(0,l.kt)("inlineCode",{parentName:"li"},"DECENTRALIZED_ID")," (where each ",(0,l.kt)("inlineCode",{parentName:"li"},"NFT")," wallet is associated with exactly one ",(0,l.kt)("inlineCode",{parentName:"li"},"DECENTRALIZED_ID"),")"),(0,l.kt)("li",{parentName:"ul"},"One additional ",(0,l.kt)("inlineCode",{parentName:"li"},"NFT")," wallet that is not associated a ",(0,l.kt)("inlineCode",{parentName:"li"},"DECENTRALIZED_ID")))),(0,l.kt)("li",{parentName:"ul"},"If an existing ",(0,l.kt)("inlineCode",{parentName:"li"},"NFT")," wallet is already associated with a ",(0,l.kt)("inlineCode",{parentName:"li"},"DECENTRALIZED_ID"),", then an attempt to create a new ",(0,l.kt)("inlineCode",{parentName:"li"},"NFT")," wallet associated with the same ",(0,l.kt)("inlineCode",{parentName:"li"},"DECENTRALIZED_ID")," will pass, but it will not actually create the ",(0,l.kt)("inlineCode",{parentName:"li"},"NFT")," wallet because it already exists"),(0,l.kt)("li",{parentName:"ul"},"If an existing ",(0,l.kt)("inlineCode",{parentName:"li"},"NFT")," wallet is not associated with a ",(0,l.kt)("inlineCode",{parentName:"li"},"DECENTRALIZED_ID"),", then an attempt to create a new ",(0,l.kt)("inlineCode",{parentName:"li"},"NFT")," wallet that is not associated with a ",(0,l.kt)("inlineCode",{parentName:"li"},"DECENTRALIZED_ID")," will pass, but it will not actually create the ",(0,l.kt)("inlineCode",{parentName:"li"},"NFT")," wallet because it already exists"),(0,l.kt)("li",{parentName:"ul"},"In addition to a type, each wallet also has a ",(0,l.kt)("inlineCode",{parentName:"li"},"Wallet ID"),". This is simply an integer that increments for each new wallet.")),(0,l.kt)("p",null,"For example, the following setup would be possible to run on a single computer:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Wallet Key 1 (not synced)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Chia Wallet (Type = STANDARD_WALLET, Wallet ID = 1)"),(0,l.kt)("li",{parentName:"ul"},"Marmot (Type = CAT, Wallet ID = 2)"))),(0,l.kt)("li",{parentName:"ul"},"Wallet Key 2 (synced)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Chia Wallet (Type = STANDARD_WALLET, Wallet ID = 1)"),(0,l.kt)("li",{parentName:"ul"},"NFT Wallet (Type = NFT, Wallet ID = 2)"),(0,l.kt)("li",{parentName:"ul"},"Marmot (Type = CAT, Wallet ID = 3)"),(0,l.kt)("li",{parentName:"ul"},"Spacebucks (Type = CAT, Wallet ID = 4)"))),(0,l.kt)("li",{parentName:"ul"},"Wallet Key 3 (synced)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Chia Wallet (Type = STANDARD_WALLET, Wallet ID = 1)"),(0,l.kt)("li",{parentName:"ul"},"NFT Wallet (Type = NFT, Wallet ID = 2, not associated with a DID)"),(0,l.kt)("li",{parentName:"ul"},"DID Wallet (Type = DECENTRALIZED_ID, Wallet ID = 3)"),(0,l.kt)("li",{parentName:"ul"},"DID Wallet (Type = DECENTRALIZED_ID, Wallet ID = 4)"),(0,l.kt)("li",{parentName:"ul"},"NFT Wallet (Type = NFT, Wallet ID = 5, associated with DID from Wallet ID 3)")))),(0,l.kt)("p",null,"Under Wallet Key 3 of this setup, it would not be possible to create another NFT wallet that is not associated with a DID, or another DID wallet that is associated with the DID from Wallet ID 3. However, it would be possible to create an NFT wallet that is associated with the DID from WALLET ID 4. It would also be possible to create a new DID within Wallet Key 3.")),(0,l.kt)("h2",{id:"obtain-images-with-corresponding-hashes"},"Obtain images with corresponding hashes"),(0,l.kt)("p",null,"For this guide, we'll obtain four images and hashes to be used for creating NFTs with the following use cases:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CLI, no DID"),(0,l.kt)("li",{parentName:"ul"},"CLI, with DID"),(0,l.kt)("li",{parentName:"ul"},"RPC, no DID"),(0,l.kt)("li",{parentName:"ul"},"RPC, with DID")),(0,l.kt)("p",null,"Here's the general technique to obtain images and hashes:"),(0,l.kt)("p",null,"First, find an image to mint as an NFT. For this example, we'll use an image that is licensed in the public domain:\n",(0,l.kt)("a",{parentName:"p",href:"https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg"},"https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg")),(0,l.kt)("p",null,"Then, calculate the image's hash. Here are three (of many) options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"cURL with sha256sum. If you're on Windows, you'll need to run this command from Git Bash."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg | sha256sum\n14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0 *-\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"cURL with shasum. If you're on Windows, you'll need to run this command from Git Bash."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg | shasum -a 256\n14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0 *-\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Save the image locally. Visit ",(0,l.kt)("a",{parentName:"p",href:"https://emn178.github.io/online-tools/sha256_checksum.html"},"https://emn178.github.io/online-tools/sha256_checksum.html"),". Upload the image and click the Hash button."))),(0,l.kt)("p",null,"In all three cases, the hash for this sample image is ",(0,l.kt)("inlineCode",{parentName:"p"},"14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0"),"."),(0,l.kt)("p",null,"The following is a list of the sample images and hashes this guide will use. For the NFTs with DIDs, we'll specify the metadata and license information. Additionally, we'll use multiple copies of the Metadata URI with these NFTs. For the NFTs without DIDs, we won't specify license or metadata information (this is only for simplicity -- normally you would want to specify this data)."),(0,l.kt)("h3",{id:"cli-no-did"},"CLI, no DID"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"URI: ",(0,l.kt)("a",{parentName:"li",href:"https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg"},"https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg")),(0,l.kt)("li",{parentName:"ul"},"Hash: feef1ea09c0f93fcf5a8d7e0018f2511638d317d78e3d3a71462cdb061baad68")),(0,l.kt)("h3",{id:"cli-with-did"},"CLI, with DID"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"URI: ",(0,l.kt)("a",{parentName:"li",href:"https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg"},"https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg")),(0,l.kt)("li",{parentName:"ul"},"Hash: 14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0"),(0,l.kt)("li",{parentName:"ul"},"Metadata URI 1: ",(0,l.kt)("a",{parentName:"li",href:"https://pastebin.com/raw/PnaQGQiH"},"https://pastebin.com/raw/PnaQGQiH")),(0,l.kt)("li",{parentName:"ul"},"Metadata URI 2: ",(0,l.kt)("a",{parentName:"li",href:"https://pastebin.com/raw/KTwUQ8hM"},"https://pastebin.com/raw/KTwUQ8hM")),(0,l.kt)("li",{parentName:"ul"},"Metadata Hash: e9e9366f050e90ceb04a4778f2adfa02dfb565327d225eb35101f0de553ac20b"),(0,l.kt)("li",{parentName:"ul"},"License URI: ",(0,l.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Chia-Network/chia-blockchain/main/LICENSE"},"https://raw.githubusercontent.com/Chia-Network/chia-blockchain/main/LICENSE")),(0,l.kt)("li",{parentName:"ul"},"License Hash: 30a358857da6b49f57cfe819c1ca43bfe007f528eb784df5da5cb64577e0ffc6")),(0,l.kt)("h3",{id:"rpc-no-did"},"RPC, no DID"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"URI: ",(0,l.kt)("a",{parentName:"li",href:"https://images.pexels.com/photos/4812689/pexels-photo-4812689.jpeg"},"https://images.pexels.com/photos/4812689/pexels-photo-4812689.jpeg")),(0,l.kt)("li",{parentName:"ul"},"Hash: 995b5e2837fa68292e88dd5f900ea83953aafcb6bfb7c086f1ba7671946c4600")),(0,l.kt)("h3",{id:"rpc-with-did"},"RPC, with DID"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"URI: ",(0,l.kt)("a",{parentName:"li",href:"https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg"},"https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg")),(0,l.kt)("li",{parentName:"ul"},"Hash: 0ebedcd2cda065c75132218f745cecc3a1c131927f70b192b3fe6bbebaf437c4"),(0,l.kt)("li",{parentName:"ul"},"Metadata URI 1: ",(0,l.kt)("a",{parentName:"li",href:"https://pastebin.com/raw/BHZc1suk"},"https://pastebin.com/raw/BHZc1suk")),(0,l.kt)("li",{parentName:"ul"},"Metadata URI 2: ",(0,l.kt)("a",{parentName:"li",href:"https://pastebin.com/raw/bnzGwjmB"},"https://pastebin.com/raw/bnzGwjmB")),(0,l.kt)("li",{parentName:"ul"},"Metadata Hash: 07cb3cc71732d1979abd357af86475e1e35f6c2b41ed2387b309e4b486a89a51"),(0,l.kt)("li",{parentName:"ul"},"License URI: ",(0,l.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Chia-Network/chia-blockchain/main/LICENSE"},"https://raw.githubusercontent.com/Chia-Network/chia-blockchain/main/LICENSE")),(0,l.kt)("li",{parentName:"ul"},"License Hash: 30a358857da6b49f57cfe819c1ca43bfe007f528eb784df5da5cb64577e0ffc6")),(0,l.kt)("h2",{id:"where-to-store-images-for-nfts"},"Where to store images for NFTs"),(0,l.kt)("p",null,"In theory you can use any hosting site to host your NFT images. However, do make sure that the service doesn't modify the image ",(0,l.kt)("em",{parentName:"p"},"at all"),". Doing so will also change the hash and make it more likely to be lost long-term. The best way to verify this is to use each of the above techniques to generate the image hash, and make sure they all match."),(0,l.kt)("p",null,"Certain decentralized services such as IPFS can be slow. The first time a user attempts to view an NFT in their wallet (before caching), it might take a long time to load."),(0,l.kt)("p",null,"Chia NFTs use a list to store image URIs, so it is possible to add multiple locations to increase permanance. However, do make sure each image's hash is the same as the data hash."),(0,l.kt)("h2",{id:"nft-metadata-standards"},"NFT Metadata Standards"),(0,l.kt)("p",null,"Since the original release of this guide, a CHia Improvement Proposal (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chips/blob/main/CHIPs/chip-0001.md#what-is-a-chip",title:"CHIP explanation"},"CHIP"),") that standardizes the JSON metadata schema for Chia NFTs has been finalized."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chips/blob/main/assets/chip-0007/schema.json"},"CHIP-7")," for the correct formatting. Usage of this CHIP is recommended in order to give marketplaces the best opportunity to parse your NFTs' metadata properly."),(0,l.kt)("p",null,"Note that additional NFT metadata CHIPs are likely to be released in the future. However, there are no plans to deprecate CHIP-7 when this happens."))}f.isMDXComponent=!0}}]);