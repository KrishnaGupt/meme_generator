import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getMemes } from "../api/memes";
import Footer from "../components/Footer";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <div>
      <div className="text-3xl md:text-5xl text-center mt-7 md:mt-28 font-bold">
        Choose Templates
      </div>
      <div className="flex flex-row flex-wrap justify-around mt-8">
        {data.map((meme) => (
          <Card img={meme.url} title={meme.name} key={meme.id} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
