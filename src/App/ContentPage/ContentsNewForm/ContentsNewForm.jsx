import React from "react";

import { Button, TextInput, Container} from "../../_helpers/theme";



const NewContentsForm = ({onChange, draft, onSubmit}) => (
    <Container>
        <TextInput type='text' onChange={onChange} value={draft}/>
        <Button onClick={onSubmit}>+</Button>
    </Container>
)

export default NewContentsForm;
