import { Component } from 'react'
import PageTemplate from "./PageTemplate"
import ColorPickerForm from './ui/ColorPickerForm'

class ColorPicker extends Component {
   constructor(props) {
      super(props)
      const { value } = this.props
      this.state = {
         color: {
            ...value
         }
      }
      this.onChange = this.onChange.bind(this)
      this.onCancel = this.onCancel.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
   }
   onChange(shade, colorValue) {
      const { _square } = this.refs
      const color = {
         R: inputR.value,
         G: inputG.value,
         B: inputB.value
      }
      _square.style.backgroundColor = `rgb(${color.R}, ${color.G} ,${color.B})`
   }
   onSubmit() {
      const color = {
         R: inputR.value,
         G: inputG.value,
         B: inputB.value
      }
      this.setState({ color })
   }
   onCancel() {
      const { _square } = this.refs
      const { color } = this.state
      _square.style.backgroundColor = `rgb(${color.R}, ${color.G} ,${color.B})`
      inputR.value = color.R
      inputG.value = color.G
      inputB.value = color.B
      inputRvalue.innerText = color.R
      inputGvalue.innerText = color.G
      inputBvalue.innerText = color.B
   }
   render() {
      let { value } = this.props
      return (
         <PageTemplate>
            <section className="color-picker">
               <div ref="_square" className="square" style={{ backgroundColor: `rgb(${value.R},${value.G} ,${value.B})` }}></div>
               <ColorPickerForm onCancel={this.onCancel}
                  onSubmit={this.onSubmit}
                  onChange={this.onChange}></ColorPickerForm>
            </section>
         </PageTemplate>
      )
   }
}


export default ColorPicker