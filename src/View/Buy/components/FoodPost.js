import './FoodPost.css'
function FoodPost (props){
    const{Food, onBgClick} = props;
    return(
        <div className="food-post"> 
        <div className="food-post-bg" onClick={onBgClick}/>
        <div className="food-post-content">
            <img src={Food.thumnailUrl}/>
            <h4>
                {Food.title}
            </h4>
        </div>
        
        </div>
    )
}
export default FoodPost;