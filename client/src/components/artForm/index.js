import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ART } from '../../utils/mutations';

const ArtForm = () => {
    const [formState, setFormState] = useState({ artTitle: '', artDescription: '', artStatus: 'Unsolved', artStartDate: '' });
    const [addArt, { error }] = useMutation(ADD_ART);

    // update state based on for input changes
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
            <h3>Please describe your art or series:</h3>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input 
                        placeholder="Enter a name for your piece or series"
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
                            <option selected value="WIP">WIP</option>
                            <option value="Complete">Complete</option>
                            <option value="InTheory">In Theory</option>
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