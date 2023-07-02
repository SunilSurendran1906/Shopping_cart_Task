import React,{useState} from 'react';
import './App.css';
import Prodect from './eCommereceApp/prodects';
import Footer from './eCommereceApp/footer';
import Header from './eCommereceApp/header';
import NavBar from './eCommereceApp/NavBar';








    const cardDetails=[{
      sale:"" , itsAvailable:true,
      cardImag:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1663611329492',
       itemName:"iPhone 13pro",
       discount:"$240",
       price:"$260"
    
    
    },{
      sale:'', itsAvailable:false,
      cardImag:"https://cms.vodafone.com.tr/static/img/content/22-04/12/apple-iphone-12-pro-grafit-0.png.webp?w=110",
       itemName:"iPhone 12pro",
    discount:"$200",
       price:"$220"
    
    },{
      sale:"", itsAvailable:false,
      cardImag:"https://cms.vodafone.com.tr/static/img/content/22-04/12/apple-iphone-12-pro-grafit-0.png.webp?w=110",
       itemName:"iPhone 11pro",
    discount:"$180",
       price:"$200"
    },{
      sale:"", itsAvailable:false,
      cardImag:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13-202209?wid=450&hei=300&fmt=p-jpg&qlt=95&.v=1661958176452",
       itemName:"iPhone 13",
    discount:"$220",
       price:"$240"
    },{
      sale:"", itsAvailable:false,
      cardImag:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone12-digitalmat-gallery-2-202111?wid=450&hei=300&fmt=png-alpha&.v=1635178709000",
       itemName: "iPhone 12",
    discount:"$190",
       price:"$210"
    },{
      sale:"", itsAvailable:true,
      cardImag:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13-202209?wid=450&hei=300&fmt=p-jpg&qlt=95&.v=1661958176452',
       itemName:"iPhone 11",
    discount:"$150",
       price:"$155"
    },{
      sale:"", itsAvailable:true,
      cardImag:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=450&hei=300&fmt=p-jpg&qlt=95&.v=1646415838921",
       itemName:"iPhone SE",
    discount:"$120",
       price:"$130"
    },{
      sale:"", itsAvailable:false,
      cardImag:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-compare-iphone-14-202209?wid=450&hei=300&fmt=jpeg&qlt=90&.v=1660759995969",
       itemName:"iPhone 13plus",
    discount:"$240",
       price:"$250"
    }]
   



   


   

function App() {
   const [cartValue,setCartValue]=useState(0)
  return (   
  <div className="App">
    <div> <NavBar cartValue={cartValue} /> </div>
  <div> <Header /> </div>
  
    
       <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
               
          {
            cardDetails.map((d,i)=>(
              
              <Prodect cardDetails={d} cartValue={cartValue} setCartValue={setCartValue}  key={`Data-list-${i}`}/>
            ))
          }
                </div>
            </div>
        </section>
    
   
      <div><Footer/></div>
    </div>
  );
}

export default App;






