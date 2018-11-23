const {
    Expo
} = require("expo-server-sdk");
const express = require('express');
const PORT = 2345;

// Det her endpoint kaldes fra telefonen.

const app = express();

// Middleware
app.use(express.json());

app.listen(PORT, () => console.log('Server started... listening on port: ' + PORT));

const users = [];
// Til test. Sender hardcoded brugernavn.
let userID = 1;

app.post('/register', (req, res) => {
    const newUser = req.body;
    //Kun til at test - Fjernes
    newUser.id = newUser.id + (Math.floor(Math.random() * 100)) //For "alene test"
    const index = users.findIndex(u => u.id === newUser.id);
    if (index >= 0) { //Remove user if he already exists
        users.splice(index, 1);
    }
    if (users.length > 0) {
        notifyUsers(users, newUser); // Når jeg logger på så kommer jeg på som newUser og det sendes ud til de andre brugere.
    }
    users.push(newUser);
    res.json(newUser);

});

async function notifyUsers(users, newUser) {
    let expo = new Expo();
    // Create the messages that you want to send to clents
    let messages = [];
    for (let user of users) { // iterarer gennem listen af users.
      // Kun ved valid token.  
      if (!Expo.isExpoPushToken(user.pushToken)) {
        console.error(`Push token ${user.pushToken} is not a valid Expo push token`);
        continue;
      }
      messages.push({
        to: user.pushToken, // Token jeg sender.
        sound: 'default',
        body: 'new User logged in',
        data: newUser,
      })
    }
    console.log("messages",messages);
    // Sendes som chunks. 
    let chunks = expo.chunkPushNotifications(messages);
    console.log("Chunks",chunks.length)
    let tickets = [];
   
    for (let chunk of chunks) {
      try {
        let ticketChunk = await expo.sendPushNotificationsAsync(chunk); // Her sendes push notifikationer.
        tickets.push(...ticketChunk); //Not used in this example
      } catch (error) {
        console.error(error);
      }
    };
   };
   

// ngrok http 2345
// Larses server: http://00ede316.ngrok.io

// Test server: send med postman
// { "id": "me","pushToken":"kdjkldf","latitude": 55.7, "longitude": 12.44 }