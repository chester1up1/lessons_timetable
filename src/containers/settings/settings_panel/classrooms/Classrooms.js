import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  Table,
} from "reactstrap";
import "./style.scss";
import { AddClassrooms, DeleteClassrooms } from "../../../main/actions";
import times_solid from "../../../../img/times_solid.svg";

function Classrooms(props) {
  const {
    classrooms,
    AddClassrooms,
    DeleteClassrooms,
    timetable,
    AddClassroomTimetable,
  } = props;
  const [number, setNumber] = useState("");
  const [count, setCount] = useState("");

  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  const changeCount = (e) => {
    setCount(e.target.value);
  };

  const AddClassroom = () => {
    let data = {
      classroom_number: number,
      count_of_students: count,
    };
    AddClassrooms(data, number);

    setNumber("");
    setCount("");
  };
  return (
    <div className="Classrooms">
      <p className="title">Classrooms</p>

      <div className="add_classroom">
        <InputGroup className="item">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>classroom №</InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Aa"
            onChange={changeNumber}
            type="number"
            value={number}
          />
        </InputGroup>
        <InputGroup className="item">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>count of students</InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Aa"
            onChange={changeCount}
            type="number"
            value={count}
          />
        </InputGroup>
        <Button className="item" color="primary" onClick={AddClassroom}>
          Add
        </Button>{" "}
      </div>

      <div
        className="classroom_table"
        style={{ maxHeight: "calc(100vh - 300px)", overflow: "auto" }}
      >
        <Table hover>
          <thead>
            <tr>
              <th>№ Classroom</th>
              <th>Count of students</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {classrooms.map((item) => {
              return (
                <tr>
                  <td>{item.classroom_number}</td>
                  <td>{item.count_of_students}</td>
                  <td>
                    <img
                      className="times_solid"
                      src={times_solid}
                      alt="delete"
                      onClick={() => DeleteClassrooms(item.classroom_number)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProp) => ({
  classrooms: state.classrooms.items,
  timetable: state.timetable.all,
});

const mapDispatchToProps = {
  AddClassrooms,
  DeleteClassrooms,
};

export default connect(mapStateToProps, mapDispatchToProps)(Classrooms);
