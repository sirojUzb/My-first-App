import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: fit-content;
  background: #0e1734;
  border-radius: 4px;
  padding: 0 32px;
  height: 47px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "")};
`;
