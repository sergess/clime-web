import React, { ReactElement, FC } from 'react';
import Image from 'next/image';
import {
  Text,
  Box,
  Divider,
  Button,
  Flex,
  ComponentDefaultProps,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { Card } from 'client/design-system/atoms';

export const CoverageInfo: FC<ComponentDefaultProps> = (
  componentStyles
): ReactElement => {
  const { t } = useTranslation('coverage-info');

  const { isOpen: infoOpened, onToggle: onInfoOpenedToggle } = useDisclosure();

  return (
    <Card {...componentStyles}>
      <Button variant="coverage-info" onClick={onInfoOpenedToggle}>
        <Flex me={1}>
          <Image
            src="/icons/coverage-info.svg"
            width={20}
            height={20}
            alt={t('Coverage info')}
          />
          <Text ps={2}>{t('Coverage info')}</Text>
        </Flex>
        <Box transform={infoOpened ? 'rotate(270deg)' : 'rotate(0deg)'}>
          <Image src="/icons/arrow-50.svg" width={20} height={20} alt="Open" />
        </Box>
      </Button>
      <Collapse in={infoOpened} animateOpacity>
        <Box px={4}>
          <Divider orientation="horizontal" variant="card-divider" mb={4} />
          <Text whiteSpace="break-spaces">{t('coverageInfoDetail')}</Text>
          <Divider orientation="horizontal" variant="card-divider" mt={4} />
        </Box>
        <Button variant="expand-card" onClick={onInfoOpenedToggle}>
          <Text color="blue.800" textStyle="14-semi-bold" me={1}>
            {t('Hide')}
          </Text>
          <Box transform="rotate(270deg)">
            <Image
              src="/icons/arrow-50.svg"
              width={20}
              height={20}
              alt={t('Hide')}
            />
          </Box>
        </Button>
      </Collapse>
    </Card>
  );
};

export default CoverageInfo;
