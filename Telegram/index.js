process.env["NTBA_FIX_319"] = 1;
process.env["NTBA_FIX_319"] = 1;

const TelegramBot = require('node-telegram-bot-api');
var serialport = require("serialport");
const token = '588640837:AAEvr4iQtJXWf1PC7KDflNibX8l9e0YcV90'; //token de acceso del bot
var idChar = 211166639;
<<<<<<< HEAD
var miSerial = new serialport("COM3", {
=======

var portName = process.argv[2];
var SerialPort = require("serialport");
var miSerial = new SerialPort('COM6', {
>>>>>>> 940858923d6a367598be63ab7a0afe43093d760f
  baudRate: 9600,
  autoOpen: true
});

const bot = new TelegramBot(token, {
  polling: true,
});

miSerial.setEncoding('utf8');
miSerial.on('data', function(data){
  //console.log(data)
  x =0;
  max = 0;
  min = 10;
  if (data[0] == '0'){
    //console.log("El valor es 0");
    //bot.sendMessage(idChar, "El valor es 0");
  }else if (data[0] == '1'){
    //console.log("El valor es 1");
    //bot.sendMessage(idChar, "El valor es 1");
    x = 1;
  }else if (data[0] == '2'){
    //console.log("El valor es 2");
    //bot.sendMessage(idChar, "El valor es 2");
    x = 2;
  }else if (data[0] == 'El valor es 3'){
    //console.log("3");
    //bot.sendMessage(idChar, "El valor es 3");
    x = 3;
  }else if (data[0] == '4'){
    //console.log("El valor es 4");
    //bot.sendMessage(idChar, "El valor es 4");
    x = 4;
  }else if (data[0] == '5'){
    //console.log("El valor es 5");
    //bot.sendMessage(idChar, "El valor es 5");
    x = 5;
  }else if (data[0] == '6'){
    //console.log("El valor es 6");
    //bot.sendMessage(idChar, "El valor es 6");
    x = 6;
  }else if (data[0] == '7'){
    //console.log("El valor es 7");
    //bot.sendMessage(idChar, "El valor es 7");
    x = 7;
  }else if (data[0] == '8'){
    //console.log("El valor es 8");
    //bot.sendMessage(idChar, "El valor es 8");
    x = 8;
  }else if (data[0] == '9'){
    //console.log("El valor es 9");
    //bot.sendMessage(idChar, "El valor es 9");
    x = 9;
  }else if (data[0] == '10'){
    //console.log("El valor es 10");
    //bot.sendMessage(idChar, "El valor es 9");
    x = 10;
}

if(x > max){
    max = x;
  }else if (x < min) {
    min = x;
}
  console.log("El valor maximo es: "+ max)
  console.log("El valor minimo es: "+ min)
  console.log("El valor actual es: "+ x)
  bot.sendMessage(idChar, "El valor maximo es "+ max);
  bot.sendMessage(idChar, "El valor minimo es "+ min);
  bot.sendMessage(idChar, "El valor actual es "+ x);
});
