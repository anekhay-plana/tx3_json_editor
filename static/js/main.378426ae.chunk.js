(this["webpackJsonpjson-editor"]=this["webpackJsonpjson-editor"]||[]).push([[0],{300:function(e,s,t){},548:function(e,s,t){},549:function(e,s,t){"use strict";t.r(s);var a=t(0),r=t.n(a),i=t(14),n=t.n(i),o=(t(300),t(125)),m=t(279),p=t(18),c=function(e){var s,t=e.variants,a=e.handleChange,r=e.selected;return Object(p.jsx)(m.a,{value:r,onChange:a,options:(s=t,s.map((function(e,s){return{value:s,label:e.name}})))})},l=[{name:"Approval Policy",json:{"Approval Policy":{Version:"Tx3 Demo 1.0.0.1",Schema:{ID:"http://tx3services.com/schemas/0/0/approval-policy.json",Major:"0",Minor:"0"},"Approval Groups":["Business","Quality","Technical"],"Route Templates":[{Name:"GxP Defect Approval",Rank:"1","Record Types":["Defect"],Levels:[{Name:"Level 1",Approvers:["Business","Technical"]},{Name:"Level 2",Approvers:["Quality"]}],Constraints:[{Type:"Field Is One Of",Name:"GxP",Values:["Y"]}]},{Name:"Defect Approval",Rank:"1","Record Types":["Defect"],Levels:[{Name:"Level 1",Approvers:["Business","Technical"]}]},{Name:"GxP Story Approval",Rank:"1","Record Types":["Story"],Levels:[{Name:"Level 1",Approvers:["Business","Technical"]},{Name:"Level 2",Approvers:["Quality"]}],Constraints:[{Type:"Field Is One Of",Name:"GxP",Values:["Y"]}]},{Name:"Story Approval",Rank:"1","Record Types":["Story"],Levels:[{Name:"Level 1",Approvers:["Business","Technical"]}]},{Name:"Issue Approval",Rank:"1","Record Types":["Issue"],Levels:[{Name:"Level 1",Approvers:["Business","Technical"]}]},{Name:"GxP Test Run Approval",Rank:"1","Record Types":["Test Run","XRay Execution"],Levels:[{Name:"Level 1",Approvers:["Business","Technical"]},{Name:"Level 2",Approvers:["Quality"]}],Constraints:[{Type:"Field Is One Of",Name:"GxP",Values:["Y"]}]},{Name:"Test Run Approval",Rank:"1","Record Types":["Test Run","XRay Execution"],Levels:[{Name:"Level 1",Approvers:["Business","Technical"]}]},{Name:" GxP Test Case Approval",Rank:"1","Record Types":["Test Case","XRay Test","XRay Scenario","XRay Generic Test","XRay Manual Test","XRay Pre-Condition"],Levels:[{Name:"Level 1",Approvers:["Technical","Business"]},{Name:"Level 2",Approvers:["Quality"]}],Constraints:[{Type:"Field Is One Of",Name:"GxP",Values:["Y"]}]},{Name:" Test Case Approval",Rank:"1","Record Types":["Test Case","XRay Test","XRay Scenario","XRay Generic Test","XRay Manual Test","XRay Pre-Condition"],Levels:[{Name:"Level 1",Approvers:["Technical","Business"]}]},{Name:"Default Route Template",Rank:"99","Record Types":["General"],Levels:[{Name:"Level 1",Approvers:["Business"]}]}]}},schema:{$schema:"http://json-schema.org/draft-04/schema#",type:"object",properties:{"Approval Policy":{type:"object",properties:{Version:{type:"string"},Schema:{type:"object",properties:{ID:{type:"string"},Major:{type:"string"},Minor:{type:"string"}},required:["ID","Major","Minor"]},"Approval Groups":{type:"array",items:{type:"string"}},"Route Templates":{type:"array",items:{type:"object",properties:{Name:{type:"string"},Rank:{type:"string"},"Record Types":{type:"array",items:[{type:"string"}]},Levels:{type:"array",items:{type:"object",properties:{Name:{type:"string"},Approvers:{type:"array",items:{type:"string"}}},required:["Name","Approvers"]}},Constraints:{type:"array",items:{type:"object",properties:{Type:{type:"string"},Name:{type:"string"},Values:{type:"array",items:{type:"string"}}},required:["Type","Name","Values"]}}}}}},required:["Name","Rank","Record Types","Levels"]}}}},{name:"Synchronization Policy",json:{"Synchronization Policy":{Version:"VERA Demo Env - 0.0.0.2",Locations:[{System:"JIRA",Name:"Tx3 Demo Jira Server",Server:"http://jira-demo.tx3services.com:8080","Service Account":"test_vera","Service Password":"x2kwtrR5cZ/jdjdhjghdkjuyliuy9A=",Urls:{Browser:"http://jira-demo.tx3services.com:8080/browse/{Key}",API:"http://jira-demo.tx3services.com:8080/rest/api/2/issue/{Issue ID}"}},{System:"JIRA",Name:"Tx3 JIRA Test Server",Server:"http://tx3-jira-test.eastus.cloudapp.azure.com:8080/","Service Account":"emailtesting@tx3services.com","Service Password":"HVeTrBgQokjhgjmhgmnjhsnrty5667O8OkPqtKMp0RNedH9q+sm+nU0Kkr/Q==",Urls:{Browser:"http://tx3-jira-test.eastus.cloudapp.azure.com:8080/browse/{Key}",API:"http://tx3-jira-test.eastus.cloudapp.azure.com:8080/rest/api/2/issue/{Issue ID}"}},{System:"qTest",Name:"Tricentis qTest Alcon Server",Server:"https://kmdeva.qtestnet.com",Urls:{Browser:"https://kmdeva.qtestnet.com/p/{Project ID}/portal/project#key={Key}",API:"https://kmdeva.qtestnet.com/api/v3/projects/{Project ID}/{Item Type}s/{Entity ID}"},"Service Account":"hfarris@tx3services.com","Service Password":"jtbHVV67667657RzYZrJvfhgjhjhgdjhgdjhgdjhgdjhgjghFt1bM=","qTest Name":"kmdeva"},{System:"qTest",Name:"Tx3 qTest Cloud Server",Server:"https://tx3.qtestnet.com",Urls:{Browser:"https://tx3.qtestnet.com/p/{Project ID}/portal/project#key={Key}",API:"https://tx3.qtestnet.com/api/v3/projects/{Project ID}/{Item Type}s/{Entity ID}"},"Service Account":"jberek@tx3services.com","Service Password":"xVFmav0KADFwwqR5gnjgfhgfhst565465645sghgaaTjlLwmZRKA=","qTest Name":"tx3"},{System:"JIRA",Name:"Jira Cloud",Server:"https://tx3.atlassian.net","Service Account":"emailtesting@tx3services.com","Service Password":"HVeTrBgQ78IgawcfCn9O8OkPqtKM/Qp0RNedH9q+sm+nU76765765hthsrthgtwyw45s4hQ==",Urls:{Browser:"https://tx3.atlassian.net/browse/{Key}",API:"https://tx3.atlassian.net/rest/api/2/issue/{Issue ID}"}},{System:"JIRA",Name:"Jira Cloud - Mnghe",Server:"https://mnghe.atlassian.net","Service Account":"emailtesting@tx3services.com","Service Password":"dGba/evvbNmfxtrGeaXuQ3zRweFO2fdXdQdbeHgc5HzXsvpisBaNyXcH0FAsclmKKpiOrR/4DqS/fWJ0Jr5mSA==",Urls:{Browser:"https://mnghe.atlassian.net/browse/{Key}",API:"https://mnghe.atlassian.net/rest/api/2/issue/{Issue ID}"}},{System:"VERA",Name:"Tx3 VERA Demo Server",Server:"https://vera-demo.tx3services.com",Urls:{Browser:"https://vera-demo.tx3services.com:8443/details/",API:"https://vera-demo.tx3services.com/rest/"},"Service Account":"","Service Password":""}]}},schema:{$schema:"http://json-schema.org/draft-07/schema#",type:"object",properties:{"Synchronization Policy":{type:"object",required:["Version","Locations"],properties:{Version:{type:"string",const:"Version"},Locations:{type:"array",items:{type:"object",required:["System","Name","Server","Service Account","Service Password","Urls"],properties:{System:{type:"string"},Name:{type:"string"},Server:{type:"string"},"Service Account":{type:"string"},"Service Password":{type:"string"},Urls:{type:"object",properties:{Browser:{type:"string"},API:{type:"string"}}}}}}}}}}},{name:"Records Management Policy",json:{"Records Management Policy":{Version:"Tx3 Demo 1.0.0.2",Schema:{ID:"http://tx3services.com/schemas/0/0/records-management-policy.json",Major:"0",Minor:"0"},"Record Types":[{Name:"Test Case",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-case"],"Singular Name":"Test Case","Plural Name":"Test Cases","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Status","Is Data":"Yes"},{Name:"Type","Is Data":"Yes"},{Name:"Assigned To","Is Data":"Yes"},{Name:"Description","Is Data":"Yes"},{Name:"Precondition","Is Data":"Yes"},{Name:"Priority","Is Data":"Yes"},{Name:"qTest Version ID","Is Data":"Yes"},{Name:"GxP","Is Data":"Yes"}]},{Name:"qTest Test Step",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-step"],"Singular Name":"Test Step","Plural Name":"Test Steps","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Description","Is Data":"Yes"},{Name:"Expected Result","Is Data":"Yes"}]},{Name:"Test Run",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-run"],"Singular Name":"Test Run","Plural Name":"Test Runs","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Status","Is Data":"Yes"},{Name:"Target Release/Build","Is Data":"Yes"},{Name:"Test Case ID","Is Data":"Yes"},{Name:"Approval Requirement (Custom Field)","Is Data":"Yes"},{Name:"Custom Field","Is Data":"Yes"},{Name:"Environment","Is Data":"Yes"},{Name:"Assigned To","Is Data":"Yes"},{Name:"Priority","Is Data":"Yes"},{Name:"GxP","Is Data":"Yes"}]},{Name:"qTest Test Log",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-log"],"Singular Name":"Test Log","Plural Name":"Test Logs","Ownership Description":"created","Content Originator":"Tester"}],Fields:[{Name:"Test Case Name","Is Data":"Yes"},{Name:"Test Case Version","Is Data":"Yes"},{Name:"Status","Is Data":"Yes"},{Name:"Execution Type","Is Data":"Yes"},{Name:"Target Release/Build","Is Data":"Yes"},{Name:"Executed Start","Is Data":"Yes"},{Name:"Executed End","Is Data":"Yes"},{Name:"Execution Log Notes","Is Data":"Yes"}]},{Name:"qTest Test Step Log",Definitions:[{Systems:["qTest"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["test-step-log"],"Singular Name":"Test Step Log","Plural Name":"Test StepLogs","Ownership Description":"created","Content Originator":"Tester"}],Fields:[{Name:"Status","Is Data":"Yes"},{Name:"Description","Is Data":"Yes"},{Name:"Expected Result","Is Data":"Yes"},{Name:"Actual Result","Is Data":"Yes"}]},{Name:"Story","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["Story"],"Singular Name":"Story","Plural Name":"Stories","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Category","Is Data":"Yes"},{Name:"Resolution","Is Data":"Yes"}]},{Name:"XRay Scenario","Base Record Type":"XRay Test",Definitions:[{Systems:["JIRA"],"Item Types":["Test"],Constraints:[{Type:"Field Is Equal",Name:"Test Type",Value:"Cucumber"}],"Singular Name":"Test","Plural Name":"Tests","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Type","Is Data":"Yes"},{Name:"Cucumber Test Type","Is Data":"Yes"},{Name:"Cucumber Scenario","Is Data":"Yes"}]},{Name:"XRay Generic Test","Base Record Type":"XRay Test",Definitions:[{Systems:["JIRA"],"Item Types":["Test"],Constraints:[{Type:"Field Is Equal",Name:"Test Type",Value:"Generic"}],"Singular Name":"Test","Plural Name":"Tests","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Type","Is Data":"Yes"},{Name:"Generic Test Definition","Is Data":"Yes"}]},{Name:"XRay Manual Test","Base Record Type":"XRay Test",Definitions:[{Systems:["JIRA"],"Item Types":["Test"],Constraints:[{Type:"Field Is Equal",Name:"Test Type",Value:"Manual"}],"Singular Name":"Test","Plural Name":"Tests","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Type","Is Data":"Yes"},{Name:"Manual Test Steps","Is Data":"Yes"}]},{Name:"XRay Test","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],"Item Types":["Test"],"Singular Name":"Test","Plural Name":"Tests","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Type","Is Data":"Yes"}]},{Name:"XRay Pre-Condition","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],"Item Types":["Pre-Condition"],"Singular Name":"Pre-Condition","Plural Name":"Pre-Conditions","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Pre-Condition Type","Is Data":"Yes"},{Name:"Conditions","Is Data":"Yes"}]},{Name:"XRay Test Plan","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],"Item Types":["Test Plan"],"Singular Name":"Test Plan","Plural Name":"Test Plans","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Plan Status","Is Data":"Yes"},{Name:"Tests associated with a Test Plan","Is Data":"Yes"},{Name:"Begin Date","Is Data":"Yes"},{Name:"End Date","Is Data":"Yes"}]},{Name:"XRay Execution","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],"Item Types":["Test Execution","Sub Test Execution"],"Singular Name":"Test Plan","Plural Name":"Test Plans","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Test Execution Status","Is Data":"Yes"},{Name:"Tests association with a Test Execution","Is Data":"Yes"},{Name:"Test Environments","Is Data":"Yes"},{Name:"Test Plan","Is Data":"Yes"},{Name:"Begin Date","Is Data":"Yes"},{Name:"End Date","Is Data":"Yes"}]},{Name:"Defect","Base Record Type":"Issue",Definitions:[{Systems:["JIRA"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Item Types":["Bug"],"Singular Name":"Bug","Plural Name":"Bugs","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Category","Is Data":"Yes"},{Name:"Resolution","Is Data":"Yes"}]},{Name:"Issue",Definitions:[{Systems:["JIRA"],Aliases:[{"Policy Field":"ID","System Field":"Req ID"}],"Singular Name":"Issue","Plural Name":"Issues","Ownership Description":"created","Content Originator":"Author"}],Fields:[{Name:"Component","Is Data":"Yes"},{Name:"Description","Is Data":"Yes"},{Name:"Summary","Is Data":"Yes"},{Name:"Issue Type","Is Data":"Yes"},{Name:"Acceptance Criteria","Is Data":"Yes"},{Name:"Functional Specification","Is Data":"Yes"},{Name:"Design Specification","Is Data":"Yes"},{Name:"Configuration Specification","Is Data":"Yes"},{Name:"Risk Classification","Is Data":"Yes"},{Name:"Created","Is Data":"Yes"},{Name:"Started","Is Data":"Yes"},{Name:"Due Started","Is Data":"Yes"},{Name:"Due Date","Is Data":"Yes"},{Name:"Updated","Is Data":"Yes"},{Name:"Priority","Is Data":"Yes"},{Name:"Labels","Is Data":"Yes"},{Name:"Original Estimate","Is Data":"Yes"},{Name:"Remaining Estimate","Is Data":"Yes"},{Name:"Affects Version/s","Is Data":"Yes"},{Name:"Fix Version/s","Is Data":"Yes"},{Name:"Resolution Detail","Is Data":"Yes"},{Name:"GxP","Is Data":"Yes"},{Name:"Revision Reason","Is Data":"Yes"}]}]}},schema:{$schema:"http://json-schema.org/draft-04/schema#",type:"object",properties:{"Records Management Policy":{type:"object",properties:{Version:{type:"string"},Schema:{type:"object",properties:{ID:{type:"string"},Major:{type:"string"},Minor:{type:"string"}},required:["ID","Major","Minor"]},"Record Types":{type:"array",items:{type:"object",properties:{Name:{type:"string"},Definitions:{type:"array",items:{type:"object",properties:{Systems:{type:"array",items:[{type:"string"}]},Aliases:{type:"array",items:{type:"object",properties:{"Policy Field":{type:"string"},"System Field":{type:"string"}},required:["Policy Field","System Field"]}},"Item Types":{type:"array",items:[{type:"string"}]},"Singular Name":{type:"string"},"Plural Name":{type:"string"},"Ownership Description":{type:"string"},"Content Originator":{type:"string"}},required:["Systems","Aliases","Item Types","Singular Name","Plural Name","Ownership Description","Content Originator"]}},Fields:{type:"array",items:{type:"object",properties:{Name:{type:"string"},"Is Data":{type:"string"}},required:["Name","Is Data"]}}}},required:["Name","Definitions","Fields"]}}},required:["Version","Schema","Record Types"]}}}],y=t(278),u=t(280),d=t(277),N=t.n(d),T=(t(548),function(e){var s=e.json,t=Object(a.useState)(s.json),r=Object(o.a)(t,2),i=r[0],n=r[1];return Object(a.useEffect)((function(){n(s.json)}),[s]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{children:Object(p.jsx)(y.a,{schema:s.schema,formData:i,onChange:function(e){return n(e.formData)}})}),Object(p.jsx)("div",{children:Object(p.jsx)(u.a,{locale:N.a,placeholder:i})})]})}),I=function(){var e=Object(a.useState)(null),s=Object(o.a)(e,2),t=s[0],r=s[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(c,{variants:l,handleChange:function(e){r(e)},selected:t}),null!==t&&Object(p.jsx)(T,{json:l[t.value]})]})},D=function(){return Object(p.jsx)(I,{})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,587)).then((function(s){var t=s.getCLS,a=s.getFID,r=s.getFCP,i=s.getLCP,n=s.getTTFB;t(e),a(e),r(e),i(e),n(e)}))};n.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root")),g()}},[[549,1,2]]]);
//# sourceMappingURL=main.378426ae.chunk.js.map