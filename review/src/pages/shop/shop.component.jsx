import React from 'react';
import {Route} from 'react-router-dom'; 
import {connect} from 'react-redux'; 

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component'; 

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'; 
import {updateCollections} from '../../redux/shop/shop.actions';

class ShopPage extends React.Component{
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    //whenever collectionRef is updated or when code runned first time, this collectionRef will send us 
    //the napshot representing the code of collections objects array, at the time when this code renders
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    })
  }
  render(){
    const {match} = this.props;
    return (  
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
  
  )};
}


const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});
export default connect(null, mapDispatchToProps)(ShopPage);
