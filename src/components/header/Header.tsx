import type { ChangeEvent } from 'react';
import type { ThemePreference } from '../../styles/theme';
import { useThemePreference } from '../../contexts/ThemePreferenceContext';
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
  ThemeSelect,
  TopRow,
} from './Header.styles';

export function Header() {
  const { preference, setPreference } = useThemePreference();

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPreference(event.target.value as ThemePreference);
  };

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

            <ThemeSelect
              aria-label="Тема интерфейса"
              value={preference}
              onChange={handleThemeChange}
            >
              <option value="system">Системная</option>
              <option value="light">Светлая</option>
              <option value="dark">Тёмная</option>
            </ThemeSelect>

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

            <NavigationLink to="/flexbox">Flexbox page</NavigationLink>
          </Navigation>

          <LoanButton to="/loans">Оформить кредит</LoanButton>
        </NavigationRow>
      </Container>
    </HeaderElement>
  );
}
