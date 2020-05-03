import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Class(props) {
  const {school_class, } = props;
  return (
    <div className='Class_connect'>
      <div className='title'>
        <p>Class</p>
      </div>
      <div className='class_items'>
        {school_class.map(item=>{
          return(
            <Link className='link' to={`/class-lessons/${item.class_name}`}>
              <p className='item'>{item.class_name.slice(0, -1)}<span className='item_color'>{item.class_name.slice(-1)}</span></p>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
    school_class : state.school_class.items 
})
     
const mapDispatchToProps = {

}
     
export default connect(mapStateToProps, mapDispatchToProps)(Class)