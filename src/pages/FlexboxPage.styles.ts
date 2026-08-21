import styled from 'styled-components';

export const Page = styled.main`
  min-height: calc(100vh - 90px);
  background-color: #f7f7f7;
`;

export const Container = styled.div`
  width: min(calc(100% - 48px), 1100px);
  margin: 0 auto;
  padding: 56px 0 80px;

  h1 {
    margin: 0;
    color: #1f2937;
    font-size: 36px;
  }

  @media (max-width: 768px) {
    width: min(calc(100% - 32px), 1100px);
    padding-top: 32px;
  }
`;

export const Description = styled.p`
  margin: 12px 0 40px;
  color: #6b7280;
`;

export const Section = styled.section`
  margin-top: 32px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 16px;
  color: #1f2937;
  font-size: 22px;
`;

export const Example = styled.div`
  padding: 24px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgb(0 0 0 / 8%);
`;

export const ExampleTitle = styled.p`
  margin: 0 0 16px;
  color: #374151;
`;

export const FlexContainer = styled.div<{
  $direction?: 'row' | 'column';
  $justify?: 'flex-start' | 'center' | 'space-between';
  $align?: 'flex-start' | 'center' | 'flex-end';
  $wrap?: boolean;
}>`
  display: flex;
  min-height: 160px;
  gap: 12px;
  padding: 16px;
  border: 2px dashed #a5b4fc;
  border-radius: 12px;
  background-color: #eef2ff;

  flex-direction: ${({ $direction }) => $direction ?? 'row'};
  justify-content: ${({ $justify }) => $justify ?? 'flex-start'};
  align-items: ${({ $align }) => $align ?? 'stretch'};
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
`;

export const FlexItem = styled.div`
  display: flex;
  width: 100px;
  min-height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #ffffff;
  background-color: #202ed7;
  font-size: 20px;
  font-weight: 700;
`;

export const FlexItemWide = styled(FlexItem)`
  min-height: 120px;
  background-color: #7c3aed;
`;
