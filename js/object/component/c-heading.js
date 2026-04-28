export const initHeading = () =>{
    const headings = Array.from(document.querySelectorAll('.c-heading'));

    console.log("下線準備");

    if(headings.length === 0){
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        console.log("オブザーバーセット");
        entries.forEach(entry => {
            if(entry.isIntersecting){
                console.log("クラス適用");
                entry.target.classList.add('c-heading--is-active');
                observer.unobserve(entry.target);
            }
        });
    },{threshold:0.5});

    headings.forEach(h2 => observer.observe(h2));
};