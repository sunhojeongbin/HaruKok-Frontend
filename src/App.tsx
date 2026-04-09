import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Modal } from './shared/ui/modal/Modal';
import { Toast } from './shared/ui/toast/Toast';

import { LoginPage } from './pages/login/ui/LoginPage';
import { EmailLoginPage } from './pages/email-login/ui/EmailLoginPage';
import { EmailSignupPage } from './pages/email-signup/ui/EmailSignupPage';
import { TodoPage } from './pages/todo/ui/TodoPage';
import { CalendarPage } from './pages/calendar/ui/CalendarPage';
import { ProfilePage } from './pages/profile/ui/ProfilePage';
import { CategoryCreatePage, CategoryEditPage, CategoryPage } from './pages/categories/ui';
import { RoutinePage } from './pages/routines/ui/RoutinePage';

import { AuthProvider, QueryProvider } from './app/providers';
import { ProtectedRoute, PublicRoute } from './app/routes';
import { MainLayout } from './app/layouts';

function App() {
  return (
    <QueryProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path='/' element={<LoginPage />} />
              <Route path='/login/email' element={<EmailLoginPage />} />
              <Route path='/signup/email' element={<EmailSignupPage />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path='/todo' element={<TodoPage />} />
                <Route path='/calendar' element={<CalendarPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
              <Route path='/categories' element={<CategoryPage />} />
              <Route path='/categories/new' element={<CategoryCreatePage />} />
              <Route path='/categories/:categoryId/edit' element={<CategoryEditPage />} />
              <Route path='/routines' element={<RoutinePage />} />
            </Route>
          </Routes>
          <Modal />
          <Toast />
        </AuthProvider>
      </BrowserRouter>
    </QueryProvider>
  );
}

export default App;
