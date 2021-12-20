(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{411:function(t,a,s){"use strict";s.r(a);var e=s(54),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react-渲染过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-渲染过程"}},[t._v("#")]),t._v(" React 渲染过程")]),t._v(" "),s("blockquote",[s("p",[t._v("使用React开发浏览器端应用需要引入"),s("code",[t._v("react")]),t._v("和"),s("code",[t._v("react-dom")]),t._v("库,其中"),s("code",[t._v("react-dom")]),t._v("库主要是将react元素生成相应的真实DOM元素")]),t._v(" "),s("p",[t._v("通常使用"),s("code",[t._v("JSX")]),t._v("语法来书写react元素,它是"),s("code",[t._v("react-dom")]),t._v("的一种语法糖")]),t._v(" "),s("p",[t._v("渲染就是把react元素生成真实的DOM并加入到document中")])]),t._v(" "),s("h2",{attrs:{id:"_1-jsx对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-jsx对象"}},[t._v("#")]),t._v(" 1. JSX对象")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("JSX")]),t._v("是Facebook起草的Javascript扩展语法(目前处于草案阶段)")]),t._v(" "),s("li",[s("code",[t._v("React.createElement")]),t._v("用于生成一个不可变的React元素")]),t._v(" "),s("li",[s("code",[t._v("JSX")]),t._v("是"),s("code",[t._v("React.createElement")]),t._v("的一个语法糖")])]),t._v(" "),s("ol",[s("li",[t._v("示例")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("我是p元素"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("我是和h1元素"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("简易app对象")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      $$"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后期用于优化")]),t._v("\n      props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("       \n        children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后代子元素")]),t._v("\n        className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类型")]),t._v("\n        style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 样式")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// **元素类型**")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"_2-react元素类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-react元素类型"}},[t._v("#")]),t._v(" 2. react元素类型")]),t._v(" "),s("ul",[s("li",[t._v("通过"),s("code",[t._v("React.createElement")]),t._v("得到一个React元素对象")]),t._v(" "),s("li",[t._v("通过该对象的"),s("code",[t._v("type")]),t._v("属性决定怎么处理")])]),t._v(" "),s("ol",[s("li",[t._v("字符串类型("),s("code",[t._v("div")]),t._v(")              => ReactDOMComponent")]),t._v(" "),s("li",[t._v("组件类型("),s("code",[t._v("class/function")]),t._v(")     => ReactCompositeComponentWrapper")]),t._v(" "),s("li",[t._v("非对象类型(数字,字符串)         => ReactDOMTextComponent")]),t._v(" "),s("li",[t._v("null、undefined、false等       => ReactDOMEmptyComponent")]),t._v(" "),s("li",[t._v("数组类型                       => 遍历出来使用以上方案")])]),t._v(" "),s("h2",{attrs:{id:"_3-开始首次渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-开始首次渲染"}},[t._v("#")]),t._v(" 3. 开始首次渲染")]),t._v(" "),s("ul",[s("li",[t._v("通过react元素的类型对react元素对象进行处理")]),t._v(" "),s("li",[t._v("得到真实DOM节点形成虚拟DOM树")]),t._v(" "),s("li",[t._v("该虚拟DOM树会被保存下来")]),t._v(" "),s("li",[t._v("将该虚拟DOM加入容器")])]),t._v(" "),s("ol",[s("li",[t._v("从根节点开始执行代码")]),t._v(" "),s("li",[t._v("根据不同的元素类型执行不同处理流程\n"),s("ul",[s("li",[t._v("非对象类型(数字,字符串)通过"),s("code",[t._v("ReactDOMTextComponent")]),t._v("进行处理,其中利用"),s("code",[t._v("mountComponent")]),t._v("方法生成真实DOM("),s("code",[t._v("document.createTextNode")]),t._v(")")]),t._v(" "),s("li",[t._v("null、undefined等通过"),s("code",[t._v("ReactDOMEmptyComponent")]),t._v("处理")]),t._v(" "),s("li",[t._v("字符串类型("),s("code",[t._v("div")]),t._v(") 使用"),s("code",[t._v("ReactDOMComponent")]),t._v("进行处理,生成真实DOM(document.createElement),递归该"),s("code",[t._v("children")]),t._v("属性")]),t._v(" "),s("li",[t._v("组件类型 使用"),s("code",[t._v("ReactCompositeComponentWrapper")]),t._v("进行处理")]),t._v(" "),s("li",[s("ol",[s("li",[t._v("函数组件:调用函数得到一个react元素对象,进行以上操作")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("类组件: 得到该类实例,调用"),s("code",[t._v("static getDerivedStateFromProps")]),t._v("生命周期方法 调用render()得到一个react元素对象,进行以上操作,将"),s("code",[t._v("componentDidMount")]),t._v("加入队列,挂载完成后执行")])])])])]),t._v(" "),s("li",[t._v("将该虚拟树加入容器")])]),t._v(" "),s("h2",{attrs:{id:"_4-更新阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-更新阶段"}},[t._v("#")]),t._v(" 4. 更新阶段")]),t._v(" "),s("blockquote",[s("p",[t._v("react中使用"),s("code",[t._v("setState")]),t._v("更新状态并触发重新渲染\n一个虚拟树构建完成后,React会把这个树保存下来,当后期发生变化时通过"),s("code",[t._v("diff")]),t._v("算法更改发生变化的位置,提高重新渲染效率")])]),t._v(" "),s("h3",{attrs:{id:"_1-更新过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-更新过程"}},[t._v("#")]),t._v(" 1. 更新过程")]),t._v(" "),s("ul",[s("li",[t._v("调用生命周期函数"),s("code",[t._v("static getDerivedSAtateFromProps")])]),t._v(" "),s("li",[t._v("调用优化函数"),s("code",[t._v("shouldComponentUpdate")]),t._v(",返回false终止更新")]),t._v(" "),s("li",[t._v("调用render函数,得到新节点供后续找到对应的节点进行比较更新")]),t._v(" "),s("li",[t._v("将生命周期函数"),s("code",[t._v("getSnapshotBeforeUpdate")]),t._v("加入执行队列")]),t._v(" "),s("li",[t._v("将生命周期函数"),s("code",[t._v("componentDidUPdate")]),t._v("加入执行队列")]),t._v(" "),s("li",[t._v("对比更新虚拟DOM树")]),t._v(" "),s("li",[t._v("完成真实DOM渲染")]),t._v(" "),s("li",[t._v("调用队列"),s("code",[t._v("getSnapshotBeforeUpdate")])]),t._v(" "),s("li",[t._v("调用队列"),s("code",[t._v("componentDidUPdate")])]),t._v(" "),s("li",[s("em",[t._v("如果产生新的节点流程同首次渲染")])]),t._v(" "),s("li",[s("em",[t._v("如果卸载节点,其"),s("code",[t._v("compoentWillUnMount")]),t._v("不加入队列,直接卸载(父组件的该函数执行时机早于子组件)")])])]),t._v(" "),s("h3",{attrs:{id:"_2-寻找对应的节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-寻找对应的节点"}},[t._v("#")]),t._v(" 2. 寻找对应的节点")]),t._v(" "),s("ul",[s("li",[t._v("react假设变化只在会同层的位置(即树的深度一致)"),s("strong",[t._v("降低diff算法的时间复杂度(n3=>n)")])]),t._v(" "),s("li",[t._v("兄弟节点默认情况下通过位置进行对比,如果存在"),s("code",[t._v("key")]),t._v("值,则比较key值相同的节点")])]),t._v(" "),s("h3",{attrs:{id:"_3-比较结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-比较结果"}},[t._v("#")]),t._v(" 3. 比较结果")]),t._v(" "),s("ul",[s("li",[t._v("react根据不同的比较结果决定是否重用对象")])]),t._v(" "),s("h4",{attrs:{id:"_1-节点类型一致"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-节点类型一致"}},[t._v("#")]),t._v(" 1. 节点类型一致")]),t._v(" "),s("ol",[s("li",[t._v("类型为字符串类型(react自定义DOM(div,span,p...))")])]),t._v(" "),s("ul",[s("li",[t._v("重用DOM对象")]),t._v(" "),s("li",[t._v("记录不同的属性,后续统一进行更新")]),t._v(" "),s("li",[t._v("递归子组件")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("非对象类型(文本)")])]),t._v(" "),s("ul",[s("li",[t._v("重用DOM")]),t._v(" "),s("li",[t._v("记录新的值,后续统一进行更新")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("组件类型")])]),t._v(" "),s("ul",[s("li",[t._v("函数组件,调用函数得到新的react元素,后续进行前面操作")]),t._v(" "),s("li",[t._v("类组件,调用更新阶段相关生命周期函数,得到新的react元素进行前面操作")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("数组类型")])]),t._v(" "),s("ul",[s("li",[t._v("遍历进行前面操作")])]),t._v(" "),s("h4",{attrs:{id:"_2-节点不一致"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-节点不一致"}},[t._v("#")]),t._v(" 2. 节点不一致")]),t._v(" "),s("ul",[s("li",[t._v("新的节点产生后没有找到或者类型不一致")]),t._v(" "),s("li",[t._v("先挂载新的节点")]),t._v(" "),s("li",[t._v("卸载旧节点")])])])}),[],!1,null,null,null);a.default=r.exports}}]);