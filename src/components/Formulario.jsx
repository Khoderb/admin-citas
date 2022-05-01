//Hooks useState, useEffect
import { useState, useEffect } from "react"
import Error from "./Error"
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
// antes del return hooks acá arriba

  const[nombre, setNombre] = useState('');
  const[propietario, setPropietario] = useState('');
  const[email, setEmail] = useState('');
  const[fecha, setFecha] = useState('');
  const[sintomas, setSintomas] = useState('');

  const [ error, setError ] = useState(false);
  
  useEffect ( () => {
      if( Object.keys(paciente).length > 0 ){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas (paciente.sintomas)
      }
  },[paciente])


  const handleSubmit = (e)=>{
      e.preventDefault();

      if( [ nombre,propietario,email,fecha,sintomas ].includes('') ){
        setError(true);
        return;
      }
      setError(false);

      const createId  = ()=> {
        const a = Date.now()/Math.pow(10,7);
        const b = Math.random();
        return Math.round((a/b)).toString();
      }  

      // objPacienteCaptura data llave=Valor
      const objetoPaciente = {
          nombre,
          propietario,
          email,
          fecha,
          sintomas,
      }
      
      if(paciente.id){
        //Editando el registro
        // asigno el id previo al nuevo obj objeto
        objetoPaciente.id = paciente.id

        const pacientesActualizados = pacientes.map( pacienteState =>
          pacienteState.id === paciente.id ? objetoPaciente: pacienteState );
            setPacientes(pacientesActualizados);
            setPaciente({});

      }else{
        objetoPaciente.id=createId();
        setPacientes([...pacientes,objetoPaciente]);
      }


      //resetear form
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5" >
        <h2 className ="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className='text-center text-lg mt-5 mb-10' >Añade Tus Pacientes y{' '}
          <span className="text-indigo-600 font-bold">Adminístralos</span>
        </p>

        <form 
          className="bg-white shadow-lg rounded-lg px-5 py-7 mb-10"
          onSubmit={handleSubmit}
        >  
         
            { error && <Error>
              <p>Todos los campos son obligatorios</p>
              </Error> }
            
            <div className="mb-5">
                <label htmlFor="nombreMascota" className="block text-gray-700 uppercase font-bold pb-3 ml-2">Nombre Mascota</label>
                <input
                  
                  className = "w-full placeholder-slate-400 outline-none border-2 rounded-md p-1"
                  type="text"
                  placeholder="Nombre De La Mascota"
                  id="nombreMascota"
                  value={nombre}
                  onChange={ e => setNombre(e.target.value)}

                />
            </div>
            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold pb-2 ml-2">Nombre Propietario</label>
                <input
                  
                  className = "w-full placeholder-slate-400 outline-none border-2 rounded-md p-1"
                  type="text"
                  placeholder="Nombre Del Propietario"
                  id="propietario"
                  value={propietario}
                  onChange={ e => setPropietario(e.target.value)}
 
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold pb-2 ml-2">Email contacto propietario</label>
                <input
                  
                  className = "w-full placeholder-slate-400 outline-none border-2 rounded-md p-1"
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={ e => setEmail(e.target.value)}

                />
            </div>
            <div className="mb-5">
                <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold pb-2 ml-2">Fecha de alta</label>
                <input
                  
                  className = "w-full placeholder-slate-400 outline-none border-2 rounded-md p-1"
                  type="date"
                  id="fecha"
                  value={fecha}
                  onChange={ e => setFecha(e.target.value)}

                />
            </div>
            <div className="mb-1">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold pb-2 ml-2">Síntomas</label>
                <textarea
                  
                  className = " resize-none w-full placeholder-slate-400 outline-none border-2 rounded-md p-1"
                  placeholder="Escribe algunos síntomas"
                  id="sintomas"
                  value={sintomas}
                  onChange={ e => setSintomas(e.target.value)}

                />
            </div>
            <input
              type='submit'
              className="text-white bg-indigo-600 w-full p-3 mt-3 rounded-md hover:bg-indigo-800 cursor-pointer transition-colors"
              
              value = {paciente.id ? 'Editar Paciente': 'Agregar Paciente'}
            />

        </form>
    </div>
  )
}

export default Formulario
