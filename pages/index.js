const Home = () => {
  return (
    <div>
      <div>TMDB URL: {process.env.TMDB_URL}</div>
      <div>TMDB KEY: {process.env.TMDB_KEY}</div>
    </div>
  )
}

export default Home
