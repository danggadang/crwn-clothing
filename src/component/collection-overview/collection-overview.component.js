import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsSelection } from '../../redux/shop/shop.selector';
import './collection-overview.style.scss';
import  CollectionPreview  from '../collection-preview/collection-preview.component';

const CollectionOverview =({collections})=>{
    return(<div className="collection-overview">
        {collections.map(({ id, ...otherProps }) => (
                <CollectionPreview key={id} {...otherProps} />
            ))}
    </div>)
};
const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsSelection
});
export default connect(mapStateToProps)(CollectionOverview);