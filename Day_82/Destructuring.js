console.log("Firstly I Am Going To Destruct An Array & Then I Am Going To Destruct An Object.");
let array = ["First_Value", "Second_Value"];
let [Destruct_1, Destruct_2] = array;
console.log("Now I Am Printing The Values Of Those Two Varriables Destructed From That Array.", Destruct_1, Destruct_2);
console.log("Now I Am Going To Demonstrate Same Concept Using A Different Example.");
let array_2 = ["First Value", "Second_Value", "Third Value", "Fourth_Value", "Fifth_Value"];
let [a, b, ...rest] = array_2;
console.log("And Now I Am About To Print The Second Demonstration.");
console.log(a, b, rest);
console.log("So After Array Now I Am Going To Demonstrate Destructuring Using On Objects.");
let object = {
    "obj_1": "Value_1",
    "obj_2": "Value_2",
    "obj_3": "Value_3",
};
let { obj_1, obj_2, obj_3 } = object;
console.log("Now Object Destructing Has Been Done And Here Are The Values Seperated By Object Destructing." + obj_1 + obj_2 + obj_3);
console.log("Now I Am Going To Demonstrate Same Concept Using A Different Example.");
let object_2 = {
    "Key_1": "This Is Value 1",
    "Key_2": "This Is Value 2",
    "Key_3": "This Is Value 3",
    "Key_4": "This Is Value 4",
    "Key_5": "This Is Value 5",
};
let { Key_1, Key_2, ...rest_objects } = object_2;
console.log("And Now I Am About To Print The Second Demonstration.");
console.log(Key_1, Key_2, rest_objects)



