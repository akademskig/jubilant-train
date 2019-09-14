import React from 'react';
import { sectionItems } from "../../data/sections"
import MenuItem from '../menu-item/menu-item.component';
class Directory extends React.Component {

    constructor() {
        super()

        this.state = {
            sections: sectionItems
        }
    }

    render() {
        return (
            <div className="directory-menu">{
                this.state.sections.map(({ id, imageUrl, ...otherProps }) =>
                    <MenuItem key={id}{...otherProps} imageUrl={imageUrl.replace(":imageId", id)}></MenuItem>)
            }</div>
        )
    }
}

export default Directory