const API_ENDPOINT = "http://localhost/EntornoServidor/foro/controlador";

const urls = {
  CATEGORIAS_ENDPOINT: `${API_ENDPOINT}/categoria/List.php`,
  CATEGORIA_ENDPOINT: `${API_ENDPOINT}/categoria/CategoriaHilosConUsuarioList.php`,
  HILO_ENDPOINT: `${API_ENDPOINT}/hilo/HiloMensajesConUsuarioList.php`,
  USUARIO_ENDPOINT: `${API_ENDPOINT}/usuario/Show.php`,
  LOGIN_ENDPOINT: `${API_ENDPOINT}/sesion/SesionLogin.php`,
  USUARIO_AUTENTICADO_ENDPOINT: `${API_ENDPOINT}/sesion/SesionComprobar.php`,
};

export const tipos = {
  CATEGORIA: "categoria",
  HILO: "hilo",
  USUARIO: "usuario",
};

export default urls;