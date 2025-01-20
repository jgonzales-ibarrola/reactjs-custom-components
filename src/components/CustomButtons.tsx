import Button from "./ui/Button"

const CustomButtons = () => {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold">Buttons</h1>

      <Button onClick={() => alert("clicked primary")} className="bg-red-500">
        Primary
      </Button>

      <Button onClick={() => alert("clicked secondary")} className="bg-red-500">
        Secondary
      </Button>

      <Button onClick={() => alert("clicked outlined")} className="bg-red-500">
        Outlined
      </Button>

      <Button onClick={() => alert("clicked danger")} className="bg-red-500">
        Danger
      </Button>
    </div>
  )
}

export default CustomButtons