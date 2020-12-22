// import React, {Component,lazy} from 'react';
// import MenuListItem from '../menu-list-item';
// import WithRestoService from '../hoc'
// import style from './menu-list.module.css';

// import {menuLoaded, menuRequested} from '../../actions'
// import {connect} from 'react-redux'
// import Spinner from '../spinner'

// import {addedToCart} from '../../actions'

// class MenuList extends Component {

//     componentDidMount(){
//         this.props.menuRequested()
//         const {RestoService} = this.props
//         RestoService.getMenuItems()
//         .then(res => this.props.menuLoaded(res))
                                  
//     }


//     render() {
//         const {menuItems,loading,addedToCart,cartItems} = this.props
        
//         // if(loading){
//         //     return <Spinner/>
//         // }
        
//         return (
//             <ul className={style.menu__list}>
//                 {
//                     menuItems.map(menuItem=>{
//                         return <MenuListItem 
//                         menuItem = {menuItem}
//                         cartItems = {cartItems}
//                         key = {menuItem.id}
//                         onAddToCart = {()=>addedToCart(menuItem.id)}
//                         />
//                     })
//                 }
//             </ul>
//         )
//     }
// };
// // for state
// const mapStateToProps=(state)=>{
//     return {
//         menuItems: state.menu,
//         loading: state.loading,
//         cartItems: state.items
        
//     }
// }

// /// для actions
// const mapDispatchToProps={
//     menuLoaded,menuRequested,addedToCart
// }


// export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(MenuList));