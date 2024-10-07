import { useState, useEffect } from 'react';
import { Box, Heading, Text, Spinner } from '@chakra-ui/react';

function NewsComponent() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/news')
      .then(response => response.json())
      .then(data => {
        setNews(data.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch news.');
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner color="brand.green" />;

  if (error) return <Text color="red.400">{error}</Text>;

  return (
    <Box>
      <Heading color="brand.green">Latest Web3 News</Heading>
      {news.map((item, index) => (
        <Box key={index} p={4} bg="brand.darkGray" mb={3} borderRadius="lg">
          <Text fontWeight="bold" color="brand.blue">{item.title}</Text>
          <Text color="brand.lightGray">{item.description.slice(0, 100)}...</Text>
        </Box>
      ))}
    </Box>
  );
}

export default NewsComponent;