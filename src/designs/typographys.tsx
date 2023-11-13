import styled, { css } from 'styled-components';
import colors from './colors';

const defaultFontCSS = css`
  font-family: 'Pretendard', Noto Sans KR, sans-serif;
  margin: 0;
`;

const Heading2 = styled.h2`
  ${defaultFontCSS}
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.25;
`;

const Heading3 = styled.h3`
  ${defaultFontCSS}
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.25;
`;

const Body = styled.div`
  ${defaultFontCSS}
  color: ${colors.gray700};
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
`;

const Description = styled.div`
  ${defaultFontCSS}
  color: ${colors.gray500};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: normal;
`;

const ButtonText = styled.span`
  ${defaultFontCSS}
  font-size: 0.875rem;
  font-weight: 600;
`;

export { Heading2, Heading3, Body, Description, ButtonText };
