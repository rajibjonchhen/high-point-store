import React from 'react'
import './checkOut.scss'
import { ConstRoutes } from '../../constant/ConstRoutes'
import { Link } from 'react-router-dom'

export default function CheckOut() {
  return (
    <div>
        CheckOut
        <Link to = {ConstRoutes.confirmation.url()}>
            <button>Confirmation</button>
        </Link>
    </div>
  )
}
