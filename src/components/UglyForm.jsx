// import styled from "styled-components"

import InvisContainer from "./InvisContainer"
import StyledInput from "./StyledInput"
import WordBubble from "./WordBubble"

const formScheme = {
    height: "fit-content",
    width: "fit-content",
    main: "indianred",
    shadow: "darkolivegreen"
}

const questionScheme = {
    height: "fit-content",
    width: "100%",
    justify: "center",
    align: "center",
}
const optionsScheme = {
    height: "fit-content",
    width: "100%",
    dir: "row",
    justify: "center",
    align: "center",
    margin: "10px",
}
const lastScheme = {
    height: "fit-content",
    width: "100%",
    justify: "center",
    align: "center",
}

const colScheme = {
    height: "fit-content",
    width: "fit-content",
}

function UglyForm () {

    return (
        <WordBubble scheme={ formScheme }>
            {/* <form> */}
                <InvisContainer scheme={ questionScheme }>
                    <StyledInput type="text" placeholder="What's your question?" />
                </InvisContainer>
                <InvisContainer scheme={ optionsScheme }>
                        <label>Provide some answer options:</label>
                    <InvisContainer scheme={ colScheme }>
                        <StyledInput type="text" placeholder="option 1" />
                        <StyledInput type="text" placeholder="option 3" />
                    </InvisContainer>
                    <InvisContainer scheme={ colScheme }>
                    <StyledInput type="text" placeholder="option 2" />
                    <StyledInput type="text" placeholder="option 4" />
                    </InvisContainer>
                </InvisContainer>
                <InvisContainer scheme={ lastScheme }>
                    <StyledInput type="text" placeholder="correct answer" />
                </InvisContainer>
            {/* </form> */}
        </WordBubble>
    )
}

export default UglyForm