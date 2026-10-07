/* =========================================================
   Bootstrap-Style Scroll Animation Utilities
   Uses IntersectionObserver for lightweight scroll detection.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const animatedElements = document.querySelectorAll(
        ".sa, " +
        ".sa-fade, " +
        ".sa-fade-up, " +
        ".sa-fade-down, " +
        ".sa-fade-left, " +
        ".sa-fade-right, " +
        ".sa-zoom, " +
        ".sa-zoom-out, " +
        ".sa-card, " +
        ".sa-blur, " +
        ".sa-rotate, " +
        ".sa-text-up, " +
        ".sa-text-left, " +
        ".sa-text-reveal, " +
        ".sa-text-mask, " +
        ".sa-line, " +
        ".sa-image, " +
        ".sa-image-reveal, " +
        ".sa-divider, " +
        ".sa-stagger"
    );

    if (!animatedElements.length) return;

    // Give staggered children their automatic indexes.
    document.querySelectorAll(".sa-stagger").forEach(group => {
        [...group.children].forEach((child, index) => {
            child.style.setProperty("--i", index);
        });
    });

    // IntersectionObserver avoids continuous scroll calculations.
    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");

                // Animate once, then stop observing this element.
                observer.unobserve(entry.target);
            });
        },
        {
            root: null,
            rootMargin: "0px 0px -8% 0px",
            threshold: 0.08
        }
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
