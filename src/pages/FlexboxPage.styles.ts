import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.main`
  min-height: 100vh;
  padding: 48px 24px 80px;
  background: #f4f7fb;

  @media (max-width: 560px) {
    padding: 28px 16px 48px;
  }
`;

export const Container = styled.div`
  width: min(100%, 1180px);
  margin: 0 auto;
`;

export const PageHeader = styled.header`
  margin-bottom: 32px;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 18px;
  color: #5b6b83;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #2f80ed;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: #172033;
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.15;
`;

export const Subtitle = styled.p`
  margin: 10px 0 0;
  color: #6b778c;
  font-size: 16px;
`;

export const CheckoutLayout = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 28px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  min-width: 0;
  flex: 1 1 0;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 800px) {
    width: 100%;
    flex-basis: auto;
  }
`;

export const SummaryColumn = styled.aside`
  width: 100%;
  flex: 0 1 370px;

  @media (max-width: 800px) {
    flex-basis: auto;
  }
`;

export const FormCard = styled.section`
  padding: 28px;
  border: 1px solid #e5eaf2;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 8px 24px rgb(38 57 77 / 5%);

  @media (max-width: 560px) {
    padding: 20px;
    border-radius: 16px;
  }
`;

export const CardTitle = styled.h2`
  margin: 0 0 22px;
  color: #172033;
  font-size: 20px;
`;

export const FieldsRow = styled.div`
  display: flex;
  gap: 16px;

  & + & {
    margin-top: 16px;
  }

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const Field = styled.div`
  display: flex;
  min-width: 0;
  flex: 1 1 0;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: #38465c;
  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 0 14px;
  border: 1px solid #d5ddea;
  border-radius: 10px;
  outline: none;
  color: #172033;
  font: inherit;

  &::placeholder {
    color: #9ba8ba;
  }

  &:focus {
    border-color: #2f80ed;
    box-shadow: 0 0 0 3px rgb(47 128 237 / 14%);
  }
`;

export const DeliveryOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DeliveryOption = styled.button<{ $isSelected: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 14px;
  padding: 16px;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? '#2f80ed' : '#e0e6ef')};
  border-radius: 14px;
  background: ${({ $isSelected }) => ($isSelected ? '#f2f8ff' : '#ffffff')};
  cursor: pointer;
  text-align: left;

  @media (max-width: 560px) {
    align-items: flex-start;
  }
`;

export const OptionIcon = styled.span`
  display: grid;
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 12px;
  background: #e8f2ff;
  font-size: 21px;
`;

export const OptionContent = styled.span`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 4px;
`;

export const OptionTitle = styled.span`
  color: #172033;
  font-size: 15px;
  font-weight: 700;
`;

export const OptionDescription = styled.span`
  color: #78869a;
  font-size: 13px;
`;

export const OptionPrice = styled.span`
  margin-left: auto;
  color: #2f80ed;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;

  @media (max-width: 560px) {
    padding-top: 3px;
  }
`;

export const AddressSection = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  gap: 16px;
`;

export const PaymentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const PaymentBadge = styled.div`
  display: grid;
  width: 52px;
  height: 34px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 7px;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  color: #ffffff;
  font-size: 11px;
  font-style: italic;
  font-weight: 800;
`;

export const PaymentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    color: #172033;
    font-size: 15px;
  }

  span {
    color: #78869a;
    font-size: 13px;
  }
`;

export const RadioMark = styled.span<{ $isSelected: boolean }>`
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  margin-left: auto;
  border: 5px solid ${({ $isSelected }) => ($isSelected ? '#2f80ed' : '#c9d2df')};
  border-radius: 50%;
`;

export const SummaryCard = styled.div`
  position: sticky;
  top: 24px;
  padding: 26px;
  border-radius: 20px;
  background: #172033;
  box-shadow: 0 16px 32px rgb(23 32 51 / 20%);

  @media (max-width: 800px) {
    position: static;
  }

  @media (max-width: 560px) {
    padding: 20px;
    border-radius: 16px;
  }
`;

export const SummaryTitle = styled.h2`
  margin: 0 0 22px;
  color: #ffffff;
  font-size: 21px;
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Product = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const ProductImage = styled.div<{ $color: string }>`
  display: grid;
  width: 52px;
  height: 52px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 12px;
  background: ${({ $color }) => $color};
  font-size: 25px;
`;

export const ProductInfo = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 3px;
`;

export const ProductTitle = styled.strong`
  overflow: hidden;
  color: #ffffff;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductMeta = styled.span`
  color: #aeb9c9;
  font-size: 12px;
`;

export const ProductQuantity = styled.span`
  color: #7f91aa;
  font-size: 12px;
`;

export const ProductPrice = styled.span`
  margin-left: auto;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;

  @media (max-width: 560px) {
    font-size: 13px;
  }
`;

export const PromoRow = styled.div`
  display: flex;
  margin: 24px 0;
  gap: 8px;
`;

export const PromoInput = styled.input`
  width: 100%;
  min-width: 0;
  height: 42px;
  padding: 0 12px;
  border: 1px solid #43516a;
  border-radius: 9px;
  outline: none;
  background: #253249;
  color: #ffffff;
  font: inherit;

  &::placeholder {
    color: #8b9ab0;
  }
`;

export const PromoButton = styled.button`
  height: 42px;
  flex: 0 0 auto;
  padding: 0 14px;
  border: 0;
  border-radius: 9px;
  background: #34425a;
  color: #ffffff;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #43516a;
  }
`;

export const PriceList = styled.div`
  display: flex;
  padding: 20px 0;
  border-top: 1px solid #35425a;
  border-bottom: 1px solid #35425a;
  flex-direction: column;
  gap: 13px;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: #b7c1d0;
  font-size: 14px;
`;

export const FreePrice = styled.span`
  color: #61d7a8;
  font-weight: 700;
`;

export const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  color: #ffffff;
  font-size: 16px;

  strong {
    font-size: 22px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 52px;
  margin-top: 22px;
  border: 0;
  border-radius: 11px;
  background: #2f80ed;
  color: #ffffff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;

  &:hover {
    background: #176bd1;
  }
`;

export const SecurityText = styled.p`
  margin: 14px 0 0;
  color: #8492a8;
  font-size: 11px;
  line-height: 1.45;
  text-align: center;
`;
