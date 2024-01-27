// const token = 'BQC-pACx-p9fJJH8MPoD4A5xNuETcbrsVVvkP07V6s6qNllFkETrWzJKizQniVMwJqMuKspQd5IWxizmkx06DbjP-jhd6ttoFMmqjS5IYMwQiJDr2L1N-7Pt9eAmVXvhQRWoQ04B4JX-FhtxBIlFphm4ZWJF9v87dUBo9o3xshKic6VosGEZMQZPIkqdxsPtyU5QoUCz6JXTHANwArfj8_Q4IJ8ACT001pZc3OlEuDIblTI3o-Ijw8TwTuhNbx3Xze2s9ikrzZS5EprcaMFI'
const token = 'BQBXVrx0uUh1Bjs5IjB1TsQQDv5YCSmi0RpACcRSZYUUG9X-SJEbMpr7FY87d5OGRx24q49wttWcTw2Zjm0LJgkTDaNAAelOMMDR_1jdUdcOIgIfnV1U5bIbOpWn463pwZJ_mSCG0xdwDf7AI36bO-Hmbgeue_FzL7TmhBJ-c9FYC4ZCZbwu1V4ngd-cDwy4EmI0QB_OBJzumAf_JDD1qAZ_BkYPJHo3FJ_jqMocBnHfmg90nvbwEw'
const id = "4aawyAB9vmqN3uQ7FjRGTy"
function fetchWebApi(method) {
    fetch(`https://api.spotify.com/v1/albums/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "GET",
        // body: JSON.stringify(body)
    }).then((res) => {
        return res.json()
    }).then((val) => {
        console.log(val.tracks.items[0])
    })
}
fetchWebApi()

