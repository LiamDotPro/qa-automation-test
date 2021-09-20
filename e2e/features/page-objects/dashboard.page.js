import { element, by, expect, waitFor } from 'detox';
import { dashboard as ui } from '../ui-locators/locators';

// I rather not use Page Objects because that
// just makes more complex the framework but
// if there's a need or likeness from team
// I can change this to be a proper PO.
export const dashboard = {   
   /**
    * Gets the text displayed representing a title
    * after getting into the dashboard view, the 
    * name is a bit random.
    * 
    * @return {object} Promise Representation of a native element
    * 
    **/
    getTitle: async () => await element(by.id(ui.dashboardTitle)),
   /**
    * Gets the text displayed representing a password
    * after getting into the dashboard view, the 
    * name is a bit random.
    * 
    * @return {object} Promise Representation of a native element
    * 
    **/
    getBody: async () => await element(by.id(ui.randomIntegerText))
};