const names =['abul','babul','cabul','abul','dabul','ebul','fabul','babul','gabul','dabul','abul']
function removeDuplicate(names){
    const unique =[];
    for (const element of names) {
    
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names)
console.log(uniqueNames);