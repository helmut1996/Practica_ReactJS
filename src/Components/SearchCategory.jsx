import { useState } from "react";
import PropTypes from 'prop-types';
import { Container } from "react-bootstrap";


SearchCCategory.propTypes = {
    setcategory: PropTypes.func.isRequired
}

function SearchCCategory({ setcategory }) {
    const [input, setInput] = useState('');

    const handleChangeInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim().length > 2) {
            setcategory(cast => [input, ...cast]);
            setInput('');

        }
    }
    return (
        <>

        <Container>
        <form onSubmit={handleSubmit}>
                        <input className="form-control mx-3" type="text"
                            value={input}
                            onChange={handleChangeInput}
                            placeholder="BUSCAR" />
            </form>

        </Container>

            


        </>
    )
}

export default SearchCCategory;