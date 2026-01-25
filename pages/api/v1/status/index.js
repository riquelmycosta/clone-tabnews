function status(request, response) {
  response.status(200).json({ chave: "Amo voces" });
}

export default status;
