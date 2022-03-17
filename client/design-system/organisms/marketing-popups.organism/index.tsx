import React, { ReactElement, FC } from 'react';
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

export const MarketingPopups: FC = (): ReactElement | null => {
  const { t } = useTranslation('common');

  return (
    <Modal isOpen onClose={() => {}} motionPreset="slideInBottom">
      <ModalOverlay />
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
        <ModalFooter p={0} justifyContent="space-between">
          <Button variant="cta-outline" borderColor="blue.50">
            {t('Not Now')}
          </Button>
          <Button variant="cta">{t('Go to Clime app')}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MarketingPopups;
