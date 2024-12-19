import styled from "styled-components"

const StyledPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`

function Page ({ scheme, children }) {

    const styles = {
        backgroundColor: scheme.main,
        backgroundImage: `linear-gradient(${scheme.splash} ${scheme.x}, transparent .2em), linear-gradient(90deg, ${scheme.splash} ${scheme.y}, transparent .2em)`,
        backgroundSize: `${scheme.wide} ${scheme.tall}`,
        flexDirection: scheme.dir,
        justifyContent: scheme.justify,
        alignItems: scheme.align,
    }

    return (
        <StyledPage className="page" style={ styles }>{ children }</StyledPage>
    )
}

export default Page