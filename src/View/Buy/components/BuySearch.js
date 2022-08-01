import './BuySearch.css'
function BuySearch(props){
    const {value, onValueChange} = props;
    return(
        <div className='Buy-search'>
        <input 
        className='Buy-search-input'
        type='text'
        placeholder='ค้นหา'
        value={value}
        onChange={(event)=>{onValueChange(event.target.value)}} />
   </div>
    );
}
export default BuySearch;