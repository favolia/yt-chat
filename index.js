// NOTE: JANGAN LUPA INSTALL youtube-chat
// npm i youtube-chat

const { LiveChat } = require("youtube-chat")
const chalk = require('chalk')
const liveId = "__djiNMRx9A"

const liveChat = new LiveChat({ liveId })

liveChat.on("start", (liveId) => {
    console.log({ liveId });
})

liveChat.on("end", (reason) => {
    console.log({ reason });
})

// Notify chat
liveChat.on("chat", (chatItem) => {
    const { author, id, isMembership, isModerator, isOwner, isVerified, message, timestamp, superchat } = chatItem
    const username = chalk`{${isOwner ? 'yellow' : isVerified ? 'cyan' : isModerator ? 'blue' : isMembership ? 'green' : 'gray' } ${author.name ?? 'undefined_name'}:}`
    const comment = message.map((item, i) => `${item?.text ?? ''}${item?.emojiText ?? ''}`).join('')

    console.log(`${username} ${comment}`);
})

// biar kalo error munculin di konsol
liveChat.on("error", (err) => {
    console.log({ Error: err });
})

const start = async () => {
    const ok = await liveChat.start()
    if (!ok) {
        console.log("Failed to start, check emitted error")
    }
}

liveChat.stop()
start()
