let numb = document.getElementById('numb');

let btn = document.getElementById('send')

let text = document.getElementById('txt')

send.addEventListener('click', function(){
    
if(numb.value > 0){
text.value = 
`
1 x ${numb.value} = ${ 1 * numb.value}
2 x ${numb.value} = ${ 2 * numb.value}
3 x ${numb.value} = ${ 3 * numb.value}
4 x ${numb.value} = ${ 4 * numb.value}
5 x ${numb.value} = ${ 5 * numb.value}
6 x ${numb.value} = ${ 6 * numb.value}
7 x ${numb.value} = ${ 7 * numb.value}
8 x ${numb.value} = ${ 8 * numb.value}
9 x ${numb.value} = ${ 9 * numb.value}
10 x ${numb.value} = ${ 10 * numb.value}
`
}
})

