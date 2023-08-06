// pages/index.js
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [yourName, setYourName] = useState('');
  const [friendName, setFriendName] = useState('');

  const handleYourNameChange = (e) => {
    setYourName(e.target.value);
  };

  const handleFriendNameChange = (e) => {
    setFriendName(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-violet-600">
    
      <div className="p-8 bg-white bg-opacity-30 border-2 border-white rounded-lg shadow-lg space-y-4">
        <h1 className="text-4xl font-bold text-center text-white">Friendship Day App</h1>
        <label htmlFor="yourName" className="block font-medium text-gray-100">
          Enter your name:
        </label>
        <input
          type="text"
          id="yourName"
          value={yourName}
          onChange={handleYourNameChange}
          className="block w-full p-2 bg-transparent border rounded focus:outline-none focus:ring focus:border-pink-300 placeholder-gray-300 text-white"
          placeholder="Your Name"
        />
        <label htmlFor="friendName" className="block font-medium text-gray-100">
          Enter your friend's name:
        </label>
        <input
          type="text"
          id="friendName"
          value={friendName}
          onChange={handleFriendNameChange}
          className="block w-full p-2 bg-transparent border rounded focus:outline-none focus:ring focus:border-pink-300 placeholder-gray-300 text-white"
          placeholder="Friend's Name"
        />
        <Link
          href={`/message?yourName=${encodeURIComponent(yourName)}&friendName=${encodeURIComponent(friendName)}`}
        >
          <p className="block w-full py-2 text-center text-white bg-pink-600 bg-opacity-70 rounded-lg hover:bg-opacity-80 transition duration-300 cursor-pointer mt-4">
            Get Friendship Message
          </p>
        </Link>
      </div>
    </div>
  );
}
