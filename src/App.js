import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./component/Header";
import DayList from "./component/DayList";
import EmptyPage from "./component/EmptyPage";
import Day from "./component/Day";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
              <Route path={"/"} element={<DayList/>}/>
              <Route path={"/day/:day"} element={<Day/>}/>
              <Route path={"/create_word"} element={<CreateWord/>}/>
              <Route path={"/create_day"} element={<CreateDay/>}/>
              <Route path={"*"} element={<EmptyPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
