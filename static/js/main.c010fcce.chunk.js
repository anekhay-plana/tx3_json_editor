(this["webpackJsonpjson-editor"]=this["webpackJsonpjson-editor"]||[]).push([[0],{115:function(e,t,r){},116:function(e,t,r){},117:function(e,t,r){},119:function(e,t,r){},227:function(e,t,r){"use strict";r.r(t);var s=r(0),c=r.n(s),n=r(9),i=r.n(n),a=(r(115),r(116),{"Synchronization Policy":{Version:"VERA Demo Env - 0.0.0.2",Locations:[{System:"JIRA",Name:"Tx3 Demo Jira Server",Server:"http://jira-demo.tx3services.com:8080","Service Account":"test_vera","Service Password":"x2kwtrR5cZ/jdjdhjghdkjuyliuy9A=",Urls:{Browser:"http://jira-demo.tx3services.com:8080/browse/{Key}",API:"http://jira-demo.tx3services.com:8080/rest/api/2/issue/{Issue ID}"}},{System:"JIRA",Name:"Tx3 JIRA Test Server",Server:"http://tx3-jira-test.eastus.cloudapp.azure.com:8080/","Service Account":"emailtesting@tx3services.com","Service Password":"HVeTrBgQokjhgjmhgmnjhsnrty5667O8OkPqtKMp0RNedH9q+sm+nU0Kkr/Q==",Urls:{Browser:"http://tx3-jira-test.eastus.cloudapp.azure.com:8080/browse/{Key}",API:"http://tx3-jira-test.eastus.cloudapp.azure.com:8080/rest/api/2/issue/{Issue ID}"}},{System:"qTest",Name:"Tricentis qTest Alcon Server",Server:"https://kmdeva.qtestnet.com",Urls:{Browser:"https://kmdeva.qtestnet.com/p/{Project ID}/portal/project#key={Key}",API:"https://kmdeva.qtestnet.com/api/v3/projects/{Project ID}/{Item Type}s/{Entity ID}"},"Service Account":"hfarris@tx3services.com","Service Password":"jtbHVV67667657RzYZrJvfhgjhjhgdjhgdjhgdjhgdjhgjghFt1bM=","qTest Name":"kmdeva"},{System:"qTest",Name:"Tx3 qTest Cloud Server",Server:"https://tx3.qtestnet.com",Urls:{Browser:"https://tx3.qtestnet.com/p/{Project ID}/portal/project#key={Key}",API:"https://tx3.qtestnet.com/api/v3/projects/{Project ID}/{Item Type}s/{Entity ID}"},"Service Account":"jberek@tx3services.com","Service Password":"xVFmav0KADFwwqR5gnjgfhgfhst565465645sghgaaTjlLwmZRKA=","qTest Name":"tx3"},{System:"JIRA",Name:"Jira Cloud",Server:"https://tx3.atlassian.net","Service Account":"emailtesting@tx3services.com","Service Password":"HVeTrBgQ78IgawcfCn9O8OkPqtKM/Qp0RNedH9q+sm+nU76765765hthsrthgtwyw45s4hQ==",Urls:{Browser:"https://tx3.atlassian.net/browse/{Key}",API:"https://tx3.atlassian.net/rest/api/2/issue/{Issue ID}"}},{System:"JIRA",Name:"Jira Cloud - Mnghe",Server:"https://mnghe.atlassian.net","Service Account":"emailtesting@tx3services.com","Service Password":"dGba/evvbNmfxtrGeaXuQ3zRweFO2fdXdQdbeHgc5HzXsvpisBaNyXcH0FAsclmKKpiOrR/4DqS/fWJ0Jr5mSA==",Urls:{Browser:"https://mnghe.atlassian.net/browse/{Key}",API:"https://mnghe.atlassian.net/rest/api/2/issue/{Issue ID}"}},{System:"VERA",Name:"Tx3 VERA Demo Server",Server:"https://vera-demo.tx3services.com",Urls:{Browser:"https://vera-demo.tx3services.com:8443/details/",API:"https://vera-demo.tx3services.com/rest/"},"Service Account":"","Service Password":""}]}}),o=r(57),u=(r(117),r(5)),d=function(e){var t=e.field,r=e.json,s=Object.keys(t.fields);return Object(u.jsx)("div",{className:"object-container",children:s.map((function(e,s){return Object(u.jsx)("div",{className:"object-child-container",children:Object(u.jsx)(g,{field:t.fields[e],json:r[e],name:e})},s)}))})},l=r(26),j=r(96),v=r.n(j),m=r(97),h=r.n(m),p=(r(119),function(e){var t=e.field,r=e.json,c=e.name,n=Object(s.useState)(!1),i=Object(l.a)(n,2),a=i[0],o=i[1];return Object(u.jsx)("div",{className:"array-container",children:Object(u.jsx)(v.a,{trigger:Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("div",{children:c}),Object(u.jsx)(h.a,{className:a?"rev-icon":"icon"})]}),onOpening:function(){return o(!0)},onClose:function(){return o(!1)},transitionTime:200,children:Object(u.jsx)("div",{children:r.map((function(e,r){return Object(u.jsx)(g,{field:t.innerType,json:e},r)}))})})})}),b=r(260),x=r(107),S=r(13),f=function(e){var t=e.field,r=e.json,s=e.name,c=Object(x.a)({initialValues:{label:s,value:r},validateOnBlur:!0,validationSchema:S.b({value:t}),onSubmit:function(){}});return Object(u.jsx)("div",{children:Object(u.jsx)(b.a,{fullWidth:!0,name:"value",label:c.values.label,value:c.values.value,onChange:function(e){c.handleChange(e),c.setFieldTouched("value")},error:c.touched.value&&Boolean(c.errors.value),helperText:c.touched.value&&c.errors.value})})},g=function(e){var t=e.field.type;return function(){switch(t){case"object":return Object(u.jsx)(d,Object(o.a)({},e));case"array":return Object(u.jsx)(p,Object(o.a)({},e));case"string":return Object(u.jsx)(f,Object(o.a)({},e));default:return null}}()},y=function(e){var t=e.yupSchema;return Object(u.jsx)("div",{children:Object(u.jsx)(g,{field:t,json:a})})},O=S.b({"Synchronization Policy":S.b({Version:S.c().required().required("required"),Locations:S.a().of(S.b({System:S.c().required("required"),Name:S.c().required("required"),Server:S.c().url("Enter valid url").required("required"),"Service Account":S.c().required("required"),"Service Password":S.c().required("required"),Urls:S.b({Browser:S.c().url("Enter valid url").required("required"),API:S.c().url("Enter valid url").required("required")})}))})}),q=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(y,{yupSchema:O})})},I=function(){return Object(u.jsx)(q,{})},w=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,262)).then((function(t){var r=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),s(e),c(e),n(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),w()}},[[227,1,2]]]);
//# sourceMappingURL=main.c010fcce.chunk.js.map