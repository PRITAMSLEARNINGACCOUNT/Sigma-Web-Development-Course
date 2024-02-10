class Social_Media {
    constructor(name, email, password) {
        this.Profile_Name = name
        this.Profile_Email = email
        this.Profile_Password = password
    }

}
class Facebook extends Social_Media {
    Info(users, developer) {
        this.Users = users
        this.Developer = developer
    }
    Show_Everything() {
        if (this.Users != undefined) {
            console.log(`You Have Logged Into Facebook Which Is Currently Populated Among ${this.Users} Users And This Platform Is Developed By ${this.Developer}`)
            console.log(`You Have Successfully Logged Into Facebook.`)
            console.log(`Your Profile Name Is ${this.Profile_Name} And Your Logged In Email Address Is ${this.Profile_Email}`)
        }
        else {
            console.log(`You Have Successfully Logged Into Facebook.`)
            console.log(`Your Profile Name Is ${this.Profile_Name} And Your Logged In Email Address Is ${this.Profile_Email}`)
        }
    }
}
let User_1 = new Facebook("Pritam Saha", "pritamstech@hotmail.com", "1234")
User_1.Info(20000000, "Meta")
User_1.Show_Everything()