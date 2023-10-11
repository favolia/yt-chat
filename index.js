const { LiveChat } = require("youtube-chat")

const liveChat = new LiveChat({ liveId: "LIVE_ID_HERE" })

liveChat.on("start", (liveId) => {
    console.log({ liveId });
})


liveChat.on("end", (reason) => {
    console.log({ reason });
})

// Notify chat
liveChat.on("chat", (chatItem) => {
    console.log({ chatItem });
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
