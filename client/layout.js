Template.layout.helpers({
  isseller: function () {
    if(Meteor.user().type==1){
      return false;
    }else{
      return true;
    }
  },
  ispurchaser: function () {
    if(Meteor.user().type==1){
      return true;
    }else{
      return false;
    }
  }
});