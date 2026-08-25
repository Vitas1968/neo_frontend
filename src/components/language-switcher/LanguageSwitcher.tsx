import { useTranslation } from 'react-i18next';
import * as S from './LanguageSwitcher.styles';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  const changeLanguage = (language: 'ru' | 'en') => {
    void i18n.changeLanguage(language);
  };

  return (
    <S.Container aria-label="Переключатель языка">
      <S.LanguageButton
        $isActive={currentLanguage === 'ru'}
        type="button"
        onClick={() => changeLanguage('ru')}
      >
        RU
      </S.LanguageButton>

      <S.LanguageButton
        $isActive={currentLanguage === 'en'}
        type="button"
        onClick={() => changeLanguage('en')}
      >
        EN
      </S.LanguageButton>
    </S.Container>
  );
}
