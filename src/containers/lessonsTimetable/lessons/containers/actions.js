import { storage, database } from "../../../../firebase/index";

export const AddLessonToTimetable = (
  day,
  lesson_number,
  class_,
  lesson,
  teacher,
  classroom,
  all_class
) => {
  function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  // all_class.forEach((element) => {
  //   Object.entries(element).forEach((item) => {
  //     if (item[0] == day) {
  //       Object.entries(item[1]).forEach((x) => {
  //         if (x[0] == lesson_number) {
  //           const even = (obj) => isEmpty(obj);
  //           if (Object.entries(x[1]).some(even)) {
  //             console.log("ПУСТИЙ");
  //           } else {
  //             console.log("ЕРРОР");
  //           }
  //         }
  //       });
  //     }
  //   });
  // });
  console.log(day, lesson_number, class_, lesson, teacher, classroom);
  return async () => {
    const data = {
      lesson: lesson,
      teacher: teacher,
      classroom: classroom * 1,
    };
    let ref = database.collection("class_timetable").doc(class_);
    let tableRef = database.collection("class_timetable").doc(class_);
    let getDoc = tableRef
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          switch (day) {
            case "Monday":
              if (lesson_number == 1) {
                ref.update({
                  Monday: {
                    ...doc.data().Monday,
                    1: data,
                  },
                });
              }
              if (lesson_number == 2) {
                ref.update({
                  Monday: {
                    ...doc.data().Monday,
                    2: data,
                  },
                });
              }
              if (lesson_number == 3) {
                ref.update({
                  Monday: { ...doc.data().Monday, 3: data },
                });
              }
              if (lesson_number == 4) {
                ref.update({
                  Monday: {
                    ...doc.data().Monday,
                    4: data,
                  },
                });
              }
              if (lesson_number == 5) {
                ref.update({
                  Monday: {
                    ...doc.data().Monday,
                    5: data,
                  },
                });
              }
              if (lesson_number == 6) {
                ref.update({
                  Monday: {
                    ...doc.data().Monday,
                    6: data,
                  },
                });
              }
              if (lesson_number == 7) {
                ref.update({
                  Monday: {
                    ...doc.data().Monday,
                    7: data,
                  },
                });
              }
              if (lesson_number == 8) {
                ref.update({
                  Monday: {
                    ...doc.data().Monday,
                    8: data,
                  },
                });
              }
              break;
            case "Tuesday":
              if (lesson_number == 1) {
                ref.update({
                  Tuesday: {
                    ...doc.data().Tuesday,
                    1: data,
                  },
                });
              }
              if (lesson_number == 2) {
                ref.update({
                  Tuesday: {
                    ...doc.data().Tuesday,
                    2: data,
                  },
                });
              }
              if (lesson_number == 3) {
                ref.update({
                  Tuesday: {
                    ...doc.data().Tuesday,
                    3: data,
                  },
                });
              }
              if (lesson_number == 4) {
                ref.update({
                  Tuesday: {
                    ...doc.data().Tuesday,
                    4: data,
                  },
                });
              }
              if (lesson_number == 5) {
                ref.update({
                  Tuesday: {
                    ...doc.data().Tuesday,
                    5: data,
                  },
                });
              }
              if (lesson_number == 6) {
                ref.update({
                  Tuesday: {
                    ...doc.data().Tuesday,
                    6: data,
                  },
                });
              }
              if (lesson_number == 7) {
                ref.update({
                  Tuesday: {
                    ...doc.data().Tuesday,
                    7: data,
                  },
                });
              }
              if (lesson_number == 8) {
                ref.update({
                  Tuesday: {
                    ...doc.data().Tuesday,
                    8: data,
                  },
                });
              }
              break;
            case "Wednesday":
              if (lesson_number == 1) {
                ref.update({
                  Wednesday: {
                    ...doc.data().Wednesday,
                    1: data,
                  },
                });
              }
              if (lesson_number == 2) {
                ref.update({
                  Wednesday: {
                    ...doc.data().Wednesday,
                    2: data,
                  },
                });
              }
              if (lesson_number == 3) {
                ref.update({
                  Wednesday: {
                    ...doc.data().Wednesday,
                    3: data,
                  },
                });
              }
              if (lesson_number == 4) {
                ref.update({
                  Wednesday: {
                    ...doc.data().Wednesday,
                    4: data,
                  },
                });
              }
              if (lesson_number == 5) {
                ref.update({
                  Wednesday: {
                    ...doc.data().Wednesday,
                    5: data,
                  },
                });
              }
              if (lesson_number == 6) {
                ref.update({
                  Wednesday: {
                    ...doc.data().Wednesday,
                    6: data,
                  },
                });
              }
              if (lesson_number == 7) {
                ref.update({
                  Wednesday: {
                    ...doc.data().Wednesday,
                    7: data,
                  },
                });
              }
              if (lesson_number == 8) {
                ref.update({
                  Wednesday: {
                    ...doc.data().Wednesday,
                    8: data,
                  },
                });
              }
              break;
            case "Thursday":
              if (lesson_number == 1) {
                ref.update({
                  Thursday: {
                    ...doc.data().Thursday,
                    1: data,
                  },
                });
              }
              if (lesson_number == 2) {
                ref.update({
                  Thursday: {
                    ...doc.data().Thursday,
                    2: data,
                  },
                });
              }
              if (lesson_number == 3) {
                ref.update({
                  Thursday: {
                    ...doc.data().Thursday,
                    3: data,
                  },
                });
              }
              if (lesson_number == 4) {
                ref.update({
                  Thursday: {
                    ...doc.data().Thursday,
                    4: data,
                  },
                });
              }
              if (lesson_number == 5) {
                ref.update({
                  Thursday: {
                    ...doc.data().Thursday,
                    5: data,
                  },
                });
              }
              if (lesson_number == 6) {
                ref.update({
                  Thursday: {
                    ...doc.data().Thursday,
                    6: data,
                  },
                });
              }
              if (lesson_number == 7) {
                ref.update({
                  Thursday: {
                    ...doc.data().Thursday,
                    7: data,
                  },
                });
              }
              if (lesson_number == 8) {
                ref.update({
                  Thursday: {
                    ...doc.data().Thursday,
                    8: data,
                  },
                });
              }
              break;
            case "Friday":
              if (lesson_number == 1) {
                ref.update({
                  Friday: {
                    ...doc.data().Friday,
                    1: data,
                  },
                });
              }
              if (lesson_number == 2) {
                ref.update({
                  Friday: {
                    ...doc.data().Friday,
                    2: data,
                  },
                });
              }
              if (lesson_number == 3) {
                ref.update({
                  Friday: {
                    ...doc.data().Friday,
                    3: data,
                  },
                });
              }
              if (lesson_number == 4) {
                ref.update({
                  Friday: {
                    ...doc.data().Friday,
                    4: data,
                  },
                });
              }
              if (lesson_number == 5) {
                ref.update({
                  Friday: {
                    ...doc.data().Friday,
                    5: data,
                  },
                });
              }
              if (lesson_number == 6) {
                ref.update({
                  Friday: {
                    ...doc.data().Friday,
                    6: data,
                  },
                });
              }
              if (lesson_number == 7) {
                ref.update({
                  Friday: {
                    ...doc.data().Friday,
                    7: data,
                  },
                });
              }
              if (lesson_number == 8) {
                ref.update({
                  Friday: {
                    ...doc.data().Friday,
                    8: data,
                  },
                });
              }
              break;
            default:
              break;
          }
        }
      })
      .catch((err) => {
        console.log("Error getting document", err);
      });
  };
};
