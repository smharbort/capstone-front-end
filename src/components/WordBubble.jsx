import styled from "styled-components"

const StyledWordBubble = styled.div`
    height: 10%;
    width: 10%;
    margin: 20px auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: brown -1em 1em 1.2em;
    & h1, h2, p {
        word-break: break-word;
        text-align: center;
    }
`

function WordBubble ({ scheme, children, onClick }) {

    const styles = {
        height: scheme.height,
        width: scheme.width,
        margin: scheme.margin,
        padding: scheme.padding,
        backgroundColor: scheme.main,
        flexDirection: scheme.dir,
        justifyContent: scheme.justify,
        alignItems: scheme.align,
        boxShadow: `${ scheme.shadow } -1em 1em 1.2em`
    }

    return (
        <StyledWordBubble className="word-bubble" style={ styles } onClick={ onClick }>{ children }</StyledWordBubble>
    )
}

export default WordBubble