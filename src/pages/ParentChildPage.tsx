import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './ParentChildPage.styles';

type ChildProps = {
  name: string;
  onNameChange: (newName: string) => void;
  onChildButtonClick: (message: string) => void;
};

function Child({ name, onNameChange, onChildButtonClick }: ChildProps) {
  const { t } = useTranslation();

  return (
    <S.ChildCard>
      <S.ComponentBadge $type="child">{t('parentChild.child')}</S.ComponentBadge>

      <S.ComponentTitle>{t('parentChild.childTitle')}</S.ComponentTitle>

      <S.Explanation>{t('parentChild.childExplanation')}</S.Explanation>

      <S.CodeLine>name={'{name}'}</S.CodeLine>

      <S.Value>
        {t('parentChild.receivedName')}: <strong>{name}</strong>
      </S.Value>

      <S.Label htmlFor="child-name">{t('parentChild.childInputLabel')}</S.Label>

      <S.Input
        id="child-name"
        value={name}
        onChange={(event) => onNameChange(event.target.value)}
      />

      <S.ActionButton
        type="button"
        onClick={() => onChildButtonClick(t('parentChild.childEventMessage'))}
      >
        {t('parentChild.sendEvent')}
      </S.ActionButton>
    </S.ChildCard>
  );
}

export function ParentChildPage() {
  const { t } = useTranslation();

  const [name, setName] = useState('Виталий');
  const [lastChildEvent, setLastChildEvent] = useState(t('parentChild.noEvents'));

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  const handleChildButtonClick = (message: string) => {
    setLastChildEvent(message);
  };

  return (
    <S.Page>
      <S.Container>
        <S.Title>{t('parentChild.title')}</S.Title>
        <S.Subtitle>{t('parentChild.subtitle')}</S.Subtitle>

        <S.Tree>
          <S.TreeNode>
            ParentChildPage
            <S.Arrow>↓ props</S.Arrow>
          </S.TreeNode>

          <S.TreeNode>
            Child
            <S.Arrow>↑ callback</S.Arrow>
          </S.TreeNode>
        </S.Tree>

        <S.ParentCard>
          <S.ComponentBadge $type="parent">{t('parentChild.parent')}</S.ComponentBadge>

          <S.ComponentTitle>{t('parentChild.parentTitle')}</S.ComponentTitle>

          <S.Explanation>{t('parentChild.parentExplanation')}</S.Explanation>

          <S.Label htmlFor="parent-name">{t('parentChild.parentInputLabel')}</S.Label>

          <S.Input
            id="parent-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <S.Value>
            {t('parentChild.parentState')}: <strong>{name}</strong>
          </S.Value>

          <S.EventPanel>
            <S.EventTitle>{t('parentChild.lastEvent')}</S.EventTitle>
            <S.EventText>{lastChildEvent}</S.EventText>
          </S.EventPanel>

          <Child
            name={name}
            onNameChange={handleNameChange}
            onChildButtonClick={handleChildButtonClick}
          />
        </S.ParentCard>
      </S.Container>
    </S.Page>
  );
}
