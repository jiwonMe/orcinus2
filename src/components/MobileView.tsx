import styled from 'styled-components';

interface ViewportProps {
  children: React.ReactNode;
  className?: string;
}

const MobileViewport = ({ children, className }: ViewportProps) => {
  return (
    <FullScreen>
      <ViewportLayout className={className}>{children}</ViewportLayout>
    </FullScreen>
  );
};

export default MobileViewport;

const FullScreen = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  align-items: center;
`;

const ViewportLayout = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 500px;

  height: 100%;

  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
`;
