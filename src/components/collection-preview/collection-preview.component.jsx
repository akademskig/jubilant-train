import React from 'react'
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component"

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">
            {title.toUpperCase()}
        </h1>
        <div className="preview">
            {
                items
                    .filter((_, idx) => idx < 4)
                    .map(({ id, ...otherProps }) => (
                        <CollectionItem key={id} {...otherProps}> </CollectionItem>
                    ))
            }
        </div>
    </div>
)

export default CollectionPreview