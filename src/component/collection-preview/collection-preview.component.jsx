import React from'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview=({title, items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.map(({id, ...otherProps})=>(
                <CollectionItem key={id} {...otherProps}/>
            )).filter((item, index)=>index<4) }
        </div>
    </div>
)
export default CollectionPreview;