/**
 * Created by Michael on 2015/10/5.
 */
if (Meteor.isServer) {
    Meteor.methods({
        newUser: function (options) {
            var self = this;
            return Accounts._loginMethod(self, "newUser", arguments, "common", function () {

                check(options, Match.ObjectIncluding({
                    mobile: Pattern.Mobile,
                    password: String,
                    profile: Match.ObjectIncluding({
                        name: String
                    })
                }));

                var user = _.extend({
                    services: {
                        common: {md5Password: options.password}
                    }
                }, _.omit(options, "password"));

                var userId;
                try {
                    userId = Accounts.insertUserDoc(options, user);
                } catch (e) {
                    if (e.name !== 'MongoError') throw e;
                    var match = e.err.match(/E11000 duplicate key error index: ([^ ]+)/);
                    if (!match) throw e;
                    if (match[1].indexOf('mobile') !== -1)
                        throw new Meteor.Error(409, "手机号已经注册");
                    throw e;
                }
                return {userId: userId};
            });
        }
    });

    Accounts.registerLoginHandler("common", function (options) {
        if (!options.username) return undefined;
        check(options, Match.ObjectIncluding({
            username: String,
            password: String
        }));


        var user = HTTP.call("POST", "http://192.169.202.87:8080/auction/user/login",
            {params: {username: options.username, password: options.password}});
        console.log(user);

        Meteor.users.findOne();
        if (200 == user.statusCode) {
            var userinfo = {
                _id: user.data.uid,
                createdAt: new Date(),
                email: options.username,
                type:user.data.type,
                service: {
                    common: {md5Password: options.password}
                }
            };
            Meteor.users.upsert(user.data.uid,userinfo);
        }else{
            return {error: new Meteor.Error(403, "帐号或密码有误")};
        }


        //console.log(user.data.uid);
        if (!user) return {error: new Meteor.Error(403, "帐号或密码有误")};
        return {userId: user.data.uid};
    });
}

if (Meteor.isClient) {
    Accounts.newUser = function (options, callback) {
        options = _.clone(options);

        check(options, Match.ObjectIncluding({
            mobile: Pattern.Mobile,
            password: String,
            profile: Match.ObjectIncluding({
                name: String
            })
        }));

        options.password = CryptoJS.MD5(options.password).toString();

        Accounts.callLoginMethod({
            methodName: "newUser",
            methodArguments: [options],
            userCallback: callback
        });
    };

    Meteor.commonLogin = function (options, callback) {
        options = _.clone(options);

        check(options, Match.ObjectIncluding({
            username: String,
            password: String
        }));

        options.password = CryptoJS.MD5(options.password).toString();
        Accounts.callLoginMethod({
            methodArguments: [options],
            userCallback: callback
        });
    };
}
