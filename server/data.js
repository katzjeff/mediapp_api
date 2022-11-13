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
    diagnosis: "enim. Etiam",
    diseaseId: "1",
    doctorId: "4",
    drName: "Shelley Ortiz",
  },
  {
    id: "2",
    patientName: "Baker Blankenship",
    email: "at.lacus@google.couk",
    age: 28,
    gender: "Male",
    phone: "1-621-673-8152",
    status: "Consultation",
    diagnosis: "neque pellentesque",
    diseaseId: "2",
    doctorId: "1",
    drName: "Hiroko Gardner",
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
    drName: "Azalia Kim",
    doctorId: "3",
    diseaseId: "4",
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
    drName: "Francesca Lee",
    doctorId: "2",
    diseaseId: "3",
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
    drName: "Shelley Ortiz",
    doctorId: "4",
    diseaseId: "1",
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
    diseaseName: "neque pellentesque",
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
];

module.exports = { patients, diseases, doctors };
