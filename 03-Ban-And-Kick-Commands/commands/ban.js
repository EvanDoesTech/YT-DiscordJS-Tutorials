module.exports = {
  minArgs: 1,
  requiredPermissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
  syntaxError: "Incorrect syntax, please use !ban <member>",
  callback: ({ message }) => {
    const { member, mentions } = message;
    const target = mentions.users.first();
    if (target) {
      const targetMember = message.guild.members.cache.get(target.id);
      targetMember.ban();
      message.channel.send(`<@${member.id}> That user has been banned`);
    }
  },
};
