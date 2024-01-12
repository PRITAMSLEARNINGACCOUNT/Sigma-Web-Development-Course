alert("In This Programme I Am Going To Demonstrate For In Loop By Using An Object")
let Dict = {
    "Name": "Pritam",
    "Surname": "Saha",
    "University Name": "Brainware University",
    "Student Code": "BWU/BCA/23/152",
    "Programme Name": "BCA",
}
for (const key in Dict) {
    alert("This Is Under For In Loop")
    alert(key + " : " + Dict[key])
}