// function that used in the student_main_list
// to arrange student arguments

const randomStudentList = a => {
  // Fisher-Yates shuffle, no side effects
  // make the student list with random arrange
  let i = a.length,
    t,
    j;
  a = a.slice();
  if (i === 0) {
    return [];
  }
  while (--i) {
    t = a[i];
    a[i] = a[(j = ~~(Math.random() * (i + 1)))];
    a[j] = t;
  }
  return a;
};

let student_main_list = [
  {
    name: 'Ahmad K.',
    availability: 'Not Available',
    skills: ['react', 'node', 'linux', 'sql', 'laravel', 'socket'],
    city: 'beirut',
    imagename: 'ahmad',
    linkedin: 'ahmad-khojah',
    looking_for: 'Internship, Part-Time, Full-Time',
  },
  {
    name: 'Adam A.',
    availability: 'Not Available',
    skills: ['react', 'material ui', 'express', 'wordpress', 'webrtc'],
    city: 'beirut',
    imagename: 'adam',
    linkedin: 'adam-atein',
    looking_for: 'Internship, Part-Time, Full-Time',
  },
  {
    name: 'Ibrahim J.',
    availability: 'Not Available',
    skills: ['react', 'php', 'wordpress', 'mongodb', 'sql'],
    city: 'jounyeh',
    imagename: 'ibrahim',
    linkedin: 'ibrahimjakmour',
    looking_for: 'Part-Time',
  },
  {
    name: 'Ali O.',
    availability: 'Not Available',
    skills: ['react', 'bootsrap', 'node', 'sql', 'wordpress'],
    city: 'saida',
    imagename: 'ali',
    linkedin: 'ali-ossaily-b82764161',
    looking_for: 'Part-Time, Full-Time',
  },
  {
    name: 'Anas J.',
    availability: 'Not Available',
    skills: ['react', 'css', 'node', 'linux', 'sql'],
    city: 'beirut',
    imagename: 'anas',
    linkedin: 'anasjamous',
    looking_for: 'Full-Time',
  },
  {
    name: 'Amr G.',
    availability: 'Available Now',
    skills: ['react', 'express', 'linux', 'wordpress'],
    city: 'beirut',
    imagename: 'amr',
    linkedin: 'amr-gharzaddeen',
    looking_for: 'Internship',
  },
  {
    name: 'Anthony N.',
    availability: 'Available Now',
    skills: ['react', 'wordpress', 'bootsrap', 'html', 'css'],
    city: 'beirut',
    imagename: 'anthony',
    linkedin: 'anthony-nakhle',
    looking_for: 'Full-Time',
  },
  {
    name: 'Bayan M.',
    availability: 'Available Now',
    skills: ['react', 'css', 'node', 'express', 'mongodb '],
    city: 'saida',
    imagename: 'avatar',
    linkedin: 'bayan-mawed-228b30164',
    looking_for: 'Internship, Part-Time',
  },
  {
    name: 'Fadi M.',
    availability: 'Not Available',
    skills: [
      'react',
      'video editor',
      'wordpress',
      'semantic ui',
      'node',
      'express',
      'meteor',
    ],
    city: 'beirut',
    imagename: 'fadi',
    linkedin: 'fadi-mabsaleh',
    looking_for: 'Part-Time, Full-Time',
  },
  {
    name: 'Hampig M.',
    availability: 'Not Available',
    skills: ['react', 'css', 'bootsrap', 'material ui', 'semantic ui', 'node'],
    city: 'beirut',
    imagename: 'hampig',
    linkedin: 'hampig-mazakian-4722a2166',
    looking_for: 'Internship, Part-Time, Full-Time',
  },
  {
    name: 'Jad A.',
    availability: 'Available Now',
    skills: ['react', 'node', 'linux', 'mongodb', 'bootsrap'],
    city: 'beirut',
    imagename: 'avatar',
    linkedin: 'jad-azar',
    looking_for: 'Internship',
  },
  {
    name: 'Tereza K.',
    availability: 'Not Available',
    skills: ['html', 'css', 'wordpress', 'video editor', 'Javascript'],
    city: 'beirut',
    imagename: 'avatar',
    linkedin: 'terez-kazanjian-813987163',
    looking_for: 'Full-Time, Part-Time',
  },
  {
    name: 'Paul K.',
    availability: 'Available Now',
    skills: ['react', 'video editor', 'css', 'HTML', 'linux'],
    city: 'beirut',
    imagename: 'paul',
    linkedin: 'paul-kananjian-987399163',
    looking_for: 'Part-Time',
  },
  {
    name: 'Nagham R.',
    availability: 'Available Now',
    skills: ['react', 'css', 'bootsrap', 'express', 'sql'],
    city: 'saida',
    imagename: 'nagam',
    linkedin: 'nagham-ramadan',
    looking_for: 'Internship, Part-Time, Full-Time',
  },
  {
    name: 'Saleh S.',
    availability: 'Available Now',
    skills: ['react', 'express', 'css', 'mongodb', 'wordpress'],
    city: 'beirut',
    imagename: 'saleh',
    linkedin: 'saleh-saadi',
    looking_for: 'Full-Time',
  },
  {
    name: 'Souad A.',
    availability: 'Not Available',
    skills: ['react', 'css', 'node', 'sql', 'html', 'meator'],
    city: 'saida',
    imagename: 'avatar',
    linkedin: 'souad-ali',
    looking_for: 'Internship,Part-Time,Full-Time',
  },
  {
    name: 'Mitza H.',
    availability: 'Not Available',
    skills: ['video editor', 'react', 'bootsrap', 'material ui'],
    city: 'beirut',
    imagename: 'mitza',
    linkedin: 'mitza-haddad',
    looking_for: 'Part-Time, Full-Time',
  },
  {
    name: 'Gaby K.',
    availability: 'Not Available',
    skills: ['javascript', 'react', 'php', 'laravel', 'ios'],
    city: 'beirut',
    imagename: 'gabi',
    linkedin: 'gabykaram',
    looking_for: 'Full-Time',
  },
  {
    name: 'Chriss H.',
    availability: 'Not Available',
    skills: ['html', 'css', 'javascript', 'react'],
    city: 'beirut',
    imagename: 'avatar',
    linkedin: 'chriss-haddad',
    looking_for: 'Full-Time',
  },
  {
    name: 'Samer E.',
    availability: 'Available Now',
    skills: ['html', 'css', 'javascript', 'react'],
    city: 'saida',
    imagename: 'avatar',
    linkedin: 'samer-el-hage',
    looking_for: 'Full-Time , Part-Time ,Internship',
  },
  {
    name: 'Kevin A.',
    availability: 'Not Available',
    skills: ['angular', 'wordpress', 'react', 'photoshop', 'illustrator'],
    city: 'beirut',
    imagename: 'kevin',
    linkedin: 'kevinabouhanna',
    looking_for: 'Full-Time',
  },
];
// student_main_list = randomStudentList(student_main_list); //make the list rendered randomly
console.log('student_main_list => ', student_main_list);
export default student_main_list;
