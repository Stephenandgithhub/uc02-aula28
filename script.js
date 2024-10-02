const contactData = {
      "name": "HARPER STERN",
      "email": "fulaninho@email.com",  
      "phone": "46987654321",  
      "cpf": "00123456789",  
      "address": "Rua dos Bobos",  
      "number": 0,  
      "complemento": "Era uma casa muito engraçada",  
      "cep": 123456789,  
      "bairro": "Centro",  
      "cidade": "Pato Branco",  
      "estado": "Paraná",  
      "sexo": "Masculino",  
      "estadoCivil": "Divorciado",  
      "profissao": "Programador",  
      "dataNascimento": "01/01/1980"
}
console.log(contactData)
const h1name = document.getElementById("name")
h1name.textContent = contactData.name