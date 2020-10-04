// best practice
solve = s => Math.max(...s.match(/\d+|$/g))

//my difficult decision (its bad practice :D)
function solve(s) {
    let arr = "";
    for(let i = 0; i < s.length; i++){
        while (/\d/.test(s[i])) {
            arr += s[i]
            i++;
        }
        arr += " "
    }
    let arr2 = arr.split(" ")
    let x = 0;
    for(let i = 0; i < arr2.length; i++){
        if(typeof Number(arr2[i]) === "number" && Number(arr2[i]) > x){
            x = Number(arr2[i]);
        }
    }
    return x
}

console.log(solve("gh12cdy695m1"))