import React, { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const yourNameRef = useRef("");
  const friendNameRef = useRef("");

  const getFriendshipMessage = () => {
    const yourName = yourNameRef.current?.value;
    const friendName = friendNameRef.current?.value;

    const encodedYourName = encodeURIComponent(yourName);
    const encodedFriendName = encodeURIComponent(friendName);
    console.log(encodedYourName + " " + encodedFriendName);
    const baseUrl = window.location.origin;
    const url = `${baseUrl}/message?yourName=${encodedYourName}&friendName=${encodedFriendName}`;
    window.location.href = url;

    // Perform any actions you need with the URL
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-violet-600">
      <div className="p-8 bg-white bg-opacity-30 border-2 border-white rounded-lg shadow-lg space-y-4">
        <h1 className="text-4xl font-bold text-center text-white">
          Friendship Day App
        </h1>
        <label htmlFor="yourName" className="block font-medium text-gray-100">
          Enter your name:
        </label>
        <input
          type="text"
          id="yourName"
          ref={yourNameRef}
          className="block w-full p-2 bg-transparent border rounded focus:outline-none focus:ring focus:border-pink-300 placeholder-gray-300 text-white"
          placeholder="Your Name"
        />
        <label htmlFor="friendName" className="block font-medium text-gray-100">
          Enter your friend's name:
        </label>
        <input
          type="text"
          id="friendName"
          ref={friendNameRef}
          className="block w-full p-2 bg-transparent border rounded focus:outline-none focus:ring focus:border-pink-300 placeholder-gray-300 text-white"
          placeholder="Friend's Name"
        />

        <p
          onClick={getFriendshipMessage}
          className="block w-full py-2 text-center text-white bg-pink-600 bg-opacity-70 rounded-lg hover:bg-opacity-80 transition duration-300 cursor-pointer mt-4"
        >
          Get Friendship Message
        </p>
      </div>
    </div>
  );
}
