import { Card, CardContent, Container, Stack, Typography } from '@mui/material';
import { Workspaces } from '@mui/icons-material';

export default function Education() {
  const education = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science',
      institution: 'National Institute of Technology, Trichy',
      year: '2018 – 2022',
      description:
        'Specialized in software engineering, full-stack development, and data structures. Led a team capstone project focused on scalable web applications.',
    },
    {
      id: 2,
      degree: 'Higher Secondary (CBSE)',
      institution: 'Delhi Public School, RK Puram',
      year: '2016 – 2018',
      description:
        'Completed Physics, Chemistry, Mathematics, and Computer Science with 94%. Actively participated in coding competitions and tech fests.',
    },
    {
      id: 3,
      degree: 'Secondary School (ICSE)',
      institution: 'St. Xavier’s High School, Patna',
      year: '2014 – 2016',
      description:
        'Built a strong academic foundation in science and mathematics. Was part of the robotics and programming club.',
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ my: '5rem' }}>
      {/* Education Header */}
      <Stack direction="row" spacing="2rem" alignItems="center">
        {/* <SchoolIcon fontSize="large" color="primary" /> */}
        <Workspaces />
        <Stack>
          <Typography variant="h3">Education</Typography>
          <Typography variant="body1">A glimpse of my academic journey.</Typography>
        </Stack>
      </Stack>

      {/* Education Cards */}
      <Stack
        sx={{
          flexWrap: 'wrap',
          gap: '2rem',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '1rem 2rem',
        }}
        useFlexGap
      >
        {education.map((item) => (
          <Card key={item.id} sx={{ width: '25rem' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.degree}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {item.institution}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.year}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
