sap.ui.define([], () => {
    "use strict";

    return {
        statusText(sStatus){
            const obundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            switch (sStatus){
                case "A":
                    return obundle.getText("invoiceStatusA");
                case "B":
                    return obundle.getText("invoiceStatusB");
                case "C":
                    return obundle.getText("invoiceStatusC");  
                default:
                    return sStatus;                   
            }
        }
    }
});