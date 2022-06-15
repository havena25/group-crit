import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Artlist from "../components/artList";

const Home = () => {
  return (
    <main className="main_wrapper">
      <div>
        <div>
          This is the Artlist: <Artlist />
        </div>
      </div>
    </main>
  );
};

export default Home;
