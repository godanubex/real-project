import { useState } from 'react';
import '../Buy/Buy.css'
import BuyHeader from './components/BuyHeader';
import BuyItem from './components/BuyItem';
import Foods from './data/Foods';
import FoodPost from './components/FoodPost';
import BuySearch from './components/BuySearch';

function Buy(){
    const [selectedFood, setSelectedFood] = useState(null);
    const [searchText, setSearchText] = useState('');
    function onFoodOpenClick(theFood){
        setSelectedFood(theFood);

    }
    function onFoodCloseClick(){
        setSelectedFood(null);
    }

    const filteredFoods = Foods.filter((Food)=>{
        return Food.title.includes(searchText);
    })
    const FoodElements = filteredFoods.map((Food, index)=>{
        return <BuyItem key={index} Food ={Food} onFoodClick={onFoodOpenClick}/>;
    });
    const textInput = <input type="text" />
    const buyButton = (
        <button>
            Search
        </button>
    )
    let foodpost = null;
    if (!!selectedFood){    
        foodpost = <FoodPost Food={selectedFood} onBgClick={onFoodCloseClick}/>
    }
    return (
        
        <div className="Buy">
       <BuyHeader />
     <section className='buy-section'>
        <div className='buy-container'>
        <BuySearch value={searchText} onValueChange={setSearchText}/>

<div className='Buy-grid'> 
{FoodElements}

</div>
        </div>
     </section>
            {foodpost}
            </div>
     
    )
}
export default Buy;