import Message from "./Message";
export default function App() {
  const tasks = [
    { id: 1, title: "React learn", completed: true },
    { id: 2, title: "java learn", completed: true },
    { id: 3, title: "python learn  ", completed: false },
  ];
  
  return (
     
      <>
        {tasks.map((item) => (
          <>
            {item.completed == true ? (
              <Message item={item.title} />
            ) : (
              <Message title={item.title} />
            )}
          </>
        ))}
      </>
  
    
  );
}

