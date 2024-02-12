import React from 'react'
import './Projects.css'

function Projects() {

  return (

  <div className='md:py-48 pb-[4rem] pt-[2rem] dark:bg-[#23304c] flex flex-wrap justify-center items-center '>

    <div className='m-4'>
      <div class="card">
      <iframe width="400" height="250" src="https://www.youtube.com/embed/usBmu1X9gIY?si=FGX-CB4EKFmE-A03&amp;controls=0&amp;start=9&autoplay=1&mute=1&loop=1&playlist=usBmu1X9gIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="card__content">
          <p class="card__title">Blog App</p>
          <p class="card__description">This is a blog app buid with React. It uses Appwrite to store user data. It also uses tailwind css and other react packages like react-router-dom, redux toolkit, react-hook-form and tinymce-react.</p>
          <a href="https://blog-app-siddharth-roys-projects.vercel.app/" target="_blank">
            <button class="card__button">Live Demo</button>
          </a>
          <a href="https://github.com/Siddharth27Roy/BlogApp" target="_blank">
          <button class="card__button secondary">Source Code</button>
          </a>
        </div>
      </div>    
    </div>

    <div className='m-4'>
      <div class="card">
        <iframe width="400" height="250" src="https://www.youtube.com/embed/ujqQsQYS3BA?si=jxULqn5PF0nv-AKo&autoplay=1&mute=1&loop=1&playlist=ujqQsQYS3BA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
        <div class="card__content">
          <p class="card__title">Portfolio Website</p>
          <p class="card__description">My personal portfolio website using React and Tailwind CSS, featuring a clean and minimal UI design. It uses React-Router-Dom for easy navigation.</p>
          <a href="https://siddharth-roy.vercel.app/" target="_blank">
            <button class="card__button">Live Demo</button>
          </a>
          <a href="https://github.com/Siddharth27Roy/Siddharth-Roy" target="_blank">
          <button class="card__button secondary">Source Code</button>
          </a>
        </div>
      </div>    
    </div>

    <div className='m-4'>
      <div class="card">
      <iframe width="400" height="250" src="https://www.youtube.com/embed/aga0oPfYIY4?si=znlIc7bXGa9rEahZ&autoplay=1&mute=1&loop=1&playlist=aga0oPfYIY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="card__content">
          <p class="card__title">Todo List</p>
          <p class="card__description">Developed a Todo List application using React to enhance task management. Implemented the React Context API to efficiently manage and share state information. Incorporated browser's local storage to persistently store and retrieve user's tasks.</p>
          {/* <a href="" target="_blank">
            <button class="card__button">Live Demo</button>
          </a> */}
          <a href="https://github.com/Siddharth27Roy/Todo-List" target="_blank">
          <button class="card__button secondary">Source Code</button>
          </a>
        </div>
      </div>    
    </div>

  </div>
  )
}

export default Projects
