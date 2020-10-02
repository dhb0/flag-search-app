import React from 'react';
import CardItem from './CardItem';

const CardHolder = (props) => {
    const {data, keyword} = props;
    return (
        <div className="container row mx-auto mt-5">
            {data.filter(item=>item.name.toLowerCase().indexOf(keyword)!==-1).map((item,index)=>{
                return(
                    <CardItem key={index} name={item.name} flag={item.flag} population={item.population}/>
                )
            })}
        </div>
    )
}

export default CardHolder
