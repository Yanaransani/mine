import React, { useRef } from "react";
// import HTMLFlipBook from "react-pageflip";
import HTMLFlipBook from "react-pageflip";

import "./App.css";

const App: React.FC = () => {
  // const flipBookRef = useRef<HTMLDivElement>(null);
  const flipBookRef = useRef<any>(null); // use `any` or proper inferred type

  const goToNextPage = () => {
    flipBookRef.current?.pageFlip()?.flipNext();
  };

  const goToPreviousPage = () => {
    flipBookRef.current?.pageFlip()?.flipPrev();
  };


  // const goToNextPage = () => {
  //   if (flipBookRef.current) {
  //     flipBookRef.current.pageFlip().flipNext();
  //   }
  // };

  // const goToPreviousPage = () => {
  //   if (flipBookRef.current) {
  //     flipBookRef.current.pageFlip().flipPrev();
  //   }
  // };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <HTMLFlipBook
        ref={flipBookRef}
        width={300}
        height={500}
        className="shadow-2xl rounded-lg border-4 border-rose-300"
        startPage={0} 
        size="fixed" 
        style={{ backgroundColor: "#ffe6f0" }} 
        minWidth={200}
        maxWidth={0}
        minHeight={0}
        maxHeight={0}
        drawShadow={false}
        flippingTime={500} 
        usePortrait={false}
        startZIndex={0}
        autoSize={false}
        maxShadowOpacity={0}
        showCover={false}
        mobileScrollSupport={false}
        clickEventForward={false}
        useMouseEvents={false}
        swipeDistance={0}
        showPageCorners={false}
        disableFlipByClick={false}
      >
        <div className="min-h-screen w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center bg-white p-4 text-xl font-serif">
          <img
            src="https://i.pinimg.com/474x/35/3e/b5/353eb5b1af4b87dae2cbcd1ccf72d3ca.jpg"
            alt="Placeholder"
            className="rounded-md shadow-md w-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center bg-white p-6 text-xl font-serif">
          <div className="w-full lg:w-1/2">
            <img
              src="https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-couple-in-valentine-day-keeping-a-conversation-with-the-mobile-phone-png-image_11300359.png"
              alt="Placeholder"
              className="rounded-md shadow-md w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-4">
          <p className="text-lg md:text-xl text-center max-w-md">The meeting was arranged by their parents. She saw him for the first time, and something in his eyes made her heart skip a beat. It was a soft spark—gentle, yet unforgettable...</p>
        </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center bg-white p-4 text-xl font-serif">
          <img
            src="https://i.pinimg.com/474x/35/3e/b5/353eb5b1af4b87dae2cbcd1ccf72d3ca.jpg"
            alt="Placeholder"
            className="rounded-md shadow-md w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-6 text-xl font-serif">
          <div className="w-full lg:w-1/2">
            <img
              src="https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-couple-in-valentine-day-keeping-a-conversation-with-the-mobile-phone-png-image_11300359.png"
              alt="Placeholder"
              className="rounded-md shadow-md w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-4">
            <p className="text-pink-800 italic text-center">Her heart knew he was the one ❤️</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center bg-white p-4 text-xl font-serif">
          <img
            src="https://i.pinimg.com/474x/35/3e/b5/353eb5b1af4b87dae2cbcd1ccf72d3ca.jpg"
            alt="Placeholder"
            className="rounded-md shadow-md w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-6 text-xl font-serif">
          <div className="w-full lg:w-1/2">
            <img
              src="https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-couple-in-valentine-day-keeping-a-conversation-with-the-mobile-phone-png-image_11300359.png"
              alt="Placeholder"
              className="rounded-md shadow-md w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-4">
            <p className="text-pink-800 italic text-center">That night,she looked up at the sky and prayed, “Please… let him say yes!.”</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center bg-white p-4 text-xl font-serif">
          <img
            src="https://i.pinimg.com/474x/35/3e/b5/353eb5b1af4b87dae2cbcd1ccf72d3ca.jpg"
            alt="Placeholder"
            className="rounded-md shadow-md w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-6 text-xl font-serif">
          <div className="w-full lg:w-1/2">
            <img
              src="https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-couple-in-valentine-day-keeping-a-conversation-with-the-mobile-phone-png-image_11300359.png"
              alt="Placeholder"
              className="rounded-md shadow-md w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-4">
            <p className="text-pink-800 italic text-center">Some days run around and finally he said yes!!!</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center bg-white p-4 text-xl font-serif">
          <img
            src="https://i.pinimg.com/474x/35/3e/b5/353eb5b1af4b87dae2cbcd1ccf72d3ca.jpg"
            alt="Placeholder"
            className="rounded-md shadow-md w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-6 text-xl font-serif">
          <div className="w-full lg:w-1/2">
            <img
              src="https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-couple-in-valentine-day-keeping-a-conversation-with-the-mobile-phone-png-image_11300359.png"
              alt="Placeholder"
              className="rounded-md shadow-md w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-4">
            <p className="text-pink-800 italic text-center">They began talking through WhatsApp messages and late-night talks, slowly getting to know each other...</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center bg-white p-4 text-xl font-serif">
          <img
            src="https://i.pinimg.com/474x/35/3e/b5/353eb5b1af4b87dae2cbcd1ccf72d3ca.jpg"
            alt="Placeholder"
            className="rounded-md shadow-md w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-6 text-xl font-serif">
          <div className="w-full lg:w-1/2">
            <img
              src="https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-couple-in-valentine-day-keeping-a-conversation-with-the-mobile-phone-png-image_11300359.png"
              alt="Placeholder"
              className="rounded-md shadow-md w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-4">
            <p className="text-pink-800 italic text-center">She was waiting to meet him in person, holding onto the words she had been meaning to say.</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center bg-white p-4 text-xl font-serif">
          <img
            src="https://i.pinimg.com/474x/35/3e/b5/353eb5b1af4b87dae2cbcd1ccf72d3ca.jpg"
            alt="Placeholder"
            className="rounded-md shadow-md w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-6 text-xl font-serif">
          <div className="w-full lg:w-1/2">
            <img
              src="https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-couple-in-valentine-day-keeping-a-conversation-with-the-mobile-phone-png-image_11300359.png"
              alt="Placeholder"
              className="rounded-md shadow-md w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-4">
            <p className="text-pink-800 italic text-center">Finally, the day arrived.They shared a quiet moment together just the two of them...</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center bg-white p-4 text-xl font-serif">
          <img
            src="https://i.pinimg.com/474x/35/3e/b5/353eb5b1af4b87dae2cbcd1ccf72d3ca.jpg"
            alt="Placeholder"
            className="rounded-md shadow-md w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-6 text-xl font-serif">
          <div className="w-full lg:w-1/2">
            <img
              src="https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-couple-in-valentine-day-keeping-a-conversation-with-the-mobile-phone-png-image_11300359.png"
              alt="Placeholder"
              className="rounded-md shadow-md w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-4">
            <p className="text-pink-800 italic text-center">The next chapter begins with...</p>
            <p className="text-pink-800 italic text-center">YOU and ME together forever.</p>
            <p className="mt-4 text-pink-800 italic font-bold text-2xl text-center">Please, look at me!...</p>
          </div>
        </div>

      </HTMLFlipBook>

      <div className="mt-6">
        <button
          onClick={goToPreviousPage}
          className="px-6 py-2 bg-pink-500 text-white text-xl rounded-full shadow-lg hover:bg-pink-700 transition duration-300"
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          className="px-6 py-2 bg-pink-500 text-white text-xl rounded-full shadow-lg hover:bg-pink-700 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
