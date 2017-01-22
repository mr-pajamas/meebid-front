
Meteor.startup(function(){
  // code to run on server at startup
    if (Lots.find().count() === 0) {
        var lots = [
            {
                name: "满瘤疤 小叶紫檀手串 20.8mm",
                price: "¥1",
                img: "p1.jpg"
            },
            {
                name: "水波纹 黄花梨官帽箱 花纹绚丽",
                price: "¥1",
                img: "p2.jpg"
            },
            {
                name: "颗颗天眼 精品黄花梨手串",
                price: "¥1800",
                img: "p3.jpg"
            },
            {
                name: "满瘤疤 黄金樟花瓶",
                price: "¥1588",
                img: "p4.jpg"
            },
            {
                name: "满瘤疤 精品崖柏手串 20mm ",
                price: "¥1500",
                img: "p5.jpg"
            }, {
                name: "加里曼丹花开富贵雕件",
                price: "¥2088",
                img: "p6.jpg"
            }, {
                name: "沉水 精品老山檀香手串 18.1mm ",
                price: "¥1600",
                img: "p7.jpg"
            },
            {
                name: "带鬼眼 黄花梨花瓶",
                price: "¥2088",
                img: "p8.jpg"
            },
            {
                name: "老料 马尼涝沉香手串 20.9mm ",
                price: " ¥2001",
                img: "p9.jpg"
            },
            {
                name: "精雕大红酸枝花开富贵雕件",
                price: "¥2088",
                img: "p10.jpg"
            },
            {
                name: "蜘蛛纹 黄花梨手串 19.5mm ",
                price: "¥1",
                img: "p11.jpg"
            },
            {
                name: "多鬼眼 黄花梨拐杖",
                price: "¥1",
                img: "p12.jpg"
            }
        ];

        _.each(lots, function (lot) {
            Lots.insert(lot);
        });
    }
});
