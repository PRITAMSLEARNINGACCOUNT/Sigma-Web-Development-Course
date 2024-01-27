function Create_New_Card(Title, Channel_Name, Duration, Views, Months_Old, Thumbnail_Link) {
    element = document.getElementsByClassName("Container")[0].insertAdjacentHTML("beforeend", `<div class="Card">
<!-- <div class="Image-With-Title"> -->

<div class="Image">
    <div class="Thumbnail">
        <img src="${Thumbnail_Link}"
            alt="Image Not Founded From The Server">
        <div class="Duration">
            ${Duration}
        </div>
    </div>
    <div class="After_Image">
        <div class="Title">
            ${Title}
        </div>
        <div class="After_Title">

            <div class="Same" id="Channel_Name">
                ${Channel_Name} •
            </div>
            <div class="Same" id="Views">
                ${Views} Views •
            </div>
            <div class="Same" id="Old">
                ${Months_Old} Ago
            </div>
        </div>
    </div>
</div>

<!-- </div> -->
</div>`)

}
const Views_Function = (views) => {
    let Temp_Views = parseInt(views)
    if (Temp_Views >= 100000 && Temp_Views < 1000000) {
        views = views.slice(0, 3) + "K"
        return views
    }
    else if (Temp_Views >= 10000 && Temp_Views < 100000) {
        views = views.slice(0, 2) + "K"
        return views
    }
    else if (Temp_Views >= 1000 && Temp_Views < 10000) {
        views = views.slice(0, 1) + "K"
        return views

    }
    else if (Temp_Views >= 1000000) {
        views = views.slice(0, 3) + "M"
        return views

    }
    else {
        return views
    }
}
let title = prompt("Enter The Title Of The Video??")
let channel_name = prompt("Enter The Channel Name??")
let views = prompt("Enter The Views??")
let months_old = prompt("Enter How Many Months Or Years Old This Video Is??")
let duration = prompt("Enter The Duration Of The Video??")
let image_link = prompt("Enter The Link Of The Thumbnail??")
Create_New_Card(title, channel_name, duration, Views_Function(views), months_old, image_link)




