import { useState } from "react"

import Page from "../components/Page"
import WordBubble from "../components/WordBubble"
import AddQ from "../components/AddQButton"
import UglyForm from "../components/UglyForm"
import InvisContainer from "../components/InvisContainer"

const pageScheme = {
    main: "skyblue",
    splash: "darkslateblue",
    x: ".6em",
    y: ".4em",
    wide: "7em",
    tall: "6em",
    dir: "column",
    justify: "center",
    align: "center"
}
const explainScheme = {
    height: "20%",
    width: "40%",
    main: "lightsalmon",
}

const addQScheme = {
    height: "10%",
    width: "fit-content",
    main: "lightsalmon",
}

const qContainer = {
    height: "60%",
    width: "60%"
}

function CreateQuiz () {

    const [ qCount, setQCount ] = useState(1)

    function handleClick () {
        setQCount(qCount + 1)
    }

    const questions = []
    for (let i = 0; i < qCount; i++) {
        questions.push( <UglyForm key={ i }>Nice</UglyForm> )
    }

    return (
        <Page scheme={ pageScheme }>
            <WordBubble scheme={ explainScheme }>
                <h1>Create a Quiz!</h1>
            </WordBubble>
            <InvisContainer scheme={ qContainer }>
                { questions }
            </InvisContainer>
            <AddQ scheme={ addQScheme } onClick={ handleClick }>
                <h1>Add a question</h1>
            </AddQ>
        </Page>
    )
}

export default CreateQuiz