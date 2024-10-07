import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
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
      Places i’ve worked.
    </Heading>
    <Text variant="description">
      Actualmente soy el <b>Desarrollador Líder</b> en <b>Kubera</b>, donde lidero un equipo en el desarrollo de una platafoTextde gamificación y red social para empresas.{' '}
      <Link href="https://wwww.kubera.com.co/" target="_blank" rel="noreferrer">
        Kubera
      </Link>
      .
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
