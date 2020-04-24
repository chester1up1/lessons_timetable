import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import Settings from '../settings/Settings';
import { GoClassrooms, GoLessons, GoTeachers, GoClass } from './actions';


function Main(props) {
  const {GoClassrooms, GoLessons, GoTeachers, GoClass} = props;
  GoClassrooms();
  GoLessons();
  GoTeachers();
  GoClass();
  return (
    <div>
      <Settings/>
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
  state:state.auth
})
     
const mapDispatchToProps = {
  GoClassrooms,
  GoLessons, 
  GoTeachers,
  GoClass
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Main)