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
  ModalCloseButton,
  Flex,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';

import { trackEvent } from 'client/services';
import { useClimeAppLink } from 'client/hooks';
import { useAppConfig } from 'client/state/contexts/app-config.context/hooks';
import { CLIME_FULL_SCREEN_VIEWED } from 'client/services/analytics.service/constants';
import {
  FULL_SCREEN_POPUP_ANDROID_STORE_LINK,
  FULL_SCREEN_POPUP_IOS_STORE_LINK,
} from 'client/constants';
import { redirectToAppPopupOpened } from '../state/atoms';

export const FullScreenAppPromoPopup: FC = (): ReactElement | null => {
  const { t } = useTranslation('common');

  const goToAppButtonRef = useRef(null);

  const climeAppLink = useClimeAppLink(
    FULL_SCREEN_POPUP_IOS_STORE_LINK,
    FULL_SCREEN_POPUP_ANDROID_STORE_LINK
  );

  const [popupOpened, setPopupOpened] = useAtom(redirectToAppPopupOpened);

  const onClosePopup = useCallback(() => {
    setPopupOpened(false);
  }, []);

  const appConfig = useAppConfig();

  const showRedirectToAppPopup = appConfig?.showRedirectToAppPopup;

  useEffect(() => {
    if (popupOpened && showRedirectToAppPopup)
      trackEvent(CLIME_FULL_SCREEN_VIEWED);
  }, [popupOpened, showRedirectToAppPopup]);

  if (!showRedirectToAppPopup) return null;

  return (
    <Modal
      isOpen={popupOpened}
      onClose={onClosePopup}
      closeOnOverlayClick={false}
      initialFocusRef={goToAppButtonRef}
    >
      <ModalOverlay bg="rgba(15, 21, 39, 0.8)" />
      <ModalContent
        pt={0}
        px={5}
        pb={{ base: 10, md: 5 }}
        my="auto"
        borderRadius={{ base: '0', md: '2xl' }}
        w="100%"
        maxW={{ base: '100%', md: '348px', lg: '752px' }}
        h="auto"
        minH={{ base: '100%', md: 'auto' }}
        bg={{
          base: "#0F1525 url('/full-screen-popup-mob-bg.jpg')",
          lg: "#0F1525 url('/full-screen-popup-desk-bg.jpg')",
        }}
        bgPosition="center top"
        bgRepeat="no-repeat"
        bgSize="cover"
        className="fullscreen-popup"
      >
        <ModalHeader p={0}>
          <Text
            color="white"
            fontWeight={700}
            lineHeight="2.25rem"
            fontSize="2rem"
            pt={{ base: 24, lg: 16 }}
            whiteSpace="pre-line"
          >
            {t('All-in-one\n weather tracker')}
          </Text>
        </ModalHeader>
        <ModalCloseButton
          color="white"
          left={5}
          top={{ base: 10, lg: 6 }}
          w={6}
          h={6}
        />
        <ModalBody py={6} px={0}>
          <Flex>
            <Flex w="100%" flexDirection="column">
              <Text
                color="white"
                fontSize="1rem"
                fontWeight={500}
                lineHeight="1.25rem"
              >
                {t(
                  'The Clime app delivers essential weather data and timely alerts to your device. Check it out!'
                )}
              </Text>
              <Flex align="center" mb={2.5} mt={6} ps={{ base: 2.5, lg: 0 }}>
                <Flex me={3}>
                  <Image
                    src="/icons/ic_map.svg"
                    width={24}
                    height={24}
                    alt="Forecast map"
                  />
                </Flex>
                <Text
                  color="white"
                  fontSize="0.875rem"
                  lineHeight="0.875rem"
                  fontWeight="600"
                >
                  {t('Advanced precipitation forecast map')}
                </Text>
              </Flex>
              <Flex align="center" mb={2.5} ps={{ base: 2.5, lg: 0 }}>
                <Flex me={3}>
                  <Image
                    src="/icons/ic_hurricane.svg"
                    width={24}
                    height={24}
                    alt="Hurricane tracker"
                  />
                </Flex>
                <Text
                  color="white"
                  fontSize="0.875rem"
                  lineHeight="0.875rem"
                  fontWeight="600"
                >
                  {t('Hurricane tracker')}
                </Text>
              </Flex>
              <Flex align="center" mb={2.5} ps={{ base: 2.5, lg: 0 }}>
                <Flex me={3}>
                  <Image
                    src="/icons/ic_lightning.svg"
                    width={24}
                    height={24}
                    alt="Lightning tracker"
                  />
                </Flex>
                <Text
                  color="white"
                  fontSize="0.875rem"
                  lineHeight="0.875rem"
                  fontWeight="600"
                >
                  {t('Lightning tracker')}
                </Text>
              </Flex>
              <Flex align="center" mb={2.5} ps={{ base: 2.5, lg: 0 }}>
                <Flex me={3}>
                  <Image
                    src="/icons/ic_rainscope.svg"
                    width={24}
                    height={24}
                    alt="RainScope"
                  />
                </Flex>
                <Text
                  color="white"
                  fontSize="0.875rem"
                  lineHeight="0.875rem"
                  fontWeight="600"
                >
                  {t('RainScope: min-by-min precip outlook')}
                </Text>
              </Flex>
              <Flex align="center" mb={2.5} ps={{ base: 2.5, lg: 0 }}>
                <Flex me={3}>
                  <Image
                    src="/icons/ic_14day.svg"
                    width={24}
                    height={24}
                    alt="14-day forecast"
                  />
                </Flex>
                <Text
                  color="white"
                  fontSize="0.875rem"
                  lineHeight="0.875rem"
                  fontWeight="600"
                >
                  {t('14-day hourly forecast')}
                </Text>
              </Flex>
              <Flex align="center" mb={2.5} ps={{ base: 2.5, lg: 0 }}>
                <Flex me={3}>
                  <Image
                    src="/icons/ic_wildfires.svg"
                    width={24}
                    height={24}
                    alt="Fires map"
                  />
                </Flex>
                <Text
                  color="white"
                  fontSize="0.875rem"
                  lineHeight="0.875rem"
                  fontWeight="600"
                >
                  {t('Fires and hotspots map')}
                </Text>
              </Flex>
              <Flex align="center" ps={{ base: 2.5, lg: 0 }}>
                <Flex me={3}>
                  <Image
                    src="/icons/ic-aqi.svg"
                    width={24}
                    height={24}
                    alt="Air quality"
                  />
                </Flex>
                <Text
                  color="white"
                  fontSize="0.875rem"
                  lineHeight="0.875rem"
                  fontWeight="600"
                >
                  {t('Air quality index')}
                </Text>
              </Flex>
            </Flex>
            <Flex
              flex="none"
              display={{ base: 'none', lg: 'flex' }}
              mt={-28}
              mb={-12}
            >
              <Image
                src="/full-screen-popup-img.png"
                width={384}
                height={480}
                alt="Weather tracker"
              />
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter
          px={0}
          py={0}
          justifyContent={{ base: 'center', lg: 'flex-start' }}
          className="marketing-popup__controls"
        >
          <NextLink href={climeAppLink} passHref>
            <Button
              ref={goToAppButtonRef}
              as="a"
              variant="cta"
              w="100%"
              maxW="308px"
            >
              {t('Get Clime app')}
            </Button>
          </NextLink>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FullScreenAppPromoPopup;
