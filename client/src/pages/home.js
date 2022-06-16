import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ArtList from "../components/artList";
// import CritiqueForm from "../components/CritiqueForm";

import ArtForm from "../components/artForm";
import { QUERY_ARTWORKS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ARTWORKS);
  const artworks = data?.artworks || [];
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <ArtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ArtList artworks={artworks} title="Some Feed for ArtWork" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
