# description
Handy way to see sensor data in web. You will need to get MQTT broker first (see another repo)
You can setup border for sensor,refresh rate and sample length. Bar chart incremrnts only sensor value falls below boder.

# example

![sensor](https://user-images.githubusercontent.com/6892662/69011242-9abd2000-0979-11ea-9c9d-8ab638ec9264.PNG)

## Project setup
```
npm install

# FOR NODE SERVER
npm install express --save
npm install axios --save
npm install mqtt --save

#FOR PLOTS
npm install chart.js --save

```
## Run
node index.js

## Web
http://localhost:8081/root
