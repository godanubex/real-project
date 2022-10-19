import './FoodPost.css'
function FoodPost (props){
    const{Food, onBgClick} = props;
    return(
        <div className="food-post"> 
        <div className="food-post-bg" onClick={onBgClick}/>
        <div className="food-post-Doc">
   
            <img src={'data:image/png;base64,'+Food.Picture } width="500" height="400"/>
           
            <h4>
            <br/>
            
                {'ชื่อสินค้า: '+Food.Product}
                <br/>
                <br/>
                {'ชื่อร้าน: '+Food.Name}
                <br/>
                <br/>
                {'คำอธิบายสินค้า: '+Food.Des}
                <br/>
                <br/>
                {'จำนวณสินค้า: '+Food.Total}
                <br/>
                <br/>
                {'ราคาของสินค้า: '+Food.Price}
                <br/>
                <br/>
                <br/>
                <button>ปุ่ม</button>
            </h4>
        </div>
     
       
        
        </div>
    )
}
export default FoodPost;