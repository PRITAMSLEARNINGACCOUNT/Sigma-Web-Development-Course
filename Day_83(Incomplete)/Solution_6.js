let Vowels = ["a", "e", "i", "o", "u"];
function Vowel_Counter() {
    let string = "Aritra";
    let Vowel_Count = 0;
    for (const char of string) {
        for (let index = 0; index < Vowels.length; index++) {
            if (char.includes(Vowels[index]) || char.includes(Vowels[index].toUpperCase())) {
                Vowel_Count++;
            }
        }
    }
    if (Vowel_Count == 0) {
        console.log("Your Given String Doesn't Consist Any Vowel")
    }
    else {
        console.log(`Your Given String Consists ${Vowel_Count} Vowels`)
    }

}
Vowel_Counter()