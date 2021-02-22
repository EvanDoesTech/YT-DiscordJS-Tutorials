module.exports = (client) => {
  const channelId = "812458294085550121";
  const rulesChannel = "812460469016199248";
  client.on("guildMemberAdd", (member) => {
    console.log(member);

    const message = `Welcome <@${
      member.id
    }> to our server! Be sure to check out our ${member.guild.channels.cache
      .get(rulesChannel)
      .toString()}`;

    const channel = member.guild.channels.cache.get(channelId);
    channel.send(message);
  });
};
