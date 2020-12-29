const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Making a Custom RPC",
        start: "Started Discord RPC",
        startTimestamp: new Date(),
        largeImageKey: "social_banner",
        largeImageText: "Hello Large World",
        smallImageKey: "bravo68web",
        smallImageText: "Hello Small World",
    });

    console.log("Custom RPC Initialization Completed");
})

rpc.login({
    clientId: "793374869038694414"
})