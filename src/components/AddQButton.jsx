import WordBubble from "./WordBubble"

function AddQButton ({ scheme, onClick }) {

    return (
        <WordBubble scheme={ scheme } onClick={ onClick }>
            <h1>Add a Question</h1>
        </WordBubble>
    )
}

export default AddQButton