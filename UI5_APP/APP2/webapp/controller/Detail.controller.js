sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"], (Controller,History)=>{
        "use strict";

        return Controller.extend("ui5.walkthrough.controller.Detail",{
            onInit(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("detailaa").attachPatternMatched(this.onObjectMatched,this);
            },
            onObjectMatched(oEvent){
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                    model: "invoice"
                });
            },
            onNavBack(){
                const oHistory = History.getInstance();
                const sPreviousHash = oHistory.getPreviousHash();
                console.log(this)

                if(sPreviousHash !== undefined){
                    window.history.go(-1);
                }else{
                    const oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("overview",{},true);
                }
            }
        })

});