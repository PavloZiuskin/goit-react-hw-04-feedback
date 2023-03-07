import PropTypes from "prop-types"
export const FeedbackOptions = (({ onLeaveFeedback, option }) => {
    return(
        <ul>
            {option.map(word=>{return(<li><button type="button" onClick={() => { onLeaveFeedback(word) } }>{word}</button></li>)})}
    </ul>
    )
})

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    option: PropTypes.node
    
}