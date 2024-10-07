import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'SCG' | 'Blotocol' | 'Kubera'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  // Deloitte: {
  //   name: 'Deloitte',
  //   longName: 'Deloitte Consulting Phils. Delivery Center',
  //   subDetail: 'Consulting Phils. Delivery Center',
  //   url: 'https://www2.deloitte.com/',
  //   position: 'Software Engineer Consultant',
  //   duration: 'Sep 2021 - Present',
  //   logo: {
  //     light: '/worked_at_logos/deloitte/Deloitte_logo_black.png',
  //     dark: '/worked_at_logos/deloitte/Deloitte_logo.png',
  //   },
  //   roles: [
  //     <>
  //       Contributed to the design and development of a comprehensive .NET payment
  //       integration project for a client that covered credit card payments and subscription management.
  //     </>,
  //     <>
  //       Introduced Stripe as a new payment provider within the system architecture.
  //       Participated in triaging, fixing, and adding new functionalities to multiple Azure-powered APIs.
  //     </>,
  //     <>
  //       Worked as a Sitecore Backend on new{' '}
  //       <Link
  //         aria-label="Deloitte Digital AU"
  //         href="https://www.deloittedigital.com.au/"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         Deloitte Digital AU Site.
  //       </Link>
  //     </>,
  //     <>
  //       Underwent training for .NET Sitecore 10, Sitecore SXA, and different topologies it provides.{' '}
  //       and Passed{' '}
  //       <Link
  //         aria-label="Sitecore 10 .NET Developer Certification"
  //         href="/certification/Lawingco-Sitecore 10 NET Developer Cert.pdf"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         Sitecore 10 .NET Developer Certification.
  //       </Link>
  //     </>,
  //   ],
  // },
  Kubera: {
    name: 'Kubera',
    longName: 'Kubera',
    subDetail: 'Plataforma de gamificación y red social para empresas.',
    url: 'https://kubera.com.co',
    position: 'Desarrollador de Software',
    duration: '2022 - Presente',
    logo: {
      light: '/logo2.png',
      dark: '/logo2.png',
    },
    roles: [
      <>Desarrollo de backend en Ruby on Rails.</>,
      <>Integración de API con Firebase y servicios en la nube.</>,
      <>Manejo de bases de datos PostgreSQL.</>,
      <>Implementaciones con Firebase.</>,
      <>Diseño y optimización de experiencias de usuario.</>,
    ],
  },
}

export const ExperiencesList = [
  // Experiences.Deloitte,
  Experiences.Kubera,
]
