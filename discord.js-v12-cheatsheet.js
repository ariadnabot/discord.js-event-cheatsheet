const Discord = require('discord.js');
const client = new Discord.Client();      
const token = ""


    // All user account methods have been dropped.


    // channelCreate
         /* Emitted whenever a channel is created.
        PARAMETER    TYPE        DESCRIPTION
        channel      Channel     The channel that was created    */
        client.on("channelCreate", function(channel){
            console.log(`channelCreate: ${channel}`);
        });

    // channelDelete
        /* Emitted whenever a channel is deleted.
        PARAMETER   TYPE      DESCRIPTION
        channel     Channel   The channel that was deleted    */
        client.on("channelDelete", function(channel){
            console.log(`channelDelete: ${channel}`);
        });

    // channelPinsUpdate
        /* Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself.
        PARAMETER    TYPE         DESCRIPTION
        channel      Channel      The channel that the pins update occurred in
        time         Date         The time of the pins update    */
        client.on("channelPinsUpdate", function(channel, time){
            console.log(`channelPinsUpdate: ${channel}:${time}`);
        });

    // channelUpdate
        /* Emitted whenever a channel is updated - e.g. name change, topic change.
        PARAMETER        TYPE        DESCRIPTION
        oldChannel       Channel     The channel before the update
        newChannel       Channel     The channel after the update    */
        client.on("channelUpdate", function(oldChannel, newChannel){
            console.log(`channelUpdate -> a channel is updated - e.g. name change, topic change`);
        });

    
    // clientUserGuildSettingsUpdate

    // clientUserSettingsUpdate

    // debug
        /* Emitted for general debugging information.
        PARAMETER    TYPE         DESCRIPTION
        info         string       The debug information    */
        client.on("debug", function(info){
            console.log(`debug -> ${info}`);
        });
