import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectShopItems} from '../../redux/shop/shop.selectors'; 
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className="collections-ovverview">
        {collections.map(({id, ...otherCollectionProps}) =>(
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
})

export default connect(mapStateToProps)(CollectionsOverview);