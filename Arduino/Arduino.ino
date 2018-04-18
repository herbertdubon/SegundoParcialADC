

void setup() {
Serial.begin(9600);
}

void loop() {
  
int value =analogRead(A0)/100;
Serial.println(value);
delay(4000);
}
