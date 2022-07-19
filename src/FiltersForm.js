import React from 'react'
import './Coin.css'

function FiltersForm(props){
    return (
        <form action="">
            <h3 className='heading'>Filters</h3>
            <label htmlFor="Sort-By">Sort by</label>
            <br/>
            <select name="Sort-BY" id="sort-by" className='select' defaultValue={"market-cap"} onChange={(e)=>props.onChangeSortBy(e)}>
                <option value="market-cap" >Market cap</option>
                <option value="price" >price</option>
                <option value="percent-change">Percent-change</option>
                <option value="name">Name</option>
            </select>
            <br/><br/>
            <input type="radio" id="asc" name="order" value="Asc" onChange={(e)=>props.handleChangeOrder(e)}/>
            <label htmlFor="asc" className='lab'> Increasing </label><br/>
            <input type="radio" id="desc" name="order" value="Desc" onChange={(e)=>props.handleChangeOrder(e)} defaultChecked/>
            <label htmlFor="desc">Decreasing</label><br/>
            <input type="submit" value="Apply" className='button' onClick={(e)=>props.handleSubmit(e)}/>
        </form>
    );
}
export default FiltersForm;