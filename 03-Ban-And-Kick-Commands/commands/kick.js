module.exports = {
  minArgs: 1,
  requiredPermissions: ["ADMINISTRATOR", "KICK_MEMBERS"],
  syntaxError: "Incorrect syntax, please use !kick <member>",
  callback: ({ message }) => {
    const { member, mentions } = message;
    const target = mentions.users.first();
    if (target) {
      const targetMember = message.guild.members.cache.get(target.id);
      targetMember.kick();
      message.channel.send(`<@${member.id}> That user has been kicked`);
    }
  },
};
