// src/firebaseMethods.js
import { collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const addQuestion = async (question) => {
  try {
    await addDoc(collection(db, "questions"), {
      question: question,
      createdAt: new Date()
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getAllQuestions = async () => {
  const querySnapshot = await getDocs(collection(db, "questions"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const getQuestionById = async (id) => {
  const docRef = doc(db, "questions", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    console.log("No such document!");
    return null;
  }
};

export { addQuestion, getAllQuestions, getQuestionById };