Warning
    // disconnect
        /* Emitted when the client's WebSocket disconnects and will no longer attempt to reconnect.
        PARAMETER    TYPE              DESCRIPTION
        Event        CloseEvent        The WebSocket close event    */
        client.on("disconnect", function(event){
            console.log(`The WebSocket has closed and will no longer attempt to reconnect`);
        });

    // emojiCreate
        /* Emitted whenever a custom emoji is created in a guild.
        PARAMETER    TYPE          DESCRIPTION
        emoji        Emoji         The emoji that was created    */
        client.on("emojiCreate", function(emoji){
            console.log(`a custom emoji is created in a guild`);
        });

    // emojiDelete
        /* Emitted whenever a custom emoji is deleted in a guild.
        PARAMETER    TYPE         DESCRIPTION
        emoji        Emoji        The emoji that was deleted    */
        client.on("emojiDelete", function(emoji){
            console.log(`a custom guild emoji is deleted`);
        });

    // emojiUpdate
        /* Emitted whenever a custom emoji is updated in a guild.
        PARAMETER    TYPE       DESCRIPTION
        oldEmoji     Emoji      The old emoji
        newEmoji     Emoji      The new emoji    */
        client.on("emojiUpdate", function(oldEmoji, newEmoji){
            console.log(`a custom guild emoji is updated`);
        });

    // error
        /* Emitted whenever the client's WebSocket encounters a connection error.
        PARAMETER    TYPE     DESCRIPTION
        error        Error    The encountered error    */
        client.on("error", function(error){
            console.error(`The client's WebSocket encountered a connection error: ${error}`);
        });

    // guildBanAdd
        /* Emitted whenever a member is banned from a guild.
        PARAMETER    TYPE          DESCRIPTION
        guild        Guild         The guild that the ban occurred in
        user         User          The user that was banned    */
        client.on("guildBanAdd", function(guild, user){
            console.log(`A member : ${user} has been banned from ${guild}.`);
        });

    // guildBanRemove
        /* Emitted whenever a member is unbanned from a guild.
        PARAMETER    TYPE         DESCRIPTION
        guild        Guild        The guild that the unban occurred in
        user         User         The user that was unbanned    */
        client.on("guildBanRemove", function(guild, user){
            console.log(`A member : ${user} has been unbanned from ${guild}.`);
        });

    // guildCreate
        /* Emitted whenever the client joins a guild.
        PARAMETER    TYPE         DESCRIPTION
        guild        Guild        The created guild    */
        client.on("guildCreate", function(guild){
            console.log(`The Client joined a guild.`);
        });

    // guildDelete
        /* Emitted whenever a guild is deleted/left.
        PARAMETER    TYPE         DESCRIPTION
        guild        Guild        The guild that was deleted    */
        client.on("guildDelete", function(guild){
            console.log(`The Client left/deleted a guild.`);
        });

    // guildIntegrationsUpdate
        /* Emitted whenever a guild integration is updated
        PARAMETER    TYPE         DESCRIPTION
        guild        Guild        The guild whose integrations were updated    */
        client.on("guildDelete", function(guild){
            console.log(`Guild integrations updated: ${guild}`);
        });

    // guildMemberAdd
        /* Emitted whenever a user joins a guild.
        PARAMETER     TYPE               DESCRIPTION
        member        GuildMember        The member that has joined a guild    */
        client.on("guildMemberAdd", function(member){
            console.log(`A user joined the guild: ${member.tag}`);
        });

    // guildMemberRemove
        /* Emitted whenever a member leaves a guild, or is kicked.
        PARAMETER     TYPE               DESCRIPTION
        member        GuildMember        The member that has left/been kicked from the guild    */
        client.on("guildMemberRemove", function(member){
            console.log(`A member left/was kicked: ${member.tag}`);
        });

    // guildMembersChunk
        /* Emitted whenever a chunk of guild members is received (all members come from the same guild).
        PARAMETER      TYPE                      DESCRIPTION
        members        Array<GuildMember>        The members in the chunk
        guild          Guild                     The guild related to the member chunk    */
        client.on("guildMembersChunk", function(members, guild){
            console.error(`A chunk of guild members is received`);
        });

    // guildMemberSpeaking
        /* Emitted once a guild member starts/stops speaking.
        PARAMETER     TYPE                DESCRIPTION
        member        GuildMember         The member that started/stopped speaking
        speaking      FLAGS               Readonly. SPEAKING, SOUNDSHARE, PRIORITY_SPEAKING   */
        client.on("guildMemberSpeaking", function(member, speaking){
            console.log(`A guild member starts/stops speaking: ${member.tag}`);
        });

    // guildMemberUpdate
        /* Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
        PARAMETER    TYPE               DESCRIPTION
        oldMember    GuildMember        The member before the update
        newMember    GuildMember        The member after the update    */
        client.on("guildMemberUpdate", function(oldMember, newMember){
            console.error(`A guild member changed - i.e. new role, removed role, nickname.`);
        });

    // guildUnavailable
        /* Emitted whenever a guild becomes unavailable, likely due to a server outage.
        PARAMETER    TYPE          DESCRIPTION
        guild        Guild         The guild that has become unavailable    */
        client.on("guildUnavailable", function(guild){
            console.error(`A guild became unavailable, likely due to a server outage: ${guild}`);
        });

    // guildUpdate
        /* Emitted whenever a guild is updated - e.g. name change.
        PARAMETER     TYPE      DESCRIPTION
        oldGuild      Guild     The guild before the update
        newGuild      Guild     The guild after the update    */
        client.on("guildUpdate", function(oldGuild, newGuild){
            console.error(`a guild is updated`);
        });

    // invalidated
        /* Emitted when the client's session becomes invalidated. You are expected to handle closing the process gracefully and preventing a boot loop if you are listening to this event.*/

