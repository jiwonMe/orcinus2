import styled from 'styled-components';

const VerticalSpace = ({ size }: { size: number }) => {
  return <VerticalSpaceLayout size={size} />;
};

export default VerticalSpace;

const VerticalSpaceLayout = styled.div<{
  size: number;
}>`
  width: 100%;

  height: ${({ size }) => size}px;
`;
