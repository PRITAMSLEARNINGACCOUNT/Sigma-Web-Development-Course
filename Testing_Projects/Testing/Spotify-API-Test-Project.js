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
let Artist_Object = {}

function Get_Artist(element) {
    let artists = ""
    element.artists.forEach((artist_name) => {
        artists += artist_name.name + " , "
        Artist_Object[`${artist_name.name}`] = artist_name.id   
    })
    artists = artists.slice(0, artists.length - 2)
    return artists
}



const Main_Function = async () => {
    const Timing = async () => {
        let date = Date()
        let Hour = Number.parseInt(date.slice(16, 18))
        let Miniutes = Number.parseInt(date.slice(19, 21))
        let Seconds = Number.parseInt(date.slice(22, 24))

        let miliseconds = 1000
        setInterval(() => {
            if (Seconds == 60) {
                Seconds = 0
                Miniutes += 1
            }
            if (Miniutes == 60) {
                Miniutes = 0
                Hour += 1
            }
            if (Hour == 24) {
                Hour = 0
            }
            Seconds += 1
            if (Hour >= 12 && Hour <= 18) {
                document.querySelector(".Header h1").innerHTML = "Good Noon"
            }
            else if (Hour < 12 && Hour >= 4) {
                document.querySelector(".Header h1").innerHTML = "Good Morning"
            }
            else if (Hour > 18 && Hour <= 21) {
                document.querySelector(".Header h1").innerHTML = "Good Afternoon"
            }
            else {
                document.querySelector(".Header h1").innerHTML = "Good Night"

            }

        }, miliseconds);

    }
    Timing()
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


    const Top_Items = async () => {
        let album_id = []
        let data = await fetch("https://api.spotify.com/v1/browse/new-releases", options)
        let json_value = await data.json()
        let main_section = document.querySelector(".main")
        json_value.albums.items.forEach((element) => {

            main_section.insertAdjacentHTML("afterbegin", `
            <div class="card  margin border-radius flexbox align-items">
            <img class="Image " src="${element.images[0].url}" alt="">
            <div class="playbutton flexbox justify-content align-items">
            <img src="SVG/Play.svg" alt="">
            </div>
            <div class="details ">
            <div class="title ">
            <h3 >
            ${element.name}
            </h3>
            </div>
            <div class="artists border-radius">
            ${Get_Artist(element)}
            </div >
            
            </div >
            
            </div >
            `)
            album_id.push(element.id)
        })

        return album_id
    }
    const Artist_Query = async (obj) => {
        let temp_main = document.querySelector(".main")
        document.querySelectorAll(".para p").forEach((mentele) => {
            mentele.addEventListener("click", (() => {
                if (mentele.innerHTML.trim().includes(",")) {
                    console.log()
                    if (obj.hasOwnProperty(mentele.innerHTML.trim().slice(0, mentele.innerHTML.trim().length - 1))) {

                        fetch(`https://api.spotify.com/v1/artists/${obj[mentele.innerHTML.trim().slice(0, mentele.innerHTML.trim().length - 1)]}`, options).then((artist_value) => {
                            return artist_value.json()
                        }).then((artist_json_val) => {
                            console.log(artist_json_val)
                        })
                    }
                }
                else {
                    if (obj.hasOwnProperty(mentele.innerHTML.trim())) {
                        fetch(`https://api.spotify.com/v1/artists/${obj[mentele.innerHTML.trim()]}`, options).then((artist_val) => {
                            return artist_val.json()
                        }).then((artist_json_val) => {
                            console.log(artist_json_val)
                        })
                    }

                }
                // alert(mentele)
            }))
        })
    }
    let ids = await Top_Items()
    const Hover_Effect = async () => {
        Array.from(document.getElementsByClassName("card")).forEach((element) => {
            element.addEventListener("click", () => {
                let imagesrc = element.getElementsByClassName("Image")[0].src
                let name = element.getElementsByTagName("h3")[0]
                let artists = element.getElementsByClassName("artists")[0]
                document.querySelector(".box").innerHTML = `<img src="${imagesrc}" alt="" class="innerimage  border-radius">
                <h3 class="Again_Title ">${name.innerHTML.trim()}</h3>
                <div class="againartist  flexbox">
                <div class="tracks ">
                    
                </div>
                <div class="para">
                            
                </div>
                </div>
                `
                Album_Query(ids, name.innerHTML.trim()).then((vl) => {
                    vl.forEach((element) => {
                        document.querySelector(".tracks").insertAdjacentHTML("afterbegin",
                            `
                        <strong>${element.name}
                        <div class="secondplaybutton flexbox justify-content align-items">
                        <img class="playimg" src="SVG/Play.svg" alt="">
                        </div>
                        </strong><br>`
                        )
                    })
                })

                const array = artists.innerHTML.trim().split(",")
                for (let index = 0; index < array.length; index++) {
                    if (index == 0) {
                        let ele = array[index]
                        document.querySelector(".para").insertAdjacentHTML("afterbegin", `<p>${ele}</p>`)

                    }
                    else {
                        let ele = array[index] + ","
                        document.querySelector(".para").insertAdjacentHTML("afterbegin", `<p>${ele}</p>`)
                    }

                }
                Artist_Query(Artist_Object)
            })

            // await Artist_Query(Artist_Object)
        })
    }
    await Hover_Effect()

    const Album_Query = async (ids, name) => {
        let Album_Id = ids
        for (let index = 0; index < Album_Id.length; index++) {
            let album_data = await fetch(`https://api.spotify.com/v1/albums/${Album_Id[index]}`, options)
            let album_data_json = await album_data.json()
            if (album_data_json.name == name) {
                return album_data_json.tracks.items
            }
        }
    }








}



console.log()


Main_Function()