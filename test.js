let text = document.getElementById('text')
let chbtn = document.getElementById('chbtn')
let chbtnD = document.getElementById('chbtnD')

chbtn.addEventListener('click',()=>{
    c_alert(text.value)
})

chbtnD.addEventListener('click',()=>{
    alert(text.value)
})