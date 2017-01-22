if (Meteor.isServer) {
  Meteor.publish(null, function () {
    if (this.userId) {
      return Meteor.users.find({_id: this.userId}, {fields: {type: 1}});
    } else {
      this.ready();
    }
  });

  Meteor.publish("singleUser", function (userId) {
    check(userId, String);
    return Meteor.users.find(userId, {fields: {type: 0, services: 0, roles: 0}});
  });
}
