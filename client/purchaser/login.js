Template.p_login.events({
  "submit": function (event, template) {
    event.preventDefault();
    if (Meteor.user()) Meteor.logout();

    var username = template.$("[name=username]").val();
    var password = template.$("[name=password]").val();

    if (!Match.test(username, Pattern.NonEmptyString)) {
      alert("请正确填写账号");
      return;
    }

    if (!Match.test(password, Pattern.NonEmptyString)) {
      alert("请输入密码");
      return;
    }

    var options = {
      username: username,
      password: password
    };

    Meteor.commonLogin(options, function (error) {
      if (error) {
        alert(error.reason);
      } else {
        FlowRouter.go("index");
      }
    });
  }
});
