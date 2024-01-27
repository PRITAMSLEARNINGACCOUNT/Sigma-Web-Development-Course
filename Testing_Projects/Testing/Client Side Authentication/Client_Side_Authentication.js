var redirect_uri = "http://192.168.0.152:3002/Client_Side_Authentication.html"
var client_id = "209d2f3c87754ca182e7fc50458b76c8"
var client_secret = "dbfa1b250127486e95bd5e2f48653c8e"
var access_token = null
var refresh_token = null
const AUTHORIZE = "https://accounts.spotify.com/authorize"
const TOKEN = "https://accounts.spotify.com/api/token"
// const Main_Function = async () => {
// async function name(params) {
//     document.getElementsByClassName("Button")[0].addEventListener('click', ((e) => {
//         let value = await onPageLoad()

//     }))

// }
const Main_Function = async () => {

    document.getElementsByClassName("Button")[0].addEventListener('click', ((e) => {
        onPageLoad()
    }))
}
function onPageLoad() {
    let client_id = "209d2f3c87754ca182e7fc50458b76c8"
    let client_secret = "dbfa1b250127486e95bd5e2f48653c8e"
    let url = AUTHORIZE
    url += "?client_id=" + client_id
    url += "&response_type=code"
    url += "&redirect_uri=" + encodeURI(redirect_uri)
    url += "&show_dialog=true"
    url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private"
    console.log(url)
    window.location.href = url
    if (window.location.search.length > 0) {
        handleRedirect()
    }
    function handleRedirect() {
        console.log("Getting Code.")
        let code = getCode()
        console.log(code)
        fetchAccessToken(code)
        window.history.pushState("", "", redirect_uri)
    }

    function getCode() {
        let code = null
        const queryString = window.location.search
        if (queryString.length > 0) {
            const urlParams = new URLSearchParams(queryString)
            code = urlParams.get('code')
        }
        return code
    }

    function fetchAccessToken(code) {
        console.log("Fetching Access Token")
        let body = "grant_type=authorization_code"
        body += "&code=" + code
        body += "&redirect_uri=" + encodeURI(redirect_uri)
        body += "&client_id=" + client_id
        body += "&client_secret=" + client_secret
        // console.log(body)
        callAuthorizationApi(body)
    }

    function callAuthorizationApi(body) {
        console.log(body)
        let xhr = new XMLHttpRequest()
        xhr.open("POST", TOKEN, true)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa(client_id + ":" + client_secret))
        xhr.send(body)
        console.log(xhr.onload)
        xhr.onload = handleAuthorizationResponse



    }

    function handleAuthorizationResponse() {
        console.log(this.status)
        if (this.status == 200) {
            var data = JSON.parse(this.responseText)
            console.log(data)
            var data = JSON.parse(this.responseText)
            if (data.access_token != undefined) {
                console.log(access_token)
                access_token = data.access_token
                localStorage.setItem("access_token", access_token)
            }
            if (data.refresh_token != undefined) {
                refresh_token = data.refresh_token
                localStorage.setItem("refresh_token", refresh_token)
            }
            onPageLoad()
        }
        else {
            console.log(this.responseText)
            alert(this.responseText)
        }

    }

    function refreshAccessToken() {
        refresh_token = localStorage.getItem("refresh_token")
        let body = "grant_type=refresh_token"
        body += "&refresh_token=" + refresh_token
        body += "&client_id=" + client_id
        callAuthorizationApi(body)
    }
}

Main_Function()

// const id = "4aawyAB9vmqN3uQ7FjRGTy"
// function fetchWebApi(method) {
//     fetch(`https://api.spotify.com/v1/albums/${id}`, {
//         headers: {
//             Authorization: `Bearer ${access_token}`,
//         },
//         method: "GET",
//         // body: JSON.stringify(body)
//     }).then((res) => {
//         return res.json()
//     }).then((val) => {
//         console.log(val.tracks.items[0])
//     })
// }
// fetchWebApi()


