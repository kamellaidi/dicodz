import React from 'react'

const Guide = () => {

  const articles = [
    {
      id: 1,
      title: "My First Article",
      content: "This is my first article.",
    },
    {
      id: 2,
      title: "My Second Article",
      content: "This is my second article.",
    },
    {
      id: 3,
      title: "My Third Article",
      content: "This is my third article.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <header className="bg-gray-800 text-white">
        <h1 className="text-4xl font-bold">My Blog</h1>
      </header>
      <main className="flex flex-col justify-center items-center">
        {articles.map((article) => (
          <article key={article.id} className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-base">{article.content}</p>
          </article>
        ))}
      </main>
      <footer className="bg-gray-800 text-white">
        <p>Copyright &copy; 2023</p>
      </footer>
    </div>
  )
}

export default Guide
