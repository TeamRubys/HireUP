import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

type Props = {
  data: User
}

const ListItem = ({ data }: Props) => (
  <Link href="/">
    Home
  </Link>
)

export default ListItem
