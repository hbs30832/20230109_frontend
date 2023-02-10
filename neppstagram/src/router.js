import { Route, Routes } from "react-router-dom";
import Home from "./component/page/Home";
import Login from "./component/page/Login";
import Main from "./component/page/Main";
import Post from "./component/page/Post";
import Profile from "./component/page/Profile";
import SignUp from "./component/page/SignUp";
import PostDetail from "./component/post/PostDetail";
import PostEdit from "./component/post/PostEdit";
import PostList from "./component/post/PostList";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/" element={<Main />}>
        <Route path="profile" element={<Profile />} />
        <Route path="post/*" element={<Post />}>
          <Route path="" element={<PostList />} />
          <Route path="edit" element={<PostEdit />} />
          <Route path=":id" element={<PostDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};
