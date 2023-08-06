// pages/message.js
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { getRandomMessage } from "../utils/messages";

export default function Message() {
  const router = useRouter();
  const { yourName, friendName } = router.query;

  const yourMessage = getRandomMessage(yourName, friendName);

  const copyUrlToClipboard = () => {
    const encodedYourName = encodeURIComponent(yourName);
    const encodedFriendName = encodeURIComponent(friendName);
    const baseUrl = window.location.origin;
    const url = `${baseUrl}/message?yourName=${encodedYourName}&friendName=${encodedFriendName}`;

    try {
      navigator.clipboard.writeText(url);
      alert("URL copied to clipboard!");
    } catch (error) {
      console.error("Unable to copy URL:", error);
    }
  };

  useEffect(() => {
    // This effect will run only on the client side
    // You can perform any client-side actions here
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-violet-600">
      <Head>
        <title>{`Friendship Day App for ${friendName}`}</title>
        <meta
          name="description"
          content={`Celebrate Friendship Day with a personalized message for ${friendName}.`}
        />
        <meta property="og:title" content="Friendship Day App" />
        <meta
          property="og:description"
          content={`Celebrate Friendship Day with a personalized message for ${friendName}.`}
        />
    
        <meta property="og:type" content="website" />
      </Head>
      <motion.div
        initial={false} // Disable initial animations
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="p-8 bg-white mx-8 max-w-4xl bg-opacity-30 border-2 border-white rounded-lg shadow-lg space-y-4"
      >
        <h1 className="text-3xl font-semibold text-center text-white">
          Friendship Messages
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-center text-gray-100"
        >
          {yourMessage}
        </motion.p>

        <div className="flex justify-center space-x-4">
          {typeof window !== "undefined" && (
            <button
              onClick={copyUrlToClipboard}
              className="py-3 px-6 text-white bg-pink-600 bg-opacity-70 rounded-lg hover:bg-opacity-80 transition duration-300 cursor-pointer"
            >
              Copy URL to Clipboard
            </button>
          )}
          <p
            onClick={() => router.push("/")}
            className="py-3 px-6 text-white bg-pink-600 bg-opacity-70 rounded-lg hover:bg-opacity-80 transition duration-300 cursor-pointer"
          >
            Back to Home
          </p>
        </div>
      </motion.div>
    </div>
  );
}
