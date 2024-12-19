import WordBubble from "./WordBubble"

function Click ({ scheme, onClick, children }) {

    return (
        <WordBubble scheme={ scheme } onClick={ onClick }>{ children }</WordBubble>
    )
}

export default Click