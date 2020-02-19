const Botkit = require('botkit');

const controller = new Botkit({
});

const userAdded = { slackHandle: password };

const authCheck = (key, value) => {
    let isAuth = true;
    if(userAdded[0] === key && userAdded[1] === value) return isAuth;
    return 'Not auth.'
}

controller.hears(userAdded, message, async (bot, message) => {
    await bot.reply(message, 'Hello Slack Bot World! ')
});