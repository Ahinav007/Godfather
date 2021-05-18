var config = {
    mode: "webhook", // webhook or polling
    token : "1888707126:AAGCFsViCY4Iyamc94zSy45HJuvIocTMu2c",
    nickname : "Hungty bot",
    username : "Thegodafterbot",
    ownerId: 1162736638,
    webhook : {
        url: "https://therealgodfatherbot.herokuapp.com",
        path: "/",
        truePort: 80,
        port: 80
    },
    proxy: {
        enable: false,
        url: "http://127.0.0.1:1087"
    }
}

module.exports = config;