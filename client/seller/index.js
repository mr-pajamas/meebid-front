Template.s_top.events({
    "click #but1": function (event, template) {
        event.preventDefault();
        FlowRouter.go("s_index");
    },

    "click #but2": function (event, template) {
        event.preventDefault();
        FlowRouter.go("createAuction");
    },
    "click #but3": function (event, template) {
        event.preventDefault();
        FlowRouter.go("listAuction");
    },
    "click #but4": function (event, template) {
        event.preventDefault();
        FlowRouter.go("s_info");
    }
});

Template.s_center.events({
    "click .content": function (event, template) {
        event.preventDefault();
        FlowRouter.go("listAuctionRes");
    }
});

