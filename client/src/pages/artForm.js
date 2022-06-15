import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ARTWORKS } from "../utils/queries";
import ArtForm from '../components/artForm';
import Auth from '../utils/auth';
import ArtList from "../components/ArtList";

const ArtFormPage = () => {

  const { loading, data } = useQuery(QUERY_ARTWORKS);
  const artworks = data?.artworks || [];
  const loggedIn = Auth.loggedIn();

  const ArtForm = () => {
    const [formState, setFormState] = useState({ artTitle: '', artDescription: '', artStatus: 'Unsolved', artStartDate: '' });
    const [addArt, { error }] = useMutation(ADD_ART, {
        update(cache, { data: { addArt } }) {
            const { artworks } = cache.readQuery({ query: QUERY_ARTWORKS });

            cache.writeQuery({
                query: QUERY_ARTWORKS,
                data: { artworks: [addArt, ...artworks] }
            });
        }
    });

    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            const { data } = await addArt({
                variables: { ...formState }
            });
        } catch(e) {
            console.error(e);
        }
    }
    return (
        <div>
            <h3>Enter the art information:</h3>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input 
                        placeholder="Enter a art Title"
                        name='artTitle'
                        type='text'
                        id='artTitle'
                        value={formState.artTitle}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <textarea 
                        placeholder="Please describe your art"
                        name="artDescription"
                        id="artDescription"
                        value={formState.artDescription}
                        onChange={handleChange}
                    >
                    </textarea>
                </div>
                <div>
                    <select
                        name="artStatus"
                        id="artStatus"
                        onChange={handleChange}>
                            <option selected value="InTheory">In Theory</option>
                            <option value="WIP">WIP</option>
                            <option value="Complete">Complete</option>
                    </select>
                </div>
                <div>
                    <input 
                        name="artStartDate"
                        type="date"
                        id="artStartDate"
                        value={formState.artStartDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
      );
};
export default ArtForm;