import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './FlexboxPage.styles';

type DeliveryMethod = 'courier' | 'pickup';

export function FlexboxPage() {
  const { t } = useTranslation();
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('courier');

  return (
    <S.Page>
      <S.Container>
        <S.PageHeader>
          <S.BackLink to="/">{t('checkout.back')}</S.BackLink>

          <S.Title>{t('checkout.title')}</S.Title>

          <S.Subtitle>{t('checkout.subtitle')}</S.Subtitle>
        </S.PageHeader>

        <S.CheckoutLayout>
          <S.FormColumn>
            <S.FormCard>
              <S.CardTitle>{t('checkout.contactData')}</S.CardTitle>

              <S.FieldsRow>
                <S.Field>
                  <S.Label htmlFor="firstName">{t('checkout.firstName')}</S.Label>

                  <S.Input id="firstName" placeholder={t('checkout.firstNamePlaceholder')} />
                </S.Field>

                <S.Field>
                  <S.Label htmlFor="lastName">{t('checkout.lastName')}</S.Label>

                  <S.Input id="lastName" placeholder={t('checkout.lastNamePlaceholder')} />
                </S.Field>
              </S.FieldsRow>

              <S.Field>
                <S.Label htmlFor="email">{t('checkout.email')}</S.Label>

                <S.Input id="email" type="email" placeholder={t('checkout.emailPlaceholder')} />
              </S.Field>

              <S.Field>
                <S.Label htmlFor="phone">{t('checkout.phone')}</S.Label>

                <S.Input id="phone" type="tel" placeholder={t('checkout.phonePlaceholder')} />
              </S.Field>
            </S.FormCard>

            <S.FormCard>
              <S.CardTitle>{t('checkout.deliveryMethod')}</S.CardTitle>

              <S.DeliveryOptions>
                <S.DeliveryOption
                  $isSelected={deliveryMethod === 'courier'}
                  type="button"
                  onClick={() => setDeliveryMethod('courier')}
                >
                  <S.OptionIcon>🚚</S.OptionIcon>

                  <S.OptionContent>
                    <S.OptionTitle>{t('checkout.courier')}</S.OptionTitle>

                    <S.OptionDescription>{t('checkout.courierDescription')}</S.OptionDescription>
                  </S.OptionContent>

                  <S.OptionPrice>{t('checkout.free')}</S.OptionPrice>
                </S.DeliveryOption>

                <S.DeliveryOption
                  $isSelected={deliveryMethod === 'pickup'}
                  type="button"
                  onClick={() => setDeliveryMethod('pickup')}
                >
                  <S.OptionIcon>🏬</S.OptionIcon>

                  <S.OptionContent>
                    <S.OptionTitle>{t('checkout.pickup')}</S.OptionTitle>

                    <S.OptionDescription>{t('checkout.pickupDescription')}</S.OptionDescription>
                  </S.OptionContent>

                  <S.OptionPrice>{t('checkout.today')}</S.OptionPrice>
                </S.DeliveryOption>
              </S.DeliveryOptions>

              {deliveryMethod === 'courier' && (
                <S.AddressSection>
                  <S.FieldsRow>
                    <S.Field>
                      <S.Label htmlFor="city">{t('checkout.city')}</S.Label>

                      <S.Input id="city" placeholder={t('checkout.cityPlaceholder')} />
                    </S.Field>

                    <S.Field>
                      <S.Label htmlFor="street">{t('checkout.street')}</S.Label>

                      <S.Input id="street" placeholder={t('checkout.streetPlaceholder')} />
                    </S.Field>
                  </S.FieldsRow>

                  <S.FieldsRow>
                    <S.Field>
                      <S.Label htmlFor="house">{t('checkout.house')}</S.Label>

                      <S.Input id="house" placeholder={t('checkout.housePlaceholder')} />
                    </S.Field>

                    <S.Field>
                      <S.Label htmlFor="apartment">{t('checkout.apartment')}</S.Label>

                      <S.Input id="apartment" placeholder={t('checkout.apartmentPlaceholder')} />
                    </S.Field>
                  </S.FieldsRow>
                </S.AddressSection>
              )}
            </S.FormCard>

            <S.FormCard>
              <S.CardTitle>{t('checkout.paymentMethod')}</S.CardTitle>

              <S.PaymentRow>
                <S.PaymentBadge>VISA</S.PaymentBadge>

                <S.PaymentText>
                  <strong>{t('checkout.bankCard')}</strong>
                  <span>{t('checkout.paymentDescription')}</span>
                </S.PaymentText>

                <S.RadioMark $isSelected />
              </S.PaymentRow>
            </S.FormCard>
          </S.FormColumn>

          <S.SummaryColumn>
            <S.SummaryCard>
              <S.SummaryTitle>{t('checkout.yourOrder')}</S.SummaryTitle>

              <S.ProductsList>
                <S.Product>
                  <S.ProductImage $color="#dbeafe">⌚</S.ProductImage>

                  <S.ProductInfo>
                    <S.ProductTitle>{t('checkout.watchTitle')}</S.ProductTitle>
                    <S.ProductMeta>{t('checkout.watchMeta')}</S.ProductMeta>
                    <S.ProductQuantity>{t('checkout.quantity')}</S.ProductQuantity>
                  </S.ProductInfo>

                  <S.ProductPrice>12 990 ₽</S.ProductPrice>
                </S.Product>

                <S.Product>
                  <S.ProductImage $color="#fef3c7">🎧</S.ProductImage>

                  <S.ProductInfo>
                    <S.ProductTitle>{t('checkout.headphonesTitle')}</S.ProductTitle>

                    <S.ProductMeta>{t('checkout.headphonesMeta')}</S.ProductMeta>
                    <S.ProductQuantity>{t('checkout.quantity')}</S.ProductQuantity>
                  </S.ProductInfo>

                  <S.ProductPrice>8 490 ₽</S.ProductPrice>
                </S.Product>
              </S.ProductsList>

              <S.PromoRow>
                <S.PromoInput placeholder={t('checkout.promoCode')} />

                <S.PromoButton type="button">{t('checkout.apply')}</S.PromoButton>
              </S.PromoRow>

              <S.PriceList>
                <S.PriceRow>
                  <span>{t('checkout.productsCount')}</span>
                  <span>21 480 ₽</span>
                </S.PriceRow>

                <S.PriceRow>
                  <span>{t('checkout.delivery')}</span>
                  <S.FreePrice>{t('checkout.free')}</S.FreePrice>
                </S.PriceRow>

                <S.TotalRow>
                  <span>{t('checkout.total')}</span>
                  <strong>21 480 ₽</strong>
                </S.TotalRow>
              </S.PriceList>

              <S.SubmitButton type="button">{t('checkout.confirm')}</S.SubmitButton>

              <S.SecurityText>{t('checkout.securityText')}</S.SecurityText>
            </S.SummaryCard>
          </S.SummaryColumn>
        </S.CheckoutLayout>
      </S.Container>
    </S.Page>
  );
}
