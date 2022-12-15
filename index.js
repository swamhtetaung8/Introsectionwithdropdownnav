const featureBtn = document.getElementById('feature-btn');
const companyBtn = document.getElementById('company-btn');
const featureBlog = document.getElementById('feature-blog');
const companyBlog = document.getElementById('company-blog');

featureBtn.addEventListener('click', () => {
    if (featureBlog.classList.contains('display-none')) {
        featureBlog.classList.remove('display-none')
    }
    else {
        featureBlog.classList.add('display-none')
    }
})

companyBtn.addEventListener('click', () => {
    if (companyBlog.classList.contains('display-none')) {
        companyBlog.classList.remove('display-none')
    }
    else {
        companyBlog.classList.add('display-none')
    }
})