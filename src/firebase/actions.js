import { storage, database } from "./index";

///Модель
export const GetClassroomsFirebase = () => {
  const productsRef = database.collection("classrooms");
  const classroom = [];
  return productsRef
    .get()
    .then((snapshot) => {
      snapshot.forEach((x) => {
        classroom.push(x.data());
      });
      return classroom;
    })
    .catch((error) => {
      console.log("Помилка: ", error);
    });
};

export const GetTimetable = () => {
  const productsRef = database.collection("class_timetable");
  const timetable = [];
  return productsRef
    .get()
    .then((snapshot) => {
      snapshot.forEach((x) => {
        timetable.push(x.data());
      });
      return timetable;
    })
    .catch((error) => {
      console.log("Помилка: ", error);
    });
};
export const GetLessonsTimetable = () => {
  const productsRef = database.collection("lessons_timetable");
  const timetable = [];
  return productsRef
    .get()
    .then((snapshot) => {
      snapshot.forEach((x) => {
        timetable.push(x.data());
      });
      return timetable;
    })
    .catch((error) => {
      console.log("Помилка: ", error);
    });
};

export const PostClassrooms = (data, id) => {
  database.collection("classrooms").doc(id).set(data);
};

// export const AddClassroomTimetable = (prev_timetable, classroom) => {
//   let lesson = { classroom: classroom, lesson: "", class: "", teacher: "" };
//   let new_timetable = [];
//   try {
//     prev_timetable.forEach((element, index) => {
//       new_timetable = [...new_timetable, element];
//       Object.entries(element).forEach((item) => {
//         if (typeof item !== "string") {
//           new_timetable[index].lesson_first = {
//             ...new_timetable[index].lesson_first,
//             ...lesson,
//             lesson: { ...new_timetable[index].lesson_first.lesson, lesson },
//           };
//           new_timetable[index].lesson_second = {
//             ...new_timetable[index].lesson_second,
//             ...{ ...{ ...lesson } },
//           };
//           new_timetable[index].lesson_third = {
//             ...new_timetable[index].lesson_third,
//             ...{ ...{ ...lesson } },
//           };
//           new_timetable[index].lesson_fourth = {
//             ...new_timetable[index].lesson_fourth,
//             ...{ ...{ ...lesson } },
//           };
//           new_timetable[index].lesson_fifth = {
//             ...new_timetable[index].lesson_fifth,
//             ...{ ...{ ...lesson } },
//           };
//           new_timetable[index].lesson_sixth = {
//             ...new_timetable[index].lesson_sixth,
//             ...{ ...{ ...lesson } },
//           };
//           new_timetable[index].lesson_seventh = {
//             ...new_timetable[index].lesson_seventh,
//             ...{ ...{ ...lesson } },
//           };
//           new_timetable[index].lesson_eighth = {
//             ...new_timetable[index].lesson_eighth,
//             ...{ ...{ ...lesson } },
//           };
//         }
//       });
//       console.log("new_timetable", new_timetable);
//     });
//   } catch (error) {
//   } finally {
//   }
//   return async () => {};
//   // database.collection("classrooms").doc(id).set(data);
// };

export const DeleteClassroomsFire = (id) => {
  database.collection("classrooms").doc(id).delete();
};

export const PostLessons = (data, id) => {
  database.collection("lessons").doc(id).set(data);
};

export const GetLessonsFirebase = () => {
  const productsRef = database.collection("lessons");
  const lessons = [];
  return productsRef
    .get()
    .then((snapshot) => {
      snapshot.forEach((x) => {
        lessons.push(x.data());
      });
      console.log("er", lessons);
      return lessons;
    })
    .catch((error) => {
      console.log("Помилка: ", error);
    });
};

export const DeleteLessonsFire = (id) => {
  database.collection("lessons").doc(id).delete();
};

export const GetTeachersFirebase = () => {
  const productsRef = database.collection("teachers");
  const teachers = [];
  return productsRef
    .get()
    .then((snapshot) => {
      snapshot.forEach((x) => {
        teachers.push(x.data());
      });
      console.log("teachers", teachers);
      return teachers;
    })
    .catch((error) => {
      console.log("Помилка: ", error);
    });
};

export const DeleteTeachersFire = (id) => {
  database.collection("teachers").doc(id).delete();
};

export const PostTeachers = (data, id) => {
  database.collection("teachers").doc(id).set(data);
};

export const PostClass = (data, id) => {
  let timetable = {
    Monday: { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} },
    Tuesday: { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} },
    Wednesday: { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} },
    Thursday: { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} },
    Friday: { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} },
    class_name: id,
  };
  database.collection("class").doc(id).set(data);
  database.collection("class_timetable").doc(id).set(timetable);
};

export const GetClassFirebase = () => {
  const productsRef = database.collection("class");
  const class_ = [];
  return productsRef
    .get()
    .then((snapshot) => {
      snapshot.forEach((x) => {
        class_.push(x.data());
      });
      return class_;
    })
    .catch((error) => {
      console.log("Помилка: ", error);
    });
};

export const DeleteClassFire = (id) => {
  database.collection("class").doc(id).delete();
};

export const ChangeClassLessonsAdd = (data, id) => {
  let classRef = database.collection("class").doc(id);
  let transaction = database
    .runTransaction((t) => {
      return t.get(classRef).then((doc) => {
        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        t.update(classRef, { lessons: data });
      });
    })
    .then((result) => {
      console.log("Transaction success!");
    })
    .catch((err) => {
      console.log("Transaction failure:", err);
    });
};

export const ChangeClassTime = (data, id) => {
  let classRef = database.collection("class").doc(id);
  let transaction = database
    .runTransaction((t) => {
      return t.get(classRef).then((doc) => {
        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        t.update(classRef, { class_time: data });
      });
    })
    .then((result) => {
      console.log("Transaction success!");
    })
    .catch((err) => {
      console.log("Transaction failure:", err);
    });
};

export const ChangeClassUsedTime = (data, id) => {
  let classRef = database.collection("class").doc(id);
  let transaction = database
    .runTransaction((t) => {
      return t.get(classRef).then((doc) => {
        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        t.update(classRef, { use_time: data });
      });
    })
    .then((result) => {
      console.log("Transaction success!");
    })
    .catch((err) => {
      console.log("Transaction failure:", err);
    });
};
