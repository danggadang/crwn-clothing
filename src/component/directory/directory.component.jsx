import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySelection} from '../../redux/directory/directory.selector';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySelection
})
export default connect(mapStateToProps)(Directory);