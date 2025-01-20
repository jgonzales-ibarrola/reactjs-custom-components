import Button from "./ui/Button"

const CustomButtons = () => {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold">Buttons</h1>

      <Button onClick={() => alert("clicked")}>
        Hello
      </Button>
    </div>
  )
}

export default CustomButtons