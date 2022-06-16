import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_ART } from "../../utils/mutation";
import { QUERY_ARTWORKS } from '../../utils/queries';

const ArtForm = () => {
  const [formState, setFormState] = useState({
    artTitle: "",
    artDescription: "",
    artStatus: "WIP",
    artStartDate: "",
  });
  const [addArt, { error }] = useMutation(ADD_ART);
  useMutation(ADD_ART, {
    update(cache, { data: { addArt } }) {
        const { artworks } = cache.readQuery({ query: QUERY_ARTWORKS });

        cache.writeQuery({
            query: QUERY_ARTWORKS,
            data: { artworks: [addArt, ...artworks] }
        });
    }
});

  // update state based on for input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

        try {
            const { data } = await addArt({
                variables: { ...formState }
            });
            setFormState({ artTitle: '', artSummary: '', artDescription: '', artStatus: 'WIP', artStartDate: '' });
        } catch(e) {
            console.error(e);
        }
    }
    return (
        <div className="py-3">
            <h3>Enter information about your art:</h3>
            <form onSubmit={handleFormSubmit}>
                <div class="form-floating mb-3">
                    <input
                        className="form-control"
                        placeholder="Untitled"
                        name='artTitle'
                        type='text'
                        id='artTitle'
                        value={formState.artTitle}
                        onChange={handleChange}
                    />
                    <label for="artTitle">Title of art project</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        placeholder="What is the theme?"
                        name="artTheme"
                        id="artTheme"
                        value={formState.artTheme}
                        onChange={handleChange}
                    >
                    </textarea>
                    <label for="artTheme">Art Theme</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        placeholder="Enter a art description"
                        name="artDescription"
                        id="artDescription"
                        value={formState.artDescription}
                        onChange={handleChange}
                    >
                    </textarea>
                    <label for="artDescription">Description</label>
                </div>
                <div className="mb-3">
                    <select
                        className="form-select"
                        aria-label=".form-select-1"
                        name="artStatus"
                        id="artStatus"
                        onChange={handleChange}>
                            <option selected>Choose a status:</option>
                            <option value="In Theory">In Theory</option>
                            <option value="WIP">WIP</option>
                            <option value="Complete">Complete</option>
                    </select>
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        name="artStartDate"
                        type="date"
                        id="artStartDate"
                        value={formState.artStartDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="d-grid ga-2 d-md-flex justify-content-md-end py-2">
                <button className='btn btn-dark btn-primary px-4' type='submit'>
                  Submit
                </button>
              </div>
            </form>
        </div>
      );
};

export default ArtForm;
