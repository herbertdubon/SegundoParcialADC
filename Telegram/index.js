//Codigo de Telegram
process.env["NTBA_FIX_319"] = 1;
process.env["NTBA_FIX_319"] = 1;

const TelegramBot = require('node-telegram-bot-api');
const token = '588640837:AAEvr4iQtJXWf1PC7KDflNibX8l9e0YcV90';

var idChar = 211166639;

var portName = process.argv[2];
var SerialPort = require("serialport");
var miSerial = new SerialPort('COM6', {
  baudRate: 9600,
  autoopen: true
});

const bot = new TelegramBot(token, {
  polling: true
});

miSerial.setEncoding('utf8');

miSerial.on('data', function(data){

    var sensormax = 0;
    var sensormin = 0;

    Vactual = data.toString('utf8');

    if (Vactual > sensormax)
      sensormax = Vactual;

    if (Vactual < sensormin)
      sensormin = Vactual;
    console.log("Sensormax: ", sensormax);
    console.log("Sensormin: ", sensormin);

    //bot.sendMessage(chatId, 'Verificando Potenciómetro');
    //bot.sendMessage(chatId, data);
});
