function deleteSymbol(str){
    let strNew=""
for (let i=0; i<str.length; i++){
    if (str.charCodeAt(i)<1040||str.charCodeAt(i)>1103){
        strNew+=""
    }
    else {
        strNew+=str[i]    }
}
console.log(strNew)
}
deleteSymbol("Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик")