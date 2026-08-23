# Neo Frontend

Учебный frontend-проект банковского приложения, реализованный по макетам Figma.

## Реализовано

- Главная страница со счётом, банковской картой и иллюстрацией.
- Общая шапка с навигацией и переключателем темы.
- Форма заявки на кредит с нативной проверкой обязательных полей.
- Сообщение об успешной отправке заявки с автоматическим закрытием через 10 секунд.
- Светлая, тёмная и системная темы. Выбор сохраняется в `localStorage`; системный режим отслеживает настройку ОС.
- Экран `ServicesPage` — песочница компонентов интерфейса.
- Экран `FlexboxPage` — практика свойств Flexbox.
- Стили в отдельных файлах `*.styles.ts` через `styled-components`.

## Маршруты

| Путь | Страница | Назначение |
| --- | --- | --- |
| `/` | `HomePage` | Главная страница |
| `/loans` | `LoansPage` | Заявка на кредит |
| `/services` | `ServicesPage` | UI-песочница |
| `/flexbox` | `FlexboxPage` | Практика Flexbox |

## Стек

- React 19
- TypeScript
- Vite
- React Router DOM
- Redux Toolkit + React Redux
- styled-components
- ESLint
- Prettier

## Запуск проекта

Требуется Node.js LTS.

```bash
npm install
npm run dev
```

После запуска Vite выведет адрес приложения. Обычно это `http://localhost:5173`.

## Команды

| Команда | Назначение |
| --- | --- |
| `npm run dev` | Запуск приложения в режиме разработки |
| `npm run build` | Проверка TypeScript и production-сборка в `dist` |
| `npm run preview` | Локальный запуск production-сборки |
| `npm run lint` | Проверка кода правилами ESLint |
| `npm run format` | Форматирование файлов через Prettier |
| `npm run format:check` | Проверка форматирования без изменения файлов |

## Структура проекта

```text
src/
├── assets/
│   └── growth-illustration.svg
├── components/
│   ├── header/
│   │   ├── Header.tsx
│   │   └── Header.styles.ts
│   └── loan-success-modal/
│       ├── LoanSuccessModal.tsx
│       └── LoanSuccessModal.styles.ts
├── features/
│   └── theme/
│       └── themeSlice.ts
├── pages/
│   ├── FlexboxPage.tsx
│   ├── FlexboxPage.styles.ts
│   ├── HomePage.tsx
│   ├── HomePage.styles.ts
│   ├── LoansPage.tsx
│   ├── LoansPage.styles.ts
│   ├── ServicesPage.tsx
│   └── ServicesPage.styles.ts
├── providers/
│   └── AppThemeProvider.tsx
├── store/
│   ├── hooks.ts
│   └── store.ts
├── styles/
│   ├── GlobalStyle.ts
│   ├── styled.d.ts
│   └── theme.ts
├── App.tsx
└── main.tsx
```

## Управление темой

`themeSlice` хранит выбранный режим: `light`, `dark` или `system`.

```text
Header
  → dispatch(setPreference(...))
  → Redux store
  → AppThemeProvider
  → styled-components ThemeProvider
  → CSS-токены компонентов
```

`AppThemeProvider` выбирает объект `lightTheme` или `darkTheme` и передаёт его в `styled-components`. Компоненты используют токены темы, например:

```ts
color: ${({ theme }) => theme.colors.textPrimary};
```

Redux DevTools позволяет просматривать состояние `theme.preference` и actions `theme/setPreference` во время разработки.

## Основные компоненты

- `App.tsx` — маршруты приложения.
- `Header` — шапка, навигация и выбор темы.
- `HomePage` — главная страница.
- `LoansPage` — форма заявки и управление модальным окном.
- `LoanSuccessModal` — сообщение об успешной отправке заявки.
- `AppThemeProvider` — выбирает активную тему и передаёт её в `styled-components`.
- `themeSlice` — Redux-состояние выбранного режима темы.
- `GlobalStyle` — глобальные CSS-правила приложения.
