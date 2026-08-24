import styled from 'styled-components';

type GridColumns = 'three' | 'fractions' | 'responsive';

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
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const GridContainer = styled.div<{
  $columns?: GridColumns;
}>`
  display: grid;
  min-height: 160px;
  grid-auto-rows: 70px;
  gap: ${({ theme }) => theme.spacing.m};
  padding: ${({ theme }) => theme.spacing.l};
  border: 2px dashed ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius.m};
  background-color: ${({ theme }) => theme.colors.surfaceAccent};

  grid-template-columns: ${({ $columns }) => {
    if ($columns === 'fractions') {
      return '1fr 2fr 1fr';
    }

    if ($columns === 'responsive') {
      return 'repeat(auto-fit, minmax(150px, 1fr))';
    }

    return 'repeat(3, 1fr)';
  }};
`;

export const GridItem = styled.div<{
  $columnSpan?: 1 | 2;
  $rowSpan?: 1 | 2;
}>`
  display: grid;
  min-width: 0;
  place-items: center;
  grid-column: span ${({ $columnSpan = 1 }) => $columnSpan};
  grid-row: span ${({ $rowSpan = 1 }) => $rowSpan};
  border-radius: ${({ theme }) => theme.radius.s};
  color: ${({ theme }) => theme.colors.surface};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 700;
`;
