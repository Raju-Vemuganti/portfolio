import { AutoAwesome } from '@mui/icons-material';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Workspaces } from '@mui/icons-material';

export default function BodyContent() {
  return (
    <Container maxWidth="xl" sx={{ pt: '4rem' }}>
      <Stack direction="row" spacing="2rem" alignItems="center" >
              <Workspaces />
              <Stack>
                <Typography variant="h3">About</Typography>
              </Stack>
            </Stack>
    <Stack justifyContent="center" alignItems="center" spacing="2rem" sx={{ textAlign: 'center', my: 10 }}>
      <Stack sx={{ py: '1rem', flexDirection: { sm: 'column', lg: 'row' }, gap: { sm: '1rem', lg: '10rem' } }}>
        <Stack sx={{ px: '1rem' }}>
          <Typography variant="body1" maxWidth="60rem" gutterBottom>
            With 12+ years of experience as a Lead Python Developer/Architect, I specialize in building scalable, secure
            software solutions using Python, Golang, and cloud-native technologies. I have deep expertise in
            object-oriented programming, data structures, and DevOps, with hands-on experience in AWS, GCP, and Azure.
            My skills span CI/CD, containerization (Docker, Kubernetes), serverless architectures, and big data
            platforms like PySpark, Snowflake, and Databricks. I’m proficient in Django, FastAPI, SQLAlchemy, and
            React.js, and have led end-to-end development using Agile practices. My strong command over testing,
            automation, geospatial tools, and data analytics enables delivery of robust, maintainable solutions across
            complex, hybrid environments.
          </Typography>
          <Stack justifyContent="center" alignItems="center" spacing="2rem">
            <Stack alignItems="center" sx={{ pt: 10, flexDirection: 'row', gap: '1rem' }}>
              <AutoAwesome />
              <Typography variant="h3">Top Skills</Typography>
            </Stack>
            <Stack direction="row" flexWrap="wrap" useFlexGap spacing="1rem">
              {['Python', 'SQL', 'AWS', 'Azure', 'PySpark', 'DevOps'].map((v) => (
                <Button disableRipple disableFocusRipple disableTouchRipple variant="outlined" key={v}>
                  {v}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    </Container>
  );
}
