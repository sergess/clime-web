import { ReactElement, FC } from 'react';
import {
  Box,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { LAYOUT_HORIZONTAL_PADDING, WEATHER_TODAY } from 'client/constants';

import { LocationParent } from 'common/types';

export const Breadcrumbs: FC<{ items: LocationParent[] | null }> = ({
  items,
}): ReactElement | null =>
  items ? (
    <Box bg="white" px={LAYOUT_HORIZONTAL_PADDING} py={3}>
      <Container
        maxW="container.xl"
        p="0"
        // [TODO] Move these styles to the theme when it would be possible to style breadcrumb list there
        sx={{
          '.chakra-breadcrumb__list': {
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',

            '&::-webkit-scrollbar': {
              width: 0,
              height: 0,
              display: 'none',
            },
          },
        }}
      >
        <Breadcrumb variant="page-bottom" spacing={3}>
          {items.map((item) => (
            <BreadcrumbItem key={item.url}>
              <NextLink
                href={
                  item.type === 'city'
                    ? `/${WEATHER_TODAY}${item.url}`
                    : `/locations${item.url}`
                }
                passHref
              >
                <BreadcrumbLink href="#">{item.name}</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Container>
    </Box>
  ) : null;

export default Breadcrumbs;
