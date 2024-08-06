export function loadContent (){
    const script = document.createElement('script');
    script.src = 'http://localhost:3500/output.js';
    script.onload = () => {
        const content = window.project1Content;
        const contentDiv = document.getElementById('project1-content');
        contentDiv.innerHTML = `<h1>${content}</h1>`
    }
    document.head.appendChild(script);
}