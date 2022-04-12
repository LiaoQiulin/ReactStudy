export default {
    unsubscribeFromFriendStatus: function (id, hander) {
        console.log("取消订阅")
        hander({isOnline: false})
    },
    subscribeToFriendStatus: async function (id, hander) {
        console.log("开始订阅")
        await new Promise((resolve, reject) => {
            setTimeout(function () {
                if (id == "1") {
                    hander({isOnline: true})
                } else {
                    hander({isOnline: false})
                }
            }, 1000)
        })


    },


}
