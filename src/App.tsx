import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Modal } from '@shared/ui/modal';
import { Toast } from '@shared/ui/toast';

import { EmailLoginPage, EmailSignupPage, PasswordResetPage, WelcomePage } from '@pages/auth';
import { TodoPage, TodoSearchPage } from '@pages/todo';
import { CalendarPage } from '@pages/calendar';
import { ProfilePage } from '@pages/profile';
import { CategoriesPage, CategoryCreatePage, CategoryEditPage } from '@pages/categories';
import { RoutineCreatePage, RoutineEditPage, RoutinesPage } from '@pages/routines';

import { AuthProvider, QueryProvider } from '@app/providers';
import { ProtectedRoute, PublicRoute } from '@app/routes';
import { MainLayout } from '@app/layouts';

function App() {
  return (
    <QueryProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path='/' element={<WelcomePage />} />
              <Route path='/auth/login' element={<EmailLoginPage />} />
              <Route path='/auth/password/reset' element={<PasswordResetPage />} />
              <Route path='/auth/signup' element={<EmailSignupPage />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path='/todo' element={<TodoPage />} />
                <Route path='/calendar' element={<CalendarPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
              <Route path='/todo/search' element={<TodoSearchPage />} />
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
