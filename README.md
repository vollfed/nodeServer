# description
Handy way to see sensor data in web browser. You will need to get MQTT broker to get this working or use public one. ( For custom see another repo).
You can setup border for sensor value, refresh rate and sample length. Bar chart increments only if sensor value falls below border.

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
