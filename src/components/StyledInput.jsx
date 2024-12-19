import styled from "styled-components"

const StyledInput = styled.input`
    margin: 5px;
    padding: 5px;
    background-color: cadetblue;
    color: gold;
    font-size: .9em;
    border: none;
    border-radius: 5px;
    text-shadow: black -1em 1em 1.2em;
    &::placeholder {
        color: gold;
    }
    &:hover, &:hover::placeholder {
        background-color: gold;
        color: cadetblue;
        border: none;
    }
    &:focus, &:focus::placeholder {
        background-color: gold;
        color: cadetblue;
        outline: none;
    }
`

export default StyledInput