import { styled } from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.dark ? props.theme.darkMode.primaryBackgroundColor : "red "};
  padding: ${({ padding }) => (padding ? `${padding}px` : "15px")};
  border: none;
  border-radius: 12px;
  color: ${({ theme }) => theme.darkMode.primaryTextColor};
  cursor: pointer;
`;
export const SecondButton = styled(Button)`
  margin: ${({ margin }) => (margin ? `${margin}px` : "0")};
  &:hover {
    background-color: black;
    color: red;
  }
`;

// `` - tilda(backtick)
// export default - 1 marta (1ta faylni ichida) va QAVSsiz ishlatiladi.
// export - ko'p, lekin {QAVS} bilan ishlatiladi.
// "export default"ni nomini ozgartirgan holda ishlatishimiz m-n.
// "export"da u narsa yoq.
