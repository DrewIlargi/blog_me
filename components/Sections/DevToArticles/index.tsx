import { memo, useEffect, useState } from 'react'
import {
  Heading,
  Text,
  Link,
  Stack,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { Article } from 'types/article'

const DevToArticles = () => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.100')
  const alphaHover = useColorModeValue(
    'rgba(49, 151, 149, 0.06)',
    'rgba(157, 236, 249, 0.06)'
  )
  const [articles, setArticles] = useState<any[]>([]) // Asegura que 'articles' esté inicializado como array vacío
  const [loading, setLoading] = useState(true) // Estado para manejar la carga

  // Llamada a la API para obtener los artículos
  useEffect(() => {
    fetch('https://dev.to/api/articles?username=drew_ilargi')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error al cargar los artículos:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Text>Cargando artículos...</Text>
  } // Muestra mensaje de carga mientras se obtienen los artículos

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Dev.to blog
      </Heading>
      <Text variant="description">
        I write dev related things from time to time!
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
        {articles.map((item) => (
          <Link
            aria-label={item.title}
            target="_blank"
            rel="noreferrer"
            key={item.id}
            href={item.url}
            color="currentcolor"
            _hover={{ textDecoration: 'none' }}
            transition="all 0.5s ease"
            role="group"
          >
            <Stack
              spacing={3}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="1em"
              padding={{ base: '1em', '2xl': '1.5em' }}
              height="100%"
              transition="all 0.2s ease-in-out"
              backgroundColor={bg}
              _hover={{
                background: alphaHover,
              }}
              as="article"
            >
              <Heading fontSize="larger" paddingX={2}>
                {item.title}
              </Heading>
              <Divider borderColor="#A6A6A6" width="95%" />
              <Stack spacing={1}>
                <Heading
                  fontSize="small"
                  paddingX={2}
                  variant="accentAlternative"
                >
                  {item.tag_list.join(', ')}
                </Heading>
                <Heading fontSize="smaller" variant="description" paddingX={2}>
                  {item.readable_publish_date}
                </Heading>
              </Stack>
              <Text fontSize="smaller" variant="description" paddingX={2}>
                {item.description}
              </Text>
            </Stack>
          </Link>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default memo(DevToArticles)
