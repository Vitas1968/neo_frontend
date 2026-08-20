import {
  Brand,
  BrandMark,
  Contacts,
  Container,
  HeaderElement,
  LoanButton,
  Login,
  Navigation,
  NavigationLink,
  NavigationRow,
  Phone,
  TopRow,
} from './Header.styles';

export function Header() {
  return (
    <HeaderElement>
      <Container>
        <TopRow>
          <Brand to="/">
            <BrandMark>Н</BrandMark>
            Наш Банк
          </Brand>

          <Contacts>
            <Phone href="tel:88008000000">☎ 8 800 800-00-00</Phone>
            <Login type="button">Войти</Login>
          </Contacts>
        </TopRow>

        <NavigationRow>
          <Navigation aria-label="Основная навигация">
            <NavigationLink to="/" end>
              Домой
            </NavigationLink>

            <NavigationLink to="/loans">Кредиты</NavigationLink>

            <NavigationLink to="/services">Сервисы</NavigationLink>
          </Navigation>

          <LoanButton to="/loans">Оформить кредит</LoanButton>
        </NavigationRow>
      </Container>
    </HeaderElement>
  );
}
