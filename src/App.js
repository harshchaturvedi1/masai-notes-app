import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { AllNotes } from './pages/allNotes/allNotes';
import { BookMarkedNotes } from './pages/bookmarked/bookmarkedNotes';
import { Home } from './pages/home/home';
import { NewNotes } from './pages/newNotes/newNotes';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Home />
        <Routes>
          <Route exact path='/newnote' element={< NewNotes />}></Route>
          <Route exact path='/bookmarks' element={< BookMarkedNotes />}></Route>
          <Route exact path='/allnotes' element={< AllNotes />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
