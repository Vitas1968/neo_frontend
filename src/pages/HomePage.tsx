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
  PaymentCircles,
  PaymentName,
  PaymentSystem,
} from './HomePage.styles';

export function HomePage() {
  return (
    <Page>
      <Content>
        <AccountSection>
          <BankCard>
            <CardLabel>Баланс</CardLabel>
            <Balance>₽5,750,20</Balance>

            <PaymentSystem aria-label="Mastercard">
              <PaymentCircles>
                <PaymentCircle $color="#ff5f00" />
                <PaymentCircle $color="#ffba00" />
              </PaymentCircles>
              <PaymentName>Mastercard</PaymentName>
            </PaymentSystem>

            <CardNumber>5282 3456 7890 1289</CardNumber>
            <CardDate>09/25</CardDate>
          </BankCard>

          <CardActions>
            <ActionButton type="button">История</ActionButton>
            <ActionButton type="button">Поддержка</ActionButton>
          </CardActions>
        </AccountSection>

        <GrowthIllustration src={growthIllustration} alt="Рост финансовых возможностей" />
      </Content>
    </Page>
  );
}
