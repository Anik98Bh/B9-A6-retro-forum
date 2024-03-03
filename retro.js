const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts)
    displayPost(posts)
}

const displayPost = (posts) => {
    posts.forEach(post => {
        console.log(post)
        const postCard = document.createElement('div');
        postCard.classList = `card w-96 bg-[#F3F3F5] shadow-xl`;
        postCard.innerHTML=`
        
        `
    });
}





loadData()