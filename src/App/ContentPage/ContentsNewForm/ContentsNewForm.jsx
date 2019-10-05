import React from "react";

import { Button, TextInput, Container} from "../../_helpers/theme";



const ContentsNewForm = ({onChange, draft, onSubmit}) => (
    <Container>
        <TextInput type='text' onChange={onChange} value={draft}/>
        <Button onClick={onSubmit}>+</Button>
    </Container>
)

export default ContentsNewForm;
