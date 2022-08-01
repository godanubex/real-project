import './BuyItem.css'
function BuyItem(props){
    const{Food, onFoodClick} = props;
    return(
        <div className='Buy-item'>
                <img src={Food.thumnailUrl} onClick={()=>{onFoodClick(Food)}}/>
                <h4>{Food.title}</h4>
            </div>
    )
}
export default BuyItem;