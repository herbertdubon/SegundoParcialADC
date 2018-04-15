//Codigo de Telegram
process.env["NTBA_FIX_319"] = 1;
process.env["NTBA_FIX_319"] = 1;

const TelegramBot = require('node-telegram-bot-api');
const token = '588640837:AAEvr4iQtJXWf1PC7KDflNibX8l9e0YcV90';

var idChar = 211166639;
var portName = process.argv[2];
var SerialPort = require("serialport");
var miSerial = new SerialPort('COM3', {
   baudRate: 9600,
   autoopen: true
});

const bot = new TelegramBot(token, {polling: true});



bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Verificando Potenciómetro');
  var respuesta = msg.text;
  if (respuesta == 'encender')
  {
    miSerial.setEncoding('utf8');
    miSerial.on('data', function(data)
    {

      //console.log('Data:', data);
      var datanew = 10;
      while (data < datanew) {
        sensormin = data;
        console.log('Data:', sensormin);
        data = datanew;
      }

      //bot.sendMessage(idChar, "Sensor Max: " +sensormax);
      //bot.sendMessage(idChar, "Sensor Min: " +sensormin);
    });
  }
});
