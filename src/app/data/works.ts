export type WorkItem = {
  imgUrl: string;
  title: string;
  techno: string;
  content: string;
  link: string;
};

const works: WorkItem[] = [
  {
    imgUrl: '/logo/backlog.png',
    title: 'Maverva',
    techno:
      'TypeScript, React JS, Styled-component, Node js, PostgreSQL, Prisma, Express.js, Vercel',
    content:
      ' Maverva: A modern web application designed to optimize user management and data sharing processes, offering a robust backend and a user-friendly frontend. Users can securely log in via email, gaining access to the platform. The application manages various workflows with dynamic and customizable functionality to enhance the user experience. On the backend, Node.js and Express.js are used to provide high-performance APIs, while PostgreSQL handles database management. The application ensures data security with JWT-based authentication and authorization. Docker ensures the portability of the application, and efficient deployment is achieved through Vercel.On the frontend, dynamic components are built with React.js, managing user interactions in real time. The application is built with a flexible and maintainable codebase, allowing for easy scalability and seamless integration into various business processes.',
    link: 'https://maverva.com/',
  },
  {
    imgUrl: '/logo/todolist.png',
    title: 'To Do List App',
    techno: 'React JS, Node js, Mongoose',
    content: ' It is a simple to do list application saved in database.',
    link: 'https://todo-list-git-main-hilalabaci.vercel.app/',
  },

  {
    imgUrl: '/logo/notes.png',
    title: 'Notes App',
    techno: 'React JS',
    content:
      ' It is a note-taking application that I created with React js and saved in Local Storage.It is based on the date you created and changes the date when you make any changes. You can delete or edit the note when you complete the note with the tick mark.',
    link: 'https://github.com/hilalabaci/ToDoList',
  },
  {
    imgUrl: '/logo/calculator.png',
    title: 'Calculator',
    techno: 'JavaScript',
    content:
      ' It is a calculator inspired by App design and created using Javascript.',
    link: 'https://calculator.hilalabaci.com/',
  },
  {
    imgUrl: '/logo/simon-game.png',
    title: 'Simon Game',
    techno: 'JavaScript',
    content:
      "The 'Simon Game' app is a game built using JavaScript. It is a memory challenging game that starts with clicking on a randomly selected box and progresses by remembering each randomly selected box.",
    link: 'https://github.com/hilalabaci/Simon-Game-Challenge',
  },
];

export default works;
