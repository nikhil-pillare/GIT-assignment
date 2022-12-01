let n = 6;
let str = nrupul;

let sum = "";
for(let i=0; i<str.length; i++){
    sum += str[i]+"";
}

let a = "";
for(let i = str.length-1; i>=0; i--){
    a+= str[i]+"";
}

if(sum !==a){
    console.log("No")
}
else{
    console.log("Yes")
}