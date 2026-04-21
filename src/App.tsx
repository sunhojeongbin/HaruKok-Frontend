import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Modal } from './shared/ui/modal/Modal';
import { Toast } from './shared/ui/toast/Toast';

import { TodoPage } from './pages/todo/ui/TodoPage';
import { EmailLoginPage, EmailSignupPage, LoginPage } from './pages/auth';
import { CalendarPage } from './pages/calendar/ui/CalendarPage';
import { ProfilePage } from './pages/profile/ui/ProfilePage';
import { CategoriesPage, CategoryCreatePage, CategoryEditPage } from './pages/categories';
import { RoutineCreatePage, RoutineEditPage, RoutinesPage } from './pages/routines';

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
              <Route path='/categories' element={<CategoriesPage />} />
              <Route path='/categories/new' element={<CategoryCreatePage />} />
              <Route path='/categories/:categoryId/edit' element={<CategoryEditPage />} />
              <Route path='/routines' element={<RoutinesPage />} />
              <Route path='/routines/new' element={<RoutineCreatePage />} />
              <Route path='/routines/:routineId/edit' element={<RoutineEditPage />} />
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
