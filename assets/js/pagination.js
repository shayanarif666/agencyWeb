let totalPost = 100;
let postPerPage = 5;
let currPage = 1;
let pages = [];

for (let index = 1; index <= totalPost; index++) {
    if (index >= postPerPage) {
        postPerPage += 5;
        pages.push(currPage++);
    } 
}

export default pages;