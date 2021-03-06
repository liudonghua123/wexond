import * as React from 'react';
import { observer } from 'mobx-react-lite';

import { StyledSmallDialog, Title } from './style';
import { Button } from '~/renderer/components/Button';
import store from '~/renderer/views/app/store';

type ClickEvent = (e: React.MouseEvent<HTMLDivElement>) => void;

export const SelectionDialog = observer(
  ({
    amount,
    visible,
    onDeleteClick,
    onCancelClick,
  }: {
    amount: number;
    visible: boolean;
    onDeleteClick: ClickEvent;
    onCancelClick: ClickEvent;
  }) => {
    return (
      <StyledSmallDialog visible={visible}>
        <Title>{amount} selected</Title>
        <Button style={{ marginLeft: 16 }} onClick={onDeleteClick}>
          Delete
        </Button>
        <Button
          background={
            store.theme['overlay.foreground'] === 'light'
              ? 'rgba(255, 255, 255, 0.08)'
              : 'rgba(0, 0, 0, 0.08)'
          }
          foreground={
            store.theme['overlay.foreground'] === 'light' ? 'white' : 'black'
          }
          style={{ marginLeft: 8 }}
          onClick={onCancelClick}
        >
          Cancel
        </Button>
      </StyledSmallDialog>
    );
  },
);
