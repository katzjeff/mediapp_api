// Patients Dataset
const patients = [
  {
    id: "1",
    patientName: "Karen Harrington",
    email: "dis.parturient@hotmail.net",
    age: 16,
    gender: "Male",
    phone: "1-802-811-6441",
    status: "Emergency",
    diagnosis:
      "Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo",
    drName: "Chaim Mejia",
  },
  {
    id: "2",
    patientName: "Baker Blankenship",
    email: "at.lacus@google.couk",
    age: 28,
    gender: "Male",
    phone: "1-621-673-8152",
    status: "Consultation",
    diagnosis: "pellentesque. Sed dictum. Proin eget",
    drName: "Jaquelyn Finch",
  },
  {
    id: "3",
    patientName: "May Cote",
    email: "at@google.com",
    age: 63,
    gender: "Male",
    phone: "182-6342",
    status: "Transferred",
    diagnosis:
      "ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit",
    drName: "Adam Smith",
  },
  {
    id: "4",
    patientName: "Germaine Raymond",
    email: "sapien@outlook.edu",
    age: 28,
    gender: "Male",
    phone: "1-535-828-1292",
    status: "Admitted",
    diagnosis:
      "eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus,",
    drName: "Charles Koch",
  },
  {
    id: "5",
    patientName: "Gay Houston",
    email: "curae@icloud.edu",
    age: 56,
    gender: "Male",
    phone: "505-5920",
    status: "Transferred",
    diagnosis:
      "eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio",
    drName: "Camden Wilkins",
  },
  {
    id: "6",
    patientName: "Nora Sanchez",
    email: "nec.mollis@outlook.net",
    age: 18,
    gender: "Male",
    phone: "719-9160",
    status: "Consultation",
    diagnosis:
      "euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy.",
    drName: "Maia Lawrence",
  },
  {
    id: "7",
    patientName: "Hadley Dalton",
    email: "nam@outlook.org",
    age: 0,
    gender: "Male",
    phone: "685-2625",
    status: "Transferred",
    diagnosis:
      "Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros",
    drName: "Ralph Nicholson",
  },
  {
    id: "8",
    patientName: "Colin Jennings",
    email: "nec.ante.maecenas@yahoo.net",
    age: 54,
    gender: "Male",
    phone: "274-9557",
    status: "Transferred",
    diagnosis:
      "auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est,",
    drName: "Hall Jacobson",
  },
  {
    id: "9",
    patientName: "Madeson Mayer",
    email: "morbi.tristique.senectus@icloud.ca",
    age: 7,
    gender: "Male",
    phone: "1-124-743-1206",
    status: "Transferred",
    diagnosis:
      "Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem",
    drName: "Tallulah Whitehead",
  },
  {
    id: "10",
    patientName: "Cruz Stark",
    email: "quis.arcu.vel@google.couk",
    age: 50,
    gender: "Male",
    phone: "1-572-836-9737",
    status: "Emergency",
    diagnosis:
      "pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel",
    drName: "Joan Hooper",
  },
  {
    id: "11",
    patientName: "Kiona Washington",
    email: "fermentum.fermentum@aol.org",
    age: 45,
    gender: "Male",
    phone: "1-525-433-4158",
    status: "Emergency",
    diagnosis:
      "quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus",
    drName: "Camilla Cain",
  },
  {
    id: "12",
    patientName: "Dale Molina",
    email: "eu.tellus.eu@hotmail.org",
    age: 31,
    gender: "Male",
    phone: "1-214-632-7528",
    status: "Transferred",
    diagnosis:
      "cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam",
    drName: "Tatyana Shaffer",
  },
  {
    id: "13",
    patientName: "Jesse Monroe",
    email: "sit.amet.metus@outlook.com",
    age: 33,
    gender: "Male",
    phone: "1-684-180-6375",
    status: "Transferred",
    diagnosis:
      "lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer",
    drName: "Mason Gates",
  },
  {
    id: "14",
    patientName: "Todd Coffey",
    email: "erat.vivamus@outlook.com",
    age: 31,
    gender: "Male",
    phone: "223-9872",
    status: "Consultation",
    diagnosis:
      "vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac",
    drName: "Emery Ware",
  },
  {
    id: "15",
    patientName: "Price Mccoy",
    email: "a.dui@google.com",
    age: 36,
    gender: "Male",
    phone: "626-5618",
    status: "Transferred",
    diagnosis:
      "porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim,",
    drName: "Rhona Nichols",
  },
  {
    id: "16",
    patientName: "Oleg Clemons",
    email: "in.tincidunt.congue@yahoo.edu",
    age: 55,
    gender: "Male",
    phone: "1-950-257-7623",
    status: "Emergency",
    diagnosis:
      "tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum.",
    drName: "Lana Burton",
  },
  {
    id: "17",
    patientName: "Brett Sawyer",
    email: "dolor.dolor.tempus@google.net",
    age: 48,
    gender: "Male",
    phone: "1-307-478-1364",
    status: "Emergency",
    diagnosis:
      "quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis",
    drName: "Jada Odom",
  },
  {
    id: "18",
    patientName: "Carissa Sweet",
    email: "accumsan.neque.et@outlook.edu",
    age: 4,
    gender: "Male",
    phone: "272-8757",
    status: "Transferred",
    diagnosis:
      "Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum",
    drName: "Samantha Vaughan",
  },
  {
    id: "19",
    patientName: "Bertha Goff",
    email: "duis.a@yahoo.couk",
    age: 5,
    gender: "Male",
    phone: "1-862-243-4218",
    status: "Consultation",
    diagnosis: "Proin vel nisl. Quisque fringilla euismod enim. Etiam",
    drName: "Brock Delgado",
  },
  {
    id: "20",
    patientName: "Kadeem Atkinson",
    email: "praesent.eu.dui@icloud.net",
    age: 36,
    gender: "Male",
    phone: "853-3235",
    status: "Consultation",
    diagnosis: "at pretium aliquet, metus",
    drName: "Jasmine Terrell",
  },
];

