import PropTypes from "prop-types"
export const FeedbackOptions = (({ onLeaveFeedback, option }) => {
    return(
        <ul>
            {option.map(word=>{return(<li key={word}><button type="button" onClick={onLeaveFeedback}>{word}</button></li>)})}
    </ul>
    )
})

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    option: PropTypes.node
    
}