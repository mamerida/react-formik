//vamos a utilizar todas las dependencias que nos entrega formik para realizar nuestro formulario
import {Formik ,Form,Field,ErrorMessage} from 'formik'
import CheckBox from './components/CheckBox'
import TextInput from './components/TextInput'
import Select from './components/Select'
import Radio from './components/Radio'



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
    //para que el error mesaje de radio ocurra debo agregar la validacion aca 
    if(!values.radio){
        errors.radio = "Requerido"
    }

    
    
    return errors
  }
  return (
    <Formik
        initialValues={{
            name: '',
            lastname:'',
            email:"",
            chancho:"",
            radio:""
          }}
        validate={validate}
        onSubmit={values => console.log(values)}
    >
        {formik => 
                    // reemplazamos lo generado por etiquetas propias de formik, como son Form Fiel y ErrorMessage
                    <Form onSubmit={formik.handleSubmit}>

                        {/* Uso y creacion de un componente personalizado  reemplazo todo por todos los componentes personalizados*/}
                        <TextInput name = "name" label="Nombre"/>
                        <TextInput name = "lastname" label="Apellido"/>
                        <TextInput name = "email" label="Email"/>
                        <ErrorMessage name="email"/>
                        <CheckBox name="accept">
                            Aceptar terminos y condiciones 
                        </CheckBox>
                        {/* componente custom select  */}
                        <Select label ="Tipo de chancho" name="chancho">
                            <option value="">--Seleccione su Chancho --</option>
                            <option value="felipe">Felipe</option>
                            <option value="chanchitofeliz">Chanchito Feliz</option>
                            <option value="chanchitotriste">Chanchito Triste</option>
                        </Select>
                        <Radio name = "radio" value="chanchito1" label="chanchito 1"/>
                        <Radio name = "radio" value="chanchito2" label= "chanchito 2"/>
                        <Radio name = "radio" value="chanchito3" label="chanchito 3"/>
                        {/* para poder valir los campos lo debo realizar aca de manera obligatoria por que los radio button solo se puede sleeccionar uno  */}
                        <ErrorMessage name="radio" />
                        <button type="submit">Enviar</button>
                    </Form>
        }
    </Formik>
  );
}

export default App;



// //vamos a utilizar todas las dependencias que nos entrega formik para realizar nuestro formulario
// import {Formik ,Form,Field,ErrorMessage} from 'formik'
// import TextInput from './components/TextInput'



// function App() {
//   //agrego validaciones por fuera de formik para que quede mas organizado 
//   const validate = (values) =>{
//     const errors = { }
//     if(!values.name){
//       errors.name = "Requerido"
//     } else if(values.name.length < 5 ){
//       errors.name = "El nombre es muy corto"
//     }
//     if(!values.lastname){
//       errors.lastname = "Requerido"
//     } else if(values.lastname.length < 5 ){
//       errors.lastname = "El apellido es muy corto"
//     }
    
    
//     return errors
//   }
//   return (
//     <Formik
//         initialValues={{
//             name: '',
//             lastname:'',
//             email:"",
//           }}
//         validate={validate}
//         onSubmit={values => console.log(values)}
//     >
//         {formik => 
//                     // reemplazamos lo generado por etiquetas propias de formik, como son Form Fiel y ErrorMessage
//                     <Form onSubmit={formik.handleSubmit}>

//                         {/* Uso y creacion de un componente personalizado */}
//                         <TextInput name = "name" label="Nombre"/>
                       
//                         {/* PARA PODER USAR CSS DEBO USAR CLASS NAME 
//                         <Field name="name" type="text" className="input" /> */}
//                         {/* En caso de querer utilizar un text area debo utilizar la propiead de as pudiendo usar textarea select colocando las opciones entre etiquetas  */}
//                         {/* <Field name="select" as="select" className="input" >
//                             <option value="a">Chachito Feliz</option>
//                             <option value="b">Chachito Triste </option>
//                         </Field> */}
//                         {/* <ErrorMessage name="name"/> */}
//                         <label>Apellido</label>
//                         <Field name="lastname" type="text" />
//                         <ErrorMessage name="lastname"/>
//                         <br/>
//                         <label>Email</label>
//                         <Field name="email" type="email" />
//                         <ErrorMessage name="email"/>
//                         <button type="submit">Enviar</button>
//                     </Form>
//         }
//     </Formik>
//   );
// }

// export default App;



// //vamos a utilizar todas las dependencias que nos entrega formik para realizar nuestro formulario
// import {Formik ,Form,Field,ErrorMessage} from 'formik'
// import CheckBox from './components/CheckBox'
// import TextInput from './components/TextInput'



// function App() {
//   //agrego validaciones por fuera de formik para que quede mas organizado 
//   const validate = (values) =>{
//     const errors = { }
//     if(!values.name){
//       errors.name = "Requerido"
//     } else if(values.name.length < 5 ){
//       errors.name = "El nombre es muy corto"
//     }
//     if(!values.lastname){
//       errors.lastname = "Requerido"
//     } else if(values.lastname.length < 5 ){
//       errors.lastname = "El apellido es muy corto"
//     }
    
    
//     return errors
//   }
//   return (
//     <Formik
//         initialValues={{
//             name: '',
//             lastname:'',
//             email:"",
//           }}
//         validate={validate}
//         onSubmit={values => console.log(values)}
//     >
//         {formik => 
//                     // reemplazamos lo generado por etiquetas propias de formik, como son Form Fiel y ErrorMessage
//                     <Form onSubmit={formik.handleSubmit}>

//                         {/* Uso y creacion de un componente personalizado */}
//                         <TextInput name = "name" label="Nombre"/>
//                         <label>Apellido</label>
//                         <Field name="lastname" type="text" />
//                         <ErrorMessage name="lastname"/>
//                         <br/>
//                         <label>Email</label>
//                         <Field name="email" type="email" />
//                         <ErrorMessage name="email"/>
//                         <CheckBox name="accept">
//                             Aceptar terminos y condiciones 
//                         </CheckBox>
//                         <button type="submit">Enviar</button>
//                     </Form>
//         }
//     </Formik>
//   );
// }

// export default App;

