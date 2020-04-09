import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.style.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({ item, addItem }) => {
    const {name, price, imageUrl} =item;
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <CustomButton inverted onClick={()=>addItem(item)}>ADD TO CART</CustomButton>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);