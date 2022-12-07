import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  margin: 30px auto;
  display: flex;
  width: 900px;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    width: auto;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

// .authentication-container {
// margin: 30px auto;
// display: flex;
// width: 900px;
// justify-content: space-between;

// @media screen and (max-width: 900px) {
//   width: auto;
//   flex-direction: column;
//   gap: 80px;
// }
// }
