//Scrpit for modal control

const showModal=()=>{
    const modal = document.querySelector('.modal');
    if(modal.style.top==="10%"){
        modal.style.top='-200%';
    }
    else{
        modal.style.top='10%';
    }
}

// Setting up  the local storage
const blogPosts=[{
    url:"https://images.unsplash.com/photo-1679464307375-ad8ab6a70029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",// image url
    "title":"Blog title",
    "desc":"Blog Description",
    "blogContent":"Blog Content"
}]
// localStorage.setItem('blogs',JSON.stringify(blogPosts));

// To create a blog 
document.getElementById('create-blog').addEventListener('click',(event)=>{
    event.preventDefault();
    const url=document.getElementById('blog-url').value;
    const title=document.getElementById('blog-title').value;
    const desc=document.getElementById('blog-desc').value;
    const blogContent=document.getElementById('blog-content').value;
    if(!url||!title||!desc||!desc||!blogContent){
            alert("All field are required")
            return;
    }
    const blog={
        url,
        title,
        desc,
        blogContent
    }


    const blogs = JSON.parse(localStorage.getItem('blogs'));
    localStorage.setItem('blogs',JSON.stringify([blog,...blogs]));
    const upblogs = JSON.parse(localStorage.getItem('blogs'));

    const modal =document.querySelector('.modal');
    modal.style.top="-100%";
    /// cleaeing all the cards and adding all new cards
    document.querySelector('.hero-section').innerHTML="";
    showBlogs();
})


// To handle the blog cards
function showBlogs(){
    const blogPosts = JSON.parse(localStorage.getItem('blogs'));

    const blogCards = blogPosts.map((blogs,blogId)=>{
        return `<div class="blog-card">
        <img src="${blogs.url}" alt="img" />
        <h3 id="card-title">${blogs.title}</h3>
        <p id="card-desc">
        ${blogs.desc}
        </p>
        <button class="read-blog" id="${blogId}" onclick="readBlog(this.id)">Read</button>
      </div>`
    })
    ///  mapping it into the hero section
    document.querySelector('.hero-section').innerHTML="";
    blogCards.forEach(blogCard => {
        document.querySelector('.hero-section').innerHTML+=blogCard;
    });

     /// Change the  back  button to the add button
    if(document.querySelector('.add--blog')==null){
        const header= document.querySelector('.header')
        header.removeChild(header.querySelector('#prev-btn'));
        header.innerHTML += ` <button class="add--blog" onclick="showModal()">
        Add Blog <i class="fa-solid fa-plus"></i>
      </button>`
    }
}
showBlogs();


/// Function to read blog 
const readBlog = (id)=>{
    const blogs = JSON.parse(localStorage.getItem('blogs'));

    const currentBlog = blogs[id];
    document.querySelector('.hero-section').innerHTML=`
    <div class="show-blog">
        <div class="blog-heading">
          <div class="blog-title">
            <h2>${currentBlog.title}</h2>
            <p>${currentBlog.desc}</p>
          </div>
          <img src="${currentBlog.url}" alt="image"/>
        </div>
        <div class="blog-content">
        ${currentBlog.blogContent}
        </div>
    </div>
    `
   
    /// Change the  add button to the back button
    const header = document.querySelector('.header');
    header.removeChild(header.querySelector('.add--blog'));
    const prevBtn = `<button onclick="showBlogs()" id="prev-btn"> <i class="fa-solid fa-arrow-left"></i> Go To Blogs</button>`
    header.innerHTML+=prevBtn
}

/// functio to handle the prev page navigation


document.querySelector('#add')?.addEventListener('click',()=>{
    const modal =document.querySelector('.modal');
    modal.style.top="-100%";
})







