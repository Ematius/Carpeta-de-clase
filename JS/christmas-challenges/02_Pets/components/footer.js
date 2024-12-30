
export function createFooter(){
    const body = document.querySelector('body');
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2023 Pet List App</p>
        `; 
    body.appendChild(footer);    
}