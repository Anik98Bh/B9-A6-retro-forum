const loadData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    // 
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts)
    displayPost(posts)
}

const reloadData = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    // 
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts)
    displayPost(posts)
}

const loadtext = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const cards = await response.json();
    // console.log(cards)
    displayCard(cards)
}

const displayPost = (posts) => {

    const postContainer = document.getElementById('Post-container');
    postContainer.textContent = '';

    posts.forEach(post => {
        console.log(post)
        const postCard = document.createElement('div');
        postCard.classList = `card  bg-[#797DFC1A] shadow-xl my-4`;
        postCard.innerHTML = `
        <div class=" lg:flex gap-2 px-12 py-10">
            <div class="avatar online">
                <div class="w-24 h-24 rounded-full">
                    <img src="${post.image}" />
                </div>
            </div>
            <div class="card-body">
                <div class="flex font-medium">
                    <p># ${post.category}</p>
                    <p>Author : ${post.author.name}</p>
                </div>
                <h2 class="card-title">${post.title}</h2>
                <p>${post.description}</p>

                <hr class=" border-dashed bg-[#12132D] my-5">

                <div class="grid lg:flex justify-between items-center">
                    <div class="flex items-center gap-10">
                        <div class="flex gap-2">
                            <img src="./images/Group 13.svg" alt="">
                            <p>${post.comment_count}</p>
                        </div>
                        <div class="flex gap-2">
                            <img src="./images/Group 16.svg" alt="">
                            <p>${post.view_count}</p>
                        </div>
                        <div class="flex gap-2">
                            <img src="./images/Group 18.svg" alt="">
                            <p>${post.posted_time} min</p>
                        </div>
                    </div>
                    <div>
                        <button onclick="handleShowDetails()" class="btn btn-circle border-none">
                        <img src="./images/Group 40106.png" alt="">
                        </button>
                    </div>
                </div>
                
            </div>     
        </div>
        `;
        postContainer.appendChild(postCard);
    });
    toggleLoadingSpiner(false);
}

// const handleShowDetails = () => {
//     // console.log('show data')
//     const divWrapper = document.createElement('div');
//     divWrapper.style.display = 'flex';
//     divWrapper.style.justifyContent = 'space-between';
// }

const displayCard = (cards) => {
    // console.log(cards)
    const cardContainer = document.getElementById('card-container');

    cards.forEach(key => {
        // console.log(key)
        const cardSlort = document.createElement('div');
        cardSlort.classList = `card-body bg-[#797DFC1A] shadow-xl rounded-3xl`;
        cardSlort.innerHTML = `
        <div>
            <div class="">
                <img class="rounded-3xl"
                src="${key.cover_image}" alt="" />
            </div>
            <div class="flex gap-2 my-5">
                <img src="./images/boxx.svg" alt="">
                <p>${key.author.posted_date ? key.author.posted_date : 'no date publish'}</p>
            </div>
            <div class="">
                <h2 class="card-title mb-2">${key.title}</h2>
                <p>${key.description}</p>
                <div class="flex gap-4 mt-5">
                    <div class="avatar">
                        <div class="w-11 h-11 rounded-full">
                         <img src="${key.profile_image}" />
                        </div>
                    </div>
                    <div>
                        <h1 class="font-bold">${key.author.name}</h1>
                        <p>${key.author.designation ? key.author.designation : 'unknown'}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        cardContainer.appendChild(cardSlort);
    })
}

// handle search button
const handleSearch = () => {
    toggleLoadingSpiner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)
    // loadData();
    reloadData(searchText)
}

const toggleLoadingSpiner = (isLoding) => {
    const loadingSpiner = document.getElementById('loading-spiner');
    if (isLoding) {
        loadingSpiner.classList.remove('hidden');
    }
    else {
        loadingSpiner.classList.add('hidden');
    }
}





loadData()
loadtext()
