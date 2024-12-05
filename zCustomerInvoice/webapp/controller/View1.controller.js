sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.invoicezCustomInvoice.controller.View1", {
		
		onInit: function(){
			
			var oModel = new sap.ui.model.odata.ODataModel("/northwind/v2/northwind/northwind.svc/");
			this.getView().byId("smartTableId").setModel(oModel);
			this.getView().byId("smartFilterBarId").setModel(oModel);
			
			
		}

	});
});