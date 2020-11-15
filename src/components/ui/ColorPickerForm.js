import ColorShade from './ColorShade'

const ColorPickerForm = ({ onChange = f => f, onCancel = f => f, onSubmit = f => f }) => {
   return (
      <form className='color-picker_form'>
         <ColorShade onChange={() => onChange()} shade="R"></ColorShade>
         <ColorShade onChange={() => onChange()} shade="G"></ColorShade>
         <ColorShade onChange={() => onChange()} shade="B"></ColorShade>
         <button onClick={() => onCancel()} className='cancel'>Cancel</button>
         <button onClick={() => onSubmit()} className='submit'>Submit</button>
      </form>
   )
}

export default ColorPickerForm