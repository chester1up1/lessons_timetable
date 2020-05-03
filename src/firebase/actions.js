import {storage, database} from './index';


export const GetClassroomsFirebase = () => {
  const productsRef = database.collection('classrooms');
  const classroom = [];
  return productsRef.get().then(snapshot=>{
      snapshot.forEach(x=>{                   
        classroom.push(x.data());
      })
      return classroom;
    }).catch(error=>{console.log('Помилка: ',error);})
}

export const PostClassrooms = (data,id) => {
  database.collection('classrooms').doc(id).set(data);
}

export const DeleteClassroomsFire = (id) => {
  database.collection('classrooms').doc(id).delete();
}

export const PostLessons = (data,id) => {
  database.collection('lessons').doc(id).set(data);
}

export const GetLessonsFirebase = () => {
  const productsRef = database.collection('lessons');
  const lessons = [];
  return productsRef.get().then(snapshot=>{
      snapshot.forEach(x=>{                   
        lessons.push(x.data());
      })
      console.log('er',lessons)
      return lessons;
    }).catch(error=>{console.log('Помилка: ',error);})
}

export const DeleteLessonsFire = (id) => {
  database.collection('lessons').doc(id).delete();
}

export const GetTeachersFirebase = () => {
  const productsRef = database.collection('teachers');
  const teachers = [];
  return productsRef.get().then(snapshot=>{
      snapshot.forEach(x=>{                   
        teachers.push(x.data());
      })
      console.log('teachers',teachers)
      return teachers;
    }).catch(error=>{console.log('Помилка: ',error);})
}

export const DeleteTeachersFire = (id) => {
  database.collection('teachers').doc(id).delete();
}

export const PostTeachers = (data,id) => {
  database.collection('teachers').doc(id).set(data);
}

export const PostClass = (data,id) => {
  database.collection('class').doc(id).set(data);
}

export const GetClassFirebase = () => {
  const productsRef = database.collection('class');
  const class_ = [];
  return productsRef.get().then(snapshot=>{
      snapshot.forEach(x=>{                   
        class_.push(x.data());
      })
      return class_;
    }).catch(error=>{console.log('Помилка: ',error);})
}

export const DeleteClassFire = (id) => {
  database.collection('class').doc(id).delete();
}

export const ChangeClassLessonsAdd = (data, id) => {
  let classRef = database.collection('class').doc(id);
  let transaction = database.runTransaction(t => {
    return t.get(classRef)
      .then(doc => {
        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        t.update(classRef, {lessons: data});
      });
  }).then(result => {
    console.log('Transaction success!');
  }).catch(err => {
    console.log('Transaction failure:', err);
  });
}

export const ChangeClassTime = (data, id) => {
  let classRef = database.collection('class').doc(id);
  let transaction = database.runTransaction(t => {
    return t.get(classRef)
      .then(doc => {
        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        t.update(classRef, {class_time: data});
      });
  }).then(result => {
    console.log('Transaction success!');
  }).catch(err => {
    console.log('Transaction failure:', err);
  });
}


