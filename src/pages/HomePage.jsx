import "../styles/HomePage.css"

// import components here
import Page from "../components/Page"
import WordBubble from "../components/WordBubble"
import InvisContainer from "../components/InvisContainer"
import Text from "../components/Text"

const pageScheme = {
    main: "lightseagreen",
    splash: "bisque",
    x: ".2em",
    y: ".4em",
    wide: "5em",
    tall: "7em",
    dir: "column"
}
const heroScheme = {
    height: "60%",
    width: "50%",
    main: "orangered",
    margin: "auto auto 20px auto",
    padding: "10px 50px"
}

const userPortalsScheme = {
    height: "100%",
    width: "175px",
    main: "bisque",
    margin: "0 10px",
    padding: "5px"
}

const playNowScheme = {
    height: "100%",
    width: "350px",
    main: "darkslateblue",
    margin: "0 10px",
}

const invisScheme = {
    height: "20%",
    width: "40%",
    main: "transparent",
    margin: "20px auto auto auto",
    dir: "row",
}

function HomePage () {

    return (
        <Page scheme={ pageScheme }>
            <WordBubble id="hero" scheme={ heroScheme }>
                <Text scheme={{ color: "bisque", size: "2.5em" }} text="Welcome!"></Text>
                <Text scheme={{ color: "darkslateblue", size: "1.25em" }} text="The one-stop tool for anything and everything you need to study!"></Text>
            </WordBubble>
            <InvisContainer scheme={ invisScheme }>
                <WordBubble scheme={ userPortalsScheme }>
                <Text scheme={{ color: "darkslateblue", size: "2em" }} text="Sign Up"></Text>
                </WordBubble>
                <WordBubble scheme={ userPortalsScheme }>
                <Text scheme={{ color: "darkslateblue", size: "2em" }} text="Log In"></Text>
                </WordBubble>
                <WordBubble scheme={ playNowScheme }>
                <Text scheme={{ color: "bisque", size: "2em" }} text="Play Now"></Text>
                </WordBubble>
            </InvisContainer>
        </Page>
    )
}

export default HomePage




/* <Page>
    <Hero>
        <h1>Welcome to my Quiz Game!</h1>
        <h2>lorem</h2>
    </Hero>
    <InvisDiv>
        <Login>Log In</Login>
        <SignUp>Sign Up</SignUp>
        <PlayNow>Play Now</PlayNow>
    </InvisDiv>
</Page> */