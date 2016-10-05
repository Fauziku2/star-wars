$(document).ready(function () {
  var darthAppear // must declare?
  var hits = 0
  var time
  var gameSpeed
  var timeOut // must declare?
  var speed  // must declare?
  var topScore = 0 // topScore = hits?
  var darthSound
  // var darthStop

  // make darth vader appear on random box
  function darthFunction () {
    var x = Math.floor(Math.random() * 9)
    $('.box.darth').removeClass('darth')
    $('.box').eq(x).addClass('darth')
  // $('.box.darth').one('click', killDarth)
    $('.box').off()
    $('.box.darth').one('click', killDarth)
    clearInterval(darthAppear)
    darthAppear = setInterval(darthFunction, gameSpeed)
  }
  // kill darth vader
  function killDarth () {
    hits++
    $('.hits').text('Hits: ' + hits)
    $(this).removeClass('darth')
    $('.box').off()
  }
  // start game
  $('.start').on('click', startGame)
  function startGame () {
    hits = 0
    time = 45
    gameSpeed = 1000
    // darthSound()
    speed = setInterval(darthSpeed, 500)
    darthAppear = setInterval(darthFunction, gameSpeed)
    timeOut = setInterval(gameTime, 1000)
  }
  // stop the game
  $('.stop').on('click', darthStop)
  function darthStop () {
    clearInterval(darthAppear)
    clearInterval(timeOut)
    clearInterval(speed)
    $('.box').removeClass('darth')
    $('.time').text('Time: 0s')
    // $('.hits').text('Hits: 0')
  }
  // timer
  function gameTime () {
    $('.time').text('Time: ' + time-- + 's')

    if (time < 0) {
      if (hits > topScore) {
        topScore = hits
        $('.topScore').text('Top Score: ' + topScore)
      }
      // darthStop()
      // alert('Score: ' + hits)
      $('.box').removeClass('darth')
      $('.box').off()
      darthStop()
    }
  }
  // speed at which darth vader appear over time
  // speed = setInterval(darthSpeed, 500)
  function darthSpeed () {
    gameSpeed = gameSpeed - 7
  }
  // function darthSound () {
  //   var x = new Audio('http://www.digitpress.com/dpsoundz/mp3/dp_starwars_darkside.mp3')
  //   x.loop = true
  //   x.play()
  // }
})
