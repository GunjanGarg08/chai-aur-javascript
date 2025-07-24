// Basic Syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;

// Select the part ot copy, then press "Shift + Alt + Down_Arrow_Key" to copy it
switch (month) {
    case 1: // In case of string, you can write like; <case "jan":>
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default Case Match");
        break;
}
// By default kya hota hai ki jha par bhi aapki key match ho jaati hai uske aage ka sara code execute ho jata hai EXCEPT DEFAULT, issliye hum "break" lagate hai... taaki voh vhi par stop hokkar bhr aa jaay
