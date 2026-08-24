import styled from 'styled-components';

export const Page = styled.main`
  min-height: calc(100vh - 90px);
  background-color: ${({ theme }) => theme.colors.pageBackground};
`;

export const Container = styled.div`
  width: min(calc(100% - 48px), 1100px);
  margin: 0 auto;
  padding: 56px 0 80px;

  h1 {
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(calc(100% - 32px), 1100px);
    padding-top: 32px;
  }
`;

export const Description = styled.p`
  margin: 12px 0 40px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Section = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

export const SectionTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.l};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 22px;
`;

export const Example = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.l};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const ExampleTitle = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.l};
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
  gap: ${({ theme }) => theme.spacing.m};
  padding: ${({ theme }) => theme.spacing.l};
  border: 2px dashed #a5b4fc;
  border-radius: ${({ theme }) => theme.radius.m};
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
  border-radius: ${({ theme }) => theme.radius.s};
  color: ${({ theme }) => theme.colors.surface};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 700;
`;

export const FlexItemWide = styled(FlexItem)`
  min-height: 120px;
  background-color: #7c3aed;
`;

export const Ticker = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;

export const TickerText = styled.span`
  display: inline-block;
  animation:
    ticker 5s linear 3 forwards,
    hide 1ms linear 15s forwards;

  @keyframes ticker {
    from {
      transform: translateX(300%);
    }

    to {
      transform: translateX(-100%);
    }
  }

  @keyframes hide {
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
`;
