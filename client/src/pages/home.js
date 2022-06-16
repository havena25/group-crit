import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ArtList from "../components/artList";
// import CritiqueForm from "../components/CritiqueForm";

// import ArtForm from '../components/artForm';
import { QUERY_ARTWORKS } from "../utils/queries";
import Auth from "../utils/auth";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ARTWORKS);
  const artworks = data?.artworks || [];
  const loggedIn = Auth.loggedIn();
  return (
    <main>
      <div>
        <div>
          {loading ? <div>Loading...</div> : <ArtList artworks={artworks} />}
        </div>
      </div>
    </main>
  );
};

export default Home;
