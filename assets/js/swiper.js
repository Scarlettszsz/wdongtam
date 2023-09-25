$(window)
    .resize(function () {
        if (window.innerWidth > 1200) {
            // 다바이스 크기가 1200px 이상일 때
            
            // S : PC 서브 스페셜 광고(pcSpecialAd)
            var pcSpecialAd = new Swiper(".pc_special_ad", {
                slidesPerView: 5,
                spaceBetween: 16,
                centeredSlides: false,
                loop: false,
                autoplay: {
                    delay: 2000,
                },
                pagination: {
                    el: ".swiper-pagination",
                },
            });

        } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
            // 다바이스 크기가 992px 이상일 때

            // S : PC 서브 스페셜 광고(pcSpecialAd)
            var pcSpecialAd = new Swiper(".pc_special_ad", {
                slidesPerView: 4,
                spaceBetween: 16,
                centeredSlides: false,
                loop: false,
                autoplay: {
                    delay: 2000,
                },
                pagination: {
                    el: ".swiper-pagination",
                },
            });

        } else if (window.innerWidth <= 992 && window.innerWidth > 500) {

            // S : 모바일 서브 스페셜 광고(specialAd)
            var specialAd = new Swiper(".special_ad", {
                slidesPerView: 3,
                spaceBetween: 16, // 슬라이드 여백
                centeredSlides: false, // 슬라이드 중앙정렬
                loop: false, // 무한반복
                slidesOffsetBefore: 20, // 슬라이드 오른쪽 여백
                slidesOffsetAfter: 20, // 슬라이드 오른쪽 여백
                autoplay: {
                    delay: 2000,
                },
            });

            // mainSwiper02
            var mainSwiper02 = new Swiper(".mainSwiper02", {
                slidesPerView: 3,
                spaceBetween: 20, // 슬라이드 여백
                centeredSlides: false, // 슬라이드 중앙정렬
                slidesOffsetBefore: 20, // 슬라이드 오른쪽 여백
                slidesOffsetAfter: 20, // 슬라이드 오른쪽 여백
                loop: false, // 무한반복
            });

        } else {
            // 디바이스 크기가 600px 이하일 때

            // S : 모바일 서브 스페셜 광고(specialAd)
            var specialAd = new Swiper(".special_ad", {
                slidesPerView: 1.8,
                spaceBetween: 16, // 슬라이드 여백
                centeredSlides: false, // 슬라이드 중앙정렬
                loop: false, // 무한반복
                slidesOffsetBefore: 20, // 슬라이드 오른쪽 여백
                slidesOffsetAfter: 20, // 슬라이드 오른쪽 여백
                autoplay: {
                    delay: 2000,
                },
            });

            // mainSwiper02
            var mainSwiper02 = new Swiper(".mainSwiper02", {
                slidesPerView: 2.3,
                spaceBetween: 20, // 슬라이드 여백
                centeredSlides: false, // 슬라이드 중앙정렬
                slidesOffsetBefore: 20, // 슬라이드 오른쪽 여백
                slidesOffsetAfter: 20, // 슬라이드 오른쪽 여백
                loop: false, // 무한반복
            });
        }
    })
    .resize();
