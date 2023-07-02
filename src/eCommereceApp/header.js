import React from "react";

  export default function Header() {
    return(
        <header className="bg-dark py-3" id="header">
        <div className="container px-4 px-lg-5 my-5">
        <img width="200" height="130" alt="" srcSet="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_EMEA?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1661027786072" srcset="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_EMEA?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1661027786072, https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_EMEA?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1661027786072 2x"/>
            <div className="text-center text-white">
            <h1 class="rs-shop-header">Shop iPhones</h1>
                <h1 className="display-4 fw-bolder">iPLANET</h1>
                <div className="rs-shop-subheader">The best way to&nbsp;buy the products you&nbsp;love.</div>
            </div>
        </div>
    </header>

    )
}