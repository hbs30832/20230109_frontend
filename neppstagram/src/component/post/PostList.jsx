import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { authAxios } from "../../api/auth";

function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    authAxios
      .get("/posts", {
        params: {
          page: 1,
        },
      })
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      });
  }, []);

  if (posts.legnth === 0) return null;
  return (
    <Container>
      {posts.map((post) => (
        <li>
          <Link to={"/post/" + post.id}>
            <ImageBox>
              <img src={post.img_list[0]?.url} alt="" />
            </ImageBox>
          </Link>
        </li>
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageBox = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.bd_color};

  img {
    width: 100%;
  }
`;

export default PostList;
