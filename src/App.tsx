import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppLayout, MainLayout, SubLayout } from './app/layouts';
import { LoginPage } from './pages/login/ui/LoginPage';
import { TodoPage } from './pages/todo/ui/TodoPage';
import { ProfilePage } from './pages/profile/ui/ProfilePage';
import { EmailLoginPage } from './pages/email-login/ui/EmailLoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<LoginPage />} />
          <Route element={<MainLayout />}>
            <Route path='/todo' element={<TodoPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
          <Route element={<SubLayout />}>
            <Route path='/login/email' element={<EmailLoginPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
