import { Stack, Typography } from '@mui/material';
import { EmailOutlined, GitHub, LinkedIn } from '@mui/icons-material';
import {  IconButton, Link, Tooltip } from '@mui/material';
// import ResumeLink from './resumeLink.pdf';

export default function MainContent() {
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
    ];
  return (
    <Stack justifyContent="center" alignItems="center" spacing="2rem" sx={{ textAlign: 'center', my: 20 }}>
      <Typography variant="body1" sx={{ fontSize: '3rem' }}>
        👋👋 Hi. I&#39;m RAJU VEMUGANTI.
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '2rem' }}>
        LEAD PYTHON DEVELOPER
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: '50%' }}>
        WORK AUTHORIZATION: Citizen of the United States.
      </Typography>
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
    </Stack>
  );
}
