import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 370px) {
      ${props}
    }
  `;
};

export const md = (props) => {
  return css`
    @media only screen and (max-width: 900px) {
      ${props}
    }
  `;
};