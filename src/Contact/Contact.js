import { EmailOutlined, GitHub, LinkedIn, Phone } from '@mui/icons-material';
import { Box, Container, IconButton, Link, Stack, Tooltip, Typography } from '@mui/material';

export default function Contact() {
  const navLinks = [
    {
      id: 1,
      label: 'Github',
      icon: <GitHub />,
      to: 'https://github.com/Raju-Vemuganti',
    },
    {
      id: 2,
      label: 'LinkedIn',
      icon: <LinkedIn />,
      to: 'https://www.linkedin.com/in/raju-vemuganti-06b8591b2/',
    },
    {
      id: 3,
      type: 'email',
      label: 'Email',
      icon: <EmailOutlined />,
      onClick: (e) => {
        window.location.href = 'mailto:raju16vemuganti@gmail.com';
        e.preventDefault();
      },
      to: '#',
    },
    {
      id: 4,
      type: 'phone',
      label: 'Phone',
      icon: <Box display="flex" alignItems="center" gap={1}>
        <Phone />
        <Typography variant="body2">+1 (315) 231-9911</Typography>
      </Box>
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <Typography variant="h4">Want to connect</Typography>
      <Typography variant="body1">Do not hesitate to reach out for collab, work or even guidance.</Typography>
      <Stack direction="row">
        {navLinks.map((v) =>
          v.type === 'email' ? (
            <Link
              key={v.id}
              to="#"
              onClick={(e) => {
                window.location.href = 'mailto:raju16vemuganti@gmail.com';
                e.preventDefault();
              }}
              sx={{ cursor: 'pointer' }}
            >
              <Tooltip title={v.label}>
                <IconButton>{v.icon}</IconButton>
              </Tooltip>
            </Link>
          ) : (
            <Tooltip key={v.id} title={v.label}>
              <IconButton onClick={() => window.open(v.to, '_blank', 'noopener,noreferrer')}>{v.icon}</IconButton>
            </Tooltip>
          )
        )}
      </Stack>
    </Container>
  );
}
