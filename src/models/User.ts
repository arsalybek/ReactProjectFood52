export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    isAuthed:boolean;
  }
  
  
  
  export let users: User[] = [
    {
      id: 1,
      name: "Ayana",
      email: "aadilova@gmail.com",
      password: "12345a",
      isAuthed:false
    },
    {
      id: 2,
      name: "Ayaylum",
      email: "ayaylum@gmail.com",
      password: "12345a",
      isAuthed:false
    },
    {
      id: 3,
      name: "Nargiza",
      email: "nargiza@gmail.com",
      password: "12345a",
      isAuthed:false
    }
  
  ];