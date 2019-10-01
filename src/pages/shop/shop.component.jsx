import React from "react";
import {Route} from "react-router-dom"
import collectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../../components/collection/collection.component";

const ShopPage = ({match}) => {
   
    return (
        <div className="shop-page">
           <Route exact path={`${match.path}`} component={collectionsOverview}></Route>
           <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
        </div>
    )
}

export default ShopPage