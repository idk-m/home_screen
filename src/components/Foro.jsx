import React from 'react';

const Foro = () => {
  const posts = [
    { id: 1, title: "Ayuda", content: "Alguien me dice como se funciona este juego? Paso perdiendo...", author: "Nigromante77", avatar: "https://e0.pxfuel.com/wallpapers/603/24/desktop-wallpaper-hisoka-hisoka-anime-hunter-x-hunter-1080x1080-hisoka.jpg" },
    { id: 2, title: "Mal Juego", content: "Que clase de mal chiste es este juego?? salio de idea dsps de tomar?", author: "Panki99", avatar: "https://i.pinimg.com/564x/0e/c8/ab/0ec8ab469b010e41bdb9dbcf2c7ff1f6.jpg" },
    { id: 3, title: "Que prefieren?", content: "Soy yo o los devs se robaron todos los sprites de Metal Slug?", author: "OrkoVerdeHoja", avatar: "https://i.pinimg.com/originals/58/df/ae/58dfae343c0b0078546f3efda94e8cda.jpg" },
    
  ];

  return (
    <div className="bg-transparent min-h-screen py-44">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-8xl font-rubik text-white hover: mb-8">Foro de Discusión</h1>
        <div className="mb-10 ">
          <input type="text" className="w-full py-2 px-96 border border-rosado rounded-lg shadow-sm bg-celeste bg-opacity-40 text-white focus:border-rosado placeholder:text-white" placeholder="Buscas algo en especifico?" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="bg-celeste  rounded-lg shadow-md overflow-hidden">
              <div className="bg-rosado text-white px-4 py-2 flex items-center">
                <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full mr-2 " />
                <h2 className="text-xl font-semibold">{post.title}</h2>
              </div>
              <div className="p-6">
                <p className="text-white font-semibold">{post.content}</p>
              </div>
              <div className="bg-celeste border-2 border-white rounded-lg px-4 py-2 flex justify-between items-center">
                <p className="text-sm text-white font-semibold hover:text-rosado">Publicado por {post.author}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                  Responder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foro;