// Disease Dataset
const diseases = [
  {
    id: "1",
    diseaseName: "blandit enim",
    symptoms: "tristique senectus et netus et malesuada fames ac turpis",
    treatment:
      "sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing",
  },
  {
    id: "2",
    diseaseName: "enim. Etiam",
    symptoms:
      "magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis",
    treatment: "et, rutrum eu, ultrices sit amet, risus. Donec nibh enim,",
  },
  {
    id: "3",
    diseaseName: "neque pellentesque massa lobortis",
    symptoms: "diam lorem, auctor quis, tristique ac,",
    treatment:
      "arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida",
  },
  {
    id: "4",
    diseaseName: "tincidunt congue turpis.",
    symptoms: "dui, in sodales elit erat vitae risus. Duis a",
    treatment:
      "elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu",
  },
  {
    id: "5",
    diseaseName: "neque tellus,",
    symptoms:
      "purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim",
    treatment:
      "Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris",
  },
  {
    id: "6",
    diseaseName: "pede. Suspendisse",
    symptoms:
      "Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae",
    treatment: "diam vel arcu. Curabitur ut odio vel est tempor bibendum.",
  },
  {
    id: "7",
    diseaseName: "at",
    symptoms:
      "massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis",
    treatment:
      "lectus. Cum sociis natoque penatibus et magnis dis parturient montes,",
  },
  {
    id: "8",
    diseaseName: "et",
    symptoms: "arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt",
    treatment:
      "est, mollis non, cursus non, egestas a, dui. Cras pellentesque.",
  },
  {
    id: "9",
    diseaseName: "ullamcorper, nisl",
    symptoms:
      "morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    treatment: "libero lacus, varius et, euismod et, commodo at, libero. Morbi",
  },
  {
    id: "10",
    diseaseName: "a, aliquet",
    symptoms: "eget",
    treatment:
      "varius et, euismod et, commodo at, libero. Morbi accumsan laoreet",
  },
  {
    id: "11",
    diseaseName: "tortor. Nunc commodo auctor velit.",
    symptoms: "tortor. Integer aliquam adipiscing lacus. Ut nec urna et",
    treatment:
      "dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent",
  },
  {
    id: "12",
    diseaseName: "ultrices iaculis odio. Nam interdum",
    symptoms:
      "sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a,",
    treatment:
      "mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In",
  },
  {
    id: "13",
    diseaseName: "sit",
    symptoms:
      "imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet",
    treatment:
      "sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra,",
  },
  {
    id: "14",
    diseaseName: "ullamcorper. Duis at lacus. Quisque",
    symptoms:
      "ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi",
    treatment:
      "dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante",
  },
  {
    id: "15",
    diseaseName: "tortor. Integer",
    symptoms:
      "lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut",
    treatment: "aliquet vel, vulputate eu, odio. Phasellus at augue id ante",
  },
];

