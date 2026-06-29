"use client"

import { useState } from "react"
import { motion } from "motion/react"

function PillNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setIsOpen((open) => !open)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          setIsOpen((open) => !open)
        }
      }}
      className="relative h-10 w-20 cursor-pointer overflow-hidden rounded-full"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <motion.div
        className="flex flex-col"
        animate={{ y: isOpen ? "-50%" : "0%" }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      >
        <MenuPill />
        <ClosePill />
      </motion.div>
    </div>
  )
}

function RollingLabel({ label }: { label: string }) {
  return (
    <span className="grid h-5 overflow-hidden text-sm leading-5 [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
      <motion.span
        className="col-start-1 row-start-1 flex flex-col"
        variants={{
          rest: { y: "0%" },
          hover: { y: "-50%" },
        }}
        transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
      >
        <span className="flex h-5 items-center justify-center">{label}</span>
        <span aria-hidden className="flex h-5 items-center justify-center">
          {label}
        </span>
      </motion.span>
    </span>
  )
}

function MenuPill() {
  return (
    <motion.div
      className="flex h-10 w-full shrink-0 items-center justify-center bg-lime-300 text-black uppercase"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <RollingLabel label="Menu" />
    </motion.div>
  )
}

function ClosePill() {
  return (
    <motion.div
      className="flex h-10 w-full shrink-0 items-center justify-center bg-black text-white uppercase"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <RollingLabel label="Close" />
    </motion.div>
  )
}

export default PillNav