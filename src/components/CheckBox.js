import { useField } from "formik"

//en este caso para poder usar un componente de checkbox tengo que discriminar las propieades 
//y colocarle el tipo para poder usar la prop checked
const CheckBox = ({children,...props}) => {
    const [field,meta] = useField({...props, type:'checkbox'})
    return(
        <div>
            <label>
                <input type="checkbox" {...field} {...props}/>
                {children}
            </label>
            {meta.touched && meta.error ? <div>{meta.error}</div> : null }
        </div>
    )
}

export  default CheckBox