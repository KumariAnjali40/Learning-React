import React from 'react'

const MenuCard = ({menuData}) => {
    console.log(menuData);
  return (
    <>
     {
        menuData.map((ele)=>{
            return (
                <div className='card-container'>
                <div className='card'>
                    <div className='card-boody'>
                        <p className='card-number'>{ele.id}</p>
                        <h1 className='card-author subtle'>{ele.albumId}</h1>
                        <h1 className='card-title'>{ele.title}</h1>
                        <img src={ele.url}/>
                        <button >Click</button>
                    </div>
                    {/* <img src={image} alt="images" className='card-media' /> */}
        
                    <span className='card-tag subtle' >Order Now</span>
                </div>
               </div>
            
            )
        })
     }
    </>
  )
}

export default MenuCard