// Doctors Dataset
const doctors = [
  {
    id: "1",
    drName: "Hiroko Gardner",
    email: "arcu.imperdiet.ullamcorper@outlook.com",
    profession: "Psychiatrist",
    phone: "1-271-533-8252",
  },
  {
    id: "2",
    drName: "Francesca Lee",
    email: "erat.in.consectetuer@yahoo.com",
    profession: "Internists",
    phone: "1-288-466-5119",
  },
  {
    id: "3",
    drName: "Azalia Kim",
    email: "nascetur.ridiculus@hotmail.ca",
    profession: "GP",
    phone: "1-435-566-7987",
  },
  {
    id: "4",
    drName: "Shelley Ortiz",
    email: "erat.etiam.vestibulum@icloud.net",
    profession: "Internists",
    phone: "722-5769",
  },
  {
    id: "5",
    drName: "Carter Hickman",
    email: "ultrices.posuere.cubilia@hotmail.net",
    profession: "Psychiatrist",
    phone: "567-0117",
  },
  {
    id: "6",
    drName: "Jesse Aguirre",
    email: "magnis.dis@hotmail.com",
    profession: "Cardiologists",
    phone: "654-2817",
  },
  {
    id: "7",
    drName: "Axel Carrillo",
    email: "lobortis.augue@google.ca",
    profession: "Psychiatrist",
    phone: "888-3135",
  },
  {
    id: "8",
    drName: "Anika Tucker",
    email: "lorem.luctus@aol.net",
    profession: "Psychiatrist",
    phone: "850-2523",
  },
  {
    id: "9",
    drName: "Randall Guy",
    email: "dis@icloud.net",
    profession: "Cardiologists",
    phone: "1-635-983-3528",
  },
  {
    id: "10",
    drName: "Elliott Hatfield",
    email: "orci@aol.ca",
    profession: "GP",
    phone: "1-841-928-5327",
  },
  {
    id: "11",
    drName: "Jared Small",
    email: "vel.lectus@yahoo.ca",
    profession: "Radiologists",
    phone: "1-982-834-5614",
  },
  {
    id: "12",
    drName: "Zephania Lancaster",
    email: "malesuada@protonmail.ca",
    profession: "Radiologists",
    phone: "1-378-573-5418",
  },
  {
    id: "13",
    drName: "Dora Mckenzie",
    email: "elit@outlook.com",
    profession: "Neurologists",
    phone: "752-5125",
  },
  {
    id: "14",
    drName: "Ingrid Preston",
    email: "varius.et@outlook.couk",
    profession: "Anesthesiologist",
    phone: "1-822-226-2240",
  },
  {
    id: "15",
    drName: "Hadley Harris",
    email: "aliquet.proin@protonmail.org",
    profession: "Anesthesiologist",
    phone: "748-7781",
  },
  {
    id: "16",
    drName: "Melvin Patrick",
    email: "donec.elementum@outlook.net",
    profession: "GP",
    phone: "838-2702",
  },
  {
    id: "17",
    drName: "Hadley Acosta",
    email: "amet.consectetuer.adipiscing@yahoo.ca",
    profession: "Emergency physicians",
    phone: "625-1353",
  },
];

module.exports = { patients, diseases, doctors };
