import React from 'react'
import { injected, bsc } from "../utils/connector";
import { useWeb3React } from '@web3-react/core';
import { Button, useWalletModal, ConnectorId } from 'crox-new-uikit'
import useI18n from 'hooks/useI18n'

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { account, activate, deactivate } = useWeb3React()
  // const walletocnnec = useWalnet(;)
  const handleLogin = (connectorId: ConnectorId) => {
    // if (connectorId === "walletconnect") {
    //   return activate(walletconnect);
    // }
    if (connectorId === "bsc") {
      return activate(bsc);
    }
    return activate(injected);
  };

  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)


  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
