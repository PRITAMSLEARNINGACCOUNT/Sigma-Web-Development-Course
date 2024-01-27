
const Main_Function = async () => {

    const Search_Query = async () => {
        // let Query_String = prompt("Enter Your Query??")
        let Query = await fetch(`https://api.spotify.com/v1/search?q=${Query_String.replace(" ", "+")}&type=album`, options)
        let Json = await Query.json()
        console.log(Json.albums.items)
        Json.albums.items.forEach((element) => {
            console.log(element)
            Album_Id.push(element.id)
        })
        // Json.tracks.items.forEach(element => {
        //     console.log(element.album.id)
        //     Album_Id.push(element.album.id)
        // })
    }
    // await Search_Query()
    const Album_Query = async () => {
        let images = []
        let Album_Id = ["7zeA4kJCW5R6Qef90r2zQM", "5j0uoFLuAcXYz2jTWPovHX", "2AhoXwTvHcGjBwNMDOwEZp", "4UWdCcyQ9m7p7kaKFMIq2Q", "5qBY1K1C7QoXWlmZ2yvV5L", "2lgR24Cpe5uu97frAYCAYe", "3l0neQyP1UjjSFoyCtxS75", "7ujJhfGKy2qKe2OBQqw173", "06griqizTDBczBxvgB91el", "6i0fypW09DBEBiMxqXXu8K", "0wJXk6rpJXYEyVVRP6vsZw", "2JTcQYxkWCph2DFYHljgnS", "451oFZKSO5YhQGlGLkV00g", "7zvmmYySo3FPuwEiKv7xSF", "1Vkdf3mTQV4RakJBz0HbgT", "4hn7BSt8k7zIyyaNkkUXlJ", "2IP7pUCOazIHCAbK9eJNcu", "23Dast9Z49J73VBjh3JulP", "0nUDc18ivjvaNEGh7iJKck", "5k7KeArB1J9JPCRC12Xz7j"
        ]
        for (let index = 0; index < Album_Id.length; index++) {
            console.log(Album_Id[index])
            let album_data = await fetch(`https://api.spotify.com/v1/albums/${Album_Id[index]}`, options)
            let album_data_json = await album_data.json()
            console.log(album_data_json)
        }


    }
    await Album_Query()

    const Track_Query = async () => {
        for (let index = 0; index < Album_Id.length; index++) {
            let tracks = await fetch(`https://api.spotify.com/v1/albums/${Album_Id[index]}/tracks`, options)
            let tracks_json = await tracks.json()
            tracks_json.items.forEach((element) => {
                console.log(element.name)
            })
            console.log("\n\n\n\n\n\n\n\n\n\n\n")

        }

    }
    // await Track_Query()
}
Main_Function()