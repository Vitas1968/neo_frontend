import styled from 'styled-components';

export const Page = styled.main`
  min-height: 100vh;
  padding: 48px 24px 80px;
  background: #f4f7fb;

  @media (max-width: 560px) {
    padding: 28px 16px 48px;
  }
`;

export const Container = styled.div`
  width: min(100%, 900px);
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: 0;
  color: #172033;
  font-size: clamp(28px, 4vw, 40px);
`;

export const Subtitle = styled.p`
  margin: 12px 0 28px;
  color: #69778d;
  font-size: 16px;
`;

export const Tree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  gap: 12px;
`;

export const TreeNode = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 10px;
  background: #e6edf7;
  color: #34425a;
  font-family: monospace;
  font-size: 14px;
  font-weight: 700;

  @media (max-width: 560px) {
    flex-direction: column;
    gap: 6px;
    text-align: center;
  }
`;

export const Arrow = styled.span`
  color: #2f80ed;
  font-family: inherit;
`;

export const ParentCard = styled.section`
  padding: 28px;
  border: 2px solid #2f80ed;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 8px 24px rgb(38 57 77 / 8%);

  @media (max-width: 560px) {
    padding: 20px;
  }
`;

export const ChildCard = styled.section`
  margin-top: 28px;
  padding: 24px;
  border: 2px solid #9b51e0;
  border-radius: 16px;
  background: #fbf7ff;

  @media (max-width: 560px) {
    padding: 18px;
  }
`;

export const ComponentBadge = styled.span<{ $type: 'parent' | 'child' }>`
  display: inline-flex;
  padding: 5px 10px;
  border-radius: 999px;
  background: ${({ $type }) => ($type === 'parent' ? '#e7f2ff' : '#f1e6ff')};
  color: ${({ $type }) => ($type === 'parent' ? '#176bd1' : '#7b2cbf')};
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const ComponentTitle = styled.h2`
  margin: 14px 0 8px;
  color: #172033;
  font-size: 22px;
`;

export const Explanation = styled.p`
  margin: 0 0 20px;
  color: #69778d;
  line-height: 1.5;
`;

export const CodeLine = styled.code`
  display: inline-block;
  margin-bottom: 16px;
  padding: 8px 10px;
  border-radius: 8px;
  background: #242d3d;
  color: #a8d8ff;
  font-size: 13px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #38465c;
  font-size: 14px;
  font-weight: 700;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  padding: 0 14px;
  border: 1px solid #cfd9e8;
  border-radius: 10px;
  outline: none;
  color: #172033;
  font: inherit;

  &:focus {
    border-color: #2f80ed;
    box-shadow: 0 0 0 3px rgb(47 128 237 / 14%);
  }
`;

export const Value = styled.p`
  margin: 16px 0 0;
  color: #4e5d73;

  strong {
    color: #172033;
  }
`;

export const EventPanel = styled.div`
  margin-top: 20px;
  padding: 16px;
  border-radius: 12px;
  background: #edf7f1;
`;

export const EventTitle = styled.p`
  margin: 0 0 5px;
  color: #28734c;
  font-size: 13px;
  font-weight: 800;
`;

export const EventText = styled.p`
  margin: 0;
  color: #24533a;
`;

export const ActionButton = styled.button`
  width: 100%;
  height: 46px;
  margin-top: 18px;
  border: 0;
  border-radius: 10px;
  background: #8e44ad;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background: #783593;
  }
`;
