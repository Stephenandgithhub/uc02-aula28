const contactData = {
  name: "HARPER STERN",
  email: "fulaninho@email.com",
  phone: "46987654321",
  cpf: "00123456789",
  address: "Pierpoint Embankment",
  number: 18,
  complemento: "Era uma casa muito engraçada",
  cep: 123456789,
  bairro: "Centro",
  cidade: "Pato Branco",
  estado: "Paraná",
  sexo: "Masculino",
  estadoCivil: "Divorciado",
  profissao: "Cross Product Sales (CPS)",
  dataNascimento: "01/01/1980",
  urls: ["https://linkedin.com/harperstern", "https://github.com/harperstern"],
};

//div title

const divTitle = document.getElementById("title");

const h1Name = document.createElement("h1");
h1Name.textContent = contactData.name;

divTitle.appendChild(h1Name);

const spanProfissao = document.createElement("span");
spanProfissao.textContent = contactData.profissao;

divTitle.appendChild(spanProfissao);

//div contact
const divContact = document.createElement("div");
const listContact = document.getElementById("contact");

const listContacts = document.createElement("ul");

//address list
const itemAddress = document.createElement("li");
itemAddress.textContent = `${contactData.address}, ${contactData.number}`;
listContact.appendChild(itemAddress);

//email list
const itemEmail = document.createElement("li");
itemEmail.textContent = `${contactData.email}`;
listContact.appendChild(itemEmail);

//phone
const itemPhone = document.createElement("li");
itemPhone.textContent = `${contactData.phone}`;
listContact.appendChild(itemPhone);
//links

for (url of contactData.urls) {
  const anchor = document.createElement("a");
  anchor.textContent = url;
  anchor.setAttribute("href", url);

  const itemLink = document.createElement("li");
  itemLink.appendChild(anchor);
  listContact.appendChild(itemLink);
}

divContact.appendChild(listContacts);
