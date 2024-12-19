// import styled from "styled-components"

import InvisContainer from "./InvisContainer"
import StyledInput from "./StyledInput"

const formScheme = {
    height: "fit-content",
    width: "fit-content",
    main: "",
    border: "3px solid lightsalmon",
    radius: "20px"
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
        <InvisContainer scheme={ formScheme }>
            <form>
                <InvisContainer scheme={ questionScheme }>
                    <StyledInput type="text" placeholder="question" />
                </InvisContainer>
                <InvisContainer scheme={ optionsScheme }>
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
                    <StyledInput type="text" placeholder="correct" />
                </InvisContainer>
            </form>
        </InvisContainer>
    )
}

export default UglyForm