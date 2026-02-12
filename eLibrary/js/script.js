$(document).ready(function () {
    // Mobile Menu Toggle
    $('.menu-toggle').on('click', function () {
        $('.sidebar').toggleClass('active');

        // Add overlay if needed, or just handle sidebar movement
    });

    // Close sidebar when clicking outside on mobile
    $(document).on('click', function (e) {
        if ($(window).width() <= 768) {
            if (!$(e.target).closest('.sidebar').length && !$(e.target).closest('.menu-toggle').length) {
                $('.sidebar').removeClass('active');
            }
        }
    });

    // Attendance Carousel
    const studentList = $('.student-list');
    const scrollAmount = 100; // Adjust scroll distance

    $('.nav-btn.next').on('click', function () {
        studentList.animate({
            scrollLeft: studentList.scrollLeft() + scrollAmount
        }, 300);
    });

    $('.nav-btn.prev').on('click', function () {
        studentList.animate({
            scrollLeft: studentList.scrollLeft() - scrollAmount
        }, 300);
    });
});
