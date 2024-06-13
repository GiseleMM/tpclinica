export interface Iusuario {
    perfil:"admi"|"especialista"|"paciente",
    nombre:string,
    apellido:string,
    dni:string,
    edad:number,
    email:string,
    password:string,
    imagen:string[],
    obraSocial?:string,
    especialidad?:string[]
}

