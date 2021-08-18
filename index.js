const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () =>{
    console.log("Spreman za rad")
    client.user.setActivity('+informacije', { type: "WATCHING" }).catch(console.error)
})

client.on("message", async message => {
    const prefix = "+"
    var command = message.content

    if(command === prefix+"informacije"){
        const embed = new Discord.MessageEmbed()
            .setColor("#88DDFF")
            .setTitle("INFORMACIJE")
            .setDescription("SVE INFORMACIJE!")
            .addFields(
                { name: 'Prefix', value: '`+`' },
                { name: 'Sve informacije', value: '`+informacije`' },
                { name: 'Invite Link', value: '`+invite`' },
                { name: 'Ping-Pong!', value: '`+ping`' },
                { name: 'Staff Tim', value: '`+staff`' },
                { name: 'Procitaj Informacije', value: '<#877500279426265140>', inline: true },
                { name: 'Procitaj Pravila', value: '<#877500438839185448>', inline: true }
            )
            
        message.channel.send(embed)
    } else if(command === prefix+"ping"){
        const ping = new Discord.MessageEmbed()
            .setColor("#36ffd7")
            .setTitle("PONG!")

        message.channel.send(ping)
    } else if(command === prefix+"staff"){
        const staff = new Discord.MessageEmbed()

            .setColor("#88DDFF")
                .setTitle("STAFF")
                .setDescription("Nas staff tim!")
                .addFields(
                    { name: 'OWNER', value: '<@764625310569988106> <@393730613246689280>' },
                    { name: 'ADMIN', value: '<@594897418261233688>' },
                    { name: 'MODERATOR', value: '<@559780689982128129> <@852848365019856896> <@615287202649473085>' },
                    { name: 'HELPER', value: '/' },
                    { name: 'Procitaj Informacije', value: '<#877500279426265140>', inline: true },
                    { name: 'Procitaj Pravila', value: '<#877500438839185448>', inline: true }
                ) 
        message.channel.send(staff)       
    } else if(command === prefix+"invite"){
        const invite = new Discord.MessageEmbed()

            .setColor("#88DDFF")
            .setTitle("Invite Link")
            .setDescription("OVO JE INVITE LINK SERVERA!")
            .setImage("https://c.tenor.com/SxQEDIpjgrMAAAAC/continental-discord.gif")
            .addFields(
                { name: 'link:', value: 'https://discord.gg/trNchBJ5JS' },
                { name: 'Ovo mozes koristiti kako bi pozvao drugare na Server!', value: '*HVALA!*' }
            )

        message.channel.send(invite)
    }


    
})

client.login("ODY5NjI1MDg0NzY2MjIwMzU4.YQA7eQ.Ub8vXZ3j95mDQdrSHp6nEwpAFnU")