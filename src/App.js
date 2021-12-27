import {ErrorMessage, useFormik} from 'formik'
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

  //uso de formik mediante un objeto
  const formik = useFormik({  
    //contiene los valores iniciales de nuestro formulario
    initialValues:{
      name: '',
      lastname:'',
      email:"",
    },
    //onSubmit recibe los valores y hace algo en el submit
    onSubmit: values => console.log(values),
    //para poder validar los futuros errores y agregar validaciones se hacen atravez de esta prop
    validate
  })
  return (
    //en este caso en el form se le pasa la propieadad handleSubmit para poder sincronizar con el submit de formik
    // a cada input se le pasa el tipo, el handleChange para que formik maneje el cambio 
    // por ultimo se sincroniza el valor con el de formik
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      {/* {...formik.getFieldProps('name')}  es una forma de reducir el codigo de formik el mismo nos va a devolver name onChange onBlur y value en una sola linea   */ }
      <input type="text" {...formik.getFieldProps('name')}  />
      {/* para poder mostrar las validaciones se hace directamente en el dom. Agrego la propiedad de touched.name para validar que la aplicacion haya tenido foto 
          y asi evitar  que en caso de no haber sido enfocada no salten las validaciones  */}
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br/>
      <label>Apellido</label>
      <input type="text" {...formik.getFieldProps('lastname')}  />
      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
      <br/>
      <label>Email</label>
      <input type="email" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;




// import {ErrorMessage, useFormik} from 'formik'
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

//   //uso de formik mediante un objeto
//   const formik = useFormik({  
//     //contiene los valores iniciales de nuestro formulario
//     initialValues:{
//       name: '',
//       lastname:'',
//       email:"",
//     },
//     //onSubmit recibe los valores y hace algo en el submit
//     onSubmit: values => console.log(values),
//     //para poder validar los futuros errores y agregar validaciones se hacen atravez de esta prop
//     validate
//   })
//   return (
//     //en este caso en el form se le pasa la propieadad handleSubmit para poder sincronizar con el submit de formik
//     // a cada input se le pasa el tipo, el handleChange para que formik maneje el cambio 
//     // por ultimo se sincroniza el valor con el de formik
//     <form onSubmit={formik.handleSubmit}>
//       <label>Nombre</label>
//       <input
//         name="name"
//         type="text"
//         onChange={formik.handleChange}
//         // se agrega la propiedad onBlur para poder manejar las validaciones dependiendo del foco de nuestra aplicacion
//         onBlur={formik.handleBlur}
//         value={formik.values.name}
//       />
//       {/* para poder mostrar las validaciones se hace directamente en el dom. Agrego la propiedad de touched.name para validar que la aplicacion haya tenido foto 
//           y asi evitar  que en caso de no haber sido enfocada no salten las validaciones  */}
//       {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
//       <br/>
//       <label>Apellido</label>
//       <input
//         name="lastname"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.lastname}
//       />
//       {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
//       <br/>
//       <label>Email</label>
//       <input
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
//       <button type="submit">Enviar</button>
//     </form>
//   );
// }

// export default App;
