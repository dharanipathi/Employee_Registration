sap.ui.controller("emp_registration.menu", {

	regDet : function(){
		this.getView().getParent().getParent().toDetail("eDetail");
	},
	
   wrkExp : function(){
	this.getView().getParent().getParent().toDetail("eWrkExp");
},
	
	conDet : function(){
		this.getView().getParent().getParent().toDetail("eConDet");
	},

bankDet : function(){
	this.getView().getParent().getParent().toDetail("eBankDet");
},

	certificate : function(){
		this.getView().getParent().getParent().toDetail("eCertificate");
	},
	
perDoc : function(){
	this.getView().getParent().getParent().toDetail("ePerDoc");
}
	
});