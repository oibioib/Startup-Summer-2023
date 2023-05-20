import { APP_SETTINGS } from '@constants';
import { Paper, Stack, Text, Title } from '@mantine/core';

const ErrorMessage = ({ error }: { error: unknown }) => {
  const message = error instanceof Error ? error.message : APP_SETTINGS.ERRORS.REFRESH_PAGE;

  return (
    <Paper p={{ base: 'sm', xs: 'lg' }}>
      <Stack spacing="xs">
        <Title order={4}>{APP_SETTINGS.ERRORS.SOMETHING}</Title>
        <Text>{message}</Text>
      </Stack>
    </Paper>
  );
};

export default ErrorMessage;
