import Button from "./ui/Button"

const CustomButtons = () => {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold">Buttons</h1>

      <Button onClick={() => alert("clicked primary")} variant={'primary'}>
        Primary
      </Button>

      <Button onClick={() => alert("clicked secondary")} variant={'secondary'}>
        Secondary
      </Button>

      <Button onClick={() => alert("clicked secondary")} variant={'outlined'}>
        Outlined
      </Button>
    </div>
  )
}

export default CustomButtons