(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{222:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"bundle-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bundle-size","aria-hidden":"true"}},[t._v("#")]),t._v(" Bundle Size")]),t._v(" "),e("p",[t._v("VeeValidate does a lot of heavy lifting and offers plenty of features, that comes with the cost of a large bundle size, in production vee-validate gzipped would take about 30kb with all of its features intact.")]),t._v(" "),e("p",[t._v("Implementing a custom solution or with a more lightweight library to achieve the same features will also add up to your bundle size. Remember that vee-validate doesn't only validate, but also it generates error messages and offers most of the validation rules you would need out of the box.")]),t._v(" "),e("h2",{attrs:{id:"minimal-bundle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minimal-bundle","aria-hidden":"true"}},[t._v("#")]),t._v(" Minimal Bundle")]),t._v(" "),e("p",[t._v("There is a bundle stripped of all validation rules and messages, this bundle is about half the size of the full one. Taking about 15kb gzipped but you would need to pick the rules that you need from the provided rules bundle and also their messages from the localized bundles, here is a small example:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Validator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" install "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" VeeValidate "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vee-validate/dist/vee-validate.minimal.esm.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" required"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" min"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vee-validate/dist/rules.esm.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" veeEn "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vee-validate/dist/locale/en'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add the rules you need.")]),t._v("\nValidator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'required'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nValidator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'min'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" min"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nValidator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'max'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Merge the messages.")]),t._v("\nValidator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("localize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" veeEn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// install the plugin")]),t._v("\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VeeValidate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Rules are maintained internally as a singleton object, meaning any rule you add to a validator at any place of your code will be available for all other validator instances throughout your app. Still to avoid side effects it is recommended to add the rules at the entry file of your app.")])]),t._v(" "),e("h2",{attrs:{id:"modular-approach"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modular-approach","aria-hidden":"true"}},[t._v("#")]),t._v(" Modular Approach")]),t._v(" "),e("p",[t._v("In the future vee-validate would take a more modular approach, while still featuring the same features, it would offer a modular API for lower bundle sizes. For example vee-validate handles model validation, HTML5 validation and component validation. You might be only interested in model based validation, the idea is to offer such features as validation strategies, similar to passport. So you would only choose the strategies you will use in your app.")]),t._v(" "),e("p",[t._v("But we still haven't decided on the timeline but will be likely introduced in the next major version.")])])}],!1,null,null,null);n.options.__file="bundle-size.md";a.default=n.exports}}]);