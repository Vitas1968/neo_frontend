import type { ChangeEvent } from 'react';
import { LanguageSwitcher } from '../language-switcher/LanguageSwitcher';
import { selectThemePreference, setPreference } from '../../features/theme/themeSlice';
import type { ThemePreference } from '../../styles/theme';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
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
  const dispatch = useAppDispatch();
  const preference = useAppSelector(selectThemePreference);

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPreference(event.target.value as ThemePreference));
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

            <LanguageSwitcher />

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

            <NavigationLink to="/grid">Grid page</NavigationLink>

            <NavigationLink to="/parent-child">PC page</NavigationLink>
          </Navigation>

          <LoanButton to="/loans">Оформить кредит</LoanButton>
        </NavigationRow>
      </Container>
    </HeaderElement>
  );
}
