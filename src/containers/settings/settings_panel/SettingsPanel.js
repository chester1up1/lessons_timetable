import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import chalkboard_solid from '../../../img/chalkboard_solid.svg'
import chalkboard_teacher_solid from '../../../img/chalkboard_teacher_solid.svg';
import './style.scss'
import Settings_router from './Settings_router';
import { Link } from 'react-router-dom';
import clipboard_list_solid from '../../../img/clipboard_list_solid.svg';
import users_solid from '../../../img/users_solid.svg';

function SettingsPanel(props) {   
  const {modal,toggle} = props
  return (
    <Modal isOpen={modal} toggle={toggle} className='settings_modal' style={{maxWidth:'100%',marginBottom:0,marginTop:0}}>
    <ModalHeader toggle={toggle}>
      <Link to='/classrooms'> <img className='cog_solid' src={chalkboard_solid} alt="close" /></Link>
      <Link to='/lessons'> <img className='clipboard_list_solid' src={clipboard_list_solid} alt="close" /></Link>
      <Link to='/teachers'> <img className='cog_solid' src={chalkboard_teacher_solid} alt="close" /></Link>
      <Link to='/class'> <img className='users_solid' src={users_solid} alt="close" /></Link>
    </ModalHeader>
    <ModalBody>
     <Settings_router/>
    </ModalBody>
  </Modal>
  );
}

const mapStateToProps = (state, ownProp) => ({
  state:state.auth
})
     
const mapDispatchToProps = {
    
}
     
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel)