interface ButtonProps {
  label: string
}

export function Button({ label }: ButtonProps) {
  return (
    <div className="w-fit bg-background-color text-white px-4 py-2 rounded-md hover:bg-bright-color transition duration-300 ease-in-out">
      <button>{label}</button>
    </div>
  )
}
