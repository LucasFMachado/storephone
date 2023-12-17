import { Link } from 'react-scroll'

import { HeaderLinkType } from '@/utils/types'

export function HeaderLink({ path, name, ...props }: HeaderLinkType) {
  return (
    <Link
      to={path}
      spy
      smooth
      duration={500}
      className=" hover:text-bright-color transition-all cursor-pointer"
      {...props}
    >
      {name}
    </Link>
  )
}
