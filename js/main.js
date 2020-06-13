let allItems = document.querySelectorAll (".allTime"),
    cardinality = [],

    styleButton = document.querySelector (".styleSwitch"),
    styleButton__block = document.querySelector (".styleSwitch_block"),
    mainBlock = document.querySelector (".mainBlock"),
    middleLine = document.querySelectorAll (".line__middle"),
    reloadButton = document.querySelector (".reloadButton")


let style = {
  switch :(function(){
    let dark  = "#454545",
        light = "#e9e9e9"
    let i = 0
    return function () {
      console.clear ()
      i > 1 ? i=0 : i

      if (i == 0) { //Денек 

        mainBlock.style.background          = light
        styleButton__block.style.left       = "25px"
        styleButton__block.style.background = dark
        styleButton.style.background        = "rgba(200,200,200)"
        allItems.forEach ((a) => {
          a.style.color = dark
        })
        middleLine.forEach ((a) => {
          a.style.background = dark
        })

        console.log ("☀")
      } else { // Ночька
        
        mainBlock.style.background          = dark
        styleButton__block.style.left       = "0"
        styleButton__block.style.background = light
        styleButton.style.background        = "rgba(255,255,255,.2)"
        allItems.forEach ((a) => {
          a.style.color = light
        })
        middleLine.forEach ((a) => {
          a.style.background = light
        })

        console.log ("☾")
      }
      return i++
    }
  }()),
  reloadWindow:()=>{
    location.reload()
  }
}

style.switch ()
reloadButton.addEventListener ('click',()=> {
  style.reloadWindow()
})
styleButton.addEventListener ('click', () => {
  style.switch ()
})

let data = new Date (),
    hour = data.getHours (),
    min  = data.getMinutes (),
    sec  = data.getSeconds ()

setInterval (()=>{
  console.clear ()

  if (min == 60){min = 0;hour++}
  if (hour== 24){hour= 0}
  if (sec == 59){sec = 0;min++}else{sec++}

  console.log (`${hour}:${min}:${sec}`)
  
  let hourString    = hour.toString (),
      minString     = min.toString (),
      secString     = sec.toString (),
      allTimeString = [hourString,minString,secString],
      arrTimeString = []
      
  allTimeString.forEach ((i) => {
    i.length < 2 ? i = "0" + i:i
    for (let a of i) {
      Number (a)
      arrTimeString.push (Number (a))
    }
  })

  clockRendering (...arrTimeString)
 
},1000)
function clockRendering (hl,hr,ml,mr,sl,sr) {
  allItems[0].style.marginTop = `${-40*hl}px`
  allItems[1].style.marginTop = `${-40*hr}px`
  allItems[2].style.marginTop = `${-40*ml}px`
  allItems[3].style.marginTop = `${-40*mr}px`
  allItems[4].style.marginTop = `${-40*sl}px`
  allItems[5].style.marginTop = `${-40*sr}px`
}
