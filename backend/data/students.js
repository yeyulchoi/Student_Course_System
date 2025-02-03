import becrypt from 'bcryptjs';


const students=[
    {
        name:'Admin User',
        student_number:'n/a',
        program:'n/a',
        email:'admin@email.com',
        phone:'n/a',
        address:'n/a',
        favorite_programming_lang:'n/a',
        favorite_framework:'n/a',
        password: becrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:'Yeyul Choi',
        student_number:'300415826',
        program:'Software Engineering Technology',
        email:'yeyul@email.com',
        phone:'648-528-5829',
        address:'Toronto, ON',
        favorite_programming_lang:'Python',
        favorite_framework:'Django',
        password: becrypt.hashSync('123456',10),
        isAdmin:false,
    },
    {
        name:'Jack Doson',
        student_number:'300589456',
        program:'AI Engineering',
        email:'jack@email.com',
        phone:'6470255456',
        address:'Richmond Hill, ON ',
        favorite_programming_lang:'Java',
        favorite_framework:'Spring',
        password: becrypt.hashSync('123456',10),
        isAdmin:false,
    },
];

export default students;