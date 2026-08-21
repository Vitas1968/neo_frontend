import {
  Container,
  Description,
  Example,
  ExampleTitle,
  FlexContainer,
  FlexItem,
  FlexItemWide,
  Page,
  Section,
  SectionTitle,
} from './FlexboxPage.styles';

export function FlexboxPage() {
  return (
    <Page>
      <Container>
        <h1>Flexbox</h1>
        <Description>
          Здесь можно менять свойства в файле стилей и сразу смотреть результат.
        </Description>

        <Section>
          <SectionTitle>1. Базовый Flexbox</SectionTitle>
          <Example>
            <ExampleTitle>
              <code>display: flex</code>
            </ExampleTitle>

            <FlexContainer>
              <FlexItem>1</FlexItem>
              <FlexItem>2</FlexItem>
              <FlexItem>3</FlexItem>
            </FlexContainer>
          </Example>
        </Section>

        <Section>
          <SectionTitle>2. Направление элементов</SectionTitle>
          <Example>
            <ExampleTitle>
              <code>flex-direction: column</code>
            </ExampleTitle>

            <FlexContainer $direction="column">
              <FlexItem>1</FlexItem>
              <FlexItem>2</FlexItem>
              <FlexItem>3</FlexItem>
            </FlexContainer>
          </Example>
        </Section>

        <Section>
          <SectionTitle>3. Выравнивание по главной оси</SectionTitle>
          <Example>
            <ExampleTitle>
              <code>justify-content: space-between</code>
            </ExampleTitle>

            <FlexContainer $justify="space-between">
              <FlexItem>1</FlexItem>
              <FlexItem>2</FlexItem>
              <FlexItem>3</FlexItem>
            </FlexContainer>
          </Example>
        </Section>

        <Section>
          <SectionTitle>4. Выравнивание по поперечной оси</SectionTitle>
          <Example>
            <ExampleTitle>
              <code>align-items: center</code>
            </ExampleTitle>

            <FlexContainer $align="center">
              <FlexItem>1</FlexItem>
              <FlexItemWide>2</FlexItemWide>
              <FlexItem>3</FlexItem>
            </FlexContainer>
          </Example>
        </Section>

        <Section>
          <SectionTitle>5. Перенос элементов</SectionTitle>
          <Example>
            <ExampleTitle>
              <code>flex-wrap: wrap</code>
            </ExampleTitle>

            <FlexContainer $wrap>
              <FlexItem>1</FlexItem>
              <FlexItem>2</FlexItem>
              <FlexItem>3</FlexItem>
              <FlexItem>4</FlexItem>
              <FlexItem>5</FlexItem>
              <FlexItem>6</FlexItem>
            </FlexContainer>
          </Example>
        </Section>
      </Container>
    </Page>
  );
}
