function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){

    function getDistance(speed, distance){
        let time = distance / speed
        return time
    }

    if (dolphin === true){
        sharkSpeed /= 2
    }

    if (getDistance(youSpeed, pontoonDistance) < getDistance(sharkSpeed, sharkDistance)){
        return "Alive!"
    }
    return "Shark Bait!"
}

console.log(shark(12, 50, 4, 8, true))

//best practice
// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//     if(dolphin){
//         sharkSpeed /= 2;
//     }
//     return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
// }