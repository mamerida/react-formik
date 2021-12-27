import {useFormik} from 'formik'
function App() {
  //uso de formik mediante un objeto
  const formik = useFormik({  
    //contiene los valores iniciales de nuestro formulario
    initialValues:{
      name: '',
      lastname:'',
      email:"",
    },
    //onSubmit recibe los valores y hace algo en el submit
    onSubmit: values => console.log(values)
  })
  return (
    //en este caso en el form se le pasa la propieadad handleSubmit para poder sincronizar con el submit de formik
    // a cada input se le pasa el tipo, el handleChange para que formik maneje el cambio 
    // por ultimo se sincroniza el valor con el de formik
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label>Apellido</label>
      <input
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      <label>Email</label>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
