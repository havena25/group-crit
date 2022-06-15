import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ARTWORKS } from "../utils/queries";
import ArtForm from "../components/artForm";
import Auth from "../utils/auth";
import ArtList from "../components/artList";

const ArtFormPage = () => {
  const { loading, data } = useQuery(QUERY_ARTWORKS);
  const artworks = data?.artworks || [];
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
        {loggedIn && (
          <div>
            <ArtForm />
          </div>
        )}
        <div>
          {loading ? <div>Loading...</div> : <ArtList artworks={artworks} />}
        </div>
      </div>
    </main>
  );
};

export default ArtFormPage;
