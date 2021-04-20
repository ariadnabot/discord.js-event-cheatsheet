/*  How do you know if a member joined/left or switched the voice channel?

    This snippet contains the logic behind.

*/

client.on("voiceStateUpdate", (oS, nS) => {
    let u = nS.member.user.tag;
    
    //User joined/left a channel
    if (!oS.channelID && nS.channelID || oS.channelID && !nS.channelID) console.log(`${u} ${nS.channelID ? `joined ${nS.channel.name}` : `left ${oS.channel.name}`}`);
    
    //User started/stopped streaming to a guild
    if (!oS.streaming && nS.streaming || oS.streaming && !nS.streaming) return console.log(`${u} has ${nS.streaming ? "started" : "stopped"} streaming!`);

    //User was meafend/undeafend by an Moderator
    if (!oS.serverDeaf && nS.serverDeaf || oS.serverDeaf && !nS.serverDeaf) return console.log(`${u} was ${nS.serverDeaf ? "Server" : "un"}deafed`);

    //User was muted/unmuted by an Moderator
    if (!oS.serverMute && nS.serverMute || oS.serverMute && !nS.serverMute) return console.log(`${u} was ${nS.serverMute ? "Server" : "un"}muted`);

    //User deafened/undeafened himself
    if (!oS.selfDeaf && nS.selfDeaf || oS.selfDeaf && !nS.selfDeaf) return console.log(`${u} has ${nS.selfDeaf ? "" : "un"}deafed himself`);

    //User muted/unmuted himself
    if (!oS.selfMute && nS.selfMute || oS.selfMute && !nS.selfMute) return console.log(`${u} has ${nS.selfMute ? "" : "un"}muted himself`);

    //User started/stopped his Videofeed
    if (!oS.selfVideo && nS.selfVideo || oS.selfVideo && !nS.selfVideo) return console.log(`${u} has ${nS.selfVideo ? "started" : "stopped"} Video Sharing`);

    //User switched channels
    if(oS.channelID !== nS.channelID && oS.channelID && nS.channelID) return console.log(`${u} switched from ${oS.channel.name} to ${nS.channel.name}`);

});