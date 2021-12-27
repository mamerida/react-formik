//vamos a utilizar todas las dependencias que nos entrega formik para realizar nuestro formulario
import {Formik ,Form,Field,ErrorMessage} from 'formik'



function App() {
  //agrego validaciones por fuera de formik para que quede mas organizado 
  const validate = (values) =>{
    const errors = { }
    if(!values.name){
      errors.name = "Requerido"
    } else if(values.name.length < 5 ){
      errors.name = "El nombre es muy corto"
    }
    if(!values.lastname){
      errors.lastname = "Requerido"
    } else if(values.lastname.length < 5 ){
      errors.lastname = "El apellido es muy corto"
    }
    
    
    return errors
  }
  return (
    <Formik
        initialValues={{
            name: '',
            lastname:'',
            email:"",
          }}
        validate={validate}
        onSubmit={values => console.log(values)}
    >
        {formik =>
                    // reemplazamos lo generado por etiquetas propias de formik, como son Form Fiel y ErrorMessage
                    <Form onSubmit={formik.handleSubmit}>
                    <label>Nombre</label>
                    {/* PARA PODER USAR CSS DEBO USAR CLASS NAME  */}
                    <Field name="name" type="text" className="input" />
                    {/* En caso de querer utilizar un text area debo utilizar la propiead de as pudiendo usar textarea select colocando las opciones entre etiquetas  */}
                    <Field name="select" as="select" className="input" >
                        <option value="a">Chachito Feliz</option>
                        <option value="b">Chachito Triste </option>
                    </Field>
                    <ErrorMessage name="name"/>
                    <br/>
                    <label>Apellido</label>
                    <Field name="lastname" type="text" />
                    <ErrorMessage name="lastname"/>
                    <br/>
                    <label>Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email"/>
                    <button type="submit">Enviar</button>
                    </Form>
        }
    </Formik>
  );
}

export default App;


