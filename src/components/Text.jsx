function Text ({ scheme, text }) {

    const styles = {
        color: scheme.color,
        fontWeight: scheme.weight,
        fontSize: scheme.size
    }

    return (
        <p style={ styles }>{ text }</p>
    )
}

export default Text