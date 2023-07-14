import React from 'react';

const Foro = () => {
  const posts = [
    { id: 1, title: "Primer post", content: "Contenido del primer post", author: "Usuario1", avatar: "https://e0.pxfuel.com/wallpapers/603/24/desktop-wallpaper-hisoka-hisoka-anime-hunter-x-hunter-1080x1080-hisoka.jpg" },
    { id: 2, title: "Segundo post", content: "Contenido del segundo post", author: "Usuario2", avatar: "https://i.pinimg.com/564x/0e/c8/ab/0ec8ab469b010e41bdb9dbcf2c7ff1f6.jpg" },
    { id: 3, title: "Tercer post", content: "Contenido del tercer post", author: "Usuario3", avatar: "https://i.pinimg.com/originals/58/df/ae/58dfae343c0b0078546f3efda94e8cda.jpg" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-44">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Foro de Discusión</h1>
        <div className="mb-6">
          <input type="text" className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500" placeholder="Buscar publicaciones" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-500 text-white px-4 py-2 flex items-center">
                <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full mr-2" />
                <h2 className="text-xl font-semibold">{post.title}</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{post.content}</p>
              </div>
              <div className="bg-gray-200 px-4 py-2 flex justify-between items-center">
                <p className="text-sm text-gray-700">Publicado por {post.author}</p>
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

