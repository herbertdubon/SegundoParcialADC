//Codigo Arduino
<<<<<<< HEAD
=======

>>>>>>> 28242e52a6485c02f45ef0256fd3887a57047b08
int numReadings = 10;
int readings[10];
int index = 0;

int sensorMax = 0;
int sensorMin = 0;

void setup()
{
  Serial.begin(9600);

<<<<<<< HEAD
  //pinMode(10, OUTPUT);
  //pinMode(11, OUTPUT);
=======
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);
>>>>>>> 28242e52a6485c02f45ef0256fd3887a57047b08

  sensorMax = analogRead(A0)/100;
  sensorMin = sensorMax;
}

void loop()
{
  // MEASUREMENTS
  // every iteration of loop makes one additional measurement,
  // so the first 10 readings will display too low average
  int value = analogRead(A0)/100;
<<<<<<< HEAD
  //readings[index] = value;
  //index++;
  //if (index >= numReadings) index = 0; 
=======
  readings[index] = value;
  index++;
  if (index >= numReadings) index = 0; 
>>>>>>> 28242e52a6485c02f45ef0256fd3887a57047b08

  // DO SOME MATH
  if (value > sensorMax) sensorMax = value;
  if (value < sensorMin) sensorMin = value;

  //running average
<<<<<<< HEAD
  //float total = 0;
  //for (int i = 0; i< numReadings; i++) total += readings[index];
  //float average = total /numReadings;         
=======
  float total = 0;
  for (int i = 0; i< numReadings; i++) total += readings[index];
  float average = total /numReadings;         
>>>>>>> 28242e52a6485c02f45ef0256fd3887a57047b08

  // OUTPUT TO SERIAL
  Serial.print("\tMIN:\t");
  Serial.print(sensorMin);
  Serial.print("\tMAX:\t");
  Serial.print(sensorMax);
  Serial.print("\tACT:\t");
  Serial.println(value); 

<<<<<<< HEAD
  delay (500);
}
=======
  delay (100);
}
>>>>>>> 28242e52a6485c02f45ef0256fd3887a57047b08
