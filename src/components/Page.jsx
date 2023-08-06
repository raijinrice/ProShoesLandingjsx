import React, { useState } from "react";

export default function Page() {
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4830729f-eb63-4bc9-b28c-3bca9e68e90c/air-jordan-12-retro-womens-shoes-2TS3gn.png",
    img2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/46dabd94-ce83-41fc-939b-9f5697cba50d/air-jordan-12-retro-womens-shoes-2TS3gn.png",
    img3: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6e5e3dbd-f51c-413a-b97e-3d05cfe8048d/air-jordan-12-retro-womens-shoes-2TS3gn.png",
    img4: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2ae06222-6dff-45de-9aee-5e90caaabd7c/air-jordan-12-retro-womens-shoes-2TS3gn.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-lg"
        />
        <div className="flex flex-row justify-between h-24">
          <img
            src={images.img1}
            alt=""
            className="w-16 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-16 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-16 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-16 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="text-pink-600 font-semibold text-left">
            Special Sneaker
          </span>
          <h1 className="text-3xl font-bold">Air Jordan 12 Retro</h1>
        </div>
        <p className="text-gray-700 text-left">
          What goes together better than high-tops and hoops? Women and
          basketball. This AJ12 is made of full-grain leather—textured in parts
          to look and feel like a basketball—so you're set up to show your love
          for the game.
        </p>
        <h6 className="text-2xl font-semibold text-left">$ 200</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-fuchsia-800 text-3xl"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-fuchsia-800 text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className="bg-fuchsia-800 text-white font-semibold py-3 px-12 rounded-xl h-full">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
