function DiffQ () {

    const styles = {
        height: "fit-content",
        width: "fit-content",
        backgroundColor: "orange"
    }

    return (
        <div style={ styles }>
            <div> {/* question div */}
                <input type="text" placeholder="type your question here"/>
            </div>
            <div> {/* options div */}
                <div> {/* col 1 */}
                    <input type="text" name="one" placeholder="option 1"/>
                    <input type="text" name="three"  placeholder="option 3"/>
                </div>
                <div> {/* col 2 */}
                    <input type="text" name="two" placeholder="option 2"/>
                    <input type="text" name="four" placeholder="option 4"/>
                </div>
                <div> {/* final div */}
                    {/* delete button would go here */}
                    <input type="text" placeholder="correct answer"/>
                </div>
            </div>
        </div>
    )
}

export default DiffQ