const Paciente = ({paciente, setPaciente,eliminarPaciente}) => {

    const  {nombre, propietario, email, fecha, sintomas,id } = paciente;

    const handleEliminar = () =>{
        
        const res = Swal.fire({
            title: '¿Deseas eliminar a este paciente?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                  'Eliminado',
                  'El paciente fue eliminado correctamente.',
                  'success',
                  eliminarPaciente(id)
                )
            }
        })
    }
    
    return (
        
        <div className="mx-5 my-7 bg-white grid grid-flow-row  shadow-md px-5 py-3 rounded-lg text-justify "> 
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
                    <span className="font-normal normal-case">{ nombre }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
                    <span className="font-normal normal-case">{ propietario }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Email:{' '}
                    <span className="font-normal normal-case">{ email }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta:{' '}
                    <span className="font-normal normal-case">{ fecha }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:{' '}
                    <span className="font-normal normal-case">{ sintomas }</span>
                </p>
                <div className="flex justify-between">
                    <button 
                        className="py-1 px-14 bg-indigo-600 my-3 font-bold text-white rounded-md  mb-3 hover:bg-indigo-700 transition-colors"
                        onClick = { ()=>setPaciente(paciente) }
                    >
                        Editar
                    </button>
                    <button 
                        className="py-1 px-14 bg-red-600 my-3 font-bold text-white rounded-md mb-3 hover:bg-red-700 transition-colors" 
                        onClick = { handleEliminar }

                    >
                        Eliminar
                    </button>
                </div>

        </div>

    )
}

export default Paciente
