webpackJsonp([26],{"6dgr":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("zGNL"),s=t("Yp0Q"),i={components:{crmDetails:l.a,rentingDetails:s.a},data:function(){return{editId:null,pageIndex:1,pageSize:10,dataTotal:0,loading:!0,tabType:"1",delTableData:[],salesTableData:[],dialogCrmDetails:!1,LockingTableData:[],PrivateTableData:[],dialogRentingDetails:!1}},created:function(){this.getDataList()},watch:{},methods:{pageSizeChange:function(e){this.pageSize=e,this.getDataList()},pageIndexChange:function(e){this.pageIndex=e,this.getDataList()},closeDialog:function(e){this[e]=!1},openCrmDetails:function(e){this.editId=Number(e),this.dialogCrmDetails=!0},openRentingDetails:function(e){this.editId=Number(e),this.dialogRentingDetails=!0},handleClick:function(e){this.tabType=e.name,this.pageIndex=1,this.getDataList()},getDataList:function(){var e=this;switch(this.tabType){case"1":this.$https.get("/api/customer_delete_approve/page",{params:{currentPage:this.pageIndex,pageSize:this.pageSize,approve_status:-1,created_user_id:-1}}).then(function(a){0==a.data.code?(e.delTableData=a.data.data.Items,e.dataTotal=a.data.data.Total,e.loading=!1):e.$message({type:"error",showClose:!0,message:a.data.message})});break;case"2":this.$https.get("/api/customer_change_salesman/page",{params:{currentPage:this.pageIndex,pageSize:this.pageSize,approve_status:-1,created_user_id:-1}}).then(function(a){0==a.data.code?(e.salesTableData=a.data.data.Items,e.dataTotal=a.data.data.Total,e.loading=!1):e.$message({type:"error",showClose:!0,message:a.data.message})});break;case"3":this.$https.get("/api/rent_base_resources/GetLockedApply",{params:{page:this.pageIndex,page_size:this.pageSize}}).then(function(a){0==a.data.code?(e.LockingTableData=a.data.data.Items,e.dataTotal=a.data.data.Total,e.loading=!1):e.$message({type:"error",showClose:!0,message:a.data.message})});break;case"4":this.$https.get("/api/rent_base_resources/GetPrivateApply",{params:{page:this.pageIndex,page_size:this.pageSize}}).then(function(a){0==a.data.code?(e.PrivateTableData=a.data.data.Items,e.dataTotal=a.data.data.Total,e.loading=!1):e.$message({type:"error",showClose:!0,message:a.data.message})})}}}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-card",[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("我的申请记录")]),e._v(" "),t("el-button-group",{staticStyle:{float:"right"}},[t("el-button",{attrs:{icon:"el-icon-refresh",size:"mini",plain:"",onclick:"window.location.reload()"}},[e._v("刷新")])],1)],1),e._v(" "),t("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.tabType,callback:function(a){e.tabType=a},expression:"tabType"}},[t("el-tab-pane",{attrs:{label:"删除申请",name:"1"}},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.delTableData}},[t("el-table-column",{attrs:{prop:"id",label:"ID",width:"55"}}),e._v(" "),t("el-table-column",{attrs:{prop:"created_user_name",label:"申请人"}}),e._v(" "),t("el-table-column",{attrs:{prop:"created_time",label:"申请时间"}}),e._v(" "),t("el-table-column",{attrs:{label:"删除客户"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("a",{attrs:{href:"javascript:;"},on:{click:function(t){e.openCrmDetails(a.row.c_id)}}},[e._v(e._s(a.row.customer_name))])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"apply_remark",label:"删除原因"}}),e._v(" "),t("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(0===a.row.approve_status?"拒绝":1===a.row.approve_status?"同意":"未处理"))])]}}])})],1)],1),e._v(" "),t("el-tab-pane",{attrs:{label:"业务员变更申请",name:"2"}},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.salesTableData}},[t("el-table-column",{attrs:{prop:"id",label:"ID",width:"55"}}),e._v(" "),t("el-table-column",{attrs:{prop:"created_user_name",label:"申请人"}}),e._v(" "),t("el-table-column",{attrs:{prop:"created_time",label:"申请时间"}}),e._v(" "),t("el-table-column",{attrs:{label:"变更客户"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("a",{attrs:{href:"javascript:;"},on:{click:function(t){e.openCrmDetails(a.row.c_id)}}},[e._v(e._s(a.row.customer_name))])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"apply_remark",label:"变更原因"}}),e._v(" "),t("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(0===a.row.approve_status?"拒绝":1===a.row.approve_status?"同意":"未处理"))])]}}])})],1)],1),e._v(" "),t("el-tab-pane",{attrs:{label:"锁盘申请",name:"3"}},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.LockingTableData}},[t("el-table-column",{attrs:{prop:"lock_id",label:"ID",width:"55"}}),e._v(" "),t("el-table-column",{attrs:{prop:"created_user_name",label:"申请人"}}),e._v(" "),t("el-table-column",{attrs:{prop:"created_time",label:"申请时间"}}),e._v(" "),t("el-table-column",{attrs:{label:"锁盘房源"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("a",{attrs:{href:"javascript:;"},on:{click:function(t){e.openRentingDetails(a.row.resource_id)}}},[e._v(e._s(a.row.resource_fullname||a.row.resource_id))])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"reason",label:"锁盘原因"}}),e._v(" "),t("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(0===a.row.status?"待处理":1===a.row.status?"已同意":2===a.row.status?"已驳回("+a.row.reject+")":"已释放"))])]}}])})],1)],1),e._v(" "),t("el-tab-pane",{attrs:{label:"私盘申请",name:"4"}},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.PrivateTableData}},[t("el-table-column",{attrs:{prop:"private_id",label:"ID",width:"55"}}),e._v(" "),t("el-table-column",{attrs:{prop:"created_user_name",label:"申请人"}}),e._v(" "),t("el-table-column",{attrs:{prop:"created_time",label:"申请时间"}}),e._v(" "),t("el-table-column",{attrs:{label:"私盘房源"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("a",{attrs:{href:"javascript:;"},on:{click:function(t){e.openRentingDetails(a.row.resource_id)}}},[e._v(e._s(a.row.resource_fullname||a.row.resource_id))])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"reason",label:"私盘原因"}}),e._v(" "),t("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(0===a.row.status?"待处理":1===a.row.status?"已同意":2===a.row.status?"已驳回("+a.row.reject+")":"已释放"))])]}}])})],1)],1)],1),e._v(" "),t("div",{staticClass:"text-center m-t"},[e.dataTotal>10?t("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,15,20,30],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.dataTotal},on:{"size-change":e.pageSizeChange,"current-change":e.pageIndexChange}}):e._e()],1)],1),e._v(" "),e.dialogCrmDetails?t("el-dialog",{attrs:{title:"客户详情",visible:e.dialogCrmDetails,"append-to-body":"",width:"1000px"},on:{"update:visible":function(a){e.dialogCrmDetails=a}}},[t("crmDetails",{attrs:{id:e.editId},on:{closeDialog:e.closeDialog}})],1):e._e(),e._v(" "),e.dialogRentingDetails?t("el-dialog",{attrs:{title:"房源详情",visible:e.dialogRentingDetails,"append-to-body":"",width:"1000px"},on:{"update:visible":function(a){e.dialogRentingDetails=a}}},[t("rentingDetails",{attrs:{id:e.editId},on:{closeDialog:e.closeDialog}})],1):e._e()],1)},staticRenderFns:[]};var n=t("Aizv")(i,o,!1,function(e){t("ArlB")},"data-v-56385ccf",null);a.default=n.exports},ArlB:function(e,a){}});
//# sourceMappingURL=26.ba43a2a5c46eeea390da.js.map