function PillNav() {
  return (
    <div>
      <Button label="Menu" />
    </div>
  )
}

const Button = ({ label }: { label: string }) => {
  return (
    <div className="relative h-10 w-20 overflow-hidden">
      <div className="absolute flex h-full w-full items-center justify-center rounded-full bg-lime-300 font-semibold text-black uppercase">
        {label}
      </div>
      <div className="absolute flex h-full w-full items-center justify-center rounded-full bg-lime-300 font-semibold text-black uppercase">
        {label}
      </div>
    </div>
  )
}

export default PillNav
