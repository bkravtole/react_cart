import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {

  const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
  const img2 =
    "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

  const productlist = [
    {
      name: "apple Mac book",
      price: 1290,
      imgsrc: img1,
      id: "afqfq"

    },
    {
      name: "jordan shoes",
      price: 13445,
      imgsrc: img2,
      id: "bjiq"
    }


  ]

  const dispatch = useDispatch()
  
  const cardhandler = (options) => {
    // console.log(options);
       dispatch({type:"addTocartss",payload:options})
       dispatch({ type :"calculatePrice" })
    toast.success("added to cart")
  }

  return (
    <div className='home'>
      {
        productlist.map((i) => (
          <ProductCard key={i.id} id={i.id} name={i.name} price={i.price} imgsrc={i.imgsrc} handler={cardhandler} />
        ))
      }

    </div>
  )
}

const ProductCard = ({ name, id, price, handler, imgsrc }) => (
  <div className='productcard'>
    <img src={imgsrc} alt={name} />
    <p>{name}</p>
   
    <h4>${price}</h4>

    <button onClick={() => handler({ name, id, price, quantity: 1, imgsrc })}>Add To Cart</button>
  </div>
)


export default Home;
