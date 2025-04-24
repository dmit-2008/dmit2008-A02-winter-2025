import {useState, useEffect} from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography'

import Navbar from '@/components/Navbar'
import SimpleDetailsCard from '@/components/SimpleDetailsCard';

import { getProtectedPosts } from '@/utils/api/posts';

import { useAuth } from '@/components/state/AuthProvider';

export default function Dashboard() {
  const [posts, setPosts] = useState([])
  /* import the user reroute to home.
  This should be a protected page.
  */
  const {user, token} = useAuth()

  const loadPosts = async () => {
    const fetchedPosts = await getProtectedPosts(token)
    setPosts(fetchedPosts)
  }

  useEffect(()=> {
    loadPosts()
  }, [token])

  // handling user case.
  if (!user) {
    return <>No user</>
  }

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Welcome {`${user.firstname} ${user.lastname}`}!
          </Typography>

          {posts?.map((post)=> {
            return <SimpleDetailsCard
              key={post.id}
              title={post.title}
              description={post.body}
            />
          })}
        </Box>
      </Container>
    </>
  )
}
