import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import cog_solid from '../../img/cog_solid.svg'
import SettingsPanel from './settings_panel/SettingsPanel';
import './style.scss'
function Settings(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const {state} = props;
  return (
    <div className='Settings'>
      <img className='cog_solid' src={cog_solid} alt="close" onClick={toggle}/>
      <SettingsPanel toggle={toggle} modal={modal}/>
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
  state:state.auth
})
     
const mapDispatchToProps = {
    
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Settings)