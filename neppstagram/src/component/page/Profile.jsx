import styled from "styled-components";
import ProfileBox from "../profile/ProfileBox";

function Profile() {
  return (
    <Container>
      <ProfileBox />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

export default Profile;