// The following two events (inviteCreate and inviteDelete) are only triggered if the client has MANAGE_GUILD permissions for the guild, or MANAGE_CHANNEL permissions for the channel.
    
    // inviteCreate
        /* Emitted when an invite is created. 
        PARAMETER      TYPE           DESCRIPTION
        invite         Invite         The invite that was created    */
        client.on("inviteCreate", function(invite){
            console.log(`Invite was created: ${invite}`);
        });

    // inviteDelete
        /* Emitted when an invite is deleted.  
        PARAMETER      TYPE           DESCRIPTION
        invite         Invite         The invite that was deleted    */
        client.on("inviteCreate", function(invite){
            console.log(`Invite was created: ${invite}`);
        });


    // message
        /* Emitted whenever a message is created.
        PARAMETER      TYPE           DESCRIPTION
        message        Message        The created message    */
        client.on("message", function(message){
            console.log(`A meessage has been created: ${message}`);
        });

    // messageDelete
        /* Emitted whenever a message is deleted.
        PARAMETER      TYPE           DESCRIPTION
        message        Message        The deleted message    */
        client.on("messageDelete", function(message){
            console.log(`A message was deleted: ${message}`);
        });

    // messageDeleteBulk
        /* Emitted whenever messages are deleted in bulk.
        PARAMETER    TYPE                              DESCRIPTION
        messages     Collection<Snowflake, Message>    The deleted messages, mapped by their ID    */
        client.on("messageDeleteBulk", function(messages){
            console.log(`messages are deleted: ${messages}`);
        });

    // messageReactionAdd
        /* Emitted whenever a reaction is added to a cached message.
        PARAMETER              TYPE                   DESCRIPTION
        messageReaction        MessageReaction        The reaction object
        user                   User                   The user that applied the emoji or reaction emoji     */
        client.on("messageReactionAdd", function(messageReaction, user){
            console.log(`A reaction was added to a message.`);
        });

    // messageReactionRemove
        /* Emitted whenever a reaction is removed from a cached message.
        PARAMETER              TYPE                   DESCRIPTION
        messageReaction        MessageReaction        The reaction object
        user                   User                   The user that removed the emoji or reaction emoji     */
        client.on("messageReactionRemove", function(messageReaction, user){
            console.log(`A reaction was removed from a message.`);
        });

    // messageReactionRemoveAll
        /* Emitted whenever all reactions are removed from a cached message.
        PARAMETER          TYPE           DESCRIPTION
        message            Message        The message the reactions were removed from    */
        client.on("messageReactionRemoveAll", function(message){
            console.error(`all reactions are removed from a message`);
        });

    // messageReactionRemoveEmoji
        /* Emitted when a bot removes an emoji reaction from a cached message.
        PARAMETER          TYPE                   DESCRIPTION
        reaction           MessageReaction        The reaction that was removed    */
        client.on("messageReactionRemoveEmoji", function(reaction){
            console.error(`A reaction was removed: ${reaction}`);
        });

    // messageUpdate
        /* Emitted whenever a message is updated - e.g. embed or content change.
        PARAMETER     TYPE           DESCRIPTION
        oldMessage    Message        The message before the update
        newMessage    Message        The message after the update    */
        client.on("messageUpdate", function(oldMessage, newMessage){
            console.log(`A message was updated`);
        });

    // presenceUpdate
        /* Emitted whenever a guild member's presence (e.g. status, activity) is changed.
        PARAMETER    TYPE               DESCRIPTION
        oldPresence     Presence        The presence before the update, if one at all
        newPresence     Presence	    The presence after the update    */
        client.on("presenceUpdate", function(oldMember, newMember){
            console.log(`A guild member has presencs changes.`);
        });

    // rateLimit
        /* Emitted when the client hits a rate limit while making a request.
        PARAMETER                   TYPE                DESCRIPTION
        rateLimitInfo               Object              Object containing the rate limit info
        rateLimitInfo.timeout       number	            Timeout in ms  
        rateLimitInfo.limit         number	            Number of requests that can be made to this endpoint    
        rateLimitInfo.method        String	            HTTP method used for request that triggered this event    
        rateLimitInfo.path          Stringr	            Path used for request that triggered this event    
        rateLimitInfo.route         String	            Route used for request that triggered this event    */
        client.on("rateLimite", function(rateLimitInfo){
            console.log(`The client hit a ratelimit: ${rateLimitInfo}`);
        });


    // ready
        /* Emitted when the client becomes ready to start working.    */
        client.on("ready", function(){
            console.log(`The client becomes ready to start`);
        });

    // roleCreate
        /* Emitted whenever a role is created.
        PARAMETER    TYPE        DESCRIPTION
        role         Role        The role that was created    */
        client.on("roleCreate", function(role){
            console.error(`A role was created.`);
        });

    // roleDelete
        /* Emitted whenever a guild role is deleted.
        PARAMETER    TYPE        DESCRIPTION
        role         Role        The role that was deleted    */
        client.on("roleDelete", function(role){
            console.error(`A guild role was deleted.`);
        });

    // roleUpdate
        /* Emitted whenever a guild role is updated.
        PARAMETER      TYPE        DESCRIPTION
        oldRole        Role        The role before the update
        newRole        Role        The role after the update    */
        client.on("roleUpdate", function(oldRole, newRole){
            console.error(`A guild role was updated`);
        });

    // shardDisconnect
        /* Emitted when a shard's WebSocket disconnects and will no longer reconnect.
        PARAMETER    TYPE             DESCRIPTION
        event        CloseEvent      The WebSocket close event
        id           number         The shard ID that disconnected    */
        client.on("shardDisconnect", function(event, id){
            console.log(`A shard ${id} disconnected.`);
        });

    // shardError
        /* Emitted whenever a shard's WebSocket encounters a connection error.
        PARAMETER    TYPE             DESCRIPTION
        error        Error            The encountered error
        shardID      number           The shard that encountered this error    */
        client.on("shardError", function(event, id){
            console.log(`A shard ${id} encountered a connection error.`);
        });

    // shardReady
        /* Emitted when a shard turns ready.
        PARAMETER           TYPE             DESCRIPTION
        id                  number           The shard ID that turned ready
        unavailableGuilds   Set<string>      Set of unavailable guild IDs, if any   */
        client.on("shardReady", function(id){
            console.log(`A shard ${id} is ready.`);
        });


    // shardReconnecting
        /* Emitted when a shard is attempting to reconnect or re-identify.
        PARAMETER           TYPE             DESCRIPTION
        id                  number           The shard ID that is attempting to reconnect     */
        client.on("shardReconnecting", function(id){
            console.log(`A shard ${id} is reconnecting.`);
        });

    // shardResume
        /* Emitted when a shard resumes successfully.
        PARAMETER           TYPE             DESCRIPTION
        id                  number           The shard ID that resumed
        replayedEvents   number           The amount of replayed events   */
        client.on("shardResume", function(id, replayedEvents){
            console.log(`A shard ${id} is resumed sucessfully.`);
        });

    // typingStart
        /* Emitted whenever a user starts typing in a channel.
        PARAMETER      TYPE            DESCRIPTION
        channel        Channel         The channel the user started typing in
        user           User            The user that started typing    */
        client.on("typingStart", function(channel, user){
            console.log(`${user.tag} has started typing.`);
        });
                
    // typingStop
        /* Emitted whenever a user stops typing in a channel.
        PARAMETER       TYPE           DESCRIPTION
        channel         Channel        The channel the user stopped typing in
        user            User           The user that stopped typing    */
        client.on("typingStop", function(channel, user){
            console.log(`${user.tag} has stopped typing.`);
        });   

    // userUpdate
        /* Emitted whenever a user's details (e.g. username) are changed.
        PARAMETER      TYPE        DESCRIPTION
        oldUser        User        The user before the update
        newUser        User        The user after the update    */
        client.on("userUpdate", function(oldUser, newUser){
            console.log(`User's details (e.g. username) have changed.`);
        });

    // voiceStateUpdate
        /* Emitted whenever a member changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
        PARAMETER    TYPE             DESCRIPTION
        oldState     VoiceState       The voice state before the update
        newState     VoiceState       The voice state after the update    */
        client.on("voiceStateUpdate", function(oldState, newState){
            console.log(`A user changed his VOiceState.`);
        });

    // warn
        /* Emitted for general warnings. 
        PARAMETER    TYPE       DESCRIPTION
        info         string     The warning   */
        client.on("warn", function(info){
            console.log(`warn: ${info}`);
        });

    // webhookUpdate
        /* Emitted whenever a guild text channel has its webhooks changed.
        PARAMETER    TYPE            DESCRIPTION
        channel      TextChannel     The channel that had a webhook update   */
        client.on("webhookUpdate", function(channel){
            console.log(`A webhook was updated: ${channel}`);
        });

client.login(token);
