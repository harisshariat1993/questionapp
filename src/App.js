// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AskQuestion from './pages/AskQuestion';
import AllQuestions from './pages/AllQuestions';
import Question from './pages/Question';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<AllQuestions />} />
            <Route path="/askquestion" element={<AskQuestion />} />
            <Route path="/question/:id" element={<Question />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AskQuestion from './pages/AskQuestion';
// import AllQuestions from './pages/AllQuestions';
// import Question from './pages/Question';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<AllQuestions />} />
//           <Route path="/askquestion" element={<AskQuestion />} />
//           <Route path="/question/:id" element={<Question />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


// // // // src/App.js
// // // import React from 'react';
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // import Header from './components/Header';
// // // import Footer from './components/Footer';
// // // import AskQuestion from './pages/AskQuestion';
// // // import AllQuestions from './pages/AllQuestions';
// // // import Question from './pages/Question';

// // // // const App = () => {
// // // //   return (
// // // //     <Router>
// // // //       <div>
// // // //         <Routes>
// // // //           <Route path="/" element={<AllQuestions />} />
// // // //           <Route path="/askquestion" element={<AskQuestion />} />
// // // //           <Route path="/question/:id" element={<Question />} />
// // // //         </Routes>
// // // //       </div>
// // // //     </Router>
// // // //   );
// // // // };
// // // const App = () => {
// // //   return (
// // //     <Router>
// // //       <div>
// // //         <Header />
// // //         <div className="container mt-4">
// // //           <Routes>
// // //             <Route path="/" element={<AllQuestions />} />
// // //             <Route path="/askquestion" element={<AskQuestion />} />
// // //             <Route path="/question/:id" element={<Question />} />
// // //           </Routes>
// // //         </div>
// // //         <Footer />
// // //       </div>
// // //     </Router>
// // //   );
// // // };
// // // export default App;

// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import Header from './components/Header';
// // import Footer from './components/Footer';
// // import AskQuestion from './pages/AskQuestion';
// // import AllQuestions from './pages/AllQuestions';
// // import Question from './pages/Question';

// // const App = () => {
// //   return (
// //     <Router>
// //       <div>
// //         <Header />
// //         <div className="container mt-4">
// //           <Routes>
// //             <Route path="/" element={<AllQuestions />} />
// //             <Route path="/askquestion" element={<AskQuestion />} />
// //             <Route path="/question/:id" element={<Question />} />
// //           </Routes>
// //         </div>
// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import AskQuestion from './pages/AskQuestion';
// import AllQuestions from './pages/AllQuestions';
// import Question from './pages/Question';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <div className="container mt-4">
//           <Routes>
//             <Route path="/" element={<AllQuestions />} />
//             <Route path="/askquestion" element={<AskQuestion />} />
//             <Route path="/question/:id" element={<Question />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
