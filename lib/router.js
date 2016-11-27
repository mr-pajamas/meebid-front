FlowRouter.route("/", {
  name: "index",
  triggersEnter: [function (context, redirect) {
    redirect("login");
  }]
});

FlowRouter.route("/events", {
  name: "eventList",
  action: function () {
    BlazeLayout.render("layout", {main: "index", footer: "footer"});
  }
});

FlowRouter.route("/login", {
  name: "login",
  action: function () {
    BlazeLayout.render("layout");
  }
});