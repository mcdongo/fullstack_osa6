import { useDispatch } from "react-redux"
import { changeFilter } from "../reducers/FilterReducer"

const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        const content = event.target.value
        dispatch(changeFilter(content))
      // input-kentän arvo muuttujassa event.target.value
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter