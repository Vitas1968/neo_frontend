import {
  Container,
  Description,
  Example,
  ExampleTitle,
  GridContainer,
  GridItem,
  Page,
  Section,
  SectionTitle,
} from './GridPage.styles';

export function GridPage() {
  return (
    <Page>
      <Container>
        <h1>CSS Grid</h1>
        <Description>
          Здесь можно менять Grid-свойства в файле стилей и сразу смотреть результат.
        </Description>

        <Section>
          <SectionTitle>1. Базовая сетка</SectionTitle>
          <Example>
            <ExampleTitle>
              <code>grid-template-columns: repeat(3, 1fr)</code>
            </ExampleTitle>

            <GridContainer>
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
              <GridItem>4</GridItem>
              <GridItem>5</GridItem>
              <GridItem>6</GridItem>
            </GridContainer>
          </Example>
        </Section>

        <Section>
          <SectionTitle>2. Колонки разной ширины</SectionTitle>
          <Example>
            <ExampleTitle>
              <code>grid-template-columns: 1fr 2fr 1fr</code>
            </ExampleTitle>

            <GridContainer $columns="fractions">
              <GridItem>1fr</GridItem>
              <GridItem>2fr</GridItem>
              <GridItem>1fr</GridItem>
            </GridContainer>
          </Example>
        </Section>

        <Section>
          <SectionTitle>3. Объединение ячеек</SectionTitle>
          <Example>
            <ExampleTitle>
              <code>grid-column: span 2; grid-row: span 2</code>
            </ExampleTitle>

            <GridContainer>
              <GridItem $columnSpan={2}>1</GridItem>
              <GridItem $rowSpan={2}>2</GridItem>
              <GridItem>3</GridItem>
              <GridItem>4</GridItem>
              <GridItem>5</GridItem>
            </GridContainer>
          </Example>
        </Section>

        <Section>
          <SectionTitle>4. Адаптивная сетка</SectionTitle>
          <Example>
            <ExampleTitle>
              <code>repeat(auto-fit, minmax(150px, 1fr))</code>
            </ExampleTitle>

            <GridContainer $columns="responsive">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
              <GridItem>4</GridItem>
              <GridItem>5</GridItem>
              <GridItem>6</GridItem>
            </GridContainer>
          </Example>
        </Section>
      </Container>
    </Page>
  );
}
