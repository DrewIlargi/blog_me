import { memo, useState } from 'react'
import {
  Heading,
  Text,
  Stack,
  Box,
  Input,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const ContactForm = () => {
  const [ref, inView] = useInView()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  })
  const toast = useToast()

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: false }) // Restablece los errores al escribir
  }

  // Valida los campos del formulario
  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/\S+@\S+\.\S+/.test(formData.email),
      message: formData.message.trim() === '',
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error) // Si no hay errores, devuelve true
  }

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }

    // Lógica de envío (placeholder)
    console.log('Formulario enviado:', formData)
    toast({
      title: 'Mensaje enviado.',
      description: 'Gracias por contactarte. Te responderé pronto.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    setFormData({ name: '', email: '', message: '' }) // Limpia los campos
  }

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="section"
      p={6}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        ¡Contáctame!{' '}
        <Text as="span" fontSize="2xl" variant="emphasis">
          <motion.div
            style={{ display: 'inline-block' }}
            variants={rimuruVariant}
            ref={ref}
            animate={inView ? ['shake', 'jump'] : false}
          >
            (⁀ᗢ⁀)
          </motion.div>
        </Text>
      </Heading>
      <Text variant="description">
        Si tienes alguna pregunta, comentario o simplemente quieres saludar, no
        dudes en enviar un mensaje a través del siguiente formulario.
      </Text>

      {/* Formulario de Contacto */}
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          {/* Campo de Nombre */}
          <FormControl isInvalid={errors.name}>
            <FormLabel>Nombre</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              focusBorderColor="teal.400"
            />
            {errors.name && (
              <FormErrorMessage>El nombre es requerido.</FormErrorMessage>
            )}
          </FormControl>

          {/* Campo de Email */}
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tuemail@ejemplo.com"
              focusBorderColor="teal.400"
            />
            {errors.email && (
              <FormErrorMessage>
                Por favor, ingresa un email válido.
              </FormErrorMessage>
            )}
          </FormControl>

          {/* Campo de Mensaje */}
          <FormControl isInvalid={errors.message}>
            <FormLabel>Mensaje</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              size="md"
              resize="vertical"
              focusBorderColor="teal.400"
            />
            {errors.message && (
              <FormErrorMessage>
                El mensaje no puede estar vacío.
              </FormErrorMessage>
            )}
          </FormControl>

          {/* Botón de Enviar */}
          <Button type="submit" colorScheme="teal">
            Enviar mensaje
          </Button>
        </Stack>
      </form>

      <Box
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        Diseñado y desarrollado con cariño por Drew Ilargi
      </Box>
    </Stack>
  )
}

export default memo(ContactForm)
