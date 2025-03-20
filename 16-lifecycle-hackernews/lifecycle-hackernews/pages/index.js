import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


import TopArticlesList from "@/components/TopArticlesList";

export default function Home() {
  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" component="h1">
        Top Hacker News Articles
      </Typography>
      <TopArticlesList/>
    </Container>
  );
}
