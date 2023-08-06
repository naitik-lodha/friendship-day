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
  "Through all the ups and downs, you've been by my side, {friendName}. Happy Friendship Day! - {yourName}",
  "Friendship isn't about who you've known the longest; it's about who walked into your life and said, 'I'm here for you.' Happy Friendship Day, {friendName}! - {yourName}",
  "On this special occasion, I want to raise a toast to our unbreakable bond, {friendName}. May our friendship always shine brightly. Happy Friendship Day! - {yourName}",
  "Life is better with a friend like you by my side. Here's to another year of laughter, adventure, and unforgettable moments. Happy Friendship Day, {friendName}! - {yourName}",
  "Friends like you make the world a better place. Wishing you a day filled with love, laughter, and countless joyful memories. Happy Friendship Day, {friendName}! - {yourName}",
  "To the friend who knows all my secrets and still loves me, Happy Friendship Day, {friendName}! Thank you for being the truest confidant. - {yourName}",
  "Through thick and thin, our friendship has stood the test of time. Here's to many more years of shared experiences and cherished moments. Happy Friendship Day, {friendName}! - {yourName}",
  "In the garden of life, friends are the most beautiful blooms. Thank you for adding color and fragrance to my world. Happy Friendship Day, {friendName}! - {yourName}",
  "Cheers to the endless conversations, the inside jokes, and the countless memories we've created together. Wishing you a fantastic Friendship Day, {friendName}! - {yourName}",
  "Distance may separate us, but our hearts remain connected by the strong thread of friendship. Here's to bridging the gap and celebrating our bond. Happy Friendship Day, {friendName}! - {yourName}",
  "Your friendship is a priceless gift that I cherish every day. May our journey together be filled with happiness, love, and unforgettable adventures. Happy Friendship Day, {friendName}! - {yourName}",
  "To the person who lifts me up when I'm down and celebrates with me in times of joy, Happy Friendship Day, {friendName}! Thank you for being an incredible friend. - {yourName}",
  "As we celebrate this day, I'm reminded of all the wonderful moments we've shared. Here's to many more years of laughter, support, and camaraderie. Happy Friendship Day, {friendName}! - {yourName}",
  "Through all the twists and turns of life, your friendship has been my constant anchor. May our bond grow stronger with each passing day. Happy Friendship Day, {friendName}! - {yourName}",
  "Friendship is the glue that holds our hearts together, even when we're miles apart. Sending you warm wishes and a heartfelt embrace on this special day. Happy Friendship Day, {friendName}! - {yourName}",
  "Our journey as friends has been a remarkable one, filled with shared dreams, heartfelt conversations, and unwavering support. Here's to us and the beautiful connection we share. Happy Friendship Day, {friendName}! - {yourName}",
  "Just like a fine wine, our friendship gets better with time. Thank you for being the kind of friend I can always count on. Happy Friendship Day, {friendName}! - {yourName}",
  "Wishing you a day filled with smiles, laughter, and the company of cherished friends. Happy Friendship Day, {friendName}! - {yourName}",
  "May our friendship be a source of strength, comfort, and endless joy. Here's to many more unforgettable moments together. Happy Friendship Day, {friendName}! - {yourName}",
  "In the tapestry of life, you are the thread that adds color and beauty. Thank you for being a wonderful friend. Happy Friendship Day, {friendName}! - {yourName}",
  "To the friend who has seen me at my best and my worst, thank you for your unwavering support and love. Happy Friendship Day, {friendName}! - {yourName}",
  "Friendship is the sweet melody that makes life's journey harmonious. Here's to creating more beautiful music together. Happy Friendship Day, {friendName}! - {yourName}",
  "Your friendship is like a warm embrace on a chilly day – comforting and heartwarming. Wishing you a truly delightful Friendship Day, {friendName}! - {yourName}",
  "Through all the seasons of life, your friendship remains a constant source of joy and inspiration. Cheers to us and the beautiful journey we've shared. Happy Friendship Day, {friendName}! - {yourName}",
  "With you by my side, even the ordinary moments turn into extraordinary memories. Here's to a day filled with laughter, fun, and unforgettable experiences. Happy Friendship Day, {friendName}! - {yourName}",
  "To the friend who brings out the best in me, thank you for your unwavering positivity and encouragement. Happy Friendship Day, {friendName}! - {yourName}",
  "As we celebrate this special day, I'm reminded of how blessed I am to have you as my friend. May our bond continue to flourish and thrive. Happy Friendship Day, {friendName}! - {yourName}",
  // ...
];

export function getRandomMessage(yourName, friendName) {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];

  const personalizedMessage = randomMessage
    .replace('{yourName}', yourName)
    .replace('{friendName}', friendName);

  return personalizedMessage;
}
