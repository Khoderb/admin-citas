import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
   // destructuring al arreglo de pacientes
   //itero sobre el arreglo de pacientes
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">

      {pacientes && pacientes.length ?(
        <>
           <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
           <p className="mt-5 mb-10 text-center text-lg">
               Administra tus{' '}
               <span className="text-indigo-600 font-bold"> Pacientes y Citas</span>
           </p>
           
           {pacientes.map( paciente => (
             <Paciente
             // creo un prop key siempre que hago un map
             key={paciente.id}
             paciente={paciente}
             setPaciente={setPaciente}
             eliminarPaciente={eliminarPaciente}
             />
   
           ))}
        </>

          ):(
            <>
              <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
              <p className="mt-5 mb-10 text-center text-lg">
                 Comienza agregando pacientes,{' '}
                <span className="text-indigo-600 font-bold">aparecerán aquí abajo</span>
              </p>
            </>  

          )}

    </div>  
  )
}

export default ListadoPacientes
