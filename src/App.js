import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Comman/Home';
import BookAppointment from './Book Appointment/bookAppointment';
import SpecialistLocation from './Specialist Location /specialistLocation';
import ChemistLocation from './Chemist Location/chemistLocation';
import AboutBPH from './AboutBPH/aboutBPH';
import Header from './Comman/Header';
import TestBph from './TestBPH/testBph';
import NavBarWar from './Comman/NavBarWar';


//////////////////   Admin Side ////////////////////
import AdminLogin from './Admin/Auth/AdminLogin';
import AdminDashboard from './Admin/Dashboard/AdminDashboard';
import AdminMRTable from './Admin/User/Component/AdminMRTable';
import AdminAddMR from './Admin/User/Page/AdminAddMR';
import Table from './Admin/User/Component/Re';
import AdminChemistTable from './Admin/User/Component/AdminChemistTable';
import AdminSpecialistTabel from './Admin/User/Component/AdminSpecialistTabel';
import AdminAddChemist from './Admin/User/Page/AdminAddChemist';
import AdminAddSpecialist from './Admin/User/Page/AdminAddSpecialist';
import EditChemist from './Admin/User/Page/EditChemist';
import EditSpecialist from './Admin/User/Page/EditSpecialist';
import EditMR from './Admin/User/Page/EditMR';




function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBarWar /> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/aboutbph' component={AboutBPH} />
          <Route exact path='/chemistlocator' component={ChemistLocation} />
          <Route exact path='/specialistlocator' component={SpecialistLocation} />
          <Route exact path='/bookappointment' component={BookAppointment} />
          <Route exact path='/testbph' component={TestBph} />

          {/* //////////////////// Admin Side Router /////////////  */}
          <Route exact path='/admin' component={AdminLogin} />
          <Route exact path='/admin/dashboard' component={AdminDashboard} />
          <Route exact path='/admin/mr' component={AdminMRTable} />
          <Route exact path='/admin/addmr' component={AdminAddMR} />
          <Route exact path='/admin/chemist' component={AdminChemistTable} />
          <Route exact path='/admin/specialist' component={AdminSpecialistTabel} />
          <Route exact path='/admin/addchemist' component={AdminAddChemist} />
          <Route exact path='/admin/addspecialist' component={AdminAddSpecialist} />
          <Route exact path='/admin/editchemist/:id' component={EditChemist} />
          <Route exact path='/admin/editspecialist/:id' component={EditSpecialist} />
          <Route exact path='/admin/editmr/:id' component={EditMR} />








        </Switch>
      </Router>
    </div>
  );
}

export default App;
