//Selector Function
const selector = name => document.querySelector(name)

//Get All Scarfs
const hr = selector('#hr')
const min = selector('#min')
const sec = selector('#sec')
// Set Deg
const deg = 6

setInterval(() => {
  //Get Time
  let day = new Date()
  let hh = day.getHours() * 30
  let mm = day.getMinutes() * deg
  let ss = day.getSeconds() * deg

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`
  min.style.transform = `rotateZ(${mm}deg)`
  sec.style.transform = `rotateZ(${ss}deg)`
},1000)
