import React from 'react';

const index = ({quotes}) => {
    console.log(quotes);
    return (
        <div>
            
        </div>
    );
};

export default index;
export async function getServerSideProps(){
    const res = await fetch("https://dummyjson.com/quotes")
    const data = await res.json()
    return{
        props:{
            quotes:data
        }
    }
}