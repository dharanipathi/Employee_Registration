sap.ui.controller("emp_registration.home", {
	empRegister: function(){
		var oApp = this.getView().getParent();		
		oApp.to("idSplitApp");
	}
});