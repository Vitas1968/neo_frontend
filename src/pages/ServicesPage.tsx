import { useState } from 'react';
import {
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardGrid,
  Checkbox,
  CheckboxLabel,
  Container,
  Divider,
  Field,
  FieldLabel,
  FormGrid,
  HelperText,
  Input,
  InputGroup,
  Label,
  Modal,
  ModalBackdrop,
  ModalContent,
  Page,
  Progress,
  ProgressBar,
  Radio,
  RadioGroup,
  RadioLabel,
  Section,
  SectionTitle,
  Select,
  Slider,
  Switch,
  SwitchLabel,
  Table,
  Tabs,
  Tab,
  Tag,
  Tags,
  Textarea,
  ColorPicker,
} from './ServicesPage.styles';

export function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Все');
  const [selectedColor, setSelectedColor] = useState('#66ff1a');
  const [isProgressCardVisible, setIsProgressCardVisible] = useState(true);

  return (
    <Page>
      <Container>
        <h1>UI-песочница</h1>
        <p>Экран для экспериментов с HTML-разметкой и styled-components.</p>

        <Section>
          <SectionTitle>Кнопки, вкладки и статусы</SectionTitle>

          <ButtonGroup>
            <Button type="button">Основная кнопка</Button>
            <Button $variant="secondary" type="button">
              Вторичная кнопка
            </Button>
            <Button $variant="danger" type="button">
              Удалить
            </Button>
            <Button type="button" disabled>
              Disabled
            </Button>
            <Button type="button" onClick={() => setIsModalOpen(true)}>
              Открыть модальное окно
            </Button>
          </ButtonGroup>

          <Tabs>
            {['Все', 'Платежи', 'Переводы'].map((tab) => (
              <Tab
                $active={activeTab === tab}
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Tab>
            ))}
          </Tabs>

          <Tags>
            <Badge>Новый</Badge>
            <Tag>Переводы</Tag>
            <Tag>Платежи</Tag>
            <Tag>Кредиты</Tag>
          </Tags>

          <Alert>Обычное информационное сообщение.</Alert>
        </Section>

        <Divider />

        <Section>
          <SectionTitle>Поля формы</SectionTitle>

          <FormGrid>
            <Field>
              <FieldLabel htmlFor="text">Текстовое поле</FieldLabel>
              <Input id="text" placeholder="Введите текст" />
              <HelperText>Подсказка под полем.</HelperText>
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" placeholder="name@example.com" />
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Пароль</FieldLabel>
              <Input id="password" type="password" placeholder="Введите пароль" />
            </Field>

            <Field>
              <FieldLabel htmlFor="date">Дата</FieldLabel>
              <Input id="date" type="date" />
            </Field>

            <Field>
              <FieldLabel htmlFor="select">Выпадающий список</FieldLabel>
              <Select id="select" defaultValue="">
                <option value="" disabled>
                  Выберите вариант
                </option>
                <option>Первый вариант</option>
                <option>Второй вариант</option>
                <option>Третий вариант</option>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="textarea">Многострочное поле</FieldLabel>
              <Textarea id="textarea" placeholder="Введите сообщение" rows={4} />
            </Field>
          </FormGrid>

          <InputGroup>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                checked={isProgressCardVisible}
                onChange={(event) => setIsProgressCardVisible(event.target.checked)}
              />
              Скрыть прогресс
            </CheckboxLabel>

            <RadioGroup>
              <RadioLabel>
                <Radio type="radio" name="option" defaultChecked />
                Вариант 1
              </RadioLabel>

              <RadioLabel>
                <Radio type="radio" name="option" />
                Вариант 2
              </RadioLabel>
            </RadioGroup>

            <SwitchLabel>
              <Switch type="checkbox" />
              Переключатель
            </SwitchLabel>

            <SwitchLabel>
              <ColorPicker
                value={selectedColor}
                aria-label="Выберите цвет"
                onChange={(event) => setSelectedColor(event.target.value)}
              />
              Выбор цвета слайдера
            </SwitchLabel>
          </InputGroup>

          <Field>
            <Label htmlFor="range">Слайдер</Label>
            <Slider
              id="range"
              type="range"
              min="0"
              max="100"
              defaultValue="60"
              $color={selectedColor}
            />
          </Field>
        </Section>

        <Divider />

        <Section>
          <SectionTitle>Карточки, прогресс и таблица</SectionTitle>

          <CardGrid>
            <Card>
              <h2>Баланс</h2>
              <strong>125 000 ₽</strong>
              <p>Доступно на счёте</p>
            </Card>

            <Card>
              <h2>Заявки</h2>
              <strong>3</strong>
              <p>Активные заявки</p>
            </Card>
            {isProgressCardVisible && (
              <Card>
                <h2>Прогресс</h2>
                <Progress>
                  <ProgressBar />
                </Progress>
                <p>Выполнено 60%</p>
              </Card>
            )}
          </CardGrid>

          <Table>
            <thead>
              <tr>
                <th>Дата</th>
                <th>Операция</th>
                <th>Сумма</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>21.08.2026</td>
                <td>Оплата интернета</td>
                <td>− 700 ₽</td>
                <td>Исполнено</td>
              </tr>
              <tr>
                <td>20.08.2026</td>
                <td>Перевод</td>
                <td>+ 5 000 ₽</td>
                <td>Исполнено</td>
              </tr>
            </tbody>
          </Table>
        </Section>
      </Container>

      {isModalOpen && (
        <ModalBackdrop>
          <Modal role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <ModalContent>
              <h2 id="modal-title">Модальное окно</h2>
              <p>Пример диалогового окна.</p>
              <Button type="button" onClick={() => setIsModalOpen(false)}>
                Закрыть
              </Button>
            </ModalContent>
          </Modal>
        </ModalBackdrop>
      )}
    </Page>
  );
}
