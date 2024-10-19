sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller, JSONModel,Filter,FilterOperator) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
		onInit() {
			const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		onFilterInvoices(oEvent){
			const aFiter = [];
			const sQuery = oEvent.getParameter("query");
			if(sQuery){
				aFiter.push(new Filter("ProductName",FilterOperator.Contains,sQuery));
			}
			const oList = this.byId("invoiceList");
			const oBindind = oList.getBinding("items");
			oBindind.filter(aFiter);
		},
		onPress(oEvent){
			const oItems = oEvent.getSource();
			const ORouter = this.getOwnerComponent().getRouter();
			ORouter.navTo("detailaa",{
				invoicePath:window.encodeURIComponent(oItems.getBindingContext("invoice").getPath().substr(1))
			});
		}
	});
});