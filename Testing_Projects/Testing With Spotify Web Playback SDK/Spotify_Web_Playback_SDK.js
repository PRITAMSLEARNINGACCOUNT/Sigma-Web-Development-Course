let client_id = '209d2f3c87754ca182e7fc50458b76c8'
let client_secret = 'dbfa1b250127486e95bd5e2f48653c8e'
let access_token = undefined
let authOptions = {
    method: "POST",

    body: 'grant_type=client_credentials',
    headers: {
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
        'Content-Type': 'application/x-www-form-urlencoded'
    },
}
async function Main_Function() {
    const Token_Generation = async () => {
        let fetched_data = await fetch("https://accounts.spotify.com/api/token", authOptions)
        let json = await fetched_data.json()
        access_token = json.access_token
        await setInterval(() => {
            Token_Generation()
        }, 3590 * 1000);
    }
    await Token_Generation()
    let options = {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${access_token}`,
        }
    }
    const Track_Query = () => {
        
        fetch("https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl", options).then((val) => {
            return val.json()
        }).then((json_value) => {
            console.log(json_value)
        })
    }
    Track_Query()

}
Main_Function()