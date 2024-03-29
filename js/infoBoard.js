// 해시태그 클릭 시 해당 게시물 목록을 표시하도록 이벤트 추가
document.querySelectorAll('.hashtag_circle1').forEach(function (hashtag) {
    hashtag.addEventListener('click', changeBoardCategory);
});

// 해시태그 클릭 시 카테고리 변경 함수
function changeBoardCategory(event) {
    const clickedHashtag = event.currentTarget;
    const boardCategory = clickedHashtag.querySelector('.hashtag_title_text').textContent;
    const boardCategoryElement = document.querySelector('.board_category');
    if (boardCategoryElement) {
        boardCategoryElement.textContent = boardCategory;
    }

    // 클릭된 해시태그에 따라 해당하는 게시물 목록 표시
    if (boardCategory === '#카페') {
        showCafeBoard();
    } else if (boardCategory === '#맛집') {
        showRestaurantBoard();
    } else if (boardCategory === '#체험') {
        showExpBoard();
    } else if (boardCategory === '#공원') {
        showParkBoard();
    } else if (boardCategory === '#테마') {
        showThemBoard();
    } else if (boardCategory === '#공방') {
        showMakeBoard();
    } else if (boardCategory === '#축제') {
        showFestBoard();
    } else if (boardCategory === '#전시') {
        showShowBoard();
    } else if (boardCategory === '#야경') {
        showNightBoard();
    }
}

// 카페 게시물 목록 표시
function showCafeBoard() {
    document.getElementById('cafe_board').style.display = 'block';
    // 다른 게시물 숨기기
    document.getElementById('restaurant_board').style.display = 'none';
    document.getElementById('exp_board').style.display = 'none';
    document.getElementById('park_board').style.display = 'none';
    document.getElementById('them_board').style.display = 'none';
    document.getElementById('make_board').style.display = 'none';
    document.getElementById('fest_board').style.display = 'none';
    document.getElementById('show_board').style.display = 'none';
    document.getElementById('night_board').style.display = 'none';
}

// 맛집 게시물 목록 표시
function showRestaurantBoard() {
    document.getElementById('restaurant_board').style.display = 'block';
    // 다른 게시물 숨기기
    document.getElementById('cafe_board').style.display = 'none';
    document.getElementById('exp_board').style.display = 'none';
    document.getElementById('park_board').style.display = 'none';
    document.getElementById('them_board').style.display = 'none';
    document.getElementById('make_board').style.display = 'none';
    document.getElementById('fest_board').style.display = 'none';
    document.getElementById('show_board').style.display = 'none';
    document.getElementById('night_board').style.display = 'none';
}

// 체험 게시물 목록 표시
function showExpBoard() {
    document.getElementById('exp_board').style.display = 'block';
    // 다른 게시물 목록 숨기기
    document.getElementById('cafe_board').style.display = 'none';
    document.getElementById('restaurant_board').style.display = 'none';
    document.getElementById('park_board').style.display = 'none';
    document.getElementById('them_board').style.display = 'none';
    document.getElementById('make_board').style.display = 'none';
    document.getElementById('fest_board').style.display = 'none';
    document.getElementById('show_board').style.display = 'none';
    document.getElementById('night_board').style.display = 'none';
}

// 공원 게시물 목록 표시
function showParkBoard() {
    document.getElementById('park_board').style.display = 'block';
    // 다른 게시물 목록 숨기기
    document.getElementById('cafe_board').style.display = 'none';
    document.getElementById('restaurant_board').style.display = 'none';
    document.getElementById('exp_board').style.display = 'none';
    document.getElementById('them_board').style.display = 'none';
    document.getElementById('make_board').style.display = 'none';
    document.getElementById('fest_board').style.display = 'none';
    document.getElementById('show_board').style.display = 'none';
    document.getElementById('night_board').style.display = 'none';
}

// 테마 게시물 목록 표시
function showThemBoard() {
    document.getElementById('them_board').style.display = 'block';
    // 다른 게시물 목록 숨기기
    document.getElementById('cafe_board').style.display = 'none';
    document.getElementById('restaurant_board').style.display = 'none';
    document.getElementById('exp_board').style.display = 'none';
    document.getElementById('park_board').style.display = 'none';
    document.getElementById('make_board').style.display = 'none';
    document.getElementById('fest_board').style.display = 'none';
    document.getElementById('show_board').style.display = 'none';
    document.getElementById('night_board').style.display = 'none';
}

// 공방 게시물 목록 표시
function showMakeBoard() {
    document.getElementById('make_board').style.display = 'block';
    // 다른 게시물 목록 숨기기
    document.getElementById('cafe_board').style.display = 'none';
    document.getElementById('restaurant_board').style.display = 'none';
    document.getElementById('exp_board').style.display = 'none';
    document.getElementById('park_board').style.display = 'none';
    document.getElementById('them_board').style.display = 'none';
    document.getElementById('fest_board').style.display = 'none';
    document.getElementById('show_board').style.display = 'none';
    document.getElementById('night_board').style.display = 'none';
}

// 축제 게시물 목록 표시
function showFestBoard() {
    document.getElementById('fest_board').style.display = 'block';
    // 다른 게시물 목록 숨기기
    document.getElementById('cafe_board').style.display = 'none';
    document.getElementById('restaurant_board').style.display = 'none';
    document.getElementById('exp_board').style.display = 'none';
    document.getElementById('park_board').style.display = 'none';
    document.getElementById('them_board').style.display = 'none';
    document.getElementById('make_board').style.display = 'none';
    document.getElementById('show_board').style.display = 'none';
    document.getElementById('night_board').style.display = 'none';
}

// 전시 게시물 목록 표시
function showShowBoard() {
    document.getElementById('show_board').style.display = 'block';
    // 다른 게시물 목록 숨기기
    document.getElementById('cafe_board').style.display = 'none';
    document.getElementById('restaurant_board').style.display = 'none';
    document.getElementById('exp_board').style.display = 'none';
    document.getElementById('park_board').style.display = 'none';
    document.getElementById('them_board').style.display = 'none';
    document.getElementById('make_board').style.display = 'none';
    document.getElementById('fest_board').style.display = 'none';
    document.getElementById('night_board').style.display = 'none';
}

// 야경 게시물 목록 표시
function showNightBoard() {
    document.getElementById('night_board').style.display = 'block';
    // 다른 게시물 목록 숨기기
    document.getElementById('cafe_board').style.display = 'none';
    document.getElementById('restaurant_board').style.display = 'none';
    document.getElementById('exp_board').style.display = 'none';
    document.getElementById('park_board').style.display = 'none';
    document.getElementById('them_board').style.display = 'none';
    document.getElementById('make_board').style.display = 'none';
    document.getElementById('fest_board').style.display = 'none';
    document.getElementById('show_board').style.display = 'none';
}
