// utils/messages.js
const messages = [
    "Wishing you a fantastic Friendship Day, {friendName}! From {yourName}",
    "Happy Friendship Day, {friendName}! May our bond grow stronger every day. - {yourName}",
    "On this special day, I want you to know how much your friendship means to me, {friendName}. - {yourName}",
    "Here's to the laughs, the memories, and the everlasting friendship we share, {friendName}. Happy Friendship Day! - {yourName}",
    "To the friend who has always been there, through thick and thin, Happy Friendship Day, {friendName}! - {yourName}",
    "A friend like you is a true treasure. Happy Friendship Day, {friendName}! - {yourName}",
    "In the journey of life, friends are the most precious companions. Happy Friendship Day, {friendName}! - {yourName}",
    "Here's to celebrating the beautiful bond we share, {friendName}. Happy Friendship Day! - {yourName}",
    "On this day, I want to express my gratitude for your unwavering friendship, {friendName}. Happy Friendship Day! - {yourName}",
    "From the bottom of my heart, I wish you a Friendship Day filled with joy and happiness, {friendName}. - {yourName}",
    "A friend like you is a ray of sunshine on a cloudy day. Happy Friendship Day, {friendName}! - {yourName}",
    "May our friendship continue to blossom and thrive, {friendName}. Happy Friendship Day! - {yourName}",
    "Through all the ups and downs, you've been by my side, {friendName}. Happy Friendship Day! - {yourName}"
  ];
  
  export function getRandomMessage(yourName, friendName) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    
    const personalizedMessage = randomMessage
      .replace('{yourName}', yourName)
      .replace('{friendName}', friendName);
  
    return personalizedMessage;
  }
  