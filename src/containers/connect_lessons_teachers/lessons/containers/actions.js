import { storage, database } from "../../../../firebase/index";
export function FocusLesson(lesson) {
  return async (dispatch) => {
    try {
      dispatch({ type: "FOCUS_LESSON", data: lesson });
    } catch (error) {
      console.log("TCL: getUsers -> error", error);
    }
  };
}
export function ChangeTeacher(
  lesson,
  teacher,
  class_,
  teachers,
  lesson_time,
  lessons
) {
  console.log("teachers", teachers);
  return async (dispatch) => {
    let time = 0;
    let new_data_lesson_class = [];
    let new_data_teacher = {};
    let work_time = 0;
    teachers.forEach((element) => {
      if (element.name == teacher) {
        work_time = element.work_time - lesson_time;
        time = element.work_time;
      }
    });
    try {
      if (time > 0) {
        lessons.map((item) => {
          if (item.name == lesson) {
            new_data_lesson_class = [
              ...new_data_lesson_class,
              { ...item, teacher: teacher },
            ];
          } else {
            new_data_lesson_class = [...new_data_lesson_class, item];
          }
        });
        new_data_teacher = { work_time: work_time };

        let ref = database.collection("teachers").doc(teacher);
        let updateSingle = ref.update({
          work_time: new_data_teacher.work_time,
        });
        let ref2 = database.collection("class").doc(class_);
        let updateSingle2 = ref2.update({
          lessons: new_data_lesson_class,
        });
        dispatch({
          type: "ADD_TEACHER_TO_LESSON",
          data: {
            work_time: new_data_teacher.work_time,
            teacher: teacher,
            class_: class_,
            new_data_lesson_class: new_data_lesson_class,
          },
        });
      }
    } catch (error) {
    } finally {
      // console.log("new_data_lesson_class", new_data_lesson_class);
      // console.log("new_data_teacher", new_data_teacher);
    }
  };
}
export function ChangeTeacherToTeacher(
  lesson,
  teacher_new,
  teacher_prev,
  class_,
  teachers,
  lesson_time,
  lessons
) {
  // console.log(
  //   "  lesson,teacher_new, teacher_prev, class_,teachers,lesson_time,lessons",
  //   lesson,
  //   teacher_new,
  //   teacher_prev,
  //   class_,
  //   teachers,
  //   lesson_time,
  //   lessons
  // );
  return async (dispatch) => {
    let time = 0;
    let new_data_lesson_class = [];
    let new_data_teacher = {};
    let prev_data_teacher = {};
    let work_time_new_teacher = 0;
    let work_time_prev_teacher = 0;
    teachers.forEach((element) => {
      if (element.name == teacher_new) {
        work_time_new_teacher = element.work_time - lesson_time;
        time = element.work_time;
      }
      if (element.name == teacher_prev) {
        work_time_prev_teacher = element.work_time + lesson_time;
      }
    });
    try {
      if (time > 0) {
        lessons.map((item) => {
          if (item.name == lesson) {
            new_data_lesson_class = [
              ...new_data_lesson_class,
              { ...item, teacher: teacher_new },
            ];
          } else {
            new_data_lesson_class = [...new_data_lesson_class, item];
          }
        });
        new_data_teacher = { work_time: work_time_new_teacher };
        prev_data_teacher = { work_time: work_time_prev_teacher };
        let ref = database.collection("teachers").doc(teacher_new);
        let updateSingle = ref.update({
          work_time: new_data_teacher.work_time,
        });
        let ref1 = database.collection("teachers").doc(teacher_prev);
        let updateSingle1 = ref1.update({
          work_time: prev_data_teacher.work_time,
        });
        let ref2 = database.collection("class").doc(class_);
        let updateSingle2 = ref2.update({
          lessons: new_data_lesson_class,
        });
        dispatch({
          type: "ADD_TEACHER_TO_LESSON_CHANGE",
          data: {
            new_work_time: new_data_teacher.work_time,
            prev_work_time: prev_data_teacher.work_time,
            teacher_prev: teacher_prev,
            teacher_new: teacher_new,
            class_: class_,
            new_data_lesson_class: new_data_lesson_class,
          },
        });
      }
    } catch (error) {
    } finally {
      // console.log("new_data_lesson_class", new_data_lesson_class);
      // console.log("new_data_teacher", new_data_teacher);
    }
  };
}
