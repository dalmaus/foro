const API_ENDPOINT = "http://localhost/EntornoServidor/foro/controlador";

const urls = {
  CATEGORIAS_ENDPOINT: `${API_ENDPOINT}/categoria/List.php`,
  CATEGORIA_ENDPOINT: `${API_ENDPOINT}/categoria/CategoriaHilosConUsuarioList.php`,
  HILO_ENDPOINT: `${API_ENDPOINT}/hilo/HiloMensajesConUsuarioList.php`,
  USUARIO_ENDPOINT: `${API_ENDPOINT}/usuario/Show.php`,
  USUARIO_DATOS_ENDPOINT: `${API_ENDPOINT}/_sesion/Yo.php`,
  LOGIN_ENDPOINT: `${API_ENDPOINT}/_sesion/SesionLogin.php`,
  USUARIO_AUTENTICADO_ENDPOINT: `${API_ENDPOINT}/_sesion/SesionComprobar.php`,
  USUARIO_CERRAR_SESION_ENDPOINT: `${API_ENDPOINT}/_sesion/SesionCerrar.php`,
};

export const tipos = {
  CATEGORIA: "categoria",
  HILO: "hilo",
  USUARIO: "usuario",
};

export default urls;