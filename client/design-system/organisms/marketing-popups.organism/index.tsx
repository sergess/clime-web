import React, { ReactElement, FC, useEffect, useCallback } from 'react';
import { useAtom } from 'jotai';
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import { isDesktop as desktop } from 'react-device-detect';

import { trackEvent } from 'client/services';
import { marketingPopupShowed } from 'client/state/atoms';
import { useClimeAppLink } from 'client/hooks';
import { useAppConfig } from 'client/state/contexts/app-config.context/hooks';

import { CLIME_POP_UP_VIEWED } from 'client/services/analytics.service/constants';

export const MarketingPopups: FC = (): ReactElement | null => {
  const { t } = useTranslation('common');

  const climeAppLink = useClimeAppLink();

  const [popupShowed, setPopupShowed] = useAtom(marketingPopupShowed);

  const onClosePopup = useCallback(() => {
    setPopupShowed(false);
  }, []);

  const appConfig = useAppConfig();

  const showMarketingPopup = appConfig?.showMarketingPopup;

  useEffect(() => {
    if (popupShowed && showMarketingPopup) trackEvent(CLIME_POP_UP_VIEWED);
  }, [popupShowed, showMarketingPopup]);

  if (desktop || !showMarketingPopup) return null;

  return (
    <Modal
      isOpen={popupShowed}
      onClose={onClosePopup}
      motionPreset="slideInBottom"
      closeOnOverlayClick={false}
    >
      <ModalOverlay bg="rgba(15, 21, 39, 0.8)" />
      <ModalContent
        pt={5}
        px={4}
        pb={4}
        mt="auto"
        mb={3}
        mx={1.5}
        borderRadius="2xl"
      >
        <ModalHeader display="flex" alignItems="center" p={0}>
          <Image
            src="/icons/clime-logo.svg"
            width={32}
            height={32}
            alt="Clime"
          />
          <Text
            color="blue.800"
            fontWeight={700}
            lineHeight="1.5rem"
            fontSize="1.3125rem"
            marginStart={3}
          >
            {t('Clime app has more to offer')}
          </Text>
        </ModalHeader>
        <ModalBody py={5} px={0}>
          <Text
            color="gray.600"
            fontSize="0.875rem"
            fontWeight={500}
            lineHeight="1.25rem"
          >
            {t(
              'Get all-round weather data right to your device! Personalize your experience and receive timely weather alerts.'
            )}
          </Text>
        </ModalBody>
        <ModalFooter
          p={0}
          justifyContent="space-between"
          className="marketing-popup__controls"
        >
          <Button
            variant="cta-outline"
            borderColor="blue.50"
            onClick={onClosePopup}
          >
            {t('Not Now')}
          </Button>
          <NextLink href={climeAppLink} passHref>
            <Button as="a" variant="cta">
              {t('Go to Clime app')}
            </Button>
          </NextLink>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MarketingPopups;
