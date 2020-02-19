/* 
Objective is a test tool for the slack bot using existing boilerplate
   Slack should be listening for an action, following the action issue a response. 
   This will be a hello world chatbot
*/
"use strict"

import dashbot from dashbot;


const globalState = {};

const isLoggedIn = (slackHandle, password) => {

    const slackPass = password;
    const user = slackHandle;
    const userCookie = {};
    let userData = [];
    let isValid = false;

    // pass down the user slack handle
    if(user === slackHandle) return userCookie;
    
    if(userCookie === null) return 'Non existing';  

    userData.forEach(e => {
        e.concat(slackHandle + 'is logged in');
    });

    if(userCookie !== isValid) return userCookie;
}


const slackTest = (slackHandle, isLoggedIn) => {
   
   const isConnected = () => {
      for (const state in globalState) {
          if (object.hasOwnProperty(state)) {
              const e = globalState[state];
              console.log('Global state is iterating');
              return state;
          }
      }
   }


       
   const PORT = 3000;
   const bot = dashbot();
   const botOn = bot.on;

   botOn(`Listening for ${PORT}`);
   
   if(dashbot === isConnected) return true; 


}