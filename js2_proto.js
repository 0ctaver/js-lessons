/*
const artist = new Object ({
  name: 'Liam',
  age: 40,
  music: function() {
    console.log('THE DAY IS MY ENEMY, THE NIGHT IS MY FRIEND')
  }
})

Object.prototype.playThunder = function() {
  console.log('I hear thunder but there\'s no rain This kind of thunder breaks walls and window pane')
}

const grimes = Object.create(artist);
grimes.name = 'grimes'

grimes.playThunder()
*/

function getArt() {
  let info = prompt ('What do you want to see?');
  if (info == 'sky' || info == 'clouds') {
    document.write("<img src=\"https://sun2.43222.userapi.com/VYWE8OYmgTNdSpGK7utYXaRJFCFtRPwn2bMn4g/x4vw_6d4FJ0.jpg\"></img>");
  }
  else if (info == 'sun' || info == 'something beautiful') {
    document.write("<img src=\"https://sun9-38.userapi.com/c840236/v840236460/35e96/GsYdagWQ1kw.jpg\"></img>");
  }
  else if (info == 'girl' || info == 'anime') {
document.write("<img src=\"https://sun1.43222.userapi.com/CwaX1XeN8JPgNEIoeMBb9OFEFse_KJgz0Mu9pA/sARV93qOIIs.jpg\"></img>");
  }
  else if (info == 'cat') {
    document.write("<img src=\"https://sun9-14.userapi.com/c824603/v824603562/b9944/-OOy3Iejn0U.jpg\"></img>");
  } else {
    alert('I can\'t find this, but I can show you a cat!');
    document.write("<img src=\"https://sun9-14.userapi.com/c824603/v824603562/b9944/-OOy3Iejn0U.jpg\"></img>");
  }
}


getArt();
