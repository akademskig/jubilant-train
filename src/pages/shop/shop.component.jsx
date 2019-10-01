import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectShopCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const ShopPage = ({ collection }) => {
    return (
        <div className="shop-page">
            {
                collection.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps}></CollectionPreview>
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collection: selectShopCollection
})
export default connect(mapStateToProps)(ShopPage);