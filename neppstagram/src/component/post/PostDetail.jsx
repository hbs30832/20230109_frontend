import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { getPostById } from "../../api/auth";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then((data) => setPost(data));
  }, [id]);

  console.log(post);

  if (!post) return null;

  return (
    <Container>
      <ImageBox>
        <img src={post.img_list[0].url} alt="" />
        <ProfileBox>
          <ProfileCircle>
            <img src={post.author.profile_url} alt="" />
          </ProfileCircle>
          <p>{post.author.name}</p>
        </ProfileBox>
        {post.body}
      </ImageBox>
    </Container>
  );
}

const Container = styled.div``;

const ImageBox = styled.div`
  width: 500px;

  img {
    width: 100%;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const ProfileCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;

  img {
    width: 100%;
  }
`;

export default PostDetail;
