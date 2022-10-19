import './BuyItem.css'
function BuyItem(props){
    const{Food, onFoodClick} = props;
    return(
        <div className='Buy-item'>
                <img src={'data:image/png;base64,'+Food.Picture} onClick={()=>{onFoodClick(Food)}}/>
               
                <h4>{Food.Product}</h4>
            </div>
    )
}
export default BuyItem;