import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BaseLayout, MainLayout } from './app/layouts';
import { LoginPage } from './pages/login/ui/LoginPage';
import { EmailLoginPage } from './pages/email-login/ui/EmailLoginPage';
import { TodoPage } from './pages/todo/ui/TodoPage';
import { MyPage } from './pages/my/ui/MyPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BaseLayout />}>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/login/email' element={<EmailLoginPage />} />
                </Route>
                <Route element={<MainLayout />}>
                    <Route path='/todo' element={<TodoPage />} />
                    <Route path='/my' element={<MyPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
