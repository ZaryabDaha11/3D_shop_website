import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
const Customizer = () => {
    const snap = useSnapshot(state)
  return (
    <div>Customizer</div>
  )
}

export default Customizer