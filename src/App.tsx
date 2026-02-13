import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppLayout, MainLayout } from './app/layouts';

import { LoginPage } from './pages/login/ui/LoginPage';
import { EmailLoginPage } from './pages/email-login/ui/EmailLoginPage';
import { EmailSignupPage } from './pages/email-signup/ui/EmailSignupPage';

import { TodoPage } from './pages/todo/ui/TodoPage';
import { CalendarPage } from './pages/calendar/ui/CalendarPage';
import { ProfilePage } from './pages/profile/ui/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login/email' element={<EmailLoginPage />} />
          <Route path='/signup/email' element={<EmailSignupPage />} />
          <Route element={<MainLayout />}>
            <Route path='/todo' element={<TodoPage />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
