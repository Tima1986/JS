var str = 'Как однажды Жак звонарь сломал фонарь головой'
var arr = str.split(" ")
var el = arr.pop()
arr.splice(4, 0, el)
var strResult = arr.join(" ")
alert('Было:  ' + str + "\n" + 'Стало: ' + strResult)