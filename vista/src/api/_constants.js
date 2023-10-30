const API_ENDPOINT = "http://localhost/EntornoServidor/foro/controlador";

const urls = {
  CATEGORIAS_ENDPOINT: `${API_ENDPOINT}/categoria/List.php`,
  CATEGORIA_ENDPOINT: `${API_ENDPOINT}/categoria/CategoriaHilosConUsuarioList.php`,
  HILO_ENDPOINT: `${API_ENDPOINT}/hilo/HiloMensajesConUsuarioList.php`,
  HILO_DELETE_ENDPOINT: `${API_ENDPOINT}/hilo/Delete.php`,
  USUARIO_HILOS_ENDPOINT: `${API_ENDPOINT}/hilo/HilosPorUsuario.php`,
  USUARIO_MENSAJES_ENDPOINT: `${API_ENDPOINT}/mensaje/MensajesPorUsuario.php`,
  USUARIO_ENDPOINT: `${API_ENDPOINT}/usuario/Show.php`,
  USUARIO_UPDATE_ENDPOINT: `${API_ENDPOINT}/usuario/Update.php`,
  USUARIO_DATOS_ENDPOINT: `${API_ENDPOINT}/_sesion/Yo.php`,
  USUARIO_AUTENTICADO_ENDPOINT: `${API_ENDPOINT}/_sesion/SesionComprobar.php`,
  USUARIO_CERRAR_SESION_ENDPOINT: `${API_ENDPOINT}/_sesion/SesionCerrar.php`,
  MENSAJE_DELETE_ENDPOINT: `${API_ENDPOINT}/mensaje/Delete.php`,
  LOGIN_ENDPOINT: `${API_ENDPOINT}/_sesion/SesionLogin.php`,
};

export const tipos = {
  CATEGORIA: "categoria",
  HILO: "hilo",
  USUARIO: "usuario",
};

export default urls;