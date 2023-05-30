import { ZOHO } from '../vendor/ZohoWidgetSdk';


export async function initializeWidget() {
    console.log("start initialization....")
    await ZOHO.embeddedApp.init();
}


export async function getCurrentUserInfos() {
    return await ZOHO.CRM.CONFIG.getCurrentUser();
}