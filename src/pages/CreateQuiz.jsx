import { useState } from "react"

import Page from "../components/Page"
import WordBubble from "../components/WordBubble"
import Click from "../components/Click"
import UglyForm from "../components/UglyForm"
import InvisContainer from "../components/InvisContainer"
import Text from "../components/Text"

const pageScheme = {
    main: "darkseagreen",
    splash: "darkcyan",
    x: ".2em",
    y: ".6em",
    wide: "8em",
    tall: "5em",
    dir: "column",
    justify: "center",
    align: "center"
}
const explainScheme = {
    height: "20%",
    width: "40%",
    main: "indianred",
    shadow: "darkolivegreen"
}

const addQScheme = {
    height: "10%",
    width: "fit-content",
    main: "indianred",
    shadow: "darkolivegreen"
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
        questions.push( <UglyForm id={ `question${ i }` } key={ i }></UglyForm> )
    }
    console.log(questions)

    return (
        <Page scheme={ pageScheme }>
            <WordBubble scheme={ explainScheme }>
                <Text scheme={{color: "gold", size: "3em"}} text="Create Your Quiz!" />
            </WordBubble>
            <InvisContainer scheme={ qContainer }>
                <form id="quiz-form">
                    { questions }
                </form>
            </InvisContainer>
            <Click scheme={ addQScheme } onClick={ handleClick }>
                <Text scheme={{color: "gold", size: "2em"}} text="Add question" />
            </Click>
        </Page>
    )
}

export default CreateQuiz