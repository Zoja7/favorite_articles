import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePages from 'pages/HomePages';
import UserArticles from 'pages/UserArticles';
import AllArticles from 'pages/AllArticles';
import ArticlesDetails from 'pages/ArticlesDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
        <Route path="/user-articles" element={<UserArticles />} />
        <Route path="/all-articles" element={<AllArticles />} />
        <Route path="/all-articles/:articlesId" element={<ArticlesDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
export default App;
