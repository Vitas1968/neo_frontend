import growthIllustration from '../assets/growth-illustration.svg';
import {
  AccountSection,
  ActionButton,
  Balance,
  BankCard,
  CardActions,
  CardDate,
  CardLabel,
  CardNumber,
  Content,
  GrowthIllustration,
  Page,
  PaymentCircle,
  PaymentSystem,
} from './HomePage.styles';

export function HomePage() {
  return (
    <Page>
      <Content>
        <AccountSection>
          <BankCard>
            <CardLabel>Текущий счёт</CardLabel>
            <Balance>₽ 5 750,20</Balance>

            <PaymentSystem aria-label="Mastercard">
              <PaymentCircle $color="#ff5f00" />
              <PaymentCircle $color="#ffba00" />
            </PaymentSystem>

            <CardNumber>5222 5555 7788 3299</CardNumber>
            <CardDate>09/26</CardDate>
          </BankCard>

          <CardActions>
            <ActionButton type="button">История</ActionButton>
            <ActionButton type="button">Поддержка</ActionButton>
          </CardActions>
        </AccountSection>

        <GrowthIllustration
          src={growthIllustration}
          alt="Рост финансовых возможностей"
        />
      </Content>
    </Page>
  );
}