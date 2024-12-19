/* import Page from "../components/Page"
import WordBubble from "../components/WordBubble"
import Click from "../components/Click"
import Text from "../components/Text"

const pageStyles = {
    height: "100vh",
    width: "100vw",
    main: "mediumslateblue",
    splash: "bisque",
    x: ".2em",
    y: ".5em",
    wide: "5em",
    tall: "7em",
    justify: "center",
    align: "center"
}

const contStyles = {
    height: "75%",
    width: "55%",
    main: "brown",
    shadow: "indigo",
}

const clickScheme = {
    height: "fit-content",
    width: "fit-content",
    main: "bisque"
}

function Testing () {

    const [ qCount, setQCount ] = useState(1)

    const questions = []
    for (let i = 0; i < qCount; i++) {
        questions.push(<input type="text" key={ i } id={ `question${ i }` } className="question" />)
    }

    function handleClick () {
        setQCount(qCount + 1)

        console.log("hello!")
    }

    return (
        <Page scheme={ pageStyles }>
            <WordBubble scheme={ contStyles }>
                { questions }
                <Click scheme={ clickScheme } onClick={ handleClick }>
                    <Text scheme={{color: "darkslateblue", size: "2em"}} text="Click Me!" />
                </Click>
            </WordBubble>
        </Page>
    )
}

export default Testing */


import { useState } from "react"

import Page from "../components/Page"
import WordBubble from "../components/WordBubble"
import Text from "../components/Text"
import Click from "../components/Click"
import StyledInput from "../components/StyledInput"
import Question from "../components/Question"
import DiffQ from "../components/DiffQ"

const pageStyles = {
    height: "100vh",
    width: "100vw",
    main: "mediumslateblue",
    splash: "bisque",
    x: ".2em",
    y: ".5em",
    wide: "5em",
    tall: "7em",
    justify: "center",
    align: "center"
}

const contStyles = {
    height: "75%",
    width: "55%",
    main: "brown",
    shadow: "indigo",
}

const clickScheme = {
    height: "fit-content",
    width: "fit-content",
    main: "bisque"
}

const categoryScheme = {
    height: "fit-content",
    width: "fit-content",
    main: "mediumslateblue",
    shadow: "transparent"
}

function Category () {

    return (
        <WordBubble scheme={ categoryScheme }>
            <StyledInput name="category" type="text" placeholder="Give your quiz a label" />
        </WordBubble>
    )
}

function Testing () {

    const [ questions, setQuestions ] = useState(
        [<Category key={ 0 } />, <DiffQ key={ 1 }/>]
    )

    function handleClick () {

        setQuestions((prev) => [...questions,
            <DiffQ key={ prev.length }/>
        ])
        console.log(questions)
    }

    return (
        <Page scheme={ pageStyles }>
            <WordBubble scheme={ contStyles }>
                {/* { questions.map((_, i) => {
                    <DiffQ key={ i } id={ `question${i}` } />
                }) } */}
                { questions.map(q => q) }
                <Click scheme={ clickScheme } onClick={ handleClick }>
                    <Text scheme={{color: "darkslateblue", size: "2em"}} text="Click Me!" />
                </Click>
            </WordBubble>
        </Page>
    )
}

export default Testing