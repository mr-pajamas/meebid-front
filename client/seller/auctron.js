Template.s_list_auction.events({
    "click .btn1": function (event, template) {
        event.preventDefault();
        FlowRouter.go("listAuctionRes");
    }
});
Template.s_list_auction_res.events({
    "click #addAuctionRes": function (event, template) {
        event.preventDefault();
        FlowRouter.go("AddAuctionRes");
    }
});

Template.s_add_auction_res.events({
    "click #signup": function (event, template) {
        event.preventDefault();
        FlowRouter.go("listAuctionRes");
    }
});

Template.s_add_auction_res.events({
    "click #signup": function (event, template) {
        event.preventDefault();
        FlowRouter.go("listAuctionRes");
    }
});


