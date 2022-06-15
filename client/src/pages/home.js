import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Artlist from "../components/artList";
import CritiqueForm from '../components/CritiqueForm';
import { QUERY_ARTWORKS } from "../utils/queries";


const Home = () => {
  const { loading, data } = useQuery(QUERY_ARTWORKS);
  const artworks = data?.artworks || [];
  return (
    <main className="main_wrapper">
      <div>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
          <ArtList artworks={artworks}/>
          )}
          <CritiqueForm/>
        </div>
      </div>
    </main>
  );
};
export default Home;