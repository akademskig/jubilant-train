import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">{
            sections.map(({ id, imageUrl, ...otherProps }) =>
                <MenuItem key={id}{...otherProps} imageUrl={imageUrl.replace(":imageId", id)}></MenuItem>)
        }</div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)