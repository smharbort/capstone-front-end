import { useState } from "react"

import Page from "../components/Page"
import WordBubble from "../components/WordBubble"
import Click from "../components/Click"
import InvisContainer from "../components/InvisContainer"
import Text from "../components/Text"
import DiffQ from "../components/DiffQ"
import StyledInput from "../components/StyledInput"
import Question from "../components/Question"

const pageScheme = {
    main: "darkseagreen",
    splash: "cadetblue",
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
    main: "darkcyan",
    shadow: "darkolivegreen"
}

const addQScheme = {
    height: "10%",
    width: "fit-content",
    main: "darkcyan",
    shadow: "darkolivegreen"
}

const qContainer = {
    height: "60%",
    width: "60%",
    // justify: "center",
    // align: "center"
}

const categoryScheme = {
    height: "fit-content",
    width: "fit-content",
    main: "indianred",
    shadow: "darkolivegreen",
    padding: "25px"
}

function Category () {

    return (
        <WordBubble scheme={ categoryScheme }>
            <StyledInput name="category" type="text" placeholder="Give your quiz a label" />
        </WordBubble>
    )
}

function Create () {

    const [ questions, setQuestions ] = useState(
        [ <Category key={ 0 } />, <Question key={ 1 } /> ]
    )

    function handleClick () {
        console.log(questions.length)
        setQuestions((previousQ) => [...questions,
            <Question key={ previousQ.length }/>
        ])
        console.log(questions.length)
        console.log("clicked")
    }

    return (
        <Page scheme={ pageScheme }>
            <WordBubble scheme={ explainScheme }>
                <Text scheme={{color: "bisque", size: "3em"}} text="Create Your Quiz!" />
            </WordBubble>
            <InvisContainer scheme={ qContainer }>
                { questions.map((q) => (q)) }
            </InvisContainer>
            <Click scheme={ addQScheme } onClick={ handleClick }>
                <Text scheme={{color: "bisque", size: "2em"}} text="Add question" />
            </Click>
        </Page>
    )
}

export default Create