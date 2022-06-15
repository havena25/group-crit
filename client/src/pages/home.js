import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ArtList from "../components/artList";
import CritiqueForm from "../components/CritiqueForm";
import { QUERY_ARTWORKS } from "../utils/queries";
import ArtForm from '../components/artForm';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ARTWORKS);
  const artworks = data?.artworks || [];
  return (
    <main className="main_wrapper">
          <div>
            
          </div>

          <div>
          {loading ? <div>Loading...</div> : <ArtList artworks={artworks} />}
          <CritiqueForm />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
