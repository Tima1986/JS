var str = 'abcde'
alert(str[0])
alert(str[1])
alert(str[4])
for (var x of str) {
    if (x === 'a'||x ==='b'||x ==='e')
        console.log('Я знаю эту букву ' + x)
}