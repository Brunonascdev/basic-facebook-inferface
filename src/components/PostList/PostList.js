import React, { useState } from "react";

import Post from "../Post/Post";

import "./PostList.css";

const PostList = () => {
  const [posts] = useState([
    {
      id: 1,
      author: {
        name: "Julio Alcantara",
        avatar:
          "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
      },
      date: "04 Jun 2019",
      content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
      comments: [
        {
          id: 1,
          author: {
            name: "Diego Fernandes",
            avatar:
              "https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg",
          },
          content: "Conteúdo do comentário",
        },
        {
          id: 2,
          author: {
            name: "Diego Fernandes",
            avatar:
              "https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg",
          },
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga esse reprehenderit minus libero laborum distinctio accusantium laboriosam ratione maiores, architecto blanditiis eum, modi totam recusandae autem mollitia rerum fugit eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi, odit quod sapiente eum consequatur quia magnam sed voluptatem quidem esse, omnis sint perspiciatis iste accusamus unde voluptatum exercitationem veniam",
        },
      ],
    },
    {
      id: 2,
      author: {
        name: "Archy Marshall",
        avatar:
          "https://tecoapple.com/wp-content/uploads/2020/02/kingkrulecellularv020.jpg",
      },
      date: "25 Maio 2020",
      content: "Olá, sou um post teste!",
      comments: [
        {
          id: 1,
          author: {
            name: "Mac DeMarco",
            avatar:
              "https://lh3.googleusercontent.com/proxy/7aQM2nG-2tdu1IQ2_dF4WSQL_uS2sEnv2obYFtL5LgEbxurePJkpxe2Pv9SkJrzQcmZ71MyTssWnrThPQO32PhVqjU3y4Xa7A8pc5Qut9uxxs36zOHK2HGePjyFZTbqCjDdbqZ1TdjrpsPnYmvclLpa9H6tHjvqFFgsYgTMLVfNWnu2XeZfLNuLSzP9ztHzU3xEciZGT3lG-SMlJfYajRcp-hgc75bLq0ms",
          },
          content: "Parabéns!",
        },
        {
          id: 2,
          author: {
            name: "Diego Fernandes",
            avatar:
              "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4",
          },
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga esse reprehenderit minus libero laborum distinctio accusantium laboriosam ratione maiores, architecto blanditiis eum, modi totam recusandae autem mollitia rerum fugit eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi, odit quod sapiente eum consequatur quia magnam sed voluptatem quidem esse, omnis sint perspiciatis iste accusamus unde voluptatum exercitationem veniam",
        },
      ],
    },
  ]);

  return (
    <div className="container">
      <Post data={posts} />
    </div>
  );
};

export default PostList;
