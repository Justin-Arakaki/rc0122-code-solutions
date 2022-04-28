function graduate(credential) {
  return function (fullName) {
    return `${fullName} ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const name = 'Justin Arakaki';

console.log(medicalSchool(name));
console.log(lawSchool(name));
