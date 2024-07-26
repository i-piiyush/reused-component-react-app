import React from "react";

function Card(){

    const products = [
        {
            image:'https://plus.unsplash.com/premium_photo-1681022527718-81786d7873bd?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'Wooden Stool',
            description:'lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus libero culpa obcaecati illo',
            inStock: true
        },
        {
            image:'https://images.unsplash.com/photo-1529809540960-3b92284fff20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'Plastic Stool',
            description:'lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus libero culpa obcaecati illo error ',
            inStock: false
        },
        {
            image:"https://plus.unsplash.com/premium_photo-1682146662576-900a71864a11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"Amazon basics",
            description:'lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus libero culpa obcaecati illo error',
            inStock: true
        }
    ]
    return(
        <div className="w-full h-full flex justify-center items-center gap-2.5 ">
        { products.map((product,index)=>(
            <div className='h-96 w-72 bg-green-100 flex flex-col overflow-hidden rounded-md justify-between py-5'>

            <div className="bg-blue-200 h-3/5 w-full overflow-hidden">
            <img src = {product.image} alt="image" className="object-cover h-full w-full overflow-hidden"/>
            </div>

            <div className="w-full h-2/5 px-4 flex flex-col justify-center items-start">
                <h1 className="font-bold">{product.title}</h1>
                <p className="text-slate-700">{product.description}</p>
                <button className={`${product.inStock === true ? `bg-blue-600`:`bg-rose-800`} px-7 py-2 text-white rounded`}>{`${product.inStock === true ? `in stock`:`out of stock`}`}</button>
            </div>

           </div>
        ))
           
        }
    </div>
)
}
export default Card