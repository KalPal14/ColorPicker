const ColorShade = ({ shade, onChange = f => f }) => {
   const change = (event) => {
      event.target.nextElementSibling.innerText = event.target.value
      onChange()
   }
   return (
      <div className="color-picker_inputs">
         <input id={"input" + shade} onChange={(event) => change(event)} type="range" min="0" max="255" step="1"></input>
         <p id={"input" + shade + "value"}>0</p>
      </div>
   )
}

export default ColorShade