import styled from "styled-components"

const StyledInvisContainer = styled.div`
    height: 20%;
    width: 20%;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    text-align: center;
`

function InvisContainer ({ scheme, children }) {

    const styles = {
        height: scheme.height,
        width: scheme.width,
        margin: scheme.margin,
        backgroundColor: scheme.main,
        flexDirection: scheme.dir,
        justifyContent: scheme.justify,
        alignItems: scheme.align,
        border: scheme.border,
        borderRadius: scheme.radius
    }

    return (
        <StyledInvisContainer className="invis-container" style={ styles }>{ children }</StyledInvisContainer>
    )
}

export default InvisContainer