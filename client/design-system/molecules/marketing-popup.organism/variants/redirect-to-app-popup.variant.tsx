import React, { ReactElement, FC, useEffect, useCallback, useRef } from 'react';
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
import { useClimeAppLink } from 'client/hooks';
import { useAppConfig } from 'client/state/contexts/app-config.context/hooks';
import { CLIME_POP_UP_VIEWED } from 'client/services/analytics.service/constants';
import {
  REDIRECT_POPUP_ANDROID_STORE_LINK,
  REDIRECT_POPUP_IOS_STORE_LINK,
} from 'client/constants';
import { redirectToAppPopupOpened } from '../state/atoms';

export const RedirectToAppPopup: FC = (): ReactElement | null => {
  const { t } = useTranslation('common');

  const goToAppButtonRef = useRef(null);

  const climeAppLink = useClimeAppLink(
    REDIRECT_POPUP_IOS_STORE_LINK,
    REDIRECT_POPUP_ANDROID_STORE_LINK
  );

  const [popupOpened, setPopupOpened] = useAtom(redirectToAppPopupOpened);

  const onClosePopup = useCallback(() => {
    setPopupOpened(false);
  }, []);

  const appConfig = useAppConfig();

  const showRedirectToAppPopup = appConfig?.showRedirectToAppPopup;

  useEffect(() => {
    if (popupOpened && showRedirectToAppPopup && !desktop) {
      trackEvent(CLIME_POP_UP_VIEWED);
    }
  }, [popupOpened, showRedirectToAppPopup]);

  if (desktop || !showRedirectToAppPopup) return null;

  return (
    <Modal
      isOpen={popupOpened}
      onClose={onClosePopup}
      motionPreset="slideInBottom"
      closeOnOverlayClick={false}
      initialFocusRef={goToAppButtonRef}
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
            w="116px"
            me={4}
          >
            {t('Not Now')}
          </Button>
          <NextLink href={climeAppLink} passHref>
            <Button ref={goToAppButtonRef} as="a" variant="cta" flex={1}>
              {t('Go to Clime app')}
            </Button>
          </NextLink>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RedirectToAppPopup;
