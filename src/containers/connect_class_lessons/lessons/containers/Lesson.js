import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import './style.scss';

function Lesson(props) {
  const {lesson} = props;

  return (
    <div className='Lesson'>
      {lesson}
      <InputGroup className='time' >
        <Input />
        <InputGroupAddon addonType="append">
          <InputGroupText>time</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
    
})
     
const mapDispatchToProps = {

}
     
export default connect(mapStateToProps, mapDispatchToProps)(Lesson)