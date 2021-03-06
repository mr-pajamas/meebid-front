Template.index.onRendered(function () {

});

Template.index.events({
    "click #searchbut": function (event, template) {
        event.preventDefault();
        triggerSearch(event, template);
    },

    "click #tologin": function (event, template) {
        event.preventDefault();
        FlowRouter.go("login");
    },
    "click #toregist": function (event, template) {
        event.preventDefault();
        FlowRouter.go("regist");
    },

    "click .content": function (event, template) {
        event.preventDefault();
        FlowRouter.go("lots");
    }
});

function triggerSearch(event, template) {
    var val = template.$("#search").val();
    template.$("#search").val(val);
    var q = $.trim(val) || null;
    FlowRouter.setQueryParams({q: q});
}

Template.index.helpers({
    lots: function () {
        var searchString = FlowRouter.getQueryParam("q");
        var selector = {};
        if (searchString) selector.name = {$regex: searchString, $options: "i"};
        return Lots.find(selector);
    }
});

Template.lots.onRendered(function () {
    $(".item-tab li").on("click", function() {
        var preNode = $(this).siblings(".active").index() + 1;
        $("#sli" + preNode).css("display", "none");
        $(this).siblings().removeClass();
        $(this).addClass("active");
        var index = $(this).index() + 1;
        $("#sli" + index).css("display", "block");
    })
    $(".spec-items ul li").on("click mouseover",function(){
        var img = $(this).find("img").attr("src");
        $("#bigPics").attr("src",img);
    });
});
Template.lots.events({
    "click #index": function (event, template) {
        event.preventDefault();
        FlowRouter.go("index");
    },
    "click .joinbut": function (event, template) {
        event.preventDefault();
        FlowRouter.go("applyinfo");
    }
});

Template.regist.events({
    "click #index": function (event, template) {
        event.preventDefault();
        FlowRouter.go("index");
    },
    "click #signup": function (event, template) {
        event.preventDefault();
        FlowRouter.go("registinfo");
    }
});


Template.applyinfo.events({
    "click #signup": function (event, template) {
        event.preventDefault();
        FlowRouter.go("index");
    }
});

Template.registinfo.events({
    "click #signup": function (event, template) {
        event.preventDefault();
        FlowRouter.go("index");
    }
});


