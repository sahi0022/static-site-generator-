(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{352:function(t,e,o){var content=o(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("7b20f035",content,!0,{sourceMap:!1})},361:function(t,e,o){"use strict";o(352)},362:function(t,e,o){var r=o(53)((function(i){return i[1]}));r.push([t.i,'.contact-page[data-v-33e07210]{font-family:"Roboto",sans-serif;margin:auto;max-width:900px}.back[data-v-33e07210]{background-color:#144361}.contact-text[data-v-33e07210]{color:#fff!important;font-size:1.3rem;font-weight:500;line-height:1.6;text-shadow:1px 1px 2px rgba(0,0,0,.1)}h1[data-v-33e07210]{color:#b69928;font-family:"Roboto",sans-serif;font-weight:700;text-shadow:2px 2px 4px rgba(0,0,0,.1)}hr[data-v-33e07210]{border-color:#5c7a8c;border-width:3px;width:50px}.form-control[data-v-33e07210]{border-radius:.5rem;box-shadow:inset 0 0 10px rgba(0,0,0,.1);margin-bottom:1rem}.form-group label[data-v-33e07210]{color:#fff;font-weight:700}.btn-gradient[data-v-33e07210]{border:none;border-radius:.5rem;box-shadow:0 4px 8px rgba(0,0,0,.1);color:#fff;font-size:1.1rem;padding:12px 20px;text-align:center;text-transform:uppercase;transition:all .3s ease}.btn-gradient[data-v-33e07210],.btn-gradient[data-v-33e07210]:hover{background:linear-gradient(45deg,#dbd3d4,#4e79b5)}.btn-gradient[data-v-33e07210]:hover{transform:scale(1.05)}.contact-details[data-v-33e07210]{background-color:#144361;border-radius:10px;box-shadow:0 4px 15px rgba(0,0,0,.1);padding:20px}.contact-details h5[data-v-33e07210]{color:#fff;font-weight:600}.contact-details p[data-v-33e07210]{color:#ddd;font-size:1rem}.contact-details a[data-v-33e07210]{color:#80b6c7;-webkit-text-decoration:none;text-decoration:none}.social-links a[data-v-33e07210]{font-size:1rem;margin-right:.5rem}.btn-social[data-v-33e07210]{border-radius:.5rem;color:#fff;display:inline-block;font-size:1rem;padding:10px 20px;text-align:center;transition:all .3s ease}.btn-linkedin[data-v-33e07210]{background-color:#0077b5}.btn-github[data-v-33e07210]{background-color:#333}.btn-twitter[data-v-33e07210]{background-color:#1da1f2}.btn-social[data-v-33e07210]:hover{box-shadow:0 4px 8px rgba(0,0,0,.1);transform:scale(1.05)}@media (max-width:767px){.contact-page[data-v-33e07210]{padding:20px}.row[data-v-33e07210]{flex-direction:column}.contact-details[data-v-33e07210]{margin-top:20px}.social-links[data-v-33e07210]{display:flex;flex-wrap:wrap}.btn-social[data-v-33e07210]{margin-bottom:10px}.contact-text[data-v-33e07210]{font-size:1.1rem}h1[data-v-33e07210]{font-size:2rem}}@media (min-width:768px) and (max-width:1024px){.contact-page[data-v-33e07210]{padding:20px}.row[data-v-33e07210]{flex-direction:row}.contact-details[data-v-33e07210]{margin-top:20px}}',""]),r.locals={},t.exports=r},373:function(t,e,o){"use strict";o.r(e);o(25);var r={data:function(){return{form:{name:"",email:"",message:""}}},methods:{submitForm:function(){alert("Thank you, ".concat(this.form.name,"! Your message has been sent.")),this.form.name="",this.form.email="",this.form.message=""}},head:function(){return{title:"Contact - My Portfolio",meta:[{name:"description",content:"Get in touch with me via my contact form or social media."}]}}},n=(o(361),o(47)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-page container mt-5"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6"},[e("form",{staticClass:"shadow-lg rounded-lg p-4 back",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name "}},[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Your Name",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Your Email",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"message"}},[t._v("Message")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",rows:"5",placeholder:"Your Message",required:""},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-gradient btn-block",attrs:{type:"submit"}},[t._v("Send Message")])])]),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center mb-5"},[e("h1",{staticClass:"display-3 font-weight-bold"},[t._v("Contact Me")]),t._v(" "),e("p",{staticClass:"lead contact-text"},[t._v("I'd love to hear from you! Fill out the form below or connect with me on social media.")]),t._v(" "),e("hr",{staticClass:"my-4",staticStyle:{"border-color":"#5c7a8c",width:"50px","border-width":"3px"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 col-md-6 mt-4 mt-md-0"},[e("div",{staticClass:"contact-details bg-custom shadow-lg rounded-lg p-4"},[e("h5",{staticClass:"text-white"},[t._v("Location")]),t._v(" "),e("p",[e("strong",[t._v("Address:")]),t._v(" 123 Main Street, Cityville, USA")]),t._v(" "),e("p",[e("strong",[t._v("Email:")]),t._v(" "),e("a",{staticClass:"text-light",attrs:{href:"mailto:Sahil@gmail.com"}},[t._v("Sahil@gmail.com")])]),t._v(" "),e("p",[e("strong",[t._v("Phone:")]),t._v(" "),e("a",{staticClass:"text-light",attrs:{href:"tel:+11234567890"}},[t._v("+1 (123) 456-7890")])]),t._v(" "),e("h5",{staticClass:"mt-4 text-white"},[t._v("Connect with Me")]),t._v(" "),e("div",{staticClass:"social-links"},[e("a",{staticClass:"btn btn-social btn-linkedin mr-2 text-white",attrs:{href:"https://linkedin.com",target:"_blank"}},[t._v("LinkedIn")]),t._v(" "),e("a",{staticClass:"btn btn-social btn-github mr-2 text-white",attrs:{href:"https://github.com",target:"_blank"}},[t._v("GitHub")]),t._v(" "),e("a",{staticClass:"btn btn-social btn-twitter text-white",attrs:{href:"https://twitter.com",target:"_blank"}},[t._v("Twitter")])])])])}],!1,null,"33e07210",null);e.default=component.exports}}]);