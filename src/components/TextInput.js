import { useField } from "formik"

const TextInput = ({label,...props}) =>{
    //en este caso en vez de usarse el componete field se usa el hook field para obtener las propieadades y poder personalizarlo
    //para esto le paso las propieades que tome en el front al useField
    const [field , meta] = useField(props)



    return(
        <div>
            <label>{label}</label>
            {/* al hacer destructuring mediante el spreat operator al pasarle el field traido del useField obtiene todas las propieades propias de un input */}
            {/* En caso de querer modificar el onChange puedo hacerlo mediante ...props */ }
            <input {...field} {...props}/> 
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>
    )
}
export default TextInput