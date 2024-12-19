import styled from "styled-components"

const StyledInput = styled.input`
    margin: 5px;
    padding: 5px;
    background-color: indigo;
    color: bisque;
    border: none;
    border-radius: 5px;
    text-shadow: black -1em 1em 1.2em;
    &::placeholder {
        color: bisque;
    }
    &:hover, &:hover::placeholder {
        background-color: bisque;
        color: indigo;
        border: none;
    }
    &:focus, &:focus::placeholder {
        background-color: bisque;
        color: indigo;
        outline: none;
    }
`

export default StyledInput