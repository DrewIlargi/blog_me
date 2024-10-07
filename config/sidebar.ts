import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  // {
  //   label: 'Twitter',
  //   href: 'https://twitter.com/keysl1831',
  //   icon: FaTwitter,
  // },
  // {
  //   label: 'Instagram',
  //   href: 'https://www.instagram.com/kllawingco/',
  //   icon: FaInstagram,
  // },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andresvalencia69/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/DrewIlargi',
    icon: FaGithub,
  }
  // {
  //   label: 'StackOverflow',
  //   href: 'https://stackoverflow.com/users/3867490/keysl',
  //   icon: FaStackOverflow,
  // },
  // {
  //   label: 'Youtube',
  //   href: 'https://www.youtube.com/channel/UCV-MiUVsKJrKJKKfUK58nhg',
  //   icon: FaYoutube,
  // },
  // {
  //   label: 'Dev.to',
  //   href: 'https://dev.to/klawingco',
  //   icon: FaDev,
  // },
]
