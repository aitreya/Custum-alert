// CSS declaration starting

let calertcss = `#mainalert {
    height: 100%;
    width: 100%;
    border: #000 2px solid;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-size: 1.2rem;
    margin: 0%;
    z-index: 5;
    position: fixed;
    background: rgba(0, 0, 0, 0.21);
    display: none;
}

#calertsecondarycontainer{
    height: 30%;
    max-height: 300px;
    width: 50%;
    max-width: 500px;
    margin: 10px auto 0 auto;
    border: black 3px solid;
    border-radius: 5px;
    box-shadow: rgb(216, 230, 30) 4px 4px 10px;
    background: rgb(12, 24, 48);
    text-align: center;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-width: 300px;
    min-height: 200px;
    /* padding: 7px 5px; */
}

#calertsecondarycontainer::-webkit-scrollbar {width: 5px;}
#calertsecondarycontainer::-webkit-scrollbar-track {background: transparent;}
#calertsecondarycontainer::-webkit-scrollbar-thumb {background: rgba(217, 230, 30, 0.63);}
#calertsecondarycontainer::-webkit-scrollbar-thumb:hover {background: #555;}

#alertokbtn{
    width: 40%;
    padding: 5px 10px;
    border-radius: 1rem;
    font-family: cursive;
    font-size: 1.1rem;
    border: rgb(216, 230, 30) 4px dotted;
    background: transparent;
    color: white;
}

#alertokbtn:hover{
    transform: scale(1.1);
    border: rgb(216, 230, 30) 4px solid;
    outline: none;
    font-size: 1.4rem;
    padding: 3px 8px;
}

#alertmsg{
    color: white;
    margin: 0;
}`

// CSS declaration ended

var mainalertelement = document.createElement('div')
mainalertelement.id = 'mainalert'

document.body.appendChild(mainalertelement)

let okbtn = document.createElement('button')
okbtn.id = 'alertokbtn'
okbtn.value = 'OK'
okbtn.innerText = 'OK'

let alertmsg = document.createElement('h5')
alertmsg.id = 'alertmsg'

let secondaryContainer = document.createElement('div')
secondaryContainer.id = 'calertsecondarycontainer'

let styless = document.createElement('style')
styless.innerText = calertcss
document.body.appendChild(styless)


function c_alert(str) {
    str = str.toUpperCase();
    sendalert(str)
}


function sendalert(msg) {
    document.body.style.overflow = 'hidden'
    mainalertelement.style.display = 'inline'
    alertmsg.innerText = msg
    mainalertelement.appendChild(secondaryContainer)
    secondaryContainer.appendChild(alertmsg)
    secondaryContainer.appendChild(okbtn)
}

function okbtnpressed(){
    document.body.style.overflow = 'auto'
    mainalertelement.style.display = 'none'
}

okbtn.addEventListener('click',()=>{
    okbtnpressed()
})
