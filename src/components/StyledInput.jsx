import styled from "styled-components"

const StyledInput = styled.input`
    margin: 5px;
    padding: 5px;
    background-color: bisque;
    color: darkcyan;
    font-size: .9em;
    border: none;
    border-radius: 5px;
    text-shadow: black -1em 1em 1.2em;
    &::placeholder {
        color: darkcyan;
    }
    &:hover, &:hover::placeholder {
        background-color: darkcyan;
        color: bisque;
        border: none;
    }
    &:focus, &:focus::placeholder {
        background-color: darkcyan;
        color: bisque;
        outline: none;
    }
`

export default StyledInput