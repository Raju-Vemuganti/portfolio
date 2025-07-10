import { Workspaces } from '@mui/icons-material';
import { Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material';

export default function Projects() {
  const projects = [
    {
      id: 1,
      label: 'Lead Python Developer',
      language: ['FEB 2022 – PRESENT'],
      caption: 'ROTECH HEALTHCARE',
    },
    {
      id: 2,
      label: 'SENIOR PYTHON DEVELOPER',
      language: ['SEP 2020 – JAN 2022'],
      caption:
        'CARE FIRST',
    },
    {
      id: 3,
      label: 'SENIOR DATA ENGINEER',
      language: ['NOV 2017 – AUG 2020'],
      caption:
        'GAIN WELL',
    },
    {
      id: 4,
      label: 'DATA ENGINEER',
      language: ['MAY 2015 – OCT 2017'],
      caption:
        'CDK GLOBAL',
    },
    {
      id: 5,
      label: 'BACKEND ENGINEER',
      language: ['AUG 2013 – APL 2015'],
      caption:
        'ELEKTA',
    },
    {
      id: 6,
      label: 'SQL DEVELOPER',
      language: ['MARCH 2013 – JULY 2013'],
      caption:
        'W. L. GORE',
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ my: '5rem' }}>
      <Stack direction="row" spacing="2rem" alignItems="center">
        <Workspaces />
        <Stack>
          <Typography variant="h3">Experience</Typography>
          <Typography variant="body1">Peek into my engineering side.</Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{ flexWrap: 'wrap', gap: '2rem', flexDirection: 'row', justifyContent: 'space-between', padding: '1rem 2rem' }}
        useFlexGap
      >
        {projects.map((v) => (
          <Card key={v.id} sx={{ width: '25rem' }}>
            {/* <CardMedia sx={{ height: 140 }} image={v.imageUrl} title="green iguana" /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {v.label}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {v.caption}
              </Typography>
              <Stack direction="row" spacing="0.2rem" flexGrow="wrap" useFlexGap>
                {v.language?.map((item) => (
                  <Chip key={item} label={item} />
                ))}
              </Stack>
            </CardContent>
            {/* <CardActions>
              <Button size="small" onClick={() => window.open(v.link, '_blank', 'noopener,noreferrer')}>
                Learn More
              </Button>
            </CardActions> */}
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
