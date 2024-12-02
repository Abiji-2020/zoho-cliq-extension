'use strict';
import Cliq from 'zcatalyst-integ-cliq';
const installationHandler = Cliq.installationHandler();

installationHandler.handleInstallation(async (req, res) => {
    /* 
    // Logic for installation post handling
    *{
    *
    *}
    */
   // To have a login component with the salesforce. yet to implement. 

   res.status = 200;
   return res;
});
