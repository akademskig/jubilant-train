import React from "react"
import {connect} from "react-redux"
import CollectionPreview from "../collection-preview/collection-preview.component"
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors"
import { createStructuredSelector } from "reselect"


const CollectionsOverview = ({collection}) =>(
    <div className="collections-overview">
        {console.log(collection)}
        {collection.map(({id,...collectionProps})=>(
            <CollectionPreview key={id}{...collectionProps}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);