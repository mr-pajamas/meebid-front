FlowRouter.route("/", {
    name: "index",
    action: function () {
        BlazeLayout.render("index");
    }
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
        BlazeLayout.render("s_login");
    }
});

FlowRouter.route("/s_index", {
    name: "s_index",
    action: function () {
        BlazeLayout.render("layout", {main: "s_center"});
    }
});

FlowRouter.route("/s_info", {
    name: "s_info",
    action: function () {
        BlazeLayout.render("layout", {main: "s_info"});
    }
});

FlowRouter.route("/create-auction", {
    name: "createAuction",
    action: function () {
        BlazeLayout.render("layout", {main: "s_create_auction"});
    }
});

FlowRouter.route("/list-auction", {
    name: "listAuction",
    action: function () {
        BlazeLayout.render("layout", {main: "s_list_auction"});
    }
});

FlowRouter.route("/list-auction-res", {
    name: "listAuctionRes",
    action: function () {
        BlazeLayout.render("layout", {main: "s_list_auction_res"});
    }
});

FlowRouter.route("/add-auction-res", {
    name: "AddAuctionRes",
    action: function () {
        BlazeLayout.render("layout", {main: "s_add_auction_res"});
    }
});

FlowRouter.route("/lots", {
    name: "lots",
    action: function () {
        BlazeLayout.render("lots");
    }
});
FlowRouter.route("/regist", {
    name: "regist",
    action: function () {
        BlazeLayout.render("regist");
    }
});
FlowRouter.route("/registinfo", {
    name: "registinfo",
    action: function () {
        BlazeLayout.render("registinfo");
    }
});